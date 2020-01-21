import React from 'react';
import { Button } from '@grafana/ui';
import { ArrayInputClass } from '../Models/arrayInputClass';
import { EspaceCoordonneesClass } from '../Models/EspaceCoordonneesClass';
import { InputClass } from '../Models/inputClass';
import InputButtonField from '../Functions/Input/inputButton';
import InputTextField from '../Functions/Input/inputText';
import { createInputCoor } from '../Functions/createInputCoor';
import { editGoodParameter } from '../Functions/editGoodParameter';

import '../style/EspaceCoordonnees.css';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from 'types';

interface IProps extends PanelEditorProps<SimpleOptions> {
}

interface IState {
	/**
	 * stock coordinates in array object for Parent Component
	 */
	arrayCoor: EspaceCoordonneesClass[];
	/**
	 * enable of disable console.log
	 */
	debug: boolean;
	/**
	 * stock HTML input coordinates
	 */
	arrayInput: ArrayInputClass[];
	/**
	 * last id coordinate
	 */
	index: number;
}

/**
 * class pour définir des espaces de coodonnées
 */
class EspaceCoordonnees extends React.Component<IProps, IState>  {
	constructor(props: IProps) {
		super(props);
		this.state = {
			arrayCoor: [],
			arrayInput: [],
			debug: false,
			index: 10,
		};
	}


	/**
	 * call function to return arrayCoor a SimpleEditor
	 */
	public callBack = () => {
		this.props.onOptionsChange({
			...this.props.options,
			arrayEspaceCoordonnees: this.state.arrayCoor,
		});
	}

	/**
	 * add inputs for a new coordiante
	 */
	public addInput = (
		id: number, xMin?: string, xMax?: string, yMin?: string, yMax?: string, text?: string) => {
		const num: number = id;
		const finalArray: InputClass[] = createInputCoor(num);

		this.setState({
			arrayCoor: this.state.arrayCoor.concat(new EspaceCoordonneesClass(num, xMin || '0',
				xMax || '0', yMin || '0', yMax || '0', text || '')),
			arrayInput: this.state.arrayInput.concat([
				new ArrayInputClass(num, finalArray),
			]),
			index: (id + 1),
		});
	}

	/**
	 * dsgs
	 */
	public addTestInput = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		this.addInput(this.state.index);
	}

	/**
	 * Delete array coordinate in state.arrayCoor
	 * @param {number} id id of object element to delete
	 */
	public deleteArrayCoor(id: number): void {
		const newEspaceCoordonneesClass: EspaceCoordonneesClass[] = this.state.arrayCoor
			.filter((value: EspaceCoordonneesClass) =>
				value.getId() !== id,
			);
		this.setState({
			arrayCoor: newEspaceCoordonneesClass,
		});
		setTimeout(() => {
			this.callBack();
		}, 100);
	}

	/**
	 * Delete array input and value
	 * @param {event} event event click delete button
	 */
	public deleteOwnInput = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
		const { arrayInput } = this.state;
		const id = event.currentTarget.id;

		for (const obj of arrayInput) {
			for (const line of obj.getUneClassInput()) {
				if (line.getInputType() === 'button') {
					if (line.getId() === id) {
						const updateArrayInput: ArrayInputClass[] = arrayInput
							.filter((value: ArrayInputClass) =>
								value.getId() !== obj.getId(),
							);
						this.setState({
							arrayInput: updateArrayInput,
						});
						this.deleteArrayCoor(parseInt(id, 10));
						return;
					}
				}
			}
		}
	}

	/**
	 * Use function if value input change
	 * @param {string} currentTarget new value of input
	 * @param {string} name name of input
	 * @param {number} index id of input
	 */
	public _handleChange(currentTarget: string, name: string, index: number) {
		let i: number;

		i = 0;
		const cpy: EspaceCoordonneesClass[] = this.state.arrayCoor.slice();
		for (const line of cpy) {
			if (line.getId() === index) {
				cpy[i] = editGoodParameter(name, cpy[i], currentTarget);
				break;
			}
			i++;
		}
		this.setState({
			arrayCoor: cpy,
		});
		this.callBack();
	}

	/**
	 * Get value of input with state.arrayCoor
	 * @param {number} id id of element
	 * @param {string} param name of input
	 * @returns {string} value of the array element
	 */
	public getGoodValue(id: number, param: string): string {
		let value: string;
		let idx = -1;
		let index = 0;

		value = '';
		for (const line of this.state.arrayCoor) {
			if (line.getId() === id) {
				idx = index;
				break;
			}
			++index;
		}
		if (idx === -1) {
			return value;
		}

		if (param.startsWith('positionXMin')) {
			value = this.state.arrayCoor[idx].getXMin().toString();
		} else if (param.startsWith('positionXMax')) {
			value = this.state.arrayCoor[idx].getXMax().toString();
		} else if (param.startsWith('positionYMin')) {
			value = this.state.arrayCoor[idx].getYMin().toString();
		} else if (param.startsWith('positionYMax')) {
			value = this.state.arrayCoor[idx].getYMax().toString();
		} else if (param.startsWith('label')) {
			value = this.state.arrayCoor[idx].getLabel();
		}
		return value;
	}

	/**
	 * test
	 */
	public onClickDelete = (event: React.SyntheticEvent<Element, Event>) => {
		console.log('je suis la');

	}

	/**
	 * create dynamic input
	 */
	public fillInputEspaceCoor(): JSX.Element {
		const { arrayInput } = this.state;
		let finalItem: JSX.Element[] = [];

		for (const line of arrayInput) {
			const mapItems = line.getUneClassInput()
				.map((obj: InputClass) =>
					(obj.getInputType() === 'text') ?
						<InputTextField key={obj.getId()}
							label={obj.getLabel()}
							name={obj.getName()}
							placeholder={obj.getPlaceholder() || ''}
							required={obj.getRequired()}
							value={this.getGoodValue(line.getId(), obj.getName())}
							_handleChange={
								(event: {
									/**
									 * get currentTarget in event element
									 */
									currentTarget: HTMLInputElement;
								}) => this._handleChange(event.currentTarget.value,
									obj.getName(), line.getId())
							} />
						:
						<InputButtonField
							key={obj.getId()}
							label={obj.getLabel()}
							value={obj.getValue() || ''}
							name={obj.getName()}
							required={obj.getRequired()}
							_handleChange={this.deleteOwnInput}
							id={obj.getId()} />,
				);
			const divKey: string = 'inputCoor' + line.getId();
			const newInput: JSX.Element = <div key={divKey} className='inputCoor'>{mapItems}</div>;
			finalItem = finalItem.concat(newInput);
		}
		return (
			<ul>
				{finalItem}
			</ul>
		);
	}

	/**
	 * call function in load component
	 */
	public componentDidMount = () => {
		const { arrayEspaceCoordonnees } = this.props.options;

		if (arrayEspaceCoordonnees.length === 0) {
			return;
		}
		for (const element of arrayEspaceCoordonnees) {
			setTimeout(() => {
				this.addInput(element.id, element.xMin,
					element.xMax, element.yMin, element.yMax, element.label);
			}, 100);
		}
	}

	/**
	 * render
	 */
	public render() {

		return (
			<div>
				{
					this.fillInputEspaceCoor()
				}
				<div className='buttonAddCoor'>
					<Button onClick={this.addTestInput}>Ajouter des coordonnées</Button>
				</div>
			</div>
		);
	}
}

export default EspaceCoordonnees;
