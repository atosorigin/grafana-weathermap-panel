import { SelectableValue } from '@grafana/data';
import { LinkURLClass } from './LinkURLClass';
import { LowerLimitClass } from './LowerLimitClass';
import { TextObject } from './TextObjectClass';
import { Metric } from 'types';
import { CoordinateSpaceClass } from './CoordinateSpaceClass';
import { PositionParameterClass } from './PositionParameterClass';

export class OrientedLinkClass extends CoordinateSpaceClass {
  name: string;
  orientationLink: SelectableValue<string>;
  pointAPositionX: string;
  pointAPositionY: string;
  colorCoordinateA: string;
  pointBPositionX: string;
  pointBPositionY: string;
  colorCoordinateB: string;
  valueMainMetricA: string;
  valueMainMetricB: string;
  pointIn: string;
  pointOut: string;
  regionIn: string;
  regionOut: string;
  zIndex: number;
  pointCPositionX: string;
  pointCPositionY: string;
  isIncurved: SelectableValue<boolean>;

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
    orientationLink: SelectableValue<string>,
    pointAPositionX: string,
    pointAPositionY: string,
    colorCoordinateA: string,
    pointBPositionX: string,
    pointBPositionY: string,
    colorCoordinateB: string,
    valueMainMetricA: string,
    valueMainMetricB: string,
    pointIn: string,
    pointOut: string,
    regionIn: string,
    regionOut: string,
    zIndex: number,
    pointCPositionX: string,
    pointCPositionY: string,
    isIncurved: SelectableValue<boolean>
  ) {
    super(id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, positionParameter);
    this.name = name;
    this.orientationLink = orientationLink;
    this.pointAPositionX = pointAPositionX;
    this.pointAPositionY = pointAPositionY;
    this.colorCoordinateA = colorCoordinateA;
    this.pointBPositionX = pointBPositionX;
    this.pointBPositionY = pointBPositionY;
    this.colorCoordinateB = colorCoordinateB;
    this.valueMainMetricA = valueMainMetricA;
    this.valueMainMetricB = valueMainMetricB;
    this.pointIn = pointIn;
    this.pointOut = pointOut;
    this.regionIn = regionIn;
    this.regionOut = regionOut;
    this.zIndex = zIndex;
    this.pointCPositionX = pointCPositionX;
    this.pointCPositionY = pointCPositionY;
    this.isIncurved = isIncurved;
  }
}
