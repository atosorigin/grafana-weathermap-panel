import React from 'react';
import { SelectableValue } from '@grafana/data';
import { CoordinateSpaceClass } from '../../Models/CoordinateSpaceClass';

interface IProps {

	regionIn: SelectableValue<CoordinateSpaceClass>;
	regionOut: SelectableValue<CoordinateSpaceClass>;
	colorA: string;
	colorB: string;
	labelA: string;
	labelB: string;
	labelAPositionX: string;
	labelAPositionY: string;
	labelBPositionX: string;
	labelBPositionY: string;
	orientationLink: string;
	height: number;
}

interface IState {
}

export default class DrawLienWithRegions extends React.Component<IProps, IState> {

	constructor(props: IProps) {
		super(props);
		this.state = {
		};
	}

	public synchroX(positionX: number): number {
		const defineCenter: number = this.props.height / 2;
		return ((positionX * (defineCenter / 100)) + defineCenter);
	}

	public synchroY(positionY: number): number {
		const defineCenter: number = this.props.height / 2;
		return (defineCenter - (positionY * (defineCenter / 100)));
	}

	public drawLink(
		xA: number, yA: number, xB: number, yB: number, colorA: string, colorB: string,
		orientationLink: string, labelA: string, labelB: string, diagonalRegionIn: number,
		diagonalRegionOut: number, labelAPositionX: number, labelAPositionY: number,
		labelBPositionX: number, labelBPositionY: number) {

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

		const distanceBA: number = Math.sqrt(((xA - xB) * (xA - xB)) + ((yA - yB) * (yA - yB)));
		const angleRadianBA: number = Math.atan2(yB - yA, xB - xA);
		const angleDegreeBA: number = (angleRadianBA * 180) / Math.PI;
		const xMidBA: number = (xA + xB) / 2;
		const yMidBA: number = (yA + yB) / 2;
		const xArrowBA: number = xMidBA - (distanceBA / 2);
		const yArrowBA: number = yMidBA;

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
							<div style={{
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
							<div style={{
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
							backgroundColor: 'white',
							color: 'black',
							padding: '0 5px',
						}}>{labelB}
						</div>
					</div>
				</div>
			);
		} else if (orientationLink === 'AB') {
			return (
				<div>
					<div id='arrow1' style={{
						display: 'flex',
						alignContent: 'stretch',
						position: 'absolute',
						top: yArrowAB - (sizeArrowTriangle / 2),
						left: xArrowAB,
						transform: 'rotate(' + angleDegreeAB + 'deg)',
						width: distanceAB,

					}}>
						<div style={{
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
						fontSize: distanceAB * (8 / 100),
						backgroundColor: 'white',
						color: 'black',
						padding: '0 5px',
					}}>{labelA}
					</div>
				</div>
			);
		} else if (orientationLink === 'BA') {
			return (
				<div>
					<div id='arrow1' style={{
						display: 'flex',
						alignContent: 'stretch',
						position: 'absolute',
						top: yArrowBA - (sizeArrowTriangle / 2),
						left: xArrowBA,
						transform: 'rotate(' + angleDegreeBA + 'deg)',
						width: distanceBA,
					}}>
						<div style={{
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
							width: distanceBA,
						}}></div>
					</div>
					<div style={{
						position: 'absolute',
						top: yMidBA + labelBPositionY,
						left: xMidBA + labelBPositionX,
						fontSize: distanceBA * (8 / 100),
						backgroundColor: 'white',
						color: 'black',
						padding: '0 5px',
					}}>{labelB}
					</div>
				</div>
			);
		}
		return (<div></div>);
	}

	public defineDiagonal(xMin: number, xMax: number, yMin: number, yMax: number): number {

		const sideA: number = xMax - xMin < 0 ? xMin - xMax : xMax - xMin;
		const sideB: number = yMax - yMin < 0 ? yMin - yMax : yMax - yMin;
		let diagonal: number = 0;

		if (yMax - yMin === xMax - xMin) {
			// square
			diagonal = sideA * Math.sqrt(2);
		} else {
			// rectangle
			diagonal = Math.sqrt((sideA * sideA) + (sideB * sideB));
		}

		return diagonal;
	}

	public render() {

		const colorA: string = this.props.colorA;
		const colorB: string = this.props.colorB;
		const xMinRegionIn: number = parseInt(this.props.regionIn.value?.xMin || '0', 10);
		const xMaxRegionIn: number = parseInt(this.props.regionIn.value?.xMax || '0', 10);
		const xMinRegionOut: number = parseInt(this.props.regionOut.value?.xMin || '0', 10);
		const xMaxRegionOut: number = parseInt(this.props.regionOut.value?.xMax || '0', 10);
		const yMinRegionIn: number = parseInt(this.props.regionIn.value?.yMin || '0', 10);
		const yMaxRegionIn: number = parseInt(this.props.regionIn.value?.yMax || '0', 10);
		const yMinRegionOut: number = parseInt(this.props.regionOut.value?.yMin || '0', 10);
		const yMaxRegionOut: number = parseInt(this.props.regionOut.value?.yMax || '0', 10);
		const xA: number = this.synchroX((xMaxRegionIn + xMinRegionIn) / 2);
		const yA: number = this.synchroY((yMaxRegionIn + yMinRegionIn) / 2);
		const xB: number = this.synchroX((xMaxRegionOut + xMinRegionOut) / 2);
		const yB: number = this.synchroY((yMaxRegionOut + yMinRegionOut) / 2);
		const orientationLink: string = this.props.orientationLink;
		const labelA: string = this.props.labelA;
		const labelB: string = this.props.labelB;
		const diagonalRegionIn: number = this.defineDiagonal(xMinRegionIn, xMaxRegionIn, yMinRegionIn, yMaxRegionIn);
		const diagonalRegionOut: number = this.defineDiagonal(xMinRegionOut, xMaxRegionOut, yMinRegionOut, yMaxRegionOut);
		const labelAPositionX: number = parseInt(this.props.labelAPositionX, 10);
		const labelAPositionY: number = parseInt(this.props.labelAPositionY, 10) * (-1);
		const labelBPositionX: number = parseInt(this.props.labelBPositionX, 10);
		const labelBPositionY: number = parseInt(this.props.labelBPositionY, 10) * (-1);

		return (
			<div>
				{
					this.drawLink(xA, yA, xB, yB, colorA, colorB, orientationLink, labelA, labelB,
						diagonalRegionIn, diagonalRegionOut, labelAPositionX, labelAPositionY,
						labelBPositionX, labelBPositionY)
				}
			</div>
		);
	}

}