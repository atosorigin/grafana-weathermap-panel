import React from 'react';

import { SimpleOptions } from 'types';

import { PanelEditorProps, SelectableValue } from '@grafana/data';
import { Select, FormLabel } from '@grafana/ui';

import { RegionClass } from 'Models/RegionClass';

import CoordinateSpace from './coordinateSpace';

interface Props extends PanelEditorProps<SimpleOptions> {}

interface State {
  /** array for select value with the coordianates space */
  selectCoordinateSpace: Array<SelectableValue<RegionClass>>;
  /** default select value */
  selectCoordinateSpaceDefault: SelectableValue<RegionClass>;
}

interface SelectRegion {
  value: RegionClass;
  /** label select */
  label: string;
}

/**
 * manage coordinate space for simpleEditor
 */
class EditCoordinateSpace extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectCoordinateSpace: [],
      selectCoordinateSpaceDefault: [],
    };
  }

  /**
   * save data in parent
   */
  callBack = (id: number, newCoordinate?: RegionClass): void => {
    if (newCoordinate) {
      const oldData: RegionClass[] = this.props.options.regionCoordinateSpace.slice();
      let i = 0;
      for (const line of oldData) {
        if (line.id === id) {
          oldData[i] = newCoordinate;
          break;
        }
        ++i;
      }
      this.props.onOptionsChange({
        ...this.props.options,
        regionCoordinateSpace: oldData,
      });
    } else {
      let find = false;
      const oldData: RegionClass[] = this.props.options.regionCoordinateSpace.slice();
      let i = 0;
      for (const line of oldData) {
        if (line.id === id) {
          find = true;
          break;
        }
        ++i;
      }
      if (find) {
        oldData.splice(i, 1);
        this.props.onOptionsChange({
          ...this.props.options,
          regionCoordinateSpace: oldData,
        });
        this.fillSelectRegionSpace();
      }
    }
  };

  /** change select value to edit */
  onChangeSelectCoordinate = (value: SelectableValue<RegionClass>) => {
    this.setState({
      selectCoordinateSpaceDefault: value,
    });
  };

  /** fill select whith array region object */
  fillSelectRegionSpace = () => {
    let valueExist = false;
    const valueSelect: SelectRegion[] = [];
    const stockTmpCoordinatesSpace: RegionClass[] = this.props.options.regionCoordinateSpace.slice();

    for (const line of stockTmpCoordinatesSpace) {
      valueSelect.push({ value: line, label: line.label });
    }
    if (this.state.selectCoordinateSpaceDefault) {
      for (const line of stockTmpCoordinatesSpace) {
        if (line.id === this.state.selectCoordinateSpaceDefault.value?.id) {
          valueExist = true;
          break;
        }
      }
    }
    // dev
    // this.setState(prevState => ({
    //   selectCoordinateSpace: valueSelect,
    //   selectCoordinateSpaceDefault: valueExist
    //     ? prevState.selectCoordinateSpaceDefault
    //     : valueSelect.length > 0
    //     ? valueSelect[0]
    //     : prevState.selectCoordinateSpaceDefault,
    // }));
    this.setState(prevState => ({
      selectCoordinateSpace: valueSelect,
      selectCoordinateSpaceDefault: valueExist ? prevState.selectCoordinateSpaceDefault : valueSelect.length > 0 ? valueSelect[0] : [],
    }));
  };

  /** fill data for select */
  componentDidMount = () => {
    this.fillSelectRegionSpace();
  };

  /** update state if value props change */
  componentDidUpdate = (prevProps: Props) => {
    if (prevProps.options.regionCoordinateSpace !== this.props.options.regionCoordinateSpace) {
      this.fillSelectRegionSpace();
    }
  };

  /** return html */
  render() {
    return (
      <div>
        <div style={{ display: 'flex' }}>
          <FormLabel width={15}>Select Region</FormLabel>
          <Select
            onChange={value => this.onChangeSelectCoordinate(value)}
            allowCustomValue={false}
            options={this.state.selectCoordinateSpace}
            width={10}
            value={this.state.selectCoordinateSpaceDefault}
          />
        </div>
        <br />
        <div>
          {this.state.selectCoordinateSpaceDefault.value ? (
            <CoordinateSpace
              options={this.props.options}
              onOptionsChange={this.props.onOptionsChange}
              data={this.props.data}
              coordinate={this.state.selectCoordinateSpaceDefault.value} // selectCoordinateSpaceDefault.value}
              callBackToParent={this.callBack}
              isAddCoordinate={false}
            />
          ) : (
            <p
              style={{
                textAlign: 'center',
                fontSize: '20px',
                marginTop: '50px',
              }}
            >
              Data not set
            </p>
          )}
        </div>
      </div>
    );
  }
}
export default EditCoordinateSpace;
