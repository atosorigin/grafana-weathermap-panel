import { Background } from 'types';

import { Coord4D } from 'Models/RegionClass';

export interface Coor4DNum {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
}

/** verif limit for one coordinate */
// const verifAllLimit = (n: number, limit: number[], isWith: boolean) => {
//   //console.log(n);
//   if (isWith) {
//     if (limit[0] <= n && limit[1] >= n) {
//       return true;
//     }
//   } else {
//     if (limit[2] <= n && limit[3] >= n) {
//       return true;
//     }
//   }
//   return false;
// };

// /** search all coordinate if atribute is d */
// const searchOtherLimitDAttribute = (data: string, limit: number[]): boolean => {
//   const parseWithLetter = [];
//   const regex = /[a-zA-Z]{1}[0-9.\W]*/g;
//   let tmp;

//   do {
//     tmp = regex.exec(data);
//     if (tmp) {
//       parseWithLetter.push(tmp.toString());
//     }
//   } while (tmp);
//   //console.log(parseWithLetter);
//   for (const line of parseWithLetter) {
//     const tmpBis: string[] = line.split(' ');
//     //const tmpTest: string[] = line.split(/,| /);

//     let index = 0;
//     // console.log(tmpBis);
//     //console.log(tmpTest);
//     // console.log(limit);
//     for (const lineTmp of tmpBis) {
//       if (lineTmp === '') {
//         break;
//       }
//       if (index !== 0 && index % 2 !== 0) {
//         if (!verifAllLimit(parseInt(lineTmp, 10), limit, true)) {
//           //console.log('no');
//           return true;
//         }
//       } else if (index !== 0) {
//         if (!verifAllLimit(parseInt(lineTmp, 10), limit, false)) {
//           //console.log('no');
//           return true;
//         }
//       }
//       ++index;
//     }
//   }
//   //console.log('ok');
//   return false;
// };

/** search if x and y are in limit */
// const searchOtherLimitXYAttribute = (element: HTMLElement, limit: number[], labelX: string, labelY: string): boolean => {
//   //console.log(element);
//   const x: number = parseInt(element.getAttribute(labelX) || '0', 10);
//   const y: number = parseInt(element.getAttribute(labelY) || '0', 10);

//   if (x !== null && y !== null) {
//     if (verifAllLimit(x, limit, true) && verifAllLimit(y, limit, false)) {
//       return false;
//     }
//   }
//   return true;
// };

/** search if x1|2 and y1|2 are in limit */
// const searchOtherLimitXnYnAttribute = (element: HTMLElement, limit: number[]): boolean => {
//   const x1: number = parseInt(element.getAttribute('x1') || '0', 10);
//   const x2: number = parseInt(element.getAttribute('x2') || '0', 10);
//   const y1: number = parseInt(element.getAttribute('y1') || '0', 10);
//   const y2: number = parseInt(element.getAttribute('y2') || '0', 10);
//   if (x1 && x2 && y1 && y2) {
//     if (verifAllLimit(x1, limit, true) && verifAllLimit(x2, limit, true) && verifAllLimit(y1, limit, false) && verifAllLimit(y2, limit, false)) {
//       return false;
//     }
//   }
//   return true;
// };

// /** search if region id svg is in limit */
// const regionIsOverLimit = (element: HTMLElement | null, limit: number[]): boolean => {
//   //console.log(element);
//   if (!element) {
//     //console.log('1');
//     return true;
//   }
//   let attribute: string | null = element.getAttribute('d');
//   //console.log(attribute);
//   if (attribute) {
//     //console.log('2');
//     return searchOtherLimitDAttribute(attribute, limit);
//   }
//   attribute = element.getAttribute('x');
//   //console.log(attribute);
//   if (attribute) {
//     //console.log('3');
//     return searchOtherLimitXYAttribute(element, limit, 'x', 'y');
//   }
//   attribute = element.getAttribute('x1');
//   if (attribute) {
//     //console.log('4');
//     return searchOtherLimitXnYnAttribute(element, limit);
//   }
//   attribute = element.getAttribute('cx');
//   if (attribute) {
//     //console.log('5');
//     return searchOtherLimitXYAttribute(element, limit, 'cx', 'cy');
//   }
//   return true;
// };

