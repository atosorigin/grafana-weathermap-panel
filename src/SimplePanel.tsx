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

//import { coordinateIsInInitialSpace } from 'Functions/coodinateIsInInitialSpace';
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
          //isEnabled={!this.state.buttonManage[1]}
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
    const widthPanel: number = parseInt(this.props.options.baseMap.width, 10);
    const heightPanel: number = parseInt(this.props.options.baseMap.height, 10);
    const initialSpace: Coord4D = this.props.options.coordinateSpaceInitial.coordinate;
    const xMin: number = parseInt(initialSpace.xMin, 10);
    const xMax: number = parseInt(initialSpace.xMax, 10);
    const yMin: number = parseInt(initialSpace.yMin, 10);
    const yMax: number = parseInt(initialSpace.yMax, 10);
    const defaultReferentiel: boolean = this.props.options.coordinateSpaceInitial.defaultReferentiel;
    let positionX = 0;
    let positionY = 0;

    let xMinPx = 0;
    let xMaxPx = 0;
    if (!defaultReferentiel) {
      xMinPx = (xMin + 100) * (widthPanel / 200);
      xMaxPx = (xMax + 100) * (widthPanel / 200);
      const widthInitialSpace: number = xMaxPx - xMinPx;
      if (xMin < 0 && xMax < 0) {
        positionX = Math.round((event.nativeEvent.offsetX - xMinPx - widthInitialSpace / 2) * (100 / widthInitialSpace)) * 2 * -1;
      } else {
        positionX = Math.round((event.nativeEvent.offsetX - xMinPx - widthInitialSpace / 2) * (100 / widthInitialSpace)) * 2;
      }
    } else {
      xMinPx = xMin * (widthPanel / 100);
      xMaxPx = xMax * (widthPanel / 100);
      const widthInitialSpace: number = xMaxPx - xMinPx;
      positionX = Math.round(((event.nativeEvent.offsetX - xMinPx) / widthInitialSpace) * 100);
    }

    let yMinPx = 0;
    let yMaxPx = 0;
    if (!defaultReferentiel) {
      if (yMin < 0 && yMax < 0) {
        yMinPx = (yMax + 100) * (heightPanel / 200);
        yMaxPx = (yMin + 100) * (heightPanel / 200);
      } else {
        yMinPx = (yMin + 100) * (heightPanel / 200);
        yMaxPx = (yMax + 100) * (heightPanel / 200);
      }
      const heightInitialSpace: number = yMaxPx - yMinPx;
      positionY = Math.round((event.nativeEvent.offsetY - heightInitialSpace / 2 - (heightPanel - yMaxPx)) * (100 / heightInitialSpace)) * 2 * -1;
    } else {
      yMinPx = yMin * (heightPanel / 100);
      yMaxPx = yMax * (heightPanel / 100);
      const heightInitialSpace: number = yMaxPx - yMinPx;
      positionY = 100 - Math.round(((event.nativeEvent.offsetY - (heightPanel - yMaxPx)) / heightInitialSpace) * 100);
    }

    if (
      event.nativeEvent.target.id === 'initialSpace' ||
      event.nativeEvent.target.id === 'mainPanel' ||
      event.nativeEvent.target.id === 'Intent' ||
      event.nativeEvent.target.id === 'oct' + this.props.options.baseMap.idSVG ||
      event.nativeEvent.target.id === this.props.options.baseMap.idSVG
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
      'white',
      'black',
      { bold: false, italic: false, underline: false },
      true,
      {
        legendElement: '',
        numericFormatElement: '5',
        unit: '',
        displayObjectInTooltip: false,
        // 'displayObjectPermanently': false,
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
        // 'displayObjectPermanently': false,
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

    this.props.onOptionsChange({
      ...this.props.options,
      indexPoint: id,
      arrayPoints: newArrayPoint,
    });

    this.props.options.newPoint = true;

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
      //console.log(line);
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
          //style={this.props.options.display.style}
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
    this.props.options.arrayPoints.forEach(point => {
      let newAssociateLinkIn: any[] = [];
      const namePoint: string = point.label || point.name;
      this.props.options.arrayOrientedLinks.forEach(link => {
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
    this.props.options.arrayPoints.forEach(point => {
      let newAssociateLinkIn: any[] = [];
      const namePoint: string = point.label || point.name;
      this.props.options.arrayOrientedLinks.forEach(link => {
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
    const heightPanel: number = parseInt(this.props.options.baseMap.height, 10);
    const widthPanel: number = parseInt(this.props.options.baseMap.width, 10);
    const initialSpace: Coord4D = this.props.options.coordinateSpaceInitial.coordinate;
    const xMin: number = parseInt(initialSpace.xMin, 10);
    const xMax: number = parseInt(initialSpace.xMax, 10);
    const yMin: number = parseInt(initialSpace.yMin, 10);
    const yMax: number = parseInt(initialSpace.yMax, 10);
    const defaultReferentiel: boolean = this.props.options.coordinateSpaceInitial.defaultReferentiel;
    let positionX = 0;
    let positionY = 0;

    let xMinPx = 0;
    let xMaxPx = 0;
    if (!defaultReferentiel) {
      xMinPx = (xMin + 100) * (widthPanel / 200);
      xMaxPx = (xMax + 100) * (widthPanel / 200);
      // if (xMin < 0 && xMax < 0) {
      //   xMinPx = (xMax + 100) * (widthPanel / 200);
      //   xMaxPx = (xMin + 100) * (widthPanel / 200);
      // }
    } else {
      xMinPx = xMin * (widthPanel / 100);
      xMaxPx = xMax * (widthPanel / 100);
    }

    let yMinPx = 0;
    let yMaxPx = 0;
    if (!defaultReferentiel) {
      if (yMin < 0 && yMax < 0) {
        yMinPx = (yMax + 100) * (heightPanel / 200);
        yMaxPx = (yMin + 100) * (heightPanel / 200);
      } else {
        yMinPx = (yMin + 100) * (heightPanel / 200);
        yMaxPx = (yMax + 100) * (heightPanel / 200);
      }
    } else {
      yMinPx = yMin * (heightPanel / 100);
      yMaxPx = yMax * (heightPanel / 100);
    }

    const widthInitialSpace: number = xMaxPx - xMinPx;
    const heightInitialSpace: number = yMaxPx - yMinPx;

    if (
      event.nativeEvent.target.id === 'initialSpace' ||
      event.nativeEvent.target.id === 'Intent' ||
      event.nativeEvent.target.id === 'mainPanel' ||
      event.nativeEvent.target.id === 'oct' + this.props.options.baseMap.idSVG ||
      event.nativeEvent.target.id === this.props.options.baseMap.idSVG
    ) {
      if (!defaultReferentiel) {
        positionX = Math.round((event.nativeEvent.offsetX - xMinPx - widthInitialSpace / 2) * (100 / widthInitialSpace)) * 2;
      } else {
        positionX = Math.round(((event.nativeEvent.offsetX - xMinPx) / widthInitialSpace) * 100);
      }

      if (!defaultReferentiel) {
        if (yMax < 0) {
          positionY = Math.round((event.nativeEvent.offsetY - heightInitialSpace / 2 - (heightPanel - yMaxPx)) * (100 / heightInitialSpace)) * 2 * -1;
        } else {
          positionY = Math.round((event.nativeEvent.offsetY - (heightPanel - yMaxPx) - heightInitialSpace / 2) * (100 / heightInitialSpace)) * 2;
        }
      } else {
        positionY = 100 - Math.round(((event.nativeEvent.offsetY - (heightPanel - yMaxPx)) / heightInitialSpace) * 100);
        console.log(positionY);
      }

      //positionY = Math.round((event.nativeEvent.offsetY - heightInitialSpace / 2) * (100 / heightInitialSpace)) * 2;
      // if (yMax > 0 && yMax < 100) {
      //   positionY = Math.round((event.nativeEvent.offsetY - (heightPanel - yMaxPx) - heightInitialSpace / 2) * (100 / heightInitialSpace)) * 2;
      // }

      if (coordinates[0].id === 0) {
        objectIn.x = positionX;
        objectIn.y = yMin < 0 ? positionY * -1 : positionY;
        coordinates[0].id++;
      } else if (coordinates[0].id === 1) {
        objectOut.x = positionX;
        objectOut.y = yMin < 0 ? positionY * -1 : positionY;
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
      //let indexRegion = 0;

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
            //console.log(region.idSVG);
            const coordinates = this.props.options.coordinatesToDrawLinkWithClick;
            positionX = 0;
            positionY = 0;
            // console.log(positionX);
            // console.log(positionY);
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
        //indexRegion++;
      });
    }
  };

  getCoordinatesToDrawIncurvedOrientedLinkWithClick = (event: any) => {
    const coordinates = this.props.options.coordinatesToDrawLinkWithClick;
    const objectIn: any = coordinates[1];
    const objectOut: any = coordinates[2];
    const pointC: any = coordinates[3];
    const heightPanel: number = parseInt(this.props.options.baseMap.height, 10);
    const widthPanel: number = parseInt(this.props.options.baseMap.width, 10);
    const initialSpace: Coord4D = this.props.options.coordinateSpaceInitial.coordinate;
    const xMin: number = parseInt(initialSpace.xMin, 10);
    const xMax: number = parseInt(initialSpace.xMax, 10);
    const yMin: number = parseInt(initialSpace.yMin, 10);
    const yMax: number = parseInt(initialSpace.yMax, 10);
    const defaultReferentiel: boolean = this.props.options.coordinateSpaceInitial.defaultReferentiel;
    let positionX = 0;
    let positionY = 0;

    let xMinPx = 0;
    let xMaxPx = 0;
    if (!defaultReferentiel) {
      xMinPx = (xMin + 100) * (widthPanel / 200);
      xMaxPx = (xMax + 100) * (widthPanel / 200);
      // if (xMin < 0 && xMax < 0) {
      //   xMinPx = (xMax + 100) * (widthPanel / 200);
      //   xMaxPx = (xMin + 100) * (widthPanel / 200);
      // }
    } else {
      xMinPx = xMin * (widthPanel / 100);
      xMaxPx = xMax * (widthPanel / 100);
    }

    let yMinPx = 0;
    let yMaxPx = 0;
    if (!defaultReferentiel) {
      if (yMin < 0 && yMax < 0) {
        yMinPx = (yMax + 100) * (heightPanel / 200);
        yMaxPx = (yMin + 100) * (heightPanel / 200);
      } else {
        yMinPx = (yMin + 100) * (heightPanel / 200);
        yMaxPx = (yMax + 100) * (heightPanel / 200);
      }
    } else {
      yMinPx = yMin * (heightPanel / 100);
      yMaxPx = yMax * (heightPanel / 100);
    }

    const widthInitialSpace: number = xMaxPx - xMinPx;
    const heightInitialSpace: number = yMaxPx - yMinPx;

    if (
      event.nativeEvent.target.id === 'mainPanel' ||
      event.nativeEvent.target.id === 'initialSpace' ||
      event.nativeEvent.target.id === 'Intent' ||
      event.nativeEvent.target.id === 'oct' + this.props.options.baseMap.idSVG ||
      event.nativeEvent.target.id === this.props.options.baseMap.idSVG
    ) {
      if (!defaultReferentiel) {
        positionX = Math.round((event.nativeEvent.offsetX - xMinPx - widthInitialSpace / 2) * (100 / widthInitialSpace)) * 2;
      } else {
        positionX = Math.round(((event.nativeEvent.offsetX - xMinPx) / widthInitialSpace) * 100);
      }

      if (!defaultReferentiel) {
        if (yMax < 0) {
          positionY = Math.round((event.nativeEvent.offsetY - heightInitialSpace / 2 - (heightPanel - yMaxPx)) * (100 / heightInitialSpace)) * 2 * -1;
        } else {
          positionY = Math.round((event.nativeEvent.offsetY - (heightPanel - yMaxPx) - heightInitialSpace / 2) * (100 / heightInitialSpace)) * 2;
        }
      } else {
        positionY = 100 - Math.round(((event.nativeEvent.offsetY - (heightPanel - yMaxPx)) / heightInitialSpace) * 100);
      }

      // if (yMax > 0 && yMax < 100) {
      //   positionY = Math.round((event.nativeEvent.offsetY - (heightPanel - yMaxPx) - heightInitialSpace / 2) * (100 / heightInitialSpace)) * 2;
      // }

      if (coordinates[0].id === 0) {
        objectIn.x = positionX;
        objectIn.y = yMin < 0 ? positionY * -1 : positionY;
        coordinates[0].id++;
      } else if (coordinates[0].id === 1) {
        objectOut.x = positionX;
        objectOut.y = yMin < 0 ? positionY * -1 : positionY;
        coordinates[0].id++;
      } else if (coordinates[0].id === 2) {
        pointC.x = positionX;
        pointC.y = yMin < 0 ? positionY * -1 : positionY;
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
            } else if (coordinates[0].id === 2) {
              pointC.x = positionX;
              pointC.y = positionY;
              coordinates[0].id = 0;
              this.createOrientedLinkToClick({ label: 'Yes', value: true });
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
      'white',
      'black',
      { bold: false, italic: false, underline: false },
      true,
      {
        legendElement: '',
        numericFormatElement: '5',
        unit: '',
        displayObjectInTooltip: false,
        // 'displayObjectPermanently': false,
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
        // 'displayObjectPermanently': false,
        addColorTextElement: true,
        colorTextElement: 'white',
        addColorBackElement: true,
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
      { label: 'Medium', value: 'Medium' },
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
      []
    );
    const newArrayOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
    newArrayOrientedLink.push(newOrientedLink);
    //const newValue = true;
    this.props.onOptionsChange({
      ...this.props.options,
      arrayOrientedLinks: newArrayOrientedLink,
      indexOrientedLink: id,
      zIndexOrientedLink: zIndex,
      newOrientedLink: true,
    });

    this.props.options.newOrientedLink = true;

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
      //console.log(orientedLink);
      const valueMainMetricA: string = this.getValuesMainMetricOrientedLink(orientedLink).toString();
      const valueMainMetricB: string = this.getValuesMainMetricOrientedLinkB(orientedLink).toString();
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
    //this.getValuesMainMetric(point.mainMetric, undefined, point);
    let result = 0;
    result = getResultQuery(point.mainMetric) || NaN;
    return result;
  }

  getValuesMainMetricOrientedLink(orientedLink: OrientedLinkClass): number {
    reqMetricOrientedLink(orientedLink, this.props);
    //this.getValuesMainMetric(orientedLink.mainMetric, orientedLink, undefined, false);
    let result = 0;
    result = getResultQuery(orientedLink.mainMetric) || NaN;
    return result;
  }

  getValuesMainMetricOrientedLinkB(orientedLink: OrientedLinkClass) {
    reqMetricOrientedLink(orientedLink, this.props);
    //this.getValuesMainMetric(orientedLink.mainMetricB, orientedLink, undefined, true);
    let result = 0;
    result = getResultQuery(orientedLink.mainMetricB) || NaN;
    return result;
  }

  // /**
  //  * to do
  //  */
  // getValuesMainMetric(mainMetric: Metric, orientedLink?: OrientedLinkClass, point?: PointClass, isBidirectionnal?: boolean) {
  //   let valueMainMetric = 0;
  //   let totalValuesCount = 0;
  //   const key: string = mainMetric.key;
  //   const keyValue: string = mainMetric.keyValue;
  //   if (mainMetric.returnQuery && mainMetric.returnQuery.length > 0) {
  //     mainMetric.returnQuery.forEach((line: DataFrame) => {
  //       if (line.fields[0].labels) {
  //         if (key !== '' && keyValue !== '') {
  //           if (line.fields[0].labels[key] === keyValue) {
  //             const countValues: number = line.fields[0].values.length;
  //             for (let i = 0; i < countValues; i++) {
  //               if (line.fields[0].values.get(i)) {
  //                 totalValuesCount++;
  //                 valueMainMetric += line.fields[0].values.get(i);
  //               }
  //             }
  //           } else {

  //           }
  //         } else {
  //           const countValues: number = line.fields[0].values.length;
  //           for (let i = 0; i < countValues; i++) {
  //             if (line.fields[0].values.get(i)) {
  //               totalValuesCount++;
  //               valueMainMetric += line.fields[0].values.get(i);
  //             }
  //           }
  //         }
  //       }
  //     });
  //     if (orientedLink) {
  //       if (!isBidirectionnal) {
  //         if (mainMetric.manageValue === 'avg') {
  //           orientedLink.valueMainMetricA = (valueMainMetric / totalValuesCount).toString();
  //         } else if (mainMetric.manageValue === 'sum') {
  //           orientedLink.valueMainMetricA = valueMainMetric.toString();
  //         } else if (mainMetric.manageValue === 'err') {
  //           if (totalValuesCount > 1) {
  //             orientedLink.valueMainMetricA = 'error';
  //           } else {
  //             orientedLink.valueMainMetricA = valueMainMetric.toString();
  //           }
  //         }
  //       } else {
  //         if (mainMetric.manageValue === 'avg') {
  //           orientedLink.valueMainMetricB = (valueMainMetric / totalValuesCount).toString();
  //         } else if (mainMetric.manageValue === 'sum') {
  //           orientedLink.valueMainMetricB = valueMainMetric.toString();
  //         } else if (mainMetric.manageValue === 'err') {
  //           if (totalValuesCount > 1) {
  //             orientedLink.valueMainMetricB = 'error';
  //           } else {
  //             orientedLink.valueMainMetricB = valueMainMetric.toString();
  //           }
  //         }
  //       }
  //     } else if (point) {
  //       if (mainMetric.manageValue === 'avg') {
  //         point.valueMetric = (valueMainMetric / totalValuesCount).toString();
  //       } else if (mainMetric.manageValue === 'sum') {
  //         point.valueMetric = valueMainMetric.toString();
  //       } else if (mainMetric.manageValue === 'err') {
  //         if (totalValuesCount > 1) {
  //           point.valueMetric = 'error';
  //         } else {
  //           point.valueMetric = valueMainMetric.toString();
  //         }
  //       }
  //     }
  //   }
  // }

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
          id="legnd"
          style={{ marginLeft: '5%' }}
          variant={this.state.buttonManage[2] ? 'danger' : 'primary'}
          className="button"
          onClick={this.callInFunc} // Method Close legend
        >
          Position Legend
        </Button>

        <Button style={{ marginLeft: '4%' }} id="more" onClick={this.ZoomIn} variant={'primary'}>
          <i className="fa fa-plus" aria-hidden="true"></i>
        </Button>
        <Button id="less" onClick={this.ZoomOut} variant={'primary'}>
          <i className="fa fa-minus" aria-hidden="true"></i>
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
        // const newStr: string = this.editIdString(this.state.svg);
        // const background: Background = this.props.options.baseMap;
        // background.layerImage = newStr;
        // this.props.onOptionsChange({ ...this.props.options, baseMap: background });
      } else {
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
    this.updateButtonCss();
  };

  componentDidUpdate(prevProps: Props) {
    if (this.state.currentImage !== this.props.options.baseMap.image) {
      this.componentDidMount();
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
  ZoomIn = () => {
    const intialfirst = document.getElementById('more');
    intialfirst?.addEventListener('click', () => {
      let elmnt = document.getElementById('mainPanel');
      if (elmnt) {
        elmnt.style.transform += 'scale(1.01,1.01)';
      }
    });
  };

  // Zoom Negative

  ZoomOut = () => {
    const intialsecond = document.getElementById('less');
    intialsecond?.addEventListener('click', () => {
      let elmnt = document.getElementById('mainPanel');
      if (elmnt) {
        elmnt.style.transform += 'scale(0.99,0.99)';
      }
      //console.log('-');
    });
  };
  // Zoom Initial
  // ZoomInitial = () => {

  //   const intialsecond = document.getElementById('init');
  //   intialsecond?.addEventListener('click', () => {
  //     const elmnt = document.getElementById('mainPanel');

  //     if(elmnt ){
  //       elmnt.style.transform = 'scale(1,1)';
  //     }

  //   });
  // };

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
        if (event.target.localName === 'rect') {
          xSVG = parseInt(event.target.attributes['x'].nodeValue, 10);
          ySVG = parseInt(event.target.attributes['y'].nodeValue, 10);
          widthSVG = parseInt(event.target.attributes['width'].nodeValue, 10);
          heightSVG = parseInt(event.target.attributes['height'].nodeValue, 10);
          positionX = (xSVG + widthSVG).toString();
          positionY = (ySVG - heightSVG / 2).toString();
        } else if (event.target.localName === 'ellipse') {
          xSVG = parseInt(event.target.attributes['cx'].nodeValue, 10);
          ySVG = parseInt(event.target.attributes['cy'].nodeValue, 10);
          widthSVG = parseInt(event.target.attributes['rx'].nodeValue, 10) * 2;
          heightSVG = parseInt(event.target.attributes['ry'].nodeValue, 10) * 2;
          positionX = xSVG.toString();
          positionY = ySVG.toString();
        } else if (event.target.localName === 'path') {
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
      />
    ));
    return <ul style={styleRegion}>{mapItems}</ul>;
  };

  /*************************************** create link regionbyid**************************************** */

  // CreateLinkArea = () => {
  //   // All Id in SVG Test
  //   const allidSvg = document.getElementById('octsvg12');
  //   allidSvg?.addEventListener('click', () => {
  //     const elms = allidSvg.querySelectorAll('[id]');
  //     console.log(elms);
  //   });

  // Test Svg Christophe search ID corrrigé

  // const allidSvg3 = document.getElementById('octsvg12');
  // allidSvg3?.addEventListener('click', () => {
  //   const elms = allidSvg3.querySelectorAll('[id]');
  //   console.log(elms);
  // });
  // });
  // All Region in SVG
  // const allidSvg2 = document.getElementById('octsvg12');
  // allidSvg2?.addEventListener('click', () => {
  // this.props.options.regionCoordinateSpace.forEach(region => {
  //   console.log(region.idSVG);
  //   console.log(region.linkURL.followLink);
  // const dam = allidSvg2.querySelectorAll('[id]');
  // console.log(dam);
  // console.log('loua');
  // });
  // });

  // const elms = document.querySelectorAll('[id]');
  // for (var i = 0; i < elms.length; i++) {
  //   let lpo = document.getElementById('octsvg213');
  //   lpo?.addEventListener('click', () => {
  //     console.log('rer');
  //   });
  //   let lpo1 = document.getElementById('octsvg213');
  //   lpo1?.addEventListener('click', () => {
  //     console.log('rer1');
  //   });
  //   let lpo2 = document.getElementById('octsvg213');
  //   lpo2?.addEventListener('click', () => {
  //     console.log('rer2');
  //   });
  // }
  // };

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
        // position: 'absolute',
        // textAlign: 'center',
        // backgroundRepeat: 'no-repeat',
        height: this.props.options.baseMap.height + 'px',
        width: this.props.options.baseMap.width + 'px',
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
      <CustomScrollbar autoHide={false} hideHorizontalTrack>
        <div
          id="zoom"
          style={{
            display: 'inline-flex',
            marginTop: '-7px',
            marginLeft: '86%',
          }}
        >
          {/* <Button id="init" onClick={this.ZoomInitial} variant={'secondary'}>
            =
          </Button> */}
        </div>
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
            <div id="coordinateSpaces" style={styleBackground}>
              {this.defineLimit()}
              <div>
                <div className="tooltip" />
                {/* {this.fillCoordinate()} */}
                <div onClick={this.getCoordinates} id="mainPanel" style={{ position: 'absolute', zIndex: 1 }}>
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
                    onMouseOut={event => {
                      this.hideTooltipSVG(event);
                    }}
                    dangerouslySetInnerHTML={{ __html: this.props.options.baseMap.layerImage }}
                  />
                  {/* <div onClick={this.CreateLinkArea}></div> */}
                  {this.htmlTooltipRegionSVG()}
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
