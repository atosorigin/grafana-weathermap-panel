import React, { PureComponent } from 'react';
import { SimpleOptions, Background, Metric } from 'types';

import { PanelProps, SelectableValue, DataFrame } from '@grafana/data';
import { CustomScrollbar, Modal, Button } from '@grafana/ui';

import { PointClass } from 'Models/PointClass';
import { PositionParameterClass } from 'Models/PositionParameterClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import { RegionClass, Coord4D } from 'Models/RegionClass';
import { TextObject } from 'Models/TextObjectClass';
import { LinkURLClass } from 'Models/LinkURLClass';

import { coordinateIsInInitialSpace } from 'Functions/coodinateIsInInitialSpace';
import { reqMetricPoint, reqMetricOrientedLink, reqMetricAuxOrientedLink, reqMetricAuxPoint } from 'Functions/fetchMetrics';
import { getResultQuery } from 'Functions/getResultQuery';

import AddCoordinate from 'components/CoordinateSpace/addCoordinate';
import DrawRectangle from './components/Draw/drawRectangle';
import DrawPoint from './components/Draw/drawPoint';
import DrawOrientedLink from './components/Draw/drawOrientedLink';
import LegendComponant from './components/legend';

import DrawRectangleExtend from 'components/Draw/drawRectangleExtend';

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
  // fillCoordinate = (): JSX.Element => {
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
  getCoordinatesToDrawPointWithClick = (event: any) => {
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

    positionX = Math.round((event.nativeEvent.offsetX - widthInitialSpace / 2) * (100 / widthInitialSpace)) * 2;
    positionY = Math.round((event.nativeEvent.offsetY - heightInitialSpace / 2) * (100 / heightInitialSpace)) * 2 * -1;

    if (
      !coordinateIsInInitialSpace(
        parseInt(event.nativeEvent.offsetX, 10),
        parseInt(event.nativeEvent.offsetY, 10),
        this.props.options.coordinateSpaceInitial,
        this.props.options.baseMap
      )
    ) {
      console.error('is not initial space');
      return;
    }
    console.log(positionX.toString() + ' ' + positionY.toString());

    if (
      event.nativeEvent.target.id === 'initialSpace' ||
      event.nativeEvent.target.id === 'mainPanel' ||
      event.nativeEvent.target.id === 'oct' + this.props.options.baseMap.idSVG
    ) {
      this.createPointToClick(positionX, positionY);
    }
  };

  defineIdPoint = (): number => {
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
  createPointToClick = (x: number, y: number) => {
    const id: number = this.defineIdPoint();
    const initTextObject: TextObject = new TextObject(
      '',
      false,
      '',
      '',
      { bold: false, italic: false, underline: false },
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
      { label: 'Yes', value: 'true' },
      { label: 'Circle', value: 'circle' },
      { label: 'Medium', value: 'medium' },
      { label: 'Medium', value: 'medium' },
      '0',
      x.toString(),
      y.toString(),
      'black',
      [],
      []
    );

    const newArrayPoint: PointClass[] = this.props.options.arrayPoints;
    newArrayPoint.push(newPoint);

    //this.props.options.indexPoint = id;
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
  displayPoint() {
    const mapItems: JSX.Element[] = [];
    this.props.options.arrayPoints.forEach((line: PointClass) => {
      this.getValuesMainMetricPoint(line);
      this.updatePositionOrientedLink(line);
      const valuesAuxiliaryMetrics: string[] = this.getValuesAuxiliaryMetricsPoint(line);
      const item: JSX.Element = (
        <DrawPoint
          key={'point' + line.id.toString()}
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
    });

    return <div>{mapItems}</div>;
  }

  private updatePositionOrientedLink = (point: PointClass) => {
    const arrayOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
    for (const orientedLink of arrayOrientedLink) {
      for (const associateOrientedLinkIn of point.associateOrientedLinksIn) {
        if (associateOrientedLinkIn.name === orientedLink.name) {
          orientedLink.pointAPositionX = point.positionShapeX;
          orientedLink.pointAPositionY = point.positionShapeY;
        }
      }
      for (const associateOrientedLinkOut of point.associateOrientedLinksOut) {
        if (associateOrientedLinkOut.name === orientedLink.name) {
          orientedLink.pointBPositionX = point.positionShapeX;
          orientedLink.pointBPositionY = point.positionShapeY;
        }
      }
    }
  };

  // /** display link with coordinate */
  // displayLink() {
  //   const { options } = this.props;
  //   const mapItems: JSX.Element[] = [];
  //   const arrayLinks: LinkClass[] = options.arrayLinks;

  //   arrayLinks.forEach((link: LinkClass) => {
  //     let item: JSX.Element = <div></div>;
  //     if (link.defineHowToGetCoordonate.value === 'coordinate') {
  //       item = (
  //         <DrawLinkWithCoordinates
  //           key={'link' + link.id.toString()}
  //           pointAPositionX={link.pointAPositionX}
  //           pointAPositionY={link.pointAPositionY}
  //           pointBPositionX={link.pointBPositionX}
  //           pointBPositionY={link.pointBPositionY}
  //           colorA={link.colorCoordinateA}
  //           colorB={link.colorCoordinateB}
  //           orientationLink={link.orientationLink.value || ''}
  //           labelA={link.labelLinkA}
  //           labelB={link.labelLinkB}
  //           labelAPositionX={link.positionXLabelA}
  //           labelAPositionY={link.positionYLabelA}
  //           labelBPositionX={link.positionXLabelB}
  //           labelBPositionY={link.positionYLabelB}
  //           height={parseInt(this.props.options.baseMap.height, 10)}
  //           name={link.name}
  //         />
  //       );
  //     } else if (link.defineHowToGetCoordonate.value === 'point') {
  //       item = (
  //         <DrawLinkWithPoints
  //           key={'link' + link.id.toString()}
  //           pointIn={link.pointIn}
  //           pointOut={link.pointOut}
  //           labelA={link.labelLinkA}
  //           labelB={link.labelLinkB}
  //           labelAPositionX={link.positionXLabelA}
  //           labelAPositionY={link.positionYLabelA}
  //           labelBPositionX={link.positionXLabelB}
  //           labelBPositionY={link.positionYLabelB}
  //           orientationLink={link.orientationLink.value || ''}
  //           height={parseInt(this.props.options.baseMap.height, 10)}
  //           name={link.name}
  //         />
  //       );
  //     } else if (link.defineHowToGetCoordonate.value === 'region') {
  //       item = (
  //         <DrawLinkWithRegions
  //           key={'link' + link.id.toString()}
  //           regionIn={link.regionIn}
  //           regionOut={link.regionOut}
  //           colorA={link.colorRegionIn}
  //           colorB={link.colorRegionOut}
  //           labelA={link.labelLinkA}
  //           labelB={link.labelLinkB}
  //           labelAPositionX={link.positionXLabelA}
  //           labelAPositionY={link.positionYLabelA}
  //           labelBPositionX={link.positionXLabelB}
  //           labelBPositionY={link.positionYLabelB}
  //           orientationLink={link.orientationLink.value || ''}
  //           height={parseInt(this.props.options.baseMap.height, 10)}
  //           name={link.name}
  //         />
  //       );
  //     }
  //     mapItems.push(item);
  //   });
  //   return <ul>{mapItems}</ul>;
  // }

  /**
   * to do
   */
  addAssociateOrientedLinkToPoint = (namePointIn: string, namePointOut: string, indexOrientedLinkAssociate: number) => {
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
  updateAssociateOrientedLinkInToPoint = () => {
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
  updateAssociateOrientedLinkOutToPoint = () => {
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
  resetCoordinatesToDrawLinkWithClick = () => {
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
  getCoordinatesToDrawOrientedLinkWithClick = (event: any) => {
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
      event.nativeEvent.target.id === 'initialSpace' ||
      event.nativeEvent.target.id === 'mainPanel' ||
      event.nativeEvent.target.id === 'oct' + this.props.options.baseMap.idSVG
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

  getCoordinatesToDrawIncurvedOrientedLinkWithClick = (event: any) => {
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

    if (event.nativeEvent.target.id === 'mainPanel' || event.nativeEvent.target.id === 'initialSpace') {
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

  // defineAssociateOrientedLinkToRegion(): OrientedLinkClass[] {
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
  defineIdOrientedLink = (): number => {
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
  createOrientedLinkToClick = (isIncurved: SelectableValue<boolean>) => {
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
      { bold: false, italic: false, underline: false },
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
      isIncurved,
      {
        key: '',
        unit: '',
        format: '',
        keyValue: '',
        refId: '',
        manageValue: 'avg',
      },
      [],
      [],
      false,
      false,
      false
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
  displayOrientedLink() {
    const arrayOrientedLink = this.props.options.arrayOrientedLinks;
    const mapItems: JSX.Element[] = [];
    let item: JSX.Element = <div></div>;
    arrayOrientedLink.forEach((orientedLink: OrientedLinkClass) => {
      this.getValuesMainMetricOrientedLink(orientedLink);
      this.getValuesMainMetricOrientedLinkB(orientedLink);
      const valuesAuxiliaryMetrics: string[] = this.getValuesAuxiliaryMetricsOrientedLink(orientedLink);
      const valuesAuxiliaryMetricsB: string[] = this.getValuesAuxiliaryMetricsOrientedLinkB(orientedLink);
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
          refMainMetricA={orientedLink.mainMetric.refId || ''}
          refMainMetricB={orientedLink.mainMetricB.refId || ''}
          options={this.props.options}
          onOptionsChange={this.props.onOptionsChange}
          data={this.props.data}
          textObject={orientedLink.textObj}
          seuil={orientedLink.lowerLimit}
          seuilB={orientedLink.lowerLimitB}
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
          auxiliaryMetricsB={orientedLink.metricsB}
          valuesAuxiliaryMetrics={valuesAuxiliaryMetrics}
          valuesAuxiliaryMetricsB={valuesAuxiliaryMetricsB}
          police={this.props.options.display.police}
          sizePolice={this.props.options.display.size}
          linkUrl={orientedLink.linkURL}
        />
      );
      mapItems.push(item);
    });
    this.updateAssociateOrientedLinkInToPoint();
    this.updateAssociateOrientedLinkOutToPoint();
    return <div>{mapItems}</div>;
  }

  /**
   * to do
   */
  getValuesMainMetricPoint(point: PointClass) {
    reqMetricPoint(point, this.props);
    this.getValuesMainMetric(point.mainMetric, undefined, point);
  }

  getValuesMainMetricOrientedLink(orientedLink: OrientedLinkClass) {
    reqMetricOrientedLink(orientedLink, this.props);
    this.getValuesMainMetric(orientedLink.mainMetric, orientedLink, undefined, false);
  }

  getValuesMainMetricOrientedLinkB(orientedLink: OrientedLinkClass) {
    reqMetricOrientedLink(orientedLink, this.props);
    this.getValuesMainMetric(orientedLink.mainMetricB, orientedLink, undefined, true);
  }

  /**
   * to do
   */
  getValuesMainMetric(mainMetric: Metric, orientedLink?: OrientedLinkClass, point?: PointClass, isBidirectionnal?: boolean) {
    let valueMainMetric = 0;
    let totalValuesCount = 0;
    const key: string = mainMetric.key;
    const keyValue: string = mainMetric.keyValue;
    if (mainMetric.returnQuery && mainMetric.returnQuery.length > 0) {
      mainMetric.returnQuery.forEach((line: DataFrame) => {
        if (line.fields[0].labels) {
          if (key !== '' && keyValue !== '') {
            if (line.fields[0].labels[key] === keyValue) {
              const countValues: number = line.fields[0].values.length;
              for (let i = 0; i < countValues; i++) {
                if (line.fields[0].values.get(i)) {
                  totalValuesCount++;
                  valueMainMetric += line.fields[0].values.get(i);
                }
              }
            }
          } else {
            const countValues: number = line.fields[0].values.length;
            for (let i = 0; i < countValues; i++) {
              if (line.fields[0].values.get(i)) {
                totalValuesCount++;
                valueMainMetric += line.fields[0].values.get(i);
              }
            }
          }
        }
      });
      if (orientedLink) {
        if (!isBidirectionnal) {
          if (mainMetric.manageValue === 'avg') {
            orientedLink.valueMainMetricA = (valueMainMetric / totalValuesCount).toString();
          } else if (mainMetric.manageValue === 'sum') {
            orientedLink.valueMainMetricA = valueMainMetric.toString();
          } else if (mainMetric.manageValue === 'err') {
            if (totalValuesCount > 1) {
              orientedLink.valueMainMetricA = 'error';
            } else {
              orientedLink.valueMainMetricA = valueMainMetric.toString();
            }
          }
        } else {
          if (mainMetric.manageValue === 'avg') {
            orientedLink.valueMainMetricB = (valueMainMetric / totalValuesCount).toString();
          } else if (mainMetric.manageValue === 'sum') {
            orientedLink.valueMainMetricB = valueMainMetric.toString();
          } else if (mainMetric.manageValue === 'err') {
            if (totalValuesCount > 1) {
              orientedLink.valueMainMetricB = 'error';
            } else {
              orientedLink.valueMainMetricB = valueMainMetric.toString();
            }
          }
        }
      } else if (point) {
        if (mainMetric.manageValue === 'avg') {
          point.valueMetric = (valueMainMetric / totalValuesCount).toString();
        } else if (mainMetric.manageValue === 'sum') {
          point.valueMetric = valueMainMetric.toString();
        } else if (mainMetric.manageValue === 'err') {
          if (totalValuesCount > 1) {
            point.valueMetric = 'error';
          } else {
            point.valueMetric = valueMainMetric.toString();
          }
        }
      }
    }
  }

  getValuesAuxiliaryMetricsPoint = (point: PointClass): string[] => {
    reqMetricAuxPoint(point, this.props);
    return this.getValuesAuxiliaryMetrics(point.metrics, point.mainMetric);
  };

  getValuesAuxiliaryMetricsOrientedLink = (orientedLink: OrientedLinkClass): string[] => {
    reqMetricAuxOrientedLink(orientedLink, this.props);
    return this.getValuesAuxiliaryMetrics(orientedLink.metrics, orientedLink.mainMetric);
  };

  getValuesAuxiliaryMetricsOrientedLinkB = (orientedLink: OrientedLinkClass): string[] => {
    reqMetricAuxOrientedLink(orientedLink, this.props);
    return this.getValuesAuxiliaryMetrics(orientedLink.metricsB, orientedLink.mainMetricB);
  };

  getValuesAuxiliaryMetrics = (auxiliaryMetrics: Metric[], mainMetric: Metric): string[] => {
    let valueAuxiliaryMetric: string[] = [];
    // console.log(auxiliaryMetrics);
    const countMetrics: number = auxiliaryMetrics.length;
    auxiliaryMetrics.forEach((metric: Metric) => {
      let countTotalValues = 0;
      let resultTotalValues = 0;
      let result = '';
      if (metric.returnQuery && metric.returnQuery.length > 0) {
        let numberLoop: number = (metric.returnQuery?.length || 0) / countMetrics;
        if (metric.key !== '' && metric.keyValue !== '') {
          for (let i = 0; i < numberLoop; i++) {
            let line = metric.returnQuery[i];
            if (line.fields[0].labels) {
              if (line.fields[0].labels[mainMetric.key] === mainMetric.keyValue || (mainMetric.key === '' && mainMetric.keyValue === '')) {
                if (line.fields[0].labels[metric.key] === metric.keyValue) {
                  const countValues: number = line.fields[0].values.length;
                  for (let i = 0; i < countValues; i++) {
                    if (line.fields[0].values.get(i)) {
                      resultTotalValues += line.fields[0].values.get(i);
                      countTotalValues++;
                    }
                  }
                }
              }
            }
          }
        } else {
          for (let i = 0; i < numberLoop; i++) {
            let line = metric.returnQuery[i];
            if (line.fields[0].labels) {
              if (line.fields[0].labels[mainMetric.key] === mainMetric.keyValue || (mainMetric.key === '' && mainMetric.keyValue === '')) {
                const countValues: number = line.fields[0].values.length;
                for (let i = 0; i < countValues; i++) {
                  if (line.fields[0].values.get(i)) {
                    resultTotalValues += line.fields[0].values.get(i);
                    countTotalValues++;
                  }
                }
              }
            }
          }
        }
        if (metric.manageValue === 'avg') {
          result = (resultTotalValues / countTotalValues).toString();
        } else if (metric.manageValue === 'sum') {
          result = resultTotalValues.toString();
        } else if (metric.manageValue === 'err') {
          if (countTotalValues > 1) {
            result = 'error';
          } else {
            result = resultTotalValues.toString();
          }
        }
      }
      if (result !== '') {
        valueAuxiliaryMetric.push(result);
      }
    });
    return valueAuxiliaryMetric;
  };

  changeValueButtonToLink = () => {
    this.setState({
      valueButton: 'link',
    });
  };

  changeValueButtonToIncurvedLink = () => {
    this.setState({
      valueButton: 'incurvedLink',
    });
  };

  changeValueButtonToPoint = () => {
    this.setState({
      valueButton: 'point',
    });
  };

  // changeDisplayButtonlegend = () => {
  // 	this.setState({
  // 		valueLegend: <div></div>,
  // 	});
  // }

  getCoordinates = (event: any) => {
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
  updateButtonCss = () => {
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

  // display_Button = () => {
  // 	const ultracall = document.getElementById('allButton');
  // 	ultracall?.addEventListener('click', () => {
  // 		ultracall.style.display = 'inline-block';
  // 	})

  // }

  callMethod = async () => {
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

  setAsyncButtonManage = (state: { buttonManage: boolean[] }) => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

  resetButtonManage = async (index: number) => {
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

  addNode = () => {
    this.setState((prevState: State) => ({
      nbClickButton: prevState.buttonManage[0] ? false : true,
    }));
    this.resetButtonManage(0);
    this.changeValueButtonToPoint();
  };

  addPoint = () => {
    this.setState((prevState: State) => ({
      nbClickButton: prevState.buttonManage[3] ? false : true,
      valueButton: 'point',
    }));
    this.resetButtonManage(3);
    this.changeValueButtonToPoint();
  };

  addLink = () => {
    this.setState((prevState: State) => ({
      nbClickButton: prevState.buttonManage[1] ? false : true,
    }));
    this.resetButtonManage(1);
    this.changeValueButtonToLink();
  };

  addIncurvedLink = () => {
    this.setState((prevState: State) => ({
      nbClickButton: prevState.buttonManage[4] ? false : true,
    }));
    this.resetButtonManage(4);
    this.changeValueButtonToIncurvedLink();
  };

  positionLegend = (e: any) => {
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
  handleClick = (event: any): void => {
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

  chargeRegion = () => {
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

  editIdString = (str: string): string => {
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
  componentDidMount = async () => {
    // this.props.onOptionsChange({
    //   ...this.props.options,
    //   displayButton: false,
    // });
    if (this.props.options.baseMap.modeSVG && this.props.options.baseMap.image !== '') {
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
    } else {
      this.chargeRegion();
    }
    this.updateButtonCss();
  };

  componentDidUpdate(prevProps: Props) {
    if (this.props.options.baseMap.image !== prevProps.options.baseMap.image) {
      this.componentDidMount();
    }
    if (this.props !== prevProps) {
      this.chargeRegion();
      // console.log(this.props.options.displayButton);
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

  /*************************************test create tooltip **********************************************************/

  SVG_PathImage = () => {
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

            title.setAttribute('fill', 'red');
            title.setAttributeNS('title', 'fill', 'red');
            // title.innerHTML = '<div><p style="color: red;">' + (valueQuery ? valueQuery.toString() : '') + '</p></div>';
            title.textContent = valueQuery ? valueQuery.toString() : '';
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

  fillCoordinate = (): JSX.Element => {
    const { options } = this.props;
    const styleRegion = {
      position: 'absolute',
      width: options.baseMap.width + 'px',
      height: options.baseMap.height + 'px',
      top: '15%',
      left: 0,
    } as React.CSSProperties;
    let mapItems: JSX.Element[];

    mapItems = options.regionCoordinateSpace.map((line: RegionClass, index: number) => (
      <DrawRectangleExtend
        key={'drawRectangleExtend' + index.toString()}
        uneCoor={line}
        useLimit={false}
        limit={options.coordinateSpaceInitial.coordinate}
        onOptionsChange={this.props.onOptionsChange}
        options={this.props.options}
        data={this.props.data}
        id={'region' + line.id.toString()}
        isEnabled={false}
      />
    ));
    return <ul style={styleRegion}>{mapItems}</ul>;
  };

  /*************************************test create tooltip **********************************************************/

  /** render */
  render() {
    let styleBackground;
    if (this.props.options.baseMap.modeSVG) {
      styleBackground = {
        // position: 'absolute',
        // textAlign: 'center',
        // backgroundRepeat: 'no-repeat',
        // height: this.props.options.baseMap.height + 'px',
        // width: this.props.options.baseMap.width + 'px',
        // opacity: 0.8,
        // zIndex: 4,
      } as React.CSSProperties;
    } else {
      styleBackground = {
        position: 'absolute',
        textAlign: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(' + this.props.options.baseMap.image + ')',
        backgroundSize: this.props.options.baseMap.width + 'px' + ' ' + this.props.options.baseMap.height + 'px',
        height: this.props.options.baseMap.height + 'px',
        width: this.props.options.baseMap.width + 'px',
        opacity: 0.8,
        zIndex: 4,
      } as React.CSSProperties;
    }

    const styleSVG = {
      position: 'absolute',

      zIndex: 2,
    } as React.CSSProperties;

    const styleSVG_2 = {
      position: 'absolute',
      textAlign: 'center',
      backgroundRepeat: 'no-repeat',
      height: this.props.options.baseMap.height + 'px',
      width: this.props.options.baseMap.width + 'px',
      // opacity: 0.8,
      // zIndex: 20,
      opacity: 0,
      zIndex: 2,
      // backgroundColor: 'red',
      // marginLeft: '20%',
    } as React.CSSProperties;

    const defaultStyle = {
      height: '100vh',
      width: '100vw',

      fontFamily: this.props.options.display.police,
      fontSize: this.props.options.display.size,
      fontStyle: this.props.options.display.style.italic ? 'italic' : 'normal',
      fontWeight: this.props.options.display.style.bold ? 'bold' : 'normal',
      textDecoration: this.props.options.display.style.underline ? 'underline' : 'none',
    } as React.CSSProperties;

    return (
      <CustomScrollbar autoHide={false} hideHorizontalTrack>
        <div style={{ textAlign: 'left', position: 'relative', display: 'inline-grid' }}>
          {this.props.options.displayButton && this.state.allActionButton}
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
                  <AddCoordinate options={this.props.options} onOptionsChange={this.props.onOptionsChange} data={this.props.data} isRegion={true} />
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
            <div onClick={this.callMethod}></div>
            <div id="coordinateSpaces" style={styleBackground}>
              <div>
                <div className="tooltip" />
                {this.fillCoordinate()}
                <div onClick={this.getCoordinates} id="mainPanel" style={{ position: 'absolute', top: '15%', zIndex: 1 }}>
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
                  {/* <Tooltip placement="top" content='hello World' theme='info' children={}  />
                  {this.defineLimit()} */}
                  {this.displayOrientedLink()}
                  {/* {this.state.displayRegion} */}
                  {this.displayPoint()}
                </div>
              </div>
            </div>
          </div>
        </section>
      </CustomScrollbar>
    );
  }
}
