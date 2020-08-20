import { editGoodParameterOrientedLink } from '../EditParameter/editGoodParameterOrientedLink';

describe('waiting test', () => {
  test('to be pass', (done) => {
    setTimeout(() => {
      done();
    });
  });
});

// /*
//  * testing the editGoodParameterOrientedLink function
//  */
describe('test editGoodParameterOrientedLink', () => {
  let orientedLinkClass: any;
  let coordinates: any[] = [];
  let points: any[] = [];

  beforeEach(() => {
    afterEach(() => {
      orientedLinkClass = [];
      coordinates = [];
      points = [];
    });

    test('orientationLink', () => {
      editGoodParameterOrientedLink('orientationLink', orientedLinkClass, 'test-value-unused', { label: 'test-label', value: 'test-value' });
      expect(orientedLinkClass.getOrientationLink()).toStrictEqual({ label: 'test-label', value: 'test-value' });
    });

    test('pointAX', () => {
      editGoodParameterOrientedLink('pointAX', orientedLinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
      expect(orientedLinkClass.getPointAPositionX()).toBe('test-value');
    });

    test('pointAY', () => {
      editGoodParameterOrientedLink('pointAY', orientedLinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
      expect(orientedLinkClass.getPointAPositionY()).toBe('test-value');
    });

    test('pointBX', () => {
      editGoodParameterOrientedLink('pointBX', orientedLinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
      expect(orientedLinkClass.getPointBPositionX()).toBe('test-value');
    });

    test('pointBY', () => {
      editGoodParameterOrientedLink('pointBY', orientedLinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
      expect(orientedLinkClass.getPointBPositionY()).toBe('test-value');
    });

    test('colorCoordinateA', () => {
      editGoodParameterOrientedLink('colorCoordinateA', orientedLinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
      expect(orientedLinkClass.getColorCoordinateA()).toBe('test-value');
    });

    test('colorCoordinateB', () => {
      editGoodParameterOrientedLink('colorCoordinateB', orientedLinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
      expect(orientedLinkClass.getColorCoordinateB()).toBe('test-value');
    });

    test('labelLinkA', () => {
      editGoodParameterOrientedLink('labelLinkA', orientedLinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
      expect(orientedLinkClass.getLabelLinkA()).toBe('test-value');
    });

    test('labelLinkB', () => {
      editGoodParameterOrientedLink('labelLinkB', orientedLinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
      expect(orientedLinkClass.getLabelLinkB()).toBe('test-value');
    });

    test('positionXLabelLinkA', () => {
      editGoodParameterOrientedLink('positionXLabelLinkA', orientedLinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
      expect(orientedLinkClass.getPositionXLabelA()).toBe('test-value');
    });

    test('positionYLabelLinkA', () => {
      editGoodParameterOrientedLink('positionYLabelLinkA', orientedLinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
      expect(orientedLinkClass.getPositionYLabelA()).toBe('test-value');
    });

    test('positionXLabelLinkB', () => {
      editGoodParameterOrientedLink('positionXLabelLinkB', orientedLinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
      expect(orientedLinkClass.getPositionXLabelB()).toBe('test-value');
    });

    test('positionYLabelLinkB', () => {
      editGoodParameterOrientedLink('positionYLabelLinkB', orientedLinkClass, 'test-value', { label: 'test-label', value: 'test-value-unused' });
      expect(orientedLinkClass.getPositionYLabelB()).toBe('test-value');
    });

    test('CoordinateSpaceAssociatePointA', () => {
      editGoodParameterOrientedLink('CoordinateSpaceAssociatePointA', orientedLinkClass, 'test-value-unused', {
        label: 'test-label',
        value: coordinates[1],
      });
      expect(orientedLinkClass.getRegionIn()).toStrictEqual({ label: 'test-label', value: coordinates[1] });
    });

    test('CoordinateSpaceAssociatePointB', () => {
      editGoodParameterOrientedLink('CoordinateSpaceAssociatePointB', orientedLinkClass, 'test-value-unused', {
        label: 'test-label',
        value: coordinates[1],
      });
      expect(orientedLinkClass.getRegionOut()).toStrictEqual({ label: 'test-label', value: coordinates[1] });
    });

    test('pointIn', () => {
      editGoodParameterOrientedLink('pointIn', orientedLinkClass, 'test-value-unused', { label: 'test-label', value: points[1] });
      expect(orientedLinkClass.getPointIn()).toStrictEqual({ label: 'test-label', value: points[1] });
    });

    test('pointOut', () => {
      editGoodParameterOrientedLink('pointOut', orientedLinkClass, 'test-value-unused', { label: 'test-label', value: points[1] });
      expect(orientedLinkClass.getPointOut()).toStrictEqual({ label: 'test-label', value: points[1] });
    });
  });
});
