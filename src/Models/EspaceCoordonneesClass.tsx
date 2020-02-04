/**
 * class EspaceCoordonneesClass
 */
export class EspaceCoordonneesClass {
	public id: number;
	public xMin: string;
	public xMax: string;
	public yMin: string;
	public yMax: string;
	public label: string;
	/**
	 * r
	 * @param id r
	 * @param xMin r
	 * @param xMax r
	 * @param yMin r
	 * @param yMax r
	 * @param label r
	 */
	constructor(
		id: number,
		xMin: string,
		xMax: string,
		yMin: string,
		yMax: string,
		label: string,
	) {
		this.id = id;
		this.xMin = xMin;
		this.xMax = xMax;
		this.yMin = yMin;
		this.yMax = yMax;
		this.label = label;
	}

	public getId(): number {
		return this.id;
	}

	public setId(id: number) {
		this.id = id;
	}

	public getXMin(): string {
		return this.xMin;
	}

	public setXMin(xMin: string) {
		this.xMin = xMin;
	}

	public getXMax(): string {
		return this.xMax;
	}

	public setXMax(xMax: string) {
		this.xMax = xMax;
	}

	public getYMin(): string {
		return this.yMin;
	}

	public setYMin(yMin: string) {
		this.yMin = yMin;
	}

	public getYMax(): string {
		return this.yMax;
	}

	public setYMax(yMax: string) {
		this.yMax = yMax;
	}

	public getLabel(): string {
		return this.label;
	}

	public setLabel(label: string) {
		this.label = label;
	}
}
