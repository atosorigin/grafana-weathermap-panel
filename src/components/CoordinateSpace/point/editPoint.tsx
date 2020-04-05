import React from 'react';

import { SimpleOptions } from '../../../types';

import { PanelEditorProps, SelectableValue } from '@grafana/data';
import { Select, FormLabel, Button } from '@grafana/ui';

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
    const valueSelect: SelectPoint[] = [];
    const stockTmpCoordinatesSpace: PointClass[] = this.props.options.arrayPoints.slice();

    for (const line of stockTmpCoordinatesSpace) {
      let label = line.label || line.name;
      valueSelect.push({ value: line, label: label });
    }
    // dev
    this.setState({
      selectCoordinateSpace: valueSelect,
      selectCoordinateSpaceDefault: valueSelect.length > 0 ? valueSelect[0] : this.state.selectCoordinateSpaceDefault,
    });
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
      // this.componentDidMount();
      this.fillSelectPoint();
    }
  };

  /** return html */
  render() {
    return (
      <div>
        <div>
          <tr style={{ display: 'flex' }}>
            <td>
              <FormLabel width={15}>Select point to edit</FormLabel>
            </td>
            <td>
              <Select
                onChange={value => this.onChangeSelectCoordinate(value)}
                allowCustomValue={false}
                options={this.state.selectCoordinateSpace}
                width={10}
                value={this.state.selectCoordinateSpaceDefault}
              />
            </td>
            <td style={{ marginTop: '2px', marginLeft: '20px' }}>
              <Button onClick={this.fillSelectPoint}>Update list Point</Button>
            </td>
          </tr>
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
            <p>Data not set</p>
          )}
        </div>
        {/* <Button onClick={() => console.log(this.props.options.regionCoordinateSpace)}>Info region</Button>
				<Button onClick={() => console.log(this.state.selectCoordinateSpaceDefault)}>Info region</Button> */}
      </div>
    );
  }
}
export default EditPoint;
