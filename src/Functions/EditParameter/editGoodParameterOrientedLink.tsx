import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import { SelectableValue } from '@grafana/data';

/**
 * Edit the parameter in Coor object
 * @param {string} name parameter to edit
 * @param {Coor} editCoor object to edit
 * @param {string} newValue value to insert in the parameter
 * @returns {Coor} object edit
 */
export const editGoodParameterOrientedLink = (
  name: string,
  editCoor: OrientedLinkClass,
  newValue: string,
  newValueSelect: SelectableValue<any>
): OrientedLinkClass => {
  if (name.startsWith('label')) {
    editCoor.label = newValue;
  } else if (name.startsWith('orientationLink')) {
    editCoor.orientationLink = newValueSelect;
  } else if (name.startsWith('pointAX')) {
    editCoor.pointAPositionX = newValue;
  } else if (name.startsWith('pointAY')) {
    editCoor.pointAPositionY = newValue;
  } else if (name.startsWith('pointBX')) {
    editCoor.pointBPositionX = newValue;
  } else if (name.startsWith('pointBY')) {
    editCoor.pointBPositionY = newValue;
  } else if (name.startsWith('colorCoordinateA')) {
    editCoor.colorCoordinateA = newValue;
  } else if (name.startsWith('colorCoordinateB')) {
    editCoor.colorCoordinateB = newValue;
  } else if (name.startsWith('refIdMainMetric')) {
    editCoor.mainMetric.refId = newValue;
  } else if (name.startsWith('keyMainMetric')) {
    editCoor.mainMetric.key = newValue;
  } else if (name.startsWith('keyValueMainMetric')) {
    editCoor.mainMetric.keyValue = newValue;
  } else if (name.startsWith('isIncurved')) {
    editCoor.isIncurved = newValueSelect;
  } else if (name.startsWith('pointCX')) {
    editCoor.pointCPositionX = newValue;
  } else if (name.startsWith('pointCY')) {
    editCoor.pointCPositionY = newValue;
  } else if (name.startsWith('pointIn')) {
    editCoor.pointIn = newValue;
  } else if (name.startsWith('pointOut')) {
    editCoor.pointOut = newValue;
  } else if (name.startsWith('regionIn')) {
    editCoor.regionIn = newValue;
  } else if (name.startsWith('regionOut')) {
    editCoor.regionOut = newValue;
  } else if (name.startsWith('size')) {
    editCoor.size = newValue;
  }
  return editCoor;
};
