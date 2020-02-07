import React from 'react';
import { SelectableValue } from '@grafana/data';
import { EspaceCoordonneesClass } from 'Models/EspaceCoordonneesClass';

interface IProps {

	coordinateSpace: SelectableValue<EspaceCoordonneesClass>;
	drawGraphicMarker: SelectableValue<string>;
	shape: SelectableValue<string>;
	size: SelectableValue<string>;
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

/**
 * to do
 */
export default class DrawCircleCross extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
		};
	}

	/**
	 * to do
	 * @param coordinateX
	 * @param coordinateSpace
	 */
	public defineLimitX(coordinateX: number, coordinateSpace: SelectableValue<EspaceCoordonneesClass>) {

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


  /**
   * to do
   * @param coordinateY
   * @param coordinateSpace 
   */
	public defineLimitY(coordinateY: number, coordinateSpace: SelectableValue<EspaceCoordonneesClass>) {

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


	/**
	 * to do
	 * @param defineCenter
	 * @param sizeGraphicMarkerPx
	 * @param shapeGraphicMarker
	 */
	public definePositionX(positionX: number, coordinateSpace: SelectableValue<EspaceCoordonneesClass>, defineCenter: number, size: number, valueBorder: number, shape: string): number {
		let x: number;

		if (coordinateSpace.value === undefined) {
			if (shape === 'circle') {
				x = ((this.defineLimitX(positionX, coordinateSpace) * (defineCenter / 100)) + defineCenter - (size + valueBorder));
			} else {
				let widthToCenterCross: number = 0;
				
				if (size === 10) {
					widthToCenterCross = 3;
				} else if (size === 14) {
					widthToCenterCross = 5;
				} else if (size === 16) {
					widthToCenterCross = 5.5;
				}
				
				x = ((this.defineLimitX(positionX, coordinateSpace) * (defineCenter / 100)) + defineCenter) - (widthToCenterCross);
			}
		} else {
			const xMin: number = parseInt(coordinateSpace.value.xMin, 10);
			const xMax: number = parseInt(coordinateSpace.value.xMax, 10);
			const xMid: number = (xMin + xMax) / 2;

			if (shape === 'circle') {
				x = ((this.defineLimitX(positionX + xMid, coordinateSpace) * (defineCenter / 100)) + defineCenter - (size + valueBorder));
			} else {
				let widthToCenterCross: number = 0;
				
				if (size === 10) {
					widthToCenterCross = 3;
				} else if (size === 14) {
					widthToCenterCross = 5;
				} else if (size === 16) {
					widthToCenterCross = 5.5;
				}
				
				x = ((this.defineLimitX(positionX + xMid, coordinateSpace) * (defineCenter / 100)) + defineCenter) - (widthToCenterCross);
			}
		}
		return x;
	}

	/**
	 * to do
	 * @param defineCenter 
	 * @param sizeGraphicMarkerPx 
	 * @param shapeGraphicMarker 
	 */
	public definePositionY(positionY: number, coordinateSpace: SelectableValue<EspaceCoordonneesClass>, defineCenter: number, size: number, valueBorder: number, shapeGraphicMarker: string): number {
		let y: number;
		if (coordinateSpace.value === undefined) {
			if (shapeGraphicMarker === 'circle') {
				y = (defineCenter - ((this.defineLimitY(positionY, coordinateSpace)) * (defineCenter / 100)) - (size + valueBorder));
			} else {
				let heightToCenterCross: number = 0;

				if (size === 10) {
					heightToCenterCross = 7.5;
				}
				if (size === 14) {
					heightToCenterCross = 10.5;
				}
				if (size === 16) {
					heightToCenterCross = 12;
				}

				y = (defineCenter - ((this.defineLimitY(positionY, coordinateSpace)) * (defineCenter / 100))) - (heightToCenterCross);
			}

		} else {
			const yMin: number = parseInt(coordinateSpace.value.yMin, 10);
			const yMax: number = parseInt(coordinateSpace.value.yMax, 10);
			const yMid: number = (yMin + yMax) / 2;

			if (shapeGraphicMarker === 'circle') {
				y = (defineCenter - ((this.defineLimitY(positionY + yMid, coordinateSpace)) * (defineCenter / 100)) - (size + valueBorder));
			} else {
				let heightToCenterCross: number = 0;

				if (size === 10) {
					heightToCenterCross = 7.5;
				}
				if (size === 14) {
					heightToCenterCross = 10.5;
				}
				if (size === 16) {
					heightToCenterCross = 12;
				}

				y = (defineCenter - ((this.defineLimitY(positionY + yMid, coordinateSpace)) * (defineCenter / 100))) - (heightToCenterCross);
			}
		} 
		return y;
	}

	/**
	 * to do
	 * @param sizeGraphicMarker
	 * @param shapeGraphicMarker
	 */
	public defineSizeGraphicMarkerPx(size: string, shape: string) {

		if (size === 'small' && shape === 'circle') {
			return 4;
		}
		if (size === 'small' && shape === 'cross') {
			return 10;
		}
		if (size === 'medium' && shape === 'circle') {
			return 6;
		}
		if (size === 'medium' && shape === 'cross') {
			return 14;
		}
		if (size === 'large' && shape === 'circle') {
			return 8;
		}
		if (size === 'large' && shape === 'cross') {
			return 16;
		} else {
			return 0;
		}
	}

	/**
	 * to do
	 * @param positionX 
	 * @param positionY 
	 * @param color 
	 * @param sizeGraphicMarkerPx 
	 * @param shapeGraphicMarker 
	 */
	public defineShapeGraphicmarker(drawGraphicMarker: string, size: number,
		positionShapeX: number, positionShapeY: number, shape: string, color: string, valueBorder: number): any {

		if (drawGraphicMarker === 'true') {

			if (shape === 'circle') {

				return (
					<div style={{
						border: valueBorder + 'px solid ' + color,
						backgroundColor: color,
						borderRadius: '50px',
						padding: size + 'px',
						position: 'absolute',
						left: positionShapeX,
						top: positionShapeY,
					}} id={this.props.idPoint}>
					</div>
				)

			} else if (shape === 'cross') {

				return (
					<div id={this.props.idPoint} style={{
						fontSize: size,
						fontWeight: 'bold',
						position: 'absolute',
						color: color,
						left: positionShapeX,
						top: positionShapeY,
					}}>X</div>
				)
			}
		}
	}

	public defineLabel(drawGraphicMarker: string, label: string, positionX: number, positionY: number,
		positionLabelX: number, positionLabelY: number, police: string, color: string) {

		if (drawGraphicMarker === 'true') {
			return (
				<div style={{
					fontSize: '12px',
					fontFamily: police,
					fontWeight: 'bold',
					color: color,
					position: 'absolute',
					top: positionY + positionLabelY + 10,
					left: positionX + positionLabelX + 10,
				}}>{label}
				</div>
			);
		}
		return (<div></div>);
	}


	/**
	 * render
	 */
	public render() {

		const coordinateSpace: SelectableValue<EspaceCoordonneesClass> = this.props.coordinateSpace;
		const heightPanel: number = this.props.height;
		const defineCenter: number = heightPanel / 2;
		const shape: string = this.props.shape.value || '';
		const size: number = this.defineSizeGraphicMarkerPx(this.props.size.value || '', shape);
		const valueInputPositionArrowX: number = (parseInt(this.props.positionShapeX, 10) || 0);
		const valueInputPositionArrowY: number = (parseInt(this.props.positionShapeY, 10) || 0);
		const valueBorder: number = 1;
		const positionShapeX: number = this.definePositionX(valueInputPositionArrowX, coordinateSpace, defineCenter, size, valueBorder, shape);
		const positionShapeY: number = this.definePositionY(valueInputPositionArrowY, coordinateSpace, defineCenter, size, valueBorder, shape);
		const label: string = this.props.label;
		const color: string = this.props.color;
		const drawGraphicMarker: string = this.props.drawGraphicMarker.value || '';
		const positionLabelX: number = parseInt(this.props.positionLabelX, 10);
		const positionLabelY: number = parseInt(this.props.positionLabelY, 10) * (-1);
		const police = this.props.police;

		return (
			<div style={{cursor: 'pointer'}}>
				{this.defineLabel(drawGraphicMarker, label, positionShapeX, positionShapeY,
					positionLabelX, positionLabelY, police, color)}

				{this.defineShapeGraphicmarker(drawGraphicMarker, size, positionShapeX, positionShapeY,
					shape, color, valueBorder)}

			</div>
		);
	}

}
