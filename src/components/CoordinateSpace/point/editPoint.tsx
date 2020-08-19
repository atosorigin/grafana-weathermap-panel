import React from 'react';

import { SimpleOptions } from '../../../types';

import { PanelEditorProps, SelectableValue } from '@grafana/data';
import { Select, FormLabel } from '@grafana/ui';

import { PointClass } from '../../../Models/PointClass';

// import { initRegionCoordinateSpace } from 'Functions/initRegionCoordinateSpace';

import Point from './point';

interface Props extends PanelEditorProps<SimpleOptions> {}

interface State {
  /** array for select value with the coordianates space */
  selectCoordinateSpace: Array<SelectableValue<PointClass>>;
  /** default select value */
  selectCoordinateSpaceDefault: SelectableValue<PointClass>;
}

interface SelectPoint {
  value: PointClass;
  /** label select */
  label: string;
}

/**
 * manage coordinate space for simpleEditor
 */
class EditPoint extends React.Component<Props, State> {
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
  callBack = (id: number, newCoordinate?: PointClass): void => {
    if (newCoordinate) {
      const oldData: PointClass[] = this.props.options.arrayPoints.slice();
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
        arrayPoints: oldData,
      });
      //this.fillSelectPoint();
    } else {
      let find = false;
      const oldData: PointClass[] = this.props.options.arrayPoints.slice();
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
          arrayPoints: oldData,
        });
        this.fillSelectPoint();
      }
    }
  };

  /** change select value to edit */
  onChangeSelectCoordinate = (value: SelectableValue<PointClass>) => {
    this.setState({
      selectCoordinateSpaceDefault: value,
    });
  };

  /** fill select whith array region object */
  fillSelectPoint = () => {
    let valueExist = false;
    const valueSelect: SelectPoint[] = [];
    const stockTmpCoordinatesSpace: PointClass[] = this.props.options.arrayPoints.slice();

    //valueSelect.push({ value: {}, label: 'No Data' });

    for (const line of stockTmpCoordinatesSpace) {
      let label = line.label || line.name;
      valueSelect.push({ value: line, label: label });
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
    // final
    // this.setState({
    // 	selectCoordinateSpace: valueSelect,
    // 	selectCoordinateSpaceDefault: (valueSelect.length > 0) ?
    // 		valueSelect[0] : this.state.selectCoordinateSpaceDefault,
    // });
  };

  /** fill data for select */
  componentDidMount = () => {
    this.fillSelectPoint();
  };

  /** update state if value props change */
  componentDidUpdate = (prevProps: Props) => {
    if (prevProps.options.arrayPoints !== this.props.options.arrayPoints) {
      this.fillSelectPoint();
    }
    // console.log(prevProps.options.newPoint);
    if (prevProps.options.newPoint) {
      this.fillSelectPoint();
      this.props.options.newPoint = false;
    }
  };

  /** return html */
  render() {
    return (
      <div>
        <div style={{ display: 'flex' }}>
          <FormLabel width={15}>Select Point</FormLabel>
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
            <Point
              options={this.props.options}
              onOptionsChange={this.props.onOptionsChange}
              data={this.props.data}
              point={this.state.selectCoordinateSpaceDefault.value}
              callBackToParent={this.callBack}
              isAddPoint={false}
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
        {/* <Button onClick={() => console.log(this.props.options.regionCoordinateSpace)}>Info region</Button>
				<Button onClick={() => console.log(this.state.selectCoordinateSpaceDefault)}>Info region</Button> */}
      </div>
    );
  }
}
export default EditPoint;
