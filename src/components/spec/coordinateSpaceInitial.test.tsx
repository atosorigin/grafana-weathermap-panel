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
  let testProps = {};
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
    expect(component.state.arrayCoor.id).not.toBe(undefined);
    expect(component.state.arrayInput.uneClassInput.length).toBe(6);
  });

  test('change coordinates input', async () => {
    const newCoordinatesInputs = component.state.arrayInput;
    const newCoordinatesInput = newCoordinatesInputs.getUneClassInput();

    for (let index = 0; index < newCoordinatesInput.length; index++) {
      const element = newCoordinatesInput[index];
      if (element.getInputType() === 'text') {
        component._handleChange('test-value', element.getName(), newCoordinatesInputs.getId());
        const name = element.getName();
        if (name.startsWith('positionXMin')) {
          expect(component.state.arrayCoor.getXMin()).toBe('test-value');
        } else if (name.startsWith('positionXMax')) {
          expect(component.state.arrayCoor.getXMax()).toBe('test-value');
        } else if (name.startsWith('positionYMin')) {
          expect(component.state.arrayCoor.getYMin()).toBe('test-value');
        } else if (name.startsWith('positionYMax')) {
          expect(component.state.arrayCoor.getYMax()).toBe('test-value');
        } else if (name.startsWith('label')) {
          expect(component.state.arrayCoor.getLabel()).toBe('test-value');
        }
      }
    }
  });
});
