/** value of textObjects component */
export class TextObject {
	/** legend object */
	public legend: string;
	/** object value */
	public value: string;
	/** object unity */
	public unit: string;
	/** text display in element or tooltip */
	public isTextRegion: boolean;
	/** back color region */
	public colorBack: string;
	/** color text region */
	public colorText: string;
	/** style text region */
	public styleText: string;
	/** generate object text */
	public generateObjectText: boolean;
	/** legend element */
	public legendElement: string;
	/** numeric format element */
	public numericFormatElement: string;
	/** unity mesure element */
	public unityMesureElement: string;
	/** display object in text */
	public displayObjectInText: boolean;
	/** display object permanently */
	public displayObjectPermanently: boolean;
	/** color text element active */
	public addColorTextElement: boolean;
	/** color text element */
	public colorTextElement: string;
	/** color back element active */
	public addColorBackElement: boolean;
	/** color back element */
	public colorBackElement: string;

	constructor(
		legend: string,
		value: string,
		unit: string,
		isTextRegion: boolean,
		colorBack: string,
		colorText: string,
		styleText: string,
		generateObjectText: boolean,
		legendElement: string,
		numericFormatElement: string,
		unityMesureElement: string,
		displayObjectInText: boolean,
		displayObjectPermanently: boolean,
		addColorTextElement: boolean,
		colorTextElement: string,
		addColorBackElement: boolean,
		colorBackElement: string
	) {
		this.legend = legend;
		this.value = value;
		this.unit = unit;
		this.isTextRegion = isTextRegion;
		this.colorBack = colorBack;
		this.colorText = colorText;
		this.styleText = styleText;
		this.generateObjectText = generateObjectText;
		this.legendElement = legendElement;
		this.numericFormatElement = numericFormatElement;
		this.unityMesureElement = unityMesureElement;
		this.displayObjectInText = displayObjectInText;
		this.displayObjectPermanently = displayObjectPermanently;
		this.addColorTextElement = addColorTextElement;
		this.colorTextElement = colorTextElement;
		this.addColorBackElement = addColorBackElement;
		this.colorBackElement = colorBackElement;
	}
}
