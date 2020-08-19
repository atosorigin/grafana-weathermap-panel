import React from 'react';

import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';
import { TextObject } from 'Models/TextObjectClass';

import InputTextField from 'Functions/Input/inputText';

interface Props {
  /** id for coordinate space */
  coordinateSpace: CoordinateSpaceClass;
  /** save data to parent */
  callBackToParent: (followLink: string, hoveringTooltipLink: string, hoveringTooltipText: string, textObj?: TextObject) => void;
}

interface State {
  /** link */
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
class ManageLink extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      followLink: this.props.coordinateSpace.linkURL.followLink,
      hoveringTooltipLink: this.props.coordinateSpace.linkURL.hoveringTooltipLink,
      hoveringTooltipText: this.props.coordinateSpace.linkURL.hoveringTooltipText,
    };
  }

  /**
   * edit followLink whith Promise
   */
  setStateAsyncFollowLink = (state: {
    /**
     * edit followLink
     */
    followLink: string;
  }) => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

  /**
   * edit link for tooltip whith Promise
   */
  setStateAsyncHoveringTooltipLink = (state: {
    /**
     * edit hoveringTooltipLink
     */
    hoveringTooltipLink: string;
  }) => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

  /**
   * edit text for tooltip whith Promise
   */
  setStateAsyncHoveringTooltipText = (state: {
    /**
     * edit hoveringTooltipText
     */
    hoveringTooltipText: string;
  }) => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

  /**
   * save data
   */
  callBack = () => {
    this.props.callBackToParent(this.state.followLink, this.state.hoveringTooltipLink, this.state.hoveringTooltipText, undefined);
  };

  /**
   * call function when follow link change
   */
  onChangeFollowLink = async (value: string) => {
    await this.setStateAsyncFollowLink({
      followLink: value,
    });
    this.callBack();
  };

  /**
   * call function when follow link change
   */
  onChangeHoveringTooltipLink = async (value: string) => {
    await this.setStateAsyncHoveringTooltipLink({
      hoveringTooltipLink: value,
    });
    this.callBack();
  };

  /**
   * call function when follow link change
   */
  onChangeHoveringTooltipText = async (value: string) => {
    await this.setStateAsyncHoveringTooltipText({
      hoveringTooltipText: value,
    });
    this.callBack();
  };

  componentDidUpdate(prevProps: Props) {
    if (prevProps.coordinateSpace.id !== this.props.coordinateSpace.id) {
      this.setState({
        followLink: prevProps.coordinateSpace.linkURL.followLink,
        hoveringTooltipLink: prevProps.coordinateSpace.linkURL.hoveringTooltipLink,
        hoveringTooltipText: prevProps.coordinateSpace.linkURL.hoveringTooltipText,
      });
    }
  }

  /**
   * result
   */
  render() {
    const l10n = require('Localization/en.json');

    return (
      <div>
        <InputTextField
          label={l10n.metricPrincipalSetting.followLink}
          name="followLink"
          placeholder={l10n.metricPrincipalSetting.link}
          required={false}
          value={this.state.followLink}
          _handleChange={(event: { currentTarget: HTMLInputElement }) => this.onChangeFollowLink(event.currentTarget.value)}
        />

        <InputTextField
          label={l10n.metricPrincipalSetting.linkTooltip}
          name="linkTooltip"
          placeholder={l10n.metricPrincipalSetting.link}
          required={false}
          value={this.state.hoveringTooltipLink}
          _handleChange={(event: { currentTarget: HTMLInputElement }) => this.onChangeHoveringTooltipLink(event.currentTarget.value)}
        />

        <InputTextField
          label={l10n.metricPrincipalSetting.textInTooltip}
          name="textTooltip"
          placeholder={l10n.metricPrincipalSetting.text}
          required={false}
          value={this.state.hoveringTooltipText}
          _handleChange={(event: { currentTarget: HTMLInputElement }) => this.onChangeHoveringTooltipText(event.currentTarget.value)}
        />
        <br />
        <br />
      </div>
    );
  }
}
export default ManageLink;
