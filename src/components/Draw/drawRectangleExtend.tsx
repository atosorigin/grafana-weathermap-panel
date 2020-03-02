import React, { CSSProperties } from 'react';

import { SimpleOptions } from 'types';

import { PanelEditorProps } from '@grafana/data';
import { Tooltip } from '@grafana/ui';

import { CoordinateSpaceInitialClass } from 'Models/CoordinateSpaceInittialClass';
import { LowerLimitClass } from 'Models/LowerLimitClass';
import { RegionClass } from 'Models/RegionClass';

import { isNumFloat } from 'Functions/isNumFloat';
import { reqMetricRegion } from 'Functions/fetchMetrics';

interface IProps extends PanelEditorProps<SimpleOptions> {
	/** color of border */
	color: string;
	/** object CoordinateSpace */
	uneCoor: RegionClass;
	/** use limit */
	useLimit: boolean;
	/** limit */
	limit?: CoordinateSpaceInitialClass;
	/** data in tooltip */
	contentTooltip: JSX.Element;
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
				const min: string = line.seuilMin.replace('>', '');
				const minFloat: number = parseFloat(min);
				const maxFloat: number = parseFloat(line.seuilMax);
				if ((minFloat <= value || (!line.seuilMin))
					&& (maxFloat >= value || (!line.seuilMax))) {
					if (lowerLimit.length > 0) {
						result.colorBack = this.props.uneCoor.traceBack ? line.couleurFond : '';
						result.colorBorder = this.props.uneCoor.traceBorder ? line.couleurContour : '';
						result.sizeBorder = this.props.uneCoor.traceBorder ? parseInt(line.sizeContour, 10) : 0;
						break;
					}
				}
			}
		} else {
			if (lowerLimit.length > 0) {
				result.colorBack = this.props.uneCoor.traceBack ? lowerLimit[0].couleurFond : '';
				result.colorBorder = this.props.uneCoor.traceBorder ? lowerLimit[0].couleurContour : '';
				result.sizeBorder = this.props.uneCoor.traceBorder ? parseInt(lowerLimit[0].sizeContour, 10) : 0;
			}
		}
		return (result);
	}

	/** axios requete to test */
	public reqAxios = () => {
		const styleTooltip = {
			color: this.props.uneCoor.textObj.colorText,
			backgroundColor: this.props.uneCoor.textObj.colorBack,
		} as CSSProperties;
		let region: RegionClass = this.props.uneCoor;

		reqMetricRegion(region, this.props);
		if (region.mainMetric.returnQuery
			&& region.mainMetric.returnQuery.fields.length > 0
			&& region.mainMetric.returnQuery.fields[0].values) {
			let cnt: number = 0;
			const sizeQuery: number = region.mainMetric.returnQuery?.length || 0;

			for (let i: number = 0; i < sizeQuery; i++) {
				if (region.mainMetric.returnQuery.fields[0].values.get(i)) {
					cnt += region.mainMetric.returnQuery.fields[0].values.get(i);
				}
			}
			cnt /= sizeQuery;

			const lowerLimit: ILowerLimit = this.getLowerLimit(cnt);

			this.setState({
				tooltipValue: <div style={styleTooltip}>
					<a href={region.linkURL.hoveringTooltipLink}>
						{region.linkURL.hoveringTooltipText}
					</a>
					<p>{region.mainMetric.keyValue}</p>
					<p>{cnt.toString() + ' ' + region.textObj.unite}</p>
				</div>,
				backgroundColor: lowerLimit.colorBack,
				borderColor: lowerLimit.colorBorder,
				sizeBorder: lowerLimit.sizeBorder,
			});
			// }
		} else {
			const lowerLimit: ILowerLimit = this.getLowerLimit();

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
		// if (prevProps.uneCoor !== this.props.uneCoor
		// 	|| prevProps.contentTooltip !== this.props.contentTooltip
		// 	|| prevProps.data.series !== this.props.data.series) {
		// 	this.reqAxios();
		// }
		// if (prevState.tooltipValue !== this.state.tooltipValue
		// 	|| prevState.backgroundColor !== this.state.backgroundColor
		// 	|| prevState.borderColor !== this.state.borderColor
		// 	|| prevState.sizeBorder !== this.state.sizeBorder) {
		// 	this.renduHTML();
		// }
	}

	/** load prometheus value */
	public componentDidMount = async () => {
		await Promise.resolve('Success').then(() => {
			this.reqAxios();
		});
		this.renduHTML();
	}

	/** rendu html. Update when tooltipValue state change */
	public renduHTML = () => {
		// const coordinate: RegionClass = this.props.uneCoor;
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
