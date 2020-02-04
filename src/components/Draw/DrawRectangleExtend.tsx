import { EspaceCoordonneesExtendClass } from 'Models/EspaceCoordonneesExtendClass';
import { EspaceCoordonneesClass } from 'Models/EspaceCoordonneesClass';
import { Tooltip } from '@grafana/ui';
import React from 'react';

import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from 'types';

import { isNumFloat } from 'Functions/isNumFloat';

interface IProps extends PanelEditorProps<SimpleOptions> {
	/**
	 * color of border
	 */
	color: string;
	/**
	 * object EspaceCoordonnees
	 */
	uneCoor: EspaceCoordonneesExtendClass;
	/**
	 * use limit
	 */
	useLimit: boolean;
	/**
	 * limit
	 */
	limit?: EspaceCoordonneesClass;

	/** data in tooltip */
	contentTooltip: JSX.Element;
}

// tslint:disable-next-line: no-empty-interface
interface IState {
	/** value to tooltip in a html type */
	htmlValue: JSX.Element;
	/** active sync data of prometheus for tooltip */
	activeSync: boolean;
}

/**
 * Draw rectangle
 */
export default class DrawRectangleExtend extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			htmlValue: <div><p>{this.props.uneCoor.label}</p></div>,
			activeSync: true,
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

	/** promise htmlValue */
	public setAsyncActiveSync = async (state: {
		/** name of variable */
		activeSync: boolean,
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

	/**
	 * fill coordinate for display
	 */
	public fillTooltip = (): JSX.Element => {
		const line: EspaceCoordonneesExtendClass = this.props.uneCoor;
		let left: string;
		let right: string;
		let top: string;
		let bottom: string;
		let xMin: number = 0;
		let xMax: number = 0;
		let yMin: number = 0;
		let yMax: number = 0;
		const border: string = '1px solid ' + this.props.color;

		if (this.state.activeSync) {
			const axios = require('axios');
			axios.get('http://localhost:9090/api/v1/query?query=' + this.props.uneCoor.interfaceJson)
				.then((response: any) => {
					let i: number = 0;
					let cnt: number = 0;

					for (const line of response.data.data.result) {
						cnt += parseFloat(line.value[1]);
						++i;
					}
					cnt /= i;
					this.setAsyncHtmlValue({
						htmlValue: <div>
							<p>{this.props.uneCoor.label}</p>
							<p>{this.props.uneCoor.interfaceJson}</p>
							<p>{cnt.toString()}</p>
						</div>,
					});
				})
				.catch((error: any) => {
					console.log(error);
					this.setAsyncHtmlValue({
						htmlValue: <div>
							<p>{this.props.uneCoor.label}</p>
							<p>{this.props.uneCoor.interfaceJson}</p>
							<p>NaN</p>
						</div>,
					});
				});
			this.setState({
				activeSync: false,
			});
		}

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
			left = this.transformCoordonneesToPx(xMin, false, 1).toString() + '%';
			right = this.transformCoordonneesToPx(xMax, true, 2).toString() + '%';
		} else {
			xMin = xMin * -1;
			right = this.transformCoordonneesToPx(xMin, false, 1).toString() + '%';
			left = this.transformCoordonneesToPx(xMax, true, 2).toString() + '%';
		}
		if (yMax >= 0) {
			bottom = this.transformCoordonneesToPx(yMin, false, 3).toString() + '%';
			top = this.transformCoordonneesToPx(yMax, true, 4).toString() + '%';
		} else {
			yMin = yMin * -1;
			top = this.transformCoordonneesToPx(yMin, false, 3).toString() + '%';
			bottom = this.transformCoordonneesToPx(yMax, true, 4).toString() + '%';
		}

		const backColor: string = this.props.options.valueTextObject.colorBackRegion;
		const textColor: string = this.props.options.valueTextObject.colorTextRegion;

		return (
			<Tooltip content={this.state.htmlValue} >
				<div style={{
					'border': border,
					'bottom': bottom,
					'left': left,
					'position': 'absolute',
					'right': right,
					'top': top,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					background: 'url(' + this.props.uneCoor.img + ') no-repeat center center',
					backgroundSize: 'contain',
				}}>
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

	componentWillReceiveProps = () => {
		this.setState({
			activeSync: true,
		});
	}

	/**
	 * render
	 */
	public render() {
		return (
			<div>
				{this.fillTooltip()}
			</div >
		);
	}
}
