export class LowerLimitClass {
	public id: number;
	public lowerLimitMin: string;
	public lowerLimitMax: string;
	public backColor: string;
	public borderColor: string;
	public sizeBorder: string;
	constructor(
		id: number,
		lowerLimitMin: string,
		lowerLimitMax: string,
		backColor: string,
		borderColor: string,
		sizeBorder: string
	) {
		this.id = id;
		this.lowerLimitMin = lowerLimitMin;
		this.lowerLimitMax = lowerLimitMax;
		this.backColor = backColor;
		this.borderColor = borderColor;
		this.sizeBorder = sizeBorder;
	}

	public get getId(): number {
		return this.id;
	}

	public set setId(id: number) {
		this.id = id;
	}

	public get getlowerLimitMin(): string {
		return this.lowerLimitMin;
	}

	public set setlowerLimitMin(lowerLimitMin: string) {
		this.lowerLimitMin = lowerLimitMin;
	}

	public get getlowerLimitMax(): string {
		return this.lowerLimitMax;
	}

	public set setlowerLimitMax(lowerLimitMax: string) {
		this.lowerLimitMax = lowerLimitMax;
	}

	public get getSeuilbackColor(): string {
		return this.backColor;
	}

	public set setSeuilbackColor(couleur: string) {
		this.backColor = couleur;
	}

	public get getSeuilborderColor(): string {
		return this.borderColor;
	}

	public set setSeuilborderColor(couleur: string) {
		this.borderColor = couleur;
	}

	public get getsizeBorder(): string {
		return this.sizeBorder;
	}

	public set setsizeBorder(size: string) {
		this.sizeBorder = size;
	}
}
