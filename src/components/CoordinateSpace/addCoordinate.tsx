import React from 'react';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from 'types';

import { EspaceCoordonneesExtendClass } from 'Models/EspaceCoordonneesExtendClass';
import { TextObject } from 'Models/TextObject';
import { ParametrageMetrique } from 'Models/parametrageMetrique';

import CoordinateSpace from 'components/CoordinateSpace/coordinateSpace';

interface IProps extends PanelEditorProps<SimpleOptions> { }

interface IState {
	/**
	 * data for new EspaceCoordonneesExtendClass
	 */
	coordinate?: EspaceCoordonneesExtendClass;
}

/**
 * def class
 */
class AddCoordinate extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			coordinate: undefined,
		};
	}

	/**
	 * search new id for espacecoordinneesclass
	 */
	public searchNewId = (allCoordinateSpace: EspaceCoordonneesExtendClass[]): number => {
		let id: number = -1;

		for (const line of allCoordinateSpace) {
			if (line.id > id) {
				id = line.id;
			}
		}
		id += 1;
		return id;
	}

	/**
	 * create new EspaceCoordonnees class
	 */
	public initCoordinateSpace = (): EspaceCoordonneesExtendClass => {
		const allCoordinateSpace: EspaceCoordonneesExtendClass[] = this.props.options.arrayEspaceCoordonnees.slice();
		const initTextObject: TextObject = new TextObject('', '', '', '', '', '', '', '', '',
			false, '', '', '',
			false, false, false, '', false, '');
		const parametrageMetric: ParametrageMetrique = new ParametrageMetrique('', '', '');
		const newId: number = this.searchNewId(allCoordinateSpace);

		const newCoordinate: EspaceCoordonneesExtendClass = new EspaceCoordonneesExtendClass(
			newId, '', '', '', '', '', '', '',
			initTextObject, parametrageMetric, '', '');
		return newCoordinate;
	}

	/**
	 * call init class for coordinate state
	 */
	public componentDidMount = () => {
		this.setState({
			coordinate: this.initCoordinateSpace(),
		});
	}

	/**
	 * send data for parent
	 */
	public callBack = (id: number, newCoordinate?: EspaceCoordonneesExtendClass) => {
		if (newCoordinate) {
			const allCoordinateSpace: EspaceCoordonneesExtendClass[] = this.props.options.arrayEspaceCoordonnees.slice();
			this.props.onOptionsChange({
				...this.props.options,
				arrayEspaceCoordonnees: allCoordinateSpace.concat(newCoordinate),
			});
		}
	}

	/**
	 * result
	 */
	public render() {
		return (
			<div>
				{this.state.coordinate &&
					<CoordinateSpace
						options={this.props.options}
						onOptionsChange={this.props.onOptionsChange}
						data={this.props.data}
						coordinate={this.state.coordinate}
						callBackToParent={this.callBack}
					/>
				}
			</div>
		);
	}
}
export default AddCoordinate;
