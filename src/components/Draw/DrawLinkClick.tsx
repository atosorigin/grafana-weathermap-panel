import React from 'react';

interface IProps {

    pointAPositionX: string;
    pointAPositionY: string;
    pointBPositionX: string;
    pointBPositionY: string;
    colorA: string;
    colorB: string;
    labelA: string;
    labelB: string;
    height: number;
}

interface IState {
}

export default class DrawLinkClick extends React.Component<IProps, IState> {
    
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
                    colorB: string, labelA: string, labelB: string) {

        const xC: number = (xA + xB) / 2;
        const yC: number = (yA + yB) / 2;

        const distanceAC: number = Math.sqrt( ((xA - xC) * (xA - xC)) + ((yA - yC) * (yA - yC)));
        const angleRadianAC: number = Math.atan2(yA - yC, xA - xC);
        const angleDegreeAC: number = (angleRadianAC * 180) / Math.PI;
        const xMidAC: number = (xA + xC) / 2;
        const yMidAC: number = (yA + yC) / 2;
        const xArrowAC: number = xMidAC - (distanceAC / 2);
        const yArrowAC: number = yMidAC;

        const distanceBC: number = Math.sqrt( ((xB - xC) * (xB - xC)) + ((yB - yC) * (yB - yC)));
        const angleRadianBC: number = Math.atan2(yB - yC, xB - xC);
        const angleDegreeBC: number = (angleRadianBC * 180) / Math.PI;
        const xMidBC: number = (xB + xC) / 2;
        const yMidBC: number = (yB + yC) / 2;
        const xArrowBC: number = xMidBC - (distanceBC / 2);
        const yArrowBC: number = yMidBC;
        
        const distanceAB: number = Math.sqrt( ((xA - xB) * (xA - xB)) + ((yA - yB) * (yA - yB)));
        const angleRadianAB: number = Math.atan2(yA - yB, xA - xB);
        const angleDegreeAB: number = (angleRadianAB * 180) / Math.PI;
        const xMidAB: number = (xA + xB) / 2;
        const yMidAB: number = (yA + yB) / 2;
        const xArrowAB: number = xMidAB - (distanceAB / 2);
        const yArrowAB: number = yMidAB;
        
        const angleRadianBA: number = Math.atan2(yB - yA, xB - xA);
        const angleDegreeBA: number = (angleRadianBA * 180) / Math.PI;
        
        const sizeArrowTriangle: number = 8;

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
                        top: yMidAB,
                        left: xMidAB,
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
    }

    public render() {

        const defineCenter: number = this.props.height / 2;

        const xA: number = this.synchroArrowX(parseInt(this.props.pointAPositionX, 10), defineCenter);
        const yA: number = this.synchroArrowY(parseInt(this.props.pointAPositionY, 10), defineCenter);
        const xB: number = this.synchroArrowX(parseInt(this.props.pointBPositionX, 10), defineCenter);
        const yB: number = this.synchroArrowY(parseInt(this.props.pointBPositionY, 10), defineCenter);
        const colorA: string = this.props.colorA;
        const colorB: string = this.props.colorB;
        //const orientationLink: string = this.props.orientationLink;
        const labelA: string = this.props.labelA;
        const labelB: string = this.props.labelB;


        return (
            <div>
                {
                    this.drawLink(xA, yA, xB, yB, colorA, colorB, labelA, labelB)
                }
            </div>
        );
    }

}