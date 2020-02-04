import { EspaceCoordonneesClass } from './EspaceCoordonneesClass';

export class EspaceCoordonneesExtendClass extends EspaceCoordonneesClass {
	public img: string;
	public interfaceJson: string;

	constructor(
		id: number,
		xMin: string,
		xMax: string,
		yMin: string,
		yMax: string,
		label: string,
		img: string,
		pInterface: string,
	) {
		super(id, xMin, xMax, yMin, yMax, label);
		this.img = img;
		this.interfaceJson = pInterface;
	}

	get getImg(): string {
		return this.img;
	}

	get getInterfaceJson(): string {
		return this.interfaceJson;
	}

	set setImg(img: string) {
		this.img = img;
	}

	set setInterfaceJson(interfaceJson: string) {
		this.interfaceJson = interfaceJson;
	}
}