import { CoordinateSpaceInitialClass } from 'Models/CoordinateSpaceInittialClass';
import React from 'react';

import { isNumFloat } from 'Functions/isNumFloat';

interface IProps {
	/**
	 * color of border
	 */
	color: string;
	/**
	 * object CoordinateSpace
	 */
	uneCoor: CoordinateSpaceInitialClass;

	/**
	 * to do
	 */
	id: string;
}

// tslint:disable-next-line: no-empty-interface
interface IState {
	/** stock html for result */
	resultHTML: JSX.Element;
}

/**
 * Draw inititial viewing space rectangle
 */
export default class DrawRectangle extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			resultHTML: <div></div>,
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

	/** creaate rectrangle */
	public createRectangle = (): void => {
		const line: CoordinateSpaceInitialClass = this.props.uneCoor;
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
		const data: JSX.Element = <div style={{
			border: pBorder,
			bottom: pBottom,
			left: pLeft,
			position: 'absolute',
			right: pRight,
			top: pTop,
		}} id={this.props.id}>
		</div>;
		this.setState({
			resultHTML: data,
		});
	}

	/** update state when props uneCoor change */
	public componentDidUpdate(prevProps: IProps) {
		if (prevProps.uneCoor !== this.props.uneCoor) {
			this.createRectangle();
		}
	}

	/**
	 * render
	 */
	public render() {

		return (
			<div>
				{
					this.state.resultHTML
				}
			</div >
		);
	}
}
