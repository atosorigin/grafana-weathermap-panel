import React from 'react';
import ReactDOM from 'react-dom';
import PointForm from '../pointForm';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions } from '../../types';
import { act } from 'react-dom/test-utils';
import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';
import { PointClass } from 'Models/PointClass';

/*
 * testing the PointForm component features
 * - add/delete inputs
 * - edit inputs
 */
describe('PointForm tests', () => {
  let coordinates: any[] = [];
  let points = [];

  let container, component;
  const additionalStep = { value: '1', label: '1' };
  /*
   * Mock "onOptionChange" by re-rendering the component with the new options
   */
  let mockFunctions = {
    onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
      testProps.options = options;
      act(() => {
        ReactDOM.render(<PointForm ref={c => (component = c)} {...testProps} />, container);
      });
    },
    callBackFromParent: (dataFromChild: PointClass[]) => {
      testProps.oldArrayPointClass = dataFromChild;
      act(() => {
        ReactDOM.render(<PointForm ref={c => (component = c)} {...testProps} />, container);
      });
    },
  };
  let testProps = {};
  beforeEach(() => {
    coordinates = [
      new CoordinateSpaceClass(0, '-10', '10', '-10', '10', 'espace0'),
      new CoordinateSpaceClass(1, '-20', '20', '-20', '20', 'espace0'),
    ];
    points = [
      new PointClass(
        0,
        { label: 'coord0', value: coordinates[0] },
        { label: 'shape', value: 'A' },
        { label: 'shape', value: 'arrow' },
        { label: 'width', value: '1' },
        { label: 'height', size: '1' },
        'right',
        '5',
        '4',
        'point0',
        '6',
        '5',
        '#AABBCC'
      ),
      new PointClass(
        1,
        { label: 'coord1', value: coordinates[0] },
        { label: 'shape', value: 'A' },
        { label: 'shape', value: 'arrow' },
        { label: 'width', value: '1' },
        { label: 'height', size: '1' },
        'right',
        '4',
        '5',
        'point0',
        '5',
        '6',
        '#BBCCDD'
      ),
    ];

    let clonedDefaults = JSON.parse(JSON.stringify(defaults));
    clonedDefaults.listStep[1] = JSON.parse(JSON.stringify(additionalStep));
    container = document.createElement('div');
    document.body.appendChild(container);
    testProps = {
      options: clonedDefaults,
      onOptionsChange: mockFunctions.onOptionsChange,
      callBackFromParent: mockFunctions.callBackFromParent,
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
      oldArrayPointClass: [],
      regionCoordinateSpace: coordinates,
    };
    act(() => {
      ReactDOM.render(<PointForm ref={c => (component = c)} {...testProps} />, container);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    coordinates = [];
    points = [];
    container = null;
    component = null;
    jest.clearAllMocks();
  });

  test('add input', async () => {
    await component.addInput(
      5,
      { label: 'coordinateSpaceAssociate', value: coordinates[0] },
      { label: 'drawGraphicMarker', value: 'drawGraphicMarker' },
      { label: 'shape', value: 'arrow' },
      { label: 'sizeWidth', value: '2' },
      { label: 'sizeHeight', value: '2' },
      '20',
      '2',
      '3',
      'label',
      '4',
      '5',
      '#AABBCC'
    );

    expect(component.state.arrayInput.length).toBe(1);
    expect(component.state.index).toBe(6);
  });

  test('add input with id 0', async () => {
    await component.addInput(
      0,
      { label: 'coordinateSpaceAssociate', value: coordinates[0] },
      { label: 'drawGraphicMarker', value: 'drawGraphicMarker' },
      { label: 'shape', value: 'arrow' },
      { label: 'sizeWidth', value: '2' },
      { label: 'sizeHeight', value: '2' },
      '20',
      '2',
      '3',
      'label',
      '4',
      '5',
      '#AABBCC'
    );

    expect(component.state.arrayInput.length).toBe(1);
    expect(component.state.index).toBe(1);
  });

  test('remove inputs', async () => {
    let button = document.createElement('button');
    button.setAttribute('id', '1delete');

    await component.addInput(
      1,
      { label: 'coordinateSpaceAssociate', value: coordinates[0] },
      { label: 'drawGraphicMarker', value: 'drawGraphicMarker' },
      { label: 'shape', value: 'arrow' },
      { label: 'sizeWidth', value: '2' },
      { label: 'sizeHeight', value: '2' },
      '20',
      '2',
      '3',
      'label',
      '4',
      '5',
      '#AABBCC'
    );
    await component.addInput(
      2,
      { label: 'coordinateSpaceAssociate', value: coordinates[0] },
      { label: 'drawGraphicMarker', value: 'drawGraphicMarker' },
      { label: 'shape', value: 'arrow' },
      { label: 'sizeWidth', value: '2' },
      { label: 'sizeHeight', value: '2' },
      '20',
      '2',
      '3',
      'label',
      '4',
      '5',
      '#AABBCC'
    );

    expect(component.state.arrayInput.length).toBe(2);
    expect(component.state.index).toBe(3);

    await component.deleteOwnInput({
      target: button,
      currentTarget: button,
    });

    expect(component.state.arrayInput.length).toBe(1);
  });

  test('change input texts', async () => {
    await component.addInput(
      5,
      { label: 'coordinateSpaceAssociate', value: coordinates[0] },
      { label: 'drawGraphicMarker', value: 'drawGraphicMarker' },
      { label: 'shape', value: 'arrow' },
      { label: 'sizeWidth', value: '2' },
      { label: 'sizeHeight', value: '2' },
      '20',
      '2',
      '3',
      'label',
      '4',
      '5',
      '#AABBCC'
    );

    const newInputs = component.state.arrayInput[0];
    const newInput = newInputs.getUneClassInput();

    let expectedCases = [
      'linkWithCoordinateSpace',
      'drawGraphicMarker',
      'shape',
      'sizeWidth',
      'sizeHeight',
      'rotateArrow',
      'positionShapeX',
      'positionShapeY',
      'label',
      'positionLabelX',
      'positionLabelY',
      'color',
    ];

    for (let index = 0; index < newInput.length; index++) {
      const element = newInput[index];
      const name = element.getName();

      if (element.getInputType() === 'text') {
        component._handleChange('test-value', element.getName(), newInputs.getId());

        if (name.startsWith('rotateArrow')) {
          expectedCases = expectedCases.filter(value => value !== 'rotateArrow');
          expect(component.state.arrayPointClass[0].getRotateArrow()).toBe('test-value');
        } else if (name.startsWith('positionShapeX')) {
          expectedCases = expectedCases.filter(value => value !== 'positionShapeX');
          expect(component.state.arrayPointClass[0].getPositionShapeX()).toBe('test-value');
        } else if (name.startsWith('positionShapeY')) {
          expectedCases = expectedCases.filter(value => value !== 'positionShapeY');
          expect(component.state.arrayPointClass[0].getPositionShapeY()).toBe('test-value');
        } else if (name.startsWith('label')) {
          expectedCases = expectedCases.filter(value => value !== 'label');
          expect(component.state.arrayPointClass[0].getLabel()).toBe('test-value');
        } else if (name.startsWith('positionLabelX')) {
          expectedCases = expectedCases.filter(value => value !== 'positionLabelX');
          expect(component.state.arrayPointClass[0].getPositionLabelX()).toBe('test-value');
        } else if (name.startsWith('positionLabelY')) {
          expectedCases = expectedCases.filter(value => value !== 'positionLabelY');
          expect(component.state.arrayPointClass[0].getPositionLabelY()).toBe('test-value');
        } else {
          expect(name).toBe('in the expected cases');
        }
      } else if (element.getInputType() === 'select') {
        if (name.startsWith('linkWithCoordinateSpace')) {
          expectedCases = expectedCases.filter(value => value !== 'linkWithCoordinateSpace');
        } else if (name.startsWith('drawGraphicMarker')) {
          expectedCases = expectedCases.filter(value => value !== 'drawGraphicMarker');
        } else if (name.startsWith('shape')) {
          expectedCases = expectedCases.filter(value => value !== 'shape');
        } else if (name.startsWith('sizeWidth')) {
          expectedCases = expectedCases.filter(value => value !== 'sizeWidth');
        } else if (name.startsWith('sizeHeight')) {
          expectedCases = expectedCases.filter(value => value !== 'sizeHeight');
        } else {
          expect(name).toBe('in the expected cases');
        }
      } else if (element.getInputType() === 'color') {
        if (name.startsWith('color')) {
          expectedCases = expectedCases.filter(value => value !== 'color');
        } else {
          expect(name).toBe('in the expected cases');
        }
      }
    }
    expect(expectedCases.length).toBe(0);
  });
});
