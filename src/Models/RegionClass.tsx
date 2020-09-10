import { CoordinateSpaceClass } from './CoordinateSpaceClass';
import { OrientedLinkClass } from './OrientedLinkClass';
import { LowerLimitClass } from './LowerLimitClass';
import { TextObject } from './TextObjectClass';
import { LinkURLClass } from './LinkURLClass';
import { Metric, Metadata } from 'types';
import { PositionParameterClass } from './PositionParameterClass';

export interface Coord4D {
  /** coordinate x min */
  xMin: string;
  /** coordinate x max */
  xMax: string;
  /** coordinate y min */
  yMin: string;
  /** coordinate y max */
  yMax: string;
}

export class RegionClass extends CoordinateSpaceClass {
  /** id of region object svg */
  idSVG: string;
  /** id svg or coordinate */
  mode: boolean;
  orientedLink: OrientedLinkClass[];
  /** if coordinate mode, stock coordinate here */
  coords: Coord4D;
  /** coordinate to creation */
  coordsDefault: Coord4D;
  /** background image region if coordinate mode */
  img: string;
  /** width of initial */
  widthInitialSpaceDefault: string;
  /** height of initial */
  heightInitialSpaceDefault: string;

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
    idSVG: string,
    orientedLink: OrientedLinkClass[],
    coords: Coord4D,
    coordsDefault: Coord4D,
    mode: boolean,
    img: string,
    widthInitialSpaceDefault: string,
    heightInitialSpaceDefault: string
  ) {
    super(id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, positionParameter);
    this.idSVG = idSVG;
    this.mode = mode;
    this.orientedLink = orientedLink;
    this.coords = coords;
    this.coordsDefault = coordsDefault;
    this.img = img;
    this.widthInitialSpaceDefault = widthInitialSpaceDefault;
    this.heightInitialSpaceDefault = heightInitialSpaceDefault;
  }
}
