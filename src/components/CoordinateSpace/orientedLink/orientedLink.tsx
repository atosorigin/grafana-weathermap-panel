import React, { CSSProperties } from 'react';
import { ArrayInputSelectableClass } from '../../../Models/ArrayInputSelectableClass';
import { SelectableValue, PanelEditorProps } from '@grafana/data';
import InputTextOrientedLink from '../../../Functions/Input/inputTextOrientedLink';
import InputSelectOrientedLink from '../../../Functions/Input/inputSelectOrientedLink';
import { OrientedLinkClass } from '../../../Models/OrientedLinkClass';
import { createInputsOrientedLink } from '../../../Functions/CreateInput/createInputsOrientedLink';
import { editGoodParameterOrientedLink } from '../../../Functions/EditParameter/editGoodParameterOrientedLink';
import { TextObject } from '../../../Models/TextObjectClass';
import { SimpleOptions, Metric } from '../../../types';
import { AlertVariant, Alert, Button } from '@grafana/ui';
import ParametresGeneriques from '../../Parametrage/parametresGeneriques';
import { LowerLimitClass } from '../../../Models/LowerLimitClass';
import { CoordinateSpaceClass } from '../../../Models/CoordinateSpaceClass';
import ManageLowerLimit from '../../Parametrage/manageLowerLimit';
import PositionParameter from '../../Parametrage/positionParameters';
import ManageQuery from '../../CoordinateSpace/manageQuery';
import ManageAuxiliaryQuery from '../../CoordinateSpace/manageAuxiliaryQuery';
import { cloneOrientedLink } from '../../../Functions/initOrientedLink';

/**
 * IProps
 */
interface Props extends PanelEditorProps<SimpleOptions> {
  /** save data in Parent */
  callBackToParent: (id: number, newCoordinate?: OrientedLinkClass) => void;

  /** link to edit */
  orientedLink: OrientedLinkClass;

  /** check if is add or edit component*/
  isAddLink: boolean;

  /** id */
  id?: number;
}

/**
 * IState
 */
