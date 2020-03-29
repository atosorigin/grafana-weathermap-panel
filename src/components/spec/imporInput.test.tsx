import ImportInput from "../importInput";
import React from 'react';
import ReactDOM from 'react-dom';

import { defaults, SimpleOptions } from '../../types';
import { LoadingState } from '@grafana/data';
import { act } from 'react-dom/test-utils';

import { PointClass } from "Models/PointClass";
import { RegionClass } from 'Models/RegionClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';




describe("ImportInput tests", () => {
  let container, component;
  const additionalStep = { value: '1', label: '1' };
  let testProps = { options: {}, data: {}, onOptionsChange: {} };

  const mockFunctions = {
    onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
      testProps.options = options;
      act(() => {
        ReactDOM.render(<ImportInput ref={c => component = c} {...testProps} />, container);
      });
    }
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
            name: "serieName",
            fields: [],
            length: 15
          }
        ],
        timeRange: clonedDefaults.timeRange
      }
    };

    act(() => {
      ReactDOM.render(<ImportInput ref={c => component = c} {...testProps} />, container);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    component = null;
    jest.clearAllMocks();
  });

  describe('PointValidator', () => {

    test("Return true", (done) => {
      const goodInput: PointClass = {};
    });

  });

  describe('RegionValidator', () => {

    test("", () => {
      const goodInput: RegionClass = {};
    });

  });

  describe('LinkValidator', () => {

    test("", () => {
      const goodInput: OrientedLinkClass = {};
    });

  });

  describe('UrlValidator', () => {

    test("Already in have to return False", () => {
      const goodInput: string = "http://localhost/sampleJson/demo20-Region.json";
    });

    test("Not in have to return True", () => {
      const goodInput: string = "http://localhost/sampleJson/demo20-Region.json";
    });

  });

  describe('loadMonoPoint', () => {

    test("", () => {
      const goodInput: string = "";
    });

  });

  describe('reagionUpdate', () => {

    test("", () => {
      const goodInput: string = "";
    });

  });

  describe('loadMonoRegion', () => {

    test("", () => {
      const goodInput: string = "";
    });

  });

  describe('loadMonoLink', () => {

    test("", () => {
      const goodInput: string = "";
    });

  });

  describe('loadMultiPoints', () => {

    test("", () => {
      const goodInput: string = "";
    });

  });

  describe('loadMultiRegions', () => {

    test("", () => {
      const goodInput: string = "";
    });

  });

  describe('loadMultiLinks', () => {

    test("", () => {
      const goodInput: string = "";
    });

  });

  describe('loadTotal', () => {

    test("", () => {
      const goodInput: string = "";
    });

  });

  describe('loaderTotal', () => {

    test("", () => {
      const goodInput: string = "";
    });

  });

  describe('fetchTotal', () => {

    test("", () => {
      const goodInput: string = "";
    });

  });

  describe('fetchMulti', () => {

    test("", () => {
      const goodInput: string = "";
    });

  });

  describe('saveUrl', () => {

    test("", () => {
      const goodInput: string = "";
    });

  });

  describe('onTotalUrlChanged', () => {

    test("", () => {
      const goodInput: string = "";
    });

  });

  describe('onTotalListUrlChanged', () => {

    test("", () => {
      const goodInput: string = "";
    });

  });

  describe('onMultiUrlChanged', () => {

    test("", () => {
      const goodInput: string = "";
    });

  });

  describe('onMultiListUrlChanged', () => {

    test("", () => {
      const goodInput: string = "";
    });

  });

  describe('addTotalUrlInput', () => {

    test("", () => {
      const goodInput: string = "";
    });

  });

  describe('addMultiUrlInput', () => {

    test("", () => {
      const goodInput: string = "";
    });

  });

  describe('totalDeletUrl', () => {

    test("", () => {
      const goodInput: string = "";
    });

  });

  describe('multiDeletUrl', () => {

    test("", () => {
      const goodInput: string = "";
    });

  });
});