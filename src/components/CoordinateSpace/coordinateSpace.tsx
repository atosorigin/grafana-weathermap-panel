import React, { CSSProperties } from 'react';
import { SimpleOptions, Metric } from 'types';

import { PanelEditorProps, SelectableValue } from '@grafana/data';
import { Button, Select, Alert, FormField, FormLabel } from '@grafana/ui';

import { ArrayInputClass } from 'Models/ArrayInputClass';
import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';
import { InputClass } from 'Models/InputClass';
import { LowerLimitClass } from 'Models/LowerLimitClass';
import { RegionClass } from 'Models/RegionClass';
import { TextObject } from 'Models/TextObjectClass';

import InputButtonField from 'Functions/Input/inputButton';
import InputTextField from 'Functions/Input/inputText';
import { createInputCoor } from 'Functions/CreateInput/createInputCoor';
import { editGoodParameterExtend } from 'Functions/EditParameter/editGoodParameter';
import { returnAllId } from 'Functions/searchIDLimit';
import { cloneRegionCoordinateSpace } from 'Functions/initRegionCoordinateSpace';

import ManageLowerLimit from 'components/Parametrage/manageLowerLimit';
import ManageQuery from './manageQuery';
import ParametresGeneriques from 'components/Parametrage/parametresGeneriques';

import 'style/CoordinateSpace.css';
import ManageAuxiliaryQuery from './manageAuxiliaryQuery';

export declare type AlertVariant = 'success' | 'warning' | 'error' | 'info';

interface Props extends PanelEditorProps<SimpleOptions> {
  /** if it's parent component is add then don't display delete button  */
  isAddCoordinate: boolean;
  /** coordinate to edit */
  coordinate: RegionClass;
  /** save data in parent */
  callBackToParent: (id: number, newCoordinate?: RegionClass) => void;
  /** id coordinateSpace */
  id?: number;
}

interface State {
  /** stock coordinates in array object for Parent Component */
  arrayCoor: RegionClass;
  /** stock HTML input coordinates */
  arrayInput: ArrayInputClass[];
  /** stock html form */
  htmlInput: JSX.Element;
  /** display alert when form error */
  hiddenAlert: boolean;
  /** text to display alert */
  titleAlert: string;
  /** alert type */
  severityAlert: AlertVariant;
  /** choice svg mode */
  selectedRadio: string;
  /** selectedSVG */
  allIDSelected: Array<SelectableValue<string>>;
  /** selectedDefault id svg */
  selectedDefaultSVG: SelectableValue<string>;
}

/**
 * component edit space coordinate
 */
