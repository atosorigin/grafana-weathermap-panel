/**
 * class InputClass
 * @param id string
 * @param label string
 * @param name string
 * @param inputType string
 * @param required boolean
 * @param placeholder string?
 * @param value string?
 */
export class InputClass {
	/**
	 * identiofiant unique
	 */
	public id: string;
	/**
	 * label de l'input
	 */
	public label: string;
	/**
	 * le nom de l'imput
	 */
	public name: string;
	/**
	 * le type de l'input (button, text)
	 */
	public inputType: string;
	/**
	 * obligatoire
	 */
	public required: boolean;
	/**
	 * texte a afficher
	 */
	public placeholder?: string;
	/**
	 * la valeur de l'input
	 */
	public value?: string;

	constructor(
		id: string,
		label: string,
		name: string,
		inputType: string,
		required: boolean,
		placeholder?: string,
		value?: string
	) {
		this.id = id;
		this.label = label;
		this.name = name;
		this.inputType = inputType;
		this.required = required;
		this.placeholder = placeholder;
		this.value = value;
	}

	/**
	 * get id
	 */
	public getId() {
		return this.id;
	}

	/**
	 * set id
	 * @param id new id
	 */
	public setId(id: string) {
		this.id = id;
	}

	/**
	 * get label
	 */
	public getLabel(): string {
		return this.label;
	}

	/**
	 * set label
	 * @param label new label
	 */
	public setLabel(label: string) {
		this.label = label;
	}

	/**
	 * get name
	 */
	public getName() {
		return this.name;
	}

	/**
	 * set name
	 * @param name new name
	 */
	public setName(name: string) {
		this.name = name;
	}

	/**
	 * get type input
	 */
	public getInputType() {
		return this.inputType;
	}

	/**
	 * set type input
	 * @param inputType new input type
	 */
	public setInputType(inputType: string) {
		this.inputType = inputType;
	}

	/**
	 * get required
	 */
	public getRequired() {
		return this.required;
	}

	/**
	 * set required
	 * @param required new value required
	 */
	public setRequired(required: boolean) {
		this.required = required;
	}

	/**
	 * get placeholder
	 */
	public getPlaceholder() {
		return this.placeholder;
	}

	/**
	 * set placeholder
	 * @param placeholder new value placeholder
	 */
	public setPlaceholder(placeholder: string) {
		this.placeholder = placeholder;
	}

	/**
	 * get value
	 */
	public getValue() {
		return this.value;
	}

	/**
	 * set value
	 * @param value new value
	 */
	public setValue(value: string) {
		this.value = value;
	}
}
