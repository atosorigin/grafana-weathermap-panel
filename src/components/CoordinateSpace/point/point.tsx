import React, { CSSProperties } from 'react';
import { createInputsPoint } from '../../../Functions/CreateInput/createInputsPoint';
import InputTextPoint from '../../../Functions/Input/inputTextPoint';
//import InputButtonField from '../Functions/Input/inputButton';
import { InputSelectableClass } from '../../../Models/InputSelectableClass';
import { ArrayInputSelectableClass } from '../../../Models/ArrayInputSelectableClass';
import { editGoodParameterPoint } from '../../../Functions/EditParameter/editGoodParameterPoint';
import { PointClass } from '../../../Models/PointClass';
import InputSelectPoint from '../../../Functions/Input/inputSelectPoint';
import { SelectableValue, PanelEditorProps } from '@grafana/data';
import InputSeriesColorPickerPoint from '../../../Functions/Input/inputSeriesColorPickerPoint';
import { Button, AlertVariant, Alert } from '@grafana/ui';
//import { RegionClass } from '../Models/RegionClass';
import { SimpleOptions, Metric } from '../../../types';

import ManageQuery from '../manageQuery';
import ManageAuxiliaryQuery from '../manageAuxiliaryQuery';
import { TextObject } from '../../../Models/TextObjectClass';
import { CoordinateSpaceClass } from '../../../Models/CoordinateSpaceClass';
import { LowerLimitClass } from '../../../Models/LowerLimitClass';
import PositionParameter from '../../Parametrage/positionParameters';
import ParametresGeneriques from '../../Parametrage/parametresGeneriques';
import ManageLowerLimit from '../../Parametrage/manageLowerLimit';
import { clonePoint } from 'Functions/initPoint';

/**
 * IProps
 */
interface Props extends PanelEditorProps<SimpleOptions> {
  /**
   * save data in Parent
   */
  callBackToParent: (id: number, newCoordinate?: PointClass) => void;

  /** point to edit */
  point: PointClass;

  isAddPoint: boolean;

  id?: number;
}

/**
 * IState
 */
interface State {
  /** */
  arrayInput: ArrayInputSelectableClass[];
  /** */
  arrayPointClass: PointClass[];
  /** */
  arrayCoor: PointClass;
  /** */
  debug: boolean;
  /** */
  htmlInput: JSX.Element;
  /** display alert when form error */
  hiddenAlert: boolean;
  /** text to display alert */
  titleAlert: string;
  /** alert type */
  severityAlert: AlertVariant;
}

/**
 * IndexParametrage
 */
