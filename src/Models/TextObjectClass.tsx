interface IGenerateTextObject {
	/** legend element */
	legendElement: string;
	/** numeric format element */
	numericFormatElement: string;
	/** unity mesure element */
	unit: string;
	/** display object in text */
	displayObjectInText: boolean;
	/** display object permanently */
	// displayObjectPermanently: boolean;
	/** color text element active */
	addColorTextElement: boolean;
	/** color text element */
	colorTextElement: string;
	/** color back element active */
	addColorBackElement: boolean;
	/** color back element */
	colorBackElement: string;
}

/** value of textObjects component */
export class TextObject {
	/** legend object */
	// public legend: boolean;
	/** object value */
	public value: string;
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
	/** if generateObjectText is true when use variable to stock data */
	public valueGenerateObjectText: IGenerateTextObject;
	/** text value for auxiliary metrics */
	public generateAuxiliaryElement: IGenerateTextObject;

	constructor(
		// legend: boolean,
		value: string,
		isTextRegion: boolean,
		colorBack: string,
		colorText: string,
		styleText: string,
		generateObjectText: boolean,
		valueGenerateObjectText: IGenerateTextObject,
		generateAuxiliaryElement: IGenerateTextObject
	) {
		// this.legend = legend;
		this.value = value;
		this.isTextRegion = isTextRegion;
		this.colorBack = colorBack;
		this.colorText = colorText;
		this.styleText = styleText;
		this.generateObjectText = generateObjectText;
		this.valueGenerateObjectText = valueGenerateObjectText;
		this.generateAuxiliaryElement = generateAuxiliaryElement;
	}
}
