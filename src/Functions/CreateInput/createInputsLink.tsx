import { InputSelectableClass } from 'Models/InputSelectableClass';
import { SelectableValue } from '@grafana/data';
import { PointClass } from 'Models/PointClass';
import { RegionClass } from 'Models/RegionClass';

export const createInputsLink = (
  id: number,
  dataPoint: Array<SelectableValue<PointClass>>,
  dataRegion: Array<SelectableValue<RegionClass>>
): InputSelectableClass[] => {
  const newFieldCoordinates: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'GetCoordinate',
    'Coordinates type',
    'getCoordinate' + id.toString(),
    'select',
    [
      { label: 'Coordinate', value: 'coordinate' },
      { label: 'Point', value: 'point' },
      { label: 'Region', value: 'region' },
    ],
    '',
    true,
    'getCoordinate',
    undefined
  );
  const newFieldOrientationLink: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'orientationLink',
    'Orientation',
    'orientationLink' + id.toString(),
    'select',
    [
      { label: 'Unidirectional', value: 'AB' },
      { label: 'Bidirectional', value: 'double' },
    ],
    '',
    true,
    'Orientation',
    undefined
  );
  const newFieldPointAPositionX: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'pointAX',
    'Point A - X',
    'pointAX' + id.toString(),
    'text',
    [],
    '',
    true,
    'PointA-X',
    undefined
  );
  const newFieldPointAPositionY: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'pointAY',
    'Point A - Y',
    'pointAY' + id.toString(),
    'text',
    [],
    '',
    true,
    'PointA-Y',
    undefined
  );
  // const newFieldColorCoordinateA: InputSelectableClass = new InputSelectableClass(id.toString() + 'colorCoordinateA',
  // 	'Color A', 'colorCoordinateA' + id.toString(), 'color',
  // 	[], '', true, '', undefined);
  const newFieldPointBPositionX: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'pointBX',
    'Point B - X',
    'pointBX' + id.toString(),
    'text',
    [],
    '',
    true,
    'PointB-X',
    undefined
  );
  const newFieldPointBPositionY: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'pointBY',
    'Point B - Y',
    'pointBY' + id.toString(),
    'text',
    [],
    '',
    true,
    'PointB-Y',
    undefined
  );
  // const newFieldColorCoordinateB: InputSelectableClass = new InputSelectableClass(id.toString() + 'colorCoordinateB',
  // 	'Color B', 'colorCoordinateB' + id.toString(), 'color',
  // 	[], '', true, '', undefined);
  const newFieldPointIn: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'pointIn',
    'Point in',
    'pointIn' + id.toString(),
    'select',
    dataPoint,
    '',
    true,
    'Point in',
    undefined
  );
  const newFieldPointOut: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'pointOut',
    'Point out',
    'pointOut' + id.toString(),
    'select',
    dataPoint,
    '',
    true,
    'Point out',
    undefined
  );
  const newFieldRegionIn: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'regionIn',
    'Region in',
    'regionIn' + id.toString(),
    'select',
    dataRegion,
    '',
    true,
    'Region in',
    undefined
  );
  // const newFieldColorRegionIn: InputSelectableClass = new InputSelectableClass(id.toString() + 'colorRegionIn',
  // 	'Color A', 'colorRegionIn' + id.toString(), 'color',
  // 	[], '', true, '', undefined);
  const newFieldRegionOut: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'regionOut',
    'Region out',
    'regionOut' + id.toString(),
    'select',
    dataRegion,
    '',
    true,
    'Region out',
    undefined
  );
  // const newFieldColorRegionOut: InputSelectableClass = new InputSelectableClass(id.toString() + 'colorRegionOut',
  // 	'Color B', 'colorRegionOut' + id.toString(), 'color',
  // 	[], '', true, '', undefined);
  // const newFieldLabelLinkA: InputSelectableClass = new InputSelectableClass(id.toString() + 'labelLinkA',
  // 	'Label A', 'labelLinkA' + id.toString(), 'text',
  // 	[], '', true, 'Label A', undefined);
  // const newFieldLabelLinkAPositionX: InputSelectableClass = new InputSelectableClass(id.toString() + 'positionXLabelLinkA',
  // 	'Label A - X', 'positionXLabelLinkA' + id.toString(), 'text',
  // 	[], '', true, 'Label A - Position X', undefined);
  // const newFieldLabelLinkAPositionY: InputSelectableClass = new InputSelectableClass(id.toString() + 'posiitonYLabelLinkA',
  // 	'Label A - Y', 'positionYLabelLinkA' + id.toString(), 'text',
  // 	[], '', true, 'Label A - Position Y', undefined);
  // const newFieldLabelLinkB: InputSelectableClass = new InputSelectableClass(id.toString() + 'labelLinkB',
  // 	'Label B', 'labelLinkB' + id.toString(), 'text',
  // 	[], '', true, 'Label B', undefined);
  // const newFieldLabelLinkBPositionX: InputSelectableClass = new InputSelectableClass(id.toString() + 'positionXLabelLinkB',
  // 	'Label B - X', 'positionXLabelLinkB' + id.toString(), 'text',
  // 	[], '', true, 'Label B - Position X', undefined);
  // const newFieldLabelLinkBPositionY: InputSelectableClass = new InputSelectableClass(id.toString() + 'posiitonYLabelLinkB',
  // 	'Label B - Y', 'positionYLabelLinkB' + id.toString(), 'text',
  // 	[], '', true, 'Label B - Position Y', undefined);
  const newFieldButton: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'delete',
    'Delete',
    'delete' + id.toString(),
    'button',
    [],
    '',
    false,
    undefined,
    'delete'
  );

  const finalArray: InputSelectableClass[] = [
    newFieldCoordinates,
    newFieldOrientationLink,
    newFieldPointAPositionX,
    newFieldPointAPositionY,
    newFieldPointIn,
    newFieldRegionIn,
    // newFieldLabelLinkA,
    // newFieldLabelLinkAPositionX,
    // newFieldLabelLinkAPositionY,
    // newFieldColorCoordinateA,
    // newFieldColorRegionIn,
    newFieldPointBPositionX,
    newFieldPointBPositionY,
    newFieldPointOut,
    newFieldRegionOut,
    // newFieldLabelLinkB,
    // newFieldLabelLinkBPositionX,
    // newFieldLabelLinkBPositionY,
    // newFieldColorCoordinateB,
    // newFieldColorRegionOut,
    newFieldButton,
  ];
  return finalArray;
};
