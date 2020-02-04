import React from 'react';
import { FormField } from '@grafana/ui';
import InputSeriesColorPicker from 'Functions/Input/inputSeriesColorPicker';
import { Seuil } from 'Models/seuil';

import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from 'types';

interface IProps extends PanelEditorProps<SimpleOptions> {
}

interface IState {
	/**
	 * couleur du fond
	 */
	colorFond: string;
	/**
	 * couleur contour
	 */
	colorContour: string;
	/**
	 * taille contour
	 */
	szContour: string;
}

/**
 * edit color in fix mode
 */
class CouleurFixe extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			colorFond: this.props.options.seuil[0] ? this.props.options.seuil[0].couleurFond : '',
			colorContour: this.props.options.seuil[0] ? this.props.options.seuil[0].couleurContour : '',
			szContour: this.props.options.seuil[0] ? this.props.options.seuil[0].sizeContour : '',
		};
	}

	/**
	 * edit background color with Promise
	 */
	public setStateAsyncColorFond = (state: {
		/**
		 * edit colorFond
		 */
		colorFond: string,
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/**
	 * edit contour color with Promise
	 */
	public setStateAsyncColorContour = (state: {
		/**
		 * edit colorContour
		 */
		colorContour: string,
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/**
	 * edit size contour with Promise
	 */
	public setStateAsyncSzContour = (state: {
		/**
		 * edit szContour
		 */
		szContour: string,
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/**
	 * save data
	 */
	public callBack = (): void => {
		const { colorContour, colorFond, szContour } = this.state;
		console.log('call back couleurFixe');

		const newSeuil: Seuil[] = [new Seuil(0, '', '', colorFond, colorContour, szContour)];
		this.props.onOptionsChange({
			...this.props.options,
			seuil: newSeuil,
		});
	}

	/**
	 * change background color
	 */
	public onChangeColorFond = async (key: number, color: string) => {
		await this.setStateAsyncColorFond({
			colorFond: color,
		});
		this.callBack();
	}

	/**
	 * change contour color
	 */
	public onChangeColorContour = async (key: number, color: string) => {
		await this.setStateAsyncColorContour({
			colorContour: color,
		});
		this.callBack();
	}

	/**
	 * change size color
	 */
	public onChangeSzContour = async (value: string) => {
		await this.setStateAsyncSzContour({
			szContour: value,
		});
		this.callBack();
	}

	/**
	 * add button color
	 */
	public addButtonColor = (): JSX.Element[] => {
		const key = '0';
		const couleur: JSX.Element[] = [];
		const l10n = require('Localization/en.json');

		if (this.props.options.fondIsActive) {
			const keyFondColorPicker = key + 'FondcolorPicker';

			couleur.push(
				<InputSeriesColorPicker
					key={keyFondColorPicker}
					color={this.state.colorFond}
					keyInt={0}
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
						color={this.state.colorContour}
						keyInt={0}
						text={l10n.colorVariable.switchOutlineColor}
						_onChange={this.onChangeColorContour}
					/>

					<FormField
						labelWidth={10}
						label={l10n.colorVariable.thicknessOutline}
						name='epaisseurContour'
						placeholder={l10n.colorVariable.thicknessOutline}
						value={this.state.szContour}
						onChange={(event) => this
							.onChangeSzContour(event.currentTarget.value)}
					/>
				</div >,
			);
		}
		return (couleur);
	}

	/**
	 * result
	 */
	public render() {
		return (
			<div>
				{
					this.addButtonColor()
				}
			</div>
		);
	}
}
export default CouleurFixe;
