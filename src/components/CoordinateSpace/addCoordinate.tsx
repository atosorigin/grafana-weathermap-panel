import React from 'react';

import { SimpleOptions } from 'types';

import { PanelEditorProps } from '@grafana/data';

import { RegionClass } from 'Models/RegionClass';

import { initRegionCoordinateSpace } from 'Functions/initRegionCoordinateSpace';

import CoordinateSpace from 'components/CoordinateSpace/coordinateSpace';

interface Props extends PanelEditorProps<SimpleOptions> {
  /** return to edit mode after save */
  returnEditMode?: () => void;
}

interface State {
  /** data for new CoordinateSpaceExtendClass */
  coordinate?: RegionClass;
}

/** Add new coordinate space */
class AddCoordinate extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      coordinate: undefined,
    };
  }

  /** search new id for espacecoordinneesclass */
  searchNewId = (allCoordinateSpace: RegionClass[]): number => {
    let id = -1;

    for (const line of allCoordinateSpace) {
      if (line.id > id) {
        id = line.id;
      }
    }
    id += 1;
    return id;
  };

  /** call init class for coordinate state */
  componentDidMount = (): void => {
    this.setState({
      coordinate: initRegionCoordinateSpace(this.props.options.indexRegion),
    });
  };

  /** update onOptionsChange */
  setAsyncOption = (newIdx: number) => {
    return Promise.resolve('Success').then(() => {
      this.props.onOptionsChange({
        ...this.props.options,
        indexRegion: newIdx,
      });
    });
  };

  /** send data for parent */
  callBack = async (id: number, newCoordinate?: RegionClass) => {
    if (newCoordinate) {
      const allCoordinateSpace: RegionClass[] = this.props.options.regionCoordinateSpace.slice();
      await this.setAsyncOption(newCoordinate.id);
      this.props.onOptionsChange({
        ...this.props.options,
        regionCoordinateSpace: allCoordinateSpace.concat(newCoordinate),
      });
      if (this.props.returnEditMode) {
        this.props.returnEditMode();
      }
      // this.componentDidMount();
    }
  };

  /** result */
  render() {
    return (
      <div>
        {this.state.coordinate && (
          <CoordinateSpace
            options={this.props.options}
            onOptionsChange={this.props.onOptionsChange}
            data={this.props.data}
            coordinate={this.state.coordinate}
            callBackToParent={this.callBack}
            isAddCoordinate={true}
          />
        )}
      </div>
    );
  }
}
export default AddCoordinate;
