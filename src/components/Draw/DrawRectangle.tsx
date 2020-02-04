import { EspaceCoordonneesClass } from 'Models/EspaceCoordonneesClass';
import React from 'react';

import { isNumFloat } from 'Functions/isNumFloat';

interface IProps {
	/**
	 * color of border
	 */
	color: string;
	/**
	 * object EspaceCoordonnees
	 */
	uneCoor: EspaceCoordonneesClass;
}

// tslint:disable-next-line: no-empty-interface
interface IState {
}

/**
 * Draw rectangle
 */
export default class DrawRectangle extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
		};
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

	public fillTooltip = (): JSX.Element => {
		const line: EspaceCoordonneesClass = this.props.uneCoor;
		let left: string;
		let right: string;
		let top: string;
		let bottom: string;
		let xMin: number = 0;
		let xMax: number = 0;
		let yMin: number = 0;
		let yMax: number = 0;
		const border: string = '1px solid ' + this.props.color;

		xMin = (isNumFloat(line.xMin)) ? parseInt(line.xMin, 10) : 0;
		xMax = (isNumFloat(line.xMax)) ? parseInt(line.xMax, 10) : 0;
		yMin = (isNumFloat(line.yMin)) ? parseInt(line.yMin, 10) : 0;
		yMax = (isNumFloat(line.yMax)) ? parseInt(line.yMax, 10) : 0;

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
		return (
			<div style={{
				'border': border,
				'bottom': bottom,
				'left': left,
				'position': 'absolute',
				'right': right,
				'top': top,
			}}>
			</div>
		);
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
