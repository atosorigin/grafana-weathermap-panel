import { RegionClass, Coord4D } from 'Models/RegionClass';
import { TextObject } from 'Models/TextObjectClass';
import { LinkURLClass } from 'Models/LinkURLClass';
import { PositionParameterClass } from 'Models/PositionParameterClass';
import { Metric } from 'types';

/** init CoordinateSpaceExtendClass */
export const initRegionCoordinateSpace = (index: number): RegionClass => {
  const newId: number = index + 1;
  const initTextObject: TextObject = new TextObject(
    '',
    false,
    'rgb(255, 255, 255, 0)',
    'black',
    { bold: false, italic: false, underline: false },
    true,
    {
      legendElement: '',
      numericFormatElement: '5',
      unit: '',
      displayObjectInTooltip: false,
      // 'displayObjectPermanently': false,
      addColorTextElement: false,
      colorTextElement: 'white',
      addColorBackElement: false,
      colorBackElement: 'black',
    },
    {
      legendElement: '',
      numericFormatElement: '5',
      unit: '',
      displayObjectInTooltip: true,
      // 'displayObjectPermanently': false,
      addColorTextElement: false,
      colorTextElement: 'white',
      addColorBackElement: false,
      colorBackElement: 'black',
    }
  );
  const linkURL: LinkURLClass = new LinkURLClass('', '', '');
  const coords: Coord4D = {
    xMin: '0',
    xMax: '0',
    yMin: '0',
    yMax: '0',
  };
  const coordsDefault: Coord4D = {
    xMin: '0',
    xMax: '0',
    yMin: '0',
    yMax: '0',
  };
  const positionParameter: PositionParameterClass = new PositionParameterClass('0', '0', '0', '0', {}, {});
  const newCoordinate: RegionClass = new RegionClass(
    newId,
    linkURL,
    [],
    [],
    '',
    initTextObject,
    { key: '', unit: '', format: '', keyValue: '', refId: '', manageValue: 'avg' },
    [],
    false,
    false,
    false,
    positionParameter,
    '',
    [],
    coords,
    coordsDefault,
    true,
    '',
    '',
    ''
  );
  return newCoordinate;
};

export const cloneRegionCoordinateSpace = (
  region: RegionClass,
  xMinInitialSpace: number,
  xMaxInitialSpace: number,
  widthBackground: number,
  yMinInitialSpace: number,
  yMaxInitialSpace: number,
  heightBackground: number
): RegionClass => {
  const initTextObject: TextObject = new TextObject(
    // region.textObj.legend,
    region.textObj.value,
    region.textObj.isTextTooltip,
    region.textObj.colorBack,
    region.textObj.colorText,
    region.textObj.style,
    region.textObj.generateObjectText,
    region.textObj.valueGenerateObjectText,
    region.textObj.generateAuxiliaryElement
  );
  const linkURL: LinkURLClass = new LinkURLClass(region.linkURL.followLink, region.linkURL.hoveringTooltipLink, region.linkURL.hoveringTooltipText);
  const coords: Coord4D = {
    xMin: region.coords.xMin,
    xMax: region.coords.xMax,
    yMin: region.coords.yMin,
    yMax: region.coords.yMax,
  };
  const coordsDefault: Coord4D = {
    xMin: region.coordsDefault.xMin,
    xMax: region.coordsDefault.xMax,
    yMin: region.coordsDefault.yMin,
    yMax: region.coordsDefault.yMax,
  };
  const positionParameter: PositionParameterClass = new PositionParameterClass(
    region.positionParameter.labelAPositionX,
    region.positionParameter.labelAPositionY,
    region.positionParameter.labelBPositionX,
    region.positionParameter.labelBPositionY,
    region.positionParameter.tooltipPositionA,
    region.positionParameter.tooltipPositionB
  );
  const mainMetric: Metric = {
    key: region.mainMetric.key,
    unit: region.mainMetric.unit,
    format: region.mainMetric.format,
    keyValue: region.mainMetric.keyValue,
    refId: region.mainMetric.refId,
    expr: region.mainMetric.expr,
    returnQuery: region.mainMetric.returnQuery,
    manageValue: region.mainMetric.manageValue,
  };

  // const widthInitialSpace = xMaxInitialSpace - xMinInitialSpace;
  // const xMinDefault = (((parseInt(region.coordsDefault.xMin, 10) - xMinInitialSpace) / widthInitialSpace) * widthBackground).toString();
  // const xMaxDefault = (((parseInt(region.coordsDefault.xMax, 10) - xMinInitialSpace) / widthInitialSpace) * widthBackground).toString();

  // const heightInitialSpace = yMaxInitialSpace - yMinInitialSpace;
  // const yMinDefault = (((parseInt(region.coordsDefault.yMin, 10) - yMinInitialSpace) / heightInitialSpace) * heightBackground).toString();
  // const yMaxDefault = (((parseInt(region.coordsDefault.yMax, 10) - yMinInitialSpace) / heightInitialSpace) * heightBackground).toString();

  // const coordsDefault: Coord4D = {
  //   xMin: xMinDefault,
  //   xMax: xMaxDefault,
  //   yMin: yMinDefault,
  //   yMax: yMaxDefault,
  // };

  const newCoordinate: RegionClass = new RegionClass(
    region.id,
    linkURL,
    region.meta,
    region.lowerLimit,
    region.label,
    initTextObject,
    mainMetric,
    region.metrics,
    region.colorMode,
    region.traceBack,
    region.traceBorder,
    positionParameter,
    region.idSVG,
    region.orientedLink,
    coords,
    coordsDefault,
    region.mode,
    region.img,
    region.widthInitialSpaceDefault,
    region.heightInitialSpaceDefault
  );
  return newCoordinate;
};
