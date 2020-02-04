/** value of textObjects component */
export class TextObject {
	/** legende object */
	public legende: string;
	/** object value */
	public valeur: string;
	/** object unity */
	public unite: string;
	/** back color region */
	public colorBackRegion: string;
	/** color text region */
	public colorTextRegion: string;
	/** style text region */
	public styleTextRegion: string;
	/** back color bulle */
	public colorBackBulle: string;
	/** color text bulle */
	public colorTextBulle: string;
	/** style text bulle */
	public styleTextBulle: string;
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
		legende: string,
		valeur: string,
		unite: string,
		colorBackRegion: string,
		colorTextRegion: string,
		styleTextRegion: string,
		colorBackBulle: string,
		colorTextBulle: string,
		styleTextBulle: string,
		generateObjectText: boolean,
		legendElement: string,
		numericFormatElement: string,
		unityMesureElement: string,
		displayObjectInText: boolean,
		displayObjectPermanently: boolean,
		addColorTextElement: boolean,
		colorTextElement: string,
		addColorBackElement: boolean,
		colorBackElement: string,
	) {
		this.legende = legende;
		this.valeur = valeur;
		this.unite = unite;
		this.colorBackRegion = colorBackRegion;
		this.colorTextRegion = colorTextRegion;
		this.styleTextRegion = styleTextRegion;
		this.colorBackBulle = colorBackBulle;
		this.colorTextBulle = colorTextBulle;
		this.styleTextBulle = styleTextBulle;
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
