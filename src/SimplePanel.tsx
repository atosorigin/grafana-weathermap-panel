import React, { PureComponent } from 'react';
import { SimpleOptions, Background, Metric } from 'types';

import { PanelProps, SelectableValue, DataFrame } from '@grafana/data';
import { CustomScrollbar, Modal, Button } from '@grafana/ui';

import { PointClass } from 'Models/PointClass';
import { LinkClass } from 'Models/LinkClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import { RegionClass, Coord4D } from 'Models/RegionClass';
import { TextObject } from 'Models/TextObjectClass';
import { LinkURLClass } from 'Models/LinkURLClass';
// import { LowerLimitClass } from 'Models/LowerLimitClass';

//import { getResultQuery } from 'Functions/getResultQuery';

import { reqMetricPoint, reqMetricOrientedLink, reqMetricAuxOrientedLink, reqMetricAuxPoint } from 'Functions/fetchMetrics';
import { getResultQuery } from 'Functions/getResultQuery';

import AddCoordinate from 'components/CoordinateSpace/addCoordinate';
import DrawRectangle from './components/Draw/drawRectangle';
import LegendComponant from './components/legend';
// import DrawRectangleExtend from './components/Draw/drawRectangleExtend';
import DrawPoint from './components/Draw/drawPoint';
import DrawArrow from './components/Draw/drawArrow';
import DrawLinkWithCoordinates from './components/Draw/drawLinkWithCoordinates';
import DrawLinkWithPoints from './components/Draw/drawLinkWithPoints';
import DrawLinkWithRegions from './components/Draw/drawLinkWithRegions';
import DrawOrientedLink from './components/Draw/drawOrientedLink';
import { PositionParameterClass } from 'Models/PositionParameterClass';

interface Props extends PanelProps<SimpleOptions> {}

interface Legend {
  hiddenLegend: boolean;
  x: number;
  y: number;
}

interface State {
  // isUpdate: boolean;
  // sizePanel: number;
  idOrientedLink: number;
  valueButton: string;
  /**
   * manage button
   * [0] -> addNode
   * [1] -> addLink
   * [2] -> positionLegend
   * [3] -> addPoint
   * [4] -> addIncurvedLink
   */
  buttonManage: boolean[];
  numberClickDiv: number;
  allActionButton: JSX.Element;
  // valueLegend: JSX.Element;
  // seuil: LowerLimitClass[];
  nbClickButton: boolean;
  legend: Legend;
  // img: JSX.Element;
  svg: string;
  // loading: boolean;
  // url: string;
  displayRegion: JSX.Element;
  // idSVG: string;
  tooltip: JSX.Element;
}

/**
 * Affichage
 */
