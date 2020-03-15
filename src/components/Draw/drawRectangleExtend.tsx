import React, { CSSProperties } from 'react';

import { SimpleOptions, IMetric } from 'types';

import { PanelEditorProps, DataFrame } from '@grafana/data';
import { Tooltip } from '@grafana/ui';

import { LowerLimitClass } from 'Models/LowerLimitClass';
import { RegionClass, ICoord4D } from 'Models/RegionClass';

import { isNumFloat } from 'Functions/isNumFloat';
import { reqMetricRegion } from 'Functions/fetchMetrics';

interface IProps extends PanelEditorProps<SimpleOptions> {
	/** object CoordinateSpace */
	uneCoor: RegionClass;
	/** use limit */
	useLimit: boolean;
	/** limit */
	limit?: ICoord4D;
	/** id region */
	id: string;
	/** if button SimplePanel is active, block all onClick region space */
	isEnabled: boolean;
}

interface IState {
	/** value of tooltip */
	tooltipValue: JSX.Element;
	/** background color with lower limit */
	backgroundColor: string;
	/** border color with lower llimit */
	borderColor: string;
	/** size border with lower limit */
	sizeBorder: number;
	/** html result */
	htmlResult: JSX.Element;

}

interface ILowerLimit {
	/** color for background */
	colorBack: string;
	/** border color */
	colorBorder: string;
	/** size border */
	sizeBorder: number;
}

interface IColor {
	/** base color */
	color: string;
	/** transparency level */
	transparency: string;
}

/**
 * Draw rectangle
 */
