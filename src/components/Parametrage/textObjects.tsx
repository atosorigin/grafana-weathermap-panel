import React from 'react';

import { Switch } from '@grafana/ui';

import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';
import { TextObject } from 'Models/TextObjectClass';

import InputTextField from 'Functions/Input/inputText';
import InputSeriesColorPicker from 'Functions/Input/inputSeriesColorPicker';

interface IProps {
	/** id coordinate */
	coordinateSpace: CoordinateSpaceClass;
	/** call function to save data in parent */
	callBackToParent: (
		followLink?: string,
		hoveringTooltipLink?: string,
		hoveringTooltipText?: string,
		textObj?: TextObject,
		id?: number) => void;
	/** id element to save data*/
	id?: number;
}

interface IState {
	/** get text object */
	textObject: TextObject;
}

/**
 * def
 */
class TextObjects extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			textObject: this.props.coordinateSpace.textObj,
		};
	}

	/** save data in async mode */
	public stateAsyncTextObject = (state: {
		/** new text object */
		textObject: TextObject
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/** call back to parent */
	public callBack = () => {
		this.props.callBackToParent(undefined, undefined, undefined, this.state.textObject, this.props.id);
	}

	// /** change value for legend input */
	// public onSwitchLegend = async () => {
	// 	const newTextObject: TextObject = this.state.textObject;

	// 	newTextObject.legend = !newTextObject.legend;
	// 	await this.stateAsyncTextObject({ textObject: newTextObject });
	// 	this.callBack();
	// }

	/** change value for value input */
	public onChangeValeur = async (value: string) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.value = value;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** change value for back color input */
	public onChangeBackColor = async (key: number, color: string) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.colorBack = color;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** change value for color region */
	public onChangeColorText = async (key: number, color: string) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.colorText = color;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** change value for style text region */
	public onChangeStyleText = async (event: {
		/** target for style text region input */
		currentTarget: HTMLInputElement,
	}) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.styleText = event.currentTarget.value;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** switch value for generate text object */
	public onSwitchGenerateObjectText = async () => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.generateObjectText = !this.state.textObject.generateObjectText;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** change value for legend element */
	public onChangeLegendElement = async (event: {
		/** target for legend text element input */
		currentTarget: HTMLInputElement,
	}) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.generateAuxiliaryElement.legendElement = event.currentTarget.value;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** change value for unity mesure element */
	public onChangeunit = async (event: {
		/** target for unity mesure element input */
		currentTarget: HTMLInputElement,
	}) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.generateAuxiliaryElement.unit = event.currentTarget.value;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** change format for numeric text object */
	public onChangeFormatageNumeriqueTextObject = async (event: {
		/** target for numeric format text object input */
		currentTarget: HTMLInputElement,
	}) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.generateAuxiliaryElement.numericFormatElement = event.currentTarget.value;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** switch value for display object text */
	public onSwitchDisplayObjectInText = async () => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.generateAuxiliaryElement.displayObjectInText =
			!this.state.textObject.generateAuxiliaryElement.displayObjectInText;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	// /** switch value for display object permanently */
	// public onSwitchDisplayObjectPermanently = async () => {
	// 	const newTextObject: TextObject = this.state.textObject;

	// 	newTextObject.generateAuxiliaryElement.displayObjectPermanently =
	// 		!this.state.textObject.generateAuxiliaryElement.displayObjectPermanently;
	// 	await this.stateAsyncTextObject({ textObject: newTextObject });
	// 	this.callBack();
	// }

	/** choice to apply color or not for text element */
	public onSwitchAddColorTextElement = async () => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.generateAuxiliaryElement.addColorTextElement =
			!this.state.textObject.generateAuxiliaryElement.addColorTextElement;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** choice to apply color or not for back element */
	public onSwitchAddColorBackElement = async () => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.generateAuxiliaryElement.addColorBackElement =
			!this.state.textObject.generateAuxiliaryElement.addColorBackElement;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** switch display text */
	public onSwitchIsTextRegion = async () => {
		// console.clear();
		// console.log('am here --');

		const newTextObject: TextObject = this.state.textObject;

		newTextObject.isTextRegion = !this.state.textObject.isTextRegion;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** change value for color text element */
	public onChangeColorTextElement = async (key: number, color: string) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.generateAuxiliaryElement.colorTextElement = color;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** change value for back element */
	public onChangeColorBackElement = async (key: number, color: string) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.generateAuxiliaryElement.colorBackElement = color;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}




	/** change value for legend element */
	public onChangeValueGenerateObjectTextLegendElement = async (event: {
		/** target for legend text element input */
		currentTarget: HTMLInputElement,
	}) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.valueGenerateObjectText.legendElement = event.currentTarget.value;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** change value for unity mesure element */
	public onChangeValueGenerateObjectTextunit = async (event: {
		/** target for unity mesure element input */
		currentTarget: HTMLInputElement,
	}) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.valueGenerateObjectText.unit = event.currentTarget.value;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** change format for numeric text object */
	public onChangeValueGenerateObjectTextFormatageNumeriqueTextObject = async (event: {
		/** target for numeric format text object input */
		currentTarget: HTMLInputElement,
	}) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.valueGenerateObjectText.numericFormatElement = event.currentTarget.value;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** switch value for display object text */
	public onSwitchValueGenerateObjectTextDisplayObjectInText = async () => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.valueGenerateObjectText.displayObjectInText =
			!this.state.textObject.valueGenerateObjectText.displayObjectInText;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	// /** switch value for display object permanently */
	// public onSwitchValueGenerateObjectTextDisplayObjectPermanently = async () => {
	// 	const newTextObject: TextObject = this.state.textObject;

	// 	newTextObject.valueGenerateObjectText.displayObjectPermanently =
	// 		!this.state.textObject.valueGenerateObjectText.displayObjectPermanently;
	// 	await this.stateAsyncTextObject({ textObject: newTextObject });
	// 	this.callBack();
	// }

	/** choice to apply color or not for text element */
	public onSwitchValueGenerateObjectTextAddColorTextElement = async () => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.valueGenerateObjectText.addColorTextElement =
			!this.state.textObject.valueGenerateObjectText.addColorTextElement;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** choice to apply color or not for back element */
	public onSwitchValueGenerateObjectTextAddColorBackElement = async () => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.valueGenerateObjectText.addColorBackElement =
			!this.state.textObject.valueGenerateObjectText.addColorBackElement;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** change value for color text element */
	public onChangeValueGenerateObjectTextColorTextElement = async (key: number, color: string) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.valueGenerateObjectText.colorTextElement = color;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** change value for back element */
	public onChangeValueGenerateObjectTextColorBackElement = async (key: number, color: string) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.valueGenerateObjectText.colorBackElement = color;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/**
	 * result
	 */
	public render() {
		const l10n = require('Localization/en.json');

		return (
			<div>
				{/* <div>
					<h4>{l10n.textObject.titleTextObject}</h4>
					<Switch
						label={l10n.textObject.optionalLegend}
						checked={this.state.textObject.legend}
						onChange={this.onSwitchLegend} />
					<br /><br />
				</div> */}

				<div>
					<h4>{l10n.textObject.principalMetric}</h4>

					<Switch
						label='Display text in region or tooltip'
						checked={this.state.textObject.isTextRegion}
						onChange={this.onSwitchIsTextRegion} />

					<h5 hidden={this.state.textObject.isTextRegion}>{l10n.textObject.textRegion}</h5>
					<h5 hidden={!this.state.textObject.isTextRegion}>{l10n.textObject.textBubble}</h5>

					<InputSeriesColorPicker color={this.state.textObject.colorBack}
						keyInt={0}
						text={l10n.textObject.colorBackground}
						_onChange={this.onChangeBackColor}
					/>

					<InputSeriesColorPicker color={this.state.textObject.colorText}
						keyInt={0}
						text={l10n.textObject.colorText}
						_onChange={this.onChangeColorText}
					/>

					<InputTextField
						label={l10n.textObject.textStyle}
						name='textStyleTextObject'
						placeholder={l10n.textObject.style}
						required={false}
						value={this.state.textObject.styleText}
						_handleChange={this.onChangeStyleText}
					/>
					<br /><br />
				</div>
				<div>
					<h4>Generate text object</h4>
					<Switch
						label={l10n.textObject.generateTextObject}
						checked={this.state.textObject.generateObjectText}
						onChange={this.onSwitchGenerateObjectText}
					/>
					{
						this.state.textObject.generateObjectText &&
						<div>
							{/* <h4>Object text</h4> */}
							<InputTextField
								label={l10n.textObject.legend}
								name='legendTextObject'
								placeholder={l10n.textObject.legend}
								required={false}
								value={this.state.textObject.valueGenerateObjectText.legendElement}
								_handleChange={this.onChangeValueGenerateObjectTextLegendElement}
							/>
							<InputTextField
								label={l10n.textObject.digitalFormatting}
								name='formatageNumeriqueTextObject'
								placeholder={l10n.textObject.digitalFormatting}
								required={false}
								value={this.state.textObject.valueGenerateObjectText.numericFormatElement}
								_handleChange={this.onChangeValueGenerateObjectTextFormatageNumeriqueTextObject}
							/>
							<InputTextField
								label={l10n.textObject.mesureUnit}
								name='mesureUnityTextObject'
								placeholder={l10n.textObject.unit}
								required={false}
								value={this.state.textObject.valueGenerateObjectText.unit}
								_handleChange={this.onChangeValueGenerateObjectTextunit}
							/>
							<Switch
								label={l10n.textObject.objectDisplayTextTooltip}
								checked={this.state.textObject.valueGenerateObjectText.displayObjectInText}
								onChange={this.onSwitchValueGenerateObjectTextDisplayObjectInText}
							/>
							{/* <Switch
								label={l10n.textObject.objectDisplayInPermanentlyHover}
								checked={this.state.textObject.valueGenerateObjectText.displayObjectPermanently}
								onChange={this.onSwitchValueGenerateObjectTextDisplayObjectPermanently}
							/> */}
							<Switch
								label={l10n.textObject.colorText}
								checked={this.state.textObject.valueGenerateObjectText.addColorTextElement}
								onChange={this.onSwitchValueGenerateObjectTextAddColorTextElement}
							/>
							{
								(this.state.textObject.valueGenerateObjectText.addColorTextElement) &&
								<InputSeriesColorPicker
									color={this.state.textObject.valueGenerateObjectText.colorTextElement}
									keyInt={0}
									text={l10n.textObject.colorTextOptional}
									_onChange={this.onChangeValueGenerateObjectTextColorTextElement}
								/>
							}
							<Switch
								label={l10n.textObject.backgroundColor}
								checked={this.state.textObject.valueGenerateObjectText.addColorBackElement}
								onChange={this.onSwitchValueGenerateObjectTextAddColorBackElement}
							/>
							{
								(this.state.textObject.valueGenerateObjectText.addColorBackElement) &&
								<InputSeriesColorPicker
									color={this.state.textObject.valueGenerateObjectText.colorBackElement}
									keyInt={0}
									text={l10n.textObject.optionalBackgroundColor}
									_onChange={this.onChangeValueGenerateObjectTextColorBackElement}
								/>
							}
						</div>
					}
					<br /><br />
				</div>

				<div>
					<h4>{l10n.textObject.auxiliaryElement}</h4>
					<InputTextField
						label={l10n.textObject.legend}
						name='legendTextObject'
						placeholder={l10n.textObject.legend}
						required={false}
						value={this.state.textObject.generateAuxiliaryElement.legendElement}
						_handleChange={this.onChangeLegendElement}
					/>
					<InputTextField
						label={l10n.textObject.digitalFormatting}
						name='formatageNumeriqueTextObject'
						placeholder={l10n.textObject.digitalFormatting}
						required={false}
						value={this.state.textObject.generateAuxiliaryElement.numericFormatElement}
						_handleChange={this.onChangeFormatageNumeriqueTextObject}
					/>
					<InputTextField
						label={l10n.textObject.mesureUnit}
						name='mesureUnityTextObject'
						placeholder={l10n.textObject.unit}
						required={false}
						value={this.state.textObject.generateAuxiliaryElement.unit}
						_handleChange={this.onChangeunit}
					/>
					<Switch
						label={l10n.textObject.objectDisplayTextTooltip}
						checked={this.state.textObject.generateAuxiliaryElement.displayObjectInText}
						onChange={this.onSwitchDisplayObjectInText}
					/>
					{/* <Switch
						label={l10n.textObject.objectDisplayInPermanentlyHover}
						checked={this.state.textObject.generateAuxiliaryElement.displayObjectPermanently}
						onChange={this.onSwitchDisplayObjectPermanently}
					/> */}
					<Switch
						label={l10n.textObject.colorText}
						checked={this.state.textObject.generateAuxiliaryElement.addColorTextElement}
						onChange={this.onSwitchAddColorTextElement}
					/>
					{
						(this.state.textObject.generateAuxiliaryElement.addColorTextElement) &&
						<InputSeriesColorPicker
							color={this.state.textObject.generateAuxiliaryElement.colorTextElement}
							keyInt={0}
							text={l10n.textObject.colorTextOptional}
							_onChange={this.onChangeColorTextElement}
						/>
					}
					<Switch
						label={l10n.textObject.backgroundColor}
						checked={this.state.textObject.generateAuxiliaryElement.addColorBackElement}
						onChange={this.onSwitchAddColorBackElement}
					/>
					{
						(this.state.textObject.generateAuxiliaryElement.addColorBackElement) &&
						<InputSeriesColorPicker
							color={this.state.textObject.generateAuxiliaryElement.colorBackElement}
							keyInt={0}
							text={l10n.textObject.optionalBackgroundColor}
							_onChange={this.onChangeColorBackElement}
						/>
					}
					<br /><br />
				</div>
			</div>
		);
	}
}
export default TextObjects;
