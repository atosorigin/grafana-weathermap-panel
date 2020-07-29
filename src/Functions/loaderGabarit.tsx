//import { SimpleOptions, GlobalGabarit, GabaritFile, TemplateGabaritLink, TemplateGabaritPoint, TemplateGabaritRegion } from '../types';
//import { Button } from '@grafana/ui';

// import { PointClass } from '../Models/PointClass';
// import { RegionClass, Coord4D } from '../Models/RegionClass';
// import { OrientedLinkClass } from '../Models/OrientedLinkClass';

export interface LabelCoord2D {
  x: string;
  y: string;
}

export const coordParse = (coord: string) => {
  let tmp: string[] = coord.split('#');
  let result: LabelCoord2D = { x: '', y: '' };
  result.x = tmp[0].split('|')[1];
  result.y = tmp[1].split('|')[1];
  return result;
};

export interface Filtred {
  label: string;
  value: string;
}

export const filterParse = (filter: string) => {
  let tmp: string[] = filter.split('#');
  let result: Filtred[] = [];
  tmp.forEach((element) => {
    let split: string[] = element.split('|');
    result.push({ label: split[0], value: split[1] });
  });
  return result;
};
