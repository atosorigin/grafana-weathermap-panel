import React from 'react';

import InputSelect from '../Functions/Input/inputSelect';
import { SelectableValue } from '@grafana/data';
import { FormField } from '@grafana/ui';

import axios from 'axios';

interface IProps {

}

interface IState {
	regionTextSelect: Array<SelectableValue<string>>
	/** defaultValue */
	regionTextSelectDefault: SelectableValue<string>;
	abscissesPointRegionTexte: string;
	ordonneesPointRegionTexte: string;

	centerBubbleSelect: Array<SelectableValue<string>>;
	centerBubbleSelectDefault: SelectableValue<string>;
	centerBubbleInputOrdonnees: string;
	centerBubbleInputAbscisses: string;

	nvCalqueSelect: Array<SelectableValue<string>>;
	nvCalqueSelectDefault: SelectableValue<string>;
	nvCalqueInput: string;

	courbureSelect: Array<SelectableValue<string>>;
	courbureSelectDefault: SelectableValue<string>,
	courbureInput: string;

	dataTest: JSX.Element[];
}

/**
 * def
 */
class ObjectVisibility extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			regionTextSelect: [
				{ value: 'bonjour', label: 'Bonjour' },
				{ value: 'Salut', label: 'Salut' },
				{ value: 'toi', label: 'toi' },
			],
			regionTextSelectDefault: { value: 'bonjour', label: 'Bonjour' },
			abscissesPointRegionTexte: '',
			ordonneesPointRegionTexte: '',
			centerBubbleSelect: [],
			centerBubbleSelectDefault: {},
			centerBubbleInputOrdonnees: '',
			centerBubbleInputAbscisses: '',
			nvCalqueSelect: [],
			nvCalqueSelectDefault: {},
			nvCalqueInput: '',
			courbureSelect: [],
			courbureSelectDefault: {},
			courbureInput: '',
			dataTest: [],
		};
	}

	public onChangeRegionTextSelectDefault = (value: SelectableValue<string>) => {
		this.setState({
			regionTextSelectDefault: value,
		});
	}

	public onChangeAbscissesPointRegionText = (event: { currentTarget: HTMLInputElement }) => {
		this.setState({
			abscissesPointRegionTexte: event.currentTarget.value,
		});
	}

	public onChangeOrdonneesPointRegionText = (event: { currentTarget: HTMLInputElement }) => {
		this.setState({
			ordonneesPointRegionTexte: event.currentTarget.value,
		});
	}

	public onChangeCenterBubbleSelect = (value: SelectableValue<string>) => {
		this.setState({
			centerBubbleSelectDefault: value,
		});
	}

	public onChangeCenterBubbleInputOrdonnees = (event: { currentTarget: HTMLInputElement }) => {
		this.setState({
			centerBubbleInputOrdonnees: event.currentTarget.value,
		});
	}

	public onChangeCenterBubbleInputAbscisses = (event: { currentTarget: HTMLInputElement }) => {
		this.setState({
			centerBubbleInputAbscisses: event.currentTarget.value,
		});
	}

	public onChangeNvCalqueSelect = (value: SelectableValue<string>) => {
		this.setState({
			nvCalqueSelectDefault: value,
		});
	}

	public onChangeCourbureInput = (event: { currentTarget: HTMLInputElement }) => {
		this.setState({
			courbureInput: event.currentTarget.value,
		});
	}

	public onChangeNvCalque = (event: { currentTarget: HTMLInputElement }) => {
		this.setState({
			nvCalqueInput: event.currentTarget.value,
		});
	}

	/*
	state => dataTest: JSX.Element[]
*/

	// public setStateAsyncDataTest = (state: {
	// 	dataTest: JSX.Element[];
	// }) => {
	// 	return new Promise((resolve) => {
	// 		this.setState(state, resolve);
	// 	});
	// }

	// public componentDidMount = () => {
	// 	axios.get('https://api.punkapi.com/v2/beers')
	// 		.then(async (res) => {
	// 			for (const r of res.data) {
	// 				await this.setStateAsyncDataTest({
	// 					dataTest: this.state.dataTest.concat(<p>{r.name}</p>),
	// 				});
	// 			}
	// 		});
	// }

	/**
	 * result
	 */
	public render() {

		const json = require('../Localization/fr.json');

		return (
			<div>
				<div>
					{/* {
						this.state.dataTest
					} */}
					<p>{json.objectVisibility.decalCenterPointTextRegion}</p>
					<InputSelect _onChange={this.onChangeRegionTextSelectDefault}
						data={this.state.regionTextSelect}
						defaultValue={this.state.regionTextSelectDefault}
					/>
					<FormField label={json.basics.abscisses}
						labelWidth={15} type='text'
						required={false} name='abscissesPointRegionTexte'
						onChange={this.onChangeAbscissesPointRegionText}
						value={this.state.abscissesPointRegionTexte} />
					<FormField label={json.basics.ordonnees}
						labelWidth={15} type='text'
						required={false} name='ordonneesPointRegionTexte'
						onChange={this.onChangeOrdonneesPointRegionText}
						value={this.state.ordonneesPointRegionTexte} />
				</div>

				<div>
					<p>{json.objectVisibility.decalCenterBubble}</p>
					<InputSelect _onChange={this.onChangeCenterBubbleSelect}
						data={this.state.centerBubbleSelect}
						defaultValue={this.state.centerBubbleSelectDefault}
					/>
					<FormField label={json.basics.abscisses}
						labelWidth={15} type='text'
						required={false} name='centerBubbleInputAbscisses'
						onChange={this.onChangeCenterBubbleInputAbscisses}
						value={this.state.centerBubbleInputAbscisses} />
					<FormField label={json.basics.ordonnees}
						labelWidth={15} type='text'
						required={false} name='centerBubbleInputOrdonnees'
						onChange={this.onChangeCenterBubbleInputOrdonnees}
						value={this.state.centerBubbleInputOrdonnees} />
				</div>

				<div>
					<p>{json.objectVisibility.forceCalqueLevel}</p>
					<InputSelect _onChange={this.onChangeNvCalqueSelect}
						data={this.state.nvCalqueSelect}
						defaultValue={this.state.nvCalqueSelectDefault}
					/>
					<FormField label={json.basics.calcLevel}
						labelWidth={15} type='text'
						required={false} name='nvCalque'
						onChange={this.onChangeNvCalque}
						value={this.state.nvCalqueInput} />
				</div>

				<div>
					<p>{json.objectVisibility.forceCourbSpecificLink}</p>
					<InputSelect _onChange={this.onChangeCourbureInput}
						data={this.state.courbureSelect}
						defaultValue={this.state.courbureSelectDefault}
					/>
					<FormField label={json.basics.courbure}
						labelWidth={15} type='text'
						required={false} name='courbureInput'
						onChange={this.onChangeCourbureInput}
						value={this.state.courbureInput} />
				</div>
				{/* <h3>{json.sam.test}</h3> */}
			</div>
		);
	}
}
export default ObjectVisibility;
