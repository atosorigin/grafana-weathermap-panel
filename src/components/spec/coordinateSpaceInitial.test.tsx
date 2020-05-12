import React from 'react';
import ReactDOM from 'react-dom';
import CoordinatSpaceInitial from '../coordinateSpaceInitial';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions } from '../../types';
import { act } from 'react-dom/test-utils';

/*
 * testing the CoordinatSpaceInitial component features
 * - edit coordinates parameters
 */
describe('CoordinatSpaceInitial tests', () => {
  let container: any, component: any;
  const additionalStep = { value: '1', label: '1' };
  /*
   * Mock "onOptionChange" by re-rendering the component with the new options
   */
  let mockFunctions = {
    onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
      testProps.options = options;
      act(() => {
        ReactDOM.render(<CoordinatSpaceInitial ref={c => (component = c)} {...testProps} />, container);
      });
    },
  };
  let testProps = { options: {}, data: {}, onOptionsChange: {} };
  beforeEach(() => {
    let clonedDefaults = JSON.parse(JSON.stringify(defaults));
    clonedDefaults.listStep[1] = JSON.parse(JSON.stringify(additionalStep));
    container = document.createElement('div');
    document.body.appendChild(container);
    testProps = {
      options: clonedDefaults,
      onOptionsChange: mockFunctions.onOptionsChange,
      data: {
        state: LoadingState.Done,
        series: [
          {
            name: 'serieName',
            fields: [],
            length: 15,
          },
        ],
        timeRange: clonedDefaults.timeRange,
      },
    };
    act(() => {
      ReactDOM.render(<CoordinatSpaceInitial ref={c => (component = c)} {...testProps} />, container);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    component = null;
    jest.clearAllMocks();
  });

  test('init values', async () => {
    expect(component.state.arrayCoor).toBe(component.props.options.coordinateSpaceInitial);
  });
  describe('_handleChange', () => {
    test('_handleChange xMin', async () => {
      let currentTarget = '-200';
      let name = 'positionXMin';
      const spy = jest.spyOn(component, 'callBack');
      component._handleChange(currentTarget, name);
      expect(spy).toHaveBeenCalled();
      expect(component.state.arrayCoor.coordinate.xMin).toBe('-200');
    });
    test('_handleChange xMax', async () => {
      let currentTarget = '200';
      let name = 'positionXMax';
      const spy = jest.spyOn(component, 'callBack');
      component._handleChange(currentTarget, name);
      expect(spy).toHaveBeenCalled();
      expect(component.state.arrayCoor.coordinate.xMax).toBe('200');
    });
    test('_handleChange xMax', async () => {
      let currentTarget = '-200';
      let name = 'positionYMin';
      const spy = jest.spyOn(component, 'callBack');
      component._handleChange(currentTarget, name);
      expect(spy).toHaveBeenCalled();
      expect(component.state.arrayCoor.coordinate.yMin).toBe('-200');
    });
    test('_handleChange yMax', async () => {
      let currentTarget = '200';
      let name = 'positionYMax';
      const spy = jest.spyOn(component, 'callBack');
      component._handleChange(currentTarget, name);
      expect(spy).toHaveBeenCalled();
      expect(component.state.arrayCoor.coordinate.yMax).toBe('200');
    });
  });
  test('onChangeSwitchDisplayInitialSpace', async () => {
    const saveDisplayArea: boolean = component.state.arrayCoor.displayArea;
    const spy = jest.spyOn(component, 'callBack');
    component.onChangeSwitchDisplayInitialSpace();
    expect(spy).toHaveBeenCalled();
    expect(component.state.arrayCoor.displayArea).toBe(!saveDisplayArea);
  });
});
