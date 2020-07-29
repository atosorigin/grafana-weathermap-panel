import React from 'react';

import { FormField } from '@grafana/ui';

import { LowerLimitClass } from 'Models/LowerLimitClass';

import InputSeriesColorPicker from 'Functions/Input/inputSeriesColorPicker';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from 'types';

interface Props extends PanelEditorProps<SimpleOptions> {
  /** trace border? */
  traceBorder: boolean;
  /** trace background? */
  traceBack: boolean;
  /** last array lowerLimit */
  lowerLimit: LowerLimitClass[];
  /** function parent to save lower limit */
  lowerLimitCallBack: (lowerLimit: LowerLimitClass[], id?: number) => void;

  isLink: boolean;
}

interface State {
  /** couleur du fond */
  lowerLimit: LowerLimitClass[];
  /** result html */
  htmlResult: JSX.Element;
}

/**
 * edit color in fix mode
 */
class FixColor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      lowerLimit: this.props.lowerLimit,
      htmlResult: <div></div>,
    };
  }

  /**
   * edit background color with Promise
   */
  setStateAsyncSeuil = (state: {
    /**
     * edit colorFond
     */
    lowerLimit: LowerLimitClass[];
  }) => {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  };

  /**
   * save data
   */
  callBack = (): void => {
    this.props.lowerLimitCallBack(this.state.lowerLimit);
  };

  /**
   * change background color
   */
  onChangeColorFond = async (key: number, color: string) => {
    const newSeuil: LowerLimitClass[] = this.state.lowerLimit;
    newSeuil[0].backColor = color;
    await this.setStateAsyncSeuil({
      lowerLimit: newSeuil,
    });
    this.callBack();
    this.initComponent();
  };

  /**
   * change contour color
   */
  onChangeColorContour = async (key: number, color: string) => {
    const newSeuil: LowerLimitClass[] = this.state.lowerLimit;
    newSeuil[0].borderColor = color;
    await this.setStateAsyncSeuil({
      lowerLimit: newSeuil,
    });
    this.callBack();
    this.initComponent();
  };

  /**
   * change size color
   */
  onChangeSzContour = async (value: string) => {
    const newSeuil: LowerLimitClass[] = this.state.lowerLimit;
    newSeuil[0].sizeBorder = value;
    await this.setStateAsyncSeuil({
      lowerLimit: newSeuil,
    });
    this.callBack();
    this.initComponent();
  };

  /**
   * add button color
   */
  addButtonColor = (): JSX.Element[] => {
    const key = '0';
    const couleur: JSX.Element[] = [];
    const l10n = require('Localization/en.json');
    let textInputColor = '';
    let labelSize = '';
    let placeHolderSize = '';

    if (this.props.isLink) {
      textInputColor = 'Edit color';
      labelSize = 'Edit size';
      placeHolderSize = 'Edit size';
    } else {
      textInputColor = l10n.colorVariable.switchOutlineColor;
      labelSize = l10n.colorVariable.thicknessOutline;
      placeHolderSize = l10n.colorVariable.thicknessOutline;
    }

    if (this.props.isLink && this.props.traceBorder) {
      const keyContourDiv = key + 'ContourDiv';
      couleur.push(
        <div key={keyContourDiv}>
          <InputSeriesColorPicker
            color={this.state.lowerLimit[0].borderColor}
            keyInt={0}
            text={textInputColor}
            _onChange={this.onChangeColorContour}
          />

          <FormField
            labelWidth={15}
            label={labelSize}
            name="epaisseurContour"
            placeholder={placeHolderSize}
            value={this.state.lowerLimit[0].sizeBorder}
            onChange={(event) => this.onChangeSzContour(event.currentTarget.value)}
          />
        </div>
      );
    } else {
      if (this.props.traceBack) {
        const keyFondColorPicker = key + 'FondcolorPicker';
        couleur.push(
          <InputSeriesColorPicker
            key={keyFondColorPicker}
            color={this.state.lowerLimit[0].backColor}
            keyInt={0}
            text={l10n.colorVariable.switchBackgroundColor}
            _onChange={this.onChangeColorFond}
          />
        );
      }
      if (this.props.traceBorder) {
        const keyContourDiv = key + 'ContourDiv';
        couleur.push(
          <div key={keyContourDiv}>
            <InputSeriesColorPicker
              color={this.state.lowerLimit[0].borderColor}
              keyInt={0}
              text={textInputColor}
              _onChange={this.onChangeColorContour}
            />

            <FormField
              labelWidth={15}
              label={labelSize}
              name="epaisseurContour"
              placeholder={placeHolderSize}
              value={this.state.lowerLimit[0].sizeBorder}
              onChange={(event) => this.onChangeSzContour(event.currentTarget.value)}
            />
          </div>
        );
      }
    }
    return couleur;
  };

  /** create form */
  initComponent = () => {
    this.setState({
      htmlResult: <div>{this.addButtonColor()}</div>,
    });
  };

  /** init component when component is mount */
  componentDidMount = async () => {
    if (this.state.lowerLimit.length === 0) {
      let defaultSizeBorder = '1';
      if (this.props.isLink) {
        defaultSizeBorder = '10';
      }
      await this.setStateAsyncSeuil({
        lowerLimit: [new LowerLimitClass(0, '', '', '', '', defaultSizeBorder)],
      });
    }
    this.initComponent();
  };

  /** init component when  update props */
  componentDidUpdate = (prevProps: Props) => {
    if (prevProps.traceBorder !== this.props.traceBorder || prevProps.traceBack !== this.props.traceBack) {
      this.initComponent();
    }
  };

  /**
   * result
   */
  render() {
    return <div>{this.state.htmlResult}</div>;
  }
}
export default FixColor;
