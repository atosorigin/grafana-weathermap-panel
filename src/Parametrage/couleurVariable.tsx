/**
 * ToDo:
 *  sauvegarde
 */

import React, { CSSProperties } from 'react';
import { ArrayInputClass } from '../Models/arrayInputClass';
import { Seuil } from '../Models/seuil';
import { InputClass } from '../Models/inputClass';

import { SimpleOptions } from '../types';

import { Button, FormField } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';

import InputTextField from 'Input/inputText';
import InputSeriesColorPicker from 'Input/inputSeriesColorPicker';

interface IProps {
	/**
	 * fond is select
	 */
	fondIsActive: boolean;
	/**
	 * contour is select
	 */
	contourIsActive: boolean;
	/**
	 * ancien Seuil
	 */
	seuil: Seuil[];
	/**
	 * call back from parent
	 */
	callBackFromParent: (dataFromChild: Seuil[]) => void;
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
	 * wait end addInput variation
	 */
	waitEnd: boolean;
}

/**
 * edit colors in variable mode
 */
class CouleurVariable extends React.Component<IProps, IState, PanelEditorProps<SimpleOptions>> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			arrayInputClass: [],
			seuil: this.props.seuil,
			index: 0,
			nbVariation: '3',
			waitEnd: false,
		};
	}

	/**
	 * set state for waitEnd whith Promise
	 */
	public setStateAsyncArrayWaitEnd = (state: {
		/**
		 * edit waitEnd
		 */
		waitEnd: boolean,
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
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
		this.props.callBackFromParent(this.state.seuil);
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

		if (this.props.fondIsActive) {
			const keyFondColorPicker = key + 'FondcolorPicker';
			const styleCouleurFond: CSSProperties = {
				color: this.state.seuil[keyInt].couleurFond,
				cursor: 'pointer',
			};

			couleur.push(
				<InputSeriesColorPicker
					key={keyFondColorPicker}
					color={this.state.seuil[keyInt].couleurFond}
					keyInt={keyInt}
					style={styleCouleurFond}
					text='Changer la couleur du fond'
					_onChange={this.onChangeColorFond}
				/>,
			);
		}
		if (this.props.contourIsActive) {
			const keyContourDiv = key + 'ContourDiv';
			const styleCouleurContour: CSSProperties = {
				color: this.state.seuil[keyInt].couleurContour,
				cursor: 'pointer',
			};

			couleur.push(
				<div key={keyContourDiv}>
					<InputSeriesColorPicker
						color={this.state.seuil[keyInt].couleurContour}
						keyInt={keyInt}
						style={styleCouleurContour}
						text='Changer la couleur du contour'
						_onChange={this.onChangeColorContour}
					/>

					<FormField
						labelWidth={15}
						label='Épaisseur du contour'
						name='epaisseurContour'
						placeholder='Epaisseur contour'
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
	public onChangeVariation = (
		event: {
			/**
			 * currentTarget is item that is being edited
			 */
			currentTarget: HTMLInputElement,
		},
	) => {
		this.setStateAsyncNbVariation(
			{ nbVariation: event.currentTarget.value },
		);
	}

	/**
	 * call addInput to prepare new inputs
	 * @param nb number inputs to add
	 */
	public addVariation = async (nb: number, seuil?: Seuil[]) => {
		for (let i = 0; i < nb; i++) {
			const newSeuil: Seuil = (seuil) ? seuil[i] : new Seuil(i, '', '', '', '', '');
			await this.addInput(i, newSeuil);
		}
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
		await this.setStateAsyncArrayWaitEnd({
			waitEnd: true,
		});

		const nb: number = parseInt(this.state.nbVariation, 10);
		await this.addVariation(nb);
		await this.setStateAsyncArrayWaitEnd({
			waitEnd: false,
		});
		this.callBack();
	}

	/**
	 * generate input seuil min and max with value
	 * @returns JSX.Element
	 */
	public fillVarInput = (): JSX.Element => {
		let final: JSX.Element[] = [];

		for (const line of this.state.arrayInputClass) {
			if (line.getUneClassInput().length <= 0) {
				return (<br />);
			}
			const result = line.getUneClassInput()
				.map((obj: InputClass) =>
					<InputTextField key={obj.getId()}
						label={obj.getLabel()}
						name={obj.getName()}
						placeholder={obj.getPlaceholder() || ''}
						required={obj.getRequired()}
						value={(obj.getName() === 'seuilMin')
							? (line.getId() === 0) ? '-∞' : this.state.seuil[line.getId()].seuilMin
							: (line.getId() === this.state.index - 1) ? '+∞' : this.state.seuil[line.getId()].seuilMax}
						_handleChange={
							(event: {
								/**
								 * get currentTarget in event element
								 */
								currentTarget: HTMLInputElement;
							}) => this.handleValueChange(event.currentTarget.value,
								obj.getName(), line.getId())
						} disabled={(obj.getName() === 'seuilMin') || (line.getId() === this.state.index - 1)} />,
				);
			const couleur: JSX.Element[] = this.addButtonColor(line.getId());
			const newKey = line.getId().toString() + 'brGestColor';
			final = final.concat(result.concat(couleur
				.concat(<br key={newKey} />)));
		}
		return (
			<div className='couleurVariable' >
				<ul>
					{final}
				</ul>
			</div>
		);
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
		await this.setStateAsyncArrayInputClass({
			arrayInputClass: [],
		});
		await this.setStateAsyncIndex({
			index: 0,
		});
		await this.setStateAsyncSeuil({
			seuil: [],
		});
		await this.setStateAsyncArrayWaitEnd({
			waitEnd: true,
		});

		if (this.props.seuil.length > 0) {
			const nb: number = parseInt(this.state.nbVariation, 10);
			await this.addVariation(nb, this.props.seuil);
			await this.setStateAsyncArrayWaitEnd({
				waitEnd: false,
			});
		}

	}

	/**
	 * render
	 */
	public render() {

		return (
			<div>
				<InputTextField
					label='Nombre de variation:'
					name='nbVariation'
					placeholder='nombre'
					required={true}
					value={this.state.nbVariation}
					_handleChange={this.onChangeVariation} />
				<Button onClick={this.onClickVariation}>
					Ajouter des couleurs
				</Button>
				<br />
				<br />
				{
					(this.state.waitEnd === false) ?
						this.fillVarInput()
						:
						(
							<br />
						)
				}
				<Button onClick={this.infoSeuil}>
					Info Seuil
				</Button>
				{/* <Alert title='test' /> */}
			</div>
		);
	}
}
export default CouleurVariable;
