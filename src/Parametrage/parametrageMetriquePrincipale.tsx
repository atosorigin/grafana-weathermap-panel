import React from 'react';
import InputTextField from 'Input/inputText';
import { ParametrageMetrique } from 'Models/parametrageMetrique';

interface IProps {
	/**
	 * old data
	 */
	parametrageMetrique: ParametrageMetrique;
	/**
	 * call parent for return value
	 */
	callBackFromParent: (parametrageMetrique: ParametrageMetrique) => void;
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
			followLink: this.props.parametrageMetrique.followLink,
			hoveringTooltipLink: this.props.parametrageMetrique.hoveringTooltipLink,
			hoveringTooltipText: this.props.parametrageMetrique.hoveringTooltipText,
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
		const { followLink, hoveringTooltipLink, hoveringTooltipText } =  this.state;

		this.props
		.callBackFromParent(new ParametrageMetrique(followLink,
		hoveringTooltipLink,
		hoveringTooltipText));
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

	/**
	 * result
	 */
	public render() {

		return (
			<div>
				<InputTextField
					label='Lien à suivre'
					name='followLink'
					placeholder='Lien'
					required={false}
					value={this.state.followLink}
					_handleChange={
						(event) => this.onChangeFollowLink(event.currentTarget.value)
					}
				/>

				<InputTextField
					label='Lien info bulle'
					name='linkTooltip'
					placeholder='Lien'
					required={false}
					value={this.state.hoveringTooltipLink}
					_handleChange={
						(event) => this.onChangeHoveringTooltipLink(event.currentTarget.value)
					}
				/>

				<InputTextField
					label='Texte dans l&#39;info bulle'
					name='textTooltip'
					placeholder='Texte'
					required={false}
					value={this.state.hoveringTooltipText}
					_handleChange={
						(event) => this.onChangeHoveringTooltipText(event.currentTarget.value)
					}
				/>

				<br />
				<br />
			</div>
		);
	}
}
export default ParametrageMetriquePrincipale;
