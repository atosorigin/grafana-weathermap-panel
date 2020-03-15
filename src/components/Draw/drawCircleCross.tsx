import React from 'react';
import { SelectableValue, PanelEditorProps } from '@grafana/data';
import { RegionClass, ICoord4D } from 'Models/RegionClass';
import { Tooltip } from '@grafana/ui';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import { SimpleOptions } from 'types';
import { LinkClass } from 'Models/LinkClass';
import { TextObject } from 'Models/TextObjectClass';
import { LowerLimitClass } from 'Models/LowerLimitClass';

interface IProps extends PanelEditorProps<SimpleOptions> {

	coordinateSpace: SelectableValue<RegionClass>;
	drawGraphicMarker: SelectableValue<string>;
	shape: SelectableValue<string>;
	size: SelectableValue<string>;
	positionShapeX: string;
	positionShapeY: string;
	label: string;
	color: string;
	widthImage: number;
	heightImage: number;
	police: string;
	sizePolice: string;
	idPoint: string;
	name: string;
	textObject: TextObject;
	seuil: LowerLimitClass[];
	valueMainMetric: string;
	labelPositionX: string;
	labelPositionY: string;
	tooltipPosition: SelectableValue<any>;
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
	public defineLimitX(coordinateX: number) {
		let result: number = coordinateX;
		if (coordinateX > 100) {
			result = 100;
		}
		if (coordinateX < -100) {
			result = -100;
		}
		return result;
	}

	/**
	 * to do
	 * @param coordinateY
	 * @param coordinateSpace
	 */
	public defineLimitY(coordinateY: number) {
		let result: number = coordinateY;
		if (coordinateY > 100) {
			coordinateY = 100;
		}
		if (coordinateY < -100) {
			coordinateY = -100;
		}
		return result;
	}

	/**
	 * to do
	 * @param defineCenter
	 * @param sizeGraphicMarkerPx
	 * @param shapeGraphicMarker
	 */
	public definePositionX(
		positionX: number, initialSpace: ICoord4D,
		size: number, shape: string): number {
		let x: number;
		const xMin: number = parseInt(initialSpace.xMin, 10);
		const xMinPx: number = (xMin + 100) * (this.props.widthImage / 200);
		const xMax: number = parseInt(initialSpace.xMax, 10);
		const xMaxPx: number = (xMax + 100) * (this.props.widthImage / 200)
		const widthInitialSpace: number = xMaxPx - xMinPx;

		if (shape === 'circle') {
			x = xMinPx + ((this.defineLimitX(positionX) * (widthInitialSpace / 200)) + (widthInitialSpace / 2))
				- (size + parseInt(this.defineBorderSize(), 10));
		} else {
			let widthToCenterCross: number = 0;
			if (size === 10) {
				widthToCenterCross = 3;
			} else if (size === 14) {
				widthToCenterCross = 5;
			} else if (size === 16) {
				widthToCenterCross = 5.5;
			}
			x = xMinPx + ((this.defineLimitX(positionX) * (widthInitialSpace / 200)) + (widthInitialSpace / 2))
				- (widthToCenterCross);
		}
		return x;
	}