/** convert initial percent coordinate from -100 -> 100 to 0 -> 100 */
const convertInitialCoordinate = (n: number) => {
  const midPercent = 50;

  n = n >= 0 ? (n / 2 || 0) + midPercent : -n / 2 - midPercent;
  return n;
};

export const pixelToPercent = (coordinate: Coord4D, baseMap: Background): Coor4DNum => {
  const limit: number[] = [
    parseInt(coordinate.xMin, 10),
    parseInt(coordinate.xMax, 10),
    parseInt(coordinate.yMin, 10),
    parseInt(coordinate.yMax, 10),
  ];

  limit[0] = convertInitialCoordinate(limit[0]);
  limit[1] = convertInitialCoordinate(limit[1]);
  limit[2] = convertInitialCoordinate(limit[2]);
  limit[3] = convertInitialCoordinate(limit[3]);

  const sizeHeight: number = parseInt(baseMap.height, 10);
  const sizeWidth: number = parseInt(baseMap.width, 10);
  const percent = 100;

  limit[0] = limit[0] / percent || 0;
  limit[0] = sizeWidth * limit[0];
  limit[1] = limit[1] / percent || 0;
  limit[1] = sizeWidth * limit[1];
  limit[2] = limit[2] / percent || 0;
  limit[2] = sizeHeight * limit[2];
  limit[3] = limit[3] / percent || 0;
  limit[3] = sizeHeight * limit[3];
  return {
    xMin: limit[0],
    xMax: limit[1],
    yMin: limit[2],
    yMax: limit[3],
  };
};

/** return all id list in principal id */
export const returnAllId = (coordinate: Coord4D, baseMap: Background): string[] => {
  const arrId: string[] = [];
  const arrIdVerif: string[] = [];
  const listElement: NodeListOf<Element> | undefined = document.getElementById(baseMap.idSVG)?.querySelectorAll('*[id]');
  console.log(listElement);
  // const filtered = [listElement].filter();
  //     function(e) {
  //       return
  //     },
  //     [octpath,octrect,octellipse]
  // );

  //console.log(listElement);

  if (listElement) {
    // const limit: number[] = [
    //   parseInt(coordinate.xMin, 10),
    //   parseInt(coordinate.xMax, 10),
    //   parseInt(coordinate.yMin, 10),
    //   parseInt(coordinate.yMax, 10),
    // ];

    // limit[0] = convertInitialCoordinate(limit[0]);
    // limit[1] = convertInitialCoordinate(limit[1]);
    // limit[2] = convertInitialCoordinate(limit[2]);
    // limit[3] = convertInitialCoordinate(limit[3]);

    // const sizeHeight: number = parseInt(baseMap.height, 10);
    // const sizeWidth: number = parseInt(baseMap.width, 10);
    // const percent = 100;

    // limit[0] = limit[0] / percent || 0;
    // limit[0] = sizeWidth * limit[0];
    // limit[1] = limit[1] / percent || 0;
    // limit[1] = sizeWidth * limit[1];
    // limit[2] = limit[2] / percent || 0;
    // limit[2] = sizeHeight * limit[2];
    // limit[3] = limit[3] / percent || 0;
    // limit[3] = sizeHeight * limit[3];
    // const coordInt = pixelToPercent(coordinate, baseMap);
    // const limit: number[] = [coordInt.xMin, coordInt.xMax, coordInt.yMin, coordInt.yMax];
    Array.from(listElement).forEach((e: Element) => {
      console.log(e);
      // if (!regionIsOverLimit(document.getElementById(e.id), limit)) {
      //   //console.log('is pushed');
      //   arrId.push(e.id);
      // }
      if (e.localName === 'path' || e.localName === 'rect' || e.localName === 'ellipse') {
        arrId.push(e.id);
      }
      arrIdVerif.push(e.id);
    });
    console.log(arrId.length);
    arrId.sort((a: string, b: string) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
  } else {
    console.error('id svg not found');
  }
  return arrId;
};