export class SimplePanel extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      // isUpdate: false,
      // sizePanel: 300,
      idOrientedLink: this.props.options.indexOrientedLink,
      valueButton: '',
      buttonManage: [false, false, false, false, false],
      numberClickDiv: 0,
      allActionButton: <div></div>,
      // valueLegend: <div></div>,
      // seuil: [],
      nbClickButton: false,
      legend: { hiddenLegend: true, x: 0, y: 0 },
      // img: <div></div>,
      svg: '',
      // loading: false,
      // url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/tiger.svg',
      displayRegion: <div></div>,
      // idSVG: '',
      tooltip: <div>salut</div>,
    };
  }

  /**
   * TODO
   */
  // private fillCoordinate = (): JSX.Element => {
  // 	const { options } = this.props;
  // 	let mapItems: JSX.Element[];

  // 	mapItems = options.regionCoordinateSpace
  // 		.map((line: RegionClass, index) =>
  // 			<DrawRectangleExtend
  // 				key={'drawRectangleExtend' + index.toString()}
  // 				uneCoor={line}
  // 				useLimit={false}
  // 				limit={options.coordinateSpaceInitial}
  // 				onOptionsChange={this.props.onOptionsChange}
  // 				options={this.props.options}
  // 				data={this.props.data}
  // 				id={'region' + line.id.toString()}
  // 				isEnabled={!this.state.buttonManage[1]} />
  // 		);
  // 	return (
  // 		<ul>
  // 			{mapItems}
  // 		</ul>
  // 	);
  // }

  /**
   * Display limit (coordinateSpaceInitial)
   * @returns JSX.Element
   */
  defineLimit = (): JSX.Element => {
    const { coordinateSpaceInitial } = this.props.options;
    let jsxItems: JSX.Element;

    jsxItems = (
      <DrawRectangle
        key="limitCoor"
        color="orange"
        coordinateInitial={coordinateSpaceInitial}
        id="initialSpace"
        onOptionsChange={this.props.onOptionsChange}
        options={this.props.options}
        data={this.props.data}
        isEnabled={!this.state.buttonManage[1]}
      />
    );
    return jsxItems;
  };

  /**
   * to do
   */
  private getCoordinatesToDrawPointWithClick = (event: any) => {
    let positionX = 0;
    let positionY = 0;
    const widthPanel: number = parseInt(this.props.options.baseMap.width, 10);
    const heightPanel: number = parseInt(this.props.options.baseMap.height, 10);

    const initialSpace: Coord4D = this.props.options.coordinateSpaceInitial.coordinate;
    const xMin: number = parseInt(initialSpace.xMin, 10);
    const xMinPx: number = (xMin + 100) * (widthPanel / 200);
    const xMax: number = parseInt(initialSpace.xMax, 10);
    const xMaxPx: number = (xMax + 100) * (widthPanel / 200);
    const widthInitialSpace: number = xMaxPx - xMinPx;
    const yMin: number = parseInt(initialSpace.yMin, 10);
    const yMinPx: number = (yMin + 100) * (heightPanel / 200);
    const yMax: number = parseInt(initialSpace.yMax, 10);
    const yMaxPx: number = (yMax + 100) * (heightPanel / 200);
    const heightInitialSpace: number = yMaxPx - yMinPx;

    //positionX = Math.round(((event.nativeEvent.offsetX) - (widthPanel / 2)) * (100 / widthPanel)) * 2;
    //positionY = (Math.round(((event.nativeEvent.offsetY) - (heightPanel / 2)) * (100 / heightPanel)) * 2) * (-1);
    positionX = Math.round((event.nativeEvent.offsetX - widthInitialSpace / 2) * (100 / widthInitialSpace)) * 2;
    positionY = Math.round((event.nativeEvent.offsetY - heightInitialSpace / 2) * (100 / heightInitialSpace)) * 2 * -1;

    if (event.nativeEvent.target.id === 'initialSpace' || event.nativeEvent.target.id === 'mainPanel') {
      this.createPointToClick(positionX, positionY);
    }
  };

  private defineIdPoint = (): number => {
    let id = 1;
    if (this.props.options.arrayPoints.length === 0) {
      return id;
    } else {
      id = this.props.options.arrayPoints[this.props.options.arrayPoints.length - 1].id + 1;
      return id;
    }
  };

  /**
   * to do
   */
  private createPointToClick = (x: number, y: number) => {
    const id: number = this.defineIdPoint();
    const initTextObject: TextObject = new TextObject(
      '',
      false,
      '',
      '',
      '',
      false,
      {
        legendElement: '',
        numericFormatElement: '',
        unit: '',
        displayObjectInText: false,
        // 'displayObjectPermanently': false,
        addColorTextElement: false,
        colorTextElement: 'white',
        addColorBackElement: false,
        colorBackElement: 'black',
      },
      {
        legendElement: '',
        numericFormatElement: '',
        unit: '',
        displayObjectInText: false,
        // 'displayObjectPermanently': false,
        addColorTextElement: false,
        colorTextElement: 'white',
        addColorBackElement: false,
        colorBackElement: 'black',
      }
    );
    const parametrageMetric: LinkURLClass = new LinkURLClass('', '', '');
    const positionParameter: PositionParameterClass = new PositionParameterClass('0', '0', '0', '0', {}, {});
    const newPoint: PointClass = new PointClass(
      id,
      parametrageMetric,
      '',
      [],
      '',
      initTextObject,
      {
        key: '',
        unit: '',
        format: '',
        keyValue: '',
        refId: '',
        manageValue: 'avg',
      },
      [],
      false,
      false,
      false,
      positionParameter,
      'point' + id.toString(),
      '',
      {},
      { label: 'Yes', value: 'true' },
      { label: 'Circle', value: 'circle' },
      { label: 'Medium', value: 'medium' },
      { label: 'Medium', value: 'medium' },
      '0',
      x.toString(),
      y.toString(),
      'black',
      [],
      [],
      [],
      []
    );

    const newArrayPoint: PointClass[] = this.props.options.arrayPoints;
    newArrayPoint.push(newPoint);
    this.props.onOptionsChange({
      ...this.props.options,
      indexPoint: id,
      arrayPoints: newArrayPoint,
    });

    setTimeout(() => {
      this.displayPoint();
    }, 100);
  };

  /**
   * to do
   */
  private displayPoint() {
    const mapItems: JSX.Element[] = [];

    this.props.options.arrayPoints.forEach((line: PointClass) => {
      this.getValuesMainMetricOfPoint(line);
      const valuesAuxiliaryMetrics: string[] = this.getValuesAuxiliaryMetricsPoint(line);
      if (line.shape.value === 'arrow') {
        const item: JSX.Element = (
          <DrawArrow
            key={'point' + line.id.toString()}
            coordinateSpace={line.coordinateSpace}
            drawGraphicmarker={line.drawGraphicMarker}
            shape={line.shape}
            sizeWidth={line.sizeWidth}
            sizeHeight={line.sizeHeight}
            rotate={line.rotateArrow}
            positionShapeX={line.positionShapeX}
            positionShapeY={line.positionShapeY}
            label={line.label}
            height={parseInt(this.props.options.baseMap.height, 10)}
            police={this.props.options.display.police}
            sizePolice={this.props.options.display.size}
            color={line.color}
            idPoint={'point' + line.id.toString()}
            name={line.name}
            orientedLinksIn={line.associateOrientedLinksIn}
            orientedLinksOut={line.associateOrientedLinksOut}
            textObject={line.textObj}
            seuil={line.lowerLimit}
          />
        );

        mapItems.push(item);
      } else if (line.shape.value === 'circle' || line.shape.value === 'cross') {
        const item: JSX.Element = (
          <DrawPoint
            key={'point' + line.id.toString()}
            coordinateSpace={line.coordinateSpace}
            drawGraphicMarker={line.drawGraphicMarker}
            shape={line.shape}
            size={line.sizeWidth}
            positionShapeX={line.positionShapeX}
            positionShapeY={line.positionShapeY}
            label={line.label}
            widthImage={parseInt(this.props.options.baseMap.width, 10)}
            heightImage={parseInt(this.props.options.baseMap.height, 10)}
            police={this.props.options.display.police}
            sizePolice={this.props.options.display.size}
            color={line.color}
            idPoint={'point' + line.id.toString()}
            name={line.name}
            options={this.props.options}
            onOptionsChange={this.props.onOptionsChange}
            data={this.props.data}
            textObject={line.textObj}
            seuil={line.lowerLimit}
            valueMainMetric={line.valueMetric}
            refMainMetric={line.mainMetric.refId || ''}
            associateOrientedLinkIn={line.associateOrientedLinksIn}
            associateOrientedLinkOut={line.associateOrientedLinksOut}
            labelPositionX={line.positionParameter.labelAPositionX}
            labelPositionY={line.positionParameter.labelAPositionY}
            tooltipPosition={line.positionParameter.tooltipPositionA}
            auxiliaryMetrics={line.metrics}
            valuesAuxiliaryMetrics={valuesAuxiliaryMetrics}
          />
        );

        mapItems.push(item);
      }
    });

    return <div>{mapItems}</div>;
  }

  /** display link with coordinate */
  displayLink() {
    const { options } = this.props;
    const mapItems: JSX.Element[] = [];
    const arrayLinks: LinkClass[] = options.arrayLinks;

    arrayLinks.forEach((link: LinkClass) => {
      let item: JSX.Element = <div></div>;
      if (link.defineHowToGetCoordonate.value === 'coordinate') {
        item = (
          <DrawLinkWithCoordinates
            key={'link' + link.id.toString()}
            pointAPositionX={link.pointAPositionX}
            pointAPositionY={link.pointAPositionY}
            pointBPositionX={link.pointBPositionX}
            pointBPositionY={link.pointBPositionY}
            colorA={link.colorCoordinateA}
            colorB={link.colorCoordinateB}
            orientationLink={link.orientationLink.value || ''}
            labelA={link.labelLinkA}
            labelB={link.labelLinkB}
            labelAPositionX={link.positionXLabelA}
            labelAPositionY={link.positionYLabelA}
            labelBPositionX={link.positionXLabelB}
            labelBPositionY={link.positionYLabelB}
            height={parseInt(this.props.options.baseMap.height, 10)}
            name={link.name}
          />
        );
      } else if (link.defineHowToGetCoordonate.value === 'point') {
        item = (
          <DrawLinkWithPoints
            key={'link' + link.id.toString()}
            pointIn={link.pointIn}
            pointOut={link.pointOut}
            labelA={link.labelLinkA}
            labelB={link.labelLinkB}
            labelAPositionX={link.positionXLabelA}
            labelAPositionY={link.positionYLabelA}
            labelBPositionX={link.positionXLabelB}
            labelBPositionY={link.positionYLabelB}
            orientationLink={link.orientationLink.value || ''}
            height={parseInt(this.props.options.baseMap.height, 10)}
            name={link.name}
          />
        );
      } else if (link.defineHowToGetCoordonate.value === 'region') {
        item = (
          <DrawLinkWithRegions
            key={'link' + link.id.toString()}
            regionIn={link.regionIn}
            regionOut={link.regionOut}
            colorA={link.colorRegionIn}
            colorB={link.colorRegionOut}
            labelA={link.labelLinkA}
            labelB={link.labelLinkB}
            labelAPositionX={link.positionXLabelA}
            labelAPositionY={link.positionYLabelA}
            labelBPositionX={link.positionXLabelB}
            labelBPositionY={link.positionYLabelB}
            orientationLink={link.orientationLink.value || ''}
            height={parseInt(this.props.options.baseMap.height, 10)}
            name={link.name}
          />
        );
      }
      mapItems.push(item);
    });
    return <ul>{mapItems}</ul>;
  }

  /**
   * to do
   */
  private addAssociateOrientedLinkToPoint = (namePointIn: string, namePointOut: string, indexOrientedLinkAssociate: number) => {
    let index = 0;
    this.props.options.arrayPoints.forEach((point: PointClass) => {
      const name: string = point.label || point.name;
      if (namePointIn === name) {
        this.props.options.arrayOrientedLinks.forEach((orientedLink: OrientedLinkClass) => {
          if (orientedLink.id === indexOrientedLinkAssociate) {
            this.props.options.arrayPoints[index].associateOrientedLinksIn.push({ label: orientedLink.label, name: orientedLink.name });
          }
        });
      } else if (namePointOut === name) {
        this.props.options.arrayOrientedLinks.forEach((orientedLink: OrientedLinkClass) => {
          if (orientedLink.id === indexOrientedLinkAssociate) {
            this.props.options.arrayPoints[index].associateOrientedLinksOut.push({ label: orientedLink.label, name: orientedLink.name });
          }
        });
      }
      index++;
    });
  };

  /**
   * to do
   */
  private updateAssociateOrientedLinkInToPoint = () => {
    let indexPoint = 0;
    this.props.options.arrayPoints.forEach((point: PointClass) => {
      let indexAssociateOrientedLinkIn = 0;
      point.associateOrientedLinksIn.forEach(oneAssociateOrientedLinksIn => {
        let orientedLinkExist = false;
        this.props.options.arrayOrientedLinks.forEach((orientedLink: OrientedLinkClass) => {
          if (oneAssociateOrientedLinksIn.name === orientedLink.name) {
            orientedLinkExist = true;
            if (orientedLink.label) {
              this.props.options.arrayPoints[indexPoint].associateOrientedLinksIn[indexAssociateOrientedLinkIn] = {
                label: orientedLink.label,
                name: orientedLink.name,
              };
            } else {
              this.props.options.arrayPoints[indexPoint].associateOrientedLinksIn[indexAssociateOrientedLinkIn] = {
                label: '',
                name: orientedLink.name,
              };
            }
          }
        });
        if (orientedLinkExist === false) {
          this.props.options.arrayPoints[indexPoint].associateOrientedLinksIn.splice(indexAssociateOrientedLinkIn, 1);
        }
        indexAssociateOrientedLinkIn++;
      });
      indexPoint++;
    });
  };

  /**
   * to do
   */
  private updateAssociateOrientedLinkOutToPoint = () => {
    let indexPoint = 0;
    this.props.options.arrayPoints.forEach((point: PointClass) => {
      let indexAssociateOrientedLinkOut = 0;
      point.associateOrientedLinksOut.forEach(oneAssociateOrientedLinksOut => {
        let orientedLinkExist = false;
        this.props.options.arrayOrientedLinks.forEach((orientedLink: OrientedLinkClass) => {
          if (oneAssociateOrientedLinksOut.name === orientedLink.name) {
            orientedLinkExist = true;
            if (orientedLink.label) {
              this.props.options.arrayPoints[indexPoint].associateOrientedLinksOut[indexAssociateOrientedLinkOut] = {
                label: orientedLink.label,
                name: orientedLink.name,
              };
            } else {
              this.props.options.arrayPoints[indexPoint].associateOrientedLinksOut[indexAssociateOrientedLinkOut] = {
                label: '',
                name: orientedLink.name,
              };
            }
          }
        });
        if (orientedLinkExist === false) {
          this.props.options.arrayPoints[indexPoint].associateOrientedLinksOut.splice(indexAssociateOrientedLinkOut, 1);
        }
        indexAssociateOrientedLinkOut++;
      });
      indexPoint++;
    });
  };

  /**
   * to do
   */
  private resetCoordinatesToDrawLinkWithClick = () => {
    this.props.options.coordinatesToDrawLinkWithClick[1].labelPoint = '';
    this.props.options.coordinatesToDrawLinkWithClick[1].point = {};
    this.props.options.coordinatesToDrawLinkWithClick[1].labelRegion = '';
    this.props.options.coordinatesToDrawLinkWithClick[1].region = {};
    this.props.options.coordinatesToDrawLinkWithClick[2].labelPoint = '';
    this.props.options.coordinatesToDrawLinkWithClick[2].point = {};
    this.props.options.coordinatesToDrawLinkWithClick[2].labelRegion = '';
    this.props.options.coordinatesToDrawLinkWithClick[2].region = {};
  };

  /** get coordinate when use click in panel */
  private getCoordinatesToDrawOrientedLinkWithClick = (event: any) => {
    let positionX = 0;
    let positionY = 0;
    const coordinates = this.props.options.coordinatesToDrawLinkWithClick;
    const objectIn: any = coordinates[1];
    const objectOut: any = coordinates[2];
    const pointC: any = coordinates[3];
    const heightPanel: number = parseInt(this.props.options.baseMap.height, 10);
    const widthPanel: number = parseInt(this.props.options.baseMap.width, 10);
    const initialSpace: Coord4D = this.props.options.coordinateSpaceInitial.coordinate;
    const xMin: number = parseInt(initialSpace.xMin, 10);
    const xMinPx: number = (xMin + 100) * (widthPanel / 200);
    const xMax: number = parseInt(initialSpace.xMax, 10);
    const xMaxPx: number = (xMax + 100) * (widthPanel / 200);
    const widthInitialSpace: number = xMaxPx - xMinPx;
    const yMin: number = parseInt(initialSpace.yMin, 10);
    const yMinPx: number = (yMin + 100) * (heightPanel / 200);
    const yMax: number = parseInt(initialSpace.yMax, 10);
    const yMaxPx: number = (yMax + 100) * (heightPanel / 200);
    const heightInitialSpace: number = yMaxPx - yMinPx;

    if (event.nativeEvent.target.id === 'initialSpace') {
      positionX = Math.round((event.nativeEvent.offsetX - widthInitialSpace / 2) * (100 / widthInitialSpace)) * 2;
      positionY = Math.round((event.nativeEvent.offsetY - heightInitialSpace / 2) * (100 / heightInitialSpace)) * 2;

      if (coordinates[0].id === 0) {
        objectIn.x = positionX;
        objectIn.y = positionY * -1;
        coordinates[0].id++;
      } else if (coordinates[0].id === 1) {
        objectOut.x = positionX;
        objectOut.y = positionY * -1;
        pointC.x = ((parseInt(objectIn.x, 10) + parseInt(objectOut.x, 10)) / 2).toString();
        pointC.y = ((parseInt(objectIn.y, 10) + parseInt(objectOut.y, 10)) / 2).toString();
        coordinates[0].id = 0;
        this.createOrientedLinkToClick({ label: 'No', value: false });
        this.resetCoordinatesToDrawLinkWithClick();
      }
    } else if (event.nativeEvent.target.id.startsWith('point')) {
      const id: number = parseInt(event.nativeEvent.target.id.charAt(5) + event.nativeEvent.target.id.charAt(6), 10);
      const arrayPoint: PointClass[] = this.props.options.arrayPoints;

      arrayPoint.forEach((point: PointClass) => {
        if (point.id === id) {
          const coordinates = this.props.options.coordinatesToDrawLinkWithClick;
          const name: string = point.label || point.name;

          if (coordinates[0].id === 0) {
            objectIn.x = point.positionShapeX;
            objectIn.y = point.positionShapeY;
            objectIn.labelPoint = name;
            objectIn.point = point;
            coordinates[0].id++;
          } else if (coordinates[0].id === 1) {
            objectOut.x = point.positionShapeX;
            objectOut.y = point.positionShapeY;
            objectOut.labelPoint = name;
            objectOut.point = point;
            pointC.x = ((parseInt(objectIn.x, 10) + parseInt(objectOut.x, 10)) / 2).toString();
            pointC.y = ((parseInt(objectIn.y, 10) + parseInt(objectOut.y, 10)) / 2).toString();
            coordinates[0].id = 0;

            this.createOrientedLinkToClick({ label: 'No', value: false });
            this.resetCoordinatesToDrawLinkWithClick();
          }
        }
      });
    } else {
      const arrayRegion: RegionClass[] = this.props.options.regionCoordinateSpace;

      arrayRegion.forEach((region: RegionClass) => {
        const xMin: number = parseInt(region.coords.xMin, 10);
        const xMax: number = parseInt(region.coords.xMax, 10);
        const yMin: number = parseInt(region.coords.yMin, 10);
        const yMax: number = parseInt(region.coords.yMax, 10);

        if (event.nativeEvent.target.id.startsWith('region')) {
          const id: number = parseInt(event.nativeEvent.target.id.charAt(6) + event.nativeEvent.target.id.charAt(7), 10);
          if (id === region.id) {
            const coordinates = this.props.options.coordinatesToDrawLinkWithClick;

            positionX = (xMin + xMax) / 2;
            positionY = (yMax + yMin) / 2;
            if (coordinates[0].id === 0) {
              objectIn.x = positionX;
              objectIn.y = positionY;
              objectIn.labelRegion = region.label;
              objectIn.region = region;
              coordinates[0].id++;
            } else if (coordinates[0].id === 1) {
              objectOut.x = positionX;
              objectOut.y = positionY;
              objectOut.labelRegion = region.label;
              objectOut.region = region;
              pointC.x = ((parseInt(objectIn.x, 10) + parseInt(objectOut.x, 10)) / 2).toString();
              pointC.y = ((parseInt(objectIn.y, 10) + parseInt(objectOut.y, 10)) / 2).toString();
              coordinates[0].id = 0;
              this.createOrientedLinkToClick({ label: 'No', value: false });
              this.resetCoordinatesToDrawLinkWithClick();
            }
          }
        } else {
          const id: number = parseInt(event.nativeEvent.target.offsetParent.id.charAt(6) + event.nativeEvent.target.offsetParent.id.charAt(7), 10);

          if (id === region.id) {
            const coordinates = this.props.options.coordinatesToDrawLinkWithClick;

            positionX = (xMin + xMax) / 2;
            positionY = (yMax + yMin) / 2;
            if (coordinates[0].id === 0) {
              objectIn.x = positionX;
              objectIn.y = positionY;
              objectIn.labelRegion = region.label;
              objectIn.region = region;
              coordinates[0].id++;
            } else if (coordinates[0].id === 1) {
              objectOut.x = positionX;
              objectOut.y = positionY;
              objectOut.labelRegion = region.label;
              objectOut.region = region;
              pointC.x = ((parseInt(objectIn.x, 10) + parseInt(objectOut.x, 10)) / 2).toString();
              pointC.y = ((parseInt(objectIn.y, 10) + parseInt(objectOut.y, 10)) / 2).toString();
              coordinates[0].id = 0;
              this.createOrientedLinkToClick({ label: 'No', value: false });
              this.resetCoordinatesToDrawLinkWithClick();
            }
          }
        }
      });
    }
  };

  private getCoordinatesToDrawIncurvedOrientedLinkWithClick = (event: any) => {
    let positionX = 0;
    let positionY = 0;
    const coordinates = this.props.options.coordinatesToDrawLinkWithClick;
    const objectIn: any = coordinates[1];
    const objectOut: any = coordinates[2];
    const pointC: any = coordinates[3];
    const heightPanel: number = parseInt(this.props.options.baseMap.height, 10);
    const widthPanel: number = parseInt(this.props.options.baseMap.width, 10);
    const initialSpace: Coord4D = this.props.options.coordinateSpaceInitial.coordinate;
    const xMin: number = parseInt(initialSpace.xMin, 10);
    const xMinPx: number = (xMin + 100) * (widthPanel / 200);
    const xMax: number = parseInt(initialSpace.xMax, 10);
    const xMaxPx: number = (xMax + 100) * (widthPanel / 200);
    const widthInitialSpace: number = xMaxPx - xMinPx;
    const yMin: number = parseInt(initialSpace.yMin, 10);
    const yMinPx: number = (yMin + 100) * (heightPanel / 200);
    const yMax: number = parseInt(initialSpace.yMax, 10);
    const yMaxPx: number = (yMax + 100) * (heightPanel / 200);
    const heightInitialSpace: number = yMaxPx - yMinPx;

    if (
      //event.nativeEvent.target.id === 'mainPanel' ||
      event.nativeEvent.target.id === 'initialSpace'
    ) {
      positionX = Math.round((event.nativeEvent.offsetX - widthInitialSpace / 2) * (100 / widthInitialSpace)) * 2;
      positionY = Math.round((event.nativeEvent.offsetY - heightInitialSpace / 2) * (100 / heightInitialSpace)) * 2;

      if (coordinates[0].id === 0) {
        objectIn.x = positionX;
        objectIn.y = positionY * -1;
        coordinates[0].id++;
      } else if (coordinates[0].id === 1) {
        objectOut.x = positionX;
        objectOut.y = positionY * -1;
        coordinates[0].id++;
      } else if (coordinates[0].id === 2) {
        pointC.x = positionX;
        pointC.y = positionY * -1;
        coordinates[0].id = 0;
        this.createOrientedLinkToClick({ label: 'Yes', value: true });
        this.resetCoordinatesToDrawLinkWithClick();
      }
    } else if (event.nativeEvent.target.id.startsWith('point')) {
      const id: number = parseInt(event.nativeEvent.target.id.charAt(5) + event.nativeEvent.target.id.charAt(6), 10);
      const arrayPoint: PointClass[] = this.props.options.arrayPoints;

      arrayPoint.forEach((point: PointClass) => {
        if (point.id === id) {
          const coordinates = this.props.options.coordinatesToDrawLinkWithClick;
          const name: string = point.label || point.name;

          if (coordinates[0].id === 0) {
            objectIn.x = point.positionShapeX;
            objectIn.y = point.positionShapeY;
            objectIn.labelPoint = name;
            objectIn.point = point;
            coordinates[0].id++;
          } else if (coordinates[0].id === 1) {
            objectOut.x = point.positionShapeX;
            objectOut.y = point.positionShapeY;
            objectOut.labelPoint = name;
            objectOut.point = point;
            coordinates[0].id++;
          } else if (coordinates[0].id === 2) {
            pointC.x = point.positionShapeX;
            pointC.y = point.positionShapeY;
            coordinates[0].id = 0;
            this.createOrientedLinkToClick({ label: 'Yes', value: true });
            this.resetCoordinatesToDrawLinkWithClick();
          }
        }
      });
    } else {
      const arrayRegion: RegionClass[] = this.props.options.regionCoordinateSpace;

      arrayRegion.forEach((region: RegionClass) => {
        const xMin: number = parseInt(region.coords.xMin, 10);
        const xMax: number = parseInt(region.coords.xMax, 10);
        const yMin: number = parseInt(region.coords.yMin, 10);
        const yMax: number = parseInt(region.coords.yMax, 10);

        if (event.nativeEvent.target.id.startsWith('region')) {
          const id: number = parseInt(event.nativeEvent.target.id.charAt(6) + event.nativeEvent.target.id.charAt(7), 10);
          if (id === region.id) {
            const coordinates = this.props.options.coordinatesToDrawLinkWithClick;
            positionX = (xMin + xMax) / 2;
            positionY = (yMax + yMin) / 2;
            if (coordinates[0].id === 0) {
              objectIn.x = positionX;
              objectIn.y = positionY;
              objectIn.labelRegion = region.label;
              objectIn.region = region;
              coordinates[0].id++;
            } else if (coordinates[0].id === 1) {
              objectOut.x = positionX;
              objectOut.y = positionY;
              objectOut.labelRegion = region.label;
              objectOut.region = region;
              coordinates[0].id++;
            } else if (coordinates[0].id === 0) {
              pointC.x = positionX;
              pointC.y = positionY;
              coordinates[0].id = 0;
              this.createOrientedLinkToClick({ label: 'Yes', value: true });
              this.resetCoordinatesToDrawLinkWithClick();
            }
          }
        } else {
          const id: number = parseInt(event.nativeEvent.target.offsetParent.id.charAt(6) + event.nativeEvent.target.offsetParent.id.charAt(7), 10);

          if (id === region.id) {
            const coordinates = this.props.options.coordinatesToDrawLinkWithClick;

            positionX = (xMin + xMax) / 2;
            positionY = (yMax + yMin) / 2;
            if (coordinates[0].id === 0) {
              objectIn.x = positionX;
              objectIn.y = positionY;
              objectIn.labelRegion = region.label;
              objectIn.region = region;
              coordinates[0].id++;
            } else if (coordinates[0].id === 1) {
              objectOut.x = positionX;
              objectOut.y = positionY;
              objectOut.labelRegion = region.label;
              objectOut.region = region;
              coordinates[0].id++;
            } else if (coordinates[0].id === 2) {
              pointC.x = positionX;
              pointC.y = positionY;
              coordinates[0].id = 0;
              this.createOrientedLinkToClick({ label: 'Yes', value: true });
              this.resetCoordinatesToDrawLinkWithClick();
            }
          }
        }
      });
    }
  };

  // private defineAssociateOrientedLinkToRegion(): OrientedLinkClass[] {
  // 	const arrayRegion: RegionClass[] = this.props.options.regionCoordinateSpace;
  // 	const arrayAllOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
  // 	const arrayOrientedLinkAssociateRegionIn: OrientedLinkClass[] = [];
  // 	const arrayOrientedLinkAssociateRegionOut: OrientedLinkClass[] = [];
  // 	let arrayToReturn: OrientedLinkClass[] = [];
  // 	arrayRegion.forEach((region) => {
  // 		arrayAllOrientedLink.forEach((orientedLink) => {
  // 			arrayToReturn = [];
  // 			if (region.id === orientedLink.regionIn.id) {
  // 				arrayOrientedLinkAssociateRegionIn.push(orientedLink);
  // 				arrayToReturn = arrayOrientedLinkAssociateRegionIn;
  // 				region.orientedLink = arrayToReturn;
  // 			}
  // 			if (region.id === orientedLink.regionOut.id) {
  // 				arrayOrientedLinkAssociateRegionOut.push(orientedLink);
  // 				arrayToReturn = arrayOrientedLinkAssociateRegionOut;
  // 				region.orientedLink = arrayToReturn;
  // 			}
  // 		});
  // 	});
  // 	return arrayToReturn;
  // }

  /**
   * to do
   */
  private defineIdOrientedLink = (): number => {
    let id = 1;
    if (this.props.options.arrayOrientedLinks.length === 0) {
      return id;
    } else {
      id = this.props.options.arrayOrientedLinks[this.props.options.arrayOrientedLinks.length - 1].id + 1;
      return id;
    }
  };

  /**
   * to do
   */
  private createOrientedLinkToClick = (isIncurved: SelectableValue<boolean>) => {
    const coordinates = this.props.options.coordinatesToDrawLinkWithClick;
    const id: number = this.defineIdOrientedLink();
    const name: string = 'orientedLink' + id.toString();
    const zIndex: number = this.props.options.zIndexOrientedLink + 1;
    const objectIn: any = coordinates[1];
    const objectOut: any = coordinates[2];
    const pointC: any = coordinates[3];
    const initTextObject: TextObject = new TextObject(
      '',
      false,
      '',
      '',
      '',
      false,
      {
        legendElement: '',
        numericFormatElement: '',
        unit: '',
        displayObjectInText: false,
        // 'displayObjectPermanently': false,
        addColorTextElement: false,
        colorTextElement: 'white',
        addColorBackElement: false,
        colorBackElement: 'black',
      },
      {
        legendElement: '',
        numericFormatElement: '',
        unit: '',
        displayObjectInText: false,
        // 'displayObjectPermanently': false,
        addColorTextElement: false,
        colorTextElement: 'white',
        addColorBackElement: false,
        colorBackElement: 'black',
      }
    );
    const parametrageMetric: LinkURLClass = new LinkURLClass('', '', '');
    const positionParameter: PositionParameterClass = new PositionParameterClass('0', '0', '0', '0', {}, {});

    const newOrientedLink: OrientedLinkClass = new OrientedLinkClass(
      id,
      parametrageMetric,
      '',
      [],
      '',
      initTextObject,
      {
        key: '',
        unit: '',
        format: '',
        keyValue: '',
        refId: '',
        manageValue: 'avg',
      },
      [],
      false,
      false,
      false,
      positionParameter,
      name,
      { label: 'Monodirectional', value: 'AB' },
      objectIn.x.toString(),
      objectIn.y.toString(),
      '#5794F2',
      objectOut.x.toString(),
      objectOut.y.toString(),
      '#E54658',
      '',
      '',
      objectIn.labelPoint,
      objectOut.labelPoint,
      objectIn.labelRegion,
      objectOut.labelRegion,
      zIndex,
      pointC.x,
      pointC.y,
      isIncurved
    );
    const newArrayOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
    newArrayOrientedLink.push(newOrientedLink);
    this.props.onOptionsChange({
      ...this.props.options,
      arrayOrientedLinks: newArrayOrientedLink,
      indexOrientedLink: id,
      zIndexOrientedLink: zIndex,
    });

    this.addAssociateOrientedLinkToPoint(objectIn.labelPoint || '', objectOut.labelPoint || '', newOrientedLink.id);

    setTimeout(() => {
      this.displayOrientedLink();
    }, 100);
  };

  /**
   * to do
   */
  private displayOrientedLink() {
    const arrayOrientedLink = this.props.options.arrayOrientedLinks;
    const mapItems: JSX.Element[] = [];
    let item: JSX.Element = <div></div>;
    arrayOrientedLink.forEach((orientedLink: OrientedLinkClass) => {
      this.getValuesMainMetricOfOrientedLink(orientedLink);
      const valuesAuxiliaryMetrics: string[] = this.getValuesAuxiliaryMetricsOrientedLink(orientedLink);
      item = (
        <DrawOrientedLink
          key={'orientedLink' + orientedLink.id.toString()}
          id={orientedLink.id.toString()}
          orientationLink={orientedLink.orientationLink.value || ''}
          pointAPositionX={orientedLink.pointAPositionX}
          pointAPositionY={orientedLink.pointAPositionY}
          pointBPositionX={orientedLink.pointBPositionX}
          pointBPositionY={orientedLink.pointBPositionY}
          colorA={orientedLink.colorCoordinateA}
          colorB={orientedLink.colorCoordinateB}
          associatePointIn={orientedLink.pointIn}
          associatePointOut={orientedLink.pointOut}
          associateRegionIn={orientedLink.regionIn}
          associateRegionOut={orientedLink.regionOut}
          widthImage={parseInt(this.props.options.baseMap.width, 10)}
          heightImage={parseInt(this.props.options.baseMap.height, 10)}
          label={orientedLink.label}
          name={orientedLink.name}
          valueMainMetricA={orientedLink.valueMainMetricA}
          valueMainMetricB={orientedLink.valueMainMetricB}
          refMainMetric={orientedLink.mainMetric.refId || ''}
          options={this.props.options}
          onOptionsChange={this.props.onOptionsChange}
          data={this.props.data}
          textObject={orientedLink.textObj}
          seuil={orientedLink.lowerLimit}
          labelAPositionX={orientedLink.positionParameter.labelAPositionX}
          labelAPositionY={orientedLink.positionParameter.labelAPositionY}
          labelBPositionX={orientedLink.positionParameter.labelBPositionX}
          labelBPositionY={orientedLink.positionParameter.labelBPositionY}
          tooltipPositionA={orientedLink.positionParameter.tooltipPositionA}
          tooltipPositionB={orientedLink.positionParameter.tooltipPositionB}
          zIndex={orientedLink.zIndex}
          pointCPositionX={orientedLink.pointCPositionX}
          pointCPositionY={orientedLink.pointCPositionY}
          isIncurved={orientedLink.isIncurved}
          auxiliaryMetrics={orientedLink.metrics}
          valuesAuxiliaryMetrics={valuesAuxiliaryMetrics}
        />
      );
      mapItems.push(item);
    });
    this.updateAssociateOrientedLinkInToPoint();
    this.updateAssociateOrientedLinkOutToPoint();
    //this.defineAssociateOrientedLinksToPoint();
    //this.defineAssociateOrientedLinkToRegion();
    return <div>{mapItems}</div>;
  }

  /**
   * to do
   */
  private getValuesMainMetricOfPoint(point: PointClass) {
    reqMetricPoint(point, this.props);
    this.getValuesMainMetric(point.mainMetric, undefined, point);
    // const value: number | null = getResultQuery(point.mainMetric);
    // point.valueMetric = value ? value.toString() : '-';
  }

  private getValuesMainMetricOfOrientedLink(orientedLink: OrientedLinkClass) {
    reqMetricOrientedLink(orientedLink, this.props);
    this.getValuesMainMetric(orientedLink.mainMetric, orientedLink, undefined);
  }

  /**
   * to do
   */
  private getValuesMainMetric(mainMetric: Metric, orientedLink?: OrientedLinkClass, point?: PointClass) {
    let valueMainMetric = 0;
    let totalValuesCount = 0;

    // const value: number | null = getResultQuery(orientedLink.mainMetric);
    // orientedLink.valueMainMetricA = value ? value.toString() : '-';
    // orientedLink.valueMainMetricB = value ? value.toString() : '-';
    const key: string = mainMetric.key;
    const keyValue: string = mainMetric.keyValue;
    if (mainMetric.returnQuery && mainMetric.returnQuery.length > 0) {
      mainMetric.returnQuery.forEach((line: DataFrame) => {
        if (line.fields[0].labels) {
          if (line.fields[0].labels[key] === keyValue) {
            const sizeQuery: number = line.fields[0].values.length;
            for (let i = 0; i < sizeQuery; i++) {
              if (line.fields[0].values.get(i)) {
                totalValuesCount++;
                valueMainMetric += line.fields[0].values.get(i);
              }
            }
            if (orientedLink) {
              if (mainMetric.manageValue === 'avg') {
                orientedLink.valueMainMetricA = (valueMainMetric / totalValuesCount).toString();
                orientedLink.valueMainMetricB = (valueMainMetric / totalValuesCount).toString();
              } else if (orientedLink.mainMetric.manageValue === 'sum') {
                orientedLink.valueMainMetricA = valueMainMetric.toString();
                orientedLink.valueMainMetricB = valueMainMetric.toString();
              } else if (orientedLink.mainMetric.manageValue === 'error') {
                if (totalValuesCount > 1) {
                  orientedLink.valueMainMetricA = 'error';
                  orientedLink.valueMainMetricB = 'error';
                } else {
                  orientedLink.valueMainMetricA = valueMainMetric.toString();
                  orientedLink.valueMainMetricB = valueMainMetric.toString();
                }
              }
            } else if (point) {
              if (mainMetric.manageValue === 'avg') {
                point.valueMetric = (valueMainMetric / totalValuesCount).toString();
              } else if (mainMetric.manageValue === 'sum') {
                point.valueMetric = valueMainMetric.toString();
              } else if (mainMetric.manageValue === 'error') {
                if (totalValuesCount > 1) {
                  point.valueMetric = 'error';
                } else {
                  point.valueMetric = valueMainMetric.toString();
                }
              }
            }
          }
          // else if (orientedLink.mainMetric.key === '' || orientedLink.mainMetric.keyValue === '') {
          // 	const sizeQuery: number = line.fields[0].values.length;
          // 	for (let i = 0; i < sizeQuery; i++) {
          // 		if (line.fields[0].values.get(i)) {
          // 			totalValuesCount++;
          // 			valueMainMetric += line.fields[0].values.get(i);
          // 		}
          // 	}
          // 	if (orientedLink.mainMetric.manageValue === 'avg') {
          // 		orientedLink.valueMainMetricA = (valueMainMetric / totalValuesCount).toString();
          // 		orientedLink.valueMainMetricB = (valueMainMetric / totalValuesCount).toString();
          // 	} else if (orientedLink.mainMetric.manageValue === 'sum') {
          // 		orientedLink.valueMainMetricA = valueMainMetric.toString();
          // 		orientedLink.valueMainMetricB = valueMainMetric.toString();
          // 	} else if (orientedLink.mainMetric.manageValue === 'error') {
          // 		if (totalValuesCount > 1) {
          // 			orientedLink.valueMainMetricA = 'error';
          // 			orientedLink.valueMainMetricB = 'error';
          // 		} else {
          // 			orientedLink.valueMainMetricA = valueMainMetric.toString();
          // 			orientedLink.valueMainMetricB = valueMainMetric.toString();
          // 		}
          // 	}
          // }
        }
      });
    }
  }

  private getValuesAuxiliaryMetricsPoint = (point: PointClass): string[] => {
    reqMetricAuxPoint(point, this.props);
    return this.getValuesAuxiliaryMetrics(point.metrics, point.mainMetric);
  };

  private getValuesAuxiliaryMetricsOrientedLink = (orientedLink: OrientedLinkClass): string[] => {
    reqMetricAuxOrientedLink(orientedLink, this.props);
    return this.getValuesAuxiliaryMetrics(orientedLink.metrics, orientedLink.mainMetric);
  };

  private getValuesAuxiliaryMetrics = (auxiliaryMetrics: Metric[], mainMatric: Metric): string[] => {
    let valueAuxiliaryMetric: string[] = [];

    auxiliaryMetrics.forEach((metric: Metric) => {
      let totalValue = 0;
      let result = '';
      if (metric.returnQuery && metric.returnQuery.length > 0) {
        metric.returnQuery?.forEach((line: DataFrame) => {
          if (line.fields[0].labels) {
            if (line.fields[0].labels[mainMatric.key] === mainMatric.keyValue) {
              if (line.fields[0].labels[metric.key] === metric.keyValue) {
                const countValues: number = line.fields[0].values.length;
                for (let i = 0; i < countValues; i++) {
                  if (line.fields[0].values.get(i)) {
                    totalValue += line.fields[0].values.get(i);
                  }
                }
                if (metric.manageValue === 'avg') {
                  result = (totalValue / countValues).toString();
                } else if (metric.manageValue === 'sum') {
                  result = totalValue.toString();
                } else if (metric.manageValue === 'error') {
                  if (countValues > 1) {
                    result = 'error';
                  } else {
                    result = totalValue.toString();
                  }
                }
                // } else if (metric.key === '' && metric.keyValue === '') {
                // 	let totalValue: number = 0;
                // 	const countValues: number = line.fields[0].values.length;
                // 	for(let i = 0; i < countValues; i++) {
                // 		totalValue += line.fields[0].values.get(i);
                // 	}
                // 	if (metric.manageValue === 'avg') {
                // 		result = (totalValue / countValues).toString();
                // 	} else if (metric.manageValue === 'sum') {
                // 		result = totalValue.toString();
                // 	} else if (metric.manageValue === 'error') {
                // 		if (countValues > 1) {
                // 			result = 'error';
                // 		} else {
                // 			result = totalValue.toString();
                // 		}
                // 	}
                // }
              }
            }
          }
        });
      }
      if (result !== '') {
        valueAuxiliaryMetric.push(result);
      }
    });
    console.log(valueAuxiliaryMetric);
    return valueAuxiliaryMetric;
  };

  // private defineAssociateLinksToPoint() {
  // 	const arrayAssociateLinks = this.props.options.arrayLinks;
  // 	const arrayPoints = this.props.options.arrayPoints;

  // 	arrayPoints.forEach((point) => {
  // 		point.associateLinkIn = [];
  // 		point.associateLinkOut = [];
  // 	});
  // 	arrayAssociateLinks.forEach((link) => {
  // 		arrayPoints.forEach((point) => {
  // 			if (link.pointIn.value?.id === point.id) {
  // 				point.associateLinkIn.push(link);
  // 			} else if (link.pointOut.value?.id === point.id) {
  // 				point.associateLinkOut.push(link);
  // 			}
  // 		});
  // 	});
  // }

  // private defineAssociateOrientedLinksToPoint() {
  // 	const arrayOrientedLinks = this.props.options.arrayOrientedLinks;
  // 	const arrayPoints = this.props.options.arrayPoints;

  // 	arrayPoints.forEach((point) => {
  // 		point.associateOrientedLinksIn = [];
  // 		point.associateOrientedLinksOut = [];
  // 	});
  // 	arrayOrientedLinks.forEach((orientedLink) => {
  // 		arrayPoints.forEach((point) => {
  // 			if (orientedLink.pointIn.value?.id === point.id) {
  // 				point.associateOrientedLinksIn.push(orientedLink);
  // 			} else if (orientedLink.pointOut.value?.id === point.id) {
  // 				point.associateOrientedLinksOut.push(orientedLink);
  // 			}
  // 		});
  // 	});
  // }

  private changeValueButtonToLink = () => {
    this.setState({
      valueButton: 'link',
    });
  };

  private changeValueButtonToIncurvedLink = () => {
    this.setState({
      valueButton: 'incurvedLink',
    });
  };

  private changeValueButtonToPoint = () => {
    this.setState({
      valueButton: 'point',
    });
  };

  // private changeDisplayButtonlegend = () => {
  // 	this.setState({
  // 		valueLegend: <div></div>,
  // 	});
  // }

  private getCoordinates = (event: any) => {
    const valueButton = this.state.valueButton;
    if (this.state.numberClickDiv === 0) {
      return;
    }
    if (valueButton === 'link') {
      this.getCoordinatesToDrawOrientedLinkWithClick(event);
    } else if (valueButton === 'incurvedLink') {
      this.getCoordinatesToDrawIncurvedOrientedLinkWithClick(event);
    } else if (valueButton === 'point') {
      this.getCoordinatesToDrawPointWithClick(event);
    }
  };

  /**
   * add button click to manage region, point, oriented link, position legend
   */
  private updateButtonCss = () => {
    const final: JSX.Element = (
      <div id="allButton">
        <Button style={{ marginLeft: '5%' }} variant={this.state.buttonManage[0] ? 'danger' : 'primary'} className="button" onClick={this.addNode}>
          Add Region
        </Button>

        <Button style={{ marginLeft: '5%' }} variant={this.state.buttonManage[3] ? 'danger' : 'primary'} className="button" onClick={this.addPoint}>
          Add Point
        </Button>

        <Button style={{ marginLeft: '5%' }} variant={this.state.buttonManage[1] ? 'danger' : 'primary'} className="button" onClick={this.addLink}>
          Add Oriented Link
        </Button>

        <Button
          style={{ marginLeft: '5%' }}
          variant={this.state.buttonManage[4] ? 'danger' : 'primary'}
          className="button"
          onClick={this.addIncurvedLink}
        >
          Add Incurved Oriented Link
        </Button>

        <Button
          style={{ marginLeft: '5%' }}
          variant={this.state.buttonManage[2] ? 'danger' : 'primary'}
          className="button"
          onClick={() => this.resetButtonManage(2)}
        >
          Position Legend
        </Button>
      </div>
    );
    this.setState({
      allActionButton: final,
    });
  };

  // private display_Button = () => {
  // 	const ultracall = document.getElementById('allButton');
  // 	ultracall?.addEventListener('click', () => {
  // 		ultracall.style.display = 'inline-block';
  // 	})

  // }

  private callMethod = async () => {
    if (this.state.numberClickDiv === 0) {
      this.setState({ numberClickDiv: 1 });
    } else {
      await this.setAsyncButtonManage({
        buttonManage: [false, false, false, false, false],
      });
      this.setState({
        numberClickDiv: 0,
      });
      this.updateButtonCss();
    }
  };

  private setAsyncButtonManage = (state: { buttonManage: boolean[] }) => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

  private resetButtonManage = async (index: number) => {
    let tmp: boolean[] = this.state.buttonManage;
    const oldValue: boolean = tmp[index];

    tmp = [false, false, false, false, false];
    if (oldValue) {
      tmp[index] = false;
      this.setState({
        numberClickDiv: 0,
      });
    } else {
      tmp[index] = true;
      this.setState({
        numberClickDiv: 1,
      });
    }
    await this.setAsyncButtonManage({
      buttonManage: tmp,
    });
    this.updateButtonCss();
  };

  private addNode = () => {
    this.setState((prevState: State) => ({
      nbClickButton: prevState.buttonManage[0] ? false : true,
    }));
    this.resetButtonManage(0);
    this.changeValueButtonToPoint();
  };

  private addPoint = () => {
    this.setState((prevState: State) => ({
      nbClickButton: prevState.buttonManage[3] ? false : true,
      valueButton: 'point',
    }));
    this.resetButtonManage(3);
    this.changeValueButtonToPoint();
  };

  private addLink = () => {
    this.setState((prevState: State) => ({
      nbClickButton: prevState.buttonManage[1] ? false : true,
    }));
    this.resetButtonManage(1);
    this.changeValueButtonToLink();
  };

  private addIncurvedLink = () => {
    this.setState((prevState: State) => ({
      nbClickButton: prevState.buttonManage[4] ? false : true,
    }));
    this.resetButtonManage(4);
    this.changeValueButtonToIncurvedLink();
  };

  private positionLegend = (e: any) => {
    if (!this.state.buttonManage[2]) {
      return;
    }

    const newLegend: Legend = this.state.legend;
    const sizeTitlePanel = 28;

    newLegend.x = e.nativeEvent.offsetX;
    newLegend.y =
      this.props.options.baseMap.height > e.nativeEvent.offsetY
        ? parseInt(e.nativeEvent.offsetY, 10)
        : parseInt(e.nativeEvent.offsetY, 10) - sizeTitlePanel;
    newLegend.hiddenLegend = false;
    this.setState({
      legend: newLegend,
    });
    this.props.onOptionsChange({
      ...this.props.options,
      legend: newLegend,
    });

    // this.changeDisplayButtonlegend();
  };

  // Close legend click on close
  private handleClick = (event: any): void => {
    const newLegend: Legend = this.state.legend;

    newLegend.hiddenLegend = !this.state.legend.hiddenLegend;
    this.setState((prevState: State) => ({
      legend: newLegend,
    }));
  };

  // SVG check url
  tt = () => {
    const test = document.getElementById('path836');
    if (test) {
      test.style.fill = 'red';
    }
  };

  private chargeRegion = () => {
    this.setState({
      displayRegion: (
        <DrawRectangle
          key="limitCoor"
          color="orange"
          coordinateInitial={this.props.options.coordinateSpaceInitial}
          id="initialSpace"
          onOptionsChange={this.props.onOptionsChange}
          options={this.props.options}
          data={this.props.data}
          isEnabled={!this.state.buttonManage[1]}
        />
      ),
    });
  };

  private editIdString = (str: string): string => {
    const cpyString: string = str.slice();
    let strSplit: string[] = cpyString.split('id="');
    let newStr = '';

    for (let i = 0; strSplit.length > i; i++) {
      if (strSplit[i]) {
        if (i > 0) {
          const tt: string = strSplit[i];
          strSplit[i] = 'id="oct' + tt;
        }
        newStr = newStr + strSplit[i];
      }
    }
    return newStr;
  };

  /**
   * update button css when mount component
   */
  componentDidMount() {
    if (this.props.options.baseMap.modeSVG) {
      fetch(this.props.options.baseMap.image)
        .then(res => res.text())
        .then(text => {
          this.setState({ svg: text });
          const result = /id=["']\w*["']/i.exec(text);
          if (result && result.length > 0) {
            const id: string[] = result[0].split('"');
            if (id.length > 1) {
              const documentId = document.getElementById(id[1]);
              if (documentId) {
                const newBaseMap: Background = this.props.options.baseMap;

                newBaseMap.idSVG = id[1];
                newBaseMap.width = documentId.getAttribute('width') || '';
                newBaseMap.height = documentId.getAttribute('height') || '';
                this.props.onOptionsChange({
                  ...this.props.options,
                  baseMap: newBaseMap,
                });
              }
            }
          }
        })
        .then(() => this.chargeRegion())
        .then(() => {
          const newStr: string = this.editIdString(this.state.svg);
          const background: Background = this.props.options.baseMap;

          background.layerImage = newStr;
          this.props.onOptionsChange({ ...this.props.options, baseMap: background });
        });
    }
    this.updateButtonCss();
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.options.baseMap.image !== prevProps.options.baseMap.image) {
      this.componentDidMount();
    }
    if (this.props !== prevProps) {
      // console.log('am here');
      this.chargeRegion();
      // this.forceUpdate();
    }
  }

  // Tooltip in Svg

  tooltip_SVG = () => {
    const red = document.getElementById('part1');

    red?.addEventListener('mouseenter', () => {
      red.addEventListener('mouseover', () => {
        const tooltip = document.createElement('span');
        const texttest = document.createTextNode('rectanglered');
        tooltip.appendChild(texttest);
        red.appendChild(tooltip).style.position = 'absolute';
        red.appendChild(tooltip).style.backgroundColor = '#000000';
        red.appendChild(tooltip).style.padding = '8px';
        red.appendChild(tooltip).style.float = 'top';
        red.appendChild(tooltip).style.color = '#d8d9da';
        red.appendChild(tooltip).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
        red.appendChild(tooltip).style.borderRadius = '2px';
        red.appendChild(tooltip).style.fontWeight = '500';
        red.addEventListener('mouseout', () => {
          red.appendChild(tooltip).style.visibility = 'hidden';
        });
      });
      const yellow = document.getElementById('part2');
      yellow?.addEventListener('mouseenter', () => {
        yellow.addEventListener('mouseover', () => {
          const tooltip = document.createElement('span');
          const texttest = document.createTextNode('rectangleyellow');
          tooltip.appendChild(texttest);
          yellow.appendChild(tooltip).style.position = 'absolute';
          yellow.appendChild(tooltip).style.backgroundColor = '#000000';
          yellow.appendChild(tooltip).style.padding = '8px';
          yellow.appendChild(tooltip).style.float = 'top';
          yellow.appendChild(tooltip).style.color = '#d8d9da';
          yellow.appendChild(tooltip).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
          yellow.appendChild(tooltip).style.borderRadius = '2px';
          yellow.appendChild(tooltip).style.fontWeight = '500';
          yellow.addEventListener('mouseout', () => {
            yellow.appendChild(tooltip).style.visibility = 'hidden';
          });
        });
        const rect = document.getElementById('carre');
        rect?.addEventListener('mouseenter', () => {
          rect.addEventListener('mouseover', () => {
            const tooltip = document.createElement('span');
            const texttest = document.createTextNode('rectanglegreen');
            tooltip.appendChild(texttest);
            rect.appendChild(tooltip).style.position = 'absolute';
            rect.appendChild(tooltip).style.backgroundColor = '#000000';
            rect.appendChild(tooltip).style.padding = '8px';
            rect.appendChild(tooltip).style.marginTop = '20%';
            rect.appendChild(tooltip).style.color = '#d8d9da';
            rect.appendChild(tooltip).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
            rect.appendChild(tooltip).style.borderRadius = '2px';
            rect.appendChild(tooltip).style.fontWeight = '500';
            rect.addEventListener('mouseout', () => {
              rect.appendChild(tooltip).style.visibility = 'hidden';
            });
          });
        });
      });
    });
  };

  // var myicon = document.getElementById("myicon");
  // var mypopup = document.getElementById("mypopup");

  // myicon.addEventListener("mouseover", showPopup);
  // myicon.addEventListener("mouseout", hidePopup);

  // function showPopup(evt) {
  // 	var iconPos = myicon.getBoundingClientRect();
  // 	mypopup.style.left = (iconPos.right + 20) + "px";
  // 	mypopup.style.top = (window.scrollY + iconPos.top - 60) + "px";
  // 	mypopup.style.display = "block";
  // }

  // function hidePopup(evt) {
  // 	mypopup.style.display = "none";
  // }

  // Test in SVG image tooltip computer

  // 	private tooltip_SVGImage = () => {

  // 		const matigoal = document.getElementById('Glasses');

  // 		matigoal?.addEventListener('mouseenter', () => {
  // 			matigoal.addEventListener('mouseover', () => {
  // 				const tooltip = document.createElement('span');
  // 				const texttest = document.createTextNode('salut');
  // 				tooltip.appendChild(texttest);
  // 				tooltip.getBoundingClientRect();
  // 				console.log(tooltip);
  // 				matigoal.appendChild(tooltip).style.position = 'absolute';
  // 				matigoal.appendChild(tooltip).style.backgroundColor = '#000000';
  // 				matigoal.appendChild(tooltip).style.padding = '8px';
  // 				matigoal.appendChild(tooltip).style.float = 'right';
  // 				matigoal.appendChild(tooltip).style.color = '#d8d9da';
  // 				matigoal.appendChild(tooltip).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
  // 				matigoal.appendChild(tooltip).style.borderRadius = '2px';
  // 				matigoal.appendChild(tooltip).style.fontWeight = '500';
  // 				matigoal.addEventListener('mouseout', () => {
  // 					matigoal.appendChild(tooltip).style.visibility = 'hidden';

  // 				});
  // 			});
  // 		});
  // 	}

  // function svgTip(opts) {
  // 	opts = opts || {};
  // 	opts.fontsize = opts.fontsize || '12px';
  // 	opts.padding = opts.padding || '.5rem';
  // 	opts.bgcolor = opts.bgcolor || '#000';
  // 	opts.color = opts.color || '#fff';
  // 	opts.opacity = opts.opacity || 0.6;
  // 	$.each($('[title]', 'svg'), function (id, obj) {
  // 		var tt = $(this).attr('title'), that = $('<div class=\'svgtip\'>' + tt + '</div>');
  // 		that.css({
  // 			'position': 'absolute',
  // 			'top': 0,
  // 			'left': 0,
  // 			'display': 'none',
  // 			'background-color': opts.bgcolor,
  // 			'color': opts.color,
  // 			'padding': opts.padding,
  // 			'font-size': opts.fontsize,
  // 			'opacity': opts.opacity,
  // 			'pointer-events': 'none'
  // 		});
  // 		$(this).hover(function (event) {
  // 			that.css({
  // 				'left': event.clientX,
  // 				'top': event.clientY + $(window).scrollTop()
  // 			});
  // 			that.addClass('active');
  // 			that.show();
  // 		}, function () {
  // 			that.hide();
  // 			that.removeClass('active');
  // 		});
  // 		$(this).on('mousemove', function (event) {
  // 			if (that.hasClass('active')) {
  // 				that.css({
  // 					'left': event.clientX,
  // 					'top': event.clientY + $(window).scrollTop() - that.height()
  // 				});
  // 			}
  // 		});
  // 		$('body').append(that);
  // 	});
  // }
  // new svgTip({
  // 	fontsize: '11px',
  // 	padding: '10px'
  // });
  // function lll(msg) {
  // 	$('#debug').append(msg + '
  // ');
  // }

  // 	private TooltipText = (e) => {
  // 		const targetXtext = document.getElementById('path141');
  // 		const targetYtext = document.getElementById('rect167');

  // 		const XPos = e.getClientX();
  // 		const YPos = e.getClientY();

  // 		const newXPosText = document.createTextNode('X Position : ' + XPos);
  // 		const newYPosText = document.createTextNode('Y Position : ' + YPos);

  // 		targetXtext?.replaceChild(newXPosText, targetXtext.getFirstChild());
  // 		targetYtext?.replaceChild(newYPosText, targetYtext.getFirstChild());
  // 	}
  // private testpart1 =(e)=> {
  // 	const targetXtext = document.getElementById('XPos');
  // 		const targetYtext = document.getElementById('YPos');

  // 	const newXPosText = document.createTextNode('X Position : Not over Rectangle');
  // 	const newYPosText = document.createTextNode('Y Position : Not over Rectangle');

  // 	targetXtext?.replaceChild(newXPosText, targetXtext.getFirstChild());
  // 	targetYtext?.replaceChild(newYPosText, targetYtext.getFirstChild());
  // }
  // private testpart2 = (e) => {
  // const targetClickText = document.getElementById('ClickPos');

  // 	const XPos = evt.getClientX();
  // 	const YPos = evt.getClientY();

  // 	const newClickText = document.createTextNode('Last Click made at X=' + XPos + ' Y=' + YPos);

  // 	targetClickText?.replaceChild(newClickText,
  // 		targetClickText.getFirstChild());
  // }

  /*************************************** URL change display render ***************************************************/

  // private display_Button = () => {
  // 	if (window.location.href.indexOf('http://localhost:3000/d/1UbTeXXWk/test_fix?panelId=2&fullscreen&tab=visualization&orgId=1') > -1) {

  // 		document.onvisibilitychange
  // 		// appearB?.style.visibility = 'hidden';
  // 	}
  // 	else {
  // 		// show button
  // 		 document.getElementById('allButton');
  // 		// disappearB?.style.visibility = 'visible';
  // 	}
  // }

  /***************************************URL change display render************************** *********************/

  /*************************************test create tooltip **********************************************************/

  private SVG_PathImage = () => {
    // const idSVG: HTMLElement | null = document.getElementById('oct' + this.props.options.baseMap.idSVG);
    // if (idSVG) {
    // 	idSVG.style.zIndex = '300';
    // }
    for (const line of this.props.options.regionCoordinateSpace) {
      if (line.mode) {
        const id: HTMLElement | null = document.getElementById('oct' + line.idSVG);
        if (id) {
          const valueQuery = getResultQuery(line.mainMetric);
          const test = document.getElementById('jeSuisLa' + line.id);
          if (test) {
            test.style.fill = 'red';
          } else {
            const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
            title.setAttribute('fill', 'yellow');
            title.setAttributeNS('http://www.w3.org/1999/xlink', 'fill', 'yellow');
            // title.setAttributeNS('http://www.w3.org/2000/xmlns/', 'fill', 'yellow');

            // title.setAttribute("fill", "red");
            // title.setAttributeNS('title', 'fill' , 'red');
            // title.setAttributeNS('title', 'stroke' , 'red');
            title.innerHTML = '<div><p style="color: red;">' + (valueQuery ? valueQuery.toString() : '') + '</p></div>';
            // title.textContent = valueQuery ? valueQuery.toString() : '';
            title.id = 'jeSuisLa' + line.id;
            // title.style.
            title.style.fill = 'red';
            id.appendChild(title);
          }
          // id.appendChild(title).style.backgroundColor = 'red';
          // id.appendChild(title).style.fill = 'red';
          // id.appendChild(title).style.padding = '2px';
          // id.appendChild(title).style.float = 'right';
          // id.appendChild(title).style.color = 'blue';
          // id.appendChild(title).style.boxShadow = '0 0 2px red';//rgba(0, 0, 0, 0.5)';
          // id.appendChild(title).style.borderRadius = '2px';
          // id.appendChild(title).style.fontWeight = '5000';
        }
      }
    }
  };

  /*************************************test create tooltip **********************************************************/

  /** render */
  render() {
    let styleBackground;
    if (this.props.options.baseMap.modeSVG) {
      styleBackground = {
        position: 'absolute',
        textAlign: 'center',
        top: '15%',
        backgroundRepeat: 'no-repeat',
        height: this.props.options.baseMap.height + 'px',
        width: this.props.options.baseMap.width + 'px',
        opacity: 0.8,
        // zIndex: 20,
      } as React.CSSProperties;
    } else {
      styleBackground = {
        position: 'absolute',
        textAlign: 'center',
        top: '15%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(' + this.props.options.baseMap.image + ')',
        backgroundSize: this.props.options.baseMap.width + 'px' + ' ' + this.props.options.baseMap.height + 'px',
        height: this.props.options.baseMap.height + 'px',
        width: this.props.options.baseMap.width + 'px',
        opacity: 0.8,
        zIndex: 20,
      } as React.CSSProperties;
    }

    const styleSVG = {
      position: 'absolute',
      top: '15%',

      zIndex: 5,
    } as React.CSSProperties;

    const styleSVG_2 = {
      position: 'absolute',
      textAlign: 'center',
      top: '15%',
      backgroundRepeat: 'no-repeat',
      height: this.props.options.baseMap.height + 'px',
      width: this.props.options.baseMap.width + 'px',
      // opacity: 0.8,
      // zIndex: 20,
      opacity: 0,
      zIndex: 50,
      // backgroundColor: 'red',
      // marginLeft: '20%',
    } as React.CSSProperties;

    const defaultStyle = {
      height: '100vh',
      width: '100vw',

      fontFamily: this.props.options.display.police,
      fontSize: this.props.options.display.size,
      fontStyle: this.props.options.display.style !== 'bold' ? this.props.options.display.style : 'normal',
      fontWeight: this.props.options.display.style === 'bold' ? 'bold' : 'normal',
    } as React.CSSProperties;

    // console.log(this.props.data);
    // console.log(this.props.data.timeRange.);
    // console.log(this.props.options.regionCoordinateSpace);

    return (
      <CustomScrollbar autoHide={false} hideHorizontalTrack>
        <div style={{ textAlign: 'left', position: 'relative', display: 'inline-grid' }}>
          {this.state.allActionButton}
          {this.props.options.displayButton}
        </div>
        <section style={defaultStyle} onClick={this.positionLegend}>
          <div>
            {this.state.buttonManage[0] && (
              <div
                style={{
                  width: '200px',
                  position: 'absolute',
                  overflowY: 'scroll',
                  marginLeft: '20%',
                  marginRight: '20%',
                  marginTop: '20%',
                  marginBottom: '20%',
                  border: '5px solid aliceblue',
                  height: '40%',
                }}
              >
                <Modal title="Add Region" onDismiss={this.addNode} onClickBackdrop={this.addNode} isOpen={this.state.nbClickButton}>
                  <AddCoordinate options={this.props.options} onOptionsChange={this.props.onOptionsChange} data={this.props.data} />
                </Modal>
              </div>
            )}
            {this.state.buttonManage[2] && <div></div>}
            <LegendComponant
              options={this.props.options}
              onOptionsChange={this.props.onOptionsChange}
              data={this.props.data}
              callBack={this.handleClick}
            />
            {/* <div style={{
							position: 'relative',
							left: this.state.legend.x,
							top: this.state.legend.y,
							maxWidth: '100%',
							zIndex: 'auto',
						}} hidden={this.state.legend.hiddenLegend}>
							<article
								style={{
									width: '250px',
									position: 'absolute',
									overflowY: 'scroll',
									marginLeft: '20%',
									marginRight: '20%',
									marginTop: '20%',
									marginBottom: '20%',
									border: '5px solid aliceblue',
									height: '40%',

								}}>
									<Modal title='Add Region'
										onDismiss={this.addNode}
										onClickBackdrop={this.addNode}
										isOpen={this.state.nbClickButton} >
										<AddCoordinate options={this.props.options}
											onOptionsChange={this.props.onOptionsChange}
											data={this.props.data} />
									</Modal>
								</div>
							}
							{
								this.state.buttonManage[2] &&

								<div></div>
							}
							{/* <Legend
							options={this.props.options}
							onOptionsChange={this.props.onOptionsChange}
							data={this.props.data}
							callBack={this.handleClick} 
						
							/> */}
            <div
              style={{
                position: 'relative',
                left: this.state.legend.x,
                top: this.state.legend.y,
                maxWidth: '100%',
                zIndex: 'auto',
              }}
              hidden={this.state.legend.hiddenLegend}
            >
              <article
                style={{
                  width: '170px',
                  position: 'absolute',
                  overflowY: 'scroll',
                  margin: '0',
                  height: '220px',
                  backgroundColor: '#FFF',
                  color: '#000',
                  border: '4px solid #299c46',
                  borderRadius: '4px',
                  scrollbarColor: '#09090b #212124',
                  scrollbarWidth: 'none',
                  zIndex: 9999,
                }}
              >
                <div style={{ backgroundImage: 'linear-gradient(90deg, rgb(41, 42, 45), rgb(0, 0, 0))' }}>
                  <h5 style={{ width: '100%', fontSize: '20px', display: 'inline-flex' }}>
                    Legend
                    <i
                      style={{
                        position: 'absolute',
                        marginLeft: '87%',
                      }}
                      className="fa fa-close"
                      onClick={this.handleClick}
                    ></i>
                  </h5>
                  <p style={{ color: '#d8d9da', fontSize: '15px', marginLeft: '14px', fontWeight: 'bold' }}>Region</p>
                  <p style={{ color: '#d8d9da', fontSize: '11px', marginLeft: '17px' }}>Label</p>
                </div>
                <ul>
                  <li className="LegendMatt">
                    <span
                      style={{
                        padding: 4,
                        margin: 9,
                        width: '3.5rem',

                        backgroundColor: '#B3B9BF',
                        border: '3px solid #299c46',
                        listStyleType: 'none',
                        display: 'inline-block',
                      }}
                    ></span>
                    <span
                      style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        marginBottom: '1.25rem',
                        fontSize: '9px',
                      }}
                    >
                      0-0%
                    </span>
                  </li>
                  tooltip_SVGImage
                  <li className="LegendMatt">
                    <span
                      style={{
                        padding: 4,
                        margin: 9,
                        width: '3.5rem',
                        borderRadius: '39%',
                        backgroundColor: 'red',
                        border: '3px solid yellow',
                        listStyleType: 'none',
                        display: 'inline-block',
                      }}
                    ></span>
                    <span
                      style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        marginBottom: '1.25rem',
                        fontSize: '9px',
                      }}
                    >
                      No Variable
                    </span>
                  </li>
                </ul>
                <p style={{ fontSize: '15px', marginLeft: '10px' }}>Point</p>
              </article>
            </div>
            <div onClick={this.callMethod}></div>
            <div>
              <div className="tooltip" />
              <div
                style={styleSVG} // onMouseOver={this.SVG_PathImage}
                dangerouslySetInnerHTML={{ __html: this.state.svg }}
              />
              <div
                id="Intent"
                style={styleSVG_2}
                onMouseOver={this.SVG_PathImage}
                dangerouslySetInnerHTML={{ __html: this.props.options.baseMap.layerImage }}
              />
              {/* <div id='Glasses' style={styleSVG_2}
							onMouseMove={this.tooltip_SVGImage } dangerouslySetInnerHTML={{ __html: this.state.svg }} /> */}

              <div onClick={this.getCoordinates} style={styleBackground} id="mainPanel">
                {/* <Tooltip placement="top" content='hello World' theme='info' children={}  /> */}
                {
                  // this.defineLimit()
                }
                <div>
                  <br />
                  {this.displayPoint()}
                  {this.displayOrientedLink()}
                </div>
              </div>
              {this.state.displayRegion}
            </div>
          </div>
        </section>
      </CustomScrollbar>
    );
  }
}
