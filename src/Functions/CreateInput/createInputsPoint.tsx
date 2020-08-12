import { InputSelectableClass } from 'Models/InputSelectableClass';
//import { SelectableValue } from '@grafana/data';
//import { RegionClass } from 'Models/RegionClass';

export const createInputsPoint = (id: number): InputSelectableClass[] => {
  const newFieldDrawGraphicMarker: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'drawGraphicMarker',
    'Display ',
    'drawGraphicMarker' + id.toString(),
    'select',
    [
      { value: 'true', label: 'Yes' },
      { value: 'false', label: 'No' },
    ],
    '',
    true,
    'drawGraphicMarker',
    undefined
  );
  const newFieldShape: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'shape',
    'Shape',
    'shape' + id.toString(),
    'select',
    [
      { value: 'none', label: 'None' },
      { value: 'circle', label: 'Circle' },
      { value: 'square', label: 'Square' },
      { value: 'diamond', label: 'Diamond' },
    ],
    '',
    true,
    'Shape',
    undefined
  );
  const newFieldSizeWidthShape: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'sizeWidth',
    'Size (px)',
    'sizeWidth' + id.toString(),
    'text',
    // [
    //   { value: 'small', label: 'Small' },
    //   { value: 'medium', label: 'Medium' },
    //   { value: 'large', label: 'Large' },
    // ],
    [],
    '',
    true,
    'SizeWidth',
    undefined
  );
  const newFieldSizeHeightShape: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'sizeHeight',
    'Width',
    'sizeHeight' + id.toString(),
    'select',
    [
      { value: 'small', label: 'Small' },
      { value: 'medium', label: 'Medium' },
      { value: 'large', label: 'Large' },
    ],
    '',
    true,
    'SizeHeight',
    undefined
  );
  const newFieldRotateArrow: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'rotateArrow',
    'Orientation',
    'rotateArrow' + id.toString(),
    'text',
    [],
    '',
    true,
    'RotateArrow',
    undefined
  );
  const newFieldPositionXShape: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'positionShapeX',
    'Position X',
    'positionShapeX' + id.toString(),
    'text',
    [],
    '',
    true,
    'Position X Shape',
    undefined
  );
  const newFieldPositionYShape: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'positionShapeY',
    'Position Y',
    'positionShapeY' + id.toString(),
    'text',
    [],
    '',
    true,
    'Position Y Shape',
    undefined
  );
  const newFieldLabel: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'labelPoint',
    'Label',
    'labelPoint' + id.toString(),
    'text',
    [],
    '',
    true,
    'Label',
    undefined
  );
  const newFieldButton: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'deletePoint',
    'Delete',
    'delete' + id.toString(),
    'button',
    [],
    '',
    true,
    undefined,
    'Delete'
  );

  const finalArray: InputSelectableClass[] = [
    newFieldLabel,
    newFieldDrawGraphicMarker,
    newFieldShape,
    newFieldSizeWidthShape,
    newFieldSizeHeightShape,
    newFieldRotateArrow,
    newFieldPositionXShape,
    newFieldPositionYShape,
    newFieldButton,
  ];
  return finalArray;
};
