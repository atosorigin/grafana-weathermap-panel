import React from 'react';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from 'types';

interface ILegend {
	hiddenLegend: boolean;
	x: number;
	y: number;
}

interface IProps extends PanelEditorProps<SimpleOptions>{
	// legend: ILegend;
	/** save data */
	callBack: (event: any) => void;
}

interface IState {
	finalHTML: JSX.Element;
	legend: ILegend;
}

/**
 * def
 */
class Legend extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			finalHTML: <div></div>,
			legend: this.props.options.legend,
		};
	}

	/** async state */
	public setStateAsyncFinalHTML = (state: {
		/** mew value */
		finalHTML: JSX.Element,
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/** generate legend */
	public renduState = async () => {
		const value: JSX.Element = <div style={{
			position: 'relative',
			left: this.state.legend.x,
			top: this.state.legend.y,
			maxWidth: '100%',
			zIndex: 'auto',
		}} hidden={this.state.legend.hiddenLegend}>
			<article
				style={{
					width: '250px',
					position: 'absolute',
					overflowY: 'scroll',
					margin: '0',
					height: '170px',
					backgroundColor: '#212124',
					color: '#d8d9da',
					border: '4px solid #299c46',
					borderRadius: '4px',
					scrollbarColor: '#09090b #212124',
					scrollbarWidth: 'thin',
					zIndex: 9999,
				}}
			>
				<div style={{ backgroundImage: 'linear-gradient(90deg, rgb(41, 42, 45), rgb(0, 0, 0))' }}>
					<h5 style={{ width: '100%', fontSize: '20px', display: 'inline-flex' }}>Legend
						<i style={{ marginLeft: '78%', }} className='fa fa-close' onClick={this.props.callBack}></i></h5>
					<p style={{ fontSize: '15px', marginLeft: '14px', fontWeight: 'bold' }}>Region</p>
					<p style={{ fontSize: '11px', marginLeft: '17px' }}>Label</p>
				</div>
				<ul >
					<li className='LegendMatt'>
						<span style={{
							padding: 4,
							margin: 9,
							width: '3.5rem',
							borderRadius: '39%',
							backgroundColor: 'red',
							border: '3px solid yellow',
							listStyleType: 'none',
							display: 'inline-block',
						}}></span>
						<span style={{
							display: 'inline-block', verticalAlign: 'middle',
							marginBottom: '1.25rem', fontSize: '9px',
						}}>Min-Max</span>
					</li>tooltip_SVGImage
					<li className='LegendMatt'>
						<span style={{
							padding: 4,
							margin: 9,
							width: '3.5rem',
							borderRadius: '39%',
							backgroundColor: 'green',
							border: '3px solid yellow',
							listStyleType: 'none',
							display: 'inline-block',
						}}></span>
						<span style={{
							display: 'inline-block', verticalAlign: 'middle',
							marginBottom: '1.25rem', fontSize: '9px',
						}}>Min-Max</span></li>
					<li className='LegendMatt'>
						<span style={{
							padding: 4,
							margin: 9,
							width: '3.5rem',
							borderRadius: '39%',
							backgroundColor: 'orange',
							border: '3px solid yellow',
							listStyleType: 'none',
							display: 'inline-block',
						}}></span>
						<span style={{
							display: 'inline-block', verticalAlign: 'middle',
							marginBottom: '1.25rem', fontSize: '9px',
						}}>Min-Max</span></li>
					<li className='LegendMatt'>
						<span style={{
							padding: 4,
							margin: 9,
							width: '3.5rem',
							borderRadius: '39%',
							backgroundColor: 'purple',
							border: '3px solid yellow',
							listStyleType: 'none',
							display: 'inline-block',
						}}></span>
						<span style={{
							display: 'inline-block', verticalAlign: 'middle',
							marginBottom: '1.25rem', fontSize: '9px',
						}}>Min-Max</span></li>
					<li className='LegendMatt'>
						<span style={{
							padding: 4,
							margin: 9,
							width: '3.5rem',
							borderRadius: '39%',
							backgroundColor: 'green',
							border: '3px solid yellow',
							listStyleType: 'none',
							display: 'inline-block',
						}}></span>
						<span style={{
							display: 'inline-block', verticalAlign: 'middle',
							marginBottom: '1.25rem', fontSize: '9px',
						}}>Min-Max</span></li>
					<li className='LegendMatt'>
						<span style={{
							padding: 4,
							margin: 9,
							width: '3.5rem',
							borderRadius: '39%',
							backgroundColor: 'purple',
							border: '3px solid yellow',
							listStyleType: 'none',
							display: 'inline-block',
						}}></span>
						<span style={{
							display: 'inline-block', verticalAlign: 'middle',
							marginBottom: '1.25rem', fontSize: '9px',
						}}>Min-Max</span></li>
					<li className='LegendMatt'>
						<span style={{
							padding: 4,
							margin: 9,
							width: '3.5rem',
							borderRadius: '39%',
							backgroundColor: 'orange',
							border: '3px solid yellow',
							listStyleType: 'none',
							display: 'inline-block',
						}}></span>
						<span style={{
							display: 'inline-block', verticalAlign: 'middle',
							marginBottom: '1.25rem', fontSize: '9px',
						}}>Min-Max</span></li>
					<li className='LegendMatt'>
						<span style={{
							padding: 4,
							margin: 9,
							width: '3.5rem',
							borderRadius: '39%',
							backgroundColor: 'red',
							border: '3px solid yellow',
							listStyleType: 'none',
							display: 'inline-block',
						}}></span>
						<span style={{
							display: 'inline-block', verticalAlign: 'middle',
							marginBottom: '1.25rem', fontSize: '9px',
						}}>Min-Max</span></li>
				</ul>
				<p style={{ fontSize: '11px', marginLeft: '17px' }}>Label</p>
				<ul >
					<li className='LegendMatt'>
						<span style={{
							padding: 4,
							margin: 9,
							width: '3.5rem',
							borderRadius: '39%',
							backgroundColor: 'red',
							border: '3px solid yellow',
							listStyleType: 'none',
							display: 'inline-block',
						}}></span>
						<span style={{
							display: 'inline-block', verticalAlign: 'middle',
							marginBottom: '1.25rem', fontSize: '9px',
						}}>No Variable</span></li>

				</ul>
				<p style={{ fontSize: '15px', marginLeft: '10px' }}>Point</p>
			</article>
		</div>;
		await this.setStateAsyncFinalHTML({
			finalHTML: value,
		});
	}

	public setStateLegendAsync = (state: {
		legend: ILegend,
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/** update when legend is edited */
	public componentWillUpdate = async (prevProps: IProps, prevState: IState) => {
		// console.log(this.props.legend);
		// if (this.props.legend.hiddenLegend !== prevProv.legend.hiddenLegend
		// 	|| this.props.legend.x !== prevProv.legend.x
		// 	|| this.props.legend.y !== prevProv.legend.y) {
		// 	console.log('am here skks');
		// 	this.renduState();
		// }
		if (prevState.legend.hiddenLegend !== this.props.options.legend.hiddenLegend
			|| prevState.legend.x !== this.props.options.legend.x
			|| prevState.legend.y !== this.props.options.legend.y) {
			console.log('am here ss');
			await this.setStateLegendAsync({legend: this.props.options.legend });
			this.renduState();
		}
	}

	/** fill state value when component is mounted */
	public componentDidMount = () => {
		this.renduState();
	}

	/**
	 * result
	 */
	public render() {
		return (
			<div>{this.state.finalHTML}</div>
		);
	}
}
export default Legend;

