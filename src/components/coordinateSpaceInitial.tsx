import React from 'react';
import { SimpleOptions } from 'types';

import { PanelEditorProps } from '@grafana/data';

import { createInputCoor } from 'Functions/createInputCoor';
import { editGoodParameter } from 'Functions/editGoodParameter';
import InputTextField from 'Functions/Input/inputText';

import { ArrayInputClass } from 'Models/ArrayInputClass';
import { CoordinateSpaceInitialClass } from 'Models/CoordinateSpaceInittialClass';
import { InputClass } from 'Models/InputClass';

interface IProps extends PanelEditorProps<SimpleOptions> {
}

interface IState {
	/**
	 * contains all input for this form
	 */
	arrayInput: ArrayInputClass;
	/**
	 * stock value for Parent Component
	 */
	arrayCoor: CoordinateSpaceInitialClass;
}

/**
 * class CoordinateSpaceInitial
 */
class CoordinateSpaceInitial extends React.Component<IProps, IState>  {

	constructor(props: IProps) {
		super(props);
		this.state = {
			arrayInput: this.initInput(),
			arrayCoor: this.initCoordinateSpaceClass(),
		};
	}

	/**
	 * Call parent to send arrayCoor data
	 */
	public callBack = () => {
		this.props.onOptionsChange({
			...this.props.options,
			arrayCoordinateSpaceInitial: this.state.arrayCoor,
		});
	}

	/**
	 * initialize a new CoordinateSpace Class
	 */
	public initCoordinateSpaceClass = (): CoordinateSpaceInitialClass => {
		const { arrayCoordinateSpaceInitial } = this.props.options;
		const json = require('Localization/fr.json');

		const newEspaceCoor: CoordinateSpaceInitialClass = new CoordinateSpaceInitialClass(
			arrayCoordinateSpaceInitial.id || 0,
			arrayCoordinateSpaceInitial.xMin || '0',
			arrayCoordinateSpaceInitial.xMax || '0',
			arrayCoordinateSpaceInitial.yMin || '0',
			arrayCoordinateSpaceInitial.yMax || '0',
			arrayCoordinateSpaceInitial.label || json.initialCoordonateSpace.label);
		return newEspaceCoor;
	}

	/**
	 * test
	 */
	public initInput = (): ArrayInputClass => {
		const arrayInput: InputClass[] = createInputCoor(0, true);
		const newArrayInput: ArrayInputClass = new ArrayInputClass(0, arrayInput);
		return newArrayInput;
	}

	/**
	 * Use function if value input change
	 * @param {string} currentTarget new value of input
	 * @param {string} name name of input
	 * @param {number} index id of input
	 */
	public _handleChange(currentTarget: string, name: string, index: number) {
		const { arrayCoor } = this.state;

		this.setState({
			arrayCoor: editGoodParameter(name, arrayCoor, currentTarget),
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

		value = '';
		if (param.startsWith('positionXMin')) {
			value = this.state.arrayCoor.getXMin().toString();
		} else if (param.startsWith('positionXMax')) {
			value = this.state.arrayCoor.getXMax().toString();
		} else if (param.startsWith('positionYMin')) {
			value = this.state.arrayCoor.getYMin().toString();
		} else if (param.startsWith('positionYMax')) {
			value = this.state.arrayCoor.getYMax().toString();
		} else if (param.startsWith('label')) {
			value = this.state.arrayCoor.getLabel();
		}
		return value;
	}

	/**
	 * fill form in load
	 */
	public fillForm = (): JSX.Element => {
		const { arrayInput } = this.state;
		let finalItem: JSX.Element[] = [];

		const mapItems = arrayInput.getUneClassInput()
			.map((obj: InputClass) =>
				(obj.getInputType() === 'text') ?
					<InputTextField key={obj.getId()}
						label={obj.getLabel()}
						name={obj.getName()}
						placeholder={obj.getPlaceholder() || ''}
						required={obj.getRequired()}
						value={this.getGoodValue(arrayInput.getId(), obj.getName())}
						_handleChange={
							(event: {
								/**
								 * get currentTarget in event element
								 */
								currentTarget: HTMLInputElement;
							}) => this._handleChange(event.currentTarget.value,
								obj.getName(), arrayInput.getId())
						} />
					:
					<br key={obj.getId()} />
			);
		finalItem = mapItems;
		return (
			<ul>
				{finalItem}
			</ul>
		);
	}

	/**
	 * HTML render
	 */
	public render() {

		return (
			<div>
				{
					this.fillForm()
				}
			</div>
		);
	}
}

export default CoordinateSpaceInitial;
