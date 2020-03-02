import React from 'react';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions, ITarget } from '../types';
import { Button } from '@grafana/ui';
import { reqMetricRegion } from 'Functions/fetchMetrics';
//import { reqUpdateMetrics, reqMetricAuxRegion} from "../Functions/fetchMetrics";
// import { RegionClass } from 'Models/RegionClass';

interface IProps extends PanelEditorProps<SimpleOptions> { }

/**
 * TODO
 */
class FetchButton extends React.Component<IProps> {
	constructor(props: IProps) {
		super(props);
	}

	/**
	 * Create and push the range query url
	 */
	public makeQueryRange = () => {
		this.props.options.queryPromRange = [];
		let dateStampStart = Date.parse(this.props.options.timeRange.from).toString();
		dateStampStart = dateStampStart.substring(0, dateStampStart.length - 3);
		let dateStampEnd = Date.parse(this.props.options.timeRange.to).toString();
		dateStampEnd = dateStampEnd.substring(0, dateStampEnd.length - 3);
		this.props.options.promTargets.map((target: ITarget) => {
			const tmp: string = this.props.options.promUrl + 'query_range?query=' + target.expr + '&start=' + dateStampStart
				+ '&end=' + dateStampEnd + '&step=' + this.props.options.refresh.label;
			this.props.options.queryPromRange.push(tmp);
		});
		// Console.table(this.props.options.queryPromRange);
	}

	/**
	 * Create and push the query url
	 */
	public makeQuery = () => {
		this.props.options.queryProm = [];
		let dateStamp = Date.parse(this.props.options.timeQuery).toString();
		dateStamp = dateStamp.substring(0, dateStamp.length - 3);
		this.props.options.promTargets.map((target: ITarget) => {
			const tmp: string = this.props.options.promUrl + 'query?query=' + target.expr + '&time=' + dateStamp;
			this.props.options.queryProm.push(tmp);
		});
		// Console.table(this.props.options.queryProm);
	}

	/**
	 * Send the range query and stock the return
	 */
	public fetchQuerryRange = () => {
		this.makeQueryRange();
		this.props.options.jsonQueryReturn = [];
		this.props.options.queryPromRange.forEach((url) => {
			fetch(url)
				.then((response) => response.json())
				.then((result) => {
					this.props.options.jsonQueryReturn.push(result);
				})
				.catch((error) => {
					// Console.log(error)
				});
		});
		this.props.onOptionsChange({ ...this.props.options, promTargets: this.props.options.promTargets });
		console.log(this.props.options.jsonQueryReturn);
	}

	/**
	 * Send the query and stock the return
	 */
	public fetchQuerry = () => {
		this.makeQuery();
		this.props.options.jsonQueryReturn = [];
		this.props.options.queryProm.forEach((url) => {
			fetch(url)
				.then((response) => response.json())
				.then((result) => {
					this.props.options.jsonQueryReturn.push(result);
				})
				.catch((error) => {
					console.log(error);
				});
		});
		this.props.onOptionsChange({ ...this.props.options, promTargets: this.props.options.promTargets });
		console.log(this.props.options.jsonQueryReturn);
	}

	/**
	 * TODO work in progress
	 */
	public fetchGlobalQuerry = () => {
		this.props.options.jsonGlobalQueryReturn = [];
		this.props.options.queryProm.forEach((url) => {
			fetch(url)
				.then((response) => response.json())
				.then((result) => {
					console.log(result);
					this.props.options.jsonGlobalQueryReturn.push(result);
				})
				.catch((error) => {
					console.log(error);
				});
		});
	}

	/**
	 * Debug
	 */
	public printJSON = () => {
		// take expr
		for (const target of this.props.options.arrayCoordinateSpace){
			target.mainMetric.expr = "rate(node_cpu_seconds_total{mode=\"system\"}[1m])";
		}
		console.log(this.props.options.arrayCoordinateSpace[0].mainMetric.returnQuery);
		reqMetricRegion(this.props.options.arrayCoordinateSpace[0], this.props);
		console.log(this.props.options.arrayCoordinateSpace[0].mainMetric.returnQuery);
	}

	/**
	 * Delet the whole targets selected
	 */
	public deleteTargets = () => {
		this.props.options.promTargets = [];
		this.props.onOptionsChange({ ...this.props.options, promTargets: this.props.options.promTargets });
	}

	/**
	 * result
	 */
	public render() {
		return (
			<div className='section gf-form-groug'>
				{/* <Button key='ButtonPrint' onClick={this.test}>test fetchMetric</Button> */}
				<Button key='ButtonFetchRange' onClick={this.fetchQuerryRange}>fetch range</Button>
				<Button key='ButtonFetchInstant' onClick={this.fetchQuerry}>fetch instant</Button>
				<Button key='ButtonDelTargets' variant='danger' onClick={this.deleteTargets}>delete targets</Button>
			</div>
		);
	}
}
export default FetchButton;
