import React from 'react';

import { SimpleOptions } from 'types';

import { PanelEditorProps, SelectableValue } from '@grafana/data';
import { Select } from '@grafana/ui';

import { RegionClass } from 'Models/RegionClass';

import { initRegionCoordinateSpace } from 'Functions/initRegionCoordinateSpace';

import CoordinateSpace from './coordinateSpace';


interface IProps extends PanelEditorProps<SimpleOptions> { }

interface IState {
	/** array for select value with the coordianates space */
	selectCoordinateSpace: Array<SelectableValue<RegionClass>>;
	/** default select value */
	selectCoordinateSpaceDefault: SelectableValue<RegionClass>;
}

/**
 * manage coordinate space for simpleEditor
 */
class EditCoordinateSpace extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			selectCoordinateSpace: [],
			selectCoordinateSpaceDefault: [],
		};
	}

	/**
	 * save data in parent
	 */
	public callBack = (id: number, newCoordinate?: RegionClass): void => {
		if (newCoordinate) {
			const oldData: RegionClass[] = this.props.options.arrayCoordinateSpace.slice();
			let i: number = 0;
			for (const line of oldData) {
				if (line.id === id) {
					oldData[i] = newCoordinate;
					break;
				}
				++i;
			}
			this.props.onOptionsChange({
				...this.props.options,
				arrayCoordinateSpace: oldData,
			});
		} else {
			let find: boolean = false;
			const oldData: RegionClass[] = this.props.options.arrayCoordinateSpace.slice();
			let i: number = 0;
			for (const line of oldData) {
				if (line.id === id) {
					find = true;
					break;
				}
				++i;
			}
			if (find) {
				oldData.splice(i, 1);
				this.props.onOptionsChange({
					...this.props.options,
					arrayCoordinateSpace: oldData,
				});
			}
		}
	}

	/**
	 * fill data for select
	 */
	public componentDidMount = () => {
		const valueSelect = [];
		const stockTmpCoordinatesSpace: RegionClass[] = this.props.options.arrayCoordinateSpace;

		for (const line of stockTmpCoordinatesSpace) {
			valueSelect.push({ value: line, label: line.label });
		}
		this.setState({
			selectCoordinateSpace: valueSelect,
			selectCoordinateSpaceDefault: (valueSelect.length > 0) ?
				valueSelect[0] : initRegionCoordinateSpace(this.props.options.indexRegion),
		});
	}

	/**
	 * Change select value to edit
	 */
	public onChangeSelectCoordinate = (value: SelectableValue<RegionClass>) => {
		this.setState({
			selectCoordinateSpaceDefault: value,
		});
	}

	/**
	 * update state if value props change
	 */
	public componentDidUpdate = (prevProps: IProps) => {
		if (prevProps.options.arrayCoordinateSpace !== this.props.options.arrayCoordinateSpace) {
			// this.componentDidMount();
		}
	}

	/** result */
	public render() {
		return (
			<div>
				<div>
					<Select
						onChange={(value) => this.onChangeSelectCoordinate(value)}
						allowCustomValue={false}
						options={this.state.selectCoordinateSpace}
						width={10}
						value={this.state.selectCoordinateSpaceDefault} />
				</div>
				<br />
				<div>
					{
						this.state.selectCoordinateSpaceDefault.value ?
							<CoordinateSpace options={this.props.options}
								onOptionsChange={this.props.onOptionsChange}
								data={this.props.data}
								coordinate={this.state.selectCoordinateSpaceDefault.value}
								callBackToParent={this.callBack}
								isAddCoordinate={false} />
							:
							<p>Data not set</p>
					}
				</div>
			</div>
		);
	}
}
export default EditCoordinateSpace;
