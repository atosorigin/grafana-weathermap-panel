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
    'rgba(255, 255, 255, 0)',
    'rgba(0, 0, 0, 1)',
    '',
    false,
    {
      legendElement: '',
      numericFormatElement: '',
      unit: '',
      displayObjectInText: false,
      // 'displayObjectPermanently': false,
      addColorTextElement: false,
      colorTextElement: 'white',
      addColorBackElement: false,
      colorBackElement: 'black',
    },
    {
      legendElement: '',
      numericFormatElement: '',
      unit: '',
      displayObjectInText: false,
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
  const positionParameter: PositionParameterClass = new PositionParameterClass('0', '0', '0', '0', {}, {});
  const newCoordinate: RegionClass = new RegionClass(
    newId,
    linkURL,
    '',
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
    true,
    ''
  );
  return newCoordinate;
};

export const cloneRegionCoordinateSpace = (region: RegionClass): RegionClass => {
  const initTextObject: TextObject = new TextObject(
    // region.textObj.legend,
    region.textObj.value,
    region.textObj.isTextRegion,
    region.textObj.colorBack,
    region.textObj.colorText,
    region.textObj.styleText,
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
    region.mode,
    region.img
  );
  return newCoordinate;
};
