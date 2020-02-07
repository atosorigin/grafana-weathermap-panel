import { EspaceCoordonneesClass } from './EspaceCoordonneesClass';
import { TextObject } from './TextObject';
import { ParametrageMetrique } from './parametrageMetrique';
import { OrientedLinkClass } from './OrientedLinkClass';

export class EspaceCoordonneesExtendClass extends EspaceCoordonneesClass {
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
	) {
		super(id, xMin, xMax, yMin, yMax, label);
		this.img = pImg;
		this.interfaceJson = pInterface;
		this.textObject = pTextObject;
		this.parametrageMetric = pParametrageMetric;
		this.key = key;
		this.valueKey = valueKey;
		this.associateOrientedLink = associateOrientedLink;
	}

	get getImg(): string {
		return this.img;
	}

	set setImg(img: string) {
		this.img = img;
	}
}