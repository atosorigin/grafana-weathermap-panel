import { PointClass } from 'Models/PointClass';
import { SelectableValue } from '@grafana/data';

/**
 * Edit the parameter in Coor object
 * @param {string} name parameter to edit
 * @param {Coor} editCoor object to edit
 * @param {string} newValue value to insert in the parameter
 * @returns {Coor} object edit
 */
export const editGoodParameterPoint = (
  name: string,
  editCoor: PointClass,
  newValue: string,
  newValueSelect: SelectableValue<any>
  // widthInitialSPaceDefault?: string,
  // heightInitialSPaceDefault?: string
): PointClass => {
  if (name.startsWith('label')) {
    editCoor.label = newValue;
  } else if (name.startsWith('drawGraphicMarker')) {
    editCoor.drawGraphicMarker = newValueSelect;
  } else if (name.startsWith('shape')) {
    editCoor.shape = newValueSelect;
  } else if (name.startsWith('sizeWidth')) {
    editCoor.sizeWidth = newValue;
  } else if (name.startsWith('sizeHeight')) {
    editCoor.sizeHeight = newValueSelect;
  } else if (name.startsWith('rotateArrow')) {
    editCoor.rotateArrow = newValue;
  } else if (name.startsWith('positionShapeX')) {
    console.log('update X');
    editCoor.positionShapeX = newValue;
    // editCoor.positionXDefault = newValue;
    // editCoor.widthInitialSpaceDefault = widthInitialSPaceDefault || '';
  } else if (name.startsWith('positionShapeY')) {
    console.log('update Y');
    editCoor.positionShapeY = newValue;
    // editCoor.positionYDefault = newValue;
    // editCoor.heightInitialSpaceDefault = heightInitialSPaceDefault || '';
  } else if (name.startsWith('color')) {
    editCoor.color = newValue;
  } else if (name.startsWith('refIdMainMetric')) {
    editCoor.mainMetric.refId = newValue;
  } else if (name.startsWith('keyMainMetric')) {
    editCoor.mainMetric.key = newValue;
  } else if (name.startsWith('keyValueMainMetric')) {
    editCoor.mainMetric.keyValue = newValue;
  }
  //console.log(editCoor);
  return editCoor;
};
