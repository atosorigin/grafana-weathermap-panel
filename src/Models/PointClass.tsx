import { SelectableValue } from '@grafana/data';
import { CoordinateSpaceClass } from './CoordinateSpaceClass';
import { LinkURLClass } from './LinkURLClass';
import { LowerLimitClass } from './LowerLimitClass';
import { TextObject } from './TextObjectClass';
import { Metric } from 'types';
//import { LinkClass } from './LinkClass';
import { PositionParameterClass } from './PositionParameterClass';

/**
 * to do
 */
export class PointClass extends CoordinateSpaceClass {
  name: string;
  valueMetric: string;
  drawGraphicMarker: SelectableValue<string>;
  shape: SelectableValue<string>;
  sizeWidth: SelectableValue<string>;
  sizeHeight: SelectableValue<string>;
  rotateArrow: string;
  positionShapeX: string;
  positionShapeY: string;
  color: string;
  associateOrientedLinksIn: any[];
  associateOrientedLinksOut: any[];
  widthInitialSpaceDefault: string;
  heightInitialSpaceDefault: string;
  positionXDefault: string;
  positionYDefault: string;

  constructor(
    id: number,
    linkURL: LinkURLClass,
    meta: string,
    lowerLimitClass: LowerLimitClass[],
    label: string,
    textObj: TextObject,
    mainMetric: Metric,
    metrics: Metric[],
    colorMode: boolean,
    traceBack: boolean,
    traceBorder: boolean,
    positionParameter: PositionParameterClass,
    name: string,
    valueMetric: string,
    drawGraphicMarker: SelectableValue<string>,
    shape: SelectableValue<string>,
    sizeWidth: SelectableValue<string>,
    sizeHeight: SelectableValue<string>,
    rotateArrow: string,
    positionShapeX: string,
    positionShapeY: string,
    color: string,
    associateOrientedLinksIn: any[],
    associateOrientedLinksOut: any[],
    widthInitialSpaceDefault: string,
    heightInitialSpaceDefault: string,
    positionXDefault: string,
    positionYDefault: string
  ) {
    super(id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, positionParameter);
    this.name = name;
    this.valueMetric = valueMetric;
    this.drawGraphicMarker = drawGraphicMarker;
    this.shape = shape;
    this.sizeWidth = sizeWidth;
    this.sizeHeight = sizeHeight;
    this.rotateArrow = rotateArrow;
    this.positionShapeX = positionShapeX;
    this.positionShapeY = positionShapeY;
    this.color = color;
    this.associateOrientedLinksIn = associateOrientedLinksIn;
    this.associateOrientedLinksOut = associateOrientedLinksOut;
    this.widthInitialSpaceDefault = widthInitialSpaceDefault;
    this.heightInitialSpaceDefault = heightInitialSpaceDefault;
    this.positionXDefault = positionXDefault;
    this.positionYDefault = positionYDefault;
  }
}
