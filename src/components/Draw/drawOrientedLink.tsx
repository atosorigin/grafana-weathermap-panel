import React, { CSSProperties } from 'react';
import { SelectableValue, PanelEditorProps } from '@grafana/data';
import { Coord4D } from 'Models/RegionClass';
import { Tooltip } from '@grafana/ui';
import { SimpleOptions, Metric } from 'types';
import { TextObject } from 'Models/TextObjectClass';
import { LowerLimitClass } from 'Models/LowerLimitClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import { PointClass } from 'Models/PointClass';
import { LinkURLClass } from 'Models/LinkURLClass';
import { Style } from 'components/Parametrage/styleComponent';

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
  traceBorder: boolean;
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
  size: SelectableValue<string>;
}

interface State {}

export default class DrawOrientedLink extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  private synchroLinkX(positionX: number): number {
    const initialSpace: Coord4D = this.props.options.coordinateSpaceInitial.coordinate;
    const xMin: number = parseInt(initialSpace.xMin, 10);
    const xMinPx: number = (xMin + 100) * (this.props.widthImage / 200);
    const xMax: number = parseInt(initialSpace.xMax, 10);
    const xMaxPx: number = (xMax + 100) * (this.props.widthImage / 200);
    const widthInitialSpace: number = xMaxPx - xMinPx;
    const x: number = xMinPx + (positionX * (widthInitialSpace / 200) + widthInitialSpace / 2);
    return x;
  }

  private synchroLinkY(positionY: number): number {
    const initialSpace: Coord4D = this.props.options.coordinateSpaceInitial.coordinate;
    const yMin: number = parseInt(initialSpace.yMin, 10);
    const yMinPx: number = (yMin + 100) * (this.props.heightImage / 200);
    const yMax: number = parseInt(initialSpace.yMax, 10);
    const yMaxPx: number = (yMax + 100) * (this.props.heightImage / 200);
    const heightInitialSpace: number = yMaxPx - yMinPx;
    const y: number =
      this.defineValueToAdaptPositionToInitialSpace(yMinPx, yMaxPx) + (heightInitialSpace / 2 - positionY * (heightInitialSpace / 200));
    return y;
  }

  private defineValueToAdaptPositionToInitialSpace = (yMinPx: number, yMaxPx: number): number => {
    let valueToAdaptPositionToInitialSpace = 0;
    if (yMaxPx > yMinPx) {
      valueToAdaptPositionToInitialSpace = this.props.heightImage - yMaxPx;
    } else {
      valueToAdaptPositionToInitialSpace = this.props.heightImage - yMinPx;
    }
    return valueToAdaptPositionToInitialSpace;
  };

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
    arrayOrientedLink.forEach(orientedLink => {
      if (this.props.name !== orientedLink.name) {
        if (this.props.associateRegionIn !== '' && this.props.associateRegionOut !== '') {
          //console.log('//1');
          if (this.props.associateRegionIn === orientedLink.regionIn || this.props.associateRegionIn === orientedLink.regionOut) {
            //console.log('//1.1');
            if (this.props.associateRegionOut === orientedLink.regionIn || this.props.associateRegionOut === orientedLink.regionOut) {
              //console.log('//1.2');
              listParallelOrientedLinks.push(orientedLink.id);
            }
          }
        } else if (this.props.associatePointIn !== '' && this.props.associatePointOut !== '') {
          //console.log('//2');
          if (this.props.associatePointIn === orientedLink.pointIn || this.props.associatePointIn === orientedLink.pointOut) {
            //console.log('//2.1');
            if (this.props.associatePointOut === orientedLink.pointIn || this.props.associatePointOut === orientedLink.pointOut) {
              //console.log('//2.2');
              listParallelOrientedLinks.push(orientedLink.id);
            }
          }
        } else if (this.props.associateRegionIn !== '' && this.props.associatePointOut !== '') {
          //console.log('//3');
          if (this.props.associateRegionIn === orientedLink.regionIn || this.props.associateRegionIn === orientedLink.regionOut) {
            //console.log('//3.1');
            if (this.props.associatePointOut === orientedLink.pointOut || this.props.associatePointOut === orientedLink.pointIn) {
              //console.log('//3.2');
              listParallelOrientedLinks.push(orientedLink.id);
            }
          }
        } else if (this.props.associatePointIn !== '' && this.props.associateRegionOut !== '') {
          //console.log('//4');
          if (this.props.associatePointIn === orientedLink.pointIn || this.props.associatePointIn === orientedLink.pointOut) {
            //console.log('//4.1');
            if (this.props.associateRegionOut === orientedLink.regionOut || this.props.associateRegionOut === orientedLink.regionIn) {
              //console.log('//4.2');
              listParallelOrientedLinks.push(orientedLink.id);
            }
          }
        }
      }
    });
    const listParallelOrientedLinkSorted: number[] = listParallelOrientedLinks.sort((a, b) => a - b);
    //console.log(listParallelOrientedLinkSorted);
    return listParallelOrientedLinkSorted;
  };

  private ifMultiLinkWithRegionDefineX = (isIn: boolean, idMultiLink: number): number => {
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

    if (this.props.associatePointIn !== '') {
      arrayPoints.forEach(point => {
        let name: string = point.label || point.name;
        if (name === this.props.associatePointIn) {
          xMinIn = parseInt(point.positionShapeX, 10);
          xMaxIn = parseInt(point.positionShapeX, 10);
          yMinIn = parseInt(point.positionShapeY, 10);
          yMaxIn = parseInt(point.positionShapeY, 10);
        }
      });

      arrayRegions.forEach(region => {
        if (region.label === this.props.associateRegionOut) {
          xMinOut = parseInt(region.coords.xMin, 10);
          xMaxOut = parseInt(region.coords.xMax, 10);
          yMinOut = parseInt(region.coords.yMin, 10);
          yMaxOut = parseInt(region.coords.yMax, 10);
        }
      });

      xMidIn = xMinIn;
      xMidOut = (xMinOut + xMaxOut) / 2;
      yMidIn = yMinIn;
      yMidOut = (yMinOut + yMaxOut) / 2;
    } else if (this.props.associatePointOut !== '') {
      console.log(arrayRegions);
      arrayRegions.forEach(region => {
        if (region.label === this.props.associateRegionIn) {
          xMinIn = parseInt(region.coords.xMin, 10);
          xMaxIn = parseInt(region.coords.xMax, 10);
          yMinIn = parseInt(region.coords.yMin, 10);
          yMaxIn = parseInt(region.coords.yMax, 10);
        }
      });

      arrayPoints.forEach(point => {
        let name: string = point.label || point.name;
        if (name === this.props.associatePointOut) {
          xMinOut = parseInt(point.positionShapeX, 10);
          xMaxOut = parseInt(point.positionShapeX, 10);
          yMinOut = parseInt(point.positionShapeY, 10);
          yMaxOut = parseInt(point.positionShapeY, 10);
        }
      });

      xMidIn = (xMinIn + xMaxIn) / 2;
      xMidOut = xMinOut;
      yMidIn = (yMinIn + yMaxIn) / 2;
      yMidOut = yMinOut;
    } else if (this.props.associatePointIn === '' && this.props.associateRegionIn === '') {
      arrayRegions.forEach(region => {
        if (region.label === this.props.associateRegionOut) {
          xMinOut = parseInt(region.coords.xMin, 10);
          xMaxOut = parseInt(region.coords.xMax, 10);
          yMinOut = parseInt(region.coords.yMin, 10);
          yMaxOut = parseInt(region.coords.yMax, 10);
        }
      });
      xMinIn = parseInt(this.props.pointAPositionX, 10);
      xMaxIn = parseInt(this.props.pointAPositionX, 10);
      yMinIn = parseInt(this.props.pointAPositionY, 10);
      yMaxIn = parseInt(this.props.pointAPositionY, 10);
      xMidIn = xMinIn;
      xMidOut = (xMinOut + xMaxOut) / 2;
      yMidIn = yMinIn;
      yMidOut = (yMinOut + yMaxOut) / 2;
    } else if (this.props.associatePointOut === '' && this.props.associateRegionOut === '') {
      arrayRegions.forEach(region => {
        if (region.label === this.props.associateRegionIn) {
          xMinIn = parseInt(region.coords.xMin, 10);
          xMaxIn = parseInt(region.coords.xMax, 10);
          yMinIn = parseInt(region.coords.yMin, 10);
          yMaxIn = parseInt(region.coords.yMax, 10);
        }
      });

      xMinOut = parseInt(this.props.pointBPositionX, 10);
      xMaxOut = parseInt(this.props.pointBPositionX, 10);
      yMinOut = parseInt(this.props.pointBPositionY, 10);
      yMaxOut = parseInt(this.props.pointBPositionY, 10);
      xMidIn = (xMinIn + xMaxIn) / 2;
      xMidOut = xMinOut;
      yMidIn = (yMinIn + yMaxIn) / 2;
      yMidOut = yMinOut;
    } else {
      console.log(arrayRegions);
      arrayRegions.forEach(region => {
        if (region.label === this.props.associateRegionIn) {
          xMinIn = parseInt(region.coords.xMin, 10);
          xMaxIn = parseInt(region.coords.xMax, 10);
          yMinIn = parseInt(region.coords.yMin, 10);
          yMaxIn = parseInt(region.coords.yMax, 10);
        }

        if (region.label === this.props.associateRegionOut) {
          xMinOut = parseInt(region.coords.xMin, 10);
          xMaxOut = parseInt(region.coords.xMax, 10);
          yMinOut = parseInt(region.coords.yMin, 10);
          yMaxOut = parseInt(region.coords.yMax, 10);
        }
      });

      xMidIn = (xMinIn + xMaxIn) / 2;
      xMidOut = (xMinOut + xMaxOut) / 2;
      yMidIn = (yMinIn + yMaxIn) / 2;
      yMidOut = (yMinOut + yMaxOut) / 2;
    }

    if (isIn) {
      if (idMultiLink === 0) {
        if (yMidIn > yMidOut) {
          if (xMidIn > xMidOut) {
            console.log('x1');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMaxIn;
            } else {
              xResult = xMinIn;
            }
          } else if (xMidIn < xMidOut) {
            console.log('x2');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMinIn;
            } else {
              xResult = xMaxIn;
            }
          } else if (xMidIn === xMidOut) {
            console.log('x3');
            xResult = xMinIn;
          }
        } else if (yMidIn < yMidOut) {
          if (xMidIn > xMidOut) {
            console.log('x4');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMinIn;
            } else {
              xResult = xMaxIn;
            }
          } else if (xMidIn < xMidOut) {
            console.log('x5');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMaxIn;
            } else {
              xResult = xMinIn;
            }
          } else if (xMidIn === xMidOut) {
            console.log('x6');
            xResult = xMinIn;
          }
        } else if (yMidIn === yMidOut) {
          if (xMidIn > xMidOut) {
            console.log('x7');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMaxIn;
            } else {
              xResult = xMinIn;
            }
          } else if (xMidIn < xMidOut) {
            console.log('x8');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMinIn;
            } else {
              xResult = xMaxIn;
            }
          } else if (xMidIn === xMidOut) {
            console.log('x9');
            xResult = xMinIn;
          }
        }
      } else if (idMultiLink === 1) {
        if (yMidIn > yMidOut) {
          if (xMidIn > xMidOut) {
            console.log('x10');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMinIn;
            } else {
              xResult = xMaxIn;
            }
          } else if (xMidIn < xMidOut) {
            console.log('x11');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMaxIn;
            } else {
              xResult = xMinIn;
            }
          } else if (xMidIn === xMidOut) {
            console.log('x12');
            xResult = xMaxIn;
          }
        } else if (yMidIn < yMidOut) {
          if (xMidIn > xMidOut) {
            console.log('x13');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMaxIn;
            } else {
              xResult = xMinIn;
            }
          } else if (xMidIn < xMidOut) {
            console.log('x14');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMinIn;
            } else {
              xResult = xMaxIn;
            }
          } else if (xMidIn === xMidOut) {
            console.log('x15');
            xResult = xMaxIn;
          }
        } else if (yMidIn === yMidOut) {
          if (xMidIn > xMidOut) {
            console.log('x16');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMaxIn;
            } else {
              xResult = xMinIn;
            }
          } else if (xMidIn < xMidOut) {
            console.log('x17');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMinIn;
            } else {
              xResult = xMaxIn;
            }
          } else if (xMidIn === xMidOut) {
            console.log('x18');
            xResult = xMinIn;
          }
        }
      } else if (idMultiLink === 2) {
        if (yMidIn > yMidOut) {
          if ((xMidOut > xMinIn && xMidOut < xMaxIn) || (xMidOut < xMinIn && xMidOut > xMaxIn)) {
            console.log('x19');
            xResult = (xMinIn + xMaxIn) / 2;
          } else if (xMidIn > xMidOut) {
            console.log('x20');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMaxIn;
            } else {
              xResult = xMinIn;
            }
          } else if (xMidIn < xMidOut) {
            console.log('x21');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMinIn;
            } else {
              xResult = xMaxIn;
            }
          } else if (xMidIn === xMidOut) {
            console.log('x22');
            xResult = (xMinIn + xMaxIn) / 2;
          }
        } else if (yMidIn < yMidOut) {
          if ((xMidOut > xMinIn && xMidOut < xMaxIn) || (xMidOut < xMinIn && xMidOut > xMaxIn)) {
            console.log('x23');
            xResult = (xMinIn + xMaxIn) / 2;
          } else if (xMidIn > xMidOut) {
            console.log('x24');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMaxIn;
            } else {
              xResult = xMinIn;
            }
          } else if (xMidIn < xMidOut) {
            console.log('x25');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMinIn;
            } else {
              xResult = xMaxIn;
            }
          } else if (xMidIn === xMidOut) {
            console.log('x26');
            xResult = (xMinIn + xMaxIn) / 2;
          }
        } else if (yMidIn === yMidOut) {
          if ((xMidOut > xMinIn && xMidOut < xMaxIn) || (xMidOut < xMinIn && xMidOut > xMaxIn)) {
            console.log('x27');
            xResult = (xMinIn + xMaxIn) / 2;
          } else if (xMidIn > xMidOut) {
            console.log('x28');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMaxIn;
            } else {
              xResult = xMinIn;
            }
          } else if (xMidIn < xMidOut) {
            console.log('x29');
            if (xMinIn < 0 && xMaxIn < 0) {
              xResult = xMinIn;
            } else {
              xResult = xMaxIn;
            }
          } else if (xMidIn === xMidOut) {
            console.log('x30');
            xResult = xMinIn;
          }
        }
      }
    } else {
      if (idMultiLink === 0) {
        if (yMidIn > yMidOut) {
          console.log('x31');
          if (xMidIn > xMidOut) {
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMaxOut;
            } else {
              xResult = xMinOut;
            }
          } else if (xMidIn < xMidOut) {
            console.log('x32');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMinOut;
            } else {
              xResult = xMaxOut;
            }
          } else if (xMidIn === xMidOut) {
            console.log('x33');
            xResult = xMinOut;
          }
        } else if (yMidIn < yMidOut) {
          if (xMidIn > xMidOut) {
            console.log('x34');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMinOut;
            } else {
              xResult = xMaxOut;
            }
          } else if (xMidIn < xMidOut) {
            console.log('x35');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMaxOut;
            } else {
              xResult = xMinOut;
            }
          } else if (xMidIn === xMidOut) {
            console.log('x36');
            xResult = xMinOut;
          }
        } else if (yMidIn === yMidOut) {
          if (xMidIn > xMidOut) {
            console.log('x37');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMinOut;
            } else {
              xResult = xMaxOut;
            }
          } else if (xMidIn < xMidOut) {
            console.log('x38');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMaxOut;
            } else {
              xResult = xMinOut;
            }
          } else if (xMidIn === xMidOut) {
            console.log('x39');
            xResult = xMinOut;
          }
        }
      } else if (idMultiLink === 1) {
        if (yMidIn > yMidOut) {
          console.log('x40');
          if (xMidIn > xMidOut) {
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMinOut;
            } else {
              xResult = xMaxOut;
            }
          } else if (xMidIn < xMidOut) {
            console.log('x41');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMaxOut;
            } else {
              xResult = xMinOut;
            }
          } else if (xMidIn === xMidOut) {
            console.log('x42');
            xResult = xMaxOut;
          }
        } else if (yMidIn < yMidOut) {
          if (xMidIn > xMidOut) {
            console.log('x43');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMaxOut;
            } else {
              xResult = xMinOut;
            }
          } else if (xMidIn < xMidOut) {
            console.log('x44');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMinOut;
            } else {
              xResult = xMaxOut;
            }
          } else if (xMidIn === xMidOut) {
            console.log('x45');
            xResult = xMaxOut;
          }
        } else if (yMidIn === yMidOut) {
          if (xMidIn > xMidOut) {
            console.log('x46');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMinOut;
            } else {
              xResult = xMaxOut;
            }
          } else if (xMidIn < xMidOut) {
            console.log('x47');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMaxOut;
            } else {
              xResult = xMinOut;
            }
          } else if (xMidIn === xMidOut) {
            console.log('x48');
            xResult = xMinOut;
          }
        }
      } else if (idMultiLink === 2) {
        if (yMidIn > yMidOut) {
          if ((xMidIn > xMinOut && xMidIn < xMaxOut) || (xMidIn < xMinOut && xMidIn > xMaxOut)) {
            console.log('x49');
            xResult = (xMinOut + xMaxOut) / 2;
          } else if (xMidIn > xMidOut) {
            console.log('x50');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMinOut;
            } else {
              xResult = xMaxOut;
            }
          } else if (xMidIn < xMidOut) {
            console.log('x51');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMaxOut;
            } else {
              xResult = xMinOut;
            }
          } else if (xMidIn === xMidOut) {
            console.log('x52');
            xResult = (xMinOut + xMaxOut) / 2;
          }
        } else if (yMidIn < yMidOut) {
          if ((xMidIn > xMinOut && xMidIn < xMaxOut) || (xMidIn < xMinOut && xMidIn > xMaxOut)) {
            console.log('x53');
            xResult = (xMinOut + xMaxOut) / 2;
          } else if (xMidIn > xMidOut) {
            console.log('x54');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMinOut;
            } else {
              xResult = xMaxOut;
            }
          } else if (xMidIn < xMidOut) {
            console.log('x55');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMaxOut;
            } else {
              xResult = xMinOut;
            }
          } else if (xMidIn === xMidOut) {
            console.log('x56');
            xResult = (xMinOut + xMaxOut) / 2;
          }
        } else if (yMidIn === yMidOut) {
          if (xMidIn > xMidOut) {
            console.log('x57');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMinOut;
            } else {
              xResult = xMaxOut;
            }
          } else if (xMidIn < xMidOut) {
            console.log('x58');
            if (xMinOut < 0 && xMaxOut < 0) {
              xResult = xMaxOut;
            } else {
              xResult = xMinOut;
            }
          } else if (xMidIn === xMidOut) {
            console.log('x59');
            xResult = xMinOut;
          }
        }
      }
    }

    return xResult;
  };

  private ifMultiLinkWithRegionDefineY = (isIn: boolean, idMultiLink: number): number => {
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

    if (this.props.associatePointIn !== '') {
      arrayPoints.forEach(point => {
        let name: string = point.label || point.name;
        if (name === this.props.associatePointIn) {
          xMinIn = parseInt(point.positionShapeX, 10);
          xMaxIn = parseInt(point.positionShapeX, 10);
          yMinIn = parseInt(point.positionShapeY, 10);
          yMaxIn = parseInt(point.positionShapeY, 10);
        }
      });

      arrayRegions.forEach(region => {
        if (region.label === this.props.associateRegionOut) {
          xMinOut = parseInt(region.coords.xMin, 10);
          xMaxOut = parseInt(region.coords.xMax, 10);
          yMinOut = parseInt(region.coords.yMin, 10);
          yMaxOut = parseInt(region.coords.yMax, 10);
        }
      });

      xMidIn = xMinIn;
      xMidOut = (xMinOut + xMaxOut) / 2;
      yMidIn = yMinIn;
      yMidOut = (yMinOut + yMaxOut) / 2;
    } else if (this.props.associatePointOut !== '') {
      arrayRegions.forEach(region => {
        if (region.label === this.props.associateRegionIn) {
          xMinIn = parseInt(region.coords.xMin, 10);
          xMaxIn = parseInt(region.coords.xMax, 10);
          yMinIn = parseInt(region.coords.yMin, 10);
          yMaxIn = parseInt(region.coords.yMax, 10);
        }
      });

      arrayPoints.forEach(point => {
        let name: string = point.label || point.name;
        if (name === this.props.associatePointOut) {
          xMinOut = parseInt(point.positionShapeX, 10);
          xMaxOut = parseInt(point.positionShapeX, 10);
          yMinOut = parseInt(point.positionShapeY, 10);
          yMaxOut = parseInt(point.positionShapeY, 10);
        }
      });

      xMidIn = (xMinIn + xMaxIn) / 2;
      xMidOut = xMinOut;
      yMidIn = (yMinIn + yMaxIn) / 2;
      yMidOut = yMinOut;
    } else if (this.props.associatePointIn === '' && this.props.associateRegionIn === '') {
      arrayRegions.forEach(region => {
        if (region.label === this.props.associateRegionOut) {
          xMinOut = parseInt(region.coords.xMin, 10);
          xMaxOut = parseInt(region.coords.xMax, 10);
          yMinOut = parseInt(region.coords.yMin, 10);
          yMaxOut = parseInt(region.coords.yMax, 10);
        }
      });
      xMinIn = parseInt(this.props.pointAPositionX, 10);
      xMaxIn = parseInt(this.props.pointAPositionX, 10);
      yMinIn = parseInt(this.props.pointAPositionY, 10);
      yMaxIn = parseInt(this.props.pointAPositionY, 10);
      xMidIn = xMinIn;
      xMidOut = (xMinOut + xMaxOut) / 2;
      yMidIn = yMinIn;
      yMidOut = (yMinOut + yMaxOut) / 2;
    } else if (this.props.associatePointOut === '' && this.props.associateRegionOut === '') {
      arrayRegions.forEach(region => {
        if (region.label === this.props.associateRegionIn) {
          xMinIn = parseInt(region.coords.xMin, 10);
          xMaxIn = parseInt(region.coords.xMax, 10);
          yMinIn = parseInt(region.coords.yMin, 10);
          yMaxIn = parseInt(region.coords.yMax, 10);
        }
      });

      xMinOut = parseInt(this.props.pointBPositionX, 10);
      xMaxOut = parseInt(this.props.pointBPositionX, 10);
      yMinOut = parseInt(this.props.pointBPositionY, 10);
      yMaxOut = parseInt(this.props.pointBPositionY, 10);
      xMidIn = (xMinIn + xMaxIn) / 2;
      xMidOut = xMinOut;
      yMidIn = (yMinIn + yMaxIn) / 2;
      yMidOut = yMinOut;
    } else {
      arrayRegions.forEach(region => {
        if (region.label === this.props.associateRegionIn) {
          xMinIn = parseInt(region.coords.xMin, 10);
          xMaxIn = parseInt(region.coords.xMax, 10);
          yMinIn = parseInt(region.coords.yMin, 10);
          yMaxIn = parseInt(region.coords.yMax, 10);
        }

        if (region.label === this.props.associateRegionOut) {
          xMinOut = parseInt(region.coords.xMin, 10);
          xMaxOut = parseInt(region.coords.xMax, 10);
          yMinOut = parseInt(region.coords.yMin, 10);
          yMaxOut = parseInt(region.coords.yMax, 10);
        }
      });

      xMidIn = (xMinIn + xMaxIn) / 2;
      xMidOut = (xMinOut + xMaxOut) / 2;
      yMidIn = (yMinIn + yMaxIn) / 2;
      yMidOut = (yMinOut + yMaxOut) / 2;
    }

    if (isIn) {
      if (idMultiLink === 0) {
        if ((xMidOut > xMinIn && xMidOut < xMaxIn) || (xMidOut < xMinIn && xMidOut > xMaxIn)) {
          if (yMidIn > yMidOut) {
            console.log('y1');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMaxIn;
            } else {
              yResult = yMinIn;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y2');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMinIn;
            } else {
              yResult = yMaxIn;
            }
          } else if (yMidIn === yMidOut) {
            console.log('y3');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMinIn;
            } else {
              yResult = yMaxIn;
            }
          }
        } else if (xMidIn > xMidOut) {
          if (yMidIn > yMidOut) {
            console.log('y4');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMinIn;
            } else {
              yResult = yMaxIn;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y5');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMinIn;
            } else {
              yResult = yMaxIn;
            }
          } else if (yMidIn === yMidOut) {
            console.log('y6');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMinIn;
            } else {
              yResult = yMaxIn;
            }
          }
        } else if (xMidIn < xMidOut) {
          if (yMidIn > yMidOut) {
            console.log('y7');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMinIn;
            } else {
              yResult = yMaxIn;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y8');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMinIn;
            } else {
              yResult = yMaxIn;
            }
          } else if (yMidIn === yMidOut) {
            console.log('y9');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMinIn;
            } else {
              yResult = yMaxIn;
            }
          }
        } else if (xMidIn === xMidOut) {
          if (yMidIn > yMidOut) {
            console.log('y10');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMaxIn;
            } else {
              yResult = yMinIn;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y11');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMinIn;
            } else {
              yResult = yMaxIn;
            }
          }
        }
      } else if (idMultiLink === 1) {
        if ((xMidOut > xMinIn && xMidOut < xMaxIn) || (xMidOut < xMinIn && xMidOut > xMaxIn)) {
          if (yMidIn > yMidOut) {
            console.log('y12');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMaxIn;
            } else {
              yResult = yMinIn;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y13');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMinIn;
            } else {
              yResult = yMaxIn;
            }
          } else if (yMidIn === yMidOut) {
            console.log('y14');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMinOut;
            } else {
              yResult = yMaxOut;
            }
          }
        } else if (xMidIn > xMidOut) {
          console.log('y16');
          if (yMidIn > yMidOut) {
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMaxIn;
            } else {
              yResult = yMinIn;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y17');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMaxIn;
            } else {
              yResult = yMinIn;
            }
          } else if (yMidIn === yMidOut) {
            console.log('y18');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMaxIn;
            } else {
              yResult = yMinIn;
            }
          }
        } else if (xMidIn < xMidOut) {
          if (yMidIn > yMidOut) {
            console.log('y19');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMaxIn;
            } else {
              yResult = yMinIn;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y20');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMaxIn;
            } else {
              yResult = yMinIn;
            }
          } else if (yMidIn === yMidOut) {
            console.log('y21');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMaxIn;
            } else {
              yResult = yMinIn;
            }
          }
        } else if (xMidIn === xMidOut) {
          if (yMidIn > yMidOut) {
            console.log('y22');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMaxIn;
            } else {
              yResult = yMinIn;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y23');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMinIn;
            } else {
              yResult = yMaxIn;
            }
          }
        }
      } else if (idMultiLink === 2) {
        if ((xMidOut > xMinIn && xMidOut < xMaxIn) || (xMidOut < xMinIn && xMidOut > xMaxIn)) {
          if (yMidIn > yMidOut) {
            console.log('y24');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMaxIn;
            } else {
              yResult = yMinIn;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y25');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMinIn;
            } else {
              yResult = yMaxIn;
            }
          } else if (yMidIn === yMidOut) {
            console.log('y26');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMinOut;
            } else {
              yResult = yMaxOut;
            }
          }
        } else if (xMidIn > xMidOut) {
          if (yMidIn > yMidOut) {
            console.log('y28');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMaxIn;
            } else {
              yResult = yMinIn;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y29');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMinIn;
            } else {
              yResult = yMaxIn;
            }
          } else if (yMidIn === yMidOut) {
            console.log('y30');
            yResult = (yMinIn + yMaxIn) / 2;
          }
        } else if (xMidIn < xMidOut) {
          if (yMidIn > yMidOut) {
            console.log('y31');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMaxIn;
            } else {
              yResult = yMinIn;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y32');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMinIn;
            } else {
              yResult = yMaxIn;
            }
          } else if (yMidIn === yMidOut) {
            console.log('y33');
            yResult = (yMinIn + yMaxIn) / 2;
          }
        } else if (xMidIn === xMidOut) {
          if (yMidIn > yMidOut) {
            console.log('y34');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMaxIn;
            } else {
              yResult = yMinIn;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y35');
            if (yMinIn < 0 && yMaxIn < 0) {
              yResult = yMinIn;
            } else {
              yResult = yMaxIn;
            }
          }
        }
      }
    } else {
      if (idMultiLink === 0) {
        if ((xMidIn > xMinOut && xMidIn < xMaxOut) || (xMidIn < xMinOut && xMidIn > xMaxOut)) {
          if (yMidIn > yMidOut) {
            console.log('y37');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMinOut;
            } else {
              yResult = yMaxOut;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y38');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMaxOut;
            } else {
              yResult = yMinOut;
            }
          } else if (yMidIn === yMidOut) {
            console.log('y39');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMinOut;
            } else {
              yResult = yMaxOut;
            }
          }
        } else if (xMidIn > xMidOut) {
          if (yMidIn > yMidOut) {
            console.log('y40');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMinOut;
            } else {
              yResult = yMaxOut;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y41');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMinOut;
            } else {
              yResult = yMaxOut;
            }
          } else if (yMidIn === yMidOut) {
            console.log('y42');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMinOut;
            } else {
              yResult = yMaxOut;
            }
          }
        } else if (xMidIn < xMidOut) {
          if (yMidIn > yMidOut) {
            console.log('y43');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMinOut;
            } else {
              yResult = yMaxOut;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y44');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMinOut;
            } else {
              yResult = yMaxOut;
            }
          } else if (yMidIn === yMidOut) {
            console.log('y45');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMinOut;
            } else {
              yResult = yMaxOut;
            }
          }
        } else if (xMidIn === xMidOut) {
          if (yMidIn > yMidOut) {
            console.log('y46');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMinOut;
            } else {
              yResult = yMaxOut;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y47');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMaxOut;
            } else {
              yResult = yMinOut;
            }
          }
        }
      } else if (idMultiLink === 1) {
        if ((xMidIn > xMinOut && xMidIn < xMaxOut) || (xMidIn < xMinOut && xMidIn > xMaxOut)) {
          if (yMidIn > yMidOut) {
            console.log('y49');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMinOut;
            } else {
              yResult = yMaxOut;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y50');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMaxOut;
            } else {
              yResult = yMinOut;
            }
          } else if (yMidIn === yMidOut) {
            console.log('y51');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMinOut;
            } else {
              yResult = yMaxOut;
            }
          }
        } else if (xMidIn > xMidOut) {
          if (yMidIn > yMidOut) {
            console.log('y52');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMaxOut;
            } else {
              yResult = yMinOut;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y53');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMaxOut;
            } else {
              yResult = yMinOut;
            }
          } else if (yMidIn === yMidOut) {
            console.log('y54');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMaxOut;
            } else {
              yResult = yMinOut;
            }
          }
        } else if (xMidIn < xMidOut) {
          if (yMidIn > yMidOut) {
            console.log('y55');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMaxOut;
            } else {
              yResult = yMinOut;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y56');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMaxOut;
            } else {
              yResult = yMinOut;
            }
          } else if (yMidIn === yMidOut) {
            console.log('y57');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMaxOut;
            } else {
              yResult = yMinOut;
            }
          }
        } else if (xMidIn === xMidOut) {
          if (yMidIn > yMidOut) {
            console.log('y58');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMinOut;
            } else {
              yResult = yMaxOut;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y59');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMaxOut;
            } else {
              yResult = yMinOut;
            }
          }
        }
      } else if (idMultiLink === 2) {
        if ((xMidIn > xMinOut && xMidIn < xMaxOut) || (xMidIn < xMinOut && xMidIn > xMaxOut)) {
          if (yMidIn > yMidOut) {
            console.log('y61');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMinOut;
            } else {
              yResult = yMaxOut;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y62');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMaxOut;
            } else {
              yResult = yMinOut;
            }
          } else if (yMidIn === yMidOut) {
            console.log('y64');
            yResult = (yMinOut + yMaxOut) / 2;
          }
        } else if (xMidIn > xMidOut) {
          if (yMidIn > yMidOut) {
            console.log('y65');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMinOut;
            } else {
              yResult = yMaxOut;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y66');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMaxOut;
            } else {
              yResult = yMinOut;
            }
          } else if (yMidIn === yMidOut) {
            console.log('y67');
            yResult = (yMinOut + yMaxOut) / 2;
          }
        } else if (xMidIn < xMidOut) {
          if (yMidIn > yMidOut) {
            console.log('y68');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMinOut;
            } else {
              yResult = yMaxOut;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y69');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMaxOut;
            } else {
              yResult = yMinOut;
            }
          } else if (yMidIn === yMidOut) {
            console.log('y70');
            yResult = (yMinOut + yMaxOut) / 2;
          }
        } else if (xMidIn === xMidOut) {
          if (yMidIn > yMidOut) {
            console.log('y71');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMinOut;
            } else {
              yResult = yMaxOut;
            }
          } else if (yMidIn < yMidOut) {
            console.log('y72');
            if (yMinOut < 0 && yMaxOut < 0) {
              yResult = yMaxOut;
            } else {
              yResult = yMinOut;
            }
          }
        }
      }
    }
    return yResult;
  };

  private ifMultiLinkWithPointDefineX = (isIn: boolean, idMultiLink: number): number => {
    let xResult = 0;
    const arrayPoints: PointClass[] = this.props.options.arrayPoints;
    let xIn = 0;
    let yIn = 0;
    let xOut = 0;
    let yOut = 0;
    const ajustPosition = 5;
    arrayPoints.forEach(point => {
      let name: string = point.label || point.name;
      if (name === this.props.associatePointIn) {
        xIn = parseInt(point.positionShapeX, 10);
        yIn = parseInt(point.positionShapeY, 10);
      }
      if (name === this.props.associatePointOut) {
        xOut = parseInt(point.positionShapeX, 10);
        yOut = parseInt(point.positionShapeY, 10);
      }
    });

    const angleRadian: number = Math.atan2(yIn - yOut, xIn - xOut);
    const angleDegre: number = (angleRadian * 180) / Math.PI;

    if (isIn) {
      if (idMultiLink === 0) {
        if (angleDegre === 0 || angleDegre === 180 || angleDegre === -180) {
          xResult = xIn;
        } else if (angleDegre > 0 && angleDegre < 90) {
          xResult = xIn - ajustPosition * (angleDegre / 90);
        } else if (angleDegre === 90) {
          xResult = xIn + ajustPosition;
        } else if (angleDegre > 90 && angleDegre < 180) {
          xResult = xIn + ajustPosition * (((angleDegre - 180) / 90) * -1);
        } else if (angleDegre < 0 && angleDegre > -90) {
          xResult = xIn + ajustPosition * ((angleDegre / 90) * -1);
        } else if (angleDegre === -90) {
          xResult = xIn + ajustPosition;
        } else if (angleDegre < -90 && angleDegre > -180) {
          xResult = xIn - ajustPosition * ((angleDegre + 180) / 90);
        }
      } else if (idMultiLink === 1) {
        if (angleDegre === 0 || angleDegre === 180 || angleDegre === -180) {
          xResult = xIn;
        } else if (angleDegre > 0 && angleDegre < 90) {
          xResult = xIn + ajustPosition * (angleDegre / 90);
        } else if (angleDegre === 90) {
          xResult = xIn - ajustPosition;
        } else if (angleDegre > 90 && angleDegre < 180) {
          xResult = xIn - ajustPosition * (((angleDegre - 180) / 90) * -1);
        } else if (angleDegre < 0 && angleDegre > -90) {
          xResult = xIn - ajustPosition * ((angleDegre / 90) * -1);
        } else if (angleDegre === -90) {
          xResult = xIn - ajustPosition;
        } else if (angleDegre < -90 && angleDegre > -180) {
          xResult = xIn + ajustPosition * ((angleDegre + 180) / 90);
        }
      } else if (idMultiLink === 2) {
        xResult = xIn;
      }
    } else {
      if (idMultiLink === 0) {
        if (angleDegre === 0 || angleDegre === 180 || angleDegre === -180) {
          xResult = xOut;
        } else if (angleDegre > 0 && angleDegre < 90) {
          xResult = xOut - ajustPosition * (angleDegre / 90);
        } else if (angleDegre === 90) {
          xResult = xOut + ajustPosition;
        } else if (angleDegre > 90 && angleDegre < 180) {
          xResult = xOut + ajustPosition * (((angleDegre - 180) / 90) * -1);
        } else if (angleDegre < 0 && angleDegre > -90) {
          xResult = xOut + ajustPosition * ((angleDegre / 90) * -1);
        } else if (angleDegre === -90) {
          xResult = xOut + ajustPosition;
        } else if (angleDegre < -90 && angleDegre > -180) {
          xResult = xOut - ajustPosition * ((angleDegre + 180) / 90);
        }
      } else if (idMultiLink === 1) {
        if (angleDegre === 0 || angleDegre === 180 || angleDegre === -180) {
          xResult = xOut;
        } else if (angleDegre > 0 && angleDegre < 90) {
          xResult = xOut + ajustPosition * (angleDegre / 90);
        } else if (angleDegre === 90) {
          xResult = xOut - ajustPosition;
        } else if (angleDegre > 90 && angleDegre < 180) {
          xResult = xOut - ajustPosition * (((angleDegre - 180) / 90) * -1);
        } else if (angleDegre < 0 && angleDegre > -90) {
          xResult = xOut - ajustPosition * ((angleDegre / 90) * -1);
        } else if (angleDegre === -90) {
          xResult = xOut - ajustPosition;
        } else if (angleDegre < -90 && angleDegre > -180) {
          xResult = xOut + ajustPosition * ((angleDegre + 180) / 90);
        }
      } else if (idMultiLink === 2) {
        xResult = xOut;
      }
    }
    return xResult;
  };

  private ifMultiLinkWithPointDefineY = (isIn: boolean, idMultiLink: number): number => {
    let yResult = 0;
    const arrayPoints: PointClass[] = this.props.options.arrayPoints;
    let xIn = 0;
    let yIn = 0;
    let xOut = 0;
    let yOut = 0;
    const ajustPosition = 5;
    arrayPoints.forEach(point => {
      let name: string = point.label || point.name;
      if (name === this.props.associatePointIn) {
        xIn = parseInt(point.positionShapeX, 10);
        yIn = parseInt(point.positionShapeY, 10);
      }
      if (name === this.props.associatePointOut) {
        xOut = parseInt(point.positionShapeX, 10);
        yOut = parseInt(point.positionShapeY, 10);
      }
    });

    const angleRadian: number = Math.atan2(yIn - yOut, xIn - xOut);
    const angleDegre: number = (angleRadian * 180) / Math.PI;

    if (isIn) {
      if (idMultiLink === 0) {
        if (angleDegre === 0) {
          yResult = yIn + ajustPosition;
        } else if (angleDegre > 0 && angleDegre < 90) {
          yResult = yIn + ajustPosition * (((angleDegre - 90) / 90) * -1);
        } else if (angleDegre === 90 || angleDegre === -90) {
          yResult = yIn;
        } else if (angleDegre > 90 && angleDegre < 180) {
          yResult = yIn + ajustPosition * ((angleDegre - 90) / 90);
        } else if (angleDegre < 0 && angleDegre > -90) {
          yResult = yIn + ajustPosition * ((angleDegre + 90) / 90);
        } else if (angleDegre < -90 && angleDegre > -180) {
          yResult = yIn + ajustPosition * (((angleDegre + 90) / 90) * -1);
        } else if (angleDegre === 180 || angleDegre === -180) {
          yResult = yIn + ajustPosition;
        }
      } else if (idMultiLink === 1) {
        if (angleDegre === 0) {
          yResult = yIn - ajustPosition;
        } else if (angleDegre > 0 && angleDegre < 90) {
          yResult = yIn - ajustPosition * (((angleDegre - 90) / 90) * -1);
        } else if (angleDegre === 90 || angleDegre === -90) {
          yResult = yIn;
        } else if (angleDegre > 90 && angleDegre < 180) {
          yResult = yIn - ajustPosition * ((angleDegre - 90) / 90);
        } else if (angleDegre < 0 && angleDegre > -90) {
          yResult = yIn - ajustPosition * ((angleDegre + 90) / 90);
        } else if (angleDegre < -90 && angleDegre > -180) {
          yResult = yIn - ajustPosition * (((angleDegre + 90) / 90) * -1);
        } else if (angleDegre === 180 || angleDegre === -180) {
          yResult = yIn - ajustPosition;
        }
      } else if (idMultiLink === 2) {
        yResult = yIn;
      }
    } else {
      if (idMultiLink === 0) {
        if (angleDegre === 0) {
          yResult = yOut + ajustPosition;
        } else if (angleDegre > 0 && angleDegre < 90) {
          yResult = yOut + ajustPosition * (((angleDegre - 90) / 90) * -1);
        } else if (angleDegre === 90 || angleDegre === -90) {
          yResult = yOut;
        } else if (angleDegre > 90 && angleDegre < 180) {
          yResult = yOut + ajustPosition * ((angleDegre - 90) / 90);
        } else if (angleDegre < 0 && angleDegre > -90) {
          yResult = yOut + ajustPosition * ((angleDegre + 90) / 90);
        } else if (angleDegre < -90 && angleDegre > -180) {
          yResult = yOut + ajustPosition * (((angleDegre + 90) / 90) * -1);
        } else if (angleDegre === 180 || angleDegre === -180) {
          yResult = yOut + ajustPosition;
        }
      } else if (idMultiLink === 1) {
        if (angleDegre === 0) {
          yResult = yOut - ajustPosition;
        } else if (angleDegre > 0 && angleDegre < 90) {
          yResult = yOut - ajustPosition * (((angleDegre - 90) / 90) * -1);
        } else if (angleDegre === 90 || angleDegre === -90) {
          yResult = yOut;
        } else if (angleDegre > 90 && angleDegre < 180) {
          yResult = yOut - ajustPosition * ((angleDegre - 90) / 90);
        } else if (angleDegre < 0 && angleDegre > -90) {
          yResult = yOut - ajustPosition * ((angleDegre + 90) / 90);
        } else if (angleDegre < -90 && angleDegre > -180) {
          yResult = yOut - ajustPosition * (((angleDegre + 90) / 90) * -1);
        } else if (angleDegre === 180 || angleDegre === -180) {
          yResult = yOut - ajustPosition;
        }
      } else if (idMultiLink === 2) {
        yResult = yOut;
      }
    }
    return yResult;
  };

  private getX = (labelPoint: string): number => {
    let result = 0;
    const arrayPoint: PointClass[] = this.props.options.arrayPoints;
    for (const point of arrayPoint) {
      if (point.label === labelPoint || point.name === labelPoint) {
        result = this.synchroLinkX(parseInt(point.positionShapeX, 10));
      }
    }
    return result;
  };

  private getY = (labelPoint: string): number => {
    let result = 0;
    const arrayPoint: PointClass[] = this.props.options.arrayPoints;
    for (const point of arrayPoint) {
      if (point.label === labelPoint || point.name === labelPoint) {
        result = this.synchroLinkY(parseInt(point.positionShapeY, 10));
      }
    }
    return result;
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
      //console.log('multi');
      let indexOrientedLink = 0;
      listParallelOrientedLinks.forEach(index => {
        if (index === parseInt(this.props.id, 10)) {
          if (indexOrientedLink === 0) {
            if (this.props.associatePointIn !== '' && this.props.associatePointOut !== '') {
              //console.log('m0-1');
              xA = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(true, 0));
              yA = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(true, 0));
              xB = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(false, 0));
              yB = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(false, 0));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (this.props.associateRegionIn !== '' && this.props.associateRegionOut !== '') {
              //console.log('m0-2');
              xA = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(true, 0));
              yA = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(true, 0));
              xB = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(false, 0));
              yB = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(false, 0));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (this.props.associatePointIn !== '' && this.props.associateRegionOut !== '') {
              //console.log('m0-3');
              xA = this.getX(this.props.associatePointIn);
              yA = this.getY(this.props.associatePointIn);
              xB = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(false, 0));
              yB = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(false, 0));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (this.props.associateRegionIn !== '' && this.props.associatePointOut !== '') {
              //console.log('m0-4');
              xA = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(true, 0));
              yA = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(true, 0));
              xB = this.getX(this.props.associatePointOut);
              yB = this.getY(this.props.associatePointOut);
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            }
          } else if (indexOrientedLink === 1) {
            if (this.props.associatePointIn !== '' && this.props.associatePointOut !== '') {
              //console.log('m1-1');
              xA = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(true, 1));
              yA = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(true, 1));
              xB = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(false, 1));
              yB = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(false, 1));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (this.props.associateRegionIn !== '' && this.props.associateRegionOut !== '') {
              //console.log('m1-2');
              xA = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(true, 1));
              yA = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(true, 1));
              xB = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(false, 1));
              yB = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(false, 1));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (this.props.associatePointIn !== '' && this.props.associateRegionOut !== '') {
              //console.log('m1-3');
              xA = this.getX(this.props.associatePointIn);
              yA = this.getY(this.props.associatePointIn);
              xB = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(false, 1));
              yB = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(false, 1));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (this.props.associateRegionIn !== '' && this.props.associatePointOut !== '') {
              //console.log('m1-4');
              xA = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(true, 1));
              yA = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(true, 1));
              xB = this.getX(this.props.associatePointOut);
              yB = this.getY(this.props.associatePointOut);
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            }
          } else if (indexOrientedLink === 2) {
            if (this.props.associatePointIn !== '' && this.props.associatePointOut !== '') {
              //console.log('m2-1');
              xA = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(true, 2));
              yA = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(true, 2));
              xB = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(false, 2));
              yB = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(false, 2));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (this.props.associateRegionIn !== '' && this.props.associateRegionOut !== '') {
              //console.log('m2-2');
              xA = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(true, 2));
              yA = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(true, 2));
              xB = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(false, 2));
              yB = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(false, 2));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (this.props.associatePointIn !== '' && this.props.associateRegionOut !== '') {
              //console.log('m2-3');
              xB = this.getX(this.props.associatePointIn);
              yB = this.getY(this.props.associatePointIn);
              xB = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(false, 2));
              yB = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(false, 2));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (this.props.associateRegionIn !== '' && this.props.associatePointOut !== '') {
              //console.log('m2-4');
              xA = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(true, 2));
              yA = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(true, 2));
              xB = this.getX(this.props.associatePointOut);
              yB = this.getY(this.props.associatePointOut);
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            }
          }
        }
        indexOrientedLink++;
      });
    } else if (this.props.associateRegionIn !== '' && this.props.associatePointOut === '' && this.props.associateRegionOut === '') {
      console.log('1');
      xA = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(true, 2));
      yA = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(true, 2));
      xB = xB0;
      yB = yB0;
      xCByClick = xCByClick0 || (xA + xB) / 2;
      yCByClick = yCByClick0 || (yA + yB) / 2;
    } else if (this.props.associateRegionOut !== '' && this.props.associateRegionIn === '' && this.props.associatePointIn === '') {
      console.log('2');
      xA = xA0;
      yA = yA0;
      xB = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(false, 2));
      yB = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(false, 2));
      xCByClick = xCByClick0 || (xA + xB) / 2;
      yCByClick = yCByClick0 || (yA + yB) / 2;
    } else if (this.props.associateRegionIn !== '' && this.props.associateRegionOut !== '') {
      console.log('3');
      xA = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(true, 2));
      yA = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(true, 2));
      xB = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(false, 2));
      yB = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(false, 2));
      xCByClick = xCByClick0 || (xA + xB) / 2;
      yCByClick = yCByClick0 || (yA + yB) / 2;
    } else if (this.props.associatePointIn !== '' && this.props.associatePointOut === '' && this.props.associateRegionOut === '') {
      console.log('4');
      xA = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(true, 2));
      yA = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(true, 2));
      xB = xB0;
      yB = yB0;
      xCByClick = xCByClick0 || (xA + xB) / 2;
      yCByClick = yCByClick0 || (yA + yB) / 2;
    } else if (this.props.associatePointOut !== '' && this.props.associatePointIn === '' && this.props.associateRegionIn === '') {
      console.log('5');
      xA = xA0;
      yA = yA0;
      xB = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(false, 2));
      yB = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(false, 2));
      xCByClick = xCByClick0 || (xA + xB) / 2;
      yCByClick = yCByClick0 || (yA + yB) / 2;
    } else if (this.props.associatePointIn !== '' && this.props.associatePointOut !== '') {
      console.log('6');
      xA = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(true, 2));
      yA = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(true, 2));
      xB = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(false, 2));
      yB = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(false, 2));
      xCByClick = xCByClick0 || (xA + xB) / 2;
      yCByClick = yCByClick0 || (yA + yB) / 2;
    } else if (this.props.associatePointIn !== '' && this.props.associateRegionOut !== '') {
      console.log('7');
      xA = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(true, 2));
      yA = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(true, 2));
      xB = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(false, 2));
      yB = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(false, 2));
      xCByClick = xCByClick0 || (xA + xB) / 2;
      yCByClick = yCByClick0 || (yA + yB) / 2;
    } else if (this.props.associateRegionIn !== '' && this.props.associatePointOut !== '') {
      console.log('8');
      xA = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(true, 2));
      yA = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(true, 2));
      xB = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(false, 2));
      yB = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(false, 2));
      xCByClick = xCByClick0 || (xA + xB) / 2;
      yCByClick = yCByClick0 || (yA + yB) / 2;
    } else {
      console.log('9');
      xA = xA0;
      yA = yA0;
      xB = xB0;
      yB = yB0;
      xCByClick = xCByClick0;
      yCByClick = yCByClick0;
    }

    // console.log('xA');
    // console.log(xA);
    // console.log('yA');
    // console.log(yA);

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

    //const angleRadianBA: number = Math.atan2(yB - yA, xB - xA);
    //const angleDegreeBA: number = (angleRadianBA * 180) / Math.PI;

    const sizeArrowTriangle = 8;

    const valueTooltipMonodirectional: JSX.Element = this.defineValueTooptip('monodirectional');
    const valueTooltipBidirectionalA: JSX.Element = this.defineValueTooptip('bidirectional', 'A');
    const valueTooltipBidirectionalB: JSX.Element = this.defineValueTooptip('bidirectional', 'B');
    const linkUrlOrientedLink: string = this.props.linkUrl.followLink;
    const inverseAxeY = -1;

    if (orientationLink === 'double') {
      return (
        <a href={linkUrlOrientedLink} id="link">
          <div>
            <Tooltip content={valueTooltipBidirectionalA} placement={this.props.tooltipPositionA.value}>
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
                      borderLeft: this.defineBorderSize('A') + 'px solid transparent',
                      borderRight: this.defineBorderSize('A') + 'px solid transparent',
                      borderBottom: this.defineBorderSize('A') + 'px solid ' + this.defineBorderColor('A'),
                      transform: 'rotate(270deg)',
                    }}
                  ></div>
                  <div
                    style={{
                      border: this.defineBorderSize('A') + ' solid ' + this.defineBorderColor('A'),
                      backgroundColor: this.defineBorderColor('A'),
                      width: distanceAC,
                    }}
                  ></div>
                </div>
              </div>
            </Tooltip>
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
            <Tooltip content={valueTooltipBidirectionalB} placement={this.props.tooltipPositionB.value}>
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
                      borderLeft: this.defineBorderSize('B') + 'px solid transparent',
                      borderRight: this.defineBorderSize('B') + 'px solid transparent',
                      borderBottom: this.defineBorderSize('B') + 'px solid ' + this.defineBorderColor('B'),
                      transform: 'rotate(270deg)',
                    }}
                  ></div>
                  <div
                    style={{
                      border: this.defineBorderSize('B') + ' solid ' + this.defineBorderColor('B'),
                      backgroundColor: this.defineBorderColor('B'),
                      width: distanceBC,
                    }}
                  ></div>
                </div>
              </div>
            </Tooltip>
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
      if (this.props.isIncurved.value) {
        return (
          <a href={linkUrlOrientedLink}>
            <Tooltip content={valueTooltipMonodirectional} placement={this.props.tooltipPositionA.value}>
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
                    border: this.defineBorderSize('A') + ' solid ' + this.defineBorderColor('A'),
                    backgroundColor: this.defineBorderColor('A'),
                    width: distanceAC,
                  }}
                ></div>
              </div>
            </Tooltip>
            <Tooltip content={valueTooltipMonodirectional} placement={this.props.tooltipPositionA.value}>
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
                      border: this.defineBorderSize('A') + ' solid ' + this.defineBorderColor('A'),
                      backgroundColor: this.defineBorderColor('A'),
                      width: distanceBC,
                    }}
                  ></div>
                  <div
                    className="arrowTriangle"
                    style={{
                      width: '0',
                      height: '0',
                      borderLeft: this.defineBorderSize('A') + 'px solid transparent',
                      borderRight: this.defineBorderSize('A') + 'px solid transparent',
                      borderBottom: this.defineBorderSize('A') + 'px solid ' + this.defineBorderColor('A'),
                      transform: 'rotate(90deg)',
                    }}
                  ></div>
                </div>
              </div>
            </Tooltip>
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
                cursor: 'pointer',
              }}
            >
              {this.defineTextObject(this.props.valueMainMetricA)}
            </div>
          </a>
        );
      } else {
        return (
          <a href={linkUrlOrientedLink} target="_blank">
            <Tooltip content={valueTooltipMonodirectional} placement={this.props.tooltipPositionA.value}>
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
                  {/* <div className="arrowTriangle"> */}
                  <div
                    className="arrowTriangle"
                    style={{
                      //position: 'absolute',
                      width: '0',
                      height: '0',
                      borderLeft: this.defineBorderSize('A') + 'px solid transparent',
                      borderRight: this.defineBorderSize('A') + 'px solid transparent',
                      borderBottom: this.defineBorderSize('A') + 'px solid ' + this.defineBorderColor('A'),
                      transform: 'rotate(270deg)',
                    }}
                  ></div>
                  {/* <div
                      className="triangleUp"
                      style={{
                        position: 'absolute',
                        top: '5px',
                        width: '0',
                        height: '0',
                        borderLeft: 9 + 'px solid transparent',
                        borderRight: 9 + 'px solid transparent',
                        borderBottom: 9 + 'px solid ' + 'red',
                        transform: 'rotate(270deg)',
                      }}
                    />
                  </div> */}
                  <div
                    style={{
                      border: this.defineBorderSize('A') + ' solid ' + this.defineBorderColor('A'),
                      backgroundColor: this.defineBorderColor('A'),
                      width: distanceAB,
                    }}
                  ></div>
                </div>
              </div>
            </Tooltip>
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
                cursor: 'pointer',
              }}
            >
              {this.defineTextObject(this.props.valueMainMetricA)}
            </div>
          </a>
        );
      }
      // else if (orientationLink === 'BA') {
      // 	return (
      // 		<div id='link'>
      // 			<div id='arrow1' style={{
      // 				display: 'flex',
      // 				alignContent: 'stretch',
      // 				position: 'absolute',
      // 				top: yArrowAB - (sizeArrowTriangle / 2),
      // 				left: xArrowAB,
      // 				transform: 'rotate(' + angleDegreeBA + 'deg)',
      // 				width: distanceAB,

      // 			}}>
      // 				<div className='arrowTriangle' style={{
      // 					width: '0',
      // 					height: '0',
      // 					borderLeft: sizeArrowTriangle + 'px solid transparent',
      // 					borderRight: sizeArrowTriangle + 'px solid transparent',
      // 					borderBottom: sizeArrowTriangle + 'px solid ' + colorB,
      // 					transform: 'rotate(270deg)',
      // 				}}></div>
      // 				<div style={{
      // 					border: '1px solid ' + colorB,
      // 					backgroundColor: colorB,
      // 					width: distanceAB,
      // 				}}></div>
      // 			</div>
      // 			<div style={{
      // 				position: 'absolute',
      // 				top: yMidAB + labelBPositionY,
      // 				left: xMidAB + labelBPositionX,
      // 				//border: '1px solid black',
      // 				backgroundColor: 'white',
      // 				color: 'black',
      // 				fontSize: distanceAB * (4 / 100),
      // 				padding: '0 5px',
      // 			}}>
      // 				{labelB}
      // 			</div>
      // 		</div>
      // 	)
      // }
    } else {
      return <div></div>;
    }
  }

  // private defineBackgroundColor() {
  //   let colorBackground = '';

  //   if (this.props.seuil.length > 0) {
  //     if (this.props.seuil[0].backColor !== '') {
  //       colorBackground = this.props.seuil[0].backColor;
  //     } else {
  //       colorBackground = 'black';
  //     }
  //   } else {
  //     colorBackground = 'black';
  //   }

  //   const valueMainMetric: number = parseInt(this.props.valueMainMetricA, 10);
  //   let index = 0;
  //   this.props.seuil.forEach((level: LowerLimitClass) => {
  //     let lowerLimitMin = 0;

  //     if (level.lowerLimitMin === '') {
  //       lowerLimitMin = 0;
  //     } else {
  //       lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
  //     }

  //     if (lowerLimitMin === 0) {
  //       if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
  //         colorBackground = level.backColor;
  //       }
  //     } else if (this.props.seuil.length === index + 1) {
  //       if (valueMainMetric > lowerLimitMin) {
  //         colorBackground = level.backColor;
  //       }
  //     } else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
  //       colorBackground = level.backColor;
  //     }

  //     index++;
  //   });

  //   return colorBackground;
  // }

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
      if (seuil.length > 0) {
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
      //sizeBorder = seuil[0].sizeBorder;
      if (seuil.length > 0) {
        if (seuil[0].sizeBorder !== '') {
          sizeBorder = seuil[0].sizeBorder;
        } else {
          sizeBorder = this.defineSizeLink();
        }
      } else {
        sizeBorder = this.defineSizeLink();
      }
    } else {
      sizeBorder = this.defineSizeLink();
    }

    let index = 0;

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
    return sizeBorder;
  }

  private defineMainMetric = (mainMetric: string): string => {
    let result = '';
    const unit: string = this.props.textObject.valueGenerateObjectText.unit;
    const decimal: string = this.props.textObject.valueGenerateObjectText.numericFormatElement;

    if (decimal !== '') {
      result = parseFloat(mainMetric).toPrecision(parseInt(decimal, 10)) + ' ' + unit;
    } else {
      result = mainMetric + ' ' + unit;
    }
    return result;
  };

  private defineAuxMetric = (auxMetric: string): string => {
    let result = '';
    const unit: string = this.props.textObject.generateAuxiliaryElement.unit;
    const decimal: string = this.props.textObject.generateAuxiliaryElement.numericFormatElement;

    if (decimal !== '') {
      result = parseFloat(auxMetric).toPrecision(parseInt(decimal, 10)) + ' ' + unit;
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
        htmlMainMetric.push(
          <p key={'contentTextObject3' + this.props.name} style={styleMainMetric}>
            {this.defineMainMetric(mainMetric)}
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
      result = <a href={this.props.linkUrl.hoveringTooltipLink}>{this.props.linkUrl.hoveringTooltipText}</a>;
    }
    return result;
  };

  private defineValueTooptip = (typeLink: string, link?: string) => {
    const contentTooltip: JSX.Element[] = [];
    const contentTooltipMainMetric: JSX.Element[] = [];
    const contentTooltipAuxMetric: JSX.Element[] = [];
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
            this.props.auxiliaryMetrics.forEach(metric => {
              contentTooltipAuxMetric.push(
                <p key={index.toString() + 'contentTooltip11' + this.props.name} style={styleTitle2AuxMetric}>
                  + Metric {index}
                </p>
              );
              contentTooltipAuxMetric.push(
                <p key={index.toString() + 'contentTooltip12' + this.props.name} style={styleContentAuxMetrics}>
                  - Value : {this.defineAuxMetric(this.props.valuesAuxiliaryMetrics[index - 1])}
                </p>
              );
              contentTooltipAuxMetric.push(
                <p key={index.toString() + 'contentTooltip13' + this.props.name} style={styleContentAuxMetrics}>
                  - Key : {metric.key}
                </p>
              );
              contentTooltipAuxMetric.push(
                <p key={index.toString() + 'contentTooltip14' + this.props.name} style={styleContentAuxMetrics}>
                  - KeyValue : {metric.keyValue}
                </p>
              );
              contentTooltipAuxMetric.push(
                <p key={index.toString() + 'contentTooltip15' + this.props.name} style={styleContentAuxMetrics}>
                  - Type : {metric.manageValue}
                </p>
              );
              index++;
            });
          }
        } else {
          if (this.props.auxiliaryMetricsB.length > 0) {
            contentTooltipAuxMetric.push(
              <p key={'contentTooltip16' + this.props.name} style={styleTitleAuxMetric}>
                Auxiliary Metric
              </p>
            );
            let index = 1;
            this.props.auxiliaryMetricsB.forEach(metric => {
              contentTooltipAuxMetric.push(
                <p key={index.toString() + 'contentTooltip17' + this.props.name} style={styleTitle2AuxMetric}>
                  + Metric {index}
                </p>
              );
              contentTooltipAuxMetric.push(
                <p key={index.toString() + 'contentTooltip18' + this.props.name} style={styleContentAuxMetrics}>
                  - Value : {this.defineAuxMetric(this.props.valuesAuxiliaryMetrics[index - 1])}
                </p>
              );
              contentTooltipAuxMetric.push(
                <p key={index.toString() + 'contentTooltip19' + this.props.name} style={styleContentAuxMetrics}>
                  - Key : {metric.key}
                </p>
              );
              contentTooltipAuxMetric.push(
                <p key={index.toString() + 'contentTooltip20' + this.props.name} style={styleContentAuxMetrics}>
                  - KeyValue : {metric.keyValue}
                </p>
              );
              contentTooltipAuxMetric.push(
                <p key={index.toString() + 'contentTooltip21' + this.props.name} style={styleContentAuxMetrics}>
                  - Type : {metric.manageValue}
                </p>
              );
              index++;
            });
          }
        }
      } else if (typeLink === 'monodirectional') {
        if (this.props.auxiliaryMetrics.length > 0) {
          contentTooltipAuxMetric.push(
            <p key={'contentTooltip22' + this.props.name} style={styleTitleAuxMetric}>
              Auxiliary Metric
            </p>
          );
          let index = 1;
          this.props.auxiliaryMetrics.forEach(metric => {
            contentTooltipAuxMetric.push(
              <p key={index.toString() + 'contentTooltip23' + this.props.name} style={styleTitle2AuxMetric}>
                + Metric {index}
              </p>
            );
            contentTooltipAuxMetric.push(
              <p key={index.toString() + 'contentTooltip14' + this.props.name} style={styleContentAuxMetrics}>
                - Value : {this.defineAuxMetric(this.props.valuesAuxiliaryMetrics[index - 1])}
              </p>
            );
            contentTooltipAuxMetric.push(
              <p key={index.toString() + 'contentTooltip25' + this.props.name} style={styleContentAuxMetrics}>
                - Key : {metric.key}
              </p>
            );
            contentTooltipAuxMetric.push(
              <p key={index.toString() + 'contentTooltip26' + this.props.name} style={styleContentAuxMetrics}>
                - KeyValue : {metric.keyValue}
              </p>
            );
            contentTooltipAuxMetric.push(
              <p key={index.toString() + 'contentTooltip27' + this.props.name} style={styleContentAuxMetrics}>
                - Type : {metric.manageValue}
              </p>
            );
            index++;
          });
        }
      }
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
      const size: string = this.props.size.value || '';
      if (size === 'Small') {
        result = '8';
      } else if (size === 'Medium') {
        result = '9';
      } else if (size === 'Large') {
        result = '10';
      }
    } else {
      result = '9';
    }
    return result;
  };

  render() {
    const xCoordinateA: number = this.synchroLinkX(parseInt(this.props.pointAPositionX, 10));
    const yCoordinateA: number = this.synchroLinkY(parseInt(this.props.pointAPositionY, 10));
    const xCoordinateB: number = this.synchroLinkX(parseInt(this.props.pointBPositionX, 10));
    const yCoordinateB: number = this.synchroLinkY(parseInt(this.props.pointBPositionY, 10));
    const xCoordinateC: number = this.synchroLinkX(parseInt(this.props.pointCPositionX, 10));
    const yCoordinateC: number = this.synchroLinkY(parseInt(this.props.pointCPositionY, 10));
    const orientationLink: string = this.props.orientationLink;

    // rops.associatePointIn)
    // rops.associatePointOut)
    // rops.associateRegionIn)
    // rops.associateRegionOut)
    // const labelA: string = this.props.labelA;
    // const labelB: string = this.props.labelB;
    // const labelAPositionX: number = parseInt(this.props.labelAPositionX, 10);
    // const labelAPositionY: number = parseInt(this.props.labelAPositionY, 10) * (-1);
    // const labelBPositionX: number = parseInt(this.props.labelBPositionX, 10);
    // const labelBPositionY: number = parseInt(this.props.labelBPositionY, 10) * (-1);
    // const associatePointIn: SelectableValue<PointClass> = this.props.associatePointIn || {};
    // const associatePointOut: SelectableValue<PointClass> = this.props.associatePointOut || {};
    // const associateRegionIn: SelectableValue<RegionClass> = this.props.associateRegionIn || {};
    // const associateRegionOut: SelectableValue<RegionClass> = this.props.associateRegionOut || {};
    // const xMinAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.xMin || '0');
    // const xMaxAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.xMax || '0');
    // const xMinAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.xMin || '0');
    // const xMaxAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.xMax || '0');
    // const yMinAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.yMin || '0');
    // const yMaxAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.yMax || '0');
    // const yMinAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.yMin || '0');
    // const yMaxAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.yMax || '0');
    // const xRegionIn: number = this.synchroLinkX((xMaxAssociateRegionIn + xMinAssociateRegionIn) / 2, defineCenter);
    // const yRegionIn: number = this.synchroLinkY((yMaxAssociateRegionIn + yMinAssociateRegionIn) / 2, defineCenter);
    // const xRegionOut: number = this.synchroLinkX((xMaxAssociateRegionOut + xMinAssociateRegionOut) / 2, defineCenter);
    // const yRegionOut: number = this.synchroLinkY((yMaxAssociateRegionOut + yMinAssociateRegionOut) / 2, defineCenter);

    return <div>{this.drawLink(xCoordinateA, yCoordinateA, xCoordinateB, yCoordinateB, xCoordinateC, yCoordinateC, orientationLink)}</div>;
  }
}
