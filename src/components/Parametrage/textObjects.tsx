import React from 'react';
import { Button } from '@grafana/ui';

import InputTextField from 'Functions/Input/inputText';

import InputSeriesColorPicker from 'Functions/Input/inputSeriesColorPicker';
import { Switch } from '@grafana/ui';
import { TextObject } from 'Models/TextObject';

import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from 'types';

interface IProps extends PanelEditorProps<SimpleOptions> {
}

interface IState {
	/** legende object */
	legende: string;
	/** object value */
	valeur: string;
	/** object unity */
	unite: string;

	/** back color region */
	colorBackRegion: string;
	/** color text region */
	colorTextRegion: string;
	/** style text region */
	styleTextRegion: string;

	/** back color bulle */
	colorBackBulle: string;
	/** color text bulle */
	colorTextBulle: string;
	/** style text bulle */
	styleTextBulle: string;

	/** generate object text */
	generateObjectText: boolean;

	/** legend element */
	legendElement: string;
	/** numeric format element */
	numericFormatElement: string;
	/** unity mesure element */
	unityMesureElement: string;
	/** display object in text */
	displayObjectInText: boolean;
	/** display object permanently */
	displayObjectPermanently: boolean;
	/** color text element switch */
	addColorTextElement: boolean;
	/** color text element */
	colorTextElement: string;
	/** color back element switch */
	addColorBackElement: boolean;
	/** color back element */
	colorBackElement: string;
}

/**
 * def
 */
