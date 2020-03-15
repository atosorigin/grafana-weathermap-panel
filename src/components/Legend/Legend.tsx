import React, { } from 'react';

import { SimpleOptions } from './../../types';
import { PanelEditorProps } from '@grafana/data';

import { LowerLimitClass } from './../../Models/LowerLimitClass';
import { LegendItem, GraphLegend, LegendDisplayMode } from '@grafana/ui';

interface IProps extends PanelEditorProps<SimpleOptions> {

}




interface IState {
	seuil: LowerLimitClass[],

}




export class LegendPanel extends React.Component<IProps, IState>{
	constructor(props: IProps) {
		super(props);
		this.state = {
			seuil: [],
		}
	}



	componentDidMount = () => {
		const s: LowerLimitClass[] = [
			new LowerLimitClass(0, '0', '10', 'pink', 'green', '6px'),
			new LowerLimitClass(1, '10', '30', 'blue', 'yellow', '6px'),
			new LowerLimitClass(2, '30', '60', 'purple', 'black', '6px'),
			new LowerLimitClass(3, '60', '100', 'red', 'orange', '6px')]
		this.setState({
			seuil: s,
		});
	}



	public render() {
		// {
		//      label: 'test', color: 'red', isVisible: true, yAxis: 0,
		// },
		// {
		//          label: 'test2', color: 'green', isVisible: true, yAxis: 0 
		//     },

		const myItems: LegendItem[] = [];
		for (const lines of this.state.seuil) {
			myItems.push({ label: 'label: ' + lines.id + ': ' + lines.lowerLimitMin + ' - ' + lines.lowerLimitMax,
			color: lines.backColor, isVisible: true, yAxis: 0, })
		}



		{


			return (
				<div style={{
					backgroundColor: '#BD8720',
					width: '-moz-max-content',
					position: 'relative',
					color: 'black',
					marginLeft: 'auto',
					display: 'contents',











				}}>
					<p style={{ fontSize: '15px', backgroundColor: '#299c46', color: 'white' }}>Traffic Load</p>
					<div style={{color: 'white'}}>
					<GraphLegend  items={myItems} displayMode={LegendDisplayMode.Table} placement='under' />
					</div>
				</div>
			);
		}
	}
}




