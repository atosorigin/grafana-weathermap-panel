import { isNumFloat } from 'Functions/isNumFloat';
import { RegionClass, Coord4D } from 'Models/RegionClass';

interface CoorHTML {
  left: string;
  right: string;
  top: string;
  bottom: string;
}

/**
 * Check limit of coordinate
 * @param {number} value number to test
 * @param {number} position 1 if xMin, 2 if xMax, 3 if yMin, 4 if yMax
 * @returns 0 if it's good or 1 otherwise
 */
const verifLimit = (useLimit: boolean, limit: Coord4D, intValue: number, position: number): number => {
  // const { useLimit, limit } = this.props;

  if (!useLimit) {
    return 0;
  }
  if (limit) {
    if (position === 1 || position === 2) {
      if (parseInt(limit.xMin, 10) <= intValue && parseInt(limit.xMax, 10) >= intValue) {
        return intValue;
      } else {
        return position === 1 ? parseInt(limit.xMin, 10) : parseInt(limit.xMax, 10);
      }
    } else if (position === 3 || position === 4) {
      if (parseInt(limit.yMin, 10) <= intValue && parseInt(limit.yMax, 10) >= intValue) {
        return intValue;
      } else {
        return position === 3 ? parseInt(limit.yMin, 10) : parseInt(limit.yMax, 10);
      }
    }
  }
  return 0;
};

/**
 * Transform coordinate percent for css
 * @param {number} size value of coordinate
 * @param {boolean} isMax true if x or y is max value
 * @returns coordinate to percent
 */
const transformCoordinateToPx = (size: number, isMax: boolean): number => {
  const maxSize = 100;
  const minSize = -100;
  const midSize = 50;

  if (size > maxSize) {
    size = maxSize;
  } else if (size < 0 && size < minSize) {
    size = minSize;
  }
  if (size >= 0) {
    size /= 2;
    size = isMax ? midSize - size : midSize + size;
  } else {
    size *= -1;
    size /= 2;
    size = midSize - size;
  }
  return size;
};

/** calcul value for top, bottom, left and right div coordinate */
export const calculRealCoordinate = (coordinate: RegionClass, useLimit: boolean, limit: Coord4D): CoorHTML => {
  let pLeft: string;
  let pRight: string;
  let pTop: string;
  let pBottom: string;
  let xMin = 0;
  let xMax = 0;
  let yMin = 0;
  let yMax = 0;

  xMin = isNumFloat(coordinate.coords.xMin) ? parseInt(coordinate.coords.xMin, 10) : 0;
  xMax = isNumFloat(coordinate.coords.xMax) ? parseInt(coordinate.coords.xMax, 10) : 0;
  yMin = isNumFloat(coordinate.coords.yMin) ? parseInt(coordinate.coords.yMin, 10) : 0;
  yMax = isNumFloat(coordinate.coords.yMax) ? parseInt(coordinate.coords.yMax, 10) : 0;
  if (useLimit) {
    xMin = verifLimit(useLimit, limit, xMin, 1);
    xMax = verifLimit(useLimit, limit, xMax, 2);
    yMin = verifLimit(useLimit, limit, yMin, 3);
    yMax = verifLimit(useLimit, limit, yMax, 4);
  }
  if (xMax >= 0) {
    pLeft = transformCoordinateToPx(xMin, false).toString() + '%';
    pRight = transformCoordinateToPx(xMax, true).toString() + '%';
  } else {
    xMin = xMin * -1;
    pRight = transformCoordinateToPx(xMin, false).toString() + '%';
    pLeft = transformCoordinateToPx(xMax, true).toString() + '%';
  }
  if (yMax >= 0) {
    pBottom = transformCoordinateToPx(yMin, false).toString() + '%';
    pTop = transformCoordinateToPx(yMax, true).toString() + '%';
  } else {
    yMin = yMin * -1;
    pTop = transformCoordinateToPx(yMin, false).toString() + '%';
    pBottom = transformCoordinateToPx(yMax, true).toString() + '%';
  }
  return { left: pLeft, right: pRight, top: pTop, bottom: pBottom };
};
