import { editGoodParameter, editGoodParameterExtend } from '../EditParameter/editGoodParameter';

import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';

import { TextObject } from 'Models/TextObjectClass';


describe('waiting test', () => {
  test('to be pass', done => {
    setTimeout(() => {
      done();
    });
  });
});

/*
 * testing the editGoodParameterExtend function
 */
describe('test editGoodParameterExtend', () => {
  let coordsExtend: any, testTextObjectClass;

  beforeEach(() => {
    testTextObjectClass = new TextObject(
      'legend',
      true,
      'colbr',
      'coltxtr',
      Style,
      true,
      'unit',
      'legelement',
      // 'legend',
      // 'value',
      // 'unit',
      // 'colbr',
      // 'coltxtr',
      // 'ctyletxtr',
      // 'colbackbu',
      // 'coltxtbu',
      // 'styletxtby',
      // true,
      // 'legelement',
      // 'numformatel',
      // 'unitumseu',
      // true,
      // true,
      // true,
      // 'coltxtele',
      // true,
      // 'colbackel'
    );
    
  });

  afterEach(() => {
    coordsExtend = null;
  });

  test('positionXMin', () => {
    editGoodParameterExtend('positionXMin', coordsExtend, 'test-value');
    expect(coordsExtend.getXMin()).toBe('test-value');
  });

  test('positionXMax', () => {
    editGoodParameterExtend('positionXMax', coordsExtend, 'test-value');
    expect(coordsExtend.getXMax()).toBe('test-value');
  });

  test('positionYMin', () => {
    editGoodParameterExtend('positionYMin', coordsExtend, 'test-value');
    expect(coordsExtend.getYMin()).toBe('test-value');
  });

  test('positionYMax', () => {
    editGoodParameterExtend('positionYMax', coordsExtend, 'test-value');
    expect(coordsExtend.getYMax()).toBe('test-value');
  });

  test('label', () => {
    editGoodParameterExtend('label', coordsExtend, 'test-value');
    expect(coordsExtend.getLabel()).toBe('test-value');
  });

  test('image', () => {
    editGoodParameterExtend('image', coordsExtend, 'test-value');
    expect(coordsExtend.img).toBe('test-value');
  });

  test('image', () => {
    editGoodParameterExtend('key', coordsExtend, 'test-value');
    expect(coordsExtend.key).toBe('test-value');
  });

  test('image', () => {
    editGoodParameterExtend('valueKey', coordsExtend, 'test-value');
    expect(coordsExtend.valueKey).toBe('test-value');
  });
});
