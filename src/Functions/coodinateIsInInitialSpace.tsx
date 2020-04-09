// import { Coord4D } from 'Models/RegionClass';
import { CoordinateSpaceInitial, Background } from 'types';
import { Coord4DInt } from './searchMinMaxIdSVG';
import { pixelToPercent } from './searchIDLimit';

export const coordinateIsInInitialSpace = (x: number, y: number, initial: CoordinateSpaceInitial, baseMap: Background) => {
  console.log(x + ' ' + y);
  const initialPx: Coord4DInt = pixelToPercent(initial.coordinate, baseMap);
  console.log(initialPx);
  if (x < initialPx.xMin) {
    console.log('error');
    return 0;
  }
  if (x > initialPx.xMax) {
    console.log('error');
    return 0;
  }
  if (y < initialPx.yMin) {
    console.log('error');
    return 0;
  }
  if (y > initialPx.yMax) {
    console.log('error');
    return 0;
  }
  console.log('is ok');
  return 1;
};
