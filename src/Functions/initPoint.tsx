import { TextObject } from '../Models/TextObjectClass';
import { LinkURLClass } from '../Models/LinkURLClass';
import { PositionParameterClass } from '../Models/PositionParameterClass';
import { Metric } from '../types';
import { PointClass } from '../Models/PointClass';

export const initPoint = (index: number): PointClass => {
  const newId: number = index;
  const initTextObject: TextObject = new TextObject(
    '',
    false,
    'rgba(255, 255, 255, 0)',
    'rgba(0, 0, 0, 1)',
    { italic: false, bold: false, underline: false },
    false,
    {
      legendElement: '',
      numericFormatElement: '',
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
      numericFormatElement: '',
      unit: '',
      displayObjectInTooltip: false,
      // 'displayObjectPermanently': false,
      addColorTextElement: false,
      colorTextElement: 'white',
      addColorBackElement: false,
      colorBackElement: 'black',
    }
  );
  const linkURL: LinkURLClass = new LinkURLClass('', '', '');

  const positionParameter: PositionParameterClass = new PositionParameterClass('0', '0', '0', '0', {}, {});
  const newCoordinate: PointClass = new PointClass(
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
    'point' + newId.toString(),
    '',
    { label: 'Yes', value: 'true' },
    { label: 'Circle', value: 'circle' },
    { label: 'Medium', value: 'medium' },
    { label: 'Medium', value: 'medium' },
    '0',
    '0',
    '0',
    'black',
    [],
    []
  );
  return newCoordinate;
};

export const clonePoint = (point: PointClass): PointClass => {
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
    refId: point.mainMetric.refId,
    expr: point.mainMetric.expr,
    returnQuery: point.mainMetric.returnQuery,
    manageValue: point.mainMetric.manageValue,
  };
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
    point.associateOrientedLinksOut
  );
  return newCoordinate;
};
