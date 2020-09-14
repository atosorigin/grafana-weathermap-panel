import React, { PureComponent } from 'react';
import { SimpleOptions, Background, Metric } from 'types';

import { PanelProps, SelectableValue } from '@grafana/data';
import { CustomScrollbar, Modal, Button } from '@grafana/ui';

import { PointClass } from 'Models/PointClass';
import { PositionParameterClass } from 'Models/PositionParameterClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import { RegionClass, Coord4D } from 'Models/RegionClass';
import { TextObject } from 'Models/TextObjectClass';
import { LinkURLClass } from 'Models/LinkURLClass';

import { reqMetricPoint, reqMetricOrientedLink, reqMetricAuxOrientedLink, reqMetricAuxPoint, reqMetricAuxRegion } from 'Functions/fetchMetrics';
import { getResultQuery } from 'Functions/getResultQuery';

import AddCoordinate from 'components/CoordinateSpace/addCoordinate';
import DrawRectangle from './components/Draw/drawRectangle';
import DrawPoint from './components/Draw/drawPoint';
import DrawOrientedLink from './components/Draw/drawOrientedLink';
import LegendComponant from './components/legend';

import DrawRectangleExtend from 'components/Draw/drawRectangleExtend';
import { initRegionCoordinateSpace } from 'Functions/initRegionCoordinateSpace';
import { Style } from 'components/Parametrage/styleComponent';

interface Props extends PanelProps<SimpleOptions> {}

interface DataTooltipRegionSVG {
  idSVG: string;
  x: string;
  y: string;
}

interface Legend {
  hiddenLegend: boolean;
  x: number;
  y: number;
}

interface State {
  // isUpdate: boolean;
  // sizePanel: number;
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
  idSVG: string;
  tooltip: JSX.Element;
  // check if button Add Oriented Link is active
  buttonAddLinkIsActive: boolean;
  // check if button Add Incurved Oriented Link is active
  buttonAddIncurvedLinkIsActive: boolean;

  dataTooltipSVG: DataTooltipRegionSVG;

  hiddenLegend: boolean;

  // value of image in Display to the initialisation
  currentImage: string;
}

/**
 * Affichage
 */
