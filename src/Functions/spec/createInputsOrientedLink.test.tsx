import { createInputsOrientedLink } from '../CreateInput/createInputsOrientedLink';
// import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';
// import { PointClass } from 'Models/PointClass';

describe('waiting test', () => {
  test('to be pass', (done) => {
    setTimeout(() => {
      done();
    });
  });
});

// /*
//  * testing the createInputsOrientedLink function
//  * - checking the number and id of created inputs
//  */
describe('test createInputsOrientedLink', () => {
  let coordinates: any[] = [];
  let points: any[] = [];

  beforeEach(() => {});

  afterEach(() => {
    coordinates = [];
    points = [];
  });
  test('init', () => {
    const result = createInputsOrientedLink(5, coordinates, points);

    expect(result.length).toBe(15);
  });
});
