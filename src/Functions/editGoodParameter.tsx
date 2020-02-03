import { EspaceCoordonneesClass } from '../Models/EspaceCoordonneesClass';

/**
 * Edit the parameter in Coor object
 * @param {string} name parameter to edit
 * @param {Coor} editCoor object to edit
 * @param {string} newValue value to insert in the parameter
 * @returns {Coor} object edit
 */
export const editGoodParameter = (name: string, editCoor: EspaceCoordonneesClass,
																	 newValue: string): EspaceCoordonneesClass => {
	if (name.startsWith('positionXMin')) {
		editCoor.setXMin(parseInt(newValue, 10));
	} else if (name.startsWith('positionXMax')) {
		editCoor.setXMax(parseInt(newValue, 10));
	} else if (name.startsWith('positionYMin')) {
		editCoor.setYMin(parseInt(newValue, 10));
	} else if (name.startsWith('positionYMax')) {
		editCoor.setYMax(parseInt(newValue, 10));
	} else if (name.startsWith('label')) {
		editCoor.setLabel(newValue);
	}
	return editCoor;
};