	/**
	 * to do
	 * @param defineCenter
	 * @param sizeGraphicMarkerPx
	 * @param shapeGraphicMarker
	 */
	public definePositionY(
		positionY: number,
		initialSpace: SelectableValue<RegionClass>,
		size: number,
		shapeGraphicMarker: string
	): number {
		let y: number;
		const yMin: number = parseInt(initialSpace.yMin, 10);
		const yMinPx: number = (yMin + 100) * (this.props.heightImage / 200);
		const yMax: number = parseInt(initialSpace.yMax, 10);
		const yMaxPx: number = (yMax + 100) * (this.props.heightImage / 200)
		const heightInitialSpace: number = yMaxPx - yMinPx;

		if (shapeGraphicMarker === 'circle') {
			y = yMinPx + ((heightInitialSpace / 2) - ((this.defineLimitY(positionY)) * ((heightInitialSpace / 2) / 100))
				- (size + parseInt(this.defineBorderSize(), 10)));
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

			y = yMinPx + ((heightInitialSpace / 2) - ((this.defineLimitY(positionY)) * ((heightInitialSpace / 2) / 100)))
				- (heightToCenterCross);
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
	public defineShapeGraphicmarker(
		drawGraphicMarker: string, size: number,
		positionShapeX: number, positionShapeY: number, shape: string, color: string): any {

		const valueToolTip: JSX.Element = this.defineContentTooltip();

		if (drawGraphicMarker === 'true') {

			if (shape === 'circle') {

				return (
					<Tooltip content={valueToolTip} placement={this.props.tooltipPosition.value}>
						<div style={{
							border: this.defineBorderSize() + 'px solid ' + this.defineBorderColor(),
							backgroundColor: this.defineBackgroundColor(),
							borderRadius: '50px',
							padding: size + 'px',
							position: 'absolute',
							left: positionShapeX,
							top: positionShapeY,
						}} id={this.props.idPoint}>
						</div>
					</Tooltip>
				);

			} else if (shape === 'cross') {

				return (
					<Tooltip content={valueToolTip} placement={this.props.tooltipPosition.value}>
						<div id={this.props.idPoint} style={{
							fontSize: size,
							fontWeight: 'bold',
							position: 'absolute',
							color: color,
							left: positionShapeX,
							top: positionShapeY,
						}}>X</div>
					</Tooltip>
				);
			}
		}
	}

	public definePositionLabelX = (coordinateX: number) => {
		//const ratioSizePanel: number = this.props.width / 100;
		const positionLabel: number = parseInt(this.props.labelPositionX, 10);
		let result: number = coordinateX + positionLabel + 10;
		// if (result > this.props.width) {
		// 	result = this.props.width;
		// }
		return result;
	}

	public definePositionLabelY = (coordinateY: number) => {
		//const ratioSizePanel: number = this.props.height / 100;
		const inverseAxeY: number = -1;
		const positionLabel: number = (parseInt(this.props.labelPositionY, 10) * inverseAxeY);
		let result: number = coordinateY + positionLabel + 10;
		// if (result > this.props.height) {
		// 	result = this.props.height;
		// }
		return result;
	}

	public defineLabel(
		drawGraphicMarker: string,
		label: string,
		name: string,
		positionX: number,
		positionY: number,
		police: string
	) {
		let valueToDisplay: string = label;

		if (label === '') {
			valueToDisplay = name;
		}

		if (drawGraphicMarker === 'true') {
			return (
				<div style={{
					fontSize: '12px',
					fontFamily: police,
					fontWeight: 'bold',
					color: this.props.textObject.colorText || 'black',
					position: 'absolute',
					top: this.definePositionLabelY(positionY),
					left: this.definePositionLabelX(positionX),
				}}>{valueToDisplay}
				</div>
			);
		}
		return (<div></div>);
	}

	public defineContentTooltip() {
		const arrayPoints = this.props.options.arrayPoints;
		let arrayLinksIn: LinkClass[] = [];
		let arrayLinksOut: LinkClass[] = [];
		let arrayOrientedLinksIn: OrientedLinkClass[] = [];
		let arrayOrientedLinksOut: OrientedLinkClass[] = [];
		let refMainMetric: string = '';
		let valueMainMetric: string = '';

		arrayPoints.forEach((point) => {
			if (point.name === this.props.name) {
				arrayLinksIn = point.associateLinkIn;
				arrayLinksOut = point.associateLinkOut;
				arrayOrientedLinksIn = point.associateOrientedLinksIn;
				arrayOrientedLinksOut = point.associateOrientedLinksOut;
				refMainMetric = point.mainMetric.refId || '';
				valueMainMetric = point.valueMetric;
			}
		});

		const label: string = this.props.label !== '' ? this.props.label : this.props.name;

		const listAssociateLinks: JSX.Element[] = [];

		listAssociateLinks
			.push(<p style={{ fontFamily: this.props.police, fontSize: '12px', marginBottom: '0px' }}>{label}</p>);

		listAssociateLinks.push(
			<p style={{ fontFamily: this.props.police, fontSize: '10px', marginTop: '5px', marginBottom: '0px' }}>
				Main Metric
			</p>
		);

		listAssociateLinks.push(
			<p style={{ fontFamily: this.props.police, fontSize: '8px', marginBottom: '0px' }}>
				+ Reference : {refMainMetric}
			</p>
		);

		listAssociateLinks.push(
			<p style={{ fontFamily: this.props.police, fontSize: '8px', marginBottom: '0px' }}>
				+ Value : {valueMainMetric + this.props.textObject.unityMesureElement}
			</p>
		);

		if (arrayLinksIn.length !== 0 || arrayOrientedLinksIn.length !== 0) {
			listAssociateLinks.push(
				<p style={{ fontFamily: this.props.police, fontSize: '10px', marginTop: '5px', marginBottom: '0px' }}>
					Associate Links In
				</p>
			);
		}

		if (arrayLinksIn.length !== 0) {
			arrayLinksIn.forEach((linkIn) => {
				listAssociateLinks.push(<p style={{ fontFamily: this.props.police, fontSize: '8px', marginBottom: '0px' }}>
					+ {linkIn.label || linkIn.name}</p>)
			});
		}

		if (arrayOrientedLinksIn.length !== 0) {
			arrayOrientedLinksIn.forEach((orientedLinkIn) => {
				listAssociateLinks.push(<p style={{ fontFamily: this.props.police, fontSize: '8px', marginBottom: '0px' }}>
					+ {orientedLinkIn.label || orientedLinkIn.name}</p>)
			});
		}

		if (arrayLinksOut.length !== 0 || arrayOrientedLinksOut.length !== 0) {
			listAssociateLinks.push(
				<p style={{ fontFamily: this.props.police, fontSize: '10px', marginTop: '5px', marginBottom: '0px' }}>
					Associate Links Out
				</p>
			);
		}

		if (arrayLinksOut.length !== 0) {
			arrayLinksOut.forEach((linkOut) => {
				listAssociateLinks.push(<p style={{ fontFamily: this.props.police, fontSize: '8px', marginBottom: '0px' }}>
					+ {linkOut.label || linkOut.name}</p>)
			});
		}

		if (arrayOrientedLinksOut.length !== 0) {
			arrayOrientedLinksOut.forEach((orientedLinkOut) => {
				listAssociateLinks.push(<p style={{ fontFamily: this.props.police, fontSize: '8px', marginBottom: '0px' }}>
					+ {orientedLinkOut.label || orientedLinkOut.name}</p>)
			});
		}
		return (
			<div>
				{listAssociateLinks}
			</div>
		);
	}

	public defineBackgroundColor() {
		let colorBackground: string = '';

		if (this.props.seuil.length > 0) {
			colorBackground = this.props.seuil[0].backColor;
		} else {
			colorBackground = 'black';
		}

		const valueMainMetric: number = parseInt(this.props.valueMainMetric, 10);
		let index: number = 0;

		this.props.seuil.forEach((level: LowerLimitClass) => {

			let lowerLimitMin: number = 0;

			if (level.lowerLimitMin === '') {
				lowerLimitMin = 0;
			} else {
				lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
			}

			if (lowerLimitMin === 0) {
				if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
					colorBackground = level.backColor;
				}
			} else if (this.props.seuil.length === index + 1) {
				if (valueMainMetric > lowerLimitMin) {
					colorBackground = level.backColor;
				}
			} else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
				colorBackground = level.backColor;
			}

			index++;
		});

		return colorBackground;
	}

