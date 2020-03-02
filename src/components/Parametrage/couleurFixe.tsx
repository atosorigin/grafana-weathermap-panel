import React from 'react';

import { FormField } from '@grafana/ui';

import { LowerLimitClass } from 'Models/LowerLimitClass';

import InputSeriesColorPicker from 'Functions/Input/inputSeriesColorPicker';

interface IProps {
	/** trace border? */
	traceBorder: boolean;
	/** trace background? */
	traceBack: boolean;
	/** last array lowerLimit */
	lowerLimit: LowerLimitClass[];
	/** function parent to save lower limit */
	lowerLimitCallBack: (lowerLimit: LowerLimitClass[], id?: number) => void;

	id?: number;
}

interface IState {
	/** couleur du fond */
	lowerLimit: LowerLimitClass[];
	/** result html */
	htmlResult: JSX.Element;
}

/**
 * edit color in fix mode
 */
class CouleurFixe extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			lowerLimit: this.props.lowerLimit,
			htmlResult: <div></div>,
		};
	}

	/**
	 * edit background color with Promise
	 */
	public setStateAsyncSeuil = (state: {
		/**
		 * edit colorFond
		 */
		lowerLimit: LowerLimitClass[],
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/**
	 * save data
	 */
	public callBack = (): void => {
		this.props.lowerLimitCallBack(this.state.lowerLimit, this.props.id);
	}

	/**
	 * change background color
	 */
	public onChangeColorFond = async (key: number, color: string) => {
		const newSeuil: LowerLimitClass[] = this.state.lowerLimit;
		newSeuil[0].couleurFond = color;
		await this.setStateAsyncSeuil({
			lowerLimit: newSeuil,
		});
		this.callBack();
		this.initComponent();
	}

	/**
	 * change contour color
	 */
	public onChangeColorContour = async (key: number, color: string) => {
		const newSeuil: LowerLimitClass[] = this.state.lowerLimit;
		newSeuil[0].couleurContour = color;
		await this.setStateAsyncSeuil({
			lowerLimit: newSeuil,
		});
		this.callBack();
		this.initComponent();
	}

	/**
	 * change size color
	 */
	public onChangeSzContour = async (value: string) => {
		const newSeuil: LowerLimitClass[] = this.state.lowerLimit;
		newSeuil[0].sizeContour = value;
		await this.setStateAsyncSeuil({
			lowerLimit: newSeuil,
		});
		this.callBack();
		this.initComponent();
	}

	/**
	 * add button color
	 */
	public addButtonColor = (): JSX.Element[] => {
		const key = '0';
		const couleur: JSX.Element[] = [];
		const l10n = require('Localization/en.json');
		console.log(this.state.lowerLimit);
		console.log(this.props.lowerLimit);

		if (this.props.traceBack) {
			const keyFondColorPicker = key + 'FondcolorPicker';

			couleur.push(
				<InputSeriesColorPicker
					key={keyFondColorPicker}
					color={this.state.lowerLimit[0].couleurFond}
					keyInt={0}
					text={l10n.colorVariable.switchBackgroundColor}
					_onChange={this.onChangeColorFond}
				/>
			);
		}
		if (this.props.traceBorder) {
			const keyContourDiv = key + 'ContourDiv';

			couleur.push(
				<div key={keyContourDiv}>
					<InputSeriesColorPicker
						color={this.state.lowerLimit[0].couleurContour}
						keyInt={0}
						text={l10n.colorVariable.switchOutlineColor}
						_onChange={this.onChangeColorContour}
					/>

					<FormField
						labelWidth={10}
						label={l10n.colorVariable.thicknessOutline}
						name='epaisseurContour'
						placeholder={l10n.colorVariable.thicknessOutline}
						value={this.state.lowerLimit[0].sizeContour}
						onChange={(event) => this
							.onChangeSzContour(event.currentTarget.value)}
					/>
				</div >
			);
		}
		return (couleur);
	}

	/** create form */
	public initComponent = () => {
		this.setState({
			htmlResult: <div>{this.addButtonColor()}</div>,
		});
	}

	/** init component when component is mount */
	public componentDidMount = async () => {
		if (this.state.lowerLimit.length === 0) {
			await this.setStateAsyncSeuil({
				lowerLimit: [new LowerLimitClass(0, '', '', '','', '1')],
			});
		}
		this.initComponent();
	}

	/** init component when  update props */
	public componentDidUpdate = (prevProps: IProps) => {
		if (prevProps.traceBorder !== this.props.traceBorder
			|| prevProps.traceBack !== this.props.traceBack) {
			this.initComponent();
		}
	}

	/**
	 * result
	 */
	public render() {
		return (
			<div>
				{
					this.state.htmlResult
				}
				{/* <Button onClick={() => console.log(this.props.lowerLimit)}></Button> */}
			</div>
		);
	}
}
export default CouleurFixe;
