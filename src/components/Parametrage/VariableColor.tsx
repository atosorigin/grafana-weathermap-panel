import React from 'react';
import { SimpleOptions } from 'types';

import { PanelEditorProps } from '@grafana/data';
import { Button, FormField } from '@grafana/ui';

import { ArrayInputClass } from 'Models/ArrayInputClass';
import { InputClass } from 'Models/InputClass';
import { LowerLimitClass } from 'Models/LowerLimitClass';

import InputSeriesColorPicker from 'Functions/Input/inputSeriesColorPicker';
import InputTextField from 'Functions/Input/inputText';

interface Props {
  /** trace color border? */
  traceBorder: boolean;
  /** trace color back */
  traceBack: boolean;
  /** last lower limit array */
  lowerLimit: LowerLimitClass[];
  /** function parent to save lower limit */
  lowerLimitCallBack: (lowerLimit: LowerLimitClass[], id?: number) => void;

  isLink: boolean;
}

interface State {
  /**
   * tableau d'input pour générer le form
   */
  arrayInputClass: ArrayInputClass[];
  /**
   * tableau des seuils qui sera renvoyé au parent
   */
  lowerLimit: LowerLimitClass[];
  /**
   * nombre de seuil
   */
  index: number;
  /**
   * nombre de variation à ajouter qui est affiché dans l'input
   */
  nbVariation: string;

  /**
   * fill dynamic input
   */
  dynamicInput: JSX.Element;
  /** input final form */
  displayInput: boolean;
}

/**
 * edit colors in variable mode
 */
class VariableColor extends React.Component<Props, State, PanelEditorProps<SimpleOptions>> {
  constructor(props: Props) {
    super(props);
    this.state = {
      arrayInputClass: [],
      lowerLimit: [],
      index: 0,
      nbVariation: '3',
      dynamicInput: <br />,
      displayInput: false,
    };
  }

  /**
   * set state for arrayInputClass whith Promise
   */
  setStateAsyncArrayInputClass = (state: {
    /**
     * edit arrayInputClass
     */
    arrayInputClass: ArrayInputClass[];
  }) => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

  /**
   * set state for seuil whith Promise
   */
  setStateAsyncLowerLimit = (state: {
    /**
     * edit seuil
     */
    lowerLimit: LowerLimitClass[];
  }) => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

  /**
   * set state for index whith Promise
   */
  setStateAsyncIndex = (state: {
    /**
     * edit index
     */
    index: number;
  }) => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

  /**
   * set state for nbVariation whith Promise
   */
  setStateAsyncNbVariation = (state: {
    /**
     * edit nbVariation
     */
    nbVariation: string;
  }) => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

  /**
   * send data to parent
   */
  callBack = () => {
    this.fillVarInput();
    this.props.lowerLimitCallBack(this.state.lowerLimit);
  };

  /** old function */
  saveData = () => {
    // const { onOptionsChange } = this.props;
    // console.table(this.state.seuil);
    // onOptionsChange({
    // 	...this.props.options,
    // 	seuil: this.state.seuil,
    // });
  };

  /**
   * add new seuil
   * @param idx index for id
   */
  addInput = async (idx: number, newLowerLimit: LowerLimitClass) => {
    await this.setStateAsyncArrayInputClass({
      arrayInputClass: this.state.arrayInputClass
        .slice()
        .concat(
          new ArrayInputClass(idx, [
            new InputClass('gestCouleurMin' + idx.toString(), 'Seuil min', 'lowerLimitMin', 'text', false, 'Seuil min', undefined),
            new InputClass('gestCouleurMax' + idx.toString(), 'Seuil max', 'lowerLimitMax', 'text', false, 'Seuil max', undefined),
          ])
        ),
    });

    await this.setStateAsyncLowerLimit({
      lowerLimit: this.state.lowerLimit.concat(newLowerLimit),
    });

    await this.setStateAsyncIndex({
      index: idx + 1,
    });
  };