	public defineBorderColor() {

		let colorBorder: string = '';

		if (this.props.seuil.length > 0) {
			colorBorder = this.props.seuil[0].borderColor;
		} else {
			colorBorder = 'black';
		}

		const valueMainMetric: number = parseInt(this.props.valueMainMetric, 10);
		let index: number = 0;

		this.props.seuil.forEach((level: LowerLimitClass) => {

			let lowerLimitMin: number = 0;

			if (level.lowerLimitMin === '') {
				lowerLimitMin = 0;
			} else {
				lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
			}

			if (lowerLimitMin === 0) {
				if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
					colorBorder = level.borderColor;
				}
			} else if (this.props.seuil.length === index + 1) {
				if (valueMainMetric > lowerLimitMin) {
					colorBorder = level.borderColor;
				}
			} else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
				colorBorder = level.borderColor;
			}

			index++;
		});

		return colorBorder;
	}

	public defineBorderSize() {

		let sizeBorder: string = '';

		if (this.props.seuil.length > 0) {
			sizeBorder = this.props.seuil[0].sizeBorder;
		} else {
			sizeBorder = '1';
		}

		const valueMainMetric: number = parseInt(this.props.valueMainMetric, 10);
		let index: number = 0;

		this.props.seuil.forEach((level: LowerLimitClass) => {

			let lowerLimitMin: number = 0;

			if (level.lowerLimitMin === '') {
				lowerLimitMin = 0;
			} else {
				lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
			}

			if (lowerLimitMin === 0) {
				if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
					sizeBorder = level.sizeBorder;
				}
			} else if (this.props.seuil.length === index + 1) {
				if (valueMainMetric > lowerLimitMin) {
					sizeBorder = level.sizeBorder;
				}
			} else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
				sizeBorder = level.sizeBorder;
			}

			index++;
		})

		return sizeBorder;
	}

	/**
	 * render
	 */
	public render() {
		//const widthImage: number = this.props.width;
		//const heightImage: number = this.props.height;
		const initialSpace: ICoord4D = this.props.options.coordinateSpaceInitial.coordinate;
		// const defineCenterX: number = widthImage / 2;
		// const defineCenterY: number = heightImage / 2;
		const shape: string = this.props.shape.value || '';
		const size: number = this.defineSizeGraphicMarkerPx(this.props.size.value || '', shape);
		const valueInputPositionArrowX: number = (parseInt(this.props.positionShapeX, 10) || 0);
		const valueInputPositionArrowY: number = (parseInt(this.props.positionShapeY, 10) || 0);
		const positionShapeX: number = this.definePositionX(valueInputPositionArrowX, initialSpace, size, shape);
		const positionShapeY: number = this.definePositionY(valueInputPositionArrowY, initialSpace, size, shape);
		const label: string = this.props.label;
		const name: string = this.props.name;
		const color: string = this.props.color;
		const drawGraphicMarker: string = this.props.drawGraphicMarker.value || '';
		const police = this.props.police;

		return (


			<div style={{ cursor: 'pointer' }}>
				{this.defineLabel(drawGraphicMarker, label, name, positionShapeX, positionShapeY, police)}
				{this.defineShapeGraphicmarker(drawGraphicMarker, size, positionShapeX, positionShapeY, shape, color)}
			</div>

		)
	}

}
