import { PointClass } from '../Models/PointClass';
import { SelectableValue } from '@grafana/data';

/**
 * Edit the parameter in Coor object
 * @param {string} name parameter to edit
 * @param {Coor} editCoor object to edit
 * @param {string} newValue value to insert in the parameter
 * @returns {Coor} object edit
 */
export const editGoodParameterPoint = (
	name: string, editCoor: PointClass, newValue: string,
	newValueSelect: SelectableValue<any>): PointClass => {
	if (name.startsWith('linkWithCoordinateSpace')) {
		editCoor.setCoordinateSpace(newValueSelect);
	} else if (name.startsWith('drawGraphicMarker')) {
		editCoor.setDrawGraphicMarker(newValueSelect);
	} else if (name.startsWith('shape')) {
		editCoor.setShape(newValueSelect);
	} else if (name.startsWith('sizeWidth')) {
		editCoor.setSizeWidth(newValueSelect);
	} else if (name.startsWith('sizeHeight')) {
		editCoor.setSizeHeight(newValueSelect);
	} else if (name.startsWith('rotateArrow')) {
		editCoor.setRotateArrow(newValue);
	} else if (name.startsWith('positionShapeX')) {
		editCoor.setPositionShapeX(newValue);
	} else if (name.startsWith('positionShapeY')) {
		editCoor.setPositionShapeY(newValue);
	} else if (name.startsWith('label')) {
		editCoor.setLabel(newValue);
	} else if (name.startsWith('positionLabelX')) {
		editCoor.setPositionLabelX(newValue);
	} else if (name.startsWith('positionLabelY')) {
		editCoor.setPositionLabelY(newValue);
	} else if (name.startsWith('color')) {
		editCoor.setColor(newValue);
	}
	return editCoor;
};
