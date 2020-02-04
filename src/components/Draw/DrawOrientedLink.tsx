import React from 'react';
import { SelectableValue } from '@grafana/data';
import { EspaceCoordonneesClass } from 'Models/EspaceCoordonneesClass';

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
	associateRegionA: SelectableValue<EspaceCoordonneesClass>;
	associateRegionB: SelectableValue<EspaceCoordonneesClass>;
	height: number;
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
		return Math.round((positionX * (defineCenter / 100)) + defineCenter);
		//return positionX + defineCenter;
	}

	public synchroArrowY(positionY: number, defineCenter: number): number {
		return Math.round(defineCenter - (positionY * (defineCenter / 100)));
		//return defineCenter + positionY;
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


	public drawLink(xA: number, yA: number, xB: number, yB: number, colorA: string,
		colorB: string, labelA: string, labelB: string, orientationLink: string,
		labelAPositionX: number, labelAPositionY: number, labelBPositionX: number,
		labelBPositionY: number) {

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

		if (orientationLink === 'double') {
			return (
				<div>
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
							fontSize: distanceAC * (10 / 100),
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
							fontSize: distanceBC * (10 / 100),
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
				<div>
					<div id='arrow1' style={{
						display: 'flex',
						position: 'absolute',
						top: yArrowAB - (sizeArrowTriangle / 2),
						left: xArrowAB,
						transform: 'rotate(' + angleDegreeAB + 'deg)',
						width: distanceAB,

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
							width: distanceAB,
						}}></div>
					</div>
					<div style={{
						position: 'absolute',
						top: yMidAB + labelAPositionY,
						left: xMidAB + labelAPositionX,
						//border: '1px solid black',
						backgroundColor: 'white',
						fontSize: distanceAB * (8 / 100),
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
				<div>
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
						fontSize: distanceAB * (8 / 100),
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

	public defineCoordinates(associateRegion: SelectableValue<EspaceCoordonneesClass>,
		coordinate: number, region: number): number {
		let result: number = 0;
		if (associateRegion.value === undefined) {
			result = coordinate;
		} else {
			result = region;
		}
		return result;
	}

	public render() {

		const defineCenter: number = this.props.height / 2;

		const xCoordinateA: number = this.synchroArrowX(parseInt(this.props.pointAPositionX, 10), defineCenter);
		const yCoordinateA: number = this.synchroArrowY(parseInt(this.props.pointAPositionY, 10), defineCenter);
		const xCoordinateB: number = this.synchroArrowX(parseInt(this.props.pointBPositionX, 10), defineCenter);
		const yCoordinateB: number = this.synchroArrowY(parseInt(this.props.pointBPositionY, 10), defineCenter);
		const colorA: string = this.props.colorA;
		const colorB: string = this.props.colorB;
		const orientationLink: string = this.props.orientationLink;
		const labelA: string = this.props.labelA;
		const labelB: string = this.props.labelB;
		const labelAPositionX: number = parseInt(this.props.labelAPositionX, 10);
		const labelAPositionY: number = parseInt(this.props.labelAPositionY, 10) * (-1);
		const labelBPositionX: number = parseInt(this.props.labelBPositionX, 10);
		const labelBPositionY: number = parseInt(this.props.labelBPositionY, 10) * (-1);

		const associateRegionA: SelectableValue<EspaceCoordonneesClass> = this.props.associateRegionA;
		const associateRegionB: SelectableValue<EspaceCoordonneesClass> = this.props.associateRegionB;

		const xMinAssociateRegionA: number = parseInt(associateRegionA.value?.xMin || '0', 10);
		const xMaxAssociateRegionA: number = parseInt(associateRegionA.value?.xMax || '0', 10);
		const xMinAssociateRegionB: number = parseInt(associateRegionB.value?.xMin || '0', 10);
		const xMaxAssociateRegionB: number = parseInt(associateRegionB.value?.xMax || '0', 10);
		const yMinAssociateRegionA: number = parseInt(associateRegionA.value?.yMin || '0', 10);
		const yMaxAssociateRegionA: number = parseInt(associateRegionA.value?.yMax || '0', 10);
		const yMinAssociateRegionB: number = parseInt(associateRegionB.value?.yMin || '0', 10);
		const yMaxAssociateRegionB: number = parseInt(associateRegionB.value?.yMax || '0', 10);
		const xRegionA: number = this.synchroArrowX((xMaxAssociateRegionA + xMinAssociateRegionA) / 2, defineCenter);
		const yRegionA: number = this.synchroArrowY((yMaxAssociateRegionA + yMinAssociateRegionA) / 2, defineCenter);
		const xRegionB: number = this.synchroArrowX((xMaxAssociateRegionB + xMinAssociateRegionB) / 2, defineCenter);
		const yRegionB: number = this.synchroArrowY((yMaxAssociateRegionB + yMinAssociateRegionB) / 2, defineCenter);

		return (
			<div>
				{
					this.drawLink(this.defineCoordinates(associateRegionA, xCoordinateA, xRegionA),
						this.defineCoordinates(associateRegionA, yCoordinateA, yRegionA),
						this.defineCoordinates(associateRegionB, xCoordinateB, xRegionB),
						this.defineCoordinates(associateRegionB, yCoordinateB, yRegionB),
						colorA, colorB, labelA, labelB, orientationLink,
						labelAPositionX, labelAPositionY, labelBPositionX, labelBPositionY)
				}
			</div>
		);
	}

}