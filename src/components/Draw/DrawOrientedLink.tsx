import React from 'react';
import { SelectableValue } from '@grafana/data';
import { EspaceCoordonneesClass } from 'Models/EspaceCoordonneesClass';
import { PointClass } from 'Models/PointClass';

interface IProps {
	pointAPositionX: string;
	pointAPositionY: string;
	pointBPositionX: string;
	pointBPositionY: string;
	colorA: string;
	colorB: string;
	orientationLink: string;
	labelA: string;
	labelB: string;
	labelAPositionX: string;
	labelAPositionY: string;
	labelBPositionX: string;
	labelBPositionY: string;
	associatePointIn: SelectableValue<PointClass>;
	associatePointOut: SelectableValue<PointClass>;
	associateRegionIn: SelectableValue<EspaceCoordonneesClass>;
	associateRegionOut: SelectableValue<EspaceCoordonneesClass>;
	sidePanel: number;
	deleteOnCLick: any;
}

interface IState {
}

export default class DrawOrientedLink extends React.Component<IProps, IState> {

	constructor(props: IProps) {
		super(props);
		this.state = {
		};
	}


	public synchroArrowX(positionX: number, defineCenter: number): number {
		
		//const synchroSizePanel: number = (this.props.sidePanel - 200) / 2;

		// if (positionX > 0) {
		// 	return Math.round(positionX + defineCenter + 50);
		// } else if (positionX < 0) {
		// 	return Math.round(positionX + defineCenter - 50);
		// } else {
		// 	return Math.round(positionX + defineCenter);
		// }
		//((event.nativeEvent.offsetX) - (this.props.height / 2)) * (100 / this.props.height)) * 2
		//console.log((positionX * (this.props.sidePanel / 100)) + defineCenter)
		//console.log(positionX)
		//console.log('drawX : ' + (positionX * (this.props.sidePanel / 200)) + defineCenter);
		return (positionX * (this.props.sidePanel / 200)) + defineCenter;
	}
	
	public synchroArrowY(positionY: number, defineCenter: number): number {
		
		//const synchroSizePanel: number = (this.props.sidePanel - 200) / 2;
		
		// if (positionY > 0) {
			// 	return Math.round(defineCenter - positionY + 50);
			// } else if (positionY < 0) {
				// 	return Math.round(defineCenter - positionY - 50);
				// } else {
					// 	return Math.round(defineCenter - positionY);
					// }
		// console.log(positionY)
		// console.log(defineCenter - positionY)
		//return defineCenter - (positionY * (defineCenter / 100));
		//console.log(positionY)
		//console.log('drawY : ' + (defineCenter - (positionY * (this.props.sidePanel / 200))));
		return defineCenter - (positionY * (this.props.sidePanel / 200));
	}

	// public drawPoint(xA: number, yA: number, xB: number, yB: number) {
	//     return (
	//         <div>
	//             <div style={{
	//                 border: '1px solid red',
	//                 backgroundColor: 'red',
	//                 borderRadius: '50px',
	//                 padding: '2px',
	//                 position: 'absolute',
	//                 top: yA,
	//                 left: xA,
	//             }}></div>
	//             <div style={{
	//                 border: '1px solid white',
	//                 backgroundColor: 'white',
	//                 borderRadius: '50px',
	//                 padding: '2px',
	//                 position: 'absolute',
	//                 top: yB,
	//                 left: xB,
	//             }}></div>
	//         </div>
	//     )
	// }

	// public defineMarginForLinkNotDouble(angle: number, margin: number): string {
		
	// 	let styleMargin: string = '0 0 0 0';
	// 	console.log(angle)
	// 	if (angle === 0) {
	// 		styleMargin = '0 0 0 ' + (margin / 2) + 'px';
	// 	} else if (angle === 90) {
	// 		styleMargin = (margin / 4) + 'px 0 0 ' + (margin / 4) + 'px';
	// 	} else if (angle === 180) {
	// 		styleMargin = '0 0 0 0';
	// 	} else if (angle === -90) {
	// 		styleMargin = '0 0 ' + margin + 'px 0';
	// 	}
		
