import { LinkURLClass } from './LinkURLClass';
import { LowerLimitClass } from './LowerLimitClass';
import { TextObject } from './TextObjectClass';
import { IMetric } from 'types';

export class CoordinateSpaceClass {
	/** coordinate id */
	public id: number;
	/** query */
	public linkURL: LinkURLClass;
	public meta: string;
	public lowerLimit: LowerLimitClass[];
	public label: string;
	public textObj: TextObject;
	public mainMetric: IMetric;
	public metrics: Array<IMetric>;
	public colorMode: boolean;
	public traceBack: boolean;
	public traceBorder: boolean;

	constructor(
		id: number,
		linkURL: LinkURLClass,
		meta: string,
		lowerLimit: LowerLimitClass[],
		label: string,
		textObj: TextObject,
		mainMetric: IMetric,
		metrics: Array<IMetric>,
		colorMode: boolean,
		traceBack: boolean,
		traceBorder: boolean
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
	}
}