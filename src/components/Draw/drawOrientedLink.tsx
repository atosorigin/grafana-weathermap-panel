import React from 'react';
import { SelectableValue, PanelEditorProps } from '@grafana/data';
import { RegionClass, ICoord4D } from 'Models/RegionClass';
import { PointClass } from 'Models/PointClass';
import { Tooltip } from '@grafana/ui';
import { SimpleOptions } from 'types';
import { TextObject } from 'Models/TextObjectClass';
import { LowerLimitClass } from 'Models/LowerLimitClass';

interface IProps extends PanelEditorProps<SimpleOptions> {
	pointAPositionX: string;
	pointAPositionY: string;
	pointBPositionX: string;
	pointBPositionY: string;
	colorA: string;
	colorB: string;
	orientationLink: string;
	label: string;
	associatePointIn: SelectableValue<PointClass>;
	associatePointOut: SelectableValue<PointClass>;
	associateRegionIn: SelectableValue<RegionClass>;
	associateRegionOut: SelectableValue<RegionClass>;
	widthImage: number;
	heightImage: number;
	name: string;
	refMainMetric: string;
	valueMainMetricA: string;
	valueMainMetricB: string;
	textObject: TextObject;
	seuil: LowerLimitClass[];
	labelAPositionX: string;
	labelAPositionY: string;
	labelBPositionX: string;
	labelBPositionY: string;
	tooltipPositionA: SelectableValue<any>;
	tooltipPositionB: SelectableValue<any>;
	zIndex: number;
}

interface IState {
}

export default class DrawOrientedLink extends React.Component<IProps, IState> {

	constructor(props: IProps) {
		super(props);
		this.state = {
		};
	}

	public synchroArrowX(positionX: number): number {
		const initialSpace: ICoord4D = this.props.options.coordinateSpaceInitial.coordinate;
		const xMin: number = parseInt(initialSpace.xMin, 10);
		const xMinPx: number = (xMin + 100) * (this.props.widthImage / 200);
		const xMax: number = parseInt(initialSpace.xMax, 10);
		const xMaxPx: number = (xMax + 100) * (this.props.widthImage / 200)
		const widthInitialSpace: number = xMaxPx - xMinPx;
		const x: number = xMinPx + (((positionX) * (widthInitialSpace / 200)) + (widthInitialSpace / 2));
		return x;
	}
	
	public synchroArrowY(positionY: number): number {
		const initialSpace: ICoord4D = this.props.options.coordinateSpaceInitial.coordinate;
		const yMin: number = parseInt(initialSpace.yMin, 10);
		const yMinPx: number = (yMin + 100) * (this.props.heightImage / 200);
		const yMax: number = parseInt(initialSpace.yMax, 10);
		const yMaxPx: number = (yMax + 100) * (this.props.heightImage / 200);
		const heightInitialSpace: number = yMaxPx - yMinPx;
		const y: number = yMinPx + ((heightInitialSpace / 2) - ((positionY) * (heightInitialSpace / 200)));
		return y;
	}