class CoordinateSpace extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      arrayCoor: cloneRegionCoordinateSpace(this.props.coordinate),
      arrayInput: [],
      htmlInput: <div></div>,
      hiddenAlert: true,
      titleAlert: 'Error: label is empty',
      severityAlert: 'error',
      selectedRadio: 'svgMode',
      allIDSelected: [],
      selectedDefaultSVG: [],
    };
  }

  /** update state with promise */
  setStateAsyncArrayCoor = (state: {
    /** new espace coordinate */
    arrayCoor: RegionClass;
  }) => {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  };

  /** update state with promise */
  setStateAsyncArrayInput = (state: {
    /** new line in array input */
    arrayInput: ArrayInputClass[];
  }) => {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  };

  /** add inputs for a new coordiante */
  addInput = async (id: number) => {
    await this.setStateAsyncArrayInput({
      arrayInput: this.state.arrayInput.concat([new ArrayInputClass(id, createInputCoor(id, false))]),
    });
  };

  /**
   * Delete array input and value
   * @param {event} event event click delete button
   */
  deleteOwnInput = (): void => {
    const del: boolean = confirm('Delete "' + this.state.arrayCoor.label + '" ?');
    // alert(del);
    if (del) {
      this.props.callBackToParent(this.state.arrayCoor.id, undefined);
    }
  };

  /**
   * Use function if value input change
   * @param {string} currentTarget new value of input
   * @param {string} name name of input
   * @param {number} index id of input
   */
  _handleChange(currentTarget: string, name: string, index: number): void {
    let tmp: RegionClass = this.state.arrayCoor;
    tmp = editGoodParameterExtend(name, tmp, currentTarget);
    this.setState({
      arrayCoor: tmp,
    });
    this.fillInputEspaceCoor();
    if (this.props.isAddCoordinate === false) {
      this.callBack();
    }
  }

  /**
   * Get value of input with state.arrayCoor
   * @param {number} id id of element
   * @param {string} param name of input
   * @returns {string} value of the array element
   */
  getGoodValue(id: number, param: string): string {
    let value: string;

    value = '';
    if (param.startsWith('positionXMin')) {
      value = this.state.arrayCoor.coords.xMin;
    } else if (param.startsWith('positionXMax')) {
      value = this.state.arrayCoor.coords.xMax;
    } else if (param.startsWith('positionYMin')) {
      value = this.state.arrayCoor.coords.yMin;
    } else if (param.startsWith('positionYMax')) {
      value = this.state.arrayCoor.coords.yMax;
    } else if (param.startsWith('label')) {
      value = this.state.arrayCoor.label;
    } else if (param.startsWith('image')) {
      value = this.state.arrayCoor.img;
    } else if (param.startsWith('key')) {
      value = this.state.arrayCoor.mainMetric.key;
    } else if (param.startsWith('valueKey')) {
      value = this.state.arrayCoor.mainMetric.keyValue;
    }
    return value;
  }

  /** create dynamic input */
  fillInputEspaceCoor(): void {
    const { arrayInput } = this.state;
    let finalItem: JSX.Element[] = [];

    for (const line of arrayInput) {
      const mapItems = line.getUneClassInput().map((obj: InputClass) =>
        obj.getInputType() === 'text' ? (
          <InputTextField
            key={obj.getId()}
            label={obj.getLabel()}
            name={obj.getName()}
            placeholder={obj.getPlaceholder() || ''}
            required={obj.getRequired()}
            value={this.getGoodValue(line.getId(), obj.getName())}
            _handleChange={(event: {
              /** get currentTarget in event element */
              currentTarget: HTMLInputElement;
            }) => this._handleChange(event.currentTarget.value, obj.getName(), line.getId())}
          />
        ) : !this.props.isAddCoordinate ? (
          <InputButtonField
            key={obj.getId()}
            label={obj.getLabel()}
            value={obj.getValue() || ''}
            name={obj.getName()}
            required={obj.getRequired()}
            _handleChange={this.deleteOwnInput}
            id={obj.getId()}
          />
        ) : (
          <div></div>
        )
      );
      const divKey: string = 'inputCoor' + line.getId().toString();
      const newInput: JSX.Element = (
        <div key={'addCoordinate' + divKey} className="inputCoor">
          {mapItems}
        </div>
      );
      finalItem = finalItem.concat(newInput);
    }
    this.setState((prevState: State) => ({
      htmlInput: <ul>{finalItem}</ul>,
      selectedRadio: prevState.arrayCoor.mode ? 'svgMode' : 'coordinateMode',
    }));
  }

  /** edit value for selectedDefaultValue and edit idSVG arrayCoor */
  onChangeSelectSVG = (value: SelectableValue<string>) => {
    // const newId: SelectableValue<string> = value;
    const coordinate: RegionClass = this.state.arrayCoor;
    coordinate.idSVG = value.value || '';
    this.setState({
      selectedDefaultSVG: value,
      arrayCoor: coordinate,
    });
    if (this.props.isAddCoordinate === false) {
      this.callBack();
    }
  };

  /** call function to return arrayCoor a SimpleEditor */
  callBack = (): void => {
    const waitAlert = 3000;

    if (this.state.arrayCoor.label === '') {
      this.setState({
        severityAlert: 'error',
        titleAlert: 'Error: label is empty',
        hiddenAlert: false,
      });
      setTimeout(() => {
        this.setState({
          hiddenAlert: true,
        });
      }, waitAlert);
      //console.log('ok');
    } else {
      this.props.callBackToParent(this.state.arrayCoor.id, this.state.arrayCoor);
      this.setState({
        severityAlert: 'success',
        titleAlert: 'Save',
        hiddenAlert: false,
      });
      if (!this.props.isAddCoordinate) {
        setTimeout(() => {
          this.setState({
            hiddenAlert: true,
          });
        }, waitAlert);
      }
    }
  };

  /** save data in parent */
  callBackToOther = (followLink?: string, hoveringTooltipLink?: string, hoveringTooltipText?: string, textObj?: TextObject): void => {
    const oldCoor: RegionClass = this.state.arrayCoor;
    if (followLink || followLink === '') {
      oldCoor.linkURL.followLink = followLink;
    }
    if (hoveringTooltipLink || hoveringTooltipLink === '') {
      oldCoor.linkURL.hoveringTooltipLink = hoveringTooltipLink;
    }
    if (hoveringTooltipText || hoveringTooltipText === '') {
      oldCoor.linkURL.hoveringTooltipText = hoveringTooltipText;
    }
    if (textObj) {
      oldCoor.textObj = textObj;
    }
    this.setState({
      arrayCoor: oldCoor,
    });
    if (this.props.isAddCoordinate === false) {
      this.callBack();
    }
  };

  /** update lower limit */
  callBackManageLowerLimit = (coordiante: CoordinateSpaceClass) => {
    const newValue: RegionClass = this.state.arrayCoor;

    newValue.colorMode = coordiante.colorMode;
    newValue.traceBorder = coordiante.traceBorder;
    newValue.traceBack = coordiante.traceBack;
    this.setState({
      arrayCoor: newValue,
    });
    if (this.props.isAddCoordinate === false) {
      this.callBack();
    }
  };

  /** save lower limit data */
  callBackLowerLimit = (lowerLimit: LowerLimitClass[]) => {
    const newValue: RegionClass = this.state.arrayCoor;
    newValue.lowerLimit = lowerLimit;
    this.setState({
      arrayCoor: newValue,
    });
    if (this.props.isAddCoordinate === false) {
      this.callBack();
    }
  };

  /** save mainMetric data */
  callBackMainMetric = (mainMetric: Metric): void => {
    const newValue: RegionClass = this.state.arrayCoor;
    newValue.mainMetric = mainMetric;
    this.setState({
      arrayCoor: newValue,
    });
    if (this.props.isAddCoordinate === false) {
      this.callBack();
    }
  };

  /** change value radio button checker to pass svg or coordinate mode */
  onChangeRadioMode = (event: {
    /** get current value to target */
    currentTarget: HTMLInputElement;
  }) => {
    const coordinate: RegionClass = this.state.arrayCoor;

    coordinate.mode = event.currentTarget.value === 'svgMode' ? true : false;
    this.setState({
      selectedRadio: event.currentTarget.value,
      arrayCoor: coordinate,
    });
    if (this.props.isAddCoordinate === false) {
      this.callBack();
    }
  };

  /** add all id SVG in select */
  fillSelectSVG = () => {
    const selectedIDSvg: Array<SelectableValue<string>> = [];
    if (this.state.allIDSelected.length > 0) {
      const allIDSelected: Array<SelectableValue<string>> = this.state.allIDSelected;
      let defaultSVG: SelectableValue<string> = allIDSelected[0];
      for (const line of allIDSelected) {
        if (line.value === this.state.arrayCoor.idSVG) {
          defaultSVG = line;
        }
      }
      this.setState({
        selectedDefaultSVG: defaultSVG,
      });
      return;
    }
    const timeRefresh = 1000;
    if (this.props.options.baseMap.modeSVG) {
      const refresh = setInterval(() => {
        const data: string[] = returnAllId(this.props.options.coordinateSpaceInitial.coordinate, this.props.options.baseMap);

        if (data.length > 0) {
          for (const line of data) {
            selectedIDSvg.push({ value: line, label: line });
          }
          let defaultSVG: SelectableValue<string> = selectedIDSvg[0];
          for (const line of selectedIDSvg) {
            if (line.value === this.state.arrayCoor.idSVG) {
              defaultSVG = line;
            }
          }
          this.setState({
            allIDSelected: selectedIDSvg,
            selectedDefaultSVG: defaultSVG,
          });
          clearInterval(refresh);
        }
        // else {
        // 	console.error('error search id');
        // }
      }, timeRefresh);
    }
  };

  /**
   * fill input whith data
   * this function is called by mount and update event
   */
  getDataInInput = async () => {
    await this.addInput(this.props.coordinate.id);
    this.fillInputEspaceCoor();
    this.fillSelectSVG();
  };

  /** call function in load component */
  componentDidMount = () => {
    this.getDataInInput();
  };

  /** function is call when props is update. Update state */
  componentDidUpdate = async (prevProps: Props, prevState: State) => {
    if (prevProps.coordinate.id !== this.props.coordinate.id) {
      await this.setStateAsyncArrayCoor({
        arrayCoor: cloneRegionCoordinateSpace(this.props.coordinate),
      });
      await this.setStateAsyncArrayInput({
        arrayInput: [],
      });
      this.getDataInInput();
    }
    // if (prevProps.data.series !== this.props.data.series) {
    // 	this.fillSelectQuery();
    // }
  };

  /** return html */
  render() {
    const styleAlert = {
      position: 'fixed',
      bottom: '5%',
      right: '5%',
      zIndex: 9999,
    } as CSSProperties;

    return (
      <div>
        <div style={styleAlert} hidden={this.state.hiddenAlert}>
          <Alert title={this.state.titleAlert} severity={this.state.severityAlert} />
        </div>
        <div>{this.state.htmlInput}</div>
        <div>
          <ManageQuery
            options={this.props.options}
            onOptionsChange={this.props.onOptionsChange}
            data={this.props.data}
            idCoordinate={this.state.arrayCoor.id}
            mainMetric={this.state.arrayCoor.mainMetric}
            callBackToParent={this.callBackMainMetric}
            isLink={false}
          />
        </div>
        {!this.props.isAddCoordinate && (
          <div>
            <ManageAuxiliaryQuery
              options={this.props.options}
              onOptionsChange={this.props.onOptionsChange}
              data={this.props.data}
              idCoordinate={this.state.arrayCoor.id}
              metrics={this.state.arrayCoor.metrics}
              //callBackToParent={this.callBackAuxiliaryMetric}
              isRegion={true}
            />
          </div>
        )}
        <div>
          <ParametresGeneriques
            options={this.props.options}
            onOptionsChange={this.props.onOptionsChange}
            data={this.props.data}
            coordinateSpace={this.state.arrayCoor}
            callBackToParent={this.callBackToOther}
          />
        </div>
        <div>
          <ManageLowerLimit
            options={this.props.options}
            onOptionsChange={this.props.onOptionsChange}
            data={this.props.data}
            coordinate={this.state.arrayCoor}
            callBack={this.callBackManageLowerLimit}
            lowerLimitCallBack={this.callBackLowerLimit}
            isLink={false}
          />
        </div>
        <br />
        <div>
          <div className="radio">
            <label>
              <input type="radio" value="svgMode" checked={this.state.selectedRadio === 'svgMode'} onChange={this.onChangeRadioMode} />
              SVG mode
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="coordinateMode" checked={this.state.selectedRadio === 'coordinateMode'} onChange={this.onChangeRadioMode} />
              Coordinate mode
            </label>
          </div>
          <br></br>
          {this.state.selectedRadio === 'svgMode' ? (
            <div className="svgMode">
              <div style={{ display: 'flex' }}>
                <FormLabel width={15}>Zone SVG</FormLabel>
                <Select
                  onChange={(value) => this.onChangeSelectSVG(value)}
                  allowCustomValue={false}
                  options={this.state.allIDSelected}
                  width={10}
                  value={this.state.selectedDefaultSVG}
                />
              </div>
            </div>
          ) : (
            <div className="classRegion">
              <FormField
                label="Image"
                labelWidth={15}
                inputWidth={20}
                type="text"
                value={this.state.arrayCoor.img}
                name="image"
                onChange={(event) => this._handleChange(event.currentTarget.value, 'image', this.state.arrayCoor.id)}
              />
              <FormField
                label="X min"
                labelWidth={15}
                inputWidth={20}
                type="text"
                value={this.state.arrayCoor.coords.xMin}
                name="positionXMin"
                onChange={(event) => this._handleChange(event.currentTarget.value, 'positionXMin', this.state.arrayCoor.id)}
              />
              <FormField
                label="X max"
                labelWidth={15}
                inputWidth={20}
                type="text"
                value={this.state.arrayCoor.coords.xMax}
                name="positionXMax"
                onChange={(event) => this._handleChange(event.currentTarget.value, 'positionXMax', this.state.arrayCoor.id)}
              />
              <FormField
                label="Y min"
                labelWidth={15}
                inputWidth={20}
                type="text"
                value={this.state.arrayCoor.coords.yMin}
                name="positionYMin"
                onChange={(event) => this._handleChange(event.currentTarget.value, 'positionYMin', this.state.arrayCoor.id)}
              />
              <FormField
                label="Y max"
                labelWidth={15}
                inputWidth={20}
                type="text"
                value={this.state.arrayCoor.coords.yMax}
                name="positionYMax"
                onChange={(event) => this._handleChange(event.currentTarget.value, 'positionYMax', this.state.arrayCoor.id)}
              />
            </div>
          )}
        </div>
        <br />
        <div style={{ textAlign: 'center' }} className="buttonSave">
          {this.props.isAddCoordinate && (
            <Button style={{ marginRight: '1%' }} onClick={() => this.callBack()}>
              Save
            </Button>
          )}
          {!this.props.isAddCoordinate && (
            <Button onClick={this.deleteOwnInput} variant="danger">
              Delete
            </Button>
          )}
        </div>
        {/* <Button onClick={() => console.log(this.state.arrayCoor)}>load</Button> */}
      </div>
    );
  }
}
export default CoordinateSpace;
