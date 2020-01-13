import { InputClass } from '../Models/inputClass';

export const createInputCoor = (id: number): InputClass[] => {
	const newFieldLabel: InputClass = new InputClass(id + 'label',
		'Label', 'label' + id.toString(),
		'text', true, 'Label', undefined);
	const newFieldPositionXMin: InputClass = new InputClass(id + 'xMin',
		'Position X min', 'positionXMin' + id.toString(),
		'text', true, 'Position X min', undefined);
	const newFieldPositionXMax: InputClass = new InputClass(id + 'xMax',
		'Position X max', 'positionXMax' + id.toString(),
		'text', true, 'Position X max', undefined);
	const newFieldPositionYMin: InputClass = new InputClass(id + 'yMin',
		'Position Y min', 'positionYMin' + id.toString(),
		'text', true, 'Position Y min', undefined);
	const newFieldPositionYMax: InputClass = new InputClass(id + 'yMax',
		'Position Y max', 'positionYMax' + id.toString(),
		'text', true, 'Position Y max', undefined);
	const newFieldButton: InputClass = new InputClass(id + 'supprimer',
		'Supprimer', 'supprimer' + id.toString(),
		'button', false, undefined, 'Supprimer');

	const finalArray: InputClass[] = [
		newFieldLabel,
		newFieldPositionXMin,
		newFieldPositionXMax,
		newFieldPositionYMin,
		newFieldPositionYMax,
		newFieldButton,
	];
	return finalArray;
};
