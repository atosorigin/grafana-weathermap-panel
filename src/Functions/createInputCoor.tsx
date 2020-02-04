import { InputClass } from '../Models/inputClass';

export const createInputCoor = (id: number, isInitial: boolean): InputClass[] => {
	const l10n = require('Localization/en.json');

	const newFieldLabel: InputClass = new InputClass(id + 'label',
		l10n.basics.label, 'label' + id.toString(),
		'text', true, 'Label', undefined);
	const newFieldPositionXMin: InputClass = new InputClass(id + 'xMin',
		l10n.inputCoordinate.minXPosition, 'positionXMin' + id.toString(),
		'text', true, l10n.inputCoordinate.minXPosition, undefined);
	const newFieldPositionXMax: InputClass = new InputClass(id + 'xMax',
		l10n.inputCoordinate.maxXPosition, 'positionXMax' + id.toString(),
		'text', true, l10n.inputCoordinate.maxXPosition, undefined);
	const newFieldPositionYMin: InputClass = new InputClass(id + 'yMin',
		l10n.inputCoordinate.minYPosition, 'positionYMin' + id.toString(),
		'text', true, l10n.inputCoordinate.minYPosition, undefined);
	const newFieldPositionYMax: InputClass = new InputClass(id + 'yMax',
		l10n.inputCoordinate.maxYPosition, 'positionYMax' + id.toString(),
		'text', true, l10n.inputCoordinate.maxYPosition, undefined);
	const newFieldImage: InputClass = new InputClass(id + 'image',
		l10n.inputCoordinate.image, 'image' + id.toString(),
		'text', true, l10n.inputCoordinate.image, undefined);
	const newFieldInterfaceJson: InputClass = new InputClass(id + 'interfaceJson',
		l10n.inputCoordinate.interfaceJson, 'interfaceJson' + id.toString(),
		'text', true, l10n.inputCoordinate.interfaceJson, undefined);
	const newFieldButton: InputClass = new InputClass(id + 'supprimer',
		l10n.basics.delete, 'supprimer' + id.toString(),
		'button', false, undefined, l10n.basics.delete);

	let finalArray: InputClass[] = [];
	if (!isInitial) {
		finalArray = [
			newFieldLabel,
			newFieldPositionXMin,
			newFieldPositionXMax,
			newFieldPositionYMin,
			newFieldPositionYMax,
			newFieldImage,
			newFieldInterfaceJson,
			newFieldButton,
		];
	} else {
		finalArray = [
			newFieldLabel,
			newFieldPositionXMin,
			newFieldPositionXMax,
			newFieldPositionYMin,
			newFieldPositionYMax,
			newFieldButton,
		];
	}

	return finalArray;
};
