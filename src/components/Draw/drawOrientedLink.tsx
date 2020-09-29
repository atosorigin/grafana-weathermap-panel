import React, { CSSProperties } from 'react';
import { SelectableValue, PanelEditorProps } from '@grafana/data';
import { Coord4D, RegionClass } from 'Models/RegionClass';
import { Tooltip } from '@grafana/ui';
import { SimpleOptions, Metric, Metadata } from 'types';
import { TextObject } from 'Models/TextObjectClass';
import { LowerLimitClass } from 'Models/LowerLimitClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import { LinkURLClass } from 'Models/LinkURLClass';
import { Style } from 'components/Parametrage/styleComponent';
import { PointClass } from 'Models/PointClass';

interface Props extends PanelEditorProps<SimpleOptions> {
  id: string;
  pointAPositionX: string;
  pointAPositionY: string;
  pointBPositionX: string;
  pointBPositionY: string;
  colorA: string;
  colorB: string;
  orientationLink: string;
  label: string;
  associatePointIn: string;
  associatePointOut: string;
  associateRegionIn: string;
  associateRegionOut: string;
  widthImage: number;
  heightImage: number;
  name: string;
  refMainMetricA: string;
  refMainMetricB: string;
  valueMainMetricA: string;
  valueMainMetricB: string;
  textObject: TextObject;
  seuil: LowerLimitClass[];
  labelAPositionX: string;
  labelAPositionY: string;
  labelBPositionX: string;
  labelBPositionY: string;
  tooltipPositionA: SelectableValue<any>;
  tooltipPositionB: SelectableValue<any>;
  zIndex: number;
  pointCPositionX: string;
  pointCPositionY: string;
  isIncurved: SelectableValue<boolean>;
  auxiliaryMetrics: Metric[];
  auxiliaryMetricsB: Metric[];
  valuesAuxiliaryMetrics: string[];
  valuesAuxiliaryMetricsB: string[];
  police: string;
  sizePolice: string;
  linkUrl: LinkURLClass;
  size: string;
  widthInitialSpaceDefault: string;
  heightInitialSpaceDefault: string;
  positionXADefault: string;
  positionYADefault: string;
  positionXBDefault: string;
  positionYBDefault: string;
  positionXCDefault: string;
  positionYCDefault: string;
  metaData: Metadata[];
  colorMode: boolean;
  traceBorder: boolean;
  traceBack: boolean;
}

interface State {}

