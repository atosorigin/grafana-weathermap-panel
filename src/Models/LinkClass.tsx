import { SelectableValue } from '@grafana/data';
import { PointClass } from './PointClass';
import { LinkURLClass } from './LinkURLClass';
import { LowerLimitClass } from './LowerLimitClass';
import { TextObject } from './TextObjectClass';
import { Metric } from 'types';
import { CoordinateSpaceClass } from './CoordinateSpaceClass';
import { RegionClass } from './RegionClass';
import { PositionParameterClass } from './PositionParameterClass';

export class LinkClass extends CoordinateSpaceClass {
  /**
   * Définit la manière dont on souhaite récupérer les coordonnées des extrémités (deux couples de coordonnées):
   * 		1 - Par un couple de coordonnées saisie
   * 		2 - A partir de deux identifiants de points définis dans l'onglet Point
   * 		3 - A partir de l'identifiant Région
   */
  name: string;
  defineHowToGetCoordonate: SelectableValue<string>;
  orientationLink: SelectableValue<string>;
  pointAPositionX: string;
  pointAPositionY: string;
  colorCoordinateA: string;
  pointBPositionX: string;
  pointBPositionY: string;
  colorCoordinateB: string;
  pointIn: SelectableValue<PointClass>;
  pointOut: SelectableValue<PointClass>;
  regionIn: SelectableValue<RegionClass>;
  colorRegionIn: string;
  regionOut: SelectableValue<RegionClass>;
  colorRegionOut: string;
  labelLinkA: string;
  positionXLabelA: string;
  positionYLabelA: string;
  labelLinkB: string;
  positionXLabelB: string;
  positionYLabelB: string;

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
    defineHowToGetCoordonate: SelectableValue<string>,
    orientationLink: SelectableValue<string>,
    pointAPositionX: string,
    pointAPositionY: string,
    colorCoordinateA: string,
    pointBPositionX: string,
    pointBPositionY: string,
    colorCoordinateB: string,
    pointIn: SelectableValue<PointClass>,
    pointOut: SelectableValue<PointClass>,
    regionIn: SelectableValue<RegionClass>,
    colorRegionIn: string,
    regionOut: SelectableValue<RegionClass>,
    colorRegionOut: string,
    labelLinkA: string,
    positionXLabelA: string,
    positionYLabelA: string,
    labelLinkB: string,
    positionXLabelB: string,
    positionYLabelB: string
  ) {
    super(id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, positionParameter);
    this.name = name;
    this.defineHowToGetCoordonate = defineHowToGetCoordonate;
    this.orientationLink = orientationLink;
    this.pointAPositionX = pointAPositionX;
    this.pointAPositionY = pointAPositionY;
    this.colorCoordinateA = colorCoordinateA;
    this.pointBPositionX = pointBPositionX;
    this.pointBPositionY = pointBPositionY;
    this.colorCoordinateB = colorCoordinateB;
    this.pointIn = pointIn;
    this.pointOut = pointOut;
    this.regionIn = regionIn;
    this.colorRegionIn = colorRegionIn;
    this.regionOut = regionOut;
    this.colorRegionOut = colorRegionOut;
    this.labelLinkA = labelLinkA;
    this.positionXLabelA = positionXLabelA;
    this.positionYLabelA = positionYLabelA;
    this.labelLinkB = labelLinkB;
    this.positionXLabelB = positionXLabelB;
    this.positionYLabelB = positionYLabelB;
  }
}
