// import { editGoodParameterPoint } from '../EditParameter/editGoodParameterPoint';
// import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';
// import { PointClass } from 'Models/PointClass';

describe('waiting test', () => {
  test('to be pass', done => {
    setTimeout(() => {
      done();
    });
  });
});

// /*
//  * testing the editGoodParameterPoint function
//  */
describe('test editGoodParameterPoint', () => {
  let coordinates: number[] = [];
  let point: [] = [];

  beforeEach(() => {
    // coordinates = [
    //   new CoordinateSpaceClass(0, '-10', '10', '-10', '10', 'espace0'),
    //   new CoordinateSpaceClass(1, '-20', '20', '-20', '20', 'espace0'),
    // ];
    // point = new PointClass(
    //   0,
    //   { label: 'coord0', value: coordinates[0] },
    //   { label: 'shape', value: 'A' },
    //   { label: 'shape', value: 'arrow' },
    //   { label: 'width', value: '1' },
    //   { label: 'height', size: '1' },
    //   'right',
    //   '5',
    //   '4',
    //   'point0',
    //   '6',
    //   '5',
    //   '#AABBCC'
    // );
  });

  afterEach(() => {
    coordinates = [];
    point = [];
  });

  test('coordinateSpace', () => {});

  test('drawGraphicMarker', () => {});

  test('shape', () => {});

  test('sizeWidth', () => {});

  test('sizeHeight', () => {});

  test('rotateArrow', () => {});

  test('positionShapeX', () => {});

  test('positionShapeY', () => {});

  test('label', () => {});

  test('positionLabelX', () => {});

  test('positionLabelY', () => {});

  test('color', () => {});
});
