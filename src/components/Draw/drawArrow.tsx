import React from 'react';
import { SelectableValue } from '@grafana/data';
import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';

interface IProps {

	coordinateSpace: SelectableValue<CoordinateSpaceClass>;
	drawGraphicmarker: SelectableValue<string>;
	shape: SelectableValue<string>;
	sizeWidth: SelectableValue<string>;
	sizeHeight: SelectableValue<string>;
	rotate: string;
	positionShapeX: string;
	positionShapeY: string;
	label: string;
	positionLabelX: string;
	positionLabelY: string;
	color: string;
	height: number;
	police: string;
	sizePolice: string;
	idPoint: string;
}

interface IState {
}

export default class DrawArrow extends React.Component<IProps, IState> {

	constructor(props: IProps) {
		super(props);
		this.state = {
		};
	}

	public defineLimitX(coordinateX: number, coordinateSpace: SelectableValue<CoordinateSpaceClass>) {

		let result: number = coordinateX;

		if (coordinateSpace.value === undefined) {
			if (coordinateX > 100) {
				result = 100;
			}
			if (coordinateX < -100) {
				result = -100;
			}
		} else {

			const xMin = parseInt(coordinateSpace.value.xMin, 10);
			const xMax = parseInt(coordinateSpace.value.xMax, 10);

			if (xMax < 0) {
				if (coordinateX < xMax) {
					result = xMax;
				} else if (coordinateX > xMin) {
					result = xMin;
				}
			} else {
				if (coordinateX > xMax) {
					result = xMax;
				} else if (coordinateX < xMin) {
					result = xMin;
				}
			}
		}
		return result;
	}

	public defineLimitY(coordinateY: number, coordinateSpace: SelectableValue<CoordinateSpaceClass>) {

		let result: number = coordinateY;

		if (coordinateSpace.value === undefined) {
			if (coordinateY > 100) {
				coordinateY = 100;
			}
			if (coordinateY < -100) {
				coordinateY = -100;
			}
		} else {
			const yMin: number = parseInt(coordinateSpace.value.yMin, 10);
			const yMax: number = parseInt(coordinateSpace.value.yMax, 10);

			if (yMax < 0) {
				if (coordinateY < yMax) {
					result = yMax;
				} else if (coordinateY > yMin) {
					result = yMin;
				}
			} else {
				if (coordinateY > yMax) {
					result = yMax;
				} else if (coordinateY < yMin) {
					result = yMin;
				}
			}
		}
		return result;
	}

	public defineSizeWidth(size: string): number {
		let sizeInt: number = 0;
		if (size === 'small') {
			sizeInt = 20;
		} else if (size === 'medium') {
			sizeInt = 40;
		} else if (size === 'large') {
			sizeInt = 60;
		}
		return sizeInt;
	}

	public defineSizeHeight(size: string): number {
		let sizeInt: number = 0;
		if (size === 'small') {
			sizeInt = 5;
		} else if (size === 'medium') {
			sizeInt = 10;
		} else if (size === 'large') {
			sizeInt = 20;
		}
		return sizeInt;
	}


	public definePositionArrowX(positionX: number,
		coordinateSpace: SelectableValue<CoordinateSpaceClass>,
		defineCenter: number, width: number): number {

			if (coordinateSpace.value === undefined) {
				return ((this.defineLimitX(positionX, coordinateSpace) * (defineCenter / 100)) + defineCenter - width);
			} else {
				const xMin: number = parseInt(coordinateSpace.value.xMin, 10);
				const xMax: number = parseInt(coordinateSpace.value.xMax, 10);
				const xMid: number = (xMin + xMax) / 2;
				return ((this.defineLimitX(positionX + xMid, coordinateSpace) * (defineCenter / 100)) + defineCenter - width);
			}
	}