interface State {
  /**
   * to do
   */
  arrayInput: ArrayInputSelectableClass[];
  /**
   * to do
   */
  arrayOrientedLink: OrientedLinkClass[];
  /** */
  orientedLink: OrientedLinkClass;
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
export default class OrientedLink extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      arrayInput: [],
      orientedLink: cloneOrientedLink(this.props.orientedLink),
      arrayOrientedLink: [],
      //debug: false,
      htmlInput: <div></div>,
      hiddenAlert: true,
      titleAlert: 'Error: label is empty',
      severityAlert: 'error',
    };
  }

  /** update state with promise */
  setStateAsyncOrientedLink = (state: {
    /** new espace coordinate */
    orientedLink: OrientedLinkClass;
  }) => {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  };

  /** update state with promise */
  setStateAsyncArrayInput = (state: {
    /** new line in array input */
    arrayInput: ArrayInputSelectableClass[];
  }) => {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  };

  /** add inputs for a new coordiante */
  addInput = async (id: number) => {
    await this.setStateAsyncArrayInput({
      arrayInput: this.state.arrayInput.concat([
        new ArrayInputSelectableClass(id, createInputsOrientedLink(id, this.defineDataRegion(), this.defineDataPoint())),
      ]),
    });
  };

  private defineDataRegion(): Array<SelectableValue<string>> {
    const { regionCoordinateSpace } = this.props.options;
    const optionRegionNull: SelectableValue<string> = { label: 'None', value: '' };
    const arrayOptionsRegion: Array<SelectableValue<string>> = [];

    arrayOptionsRegion.push(optionRegionNull);

    regionCoordinateSpace.forEach((region) => {
      const optionRegion: SelectableValue<string> = {
        label: region.label,
        value: region.label,
      };
      arrayOptionsRegion.push(optionRegion);
    });
    return arrayOptionsRegion;
  }

  private defineDataPoint(): Array<SelectableValue<string>> {
    const { arrayPoints } = this.props.options;
    const optionPointNull: SelectableValue<string> = { label: 'None', value: '' };
    const arrayOptionsPoint: Array<SelectableValue<string>> = [];

    arrayOptionsPoint.push(optionPointNull);

    arrayPoints.forEach((point) => {
      let valueLabel = point.label || point.name;

      const optionPoint: SelectableValue<string> = {
        label: valueLabel,
        value: valueLabel,
      };
      arrayOptionsPoint.push(optionPoint);
    });

    return arrayOptionsPoint;
  }

  /**
   * Delete array input and value
   * @param {event} event event click delete button
   */
  deleteOwnInput = (): void => {
    const label = this.state.orientedLink.label || this.state.orientedLink.name;
    const del: boolean = confirm('Delete "' + label + '" ?');
    // alert(del);
    if (del) {
      this.props.callBackToParent(this.state.orientedLink.id, undefined);
    }
  };

  /**
   * Use function if value input change
   * @param {string} currentTarget new value of input
   * @param {string} name name of input
   * @param {number} index id of input
   */
  _handleChange(currentTarget: string, name: string, index: number): void {
    let tmp: OrientedLinkClass = this.state.orientedLink;
    tmp = editGoodParameterOrientedLink(name, tmp, currentTarget, {});
    this.setState({
      orientedLink: tmp,
    });
    this.generateInputsOrientedLink();
    if (this.props.isAddLink === false) {
      this.callBack();
    }
  }

  /**
   * Get value of input with state.arrayPointClass
   * @param {number} id id of element
   * @param {string} param name of input
   * @returns {string} value of the array element
   */
  private getGoodValue(name: string): any {
    let value: string;
    let valueSelect: SelectableValue<any>;
    let valueMetric: Metric;

    value = '';
    valueSelect = {};

    if (
      name.startsWith('orientationLink') ||
      name.startsWith('isIncurved') ||
      name.startsWith('pointIn') ||
      name.startsWith('pointOut') ||
      name.startsWith('regionIn') ||
      name.startsWith('regionOut') ||
      name.startsWith('size')
    ) {
      if (name.startsWith('orientationLink')) {
        valueSelect = this.state.orientedLink.orientationLink;
      } else if (name.startsWith('isIncurved')) {
        valueSelect = this.state.orientedLink.isIncurved;
      } else if (name.startsWith('pointIn')) {
        valueSelect = {
          label: this.state.orientedLink.pointIn,
          value: this.state.orientedLink.pointIn,
        };
      } else if (name.startsWith('pointOut')) {
        valueSelect = {
          label: this.state.orientedLink.pointOut,
          value: this.state.orientedLink.pointOut,
        };
      } else if (name.startsWith('regionIn')) {
        valueSelect = {
          label: this.state.orientedLink.regionIn,
          value: this.state.orientedLink.regionIn,
        };
      } else if (name.startsWith('regionOut')) {
        valueSelect = {
          label: this.state.orientedLink.regionOut,
          value: this.state.orientedLink.regionOut,
        };
      } else if (name.startsWith('size')) {
        valueSelect = this.state.orientedLink.size;
      }
      return valueSelect;
    } else if (name.startsWith('mainMetric')) {
      valueMetric = this.state.orientedLink.mainMetric;
      return valueMetric;
    } else {
      if (name.startsWith('label')) {
        value = this.state.orientedLink.label;
      } else if (name.startsWith('pointAX')) {
        value = this.state.orientedLink.pointAPositionX;
      } else if (name.startsWith('pointAY')) {
        value = this.state.orientedLink.pointAPositionY;
      } else if (name.startsWith('pointBX')) {
        value = this.state.orientedLink.pointBPositionX;
      } else if (name.startsWith('pointBY')) {
        value = this.state.orientedLink.pointBPositionY;
      } else if (name.startsWith('colorCoordinateA')) {
        value = this.state.orientedLink.colorCoordinateA;
      } else if (name.startsWith('colorCoordinateB')) {
        value = this.state.orientedLink.colorCoordinateB;
      } else if (name.startsWith('refIdMainMetric')) {
        value = this.state.orientedLink.mainMetric.refId || '';
      } else if (name.startsWith('keyMainMetric')) {
        value = this.state.orientedLink.mainMetric.key || '';
      } else if (name.startsWith('keyValueMainMetric')) {
        value = this.state.orientedLink.mainMetric.keyValue || '';
      } else if (name.startsWith('pointCX')) {
        value = this.state.orientedLink.pointCPositionX;
      } else if (name.startsWith('pointCY')) {
        value = this.state.orientedLink.pointCPositionY;
      }
      return value;
    }
  }

  /** set point in/out to empty in if orientedLink is associate to region in/out
   *  set region in/out to empty in if orientedLink is associate to point in/out
   */
  private updateAssociatePointAndRegion = (orientedLink: OrientedLinkClass, name: string) => {
    if (name.startsWith('pointIn')) {
      orientedLink = editGoodParameterOrientedLink('regionIn', orientedLink, '', {});
    } else if (name.startsWith('regionIn')) {
      orientedLink = editGoodParameterOrientedLink('pointIn', orientedLink, '', {});
    } else if (name.startsWith('pointOut')) {
      orientedLink = editGoodParameterOrientedLink('regionOut', orientedLink, '', {});
    } else if (name.startsWith('regionOut')) {
      orientedLink = editGoodParameterOrientedLink('pointOut', orientedLink, '', {});
    }
  };

  /** create dynamic input */
  generateInputsOrientedLink(): void {
    const { arrayInput } = this.state;
    let finalItem: JSX.Element[] = [];
    let item: JSX.Element = <div></div>;

    for (const line of arrayInput) {
      const mapItems: JSX.Element[] = [];
      line.uneClassInput.forEach((obj) => {
        if (obj.input_type === 'text') {
          item = (
            <InputTextOrientedLink
              key={obj.id}
              label={obj.label}
              name={obj.name}
              placeholder={obj.placeholder || ''}
              required={obj.required}
              value={this.getGoodValue(obj.name)}
              _handleChange={(event: {
                /**
                 * get currentTarget in event element
                 */
                currentTarget: HTMLInputElement;
              }) => {
                this._handleChange(event.currentTarget.value, obj.name, line.id);
              }}
              isIncurved={this.getGoodValue('isIncurved')}
            />
          );
        } else if (obj.input_type === 'select') {
          item = (
            <InputSelectOrientedLink
              key={obj.id}
              _onChange={(value: SelectableValue<string>, name: string, index: number) => {
                const newOrientedLink: OrientedLinkClass = this.state.orientedLink;
                editGoodParameterOrientedLink(name, newOrientedLink, value.value || '', value);
                this.updateAssociatePointAndRegion(newOrientedLink, name);
                this.setState({
                  orientedLink: newOrientedLink,
                });
                this.generateInputsOrientedLink();
                if (this.props.isAddLink === false) {
                  this.callBack();
                }
              }}
              name={obj.name}
              index={line.id}
              data={obj.optionValues}
              defaultValue={this.getGoodValue(obj.name)}
              label={obj.label}
            />
          );
        } else {
          item = <div key={obj.id}></div>;
        }
        mapItems.push(item);
      });
      const newInputList: JSX.Element = (
        <div key={'inputOrientedLink' + line.id.toString()} className="inputCoor" id={'orientedLink' + line.id.toString()}>
          {mapItems}
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

    if (this.state.orientedLink.label === '') {
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
      this.props.callBackToParent(this.state.orientedLink.id, this.state.orientedLink);
      this.setState({
        severityAlert: 'success',
        titleAlert: 'Save',
        hiddenAlert: false,
      });
      if (!this.props.isAddLink) {
        setTimeout(() => {
          this.setState({
            hiddenAlert: true,
          });
        }, waitAlert);
      }
    }
  };

  /** update data for manageLink and textObject */
  private callBackToOther = (followLink?: string, hoveringTooltipLink?: string, hoveringTooltipText?: string, textObj?: TextObject): void => {
    const oldCoor: OrientedLinkClass = this.state.orientedLink;
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
      orientedLink: oldCoor,
    });
    if (this.props.isAddLink === false) {
      this.callBack();
    }
  };

  /** update lower limit */
  private callBackManageLowerLimit = (coordinate: CoordinateSpaceClass, id?: number) => {
    const newValue: OrientedLinkClass = this.state.orientedLink;
    newValue.colorMode = coordinate.colorMode;
    newValue.traceBorder = coordinate.traceBorder;
    newValue.traceBack = coordinate.traceBack;
    this.setState({
      orientedLink: newValue,
    });
    if (this.props.isAddLink === false) {
      this.callBack();
    }
  };

  /** save lower limit data */
  private callBackLowerLimit = (lowerLimit: LowerLimitClass[], id?: number) => {
    const newValue: OrientedLinkClass = this.state.orientedLink;
    newValue.lowerLimit = lowerLimit;
    this.setState({
      orientedLink: newValue,
    });
    if (this.props.isAddLink === false) {
      this.callBack();
    }
  };

  /** save data of mainMetric */
  private callBackMainMetric = (mainMetric: Metric, id?: number): void => {
    const newValue: OrientedLinkClass = this.state.orientedLink;
    newValue.mainMetric = mainMetric;
    this.setState({
      orientedLink: newValue,
    });
    if (this.props.isAddLink === false) {
      this.callBack();
    }
  };

  /** save data of mainMetric */
  private callBackMainMetricB = (mainMetricB: Metric, id?: number): void => {
    const newValue: OrientedLinkClass = this.state.orientedLink;
    newValue.mainMetricB = mainMetricB;
    this.setState({
      orientedLink: newValue,
    });
    if (this.props.isAddLink === false) {
      this.callBack();
    }
  };

  /** save data of zIndex */
  private callBackZIndex(zIndexUpdated: number, id: number) {
    const newValue: OrientedLinkClass = this.state.orientedLink;
    newValue.zIndex = zIndexUpdated;
    this.setState({
      orientedLink: newValue,
    });
    if (this.props.isAddLink === false) {
      this.callBack();
    }
  }

  /**
   * fill input whith data
   * this function is called by mount and update event
   */
  getDataInInput = async () => {
    await this.addInput(this.props.orientedLink.id);
    this.generateInputsOrientedLink();
  };

  /** call function in load component */
  componentDidMount = () => {
    this.getDataInInput();
  };

  /** function is call when props is update. Update state */
  componentDidUpdate = async (prevProps: Props, prevState: State) => {
    if (prevProps.orientedLink.id !== this.props.orientedLink.id) {
      await this.setStateAsyncOrientedLink({
        orientedLink: cloneOrientedLink(this.props.orientedLink),
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
            idCoordinate={this.state.orientedLink.id}
            mainMetric={this.state.orientedLink.mainMetric}
            mainMetricB={this.state.orientedLink.mainMetricB}
            callBackToParent={this.callBackMainMetric}
            callBackToParentMainMetricB={this.callBackMainMetricB}
            isLink={true}
          />
        </div>
        <div>
          <ManageAuxiliaryQuery
            options={this.props.options}
            onOptionsChange={this.props.onOptionsChange}
            data={this.props.data}
            idCoordinate={this.state.orientedLink.id}
            metrics={this.state.orientedLink.metrics}
            isLink={true}
          />
        </div>
        <div>
          <ParametresGeneriques
            options={this.props.options}
            onOptionsChange={this.props.onOptionsChange}
            data={this.props.data}
            coordinateSpace={this.state.orientedLink}
            callBackToParent={this.callBackToOther}
          />
        </div>
        <div>
          <ManageLowerLimit
            options={this.props.options}
            onOptionsChange={this.props.onOptionsChange}
            data={this.props.data}
            coordinate={this.state.orientedLink}
            callBack={this.callBackManageLowerLimit}
            lowerLimitCallBack={this.callBackLowerLimit}
            isLink={true}
          />
        </div>
        <div>
          <PositionParameter
            options={this.props.options}
            onOptionsChange={this.props.onOptionsChange}
            data={this.props.data}
            callBackToParentZIndex={this.callBackZIndex.bind(this)}
            isPoint={false}
            isLink={true}
            isRegion={false}
            id={this.state.orientedLink.id}
          />
        </div>
        <div>{this.state.htmlInput}</div>
        <div style={{ textAlign: 'center' }} className="buttonSave">
          {this.props.isAddLink && (
            <Button style={{ marginRight: '1%' }} onClick={() => this.callBack()}>
              Save
            </Button>
          )}
          {!this.props.isAddLink && (
            <Button onClick={this.deleteOwnInput} variant="danger">
              Delete
            </Button>
          )}
        </div>
      </div>
    );
  }
}
