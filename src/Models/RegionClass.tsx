import { CoordinateSpaceClass } from './CoordinateSpaceClass';
import { OrientedLinkClass } from './OrientedLinkClass';
import { LowerLimitClass } from './LowerLimitClass';
import { TextObject } from './TextObjectClass';
import { LinkURLClass } from './LinkURLClass';
import { IMetric } from 'types';

export interface ICoord4D {
	xMin: string;
	xMax: string;
	yMin: string;
	yMax: string;
}

export class RegionClass extends CoordinateSpaceClass {
	/** id of region object svg */
	public idSVG: string;
	public orientedLink: OrientedLinkClass[];
	public coords: ICoord4D;
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
		idSVG: string,
		orientedLink: OrientedLinkClass[],
		coords: ICoord4D,
		img: string
		// refId?: DataFrame
	) {
		super(id, linkURL, meta,
			lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder);
		this.idSVG = idSVG;
		this.orientedLink = orientedLink;
		this.coords = coords;
		this.img = img;
	}
}