	public definePositionArrowY(positionY: number,
		coordinateSpace: SelectableValue<CoordinateSpaceClass>,
		defineCenter: number, size: number): number {

			if (coordinateSpace.value === undefined) {
				return (defineCenter - (this.defineLimitY(positionY, coordinateSpace) * (defineCenter / 100)) - (size / 2));
			} else {
				const yMin: number = parseInt(coordinateSpace.value.yMin, 10);
				const yMax: number = parseInt(coordinateSpace.value.yMax, 10);
				const yMid: number = (yMin + yMax) / 2;
				return (defineCenter - (this.defineLimitY(positionY + yMid, coordinateSpace) * (defineCenter / 100)) - (size / 2));
			}
	}

	public drawArrow(widthArrow: number, heightArrow: number, rotate: string, positionX: number,
		positionY: number, color: string, drawGraphicMarker: string) {

		if (drawGraphicMarker === 'true') {
			return (
				<div id='arrow' style={{
					transform: 'rotate(' + rotate + ')',
					position: 'absolute',
					top: positionY,
					left: positionX,
				}}
				>
					<div style={{
						width: '0',
						height: '0',
						borderLeft: widthArrow + 'px solid transparent',
						borderRight: widthArrow + 'px solid transparent',
						borderBottom: widthArrow + 'px solid ' + color,
						transform: 'rotate(0deg)',
					}}>
					</div>
					<div style={{
						border: '1px solid ' + color,
						backgroundColor: color,
						width: widthArrow + 'px',
						height: heightArrow + 'px',
						marginLeft: widthArrow / 2,
					}}>
					</div>
				</div>
			);
		} else {

			return (<div></div>);
		}
	}

	public defineCenterX(coordinateSpace: SelectableValue<CoordinateSpaceClass>): number {
		let result: number = 0;
		result = this.props.height / 2;
		return result;
	}

	public defineCenterY(coordinateSpace: SelectableValue<CoordinateSpaceClass>): number {
		let result: number = 0;
		result = this.props.height / 2;
		return result;
	}

	public defineLabel(color: string, positionLabelX: number, positionLabelY: number,
		positionArrowX: number, positionArrowY: number, drawGraphicMarker: string, heightArrow: number) {

		if (drawGraphicMarker === 'true') {
			return (
				<span style={{
					position: 'absolute',
					fontSize: this.props.sizePolice,
					fontFamily: this.props.police,
					fontWeight: 'bold',
					color: color,
					top: positionArrowY + heightArrow + positionLabelY,
					left: positionArrowX + heightArrow + positionLabelX,
				}}>{this.props.label}</span>
			);
		}
		return (<br />);
	}

	/**
	 * render
	 */
	public render() {

		const coordinateSpace: SelectableValue<CoordinateSpaceClass> = this.props.coordinateSpace;
		const widthArrow: number = this.defineSizeHeight(this.props.sizeHeight.value || '');
		const heightArrow: number = this.defineSizeWidth(this.props.sizeWidth.value || '');
		const sizeArrow: number = widthArrow + heightArrow;
		const defineCenterX: number = this.defineCenterX(coordinateSpace);
		const defineCenterY: number = this.defineCenterY(coordinateSpace);
		const rotate: string = this.props.rotate + 'deg';
		const valueInputPositionArrowX: number = (parseInt(this.props.positionShapeX, 10) || 0);
		const valueInputPositionArrowY: number = (parseInt(this.props.positionShapeY, 10) || 0);
		const positionArrowX: number = this.definePositionArrowX(valueInputPositionArrowX, coordinateSpace,
			defineCenterX, widthArrow);
		const positionArrowY: number = this.definePositionArrowY(valueInputPositionArrowY, coordinateSpace,
			defineCenterY, sizeArrow);
		const positionLabelX: number = parseInt(this.props.positionLabelX, 10) || 0;
		const positionLabelY: number = ((parseInt(this.props.positionLabelY, 10) || 0) * (-1));
		const drawGraphicMarker: string = this.props.drawGraphicmarker.value || '';
		const color: string = this.props.color;

		return (
			<div id={this.props.idPoint}>
				{
					this.defineLabel(color, positionLabelX, positionLabelY, positionArrowX,
						positionArrowY, drawGraphicMarker, heightArrow)
				}
				{
					this.drawArrow(widthArrow, heightArrow, rotate, positionArrowX, positionArrowY,
						color, drawGraphicMarker)
				}
			</div>
		);
	}
}
