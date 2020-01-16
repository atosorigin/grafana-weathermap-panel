import React from 'react';

import InputSelect from './Input/inputSelect';
import { SelectableValue } from '@grafana/data';
import { FormField } from '@grafana/ui';

interface IProps {

}

interface IState {
	/** defaultValue */
	defaultValue: SelectableValue<string>;
	abscissesPointRegionTexte: string;
	ordonneesPointRegionTexte: string;
}

/**
 * def
 */
class ObjectVisibility extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			defaultValue: { value: 'bonjour', label: 'Bonjour' },
			abscissesPointRegionTexte: '',
			ordonneesPointRegionTexte: '',
		};
	}

	public onChangeValue = (value: SelectableValue<string>) => {
		this.setState({
			defaultValue: value,
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

	/**
	 * result
	 */
	public render() {
		const value: Array<SelectableValue<string>> = [
			{ value: 'bonjour', label: 'Bonjour' },
			{ value: 'Salut', label: 'Salut' },
			{ value: 'toi', label: 'toi' },
		];

		return (
			<div>
				<div>
					<p>Décaler le point de centrage de la région de texte</p>
					<InputSelect _onChange={this.onChangeValue}
						data={value}
						defaultValue={this.state.defaultValue}
					/>
					<FormField label='Abscisses' labelWidth={15} type='text'
						required={false} name='abscissesPointRegionTexte'
						onChange={this.onChangeAbscissesPointRegionText}
						value={this.state.abscissesPointRegionTexte} />
					<FormField label='Ordonnées' labelWidth={15} type='text'
						required={false} name='ordonneesPointRegionTexte'
						onChange={this.onChangeOrdonneesPointRegionText}
						value={this.state.ordonneesPointRegionTexte} />
				</div>

				<div>
					<p>Décaler la pointe ou le centre d’une bulle</p>
					<InputSelect _onChange={this.onChangeCenterBubleSelect}
						data={value}
						defaultValue={this.state.centerBubleSelect}
					/>
					<FormField label='Abscisses' labelWidth={15} type='text'
						required={false} name='centerSelectInput'
						onChange={this.onChangeCenterSelectInput}
						value={this.state.centerSelectInput} />
				</div>

				<div>
					<p>Forcer un niveau de calque spécifique</p>
					<InputSelect _onChange={this.onChangeValue}
						data={value}
						defaultValue={this.state.defaultValue}
					/>
					<FormField label='Abscisses' labelWidth={15} type='text'
						required={false} name='nvCalque'
						onChange={this.onChangeNvCalque}
						value={this.state.nvCalque} />
				</div>

				<div>
					<p>Forcer une courbure de lien spécifique</p>
					<InputSelect _onChange={this.onChangeCourbureInput}
						data={value}
						defaultValue={this.state.courbureDefault}
					/>
					<FormField label='Abscisses' labelWidth={15} type='text'
						required={false} name='courbureInput'
						onChange={this.onChangecourbureInput}
						value={this.state.courbureInput} />
				</div>

			</div>
		);
	}
}
export default ObjectVisibility;
