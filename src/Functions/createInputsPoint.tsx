import { InputSelectableClass } from '../Models/inputSelectableClass';
import { SelectableValue } from '@grafana/data';
import { EspaceCoordonneesClass } from 'Models/EspaceCoordonneesClass';

export const createInputsPoint = (id: number, dataEspaceCoor: SelectableValue<EspaceCoordonneesClass>[]): InputSelectableClass[] => {
	const newFieldLinkWithCoordonateSpace: InputSelectableClass = new InputSelectableClass(id + 'LinkWithCoordinateSpace',
		'Associate region', 'linkWithCoordinateSpace' + id.toString(), 'select',
		dataEspaceCoor, '', true, 'Associate region', undefined);	
	const newFieldDrawGraphicMarker: InputSelectableClass = new InputSelectableClass(id + 'drawGraphicMarker',
		'Display ', 'drawGraphicMarker' + id.toString(), 'select',
		[
			{value: 'true', label: 'Yes'},
			{value: 'false', label: 'No'},
		],
		'', true, 'drawGraphicMarker', undefined);
	const newFieldShape: InputSelectableClass = new InputSelectableClass(id + 'shape',
		'GraphicMarker', 'shape' + id.toString(), 'select',
		[
			{value: 'arrow', label: 'Arrow'},
			{value: 'circle', label: 'Circle'},
			{value: 'cross', label: 'Cross'},
		],
		'', true, 'Shape', undefined);
	const newFieldSizeWidthShape: InputSelectableClass = new InputSelectableClass(id + 'sizeWidth',
		'Length', 'sizeWidth' + id.toString(),
		'select',
		[
			{value: 'small', label: 'Small'},
			{value: 'medium', label: 'Medium'},
			{value: 'large', label: 'Large'},
		],
		'', true, 'SizeWidth', undefined);
	const newFieldSizeHeightShape: InputSelectableClass = new InputSelectableClass(id + 'sizeHeight',
		'Width', 'sizeHeight' + id.toString(),
		'select',
		[
			{value: 'small', label: 'Small'},
			{value: 'medium', label: 'Medium'},
			{value: 'large', label: 'Large'},
		],
		'', true, 'SizeHeight', undefined);
	const newFieldColor: InputSelectableClass = new InputSelectableClass(id + 'color',
		'Color', 'color' + id.toString(), 'color', [],
		'#5794F2', true, 'Color', undefined);
	const newFieldRotateArrow: InputSelectableClass = new InputSelectableClass(id + 'rotateArrow',
		'Orientation', 'rotateArrow' + id.toString(), 'text', [],'', true, 'RotateArrow', undefined);
	const newFieldPositionXShape: InputSelectableClass = new InputSelectableClass(id + 'positionShapeX',
		'Position X', 'positionShapeX' + id.toString(),
		'text', [], '', true, 'Position X Shape', undefined);
	const newFieldPositionYShape: InputSelectableClass = new InputSelectableClass(id + 'positionShapeY',
		'Position Y', 'positionShapeY' + id.toString(),
        'text', [], '', true, 'Position Y Shape', undefined);
    const newFieldLabel: InputSelectableClass = new InputSelectableClass(id + 'label',
		'Label', 'label' + id.toString(),
		'text', [], '', true, 'Label', undefined);
	const newFieldPositionLabelX: InputSelectableClass = new InputSelectableClass(id + 'positionLabelX',
		'Position X Label', 'positionLabelX' + id.toString(),
		'text', [], '', true, 'Position X Label', undefined);
	const newFieldPositionLabelY: InputSelectableClass = new InputSelectableClass(id + 'positionLabelY',
		'Position Y Label', 'positionLabelY' + id.toString(),
		'text', [], '', true, 'Position Y Label', undefined);
	const newFieldButton: InputSelectableClass = new InputSelectableClass(id + 'delete',
		'Delete', 'delete' + id.toString(),
		'button', [], '', true, undefined, 'Delete');

	const finalArray: InputSelectableClass[] = [
		newFieldLinkWithCoordonateSpace,
		newFieldDrawGraphicMarker,
		newFieldShape,
		newFieldSizeWidthShape,
		newFieldSizeHeightShape,
		newFieldColor,
		newFieldRotateArrow,
        newFieldPositionXShape,
		newFieldPositionYShape,
        newFieldLabel,
        newFieldPositionLabelX,
		newFieldPositionLabelY,
		newFieldButton,
	];
	return finalArray;
};