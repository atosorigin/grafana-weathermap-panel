export class LowerLimitClass {
	public id: number;
	public seuilMin: string;
	public seuilMax: string;
	public couleurFond: string;
	public couleurContour: string;
	public sizeContour: string;
	constructor(
		id: number,
		seuilMin: string,
		seuilMax: string,
		couleurFond: string,
		couleurContour: string,
		sizeContour: string
	) {
		this.id = id;
		this.seuilMin = seuilMin;
		this.seuilMax = seuilMax;
		this.couleurFond = couleurFond;
		this.couleurContour = couleurContour;
		this.sizeContour = sizeContour;
	}

	public get getId(): number {
		return this.id;
	}

	public set setId(id: number) {
		this.id = id;
	}

	public get getSeuilMin(): string {
		return this.seuilMin;
	}

	public set setSeuilMin(seuilMin: string) {
		this.seuilMin = seuilMin;
	}

	public get getSeuilMax(): string {
		return this.seuilMax;
	}

	public set setSeuilMax(seuilMax: string) {
		this.seuilMax = seuilMax;
	}

	public get getSeuilCouleurFond(): string {
		return this.couleurFond;
	}

	public set setSeuilCouleurFond(couleur: string) {
		this.couleurFond = couleur;
	}

	public get getSeuilCouleurContour(): string {
		return this.couleurContour;
	}

	public set setSeuilCouleurContour(couleur: string) {
		this.couleurContour = couleur;
	}

	public get getSizeContour(): string {
		return this.sizeContour;
	}

	public set setSizeContour(size: string) {
		this.sizeContour = size;
	}
}
