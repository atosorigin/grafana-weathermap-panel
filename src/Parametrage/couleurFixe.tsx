import React, { CSSProperties } from 'react';
import { FormField } from '@grafana/ui';
import InputSeriesColorPicker from 'Input/inputSeriesColorPicker';
import { Seuil } from 'Models/seuil';

interface IProps {
	/**
	 * color for fond
	 */
	fondIsActive: boolean;
	/**
	 * color for contour
	 */
	contourIsActive: boolean;
	/**
	 * old color
	 */
	seuil: Seuil[];
	/**
	 * function for return value to parent
	 */
	callBackFromParent: (dataFromChild: Seuil[]) => void;
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
			colorFond: this.props.seuil[0] ? this.props.seuil[0].couleurFond : '',
			colorContour: this.props.seuil[0] ? this.props.seuil[0].couleurContour : '',
			szContour: this.props.seuil[0] ? this.props.seuil[0].sizeContour : '',
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
		this.props.callBackFromParent([
			new Seuil(0, '', '', colorFond, colorContour, szContour),
		]);
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

		if (this.props.fondIsActive) {
			const keyFondColorPicker = key + 'FondcolorPicker';
			const styleCouleurFond: CSSProperties = {
				color: this.state.colorFond,
				cursor: 'pointer',
			};

			couleur.push(
				<InputSeriesColorPicker
					key={keyFondColorPicker}
					color={this.state.colorFond}
					keyInt={0}
					style={styleCouleurFond}
					text='Changer la couleur du fond'
					_onChange={this.onChangeColorFond}
				/>,
			);
		}
		if (this.props.contourIsActive) {
			const keyContourDiv = key + 'ContourDiv';
			const styleCouleurContour: CSSProperties = {
				color: this.state.colorContour,
				cursor: 'pointer',
			};

			couleur.push(
				<div key={keyContourDiv}>
					<InputSeriesColorPicker
						color={this.state.colorContour}
						keyInt={0}
						style={styleCouleurContour}
						text='Changer la couleur du contour'
						_onChange={this.onChangeColorContour}
					/>

					<FormField
						labelWidth={10}
						label='Épaisseur du contour'
						name='epaisseurContour'
						placeholder='Epaisseur contour'
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
