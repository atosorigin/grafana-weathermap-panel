import { TextObject } from '../Models/TextObjectClass';
import { LinkURLClass } from '../Models/LinkURLClass';
import { PositionParameterClass } from '../Models/PositionParameterClass';
import { Metric } from '../types';
import { PointClass } from '../Models/PointClass';
//rgba(255, 255, 255, 0)
export const initPoint = (index: number): PointClass => {
  const newId: number = index;
  const initTextObject: TextObject = new TextObject(
    '',
    false,
    'white',
    'black',
    { italic: false, bold: false, underline: false },
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
      addColorTextElement: true,
      colorTextElement: '',
      addColorBackElement: true,
      colorBackElement: 'black',
    }
  );
  const linkURL: LinkURLClass = new LinkURLClass('', '', '');

  const positionParameter: PositionParameterClass = new PositionParameterClass('0', '0', '0', '0', { label: 'Right', value: 'Right' }, {});
  const newCoordinate: PointClass = new PointClass(
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
    'point' + newId.toString(),
    '',
    { label: 'Yes', value: 'true' },
    { label: 'Circle', value: 'circle' },
    '12',
    { label: 'Medium', value: 'medium' },
    '0',
    '0',
    '0',
    'black',
    [],
    [],
    '0',
    '0',
    '0',
    '0'
  );
  return newCoordinate;
};

export const clonePoint = (
  point: PointClass,
  xMinInitialSpace: number,
  xMaxInitialSpace: number,
  widthBackground: number,
  yMinInitialSpace: number,
  yMaxInitialSpace: number,
  heightBackground: number
): PointClass => {
  const initTextObject: TextObject = new TextObject(
    // point.textObj.legend,
    point.textObj.value,
    point.textObj.isTextTooltip,
    point.textObj.colorBack,
    point.textObj.colorText,
    point.textObj.style,
    point.textObj.generateObjectText,
    point.textObj.valueGenerateObjectText,
    point.textObj.generateAuxiliaryElement
  );
  const linkURL: LinkURLClass = new LinkURLClass(point.linkURL.followLink, point.linkURL.hoveringTooltipLink, point.linkURL.hoveringTooltipText);
  const positionParameter: PositionParameterClass = new PositionParameterClass(
    point.positionParameter.labelAPositionX,
    point.positionParameter.labelAPositionY,
    point.positionParameter.labelBPositionX,
    point.positionParameter.labelBPositionY,
    point.positionParameter.tooltipPositionA,
    point.positionParameter.tooltipPositionB
  );
  const mainMetric: Metric = {
    key: point.mainMetric.key,
    unit: point.mainMetric.unit,
    format: point.mainMetric.format,
    keyValue: point.mainMetric.keyValue,
    filter: point.mainMetric.filter,
    refId: point.mainMetric.refId,
    expr: point.mainMetric.expr,
    returnQuery: point.mainMetric.returnQuery,
    manageValue: point.mainMetric.manageValue,
  };

  const widthInitialSpace = xMaxInitialSpace - xMinInitialSpace;
  const positionXDefault = (((parseInt(point.positionShapeX, 10) - xMinInitialSpace) / widthInitialSpace) * widthBackground).toString();

  const heightInitialSpace = yMaxInitialSpace - yMinInitialSpace;
  const positionYDefault = (((parseInt(point.positionShapeY, 10) - yMinInitialSpace) / heightInitialSpace) * heightBackground).toString();

  const newCoordinate: PointClass = new PointClass(
    point.id,
    linkURL,
    point.meta,
    point.lowerLimit,
    point.label,
    initTextObject,
    mainMetric,
    point.metrics,
    point.colorMode,
    point.traceBack,
    point.traceBorder,
    positionParameter,
    point.name,
    point.valueMetric,
    point.drawGraphicMarker,
    point.shape,
    point.sizeWidth,
    point.sizeHeight,
    point.rotateArrow,
    point.positionShapeX,
    point.positionShapeY,
    point.color,
    point.associateOrientedLinksIn,
    point.associateOrientedLinksOut,
    point.widthInitialSpaceDefault,
    point.heightInitialSpaceDefault,
    positionXDefault,
    positionYDefault
  );
  return newCoordinate;
};
