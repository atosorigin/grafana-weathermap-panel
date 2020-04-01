import React from 'react';

import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions, CoordinateSpaceInitial } from 'types';

import { isNumFloat } from 'Functions/isNumFloat';
import DrawRectangleExtend from './drawRectangleExtend';
import { RegionClass, Coord4D } from 'Models/RegionClass';

interface Props extends PanelEditorProps<SimpleOptions> {
  /** color of border */
  color: string;
  /** coordinate space initial */
  coordinateInitial: CoordinateSpaceInitial;
  /** id region */
  id: string;
  /** if button SimplePanel is active, block all onClick region space */
  isEnabled: boolean;
}

// tslint:disable-next-line: no-empty-interface
interface State {
  /** stock html for result */
  resultHTML: JSX.Element;
}

/**
 * Draw inititial viewing space rectangle
 */
export default class DrawRectangle extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      resultHTML: <div></div>,
    };
  }

  /**
   * Transform coordinate percent for css
   * @param {number} size value of coordinate
   * @param {boolean} isMax true if x or y is max value
   * @returns coordinate to percent
   */
  transformCoordonneesToPx = (size: number, isMax: boolean, position: number): number => {
    if (size > 100) {
      size = 100;
    } else if (size < 0 && size < -100) {
      size = -100;
    }
    if (size >= 0) {
      size /= 2;
      size = isMax ? 50 - size : 50 + size;
    } else {
      size *= -1;
      size /= 2;
      size = 50 - size;
    }
    return size;
  };

  fillCoordinate = (): JSX.Element => {
    const { options } = this.props;
    let mapItems: JSX.Element[];

    mapItems = options.regionCoordinateSpace.map((line: RegionClass, index: number) => (
      <DrawRectangleExtend
        key={'drawRectangleExtend' + index.toString()}
        uneCoor={line}
        useLimit={false}
        limit={options.coordinateSpaceInitial.coordinate}
        onOptionsChange={this.props.onOptionsChange}
        options={this.props.options}
        data={this.props.data}
        id={'region' + line.id.toString()}
        isEnabled={this.props.isEnabled}
      />
    ));
    return <ul>{mapItems}</ul>;
  };

  /** creaate rectrangle */
  createRectangle = (): void => {
    const line: Coord4D = this.props.coordinateInitial.coordinate;
    let pLeft: string;
    let pRight: string;
    let pTop: string;
    let pBottom: string;
    let xMin = 0;
    let xMax = 0;
    let yMin = 0;
    let yMax = 0;
    const pBorder: string = this.props.coordinateInitial.displayArea ? '3px solid ' + this.props.color : '';

    xMin = isNumFloat(line.xMin) ? parseInt(line.xMin, 10) : 0;
    xMax = isNumFloat(line.xMax) ? parseInt(line.xMax, 10) : 0;
    yMin = isNumFloat(line.yMin) ? parseInt(line.yMin, 10) : 0;
    yMax = isNumFloat(line.yMax) ? parseInt(line.yMax, 10) : 0;

    if (xMax >= 0) {
      pLeft = this.transformCoordonneesToPx(xMin, false, 1).toString() + '%';
      pRight = this.transformCoordonneesToPx(xMax, true, 2).toString() + '%';
    } else {
      xMin = xMin * -1;
      pRight = this.transformCoordonneesToPx(xMin, false, 1).toString() + '%';
      pLeft = this.transformCoordonneesToPx(xMax, true, 2).toString() + '%';
    }
    if (yMax >= 0) {
      pBottom = this.transformCoordonneesToPx(yMin, false, 3).toString() + '%';
      pTop = this.transformCoordonneesToPx(yMax, true, 4).toString() + '%';
    } else {
      yMin = yMin * -1;
      pTop = this.transformCoordonneesToPx(yMin, false, 3).toString() + '%';
      pBottom = this.transformCoordonneesToPx(yMax, true, 4).toString() + '%';
    }

    const data: JSX.Element = (
      <div
        style={{
          border: pBorder,
          bottom: pBottom,
          left: pLeft,
          position: 'absolute',
          right: pRight,
          top: pTop,
        }}
        id={this.props.id}
      >
        {this.fillCoordinate()}
      </div>
    );
    this.setState({
      resultHTML: data,
    });
  };

  /** update state when props coordinateInitial change */
  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props) {
      this.createRectangle();
    }
  }

  /** create rectangle when component mount */
  componentDidMount = () => {
    this.createRectangle();
  };

  /**
   * render
   */
  render() {
    const test = {
      position: 'absolute',
      textAlign: 'center',
      height: this.props.options.baseMap.height + 'px',
      width: this.props.options.baseMap.width + 'px',
    } as React.CSSProperties;

    return <div style={test}>{this.state.resultHTML}</div>;
  }
}
