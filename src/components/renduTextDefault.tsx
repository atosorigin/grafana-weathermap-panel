
import React from 'react';
import { FormField } from '@grafana/ui';
import { SelectableValue } from '@grafana/data';

import InputSelect from 'Functions/Input/inputSelect';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from 'types';

interface IProps extends PanelEditorProps<SimpleOptions> {
}

interface IState {
	/** police choice in select */
	newPolice: SelectableValue<string>;
	/** size variable for input */
	taille: string;
	/** style variable for input */
	style: string;
}

/**
 * class to manage police, size and style
 */
class RendutextDefault extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			newPolice: { value: this.props.options.police,
				label: this.props.options.police },
			taille: this.props.options.taille,
			style: this.props.options.styleText,
		};
	}

	/**
	 * call parent with new data
	 */
	public callParent = () => {
		const { newPolice, taille, style } = this.state;
		const pPolice: string = newPolice.value || '';
		const pTaille = taille;
		const pStyle = style;

		this.props.onOptionsChange({
			...this.props.options,
			police: pPolice,
			taille: pTaille,
			styleText: pStyle,
		});
	}

	/**
	 * set police state async
	 */
	public setStateAsyncPolice = (
		state: {
			/** new police value */
			newPolice: SelectableValue<string>,
		}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/**
	 * set taille state async
	 */
	public setStateAsyncTaille = (
		state: {
			/** new size value */
			taille: string,
		}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/**
	 * set style state async
	 */
	public setStateAsyncStyle = (
		state: {
			/** new style value */
			style: string,
		}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/**
	 * edit size
	 */
	public handleChangeTaille = async (event: {
		/** target to input element */
		target: HTMLInputElement,
		}) => {
		await this.setStateAsyncTaille({
			taille: event.target.value,
		});
		this.callParent();
	}

	/**
	 * edit style
	 */
	public handleChangeStyle = async (event: {
		/** target to input element */
		target: HTMLInputElement,
		}) => {
		await this.setStateAsyncStyle({
			style: event.target.value,
		});
		this.callParent();
	}

	/**
	 * edit police
	 */
	public onChangePolice = async (value: SelectableValue<string>) => {
		await this.setStateAsyncPolice({
			newPolice: value,
		});
		this.callParent();
	}

	/**
	 * html
	 */
	public render() {
		const json = require('Localization/en.json');

		const police: Array<SelectableValue<string>> = [
			{ value: 'Helvetica', label: 'Helvetica' },
			{ value: 'Arial', label: 'Arial' },
			{ value: 'sans-serif', label: 'sans-serif' },
			{ value: 'mono', label: 'mono' },
		];

		return (
			<div>
				<InputSelect
					_onChange={this.onChangePolice}
					data={police}
					defaultValue={this.state.newPolice}
				/>

				<FormField
					label={json.textDefault.size}
					labelWidth={10}
					inputWidth={30}
					required={true}
					value={this.state.taille}
					onChange={this.handleChangeTaille} />

				<FormField
					label={json.textDefault.style}
					labelWidth={10}
					inputWidth={30}
					required={true}
					value={this.state.style}
					onChange={this.handleChangeStyle} />
			</div>
		);
	}

}

export default RendutextDefault;
