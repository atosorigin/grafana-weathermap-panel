import React from 'react';
import { SimpleOptions } from '../types';
import { PanelEditorProps, SelectableValue } from '@grafana/data';
import { FormField } from '@grafana/ui';
import { InputSelect } from '../inputSelect';

interface IProps extends PanelEditorProps<SimpleOptions> { }

/**
 * def
 */
class TimeSelector extends React.Component<IProps> {
	constructor(props: IProps) {
		super(props);
	}
	/**
	 * result
	 */

	onTimeChanged = (event: { currentTarget: HTMLInputElement }) => {
		const newData = this.props.options.timeRange;

		if (event.currentTarget.id === 'from') {
			newData.from = event.currentTarget.value;
		}
		if (event.currentTarget.id === 'to') {
			newData.to = event.currentTarget.value;
		}
		this.props.onOptionsChange({ ...this.props.options, timeRange: newData });
	}

	onUrlChanged = (event: { currentTarget: HTMLInputElement }) => {
		this.props.onOptionsChange({ ...this.props.options, promUrl: event.currentTarget.value });
	}

	onStepChanged = (value: SelectableValue<string>) => {
		this.props.onOptionsChange({ ...this.props.options, refresh: value });
	}

	onTimeQueryChanged = (event: { currentTarget: HTMLInputElement }) => {
		this.props.onOptionsChange({ ...this.props.options, timeQuery: event.currentTarget.value });
	}

	public render() {

		const { options } = this.props;
		return (
			<div>
				<div className='section gf-form-group'>
					<h2>Define search's range</h2>
					<p>Format: aaaa-mm-dd hh:mm:ss</p>
					<FormField label='TimeFrom' labelWidth={5} inputWidth={12}
					type='string' onChange={this.onTimeChanged.bind(this)} id='from' value={options.timeRange.from || ''} />
					<FormField label='TimeTo' labelWidth={5} inputWidth={12}
					type='string' onChange={this.onTimeChanged.bind(this)} id='to' value={options.timeRange.to || ''} />
					<h2>Url of prometheus server</h2>
					<FormField label='Prometheus URL:' labelWidth={10} inputWidth={15}
					type='string' onChange={this.onUrlChanged} value={options.promUrl || ''} />
					<InputSelect
						_onChange={this.onStepChanged}
						data={options.listStep}
						defaultValue={options.refresh}
					/>
				</div>
				<div className='section gf-form-group'>
					<h2>Define search's moment</h2>
					<p>Format: aaaa-mm-dd hh:mm:ss</p>
					<FormField label='TimeQuery' labelWidth={5} inputWidth={12}
					type='string' onChange={this.onTimeQueryChanged.bind(this)} value={options.timeQuery || ''} />
				</div>
			</div>
		);
	}
}
export default TimeSelector;
