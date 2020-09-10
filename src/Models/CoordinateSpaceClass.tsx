import { LinkURLClass } from './LinkURLClass';
import { LowerLimitClass } from './LowerLimitClass';
import { TextObject } from './TextObjectClass';
import { Metric, Metadata } from 'types';
import { PositionParameterClass } from 'Models/PositionParameterClass';

export class CoordinateSpaceClass {
  /** coordinate id */
  id: number;
  /** query */
  linkURL: LinkURLClass;
  meta: Metadata[];
  lowerLimit: LowerLimitClass[];
  label: string;
  textObj: TextObject;
  mainMetric: Metric;
  metrics: Metric[];
  colorMode: boolean;
  traceBack: boolean;
  traceBorder: boolean;
  positionParameter: PositionParameterClass;

  constructor(
    id: number,
    linkURL: LinkURLClass,
    meta: Metadata[],
    lowerLimit: LowerLimitClass[],
    label: string,
    textObj: TextObject,
    mainMetric: Metric,
    metrics: Metric[],
    colorMode: boolean,
    traceBack: boolean,
    traceBorder: boolean,
    positionParameter: PositionParameterClass
  ) {
    this.id = id;
    this.linkURL = linkURL;
    this.meta = meta;
    this.lowerLimit = lowerLimit;
    this.label = label;
    this.textObj = textObj;
    this.mainMetric = mainMetric;
    this.metrics = metrics;
    this.colorMode = colorMode;
    this.traceBack = traceBack;
    this.traceBorder = traceBorder;
    this.positionParameter = positionParameter;
  }
}
