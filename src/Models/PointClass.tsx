import { SelectableValue } from '@grafana/data';
import { RegionClass } from './RegionClass';
import { CoordinateSpaceClass } from './CoordinateSpaceClass';
import { LinkURLClass } from './LinkURLClass';
import { LowerLimitClass } from './LowerLimitClass';
import { TextObject } from './TextObjectClass';
import { IMetric } from 'types';
import { OrientedLinkClass } from './OrientedLinkClass';
import { LinkClass } from './LinkClass';
import { PositionParameterClass } from './PositionParameterClass';


/**
 * to do
 */
export class PointClass extends CoordinateSpaceClass {

	public name: string;
	public valueMetric: string;
	public coordinateSpace: SelectableValue<RegionClass>;
	public drawGraphicMarker: SelectableValue<string>;
	public shape: SelectableValue<string>;
	public sizeWidth: SelectableValue<string>;
	public sizeHeight: SelectableValue<string>;
	public rotateArrow: string;
	public positionShapeX: string;
	public positionShapeY: string;
	public color: string;
	public associateLinkIn: LinkClass[];
	public associateLinkOut: LinkClass[];
	public associateOrientedLinksIn: OrientedLinkClass[]; 
	public associateOrientedLinksOut: OrientedLinkClass[]; 

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
		name: string,
		valueMetric: string,
		coordinateSpace: SelectableValue<RegionClass>,
		drawGraphicMarker: SelectableValue<string>,
		shape: SelectableValue<string>,
		sizeWidth: SelectableValue<string>,
		sizeHeight: SelectableValue<string>,
		rotateArrow: string,
		positionShapeX: string,
		positionShapeY: string,
		color: string,
		associateLinkIn: LinkClass[],
		associateLinkOut: LinkClass[],
		associateOrientedLinksIn: OrientedLinkClass[],
		associateOrientedLinksOut: OrientedLinkClass[],
	) {
		super(id, linkURL, meta,
			lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, positionParameter);
		this.name = name;
		this.valueMetric = valueMetric;
		this.coordinateSpace = coordinateSpace;
		this.drawGraphicMarker = drawGraphicMarker;
		this.shape = shape;
		this.sizeWidth = sizeWidth;
		this.sizeHeight = sizeHeight;
		this.rotateArrow = rotateArrow;
		this.positionShapeX = positionShapeX;
		this.positionShapeY = positionShapeY;
		this.color = color;
		this.associateLinkIn = associateLinkIn;
		this.associateLinkOut = associateLinkOut;
		this.associateOrientedLinksIn = associateOrientedLinksIn;
		this.associateOrientedLinksOut = associateOrientedLinksOut;
	}
}