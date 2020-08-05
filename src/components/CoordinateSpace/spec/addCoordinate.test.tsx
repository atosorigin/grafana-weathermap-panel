import React from 'react';
import ReactDOM from 'react-dom';
import AddCoordinate from '../addCoordinate';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions } from '../../../types';
import { act } from 'react-dom/test-utils';

// test for yarn to pass
describe('waiting test', () => {
  test('to be pass', (done) => {
    setTimeout(() => {
      done();
    });
  });
});

// /*
//  * testing the AddCoordinate component features
//  * - add coordinates
//  * - edit coordinates parameters
//  */
describe('AddCoordinate tests', () => {
  let container: any, component: any, coordinates: any;
  const additionalStep = { value: '1', label: '1' };
  /*
   * Mock "onOptionChange" by re-rendering the component with the new options
   */
  let mockFunctions = {
    onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
      let testProps = {};
      act(() => {
        ReactDOM.render(
          <AddCoordinate
            data={component}
            options={component}
            onOptionsChange={component}
            isLink={component}
            isPoint={component}
            isRegion={component}
            ref={(c) => (component = c)}
            {...testProps}
          />,
          container
        );
      });
    },
  };
  let testProps = {};
  beforeEach(() => {
    // testTextObjectClass = new TextObject('legend', true, 'value', 'unit', 'colbr', 'coltxtr', 'ctyletxtr', 'colbackbu');
    // parametrageMetric = new ParametrageMetrique('', '', '');
    coordinates = [
      // new CoordinateSpaceExtendClass(
      //   0,
      //   '-10',
      //   '10',
      //   '-20',
      //   '20',
      //   'test-label',
      //   'test.png',
      //   'test-interface',
      //   testTextObjectClass,
      //   parametrageMetric,
      //   'key0',
      //   'valkey0'
      // ),
      // new CoordinateSpaceExtendClass(
      //   1,
      //   '-10',
      //   '10',
      //   '-20',
      //   '20',
      //   'test-label',
      //   'test.png',
      //   'test-interface',
      //   testTextObjectClass,
      //   parametrageMetric,
      //   'key1',
      //   'valkey1'
      // ),
    ];

    let clonedDefaults = JSON.parse(JSON.stringify(defaults));
    clonedDefaults.listStep[1] = JSON.parse(JSON.stringify(additionalStep));
    container = document.createElement('div');
    console.log('container: ', container);
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
      ReactDOM.render(
        <AddCoordinate
          data={component}
          options={component}
          onOptionsChange={component}
          isLink={component}
          isPoint={component}
          isRegion={component}
          ref={(c) => (component = c)}
          {...testProps}
        />,
        container
      );
    });
  });

  afterEach(() => {
    console.log('container: ', container);

    document.body.removeChild(container);
    container = null;
    component = null;
    coordinates = [];
    jest.clearAllMocks();
  });

  test('search new id', () => {
    expect(component.searchNewId(coordinates)).toBe(0);
  });
});
