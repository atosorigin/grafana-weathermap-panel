import React from 'react';

import InputTextField from 'Functions/Input/inputText';
import InputSeriesColorPicker from 'Functions/Input/inputSeriesColorPicker';
import { CoordinateSpaceExtendClass } from 'Models/CoordinateSpaceExtendClass';

import { Switch } from '@grafana/ui';
import { TextObject } from 'Models/TextObjectClass';

interface IProps {
	/** id coordinate */
	coordinateSpace: CoordinateSpaceExtendClass;
	callBackToParent: (
		followLink?: string,
		hoveringTooltipLink?: string,
		hoveringTooltipText?: string,
		textObj?: TextObject) => void;
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
			textObject: this.props.coordinateSpace.textObject,
		};
	}

	public stateAsyncTextObject = (state: {
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
		this.props.callBackToParent(undefined, undefined, undefined, this.state.textObject);
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
	public onChangeBackColorRegion = async (key: number, color: string) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.colorBackRegion = color;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** change value for color region */
	public onChangeColorTextRegion = async (key: number, color: string) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.colorTextRegion = color;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** change value for style text region */
	public onChangeStyleTextRegion = async (event: {
		/** target for style text region input */
		currentTarget: HTMLInputElement,
	}) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.styleTextRegion = event.currentTarget.value;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** change value for style text bubble */
	public onChangeStyleTextBulle = async (event: {
		/** target for style text region bubble */
		currentTarget: HTMLInputElement,
	}) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.styleTextBulle = event.currentTarget.value;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** change value for color back bubble */
	public onChangeColorBackBulle = async (key: number, color: string) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.colorBackBulle = color;
		await this.stateAsyncTextObject({ textObject: newTextObject });
		this.callBack();
	}

	/** change value for color text bubble */
	public onChangeColorTextBulle = async (key: number, color: string) => {
		const newTextObject: TextObject = this.state.textObject;

		newTextObject.colorTextBulle = color;
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

					<InputTextField label={l10n.textObject.value}
						key='valeurTextObject'
						name='valeurTextObject'
						placeholder={l10n.textObject.value}
						required={false}
						value={this.state.textObject.valeur}
						_handleChange={(event: {
							/** call currentTarget to get value */
							currentTarget: HTMLInputElement,
						}) =>
							this.onChangeValeur(event.currentTarget.value)} />

					<InputTextField label={l10n.textObject.optionalUnit}
						key='unitéTextObject'
						name='unitéTextObject'
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

					<h5>{l10n.textObject.textRegion}</h5>

					<InputSeriesColorPicker color={this.state.textObject.colorBackRegion}
						keyInt={0}
						text={l10n.textObject.colorBackground}
						_onChange={this.onChangeBackColorRegion}
					/>

					<InputSeriesColorPicker color={this.state.textObject.colorTextRegion}
						keyInt={0}
						text={l10n.textObject.colorText}
						_onChange={this.onChangeColorTextRegion}
					/>

					<InputTextField
						label={l10n.textObject.textStyle}
						name='textStyleTextObject'
						placeholder={l10n.textObject.style}
						required={false}
						value={this.state.textObject.styleTextRegion}
						_handleChange={this.onChangeStyleTextRegion}
					/>

					<h5>{l10n.textObject.textBubble}</h5>

					<InputSeriesColorPicker
						color={this.state.textObject.colorBackBulle}
						keyInt={0}
						text={l10n.textObject.colorBackground}
						_onChange={this.onChangeColorBackBulle}
					/>

					<InputSeriesColorPicker
						color={this.state.textObject.colorTextBulle}
						keyInt={0}
						text={l10n.textObject.colorText}
						_onChange={this.onChangeColorTextBulle}
					/>

					<InputTextField
						label={l10n.textObject.textStyle}
						name='textStyleTextObjectBulle'
						placeholder={l10n.textObject.style}
						required={false}
						value={this.state.textObject.styleTextBulle}
						_handleChange={this.onChangeStyleTextBulle}
					/>
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
