import React from 'react';

import { Switch, Collapse } from '@grafana/ui';

import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';
import { LowerLimitClass } from 'Models/LowerLimitClass';

import FixColor from 'components/Parametrage/fixColor';
import VariableColor from 'components/Parametrage/VariableColor';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';

interface Props extends PanelEditorProps<SimpleOptions> {
  /** last data */
  coordinate: CoordinateSpaceClass;
  /** function parent to save data */
  callBack: (coordinate: CoordinateSpaceClass, id?: number) => void;
  /** function parent to save lower limit */
  lowerLimitCallBack: (lowerLimit: LowerLimitClass[], id?: number) => void;
  /** function parent to save lower limit B of orientedLink if is bidirectionnal */
  lowerLimitCallBackB?: (lowerLimit: LowerLimitClass[], id?: number) => void;

  isLink?: boolean;

  orientedLink?: OrientedLinkClass;

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
    // console.log('lower');
    // console.log(this.props.id);
    this.props.callBack(this.props.coordinate, this.props.id);
    this.props.lowerLimitCallBack(this.state.coordinate.lowerLimit, this.props.id);
    if (this.props.lowerLimitCallBackB) {
      this.props.lowerLimitCallBackB(this.props.options.arrayOrientedLinks[this.props.id || 0].lowerLimitB, this.props.id);
    }
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
   * Edit contourIsChecked with switch for linkB if bidirectionnal
   */
  onSwitchContourB = async () => {
    const newValue: OrientedLinkClass = this.props.options.arrayOrientedLinks[this.props.id || 0];
    newValue.traceBorderB = !newValue.traceBorderB;
    const newArrayOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
    newArrayOrientedLink[this.props.id || 0] = newValue;
    this.props.onOptionsChange({
      ...this.props.options,
      arrayOrientedLinks: newArrayOrientedLink,
    });
    //await this.setStateAsyncCoordinate({ coordinate: newValue });
    //this.onSave();
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
          {!this.props.isLink ? (
            <div>
              <Switch label={l10n.genericParameter.traceBackground} checked={this.state.coordinate.traceBack} onChange={this.onSwitchFond} />
              <Switch label={l10n.genericParameter.traceContour} checked={this.state.coordinate.traceBorder} onChange={this.onSwitchContour} />
            </div>
          ) : this.props.options.arrayOrientedLinks[this.props.id || 0].orientationLink.value === 'double' ? (
            <div>
              <Switch label={'Color Link A'} checked={this.state.coordinate.traceBorder} onChange={this.onSwitchContour} />
              <Switch
                label={'Color Link B'}
                checked={this.props.options.arrayOrientedLinks[this.props.id || 0].traceBorderB}
                onChange={this.onSwitchContourB}
              />
            </div>
          ) : (
            <Switch label={'Color'} checked={this.state.coordinate.traceBorder} onChange={this.onSwitchContour} />
          )}

          {this.state.coordinate.colorMode ? (
            <VariableColor
              traceBorder={this.state.coordinate.traceBorder}
              traceBack={this.state.coordinate.traceBack}
              lowerLimit={this.state.coordinate.lowerLimit}
              lowerLimitCallBack={this.props.lowerLimitCallBack}
              id={this.props.id}
            />
          ) : this.props.isLink && this.props.options.arrayOrientedLinks[this.props.id || 0].orientationLink.value === 'double' ? (
            <FixColor
              options={this.props.options}
              onOptionsChange={this.props.onOptionsChange}
              data={this.props.data}
              traceBorder={this.state.coordinate.traceBorder}
              traceBorderB={this.props.options.arrayOrientedLinks[this.props.id || 0].traceBorderB}
              traceBack={this.state.coordinate.traceBack}
              lowerLimit={this.state.coordinate.lowerLimit}
              lowerLimitCallBack={this.props.lowerLimitCallBack}
              lowerLimitCallBackB={this.props.lowerLimitCallBackB}
              id={this.props.id}
              isLink={this.props.isLink || false}
              orientedLink={this.props.options.arrayOrientedLinks[this.props.id || 0]}
            />
          ) : (
            <FixColor
              options={this.props.options}
              onOptionsChange={this.props.onOptionsChange}
              data={this.props.data}
              traceBorder={this.state.coordinate.traceBorder}
              traceBack={this.state.coordinate.traceBack}
              lowerLimit={this.state.coordinate.lowerLimit}
              lowerLimitCallBack={this.props.lowerLimitCallBack}
              id={this.props.id}
              isLink={this.props.isLink || false}
            />
          )}
        </Collapse>
      </div>
    );
  }
}
export default ManageLowerLimit;
