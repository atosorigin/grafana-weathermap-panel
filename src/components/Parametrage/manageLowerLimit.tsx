import React from 'react';

import { Switch, Collapse } from '@grafana/ui';

import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';
import { LowerLimitClass } from 'Models/LowerLimitClass';

import FixColor from 'components/Parametrage/fixColor';
import VariableColor from 'components/Parametrage/VariableColor';

interface Props {
  /** last data */
  coordinate: CoordinateSpaceClass;
  /** function parent to save data */
  callBack: (coordinate: CoordinateSpaceClass, id?: number) => void;
  /** function parent to save lower limit */
  lowerLimitCallBack: (lowerLimit: LowerLimitClass[], id?: number) => void;

  id?: number;
}

interface State {
  /** copy coordinate */
  coordinate: CoordinateSpaceClass;
  /** collapse */
  openLowerLimit: boolean;
}

/**
 * def class
 */
class ManageLowerLimit extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      coordinate: this.props.coordinate,
      openLowerLimit: false,
    };
  }

  /** update state with promise */
  setStateAsyncCoordinate = (state: {
    /** new value */
    coordinate: CoordinateSpaceClass;
  }) => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

  /** update state with promise */
  setStateAsyncOpenLowerLimit = (state: {
    /** new value */
    openLowerLimit: boolean;
  }) => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

  /**
   * save data in type
   */
  onSave = () => {
    console.log('lower');
    console.log(this.props.id);
    this.props.callBack(this.props.coordinate, this.props.id);
    this.props.lowerLimitCallBack(this.state.coordinate.lowerLimit, this.props.id);
  };

  /**
   * Edit fondIsChecked with switch
   */
  onSwitchFond = async () => {
    const newValue: CoordinateSpaceClass = this.state.coordinate;

    newValue.traceBack = !newValue.traceBack;
    await this.setStateAsyncCoordinate({ coordinate: newValue });
    this.onSave();
  };

  /**
   * Edit contourIsChecked with switch
   */
  onSwitchContour = async () => {
    const newValue: CoordinateSpaceClass = this.state.coordinate;

    newValue.traceBorder = !newValue.traceBorder;
    await this.setStateAsyncCoordinate({ coordinate: newValue });
    this.onSave();
  };

  /**
   * switch colorMode -> fixe / variable
   */
  onSwitchColorMode = async () => {
    const newValue: CoordinateSpaceClass = this.state.coordinate;

    newValue.colorMode = !newValue.colorMode;
    if (!this.state.coordinate.colorMode) {
      newValue.lowerLimit = [new LowerLimitClass(0, '', '', '', '', '')];
      await this.setStateAsyncCoordinate({ coordinate: newValue });
    } else {
      newValue.lowerLimit = [];
      await this.setStateAsyncCoordinate({ coordinate: newValue });
    }
    this.onSave();
  };

  /** open or close toggle lower limit */
  onToggleLowerLimit = (isOpen: boolean) => {
    this.setState({
      openLowerLimit: isOpen,
    });
  };

  /** update component when coordinate props change */
  componentDidUpdate = async (prevProps: Props) => {
    if (prevProps.coordinate !== this.state.coordinate) {
      await this.setStateAsyncCoordinate({
        coordinate: prevProps.coordinate,
      });
      await this.setStateAsyncOpenLowerLimit({
        openLowerLimit: false,
      });
    }
  };

  /**
   * result
   */
  render() {
    const l10n = require('Localization/en.json');
    // console.log(this.props.coordinate)
    // console.log(this.props.id)
    return (
      <div>
        <Collapse label={'Lower limit'} isOpen={this.state.openLowerLimit} onToggle={this.onToggleLowerLimit}>
          <Switch label={l10n.genericParameter.variableColor} checked={this.state.coordinate.colorMode} onChange={this.onSwitchColorMode} />
          <br />

          <Switch label={l10n.genericParameter.traceBackground} checked={this.state.coordinate.traceBack} onChange={this.onSwitchFond} />

          <Switch label={l10n.genericParameter.traceContour} checked={this.state.coordinate.traceBorder} onChange={this.onSwitchContour} />

          {this.state.coordinate.colorMode ? (
            <VariableColor
              traceBorder={this.state.coordinate.traceBorder}
              traceBack={this.state.coordinate.traceBack}
              lowerLimit={this.state.coordinate.lowerLimit}
              lowerLimitCallBack={this.props.lowerLimitCallBack}
              id={this.props.id}
            />
          ) : (
            <FixColor
              traceBorder={this.state.coordinate.traceBorder}
              traceBack={this.state.coordinate.traceBack}
              lowerLimit={this.state.coordinate.lowerLimit}
              lowerLimitCallBack={this.props.lowerLimitCallBack}
              id={this.props.id}
            />
          )}
        </Collapse>
      </div>
    );
  }
}
export default ManageLowerLimit;
