import React from 'react';
import ReactDOM from 'react-dom';
import Display from '../display';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions } from '../../types';
import { act } from 'react-dom/test-utils';

/*
 * testing the Display component features
 * - edit input fields
 */
describe('Display tests', () => {
  let container: any, component: any;
  const additionalStep = { value: '1', label: '1' };
  let testProps = { options: {}, data: {}, onOptionsChange: {} };

  /*
   * Mock "onOptionChange" by re-rendering the component with the new options
   */
  let mockFunctions = {
    onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
      testProps.options = options;
      act(() => {
        ReactDOM.render(<Display ref={(c) => (component = c)} {...testProps} />, container);
      });
    },
  };

  beforeEach(() => {
    let clonedDefaults = JSON.parse(JSON.stringify(defaults));
    clonedDefaults.listStep[1] = JSON.parse(JSON.stringify(additionalStep));
    container = document.createElement('div');
    document.body.appendChild(container);
    testProps = {
      options: { ...clonedDefaults, Json: {} },
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
      ReactDOM.render(<Display ref={(c) => (component = c)} {...testProps} />, container);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    component = null;
    jest.clearAllMocks();
  });

  test('update font', () => {
    expect(component.state.newPolice.value).toStrictEqual(component.props.options.display.police);
    expect(component.state.newPolice.label).toStrictEqual(component.props.options.display.police);

    component.onChangePolice({ value: 'mono', label: 'mono' });

    expect(component.state.newPolice.value).toBe('mono');
    expect(component.state.newPolice.label).toBe('mono');
  });

  test('update size', () => {
    expect(component.state.size).toBe(component.props.options.display.size);

    let input = document.createElement('input');
    input.setAttribute('value', '10px');

    const spy = jest.spyOn(component, 'handleChangesize');
    act(() => {
      component.handleChangesize({
        target: input,
        currentTarget: input,
      });
    });

    expect(spy).toHaveBeenCalled();
    expect(component.state.size).toBe('10px');
  });

  test('update style', () => {
    expect(component.state.style).toBe(component.props.options.display.style);
    const style: any = {
      bold: true,
      italic: true,
      underline: true,
    };
    const spy = jest.spyOn(component, 'saveStyleData');

    act(() => {
      component.saveStyleData(style);
    });

    expect(spy).toHaveBeenCalled();
    expect(component.state.style).toBe(style);
  });
  test('update style 2', () => {
    expect(component.state.style).toBe(component.props.options.display.style);
    const style: any = {
      bold: true,
      italic: false,
      underline: false,
    };
    const spy = jest.spyOn(component, 'saveStyleData');
    act(() => {
      component.saveStyleData(style);
    });
    expect(spy).toHaveBeenCalled();
    expect(component.state.style).toBe(style);
  });

  test('onChangeHeightBaseMap', (done) => {
    let target = {
      value: '200',
    } as HTMLInputElement;
    let event = {
      target: target,
    };
    component.onChangeHeightBaseMap(event);
    setTimeout(() => {
      expect(component.props.options.baseMap.height).toStrictEqual('200');
      done();
    });
  });

  test('onChangeWidthBaseMap', (done) => {
    let target = {
      value: '200',
    } as HTMLInputElement;
    let event = {
      target: target,
    };
    component.onChangeWidthBaseMap(event);
    setTimeout(() => {
      expect(component.props.options.baseMap.width).toStrictEqual('200');
      done();
    });
  });

  test('onImageChanged', (done) => {
    let target = {
      value: 'uneImageOnSenFouCUneStringCommeUneAutreEnBase64OuPasCaChangeRien',
    } as HTMLInputElement;
    let event = {
      target: target,
    };
    component.onImageChanged(event);
    setTimeout(() => {
      expect(component.props.options.baseMap.image).toStrictEqual('uneImageOnSenFouCUneStringCommeUneAutreEnBase64OuPasCaChangeRien');
      done();
    });
  });
});
