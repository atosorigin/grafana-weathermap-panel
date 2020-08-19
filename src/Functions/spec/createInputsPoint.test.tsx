import { createInputsPoint } from '../CreateInput/createInputsPoint';
import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';

describe('waiting test', () => {
  test('to be pass', done => {
    setTimeout(() => {
      done();
    });
  });
});

// /*
//  * testing the createInputsPoint function
//  * - checking the number and id of created inputs
//  */
describe('test createInputsPoint', () => {
  let coordinates: CoordinateSpaceClass[] = [];

  beforeEach(() => {
    coordinates = [
      // new CoordinateSpaceClass(0, '-10', '10', '-10', '10', 'espace0'),
      // new CoordinateSpaceClass(1, '-20', '20', '-20', '20', 'espace0'),
    ];
  });

  afterEach(() => {
    coordinates = [];
  });

  test('init component', () => {
    const result = createInputsPoint(0);
    expect(result.length).toBe(9);
  });
});
