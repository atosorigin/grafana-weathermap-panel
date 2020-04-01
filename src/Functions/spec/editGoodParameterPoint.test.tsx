import { editGoodParameterPoint } from '../editGoodParameterPoint';
import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';
import { PointClass } from 'Models/PointClass';

/*
 * testing the editGoodParameterPoint function
 */
describe('test editGoodParameterPoint', () => {
  let coordinates: any[] = [];
  let point: any[] = [];

  beforeEach(() => {
    coordinates = [
      new CoordinateSpaceClass(0, '-10', '10', '-10', '10', 'espace0'),
      new CoordinateSpaceClass(1, '-20', '20', '-20', '20', 'espace0'),
    ];
    point = new PointClass(
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
    );
  });

  afterEach(() => {
    coordinates = [];
    point = [];
  });

  test('coordinateSpace', () => {
    editGoodParameterPoint('linkWithCoordinateSpace', point, 'test-value-unused', { label: 'test-label', value: coordinates[1] });
    expect(point.getCoordinateSpace()).toStrictEqual({ label: 'test-label', value: coordinates[1] });
  });

  test('drawGraphicMarker', () => {
    editGoodParameterPoint('drawGraphicMarker', point, 'test-value-unused', { label: 'test-label', value: 'test-value' });
    expect(point.getDrawGraphicMarker()).toStrictEqual({ label: 'test-label', value: 'test-value' });
  });

  test('shape', () => {
    editGoodParameterPoint('shape', point, 'test-value-unused', { label: 'test-label', value: 'test-value' });
    expect(point.getShape()).toStrictEqual({ label: 'test-label', value: 'test-value' });
  });

  test('sizeWidth', () => {
    editGoodParameterPoint('sizeWidth', point, 'test-value-unused', { label: 'test-label', value: 'test-value' });
    expect(point.getSizeWidth()).toStrictEqual({ label: 'test-label', value: 'test-value' });
  });

  test('sizeHeight', () => {
    editGoodParameterPoint('sizeHeight', point, 'test-value-unused', { label: 'test-label', value: 'test-value' });
    expect(point.getSizeHeight()).toStrictEqual({ label: 'test-label', value: 'test-value' });
  });

  test('rotateArrow', () => {
    editGoodParameterPoint('rotateArrow', point, 'test-value', { label: 'test-label', value: 'test-value-unused' });
    expect(point.getRotateArrow()).toBe('test-value');
  });

  test('positionShapeX', () => {
    editGoodParameterPoint('positionShapeX', point, 'test-value', { label: 'test-label', value: 'test-value-unused' });
    expect(point.getPositionShapeX()).toBe('test-value');
  });

  test('positionShapeY', () => {
    editGoodParameterPoint('positionShapeY', point, 'test-value', { label: 'test-label', value: 'test-value-unused' });
    expect(point.getPositionShapeY()).toBe('test-value');
  });

  test('label', () => {
    editGoodParameterPoint('label', point, 'test-value', { label: 'test-label', value: 'test-value-unused' });
    expect(point.getLabel()).toBe('test-value');
  });

  test('positionLabelX', () => {
    editGoodParameterPoint('positionLabelX', point, 'test-value', { label: 'test-label', value: 'test-value-unused' });
    expect(point.getPositionLabelX()).toBe('test-value');
  });

  test('positionLabelY', () => {
    editGoodParameterPoint('positionLabelY', point, 'test-value', { label: 'test-label', value: 'test-value-unused' });
    expect(point.getPositionLabelY()).toBe('test-value');
  });

  test('color', () => {
    editGoodParameterPoint('color', point, 'test-value', { label: 'test-label', value: 'test-value-unused' });
    expect(point.getColor()).toBe('test-value');
  });
});