  /**
   * call function with value input change
   * @param event event input
   * @param idInput id input
   * @param idLine index array
   */
  handleValueChange = async (event: string, idInput: string, idLine: number) => {
    const cpy: LowerLimitClass[] = this.state.lowerLimit.slice();
    if (idInput === 'lowerLimitMin') {
      cpy[idLine].lowerLimitMin = event;
    } else {
      cpy[idLine].lowerLimitMax = event;
      if (cpy.length > idLine + 1) {
        cpy[idLine + 1].lowerLimitMin = '>' + event;
      }
    }
    await this.setStateAsyncLowerLimit({
      lowerLimit: cpy,
    });
    this.callBack();
  };

  /**
   * call function when colorFond value change
   * @param key line index to modify
   * @param color the new color to add
   */
  onChangeColorFond = async (key: number, color: string) => {
    const cpy: LowerLimitClass[] = this.state.lowerLimit;
    cpy[key].backColor = color;
    await this.setStateAsyncLowerLimit({
      lowerLimit: cpy,
    });
    this.callBack();
  };

  /**
   * call fonction when colorContour change
   * @param key line index to modify
   * @param color the new color to add
   */
  onChangeColorContour = async (key: number, color: string) => {
    const cpy: LowerLimitClass[] = this.state.lowerLimit;
    cpy[key].borderColor = color;
    await this.setStateAsyncLowerLimit({
      lowerLimit: cpy,
    });
    this.callBack();
  };

  /**
   * call function when sizeBorder value change
   * @param key line index to modify
   * @param size the new size to add
   */
  onChangeSzContour = async (key: number, size: string) => {
    const cpy: LowerLimitClass[] = this.state.lowerLimit;
    cpy[key].sizeBorder = size;
    await this.setStateAsyncLowerLimit({
      lowerLimit: cpy,
    });
    this.callBack();
  };

  /**
   * insert color picker
   * @param keyInt index to edit line
   * @returns JSX.Element
   */
  addButtonColor = (keyInt: number): JSX.Element[] => {
    const key = keyInt.toString();
    const couleur: JSX.Element[] = [];
    const l10n = require('Localization/en.json');

    if (this.props.traceBack) {
      const keyFondColorPicker = key + 'FondcolorPicker';

      couleur.push(
        <InputSeriesColorPicker
          key={keyFondColorPicker}
          color={this.state.lowerLimit[keyInt].backColor}
          keyInt={keyInt}
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
            color={this.state.lowerLimit[keyInt].borderColor}
            keyInt={keyInt}
            text={l10n.colorVariable.switchOutlineColor}
            _onChange={this.onChangeColorContour}
          />

          <FormField
            labelWidth={15}
            label={l10n.colorVariable.thicknessOutline}
            name="epaisseurContour"
            placeholder={l10n.colorVariable.thicknessOutline}
            value={this.state.lowerLimit[keyInt].sizeBorder}
            onChange={event => this.onChangeSzContour(keyInt, event.currentTarget.value)}
          />
        </div>
      );
    }
    return couleur;
  };

  /**
   * call fonction when edit nbVariation
   */
  onChangeVariation = async (event: {
    /** currentTarget is item that is being edited */
    currentTarget: HTMLInputElement;
  }) => {
    await this.setStateAsyncNbVariation({ nbVariation: event.currentTarget.value });
  };

  /** generate array input */
  test = async (newSeuil: LowerLimitClass[]) => {
    const arrayInput: ArrayInputClass[] = this.state.arrayInputClass.slice();
    let idx = this.state.index;
    const pSeuil: LowerLimitClass[] = this.state.lowerLimit;

    for (const line of newSeuil) {
      arrayInput.push(
        new ArrayInputClass(idx, [
          new InputClass('gestCouleurMin' + idx.toString(), 'Seuil min', 'lowerLimitMin', 'text', false, 'Seuil min', undefined),
          new InputClass('gestCouleurMax' + idx.toString(), 'Seuil max', 'lowerLimitMax', 'text', false, 'Seuil max', undefined),
        ])
      );
      idx++;
      pSeuil.push(line);
    }
    await this.setStateAsyncArrayInputClass({
      arrayInputClass: arrayInput,
    });

    await this.setStateAsyncLowerLimit({
      lowerLimit: pSeuil,
    });

    await this.setStateAsyncIndex({
      index: idx,
    });
  };

