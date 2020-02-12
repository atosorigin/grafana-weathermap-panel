import { CoordinateSpaceClass } from './CoordinateSpaceClass';
import { TextObject } from './TextObjectClass';
import { ParametrageMetrique } from './SettingMetricClass';
import { OrientedLinkClass } from './OrientedLinkClass';
import { DataFrame } from '@grafana/data';

/** model for coordinate space */
export class CoordinateSpaceExtendClass extends CoordinateSpaceClass {
	/** image to coordinate space */
	public img: string;
	/** interface. Actually it's request to prometheus */
	public interfaceJson: string;
	/** text object (see TextObject class) */
	public textObject: TextObject;

	public parametrageMetric: ParametrageMetrique;
	public key: string;
	public valueKey: string;
	public associateOrientedLink?: OrientedLinkClass[];
	public dataQuery?: DataFrame;

	constructor(
		id: number,
		xMin: string,
		xMax: string,
		yMin: string,
		yMax: string,
		label: string,
		pImg: string,
		pInterface: string,
		pTextObject: TextObject,
		pParametrageMetric: ParametrageMetrique,
		key: string,
		valueKey: string,
		associateOrientedLink?: OrientedLinkClass[],
		pDataQuery?: DataFrame
	) {
		super(id, xMin, xMax, yMin, yMax, label);
		this.img = pImg;
		this.interfaceJson = pInterface;
		this.textObject = pTextObject;
		this.parametrageMetric = pParametrageMetric;
		this.key = key;
		this.valueKey = valueKey;
		this.associateOrientedLink = associateOrientedLink;
		this.dataQuery = pDataQuery;
	}
}
