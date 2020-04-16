import { InputSelectableClass } from 'Models/InputSelectableClass';
import { SelectableValue } from '@grafana/data';

export const createInputsOrientedLink = (
  id: number,
  dataCoordinateSpace: Array<SelectableValue<string>>,
  dataPoint: Array<SelectableValue<string>>
): InputSelectableClass[] => {
  const newFieldOrientationLink: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'orientationLink',
    'Orientation',
    'orientationLink' + id.toString(),
    'select',
    [
      { label: 'Monodirectional', value: 'AB' },
      { label: 'Bidirectional', value: 'double' },
    ],
    '',
    true,
    'Orientation',
    undefined
  );
  const newFieldPointAPositionX: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'pointAX',
    'CoordinateClick A - X',
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
    'CoordinateClick A - Y',
    'pointAY' + id.toString(),
    'text',
    [],
    '',
    true,
    'PointA-Y',
    undefined
  );
  const newFieldPointBPositionX: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'pointBX',
    'CoordinateClick B - X',
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
    'CoordinateClick B - Y',
    'pointBY' + id.toString(),
    'text',
    [],
    '',
    true,
    'PointB-Y',
    undefined
  );
  const newFieldLabelLink: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'labelLink',
    'Label',
    'label' + id.toString(),
    'text',
    [],
    '',
    true,
    'Label',
    undefined
  );
  const newFieldRegionIn: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'regionIn',
    'AssociateRegionIn',
    'regionIn' + id.toString(),
    'select',
    dataCoordinateSpace,
    '',
    true,
    'Associate Region In',
    undefined
  );
  const newFieldRegionOut: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'regionOut',
    'AssociateRegionOut',
    'regionOut' + id.toString(),
    'select',
    dataCoordinateSpace,
    '',
    true,
    'Associate Region Out',
    undefined
  );
  const newFieldPointIn: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'pointIn',
    'AssociatePointIn',
    'pointIn' + id.toString(),
    'select',
    dataPoint,
    '',
    true,
    'Associate Point In',
    undefined
  );
  const newFieldPointOut: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'pointOut',
    'AssociatePointOut',
    'pointOut' + id.toString(),
    'select',
    dataPoint,
    '',
    true,
    'Associate Point Out',
    undefined
  );
  const newFieldIsIncurved: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'isIncurved',
    'Incurved',
    'isIncurved' + id.toString(),
    'select',
    [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
    '',
    true,
    'Incurved',
    undefined
  );
  const newFieldPointCPositionX: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'pointCX',
    'CoordinateClick C - X',
    'pointCX' + id.toString(),
    'text',
    [],
    '',
    true,
    'PointC-X',
    undefined
  );
  const newFieldPointCPositionY: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'pointCY',
    'CoordinateClick C - Y',
    'pointCY' + id.toString(),
    'text',
    [],
    '',
    true,
    'PointC-Y',
    undefined
  );
  const newFieldButton: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'deleteLink',
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
    newFieldLabelLink,
    newFieldOrientationLink,
    newFieldPointIn,
    newFieldRegionIn,
    newFieldPointAPositionX,
    newFieldPointAPositionY,
    newFieldPointOut,
    newFieldRegionOut,
    newFieldPointBPositionX,
    newFieldPointBPositionY,
    newFieldIsIncurved,
    newFieldPointCPositionX,
    newFieldPointCPositionY,
    newFieldButton,
  ];
  return finalArray;
};
