
/*!
 * Atos Opensource 2019
 */

/**
 * class EspaceCoordonneesClass
 */
export class EspaceCoordonneesClass {
	public id: number;
	public xMin: number;
	public xMax: number;
	public yMin: number;
	public yMax: number;
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
		xMin: number,
		xMax: number,
		yMin: number,
		yMax: number,
		label: string,
	) {
		this.id = id;
		this.xMin = xMin;
		this.xMax = xMax;
		this.yMin = yMin;
		this.yMax = yMax;
		this.label = label;
	}

	getId(): number {
		return this.id;
	}

	public setId(id: number) {
		this.id = id;
	}

	public getXMin(): number {
		return this.xMin;
	}

	public setXMin(xMin: number) {
		this.xMin = xMin;
	}

	public getXMax(): number {
		return this.xMax;
	}

	public setXMax(xMax: number) {
		this.xMax = xMax;
	}

	public getYMin(): number {
		return this.yMin;
	}

	public setYMin(yMin: number) {
		this.yMin = yMin;
	}

	public getYMax(): number {
		return this.yMax;
	}

	public setYMax(yMax: number) {
		this.yMax = yMax;
	}

	public getLabel(): string {
		return this.label;
	}

	public setLabel(label: string) {
		this.label = label;
	}
}

// /*!
//  * Atos Opensource 2019
//  */

// interface IEspaceCoordonneesClass {
// 	id: number;
// 	xMin: number;
// 	xMax: number;
// 	yMin: number;
// 	yMax: number;
// 	label: string;
// }

// /**
//  * class EspaceCoordonneesClass
//  */
// class EspaceCoordonneesClass implements IEspaceCoordonneesClass {

// 	private constructor(private initData: IEspaceCoordonneesClass) {

// 	}

// 	/**
// 	 * id
// 	 */
// 	public get id() {
// 		return this.initData.id;
// 	}

// 	public set id(id: number) {
// 		this.initData.id = id;
// 	}

// 	/**
// 	 * get number
// 	 */
// 	public get xMin(): number {
// 		return this.initData.xMin;
// 	}

// 	public set xMin(xMin: number) {
// 		this.initData.xMin = xMin;
// 	}

// 	public get xMax(): number {
// 		return this.initData.xMax;
// 	}

// 	public set xMax(xMax: number) {
// 		this.initData.xMax = xMax;
// 	}

// 	public get yMin(): number {
// 		return this.initData.yMin;
// 	}

// 	public set yMin(yMin: number) {
// 		this.initData.yMin = yMin;
// 	}

// 	public get yMax(): number {
// 		return this.initData.yMax;
// 	}

// 	public set yMax(yMax: number) {
// 		this.initData.yMax = yMax;
// 	}

// 	public get label(): string {
// 		return this.initData.label;
// 	}

// 	public set label(label: string) {
// 		this.initData.label = label;
// 	}

// 	/**
// 	 * name
// 	 */
// 	public name() {
// 		console.log('ddd');
// 	}

// 	/**
// 	 * return object
// 	 */
// 	public ToString = () => 'id: ' + this.initData.id
// 			+ ', xMin: ' + this.initData.xMin
// 			+ ', xMax: ' + this.initData.xMax
// 			+ ', yMin: ' + this.initData.yMin
// 			+ 'yMax: ' + this.initData.yMax
// 			+ ', label: ' + this.initData.label;
// }
// export { EspaceCoordonneesClass };
