export interface Coord4DInt {
  /** value x min */
  xMin: number;
  /** value x max */
  xMax: number;
  /** value y min */
  yMin: number;
  /** value y max */
  yMax: number;
}

const initICoord4DInt = (): Coord4DInt => {
  return { xMin: 0, xMax: 0, yMin: 0, yMax: 0 };
};

const searchForD = (str: string) => {
  const coordinate: Coord4DInt = initICoord4DInt();
  const verif: boolean[] = [false, false, false, false];
  const parseWithLetter = [];
  const regex = /[a-zA-Z]{1}[0-9.\W]*/g;
  let tmp;

  do {
    tmp = regex.exec(str);
    if (tmp) {
      parseWithLetter.push(tmp.toString());
    }
  } while (tmp);
  for (const line of parseWithLetter) {
    const tmpBis: string[] = line.split(' ');
    let index = 0;

    for (const lineTmp of tmpBis) {
      if (lineTmp === '') {
        break;
      }
      const nb: number = parseInt(lineTmp, 10);

      if (index !== 0 && index % 2 !== 0) {
        if (nb < coordinate.xMin || verif[0] === false) {
          coordinate.xMin = nb;
          verif[0] = true;
        }
        if (nb > coordinate.xMax || verif[1] === false) {
          coordinate.xMax = nb;
          verif[1] = true;
        }
      } else if (index !== 0) {
        if (nb < coordinate.yMin || verif[2] === false) {
          coordinate.yMin = nb;
          verif[2] = true;
        }
        if (nb > coordinate.yMax || verif[3] === false) {
          coordinate.yMax = nb;
          verif[3] = true;
        }
      }
      index++;
    }
  }
  return coordinate;
};

const searchForXY = (element: HTMLElement, labelX: string, labelY: string) => {
  const x: number = parseInt(element.getAttribute(labelX) || '0', 10);
  const y: number = parseInt(element.getAttribute(labelY) || '0', 10);
  const coordinate: Coord4DInt = initICoord4DInt();

  coordinate.xMin = x;
  coordinate.xMax = x;
  coordinate.yMin = y;
  coordinate.yMax = y;
  return coordinate;
};

const searchForXnYn = (element: HTMLElement) => {
  const x1: number = parseInt(element.getAttribute('x1') || '0', 10);
  const x2: number = parseInt(element.getAttribute('x2') || '0', 10);
  const y1: number = parseInt(element.getAttribute('y1') || '0', 10);
  const y2: number = parseInt(element.getAttribute('y2') || '0', 10);

  const coordinate: Coord4DInt = initICoord4DInt();

  coordinate.xMin = x1;
  coordinate.xMax = x2;
  coordinate.yMin = y1;
  coordinate.yMax = y2;
  return coordinate;
};

export const searchMinMaxIdSVG = (idSVG: string): Coord4DInt | null => {
  const element = document.getElementById(idSVG);
  if (!element) {
    return null;
  }
  const result: Coord4DInt = initICoord4DInt();
  if (element) {
    let attribute: string | null = element.getAttribute('d');

    if (attribute) {
      return searchForD(attribute);
    }
    attribute = element.getAttribute('x');
    if (attribute) {
      return searchForXY(element, 'x', 'y');
    }
    attribute = element.getAttribute('x1');
    if (attribute) {
      return searchForXnYn(element);
    }
    attribute = element.getAttribute('cx');
    if (attribute) {
      return searchForXY(element, 'cx', 'cy');
    }
  }
  return result;
};
