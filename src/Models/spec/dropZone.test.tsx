import DropZone from '../dropZone';
import React from 'react';
import ReactDOM from 'react-dom';

import { defaults, SimpleOptions } from '../../types';
import { LoadingState } from '@grafana/data';
import { act } from 'react-dom/test-utils';

// import { PointClass } from 'Models/PointClass';
// import { RegionClass } from 'Models/RegionClass';
// import { OrientedLinkClass } from 'Models/OrientedLinkClass';

describe('waiting test', () => {
  let container: any, component: any;
  const additionalStep = { value: '1', label: '1' };
  let testProps = {};

  const mockFunctions = {
    onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
      let testProps = {};
      act(() => {
        ReactDOM.render(
          <DropZone onOptionsChange={component} options={component} data={component} ref={(c) => (component = c)} {...testProps} />,
          container
        );
      });
    },
  };
  beforeEach(() => {
    const clonedDefaults = JSON.parse(JSON.stringify(defaults));
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
        <DropZone onOptionsChange={component} options={component} data={component} ref={(c) => (component = c)} {...testProps} />,
        container
      );
    });
  });

  describe('save', () => {
    test('region', (done) => {
      setTimeout(() => {
        //expect(result).toStrictEqual(expected);
        done();
      });
    });
  });
});

//   describe('reqMetricRegion', () => {
//     test('Have to fill the returnQuery', (done) => {
//       //input and preparation for test
//       reqMetricRegion(regionClass, props);
//       setTimeout(() => {
//         expect(result).toStrictEqual(expected);
//         done();
//       });
//     });
//   });
// });
