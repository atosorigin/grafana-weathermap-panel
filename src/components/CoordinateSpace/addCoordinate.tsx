import React from 'react';

import { SimpleOptions } from 'types';

import { PanelEditorProps } from '@grafana/data';

import { RegionClass } from 'Models/RegionClass';

import { initRegionCoordinateSpace } from 'Functions/initRegionCoordinateSpace';

import { initPoint } from 'Functions/initPoint';

import CoordinateSpace from 'components/CoordinateSpace/coordinateSpace';
import { PointClass } from 'Models/PointClass';
import Point from './point/point';

interface Props extends PanelEditorProps<SimpleOptions> {
  /** return to edit mode after save */
  returnEditMode?: () => void;
  isRegion: boolean;
}

interface State {
  /** data for new CoordinateSpaceExtendClass */
  coordinate?: RegionClass;
  point?: PointClass;
}

/** Add new coordinate space */
class AddCoordinate extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      coordinate: undefined,
      point: undefined,
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

  private defineIdPoint = (): number => {
    let id = 1;
    if (this.props.options.arrayPoints.length === 0) {
      return id;
    } else {
      id = this.props.options.arrayPoints[this.props.options.arrayPoints.length - 1].id + 1;
      return id;
    }
  };

  /** call init class for coordinate state */
  componentDidMount = (): void => {
    if (this.props.isRegion) {
      this.setState({
        coordinate: initRegionCoordinateSpace(this.props.options.indexRegion),
      });
    } else {
      let id = this.defineIdPoint();
      this.setState({
        point: initPoint(id),
      });
    }
  };

  /** update onOptionsChange */
  setAsyncOption = (newIdx: number) => {
    return Promise.resolve('Success').then(() => {
      if (this.props.isRegion) {
        this.props.onOptionsChange({
          ...this.props.options,
          indexRegion: newIdx,
        });
      } else {
        this.props.onOptionsChange({
          ...this.props.options,
          indexPoint: newIdx,
        });
      }
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

  /** send data for parent */
  callBackPoint = async (id: number, newCoordinate?: PointClass) => {
    if (newCoordinate) {
      const allCoordinateSpace: PointClass[] = this.props.options.arrayPoints.slice();
      await this.setAsyncOption(newCoordinate.id);
      this.props.onOptionsChange({
        ...this.props.options,
        arrayPoints: allCoordinateSpace.concat(newCoordinate),
      });
      if (this.props.returnEditMode) {
        this.props.returnEditMode();
      }
    }
  };

  /** result */
  render() {
    if (this.props.isRegion) {
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
    } else {
      return (
        <div>
          {this.state.point && (
            <Point
              options={this.props.options}
              onOptionsChange={this.props.onOptionsChange}
              data={this.props.data}
              point={this.state.point}
              callBackToParent={this.callBackPoint}
              isAddPoint={true}
            />
          )}
        </div>
      );
    }
  }
}
export default AddCoordinate;
