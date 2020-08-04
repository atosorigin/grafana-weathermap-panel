import { PointClass } from 'Models/PointClass';
import { SelectableValue } from '@grafana/data';

/**
 * Edit the parameter in Coor object
 * @param {string} name parameter to edit
 * @param {Coor} editCoor object to edit
 * @param {string} newValue value to insert in the parameter
 * @returns {Coor} object edit
 */
export const editGoodParameterPoint = (name: string, editCoor: PointClass, newValue: string, newValueSelect: SelectableValue<any>): PointClass => {
  if (name.startsWith('label')) {
    editCoor.label = newValue;
  } else if (name.startsWith('drawGraphicMarker')) {
    editCoor.drawGraphicMarker = newValueSelect;
  } else if (name.startsWith('shape')) {
    editCoor.shape = newValueSelect;
  } else if (name.startsWith('sizeWidth')) {
    editCoor.sizeWidth = newValueSelect;
  } else if (name.startsWith('sizeHeight')) {
    editCoor.sizeHeight = newValueSelect;
  } else if (name.startsWith('rotateArrow')) {
    editCoor.rotateArrow = newValue;
  } else if (name.startsWith('positionShapeX')) {
    console.log('update x');
    console.log(newValue);
    editCoor.positionShapeX = newValue;
    console.log(editCoor);
  } else if (name.startsWith('positionShapeY')) {
    console.log('update y');
    console.log(newValue);
    editCoor.positionShapeY = newValue;
    console.log(editCoor);
  } else if (name.startsWith('color')) {
    editCoor.color = newValue;
  } else if (name.startsWith('refIdMainMetric')) {
    editCoor.mainMetric.refId = newValue;
  } else if (name.startsWith('keyMainMetric')) {
    editCoor.mainMetric.key = newValue;
  } else if (name.startsWith('keyValueMainMetric')) {
    editCoor.mainMetric.keyValue = newValue;
  }
  console.log(editCoor)
  return editCoor;
};
