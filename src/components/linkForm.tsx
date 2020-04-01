import React from 'react';
import InputTextLink from 'Functions/Input/inputTextLink';
import InputButtonField from 'Functions/Input/inputButton';
import { InputSelectableClass } from 'Models/InputSelectableClass';
import { ArrayInputSelectableClass } from 'Models/ArrayInputSelectableClass';
import InputSelectLink from 'Functions/Input/inputSelectLink';
import { SelectableValue } from '@grafana/data';
import InputSeriesColorPickerLink from '../Functions/Input/inputSeriesColorPickerLink';
import { Button } from '@grafana/ui';
import { LinkClass } from 'Models/LinkClass';
import { createInputsLink } from 'Functions/CreateInput/createInputsLink';
import { editGoodParameterLink } from 'Functions/EditParameter/editGoodParameterLink';
import { PointClass } from 'Models/PointClass';
import { RegionClass } from 'Models/RegionClass';
import { TextObject } from 'Models/TextObjectClass';
import { LinkURLClass } from 'Models/LinkURLClass';
import { PositionParameterClass } from 'Models/PositionParameterClass';

/**
 * IProps
 */
interface Props {
  /**
   * function for return arrayInput for Parent
   */
  callBackFromParent: (dataFromChild: LinkClass[]) => void;

  /**
   * old data
   */
  oldArrayLinkClass: LinkClass[];

  /**
   * Tableau des Points existants créés dans l'onglet 'Point'
   */
  arrayPointClass: PointClass[];

  /**
   * Tableau des Régions existantes créées dans l'onglet 'Espace de coordonnées'
   */
  regionCoordinateSpace: RegionClass[];
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
  arrayLinkClass: LinkClass[];

  /**
   * to do
   */
  index: number;

  /**
   * to do
   */
  debug: boolean;

  openCollapseLink: boolean;
}

/**
 * IndexParametrage
 */
