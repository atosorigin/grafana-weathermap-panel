import React from 'react';
import { Switch } from '@grafana/ui';
import CouleurVariable from './couleurVariable';
import CouleurFixe from './couleurFixe';
import ParametrageMetriquePrincipale from './parametrageMetriquePrincipale';
import { Seuil } from 'Models/seuil';
import { ParametrageMetrique } from 'Models/parametrageMetrique';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from 'types';

interface IProps extends PanelEditorProps<SimpleOptions> { }

interface IState {
	/**
	 * fond
	 */
	fondIsActive: boolean;
	/**
	 * contour
	 */
	contourIsActive: boolean;
	/**
	 * Mode couleur statique ou variable
	 */
	colorMode: boolean;
	/**
	 * seuil
	 */
	seuil: Seuil[];
	/**
	 * parametrage metrique
	 */
	parametrageMetrique: ParametrageMetrique;
}

/**
 * class ParametresGeneriques
 */
class ParametresGeneriques extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			fondIsActive: this.props.options.fondIsActive,
			contourIsActive: this.props.options.contourIsActive,
			colorMode: this.props.options.colorMode,
			seuil: this.props.options.seuil,
			parametrageMetrique: this.props.options.parametrageMetrique,
		};
	}

	/**
	 * call back data to parent
	 */
	public callBack = (): void => {
		const { onOptionsChange } = this.props;

		onOptionsChange({
			...this.props.options,
			fondIsActive: this.state.fondIsActive,
			contourIsActive: this.state.contourIsActive,
			colorMode: this.state.colorMode,
		});
	}

	/**
	 * promise for parametrageMetrique
	 */
	public setStateAsyncParametrageMetrique = (state: {
		/**
		 * edit parametrageMetrique
		 */
		parametrageMetrique: ParametrageMetrique,
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
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
	 * promise for edit seuil
	 * @param state value Seuil[]
	 */
	public setStateAsyncSeuil = (state: {
		/**
		 * variable Seuil[]
		 */
		seuil: Seuil[],
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/**
	 * Edit fondIsChecked with switch
	 */
	public onSwitchFond = async () => {
		await this.setStateAsyncFond({
			fondIsActive: !this.state.fondIsActive,
		});
		this.callBack();
	}

	/**
	 * Edit contourIsChecked with switch
	 */
	public onSwitchContour = async () => {
		await this.setStateAsyncContour({
			contourIsActive: !this.state.contourIsActive,
		});
		this.callBack();
	}

	/**
	 * switch colorMode -> fixe / variable
	 */
	public onSwitchColorMode = async () => {
		if (this.state.colorMode) {
			this.props.onOptionsChange({
				...this.props.options,
				seuil: [],
			});
			await this.setStateAsyncSeuil({
				seuil: [new Seuil(0, '', '', '', '', '')],
			});
		} else {
			await this.setStateAsyncSeuil({
				seuil: [],
			});
		}
		await this.setStateAsyncColorMode({
			colorMode: !this.state.colorMode,
		});
		this.callBack();
	}

	/**
	 * HTML
	 */
	public render() {
		const urlTooltip: string = 'https://atos.net';
		const l10n = require('Localization/en.json');


		return (
			<div>

				<div>

					<h4>{l10n.genericParameter.settingPrincipalMetric}</h4>
					<ParametrageMetriquePrincipale
						options={this.props.options}
						onOptionsChange={this.props.onOptionsChange}
						data={this.props.data}
					/>

					<h4>{l10n.genericParameter.graphicObject}</h4>
					<br />
					<Switch
						label={l10n.genericParameter.variableColor}
						checked={this.state.colorMode}
						onChange={this.onSwitchColorMode}
					/>
					<br />

					<Switch
						tooltip={urlTooltip}
						label={l10n.genericParameter.traceBackground}
						checked={this.state.fondIsActive}
						onChange={this.onSwitchFond} />

					<Switch
						label={l10n.genericParameter.traceContour}
						checked={this.state.contourIsActive}
						onChange={this.onSwitchContour} />

					<br />

				</div>
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
				<br />
			</div>
		);
	}
}
export default ParametresGeneriques;