	// 	return styleMargin;
	// }

	public drawLink(xA: number, yA: number, xB: number, yB: number, colorA: string,
		colorB: string, labelA: string, labelB: string, orientationLink: string,
		labelAPositionX: number, labelAPositionY: number, labelBPositionX: number,
		labelBPositionY: number, valueMargin: number) {

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

		const angleRadianBA: number = Math.atan2(yB - yA, xB - xA);
		const angleDegreeBA: number = (angleRadianBA * 180) / Math.PI;

		const sizeArrowTriangle: number = 8;

		//console.log('label : ' + labelA)

		//const margin: string = this.defineMarginForLinkNotDouble(angleDegreeAB, valueMargin);

		if (orientationLink === 'double') {
			return (
				<div id='link' onClick={this.props.deleteOnCLick}>
					<div>
						<div id='arrow1' style={{
							display: 'flex',
							alignContent: 'stretch',
							position: 'absolute',
							top: yArrowAC - (sizeArrowTriangle / 2),
							left: xArrowAC,
							transform: 'rotate(' + angleDegreeAC + 'deg)',
							width: distanceAC,

						}}>
							<div className='arrowTriangle' style={{
								width: '0',
								height: '0',
								borderLeft: sizeArrowTriangle + 'px solid transparent',
								borderRight: sizeArrowTriangle + 'px solid transparent',
								borderBottom: sizeArrowTriangle + 'px solid ' + colorA,
								transform: 'rotate(270deg)',
							}}></div>
							<div style={{
								border: '1px solid ' + colorA,
								backgroundColor: colorA,
								width: distanceAC,
							}}></div>
						</div>
						<div style={{
							position: 'absolute',
							top: yMidAC + labelAPositionY,
							left: xMidAC + labelAPositionX,
							fontSize: distanceAC * (8 / 100),
							//border: '1px solid black',
							backgroundColor: 'white',
							color: 'black',
							padding: '0 5px',
						}}>{labelA}
						</div>
					</div>
					<div>
						<div id='arrow2' style={{
							display: 'flex',
							alignContent: 'stretch',
							position: 'absolute',
							top: yArrowBC - (sizeArrowTriangle / 2),
							left: xArrowBC,
							transform: 'rotate(' + angleDegreeBC + 'deg)',
							width: distanceBC,
						}}>
							<div className='arrowTriangle' style={{
								width: '0',
								height: '0',
								borderLeft: sizeArrowTriangle + 'px solid transparent',
								borderRight: sizeArrowTriangle + 'px solid transparent',
								borderBottom: sizeArrowTriangle + 'px solid ' + colorB,
								transform: 'rotate(270deg)',
							}}></div>
							<div style={{
								border: '1px solid ' + colorB,
								backgroundColor: colorB,
								width: distanceBC,
							}}></div>
						</div>
						<div style={{
							position: 'absolute',
							top: yMidBC + labelBPositionY,
							left: xMidBC + labelBPositionX,
							fontSize: distanceBC * (8 / 100),
							//border: '1px solid black',
							backgroundColor: 'white',
							color: 'black',
							padding: '0 5px',
						}}>{labelB}
						</div>
					</div>
				</div>
			)
		} else if (orientationLink === 'AB') {
			return (
				<div 	id='link' 
						onClick={this.props.deleteOnCLick}
				>
					<div id='arrow1' style={{
								display: 'flex',
								position: 'absolute',
								top: yArrowAB - (sizeArrowTriangle / 2),
								left: xArrowAB,
								transform: 'rotate(' + angleDegreeAB + 'deg)',
								width: distanceAB,
								//margin: margin,

					}} >
						<div className='arrowTriangle' style={{
							width: '0',
							height: '0',
							borderLeft: sizeArrowTriangle + 'px solid transparent',
							borderRight: sizeArrowTriangle + 'px solid transparent',
							borderBottom: sizeArrowTriangle + 'px solid ' + colorA,
							transform: 'rotate(270deg)',
						}}></div>
						<div style={{
							border: '1px solid ' + colorA,
							backgroundColor: colorA,
							width: distanceAB,
						}}></div>
					</div>
					<div style={{
						position: 'absolute',
						top: yMidAB + labelAPositionY,
						left: xMidAB + labelAPositionX,
						//border: '1px solid black',
						backgroundColor: 'white',
						fontSize: distanceAB * (4 / 100),
						color: 'black',
						padding: '0 5px',
						cursor: 'pointer',
					}}
					>
						{labelA}
					</div>
				</div>
			)
		} else if (orientationLink === 'BA') {
			return (
				<div id='link' onClick={this.props.deleteOnCLick}>
					<div id='arrow1' style={{
						display: 'flex',
						alignContent: 'stretch',
						position: 'absolute',
						top: yArrowAB - (sizeArrowTriangle / 2),
						left: xArrowAB,
						transform: 'rotate(' + angleDegreeBA + 'deg)',
						width: distanceAB,

					}}>
						<div className='arrowTriangle' style={{
							width: '0',
							height: '0',
							borderLeft: sizeArrowTriangle + 'px solid transparent',
							borderRight: sizeArrowTriangle + 'px solid transparent',
							borderBottom: sizeArrowTriangle + 'px solid ' + colorB,
							transform: 'rotate(270deg)',
						}}></div>
						<div style={{
							border: '1px solid ' + colorB,
							backgroundColor: colorB,
							width: distanceAB,
						}}></div>
					</div>
					<div style={{
						position: 'absolute',
						top: yMidAB + labelBPositionY,
						left: xMidAB + labelBPositionX,
						//border: '1px solid black',
						backgroundColor: 'white',
						color: 'black',
						fontSize: distanceAB * (4 / 100),
						padding: '0 5px',
					}}>
						{labelB}
					</div>
				</div>
			)
		} else {
			return (
				<div>

				</div>
			)
		}
	}

