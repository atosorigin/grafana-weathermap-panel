import React from 'react';
import { FormField } from '@grafana/ui';
import InputSeriesColorPicker from 'Functions/Input/inputSeriesColorPicker';
import { Seuil } from 'Models/SeuilClass';

import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from 'types';

interface IProps extends PanelEditorProps<SimpleOptions> {
}

interface IState {
	/**
	 * couleur du fond
	 */
	seuil: Seuil[];
}

/**
 * edit color in fix mode
 */
class CouleurFixe extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			seuil: this.props.options.seuil,
		};
	}

	/**
	 * edit background color with Promise
	 */
	public setStateAsyncSeuil = (state: {
		/**
		 * edit colorFond
		 */
		seuil: Seuil[],
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/**
	 * save data
	 */
	public callBack = (): void => {
		this.props.onOptionsChange({
			...this.props.options,
			seuil: this.state.seuil,
		});

	}

	/**
	 * change background color
	 */
	public onChangeColorFond = async (key: number, color: string) => {
		const newSeuil: Seuil[] = this.state.seuil;
		newSeuil[0].couleurFond = color;
		await this.setStateAsyncSeuil({
			seuil: newSeuil,
		});
		this.callBack();
	}

	/**
	 * change contour color
	 */
	public onChangeColorContour = async (key: number, color: string) => {
		const newSeuil: Seuil[] = this.state.seuil;
		newSeuil[0].couleurContour = color;
		await this.setStateAsyncSeuil({
			seuil: newSeuil,
		});
		this.callBack();
	}

	/**
	 * change size color
	 */
	public onChangeSzContour = async (value: string) => {
		const newSeuil: Seuil[] = this.state.seuil;
		newSeuil[0].sizeContour = value;
		await this.setStateAsyncSeuil({
			seuil: newSeuil,
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
					color={this.state.seuil[0].couleurFond}
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
						color={this.state.seuil[0].couleurContour}
						keyInt={0}
						text={l10n.colorVariable.switchOutlineColor}
						_onChange={this.onChangeColorContour}
					/>

					<FormField
						labelWidth={10}
						label={l10n.colorVariable.thicknessOutline}
						name='epaisseurContour'
						placeholder={l10n.colorVariable.thicknessOutline}
						value={this.state.seuil[0].sizeContour}
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
