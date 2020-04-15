import { editGoodParameterLink } from '../EditParameter/editGoodParameterLink';

import { PointClass } from 'Models/PointClass';
import { LinkClass } from 'Models/LinkClass';



/*
 * testing the editGoodParameterLink function
 */
describe('test editGoodParameterLink', () => {
  let LinkClass: any;
  let coordinates: any[] = [];
  let points: any[] = [];

  beforeEach(() => {
  
    points = [
      new PointClass(
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
      // ),
      
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

   LinkClass= new LinkClass(
      5,
      { label: 'coordinates', value: 'coordinates' },
      { label: 'orientationlink', value: 'orientationlinl' },
      '10',
      '15',
      '17',
      '19',
      '-10',
      '-15',
      { label: 'pointIn', value: points[0] },
      { label: 'pointIn', value: points[0] },
      { label: 'regionIn', value: coordinates[0] },
      'colorRegionIn',
      { label: 'regionOut', value: coordinates[0] },
      'colorregionout',
      'labellinkA',
      '87',
      '32',
      'labellinkB',
      '10',
      '10'
    );
  });

  afterEach(() => {
  LinkClass= null;
    coordinates = [];
    points = [];
  });

  test('getCoordinate', () => {
    editGoodParameterLink('getCoordinate', LinkClass, 'test-value-unused', { label: 'test-label', value: 'test-value' });
    expect(LinkClass.getDefineHowToGetCoordonate()).toStrictEqual({ label: 'test-label', value: 'test-value' });
  });

  test('orientationLink', () => {
    editGoodParameterLink('orientationLink', LinkClass, 'test-value-unused', { label: 'test-label', value: 'test-value' });
    expect(LinkClass.getOrientationLink()).toStrictEqual({ label: 'test-label', value: 'test-value' });
  });

  test('pointIn', () => {
    editGoodParameterLink('pointIn', LinkClass, 'test-value-unused', { label: 'test-label', value: points[1] });
    expect(LinkClass.getPointIn()).toStrictEqual({ label: 'test-label', value: points[1] });
  });

  test('pointOut', () => {
    editGoodParameterLink('pointOut', LinkClass, 'test-value-unused', { label: 'test-label', value: points[1] });
    expect(LinkClass.getPointOut()).toStrictEqual({ label: 'test-label', value: points[1] });
  });

  test('regionIn', () => {
    editGoodParameterLink('regionIn', LinkClass, 'test-value-unused', { label: 'test-label', value: coordinates[1] });
    expect(LinkClass.getRegionIn()).toStrictEqual({ label: 'test-label', value: coordinates[1] });
  });

  test('regionOut', () => {
    editGoodParameterLink('regionOut', LinkClass, 'test-value-unused', { label: 'test-label', value: coordinates[1] });
    expect(LinkClass.getRegionOut()).toStrictEqual({ label: 'test-label', value: coordinates[1] });
  });

  test('pointAX', () => {
    editGoodParameterLink('pointAX', LinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
    expect(LinkClass.getPointAPositionX()).toBe('test-value');
  });

  test('pointAY', () => {
    editGoodParameterLink('pointAY', LinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
    expect(LinkClass.getPointAPositionY()).toBe('test-value');
  });

  test('pointBX', () => {
    editGoodParameterLink('pointBX', LinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
    expect(LinkClass.getPointBPositionX()).toBe('test-value');
  });

  test('pointBY', () => {
    editGoodParameterLink('pointBY', LinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
    expect(LinkClass.getPointBPositionY()).toBe('test-value');
  });

  test('colorCoordinateA', () => {
    editGoodParameterLink('colorCoordinateA', LinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
    expect(LinkClass.getColorCoordinateA()).toBe('test-value');
  });

  test('colorCoordinateB', () => {
    editGoodParameterLink('colorCoordinateB', LinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
    expect(LinkClass.getColorCoordinateB()).toBe('test-value');
  });

  test('colorRegionIn', () => {
    editGoodParameterLink('colorRegionIn', LinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
    expect(LinkClass.getColorRegionIn()).toBe('test-value');
  });

  test('colorRegionOut', () => {
    editGoodParameterLink('colorRegionOut', LinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
    expect(LinkClass.getColorRegionOut()).toBe('test-value');
  });

  test('labelLinkA', () => {
    editGoodParameterLink('labelLinkA', LinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
    expect(LinkClass.getLabelLinkA()).toBe('test-value');
  });

  test('labelLinkB', () => {
    editGoodParameterLink('labelLinkB', LinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
    expect(LinkClass.getLabelLinkB()).toBe('test-value');
  });

  test('positionXLabelLinkA', () => {
    editGoodParameterLink('positionXLabelLinkA', LinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
    expect(LinkClass.getPositionXLabelA()).toBe('test-value');
  });

  test('positionYLabelLinkA', () => {
    editGoodParameterLink('positionYLabelLinkA', LinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
    expect(LinkClass.getPositionYLabelA()).toBe('test-value');
  });

  test('positionXLabelLinkB', () => {
    editGoodParameterLink('positionXLabelLinkB', LinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
    expect(LinkClass.getPositionXLabelB()).toBe('test-value');
  });

  test('positionYLabelLinkB', () => {
    editGoodParameterLink('positionYLabelLinkB', LinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
    expect(LinkClass.getPositionYLabelB()).toBe('test-value');
  });
});

// /*
//  * testing the editGoodParameterLink function
//  */
// describe('test editGoodParameterLink', () => {
//   let linkClass: any;
//   let coordinates: any[] = [];
//   let points: any[] = [];

//   beforeEach(() => {
//     coordinates = [
//       new CoordinateSpaceClass(0, '-10', '10', '-10', '10', 'espace0'),
//       new CoordinateSpaceClass(1, '-20', '20', '-20', '20', 'espace0'),
//     ];
//     points = [
//       new PointClass(
//         0,
//         { label: 'coord0', value: coordinates[0] },
//         { label: 'shape', value: 'A' },
//         { label: 'shape', value: 'arrow' },
//         { label: 'width', value: '1' },
//         { label: 'height', size: '1' },
//         'right',
//         '5',
//         '4',
//         'point0',
//         '6',
//         '5',
//         '#AABBCC'
//       ),
//       new PointClass(
//         1,
//         { label: 'coord1', value: coordinates[0] },
//         { label: 'shape', value: 'A' },
//         { label: 'shape', value: 'arrow' },
//         { label: 'width', value: '1' },
//         { label: 'height', size: '1' },
//         'right',
//         '4',
//         '5',
//         'point0',
//         '5',
//         '6',
//         '#BBCCDD'
//       ),
//     ];

//     linkClass = new LinkClass(
//       5,
//       { label: 'coordinates', value: 'coordinates' },
//       { label: 'orientationlink', value: 'orientationlinl' },
//       '10',
//       '15',
//       '17',
//       '19',
//       '-10',
//       '-15',
//       { label: 'pointIn', value: points[0] },
//       { label: 'pointIn', value: points[0] },
//       { label: 'regionIn', value: coordinates[0] },
//       'colorRegionIn',
//       { label: 'regionOut', value: coordinates[0] },
//       'colorregionout',
//       'labellinkA',
//       '87',
//       '32',
//       'labellinkB',
//       '10',
//       '10'
//     );
//   });

//   afterEach(() => {
//     linkClass = null;
//     coordinates = [];
//     points = [];
//   });

//   test('getCoordinate', () => {
//     editGoodParameterLink('getCoordinate', linkClass, 'test-value-unused', { label: 'test-label', value: 'test-value' });
//     expect(linkClass.getDefineHowToGetCoordonate()).toStrictEqual({ label: 'test-label', value: 'test-value' });
//   });

//   test('orientationLink', () => {
//     editGoodParameterLink('orientationLink', linkClass, 'test-value-unused', { label: 'test-label', value: 'test-value' });
//     expect(linkClass.getOrientationLink()).toStrictEqual({ label: 'test-label', value: 'test-value' });
//   });

//   test('pointIn', () => {
//     editGoodParameterLink('pointIn', linkClass, 'test-value-unused', { label: 'test-label', value: points[1] });
//     expect(linkClass.getPointIn()).toStrictEqual({ label: 'test-label', value: points[1] });
//   });

//   test('pointOut', () => {
//     editGoodParameterLink('pointOut', linkClass, 'test-value-unused', { label: 'test-label', value: points[1] });
//     expect(linkClass.getPointOut()).toStrictEqual({ label: 'test-label', value: points[1] });
//   });

//   test('regionIn', () => {
//     editGoodParameterLink('regionIn', linkClass, 'test-value-unused', { label: 'test-label', value: coordinates[1] });
//     expect(linkClass.getRegionIn()).toStrictEqual({ label: 'test-label', value: coordinates[1] });
//   });

//   test('regionOut', () => {
//     editGoodParameterLink('regionOut', linkClass, 'test-value-unused', { label: 'test-label', value: coordinates[1] });
//     expect(linkClass.getRegionOut()).toStrictEqual({ label: 'test-label', value: coordinates[1] });
//   });

//   test('pointAX', () => {
//     editGoodParameterLink('pointAX', linkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
//     expect(linkClass.getPointAPositionX()).toBe('test-value');
//   });

//   test('pointAY', () => {
//     editGoodParameterLink('pointAY', linkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
//     expect(linkClass.getPointAPositionY()).toBe('test-value');
//   });

//   test('pointBX', () => {
//     editGoodParameterLink('pointBX', linkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
//     expect(linkClass.getPointBPositionX()).toBe('test-value');
//   });

//   test('pointBY', () => {
//     editGoodParameterLink('pointBY', linkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
//     expect(linkClass.getPointBPositionY()).toBe('test-value');
//   });

//   test('colorCoordinateA', () => {
//     editGoodParameterLink('colorCoordinateA', linkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
//     expect(linkClass.getColorCoordinateA()).toBe('test-value');
//   });

//   test('colorCoordinateB', () => {
//     editGoodParameterLink('colorCoordinateB', linkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
//     expect(linkClass.getColorCoordinateB()).toBe('test-value');
//   });

//   test('colorRegionIn', () => {
//     editGoodParameterLink('colorRegionIn', linkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
//     expect(linkClass.getColorRegionIn()).toBe('test-value');
//   });

//   test('colorRegionOut', () => {
//     editGoodParameterLink('colorRegionOut', linkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
//     expect(linkClass.getColorRegionOut()).toBe('test-value');
//   });

//   test('labelLinkA', () => {
//     editGoodParameterLink('labelLinkA', linkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
//     expect(linkClass.getLabelLinkA()).toBe('test-value');
//   });

//   test('labelLinkB', () => {
//     editGoodParameterLink('labelLinkB', linkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
//     expect(linkClass.getLabelLinkB()).toBe('test-value');
//   });

//   test('positionXLabelLinkA', () => {
//     editGoodParameterLink('positionXLabelLinkA', linkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
//     expect(linkClass.getPositionXLabelA()).toBe('test-value');
//   });

//   test('positionYLabelLinkA', () => {
//     editGoodParameterLink('positionYLabelLinkA', linkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
//     expect(linkClass.getPositionYLabelA()).toBe('test-value');
//   });

//   test('positionXLabelLinkB', () => {
//     editGoodParameterLink('positionXLabelLinkB', linkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
//     expect(linkClass.getPositionXLabelB()).toBe('test-value');
//   });

//   test('positionYLabelLinkB', () => {
//     editGoodParameterLink('positionYLabelLinkB', linkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
//     expect(linkClass.getPositionYLabelB()).toBe('test-value');
//   });
// });
