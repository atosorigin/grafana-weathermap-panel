import { TextObject } from '../Models/TextObjectClass';
import { LinkURLClass } from '../Models/LinkURLClass';
import { PositionParameterClass } from '../Models/PositionParameterClass';
import { Metric } from '../types';
import { OrientedLinkClass } from '../Models/OrientedLinkClass';

export const initOrientedLink = (newId: number, newZIndex: number): OrientedLinkClass => {
  const num: number = newId;
  const zIndex: number = newZIndex;
  const initTextObject: TextObject = new TextObject(
    '',
    false,
    'white',
    'black',
    { bold: false, italic: false, underline: false },
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
      displayObjectInTooltip: true,
      // 'displayObjectPermanently': false,
      addColorTextElement: true,
      colorTextElement: 'white',
      addColorBackElement: true,
      colorBackElement: 'black',
    }
  );

  const parametrageMetric: LinkURLClass = new LinkURLClass('', '', '');
  const initPositionParameter: PositionParameterClass = new PositionParameterClass('', '', '', '', {}, {});
  const initMainMetrics: Metric = { key: '', unit: '', format: '', keyValue: '', refId: '', manageValue: 'avg' };
  const initMainMetricsB: Metric = { key: '', unit: '', format: '', keyValue: '', refId: '', manageValue: 'avg' };
  const newCoordinate: OrientedLinkClass = new OrientedLinkClass(
    num,
    parametrageMetric,
    '',
    [],
    '',
    initTextObject,
    // {
    // 	'key': keyMainMetric || '',
    // 	'unit': '',
    // 	'format': '',
    // 	'keyValue': keyValueMainMetric || '',
    // 	'refId': refIdMainMetric || '',
    // 	'manageValue': 'avg',
    // }
    initMainMetrics,
    [],
    false,
    false,
    false,
    initPositionParameter,
    'orientedLink' + num.toString(),
    { label: 'double', value: 'double' },
    { label: 'Medium', value: 'Medium' },
    '0',
    '0',
    '#5794F2',
    '0',
    '0',
    '#E54658',
    '',
    '',
    '',
    '',
    '',
    '',
    zIndex,
    '0',
    '0',
    {},
    initMainMetricsB,
    []
  );
  return newCoordinate;
};

export const cloneOrientedLink = (orientedLink: OrientedLinkClass): OrientedLinkClass => {
  const initTextObject: TextObject = new TextObject(
    //orientedLink.textObj.legend,
    orientedLink.textObj.value,
    orientedLink.textObj.isTextTooltip,
    orientedLink.textObj.colorBack,
    orientedLink.textObj.colorText,
    orientedLink.textObj.style,
    orientedLink.textObj.generateObjectText,
    orientedLink.textObj.valueGenerateObjectText,
    orientedLink.textObj.generateAuxiliaryElement
  );
  const linkURL: LinkURLClass = new LinkURLClass(
    orientedLink.linkURL.followLink,
    orientedLink.linkURL.hoveringTooltipLink,
    orientedLink.linkURL.hoveringTooltipText
  );
  const positionParameter: PositionParameterClass = new PositionParameterClass(
    orientedLink.positionParameter.labelAPositionX,
    orientedLink.positionParameter.labelAPositionY,
    orientedLink.positionParameter.labelBPositionX,
    orientedLink.positionParameter.labelBPositionY,
    orientedLink.positionParameter.tooltipPositionA,
    orientedLink.positionParameter.tooltipPositionB
  );
  const mainMetric: Metric = {
    key: orientedLink.mainMetric.key,
    unit: orientedLink.mainMetric.unit,
    format: orientedLink.mainMetric.format,
    keyValue: orientedLink.mainMetric.keyValue,
    refId: orientedLink.mainMetric.refId,
    expr: orientedLink.mainMetric.expr,
    returnQuery: orientedLink.mainMetric.returnQuery,
    manageValue: orientedLink.mainMetric.manageValue,
  };
  const newCoordinate: OrientedLinkClass = new OrientedLinkClass(
    orientedLink.id,
    linkURL,
    orientedLink.meta,
    orientedLink.lowerLimit,
    orientedLink.label,
    initTextObject,
    mainMetric,
    orientedLink.metrics,
    orientedLink.colorMode,
    orientedLink.traceBack,
    orientedLink.traceBorder,
    positionParameter,
    orientedLink.name,
    orientedLink.orientationLink,
    orientedLink.size,
    orientedLink.pointAPositionX,
    orientedLink.pointAPositionY,
    orientedLink.colorCoordinateA,
    orientedLink.pointBPositionX,
    orientedLink.pointBPositionY,
    orientedLink.colorCoordinateB,
    orientedLink.valueMainMetricA,
    orientedLink.valueMainMetricB,
    orientedLink.pointIn,
    orientedLink.pointOut,
    orientedLink.regionIn,
    orientedLink.regionOut,
    orientedLink.zIndex,
    orientedLink.pointCPositionX,
    orientedLink.pointCPositionY,
    orientedLink.isIncurved,
    orientedLink.mainMetricB,
    orientedLink.metricsB
  );
  return newCoordinate;
};