export default class DrawRectangleExtend extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			tooltipValue: <div></div>,
			backgroundColor: 'rgba(255, 255, 255, 0)',
			borderColor: 'rgba(255, 255, 255, 0)',
			sizeBorder: 1,
			htmlResult: <div></div>,
		};
	}

	/** parse color for svg */
	public parseColor = (color: string): IColor => {
		let colorEdit: string = color;
		let transparency: string = '';
		if (color.indexOf('#') > -1) {
			colorEdit = color.replace('rgba', 'rgb');
			if (colorEdit.indexOf(',') > -1) {
				const arrayColor: string[] = colorEdit.split(',');
				colorEdit = arrayColor[0] + ',' + arrayColor[1] + ',' + arrayColor[2] + ')';
				if (arrayColor.length > 3) {
					transparency = arrayColor[3].replace(')', '');
				}
			}
		}
		return { 'color': colorEdit, 'transparency': transparency };
	}


	/**
	 * Edit color Zone in SVG
	 * @param {string} id id is equal to zone for change color in Svg
	 * @param {string} color define the color for Svg zone
	 */
	public editColorSvgZone = (id: string, color: string, border: string, sizeBorder: string): void => {
		const colorSVG: IColor = this.parseColor(color);
		const colorBorderSVG: IColor = this.parseColor(border);
		const changeColorElement = document.getElementById(id);

		if (changeColorElement) {
			changeColorElement.style.fill = colorSVG.color;
			changeColorElement.style.fillOpacity = colorSVG.transparency;
			changeColorElement.style.stroke = colorBorderSVG.color;
			changeColorElement.style.strokeOpacity = colorBorderSVG.transparency;
			changeColorElement.style.strokeWidth = sizeBorder;
			// changeColorElement.addEventListener('load', () => {
			// 	changeColorElement.addEventListener('mouseover', () => console.log('over'));
			// 	changeColorElement.addEventListener('mouseout', () => console.log('out'));
			// });
		}
	}

	/**
	 * Check limit of coordinate
	 * @param {number} value number to test
	 * @param {number} position 1 if xMin, 2 if xMax, 3 if yMin, 4 if yMax
	 * @returns 0 if it's good or 1 otherwise
	 */
	public verifLimit = (intValue: number, position: number): number => {
		const { useLimit, limit } = this.props;

		if (!useLimit) {
			return (0);
		}
		if (limit) {
			if (position === 1 || position === 2) {
				if (parseInt(limit.xMin, 10) <= intValue
					&& parseInt(limit.xMax, 10) >= intValue) {
					return (intValue);
				} else {
					return (position === 1 ? parseInt(limit.xMin, 10)
						: parseInt(limit.xMax, 10));
				}
			} else if (position === 3 || position === 4) {
				if (parseInt(limit.yMin, 10) <= intValue
					&& parseInt(limit.yMax, 10) >= intValue) {
					return (intValue);
				} else {
					return (position === 3 ? parseInt(limit.yMin, 10)
						: parseInt(limit.yMax, 10));
				}
			}
		}
		return (0);
	}


	/**
	 * Transform coordinate percent for css
	 * @param {number} size value of coordinate
	 * @param {boolean} isMax true if x or y is max value
	 * @returns coordinate to percent
	 */
	public transformCoordonneesToPx = (
		size: number,
		isMax: boolean
	): number => {
		const maxSize: number = 100;
		const minSize: number = -100;
		const midSize: number = 50;

		if (size > maxSize) {
			size = maxSize;
		} else if (size < 0 && size < minSize) {
			size = minSize;
		}
		if (size >= 0) {
			size /= 2;
			size = (isMax) ? midSize - size : midSize + size;
		} else {
			size *= -1;
			size /= 2;
			size = midSize - size;
		}
		return size;
	}

	/**
	 * Get color with lower limit and prometheus value
	 * @returns {ILowerLimit} new color value
	 */
	public getLowerLimit = (value?: number): ILowerLimit => {
		const lowerLimit: LowerLimitClass[] = this.props.uneCoor.lowerLimit;
		const result: ILowerLimit = { 'colorBack': '', 'colorBorder': '', 'sizeBorder': 0 };

		if (this.props.uneCoor.colorMode && value) {
			for (const line of lowerLimit) {
				const min: string = line.lowerLimitMin.replace('>', '');
				const minFloat: number = parseFloat(min);
				const maxFloat: number = parseFloat(line.lowerLimitMax);
				if ((minFloat <= value || (!line.lowerLimitMin))
					&& (maxFloat >= value || (!line.lowerLimitMax))) {
					if (lowerLimit.length > 0) {
						result.colorBack = this.props.uneCoor.traceBack ? line.backColor : '';
						result.colorBorder = this.props.uneCoor.traceBorder ? line.borderColor : '';
						result.sizeBorder = this.props.uneCoor.traceBorder ? parseInt(line.sizeBorder, 10) : 0;
						break;
					}
				}
			}
		} else {
			if (lowerLimit.length > 0) {
				result.colorBack = this.props.uneCoor.traceBack ? lowerLimit[0].backColor : '';
				result.colorBorder = this.props.uneCoor.traceBorder ? lowerLimit[0].borderColor : '';
				result.sizeBorder = this.props.uneCoor.traceBorder ? parseInt(lowerLimit[0].sizeBorder, 10) : 0;
			}
		}
		return (result);
	}

	/** search is key and keyValue is in name query */
	public searchNameIsKey = (query: DataFrame, mainMetric: IMetric): boolean => {
		if (mainMetric.key === '' && mainMetric.keyValue === '') {
			return true;
		}
		const nameQuery: string[] = query.name?.split(',').map((value) => {
			return value.replace(/[\"{}]/gm, '');
		}) || [];
		if (nameQuery && nameQuery.length > 0) {
			for (const oneQuery of nameQuery) {
				const keyValue: string[] = oneQuery.split('=');
				if (oneQuery.length === 2) {
					console.log(keyValue);
					if (keyValue[0] === mainMetric.key
						&& keyValue[1] === mainMetric.keyValue) {
						return true;
					}
				}
			}
		}
		return false;
	}

	/** axios requete to test */
	public reqAxios = () => {
		const styleTooltip = {
			color: this.props.uneCoor.textObj.colorText,
			backgroundColor: this.props.uneCoor.textObj.colorBack,
		} as CSSProperties;
		let region: RegionClass = this.props.uneCoor;
		const debug: number[] = [];
console.log(this.props.data);
		reqMetricRegion(region, this.props);
		if (region.mainMetric.returnQuery
			&& region.mainMetric.returnQuery.length > 0) {
			let cnt: number = 0;
			let countValue: number = 0;
			const sizeQuery: number = region.mainMetric.returnQuery?.length || 0;

			for (const line of region.mainMetric.returnQuery) {
				// console.log(line);
				if (region.label === 'PC 2') {
					console.log(this.searchNameIsKey(line, region.mainMetric).toString()
						+ ' - ' + (line.name || 'null'));
				}
				for (let i: number = 0; i < sizeQuery; i++) {
					if (line.fields[0].values.get(i)) {
						cnt += line.fields[0].values.get(i);
						debug.push(line.fields[0].values.get(i));
						++countValue;
					}
				}
			}
			cnt /= countValue;
			// console.log('Prometheus data: ' + cnt.toString());
			// console.log(debug);
			// console.log(debug.length);


			const lowerLimit: ILowerLimit = this.getLowerLimit(cnt);

			if (this.props.isEnabled) {
				this.setState({
					tooltipValue: <div style={styleTooltip}>
						<a href={region.linkURL.hoveringTooltipLink}>
							{region.linkURL.hoveringTooltipText}
						</a>
						<p>{region.mainMetric.keyValue}</p>
						<p>{cnt.toString() + ' ' + region.textObj.unit}</p>
					</div>,
					backgroundColor: lowerLimit.colorBack,
					borderColor: lowerLimit.colorBorder,
					sizeBorder: lowerLimit.sizeBorder,
				});
			} else {
				this.setState({
					tooltipValue: <div style={styleTooltip}>
						<p>{region.mainMetric.keyValue}</p>
						<p>{cnt.toString() + ' ' + region.textObj.unit}</p>
					</div>,
					backgroundColor: lowerLimit.colorBack,
					borderColor: lowerLimit.colorBorder,
					sizeBorder: lowerLimit.sizeBorder,
				});
			}
			if (this.props.uneCoor.mode) {
				this.editColorSvgZone(this.props.uneCoor.idSVG,
					lowerLimit.colorBack, lowerLimit.colorBorder, lowerLimit.sizeBorder.toString());
			}
		} else {
			const lowerLimit: ILowerLimit = this.getLowerLimit();

			if (this.props.uneCoor.mode) {
				this.editColorSvgZone(this.props.uneCoor.idSVG,
					lowerLimit.colorBack, lowerLimit.colorBorder, lowerLimit.sizeBorder.toString());
			}

			if (this.props.isEnabled) {
				this.setState({
					tooltipValue: <div style={styleTooltip}>
						<a href={this.props.uneCoor.linkURL.hoveringTooltipLink}>
							{this.props.uneCoor.linkURL.hoveringTooltipText}
						</a>
						<p>NaN</p>
					</div>,
					backgroundColor: lowerLimit.colorBack,
					borderColor: lowerLimit.colorBorder,
					sizeBorder: lowerLimit.sizeBorder,
				});
			} else {
				this.setState({
					tooltipValue: <div style={styleTooltip}>
						<p>NaN</p>
					</div>,
					backgroundColor: lowerLimit.colorBack,
					borderColor: lowerLimit.colorBorder,
					sizeBorder: lowerLimit.sizeBorder,
				});
			}
		}
	}

	/**
	 * update props
	 * @param prevProps
	 */
	public componentDidUpdate(prevProps: IProps, prevState: IState) {
		if (prevProps.isEnabled !== this.props.isEnabled) {
			this.componentDidMount();
		}
	}

	/** load prometheus value */
	public componentDidMount = async () => {
		await Promise.resolve('Success').then(() => {
			this.reqAxios();
		});
		await Promise.resolve('Success').then(() => {
			this.renduFinal();
		});
	}

	public renduFinal = () => {
		if (this.props.uneCoor.mode) {
			return;
		}
		const line: RegionClass = this.props.uneCoor;
		let pLeft: string;
		let pRight: string;
		let pTop: string;
		let pBottom: string;
		let xMin: number = 0;
		let xMax: number = 0;
		let yMin: number = 0;
		let yMax: number = 0;
		const pBorder: string = this.state.sizeBorder.toString() + 'px solid ' + this.state.borderColor;
		xMin = (isNumFloat(line.coords.xMin)) ? parseInt(line.coords.xMin, 10) : 0;
		xMax = (isNumFloat(line.coords.xMax)) ? parseInt(line.coords.xMax, 10) : 0;
		yMin = (isNumFloat(line.coords.yMin)) ? parseInt(line.coords.yMin, 10) : 0;
		yMax = (isNumFloat(line.coords.yMax)) ? parseInt(line.coords.yMax, 10) : 0;
		if (this.props.useLimit) {
			xMin = this.verifLimit(xMin, 1);
			xMax = this.verifLimit(xMax, 2);
			yMin = this.verifLimit(yMin, 3);
			yMax = this.verifLimit(yMax, 4);
		}
		if (xMax >= 0) {
			pLeft = this.transformCoordonneesToPx(xMin, false).toString() + '%';
			pRight = this.transformCoordonneesToPx(xMax, true).toString() + '%';
		} else {
			xMin = xMin * -1;
			pRight = this.transformCoordonneesToPx(xMin, false).toString() + '%';
			pLeft = this.transformCoordonneesToPx(xMax, true).toString() + '%';
		}
		if (yMax >= 0) {
			pBottom = this.transformCoordonneesToPx(yMin, false).toString() + '%';
			pTop = this.transformCoordonneesToPx(yMax, true).toString() + '%';
		} else {
			yMin = yMin * -1;
			pTop = this.transformCoordonneesToPx(yMin, false).toString() + '%';
			pBottom = this.transformCoordonneesToPx(yMax, true).toString() + '%';
		}

		const backColor: string = line.textObj.colorBack;
		const textColor: string = line.textObj.colorText;
		const fontStyle: string = line.textObj.styleText;

		const styleDiv = {
			border: pBorder,
			bottom: pBottom,
			left: pLeft,
			position: 'absolute',
			right: pRight,
			top: pTop,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			background: 'url(' + this.props.uneCoor.img + ') no-repeat center center',
			backgroundColor: this.state.backgroundColor,
			backgroundSize: 'contain',
			cursor: 'pointer',
		} as React.CSSProperties;

		const styleTextDiv = {
			backgroundColor: backColor,
			fontStyle: fontStyle,
			color: textColor,
			verticalAlign: 'middle',
		} as React.CSSProperties;

		if (this.props.isEnabled) {
			this.setState({
				htmlResult: <Tooltip content={this.state.tooltipValue}>
					<a href={this.props.uneCoor.linkURL.followLink}>
						<div style={styleDiv} id={this.props.id} >
							{
								!this.props.uneCoor.textObj.isTextRegion &&
								<div style={styleTextDiv}>
									{this.props.uneCoor.label}
								</div>
							}
						</div>
					</a>
				</Tooltip>,
			}
			);

		} else {
			this.setState({
				htmlResult: <Tooltip content={this.state.tooltipValue}>
					<div style={styleDiv} id={this.props.id} >
						{
							!this.props.uneCoor.textObj.isTextRegion &&
							<div style={styleTextDiv}>
								{this.props.uneCoor.label}
							</div>
						}
						<h3>coucou</h3>
					</div>
				</Tooltip>,
			}
			);
		}
	}

	/** render */
	public render() {
		return (
			<div>
				{this.state.htmlResult}
			</div >
		);
	}
}
