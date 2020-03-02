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

	/**
	 * call back to parent
	 */
	public callBack = () => {
		this.props.callBackToParent(undefined, undefined, undefined, this.state.textObject, this.props.id);
	}

	/** change value for legend input */
	public onChangeLegende = async (value: string) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.legende = value;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** change value for value input */
	public onChangeValeur = async (value: string) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.valeur = value;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** change value for unity input */
	public onChangeUnite = async (value: string) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.unite = value;
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

		newTextObject.legendElement = event.currentTarget.value;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** change value for unity mesure element */
	public onChangeUnityMesureElement = async (event: {
		/** target for unity mesure element input */
		currentTarget: HTMLInputElement,
	}) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.unityMesureElement = event.currentTarget.value;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** change format for numeric text object */
	public onChangeFormatageNumeriqueTextObject = async (event: {
		/** target for numeric format text object input */
		currentTarget: HTMLInputElement,
	}) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.numericFormatElement = event.currentTarget.value;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** switch value for display object text */
	public onSwitchDisplayObjectInText = async () => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.displayObjectInText = !this.state.textObject.displayObjectInText;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** switch value for display object permanently */
	public onSwitchDisplayObjectPermanently = async () => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.displayObjectPermanently = !this.state.textObject.displayObjectPermanently;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** choice to apply color or not for text element */
	public onSwitchAddColorTextElement = async () => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.addColorTextElement = !this.state.textObject.addColorTextElement;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** choice to apply color or not for back element */
	public onSwitchAddColorBackElement = async () => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.addColorBackElement = !this.state.textObject.addColorBackElement;
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

		newTextObject.colorTextElement = color;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** change value for back element */
	public onChangeColorBackElement = async (key: number, color: string) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.colorBackElement = color;
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
				<div>
					<h4>{l10n.textObject.titleTextObject}</h4>
					<InputTextField label={l10n.textObject.optionalLegend}
						key='legendeTextObject'
						name='legendeTextObject'
						placeholder={l10n.textObject.legend}
						required={false}
						value={this.state.textObject.legende}
						_handleChange={(event: {
							/** call currentTarget to get value */
							currentTarget: HTMLInputElement,
						}) =>
							this.onChangeLegende(event.currentTarget.value)} />

					<InputTextField label={l10n.textObject.optionalUnit}
						key='textUnitObject'
						name='textUnitObject'
						placeholder={l10n.textObject.unit}
						required={false}
						value={this.state.textObject.unite}
						_handleChange={(event: {
							/** call currentTarget to get value */
							currentTarget: HTMLInputElement,
						}) =>
							this.onChangeUnite(event.currentTarget.value)} />
					<br />
				</div>

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

					<br />
					<Switch
						label={l10n.textObject.generateTextObject}
						checked={this.state.textObject.generateObjectText}
						onChange={this.onSwitchGenerateObjectText}
					/>
				</div>

				<div>
					<h4>{l10n.textObject.auxiliaryElement}</h4>
					<InputTextField
						label={l10n.textObject.legend}
						name='legendTextObject'
						placeholder={l10n.textObject.legend}
						required={false}
						value={this.state.textObject.legendElement}
						_handleChange={this.onChangeLegendElement}
					/>
					<InputTextField
						label={l10n.textObject.digitalFormatting}
						name='formatageNumeriqueTextObject'
						placeholder={l10n.textObject.digitalFormatting}
						required={false}
						value={this.state.textObject.numericFormatElement}
						_handleChange={this.onChangeFormatageNumeriqueTextObject}
					/>
					<InputTextField
						label={l10n.textObject.mesureUnit}
						name='mesureUnityTextObject'
						placeholder={l10n.textObject.unit}
						required={false}
						value={this.state.textObject.unityMesureElement}
						_handleChange={this.onChangeUnityMesureElement}
					/>
					<Switch
						label={l10n.textObject.objectDisplayTextTooltip}
						checked={this.state.textObject.displayObjectInText}
						onChange={this.onSwitchDisplayObjectInText}
					/>
					<Switch
						label={l10n.textObject.objectDisplayInPermanentlyHover}
						checked={this.state.textObject.displayObjectPermanently}
						onChange={this.onSwitchDisplayObjectPermanently}
					/>
					<Switch
						label={l10n.textObject.colorText}
						checked={this.state.textObject.addColorTextElement}
						onChange={this.onSwitchAddColorTextElement}
					/>
					{
						(this.state.textObject.addColorTextElement) ?
							(
								<InputSeriesColorPicker
									color={this.state.textObject.colorTextElement}
									keyInt={0}
									text={l10n.textObject.colorTextOptional}
									_onChange={this.onChangeColorTextElement}
								/>

							)
							:
							(
								<br />
							)
					}
					<Switch
						label={l10n.textObject.backgroundColor}
						checked={this.state.textObject.addColorBackElement}
						onChange={this.onSwitchAddColorBackElement}
					/>
					{
						(this.state.textObject.addColorBackElement) ?
							(
								<InputSeriesColorPicker
									color={this.state.textObject.colorBackElement}
									keyInt={0}
									text={l10n.textObject.optionalBackgroundColor}
									_onChange={this.onChangeColorBackElement}
								/>

							)
							:
							(
								<br />
							)
					}

				</div>
			</div>
		);
	}
}
export default TextObjects;
