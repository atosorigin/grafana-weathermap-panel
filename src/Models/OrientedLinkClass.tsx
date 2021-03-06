import { SelectableValue } from '@grafana/data';
import { LinkURLClass } from './LinkURLClass';
import { LowerLimitClass } from './LowerLimitClass';
import { TextObject } from './TextObjectClass';
import { Metric, Metadata } from 'types';
import { CoordinateSpaceClass } from './CoordinateSpaceClass';
import { PositionParameterClass } from './PositionParameterClass';

export class OrientedLinkClass extends CoordinateSpaceClass {
  name: string;
  orientationLink: SelectableValue<string>;
  size: string;
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
  mainMetricB: Metric;
  metricsB: Metric[];
  widthInitialSpaceDefault: string;
  heightInitialSpaceDefault: string;
  pointAPositionXDefault: string;
  pointAPositionYDefault: string;
  pointBPositionXDefault: string;
  pointBPositionYDefault: string;
  pointCPositionXDefault: string;
  pointCPositionYDefault: string;

  constructor(
    id: number,
    linkURL: LinkURLClass,
    meta: Metadata[],
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
    size: string,
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
    isIncurved: SelectableValue<boolean>,
    mainMetricB: Metric,
    metricsB: Metric[],
    widthInitialSpaceDefault: string,
    heightInitialSpaceDefault: string,
    pointAPositionXDefault: string,
    pointAPositionYDefault: string,
    pointBPositionXDefault: string,
    pointBPositionYDefault: string,
    pointCPositionXDefault: string,
    pointCPositionYDefault: string
  ) {
    super(id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, positionParameter);
    this.name = name;
    this.orientationLink = orientationLink;
    this.size = size;
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
    this.mainMetricB = mainMetricB;
    this.metricsB = metricsB;
    this.widthInitialSpaceDefault = widthInitialSpaceDefault;
    this.heightInitialSpaceDefault = heightInitialSpaceDefault;
    this.pointAPositionXDefault = pointAPositionXDefault;
    this.pointAPositionYDefault = pointAPositionYDefault;
    this.pointBPositionXDefault = pointBPositionXDefault;
    this.pointBPositionYDefault = pointBPositionYDefault;
    this.pointCPositionXDefault = pointCPositionXDefault;
    this.pointCPositionYDefault = pointCPositionYDefault;
  }
}
