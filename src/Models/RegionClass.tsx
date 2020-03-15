import { CoordinateSpaceClass } from './CoordinateSpaceClass';
import { OrientedLinkClass } from './OrientedLinkClass';
import { LowerLimitClass } from './LowerLimitClass';
import { TextObject } from './TextObjectClass';
import { LinkURLClass } from './LinkURLClass';
import { IMetric } from 'types';
import { PositionParameterClass } from './PositionParameterClass';

export interface ICoord4D {
	/** coordinate x min */
	xMin: string;
	xMax: string;
	yMin: string;
	yMax: string;
}

export class RegionClass extends CoordinateSpaceClass {
	/** id of region object svg */
	public idSVG: string;
	/** id svg or coordinate */
	public mode: boolean;
	public orientedLink: OrientedLinkClass[];
	/** if coordinate mode, stock coordinate here */
	public coords: ICoord4D;
	/** background image region if coordinate mode */
	public img: string;

	constructor(
		id: number,
		linkURL: LinkURLClass,
		meta: string,
		lowerLimitClass: LowerLimitClass[],
		label: string,
		textObj: TextObject,
		mainMetric: IMetric,
		metrics: Array<IMetric>,
		colorMode: boolean,
		traceBack: boolean,
		traceBorder: boolean,
		positionParameter: PositionParameterClass,
		idSVG: string,
		orientedLink: OrientedLinkClass[],
		coords: ICoord4D,
		mode: boolean,
		img: string
	) {
		super(id, linkURL, meta,
			lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, positionParameter);
		this.idSVG = idSVG;
		this.mode = mode;
		this.orientedLink = orientedLink;
		this.coords = coords;
		this.img = img;
	}
}
