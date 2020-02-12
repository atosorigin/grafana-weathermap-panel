import React from 'react';
import InputTextField from 'Functions/Input/inputText';
import { CoordinateSpaceExtendClass } from 'Models/CoordinateSpaceExtendClass';

interface IProps {
	/** id for coordinate space */
	coordinateSpace: CoordinateSpaceExtendClass;
	callBackToParent: (
		followLink: string,
		hoveringTooltipLink: string,
		hoveringTooltipText: string) => void;
}

interface IState {
	/**react
	 */
	followLink: string;
	/**
	 * link for tooltip
	 */
	hoveringTooltipLink: string;
	/**
	 * text for tooltip
	 */
	hoveringTooltipText: string;
}

/**
 * def
 */
class ParametrageMetriquePrincipale extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			followLink: this.props.coordinateSpace.parametrageMetric.followLink,
			hoveringTooltipLink: this.props.coordinateSpace.parametrageMetric.hoveringTooltipLink,
			hoveringTooltipText: this.props.coordinateSpace.parametrageMetric.hoveringTooltipText,
		};
	}

	/**
	 * edit followLink whith Promise
	 */
	public setStateAsyncFollowLink = (state: {
		/**
		 * edit followLink
		 */
		followLink: string,
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/**
	 * edit link for tooltip whith Promise
	 */
	public setStateAsyncHoveringTooltipLink = (state: {
		/**
		 * edit hoveringTooltipLink
		 */
		hoveringTooltipLink: string,
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/**
	 * edit text for tooltip whith Promise
	 */
	public setStateAsyncHoveringTooltipText = (state: {
		/**
		 * edit hoveringTooltipText
		 */
		hoveringTooltipText: string,
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/**
	 * save data
	 */
	public callBack = () => {
		this.props.callBackToParent(this.state.followLink, this.state.hoveringTooltipLink,
			this.state.hoveringTooltipText);
	}

	/**
	 * call function when follow link change
	 */
	public onChangeFollowLink = async (value: string) => {
		await this.setStateAsyncFollowLink({
			followLink: value,
		});
		this.callBack();
	}

	/**
	 * call function when follow link change
	 */
	public onChangeHoveringTooltipLink = async (value: string) => {
		await this.setStateAsyncHoveringTooltipLink({
			hoveringTooltipLink: value,
		});
		this.callBack();
	}

	/**
	 * call function when follow link change
	 */
	public onChangeHoveringTooltipText = async (value: string) => {
		await this.setStateAsyncHoveringTooltipText({
			hoveringTooltipText: value,
		});
		this.callBack();
	}

	public componentDidUpdate(prevProps: IProps) {
		if (prevProps.coordinateSpace !== this.props.coordinateSpace) {
			this.setState({
				followLink: prevProps.coordinateSpace.parametrageMetric.followLink,
				hoveringTooltipLink: prevProps.coordinateSpace.parametrageMetric.hoveringTooltipLink,
				hoveringTooltipText: prevProps.coordinateSpace.parametrageMetric.hoveringTooltipText,
			});
		}
	}

	/**
	 * result
	 */
	public render() {
		const l10n = require('Localization/en.json');

		return (
			<div>
				<InputTextField
					label={l10n.metricPrincipalSetting.followLink}
					name='followLink'
					placeholder={l10n.metricPrincipalSetting.link}
					required={false}
					value={this.state.followLink}
					_handleChange={
						(event: {
							currentTarget: HTMLInputElement
						}) => this.onChangeFollowLink(event.currentTarget.value)
					}
				/>

				<InputTextField
					label={l10n.metricPrincipalSetting.linkTooltip}
					name='linkTooltip'
					placeholder={l10n.metricPrincipalSetting.link}
					required={false}
					value={this.state.hoveringTooltipLink}
					_handleChange={
						(event: {
							currentTarget: HTMLInputElement
						}) => this.onChangeHoveringTooltipLink(event.currentTarget.value)
					}
				/>

				<InputTextField
					label={l10n.metricPrincipalSetting.textInTooltip}
					name='textTooltip'
					placeholder={l10n.metricPrincipalSetting.text}
					required={false}
					value={this.state.hoveringTooltipText}
					_handleChange={
						(event: {
							currentTarget: HTMLInputElement
						}) => this.onChangeHoveringTooltipText(event.currentTarget.value)
					}
				/>

				<br />
				<br />
			</div>
		);
	}
}
export default ParametrageMetriquePrincipale;