	public defineSideRegion(xMin: number, xMax: number, yMin: number, yMax: number): number {

		let result: number = ((xMax - xMin) * (this.props.sidePanel / 100)) / 2;

		if (result < 0) {
			result = result * (-1);
		}
		return result;
	}

	// public defineDiagonal(xMin: number, xMax: number, yMin: number, yMax: number): number {

	// 	const sideA: number = xMax - xMin < 0 ? xMin - xMax : xMax - xMin;
	// 	const sideB: number = yMax - yMin < 0 ? yMin - yMax : yMax - yMin;
	// 	let diagonal: number = 0;

	// 	if (yMax - yMin === xMax - xMin) {
	// 		// square
	// 		diagonal = sideA * Math.sqrt(2);
	// 		console.log('carré : ' + diagonal)
	// 	} else {
	// 		// rectangle
	// 		diagonal = Math.sqrt((sideA * sideA) + (sideB * sideB));
	// 		console.log('rectangle : ' + diagonal)
	// 	}

	// 	return diagonal;
	// }

	public defineCoordinates(associateRegion: SelectableValue<EspaceCoordonneesClass>,
		coordinate: number, region: number): number {
		let result: number = 0;
		//console.log(associateRegion.value)
		if (associateRegion.value === undefined || associateRegion.value.id === undefined) {
			result = coordinate;
		} else {
			result = region;
		}
		return result;
	}

	public defineColor(associatePoint: SelectableValue<PointClass>, type: string) {
		let color: string = '';
		if (type === 'in') {
			if (associatePoint.value === undefined) {
				color = this.props.colorA;
			} else {
				color = associatePoint.value.color;
			}
		} else if (type === 'out') {
			if (associatePoint.value === undefined) {
				color = this.props.colorB;
			} else {
				color = associatePoint.value.color;
			}
		}
		return color;
	}

