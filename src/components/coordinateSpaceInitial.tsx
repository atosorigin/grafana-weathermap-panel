import React from 'react';
import { SimpleOptions, CoordinateSpaceInitial } from 'types';

import { FormField, Switch, FormLabel } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';

import { editGoodParameter } from 'Functions/EditParameter/editGoodParameter';

interface Props extends PanelEditorProps<SimpleOptions> {}

interface State {
  /** value to initial coordinate space */
  arrayCoor: CoordinateSpaceInitial;
}

/**
 * initialize space for space coordinate
 */
class CoordinateSpaceInitialClass extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      arrayCoor: this.props.options.coordinateSpaceInitial,
    };
  }

  /**
   * Call parent to send arrayCoor data
   */
  callBack = () => {
    this.props.onOptionsChange({
      ...this.props.options,
      coordinateSpaceInitial: this.state.arrayCoor,
    });
  };

  /**
   * Use function if value input change
   * @param {string} currentTarget new value of input
   * @param {string} name name of input
   */
  _handleChange(currentTarget: string, name: string) {
    this.props.options.updateOnlyInitialSpace = true;
    this.setState(prevState => ({
      arrayCoor: editGoodParameter(
        name,
        prevState.arrayCoor,
        currentTarget,
        parseInt(this.props.options.baseMap.width, 10),
        parseInt(this.props.options.baseMap.height, 10)
      ),
    }));
    this.callBack();
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
      value = this.state.arrayCoor.coordinate.xMin;
    } else if (param.startsWith('positionXMax')) {
      value = this.state.arrayCoor.coordinate.xMax;
    } else if (param.startsWith('positionYMin')) {
      value = this.state.arrayCoor.coordinate.yMin;
    } else if (param.startsWith('positionYMax')) {
      value = this.state.arrayCoor.coordinate.yMax;
    }
    return value;
  }

  /** change value for switch */
  onChangeSwitchDisplayInitialSpace = () => {
    const newInitialSpace: CoordinateSpaceInitial = this.state.arrayCoor;
    newInitialSpace.displayArea = !newInitialSpace.displayArea;
    this.setState({
      arrayCoor: newInitialSpace,
    });
    this.callBack();
  };

  // onChangeSwitchDefaultInitialSpace = () => {
  //   const newInitialSpace: CoordinateSpaceInitial = this.state.arrayCoor;
  //   newInitialSpace.defaultReferentiel = !newInitialSpace.defaultReferentiel;
  //   this.setState({
  //     arrayCoor: newInitialSpace,
  //   });
  //   if (newInitialSpace.defaultReferentiel) {
  //     this.props.options.coordinateSpaceInitial.coordinate = {
  //       xMin: '0',
  //       xMax: '100',
  //       yMin: '0',
  //       yMax: '100',
  //     };
  //   } else {
  //     this.props.options.coordinateSpaceInitial.coordinate = {
  //       xMin: '-100',
  //       xMax: '100',
  //       yMin: '-100',
  //       yMax: '100',
  //     };
  //   }
  //   this.callBack();
  // };

  // displayValueReferentiel = (): string => {
  //   let result = '';
  //   if (this.props.options.coordinateSpaceInitial.defaultReferentiel) {
  //     result = '(0 : 100)';
  //   } else {
  //     result = '(-100 : 100)';
  //   }
  //   return result;
  // };

  componentDidMount = () => {
    // console.log('initialSpace');
    // this.props.options.coordinateSpaceInitial.coordinate.xMax = this.props.options.baseMap.width;
    // this.props.options.coordinateSpaceInitial.coordinate.yMax = this.props.options.baseMap.height;
  };

  componentDidUpdate = () => {
    // if (this.props.options.)
    // console.log('update initialSPace');
  };

  /**
   * HTML render
   */
  render() {
    return (
      <div className="coordinateSpaceInitial">
        <div style={{ display: 'flex' }}>
          <FormLabel width={15}>Display space initial</FormLabel>
          <Switch label="" checked={this.state.arrayCoor.displayArea} onChange={this.onChangeSwitchDisplayInitialSpace} />
        </div>
        {/* <div style={{ display: 'flex' }}>
          <FormLabel width={15}>Default referentiel {this.displayValueReferentiel()}</FormLabel>
          <Switch label="" checked={this.state.arrayCoor.defaultReferentiel} onChange={this.onChangeSwitchDefaultInitialSpace} />
        </div> */}
        <FormField
          label="X min"
          labelWidth={15}
          inputWidth={20}
          type="text"
          required={true}
          name="xMin"
          value={this.state.arrayCoor.coordinate.xMin}
          onChange={(event: {
            /**
             * get currentTarget in event element
             */
            currentTarget: HTMLInputElement;
          }) => this._handleChange(event.currentTarget.value, 'positionXMin')}
          placeholder={'X minimum'}
        />

        <FormField
          label="X max"
          labelWidth={15}
          inputWidth={20}
          type="text"
          required={true}
          name="xMax"
          value={this.state.arrayCoor.coordinate.xMax}
          onChange={(event: {
            /**
             * get currentTarget in event element
             */
            currentTarget: HTMLInputElement;
          }) => this._handleChange(event.currentTarget.value, 'positionXMax')}
          placeholder={'X max'}
        />

        <FormField
          label="Y min"
          labelWidth={15}
          inputWidth={20}
          type="text"
          required={true}
          name="yMin"
          value={this.state.arrayCoor.coordinate.yMin}
          onChange={(event: {
            /**
             * get currentTarget in event element
             */
            currentTarget: HTMLInputElement;
          }) => this._handleChange(event.currentTarget.value, 'positionYMin')}
          placeholder={'Y minimum'}
        />

        <FormField
          label="Y max"
          labelWidth={15}
          inputWidth={20}
          type="text"
          required={true}
          name="yMax"
          value={this.state.arrayCoor.coordinate.yMax}
          onChange={(event: {
            /**
             * get currentTarget in event element
             */
            currentTarget: HTMLInputElement;
          }) => this._handleChange(event.currentTarget.value, 'positionYMax')}
          placeholder={'Y max'}
        />
      </div>
    );
  }
}

export default CoordinateSpaceInitialClass;
