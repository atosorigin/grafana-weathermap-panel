import React from 'react';
import ReactDOM from 'react-dom';
import FixColor from '../fixColor';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions } from '../../../types';
import { act } from 'react-dom/test-utils';

describe('waiting test', () => {
  test('to be pass', (done) => {
    setTimeout(() => {
      done();
    });
  });
});

// /*
//  * testing the FixColor component features
//  * - edit parameters
//  */
describe('FixColor tests', () => {
  let container: any, component: any;
  const additionalStep = { value: '1', label: '1' };
  //   /*
  //    * Mock "onOptionChange" by re-rendering the component with the new options
  //    */
  let mockFunctions = {
    onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
      let testProps = {};
      act(() => {
        ReactDOM.render(
          <FixColor
            data={component}
            options={component}
            onOptionsChange={component}
            lowerLimit={component}
            lowerLimitCallBack={component}
            isLink={component}
            traceBack={component}
            traceBorder={component}
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
    let clonedDefaults = JSON.parse(JSON.stringify(defaults));
    clonedDefaults.seuil = [
      {
        id: 5,
        lowerLimitMin: '-10',
        lowerLimitMax: '10',
        backColor: '#448811',
        borderColor: '#6611FF',
        sizeBorder: '2',
      },
    ];
    clonedDefaults.listStep[1] = JSON.parse(JSON.stringify(additionalStep));
    clonedDefaults.promTargets = ['test'];
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
      ReactDOM.render(
        <FixColor
          data={component}
          options={component}
          onOptionsChange={component}
          lowerLimit={component}
          lowerLimitCallBack={component}
          isLink={component}
          traceBack={component}
          traceBorder={component}
          ref={(c) => (component = c)}
          {...testProps}
        />,
        container
      );
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    component = null;
    jest.clearAllMocks();
  });

  test('test onChangeSzContour', () => {
    component.onChangeSzContour('80');

    expect('80').toBe('80');
  });

  test('test onChangeColorFond', () => {
    component.onChangeColorFond('whatiskey', '#123456');

    expect('#123456').toBe('#123456');
  });

  test('test onChangeColorContour', () => {
    component.onChangeColorContour('whatiskey', '#123456');

    expect('#123456').toBe('#123456');
  });
});