  /**
   * call addInput to prepare new inputs
   * @param nb number inputs to add
   */
  addMultipleVariation = async (nb: number, seuil?: LowerLimitClass[]) => {
    if (seuil) {
      await this.test(seuil);
      this.fillVarInput();
    }
  };

  /** add new lower limit */
  addVariation = async (nb: number, seuil?: LowerLimitClass[]) => {
    for (let i = 0; i < nb; i++) {
      let newSeuil: LowerLimitClass = seuil ? seuil[i] : new LowerLimitClass(i, '', '', '', '', '');
      if (this.props.isLink) {
        newSeuil = seuil ? seuil[i] : new LowerLimitClass(i, '', '', '', '', '10');
      }
      await this.addInput(i, newSeuil);
    }
    this.fillVarInput();
  };

  /**
   * call function when display n input according to nbVariation
   */
  onClickVariation = async () => {
    await this.setStateAsyncArrayInputClass({
      arrayInputClass: [],
    });
    await this.setStateAsyncIndex({
      index: 0,
    });
    await this.setStateAsyncLowerLimit({
      lowerLimit: [],
    });

    this.setState({
      displayInput: true,
    });

    const nb: number = parseInt(this.state.nbVariation, 10);
    await this.addVariation(nb);
  };

  /**
   * generate input seuil min and max with value
   * @returns JSX.Element
   */
  fillVarInput = (): void => {
    let final: JSX.Element[] = [];

    if (this.state.lowerLimit.length === 0) {
      this.setState({
        dynamicInput: <br />,
      });
      return;
    }

    let i = 0;
    for (const line of this.state.arrayInputClass) {
      if (line.uneClassInput.length <= 0) {
        this.setState({
          dynamicInput: <br />,
        });
        return;
      }
      const result = line.uneClassInput.map((obj: InputClass) => (
        <InputTextField
          key={obj.id}
          label={obj.label}
          name={obj.name}
          placeholder={obj.placeholder || ''}
          required={obj.required}
          value={
            obj.name === 'lowerLimitMin'
              ? line.id === 0
                ? '-∞'
                : this.state.lowerLimit[i].lowerLimitMin
              : line.id === this.state.index - 1
              ? '+∞'
              : this.state.lowerLimit[i].lowerLimitMax
          }
          _handleChange={(event: {
            /**
             * get currentTarget in event element
             */
            currentTarget: HTMLInputElement;
          }) => this.handleValueChange(event.currentTarget.value, obj.name, line.id)}
          disabled={obj.name === 'lowerLimitMin' || line.id === this.state.index - 1}
        />
      ));
      i++;
      const couleur: JSX.Element[] = this.addButtonColor(line.id);
      const newKey = line.id.toString() + 'brGestColor';
      final = final.concat(result.concat(couleur.concat(<br key={newKey} />)));
    }
    this.setState({
      dynamicInput: <ul>{final}</ul>,
    });
  };

  /**
   * debug
   */
  infoSeuil = () => {
    // console.group('info');
    // console.log(this.state.lowerLimit);
    // console.log(this.state.arrayInputClass);
    // console.groupEnd();
  };

  /**
   * component mount
   */
  componentDidMount = () => {
    if (this.props.lowerLimit.length > 0) {
      const nb: number = parseInt(this.state.nbVariation, 10);
      this.addMultipleVariation(nb, this.props.lowerLimit);
    }
  };

  componentDidUpdate = (prevProps: Props) => {
    if (prevProps.traceBorder !== this.props.traceBorder || prevProps.traceBack !== this.props.traceBack) {
      this.fillVarInput();
    }
  };

  /**
   * render
   */
  render() {
    const l10n = require('Localization/en.json');

    return (
      <div>
        <InputTextField
          label={l10n.colorVariable.variationNumber}
          name="nbVariation"
          placeholder={l10n.colorVariable.number}
          required={true}
          value={this.state.nbVariation}
          _handleChange={this.onChangeVariation}
        />
        <Button onClick={this.onClickVariation}>{l10n.colorVariable.addColor}</Button>
        <br />
        <br />
        {this.state.dynamicInput}
      </div>
    );
  }
}
export default VariableColor;
