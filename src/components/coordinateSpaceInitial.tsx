import React from 'react';
import { SimpleOptions, ICoordinateSpaceInitial } from 'types';

import { FormField, Switch } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';

import { editGoodParameter } from 'Functions/editGoodParameter';

interface IProps extends PanelEditorProps<SimpleOptions> {
}

interface IState {
	/** value to initial coordinate space */
	arrayCoor: ICoordinateSpaceInitial;
	/** change switch value */
	// displayInitialSpace: boolean;
}

/**
 * initialize space for space coordinate
 */
class CoordinateSpaceInitial extends React.Component<IProps, IState>  {
	constructor(props: IProps) {
		super(props);
		this.state = {
			arrayCoor: this.props.options.coordinateSpaceInitial,
		};
	}

	/**
	 * Call parent to send arrayCoor data
	 */
	public callBack = () => {
		this.props.onOptionsChange({
			...this.props.options,
			coordinateSpaceInitial: this.state.arrayCoor,
		});
	}

	/**
	 * Use function if value input change
	 * @param {string} currentTarget new value of input
	 * @param {string} name name of input
	 */
	public _handleChange(currentTarget: string, name: string) {
		this.setState({
			arrayCoor: editGoodParameter(name,
				this.state.arrayCoor, currentTarget),
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
			value = this.state.arrayCoor.coordinate.xMin;
		} else if (param.startsWith('positionXMax')) {
			value = this.state.arrayCoor.coordinate.xMax;
		} else if (param.startsWith('positionYMin')) {
			value = this.state.arrayCoor.coordinate.yMin;
		} else if (param.startsWith('positionYMax')) {
			value = this.state.arrayCoor.coordinate.yMax;
		}
		return value;
	}

	/** change value for switch */
	public onChangeSwitchDisplayInitialSpace = () => {
		const newDisplayInitial: ICoordinateSpaceInitial = this.state.arrayCoor;
		newDisplayInitial.displayArea = !newDisplayInitial.displayArea;
		this.setState({
			arrayCoor: newDisplayInitial,
		});
		this.callBack();
	}

	/**
	 * HTML render
	 */
	public render() {

		return (
			<div className='coordinateSpaceInitial'>
				<Switch
					label='Display space initial'
					checked={this.state.arrayCoor.displayArea}
					onChange={this.onChangeSwitchDisplayInitialSpace} />
				<FormField label='xMin'
					labelWidth={10}
					inputWidth={20}
					type='text'
					required={true}
					name='xMin'
					value={this.state.arrayCoor.coordinate.xMin}
					onChange={(event: {
						/**
						 * get currentTarget in event element
						 */
						currentTarget: HTMLInputElement;
					}) => this._handleChange(event.currentTarget.value,
						'positionXMin')
					}
					placeholder={'X minimum'}
				/>

				<FormField label='X max'
					labelWidth={10}
					inputWidth={20}
					type='text'
					required={true}
					name='xMax'
					value={this.state.arrayCoor.coordinate.xMax}
					onChange={(event: {
						/**
						 * get currentTarget in event element
						 */
						currentTarget: HTMLInputElement;
					}) => this._handleChange(event.currentTarget.value,
						'positionXMax')
					}
					placeholder={'X max'}
				/>

				<FormField label='Y min'
					labelWidth={10}
					inputWidth={20}
					type='text'
					required={true}
					name='yMin'
					value={this.state.arrayCoor.coordinate.yMin}
					onChange={(event: {
						/**
						 * get currentTarget in event element
						 */
						currentTarget: HTMLInputElement;
					}) => this._handleChange(event.currentTarget.value,
						'positionYMin')
					}
					placeholder={'Y minimum'}
				/>

				<FormField label='Y max'
					labelWidth={10}
					inputWidth={20}
					type='text'
					required={true}
					name='yMax'
					value={this.state.arrayCoor.coordinate.yMax}
					onChange={(event: {
						/**
						 * get currentTarget in event element
						 */
						currentTarget: HTMLInputElement;
					}) => this._handleChange(event.currentTarget.value,
						'positionYMax')
					}
					placeholder={'Y max'}
				/>
			</div>
		);
	}
}

export default CoordinateSpaceInitial;