export default class Point extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      arrayInput: [],
      arrayCoor: clonePoint(this.props.point),
      arrayPointClass: [],
      debug: false,
      htmlInput: <div></div>,
      hiddenAlert: true,
      titleAlert: 'Error: label is empty',
      severityAlert: 'error',
    };
  }

  /** update state with promise */
  setStateAsyncArrayCoor = (state: {
    /** new espace coordinate */
    arrayCoor: PointClass;
  }) => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

  /** update state with promise */
  setStateAsyncArrayInput = (state: {
    /** new line in array input */
    arrayInput: ArrayInputSelectableClass[];
  }) => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

  /** add inputs for a new coordiante */
  addInput = async (id: number) => {
    await this.setStateAsyncArrayInput({
      arrayInput: this.state.arrayInput.concat([new ArrayInputSelectableClass(id, createInputsPoint(id))]),
    });
  };

  /**
   * Delete array input and value
   * @param {event} event event click delete button
   */
  deleteOwnInput = (): void => {
    const label = this.state.arrayCoor.label || this.state.arrayCoor.name;
    const del: boolean = confirm('Delete "' + label + '" ?');
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
    let tmp: PointClass = this.state.arrayCoor;
    tmp = editGoodParameterPoint(name, tmp, currentTarget, {});
    this.setState({
      arrayCoor: tmp,
    });
    this.generateInputsPoint();
    if (this.props.isAddPoint === false) {
      this.callBack();
    }
  }

  /**
   * Get value of input with state.arrayPointClass
   * @param {number} id id of element
   * @param {string} param name of input
   * @returns {string} value of the array element
   */
  private getGoodValue(id: number, param: string): any {
    let value: string;
    let valueSelect: SelectableValue<any>;

    value = '';
    valueSelect = {};

    if (
      param.startsWith('drawGraphicMarker') ||
      param.startsWith('shape') ||
      param.startsWith('sizeWidth') ||
      param.startsWith('sizeHeight') ||
      param.startsWith('linkWithCoordinateSpace')
    ) {
      if (param.startsWith('drawGraphicMarker')) {
        valueSelect = this.state.arrayCoor.drawGraphicMarker;
      } else if (param.startsWith('shape')) {
        valueSelect = this.state.arrayCoor.shape;
      } else if (param.startsWith('sizeWidth')) {
        valueSelect = this.state.arrayCoor.sizeWidth;
      } else if (param.startsWith('sizeHeight')) {
        valueSelect = this.state.arrayCoor.sizeHeight;
      }
      return valueSelect;
    } else {
      if (param.startsWith('rotateArrow')) {
        value = this.state.arrayCoor.rotateArrow;
      } else if (param.startsWith('positionShapeX')) {
        value = this.state.arrayCoor.positionShapeX;
      } else if (param.startsWith('positionShapeY')) {
        value = this.state.arrayCoor.positionShapeY;
      } else if (param.startsWith('label')) {
        value = this.state.arrayCoor.label;
      } else if (param.startsWith('color')) {
        value = this.state.arrayCoor.color;
      }
      return value;
    }
  }

  /** create dynamic input */
  generateInputsPoint(): void {
    const { arrayInput } = this.state;
    let item: JSX.Element = <div></div>;
    //let itemButton: JSX.Element = <div></div>;
    let mapItems: JSX.Element[] = [];
    let finalItem: JSX.Element[] = [];

    for (const line of arrayInput) {
      mapItems = [];
      line.uneClassInput.forEach((obj: InputSelectableClass) => {
        if (obj.input_type === 'text') {
          item = (
            <InputTextPoint
              key={obj.id}
              label={obj.label}
              name={obj.name}
              placeholder={obj.placeholder || ''}
              required={obj.required}
              value={this.getGoodValue(line.id, obj.name)}
              _handleChange={(event: {
                /**
                 * get currentTarget in event element
                 */
                currentTarget: HTMLInputElement;
              }) => {
                this._handleChange(event.currentTarget.value, obj.name, line.id);
              }}
              shape={this.getGoodValue(line.id, 'shape').value}
            />
          );
        } else if (obj.input_type === 'select') {
          item = (
            <InputSelectPoint
              key={obj.id}
              _onChange={(value: SelectableValue<string>, name: string, index: number) => {
                const newPoint: PointClass = this.state.arrayCoor;
                editGoodParameterPoint(name, newPoint, '', value);
                this.setState({
                  arrayCoor: newPoint,
                });
                this.generateInputsPoint();
                if (this.props.isAddPoint === false) {
                  this.callBack();
                }
              }}
              name={obj.name}
              index={line.id}
              data={obj.optionValues}
              defaultValue={this.getGoodValue(line.id, obj.name)}
              shape={this.getGoodValue(line.id, 'shape').value}
              label={obj.label}
            />
          );
        } else if (obj.input_type === 'color') {
          item = (
            <InputSeriesColorPickerPoint
              key={obj.id}
              keyInt={parseInt(obj.id, 10)}
              color={this.getGoodValue(line.id, 'color')}
              text={obj.label}
              width={10}
              _onChange={(keyInt: number, newColor: string) => {
                let i: number;
                i = 0;
                const copyOfarrayPointClass: PointClass[] = this.state.arrayPointClass.slice();
                for (const line of copyOfarrayPointClass) {
                  if (line.id === keyInt) {
                    copyOfarrayPointClass[i] = editGoodParameterPoint(obj.name, copyOfarrayPointClass[i], newColor, {});
                    break;
                  }
                  i++;
                }

                this.setState({
                  arrayPointClass: copyOfarrayPointClass,
                });

                this.callBack();

                obj.setDefaultValueColor(newColor);
              }}
            />
          );
        } else {
          //   itemButton = (
          //     <InputButtonField
          //       key={obj.id}
          //       label={obj.label}
          //       value={obj.value || ''}
          //       name={obj.name}
          //       required={obj.required}
          //       _handleChange={this.deleteOwnInput}
          //       id={obj.id}
          //       withLabel={false}
          //     />
          //   );
          item = <div></div>;
        }
        mapItems.push(item);
      });

      const newInputList: JSX.Element = (
        <div key={'inputPoint' + line.id.toString()} className="inputCoor" id={'point' + line.id.toString()}>
          {mapItems}
          {/* <div style={{ marginTop: '4px' }}>{itemButton}</div> */}
        </div>
      );
      finalItem = finalItem.concat(newInputList);
    }
    this.setState((prevState: State) => ({
      htmlInput: <ul>{finalItem}</ul>,
    }));
  }

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
      console.log('ok');
    } else {
      this.props.callBackToParent(this.state.arrayCoor.id, this.state.arrayCoor);
      this.setState({
        severityAlert: 'success',
        titleAlert: 'Save',
        hiddenAlert: false,
      });
      if (!this.props.isAddPoint) {
        setTimeout(() => {
          this.setState({
            hiddenAlert: true,
          });
        }, waitAlert);
      }
    }
  };

  private callBackToOther = (followLink?: string, hoveringTooltipLink?: string, hoveringTooltipText?: string, textObj?: TextObject): void => {
    const oldCoor: PointClass = this.state.arrayCoor;
    if (followLink) {
      oldCoor.linkURL.followLink = followLink;
    }
    if (hoveringTooltipLink) {
      oldCoor.linkURL.hoveringTooltipLink = hoveringTooltipLink;
    }
    if (hoveringTooltipText) {
      oldCoor.linkURL.hoveringTooltipText = hoveringTooltipText;
    }
    if (textObj) {
      oldCoor.textObj = textObj;
    }

    this.setState({
      arrayCoor: oldCoor,
    });
    if (this.props.isAddPoint === false) {
      this.callBack();
    }
  };

  /** update lower limit */
  private callBackManageLowerLimit = (coordinate: CoordinateSpaceClass, id?: number) => {
    const newValue: PointClass = this.state.arrayCoor;
    newValue.colorMode = coordinate.colorMode;
    newValue.traceBorder = coordinate.traceBorder;
    newValue.traceBack = coordinate.traceBack;
    this.setState({
      arrayCoor: newValue,
    });
    if (this.props.isAddPoint === false) {
      this.callBack();
    }
  };

  // private callBackPositionParameter = (positionParameter: PositionParameterClass, id?: number) => {
  //   const newValue: PointClass = this.state.arrayCoor;
  //   newValue.positionParameter = positionParameter;
  //   this.setState({
  //     arrayCoor: newValue,
  //   });
  // };

  /** save lower limit data */
  private callBackLowerLimit = (lowerLimit: LowerLimitClass[], id?: number) => {
    const newValue: PointClass = this.state.arrayCoor;
    newValue.lowerLimit = lowerLimit;
    this.setState({
      arrayCoor: newValue,
    });
    if (this.props.isAddPoint === false) {
      this.callBack();
    }
  };

  private callBackMainMetric = (mainMetric: Metric, id?: number): void => {
    const newValue: PointClass = this.state.arrayCoor;
    newValue.mainMetric = mainMetric;
    this.setState({
      arrayCoor: newValue,
    });
    if (this.props.isAddPoint === false) {
      this.callBack();
    }
  };

  /**
   * fill input whith data
   * this function is called by mount and update event
   */
  getDataInInput = async () => {
    await this.addInput(this.props.point.id);
    this.generateInputsPoint();
  };

  /** call function in load component */
  componentDidMount = () => {
    this.getDataInInput();
  };

  /** function is call when props is update. Update state */
  componentDidUpdate = async (prevProps: Props, prevState: State) => {
    if (prevProps.point.id !== this.props.point.id) {
      await this.setStateAsyncArrayCoor({
        arrayCoor: clonePoint(this.props.point),
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

  /**
   * render()
   */
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
        <div>
          <ManageAuxiliaryQuery
            options={this.props.options}
            onOptionsChange={this.props.onOptionsChange}
            data={this.props.data}
            idCoordinate={this.state.arrayCoor.id}
            metrics={this.state.arrayCoor.metrics}
            //callBackToParent={this.callBackAuxiliaryMetric}
            isPoint={true}
          />
        </div>
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
        <div>
          <PositionParameter
            options={this.props.options}
            onOptionsChange={this.props.onOptionsChange}
            data={this.props.data}
            callBackToParentZIndex={() => {}}
            isPoint={true}
            isLink={false}
            isRegion={false}
            id={this.state.arrayCoor.id}
          />
        </div>
        <div>{this.state.htmlInput}</div>
        <div style={{ textAlign: 'center' }} className="buttonSave">
          {this.props.isAddPoint && (
            <Button style={{ marginRight: '1%' }} onClick={() => this.callBack()}>
              Save
            </Button>
          )}
          {!this.props.isAddPoint && (
            <Button onClick={this.deleteOwnInput} variant="danger">
              Delete
            </Button>
          )}
        </div>
      </div>
    );
  }
}
