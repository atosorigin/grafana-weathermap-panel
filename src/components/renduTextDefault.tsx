
import React from 'react';
import { SimpleOptions, IBackground } from 'types';

import { SelectableValue, PanelEditorProps } from '@grafana/data';
import { FormField } from '@grafana/ui';

import InputSelect from 'Functions/Input/inputSelect';

interface IProps extends PanelEditorProps<SimpleOptions> {
}

interface IState {
	/** police choice in select */
	newPolice: SelectableValue<string>;
	/** size variable for input */
	size: string;
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
			newPolice: {
				value: this.props.options.police,
				label: this.props.options.police,
			},
			size: this.props.options.size,
			style: this.props.options.styleText,
		};
	}

	/**
	 * call parent with new data
	 */
	public callParent = () => {
		const { newPolice, size, style } = this.state;
		const pPolice: string = newPolice.value || '';
		const pSize = size;
		const pStyle = style;

		this.props.onOptionsChange({
			...this.props.options,
			police: pPolice,
			size: pSize,
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
	 * set size state async
	 */
	public setStateAsyncsize = (
		state: {
			/** new size value */
			size: string,
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
	public handleChangesize = async (event: {
		/** target to input element */
		target: HTMLInputElement,
	}) => {
		await this.setStateAsyncsize({
			size: event.target.value,
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
	 * Change background picture
	 */
	public onImageChanged = (e: {
		/**
		 * Get target element
		 */
		target: HTMLInputElement;
	}) => {
		const newBaseMap: IBackground = this.props.options.baseMap;
		newBaseMap.image = e.target.value;
		this.props.onOptionsChange({
			...this.props.options,
			baseMap: newBaseMap,
		});
		// this.props.onOptionsChange({ ...this.props.options, imageUrl: event.target.value });
	}

	/**
	 * html
	 */
	public render() {

		const { options } = this.props;

		const police: Array<SelectableValue<string>> = [
			{ value: 'Helvetica', label: 'Helvetica' },
			{ value: 'Arial', label: 'Arial' },
			{ value: 'sans-serif', label: 'sans-serif' },
			{ value: 'mono', label: 'mono' },
		];

		const l10n = require('Localization/en.json');

		return (
			<div>
				<InputSelect
					_onChange={this.onChangePolice}
					data={police}
					defaultValue={this.state.newPolice}
				/>

				<FormField
					label={l10n.textDefault.size}
					labelWidth={10}
					inputWidth={15}
					required={true}
					value={this.state.size}
					onChange={this.handleChangesize} />

				<FormField
					label={l10n.textDefault.style}
					labelWidth={10}
					inputWidth={15}
					required={true}
					value={this.state.style}
					onChange={this.handleChangeStyle} />

				<FormField label={l10n.simpleEditor.pictureLink}
					labelWidth={10}
					inputWidth={30}
					type='text'
					onChange={this.onImageChanged}
					value={options.baseMap.image || ''} />
			</div>
		);
	}

}

export default RendutextDefault;
