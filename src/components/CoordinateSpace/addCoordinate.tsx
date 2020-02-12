import React from 'react';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from 'types';

import { CoordinateSpaceExtendClass } from 'Models/CoordinateSpaceExtendClass';
import { TextObject } from 'Models/TextObjectClass';
import { ParametrageMetrique } from 'Models/SettingMetricClass';

import CoordinateSpace from 'components/CoordinateSpace/coordinateSpace';

interface IProps extends PanelEditorProps<SimpleOptions> { }

interface IState {
	/**
	 * data for new CoordinateSpaceExtendClass
	 */
	coordinate?: CoordinateSpaceExtendClass;
}

/**
 * Add new coordinate space
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
	public searchNewId = (allCoordinateSpace: CoordinateSpaceExtendClass[]): number => {
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
	 * create new CoordinateSpace class
	 */
	public initCoordinateSpace = (): CoordinateSpaceExtendClass => {
		const allCoordinateSpace: CoordinateSpaceExtendClass[] = this.props.options.arrayCoordinateSpace.slice();
		const initTextObject: TextObject = new TextObject('', '', '', '', '', '', '', '', '',
			false, '', '', '',
			false, false, false, '', false, '');
		const parametrageMetric: ParametrageMetrique = new ParametrageMetrique('', '', '');
		const newId: number = this.searchNewId(allCoordinateSpace);

		const newCoordinate: CoordinateSpaceExtendClass = new CoordinateSpaceExtendClass(
			newId, '', '', '', '', '', '', '',
			initTextObject, parametrageMetric, '', '');
		return newCoordinate;
	}

	/**
	 * call init class for coordinate state
	 */
	public componentDidMount = (): void => {
		this.setState({
			coordinate: this.initCoordinateSpace(),
		});
	}

	/**
	 * send data for parent
	 */
	public callBack = (
		id: number, newCoordinate?: CoordinateSpaceExtendClass): void => {
		if (newCoordinate) {
			const allCoordinateSpace: CoordinateSpaceExtendClass[] = this.props.options.arrayCoordinateSpace.slice();
			this.props.onOptionsChange({
				...this.props.options,
				arrayCoordinateSpace: allCoordinateSpace.concat(newCoordinate),
			});
			this.componentDidMount();
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
