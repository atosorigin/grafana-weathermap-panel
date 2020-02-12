import React from 'react';

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
	height: number;
}

interface IState {
}

export default class DrawLinkWithCoordinates extends React.Component<IProps, IState> {

	constructor(props: IProps) {
		super(props);
		this.state = {
		};
	}


	public synchroArrowX(positionX: number, defineCenter: number): number {
		return ((positionX * (defineCenter / 100)) + defineCenter);
	}

	public synchroArrowY(positionY: number, defineCenter: number): number {
		return (defineCenter - (positionY * (defineCenter / 100)));
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
		colorB: string, orientationLink: string, labelA: string, labelB: string,
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

	public render() {

		const defineCenter: number = this.props.height / 2;

		const xA: number = this.synchroArrowX(parseInt(this.props.pointAPositionX), defineCenter);
		const yA: number = this.synchroArrowY(parseInt(this.props.pointAPositionY), defineCenter);
		const xB: number = this.synchroArrowX(parseInt(this.props.pointBPositionX), defineCenter);
		const yB: number = this.synchroArrowY(parseInt(this.props.pointBPositionY), defineCenter);
		const colorA: string = this.props.colorA;
		const colorB: string = this.props.colorB;
		const orientationLink: string = this.props.orientationLink;
		const labelA: string = this.props.labelA;
		const labelB: string = this.props.labelB;
		const labelAPositionX: number = parseInt(this.props.labelAPositionX);
		const labelAPositionY: number = parseInt(this.props.labelAPositionY) * (-1);
		const labelBPositionX: number = parseInt(this.props.labelBPositionX);
		const labelBPositionY: number = parseInt(this.props.labelBPositionY) * (-1);

		return (
			<div>
				{
					this.drawLink(xA, yA, xB, yB, colorA, colorB, orientationLink, labelA, labelB,
						labelAPositionX, labelAPositionY, labelBPositionX, labelBPositionY)
				}
			</div>
		);
	}

}