import React from 'react';
import { Collapse } from '@grafana/ui';
import ParametrageMetriquePrincipale from './parametrageMetriquePrincipale';
import { ParametrageMetrique } from 'Models/SettingMetricClass';
import { TextObject } from 'Models/TextObjectClass';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import TextObjects from './textObjects';
import { CoordinateSpaceExtendClass } from 'Models/CoordinateSpaceExtendClass';

interface IProps extends PanelEditorProps<SimpleOptions> {
	/** id coordinate */
	coordinateSpace: CoordinateSpaceExtendClass;
	/** call function to save data in parent */
	callBackToParent: (
		followLink?: string,
		hoveringTooltipLink?: string,
		hoveringTooltipText?: string,
		textObj?: TextObject) => void;
}

interface IState {
	parametrageMetrique: ParametrageMetrique;

	collapseMainMetric: boolean;
	collapseTextObject: boolean;
}

/**
 * class ParametresGeneriques
 */
class ParametresGeneriques extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			parametrageMetrique: this.props.options.parametrageMetrique,
			collapseMainMetric: false,
			collapseTextObject: false,
		};
	}

	/**
	 * promise for parametrageMetrique
	 */
	public setStateAsyncParametrageMetrique = (state: {
		/**
		 * edit parametrageMetrique
		 */
		parametrageMetrique: ParametrageMetrique,
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	public onToggleMainMetric = (isOpen: boolean) => {
		this.setState({
			collapseMainMetric: isOpen,
		});
	}

	public onToggleTextObject = (isOpen: boolean) => {
		this.setState({
			collapseTextObject: isOpen,
		});
	}

	/**
	 * HTML
	 */
	public render() {
		const l10n = require('Localization/en.json');

		return (
			<div>
				<Collapse isOpen={this.state.collapseMainMetric}
					label={l10n.genericParameter.settingPrincipalMetric}
					onToggle={this.onToggleMainMetric} >
					<div>
						<ParametrageMetriquePrincipale
							coordinateSpace={this.props.coordinateSpace}
							callBackToParent={this.props.callBackToParent}
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
						/>
					</div>
				</Collapse>
			</div >
		);
	}
}
export default ParametresGeneriques;
