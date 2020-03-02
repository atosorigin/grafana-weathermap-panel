import React from 'react';
import { SimpleOptions } from 'types';

import { Collapse } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';

// import { RegionClass } from 'Models/RegionClass';
import { TextObject } from 'Models/TextObjectClass';

import LinkURLClassPrincipale from './parametrageMetriquePrincipale';
import TextObjects from './textObjects';
import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';

interface IProps extends PanelEditorProps<SimpleOptions> {
	/** id coordinate */
	coordinateSpace: CoordinateSpaceClass;
	/** call function to save data in parent */
	callBackToParent: (
		followLink?: string,
		hoveringTooltipLink?: string,
		hoveringTooltipText?: string,
		textObj?: TextObject,
		id?: number) => void;
	/**
	 * 
	 */
	id?: number;
}

interface IState {
	/** open or close collapse main metric */
	collapseMainMetric: boolean;
	/** open or close text object */
	collapseTextObject: boolean;
}

/**
 * class ParametresGeneriques
 */
class ParametresGeneriques extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			collapseMainMetric: false,
			collapseTextObject: false,
		};
	}

	/** switch value collapseMainMetric when click collapse */
	public onToggleMainMetric = (isOpen: boolean) => {
		this.setState({
			collapseMainMetric: isOpen,
		});
	}

	/** switch value collapseTextObject when click collapse */
	public onToggleTextObject = (isOpen: boolean) => {
		this.setState({
			collapseTextObject: isOpen,
		});
	}

	/** close collapse when coordinateSpace object change */
	public componentDidUpdate = (prevProps: IProps) => {
		if (prevProps.coordinateSpace !== this.props.coordinateSpace) {
			this.setState({
				collapseMainMetric: false,
				collapseTextObject: false,
			});
		}
	}

	/** HTML */
	public render() {
		const l10n = require('Localization/en.json');

		//console.log(this.props.coordinateSpace)

		return (
			<div>
				<Collapse isOpen={this.state.collapseMainMetric}
					label={l10n.genericParameter.settingPrincipalMetric}
					onToggle={this.onToggleMainMetric} >
					<div>
						<LinkURLClassPrincipale
							coordinateSpace={this.props.coordinateSpace}
							callBackToParent={this.props.callBackToParent}
							id={this.props.id}
						/>
					</div>
				</Collapse>

				<Collapse isOpen={this.state.collapseTextObject}
					label='Text object'
					onToggle={this.onToggleTextObject}>
					<div>
						<TextObjects
							coordinateSpace={this.props.coordinateSpace}
							callBackToParent={this.props.callBackToParent}
							id={this.props.id}
						/>
					</div>
				</Collapse>
			</div >
		);
	}
}
export default ParametresGeneriques;
