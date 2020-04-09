import React from 'react';

import { FormField } from '@grafana/ui';

import { LowerLimitClass } from 'Models/LowerLimitClass';

import InputSeriesColorPicker from 'Functions/Input/inputSeriesColorPicker';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from 'types';

interface Props extends PanelEditorProps<SimpleOptions> {
  /** trace border? */
  traceBorder: boolean;
  /** trace border? if orientedLink is bidirectionnal */
  traceBorderB?: boolean;
  /** trace background? */
  traceBack: boolean;
  /** last array lowerLimit */
  lowerLimit: LowerLimitClass[];
  // /** trace border? if orientedLink is bidirectionnal */
  // lowerLimitB?: LowerLimitClass[];
  /** function parent to save lower limit */
  lowerLimitCallBack: (lowerLimit: LowerLimitClass[], id?: number) => void;
  /** function parent to save lower limit */
  lowerLimitCallBackB?: (lowerLimitB: LowerLimitClass[], id?: number) => void;

  isLink: boolean;

  id?: number;

  orientedLink?: OrientedLinkClass;
}

interface State {
  /** couleur du fond */
  lowerLimit: LowerLimitClass[];
  // /** couleur du fond */
  lowerLimitB: LowerLimitClass[];
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
      lowerLimitB: this.props.orientedLink?.lowerLimitB || [],
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
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

  /**
   * edit background color link B if orientedLink is bidirectionnal with Promise
   */
  setStateAsyncSeuilB = (state: {
    /**
     * edit colorFond
     */
    lowerLimitB: LowerLimitClass[];
  }) => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

  /**
   * save data
   */
  callBack = (): void => {
    this.props.lowerLimitCallBack(this.state.lowerLimit, this.props.id);
  };

  /**
   * save data
   */
  callBackB = (): void => {
    if (this.props.lowerLimitCallBackB) {
      this.props.lowerLimitCallBackB(this.state.lowerLimitB, this.props.id);
    }
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
   * change contour color link B if orientedLink is bidirectionnal
   */
  onChangeColorContourB = async (key: number, color: string) => {
    const newSeuil: LowerLimitClass[] = this.state.lowerLimitB;
    newSeuil[0].borderColor = color;
    await this.setStateAsyncSeuilB({
      lowerLimitB: newSeuil,
    });
    this.callBackB();
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
   * change size color link B if orientedLink is bidirectionnal
   */
  onChangeSzContourB = async (value: string) => {
    const newSeuil: LowerLimitClass[] = this.state.lowerLimitB;
    newSeuil[0].sizeBorder = value;
    await this.setStateAsyncSeuilB({
      lowerLimitB: newSeuil,
    });
    this.callBackB();
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
      textInputColor = 'Edit color A';
      labelSize = 'Size A';
      placeHolderSize = 'Size A';
    } else {
      textInputColor = l10n.colorVariable.switchOutlineColor;
      labelSize = l10n.colorVariable.thicknessOutline;
      placeHolderSize = l10n.colorVariable.thicknessOutline;
    }

    if (this.props.isLink && this.props.orientedLink && this.props.orientedLink.orientationLink.value === 'double') {
      if (this.props.traceBorder && this.props.traceBorderB) {
        if (this.state.lowerLimitB) {
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
                labelWidth={10}
                label={labelSize}
                name="epaisseurContour"
                placeholder={placeHolderSize}
                value={this.state.lowerLimit[0].sizeBorder}
                onChange={event => this.onChangeSzContour(event.currentTarget.value)}
              />
            </div>
          );
          couleur.push(
            <div key={keyContourDiv}>
              <InputSeriesColorPicker
                color={this.state.lowerLimitB[0].borderColor}
                keyInt={0}
                text={'Edit color B'}
                _onChange={this.onChangeColorContourB}
              />

              <FormField
                labelWidth={10}
                label={'Size B'}
                name="epaisseurContour"
                placeholder={'Size B'}
                value={this.state.lowerLimitB[0].sizeBorder}
                onChange={event => this.onChangeSzContourB(event.currentTarget.value)}
              />
            </div>
          );
        }
      } else if (!this.props.traceBorder && this.props.traceBorderB) {
        if (this.state.lowerLimitB) {
          const keyContourDiv = key + 'ContourDiv';
          couleur.push(
            <div key={keyContourDiv}>
              <InputSeriesColorPicker
                color={this.state.lowerLimitB[0].borderColor}
                keyInt={0}
                text={'Edit color B'}
                _onChange={this.onChangeColorContourB}
              />

              <FormField
                labelWidth={10}
                label={'Size B'}
                name="epaisseurContour"
                placeholder={'Size B'}
                value={this.state.lowerLimitB[0].sizeBorder}
                onChange={event => this.onChangeSzContourB(event.currentTarget.value)}
              />
            </div>
          );
        }
      } else if (this.props.traceBorder && !this.props.traceBorderB) {
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
              labelWidth={10}
              label={labelSize}
              name="epaisseurContour"
              placeholder={placeHolderSize}
              value={this.state.lowerLimit[0].sizeBorder}
              onChange={event => this.onChangeSzContour(event.currentTarget.value)}
            />
          </div>
        );
      }
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
              labelWidth={10}
              label={labelSize}
              name="epaisseurContour"
              placeholder={placeHolderSize}
              value={this.state.lowerLimit[0].sizeBorder}
              onChange={event => this.onChangeSzContour(event.currentTarget.value)}
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
    if (this.state.lowerLimitB.length === 0) {
      await this.setStateAsyncSeuilB({
        lowerLimitB: [new LowerLimitClass(0, '', '', '', '', '10')],
      });
    }
    this.initComponent();
  };

  /** init component when  update props */
  componentDidUpdate = (prevProps: Props) => {
    if (prevProps.traceBorder !== this.props.traceBorder || prevProps.traceBack !== this.props.traceBack) {
      this.initComponent();
    }

    if (this.props.isLink && this.props.orientedLink && this.props.orientedLink.orientationLink.value === 'double') {
      if (prevProps.traceBorderB !== this.props.traceBorderB) {
        this.initComponent();
      }
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
