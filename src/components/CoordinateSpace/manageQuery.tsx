import React from 'react';
import { SimpleOptions, TManageValue, IMetric } from 'types';

import { PanelEditorProps, SelectableValue, DataFrame } from '@grafana/data';
import { Select, FormField, Collapse } from '@grafana/ui';

interface IProps extends PanelEditorProps<SimpleOptions> {
	/** id coordinate. Use to check if componentDidUpdate launch update */
	idCoordinate: number;
	/** parent data */
	mainMetric: IMetric;
	/** call function when save data */
	callBackToParent: (mainMetric: IMetric) => void;
}

interface IState {
	/** data for manipulate mainMetric */
	mainMetric: IMetric;
	/** collapse main metric open or close */
	collapseMainMetric: boolean;
	/** value for manage value (for query => ) */
	selectManageValue: Array<SelectableValue<TManageValue>>;
	/** default value for manage value */
	selectDefaultManageValue: SelectableValue<TManageValue>;
	/** select aux query */
	selectQuery: Array<SelectableValue<DataFrame>>;
	/** select main query */
	selectQueryDefault: SelectableValue<DataFrame>;
}

/**
 * def
 */
class ManageQuery extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			mainMetric: this.props.mainMetric,
			collapseMainMetric: false,
			selectManageValue: [],
			selectDefaultManageValue: { 'value': 'avg', 'label': 'avg' },
			selectQuery: [],
			selectQueryDefault: [],
		};
	}

	/** edit value for default select manage value */
	public onChangeSelectManageValue = (value: SelectableValue<TManageValue>) => {
		const newMainMetric: IMetric = this.state.mainMetric;
		newMainMetric.manageValue = value.value || 'error';
		this.setState({
			mainMetric: newMainMetric,
			selectDefaultManageValue: value || this.state.selectDefaultManageValue,
		});
	}

	/** edit value key for mainMetric */
	public _handleChangeKey = (value: string) => {
		const newMainMetric: IMetric = this.state.mainMetric;

		newMainMetric.key = value;
		this.setState({
			mainMetric: newMainMetric,
		});
	}

	/** edit value keyValue for mainMetric */
	public _handleChangeKeyValue = (value: string) => {
		const newMainMetric: IMetric = this.state.mainMetric;

		newMainMetric.keyValue = value;
		this.setState({
			mainMetric: newMainMetric,
		});
	}

	/** edit value for select */
	public onChangeSelectQuery = (value: SelectableValue<DataFrame>) => {
		const newMainMetric: IMetric = this.state.mainMetric;

		newMainMetric.refId = value.value?.refId || '';
		newMainMetric.expr = '';
		this.setState({
			mainMetric: newMainMetric,
			selectQueryDefault: value,
		});
	}

	/** switch value collapseMainMetric when click collapse */
	public onToggleMainMetric = (isOpen: boolean) => {
		this.setState({
			collapseMainMetric: isOpen,
		});
	}

	/** add all query in select */
	public fillSelectQuery = () => {
		const valueSelect: Array<SelectableValue<DataFrame>> = [];
		const newMainMetric: IMetric = this.state.mainMetric;

		console.log(this.props.data.series);
		console.log(this.props.data.request);

		for (const line of this.props.data.series) {
			let duplicate: boolean = false;
			for (const valueSave of valueSelect) {
				if (valueSave.value?.refId === line.refId) {
					duplicate = true;
					break;
				}
			}
			if (!duplicate) {
				valueSelect.push({ value: line, label: line.refId });
			}
		}
		if (newMainMetric.refId === '') {
			newMainMetric.refId = valueSelect.length > 0 ?
				valueSelect[0].value?.refId || '' : '';
		}

		const refId: string | undefined = this.state.mainMetric.refId;
		let defaultValue: SelectableValue<DataFrame>;

		defaultValue = valueSelect[0];
		if (refId) {
			// console.log(valueSelect.filter((a) => { return a.value?.refId === refId; }));
			for (const line of valueSelect) {
				if (line.value?.refId === refId) {
					defaultValue = line;
					break;
				}
			}
		}
		this.setState({
			mainMetric: newMainMetric,
			selectQuery: valueSelect,
			selectQueryDefault: defaultValue,
		});
	}

	/** fill data when component mount */
	public componentDidMount = () => {
		this.fillSelectQuery();
		const newSelectManageValue: Array<SelectableValue<TManageValue>> = [
			{ 'value': 'avg', 'label': 'average' },
			{ 'value': 'sum', 'label': 'total' },
			{ 'value': 'error', 'label': 'error' },
		];
		let defaultValue: SelectableValue<TManageValue> = newSelectManageValue[0];
		for (const line of newSelectManageValue) {
			if (line.value === this.state.mainMetric.manageValue) {
				defaultValue = line;
			}
		}
		this.setState({
			selectManageValue: newSelectManageValue,
			selectDefaultManageValue: defaultValue,
		});
	}

	/** update with promise mainMetric state */
	public setStateAsyncMainMetric = (state: {
		/** new value main metric */
		mainMetric: IMetric,
	}) => {
		return new Promise((resolve) => this.setState(state, resolve));
	}

	/** update data when props is update */
	public componentDidUpdate = async (prevProps: IProps) => {
		if (prevProps.idCoordinate !== this.props.idCoordinate) {
			this.setState({
				collapseMainMetric: false,
			});
			await this.setStateAsyncMainMetric({ mainMetric: this.props.mainMetric });
			this.fillSelectQuery();
		}
		if (prevProps.data.series !== this.props.data.series) {
			this.fillSelectQuery();
		}
	}

	/**
	 * result
	 */
	public render() {
		return (
			<Collapse isOpen={this.state.collapseMainMetric}
				label='Main metric'
				onToggle={this.onToggleMainMetric} >
				<Select
					onChange={(value) => this.onChangeSelectQuery(value)}
					allowCustomValue={false}
					options={this.state.selectQuery}
					width={10}
					value={this.state.selectQueryDefault}
				/>
				<FormField label='Key' labelWidth={10} inputWidth={20}
					type='text' value={this.state.mainMetric.key} name='key'
					onChange={(event) => this._handleChangeKey(event.currentTarget.value)} />
				<FormField label='Value key' labelWidth={10} inputWidth={20}
					type='text' value={this.state.mainMetric.keyValue} name='valueKey'
					onChange={(event) => this._handleChangeKeyValue(event.currentTarget.value)} />
				<Select
					onChange={(value) => this.onChangeSelectManageValue(value)}
					allowCustomValue={false}
					options={this.state.selectManageValue}
					width={10}
					value={this.state.selectDefaultManageValue}
				/>
			</Collapse>
		);
	}
}
export default ManageQuery;

