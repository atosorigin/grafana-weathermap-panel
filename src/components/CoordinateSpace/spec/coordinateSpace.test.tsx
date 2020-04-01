import React from 'react';
import ReactDOM from 'react-dom';
import CoordinateSpace from '../coordinateSpace';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions } from '../../../types';
import { act } from 'react-dom/test-utils';
import { TextObject } from 'Models/TextObjectClass';
import { ParametrageMetrique } from 'Models/SettingMetricClass';
import { CoordinateSpaceExtendClass } from 'Models/CoordinateSpaceExtendClass';

/*
 * testing the CoordinateSpace component features
 * - add coordinates
 * - edit coordinates parameters
 */
describe('CoordinateSpace tests', () => {
  let container, component, coordinates, testTextObjectClass, parametrageMetric;
  const additionalStep = { value: '1', label: '1' };
  /*
   * Mock "onOptionChange" by re-rendering the component with the new options
   */
  let mockFunctions = {
    onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
      testProps.options = options;
      act(() => {
        ReactDOM.render(<CoordinateSpace ref={c => (component = c)} {...testProps} />, container);
      });
    },
    callBackToParent: (id: number, newCoordinate?: CoordinateSpaceExtendClass) => {
      testProps.coordinate = newCoordinate ? newCoordinate : coordinates[1];
      act(() => {
        ReactDOM.render(<CoordinateSpace ref={c => (component = c)} {...testProps} />, container);
      });
    },
  };
  let testProps = {};
  beforeEach(() => {
    testTextObjectClass = new TextObject(
      'legend',
      'value',
      'unit',
      'colbr',
      'coltxtr',
      'ctyletxtr',
      'colbackbu',
      'coltxtbu',
      'styletxtby',
      true,
      'legelement',
      'numformatel',
      'unitumseu',
      true,
      true,
      true,
      'coltxtele',
      true,
      'colbackel'
    );
    parametrageMetric = new ParametrageMetrique('', '', '');
    coordinates = [
      new CoordinateSpaceExtendClass(
        0,
        '-10',
        '10',
        '-20',
        '20',
        'test-label',
        'test.png',
        'test-interface',
        testTextObjectClass,
        parametrageMetric,
        'key0',
        'valkey0'
      ),
      new CoordinateSpaceExtendClass(
        1,
        '-10',
        '10',
        '-20',
        '20',
        'test-label',
        'test.png',
        'test-interface',
        testTextObjectClass,
        parametrageMetric,
        'key1',
        'valkey1'
      ),
    ];

    let clonedDefaults = JSON.parse(JSON.stringify(defaults));
    clonedDefaults.listStep[1] = JSON.parse(JSON.stringify(additionalStep));
    container = document.createElement('div');
    document.body.appendChild(container);
    testProps = {
      options: clonedDefaults,
      onOptionsChange: mockFunctions.onOptionsChange,
      callBackToParent: mockFunctions.callBackToParent,
      data: {
        state: LoadingState.Done,
        series: [
          {
            name: 'serieName',
            fields: [],
            length: 15,
          },

          {
            name: 'serieName2',
            fields: [],
            length: 16,
          },
        ],
        timeRange: clonedDefaults.timeRange,
      },
    };
    testProps.coordinate = coordinates[0];
    act(() => {
      ReactDOM.render(<CoordinateSpace ref={c => (component = c)} {...testProps} />, container);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    component = null;
    jest.clearAllMocks();
  });

  test('initial state', done => {
    setImmediate(() => {
      expect({ ...component.state.arrayCoor }).toStrictEqual({ ...coordinates[0], ...{ dataQuery: testProps.data.series[0] } });
      expect(component.state.arrayInput.length).not.toBe(0);
      done();
    });
  });

  test('remove coordinates space input', done => {
    setImmediate(async () => {
      await component.deleteOwnInput();

      expect(mockFunctions.callBackToParent).toHaveBeenCalled;
      done();
    });
  });

  test('change coordinates input', done => {
    setImmediate(() => {
      const newCoordinatesInputs = component.state.arrayInput[0];
      const newCoordinatesInput = newCoordinatesInputs.getUneClassInput();

      let expectedCases = ['positionXMin', 'positionXMax', 'positionYMin', 'positionYMax', 'label', 'image', 'key', 'valueKey'];

      for (let index = 0; index < newCoordinatesInput.length; index++) {
        const element = newCoordinatesInput[index];
        if (element.getInputType() === 'text') {
          component._handleChange('test-value', element.getName(), newCoordinatesInputs.getId());
          const name = element.getName();
          if (name.startsWith('positionXMin')) {
            expectedCases = expectedCases.filter(value => value !== 'positionXMin');
            expect(component.state.arrayCoor.xMin).toBe('test-value');
          } else if (name.startsWith('positionXMax')) {
            expectedCases = expectedCases.filter(value => value !== 'positionXMax');
            expect(component.state.arrayCoor.xMax).toBe('test-value');
          } else if (name.startsWith('positionYMin')) {
            expectedCases = expectedCases.filter(value => value !== 'positionYMin');
            expect(component.state.arrayCoor.yMin).toBe('test-value');
          } else if (name.startsWith('positionYMax')) {
            expectedCases = expectedCases.filter(value => value !== 'positionYMax');
            expect(component.state.arrayCoor.yMax).toBe('test-value');
          } else if (name.startsWith('label')) {
            expectedCases = expectedCases.filter(value => value !== 'label');
            expect(component.state.arrayCoor.label).toBe('test-value');
          } else if (name.startsWith('image')) {
            expectedCases = expectedCases.filter(value => value !== 'image');
            expect(component.state.arrayCoor.img).toBe('test-value');
          } else if (name.startsWith('key')) {
            expectedCases = expectedCases.filter(value => value !== 'key');
            expect(component.state.arrayCoor.key).toBe('test-value');
          } else if (name.startsWith('valueKey')) {
            expectedCases = expectedCases.filter(value => value !== 'valueKey');
            expect(component.state.arrayCoor.valueKey).toBe('test-value');
          } else {
            expect(name).toBe('in the expected cases');
          }
        }
      }
      expect(expectedCases.length).toBe(0);
      done();
    });
  });
});
