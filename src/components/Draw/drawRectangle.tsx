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
  //isEnabled: boolean;
  /** if button Add Oriented Link of SimplePanel is active, block all onClick region space */
  buttonAddLinkIsActive: boolean;
  /** if button Add Incurved Oriented Link of SimplePanel is active, block all onClick region space */
  buttonAddIncurvedLinkIsActive: boolean;
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
    /**
     *
     * V1 -100-100
     *
     */
    // if (size > 100) {
    //   size = 100;
    // } else if (size < 0 && size < -100) {
    //   size = -100;
    // }
    // if (size >= 0) {
    //   size /= 2;
    //   size = isMax ? 50 - size : 50 + size;
    // } else {
    //   size *= -1;
    //   size /= 2;
    //   size = 50 - size;
    // }
    // return size;

    /**
     *
     * Correctif client 0-100
     *
     */
    let result = 0;
    // if (!this.props.options.coordinateSpaceInitial.defaultReferentiel) {
    //   // console.log(position);
    //   // console.log('-');
    //   if (size > 100) {
    //     // console.log('>100');
    //     // console.log(position);
    //     size = 100;
    //   } else if (size < 0 && size < -100) {
    //     // console.log('<-100');
    //     // console.log(position);
    //     size = -100;
    //   }
    //   if (size >= 0) {
    //     // console.log('>0');
    //     // console.log(position);
    //     size /= 2;
    //     size = isMax ? 50 - size : 50 + size;
    //   } else {
    //     // console.log('<0');
    //     // console.log(position);
    //     size *= -1;
    //     size /= 2;
    //     size = 50 - size;
    //   }
    //   result = size;
    //   // console.log(result);
    // } else {
    //   // console.log(position);
    //   // console.log('+');
    //   if (position === 1) {
    //     result = size;
    //   } else if (position === 2) {
    //     result = 100 - size;
    //   } else if (position === 3) {
    //     result = size;
    //   } else if (position === 4) {
    //     result = 100 - size;
    //   }
    // }
    // console.log(result);
    return result;
  };

  limitValueBorder = (value: number, position: number): number => {
    const widthBackground = parseInt(this.props.options.baseMap.width, 10);
    const heigthBackground = parseInt(this.props.options.baseMap.height, 10);
    let result = value;
    if (position === 1 || position === 2) {
      //xMin + xMax
      if (value > widthBackground) {
        result = widthBackground;
      }
    } else if (position === 3 || position === 4) {
      //yMin + yMax
      if (value > heigthBackground) {
        result = heigthBackground;
      }
    }
    return result;
  };

  getPositionBorder = (value: number, position: number): number => {
    // const widthBackground = parseInt(this.props.options.baseMap.width, 10);
    // const heigthBackground = parseInt(this.props.options.baseMap.height, 10);
    // const xMinInitialSpace = parseInt(this.props.options.coordinateSpaceInitial.coordinate.xMin, 10);
    // const xMaxInitialSpace = parseInt(this.props.options.coordinateSpaceInitial.coordinate.xMax, 10);
    // const yMinInitialSpace = parseInt(this.props.options.coordinateSpaceInitial.coordinate.yMin, 10);
    // const yMaxInitialSpace = parseInt(this.props.options.coordinateSpaceInitial.coordinate.yMax, 10);
    // const widthInitialSpace = xMaxInitialSpace - xMinInitialSpace;
    // const heightInitialSpace = yMaxInitialSpace - yMinInitialSpace;
    let result = 0;
    // if (position === 1) {
    //   //xMin
    //   if (value < 0) {
    //     result = 0;
    //   } else if (xMaxInitialSpace > widthBackground) {
    //     result = (value / xMaxInitialSpace) * widthBackground;
    //   } else {
    //     result = value;
    //   }
    // } else if (position === 2) {
    //   //xMax
    //   if (value > widthBackground) {
    //     result = 0;
    //   } else {
    //     result = widthBackground - value;
    //   }
    // } else if (position === 3) {
    //   //yMax
    //   if (value > heigthBackground) {
    //     result = 0;
    //   } else {
    //     result = heigthBackground - value;
    //   }
    // } else if (position === 4) {
    //   //yMin
    //   if (value < 0) {
    //     result = 0;
    //   } else if (yMaxInitialSpace > heigthBackground) {
    //     result = (value / yMaxInitialSpace) * heigthBackground;
    //   } else {
    //     result = value;
    //   }
    // }
    return result;
  };

  fillCoordinate = (): JSX.Element => {
    const { options } = this.props;
    const xMinInitialSpace = parseInt(options.coordinateSpaceInitial.coordinate.xMin, 10);
    const xMaxInitialSpace = parseInt(options.coordinateSpaceInitial.coordinate.xMax, 10);
    const yMinInitialSpace = parseInt(options.coordinateSpaceInitial.coordinate.yMin, 10);
    const yMaxInitialSpace = parseInt(options.coordinateSpaceInitial.coordinate.yMax, 10);
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
        //isEnabled={this.props.isEnabled}
        buttonAddLinkIsActive={this.props.buttonAddLinkIsActive}
        buttonAddIncurvedLinkIsActive={this.props.buttonAddIncurvedLinkIsActive}
        widthInitialSpaceDefault={(xMaxInitialSpace - xMinInitialSpace).toString()}
        heightInitialSpaceDefault={(yMaxInitialSpace - yMinInitialSpace).toString()}
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

    // pLeft = this.transformCoordonneesToPx(xMin, false, 1).toString() + '%';
    // pRight = this.transformCoordonneesToPx(xMax, true, 2).toString() + '%';
    // pBottom = this.transformCoordonneesToPx(yMin, false, 3).toString() + '%';
    // pTop = this.transformCoordonneesToPx(yMax, true, 4).toString() + '%';
    pLeft = this.getPositionBorder(xMin, 1).toString() + 'px';
    pRight = this.getPositionBorder(xMax, 2).toString() + 'px';
    pTop = this.getPositionBorder(yMax, 3).toString() + 'px';
    pBottom = this.getPositionBorder(yMin, 4).toString() + 'px';

    // if (xMax >= 0) {
    //   // console.log('pLeft xMax +');
    //   pLeft = this.transformCoordonneesToPx(xMin, false, 1).toString() + 'px';
    //   // console.log(pLeft);
    //   // console.log('pRight xMax +');
    //   pRight = this.transformCoordonneesToPx(xMax, true, 2).toString() + 'px';
    //   // console.log(pRight);
    // } else {
    //   xMin = xMin * -1;
    //   // console.log('pRight xMax -');
    //   pRight = this.transformCoordonneesToPx(xMin, false, 1).toString() + 'px';
    //   // console.log(pRight);
    //   // console.log('pLeft xMax -');
    //   pLeft = this.transformCoordonneesToPx(xMax, true, 2).toString() + 'px';
    //   // console.log(pLeft);
    // }
    // if (yMax >= 0) {
    //   // console.log('pBottom yMax +');
    //   pBottom = this.transformCoordonneesToPx(yMin, false, 3).toString() + 'px';
    //   // console.log(pBottom);
    //   // console.log('pTop yMax +');
    //   pTop = this.transformCoordonneesToPx(yMax, true, 4).toString() + 'px';
    //   // console.log(pTop);
    // } else {
    //   yMin = yMin * -1;
    //   // console.log('pTop yMax -');
    //   pTop = this.transformCoordonneesToPx(yMin, false, 3).toString() + 'px';
    //   // console.log(pTop);
    //   // console.log('pBottom yMax -');
    //   pBottom = this.transformCoordonneesToPx(yMax, true, 4).toString() + 'px';
    //   // console.log(pBottom);
    // }

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
        {/* {this.fillCoordinate()} */}
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
