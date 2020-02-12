import React from 'react';
import { ArrayInputClass } from 'Models/ArrayInputClass';
import { Seuil } from 'Models/SeuilClass';
import { InputClass } from 'Models/InputClass';

import { Button, FormField } from '@grafana/ui';

import InputTextField from 'Functions/Input/inputText';
import InputSeriesColorPicker from 'Functions/Input/inputSeriesColorPicker';

import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from 'types';

interface IProps extends PanelEditorProps<SimpleOptions> {
}

interface IState {
	/**
	 * tableau d'input pour générer le form
	 */
	arrayInputClass: ArrayInputClass[];
	/**
	 * tableau des seuils qui sera renvoyé au parent
	 */
	seuil: Seuil[];
	/**
	 * nombre de seuil
	 */
	index: number;
	/**
	 * nombre de variation à ajouter qui est affiché dans l'input
	 */
	nbVariation: string;

	/**
	 * fill dynamic input
	 */
	dynamicInput: JSX.Element;

	displayInput: boolean;
}

/**
 * edit colors in variable mode
 */
class CouleurVariable extends React.Component<IProps, IState, PanelEditorProps<SimpleOptions>> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			arrayInputClass: [],
			seuil: [],
			index: 0,
			nbVariation: '3',
			dynamicInput: <br />,
			displayInput: false,
		};
	}

	/**
	 * set state for arrayInputClass whith Promise
	 */
	public setStateAsyncArrayInputClass = (state: {
		/**
		 * edit arrayInputClass
		 */
		arrayInputClass: ArrayInputClass[],
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/**
	 * set state for seuil whith Promise
	 */
	public setStateAsyncSeuil = (state: {
		/**
		 * edit seuil
		 */
		seuil: Seuil[],
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/**
	 * set state for index whith Promise
	 */
	public setStateAsyncIndex = (state: {
		/**
		 * edit index
		 */
		index: number,
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/**
	 * set state for nbVariation whith Promise
	 */
	public setStateAsyncNbVariation = (state: {
		/**
		 * edit nbVariation
		 */
		nbVariation: string,
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/**
	 * send data to parent
	 */
	public callBack = () => {
		this.fillVarInput();

	}

	public saveData = () => {

		const { onOptionsChange } = this.props;

		onOptionsChange({
			...this.props.options,
			seuil: this.state.seuil,
		});
	}

	/**
	 * add new seuil
	 * @param idx index for id
	 */
	public addInput = async (idx: number, seuil: Seuil) => {
		await this.setStateAsyncArrayInputClass({
			arrayInputClass: this.state.arrayInputClass.slice().concat(new ArrayInputClass(idx,
				[
					new InputClass('gestCouleurMin' + idx, 'Seuil min',
						'seuilMin', 'text', false, 'Seuil min', undefined),
					new InputClass('gestCouleurMax' + idx, 'Seuil max',
						'seuilMax', 'text', false, 'Seuil max', undefined),
				])),
		});

		await this.setStateAsyncSeuil({
			seuil: this.state.seuil.concat(seuil),
		});

		await this.setStateAsyncIndex({
			index: idx + 1,
		});
	}

	/**
	 * call function with value input change
	 * @param event event input
	 * @param idInput id input
	 * @param idLine index array
	 */
	public handleValueChange = async (
		event: string, idInput: string, idLine: number,
	) => {
		const cpy: Seuil[] = this.state.seuil.slice();
		if (idInput === 'seuilMin') {
			cpy[idLine].seuilMin = event;
		} else {
			cpy[idLine].seuilMax = event;
			if (cpy[idLine + 1]) {
				cpy[idLine + 1].seuilMin = '>' + event;
			}
		}
		await this.setStateAsyncSeuil({
			seuil: cpy,
		});
		this.callBack();
	}

	/**
	 * call function when colorFond value change
	 * @param key line index to modify
	 * @param color the new color to add
	 */
	public onChangeColorFond = async (key: number, color: string) => {
		const cpy: Seuil[] = this.state.seuil;

		cpy[key].couleurFond = color;
		await this.setStateAsyncSeuil({
			seuil: cpy,
		});
		this.callBack();
	}

	/**
	 * call fonction when colorContour change
	 * @param key line index to modify
	 * @param color the new color to add
	 */
	public onChangeColorContour = async (key: number, color: string) => {
		const cpy: Seuil[] = this.state.seuil;
		cpy[key].couleurContour = color;
		await this.setStateAsyncSeuil({
			seuil: cpy,
		});
		this.callBack();
	}

	/**
	 * call function when sizeContour value change
	 * @param key line index to modify
	 * @param size the new size to add
	 */
	public onChangeSzContour = async (key: number, size: string) => {
		const cpy: Seuil[] = this.state.seuil;
		cpy[key].sizeContour = size;
		await this.setStateAsyncSeuil({
			seuil: cpy,
		});
		this.callBack();
	}

	/**
	 * insert color picker
	 * @param keyInt index to edit line
	 * @returns JSX.Element
	 */
	public addButtonColor = (keyInt: number): JSX.Element[] => {
		const key = keyInt.toString();
		const couleur: JSX.Element[] = [];
		const l10n = require('Localization/en.json');

		if (this.props.options.fondIsActive) {
			const keyFondColorPicker = key + 'FondcolorPicker';

			couleur.push(
				<InputSeriesColorPicker
					key={keyFondColorPicker}
					color={this.state.seuil[keyInt].couleurFond}
					keyInt={keyInt}
					text={l10n.colorVariable.switchBackgroundColor}
					_onChange={this.onChangeColorFond}
				/>,
			);
		}
		if (this.props.options.contourIsActive) {
			const keyContourDiv = key + 'ContourDiv';

			couleur.push(
				<div key={keyContourDiv}>
					<InputSeriesColorPicker
						color={this.state.seuil[keyInt].couleurContour}
						keyInt={keyInt}
						text={l10n.colorVariable.switchOutlineColor}
						_onChange={this.onChangeColorContour}
					/>

					<FormField
						labelWidth={15}
						label={l10n.colorVariable.thicknessOutline}
						name='epaisseurContour'
						placeholder={l10n.colorVariable.thicknessOutline}
						value={this.state.seuil[keyInt].sizeContour}
						onChange={(event) => this.onChangeSzContour(keyInt, event.currentTarget.value)}
					/>
				</div >,
			);
		}
		return (couleur);
	}

	/**
	 * call fonction when edit nbVariation
	 */
	public onChangeVariation = async (
		event: {
			/**
			 * currentTarget is item that is being edited
			 */
			currentTarget: HTMLInputElement,
		},
	) => {
		await this.setStateAsyncNbVariation(
			{ nbVariation: event.currentTarget.value },
		);
	}

	public test = async (newSeuil: Seuil[]) => {
		const arrayInput: ArrayInputClass[] = this.state.arrayInputClass.slice();
		let idx = this.state.index;
		const pSeuil: Seuil[] = this.state.seuil;

		for (const line of newSeuil) {
			arrayInput.push(new ArrayInputClass(idx,
				[
					new InputClass('gestCouleurMin' + idx, 'Seuil min',
						'seuilMin', 'text', false, 'Seuil min', undefined),
					new InputClass('gestCouleurMax' + idx, 'Seuil max',
						'seuilMax', 'text', false, 'Seuil max', undefined),
				]));
			idx++;
			pSeuil.push(line);
		}
		await this.setStateAsyncArrayInputClass({
			arrayInputClass: arrayInput,
		});

		await this.setStateAsyncSeuil({
			seuil: pSeuil,
		});

		await this.setStateAsyncIndex({
			index: idx,
		});

	}


	/**
	 * call addInput to prepare new inputs
	 * @param nb number inputs to add
	 */
	public addMultipleVariation = async (nb: number, seuil?: Seuil[]) => {
		if (seuil) {
			await this.test(seuil);
			this.fillVarInput();
		}
	}

	public addVariation = async (nb: number, seuil?: Seuil[]) => {
		for (let i = 0; i < nb; i++) {
			const newSeuil: Seuil = (seuil) ? seuil[i] : new Seuil(i, '', '', '', '', '');
			await this.addInput(i, newSeuil);
		}
		this.fillVarInput();
	}

	/**
	 * call function when display n input according to nbVariation
	 */
	public onClickVariation = async () => {
		await this.setStateAsyncArrayInputClass({
			arrayInputClass: [],
		});
		await this.setStateAsyncIndex({
			index: 0,
		});
		await this.setStateAsyncSeuil({
			seuil: [],
		});

		this.setState({
			displayInput: true,
		});

		const nb: number = parseInt(this.state.nbVariation, 10);
		await this.addVariation(nb);
	}

	/**
	 * generate input seuil min and max with value
	 * @returns JSX.Element
	 */
	public fillVarInput = (): void => {
		let final: JSX.Element[] = [];

		if (this.state.seuil.length === 0) {
			this.setState({
				dynamicInput: <br />,
			});
			return;
		}

		let i: number = 0;
		for (const line of this.state.arrayInputClass) {
			if (line.uneClassInput.length <= 0) {
				this.setState({
					dynamicInput: <br />,
				});
				return;
			}
			const result = line.uneClassInput
				.map((obj: InputClass) =>
					<InputTextField key={obj.id}
						label={obj.label}
						name={obj.name}
						placeholder={obj.placeholder || ''}
						required={obj.required}
						value={(obj.name === 'seuilMin')
							? (line.id === 0) ? '-∞' : this.state.seuil[i].seuilMin
							: (line.id === this.state.index - 1) ? '+∞' : this.state.seuil[i].seuilMax}
						_handleChange={
							(event: {
								/**
								 * get currentTarget in event element
								 */
								currentTarget: HTMLInputElement;
							}) => this.handleValueChange(event.currentTarget.value,
								obj.name, line.id)
						} disabled={(obj.name === 'seuilMin') || (line.id === this.state.index - 1)} />,
				);
			i++;
			const couleur: JSX.Element[] = this.addButtonColor(line.id);
			const newKey = line.id.toString() + 'brGestColor';
			final = final.concat(result.concat(couleur
				.concat(<br key={newKey} />)));
		}
		this.setState({
			dynamicInput: <ul>{final}</ul>,
		});
	}

	/**
	 * debug
	 */
	public infoSeuil = () => {
		console.group('info');
		console.log(this.state.seuil);
		console.log(this.state.arrayInputClass);
		console.groupEnd();
	}

	/**
	 * component mount
	 */
	public componentDidMount = async () => {
		if (this.props.options.seuil.length > 0) {
			const nb: number = parseInt(this.state.nbVariation, 10);
			this.addMultipleVariation(nb, this.props.options.seuil);
		}
	}

	/**
	 * render
	 */
	public render() {
		const l10n = require('Localization/en.json');

		return (
			<div>
				<InputTextField
					label={l10n.colorVariable.variationNumber}
					name='nbVariation'
					placeholder={l10n.colorVariable.number}
					required={true}
					value={this.state.nbVariation}
					_handleChange={this.onChangeVariation} />
				<Button onClick={this.onClickVariation}>
					{l10n.colorVariable.addColor}
				</Button>
				<br />
				<br />
				{
					this.state.dynamicInput
				}
				<Button onClick={this.saveData}>
					Save
				</Button>
				<Button onClick={this.infoSeuil}>
					{l10n.colorVariable.infoSeuil}
				</Button>
			</div>
		);
	}
}
export default CouleurVariable;
