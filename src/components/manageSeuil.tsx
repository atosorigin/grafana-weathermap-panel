import React from 'react';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from 'types';

import { Seuil } from 'Models/SeuilClass';

import { Switch } from '@grafana/ui';
import CouleurVariable from 'components/Parametrage/couleurVariable';
import CouleurFixe from 'components/Parametrage/couleurFixe';

interface IProps extends PanelEditorProps<SimpleOptions> { }

interface IState {
	contourIsActive: boolean;
	fondIsActive: boolean;
	colorMode: boolean;
}

/**
 * def class
 */
class ManageSeuil extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			contourIsActive: this.props.options.contourIsActive,
			fondIsActive: this.props.options.fondIsActive,
			colorMode: this.props.options.colorMode,
		};
	}

	/**
	 * promise for contour state
	 * @param state value state to edit
	 */
	public setStateAsyncContour = (state: {
		/**
		 * edit contour state
		 */
		contourIsActive: boolean,
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/**
	 * promise for fond state
	 * @param state value state to edit
	 */
	public setStateAsyncFond = (state: {
		/**
		 * edit fond
		 */
		fondIsActive: boolean,
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/**
	 * promise to edit color mode
	 * @param state value state to edit
	 */
	public setStateAsyncColorMode = (state: {
		/**
		 * color
		 */
		colorMode: boolean,
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

/**
 * save data in type
 */
	public onSave = () => {
		this.props.onOptionsChange({
			...this.props.options,
			contourIsActive: this.state.contourIsActive,
			fondIsActive: this.state.fondIsActive,
			colorMode: this.state.colorMode,
		});
	}

	/**
	 * Edit fondIsChecked with switch
	 */
	public onSwitchFond = async () => {
		await this.setStateAsyncFond({
			fondIsActive: !this.state.fondIsActive,
		});
		this.onSave();
	}

	/**
	 * Edit contourIsChecked with switch
	 */
	public onSwitchContour = async () => {
		await this.setStateAsyncContour({
			contourIsActive: !this.state.contourIsActive,
		});
		this.onSave();
	}

	/**
	 * switch colorMode -> fixe / variable
	 */
	public onSwitchColorMode = async () => {
		if (this.state.colorMode) {
			this.props.onOptionsChange({
				...this.props.options,
				seuil: [new Seuil(0, '', '', '', '', '')],
			});
		} else {
			this.props.onOptionsChange({
				...this.props.options,
				seuil: [],
			});
		}
		await this.setStateAsyncColorMode({
			colorMode: !this.state.colorMode,
		});
		this.onSave();
	}

	/**
	 * result
	 */
	public render() {
		const l10n = require('Localization/en.json');
		return (
			<div>
				<Switch
					label={l10n.genericParameter.variableColor}
					checked={this.state.colorMode}
					onChange={this.onSwitchColorMode}
				/>
				<br />

				<Switch
					label={l10n.genericParameter.traceBackground}
					checked={this.state.fondIsActive}
					onChange={this.onSwitchFond} />

				<Switch
					label={l10n.genericParameter.traceContour}
					checked={this.state.contourIsActive}
					onChange={this.onSwitchContour} />

				{
					this.state.colorMode ?
						(
							<CouleurVariable
								options={this.props.options}
								onOptionsChange={this.props.onOptionsChange}
								data={this.props.data}
							/>
						)
						:
						(
							<CouleurFixe
								options={this.props.options}
								onOptionsChange={this.props.onOptionsChange}
								data={this.props.data}
							/>
						)
				}
			</div>
		);
	}
}
export default ManageSeuil;