class TextObjects extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			legende: this.props.options.valueTextObject.legende,
			valeur: this.props.options.valueTextObject.valeur,
			unite: this.props.options.valueTextObject.unite,
			colorBackRegion: this.props.options.valueTextObject.colorBackRegion,
			colorBackBulle: this.props.options.valueTextObject.colorBackBulle,
			colorBackElement: this.props.options.valueTextObject.colorBackElement,
			colorTextBulle: this.props.options.valueTextObject.colorTextBulle,
			colorTextElement: this.props.options.valueTextObject.colorTextElement,
			colorTextRegion: this.props.options.valueTextObject.colorTextRegion,
			styleTextBulle: this.props.options.valueTextObject.styleTextBulle,
			styleTextRegion: this.props.options.valueTextObject.styleTextRegion,
			generateObjectText: this.props.options.valueTextObject.generateObjectText,
			legendElement: this.props.options.valueTextObject.legendElement,
			numericFormatElement: this.props.options.valueTextObject.numericFormatElement,
			unityMesureElement: this.props.options.valueTextObject.unityMesureElement,
			displayObjectInText: this.props.options.valueTextObject.displayObjectInText,
			displayObjectPermanently: this.props.options.valueTextObject.displayObjectPermanently,
			addColorTextElement: this.props.options.valueTextObject.addColorTextElement,
			addColorBackElement: this.props.options.valueTextObject.addColorBackElement,

		};
	}

	/**
	 * call back to parent
	 */
	public callBack = () => {
		const newValue: TextObject = new TextObject(
			this.state.legende,
			this.state.valeur,
			this.state.unite,
			this.state.colorBackRegion,
			this.state.colorTextRegion,
			this.state.styleTextRegion,
			this.state.colorBackBulle,
			this.state.colorTextBulle,
			this.state.styleTextBulle,
			this.state.generateObjectText,
			this.state.legendElement,
			this.state.numericFormatElement,
			this.state.unityMesureElement,
			this.state.displayObjectInText,
			this.state.displayObjectPermanently,
			this.state.addColorTextElement,
			this.state.colorTextElement,
			this.state.addColorBackElement,
			this.state.colorBackElement,
		);
		this.props.onOptionsChange({
			...this.props.options,
			valueTextObject: newValue,
		});
	}

	/** change value for legend input */
	public onChangeLegende = (value: string) => {
		this.setState({
			legende: value,
		});
	}

	/** change value for value input */
	public onChangeValeur = (value: string) => {
		this.setState({
			valeur: value,
		});
	}

	/** change value for unity input */
	public onChangeUnite = (value: string) => {
		this.setState({
			unite: value,
		});
	}

	/** change value for back color input */
	public onChangeBackColorRegion = (key: number, color: string) => {
		this.setState({
			colorBackRegion: color,
		});
	}

	/** change value for color region */
	public onChangeColorTextRegion = (key: number, color: string) => {
		this.setState({
			colorTextRegion: color,
		});
	}

	/** change value for style text region */
	public onChangeStyleTextRegion = (event: {
		/** target for style text region input */
		currentTarget: HTMLInputElement
	}) => {
		this.setState({
			styleTextRegion: event.currentTarget.value,
		});
	}

	/** change value for style text bubble */
	public onChangeStyleTextBulle = (event: {
		/** target for style text region bubble */
		currentTarget: HTMLInputElement
	}) => {
		this.setState({
			styleTextBulle: event.currentTarget.value,
		});
	}

	/** change value for color back bubble */
	public onChangeColorBackBulle = (key: number, color: string) => {
		this.setState({
			colorBackBulle: color,
		});
	}

	/** change value for color text bubble */
	public onChangeColorTextBulle = (key: number, color: string) => {
		this.setState({
			colorTextBulle: color,
		});
	}

	/** switch value for generate text object */
	public onSwitchGenerateObjectText = () => {
		this.setState({
			generateObjectText: !this.state.generateObjectText,
		});
	}

	/** change value for legend element */
	public onChangeLegendElement = (event: {
		/** target for legend text element input */
		currentTarget: HTMLInputElement
	}) => {
		this.setState({
			legendElement: event.currentTarget.value,
		});
	}

	/** change value for unity mesure element */
	public onChangeUnityMesureElement = (event: {
		/** target for unity mesure element input */
		currentTarget: HTMLInputElement
	}) => {
		this.setState({
			unityMesureElement: event.currentTarget.value,
		});
	}

	/** change format for numeric text object */
	public onChangeFormatageNumeriqueTextObject = (event: {
		/** target for numeric format text object input */
		currentTarget: HTMLInputElement
	}) => {
		this.setState({
			numericFormatElement: event.currentTarget.value,
		});
	}

	/** switch value for display object text */
	public onSwitchDisplayObjectInText = () => {
		this.setState({
			displayObjectInText: !this.state.displayObjectInText,
		});
	}

	/** switch value for display object permanently */
	public onSwitchDisplayObjectPermanently = () => {
		this.setState({
			displayObjectPermanently: !this.state.displayObjectPermanently,
		});
	}

	/** choice to apply color or not for text element */
	public onSwitchAddColorTextElement = () => {
		this.setState({
			addColorTextElement: !this.state.addColorTextElement,
		});
	}

	/** choice to apply color or not for back element */
	public onSwitchAddColorBackElement = () => {
		this.setState({
			addColorBackElement: !this.state.addColorBackElement,
		});
	}

	/** change value for color text element */
	public onChangeColorTextElement = (key: number, color: string) => {
		this.setState({
			colorTextElement: color,
		});
	}

	/** change value for back element */
	public onChangeColorBackElement = (key: number, color: string) => {
		this.setState({
			colorBackElement: color,
		});
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
						value={this.state.legende}
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
						value={this.state.valeur}
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
						value={this.state.unite}
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

					<InputSeriesColorPicker color={this.state.colorBackRegion}
						keyInt={0}
						text={l10n.textObject.colorBackground}
						_onChange={this.onChangeBackColorRegion}
					/>

					<InputSeriesColorPicker color={this.state.colorTextRegion}
						keyInt={0}
						text={l10n.textObject.colorText}
						_onChange={this.onChangeColorTextRegion}
					/>

					<InputTextField
						label={l10n.textObject.textStyle}
						name='textStyleTextObject'
						placeholder={l10n.textObject.style}
						required={false}
						value={this.state.styleTextRegion}
						_handleChange={this.onChangeStyleTextRegion}
					/>

					<h5>{l10n.textObject.textBubble}</h5>

					<InputSeriesColorPicker
						color={this.state.colorBackBulle}
						keyInt={0}
						text={l10n.textObject.colorBackground}
						_onChange={this.onChangeColorBackBulle}
					/>

					<InputSeriesColorPicker
						color={this.state.colorTextBulle}
						keyInt={0}
						text={l10n.textObject.colorText}
						_onChange={this.onChangeColorTextBulle}
					/>

					<InputTextField
						label={l10n.textObject.textStyle}
						name='textStyleTextObjectBulle'
						placeholder={l10n.textObject.style}
						required={false}
						value={this.state.styleTextBulle}
						_handleChange={this.onChangeStyleTextBulle}
					/>
					<Switch
						label={l10n.textObject.generateTextObject}
						checked={this.state.generateObjectText}
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
						value={this.state.legendElement}
						_handleChange={this.onChangeLegendElement}
					/>
					<InputTextField
						label={l10n.textObject.digitalFormatting}
						name='formatageNumeriqueTextObject'
						placeholder={l10n.textObject.digitalFormatting}
						required={false}
						value={this.state.numericFormatElement}
						_handleChange={this.onChangeFormatageNumeriqueTextObject}
					/>
					<InputTextField
						label={l10n.textObject.mesureUnit}
						name='mesureUnityTextObject'
						placeholder={l10n.textObject.unit}
						required={false}
						value={this.state.unityMesureElement}
						_handleChange={this.onChangeUnityMesureElement}
					/>
					<Switch
						label={l10n.textObject.objectDisplayTextTooltip}
						checked={this.state.displayObjectInText}
						onChange={this.onSwitchDisplayObjectInText}
					/>
					<Switch
						label={l10n.textObject.objectDisplayInPermanentlyHover}
						checked={this.state.displayObjectPermanently}
						onChange={this.onSwitchDisplayObjectPermanently}
					/>
					<Switch
						label={l10n.textObject.colorText}
						checked={this.state.addColorTextElement}
						onChange={this.onSwitchAddColorTextElement}
					/>
					{
						(this.state.addColorTextElement) ?
							(
								<InputSeriesColorPicker
									color={this.state.colorTextElement}
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
						checked={this.state.addColorBackElement}
						onChange={this.onSwitchAddColorBackElement}
					/>
					{
						(this.state.addColorBackElement) ?
							(
								<InputSeriesColorPicker
									color={this.state.colorBackElement}
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
				<Button onClick={this.callBack}>{l10n.textObject.save}</Button>

			</div>
		);
	}
}
export default TextObjects;
