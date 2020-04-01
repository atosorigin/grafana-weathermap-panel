import ImportInput from '../importInput';
import React from 'react';
import ReactDOM from 'react-dom';

import { defaults, SimpleOptions } from '../../types';
import { LoadingState } from '@grafana/data';
import { act } from 'react-dom/test-utils';

import { PointClass } from 'Models/PointClass';
import { RegionClass } from 'Models/RegionClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';

describe('ImportInput tests', () => {
  let container, component;
  const additionalStep = { value: '1', label: '1' };
  let testProps = { options: {}, data: {}, onOptionsChange: {} };

  const mockFunctions = {
    onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
      testProps.options = options;
      act(() => {
        ReactDOM.render(<ImportInput ref={c => (component = c)} {...testProps} />, container);
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
      ReactDOM.render(<ImportInput ref={c => (component = c)} {...testProps} />, container);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    component = null;
    jest.clearAllMocks();
  });

  describe('PointValidator', () => {
    test('Return true', done => {
      const goodInput: PointClass = {};
    });
  });

  describe('RegionValidator', () => {
    test('', () => {
      const goodInput: RegionClass = {};
    });
  });

  describe('LinkValidator', () => {
    test('', () => {
      const goodInput: OrientedLinkClass = {};
    });
  });

  describe('UrlValidator', () => {
    test('Already in have to return False', () => {
      const goodInput = 'http://localhost/sampleJson/demo20-Region.json';
    });

    test('Not in have to return True', () => {
      const goodInput = 'http://localhost/sampleJson/demo20-Region.json';
    });
  });

  describe('loadMonoPoint', () => {
    test('', () => {
      const goodInput = '';
    });
  });

  describe('reagionUpdate', () => {
    test('', () => {
      const goodInput = '';
    });
  });

  describe('loadMonoRegion', () => {
    test('', () => {
      const goodInput = '';
    });
  });

  describe('loadMonoLink', () => {
    test('', () => {
      const goodInput = '';
    });
  });

  describe('loadMultiPoints', () => {
    test('', () => {
      const goodInput = '';
    });
  });

  describe('loadMultiRegions', () => {
    test('', () => {
      const goodInput = '';
    });
  });

  describe('loadMultiLinks', () => {
    test('', () => {
      const goodInput = '';
    });
  });

  describe('loadTotal', () => {
    test('', () => {
      const goodInput = '';
    });
  });

  describe('loaderTotal', () => {
    test('', () => {
      const goodInput = '';
    });
  });

  describe('fetchTotal', () => {
    test('', () => {
      const goodInput = '';
    });
  });

  describe('fetchMulti', () => {
    test('', () => {
      const goodInput = '';
    });
  });

  describe('saveUrl', () => {
    test('', () => {
      const goodInput = '';
    });
  });

  describe('onTotalUrlChanged', () => {
    test('', () => {
      const goodInput = '';
    });
  });

  describe('onTotalListUrlChanged', () => {
    test('', () => {
      const goodInput = '';
    });
  });

  describe('onMultiUrlChanged', () => {
    test('', () => {
      const goodInput = '';
    });
  });

  describe('onMultiListUrlChanged', () => {
    test('', () => {
      const goodInput = '';
    });
  });

  describe('addTotalUrlInput', () => {
    test('', () => {
      const goodInput = '';
    });
  });

  describe('addMultiUrlInput', () => {
    test('', () => {
      const goodInput = '';
    });
  });

  describe('totalDeletUrl', () => {
    test('', () => {
      const goodInput = '';
    });
  });

  describe('multiDeletUrl', () => {
    test('', () => {
      const goodInput = '';
    });
  });
});