	public drawLink(xA: number, yA: number, xB: number, yB: number, orientationLink: string) {

		const xC: number = (xA + xB) / 2;
		const yC: number = (yA + yB) / 2;

		const distanceAC: number = Math.sqrt(((xA - xC) * (xA - xC)) + ((yA - yC) * (yA - yC)));
		const angleRadianAC: number = Math.atan2(yA - yC, xA - xC);
		const angleDegreeAC: number = (angleRadianAC * 180) / Math.PI;
		const xMidAC: number = (xA + xC) / 2;
		const yMidAC: number = (yA + yC) / 2;
		const xArrowAC: number = xMidAC - (distanceAC / 2);
		const yArrowAC: number = yMidAC;

		const distanceBC: number = Math.sqrt(((xB - xC) * (xB - xC)) + ((yB - yC) * (yB - yC)));
		const angleRadianBC: number = Math.atan2(yB - yC, xB - xC);
		const angleDegreeBC: number = (angleRadianBC * 180) / Math.PI;
		const xMidBC: number = (xB + xC) / 2;
		const yMidBC: number = (yB + yC) / 2;
		const xArrowBC: number = xMidBC - (distanceBC / 2);
		const yArrowBC: number = yMidBC;

		const distanceAB: number = Math.sqrt(((xA - xB) * (xA - xB)) + ((yA - yB) * (yA - yB)));
		const angleRadianAB: number = Math.atan2(yA - yB, xA - xB);
		const angleDegreeAB: number = (angleRadianAB * 180) / Math.PI;
		const xMidAB: number = (xA + xB) / 2;
		const yMidAB: number = (yA + yB) / 2;
		const xArrowAB: number = xMidAB - (distanceAB / 2);
		const yArrowAB: number = yMidAB;

		//const angleRadianBA: number = Math.atan2(yB - yA, xB - xA);
		//const angleDegreeBA: number = (angleRadianBA * 180) / Math.PI;

		const sizeArrowTriangle: number = 8;

		const valueTooltipMonodirectional: JSX.Element = this.defineValueTooptip('monodirectional');
		const valueTooltipBidirectionalA: JSX.Element = this.defineValueTooptip('bidirectional', 'A');
		const valueTooltipBidirectionalB: JSX.Element = this.defineValueTooptip('bidirectional', 'B');

		const inverseAxeY: number = -1;

		if (orientationLink === 'double') {
			return (
					<div id='link' >
						<div>
							<Tooltip content={valueTooltipBidirectionalA} placement={this.props.tooltipPositionA.value} >
								<div id='linkA' style={{
									position: 'absolute',
									zIndex: this.props.zIndex,
									top: yArrowAC - (sizeArrowTriangle / 2),
									left: xArrowAC,
									transform: 'rotate(' + angleDegreeAC.toString() + 'deg)',
									width: distanceAC,
								}}>
									<div id='arrow1' style={{
										display: 'flex',
										alignContent: 'stretch',
									}}>
										<div className='arrowTriangle' style={{
											width: '0',
											height: '0',
											borderLeft: sizeArrowTriangle.toString() + 'px solid transparent',
											borderRight: sizeArrowTriangle.toString() + 'px solid transparent',
											borderBottom: sizeArrowTriangle.toString() + 'px solid ' + this.defineBorderColor(),
											transform: 'rotate(270deg)',
										}}></div>
										<div style={{
											border: '1px solid ' + this.defineBorderColor(),
											backgroundColor: this.defineBackgroundColor(),
											width: distanceAC,
										}}></div>
									</div>
								</div>
							</Tooltip>
							<div style={{
									position: 'absolute',
									top: yMidAC + (parseInt(this.props.labelAPositionY, 10) * inverseAxeY),
									left: xMidAC + parseInt(this.props.labelAPositionX, 10),
									fontSize: '8px',
									//border: '1px solid black',
									backgroundColor: 'white',
									color: 'black',
									padding: '0 5px',
								}}>{this.props.valueMainMetricA}
							</div>
						</div>
						<div>
							<Tooltip content={valueTooltipBidirectionalB} placement={this.props.tooltipPositionB.value} >
								<div id='linkB' style={{
									position: 'absolute',
									top: yArrowBC - (sizeArrowTriangle / 2),
									left: xArrowBC,
									transform: 'rotate(' + angleDegreeBC.toString() + 'deg)',
									width: distanceBC,
								}}>
									<div id='arrow2' style={{
										display: 'flex',
										alignContent: 'stretch',
									}}>
										<div className='arrowTriangle' style={{
											width: '0',
											height: '0',
											borderLeft: sizeArrowTriangle.toString() + 'px solid transparent',
											borderRight: sizeArrowTriangle.toString() + 'px solid transparent',
											borderBottom: sizeArrowTriangle.toString() + 'px solid ' + this.defineBorderColor(),
											transform: 'rotate(270deg)',
										}}></div>
										<div style={{
											border: '1px solid ' + this.defineBorderColor(),
											backgroundColor: this.defineBackgroundColor(),
											width: distanceBC,
										}}></div>
									</div>
								</div>
							</Tooltip>
							<div style={{
									position: 'absolute',
									top: yMidBC + (parseInt(this.props.labelBPositionY, 10) * inverseAxeY),
									left: xMidBC + parseInt(this.props.labelBPositionX, 10),
									fontSize: '8px',
									//border: '1px solid black',
									backgroundColor: 'white',
									color: 'black',
									padding: '0 5px',
								}}>{this.props.valueMainMetricB}
							</div>
						</div>
					</div>
			)
		} else if (orientationLink === 'AB') {
			return (
				<div>
					<Tooltip content={valueTooltipMonodirectional} placement={this.props.tooltipPositionA.value} >
						<div id='link' style={{
							position: 'absolute',
							zIndex: this.props.zIndex,
							top: yArrowAB - (sizeArrowTriangle / 2),
							left: xArrowAB,
							transform: 'rotate(' + angleDegreeAB.toString() + 'deg)',
							width: distanceAB,
						}}>
							<div id='arrow1' style={{
										display: 'flex',
							}} >
								<div className='arrowTriangle' style={{
									width: '0',
									height: '0',
									borderLeft: sizeArrowTriangle.toString() + 'px solid transparent',
									borderRight: sizeArrowTriangle.toString() + 'px solid transparent',
									borderBottom: sizeArrowTriangle.toString() + 'px solid ' + this.defineBorderColor(),
									transform: 'rotate(270deg)',
								}}></div>
								<div style={{
									border: '1px solid ' + this.defineBorderColor(),
									backgroundColor: this.defineBackgroundColor(),
									width: distanceAB,
								}}></div>
							</div>
						</div>
					</Tooltip>
					<div style={{
						position: 'absolute',
						top: yMidAB + (parseInt(this.props.labelAPositionY, 10) * inverseAxeY),
						left: xMidAB + parseInt(this.props.labelAPositionX, 10),
						backgroundColor: 'white',
						fontSize: '12px',
						color: 'black',
						padding: '0 5px',
						cursor: 'pointer',
					}}
					>
						{this.props.valueMainMetricA}
					</div>
				</div>
			)
		} 
		// else if (orientationLink === 'BA') {
		// 	return (
		// 		<div id='link'>
		// 			<div id='arrow1' style={{
		// 				display: 'flex',
		// 				alignContent: 'stretch',
		// 				position: 'absolute',
		// 				top: yArrowAB - (sizeArrowTriangle / 2),
		// 				left: xArrowAB,
		// 				transform: 'rotate(' + angleDegreeBA + 'deg)',
		// 				width: distanceAB,

		// 			}}>
		// 				<div className='arrowTriangle' style={{
		// 					width: '0',
		// 					height: '0',
		// 					borderLeft: sizeArrowTriangle + 'px solid transparent',
		// 					borderRight: sizeArrowTriangle + 'px solid transparent',
		// 					borderBottom: sizeArrowTriangle + 'px solid ' + colorB,
		// 					transform: 'rotate(270deg)',
		// 				}}></div>
		// 				<div style={{
		// 					border: '1px solid ' + colorB,
		// 					backgroundColor: colorB,
		// 					width: distanceAB,
		// 				}}></div>
		// 			</div>
		// 			<div style={{
		// 				position: 'absolute',
		// 				top: yMidAB + labelBPositionY,
		// 				left: xMidAB + labelBPositionX,
		// 				//border: '1px solid black',
		// 				backgroundColor: 'white',
		// 				color: 'black',
		// 				fontSize: distanceAB * (4 / 100),
		// 				padding: '0 5px',
		// 			}}>
		// 				{labelB}
		// 			</div>
		// 		</div>
		// 	)
		// } 
		else {
			return (
				<div>

				</div>
			)
		}
	}

