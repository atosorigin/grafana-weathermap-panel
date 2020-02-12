import React from 'react';
import { SimpleOptions, Target } from '../types';
import { PanelEditorProps, SelectableValue } from '@grafana/data';
import { FormField, Button } from '@grafana/ui';
import FetchButton from './fetchButton';

interface IProps extends PanelEditorProps<SimpleOptions> { }

/**
 * def
 */
class DashboardData extends React.Component<IProps> {
	constructor(props: IProps) {
		super(props);
	}

	/**
	 * TODO
	 */
	targetsScrapper = () => {
		const scrapper = new FetchButton(this.props);
		const jsonDashboard = this.props.options.Json;
		jsonDashboard.panels.forEach((panel: any) => {
			panel.targets.forEach((target: any) => {
				this.props.options.promGlobalTargets.push(target);
			});
		});
		let dateStamp = Date.now().toString();
		dateStamp = dateStamp.substring(0, dateStamp.length - 3);
		this.props.options.promTargets.map((target: Target) => {
			const tmp: string = this.props.options.promUrl + 'query?query=' + target.expr + '&time=' + dateStamp;
			this.props.options.queryPromGlobal.push(tmp);
		});
		console.table(this.props.options.queryPromGlobal);
		scrapper.fetchGlobalQuerry();
	}

	/**
	* TODO
	*/
	onContentChanged = ({ target }: any) => {
		this.props.onOptionsChange({ ...this.props.options, contentJson: target.value });
	}

	/**
	* TODO
	*/
	loadGlobal = (onClick: { currentTarget: HTMLButtonElement }) => {
		this.props.options.panelList = [];
		const objectJSON = JSON.parse(this.props.options.contentJson);
		this.targetsScrapper();
		const newList: Array<SelectableValue<string>> = [];
		objectJSON.panels.forEach((panel: any) => {
			newList.push({ value: panel.id.toString(), label: panel.title });
		});
		const newListStep: Array<SelectableValue<string>> = [];
		objectJSON.timepicker.refresh_intervals.map((interval: string) => {
			newListStep.push({ value: interval, label: interval });
		});
		this.props.onOptionsChange({
			...this.props.options, Id: objectJSON.id,
			uid: objectJSON.uid, title: objectJSON.title,
			style: objectJSON.style, editable: objectJSON.editable, version: objectJSON.version,
			shemaVersion: objectJSON.shemaVersion, refresh: newListStep[0],
			timezone: objectJSON.timezone, panelList: newList, actualPanel: newList[0],
			Json: objectJSON, listStep: newListStep,
		});
	}

	/**
	* TODO
	*/
	onUidChanged = ({ target }: any) => {
		this.props.onOptionsChange({ ...this.props.options, uid: target.value });
	}

	/**
	* TODO
	*/
	onTitleChanged = ({ target }: any) => {
		this.props.onOptionsChange({ ...this.props.options, title: target.value });
	}

	/**
	* TODO
	*/
	onStyleChanged = ({ target }: any) => {
		this.props.onOptionsChange({ ...this.props.options, style: target.value });
	}

	/**
	* TODO
	*/
	onEditableChanged = ({ target }: any) => {
		this.props.onOptionsChange({ ...this.props.options, editable: target.value });
	}

	/**
	* TODO
	*/
	onVersionChanged = ({ target }: any) => {
		this.props.onOptionsChange({ ...this.props.options, Id: target.value });
	}

	/**
	* TODO
	*/
	onShemaVersionChanged = ({ target }: any) => {
		this.props.onOptionsChange({ ...this.props.options, shemaVersion: target.value });
	}


	/**
	 * result
	 */
	public render() {

		const { options } = this.props;
		return (
			<div className='section gf-form-group'>
				<h5 className='section-heading'>JSON about Dashboard</h5>
				<FormField label='JSON' labelWidth={8} inputWidth={20}
					type='text' onChange={this.onContentChanged} value={options.contentJson || ''} />
				<Button key={'Loader'} onClick={this.loadGlobal}>Load JSON</Button>
				<FormField label='uid' labelWidth={8} inputWidth={7}
					type='string' onChange={this.onUidChanged} value={options.uid || ''} />
				<FormField label='title' labelWidth={8} inputWidth={10}
					type='string' onChange={this.onTitleChanged} value={options.title || ''} />
				<FormField label='style' labelWidth={8} inputWidth={7}
					type='string' onChange={this.onStyleChanged} value={options.style || ''} />
				<FormField label='editable' labelWidth={8} inputWidth={7}
					type='string' onChange={this.onEditableChanged} value={options.editable || ''} />
				<FormField label='version' labelWidth={8} inputWidth={7}
					type='number' onChange={this.onVersionChanged} value={options.version || ''} />
				<FormField label='shemaversion' labelWidth={8} inputWidth={7}
					type='int' onChange={this.onShemaVersionChanged} value={options.shemaVersion || ''} />
			</div>
		);
	}
}
export default DashboardData;

