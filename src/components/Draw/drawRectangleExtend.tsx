import { CoordinateSpaceExtendClass } from 'Models/CoordinateSpaceExtendClass';
import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';
import { Tooltip } from '@grafana/ui';
import React, { CSSProperties } from 'react';

import { PanelEditorProps, DataFrame } from '@grafana/data';
import { SimpleOptions } from 'types';

import { isNumFloat } from 'Functions/isNumFloat';

interface IProps extends PanelEditorProps<SimpleOptions> {
	/**
	 * color of border
	 */
	color: string;
	/**
	 * object CoordinateSpace
	 */
	uneCoor: CoordinateSpaceExtendClass;
	/**
	 * use limit
	 */
	useLimit: boolean;
	/**
	 * limit
	 */
	limit?: CoordinateSpaceClass;

	/** data in tooltip */
	contentTooltip: JSX.Element;

	/**
	 * to do
	 */
	id: string;
}

// tslint:disable-next-line: no-empty-interface
interface IState {
	/** final html */
	htmlValue: JSX.Element;
	/** value of tooltip */
	tooltipValue: JSX.Element;
	/** active sync data of prometheus for tooltip */
	// activeSync: boolean;
}

/**
 * Draw rectangle
 */
export default class DrawRectangleExtend extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			htmlValue: <div><p>{this.props.uneCoor.label}</p></div>,
			tooltipValue: <div></div>,
			// activeSync: true,
		};
	}

	/** promise htmlValue */
	public setAsyncHtmlValue = async (state: {
		/** name of variable */
		htmlValue: JSX.Element,
	}) => {
		return await new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/** promise tooltipValue */
	public setAsyncTooltipValue = async (state: {
		/** name of variable */
		tooltipValue: JSX.Element,
	}) => {
		return await new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/**
	 * verif limit of coordinate
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
		size: number, isMax: boolean, position: number): number => {
		if (size > 100) {
			size = 100;
		} else if (size < 0 && size < -100) {
			size = -100;
		}
		if (size >= 0) {
			size /= 2;
			if (isMax) {
				size = 50 - size;
			} else {
				size = 50 + size;
			}
		} else {
			size *= -1;
			size /= 2;
			if (isMax) {
				size = 50 - size;
			} else {
				size = 50 - size;
			}
		}
		return size;
	}

	/** axios requete to test */
	public reqAxios = () => {
		const styleTooltip = {
			color: this.props.uneCoor.textObject.colorTextBulle,
			backgroundColor: this.props.uneCoor.textObject.colorBackBulle,
		} as CSSProperties;
		// setInterval(() => {

		// const { dataQuery } = this.props.uneCoor;
		let data: DataFrame = { 'fields': [], 'length': 0 };
		for (const line of this.props.data.series) {
			if (line.refId === this.props.uneCoor.dataQuery?.refId) {
				data = line;
			}
		}

		if (data.fields.length > 0 && data.fields[0].values) {
			let cnt: number = 0;
			const sizeQuery: number = data.fields[0].values.length;
			for (let i: number = 0; i < sizeQuery; i++) {
				if (data.fields[0].values.get(i)) {
					cnt += data.fields[0].values.get(i);
				}
			}
			cnt /= sizeQuery;

			this.setState({
				tooltipValue: <div style={styleTooltip}>
					<a href={this.props.uneCoor.parametrageMetric.hoveringTooltipLink}>
						{this.props.uneCoor.parametrageMetric.hoveringTooltipText}
					</a>
					<p>{this.props.uneCoor.valueKey}</p>
					<p>{cnt.toString()}</p>
				</div>,
			});
		} else {
			this.setState({
				tooltipValue: <div style={styleTooltip}>
					<a href={this.props.uneCoor.parametrageMetric.hoveringTooltipLink}>
						{this.props.uneCoor.parametrageMetric.hoveringTooltipText}
					</a>
					<p>{this.props.uneCoor.interfaceJson}</p>
					<p>NaN</p>
				</div>,
			});
		}
		// }, 1000);
	}

	/**
	 * update props
	 * @param prevProps
	 */
	public componentDidUpdate(prevProps: IProps) {
		if (prevProps.uneCoor !== this.props.uneCoor
			|| prevProps.useLimit !== this.props.useLimit
			|| prevProps.contentTooltip !== this.props.contentTooltip
			|| prevProps.data.series !== this.props.data.series) {
			console.log('am here');
			this.reqAxios();
		}
	}

	/** load prometheus value */
	public componentDidMount = () => {
		this.reqAxios();
	}

	/**
	 * render
	 */
	public render() {
		const line: CoordinateSpaceExtendClass = this.props.uneCoor;
		let pLeft: string;
		let pRight: string;
		let pTop: string;
		let pBottom: string;
		let xMin: number = 0;
		let xMax: number = 0;
		let yMin: number = 0;
		let yMax: number = 0;
		const pBorder: string = '1px solid ' + this.props.color;

		xMin = (isNumFloat(line.xMin)) ? parseInt(line.xMin, 10) : 0;
		xMax = (isNumFloat(line.xMax)) ? parseInt(line.xMax, 10) : 0;
		yMin = (isNumFloat(line.yMin)) ? parseInt(line.yMin, 10) : 0;
		yMax = (isNumFloat(line.yMax)) ? parseInt(line.yMax, 10) : 0;

		if (this.props.useLimit) {
			xMin = this.verifLimit(xMin, 1);
			xMax = this.verifLimit(xMax, 2);
			yMin = this.verifLimit(yMin, 3);
			yMax = this.verifLimit(yMax, 4);
		}

		if (xMax >= 0) {
			pLeft = this.transformCoordonneesToPx(xMin, false, 1).toString() + '%';
			pRight = this.transformCoordonneesToPx(xMax, true, 2).toString() + '%';
		} else {
			xMin = xMin * -1;
			pRight = this.transformCoordonneesToPx(xMin, false, 1).toString() + '%';
			pLeft = this.transformCoordonneesToPx(xMax, true, 2).toString() + '%';
		}
		if (yMax >= 0) {
			pBottom = this.transformCoordonneesToPx(yMin, false, 3).toString() + '%';
			pTop = this.transformCoordonneesToPx(yMax, true, 4).toString() + '%';
		} else {
			yMin = yMin * -1;
			pTop = this.transformCoordonneesToPx(yMin, false, 3).toString() + '%';
			pBottom = this.transformCoordonneesToPx(yMax, true, 4).toString() + '%';
		}

		const backColor: string = this.props.uneCoor.textObject.colorBackRegion;
		const textColor: string = this.props.uneCoor.textObject.colorTextRegion;

		return (
			<Tooltip content={this.state.tooltipValue}>
				<div style={{
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
					backgroundSize: 'contain',
					cursor: 'pointer',
				}} id={this.props.id}>
					<div style={{
						backgroundColor: backColor,
						color: textColor,
						verticalAlign: 'middle',
					}}>
						{this.props.uneCoor.label}
					</div>
				</div>
			</Tooltip >
		);
	}
}