	public render() {

		const sidePanel: number = this.props.sidePanel;
		const defineCenter: number = sidePanel / 2;

		const xCoordinateA: number = this.synchroArrowX(parseInt(this.props.pointAPositionX, 10), defineCenter);
		const yCoordinateA: number = this.synchroArrowY(parseInt(this.props.pointAPositionY, 10), defineCenter);
		const xCoordinateB: number = this.synchroArrowX(parseInt(this.props.pointBPositionX, 10), defineCenter);
		const yCoordinateB: number = this.synchroArrowY(parseInt(this.props.pointBPositionY, 10), defineCenter);
		const colorA: string = this.defineColor(this.props.associatePointIn, 'in');
		const colorB: string = this.defineColor(this.props.associatePointOut, 'out');
		const orientationLink: string = this.props.orientationLink;
		const labelA: string = this.props.labelA;
		const labelB: string = this.props.labelB;
		const labelAPositionX: number = parseInt(this.props.labelAPositionX, 10);
		const labelAPositionY: number = parseInt(this.props.labelAPositionY, 10) * (-1);
		const labelBPositionX: number = parseInt(this.props.labelBPositionX, 10);
		const labelBPositionY: number = parseInt(this.props.labelBPositionY, 10) * (-1);

		const associateRegionIn: SelectableValue<EspaceCoordonneesClass> = this.props.associateRegionIn;
		const associateRegionOut: SelectableValue<EspaceCoordonneesClass> = this.props.associateRegionOut;

		const xMinAssociateRegionIn: number = parseInt(associateRegionIn.value?.xMin || '0');
		const xMaxAssociateRegionIn: number = parseInt(associateRegionIn.value?.xMax || '0');
		const xMinAssociateRegionOut: number = parseInt(associateRegionOut.value?.xMin || '0');
		const xMaxAssociateRegionOut: number = parseInt(associateRegionOut.value?.xMax || '0');
		const yMinAssociateRegionIn: number = parseInt(associateRegionIn.value?.yMin || '0');
		const yMaxAssociateRegionIn: number = parseInt(associateRegionIn.value?.yMax || '0');
		const yMinAssociateRegionOut: number = parseInt(associateRegionOut.value?.yMin || '0');
		const yMaxAssociateRegionOut: number = parseInt(associateRegionOut.value?.yMax || '0');
		const xRegionIn: number = this.synchroArrowX((xMaxAssociateRegionIn + xMinAssociateRegionIn) / 2, defineCenter);
		const yRegionIn: number = this.synchroArrowY((yMaxAssociateRegionIn + yMinAssociateRegionIn) / 2, defineCenter);
		const xRegionOut: number = this.synchroArrowX((xMaxAssociateRegionOut + xMinAssociateRegionOut) / 2, defineCenter);
		const yRegionOut: number = this.synchroArrowY((yMaxAssociateRegionOut + yMinAssociateRegionOut) / 2, defineCenter);

		const valueMarginRegionIn: number = this.defineSideRegion(	xMinAssociateRegionOut, xMaxAssociateRegionOut,
																	yMinAssociateRegionOut, yMaxAssociateRegionOut);

		return (
			<div>
				{
					this.drawLink(this.defineCoordinates(associateRegionIn, xCoordinateA, xRegionIn),
						this.defineCoordinates(associateRegionIn, yCoordinateA, yRegionIn),
						this.defineCoordinates(associateRegionOut, xCoordinateB, xRegionOut),
						this.defineCoordinates(associateRegionOut, yCoordinateB, yRegionOut),
						colorA, colorB, labelA, labelB, orientationLink, labelAPositionX, 
						labelAPositionY, labelBPositionX, labelBPositionY, valueMarginRegionIn)
				}
				{/* {
					this.drawLink(xCoordinateA, yCoordinateA, xCoordinateB, yCoordinateB,
						colorA, colorB, labelA, labelB, orientationLink,
						labelAPositionX, labelAPositionY, labelBPositionX, labelBPositionY)
				} */}
			</div>
		);
	}

}