	public defineBackgroundColor() {
		let colorBackground: string = '';

		if (this.props.seuil.length > 0) {
			colorBackground = this.props.seuil[0].backColor;
		} else {
			colorBackground = 'black';
		}

		const valueMainMetric: number = parseInt(this.props.valueMainMetricA, 10);
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
		})

		return colorBackground;
	}

	public defineBorderColor() {
		
		let colorBorder: string = '';

		if (this.props.seuil.length > 0) {
			colorBorder = this.props.seuil[0].borderColor;
		} else {
			colorBorder = 'black';
		}

		const valueMainMetric: number = parseInt(this.props.valueMainMetricA, 10);
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
		})

		return colorBorder;
	}


	public defineCoordinates(associateRegion: SelectableValue<RegionClass>,
		coordinate: number, region: number): number {
		let result: number = 0;
		// if (associateRegion.value === undefined || associateRegion.value.id === undefined) {
		// 	result = coordinate;
		// } else {
		// 	result = region;
		// }
		return result;
	}


	public defineValueTooptip = (typeLink: string, link?: string) => {
		const infosOrientedLink: JSX.Element[] = [];
		const valueMainMetricA = this.props.valueMainMetricA;
		const valueMainMetricB = this.props.valueMainMetricB;
		const refMainMetric = this.props.refMainMetric;

		infosOrientedLink.push(<p style={{ fontSize: '12px', marginBottom: '0px' }}>{this.props.label || this.props.name}</p>)

		infosOrientedLink.push(
			<p style={{ fontSize: '10px', marginTop: '5px', marginBottom: '0px' }}>
				Main Metric
			</p>
		);

		if (typeLink === 'bidirectional') {
			if (link === 'A') {
				infosOrientedLink.push(
					<p style={{ fontSize: '8px', marginBottom: '0px', marginTop:'5px' }}>
							+ Link A : {refMainMetric}
					</p>
				);
				infosOrientedLink.push(
					<p style={{ fontSize: '8px', marginBottom: '0px' }}>	- Reference A : {refMainMetric}</p>
				);
				infosOrientedLink.push(
					<p style={{ fontSize: '8px', marginBottom: '0px' }}>	- Value A : {valueMainMetricA}</p>
				);
			} else if (link === 'B') {
				infosOrientedLink.push(
					<p style={{ fontSize: '8px', marginBottom: '0px', marginTop:'5px' }}>
							+ Link B : {refMainMetric}
					</p>
				);
				infosOrientedLink.push(
					<p style={{ fontSize: '8px', marginBottom: '0px' }}>	- Reference B : {refMainMetric}</p>
				);
				infosOrientedLink.push(
					<p style={{ fontSize: '8px', marginBottom: '0px' }}>	- Value B : {valueMainMetricB}</p>
				);
			}
		} else if (typeLink === 'monodirectional') {
			infosOrientedLink.push(
				<p style={{ fontSize: '8px', marginBottom: '0px' }}>	+ Reference : {refMainMetric}</p>
			);
			infosOrientedLink.push(
				<p style={{ fontSize: '8px', marginBottom: '0px' }}>	+ Value : {valueMainMetricA}</p>
			);
		}

		return (
			<div>
				{infosOrientedLink}
			</div>
		)
	}


	public render() {

		const xCoordinateA: number = this.synchroArrowX(parseInt(this.props.pointAPositionX, 10));
		const yCoordinateA: number = this.synchroArrowY(parseInt(this.props.pointAPositionY, 10));
		const xCoordinateB: number = this.synchroArrowX(parseInt(this.props.pointBPositionX, 10));
		const yCoordinateB: number = this.synchroArrowY(parseInt(this.props.pointBPositionY, 10));	
		const orientationLink: string = this.props.orientationLink;
		// const labelA: string = this.props.labelA;
		// const labelB: string = this.props.labelB;
		// const labelAPositionX: number = parseInt(this.props.labelAPositionX, 10);
		// const labelAPositionY: number = parseInt(this.props.labelAPositionY, 10) * (-1);
		// const labelBPositionX: number = parseInt(this.props.labelBPositionX, 10);
		// const labelBPositionY: number = parseInt(this.props.labelBPositionY, 10) * (-1);

		// const associatePointIn: SelectableValue<PointClass> = this.props.associatePointIn || {};
		// const associatePointOut: SelectableValue<PointClass> = this.props.associatePointOut || {};
		// const associateRegionIn: SelectableValue<RegionClass> = this.props.associateRegionIn || {};
		// const associateRegionOut: SelectableValue<RegionClass> = this.props.associateRegionOut || {};

		// console.log(associatePointIn)
		// console.log(associatePointOut)
		// console.log(associateRegionIn)
		// console.log(associateRegionOut)

		// const xMinAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.xMin || '0');
		// const xMaxAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.xMax || '0');
		// const xMinAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.xMin || '0');
		// const xMaxAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.xMax || '0');
		// const yMinAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.yMin || '0');
		// const yMaxAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.yMax || '0');
		// const yMinAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.yMin || '0');
		// const yMaxAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.yMax || '0');
		// const xRegionIn: number = this.synchroArrowX((xMaxAssociateRegionIn + xMinAssociateRegionIn) / 2, defineCenter);
		// const yRegionIn: number = this.synchroArrowY((yMaxAssociateRegionIn + yMinAssociateRegionIn) / 2, defineCenter);
		// const xRegionOut: number = this.synchroArrowX((xMaxAssociateRegionOut + xMinAssociateRegionOut) / 2, defineCenter);
		// const yRegionOut: number = this.synchroArrowY((yMaxAssociateRegionOut + yMinAssociateRegionOut) / 2, defineCenter);

		return (

				<div>
					{
						// this.drawLink(
							// 	this.defineCoordinates(associateRegionIn, xCoordinateA, xRegionIn),
							// 	this.defineCoordinates(associateRegionIn, yCoordinateA, yRegionIn),
							// 	this.defineCoordinates(associateRegionOut, xCoordinateB, xRegionOut),
							// 	this.defineCoordinates(associateRegionOut, yCoordinateB, yRegionOut),
							// 	colorA, colorB, labelA, labelB, orientationLink, labelAPositionX, 
							// 	labelAPositionY, labelBPositionX, labelBPositionY, valueMarginRegionIn)
						this.drawLink(xCoordinateA, yCoordinateA, xCoordinateB, yCoordinateB, orientationLink)
					}
				</div>
		);
	}

}