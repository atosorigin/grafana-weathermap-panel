import React from 'react';
import { SimpleOptions, TManageValue, IMetric } from '../../types';

import { PanelEditorProps, SelectableValue, DataFrame } from '@grafana/data';
import { Select, FormField, Collapse, FormLabel, Button } from '@grafana/ui';

interface IProps extends PanelEditorProps<SimpleOptions> {
	/** id coordinate. Use to check if componentDidUpdate launch update */
	idCoordinate: number;
	/** parent data */
	metrics: IMetric[];
	/** call function when save data */
	callBackToParent: (metrics: IMetric[], id?: number) => void;
	/** id coordinateSpace for link and point*/
	id?: number;
	isPoint: boolean;
	isLink: boolean;
	isRegion: boolean;
}

interface IState {
	/** data for manipulate mainMetric */
	metrics: IMetric[];
	/** collapse main metric open or close */
	collapse: boolean;
	/** value for manage value (for query => ) */
	selectManageValue: Array<SelectableValue<TManageValue>>;
	/** default value for manage value */
	selectDefaultManageValue: SelectableValue<TManageValue>;
	/** select aux query */
	selectQuery: Array<SelectableValue<DataFrame>>;
	/** select main query */
	selectQueryDefault: SelectableValue<DataFrame>;
	
	mapItems: JSX.Element[];
}

/**
 * def
 */
class ManageAuxiliaryQuery extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			metrics: this.props.metrics,
			collapse: false,
			selectManageValue: [],
			selectDefaultManageValue: { 'value': 'avg', 'label': 'avg' },
			selectQuery: [],
			selectQueryDefault: [],
			mapItems: [],
		};
	}

	public getAuxiliaryMetrics = (): IMetric[] => {

		let auxiliaryMetrics: IMetric[] = [];

		if (this.props.isPoint) {
			auxiliaryMetrics = this.props.options.arrayPoints[this.props.id || 0].metrics;
		} else if (this.props.isLink) {
			auxiliaryMetrics = this.props.options.arrayOrientedLinks[this.props.id || 0].metrics;
		} else if (this.props.isRegion) {
			auxiliaryMetrics = this.props.options.regionCoordinateSpace[this.props.id || 0].metrics;
		}

		return auxiliaryMetrics;
	}

	/** call back to parent */
	public callBack = () => {
		this.props.callBackToParent(this.state.metrics, this.props.id);
	}
	
	/** switch value collapseMainMetric when click collapse */
	public onToggleCollapse = (isOpen: boolean) => {
		this.setState({
			collapse: isOpen,
		});
	}

	/** edit value for select */
	public onChangeSelectQuery = (value: SelectableValue<DataFrame>) => {
	}

	public onChangeKey = (event: any) => {
		const newAuxiliaryMetrics: IMetric[] = this.state.metrics;
		const id: number = event.currentTarget.id;
		console.log(id);
		const value: string = event.currentTarget.value;
		newAuxiliaryMetrics[id].key = value;
		this.setState({
			metrics: newAuxiliaryMetrics,
		});
		this.callBack();
	}

	public onChangeValueKey = (event: any) => {
		const newAuxiliaryMetrics: IMetric[] = this.state.metrics;
		const id: number = event.currentTarget.id;
		const value: string = event.currentTarget.value;
		newAuxiliaryMetrics[id].keyValue = value;
		this.setState({
			metrics: newAuxiliaryMetrics,
		});
		this.callBack();
	}

	public onChangeTypeValue = () => {

	}

	public addAuxiliaryMetric = () => {
		let auxiliaryMetrics: IMetric[] = this.state.metrics;
		auxiliaryMetrics.push({'key': '', 'unit': '', 'format': '', 'keyValue': '', 'refId': '', 'manageValue': 'avg'});
		this.setState({
			metrics: auxiliaryMetrics,
		});
		this.displayInputs();
		this.callBack();
	}

	public deleteAuxiliaryMetric = (event: any) => {
		const id: number = event.currentTarget.id;
		const auxiliaryMetrics: IMetric[] = this.getAuxiliaryMetrics();
		auxiliaryMetrics.splice(id, 1);
		this.displayInputs();
		this.callBack();
	}
	
	/** add all query in select */
	public fillSelectQuery = () => {
	}
	
	public generateInputs = (index: number): JSX.Element => {

		const id: number = index;

		const styleAuxiliaryMetric = {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			padding: '10px',
			marginBottom: '5px',
			border: '1px solid rgb(23, 23, 24)',
		} as React.CSSProperties;

		const styleSelect = {
			display: 'flex',
			flexDirection: 'row',
			marginBottom: '2px',
		} as React.CSSProperties;

		const item: JSX.Element =
						<div>
							<div style={styleAuxiliaryMetric}>
								<div>
									<div style={styleSelect}>
										<FormLabel width={10}>Reference</FormLabel>
										<div id={id.toString()}>
											<Select
												onChange={(value) => this.onChangeSelectQuery(value)}
												allowCustomValue={false}
												options={this.state.selectQuery}
												width={20}
												value={this.state.selectQueryDefault}/>
										</div>
									</div>
										<FormField id={id.toString()} label='Key' labelWidth={10} inputWidth={20}
											type='text' value={this.state.metrics[id].key} name='key'
											onChange={this.onChangeKey} />

									<div>
										<FormField id={id.toString()} label='Value key' labelWidth={10} inputWidth={20}
											type='text' value={this.state.metrics[id].keyValue} name='valueKey'
											onChange={this.onChangeValueKey} />
									</div>
									<div style={styleSelect}>
										<FormLabel width={10}>Type of value</FormLabel>
										<div id={id.toString()}>
											<Select
												onChange={this.onChangeTypeValue}
												allowCustomValue={false}
												options={this.state.selectManageValue}
												width={20}
												value={this.state.selectDefaultManageValue}/>
										</div>
									</div>
								</div>
								<Button id={id.toString()} onClick={this.deleteAuxiliaryMetric} variant={'danger'} >Delete</Button>
							</div>
						</div>;
		return (
			<div>
				{item}
			</div>
		)
	}

	public displayInputs = () => {
		const auxiliaryMetrics: IMetric[] = this.getAuxiliaryMetrics();

		const mapItems: JSX.Element[] = [];
		let index: number = 0;

		console.log(this.state.metrics)

		auxiliaryMetrics.forEach(() => {
			const item: JSX.Element = this.generateInputs(index);
			mapItems.push(item);
			index++;
		});

		return (
			<div>
				{mapItems}
			</div>
		);
	}

	/**
	 * result
	 */
	public render() {

		const styleButtonAdd = {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			backgroundColor: 'rgb(33, 35, 39)',
		} as React.CSSProperties;

		return (
			<Collapse isOpen={this.state.collapse}
				label='Auxiliary metrics'
				onToggle={this.onToggleCollapse} >
				{this.displayInputs()}
				<div style={styleButtonAdd}>
					<Button onClick={this.addAuxiliaryMetric}>Add Auuxiliary Metric</Button>
				</div>
			</Collapse>
		);
	}
}
export default ManageAuxiliaryQuery;
