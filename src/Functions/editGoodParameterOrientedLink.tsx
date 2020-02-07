import { OrientedLinkClass } from '../Models/OrientedLinkClass';
import { SelectableValue } from '@grafana/data';

/**
 * Edit the parameter in Coor object
 * @param {string} name parameter to edit
 * @param {Coor} editCoor object to edit
 * @param {string} newValue value to insert in the parameter
 * @returns {Coor} object edit
 */
export const editGoodParameterOrientedLink = (name: string, editCoor: OrientedLinkClass, newValue: string,
										newValueSelect: SelectableValue<any>): OrientedLinkClass => {
	if (name.startsWith('orientationLink')) {
		editCoor.setOrientationLink(newValueSelect);
	} else if (name.startsWith('pointAX')) {
		editCoor.setPointAPositionX(newValue);
	} else if (name.startsWith('pointAY')) {
		editCoor.setPointAPositionY(newValue);
	} else if (name.startsWith('pointBX')) {
		editCoor.setPointBPositionX(newValue);
	} else if (name.startsWith('pointBY')) {
		editCoor.setPointBPositionY(newValue);
	} else if (name.startsWith('colorCoordinateA')) {
		editCoor.setColorCoordinateA(newValue);
	} else if (name.startsWith('colorCoordinateB')) {
		editCoor.setColorCoordinateB(newValue);
	} else if (name.startsWith('labelLinkA')) {
		editCoor.setLabelLinkA(newValue);
	} else if (name.startsWith('labelLinkB')) {
		editCoor.setLabelLinkB(newValue);
	} else if (name.startsWith('positionXLabelLinkA')) {
		editCoor.setPositionXLabelA(newValue)
	} else if (name.startsWith('positionYLabelLinkA')) {
		editCoor.setPositionYLabelA(newValue)
	} else if (name.startsWith('positionXLabelLinkB')) {
		editCoor.setPositionXLabelB(newValue)
	} else if (name.startsWith('positionYLabelLinkB')) {
		editCoor.setPositionYLabelB(newValue)
	} else if (name.startsWith('spaceCoordinateAssociatePointA')) {
		editCoor.setRegionIn(newValueSelect);
	} else if (name.startsWith('spaceCoordinateAssociatePointB')) {
		editCoor.setRegionOut(newValueSelect);
	} else if (name.startsWith('pointIn')) {
		editCoor.setPointIn(newValueSelect);
	} else if (name.startsWith('pointOut')) {
		editCoor.setPointOut(newValueSelect);
	}
	return editCoor;
};