import React from 'react';
import { SelectableValue } from '@grafana/data';
import { PointClass } from 'Models/PointClass';
import { Tooltip } from '@grafana/ui';

interface Props {
  pointIn: SelectableValue<PointClass>;
  pointOut: SelectableValue<PointClass>;
  orientationLink: string;
  labelA: string;
  labelB: string;
  labelAPositionX: string;
  labelAPositionY: string;
  labelBPositionX: string;
  labelBPositionY: string;
  height: number;
  name: string;
}

interface State {}

export default class DrawLienWithPoints extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  private synchroArrowX(positionX: number, defineCenter: number): number {
    return positionX * (defineCenter / 100) + defineCenter;
  }

  private synchroArrowY(positionY: number, defineCenter: number): number {
    return defineCenter - positionY * (defineCenter / 100);
  }

  private defineXRegionOfPointIn(): number {
    let xRegion = 0;

    if (this.props.pointIn.value?.coordinateSpace.value !== undefined) {
      const xMin: number = parseInt(this.props.pointIn.value.coordinateSpace.value?.coords.xMin || '0', 10);
      const xMax: number = parseInt(this.props.pointIn.value.coordinateSpace.value?.coords.xMax || '0', 10);
      xRegion = (xMax + xMin) / 2;
    }
    return xRegion;
  }

  private defineYRegionOfPointIn(): number {
    let yRegion = 0;

    if (this.props.pointIn.value?.coordinateSpace.value !== undefined) {
      const yMin: number = parseInt(this.props.pointIn.value.coordinateSpace.value?.coords.yMin || '0', 10);
      const yMax: number = parseInt(this.props.pointIn.value.coordinateSpace.value?.coords.yMax || '0', 10);
      yRegion = (yMax + yMin) / 2;
    }
    return yRegion;
  }

  private defineXRegionOfPointOut(): number {
    let xRegion = 0;

    if (this.props.pointOut.value?.coordinateSpace.value !== undefined) {
      const xMin: number = parseInt(this.props.pointOut.value.coordinateSpace.value?.coords.xMin || '0', 10);
      const xMax: number = parseInt(this.props.pointOut.value.coordinateSpace.value?.coords.xMax || '0', 10);
      xRegion = (xMax + xMin) / 2;
    }
    return xRegion;
  }

  private defineYRegionOfPointOut(): number {
    let yRegion = 0;

    if (this.props.pointOut.value?.coordinateSpace.value !== undefined) {
      const yMin: number = parseInt(this.props.pointOut.value.coordinateSpace.value?.coords.yMin || '0', 10);
      const yMax: number = parseInt(this.props.pointOut.value.coordinateSpace.value?.coords.yMax || '0', 10);
      yRegion = (yMax + yMin) / 2;
    }
    return yRegion;
  }

  private drawLink(
    xA: number,
    xB: number,
    yA: number,
    yB: number,
    colorA: string,
    colorB: string,
    orientationLink: string,
    labelA: string,
    labelB: string,
    labelAPositionX: number,
    labelAPositionY: number,
    labelBPositionX: number,
    labelBPositionY: number
  ) {
    const xC: number = (xA + xB) / 2;
    const yC: number = (yA + yB) / 2;

    const distanceAC: number = Math.sqrt((xA - xC) * (xA - xC) + (yA - yC) * (yA - yC));
    const angleRadianAC: number = Math.atan2(yA - yC, xA - xC);
    const angleDegreeAC: number = (angleRadianAC * 180) / Math.PI;
    const xMidAC: number = (xA + xC) / 2;
    const yMidAC: number = (yA + yC) / 2;
    const xArrowAC: number = xMidAC - distanceAC / 2;
    const yArrowAC: number = yMidAC;

    const distanceBC: number = Math.sqrt((xB - xC) * (xB - xC) + (yB - yC) * (yB - yC));
    const angleRadianBC: number = Math.atan2(yB - yC, xB - xC);
    const angleDegreeBC: number = (angleRadianBC * 180) / Math.PI;
    const xMidBC: number = (xB + xC) / 2;
    const yMidBC: number = (yB + yC) / 2;
    const xArrowBC: number = xMidBC - distanceBC / 2;
    const yArrowBC: number = yMidBC;

    const distanceAB: number = Math.sqrt((xA - xB) * (xA - xB) + (yA - yB) * (yA - yB));
    const angleRadianAB: number = Math.atan2(yA - yB, xA - xB);
    const angleDegreeAB: number = (angleRadianAB * 180) / Math.PI;
    const xMidAB: number = (xA + xB) / 2;
    const yMidAB: number = (yA + yB) / 2;
    const xArrowAB: number = xMidAB - distanceAB / 2;
    const yArrowAB: number = yMidAB;

    const angleRadianBA: number = Math.atan2(yB - yA, xB - xA);
    const angleDegreeBA: number = (angleRadianBA * 180) / Math.PI;

    const sizeArrowTriangle = 8;

    if (orientationLink === 'double') {
      return (
        <div>
          <div>
            <div
              id="arrow1"
              style={{
                display: 'flex',
                alignContent: 'stretch',
                position: 'absolute',
                top: yArrowAC - sizeArrowTriangle / 2,
                left: xArrowAC,
                transform: 'rotate(' + angleDegreeAC + 'deg)',
                width: distanceAC,
              }}
            >
              <div
                style={{
                  width: '0',
                  height: '0',
                  borderLeft: sizeArrowTriangle + 'px solid transparent',
                  borderRight: sizeArrowTriangle + 'px solid transparent',
                  borderBottom: sizeArrowTriangle + 'px solid ' + colorA,
                  transform: 'rotate(270deg)',
                }}
              ></div>
              <div
                style={{
                  border: '1px solid ' + colorA,
                  backgroundColor: colorA,
                  width: distanceAC,
                }}
              ></div>
            </div>
            <div
              style={{
                position: 'absolute',
                top: yMidAC + labelAPositionY,
                left: xMidAC + labelAPositionX,
                fontSize: distanceAC * (10 / 100),
                backgroundColor: 'white',
                color: 'black',
                padding: '0 5px',
              }}
            >
              {labelA}
            </div>
          </div>
          <div>
            <div
              id="arrow2"
              style={{
                display: 'flex',
                alignContent: 'stretch',
                position: 'absolute',
                top: yArrowBC - sizeArrowTriangle / 2,
                left: xArrowBC,
                transform: 'rotate(' + angleDegreeBC + 'deg)',
                width: distanceBC,
              }}
            >
              <div
                style={{
                  width: '0',
                  height: '0',
                  borderLeft: sizeArrowTriangle + 'px solid transparent',
                  borderRight: sizeArrowTriangle + 'px solid transparent',
                  borderBottom: sizeArrowTriangle + 'px solid ' + colorB,
                  transform: 'rotate(270deg)',
                }}
              ></div>
              <div
                style={{
                  border: '1px solid ' + colorB,
                  backgroundColor: colorB,
                  width: distanceBC,
                }}
              ></div>
            </div>
            <div
              style={{
                position: 'absolute',
                top: yMidBC + labelBPositionY,
                left: xMidBC + labelBPositionX,
                fontSize: distanceBC * (10 / 100),
                backgroundColor: 'white',
                color: 'black',
                padding: '0 5px',
              }}
            >
              {labelB}
            </div>
          </div>
        </div>
      );
    } else if (orientationLink === 'AB') {
      return (
        <div>
          <div
            id="arrow1"
            style={{
              display: 'flex',
              alignContent: 'stretch',
              position: 'absolute',
              top: yArrowAB - sizeArrowTriangle / 2,
              left: xArrowAB,
              transform: 'rotate(' + angleDegreeAB + 'deg)',
              width: distanceAB,
            }}
          >
            <div
              style={{
                width: '0',
                height: '0',
                borderLeft: sizeArrowTriangle + 'px solid transparent',
                borderRight: sizeArrowTriangle + 'px solid transparent',
                borderBottom: sizeArrowTriangle + 'px solid ' + colorA,
                transform: 'rotate(270deg)',
              }}
            ></div>
            <div
              style={{
                border: '1px solid ' + colorA,
                backgroundColor: colorA,
                width: distanceAB,
              }}
            ></div>
          </div>
          <div
            style={{
              position: 'absolute',
              top: yMidAB + labelAPositionY,
              left: xMidAB + labelAPositionX,
              fontSize: distanceAB * (8 / 100),
              backgroundColor: 'white',
              color: 'black',
              padding: '0 5px',
            }}
          >
            {labelA}
          </div>
        </div>
      );
    } else if (orientationLink === 'BA') {
      return (
        <div>
          <div
            id="arrow1"
            style={{
              display: 'flex',
              alignContent: 'stretch',
              position: 'absolute',
              top: yArrowAB - sizeArrowTriangle / 2,
              left: xArrowAB,
              transform: 'rotate(' + angleDegreeBA + 'deg)',
              width: distanceAB,
            }}
          >
            <div
              style={{
                width: '0',
                height: '0',
                borderLeft: sizeArrowTriangle + 'px solid transparent',
                borderRight: sizeArrowTriangle + 'px solid transparent',
                borderBottom: sizeArrowTriangle + 'px solid ' + colorB,
                transform: 'rotate(270deg)',
              }}
            ></div>
            <div
              style={{
                border: '1px solid ' + colorB,
                backgroundColor: colorB,
                width: distanceAB,
              }}
            ></div>
          </div>
          <div
            style={{
              position: 'absolute',
              top: yMidAB + labelBPositionY,
              left: xMidAB + labelBPositionX,
              fontSize: distanceAB * (8 / 100),
              backgroundColor: 'white',
              color: 'black',
              padding: '0 5px',
            }}
          >
            {labelB}
          </div>
        </div>
      );
    }
    return <div></div>;
  }

  private defineValueToolTip = () => {
    const infosLink: JSX.Element[] = [];

    infosLink.push(<p>{this.props.name}</p>);

    return <div>{infosLink}</div>;
  };

  render() {
    const defineCenter: number = this.props.height / 2;
    const xA: number = this.synchroArrowX(
      parseInt(this.props.pointIn.value?.positionShapeX || '0', 10) + this.defineXRegionOfPointIn(),
      defineCenter
    );
    const yA: number = this.synchroArrowY(
      parseInt(this.props.pointIn.value?.positionShapeY || '0', 10) + this.defineYRegionOfPointIn(),
      defineCenter
    );
    const xB: number = this.synchroArrowX(
      parseInt(this.props.pointOut.value?.positionShapeX || '0', 10) + this.defineXRegionOfPointOut(),
      defineCenter
    );
    const yB: number = this.synchroArrowY(
      parseInt(this.props.pointOut.value?.positionShapeY || '0', 10) + this.defineYRegionOfPointOut(),
      defineCenter
    );
    const colorA: string = this.props.pointIn.value?.color || 'white';
    const colorB: string = this.props.pointOut.value?.color || 'white';
    const orientationLink: string = this.props.orientationLink;
    const labelA: string = this.props.labelA;
    const labelB: string = this.props.labelB;
    const labelAPositionX: number = parseInt(this.props.labelAPositionX, 10);
    const labelAPositionY: number = parseInt(this.props.labelAPositionY, 10) * -1;
    const labelBPositionX: number = parseInt(this.props.labelBPositionX, 10);
    const labelBPositionY: number = parseInt(this.props.labelBPositionY, 10) * -1;
    const valueToolTip: JSX.Element = this.defineValueToolTip();

    return (
      <Tooltip content={valueToolTip}>
        <div>
          {this.drawLink(
            xA,
            xB,
            yA,
            yB,
            colorA,
            colorB,
            orientationLink,
            labelA,
            labelB,
            labelAPositionX,
            labelAPositionY,
            labelBPositionX,
            labelBPositionY
          )}
        </div>
      </Tooltip>
    );
  }
}
