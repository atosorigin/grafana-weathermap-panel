import React from 'react';

import { Switch, Collapse, FormLabel } from '@grafana/ui';

import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';
import { LowerLimitClass } from 'Models/LowerLimitClass';

import FixColor from 'components/Parametrage/fixColor';
import VariableColor from 'components/Parametrage/VariableColor';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from 'types';

interface Props extends PanelEditorProps<SimpleOptions> {
  /** last data */
  coordinate: CoordinateSpaceClass;
  /** function parent to save data */
  callBack: (coordinate: CoordinateSpaceClass, id?: number) => void;
  /** function parent to save lower limit */
  lowerLimitCallBack: (lowerLimit: LowerLimitClass[], id?: number) => void;

  isLink: boolean;
}

interface State {
  /** copy coordinate */
  coordinate: CoordinateSpaceClass;
  /** collapse */
  openLowerLimit: boolean;
  lowerLimitFix: LowerLimitClass;
  lowerLimitVariable: LowerLimitClass[];
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
      lowerLimitFix: new LowerLimitClass(0, '', '', '', '', ''),
      lowerLimitVariable: [],
    };
  }

  /** update state with promise */
  setStateAsyncCoordinate = (state: {
    /** new value */
    coordinate: CoordinateSpaceClass;
  }) => {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  };

  /** update state with promise */
  setStateAsyncOpenLowerLimit = (state: {
    /** new value */
    openLowerLimit: boolean;
  }) => {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  };

  /**
   * save data in type
   */
  onSave = () => {
    this.props.callBack(this.props.coordinate);
    this.props.lowerLimitCallBack(this.state.coordinate.lowerLimit);
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
      if (this.state.coordinate.lowerLimit && this.state.coordinate.lowerLimit.length > 0) {
        this.setState({
          lowerLimitVariable: this.state.coordinate.lowerLimit,
        });
      }
      // let defaultSizeBorder = '';
      // if (this.props.isLink) {
      //   defaultSizeBorder = '10';
      // }
      //newValue.lowerLimit = new LowerLimitClass(0, '', '', '', '', defaultSizeBorder);
      let lowerLimitFix = this.state.lowerLimitFix;
      //lowerLimitFix.sizeBorder = defaultSizeBorder;
      newValue.lowerLimit[0] = lowerLimitFix;
      await this.setStateAsyncCoordinate({ coordinate: newValue });
    } else {
      if (this.state.coordinate && this.state.coordinate.lowerLimit && this.state.coordinate.lowerLimit.length > 0) {
        this.setState({
          lowerLimitFix: this.state.coordinate.lowerLimit[0],
        });
      }
      newValue.lowerLimit = this.state.lowerLimitVariable;
      await this.setStateAsyncCoordinate({ coordinate: newValue });
    }
    this.onSave();
  };

  // updateLowerLimitDefault = (value: LowerLimitClass) => {
  //   this.setState({
  //     lowerLimitFix: value,
  //   })
  // }

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
    return (
      <div>
        <Collapse label={'Lower limit'} isOpen={this.state.openLowerLimit} onToggle={this.onToggleLowerLimit}>
          <div style={{ display: 'flex' }}>
            <FormLabel width={15}>{l10n.genericParameter.variableColor}</FormLabel>
            <Switch label={''} checked={this.state.coordinate.colorMode} onChange={this.onSwitchColorMode} />
          </div>
          <br />
          {/* {!this.props.isLink ? (
            <div>
              <div style={{ display: 'flex' }}>
                <FormLabel width={15}>{l10n.genericParameter.traceBackground}</FormLabel>
                <Switch label={''} checked={this.state.coordinate.traceBack} onChange={this.onSwitchFond} />
              </div>
              <div style={{ display: 'flex' }}>
                <FormLabel width={15}>{l10n.genericParameter.traceContour}</FormLabel>
                <Switch label={''} checked={this.state.coordinate.traceBorder} onChange={this.onSwitchContour} />
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex' }}>
              <FormLabel width={15}>{'Color/Size'}</FormLabel>
              <Switch label={''} checked={this.state.coordinate.traceBack} onChange={this.onSwitchFond} />
            </div>
          )} 
          */}
          <div>
            <div style={{ display: 'flex' }}>
              <FormLabel width={15}>{l10n.genericParameter.traceBackground}</FormLabel>
              <Switch label={''} checked={this.state.coordinate.traceBack} onChange={this.onSwitchFond} />
            </div>
            <div style={{ display: 'flex' }}>
              <FormLabel width={15}>{l10n.genericParameter.traceContour}</FormLabel>
              <Switch label={''} checked={this.state.coordinate.traceBorder} onChange={this.onSwitchContour} />
            </div>
          </div>

          {this.state.coordinate.colorMode ? (
            <VariableColor
              traceBorder={this.state.coordinate.traceBorder}
              traceBack={this.state.coordinate.traceBack}
              lowerLimit={this.state.coordinate.lowerLimit}
              lowerLimitCallBack={this.props.lowerLimitCallBack}
              isLink={this.props.isLink}
            />
          ) : (
            <FixColor
              options={this.props.options}
              onOptionsChange={this.props.onOptionsChange}
              data={this.props.data}
              traceBorder={this.state.coordinate.traceBorder}
              traceBack={this.state.coordinate.traceBack}
              lowerLimit={this.state.coordinate.lowerLimit}
              //lowerLimitDefault={this.updateLowerLimitDefault}
              lowerLimitCallBack={this.props.lowerLimitCallBack}
              isLink={this.props.isLink}
            />
          )}
        </Collapse>
      </div>
    );
  }
}
export default ManageLowerLimit;
