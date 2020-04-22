import React from 'react';

import { SimpleOptions } from 'types';
import { PanelEditorProps } from '@grafana/data';

import { RegionClass } from 'Models/RegionClass';
import { PointClass } from 'Models/PointClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';

import { initRegionCoordinateSpace } from 'Functions/initRegionCoordinateSpace';
import { initPoint } from 'Functions/initPoint';
import { initOrientedLink } from 'Functions/initOrientedLink';

import CoordinateSpace from 'components/CoordinateSpace/coordinateSpace';
import Point from './point/point';
import OrientedLink from './orientedLink/orientedLink';

interface Props extends PanelEditorProps<SimpleOptions> {
  /** return to edit mode after save */
  returnEditMode?: () => void;
  isRegion: boolean;
  isPoint: boolean;
  isLink: boolean;
}

interface State {
  /** data for new CoordinateSpaceExtendClass */
  coordinate?: RegionClass;
  point?: PointClass;
  orientedLink?: OrientedLinkClass;
}

/** Add new coordinate space */
class AddCoordinate extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      coordinate: undefined,
      point: undefined,
      orientedLink: undefined,
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

  private defineIdOrientedLink = (): number => {
    let id = 1;
    if (this.props.options.arrayOrientedLinks.length === 0) {
      return id;
    } else {
      id = this.props.options.arrayOrientedLinks[this.props.options.arrayOrientedLinks.length - 1].id + 1;
      return id;
    }
  };

  lastId = () => {
    const allRegion = this.props.options.regionCoordinateSpace;
    let id = 0;
    for (const line of allRegion) {
      if (line.id > id) {
        id = line.id;
      }
    }
    return id;
  };

  /** call init class for coordinate state */
  componentDidMount = (): void => {
    if (this.props.isRegion) {
      this.setState({
        coordinate: initRegionCoordinateSpace(this.lastId()),
      });
    } else if (this.props.isPoint) {
      let id = this.defineIdPoint();
      this.setState({
        point: initPoint(id),
      });
    } else if (this.props.isLink) {
      let id = this.defineIdOrientedLink();
      const newZIndex: number = this.props.options.zIndexOrientedLink + 1;
      this.setState({
        orientedLink: initOrientedLink(id, newZIndex),
      });
      this.props.onOptionsChange({
        ...this.props.options,
        zIndexOrientedLink: newZIndex,
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
      } else if (this.props.isPoint) {
        this.props.onOptionsChange({
          ...this.props.options,
          indexPoint: newIdx,
        });
      } else if (this.props.isLink) {
        this.props.onOptionsChange({
          ...this.props.options,
          indexOrientedLink: newIdx,
        });
      }
    });
  };

  /** send data of region for parent */
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

  /** send data of point for parent */
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

  /** send data of orientedLink for parent */
  callBackOrientedLink = async (id: number, newCoordinate?: OrientedLinkClass) => {
    if (newCoordinate) {
      const allCoordinateSpace: OrientedLinkClass[] = this.props.options.arrayOrientedLinks.slice();
      await this.setAsyncOption(newCoordinate.id);
      this.props.onOptionsChange({
        ...this.props.options,
        arrayOrientedLinks: allCoordinateSpace.concat(newCoordinate),
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
    } else if (this.props.isPoint) {
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
    } else if (this.props.isLink) {
      return (
        <div>
          {this.state.orientedLink && (
            <OrientedLink
              options={this.props.options}
              onOptionsChange={this.props.onOptionsChange}
              data={this.props.data}
              orientedLink={this.state.orientedLink}
              callBackToParent={this.callBackOrientedLink}
              isAddLink={true}
            />
          )}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default AddCoordinate;