export default class LinkForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      arrayInput: [],
      arrayLinkClass: [],
      debug: false,
      index: 1,
      openCollapseLink: false,
    };
  }

  /**
   * to do
   */
  private callBack = () => {
    this.props.callBackFromParent(this.state.arrayLinkClass);
  };

  /**
   * to do
   */
  private loadCoorParent = () => {
    const { oldArrayLinkClass } = this.props;

    if (oldArrayLinkClass.length === 0 || this.state.debug === true) {
      if (!this.state.debug) {
        this.setState((prevState: State) => ({
          debug: !prevState.debug,
        }));
      }
      return;
    }

    for (const element of oldArrayLinkClass) {
      setTimeout(() => {
        this.addInput(
          element.id,
          element.defineHowToGetCoordonate,
          element.orientationLink,
          element.pointAPositionX,
          element.pointAPositionY,
          element.colorCoordinateA,
          element.pointBPositionX,
          element.pointBPositionY,
          element.colorCoordinateB,
          element.pointIn,
          element.pointOut,
          element.regionIn,
          element.colorRegionIn,
          element.regionOut,
          element.colorRegionOut,
          element.labelLinkA,
          element.positionXLabelA,
          element.positionYLabelA,
          element.labelLinkB,
          element.positionXLabelB,
          element.positionYLabelB
        );
      }, 100);
    }
    this.setState((prevState: State) => ({
      debug: !prevState.debug,
    }));
  };

  private defineDataPoint(): Array<SelectableValue<PointClass>> {
    const { arrayPointClass } = this.props;
    const optionPointNull: SelectableValue<PointClass> = { label: 'No selected point' };
    const arrayOptionsPoint: Array<SelectableValue<PointClass>> = [];

    arrayOptionsPoint.push(optionPointNull);

    arrayPointClass.forEach(point => {
      const optionPoint: SelectableValue<PointClass> = {
        label: point.name,
        value: point,
      };
      arrayOptionsPoint.push(optionPoint);
    });

    return arrayOptionsPoint;
  }

  private defineDataRegion(): Array<SelectableValue<RegionClass>> {
    const { regionCoordinateSpace } = this.props;
    const optionRegionNull: SelectableValue<RegionClass> = { label: 'No selected region' };
    const arrayOptionsRegion: Array<SelectableValue<RegionClass>> = [];

    arrayOptionsRegion.push(optionRegionNull);

    regionCoordinateSpace.forEach(region => {
      const optionRegion: SelectableValue<RegionClass> = {
        label: region.label,
        value: region,
      };
      arrayOptionsRegion.push(optionRegion);
    });

    return arrayOptionsRegion;
  }

  /**
   * add inputs for a new coordiante
   */
  private addInput = (
    id?: number,
    defineHowToGetCoordonate?: SelectableValue<string>,
    orientationLink?: SelectableValue<string>,
    pointAPositionX?: string,
    pointAPositionY?: string,
    colorCoordinateA?: string,
    pointBPositionX?: string,
    pointBPositionY?: string,
    colorCoordinateB?: string,
    pointIn?: SelectableValue<PointClass>,
    pointOut?: SelectableValue<PointClass>,
    regionIn?: SelectableValue<RegionClass>,
    colorRegionIn?: string,
    regionOut?: SelectableValue<RegionClass>,
    colorRegionOut?: string,
    labelLinkA?: string,
    positionXLabelA?: string,
    positionYLabelA?: string,
    labelLinkB?: string,
    positionXLabelB?: string,
    positionYLabelB?: string
  ) => {
    const num: number = id || this.state.index;
    const initTextObject: TextObject = new TextObject(
      '',
      false,
      '',
      '',
      '',
      false,
      {
        legendElement: '',
        numericFormatElement: '',
        unit: '',
        displayObjectInText: false,
        addColorTextElement: false,
        colorTextElement: 'white',
        addColorBackElement: false,
        colorBackElement: 'black',
      },
      {
        legendElement: '',
        numericFormatElement: '',
        unit: '',
        displayObjectInText: false,
        addColorTextElement: false,
        colorTextElement: 'white',
        addColorBackElement: false,
        colorBackElement: 'black',
      }
    );
    const parametrageMetric: LinkURLClass = new LinkURLClass('', '', '');
    const finalArray: InputSelectableClass[] = createInputsLink(num, this.defineDataPoint(), this.defineDataRegion());
    const positionParameter: PositionParameterClass = new PositionParameterClass('0', '0', '0', '0', {}, {});

    this.setState((prevState: State) => ({
      arrayLinkClass: prevState.arrayLinkClass.concat(
        new LinkClass(
          num,
          parametrageMetric,
          '',
          [],
          '',
          initTextObject,
          { key: '', unit: '', format: '', keyValue: '', manageValue: 'avg' },
          [],
          false,
          false,
          false,
          positionParameter,
          'link' + num.toString(),
          defineHowToGetCoordonate || {},
          orientationLink || { label: 'Unidirectional', value: 'AB' },
          pointAPositionX || '0',
          pointAPositionY || '0',
          colorCoordinateA || '#5794F2',
          pointBPositionX || '0',
          pointBPositionY || '0',
          colorCoordinateB || '#E54658',
          pointIn || {},
          pointOut || {},
          regionIn || {},
          colorRegionIn || '#5794F2',
          regionOut || {},
          colorRegionOut || '#E54658',
          labelLinkA || '',
          positionXLabelA || '0',
          positionYLabelA || '0',
          labelLinkB || '',
          positionXLabelB || '0',
          positionYLabelB || '0'
        )
      ),

      arrayInput: prevState.arrayInput.concat([new ArrayInputSelectableClass(num, finalArray)]),
      index: (id || this.state.index) + 1,
    }));
  };

  /**
   * dsgs
   */
  private addTestInput = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.addInput(this.state.index);
  };

  /**
   * Delete array coordinate in state.arrayLinkClass
   * @param {number} id id of object element to delete
   */
  private deleteArrayLinkCLass(id: number): void {
    const newLinkClass: LinkClass[] = this.state.arrayLinkClass.filter((value: LinkClass) => value.id !== id);
    this.setState({
      arrayLinkClass: newLinkClass,
    });
    setTimeout(() => {
      this.callBack();
    }, 100);
  }

  /**
   * Delete array input and value
   * @param {event} event event click delete button
   */
  private deleteOwnInput = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const { arrayInput } = this.state;
    const id = event.currentTarget.id;

    for (const obj of arrayInput) {
      for (const line of obj.uneClassInput) {
        if (line.input_type === 'button') {
          if (line.id === id) {
            const updateArrayInput: ArrayInputSelectableClass[] = arrayInput.filter((value: ArrayInputSelectableClass) => value.id !== obj.id);
            this.setState({
              arrayInput: updateArrayInput,
            });
            this.deleteArrayLinkCLass(parseInt(id, 10));
            return;
          }
        }
      }
    }
  };

  /**
   * Use function if value input change
   * @param {string} currentTarget new value of input
   * @param {string} name name of input
   * @param {number} index id of input
   */
  private _handleChange(currentTarget: string, name: string, index: number) {
    let i: number;

    i = 0;
    const copyOfarrayLinkClass: LinkClass[] = this.state.arrayLinkClass.slice();
    for (const line of copyOfarrayLinkClass) {
      if (line.id === index) {
        copyOfarrayLinkClass[i] = editGoodParameterLink(name, copyOfarrayLinkClass[i], currentTarget, {});
        break;
      }
      i++;
    }
    this.setState({
      arrayLinkClass: copyOfarrayLinkClass,
    });
    this.callBack();
  }

  /**
   * Get value of input with state.arrayLinkClass
   * @param {number} id id of element
   * @param {string} param name of input
   * @returns {string} value of the array element
   */
  private getGoodValue(id: number, name: string): any {
    let value: string;
    let valueSelect: SelectableValue<any>;
    let idx = -1;
    let index = 0;

    value = '';
    valueSelect = {};
    for (const line of this.state.arrayLinkClass) {
      if (line.id === id) {
        idx = index;
        break;
      }
      ++index;
    }
    if (idx === -1) {
      return value;
    }

    if (
      name.startsWith('getCoordinate') ||
      name.startsWith('pointIn') ||
      name.startsWith('pointOut') ||
      name.startsWith('regionIn') ||
      name.startsWith('regionOut') ||
      name.startsWith('orientationLink')
    ) {
      if (name.startsWith('getCoordinate')) {
        valueSelect = this.state.arrayLinkClass[idx].defineHowToGetCoordonate;
      } else if (name.startsWith('pointIn')) {
        valueSelect = this.state.arrayLinkClass[idx].pointIn;
      } else if (name.startsWith('pointOut')) {
        valueSelect = this.state.arrayLinkClass[idx].pointOut;
      } else if (name.startsWith('regionIn')) {
        valueSelect = this.state.arrayLinkClass[idx].regionIn;
      } else if (name.startsWith('regionOut')) {
        valueSelect = this.state.arrayLinkClass[idx].regionOut;
      } else if (name.startsWith('orientationLink')) {
        valueSelect = this.state.arrayLinkClass[idx].orientationLink;
      }

      return valueSelect;
    } else {
      if (name.startsWith('pointAX')) {
        value = this.state.arrayLinkClass[idx].pointAPositionX;
      } else if (name.startsWith('pointAY')) {
        value = this.state.arrayLinkClass[idx].pointAPositionY;
      } else if (name.startsWith('pointBX')) {
        value = this.state.arrayLinkClass[idx].pointBPositionX;
      } else if (name.startsWith('pointBY')) {
        value = this.state.arrayLinkClass[idx].pointBPositionY;
      } else if (name.startsWith('colorCoordinateA')) {
        value = this.state.arrayLinkClass[idx].colorCoordinateA;
      } else if (name.startsWith('colorCoordinateB')) {
        value = this.state.arrayLinkClass[idx].colorCoordinateB;
      } else if (name.startsWith('colorRegionIn')) {
        value = this.state.arrayLinkClass[idx].colorRegionIn;
      } else if (name.startsWith('colorRegionOut')) {
        value = this.state.arrayLinkClass[idx].colorRegionOut;
      } else if (name.startsWith('labelLinkA')) {
        value = this.state.arrayLinkClass[idx].labelLinkA;
      } else if (name.startsWith('labelLinkB')) {
        value = this.state.arrayLinkClass[idx].labelLinkB;
      } else if (name.startsWith('positionXLabelLinkA')) {
        value = this.state.arrayLinkClass[idx].positionXLabelA;
      } else if (name.startsWith('positionYLabelLinkA')) {
        value = this.state.arrayLinkClass[idx].positionYLabelA;
      } else if (name.startsWith('positionXLabelLinkB')) {
        value = this.state.arrayLinkClass[idx].positionXLabelB;
      } else if (name.startsWith('positionYLabelLinkB')) {
        value = this.state.arrayLinkClass[idx].positionYLabelB;
      }

      return value;
    }
  }

  /**
   * create dynamic input
   */
  private displayListInputsLink(): JSX.Element {
    const { arrayInput } = this.state;
    let finalItem: JSX.Element[] = [];
    for (const line of arrayInput) {
      const mapItems = line.uneClassInput.map((obj: InputSelectableClass) =>
        obj.input_type === 'text' ? (
          <InputTextLink
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
            defineHowToGetCoordinate={this.getGoodValue(line.id, 'getCoordinate').value}
          />
        ) : obj.input_type === 'select' ? (
          <InputSelectLink
            key={obj.id}
            _onChange={(value: SelectableValue<string>, name: string, index: number) => {
              let i: number;
              i = 0;
              const copyOfarrayLinkClass: LinkClass[] = this.state.arrayLinkClass.slice();

              for (const line of copyOfarrayLinkClass) {
                if (line.id === index) {
                  copyOfarrayLinkClass[i] = editGoodParameterLink(name, copyOfarrayLinkClass[i], value.value || '', value || {});
                  break;
                }
                i++;
              }

              this.setState({
                arrayLinkClass: copyOfarrayLinkClass,
              });

              this.callBack();
            }}
            name={obj.name}
            index={line.id}
            data={obj.optionValues}
            defaultValue={this.getGoodValue(line.id, obj.name)}
            defineHowToGetCoordinate={this.getGoodValue(line.id, 'getCoordinate').value}
            label={obj.label}
            orientationLink={this.getGoodValue(line.id, 'orientationLink').value}
          />
        ) : obj.input_type === 'color' ? (
          <InputSeriesColorPickerLink
            key={obj.id}
            keyInt={parseInt(obj.id, 10)}
            color={this.getGoodValue(line.id, obj.name)}
            text={obj.label}
            width={10}
            _onChange={(keyInt: number, newColor: string) => {
              let i: number;
              i = 0;
              const copyOfArrayLien: LinkClass[] = this.state.arrayLinkClass.slice();
              for (const line of copyOfArrayLien) {
                if (line.id === keyInt) {
                  copyOfArrayLien[i] = editGoodParameterLink(obj.name, copyOfArrayLien[i], newColor, {});
                  break;
                }
                i++;
              }

              this.setState({
                arrayLinkClass: copyOfArrayLien,
              });

              this.callBack();

              obj.setDefaultValueColor(newColor);
            }}
            defineHowToGetCoordinate={this.getGoodValue(line.id, 'getCoordinate').value}
            name={obj.name}
          />
        ) : (
          <InputButtonField
            key={obj.id}
            label={obj.label}
            value={obj.value || ''}
            name={obj.name}
            required={obj.required}
            _handleChange={this.deleteOwnInput}
            id={obj.id}
            withLabel={true}
          />
        )
      );

      const divKey: string = 'inputCoor' + line.id;
      const newInput: JSX.Element = (
        <div key={divKey} className="inputCoor">
          {mapItems}
        </div>
      );
      finalItem = finalItem.concat(newInput);
    }

    return <ul>{finalItem}</ul>;
  }

  /**
   * render()
   */
  render() {
    this.loadCoorParent();

    return (
      <div>
        {this.displayListInputsLink()}
        <div className="buttonAddCoor">
          <Button onClick={this.addTestInput}>Add Link</Button>
        </div>
      </div>
    );
  }
}
