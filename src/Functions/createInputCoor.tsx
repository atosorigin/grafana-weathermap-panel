import { InputClass } from 'Models/InputClass';

export const createInputCoor = (id: number, isInitial: boolean): InputClass[] => {
	const l10n = require('Localization/en.json');

	const newFieldLabel: InputClass = new InputClass(id.toString() + 'label',
		l10n.basics.label, 'label' + id.toString(),
		'text', true, 'Label', undefined);
	const newFieldPositionXMin: InputClass = new InputClass(id.toString() + 'xMin',
		l10n.inputCoordinate.minXPosition, 'positionXMin' + id.toString(),
		'text', true, l10n.inputCoordinate.minXPosition, undefined);
	const newFieldPositionXMax: InputClass = new InputClass(id.toString() + 'xMax',
		l10n.inputCoordinate.maxXPosition, 'positionXMax' + id.toString(),
		'text', true, l10n.inputCoordinate.maxXPosition, undefined);
	const newFieldPositionYMin: InputClass = new InputClass(id.toString() + 'yMin',
		l10n.inputCoordinate.minYPosition, 'positionYMin' + id.toString(),
		'text', true, l10n.inputCoordinate.minYPosition, undefined);
	const newFieldPositionYMax: InputClass = new InputClass(id.toString() + 'yMax',
		l10n.inputCoordinate.maxYPosition, 'positionYMax' + id.toString(),
		'text', true, l10n.inputCoordinate.maxYPosition, undefined);
	// const newFieldKey: InputClass = new InputClass(id.toString() + 'key',
	// 	l10n.inputCoordinate.key, 'key' + id.toString(),
	// 	'text', true, l10n.inputCoordinate.key, undefined);
	// const newFieldValueKey: InputClass = new InputClass(id.toString() + 'valueKey',
	// 	l10n.inputCoordinate.valueKey, 'valueKey' + id.toString(),
	// 	'text', true, l10n.inputCoordinate.valueKey, undefined);
	// const newFieldButton: InputClass = new InputClass(id.toString() + 'supprimer',
	// 	l10n.basics.delete, 'supprimer' + id.toString(),
	// 	'button', false, undefined, l10n.basics.delete);

	let finalArray: InputClass[] = [];
	if (!isInitial) {
		finalArray = [
			newFieldLabel,
			// newFieldButton,
		];
	} else {
		finalArray = [
			newFieldLabel,
			newFieldPositionXMin,
			newFieldPositionXMax,
			newFieldPositionYMin,
			newFieldPositionYMax,
		];
	}

	return finalArray;
};
