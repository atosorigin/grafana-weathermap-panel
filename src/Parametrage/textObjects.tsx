import React from 'react';
import { Button } from '@grafana/ui';

import InputTextField from 'Input/inputText';

import InputSeriesColorPicker from 'Input/inputSeriesColorPicker';
import { Switch } from '@grafana/ui';

import { TextObject } from 'Models/TextObject';

interface IProps {
	/** last value of the panel */
	lastValue: TextObject;
	/** call back function to save */
	callBackFromParent: (newValue: TextObject) => void;
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
			legende: this.props.lastValue.legende,
			valeur: this.props.lastValue.valeur,
			unite: this.props.lastValue.unite,
			colorBackRegion: this.props.lastValue.colorBackRegion,
			colorBackBulle: this.props.lastValue.colorBackBulle,
			colorBackElement: this.props.lastValue.colorBackElement,
			colorTextBulle: this.props.lastValue.colorTextBulle,
			colorTextElement: this.props.lastValue.colorTextElement,
			colorTextRegion: this.props.lastValue.colorTextRegion,
			styleTextBulle: this.props.lastValue.styleTextBulle,
			styleTextRegion: this.props.lastValue.styleTextRegion,
			generateObjectText: this.props.lastValue.generateObjectText,
			legendElement: this.props.lastValue.legendElement,
			numericFormatElement: this.props.lastValue.numericFormatElement,
			unityMesureElement: this.props.lastValue.unityMesureElement,
			displayObjectInText: this.props.lastValue.displayObjectInText,
			displayObjectPermanently: this.props.lastValue.displayObjectPermanently,
			addColorTextElement: this.props.lastValue.addColorTextElement,
			addColorBackElement: this.props.lastValue.addColorBackElement,

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
		this.props.callBackFromParent(newValue);
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
		currentTarget: HTMLInputElement }) => {
		this.setState({
			styleTextRegion: event.currentTarget.value,
		});
	}

	/** change value for style text bubble */
	public onChangeStyleTextBulle = (event: {
		/** target for style text region bubble */
		currentTarget: HTMLInputElement }) => {
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
		currentTarget: HTMLInputElement }) => {
		this.setState({
			legendElement: event.currentTarget.value,
		});
	}

	/** change value for unity mesure element */
	public onChangeUnityMesureElement = (event: {
		/** target for unity mesure element input */
		currentTarget: HTMLInputElement }) => {
		this.setState({
			unityMesureElement: event.currentTarget.value,
		});
	}

	/** change format for numeric text object */
	public onChangeFormatageNumeriqueTextObject = (event: {
		/** target for numeric format text object input */
		currentTarget: HTMLInputElement }) => {
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

		return (
			<div>
				<div>
					<h4>Un objet texte</h4>
					<InputTextField label='Légende (optionnelle)'
						key='legendeTextObject'
						name='legendeTextObject'
						placeholder='Légende'
						required={false}
						value={this.state.legende}
						_handleChange={(event: {
							/** call currentTarget to get value */
							currentTarget: HTMLInputElement,
						}) =>
							this.onChangeLegende(event.currentTarget.value)} />

					<InputTextField label='Valeur'
						key='valeurTextObject'
						name='valeurTextObject'
						placeholder='Valeur'
						required={false}
						value={this.state.valeur}
						_handleChange={(event: {
							/** call currentTarget to get value */
							currentTarget: HTMLInputElement,
						}) =>
							this.onChangeValeur(event.currentTarget.value)} />

					<InputTextField label='Unité (optionnelle)'
						key='unitéTextObject'
						name='unitéTextObject'
						placeholder='Unité'
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
					<h4>Métriques principales</h4>

					<h5>Région de texte</h5>

					<InputSeriesColorPicker color={this.state.colorBackRegion}
						keyInt={0}
						text='Couleur de fond'
						_onChange={this.onChangeBackColorRegion}
					/>

					<InputSeriesColorPicker color={this.state.colorTextRegion}
						keyInt={0}
						text='Couleur texte'
						_onChange={this.onChangeColorTextRegion}
					/>

					<InputTextField
						label='Style du texte'
						name='textStyleTextObject'
						placeholder='style'
						required={false}
						value={this.state.styleTextRegion}
						_handleChange={this.onChangeStyleTextRegion}
					/>

					<h5>Bulle de texte</h5>

					<InputSeriesColorPicker
						color={this.state.colorBackBulle}
						keyInt={0}
						text='Couleur de fond'
						_onChange={this.onChangeColorBackBulle}
					/>

					<InputSeriesColorPicker
						color={this.state.colorTextBulle}
						keyInt={0}
						text='Couleur du texte'
						_onChange={this.onChangeColorTextBulle}
					/>

					<InputTextField
						label='Style du texte'
						name='textStyleTextObjectBulle'
						placeholder='style'
						required={false}
						value={this.state.styleTextBulle}
						_handleChange={this.onChangeStyleTextBulle}
					/>
					<Switch
						label='Générer un objet texte'
						checked={this.state.generateObjectText}
						onChange={this.onSwitchGenerateObjectText}
					/>
				</div>

				<div>
					<h4>Element auxiliaire</h4>
					<InputTextField
						label='Legende'
						name='legendTextObject'
						placeholder='Légende'
						required={false}
						value={this.state.legendElement}
						_handleChange={this.onChangeLegendElement}
					/>
					<InputTextField
						label='Formatage numérique (si métrique)'
						name='formatageNumeriqueTextObject'
						placeholder='Formatage Numerique'
						required={false}
						value={this.state.numericFormatElement}
						_handleChange={this.onChangeFormatageNumeriqueTextObject}
					/>
					<InputTextField
						label='Unité de mesure (si métrique)'
						name='mesureUnityTextObject'
						placeholder='Unité'
						required={false}
						value={this.state.unityMesureElement}
						_handleChange={this.onChangeUnityMesureElement}
					/>
					<Switch
						label='Objet affiché dans le texte / bulle'
						checked={this.state.displayObjectInText}
						onChange={this.onSwitchDisplayObjectInText}
					/>
					<Switch
						label='Objet affiché en permanence / survol'
						checked={this.state.displayObjectPermanently}
						onChange={this.onSwitchDisplayObjectPermanently}
					/>
					<Switch
						label='Colorisation du texte'
						checked={this.state.addColorTextElement}
						onChange={this.onSwitchAddColorTextElement}
					/>
					{
						(this.state.addColorTextElement) ?
							(
								<InputSeriesColorPicker
									color={this.state.colorTextElement}
									keyInt={0}
									text='Colorisation du texte (optionnelle)'
									_onChange={this.onChangeColorTextElement}
								/>

							)
							:
							(
								<br />
							)
					}
					<Switch
						label='Colorisation du fond'
						checked={this.state.addColorBackElement}
						onChange={this.onSwitchAddColorBackElement}
					/>
					{
						(this.state.addColorBackElement) ?
							(
								<InputSeriesColorPicker
									color={this.state.colorBackElement}
									keyInt={0}
									text='Colorisation du fond (optionnelle)'
									_onChange={this.onChangeColorBackElement}
								/>

							)
							:
							(
								<br />
							)
					}

				</div>
				<Button onClick={this.callBack}>Save</Button>

			</div>
		);
	}
}
export default TextObjects;
