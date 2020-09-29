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
  widthBackground: number,
  heigthBackground: number
): CoordinateSpaceInitial => {
  if (name.startsWith('positionXMin')) {
    editCoor.coordinate.xMin = limitValueInitialSpace(newValue, 1, widthBackground, heigthBackground);
    //editCoor.coordinate.xMin = newValue;
  } else if (name.startsWith('positionXMax')) {
    editCoor.coordinate.xMax = limitValueInitialSpace(newValue, 2, widthBackground, heigthBackground);
    //editCoor.coordinate.xMax = newValue;
  } else if (name.startsWith('positionYMin')) {
    editCoor.coordinate.yMin = limitValueInitialSpace(newValue, 3, widthBackground, heigthBackground);
    //editCoor.coordinate.yMin = newValue;
  } else if (name.startsWith('positionYMax')) {
    editCoor.coordinate.yMax = limitValueInitialSpace(newValue, 4, widthBackground, heigthBackground);
    //editCoor.coordinate.yMax = newValue;
  }
  return editCoor;
};

export const limitValueInitialSpace = (coorInitialSpace: string, position: number, widthBackground: number, heigthBackground: number): string => {
  //let result = 0;
  //result = parseInt(coorInitialSpace, 10);
  // if (position === 1 || position === 2) {
  //   //xMin + xMax
  //   if (result > widthBackground) {
  //     result = widthBackground;
  //   }
  // } else if (position === 3 || position === 4) {
  //   //yMin + yMax
  //   if (result > heigthBackground) {
  //     result = heigthBackground;
  //   }
  // }
  // if (!defaultInitialSpace) {
  //   result = coorInt;
  // } else {
  //   if (coorInt > 100) {
  //     result = 100;
  //   } else if (coorInt < 0) {
  //     result = 0;
  //   } else if (coorInt >= 0 && coorInt <= 100) {
  //     result = coorInt;
  //   } else {
  //     result = 0;
  //   }
  // }
  return coorInitialSpace;
};

export const editGoodParameterExtend = (
  name: string,
  editCoor: RegionClass,
  newValue: string
  // widthInitialSpace?: string,
  // heightInitialSpace?: string
): RegionClass => {
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