export default class DrawOrientedLink extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  /**
   * détermine la valeur de X pour les points A, B et C du lien en fonction des limites
   * de l'initialSpace
   * @param coordinateX
   *
   */
  private defineLimitX(coordinateX: number) {
    let result: number = coordinateX;
    const xMin: number = parseInt(this.props.options.coordinateSpaceInitial.coordinate.xMin, 10);
    const xMax: number = parseInt(this.props.options.coordinateSpaceInitial.coordinate.xMax, 10);
    if (coordinateX < xMin) {
      result = xMin;
    } else if (coordinateX > xMax) {
      result = xMax;
    }
    return result;
  }

  /**
   * détermine la valeur de Y pour les points A, B et C du lien en fonction des limites
   * de l'initialSpace
   * @param coordinateY
   *
   */
  private defineLimitY(coordinateY: number) {
    let result: number = coordinateY;
    const yMin: number = parseInt(this.props.options.coordinateSpaceInitial.coordinate.yMin, 10);
    const yMax: number = parseInt(this.props.options.coordinateSpaceInitial.coordinate.yMax, 10);
    if (coordinateY < yMin) {
      result = yMin;
    } else if (coordinateY > yMax) {
      result = yMax;
    }
    return result;
  }

  // définit la bonne position X des points A, B et C composant le lien
  // en fonction des valeurs de l'initialSpace (xMin, xMax, yMin, yMax)
  private synchroLinkX(positionX: number, name?: string): number {
    const initialSpace: Coord4D = this.props.options.coordinateSpaceInitial.coordinate;
    const xMin: number = parseInt(initialSpace.xMin, 10);
    const xMax: number = parseInt(initialSpace.xMax, 10);
    const widthInitialSpace: number = xMax - xMin;
    const ratioX = positionX / this.props.widthImage;

    // define value to display in input positionShapeX
    const x = Math.round(xMin + widthInitialSpace * ratioX);

    // saving data new positionShapeX
    let newArrayLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
    newArrayLink.forEach((link) => {
      if (link.name === this.props.name) {
        if (name === 'xA') {
          link.pointAPositionX = x.toString();
        } else if (name === 'xB') {
          link.pointBPositionX = x.toString();
        } else if (name === 'xC') {
          link.pointCPositionX = x.toString();
        }
      }
    });
    this.props.options.arrayOrientedLinks = newArrayLink;

    // define limit x in fonction of values xMin and xMax of initialSpace
    const xLimited = this.defineLimitX(x);

    // define display x
    const result = ((xLimited - xMin) / widthInitialSpace) * this.props.widthImage;

    // return result and center display of point in fonction of sizePoint and borderPoint
    return result;
  }

  // définit la bonne position Y des points A, B et C composant le lien
  // en fonction des valeurs de l'initialSpace (xMin, xMax, yMin, yMax)
  private synchroLinkY(positionY: number, name?: string): number {
    const initialSpace: Coord4D = this.props.options.coordinateSpaceInitial.coordinate;
    const yMin: number = parseInt(initialSpace.yMin, 10);
    const yMax: number = parseInt(initialSpace.yMax, 10);
    const heightInitialSpace: number = yMax - yMin;
    const ratioY = positionY / this.props.heightImage;

    // define value to display in input positionShapeY
    let y = Math.round(yMin + heightInitialSpace * ratioY);
    // saving data new positionShapeY
    let newArrayLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
    newArrayLink.forEach((link) => {
      if (link.name === this.props.name) {
        if (name === 'yA') {
          link.pointAPositionY = y.toString();
        } else if (name === 'yB') {
          link.pointBPositionY = y.toString();
        } else if (name === 'yC') {
          link.pointCPositionY = y.toString();
        }
      }
    });
    this.props.options.arrayOrientedLinks = newArrayLink;

    // define limit y in fonction of values yMin and yMax of initialSpace
    const yLimited = this.defineLimitY(y);

    // define display y
    const result = ((yMin + heightInitialSpace - yLimited) / heightInitialSpace) * this.props.heightImage;

    return result;
  }

  private labelSynchroX = (whatLabel: string): number => {
    let result = 0;
    let labelMainMetric: HTMLElement | null = null;
    if (whatLabel === 'A') {
      labelMainMetric = document.getElementById('labelMainMetric' + this.props.id);
    } else {
      labelMainMetric = document.getElementById('labelMainMetricB' + this.props.id);
    }
    if (labelMainMetric?.offsetWidth) {
      result = labelMainMetric?.offsetWidth / 2;
    }
    return result;
  };

  private labelSynchroY = (whatLabel: string): number => {
    let result = 0;
    let labelMainMetric: HTMLElement | null = null;
    if (whatLabel === 'A') {
      labelMainMetric = document.getElementById('labelMainMetric' + this.props.id);
    } else {
      labelMainMetric = document.getElementById('labelMainMetricB' + this.props.id);
    }
    if (labelMainMetric?.offsetHeight) {
      result = labelMainMetric?.offsetHeight / 2;
    }
    return result;
  };

  /**
   * to do
   */
  private defineParallelOrientedLinks = (): number[] => {
    const arrayOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
    const listParallelOrientedLinks: number[] = [];
    listParallelOrientedLinks.push(parseInt(this.props.id, 10));
    arrayOrientedLink.forEach((orientedLink) => {
      if (this.props.name !== orientedLink.name) {
        if (this.props.associateRegionIn !== '' && this.props.associateRegionOut !== '') {
          if (this.props.associateRegionIn === orientedLink.regionIn || this.props.associateRegionIn === orientedLink.regionOut) {
            if (this.props.associateRegionOut === orientedLink.regionIn || this.props.associateRegionOut === orientedLink.regionOut) {
              listParallelOrientedLinks.push(orientedLink.id);
            }
          }
        } else if (this.props.associatePointIn !== '' && this.props.associatePointOut !== '') {
          if (this.props.associatePointIn === orientedLink.pointIn || this.props.associatePointIn === orientedLink.pointOut) {
            if (this.props.associatePointOut === orientedLink.pointIn || this.props.associatePointOut === orientedLink.pointOut) {
              listParallelOrientedLinks.push(orientedLink.id);
            }
          }
        } else if (this.props.associateRegionIn !== '' && this.props.associatePointOut !== '') {
          if (this.props.associateRegionIn === orientedLink.regionIn || this.props.associateRegionIn === orientedLink.regionOut) {
            if (this.props.associatePointOut === orientedLink.pointOut || this.props.associatePointOut === orientedLink.pointIn) {
              listParallelOrientedLinks.push(orientedLink.id);
            }
          }
        } else if (this.props.associatePointIn !== '' && this.props.associateRegionOut !== '') {
          if (this.props.associatePointIn === orientedLink.pointIn || this.props.associatePointIn === orientedLink.pointOut) {
            if (this.props.associateRegionOut === orientedLink.regionOut || this.props.associateRegionOut === orientedLink.regionIn) {
              listParallelOrientedLinks.push(orientedLink.id);
            }
          }
        }
      }
    });
    const listParallelOrientedLinkSorted: number[] = listParallelOrientedLinks.sort((a, b) => a - b);
    return listParallelOrientedLinkSorted;
  };

  /**
   * to do
   * @param region
   */
  private defineCoor4DRegion = (region: RegionClass): Coord4D => {
    // let coor4D: Coord4D = { xMin: '0', xMax: '0', yMin: '0', yMax: '0' };
    let coor4D: Coord4D;
    let xMin = 0;
    let xMax = 0;
    let yMin = 0;
    let yMax = 0;
    if (region.idSVG !== '') {
      // region SVG
      const heightPanel: number = parseInt(this.props.options.baseMap.height, 10);
      const widthPanel: number = parseInt(this.props.options.baseMap.width, 10);
      const initialSpace: Coord4D = this.props.options.coordinateSpaceInitial.coordinate;
      const xMinInitialSpace: number = parseInt(initialSpace.xMin, 10);
      const xMinPx: number = (xMinInitialSpace + 100) * (widthPanel / 200);
      const xMaxInitialSpace: number = parseInt(initialSpace.xMax, 10);
      const xMaxPx: number = (xMaxInitialSpace + 100) * (widthPanel / 200);
      const widthInitialSpace: number = xMaxPx - xMinPx;
      const yMinInitialSpace: number = parseInt(initialSpace.yMin, 10);
      const yMinPx: number = (yMinInitialSpace + 100) * (heightPanel / 200);
      const yMaxInitialSpace: number = parseInt(initialSpace.yMax, 10);
      const yMaxPx: number = (yMaxInitialSpace + 100) * (heightPanel / 200);
      const heightInitialSpace: number = yMaxPx - yMinPx;
      let regionSVGHtml: any;
      if (this.props.options.baseMap.isUploaded) {
        regionSVGHtml = document.getElementById(region.idSVG);
      } else {
        regionSVGHtml = document.getElementById('oct' + region.idSVG);
      }
      let width = 0;
      let height = 0;
      let xMinSVG = 0;
      let xMaxSVG = 0;
      let yMaxSVG = 0;
      let yMinSVG = 0;
      if (regionSVGHtml) {
        if (regionSVGHtml.localName === 'rect') {
          width = parseInt(regionSVGHtml.attributes['width'].nodeValue, 10);
          height = parseInt(regionSVGHtml.attributes['height'].nodeValue, 10);
          xMinSVG = parseInt(regionSVGHtml.attributes['x'].nodeValue, 10);
          xMaxSVG = xMinSVG + width;
          yMaxSVG = parseInt(regionSVGHtml.attributes['y'].nodeValue, 10);
          yMinSVG = yMaxSVG + height;
        } else if (regionSVGHtml.localName === 'ellipse') {
          const rX: number = parseInt(regionSVGHtml.attributes['rx'].nodeValue, 10);
          const rY: number = parseInt(regionSVGHtml.attributes['ry'].nodeValue, 10);
          xMinSVG = parseInt(regionSVGHtml.attributes['cx'].nodeValue, 10) - rX;
          xMaxSVG = parseInt(regionSVGHtml.attributes['cx'].nodeValue, 10) + rX;
          yMinSVG = parseInt(regionSVGHtml.attributes['cy'].nodeValue, 10) + rY;
          yMaxSVG = parseInt(regionSVGHtml.attributes['cy'].nodeValue, 10) - rY;
        } else if (regionSVGHtml.localName === 'path') {
          const allValues: string = regionSVGHtml.attributes['d'].nodeValue;
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
          xMinSVG = xMin;
          xMaxSVG = xMax;
          yMinSVG = yMax;
          yMaxSVG = yMin;
        }
      }
      const xMinSVGCoor: number = Math.round((xMinSVG - widthInitialSpace / 2) * (100 / widthInitialSpace)) * 2;
      const xMaxSVGCoor: number = Math.round((xMaxSVG - widthInitialSpace / 2) * (100 / widthInitialSpace)) * 2;
      const yMinSVGCoor: number = Math.round((yMinSVG - heightInitialSpace / 2) * (100 / heightInitialSpace)) * 2 * -1;
      const yMaxSVGCoor: number = Math.round((yMaxSVG - heightInitialSpace / 2) * (100 / heightInitialSpace)) * 2 * -1;
      xMin = Math.round(xMinSVG);
      xMax = Math.round(xMaxSVG);
      yMin = Math.round(this.props.heightImage - yMinSVG);
      yMax = Math.round(this.props.heightImage - yMaxSVG);

      if (xMin < 0 && xMax < 0) {
        xMin = xMaxSVGCoor;
        xMax = xMinSVGCoor;
      }
      if (yMin < 0 && yMax < 0) {
        yMin = yMaxSVGCoor;
        yMax = yMinSVGCoor;
      }
    } else {
      // region coordinate
      xMin = parseInt(region.coordsDefault.xMin, 10);
      xMax = parseInt(region.coordsDefault.xMax, 10);
      yMin = parseInt(region.coordsDefault.yMin, 10);
      yMax = parseInt(region.coordsDefault.yMax, 10);
    }
    coor4D = { xMin: xMin.toString(), xMax: xMax.toString(), yMin: yMin.toString(), yMax: yMax.toString() };
    return coor4D;
  };

  private getPaddingPoint = (point: PointClass, idMultiLink: number): number => {
    let result = 0;
    const pointHtml = document.getElementById(point.name);
    if (pointHtml) {
      result = parseInt(pointHtml.style.padding.substring(-2), 10) + parseInt(this.props.size, 10) / 10;
      if (idMultiLink === 2) {
        result = result / 2;
      }
    }
    return result;
  };

  // permet de définir le bon placement X des extrémités du lien :
  // - selon si il y a un ou plusieurs liens entre deux extrémités
  // - selon si l'extrémité A est un point, une région ou le panel
  // - selon si l'extrémité B est un point, une région ou le panel
  private definePositionX = (isIn: boolean, idMultiLink: number): number => {
    let xResult = 0;
    const arrayRegions = this.props.options.regionCoordinateSpace;
    const arrayPoints = this.props.options.arrayPoints;
    let xMinIn = 0;
    let xMaxIn = 0;
    let xMinOut = 0;
    let xMaxOut = 0;
    let yMinIn = 0;
    let yMaxIn = 0;
    let yMinOut = 0;
    let yMaxOut = 0;
    let xMidIn = 0;
    let xMidOut = 0;
    let yMidIn = 0;
    let yMidOut = 0;
    let paddingPoint = 0;

    if (this.props.associatePointIn !== '' && this.props.associateRegionOut !== '') {
      // pointIn + regionOut
      //console.log('1');
      arrayPoints.forEach((point) => {
        paddingPoint = this.getPaddingPoint(point, idMultiLink);
        let name: string = point.label || point.name;
        if (name === this.props.associatePointIn) {
          xMinIn = parseInt(point.positionXDefault, 10) - paddingPoint;
          xMaxIn = parseInt(point.positionXDefault, 10) + paddingPoint;
          yMinIn = parseInt(point.positionYDefault, 10) - paddingPoint;
          yMaxIn = parseInt(point.positionYDefault, 10) + paddingPoint;

          if (xMinIn < 0 && xMaxIn < 0) {
            xMinIn = parseInt(point.positionXDefault, 10) + paddingPoint;
            xMaxIn = parseInt(point.positionXDefault, 10) - paddingPoint;
          }

          if (yMinIn < 0 && yMaxIn < 0) {
            yMinIn = parseInt(point.positionYDefault, 10) + paddingPoint;
            yMaxIn = parseInt(point.positionYDefault, 10) - paddingPoint;
          }
        }
      });

      arrayRegions.forEach((region) => {
        if (region.label === this.props.associateRegionOut) {
          xMinOut = parseInt(this.defineCoor4DRegion(region).xMin, 10);
          xMaxOut = parseInt(this.defineCoor4DRegion(region).xMax, 10);
          yMinOut = parseInt(this.defineCoor4DRegion(region).yMin, 10);
          yMaxOut = parseInt(this.defineCoor4DRegion(region).yMax, 10);
        }
      });
    } else if (this.props.associateRegionIn !== '' && this.props.associatePointOut !== '') {
      // regionIn + pointOut
      //console.log('2');
      arrayRegions.forEach((region) => {
        if (region.label === this.props.associateRegionIn) {
          xMinIn = parseInt(this.defineCoor4DRegion(region).xMin, 10);
          xMaxIn = parseInt(this.defineCoor4DRegion(region).xMax, 10);
          yMinIn = parseInt(this.defineCoor4DRegion(region).yMin, 10);
          yMaxIn = parseInt(this.defineCoor4DRegion(region).yMax, 10);
        }
      });

      arrayPoints.forEach((point) => {
        paddingPoint = this.getPaddingPoint(point, idMultiLink);
        let name: string = point.label || point.name;
        if (name === this.props.associatePointOut) {
          xMinOut = parseInt(point.positionXDefault, 10) - paddingPoint;
          xMaxOut = parseInt(point.positionXDefault, 10) + paddingPoint;
          yMinOut = parseInt(point.positionYDefault, 10) - paddingPoint;
          yMaxOut = parseInt(point.positionYDefault, 10) + paddingPoint;

          if (xMinOut < 0 && xMaxOut < 0) {
            xMinOut = parseInt(point.positionXDefault, 10) + paddingPoint;
            xMaxOut = parseInt(point.positionXDefault, 10) - paddingPoint;
          }

          if (yMinOut < 0 && yMaxOut < 0) {
            yMinOut = parseInt(point.positionYDefault, 10) + paddingPoint;
            yMaxOut = parseInt(point.positionYDefault, 10) - paddingPoint;
          }
        }
      });
    } else if (this.props.associatePointIn === '' && this.props.associateRegionIn === '' && this.props.associateRegionOut !== '') {
      // vide + regionOut
      //console.log('3');
      arrayRegions.forEach((region) => {
        if (region.label === this.props.associateRegionOut) {
          xMinOut = parseInt(this.defineCoor4DRegion(region).xMin, 10);
          xMaxOut = parseInt(this.defineCoor4DRegion(region).xMax, 10);
          yMinOut = parseInt(this.defineCoor4DRegion(region).yMin, 10);
          yMaxOut = parseInt(this.defineCoor4DRegion(region).yMax, 10);
        }
      });
      xMinIn = parseInt(this.props.positionXADefault, 10);
      xMaxIn = parseInt(this.props.positionXADefault, 10);
      yMinIn = parseInt(this.props.positionYADefault, 10);
      yMaxIn = parseInt(this.props.positionYADefault, 10);
    } else if (this.props.associateRegionIn !== '' && this.props.associatePointOut === '' && this.props.associateRegionOut === '') {
      // regionIn + vide
      //console.log('4');
      arrayRegions.forEach((region) => {
        if (region.label === this.props.associateRegionIn) {
          xMinIn = parseInt(this.defineCoor4DRegion(region).xMin, 10);
          xMaxIn = parseInt(this.defineCoor4DRegion(region).xMax, 10);
          yMinIn = parseInt(this.defineCoor4DRegion(region).yMin, 10);
          yMaxIn = parseInt(this.defineCoor4DRegion(region).yMax, 10);
        }
      });
      xMinOut = parseInt(this.props.positionXBDefault, 10);
      xMaxOut = parseInt(this.props.positionXBDefault, 10);
      yMinOut = parseInt(this.props.positionYBDefault, 10);
      yMaxOut = parseInt(this.props.positionYBDefault, 10);
    } else if (this.props.associatePointIn !== '' && this.props.associatePointOut === '' && this.props.associateRegionOut === '') {
      // pointIn + vide
      //console.log('5');
      arrayPoints.forEach((point) => {
        paddingPoint = this.getPaddingPoint(point, idMultiLink);
        let name: string = point.label || point.name;
        if (name === this.props.associatePointIn) {
          xMinIn = parseInt(point.positionXDefault, 10) - paddingPoint;
          xMaxIn = parseInt(point.positionXDefault, 10) + paddingPoint;
          yMinIn = parseInt(point.positionYDefault, 10) - paddingPoint;
          yMaxIn = parseInt(point.positionYDefault, 10) + paddingPoint;

          if (xMinIn < 0 && xMaxIn < 0) {
            xMinIn = parseInt(point.positionXDefault, 10) + paddingPoint;
            xMaxIn = parseInt(point.positionXDefault, 10) - paddingPoint;
          }

          if (yMinIn < 0 && yMaxIn < 0) {
            yMinIn = parseInt(point.positionYDefault, 10) + paddingPoint;
            yMaxIn = parseInt(point.positionYDefault, 10) - paddingPoint;
          }
        }
      });
      xMinOut = parseInt(this.props.positionXBDefault, 10);
      xMaxOut = parseInt(this.props.positionXBDefault, 10);
      yMinOut = parseInt(this.props.positionYBDefault, 10);
      yMaxOut = parseInt(this.props.positionYBDefault, 10);
    } else if (this.props.associatePointIn === '' && this.props.associateRegionIn === '' && this.props.associatePointOut !== '') {
      // vide + pointOut
      //console.log('6');
      arrayPoints.forEach((point) => {
        paddingPoint = this.getPaddingPoint(point, idMultiLink);
        let name: string = point.label || point.name;
        if (name === this.props.associatePointOut) {
          xMinOut = parseInt(point.positionXDefault, 10) - paddingPoint;
          xMaxOut = parseInt(point.positionXDefault, 10) + paddingPoint;
          yMinOut = parseInt(point.positionYDefault, 10) - paddingPoint;
          yMaxOut = parseInt(point.positionYDefault, 10) + paddingPoint;

          if (xMinOut < 0 && xMaxOut < 0) {
            xMinOut = parseInt(point.positionXDefault, 10) + paddingPoint;
            xMaxOut = parseInt(point.positionXDefault, 10) - paddingPoint;
          }

          if (yMinOut < 0 && yMaxOut < 0) {
            yMinOut = parseInt(point.positionYDefault, 10) + paddingPoint;
            yMaxOut = parseInt(point.positionYDefault, 10) - paddingPoint;
          }
        }
      });
      xMinIn = parseInt(this.props.positionXADefault, 10);
      xMaxIn = parseInt(this.props.positionXADefault, 10);
      yMinIn = parseInt(this.props.positionYADefault, 10);
      yMaxIn = parseInt(this.props.positionYADefault, 10);
    } else if (this.props.associatePointIn !== '' && this.props.associatePointOut !== '') {
      // pointIn + pointOut
      //console.log('7');
      arrayPoints.forEach((point) => {
        paddingPoint = this.getPaddingPoint(point, idMultiLink);
        let name: string = point.label || point.name;
        if (name === this.props.associatePointIn) {
          xMinIn = parseInt(point.positionXDefault, 10) - paddingPoint;
          xMaxIn = parseInt(point.positionXDefault, 10) + paddingPoint;
          yMinIn = parseInt(point.positionYDefault, 10) - paddingPoint;
          yMaxIn = parseInt(point.positionYDefault, 10) + paddingPoint;

          if (xMinIn < 0 && xMaxIn < 0) {
            xMinIn = parseInt(point.positionXDefault, 10) + paddingPoint;
            xMaxIn = parseInt(point.positionXDefault, 10) - paddingPoint;
          }

          if (yMinIn < 0 && yMaxIn < 0) {
            yMinIn = parseInt(point.positionYDefault, 10) + paddingPoint;
            yMaxIn = parseInt(point.positionYDefault, 10) - paddingPoint;
          }
        }

        if (name === this.props.associatePointOut) {
          xMinOut = parseInt(point.positionXDefault, 10) - paddingPoint;
          xMaxOut = parseInt(point.positionXDefault, 10) + paddingPoint;
          yMinOut = parseInt(point.positionYDefault, 10) - paddingPoint;
          yMaxOut = parseInt(point.positionYDefault, 10) + paddingPoint;

          if (xMinOut < 0 && xMaxOut < 0) {
            xMinOut = parseInt(point.positionXDefault, 10) + paddingPoint;
            xMaxOut = parseInt(point.positionXDefault, 10) - paddingPoint;
          }

          if (yMinOut < 0 && yMaxOut < 0) {
            yMinOut = parseInt(point.positionYDefault, 10) + paddingPoint;
            yMaxOut = parseInt(point.positionYDefault, 10) - paddingPoint;
          }
        }
      });
    } else {
      //console.log('8');
      arrayRegions.forEach((region) => {
        if (region.label === this.props.associateRegionIn) {
          xMinIn = parseInt(this.defineCoor4DRegion(region).xMin, 10);
          xMaxIn = parseInt(this.defineCoor4DRegion(region).xMax, 10);
          yMinIn = parseInt(this.defineCoor4DRegion(region).yMin, 10);
          yMaxIn = parseInt(this.defineCoor4DRegion(region).yMax, 10);
        }

        if (region.label === this.props.associateRegionOut) {
          xMinOut = parseInt(this.defineCoor4DRegion(region).xMin, 10);
          xMaxOut = parseInt(this.defineCoor4DRegion(region).xMax, 10);
          yMinOut = parseInt(this.defineCoor4DRegion(region).yMin, 10);
          yMaxOut = parseInt(this.defineCoor4DRegion(region).yMax, 10);
        }
      });
    }

    xMidIn = (xMinIn + xMaxIn) / 2;
    xMidOut = (xMinOut + xMaxOut) / 2;
    yMidIn = (yMinIn + yMaxIn) / 2;
    yMidOut = (yMinOut + yMaxOut) / 2;

    const ratioXin = xMidIn / this.props.widthImage;
    const ratioXout = xMidOut / this.props.widthImage;

    if (isIn) {
      if (idMultiLink === 0) {
        if (xMidIn > xMidOut) {
          if (yMidIn > yMidOut) {
            //console.log('x1');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMinIn;
            } else {
              xResult = xMaxIn;
            }
          } else if (yMidIn < yMidOut) {
            //console.log('x2');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMinIn;
            } else {
              xResult = xMaxIn;
            }
          } else if (yMidIn === yMidOut) {
            //console.log('x3');
            xResult = xMidIn;
          }
        } else if (xMidIn < xMidOut) {
          if (yMidIn > yMidOut) {
            //console.log('x4');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMinIn;
            } else {
              xResult = xMaxIn;
            }
          } else if (yMidIn < yMidOut) {
            //console.log('x5');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMaxIn;
            } else {
              xResult = xMinIn;
            }
          } else if (yMidIn === yMidOut) {
            //console.log('x6');
            xResult = xMidIn;
          }
        } else if (xMidIn === xMidOut) {
          //console.log('x7');
          xResult = xMidIn;
        }
      } else if (idMultiLink === 1) {
        if (xMidIn > xMidOut) {
          if (yMidIn > yMidOut) {
            //console.log('x8');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMinIn;
            } else {
              xResult = xMaxIn;
            }
          } else if (yMidIn < yMidOut) {
            //console.log('x9');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMaxIn;
            } else {
              xResult = xMinIn;
            }
          } else if (yMidIn === yMidOut) {
            //console.log('x10');
            xResult = xMidIn;
          }
        } else if (xMidIn < xMidOut) {
          if (yMidIn > yMidOut) {
            //console.log('x11');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMaxIn;
            } else {
              xResult = xMinIn;
            }
          } else if (yMidIn < yMidOut) {
            //console.log('x12');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMaxIn;
            } else {
              xResult = xMinIn;
            }
          } else if (yMidIn === yMidOut) {
            //console.log('x13');
            xResult = xMidIn;
          }
        } else if (xMidIn === xMidOut) {
          //console.log('x14');
          xResult = xMidIn;
        }
      } else if (idMultiLink === 2) {
        if (this.props.associatePointIn !== '' && this.props.associateRegionIn === '') {
          if (yMidIn === yMidOut) {
            if ((xMidOut > xMinIn && xMidOut < xMaxIn) || (xMidOut < xMinIn && xMidOut > xMaxIn)) {
              xResult = xMidIn;
            } else if (xMidIn > xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMaxIn;
              } else {
                xResult = xMinIn;
              }
            } else if (xMidIn < xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMinIn;
              } else {
                xResult = xMaxIn;
              }
            } else if (xMidIn === xMidOut) {
              xResult = xMinIn;
            }
          } else {
            if ((xMidOut > xMinIn && xMidOut < xMaxIn) || (xMidOut < xMinIn && xMidOut > xMaxIn)) {
              xResult = xMidIn;
            } else if (xMidIn > xMidOut) {
              if (ratioXin - ratioXout < 0.05) {
                xResult = xMidIn;
              } else if (ratioXin - ratioXout < 0.11) {
                xResult = xMidIn + paddingPoint - parseInt(this.props.size, 10) / 2;
              } else if (ratioXin - ratioXout < 0.37) {
                xResult = xMidIn - paddingPoint / 2;
              } else {
                if (xMinIn < 0 && xMaxIn < 0) {
                  xResult = xMaxIn;
                } else {
                  xResult = xMinIn;
                }
              }
            } else if (xMidIn < xMidOut) {
              if (ratioXout - ratioXin < 0.05) {
                xResult = xMidIn;
              } else if (ratioXout - ratioXin < 0.11) {
                xResult = xMidIn - paddingPoint + parseInt(this.props.size, 10) / 2;
              } else if (ratioXout - ratioXin < 0.37) {
                xResult = xMidIn + paddingPoint / 2;
              } else {
                if (xMinIn < 0 && xMaxIn < 0) {
                  xResult = xMinIn;
                } else {
                  xResult = xMaxIn;
                }
              }
            } else if (xMidIn === xMidOut) {
              xResult = xMidIn;
            }
          }
        } else if (this.props.associatePointIn === '' && this.props.associateRegionIn !== '') {
          if (yMidIn === yMidOut) {
            if ((xMidOut > xMinIn && xMidOut < xMaxIn) || (xMidOut < xMinIn && xMidOut > xMaxIn)) {
              xResult = xMidIn;
            } else if (xMidIn > xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMaxIn;
              } else {
                xResult = xMinIn;
              }
            } else if (xMidIn < xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMinIn;
              } else {
                xResult = xMaxIn;
              }
            } else if (xMidIn === xMidOut) {
              xResult = xMinIn;
            }
          } else {
            if ((xMidOut > xMinIn && xMidOut < xMaxIn) || (xMidOut < xMinIn && xMidOut > xMaxIn)) {
              xResult = xMidIn;
            } else if (xMidIn > xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMaxIn;
              } else {
                xResult = xMinIn;
              }
            } else if (xMidIn < xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMinIn;
              } else {
                xResult = xMaxIn;
              }
            } else if (xMidIn === xMidOut) {
              xResult = xMidIn;
            }
          }
        }
      }
    } else {
      if (idMultiLink === 0) {
        if (xMidIn > xMidOut) {
          if (yMidIn > yMidOut) {
            //console.log('x15');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMinOut;
            } else {
              xResult = xMaxOut;
            }
          } else if (yMidIn < yMidOut) {
            //console.log('x16');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMinOut;
            } else {
              xResult = xMaxOut;
            }
          } else if (yMidIn === yMidOut) {
            //console.log('x17');
            xResult = xMidOut;
          }
        } else if (xMidIn < xMidOut) {
          if (yMidIn > yMidOut) {
            //console.log('x18');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMinOut;
            } else {
              xResult = xMaxOut;
            }
          } else if (yMidIn < yMidOut) {
            //console.log('x19');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMinOut;
            } else {
              xResult = xMaxOut;
            }
          } else if (yMidIn === yMidOut) {
            //console.log('x20');
            xResult = xMidOut;
          }
        } else if (xMidIn === xMidOut) {
          //console.log('x21');
          xResult = xMidOut;
        }
      } else if (idMultiLink === 1) {
        if (xMidIn > xMidOut) {
          if (yMidIn > yMidOut) {
            //console.log('x22');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMinOut;
            } else {
              xResult = xMaxOut;
            }
          } else if (yMidIn < yMidOut) {
            //console.log('x23');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMaxOut;
            } else {
              xResult = xMinOut;
            }
          } else if (yMidIn === yMidOut) {
            //console.log('x24');
            xResult = xMidOut;
          }
        } else if (xMidIn < xMidOut) {
          if (yMidIn > yMidOut) {
            //console.log('x25');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMaxOut;
            } else {
              xResult = xMinOut;
            }
          } else if (yMidIn < yMidOut) {
            //console.log('x26');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMaxOut;
            } else {
              xResult = xMinOut;
            }
          } else if (yMidIn === yMidOut) {
            //console.log('x27');
            xResult = xMidOut;
          }
        } else if (xMidIn === xMidOut) {
          //console.log('x28');
          xResult = xMidOut;
        }
      } else if (idMultiLink === 2) {
        if (this.props.associatePointOut !== '' && this.props.associateRegionOut === '') {
          if (yMidIn === yMidOut) {
            if (xMidIn > xMidOut) {
              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMinOut;
              } else {
                xResult = xMaxOut;
              }
            } else if (xMidIn < xMidOut) {
              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMaxOut;
              } else {
                xResult = xMinOut;
              }
            } else if (xMidIn === xMidOut) {
              xResult = xMinOut;
            }
          } else {
            if ((xMidIn > xMinOut && xMidIn < xMaxOut) || (xMidIn < xMinOut && xMidIn > xMaxOut)) {
              xResult = xMidOut;
            } else if (xMidIn > xMidOut) {
              if (ratioXin - ratioXout < 0.23) {
                xResult = xMidOut;
              } else {
                if (xMinOut < 0 && xMaxOut < 0) {
                  xResult = xMinOut;
                } else {
                  xResult = xMaxOut;
                }
              }
            } else if (xMidIn < xMidOut) {
              if (ratioXout - ratioXin < 0.23) {
                xResult = xMidOut;
              } else {
                if (xMinOut < 0 && xMaxOut < 0) {
                  xResult = xMaxOut;
                } else {
                  xResult = xMinOut;
                }
              }
            } else if (xMidIn === xMidOut) {
              xResult = xMidOut;
            }
          }
        } else if (this.props.associatePointOut === '' && this.props.associateRegionOut !== '') {
          if ((xMidIn > xMinOut && xMidIn < xMaxOut) || (xMidIn < xMinOut && xMidIn > xMaxOut)) {
            xResult = xMidOut;
          } else if (xMidIn > xMidOut) {
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMinOut;
            } else {
              xResult = xMaxOut;
            }
          } else if (xMidIn < xMidOut) {
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMaxOut;
            } else {
              xResult = xMinOut;
            }
          } else if (xMidIn === xMidOut) {
            xResult = xMidOut;
          }
        }
      }
    }

    let newArrayOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
    newArrayOrientedLink.forEach((orientedLink) => {
      if (orientedLink.name === this.props.name) {
        if (isIn) {
          orientedLink.pointAPositionX = xResult.toString();
          orientedLink.pointAPositionXDefault = xResult.toString();
        } else {
          orientedLink.pointBPositionX = xResult.toString();
          orientedLink.pointBPositionXDefault = xResult.toString();
        }
      }
    });
    this.props.options.arrayOrientedLinks = newArrayOrientedLink;

    return xResult;
  };

  // permet de définir le bon placement Y des extrémités du lien :
  // - selon si il y a un ou plusieurs liens entre deux extrémités
  // - selon si l'extrémité A est un point, une région ou le panel
  // - selon si l'extrémité B est un point, une région ou le panel
  private definePositionY = (isIn: boolean, idMultiLink: number): number => {
    let yResult = 0;
    const arrayPoints = this.props.options.arrayPoints;
    const arrayRegions = this.props.options.regionCoordinateSpace;
    let xMinIn = 0;
    let xMaxIn = 0;
    let xMinOut = 0;
    let xMaxOut = 0;
    let yMinIn = 0;
    let yMaxIn = 0;
    let yMinOut = 0;
    let yMaxOut = 0;
    let xMidIn = 0;
    let xMidOut = 0;
    let yMidIn = 0;
    let yMidOut = 0;

    if (this.props.associatePointIn !== '' && this.props.associateRegionOut !== '') {
      arrayPoints.forEach((point) => {
        let paddingPoint = this.getPaddingPoint(point, idMultiLink);
        let name: string = point.label || point.name;
        if (name === this.props.associatePointIn) {
          xMinIn = parseInt(point.positionXDefault, 10) - paddingPoint;
          xMaxIn = parseInt(point.positionXDefault, 10) + paddingPoint;
          yMinIn = parseInt(point.positionYDefault, 10) - paddingPoint;
          yMaxIn = parseInt(point.positionYDefault, 10) + paddingPoint;

          if (xMinIn < 0 && xMaxIn < 0) {
            xMinIn = parseInt(point.positionXDefault, 10) + paddingPoint;
            xMaxIn = parseInt(point.positionXDefault, 10) - paddingPoint;
          }

          if (yMinIn < 0 && yMaxIn < 0) {
            yMinIn = parseInt(point.positionYDefault, 10) + paddingPoint;
            yMaxIn = parseInt(point.positionYDefault, 10) - paddingPoint;
          }
        }
      });

      arrayRegions.forEach((region) => {
        if (region.label === this.props.associateRegionOut) {
          xMinOut = parseInt(this.defineCoor4DRegion(region).xMin, 10);
          xMaxOut = parseInt(this.defineCoor4DRegion(region).xMax, 10);
          yMinOut = parseInt(this.defineCoor4DRegion(region).yMin, 10);
          yMaxOut = parseInt(this.defineCoor4DRegion(region).yMax, 10);
        }
      });
    } else if (this.props.associateRegionIn !== '' && this.props.associatePointOut !== '') {
      arrayRegions.forEach((region) => {
        if (region.label === this.props.associateRegionIn) {
          xMinIn = parseInt(this.defineCoor4DRegion(region).xMin, 10);
          xMaxIn = parseInt(this.defineCoor4DRegion(region).xMax, 10);
          yMinIn = parseInt(this.defineCoor4DRegion(region).yMin, 10);
          yMaxIn = parseInt(this.defineCoor4DRegion(region).yMax, 10);
        }
      });

      arrayPoints.forEach((point) => {
        let paddingPoint = this.getPaddingPoint(point, idMultiLink);
        let name: string = point.label || point.name;
        if (name === this.props.associatePointOut) {
          xMinOut = parseInt(point.positionXDefault, 10) - paddingPoint;
          xMaxOut = parseInt(point.positionXDefault, 10) + paddingPoint;
          yMinOut = parseInt(point.positionYDefault, 10) - paddingPoint;
          yMaxOut = parseInt(point.positionYDefault, 10) + paddingPoint;

          if (xMinOut < 0 && xMaxOut < 0) {
            xMinOut = parseInt(point.positionXDefault, 10) + paddingPoint;
            xMaxOut = parseInt(point.positionXDefault, 10) - paddingPoint;
          }

          if (yMinOut < 0 && yMaxOut < 0) {
            yMinOut = parseInt(point.positionYDefault, 10) + paddingPoint;
            yMaxOut = parseInt(point.positionYDefault, 10) - paddingPoint;
          }
        }
      });
    } else if (this.props.associatePointIn === '' && this.props.associateRegionIn === '' && this.props.associateRegionOut !== '') {
      arrayRegions.forEach((region) => {
        if (region.label === this.props.associateRegionOut) {
          xMinOut = parseInt(this.defineCoor4DRegion(region).xMin, 10);
          xMaxOut = parseInt(this.defineCoor4DRegion(region).xMax, 10);
          yMinOut = parseInt(this.defineCoor4DRegion(region).yMin, 10);
          yMaxOut = parseInt(this.defineCoor4DRegion(region).yMax, 10);
        }
      });
      xMinIn = parseInt(this.props.positionXADefault, 10);
      xMaxIn = parseInt(this.props.positionXADefault, 10);
      yMinIn = parseInt(this.props.positionYADefault, 10);
      yMaxIn = parseInt(this.props.positionYADefault, 10);
    } else if (this.props.associateRegionIn !== '' && this.props.associatePointOut === '' && this.props.associateRegionOut === '') {
      arrayRegions.forEach((region) => {
        if (region.label === this.props.associateRegionIn) {
          xMinIn = parseInt(this.defineCoor4DRegion(region).xMin, 10);
          xMaxIn = parseInt(this.defineCoor4DRegion(region).xMax, 10);
          yMinIn = parseInt(this.defineCoor4DRegion(region).yMin, 10);
          yMaxIn = parseInt(this.defineCoor4DRegion(region).yMax, 10);
        }
      });
      xMinOut = parseInt(this.props.positionXBDefault, 10);
      xMaxOut = parseInt(this.props.positionXBDefault, 10);
      yMinOut = parseInt(this.props.positionYBDefault, 10);
      yMaxOut = parseInt(this.props.positionYBDefault, 10);
    } else if (this.props.associatePointIn !== '' && this.props.associatePointOut === '' && this.props.associateRegionOut === '') {
      arrayPoints.forEach((point) => {
        let paddingPoint = this.getPaddingPoint(point, idMultiLink);
        let name: string = point.label || point.name;
        if (name === this.props.associatePointIn) {
          xMinIn = parseInt(point.positionXDefault, 10) - paddingPoint;
          xMaxIn = parseInt(point.positionXDefault, 10) + paddingPoint;
          yMinIn = parseInt(point.positionYDefault, 10) - paddingPoint;
          yMaxIn = parseInt(point.positionYDefault, 10) + paddingPoint;

          if (xMinIn < 0 && xMaxIn < 0) {
            xMinIn = parseInt(point.positionXDefault, 10) + paddingPoint;
            xMaxIn = parseInt(point.positionXDefault, 10) - paddingPoint;
          }

          if (yMinIn < 0 && yMaxIn < 0) {
            yMinIn = parseInt(point.positionYDefault, 10) + paddingPoint;
            yMaxIn = parseInt(point.positionYDefault, 10) - paddingPoint;
          }
        }
      });
      xMinOut = parseInt(this.props.positionXBDefault, 10);
      xMaxOut = parseInt(this.props.positionXBDefault, 10);
      yMinOut = parseInt(this.props.positionYBDefault, 10);
      yMaxOut = parseInt(this.props.positionYBDefault, 10);
    } else if (this.props.associatePointIn === '' && this.props.associateRegionIn === '' && this.props.associatePointOut !== '') {
      arrayPoints.forEach((point) => {
        let paddingPoint = this.getPaddingPoint(point, idMultiLink);
        let name: string = point.label || point.name;
        if (name === this.props.associatePointOut) {
          xMinOut = parseInt(point.positionXDefault, 10) - paddingPoint;
          xMaxOut = parseInt(point.positionXDefault, 10) + paddingPoint;
          yMinOut = parseInt(point.positionYDefault, 10) - paddingPoint;
          yMaxOut = parseInt(point.positionYDefault, 10) + paddingPoint;

          if (xMinOut < 0 && xMaxOut < 0) {
            xMinOut = parseInt(point.positionXDefault, 10) + paddingPoint;
            xMaxOut = parseInt(point.positionXDefault, 10) - paddingPoint;
          }

          if (yMinOut < 0 && yMaxOut < 0) {
            yMinOut = parseInt(point.positionYDefault, 10) + paddingPoint;
            yMaxOut = parseInt(point.positionYDefault, 10) - paddingPoint;
          }
        }
      });
      xMinIn = parseInt(this.props.positionXADefault, 10);
      xMaxIn = parseInt(this.props.positionXADefault, 10);
      yMinIn = parseInt(this.props.positionYADefault, 10);
      yMaxIn = parseInt(this.props.positionYADefault, 10);
    } else if (this.props.associatePointIn !== '' && this.props.associatePointOut !== '') {
      arrayPoints.forEach((point) => {
        let paddingPoint = this.getPaddingPoint(point, idMultiLink);
        let name: string = point.label || point.name;
        if (name === this.props.associatePointIn) {
          xMinIn = parseInt(point.positionXDefault, 10) - paddingPoint;
          xMaxIn = parseInt(point.positionXDefault, 10) + paddingPoint;
          yMinIn = parseInt(point.positionYDefault, 10) - paddingPoint;
          yMaxIn = parseInt(point.positionYDefault, 10) + paddingPoint;

          if (xMinIn < 0 && xMaxIn < 0) {
            xMinIn = parseInt(point.positionXDefault, 10) + paddingPoint;
            xMaxIn = parseInt(point.positionXDefault, 10) - paddingPoint;
          }

          if (yMinIn < 0 && yMaxIn < 0) {
            yMinIn = parseInt(point.positionYDefault, 10) + paddingPoint;
            yMaxIn = parseInt(point.positionYDefault, 10) - paddingPoint;
          }
        }

        if (name === this.props.associatePointOut) {
          xMinOut = parseInt(point.positionXDefault, 10) - paddingPoint;
          xMaxOut = parseInt(point.positionXDefault, 10) + paddingPoint;
          yMinOut = parseInt(point.positionYDefault, 10) - paddingPoint;
          yMaxOut = parseInt(point.positionYDefault, 10) + paddingPoint;

          if (xMinOut < 0 && xMaxOut < 0) {
            xMinOut = parseInt(point.positionXDefault, 10) + paddingPoint;
            xMaxOut = parseInt(point.positionXDefault, 10) - paddingPoint;
          }

          if (yMinOut < 0 && yMaxOut < 0) {
            yMinOut = parseInt(point.positionYDefault, 10) + paddingPoint;
            yMaxOut = parseInt(point.positionYDefault, 10) - paddingPoint;
          }
        }
      });
    } else {
      arrayRegions.forEach((region) => {
        if (region.label === this.props.associateRegionIn) {
          xMinIn = parseInt(this.defineCoor4DRegion(region).xMin, 10);
          xMaxIn = parseInt(this.defineCoor4DRegion(region).xMax, 10);
          yMinIn = parseInt(this.defineCoor4DRegion(region).yMin, 10);
          yMaxIn = parseInt(this.defineCoor4DRegion(region).yMax, 10);
        }

        if (region.label === this.props.associateRegionOut) {
          xMinOut = parseInt(this.defineCoor4DRegion(region).xMin, 10);
          xMaxOut = parseInt(this.defineCoor4DRegion(region).xMax, 10);
          yMinOut = parseInt(this.defineCoor4DRegion(region).yMin, 10);
          yMaxOut = parseInt(this.defineCoor4DRegion(region).yMax, 10);
        }
      });
    }

    xMidIn = (xMinIn + xMaxIn) / 2;
    xMidOut = (xMinOut + xMaxOut) / 2;
    yMidIn = (yMinIn + yMaxIn) / 2;
    yMidOut = (yMinOut + yMaxOut) / 2;

    if (isIn) {
      if (idMultiLink === 0) {
        if (yMidIn > yMidOut) {
          if (xMidIn > xMidOut) {
            //console.log('y1');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMaxIn;
            } else {
              yResult = yMinIn;
            }
          } else if (xMidIn < xMidOut) {
            //console.log('y2');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMinIn;
            } else {
              yResult = yMaxIn;
            }
          } else if (xMidIn === xMidOut) {
            //console.log('y3');
            yResult = yMidIn;
          }
        } else if (yMidIn < yMidOut) {
          if (xMidIn > xMidOut) {
            //console.log('y4');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMinIn;
            } else {
              yResult = yMaxIn;
            }
          } else if (xMidIn < xMidOut) {
            //console.log('y5');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMaxIn;
            } else {
              yResult = yMinIn;
            }
          } else if (xMidIn === xMidOut) {
            //console.log('y6');
            yResult = yMidIn;
          }
        } else if (yMidIn === yMidOut) {
          //console.log('y7');
          yResult = yMidIn;
        }
      } else if (idMultiLink === 1) {
        if (yMidIn > yMidOut) {
          if (xMidIn > xMidOut) {
            //console.log('y8');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMinIn;
            } else {
              yResult = yMaxIn;
            }
          } else if (xMidIn < xMidOut) {
            //console.log('y9');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMaxIn;
            } else {
              yResult = yMinIn;
            }
          } else if (xMidIn === xMidOut) {
            //console.log('y10');
            yResult = yMidIn;
          }
        } else if (yMidIn < yMidOut) {
          if (xMidIn > xMidOut) {
            //console.log('y11');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMaxIn;
            } else {
              yResult = yMinIn;
            }
          } else if (xMidIn < xMidOut) {
            //console.log('y12');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMinIn;
            } else {
              yResult = yMaxIn;
            }
          } else if (xMidIn === xMidOut) {
            //console.log('y13');
            yResult = yMidIn;
          }
        } else if (yMidIn === yMidOut) {
          //console.log('y14');
          yResult = yMidIn;
        }
      } else if (idMultiLink === 2) {
        if (this.props.associatePointIn !== '' && this.props.associateRegionIn === '') {
          if (xMidIn === xMidOut) {
            if (yMidIn > yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            } else if (yMidIn < yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            }
          } else {
            yResult = yMidIn;
          }
        } else if (this.props.associatePointIn === '' && this.props.associateRegionIn !== '') {
          if (yMidIn > yMidOut) {
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMaxIn;
            } else {
              yResult = yMinIn;
            }
          } else if (yMidIn < yMidOut) {
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMinIn;
            } else {
              yResult = yMaxIn;
            }
          } else if (yMidIn === yMidOut) {
            yResult = yMidIn;
          }
        }
      }
    } else {
      // ce lien est le premier parmis deux ou trois liens
      if (idMultiLink === 0) {
        if (yMidIn > yMidOut) {
          if (xMidIn > xMidOut) {
            //console.log('y15');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMaxOut;
            } else {
              yResult = yMinOut;
            }
          } else if (xMidIn < xMidOut) {
            //console.log('y16');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMinOut;
            } else {
              yResult = yMaxOut;
            }
          } else if (xMidIn === xMidOut) {
            //console.log('y17');
            yResult = yMidOut;
          }
        } else if (yMidIn < yMidOut) {
          if (xMidIn > xMidOut) {
            //console.log('y18');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMinOut;
            } else {
              yResult = yMaxOut;
            }
          } else if (xMidIn < xMidOut) {
            //console.log('y19');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMaxOut;
            } else {
              yResult = yMinOut;
            }
          } else if (xMidIn === xMidOut) {
            //console.log('y20');
            yResult = yMidOut;
          }
        } else if (yMidIn === yMidOut) {
          //console.log('y21');
          yResult = yMidOut;
        }
        // ce lien est le deuxième parmis deux ou trois liens
      } else if (idMultiLink === 1) {
        if (yMidIn > yMidOut) {
          if (xMidIn > xMidOut) {
            //console.log('y22');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMinOut;
            } else {
              yResult = yMaxOut;
            }
          } else if (xMidIn < xMidOut) {
            //console.log('y23');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMaxOut;
            } else {
              yResult = yMinOut;
            }
          } else if (xMidIn === xMidOut) {
            //console.log('y24');
            yResult = yMidOut;
          }
        } else if (yMidIn < yMidOut) {
          if (xMidIn > xMidOut) {
            //console.log('y25');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMaxOut;
            } else {
              yResult = yMinOut;
            }
          } else if (xMidIn < xMidOut) {
            //console.log('y26');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMinOut;
            } else {
              yResult = yMaxOut;
            }
          } else if (xMidIn === xMidOut) {
            //console.log('y27');
            yResult = yMidOut;
          }
        } else if (yMidIn === yMidOut) {
          //console.log('y28');
          yResult = yMidOut;
        }
        // le lien est seul ou au milieu de trois liens
      } else if (idMultiLink === 2) {
        // un point en sortie
        if (this.props.associatePointOut !== '' && this.props.associateRegionOut === '') {
          if (xMidIn === xMidOut) {
            if (yMidIn > yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            } else if (yMidIn < yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            }
          } else {
            yResult = yMidOut;
          }
          // une région en sortie
        } else if (this.props.associatePointOut === '' && this.props.associateRegionOut !== '') {
          if (yMidIn > yMidOut) {
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMinOut;
            } else {
              yResult = yMaxOut;
            }
          } else if (yMidIn < yMidOut) {
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMaxOut;
            } else {
              yResult = yMinOut;
            }
          } else if (yMidIn === yMidOut) {
            yResult = yMidOut;
          }
        }
      }
    }

    let newArrayOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
    newArrayOrientedLink.forEach((orientedLink) => {
      if (orientedLink.name === this.props.name) {
        if (isIn) {
          orientedLink.pointAPositionY = yResult.toString();
          orientedLink.pointAPositionYDefault = yResult.toString();
        } else {
          orientedLink.pointBPositionY = yResult.toString();
          orientedLink.pointBPositionYDefault = yResult.toString();
        }
      }
    });
    this.props.options.arrayOrientedLinks = newArrayOrientedLink;

    return yResult;
  };

  /**
   * to do
   */
  private drawLink(xA0: number, yA0: number, xB0: number, yB0: number, xCByClick0: number, yCByClick0: number, orientationLink: string) {
    const listParallelOrientedLinks: number[] = this.defineParallelOrientedLinks();
    let xA = 0;
    let yA = 0;
    let xB = 0;
    let yB = 0;
    let xCByClick = 0;
    let yCByClick = 0;

    if (listParallelOrientedLinks.length > 1) {
      let indexOrientedLink = 0;
      listParallelOrientedLinks.forEach((index) => {
        if (index === parseInt(this.props.id, 10)) {
          if (indexOrientedLink === 0) {
            xA = this.synchroLinkX(this.definePositionX(true, 0));
            yA = this.synchroLinkY(this.definePositionY(true, 0));
            xB = this.synchroLinkX(this.definePositionX(false, 0));
            yB = this.synchroLinkY(this.definePositionY(false, 0));
            xCByClick = xCByClick0 || (xA + xB) / 2;
            yCByClick = yCByClick0 || (yA + yB) / 2;
          } else if (indexOrientedLink === 1) {
            xA = this.synchroLinkX(this.definePositionX(true, 1));
            yA = this.synchroLinkY(this.definePositionY(true, 1));
            xB = this.synchroLinkX(this.definePositionX(false, 1));
            yB = this.synchroLinkY(this.definePositionY(false, 1));
            xCByClick = xCByClick0 || (xA + xB) / 2;
            yCByClick = yCByClick0 || (yA + yB) / 2;
          } else if (indexOrientedLink === 2) {
            xA = this.synchroLinkX(this.definePositionX(true, 2));
            yA = this.synchroLinkY(this.definePositionY(true, 2));
            xB = this.synchroLinkX(this.definePositionX(false, 2));
            yB = this.synchroLinkY(this.definePositionY(false, 2));
            xCByClick = xCByClick0 || (xA + xB) / 2;
            yCByClick = yCByClick0 || (yA + yB) / 2;
          }
        }
        indexOrientedLink++;
      });
    } else {
      if (
        (this.props.associateRegionIn !== '' || this.props.associatePointIn !== '') &&
        this.props.associateRegionOut === '' &&
        this.props.associatePointOut === ''
      ) {
        xA = this.synchroLinkX(this.definePositionX(true, 2));
        yA = this.synchroLinkY(this.definePositionY(true, 2));
        xB = xB0;
        yB = yB0;
        xCByClick = xCByClick0 || (xA + xB) / 2;
        yCByClick = yCByClick0 || (yA + yB) / 2;
      } else if (
        (this.props.associateRegionIn === '' || this.props.associatePointIn === '') &&
        this.props.associateRegionOut !== '' &&
        this.props.associatePointOut !== ''
      ) {
        xA = xA0;
        yA = yA0;
        xB = this.synchroLinkX(this.definePositionX(false, 2));
        yB = this.synchroLinkY(this.definePositionY(false, 2));
        xCByClick = xCByClick0 || (xA + xB) / 2;
        yCByClick = yCByClick0 || (yA + yB) / 2;
      } else if (
        (this.props.associatePointIn !== '' && this.props.associatePointOut !== '') ||
        (this.props.associatePointIn !== '' && this.props.associateRegionOut !== '') ||
        (this.props.associateRegionIn !== '' && this.props.associatePointOut !== '') ||
        (this.props.associateRegionIn !== '' && this.props.associateRegionOut !== '')
      ) {
        xA = this.synchroLinkX(this.definePositionX(true, 2));
        yA = this.synchroLinkY(this.definePositionY(true, 2));
        xB = this.synchroLinkX(this.definePositionX(false, 2));
        yB = this.synchroLinkY(this.definePositionY(false, 2));
        xCByClick = xCByClick0 || (xA + xB) / 2;
        yCByClick = yCByClick0 || (yA + yB) / 2;
      } else {
        xA = xA0;
        yA = yA0;
        xB = xB0;
        yB = yB0;
        xCByClick = xCByClick0;
        yCByClick = yCByClick0;
      }
    }

    let xC = 0;
    let yC = 0;

    if (this.props.isIncurved.value) {
      xC = xCByClick;
      yC = yCByClick;
    } else {
      xC = (xA + xB) / 2;
      yC = (yA + yB) / 2;
    }

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

    const sizeArrowTriangle = 8;

    const valueTooltipMonodirectional: JSX.Element | null = this.defineValueTooptip('monodirectional');
    const valueTooltipBidirectionalA: JSX.Element | null = this.defineValueTooptip('bidirectional', 'A');
    const valueTooltipBidirectionalB: JSX.Element | null = this.defineValueTooptip('bidirectional', 'B');
    const linkUrlOrientedLink: string = this.props.linkUrl.followLink;
    const inverseAxeY = -1;

    let positionTooltipA: any = '';
    if (this.props.tooltipPositionA.value) {
      positionTooltipA = this.props.tooltipPositionA.value.toLowerCase();
    }

    let positionTooltipB: any = '';
    if (this.props.tooltipPositionB.value) {
      positionTooltipB = this.props.tooltipPositionB.value.toLowerCase();
    }

    if (orientationLink === 'double') {
      let first: JSX.Element;
      if (valueTooltipBidirectionalA) {
        first = (
          <Tooltip content={valueTooltipBidirectionalA} placement={positionTooltipA}>
            <div
              id="linkA"
              style={{
                position: 'absolute',
                zIndex: this.props.zIndex,
                top: yArrowAC - sizeArrowTriangle / 2,
                left: xArrowAC,
                transform: 'rotate(' + angleDegreeAC.toString() + 'deg)',
                width: distanceAC,
              }}
            >
              <div
                id="arrow1"
                style={{
                  display: 'flex',
                  alignContent: 'stretch',
                }}
              >
                <div
                  className="arrowTriangle"
                  style={{
                    width: '0',
                    height: '0',
                    borderLeft: this.defineSizeLink() + 'px solid transparent',
                    borderRight: this.defineSizeLink() + 'px solid transparent',
                    borderBottom: this.defineSizeLink() + 'px solid ' + this.defineBackColor('A'),
                    transform: 'rotate(270deg)',
                  }}
                ></div>
                <div
                  style={{
                    border: this.defineBorderSize('A') + 'px solid ' + this.defineBorderColor('A'),
                    backgroundColor: this.defineBackColor('A'),
                    width: distanceAC,
                    height: this.defineSizeLink() + 'px',
                  }}
                ></div>
              </div>
            </div>
          </Tooltip>
        );
      } else {
        first = (
          <div
            id="linkA"
            style={{
              position: 'absolute',
              zIndex: this.props.zIndex,
              top: yArrowAC - sizeArrowTriangle / 2,
              left: xArrowAC,
              transform: 'rotate(' + angleDegreeAC.toString() + 'deg)',
              width: distanceAC,
            }}
          >
            <div
              id="arrow1"
              style={{
                display: 'flex',
                alignContent: 'stretch',
              }}
            >
              <div
                className="arrowTriangle"
                style={{
                  width: '0',
                  height: '0',
                  borderLeft: this.defineSizeLink() + 'px solid transparent',
                  borderRight: this.defineSizeLink() + 'px solid transparent',
                  borderBottom: this.defineSizeLink() + 'px solid ' + this.defineBackColor('A'),
                  transform: 'rotate(270deg)',
                }}
              ></div>
              <div
                style={{
                  border: this.defineBorderSize('A') + 'px solid ' + this.defineBorderColor('A'),
                  backgroundColor: this.defineBackColor('A'),
                  width: distanceAC,
                  height: this.defineSizeLink() + 'px',
                }}
              ></div>
            </div>
          </div>
        );
      }
      let second: JSX.Element;
      if (valueTooltipBidirectionalB) {
        second = (
          <Tooltip content={valueTooltipBidirectionalB} placement={positionTooltipB}>
            <div
              id="linkB"
              style={{
                position: 'absolute',
                zIndex: this.props.zIndex,
                top: yArrowBC - sizeArrowTriangle / 2,
                left: xArrowBC,
                transform: 'rotate(' + angleDegreeBC.toString() + 'deg)',
                width: distanceBC,
              }}
            >
              <div
                id="arrow2"
                style={{
                  display: 'flex',
                  alignContent: 'stretch',
                }}
              >
                <div
                  className="arrowTriangle"
                  style={{
                    width: '0',
                    height: '0',
                    borderLeft: this.defineSizeLink() + 'px solid transparent',
                    borderRight: this.defineSizeLink() + 'px solid transparent',
                    borderBottom: this.defineSizeLink() + 'px solid ' + this.defineBackColor('B'),
                    transform: 'rotate(270deg)',
                  }}
                ></div>
                <div
                  style={{
                    border: this.defineBorderSize('B') + 'px solid ' + this.defineBorderColor('B'),
                    backgroundColor: this.defineBackColor('B'),
                    width: distanceBC,
                    height: this.defineSizeLink() + 'px',
                  }}
                ></div>
              </div>
            </div>
          </Tooltip>
        );
      } else {
        second = (
          <div
            id="linkB"
            style={{
              position: 'absolute',
              zIndex: this.props.zIndex,
              top: yArrowBC - sizeArrowTriangle / 2,
              left: xArrowBC,
              transform: 'rotate(' + angleDegreeBC.toString() + 'deg)',
              width: distanceBC,
            }}
          >
            <div
              id="arrow2"
              style={{
                display: 'flex',
                alignContent: 'stretch',
              }}
            >
              <div
                className="arrowTriangle"
                style={{
                  width: '0',
                  height: '0',
                  borderLeft: this.defineSizeLink() + 'px solid transparent',
                  borderRight: this.defineSizeLink() + 'px solid transparent',
                  borderBottom: this.defineSizeLink() + 'px solid ' + this.defineBackColor('B'),
                  transform: 'rotate(270deg)',
                }}
              ></div>
              <div
                style={{
                  border: this.defineBorderSize('B') + 'px solid ' + this.defineBorderColor('B'),
                  backgroundColor: this.defineBackColor('B'),
                  width: distanceBC,
                  height: this.defineSizeLink() + 'px',
                }}
              ></div>
            </div>
          </div>
        );
      }

      return (
        <a
          id="link"
          href={linkUrlOrientedLink}
          onClick={this.desactiveLink}
          style={{ cursor: this.defineCursor() }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            {first}
            <div
              id={'labelMainMetric' + this.props.id}
              style={{
                textDecoration: this.defineTextDecoration(),
                fontStyle: this.defineFontStyle(),
                fontWeight: this.defineFontWeight(),
                position: 'absolute',
                zIndex: 9999,
                top: yMidAC + parseInt(this.props.labelAPositionY, 10) * inverseAxeY - this.labelSynchroY('A'),
                left: xMidAC + parseInt(this.props.labelAPositionX, 10) - this.labelSynchroX('A'),
                fontSize: this.props.sizePolice,
                //border: '1px solid black',
                backgroundColor: 'white',
                color: this.defineColorTextLabel(),
                padding: '0',
              }}
            >
              {this.defineTextObject(this.props.valueMainMetricA)}
            </div>
          </div>
          <div>
            {second}
            <div
              id={'labelMainMetricB' + this.props.id}
              style={{
                textDecoration: this.defineTextDecoration(),
                fontStyle: this.defineFontStyle(),
                fontWeight: this.defineFontWeight(),
                position: 'absolute',
                zIndex: 9999,
                top: yMidBC + parseInt(this.props.labelBPositionY, 10) * inverseAxeY - this.labelSynchroY('B'),
                left: xMidBC + parseInt(this.props.labelBPositionX, 10) - this.labelSynchroX('B'),
                fontSize: this.props.sizePolice,
                //border: '1px solid black',
                backgroundColor: 'white',
                color: this.defineColorTextLabel(),
                padding: '0',
              }}
            >
              {this.defineTextObject(this.props.valueMainMetricB)}
            </div>
          </div>
        </a>
      );
    } else if (orientationLink === 'AB') {
      let first: JSX.Element;
      if (valueTooltipMonodirectional) {
        first = (
          <Tooltip content={valueTooltipMonodirectional} placement={positionTooltipA}>
            <div
              id="partA"
              style={{
                position: 'absolute',
                zIndex: this.props.zIndex,
                top: yArrowAC - sizeArrowTriangle / 2,
                left: xArrowAC,
                transform: 'rotate(' + angleDegreeAC.toString() + 'deg)',
                width: distanceAC,
              }}
            >
              <div
                style={{
                  padding: parseInt(this.defineBorderSize('A'), 10) / 2 + 'px',
                  border: this.defineBorderSize('A') + 'px solid ' + this.defineBorderColor('A'),
                  backgroundColor: this.defineBackColor('A'),
                  width: distanceAC,
                  height: this.defineSizeLink() + 'px',
                }}
              ></div>
            </div>
          </Tooltip>
        );
      } else {
        first = (
          <div
            id="partA"
            style={{
              position: 'absolute',
              zIndex: this.props.zIndex,
              top: yArrowAC - sizeArrowTriangle / 2,
              left: xArrowAC,
              transform: 'rotate(' + angleDegreeAC.toString() + 'deg)',
              width: distanceAC,
            }}
          >
            <div
              style={{
                padding: parseInt(this.defineBorderSize('A'), 10) / 2 + 'px',
                border: this.defineBorderSize('A') + 'px solid ' + this.defineBorderColor('A'),
                backgroundColor: this.defineBackColor('A'),
                width: distanceAC,
                height: this.defineSizeLink() + 'px',
              }}
            ></div>
          </div>
        );
      }
      let second: JSX.Element;
      if (valueTooltipMonodirectional) {
        second = (
          <Tooltip content={valueTooltipMonodirectional} placement={positionTooltipA}>
            <div
              id="partB"
              style={{
                position: 'absolute',
                zIndex: this.props.zIndex,
                top: yArrowBC - sizeArrowTriangle / 2,
                left: xArrowBC,
                transform: 'rotate(' + angleDegreeBC.toString() + 'deg)',
                width: distanceBC,
              }}
            >
              <div
                id="arrow2"
                style={{
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    border: this.defineBorderSize('A') + 'px solid ' + this.defineBorderColor('A'),
                    backgroundColor: this.defineBackColor('A'),
                    width: distanceBC,
                    height: this.defineSizeLink() + 'px',
                  }}
                ></div>
                <div
                  className="arrowTriangle"
                  style={{
                    width: '0',
                    height: '0',
                    borderLeft: this.defineSizeLink() + 'px solid transparent',
                    borderRight: this.defineSizeLink() + 'px solid transparent',
                    borderBottom: this.defineSizeLink() + 'px solid ' + this.defineBackColor('A'),
                    transform: 'rotate(90deg)',
                  }}
                ></div>
              </div>
            </div>
          </Tooltip>
        );
      } else {
        second = (
          <div
            id="partB"
            style={{
              position: 'absolute',
              zIndex: this.props.zIndex,
              top: yArrowBC - sizeArrowTriangle / 2,
              left: xArrowBC,
              transform: 'rotate(' + angleDegreeBC.toString() + 'deg)',
              width: distanceBC,
              height: this.defineSizeLink() + 'px',
            }}
          >
            <div
              id="arrow2"
              style={{
                display: 'flex',
              }}
            >
              <div
                style={{
                  border: this.defineBorderSize('A') + 'px solid ' + this.defineBorderColor('A'),
                  backgroundColor: this.defineBackColor('A'),
                  width: distanceBC,
                  height: this.defineSizeLink() + 'px',
                }}
              ></div>
              <div
                className="arrowTriangle"
                style={{
                  width: '0',
                  height: '0',
                  borderLeft: this.defineSizeLink() + 'px solid transparent',
                  borderRight: this.defineSizeLink() + 'px solid transparent',
                  borderBottom: this.defineSizeLink() + 'px solid ' + this.defineBackColor('A'),
                  transform: 'rotate(90deg)',
                }}
              ></div>
            </div>
          </div>
        );
      }
      if (this.props.isIncurved.value) {
        return (
          <a
            href={linkUrlOrientedLink}
            onClick={this.desactiveLink}
            style={{ cursor: this.defineCursor() }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {first}
            {second}
            <div
              id={'labelMainMetric' + this.props.id}
              style={{
                textDecoration: this.defineTextDecoration(),
                fontStyle: this.defineFontStyle(),
                fontWeight: this.defineFontWeight(),
                position: 'absolute',
                zIndex: 9999,
                top: yC + parseInt(this.props.labelAPositionY, 10) * inverseAxeY - this.labelSynchroY('A'),
                left: xC + parseInt(this.props.labelAPositionX, 10) - this.labelSynchroX('A'),
                backgroundColor: 'white',
                fontSize: this.props.sizePolice,
                color: this.defineColorTextLabel(),
                padding: '0',
              }}
            >
              {this.defineTextObject(this.props.valueMainMetricA)}
            </div>
          </a>
        );
      } else {
        let first: JSX.Element;
        if (valueTooltipMonodirectional) {
          first = (
            <Tooltip content={valueTooltipMonodirectional} placement={positionTooltipA}>
              <div
                id="link"
                style={{
                  position: 'absolute',
                  zIndex: this.props.zIndex,
                  top: yArrowAB - sizeArrowTriangle / 2,
                  left: xArrowAB,
                  transform: 'rotate(' + angleDegreeAB.toString() + 'deg)',
                  width: distanceAB,
                }}
              >
                <div
                  id="arrow1"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    className="arrowTriangle"
                    style={{
                      //position: 'absolute',
                      width: '0',
                      height: '0',
                      borderLeft: this.defineSizeLink() + 'px solid transparent',
                      borderRight: this.defineSizeLink() + 'px solid transparent',
                      borderBottom: this.defineSizeLink() + 'px solid ' + this.defineBackColor('A'),
                      transform: 'rotate(270deg)',
                    }}
                  ></div>
                  <div
                    style={{
                      border: this.defineBorderSize('A') + 'px solid ' + this.defineBorderColor('A'),
                      backgroundColor: this.defineBackColor('A'),
                      width: distanceAB,
                      height: this.defineSizeLink() + 'px',
                    }}
                  ></div>
                </div>
              </div>
            </Tooltip>
          );
        } else {
          first = (
            <div
              id="link"
              style={{
                position: 'absolute',
                zIndex: this.props.zIndex,
                top: yArrowAB - sizeArrowTriangle / 2,
                left: xArrowAB,
                transform: 'rotate(' + angleDegreeAB.toString() + 'deg)',
                width: distanceAB,
              }}
            >
              <div
                id="arrow1"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <div
                  className="arrowTriangle"
                  style={{
                    width: '0',
                    height: '0',
                    borderLeft: this.defineSizeLink() + 'px solid transparent',
                    borderRight: this.defineSizeLink() + 'px solid transparent',
                    borderBottom: this.defineSizeLink() + 'px solid ' + this.defineBackColor('A'),
                    transform: 'rotate(270deg)',
                  }}
                ></div>
                <div
                  style={{
                    border: this.defineBorderSize('A') + 'px solid ' + this.defineBorderColor('A'),
                    backgroundColor: this.defineBackColor('A'),
                    width: distanceAB,
                    height: this.defineSizeLink() + 'px',
                  }}
                ></div>
              </div>
            </div>
          );
        }
        return (
          <a
            href={linkUrlOrientedLink}
            onClick={this.desactiveLink}
            style={{ cursor: this.defineCursor() }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {first}
            <div
              id={'labelMainMetric' + this.props.id}
              style={{
                textDecoration: this.defineTextDecoration(),
                fontStyle: this.defineFontStyle(),
                fontWeight: this.defineFontWeight(),
                position: 'absolute',
                zIndex: 9999,
                top: yMidAB + parseInt(this.props.labelAPositionY, 10) * inverseAxeY - this.labelSynchroY('A'),
                left: xMidAB + parseInt(this.props.labelAPositionX, 10) - this.labelSynchroX('A'),
                backgroundColor: 'white',
                fontSize: this.props.sizePolice,
                color: this.defineColorTextLabel(),
                padding: '0',
              }}
            >
              {this.defineTextObject(this.props.valueMainMetricA)}
            </div>
          </a>
        );
      }
    } else if (orientationLink === 'no') {
      if (this.props.isIncurved.value) {
        let first: JSX.Element;
        if (valueTooltipMonodirectional) {
          first = (
            <Tooltip content={valueTooltipMonodirectional} placement={positionTooltipA}>
              <div
                id="partA"
                style={{
                  position: 'absolute',
                  zIndex: this.props.zIndex,
                  top: yArrowAC,
                  left: xArrowAC,
                  transform: 'rotate(' + angleDegreeAC.toString() + 'deg)',
                  height: this.defineSizeLink() + 'px',
                  width: distanceAC,
                  border: this.defineBorderSize('A') + ' solid ' + this.defineBorderColor('A'),
                  backgroundColor: this.defineBackColor('A'),
                }}
              ></div>
            </Tooltip>
          );
        } else {
          first = (
            <div
              id="partA"
              style={{
                position: 'absolute',
                zIndex: this.props.zIndex,
                top: yArrowAC,
                left: xArrowAC,
                transform: 'rotate(' + angleDegreeAC.toString() + 'deg)',
                height: this.defineSizeLink() + 'px',
                width: distanceAC,
                border: this.defineBorderSize('A') + ' solid ' + this.defineBorderColor('A'),
                backgroundColor: this.defineBackColor('A'),
              }}
            ></div>
          );
        }
        let second: JSX.Element;
        if (valueTooltipMonodirectional) {
          second = (
            <Tooltip content={valueTooltipMonodirectional} placement={positionTooltipA}>
              <div
                id="partB"
                style={{
                  position: 'absolute',
                  zIndex: this.props.zIndex,
                  top: yArrowBC,
                  left: xArrowBC,
                  transform: 'rotate(' + angleDegreeBC.toString() + 'deg)',
                  height: this.defineSizeLink() + 'px',
                  width: distanceBC,
                  border: this.defineBorderSize('A') + ' solid ' + this.defineBorderColor('A'),
                  backgroundColor: this.defineBackColor('A'),
                }}
              ></div>
            </Tooltip>
          );
        } else {
          second = (
            <div
              id="partB"
              style={{
                position: 'absolute',
                zIndex: this.props.zIndex,
                top: yArrowBC,
                left: xArrowBC,
                transform: 'rotate(' + angleDegreeBC.toString() + 'deg)',
                height: this.defineSizeLink() + 'px',
                width: distanceBC,
                border: this.defineBorderSize('A') + ' solid ' + this.defineBorderColor('A'),
                backgroundColor: this.defineBackColor('A'),
              }}
            ></div>
          );
        }
        return (
          <a
            href={linkUrlOrientedLink}
            onClick={this.desactiveLink}
            style={{ cursor: this.defineCursor() }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {first}
            {second}
            <div
              id={'labelMainMetric' + this.props.id}
              style={{
                textDecoration: this.defineTextDecoration(),
                fontStyle: this.defineFontStyle(),
                fontWeight: this.defineFontWeight(),
                position: 'absolute',
                zIndex: 9999,
                top: yC + parseInt(this.props.labelAPositionY, 10) * inverseAxeY - this.labelSynchroY('A'),
                left: xC + parseInt(this.props.labelAPositionX, 10) - this.labelSynchroX('A'),
                backgroundColor: 'white',
                fontSize: this.props.sizePolice,
                color: this.defineColorTextLabel(),
                padding: '0',
              }}
            >
              {this.defineTextObject(this.props.valueMainMetricA)}
            </div>
          </a>
        );
      } else {
        let first: JSX.Element;
        if (valueTooltipMonodirectional) {
          first = (
            <Tooltip content={valueTooltipMonodirectional} placement={positionTooltipA}>
              <div
                id="link"
                style={{
                  position: 'absolute',
                  zIndex: this.props.zIndex,
                  top: yArrowAB,
                  left: xArrowAB,
                  transform: 'rotate(' + angleDegreeAB.toString() + 'deg)',
                  width: distanceAB,
                  height: this.defineSizeLink() + 'px',
                  border: this.defineBorderSize('A') + ' solid ' + this.defineBorderColor('A'),
                  backgroundColor: this.defineBackColor('A'),
                }}
              ></div>
            </Tooltip>
          );
        } else {
          first = (
            <div
              id="link"
              style={{
                position: 'absolute',
                zIndex: this.props.zIndex,
                top: yArrowAB,
                left: xArrowAB,
                transform: 'rotate(' + angleDegreeAB.toString() + 'deg)',
                width: distanceAB,
                height: this.defineSizeLink() + 'px',
                border: this.defineBorderSize('A') + ' solid ' + this.defineBorderColor('A'),
                backgroundColor: this.defineBackColor('A'),
              }}
            ></div>
          );
        }
        return (
          <a
            href={linkUrlOrientedLink}
            onClick={this.desactiveLink}
            style={{ cursor: this.defineCursor() }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {first}
            <div
              id={'labelMainMetric' + this.props.id}
              style={{
                textDecoration: this.defineTextDecoration(),
                fontStyle: this.defineFontStyle(),
                fontWeight: this.defineFontWeight(),
                position: 'absolute',
                zIndex: 9999,
                top: yMidAB + parseInt(this.props.labelAPositionY, 10) * inverseAxeY - this.labelSynchroY('A'),
                left: xMidAB + parseInt(this.props.labelAPositionX, 10) - this.labelSynchroX('A'),
                backgroundColor: 'white',
                fontSize: this.props.sizePolice,
                color: this.defineColorTextLabel(),
                padding: '0',
              }}
            >
              {this.defineTextObject(this.props.valueMainMetricA)}
            </div>
          </a>
        );
      }
    } else {
      return <div></div>;
    }
  }

  private desactiveLink = (event: any) => {
    // const inputFollowingLink: any = document.getElementById('followLink');
    // if (inputFollowingLink) {
    //   if (inputFollowingLink.defaultValue === '') {
    //     event.preventDefault();
    //   }
    // } else if (this.props.linkUrl.followLink === '') {
    //   event.preventDefault();
    // }
    if (this.props.linkUrl.followLink === '') {
      event.preventDefault();
    }
  };

  private defineCursor = (): string => {
    let result = 'pointer';
    // const inputFollowingLink: any = document.getElementById('followLink');
    // if (inputFollowingLink) {
    //   if (inputFollowingLink.defaultValue === '') {
    //     result = 'default';
    //   }
    // } else if (this.props.linkUrl.followLink === '') {
    //   result = 'default';
    // }
    if (this.props.linkUrl.followLink === '') {
      result = 'default';
    }
    return result;
  };

  private defineBackColor(link: string) {
    let colorBack = '';
    let seuil: LowerLimitClass[] = this.props.seuil;
    let valueMainMetric = 0;

    if (link === 'A') {
      valueMainMetric = parseInt(this.props.valueMainMetricA, 10);
    } else {
      valueMainMetric = parseInt(this.props.valueMainMetricB, 10);
    }

    if (this.props.traceBack) {
      if (!this.props.colorMode && this.props.seuil.length > 0) {
        if (seuil[0].backColor !== '') {
          colorBack = seuil[0].backColor;
        } else {
          colorBack = 'black';
        }
      } else {
        colorBack = 'black';
      }
    } else {
      colorBack = 'black';
    }

    let index = 0;
    if (this.props.colorMode && this.props.seuil.length > 0) {
      seuil.forEach((level: LowerLimitClass) => {
        let lowerLimitMin = 0;
        if (level.lowerLimitMin === '') {
          lowerLimitMin = 0;
        } else {
          lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
        }
        if (lowerLimitMin === 0) {
          if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
            colorBack = level.backColor;
          }
        } else if (this.props.seuil.length === index + 1) {
          if (valueMainMetric > lowerLimitMin) {
            colorBack = level.backColor;
          }
        } else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
          colorBack = level.backColor;
        }
        index++;
      });
    }

    return colorBack;
  }

  private defineBorderColor(link: string) {
    let colorBorder = '';
    let seuil: LowerLimitClass[] = this.props.seuil;
    let valueMainMetric = 0;

    if (link === 'A') {
      valueMainMetric = parseInt(this.props.valueMainMetricA, 10);
    } else {
      valueMainMetric = parseInt(this.props.valueMainMetricB, 10);
    }

    if (this.props.traceBorder) {
      if (!this.props.colorMode && this.props.seuil.length > 0) {
        if (seuil[0].borderColor !== '') {
          colorBorder = seuil[0].borderColor;
        } else {
          colorBorder = 'black';
        }
      } else {
        colorBorder = 'black';
      }
    } else {
      colorBorder = 'black';
    }

    let index = 0;
    if (this.props.colorMode && this.props.seuil.length > 0) {
      seuil.forEach((level: LowerLimitClass) => {
        let lowerLimitMin = 0;
        if (level.lowerLimitMin === '') {
          lowerLimitMin = 0;
        } else {
          lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
        }
        if (lowerLimitMin === 0) {
          if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
            colorBorder = level.borderColor;
          }
        } else if (this.props.seuil.length === index + 1) {
          if (valueMainMetric > lowerLimitMin) {
            colorBorder = level.borderColor;
          }
        } else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
          colorBorder = level.borderColor;
        }
        index++;
      });
    }
    return colorBorder;
  }

  defineBorderSize(link: string) {
    let sizeBorder = '';
    let seuil: LowerLimitClass[] = this.props.seuil;
    let valueMainMetric = 0;

    if (link === 'A') {
      valueMainMetric = parseInt(this.props.valueMainMetricA, 10);
    } else {
      valueMainMetric = parseInt(this.props.valueMainMetricB, 10);
    }

    if (this.props.traceBorder) {
      if (!this.props.colorMode && this.props.seuil.length > 0) {
        if (seuil[0].sizeBorder !== '') {
          sizeBorder = seuil[0].sizeBorder;
        } else {
          sizeBorder = '0';
        }
      } else {
        sizeBorder = '0';
      }
    } else {
      sizeBorder = '0';
    }

    let index = 0;
    if (this.props.colorMode && this.props.seuil.length > 0) {
      seuil.forEach((level: LowerLimitClass) => {
        let lowerLimitMin = 0;
        if (level.lowerLimitMin === '') {
          lowerLimitMin = 0;
        } else {
          lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
        }
        if (lowerLimitMin === 0) {
          if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
            sizeBorder = level.sizeBorder;
          }
        } else if (this.props.seuil.length === index + 1) {
          if (valueMainMetric > lowerLimitMin) {
            sizeBorder = level.sizeBorder;
          }
        } else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
          sizeBorder = level.sizeBorder;
        }
        index++;
      });
    }
    return sizeBorder;
  }

  private defineMainMetric = (mainMetric: string): string => {
    let result = '';
    const unit: string = this.props.textObject.valueGenerateObjectText.unit;
    const decimal: string = this.props.textObject.valueGenerateObjectText.numericFormatElement;
    const roundValue: number = parseInt(decimal, 10) || 1;

    if (decimal !== '') {
      result = parseFloat(mainMetric).toPrecision(roundValue) + ' ' + unit;
    } else {
      result = mainMetric + ' ' + unit;
    }
    return result;
  };

  private defineAuxMetric = (auxMetric: string): string => {
    let result = '';
    const unit: string = this.props.textObject.generateAuxiliaryElement.unit;
    const decimal: string = this.props.textObject.generateAuxiliaryElement.numericFormatElement;
    const roundValue: number = parseInt(decimal, 10) || 1;

    if (decimal !== '') {
      result = parseFloat(auxMetric).toPrecision(roundValue) + ' ' + unit;
    } else {
      result = auxMetric + ' ' + unit;
    }
    return result;
  };

  private defineTextObject = (mainMetric: string): JSX.Element => {
    let htmlTextObject: JSX.Element[] = [];
    let htmlMainMetric: JSX.Element[] = [];
    const dislayTextObjectInTooltip: boolean = this.props.textObject.isTextTooltip;
    const textColorTextObject: string = this.props.textObject.colorText;
    const backColoTextObject: string = this.props.textObject.colorBack;
    const displayMainMetric: boolean = this.props.textObject.generateObjectText;
    const displayMainMetricInTooltip: boolean = this.props.textObject.valueGenerateObjectText.displayObjectInTooltip;
    const addTextColorMainMetric: boolean = this.props.textObject.valueGenerateObjectText.addColorTextElement;
    const addBackColorMainMetric: boolean = this.props.textObject.valueGenerateObjectText.addColorBackElement;
    const textColorMainMetric: string = this.props.textObject.valueGenerateObjectText.colorTextElement;
    const backColorMainMetric: string = this.props.textObject.valueGenerateObjectText.colorBackElement;
    const legendMainMetric: string = this.props.textObject.valueGenerateObjectText.legendElement;

    const styleLabel = {
      color: textColorTextObject,
      backgroundColor: backColoTextObject,
      textAlign: 'center',
      margin: 0,
      padding: '0 5px',
    } as CSSProperties;

    const styleMainMetric = {
      color: addTextColorMainMetric ? textColorMainMetric : textColorTextObject,
      margin: 0,
      padding: 0,
      whiteSpace: 'nowrap',
    } as CSSProperties;

    if (!dislayTextObjectInTooltip) {
      htmlTextObject.push(
        <p key={'contentTextObject1' + this.props.name} style={styleLabel}>
          {this.props.label || this.props.name.toUpperCase()}
        </p>
      );
    }
    if (displayMainMetric) {
      if (!displayMainMetricInTooltip) {
        if (legendMainMetric) {
          htmlMainMetric.push(
            <p key={'contentTextObject2' + this.props.name} style={styleMainMetric}>
              {legendMainMetric}
            </p>
          );
        }
        // Condition Display NaN none Oriented Link
        htmlMainMetric.push(
          <p key={'contentTextObject3' + this.props.name} style={styleMainMetric}>
            {!isNaN(parseFloat(this.defineMainMetric(mainMetric))) && this.defineMainMetric(mainMetric)}
          </p>
        );
      }
    }

    let styleMainDiv = {
      backgroundColor: backColoTextObject,
      border: '1px solid black',
    } as CSSProperties;

    if (!displayMainMetric || (displayMainMetric && displayMainMetricInTooltip)) {
      styleMainDiv = {
        backgroundColor: backColoTextObject,
      };
    }

    return (
      <div style={styleMainDiv}>
        {htmlTextObject}
        <div style={{ backgroundColor: addBackColorMainMetric ? backColorMainMetric : backColoTextObject, padding: '0 5px' }}>{htmlMainMetric}</div>
      </div>
    );
  };

  private defineHtmlLinkTooltip = (): JSX.Element => {
    let result: JSX.Element = <div></div>;
    if (this.props.linkUrl.hoveringTooltipText !== '') {
      result = (
        <a href={this.props.linkUrl.hoveringTooltipLink} target="_blank" rel="noopener noreferrer">
          {this.props.linkUrl.hoveringTooltipText}
        </a>
      );
    }
    return result;
  };

  private defineValueTooptip = (typeLink: string, link?: string): JSX.Element | null => {
    const contentTooltip: JSX.Element[] = [];
    const contentTooltipMainMetric: JSX.Element[] = [];
    const contentTooltipAuxMetric: JSX.Element[] = [];
    const contentTooltipMetaData: JSX.Element[] = [];
    const valueMainMetricA = this.props.valueMainMetricA;
    const valueMainMetricB = this.props.valueMainMetricB;
    const refMainMetricA = this.props.refMainMetricA;
    const refMainMetricB = this.props.refMainMetricB;
    const dislayTextObjectInTooltip: boolean = this.props.textObject.isTextTooltip;
    const textColorTextObject: string = this.props.textObject.colorText;
    const backColoTextObject: string = this.props.textObject.colorBack;
    const displayMainMetric: boolean = this.props.textObject.generateObjectText;
    const displayMainMetricInTooltip: boolean = this.props.textObject.valueGenerateObjectText.displayObjectInTooltip;
    const addTextColorMainMetric: boolean = this.props.textObject.valueGenerateObjectText.addColorTextElement;
    const addBackColorMainMetric: boolean = this.props.textObject.valueGenerateObjectText.addColorBackElement;
    const textColorMainMetric: string = this.props.textObject.valueGenerateObjectText.colorTextElement;
    const backColorMainMetric: string = this.props.textObject.valueGenerateObjectText.colorBackElement;
    const legendMainMetric: string = this.props.textObject.valueGenerateObjectText.legendElement;
    const displayAuxMetricInTooltip: boolean = this.props.textObject.generateAuxiliaryElement.displayObjectInTooltip;
    const addTextColorAuxMetric: boolean = this.props.textObject.generateAuxiliaryElement.addColorTextElement;
    const addBackColorAuxMetric: boolean = this.props.textObject.generateAuxiliaryElement.addColorBackElement;
    const textColorAuxMetric: string = this.props.textObject.generateAuxiliaryElement.colorTextElement;
    const backColorAuxMetric: string = this.props.textObject.generateAuxiliaryElement.colorBackElement;
    const legendAuxMetric: string = this.props.textObject.generateAuxiliaryElement.legendElement;

    const styleMainTitle = {
      fontFamily: this.props.police,
      fontSize: '11px',
      marginBottom: '0px',
      textAlign: 'center',
      color: textColorTextObject,
      backgroundColor: backColoTextObject,
    } as React.CSSProperties;

    const styleTitleMainMetric = {
      fontFamily: this.props.police,
      fontSize: '10px',
      marginTop: '5px',
      marginBottom: '0px',
      color: addTextColorMainMetric ? textColorMainMetric : textColorTextObject,
    } as React.CSSProperties;

    const styleTitleAuxMetric = {
      fontFamily: this.props.police,
      fontSize: '10px',
      marginTop: '5px',
      marginBottom: '0px',
      color: addTextColorAuxMetric ? textColorAuxMetric : textColorTextObject,
    } as React.CSSProperties;

    const styleTitle2MainMetric = {
      fontFamily: this.props.police,
      fontSize: '10px',
      marginTop: '5px',
      marginLeft: '5px',
      marginBottom: '0px',
      color: addTextColorMainMetric ? textColorMainMetric : textColorTextObject,
    } as React.CSSProperties;

    const styleTitle2AuxMetric = {
      fontFamily: this.props.police,
      fontSize: '10px',
      marginTop: '5px',
      marginLeft: '5px',
      marginBottom: '0px',
      color: addTextColorAuxMetric ? textColorAuxMetric : textColorTextObject,
    } as React.CSSProperties;

    const styleTitleMetaData = {
      fontFamily: this.props.police,
      fontSize: '10px',
      marginTop: '5px',
      marginBottom: '0px',
      color: 'white',
    } as React.CSSProperties;

    const styleContentMainMetrics = {
      fontFamily: this.props.police,
      fontSize: '9px',
      marginLeft: '10px',
      marginBottom: '0px',
      color: addTextColorMainMetric ? textColorMainMetric : textColorTextObject,
    } as React.CSSProperties;

    const styleContentAuxMetrics = {
      fontFamily: this.props.police,
      fontSize: '9px',
      marginLeft: '10px',
      marginBottom: '0px',
      color: addTextColorAuxMetric ? textColorAuxMetric : textColorTextObject,
    } as React.CSSProperties;

    if (dislayTextObjectInTooltip) {
      contentTooltip.push(
        <p key={'contentTooltip1' + this.props.name} style={styleMainTitle}>
          {this.props.label || this.props.name.toUpperCase()}
        </p>
      );
    }

    if (displayMainMetric) {
      if (displayMainMetricInTooltip) {
        if (legendMainMetric) {
          contentTooltipMainMetric.push(<p style={styleTitleMainMetric}>{legendMainMetric}</p>);
        }
        contentTooltipMainMetric.push(
          <p key={'contentTooltip1' + this.props.name} style={styleTitleMainMetric}>
            Main Metric
          </p>
        );

        if (typeLink === 'bidirectional') {
          if (link === 'A') {
            contentTooltipMainMetric.push(
              <p key={'contentTooltip2' + this.props.name} style={styleTitle2MainMetric}>
                + Link A
              </p>
            );
            contentTooltipMainMetric.push(
              <p key={'contentTooltip3' + this.props.name} style={styleContentMainMetrics}>
                {' '}
                - Reference : {refMainMetricA}
              </p>
            );
            contentTooltipMainMetric.push(
              <p key={'contentTooltip4' + this.props.name} style={styleContentMainMetrics}>
                {' '}
                - Value : {this.defineMainMetric(valueMainMetricA)}
              </p>
            );
          } else {
            contentTooltipMainMetric.push(
              <p key={'contentTooltip5' + this.props.name} style={styleTitle2MainMetric}>
                + Link B
              </p>
            );
            contentTooltipMainMetric.push(
              <p key={'contentTooltip6' + this.props.name} style={styleContentMainMetrics}>
                {' '}
                - Reference : {refMainMetricB}
              </p>
            );
            contentTooltipMainMetric.push(
              <p key={'contentTooltip7' + this.props.name} style={styleContentMainMetrics}>
                {' '}
                - Value : {this.defineMainMetric(valueMainMetricB)}
              </p>
            );
          }
        } else if (typeLink === 'monodirectional') {
          contentTooltipMainMetric.push(
            <p key={'contentTooltip8' + this.props.name} style={styleContentMainMetrics}>
              {' '}
              - Reference : {refMainMetricA}
            </p>
          );
          contentTooltipMainMetric.push(
            <p key={'contentTooltip9' + this.props.name} style={styleContentMainMetrics}>
              {' '}
              - Value : {this.defineMainMetric(valueMainMetricA)}
            </p>
          );
        }
      }
    }

    if (displayAuxMetricInTooltip) {
      if (legendAuxMetric) {
        contentTooltipAuxMetric.push(<p style={styleTitleAuxMetric}>{legendAuxMetric}</p>);
      }
      if (typeLink === 'bidirectional') {
        if (link === 'A') {
          if (this.props.auxiliaryMetrics.length > 0) {
            contentTooltipAuxMetric.push(
              <p key={'contentTooltip10' + this.props.name} style={styleTitleAuxMetric}>
                Auxiliary Metric
              </p>
            );
            let index = 1;
            this.props.auxiliaryMetrics.forEach((metric) => {
              contentTooltipAuxMetric.push(
                <p key={index.toString() + 'contentTooltip11' + this.props.name} style={styleTitle2AuxMetric}>
                  + Metric {index}
                </p>
              );
              contentTooltipAuxMetric.push(
                <p key={index.toString() + 'contentTooltip12' + this.props.name} style={styleContentAuxMetrics}>
                  - Reference : {metric.refId}
                </p>
              );
              contentTooltipAuxMetric.push(
                <p key={index.toString() + 'contentTooltip13' + this.props.name} style={styleContentAuxMetrics}>
                  - Value :{' '}
                  {!isNaN(parseFloat(this.defineAuxMetric(this.props.valuesAuxiliaryMetrics[index - 1]))) &&
                    this.defineAuxMetric(this.props.valuesAuxiliaryMetrics[index - 1])}
                </p>
              );
              contentTooltipAuxMetric.push(
                <p key={index.toString() + 'contentTooltip14' + this.props.name} style={styleContentAuxMetrics}>
                  - Key : {metric.key}
                </p>
              );
              contentTooltipAuxMetric.push(
                <p key={index.toString() + 'contentTooltip15' + this.props.name} style={styleContentAuxMetrics}>
                  - KeyValue : {metric.keyValue}
                </p>
              );
              contentTooltipAuxMetric.push(
                <p key={index.toString() + 'contentTooltip16' + this.props.name} style={styleContentAuxMetrics}>
                  - Type : {metric.manageValue}
                </p>
              );
              index++;
            });
          }
        } else {
          if (this.props.auxiliaryMetricsB.length > 0) {
            contentTooltipAuxMetric.push(
              <p key={'contentTooltip17' + this.props.name} style={styleTitleAuxMetric}>
                Auxiliary Metric
              </p>
            );
            let index = 1;
            this.props.auxiliaryMetricsB.forEach((metricB) => {
              contentTooltipAuxMetric.push(
                <p key={index.toString() + 'contentTooltip18' + this.props.name} style={styleTitle2AuxMetric}>
                  + Metric {index}
                </p>
              );
              contentTooltipAuxMetric.push(
                <p key={index.toString() + 'contentTooltip19' + this.props.name} style={styleContentAuxMetrics}>
                  - Reference : {metricB.refId}
                </p>
              );
              contentTooltipAuxMetric.push(
                <p key={index.toString() + 'contentTooltip20' + this.props.name} style={styleContentAuxMetrics}>
                  - Value :{' '}
                  {!isNaN(parseFloat(this.defineAuxMetric(this.props.valuesAuxiliaryMetricsB[index - 1]))) &&
                    this.defineAuxMetric(this.props.valuesAuxiliaryMetricsB[index - 1])}
                </p>
              );
              contentTooltipAuxMetric.push(
                <p key={index.toString() + 'contentTooltip21' + this.props.name} style={styleContentAuxMetrics}>
                  - Key : {metricB.key}
                </p>
              );
              contentTooltipAuxMetric.push(
                <p key={index.toString() + 'contentTooltip22' + this.props.name} style={styleContentAuxMetrics}>
                  - KeyValue : {metricB.keyValue}
                </p>
              );
              contentTooltipAuxMetric.push(
                <p key={index.toString() + 'contentTooltip23' + this.props.name} style={styleContentAuxMetrics}>
                  - Type : {metricB.manageValue}
                </p>
              );
              index++;
            });
          }
        }
      } else if (typeLink === 'monodirectional') {
        if (this.props.auxiliaryMetrics.length > 0) {
          contentTooltipAuxMetric.push(
            <p key={'contentTooltip24' + this.props.name} style={styleTitleAuxMetric}>
              Auxiliary Metric
            </p>
          );
          let index = 1;
          this.props.auxiliaryMetrics.forEach((metric) => {
            contentTooltipAuxMetric.push(
              <p key={index.toString() + 'contentTooltip25' + this.props.name} style={styleTitle2AuxMetric}>
                + Metric {index}
              </p>
            );
            contentTooltipAuxMetric.push(
              <p key={index.toString() + 'contentTooltip26' + this.props.name} style={styleContentAuxMetrics}>
                - Reference : {metric.refId}
              </p>
            );
            contentTooltipAuxMetric.push(
              <p key={index.toString() + 'contentTooltip27' + this.props.name} style={styleContentAuxMetrics}>
                - Value :{' '}
                {!isNaN(parseFloat(this.defineAuxMetric(this.props.valuesAuxiliaryMetrics[index - 1]))) &&
                  this.defineAuxMetric(this.props.valuesAuxiliaryMetrics[index - 1])}
              </p>
            );
            contentTooltipAuxMetric.push(
              <p key={index.toString() + 'contentTooltip28' + this.props.name} style={styleContentAuxMetrics}>
                - Key : {metric.key}
              </p>
            );
            contentTooltipAuxMetric.push(
              <p key={index.toString() + 'contentTooltip29' + this.props.name} style={styleContentAuxMetrics}>
                - KeyValue : {metric.keyValue}
              </p>
            );
            contentTooltipAuxMetric.push(
              <p key={index.toString() + 'contentTooltip30' + this.props.name} style={styleContentAuxMetrics}>
                - Type : {metric.manageValue}
              </p>
            );
            index++;
          });
        }
      }
    }

    if (this.props.metaData.length !== 0) {
      contentTooltipMetaData.push(
        <p key={'ContentTooltip31' + this.props.name} style={styleTitleMetaData}>
          Metadata
        </p>
      );
      this.props.metaData.forEach((oneMetaData, index) => {
        const styleContentMetaData = {
          color: oneMetaData.obj.colorText,
          backgroundColor: oneMetaData.obj.colorBack,
          fontWeight: oneMetaData.obj.style.bold ? 'bold' : 'normal',
          fontStyle: oneMetaData.obj.style.italic ? 'italic' : 'normal',
          textDecoration: oneMetaData.obj.style.underline ? 'underline' : 'none',
          fontFamily: this.props.police,
          fontSize: '9px',
          marginLeft: '10px',
          marginBottom: '0px',
        } as CSSProperties;
        contentTooltipMetaData.push(
          <p key={index + 'ContentTooltip32' + this.props.name} style={styleContentMetaData}>
            - {oneMetaData.meta}
          </p>
        );
      });
    }

    if (
      contentTooltip.length === 0 &&
      contentTooltipAuxMetric.length === 0 &&
      contentTooltipMainMetric.length === 0 &&
      contentTooltipMetaData.length === 0 &&
      !this.props.linkUrl.hoveringTooltipText
    ) {
      return null;
    }

    return (
      <div style={{ border: '1px solid black', padding: 0 }}>
        {contentTooltip}
        <div style={{ backgroundColor: addBackColorMainMetric ? backColorMainMetric : backColoTextObject, padding: '0 5px' }}>
          {contentTooltipMainMetric}
        </div>
        <div style={{ backgroundColor: addBackColorAuxMetric ? backColorAuxMetric : backColoTextObject, padding: '0 5px' }}>
          {contentTooltipAuxMetric}
        </div>
        <div style={{ padding: '0 5px' }}>{contentTooltipMetaData}</div>
        {this.defineHtmlLinkTooltip()}
      </div>
    );
  };

  private defineTextDecoration = (): string => {
    const mainStyle: Style = this.props.textObject.style;
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

  private defineFontStyle = (): string => {
    const mainStyle: Style = this.props.textObject.style;
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

  private defineFontWeight = (): any => {
    const mainStyle: Style = this.props.textObject.style;
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

  private defineColorTextLabel = () => {
    let result = '';
    if (this.props.textObject.colorText) {
      result = this.props.textObject.colorText;
    } else {
      result = 'black';
    }
    return result;
  };

  private defineSizeLink = (): string => {
    let result = '';
    if (this.props.size) {
      const size: string = this.props.size || '';
      result = size;
    } else {
      result = '2';
    }
    return result;
  };

  render() {
    const xCoordinateA: number = this.synchroLinkX(parseInt(this.props.positionXADefault, 10), 'xA');
    const yCoordinateA: number = this.synchroLinkY(parseInt(this.props.positionYADefault, 10), 'yA');
    const xCoordinateB: number = this.synchroLinkX(parseInt(this.props.positionXBDefault, 10), 'xB');
    const yCoordinateB: number = this.synchroLinkY(parseInt(this.props.positionYBDefault, 10), 'yB');
    const xCoordinateC: number = this.synchroLinkX(parseInt(this.props.positionXCDefault, 10) || 0, 'xC');
    const yCoordinateC: number = this.synchroLinkY(parseInt(this.props.positionYCDefault, 10) || 0, 'yC');
    const orientationLink: string = this.props.orientationLink;

    return <div>{this.drawLink(xCoordinateA, yCoordinateA, xCoordinateB, yCoordinateB, xCoordinateC, yCoordinateC, orientationLink)}</div>;
  }
}
