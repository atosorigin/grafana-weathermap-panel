import React from 'react';
import { Switch } from '@grafana/ui';
import CouleurVariable from './couleurVariable';
import CouleurFixe from './couleurFixe';
import ParametrageMetriquePrincipale from './parametrageMetriquePrincipale';
import { Seuil } from 'Models/seuil';
import { ParametrageMetrique } from 'Models/parametrageMetrique';

interface IProps {
	/**
	 * call back from parent
	 */
	callBackFromParent: (
		pFondIsActive: boolean,
		pContourIsActive: boolean,
		pColorMode: boolean,
		pSeuil: Seuil[],
		parametrageMetrique: ParametrageMetrique) => void;
	/**
	 * last value fond
	 */
	fondIsActive: boolean;
	/**
	 * last value contour
	 */
	contourIsActive: boolean;
	/**
	 * last color mode
	 */
	colorMode: boolean;
	/**
	 * last seuil
	 */
	seuil: Seuil[];
	/**
	 * stock metrique
	 */
	parametrageMetrique: ParametrageMetrique;
}

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
			fondIsActive: this.props.fondIsActive,
			contourIsActive: this.props.contourIsActive,
			colorMode: this.props.colorMode,
			seuil: this.props.seuil,
			parametrageMetrique: this.props.parametrageMetrique,
		};
	}

	/**
	 * call back data to parent
	 */
	public callBack = (): void => {
		this.props.callBackFromParent(
			this.state.fondIsActive,
			this.state.contourIsActive,
			this.state.colorMode,
			this.state.seuil,
			this.state.parametrageMetrique);
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
	 * save data in state and call callBack function
	 * @param dataFromChild Seuil[]
	 */
	public myCallBackColor = async (dataFromChild: Seuil[]) => {
		console.group('myCallBackColor');
		console.table(dataFromChild);
		console.groupEnd();

		await this.setStateAsyncSeuil({
			seuil: dataFromChild,
		});
		this.callBack();
	}

	/**
	 * save data in state and call callBack function
	 */
	public myCallBackMetriquePrincipal = async (
		param: ParametrageMetrique) => {
		await this.setStateAsyncParametrageMetrique({
			parametrageMetrique: param,
		});
		this.callBack();
	}

	/**
	 * HTML
	 */
	public render() {
		const urlTooltip: string = 'https://atos.net';

		return (
			<div>

				<div>

					<h4>Paramétrage d&#39;une métrique principale</h4>
					<ParametrageMetriquePrincipale
						parametrageMetrique={this.state.parametrageMetrique}
						callBackFromParent={this.myCallBackMetriquePrincipal.bind(this)}
					/>

					<h4>Objets graphiques</h4>
					<br />
					<Switch
						label='Couleur variable'
						checked={this.state.colorMode}
						onChange={this.onSwitchColorMode}
					/>
					<br />

					<Switch
						tooltip={urlTooltip}
						label='Tracer le fond'
						checked={this.state.fondIsActive}
						onChange={this.onSwitchFond} />

					<Switch
						label='Tracer le contour'
						checked={this.state.contourIsActive}
						onChange={this.onSwitchContour} />

					<br />

				</div>
				{
					this.state.colorMode ?
						(
							<CouleurVariable
								fondIsActive={this.state.fondIsActive}
								contourIsActive={this.state.contourIsActive}
								seuil={this.state.seuil}
								callBackFromParent={this.myCallBackColor.bind(this)} />
						)
						:
						(
							<CouleurFixe
								fondIsActive={this.state.fondIsActive}
								contourIsActive={this.state.contourIsActive}
								seuil={this.state.seuil}
								callBackFromParent={this.myCallBackColor.bind(this)}
							/>
						)
				}

				<br />

			</div>
		);
	}
}
export default ParametresGeneriques;