export class SimplePanel extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      valueButton: '',
      buttonManage: [false, false, false, false, false],
      numberClickDiv: 0,
      allActionButton: <div></div>,
      nbClickButton: false,
      legend: { hiddenLegend: true, x: 0, y: 0 },
      svg: '',
      displayRegion: <div></div>,
      tooltip: <div>salut</div>,
      idSVG: '',
      buttonAddLinkIsActive: false,
      buttonAddIncurvedLinkIsActive: false,
      dataTooltipSVG: { idSVG: '', x: '0', y: '0' },
      hiddenLegend: false,
      currentImage: '',
    };
  }

  /**
   * Display limit (coordinateSpaceInitial)
   * @returns JSX.Element
   */
  defineLimit = (): JSX.Element => {
    const { coordinateSpaceInitial } = this.props.options;
    let jsxItems: JSX.Element = <div></div>;
    if (this.props.options.baseMap.image === '' && !this.props.options.baseMap.modeSVG) {
      jsxItems = (
        <DrawRectangle
          key="limitCoor"
          color="orange"
          coordinateInitial={coordinateSpaceInitial}
          id="initialSpace"
          onOptionsChange={this.props.onOptionsChange}
          options={this.props.options}
          data={this.props.data}
          buttonAddLinkIsActive={this.state.buttonAddLinkIsActive}
          buttonAddIncurvedLinkIsActive={this.state.buttonAddIncurvedLinkIsActive}
        />
      );
    }
    return jsxItems;
  };

  /**
   * to do
   */
  getCoordinatesToDrawPointWithClick = (event: any) => {
    const initialSpace: Coord4D = this.props.options.coordinateSpaceInitial.coordinate;
    const xMin: number = parseInt(initialSpace.xMin, 10);
    const xMax: number = parseInt(initialSpace.xMax, 10);
    const yMin: number = parseInt(initialSpace.yMin, 10);
    const yMax: number = parseInt(initialSpace.yMax, 10);
    let positionX = 0;
    let positionY = 0;
    const paddingMarginLeftSimplePanel = 24;
    const clickX = event.nativeEvent.clientX - paddingMarginLeftSimplePanel;
    const widthInitialSpace: number = xMax - xMin;
    const heightInitialSpace: number = yMax - yMin;
    const heightBackground: number = parseInt(this.props.options.baseMap.height, 10);

    positionX = Math.round(clickX);
    positionY = Math.round(heightBackground - event.nativeEvent.layerY);

    if (
      event.nativeEvent.target.id === 'initialSpace' ||
      event.nativeEvent.target.id === 'mainPanel' ||
      event.nativeEvent.target.id === 'Intent' ||
      event.nativeEvent.target.id === 'oct' + this.props.options.baseMap.idSVG ||
      event.nativeEvent.target.id === this.props.options.baseMap.idSVG
    ) {
      this.createPointToClick(positionX, positionY, widthInitialSpace, heightInitialSpace);
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
  createPointToClick = (x: number, y: number, widthInitialSpace: number, heightInitialSpace: number) => {
    const id: number = this.defineIdPoint();
    const initTextObject: TextObject = new TextObject(
      '',
      false,
      'white',
      'black',
      { bold: false, italic: false, underline: false },
      true,
      {
        legendElement: '',
        numericFormatElement: '5',
        unit: '',
        displayObjectInTooltip: false,
        addColorTextElement: false,
        colorTextElement: 'white',
        addColorBackElement: false,
        colorBackElement: 'black',
      },
      {
        legendElement: '',
        numericFormatElement: '5',
        unit: '',
        displayObjectInTooltip: true,
        addColorTextElement: true,
        colorTextElement: 'white',
        addColorBackElement: true,
        colorBackElement: 'black',
      }
    );
    const linkUrl: LinkURLClass = new LinkURLClass('', '', '');
    const positionParameter: PositionParameterClass = new PositionParameterClass('0', '0', '0', '0', {}, {});
    const newPoint: PointClass = new PointClass(
      id,
      linkUrl,
      [],
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
      '12',
      { label: 'Medium', value: 'medium' },
      '0',
      x.toString(),
      y.toString(),
      'black',
      [],
      [],
      widthInitialSpace.toString(),
      heightInitialSpace.toString(),
      x.toString(),
      y.toString()
    );

    const newArrayPoint: PointClass[] = this.props.options.arrayPoints;
    newArrayPoint.push(newPoint);

    this.props.onOptionsChange({
      ...this.props.options,
      indexPoint: id,
      arrayPoints: newArrayPoint,
    });

    this.props.options.newPoint = true;
  };

  /**
   * to do
   */
  displayPoint() {
    const mapItems: JSX.Element[] = [];
    let newArrayPoint: PointClass[] = this.props.options.arrayPoints;
    newArrayPoint.forEach((line: PointClass) => {
      // console.log(line.name);
      // console.log(line);
      const valueMainMetric = this.getValuesMainMetricPoint(line).toString();
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
          valueMainMetric={valueMainMetric}
          refMainMetric={line.mainMetric.refId || ''}
          associateOrientedLinkIn={line.associateOrientedLinksIn}
          associateOrientedLinkOut={line.associateOrientedLinksOut}
          labelPositionX={line.positionParameter.labelAPositionX}
          labelPositionY={line.positionParameter.labelAPositionY}
          tooltipPosition={line.positionParameter.tooltipPositionA}
          auxiliaryMetrics={line.metrics}
          valuesAuxiliaryMetrics={valuesAuxiliaryMetrics}
          linkUrl={line.linkURL}
          buttonAddLinkIsActive={this.state.buttonAddLinkIsActive}
          buttonAddIncurvedLinkIsActive={this.state.buttonAddIncurvedLinkIsActive}
          widthInitialSpaceDefault={line.widthInitialSpaceDefault}
          heightInitialSpaceDefault={line.heightInitialSpaceDefault}
          positionXDefault={line.positionXDefault}
          positionYDefault={line.positionYDefault}
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

  /** update AssociateOrientedLinkIn of point for tootip  */
  private updateAssociateOrientedLinkInToPoint = () => {
    let indexPoint = 0;
    this.props.options.arrayPoints.forEach((point) => {
      let newAssociateLinkIn: any[] = [];
      const namePoint: string = point.label || point.name;
      this.props.options.arrayOrientedLinks.forEach((link) => {
        if (link.pointIn === namePoint) {
          newAssociateLinkIn.push({ label: link.label, name: link.name });
        }
      });
      this.props.options.arrayPoints[indexPoint].associateOrientedLinksIn = newAssociateLinkIn;
      indexPoint++;
    });
  };

  /** update AssociateOrientedLinkOut of point for tootip  */
  private updateAssociateOrientedLinkOutToPoint = () => {
    let indexPoint = 0;
    this.props.options.arrayPoints.forEach((point) => {
      let newAssociateLinkIn: any[] = [];
      const namePoint: string = point.label || point.name;
      this.props.options.arrayOrientedLinks.forEach((link) => {
        if (link.pointOut === namePoint) {
          newAssociateLinkIn.push({ label: link.label, name: link.name });
        }
      });
      this.props.options.arrayPoints[indexPoint].associateOrientedLinksOut = newAssociateLinkIn;
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
    const coordinates = this.props.options.coordinatesToDrawLinkWithClick;
    const objectIn: any = coordinates[1];
    const objectOut: any = coordinates[2];
    const pointC: any = coordinates[3];
    const heightBackground: number = parseInt(this.props.options.baseMap.height, 10);
    const initialSpace: Coord4D = this.props.options.coordinateSpaceInitial.coordinate;
    const xMin: number = parseInt(initialSpace.xMin, 10);
    const xMax: number = parseInt(initialSpace.xMax, 10);
    const yMin: number = parseInt(initialSpace.yMin, 10);
    const yMax: number = parseInt(initialSpace.yMax, 10);
    const widthInitialSpace: number = xMax - xMin;
    const heightInitialSpace: number = yMax - yMin;
    const paddingMarginLeftSimplePanel = 24;
    const clickX = event.nativeEvent.clientX - paddingMarginLeftSimplePanel;
    let positionX = 0;
    let positionY = 0;

    positionX = Math.round(clickX);
    positionY = Math.round(heightBackground - event.nativeEvent.layerY);

    if (
      event.nativeEvent.target.id === 'initialSpace' ||
      event.nativeEvent.target.id === 'Intent' ||
      event.nativeEvent.target.id === 'mainPanel' ||
      event.nativeEvent.target.id === 'oct' + this.props.options.baseMap.idSVG ||
      event.nativeEvent.target.id === this.props.options.baseMap.idSVG
    ) {
      if (coordinates[0].id === 0) {
        objectIn.x = positionX;
        objectIn.xDefault = positionX;
        objectIn.y = positionY;
        objectIn.yDefault = positionY;
        coordinates[0].id++;
      } else if (coordinates[0].id === 1) {
        objectOut.x = positionX;
        objectOut.xDefault = positionX;
        objectOut.y = positionY;
        objectOut.yDefault = positionY;
        pointC.x = ((parseInt(objectIn.x, 10) + parseInt(objectOut.x, 10)) / 2).toString();
        pointC.y = ((parseInt(objectIn.y, 10) + parseInt(objectOut.y, 10)) / 2).toString();
        coordinates[0].id = 0;
        this.createOrientedLinkToClick({ label: 'No', value: false }, widthInitialSpace.toString(), heightInitialSpace.toString());
        this.resetCoordinatesToDrawLinkWithClick();
      }
      // console.log('click');
      // console.log(objectIn);
    } else if (event.nativeEvent.target.id.startsWith('point')) {
      const id: number = parseInt(event.nativeEvent.target.id.charAt(5) + event.nativeEvent.target.id.charAt(6), 10);
      const arrayPoint: PointClass[] = this.props.options.arrayPoints;

      arrayPoint.forEach((point: PointClass) => {
        if (point.id === id) {
          const coordinates = this.props.options.coordinatesToDrawLinkWithClick;
          const name: string = point.label || point.name;

          if (coordinates[0].id === 0) {
            objectIn.x = point.positionShapeX;
            objectIn.xDefault = point.positionXDefault;
            objectIn.y = point.positionShapeY;
            objectIn.yDefault = point.positionYDefault;
            objectIn.labelPoint = name;
            objectIn.point = point;
            coordinates[0].id++;
          } else if (coordinates[0].id === 1) {
            objectOut.x = point.positionShapeX;
            objectOut.xDefault = point.positionXDefault;
            objectOut.y = point.positionShapeY;
            objectOut.yDefault = point.positionYDefault;
            objectOut.labelPoint = name;
            objectOut.point = point;
            pointC.x = ((parseInt(objectIn.x, 10) + parseInt(objectOut.x, 10)) / 2).toString();
            pointC.y = ((parseInt(objectIn.y, 10) + parseInt(objectOut.y, 10)) / 2).toString();
            coordinates[0].id = 0;
            this.createOrientedLinkToClick({ label: 'No', value: false }, widthInitialSpace.toString(), heightInitialSpace.toString());
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
        const xMinDefault: number = parseInt(region.coordsDefault.xMin, 10);
        const xMaxDefault: number = parseInt(region.coordsDefault.xMax, 10);
        const yMinDefault: number = parseInt(region.coordsDefault.yMin, 10);
        const yMaxDefault: number = parseInt(region.coordsDefault.yMax, 10);

        if (event.nativeEvent.target.id.startsWith('region')) {
          const id: number = parseInt(event.nativeEvent.target.id.charAt(6) + event.nativeEvent.target.id.charAt(7), 10);
          if (id === region.id) {
            const coordinates = this.props.options.coordinatesToDrawLinkWithClick;
            positionX = (xMin + xMax) / 2;
            positionY = (yMax + yMin) / 2;
            const positionXdefault = (xMinDefault + xMaxDefault) / 2;
            const positionYdefault = (yMaxDefault + yMinDefault) / 2;
            if (coordinates[0].id === 0) {
              objectIn.x = positionX;
              objectIn.xDefault = positionXdefault;
              objectIn.y = positionY;
              objectIn.yDefault = positionYdefault;
              objectIn.labelRegion = region.label;
              objectIn.region = region;
              coordinates[0].id++;
            } else if (coordinates[0].id === 1) {
              objectOut.x = positionX;
              objectOut.xDefault = positionXdefault;
              objectOut.y = positionY;
              objectOut.yDefault = positionYdefault;
              objectOut.labelRegion = region.label;
              objectOut.region = region;
              pointC.x = ((parseInt(objectIn.x, 10) + parseInt(objectOut.x, 10)) / 2).toString();
              pointC.y = ((parseInt(objectIn.y, 10) + parseInt(objectOut.y, 10)) / 2).toString();
              coordinates[0].id = 0;
              this.createOrientedLinkToClick({ label: 'No', value: false }, widthInitialSpace.toString(), heightInitialSpace.toString());
              this.resetCoordinatesToDrawLinkWithClick();
            }
          }
        } else if (
          (event.nativeEvent.target.id !== 'oct' + this.props.options.baseMap.idSVG && event.nativeEvent.target.id.startsWith('oct')) ||
          (event.nativeEvent.target.id !== this.props.options.baseMap.idSVG &&
            (event.nativeEvent.target.id.startsWith('path') ||
              event.nativeEvent.target.id.startsWith('rect') ||
              event.nativeEvent.target.id.startsWith('ellipse')))
        ) {
          // console.log('4');
          let id = '';
          if (this.props.options.baseMap.isUploaded) {
            id = event.nativeEvent.target.id;
          } else {
            id = event.nativeEvent.target.id.substr(3);
          }
          if (id === region.idSVG) {
            const coordinates = this.props.options.coordinatesToDrawLinkWithClick;
            positionX = 0;
            positionY = 0;
            if (coordinates[0].id === 0) {
              objectIn.x = positionX;
              objectIn.xDefault = positionX;
              objectIn.y = positionY;
              objectIn.yDefault = positionY;
              objectIn.labelRegion = region.label;
              objectIn.region = region;
              coordinates[0].id++;
            } else if (coordinates[0].id === 1) {
              objectOut.x = positionX;
              objectOut.xDefault = positionX;
              objectOut.y = positionY;
              objectOut.yDefault = positionY;
              objectOut.labelRegion = region.label;
              objectOut.region = region;
              pointC.x = ((parseInt(objectIn.x, 10) + parseInt(objectOut.x, 10)) / 2).toString();
              pointC.y = ((parseInt(objectIn.y, 10) + parseInt(objectOut.y, 10)) / 2).toString();
              coordinates[0].id = 0;
              this.createOrientedLinkToClick({ label: 'No', value: false }, widthInitialSpace.toString(), heightInitialSpace.toString());
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
              this.createOrientedLinkToClick({ label: 'No', value: false }, widthInitialSpace.toString(), heightInitialSpace.toString());
              this.resetCoordinatesToDrawLinkWithClick();
            }
          }
        }
      });
    }
  };

  getCoordinatesToDrawIncurvedOrientedLinkWithClick = (event: any) => {
    const coordinates = this.props.options.coordinatesToDrawLinkWithClick;
    const objectIn: any = coordinates[1];
    const objectOut: any = coordinates[2];
    const pointC: any = coordinates[3];
    const heightBackground: number = parseInt(this.props.options.baseMap.height, 10);
    const initialSpace: Coord4D = this.props.options.coordinateSpaceInitial.coordinate;
    const xMin: number = parseInt(initialSpace.xMin, 10);
    const xMax: number = parseInt(initialSpace.xMax, 10);
    const yMin: number = parseInt(initialSpace.yMin, 10);
    const yMax: number = parseInt(initialSpace.yMax, 10);
    const widthInitialSpace: number = xMax - xMin;
    const heightInitialSpace: number = yMax - yMin;

    const paddingMarginLeftSimplePanel = 24;
    const clickX = event.nativeEvent.clientX - paddingMarginLeftSimplePanel;
    let positionX = 0;
    let positionY = 0;

    positionX = Math.round(clickX);
    positionY = Math.round(heightBackground - event.nativeEvent.layerY);

    if (
      event.nativeEvent.target.id === 'mainPanel' ||
      event.nativeEvent.target.id === 'initialSpace' ||
      event.nativeEvent.target.id === 'Intent' ||
      event.nativeEvent.target.id === 'oct' + this.props.options.baseMap.idSVG ||
      event.nativeEvent.target.id === this.props.options.baseMap.idSVG
    ) {
      if (coordinates[0].id === 0) {
        objectIn.x = positionX;
        objectIn.y = positionY;
        coordinates[0].id++;
      } else if (coordinates[0].id === 1) {
        objectOut.x = positionX;
        objectOut.y = positionY;
        coordinates[0].id++;
      } else if (coordinates[0].id === 2) {
        pointC.x = positionX;
        pointC.y = positionY;
        coordinates[0].id = 0;
        this.createOrientedLinkToClick({ label: 'Yes', value: true }, widthInitialSpace.toString(), heightInitialSpace.toString());
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
            this.createOrientedLinkToClick({ label: 'Yes', value: true }, widthInitialSpace.toString(), heightInitialSpace.toString());
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
            } else if (coordinates[0].id === 2) {
              pointC.x = positionX;
              pointC.y = positionY;
              coordinates[0].id = 0;
              this.createOrientedLinkToClick({ label: 'Yes', value: true }, widthInitialSpace.toString(), heightInitialSpace.toString());
              this.resetCoordinatesToDrawLinkWithClick();
            }
          }
        } else if (
          (event.nativeEvent.target.id !== 'oct' + this.props.options.baseMap.idSVG && event.nativeEvent.target.id.startsWith('oct')) ||
          (event.nativeEvent.target.id !== this.props.options.baseMap.idSVG &&
            (event.nativeEvent.target.id.startsWith('path') ||
              event.nativeEvent.target.id.startsWith('rect') ||
              event.nativeEvent.target.id.startsWith('ellipse')))
        ) {
          let id = '';
          if (this.props.options.baseMap.isUploaded) {
            id = event.nativeEvent.target.id;
          } else {
            id = event.nativeEvent.target.id.substr(3);
          }
          if (id === region.idSVG) {
            const coordinates = this.props.options.coordinatesToDrawLinkWithClick;
            positionX = 0;
            positionY = 0;
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
              this.createOrientedLinkToClick({ label: 'Yes', value: true }, widthInitialSpace.toString(), heightInitialSpace.toString());
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
              this.createOrientedLinkToClick({ label: 'Yes', value: true }, widthInitialSpace.toString(), heightInitialSpace.toString());
              this.resetCoordinatesToDrawLinkWithClick();
            }
          }
        }
      });
    }
  };

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
  createOrientedLinkToClick = (isIncurved: SelectableValue<boolean>, widthInitialSpace: string, heightInitialSpace: string) => {
    const coordinates = this.props.options.coordinatesToDrawLinkWithClick;
    const id: number = this.defineIdOrientedLink();
    const name: string = 'orientedLink' + id.toString();
    const zIndex: number = this.props.options.zIndexOrientedLink + 1;
    const pointA: any = coordinates[1];
    const pointB: any = coordinates[2];
    const pointC: any = coordinates[3];
    const initTextObject: TextObject = new TextObject(
      '',
      false,
      'white',
      'black',
      { bold: false, italic: false, underline: false },
      true,
      {
        legendElement: '',
        numericFormatElement: '5',
        unit: '',
        displayObjectInTooltip: false,
        addColorTextElement: false,
        colorTextElement: 'white',
        addColorBackElement: false,
        colorBackElement: 'black',
      },
      {
        legendElement: '',
        numericFormatElement: '5',
        unit: '',
        displayObjectInTooltip: true,
        addColorTextElement: true,
        colorTextElement: 'white',
        addColorBackElement: true,
        colorBackElement: 'black',
      }
    );
    const linkUrl: LinkURLClass = new LinkURLClass('', '', '');
    const positionParameter: PositionParameterClass = new PositionParameterClass('0', '0', '0', '0', {}, {});

    const newOrientedLink: OrientedLinkClass = new OrientedLinkClass(
      id,
      linkUrl,
      [],
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
      '9',
      pointA.x.toString(),
      pointA.y.toString(),
      '#5794F2',
      pointB.x.toString(),
      pointB.y.toString(),
      '#E54658',
      '',
      '',
      pointA.labelPoint,
      pointB.labelPoint,
      pointA.labelRegion,
      pointB.labelRegion,
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
      widthInitialSpace,
      heightInitialSpace,
      pointA.xDefault.toString(),
      pointA.yDefault.toString(),
      pointB.xDefault.toString(),
      pointB.yDefault.toString(),
      pointC.x,
      pointC.y
    );

    const newArrayOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
    newArrayOrientedLink.push(newOrientedLink);

    this.props.onOptionsChange({
      ...this.props.options,
      arrayOrientedLinks: newArrayOrientedLink,
      indexOrientedLink: id,
      zIndexOrientedLink: zIndex,
      newOrientedLink: true,
    });

    this.props.options.arrayOrientedLinks = newArrayOrientedLink;
    this.props.options.indexOrientedLink = id;
    this.props.options.zIndexOrientedLink = zIndex;
    this.props.options.newOrientedLink = true;

    this.addAssociateOrientedLinkToPoint(pointA.labelPoint || '', pointB.labelPoint || '', newOrientedLink.id);
  };

  private defineValueX = (orientedLink: OrientedLinkClass, defaultPosition: boolean, isIn: boolean): string => {
    let result = '';
    if (isIn) {
      if (orientedLink.pointIn !== '') {
        const arrayPoint: PointClass[] = this.props.options.arrayPoints;
        arrayPoint.forEach((point) => {
          if (point.name === orientedLink.pointIn || point.label === orientedLink.pointIn) {
            if (defaultPosition) {
              result = point.positionXDefault;
            } else {
              result = point.positionShapeX;
            }
          }
        });
      } else if (orientedLink.regionIn !== '') {
        const arrayRegion: RegionClass[] = this.props.options.regionCoordinateSpace;
        arrayRegion.forEach((region) => {
          if (region.label === orientedLink.regionIn) {
            if (defaultPosition) {
              result = (parseInt(region.coords.xMax, 10) - parseInt(region.coords.xMin, 10)).toString();
            } else {
              result = (parseInt(region.coordsDefault.xMax, 10) - parseInt(region.coordsDefault.xMin, 10)).toString();
            }
          }
        });
      } else {
        if (defaultPosition) {
          result = orientedLink.pointAPositionXDefault;
        } else {
          result = orientedLink.pointAPositionX;
        }
      }
    } else {
      if (orientedLink.pointOut !== '') {
        const arrayPoint: PointClass[] = this.props.options.arrayPoints;
        arrayPoint.forEach((point) => {
          if (point.name === orientedLink.pointOut || point.label === orientedLink.pointOut) {
            if (defaultPosition) {
              result = point.positionXDefault;
            } else {
              result = point.positionShapeX;
            }
          }
        });
      } else if (orientedLink.regionOut !== '') {
        const arrayRegion: RegionClass[] = this.props.options.regionCoordinateSpace;
        arrayRegion.forEach((region) => {
          if (region.label === orientedLink.regionOut) {
            if (defaultPosition) {
              result = (parseInt(region.coords.xMax, 10) - parseInt(region.coords.xMin, 10)).toString();
            } else {
              result = (parseInt(region.coordsDefault.xMax, 10) - parseInt(region.coordsDefault.xMin, 10)).toString();
            }
          }
        });
      } else {
        if (defaultPosition) {
          result = orientedLink.pointBPositionXDefault;
        } else {
          result = orientedLink.pointBPositionX;
        }
      }
    }
    return result;
  };

  private defineValueY = (orientedLink: OrientedLinkClass, defaultPosition: boolean, isIn: boolean): string => {
    let result = '';
    if (isIn) {
      if (orientedLink.pointIn !== '') {
        const arrayPoint: PointClass[] = this.props.options.arrayPoints;
        arrayPoint.forEach((point) => {
          if (point.name === orientedLink.pointIn) {
            if (defaultPosition) {
              result = point.positionYDefault;
            } else {
              result = point.positionShapeY;
            }
          }
        });
      } else if (orientedLink.regionIn !== '') {
        const arrayRegion: RegionClass[] = this.props.options.regionCoordinateSpace;
        arrayRegion.forEach((region) => {
          if (region.label === orientedLink.regionIn) {
            if (defaultPosition) {
              result = (parseInt(region.coords.yMax, 10) - parseInt(region.coords.yMin, 10)).toString();
            } else {
              result = (parseInt(region.coordsDefault.yMax, 10) - parseInt(region.coordsDefault.yMin, 10)).toString();
            }
          }
        });
      } else {
        if (defaultPosition) {
          result = orientedLink.pointAPositionYDefault;
        } else {
          result = orientedLink.pointAPositionY;
        }
      }
    } else {
      if (orientedLink.pointOut !== '') {
        const arrayPoint: PointClass[] = this.props.options.arrayPoints;
        arrayPoint.forEach((point) => {
          if (point.name === orientedLink.pointIn) {
            if (defaultPosition) {
              result = point.positionYDefault;
            } else {
              result = point.positionShapeY;
            }
          }
        });
      } else if (orientedLink.regionOut !== '') {
        const arrayRegion: RegionClass[] = this.props.options.regionCoordinateSpace;
        arrayRegion.forEach((region) => {
          if (region.label === orientedLink.regionIn) {
            if (defaultPosition) {
              result = (parseInt(region.coords.yMax, 10) - parseInt(region.coords.yMin, 10)).toString();
            } else {
              result = (parseInt(region.coordsDefault.yMax, 10) - parseInt(region.coordsDefault.yMin, 10)).toString();
            }
          }
        });
      } else {
        if (defaultPosition) {
          result = orientedLink.pointBPositionYDefault;
        } else {
          result = orientedLink.pointBPositionY;
        }
      }
    }
    return result;
  };

  /**
   * to do
   */
  displayOrientedLink() {
    const arrayOrientedLink = this.props.options.arrayOrientedLinks;
    const mapItems: JSX.Element[] = [];
    let item: JSX.Element = <div></div>;
    arrayOrientedLink.forEach((orientedLink: OrientedLinkClass) => {
      const valueMainMetricA: string = this.getValuesMainMetricOrientedLink(orientedLink).toString();
      const valueMainMetricB: string = this.getValuesMainMetricOrientedLinkB(orientedLink).toString();
      this.getValuesMainMetricOrientedLinkB(orientedLink);
      const valuesAuxiliaryMetrics: string[] = this.getValuesAuxiliaryMetricsOrientedLink(orientedLink);
      const valuesAuxiliaryMetricsB: string[] = this.getValuesAuxiliaryMetricsOrientedLinkB(orientedLink);
      const pointAX: string = this.defineValueX(orientedLink, false, true);
      const pointDefaultAX: string = this.defineValueX(orientedLink, true, true);
      const pointBX: string = this.defineValueX(orientedLink, false, false);
      const pointDefaultBX: string = this.defineValueX(orientedLink, true, false);
      const pointAY: string = this.defineValueY(orientedLink, false, true);
      const pointDefaultAY: string = this.defineValueY(orientedLink, true, true);
      const pointBY: string = this.defineValueY(orientedLink, false, false);
      const pointDefaultBY: string = this.defineValueY(orientedLink, true, false);

      item = (
        <DrawOrientedLink
          key={'orientedLink' + orientedLink.id.toString()}
          id={orientedLink.id.toString()}
          orientationLink={orientedLink.orientationLink.value || ''}
          pointAPositionX={pointAX}
          pointAPositionY={pointAY}
          pointBPositionX={pointBX}
          pointBPositionY={pointBY}
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
          valueMainMetricA={valueMainMetricA}
          valueMainMetricB={valueMainMetricB}
          refMainMetricA={orientedLink.mainMetric.refId || ''}
          refMainMetricB={orientedLink.mainMetricB.refId || ''}
          options={this.props.options}
          onOptionsChange={this.props.onOptionsChange}
          data={this.props.data}
          textObject={orientedLink.textObj}
          seuil={orientedLink.lowerLimit}
          traceBorder={orientedLink.traceBorder}
          traceBack={orientedLink.traceBack}
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
          size={orientedLink.size}
          widthInitialSpaceDefault={orientedLink.widthInitialSpaceDefault}
          heightInitialSpaceDefault={orientedLink.heightInitialSpaceDefault}
          positionXADefault={pointDefaultAX}
          positionYADefault={pointDefaultAY}
          positionXBDefault={pointDefaultBX}
          positionYBDefault={pointDefaultBY}
          positionXCDefault={orientedLink.pointCPositionXDefault}
          positionYCDefault={orientedLink.pointCPositionYDefault}
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
    let result = 0;
    result = getResultQuery(point.mainMetric) || NaN;
    return result;
  }

  getValuesMainMetricOrientedLink(orientedLink: OrientedLinkClass): number {
    reqMetricOrientedLink(orientedLink, this.props);
    let result = 0;
    result = getResultQuery(orientedLink.mainMetric) || NaN;
    return result;
  }

  getValuesMainMetricOrientedLinkB(orientedLink: OrientedLinkClass) {
    reqMetricOrientedLink(orientedLink, this.props);
    let result = 0;
    result = getResultQuery(orientedLink.mainMetricB) || NaN;
    return result;
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
    //const countMetrics: number = auxiliaryMetrics.length;
    if (auxiliaryMetrics.length < 1) {
      auxiliaryMetrics.forEach((metric: Metric) => {
        let countTotalValues = 0;
        let resultTotalValues = 0;
        let result = '';
        if (metric.returnQuery && metric.returnQuery.length > 0) {
          let numberLoop: number = metric.returnQuery?.length || 0;
          if (metric.key !== '' && metric.keyValue !== '') {
            for (let i = 0; i < numberLoop; i++) {
              let line = metric.returnQuery[i];
              if (line.fields[0].labels) {
                if (mainMetric.refId !== '') {
                  //console.log(mainMetric);
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
            }
          } else {
            if (mainMetric.refId !== '') {
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
    }
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
  // Close Legend
  callInFunc = () => {
    if (this.state.buttonAddIncurvedLinkIsActive) {
      this.setState((prevState: State) => ({
        buttonAddIncurvedLinkIsActive: !prevState.buttonAddIncurvedLinkIsActive,
      }));
    }
    if (this.state.buttonAddLinkIsActive) {
      this.setState((prevState: State) => ({
        buttonAddLinkIsActive: !prevState.buttonAddLinkIsActive,
      }));
    }
    this.resetButtonManage(2);
  };

  /**
   * add button click to manage region, point, oriented link, position legend
   */
  updateButtonCss = () => {
    const final: JSX.Element = (
      <div id="allButton" style={{ marginTop: '1%', marginBottom: '50px' }}>
        <Button
          style={{ marginLeft: '1%', zIndex: 18, position: 'absolute' }}
          variant={this.state.buttonManage[0] ? 'danger' : 'primary'}
          className="button"
          onClick={this.addNode}
        >
          Add Region
        </Button>

        <Button
          style={{ marginLeft: '15%', zIndex: 18, position: 'absolute' }}
          variant={this.state.buttonManage[3] ? 'danger' : 'primary'}
          className="button"
          onClick={this.addPoint}
        >
          Add Point
        </Button>

        <Button
          style={{ marginLeft: '27%', zIndex: 18, position: 'absolute' }}
          variant={this.state.buttonManage[1] ? 'danger' : 'primary'}
          className="button"
          onClick={this.addLink}
        >
          Add Oriented Link
        </Button>

        <Button
          style={{ marginLeft: '46%', zIndex: 18, position: 'absolute' }}
          variant={this.state.buttonManage[4] ? 'danger' : 'primary'}
          className="button"
          onClick={this.addIncurvedLink}
        >
          Add Incurved Oriented Link
        </Button>

        <Button
          id="legnd"
          style={{ marginLeft: '67%', zIndex: 18, position: 'absolute' }}
          variant={this.state.buttonManage[2] ? 'danger' : 'primary'}
          className="button"
          onClick={this.callInFunc} // Method Close legend
        >
          Position Legend
        </Button>

        <Button id="zoompan" style={{ marginLeft: '80%', zIndex: 18, position: 'absolute' }} variant={'primary'} onClick={this.ZoomSVG}>
          Zoom [P/M]
        </Button>
        <Button id="zoomstop" style={{ marginLeft: '89%', zIndex: 18, position: 'absolute' }} variant={'primary'} onClick={this.ZoomInactive}>
          <i className="fa fa-stop" aria-hidden="true"></i>
        </Button>
      </div>
    );
    this.setState({
      allActionButton: final,
    });
  };

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
    return new Promise((resolve) => {
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
      if (index === 2) {
        this.setState({
          hiddenLegend: false,
          valueButton: '',
        });
      }
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
    if (this.state.buttonAddIncurvedLinkIsActive) {
      this.setState((prevState: State) => ({
        buttonAddIncurvedLinkIsActive: !prevState.buttonAddIncurvedLinkIsActive,
      }));
    }
    if (this.state.buttonAddLinkIsActive) {
      this.setState((prevState: State) => ({
        buttonAddLinkIsActive: !prevState.buttonAddLinkIsActive,
      }));
    }
    this.setState((prevState: State) => ({
      nbClickButton: prevState.buttonManage[0] ? false : true,
    }));
    this.resetButtonManage(0);
    this.changeValueButtonToPoint();
  };

  addPoint = () => {
    if (this.state.buttonAddIncurvedLinkIsActive) {
      this.setState((prevState: State) => ({
        buttonAddIncurvedLinkIsActive: !prevState.buttonAddIncurvedLinkIsActive,
      }));
    }
    if (this.state.buttonAddLinkIsActive) {
      this.setState((prevState: State) => ({
        buttonAddLinkIsActive: !prevState.buttonAddLinkIsActive,
      }));
    }
    this.setState((prevState: State) => ({
      nbClickButton: prevState.buttonManage[3] ? false : true,
      valueButton: 'point',
    }));
    this.resetButtonManage(3);
    this.changeValueButtonToPoint();
  };

  addLink = () => {
    if (this.state.buttonAddIncurvedLinkIsActive) {
      this.setState((prevState: State) => ({
        buttonAddIncurvedLinkIsActive: !prevState.buttonAddIncurvedLinkIsActive,
      }));
    }
    this.setState((prevState: State) => ({
      nbClickButton: prevState.buttonManage[1] ? false : true,
      buttonAddLinkIsActive: !prevState.buttonAddLinkIsActive,
    }));
    this.resetButtonManage(1);
    this.changeValueButtonToLink();
  };

  addIncurvedLink = () => {
    if (this.state.buttonAddLinkIsActive) {
      this.setState((prevState: State) => ({
        buttonAddLinkIsActive: !prevState.buttonAddLinkIsActive,
      }));
    }
    this.setState((prevState: State) => ({
      nbClickButton: prevState.buttonManage[4] ? false : true,
      buttonAddIncurvedLinkIsActive: !prevState.buttonAddIncurvedLinkIsActive,
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
          // isEnabled={!this.state.buttonManage[1]}
          buttonAddLinkIsActive={this.state.buttonAddLinkIsActive}
          buttonAddIncurvedLinkIsActive={this.state.buttonAddIncurvedLinkIsActive}
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
  // not display Button of Panel if it is in the mode View
  checkIfDisplayButton = () => {
    const url: string = window.location.href;
    const arrayUrl: string[] = url.split('&');
    let canDisplayButton = false;
    for (const element of arrayUrl) {
      if (element === 'edit') {
        canDisplayButton = true;
      }
    }
    if (!canDisplayButton) {
      this.props.onOptionsChange({
        ...this.props.options,
        displayButton: false,
      });
    }
  };

  /**
   * update button css when mount component
   */
  componentDidMount = async () => {
    // console.log('mount Panel');

    // not display Button of Panel if it is in the mode View
    this.checkIfDisplayButton();

    // save background in state
    this.setState({
      currentImage: this.props.options.baseMap.image,
    });

    // load backgroundSVG
    if (this.props.options.baseMap.modeSVG && this.props.options.baseMap.image !== '') {
      if (this.props.options.baseMap.isUploaded) {
        let width = '';
        let height = '';
        const text = this.props.options.baseMap.image;
        this.setState({ svg: text });
        const result = /id=["']\w*["']/i.exec(text);
        const resultWidth = /width=["']\w*["']/i.exec(text);
        if (resultWidth && resultWidth.length > 0) {
          width = resultWidth[0].split('"')[1];
        }
        const resultHeight = /height=["']\w*["']/i.exec(text);
        if (resultHeight && resultHeight.length > 0) {
          height = resultHeight[0].split('"')[1];
        }
        if (result && result.length > 0) {
          const id: string[] = result[0].split('"');
          if (id.length > 1) {
            const newBaseMap: Background = this.props.options.baseMap;
            newBaseMap.idSVG = id[1];
            newBaseMap.layerImage = this.props.options.baseMap.image;
            newBaseMap.width = parseInt(width || '0', 10).toString() || '';
            newBaseMap.height = parseInt(height || '0', 10).toString() || '';
            this.props.onOptionsChange({
              ...this.props.options,
              baseMap: newBaseMap,
            });
          }
        }
        this.chargeRegion();
      } else {
        fetch(this.props.options.baseMap.image)
          .then((res) => res.text())
          .then((text) => {
            let data: any;
            if (this.props.options.baseMap.image.split(',')[0] === 'base64') {
              data = atob(this.props.options.baseMap.image.split(',')[1]);
            } else {
              data = text;
            }
            this.setState({ svg: data });
            const result = /id=["']\w*["']/i.exec(data);
            if (result && result.length > 0) {
              const id: string[] = result[0].split('"');
              if (id.length > 1) {
                const documentId = document.getElementById(id[1]);
                if (documentId) {
                  const newBaseMap: Background = this.props.options.baseMap;
                  newBaseMap.idSVG = id[1];
                  // newBaseMap.width = documentId.getAttribute('width') || '';
                  // newBaseMap.height = documentId.getAttribute('height') || '';
                  newBaseMap.width = parseInt(documentId.getAttribute('width') || '0', 10).toString() || '';
                  newBaseMap.height = parseInt(documentId.getAttribute('height') || '0', 10).toString() || '';
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
    } else {
      this.chargeRegion();
    }

    //Set value initialSpace with width and height of background
    // const widthInitialSpace = this.props.options.baseMap.width === '' ? '0' : this.props.options.baseMap.width;
    // console.log(widthInitialSpace);
    // const heightInitialSpace = this.props.options.baseMap.height === '' ? '0' : this.props.options.baseMap.height;
    // console.log(heightInitialSpace);
    // this.props.options.coordinateSpaceInitial.coordinate.xMax = widthInitialSpace;
    // this.props.options.coordinateSpaceInitial.coordinate.yMax = heightInitialSpace;
    this.props.options.coordinateSpaceInitial.coordinate.xMax = this.props.options.baseMap.width;
    this.props.options.coordinateSpaceInitial.coordinate.yMax = this.props.options.baseMap.height;

    this.updateButtonCss();
  };

  componentDidUpdate(prevProps: Props) {
    if (this.state.currentImage !== this.props.options.baseMap.image) {
      this.componentDidMount();
    }
    //Set width initialSpace if new width in display
    if (
      this.props.options.baseMap.width !== this.props.options.coordinateSpaceInitial.coordinate.xMax &&
      !this.props.options.updateOnlyInitialSpace
    ) {
      //console.log('newWidth');
      this.props.options.coordinateSpaceInitial.coordinate.xMax = this.props.options.baseMap.width;
    }
    //Set height initialSpace if new height in display
    if (
      this.props.options.baseMap.height !== this.props.options.coordinateSpaceInitial.coordinate.yMax &&
      !this.props.options.updateOnlyInitialSpace
    ) {
      //console.log('newHeight');
      this.props.options.coordinateSpaceInitial.coordinate.yMax = this.props.options.baseMap.height;
    }
    // if (this.props.options.baseMap.image !== prevProps.options.baseMap.image) {
    //   this.componentDidMount();
    // }
    if (this.props !== prevProps) {
      this.chargeRegion();
    }
  }
  // Zoom in Panel
  /********************************  Zoom Panel*********************************** */
  // Zoom Plus

  ZoomInactive = (event: any) => {
    document.body.removeEventListener('keyup', this.applyZoom);

    const elmnt = document.getElementById('coordinateSpaces');
    console.log('start');
    if (elmnt) {
      const stop = document.getElementById('zoomstop');
      if (stop) {
        // document.body.removeEventListener('keyup', this.ZoomSVG, true);
      }
    }
  };

  applyZoom = (evt: any) => {
    const elmnt = document.getElementById('coordinateSpaces');
    const lol = document.getElementById('zoompan');

    if (elmnt && evt.keyCode === 80) {
      // m
      if (lol) {
        // lol.style.background = 'linear-gradient(to bottom,#e02f44,#c4162a)';
        elmnt.style.cursor = 'zoom-in';
        elmnt.style.transform += 'scale(1.01,1.01)' + 'translate(0.5%)' + 'translateY(0.5%)';
      }
    } else if (elmnt && evt.keyCode === 77) {
      // p
      if (lol) {
        // lol.style.background = 'linear-gradient(to bottom,#e02f44,#c4162a);';
        elmnt.style.cursor = 'zoom-out';
        elmnt.style.transform += 'scale(0.98,0.98)' + 'translate(-1%)' + 'translateY(-1%)';
      }
    }
  };

  ZoomSVG = () => {
    document.body.addEventListener('keyup', this.applyZoom);
  };

  private displayTooltipSVG = (event: any) => {
    let idSVG = '';
    if (this.props.options.baseMap.isUploaded) {
      idSVG = event.target.id;
    } else {
      idSVG = event.target.id.substring(3);
    }
    const arrayRegions: RegionClass[] = this.props.options.regionCoordinateSpace;
    let newDataSVG: DataTooltipRegionSVG = { idSVG: idSVG, x: '', y: '' };
    for (const region of arrayRegions) {
      if (region.idSVG === idSVG) {
        let xSVG = 0;
        let ySVG = 0;
        let widthSVG = 0;
        let heightSVG = 0;
        let positionX = '';
        let positionY = '';
        //console.log(idSVG);
        if (event.target.localName === 'rect') {
          //console.log('rect');
          xSVG = parseInt(event.target.attributes['x'].nodeValue, 10);
          ySVG = parseInt(event.target.attributes['y'].nodeValue, 10);
          widthSVG = parseInt(event.target.attributes['width'].nodeValue, 10);
          heightSVG = parseInt(event.target.attributes['height'].nodeValue, 10);
          positionX = (xSVG + widthSVG).toString();
          positionY = (ySVG - heightSVG / 2).toString();
        } else if (event.target.localName === 'ellipse') {
          //console.log('ellipse');
          xSVG = parseInt(event.target.attributes['cx'].nodeValue, 10);
          ySVG = parseInt(event.target.attributes['cy'].nodeValue, 10);
          widthSVG = parseInt(event.target.attributes['rx'].nodeValue, 10) * 2;
          heightSVG = parseInt(event.target.attributes['ry'].nodeValue, 10) * 2;
          positionX = xSVG.toString();
          positionY = ySVG.toString();
        } else if (event.target.localName === 'path') {
          //console.log('path');
          const allValues: string = event.target.attributes['d'].nodeValue;
          const arrayAllValues: string[] = allValues.split(' ');
          let iX = -2;
          let xMin = 1000000;
          let xMax = 0;
          let iY = -1;
          let yMin = 1000000;
          let yMax = 0;
          for (let i = 0; i < arrayAllValues.length; i++) {
            let valueToCheck = parseInt(arrayAllValues[i], 10);
            if (i === iX + 3) {
              if (valueToCheck < xMin) {
                xMin = valueToCheck;
              }
              if (valueToCheck > xMax) {
                xMax = valueToCheck;
              }
              iX = i;
            }
            if (i === iY + 3) {
              if (valueToCheck < yMin) {
                yMin = valueToCheck;
              }
              if (valueToCheck > yMax) {
                yMax = valueToCheck;
              }
              iY = i;
            }
          }
          xSVG = xMin;
          ySVG = yMin;
          widthSVG = xMax - xMin;
          // heightSVG = xMax - xMin;
          positionX = (xSVG + widthSVG).toString();
          positionY = ySVG.toString();
        }
        newDataSVG.x = positionX;
        newDataSVG.y = positionY;
        this.setState({
          dataTooltipSVG: newDataSVG,
        });
        const tooltipSVG: any = document.getElementById('tooltipSVG');
        if (tooltipSVG) {
          tooltipSVG.style.display = 'initial';
        }
      }
    }
  };

  private hideTooltipSVG = (event: any) => {
    let idSVG = '';
    if (this.props.options.baseMap.isUploaded) {
      idSVG = event.target.id;
    } else {
      idSVG = event.target.id.substring(3);
    }
    const arrayRegions: RegionClass[] = this.props.options.regionCoordinateSpace;
    for (const region of arrayRegions) {
      if (region.idSVG === idSVG) {
        const tooltipSVG: any = document.getElementById('tooltipSVG');
        tooltipSVG.style.display = 'none';
      }
    }
  };

  // Tooltip in Svg
  //tooltip_SVG = () => {
  //   const red = document.getElementById('part1');

  //   red?.addEventListener('mouseenter', () => {
  //     red.addEventListener('mouseover', () => {
  //       const tooltip = document.createElement('span');
  //       const texttest = document.createTextNode('rectanglered');
  //       tooltip.appendChild(texttest);
  //       red.appendChild(tooltip).style.position = 'absolute';
  //       red.appendChild(tooltip).style.backgroundColor = '#000000';
  //       red.appendChild(tooltip).style.padding = '8px';
  //       red.appendChild(tooltip).style.float = 'top';
  //       red.appendChild(tooltip).style.color = '#d8d9da';
  //       red.appendChild(tooltip).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
  //       red.appendChild(tooltip).style.borderRadius = '2px';
  //       red.appendChild(tooltip).style.fontWeight = '500';
  //       red.addEventListener('mouseout', () => {
  //         red.appendChild(tooltip).style.visibility = 'hidden';
  //       });
  //     });
  //     const yellow = document.getElementById('part2');
  //     yellow?.addEventListener('mouseenter', () => {
  //       yellow.addEventListener('mouseover', () => {
  //         const tooltip = document.createElement('span');
  //         const texttest = document.createTextNode('rectangleyellow');
  //         tooltip.appendChild(texttest);
  //         yellow.appendChild(tooltip).style.position = 'absolute';
  //         yellow.appendChild(tooltip).style.backgroundColor = '#000000';
  //         yellow.appendChild(tooltip).style.padding = '8px';
  //         yellow.appendChild(tooltip).style.float = 'top';
  //         yellow.appendChild(tooltip).style.color = '#d8d9da';
  //         yellow.appendChild(tooltip).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
  //         yellow.appendChild(tooltip).style.borderRadius = '2px';
  //         yellow.appendChild(tooltip).style.fontWeight = '500';
  //         yellow.addEventListener('mouseout', () => {
  //           yellow.appendChild(tooltip).style.visibility = 'hidden';
  //         });
  //       });
  //       const rect = document.getElementById('carre');
  //       rect?.addEventListener('mouseenter', () => {
  //         rect.addEventListener('mouseover', () => {
  //           const tooltip = document.createElement('span');
  //           const texttest = document.createTextNode('rectanglegreen');
  //           tooltip.appendChild(texttest);
  //           rect.appendChild(tooltip).style.position = 'absolute';
  //           rect.appendChild(tooltip).style.backgroundColor = '#000000';
  //           rect.appendChild(tooltip).style.padding = '8px';
  //           rect.appendChild(tooltip).style.marginTop = '20%';
  //           rect.appendChild(tooltip).style.color = '#d8d9da';
  //           rect.appendChild(tooltip).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
  //           rect.appendChild(tooltip).style.borderRadius = '2px';
  //           rect.appendChild(tooltip).style.fontWeight = '500';
  //           rect.addEventListener('mouseout', () => {
  //             rect.appendChild(tooltip).style.visibility = 'hidden';
  //           });
  //         });
  //       });
  //     });
  //   });
  // };

  /*************************************test create tooltip **********************************************************/

  SVG_PathImage = (event: any) => {
    this.displayTooltipSVG(event);
    const elementSVG: any = event.target;
    const parentElementSVG: any = elementSVG.parentNode;
    let idSVG = '';
    if (this.props.options.baseMap.isUploaded) {
      idSVG = event.target.id;
    } else {
      idSVG = event.target.id.substring(3);
    }
    const arrayRegion: RegionClass[] = this.props.options.regionCoordinateSpace;
    for (const region of arrayRegion) {
      if (region.idSVG === idSVG) {
        const linkUrl: string = region.linkURL.followLink;
        if (linkUrl && !document.getElementById('a' + idSVG) && !this.state.buttonAddIncurvedLinkIsActive && !this.state.buttonAddLinkIsActive) {
          const aElement = document.createElementNS('http://www.w3.org/2000/svg', 'a');
          aElement.setAttribute('id', 'a' + idSVG);
          aElement.setAttribute('href', linkUrl);
          aElement.appendChild(elementSVG);
          parentElementSVG.appendChild(aElement);
        }
      }
    }
    // for (const line of this.props.options.regionCoordinateSpace) {
    //   if (line.mode) {
    //     const id: HTMLElement | null = document.getElementById('oct' + line.idSVG);
    //     if (id) {
    //       // const valueQuery = getResultQuery(line.mainMetric);
    //       const test = document.getElementById('jeSuisLa' + line.id);
    //       if (test) {
    //         test.style.fill = 'red';
    //       } else {
    //         const textObj: TextObject = line.textObj;
    //         if (
    //           !textObj.isTextTooltip ||
    //           (textObj.generateObjectText && textObj.valueGenerateObjectText && !textObj.valueGenerateObjectText.displayObjectInTooltip)
    //         ) {
    //           const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    //           title.setAttribute('fill', 'yellow');
    //           title.setAttributeNS('http://www.w3.org/1999/xlink', 'fill', 'yellow');
    //           title.setAttribute('fill', 'red');
    //           title.setAttributeNS('title', 'fill', 'red');
    //           const text = getInfoDisplayRegion(line, this.props);

    //           title.innerHTML = text.tooltip.modeText || '';
    //           // title.textContent = valueQuery ? valueQuery.toString() : '';
    //           title.id = 'jeSuisLa' + line.id;
    //           title.style.fill = 'red';
    //           id.appendChild(title);
    //         }
    //       }
    //     }
    //   }
    // }
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
    // const xMinInitialSpace = parseInt(options.coordinateSpaceInitial.coordinate.xMin, 10);
    // const xMaxInitialSpace = parseInt(options.coordinateSpaceInitial.coordinate.xMax, 10);
    // const yMinInitialSpace = parseInt(options.coordinateSpaceInitial.coordinate.yMin, 10);
    // const yMaxInitialSpace = parseInt(options.coordinateSpaceInitial.coordinate.yMax, 10);
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
        //isEnabled={true}
        buttonAddLinkIsActive={this.state.buttonAddLinkIsActive}
        buttonAddIncurvedLinkIsActive={this.state.buttonAddIncurvedLinkIsActive}
        widthInitialSpaceDefault={line.widthInitialSpaceDefault}
        heightInitialSpaceDefault={line.heightInitialSpaceDefault}
      />
    ));
    return <ul style={styleRegion}>{mapItems}</ul>;
  };

  getValuesAuxiliaryMetricsRegionSVG = (region: RegionClass): string[] => {
    reqMetricAuxRegion(region, this.props);
    return this.getValuesAuxiliaryMetrics(region.metrics, region.mainMetric);
  };

  private getConvertValueAuxMetrics = (valueBrut: string, region: RegionClass): string => {
    let result = '';
    const decimal: string = region.textObj.generateAuxiliaryElement.numericFormatElement;
    const roundValue: number = parseInt(decimal, 10) || 1;
    const unit: string = region.textObj.generateAuxiliaryElement.unit;
    if (decimal !== '') {
      result = parseFloat(valueBrut).toPrecision(roundValue);
    } else {
      result = valueBrut;
    }
    return result + ' ' + unit;
  };

  private displayAuxiliaryMetricsRegionSVG = (region: RegionClass): JSX.Element => {
    let html: JSX.Element[] = [];
    const valuesAuxMetrics: string[] = this.getValuesAuxiliaryMetrics(region.metrics, region.mainMetric);
    const auxMetrics: Metric[] = region.metrics;
    const addColorText: boolean = region.textObj.generateAuxiliaryElement.addColorTextElement;
    const addColorBack: boolean = region.textObj.generateAuxiliaryElement.addColorBackElement;
    const legend: string = region.textObj.generateAuxiliaryElement.legendElement;
    let colorText = '';
    let colorBack = '';

    if (addColorText) {
      colorText = region.textObj.generateAuxiliaryElement.colorTextElement;
    } else {
      colorText = 'white';
    }

    if (addColorBack) {
      colorBack = region.textObj.generateAuxiliaryElement.colorBackElement;
    } else {
      colorBack = 'black';
    }

    const styleTitle = {
      fontFamily: this.props.options.display.police,
      fontSize: '10px',
      marginTop: '5px',
      marginBottom: '0px',
      color: colorText,
      //backgroundColor: colorBack,
    } as React.CSSProperties;

    const styleTitle2 = {
      fontFamily: this.props.options.display.police,
      fontSize: '10px',
      marginTop: '5px',
      marginLeft: '5px',
      marginBottom: '0px',
      color: colorText,
      //backgroundColor: colorBack,
    } as React.CSSProperties;

    const styleContent = {
      fontFamily: this.props.options.display.police,
      fontSize: '9px',
      marginLeft: '10px',
      marginBottom: '0px',
      color: colorText,
      whiteSpace: 'nowrap',
      //backgroundColor: colorBack,
    } as React.CSSProperties;

    if (auxMetrics.length > 0) {
      html.push(
        <p key={region.id + 'contentToolTip1'} style={styleTitle}>
          Auxiliary Metric
        </p>
      );
      html.push(
        <p key={region.idSVG + 'contentToolTip2'} style={styleTitle}>
          {legend}
        </p>
      );
      let index = 1;
      for (const metric of auxMetrics) {
        const valueAuxMetric: string = this.getConvertValueAuxMetrics(valuesAuxMetrics[index - 1], region);
        html.push(
          <p key={index + 'region' + region.idSVG + 'contentToolTip3'} style={styleTitle2}>
            + Metric {index}
          </p>
        );
        html.push(
          <p key={index + 'region' + region.idSVG + 'contentToolTip4'} style={styleContent}>
            - Value : {valueAuxMetric}
          </p>
        );
        html.push(
          <p key={index + 'region' + region.idSVG + 'contentToolTip5'} style={styleContent}>
            - Key : {metric.key}
          </p>
        );
        html.push(
          <p key={index + 'region' + region.idSVG + 'contentToolTip6'} style={styleContent}>
            - KeyValue : {metric.keyValue}
          </p>
        );
        html.push(
          <p key={index + 'region' + region.idSVG + 'contentToolTip7'} style={styleContent}>
            - Type : {metric.manageValue}
          </p>
        );
        index++;
      }
    }
    return <div style={{ backgroundColor: colorBack }}>{html}</div>;
  };

  private defineMainMetric = (region: RegionClass): string => {
    let result = '';
    const legend: string = region.textObj.valueGenerateObjectText.legendElement;
    //console.log('legend-tooltip');
    //console.log(region.textObj.valueGenerateObjectText);
    //console.log(legend);
    const unit: string = region.textObj.valueGenerateObjectText.unit;
    const decimal: string = region.textObj.valueGenerateObjectText.numericFormatElement;
    //const roundMetrics: number = parseInt(decimal, 10) || 1;
    const roundValue: number = parseInt(decimal, 10) || 1;
    const mainMetric: number = getResultQuery(region.mainMetric) || 0;

    if (decimal !== '') {
      result = mainMetric.toPrecision(roundValue) + ' ' + unit;
    } else {
      result = mainMetric + ' ' + unit;
    }
    if (legend) {
      result = legend + ': ' + result;
    }
    return result;
  };

  private defineTextDecoration = (region: RegionClass): string => {
    const mainStyle: Style = region.textObj.style;
    let result = '';
    if (mainStyle.underline) {
      result = 'underline';
    } else {
      if (this.props.options.display.style.underline) {
        result = 'underline';
      } else {
        result = 'none';
      }
    }
    return result;
  };

  private defineFontStyle = (region: RegionClass): string => {
    const mainStyle: Style = region.textObj.style;
    let result = '';
    if (mainStyle.italic) {
      result = 'italic';
    } else {
      if (this.props.options.display.style.italic) {
        result = 'italic';
      } else {
        result = 'normal';
      }
    }
    return result;
  };

  private defineFontWeight = (region: RegionClass): any => {
    const mainStyle: Style = region.textObj.style;
    let result = '';
    if (mainStyle.bold) {
      result = 'bold';
    } else {
      if (this.props.options.display.style.bold) {
        result = 'bold';
      } else {
        result = 'normal';
      }
    }
    return result;
  };
  // Close Legend

  private stopDisplayLegend = () => {
    this.callInFunc();
    this.setState({
      hiddenLegend: true,
    });
  };

  private htmlTooltipRegionSVG = (): JSX.Element => {
    let regionSVG: RegionClass = initRegionCoordinateSpace(1000);
    for (const region of this.props.options.regionCoordinateSpace) {
      if (region.idSVG === this.state.dataTooltipSVG.idSVG) {
        regionSVG = region;
      }
    }

    const styleMainTooltipSVG = {
      display: 'none',
      position: 'absolute',
      top: parseInt(this.state.dataTooltipSVG.y, 10),
      left: parseInt(this.state.dataTooltipSVG.x, 10),
      zIndex: 9999,
      width: 'auto',
      border: '1px solid black',
      borderRadius: '5px',
      backgroundColor: 'black',
      padding: 5,
    } as React.CSSProperties;

    const styleLabelTooltipSVG = {
      textDecoration: this.defineTextDecoration(regionSVG),
      fontStyle: this.defineFontStyle(regionSVG),
      fontWeight: this.defineFontWeight(regionSVG),
      fontSize: this.props.options.display.size,
      fontFamily: this.props.options.display.police,
      color: regionSVG.textObj.colorText,
      backgroundColor: regionSVG.textObj.colorBack,
    } as React.CSSProperties;

    const styleMainMetricTooltipSVG = {
      textDecoration: this.defineTextDecoration(regionSVG),
      fontStyle: this.defineFontStyle(regionSVG),
      fontWeight: this.defineFontWeight(regionSVG),
      color: regionSVG.textObj.valueGenerateObjectText.addColorTextElement ? regionSVG.textObj.valueGenerateObjectText.colorTextElement : 'white',
      backgroundColor: regionSVG.textObj.valueGenerateObjectText.addColorBackElement
        ? regionSVG.textObj.valueGenerateObjectText.colorBackElement
        : 'black',
      fontSize: this.props.options.display.size,
      fontFamily: this.props.options.display.police,
    } as React.CSSProperties;

    const styleElementTooltipSVG = {
      color: 'white',
      fontSize: this.props.options.display.size,
      fontFamily: this.props.options.display.police,
    } as React.CSSProperties;

    const html: JSX.Element = (
      <div
        id="tooltipSVG"
        style={styleMainTooltipSVG}
        onMouseOver={(event: any) => {
          const tooltipSVG: any = document.getElementById('tooltipSVG');
          if (event.target.id === 'tooltipSVG' || event.target.parentElement.id === 'tooltipSVG') {
            tooltipSVG.style.display = 'initial';
          }
        }}
        onMouseOut={(event: any) => {
          const tooltipSVG: any = document.getElementById('tooltipSVG');
          if (event.target.id !== 'tooltipSVG' || event.target.parentElement.id !== 'tooltipSVG') {
            tooltipSVG.style.display = 'none';
          }
        }}
      >
        {regionSVG.textObj.isTextTooltip && <p style={styleLabelTooltipSVG}>{regionSVG.label}</p>}
        {regionSVG.textObj.generateObjectText && regionSVG.textObj.valueGenerateObjectText.displayObjectInTooltip && (
          <p style={styleMainMetricTooltipSVG}>{this.defineMainMetric(regionSVG)}</p>
        )}
        {regionSVG.textObj.generateAuxiliaryElement.displayObjectInTooltip && this.displayAuxiliaryMetricsRegionSVG(regionSVG)}
        <a style={styleElementTooltipSVG} href={regionSVG.linkURL.hoveringTooltipLink}>
          {regionSVG.linkURL.hoveringTooltipText}
        </a>
      </div>
    );
    return html;
  };

  /*************************************** create link regionbyid**************************************** */

  /*************************************test create tooltip **********************************************************/
  //https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo01-background.svg
  /** render */
  render() {
    let styleBackground;
    if (this.props.options.baseMap.modeSVG) {
      styleBackground = {
        height: this.props.options.baseMap.height + 'px',
        width: this.props.options.baseMap.width + 'px',
      } as React.CSSProperties;
    } else {
      if (this.props.options.baseMap.image.split(',')[0] === 'base64') {
        styleBackground = {
          position: 'absolute',
          textAlign: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: 'url(data:image/jpeg;' + this.props.options.baseMap.image + ')',
          backgroundSize: this.props.options.baseMap.width + 'px' + ' ' + this.props.options.baseMap.height + 'px',
          height: this.props.options.baseMap.height + 'px',
          width: this.props.options.baseMap.width + 'px',
          opacity: 0.8,
          zIndex: 4,
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
      opacity: 0,
      zIndex: 2,
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
      <CustomScrollbar autoHide={false} hideHorizontalTrack={false} autoHeightMax="100%">
        <div
          id="zoom"
          style={{
            display: 'inline-flex',
            marginTop: '-7px',
            marginLeft: '86%',
          }}
        ></div>
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
                  <AddCoordinate
                    options={this.props.options}
                    onOptionsChange={this.props.onOptionsChange}
                    data={this.props.data}
                    isRegion={true}
                    isPoint={false}
                    isLink={false}
                  />
                </Modal>
              </div>
            )}
            {!this.state.hiddenLegend && (
              <LegendComponant
                options={this.props.options}
                onOptionsChange={this.props.onOptionsChange}
                data={this.props.data}
                // legend={this.props.options.legend}
                {...this.props.options.legend}
                callBack={this.handleClick}
                callBackClose={this.stopDisplayLegend}
              />
            )}
            <div onClick={this.callMethod}></div>
            <div onClick={this.getCoordinates} id="coordinateSpaces" style={styleBackground}>
              {this.defineLimit()}
              <div>
                <div className="tooltip" />
                {/* {this.fillCoordinate()} */}
                <div id="mainPanel" style={{ position: 'absolute', zIndex: 1 }}>
                  <div
                    style={styleSVG}
                    // onMouseOver={this.SVG_PathImage}
                    dangerouslySetInnerHTML={{ __html: this.state.svg }}
                  />
                  <div
                    id="Intent"
                    style={styleSVG_2}
                    onMouseOver={this.SVG_PathImage}
                    // && this.CreateLinkArea
                    // && this.displayTooltipSVG
                    // onMouseOver={event => {
                    //   this.displayTooltipSVG(event);
                    // }}
                    onMouseOut={(event) => {
                      this.hideTooltipSVG(event);
                    }}
                    dangerouslySetInnerHTML={{ __html: this.props.options.baseMap.layerImage }}
                  />
                  {/* <div onClick={this.CreateLinkArea}></div> */}
                  {this.htmlTooltipRegionSVG()}

                  {/* Ordre d'affichage du plus éloigné au plus proche : background - liens - régions - points*/}
                  {this.displayOrientedLink()}
                  {this.fillCoordinate()}
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
