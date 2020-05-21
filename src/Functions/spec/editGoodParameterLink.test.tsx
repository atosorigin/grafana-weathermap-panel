import { editGoodParameterLink } from '../EditParameter/editGoodParameterLink';
import { LinkClass } from 'Models/LinkClass';
import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';

/*
 * testing the editGoodParameterLink function
 */
describe('test editGoodParameterLink', () => {
  let linkClass: any;
  let coordinates: any = [];

  beforeEach(() => {
    coordinates = [
      new CoordinateSpaceClass(0, linkClass, '20', linkClass, '20', linkClass, linkClass, [], true, true, true, linkClass),
      new CoordinateSpaceClass(0, linkClass, '20', linkClass, '20', linkClass, linkClass, [], true, true, true, linkClass),
    ];

    linkClass = new LinkClass(
      5,
      linkClass,
      linkClass,
      linkClass,
      '15',
      linkClass,
      linkClass,
      linkClass,
      true,
      true,
      true,
      linkClass,
      'colorRegionIn',
      { label: 'regionOut', value: coordinates[0] },
      ['colorregionout'],
      'labellinkA',
      '87',
      '32',
      'labellinkB',
      '10',
      '10',
      [4],
      [5],
      [4],
      '',
      [4],
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    );
  });

  afterEach(() => {
    linkClass = null;
    coordinates = [];
  });

  test('getCoordinate', () => {
    editGoodParameterLink('getCoordinate', linkClass, 'test-value-unused', []);
    expect((linkClass.getdefineHowToGetCoordonate = { label: 'test-label', value: 'test-value' })).toStrictEqual({
      label: 'test-label',
      value: 'test-value',
    });
  });

  test('orientationLink', () => {
    editGoodParameterLink('orientationLink', linkClass, 'test-value-unused', []);
    expect((linkClass.getorientationLink = { label: 'test-label', value: 'test-value' })).toStrictEqual({
      label: 'test-label',
      value: 'test-value',
    });
  });

  test('pointIn', () => {
    editGoodParameterLink('pointIn', linkClass, 'test-value-unused', []);
    expect((linkClass.getpointIn = { label: 'test-label', value: 'test-value' })).toStrictEqual({
      label: 'test-label',
      value: 'test-value',
    });
  });

  test('pointOut', () => {
    editGoodParameterLink('pointOut', linkClass, 'test-value-unused', []);
    expect((linkClass.getpointOut = { label: 'test-label', value: 'test-value' })).toStrictEqual({
      label: 'test-label',
      value: 'test-value',
    });
  });

  test('regionIn', () => {
    editGoodParameterLink('regionIn', linkClass, 'test-value-unused', []);
    expect((linkClass.getregionIn = { label: 'test-label', value: 'test-value' })).toStrictEqual({
      label: 'test-label',
      value: 'test-value',
    });
  });

  test('regionOut', () => {
    editGoodParameterLink('regionOut', linkClass, 'test-value-unused', {});
    expect((linkClass.getregionOut = { label: 'test-label', value: 'test-value' })).toStrictEqual({
      label: 'test-label',
      value: 'test-value',
    });
  });

  test('pointAX', () => {
    editGoodParameterLink('pointAX', linkClass, 'test-value', []);
    expect((linkClass.getpointAX = { label: 'test-label', value: 'test-value' })).toStrictEqual({
      label: 'test-label',
      value: 'test-value',
    });
  });

  test('pointAY', () => {
    editGoodParameterLink('pointAY', linkClass, 'test-value', []);
    expect((linkClass.getpointAY = { label: 'test-label', value: 'test-value' })).toStrictEqual({
      label: 'test-label',
      value: 'test-value',
    });
  });

  test('pointBX', () => {
    editGoodParameterLink('pointBX', linkClass, 'test-value', []);
    expect((linkClass.getpointBX = { label: 'test-label', value: 'test-value' })).toStrictEqual({
      label: 'test-label',
      value: 'test-value',
    });
  });

  test('pointBY', () => {
    editGoodParameterLink('pointBY', linkClass, 'test-value', []);
    expect((linkClass.getpointBY = { label: 'test-label', value: 'test-value' })).toStrictEqual({
      label: 'test-label',
      value: 'test-value',
    });
  });

  test('colorCoordinateA', () => {
    editGoodParameterLink('colorCoordinateA', linkClass, 'test-value', []);
    expect((linkClass.getcolorCoordinateA = { label: 'test-label', value: 'test-value' })).toStrictEqual({
      label: 'test-label',
      value: 'test-value',
    });
  });

  test('colorCoordinateB', () => {
    editGoodParameterLink('colorCoordinateB', linkClass, 'test-value', []);
    expect((linkClass.getcolorCoordinateB = { label: 'test-label', value: 'test-value' })).toStrictEqual({
      label: 'test-label',
      value: 'test-value',
    });
  });

  test('colorRegionIn', () => {
    editGoodParameterLink('colorRegionIn', linkClass, 'test-value', []);
    expect((linkClass.getcolorRegionIn = { label: 'test-label', value: 'test-value' })).toStrictEqual({
      label: 'test-label',
      value: 'test-value',
    });
  });

  test('colorRegionOut', () => {
    editGoodParameterLink('colorRegionOut', linkClass, 'test-value', []);
    expect((linkClass.getcolorRegionOut = { label: 'test-label', value: 'test-value' })).toStrictEqual({
      label: 'test-label',
      value: 'test-value',
    });
  });

  test('labelLinkA', () => {
    editGoodParameterLink('labelLinkA', linkClass, 'test-value', []);
    expect((linkClass.getlabelLinkA = { label: 'test-label', value: 'test-value' })).toStrictEqual({
      label: 'test-label',
      value: 'test-value',
    });
  });

  test('labelLinkB', () => {
    editGoodParameterLink('labelLinkB', linkClass, 'test-value', []);
    expect((linkClass.getlabelLinkB = { label: 'test-label', value: 'test-value' })).toStrictEqual({
      label: 'test-label',
      value: 'test-value',
    });
  });

  test('positionXLabelLinkA', () => {
    editGoodParameterLink('positionXLabelLinkB', linkClass, 'test-value', []);
    expect((linkClass.getpositionXLabelLinkB = { label: 'test-label', value: 'test-value' })).toStrictEqual({
      label: 'test-label',
      value: 'test-value',
    });
  });

  test('positionYLabelLinkA', () => {
    editGoodParameterLink('positionYLabelLinkA', linkClass, 'test-value', []);
    expect((linkClass.getpositionYLabelLinkA = { label: 'test-label', value: 'test-value' })).toStrictEqual({
      label: 'test-label',
      value: 'test-value',
    });
  });

  test('positionXLabelLinkB', () => {
    editGoodParameterLink('positionXLabelLinkB', linkClass, 'test-value', []);
    expect((linkClass.getpositionXLabelLinkB = { label: 'test-label', value: 'test-value' })).toStrictEqual({
      label: 'test-label',
      value: 'test-value',
    });
  });

  test('positionYLabelLinkB', () => {
    editGoodParameterLink('positionYLabelLinkB', linkClass, 'test-value', []);
    expect((linkClass.getpositionYLabelLinkB = { label: 'test-label', value: 'test-value' })).toStrictEqual({
      label: 'test-label',
      value: 'test-value',
    });
  });
});
