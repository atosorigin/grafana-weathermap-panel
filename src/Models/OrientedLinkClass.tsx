import { SelectableValue } from '@grafana/data';
import { PointClass } from './PointClass';
import { RegionClass } from './RegionClass';
import { LinkURLClass } from './LinkURLClass';
import { LowerLimitClass } from './LowerLimitClass';
import { TextObject } from './TextObjectClass';
import { IMetric } from 'types';
import { CoordinateSpaceClass } from './CoordinateSpaceClass';
import { PositionParameterClass } from './PositionParameterClass';

export class OrientedLinkClass extends CoordinateSpaceClass {

	public name: string;
	public orientationLink: SelectableValue<string>;
	public pointAPositionX: string;
	public pointAPositionY: string;
	public colorCoordinateA: string;
	public pointBPositionX: string;
	public pointBPositionY: string;
	public colorCoordinateB: string;
	public valueMainMetricA: string;
	public valueMainMetricB: string;
	public pointIn: SelectableValue<PointClass>;
	public pointOut: SelectableValue<PointClass>;
	public regionIn: SelectableValue<RegionClass>;
	public regionOut: SelectableValue<RegionClass>;
	public zIndex: number;

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
		orientationLink: SelectableValue<string>,
		pointAPositionX: string,
		pointAPositionY: string,
		colorCoordinateA: string,
		pointBPositionX: string,
		pointBPositionY: string,
		colorCoordinateB: string,
		valueMainMetricA: string,
		valueMainMetricB: string,
		pointIn: SelectableValue<PointClass>,
		pointOut: SelectableValue<PointClass>,
		regionIn: SelectableValue<RegionClass>,
		regionOut: SelectableValue<RegionClass>,
		zIndex: number
	) {
		super(id, linkURL, meta,
			lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, positionParameter);
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
	}
}
