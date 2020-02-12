import React from 'react';
import CoordinateSpace from './coordinateSpace';
import AddCoordinate from './addCoordinate';
import { PanelEditorProps, SelectableValue } from '@grafana/data';
import { SimpleOptions } from 'types';
import { Select } from '@grafana/ui';
import { CoordinateSpaceExtendClass } from 'Models/CoordinateSpaceExtendClass';

import { Tab, TabsBar, TabContent } from '@grafana/ui';

import { TextObject } from 'Models/TextObjectClass';
import { ParametrageMetrique } from 'Models/SettingMetricClass';

interface IProps extends PanelEditorProps<SimpleOptions> { }

interface IState {
	/** array for select value with the coordianates space */
	selectCoordinateSpace: Array<SelectableValue<CoordinateSpaceExtendClass>>;
	/** default select value */
	selectCoordinateSpaceDefault: SelectableValue<CoordinateSpaceExtendClass>;
	/** manage tabs focus */
	tabsVariable: boolean[];
}

/**
 * manage coordinate space for simpleEditor
 */
class ManageCoordinateSpace extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			selectCoordinateSpace: [],
			selectCoordinateSpaceDefault: [],
			tabsVariable: [false, true],
		};
	}

	/** init CoordinateSpaceExtendClass */
	public initCoordinateSpace = (): CoordinateSpaceExtendClass => {
		const initTextObject: TextObject = new TextObject('', '', '', '', '', '', '', '', '',
			false, '', '', '',
			false, false, false, '', false, '');
		const parametrageMetric: ParametrageMetrique = new ParametrageMetrique('', '', '');

		const newCoordinate: CoordinateSpaceExtendClass = new CoordinateSpaceExtendClass(
			0, '', '', '', '', '', '', '',
			initTextObject, parametrageMetric, '', '');
		return newCoordinate;
	}

	/**
	 * save data in parent
	 */
	public callBack = (id: number, newCoordinate?: CoordinateSpaceExtendClass): void => {
		if (newCoordinate) {
			const oldData: CoordinateSpaceExtendClass[] = this.props.options.arrayCoordinateSpace.slice();
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
			const oldData: CoordinateSpaceExtendClass[] = this.props.options.arrayCoordinateSpace.slice();
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
		const stockTmpCoordinatesSpace: CoordinateSpaceExtendClass[] = this.props.options.arrayCoordinateSpace;

		for (const line of stockTmpCoordinatesSpace) {
			valueSelect.push({ value: line, label: line.label });
		}
		this.setState({
			selectCoordinateSpace: valueSelect,
			selectCoordinateSpaceDefault: (valueSelect.length > 0) ?
				valueSelect[0] : this.initCoordinateSpace(),
		});
	}

	/**
	 * Change select value to edit
	 */
	public onChangeSelectCoordinate = (value: SelectableValue<CoordinateSpaceExtendClass>) => {
		this.setState({
			selectCoordinateSpaceDefault: value,
		});
	}

	/**
	 * switch tab
	 * @param {number} id id to to new tab
	 */
	public goToTab = (id: number): void => {
		const oldValue: boolean[] = this.state.tabsVariable.slice();
		const size: number = oldValue.length;
		for (let i: number = 0; i < size; i++) {
			oldValue[i] = (i === id) ? true : false;
		}
		this.setState({
			tabsVariable: oldValue,
		});
	}

	/**
	 * update state if value props change
	 */
	public componentDidUpdate = (prevProps: IProps) => {
		if (prevProps.options.arrayCoordinateSpace !== this.props.options.arrayCoordinateSpace) {
			this.componentDidMount();
		}
	}

	/**
	 * result
	 */
	public render() {
		return (
			<div>
				<TabsBar className='page-header tabs' hideBorder={false}>
					<Tab key='tabDisplayCoordinateSpaceAdd'
						label='Add coordinate space'
						active={this.state.tabsVariable[0]}
						onChangeTab={() => this.goToTab(0)}
					/>
					<Tab key='tabDisplayCoordinateSpaceEdit'
						label='Edit coordinate space'
						active={this.state.tabsVariable[1]}
						onChangeTab={() => this.goToTab(1)}
					/>
				</TabsBar>
				<TabContent>
					{this.state.tabsVariable[0] &&
						<div>
							<AddCoordinate
								onOptionsChange={this.props.onOptionsChange}
								options={this.props.options}
								data={this.props.data}
							/>
						</div>
					}
					{this.state.tabsVariable[1] &&
						<div>
							<div>
								<Select
									onChange={(value) => this.onChangeSelectCoordinate(value)}
									allowCustomValue={false}
									options={this.state.selectCoordinateSpace}
									width={10}
									value={this.state.selectCoordinateSpaceDefault} />
							</div>
							<div>
								{
									this.state.selectCoordinateSpaceDefault.value ?
										<CoordinateSpace options={this.props.options}
											onOptionsChange={this.props.onOptionsChange}
											data={this.props.data}
											coordinate={this.state.selectCoordinateSpaceDefault.value}
											callBackToParent={this.callBack} />
										:
										<p>Data not set</p>
								}
							</div>
						</div>
					}
				</TabContent>
			</div>
		);
	}
}
export default ManageCoordinateSpace;
