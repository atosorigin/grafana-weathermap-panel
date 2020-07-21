import { RegionClass } from 'Models/RegionClass';
import { CoordinateSpaceInitial } from 'types';

/**
 * Edit the parameter in Coor object
 * @param {string} name parameter to edit
 * @param {Coor} editCoor object to edit
 * @param {string} newValue value to insert in the parameter
 * @returns {Coor} object edit
 */
export const editGoodParameter = (
  name: string,
  editCoor: CoordinateSpaceInitial,
  newValue: string,
  defaultInitialSpace: boolean
): CoordinateSpaceInitial => {
  if (name.startsWith('positionXMin')) {
    editCoor.coordinate.xMin = limitValueInitialSpace(newValue, defaultInitialSpace);
    //editCoor.coordinate.xMin = newValue;
  } else if (name.startsWith('positionXMax')) {
    editCoor.coordinate.xMax = limitValueInitialSpace(newValue, defaultInitialSpace);
    //editCoor.coordinate.xMax = newValue;
  } else if (name.startsWith('positionYMin')) {
    editCoor.coordinate.yMin = limitValueInitialSpace(newValue, defaultInitialSpace);
    //editCoor.coordinate.yMin = newValue;
  } else if (name.startsWith('positionYMax')) {
    editCoor.coordinate.yMax = limitValueInitialSpace(newValue, defaultInitialSpace);
    //editCoor.coordinate.yMax = newValue;
  }
  return editCoor;
};

export const limitValueInitialSpace = (coorInitialSpace: string, defaultInitialSpace: boolean): string => {
  const coorInt: number = parseInt(coorInitialSpace, 10);
  let result = 0;
  console.log(defaultInitialSpace);
  if (!defaultInitialSpace) {
    result = coorInt;
  } else {
    if (coorInt > 100) {
      result = 100;
    } else if (coorInt < 0) {
      result = 0;
    } else if (coorInt >= 0 && coorInt <= 100) {
      result = coorInt;
    } else {
      result = 0;
    }
  }
  return result.toString();
};

export const editGoodParameterExtend = (name: string, editCoor: RegionClass, newValue: string): RegionClass => {
  if (name.startsWith('positionXMin')) {
    editCoor.coords.xMin = newValue;
  } else if (name.startsWith('positionXMax')) {
    editCoor.coords.xMax = newValue;
  } else if (name.startsWith('positionYMin')) {
    editCoor.coords.yMin = newValue;
  } else if (name.startsWith('positionYMax')) {
    editCoor.coords.yMax = newValue;
  } else if (name.startsWith('label')) {
    editCoor.label = newValue;
  } else if (name.startsWith('image')) {
    editCoor.img = newValue;
  } else if (name.startsWith('key')) {
    editCoor.mainMetric.key = newValue;
  } else if (name.startsWith('valueKey')) {
    editCoor.mainMetric.keyValue = newValue;
  }
  return editCoor;
};
