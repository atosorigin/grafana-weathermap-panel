import { SelectableValue } from '@grafana/data';
/**
 * class InputClass
 */
export class InputSelectableClass {
	public id: string;
	public label: string;
	public name: string;
	public input_type: string;
	public required: boolean;
	public optionValues: SelectableValue<any>[];
	public defaultValueColor: string;
	public placeholder?: string;
	public value?: string;

	constructor(
		id: string,
		label: string,
		name: string,
		input_type: string,
		optionValues: SelectableValue<any>[],
		defaultValueColor: string,
		required: boolean,
		placeholder?: string,
		value?: string
	) {
		this.id = id;
		this.label = label;
		this.name = name;
		this.input_type = input_type;
		this.optionValues = optionValues;
		this.defaultValueColor = defaultValueColor;
		this.required = required;
		this.placeholder = placeholder;
		this.value = value;
	}

	getId() {
		return this.id;
	}

	setId(id: string) {
		this.id = id;
	}

	getLabel(): string {
		return this.label;
	}

	setLabel(label: string) {
		this.label = label;
	}

	getName() {
		return this.name;
	}

	setName(name: string) {
		this.name = name;
	}

	getInputType() {
		return this.input_type;
	}

	setInputType(input_type: string) {
		this.input_type = input_type;
	}

	getRequired() {
		return this.required;
	}

	setRequired(required: boolean) {
		this.required = required;
	}

	getPlaceholder() {
		return this.placeholder;
	}

	setPlaceholder(placeholder: string) {
		this.placeholder = placeholder;
	}


	getValue() {
		return this.value;
	}

	setValue(value: string) {
		this.value = value;
	}

	getOptionValues() {
		return this.optionValues;
	}

	setOptionValues(optionValues: SelectableValue<any>[]) {
		this.optionValues = optionValues;
	}

	getDefaultValueColor() {
		return this.defaultValueColor;
	}

	setDefaultValueColor(defaultValueColor: string) {
		this.defaultValueColor = defaultValueColor;
	}
}