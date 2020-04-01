import { InputSelectableClass } from 'Models/InputSelectableClass';
import { SelectableValue } from '@grafana/data';
import { RegionClass } from 'Models/RegionClass';

export const createInputsPoint = (id: number, dataEspaceCoor: Array<SelectableValue<RegionClass>>): InputSelectableClass[] => {
  // const newFieldLinkWithCoordonateSpace: InputSelectableClass = new InputSelectableClass(id.toString() + 'LinkWithCoordinateSpace',
  // 	'Associate region', 'linkWithCoordinateSpace' + id.toString(), 'select',
  // 	dataEspaceCoor, '', true, 'Associate region', undefined);
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
  // const newFieldShape: InputSelectableClass = new InputSelectableClass(id.toString() + 'shape',
  // 	'GraphicMarker', 'shape' + id.toString(), 'select',
  // 	[
  // 		{ value: 'arrow', label: 'Arrow' },
  // 		{ value: 'circle', label: 'Circle' },
  // 		{ value: 'cross', label: 'Cross' },
  // 	],
  // 	'', true, 'Shape', undefined);
  const newFieldSizeWidthShape: InputSelectableClass = new InputSelectableClass(
    id.toString() + 'sizeWidth',
    'Size',
    'sizeWidth' + id.toString(),
    'select',
    [
      { value: 'small', label: 'Small' },
      { value: 'medium', label: 'Medium' },
      { value: 'large', label: 'Large' },
    ],
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
  // const newFieldColor: InputSelectableClass = new InputSelectableClass(id.toString() + 'color',
  // 	'Color', 'color' + id.toString(), 'color', [],
  // 	'#5794F2', true, 'Color', undefined);
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
  // const newFieldPositionLabelX: InputSelectableClass = new InputSelectableClass(id.toString() + 'positionLabelX',
  // 	'Position X Label', 'positionLabelX' + id.toString(),
  // 	'text', [], '', true, 'Position X Label', undefined);
  // const newFieldPositionLabelY: InputSelectableClass = new InputSelectableClass(id.toString() + 'positionLabelY',
  // 	'Position Y Label', 'positionLabelY' + id.toString(),
  // 	'text', [], '', true, 'Position Y Label', undefined);
  // const newFieldMainMetric: InputSelectableClass = new InputSelectableClass(id.toString() + 'refIdMainMetricPoint',
  // 	'Ref Id Main Metric', 'refIdMainMetric' + id.toString(), 'text',
  // 	[], '', true, 'RefId Main Metric', undefined);
  // const newFieldKeyMainMetric: InputSelectableClass = new InputSelectableClass(id.toString() + 'keyMainMetricPoint',
  // 	'Key Main Metric', 'keyMainMetric' + id.toString(), 'text',
  // 	[], '', true, 'Key Main Metric', undefined);
  // const newFieldKeyValueMainMetric: InputSelectableClass = new InputSelectableClass(id.toString() + 'keyValueMainMetricPoint',
  // 	'Key Value Main Metric', 'keyValueMainMetric' + id.toString(), 'text',
  // 	[], '', true, 'Key Value Main Metric', undefined);
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
    //newFieldLinkWithCoordonateSpace,
    newFieldDrawGraphicMarker,
    //newFieldShape,
    newFieldSizeWidthShape,
    newFieldSizeHeightShape,
    //newFieldColor,
    newFieldRotateArrow,
    newFieldPositionXShape,
    newFieldPositionYShape,
    // newFieldPositionLabelX,
    // newFieldPositionLabelY,
    // newFieldMainMetric,
    // newFieldKeyMainMetric,
    // newFieldKeyValueMainMetric,
    newFieldButton,
  ];
  return finalArray;
};
