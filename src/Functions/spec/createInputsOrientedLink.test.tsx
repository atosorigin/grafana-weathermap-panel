import { createInputsOrientedLink } from '../CreateInput/createInputsOrientedLink';
import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';
import { PointClass } from 'Models/PointClass';

/*
 * testing the createInputsOrientedLink function
 * - checking the number and id of created inputs
 */
describe('test createInputsOrientedLink', () => {
  let coordinates: any[] = [];
  let points: any[] = [];

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
  });

  afterEach(() => {
    coordinates = [];
    points = [];
  });
  test('init', () => {
    const result = createInputsOrientedLink(5, coordinates, points);

    expect(result.length).toBe(18);
    expect(result[0].id).toBe('5orientationLink'); // newFieldOrientationLink
    expect(result[1].id).toBe('5pointIn'); // newFieldPointIn
    expect(result[2].id).toBe('5CoordinateSpaceAssociatePointA'); // newFieldRegionIn
    expect(result[3].id).toBe('5pointAX'); // newFieldPointAPositionX
    expect(result[4].id).toBe('5pointAY'); // newFieldPointAPositionY
    expect(result[5].id).toBe('5labelLinkA'); // newFieldLabelLinkA
    expect(result[6].id).toBe('5positionXLabelLinkA'); // newFieldLabelLinkAPositionX
    expect(result[7].id).toBe('5posiitonYLabelLinkA'); // newFieldLabelLinkAPositionY
    expect(result[8].id).toBe('5colorCoordinateA'); // newFieldColorCoordinateA
    expect(result[9].id).toBe('5pointOut'); // newFieldPointOut
    expect(result[10].id).toBe('5CoordinateSpaceAssociatePointB'); // newFieldRegionOut
    expect(result[11].id).toBe('5pointBX'); // newFieldPointBPositionX
    expect(result[12].id).toBe('5pointBY'); // newFieldPointBPositionY
    expect(result[13].id).toBe('5labelLinkB'); // newFieldLabelLinkB
    expect(result[14].id).toBe('5positionXLabelLinkB'); // newFieldLabelLinkBPositionX
    expect(result[15].id).toBe('5posiitonYLabelLinkB'); // newFieldLabelLinkBPositionY
    expect(result[16].id).toBe('5colorCoordinateB'); // newFieldColorCoordinateB
    expect(result[17].id).toBe('5delete'); // newFieldButton
  });
});
