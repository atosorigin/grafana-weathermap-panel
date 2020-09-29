// import { TextObject } from 'Models/TextObjectClass';
import { RegionClass } from './../Models/RegionClass';

import { reqMetricRegion } from './fetchMetrics';
import { getResultQuery } from './getResultQuery';
// import { getLowerLimit, LowerLimit } from './getLowerLimit';
import React from 'react';

export interface ModeDisplayRegion {
  modeHTML: JSX.Element | null;
  modeText: string | null;
}

export interface DisplayRegion {
  tooltip: ModeDisplayRegion;
  text: ModeDisplayRegion;
}

const getTextGenerate = (region: RegionClass, valueMetric: number | null): ModeDisplayRegion => {
  if (region.textObj.generateObjectText && region.textObj.valueGenerateObjectText) {
    const roundMetrics: number = region.textObj.valueGenerateObjectText
      ? parseInt(region.textObj.valueGenerateObjectText.numericFormatElement, 10)
      : 1;
    const style = {
      color: region.textObj.valueGenerateObjectText.addColorTextElement ? region.textObj.valueGenerateObjectText.colorTextElement : 'black',
      backgroundColor: region.textObj.valueGenerateObjectText.addColorBackElement
        ? region.textObj.valueGenerateObjectText.colorBackElement
        : 'rgba(0, 0, 0, 0)',
    } as React.CSSProperties;
    let convertValue = '';
    if (valueMetric && region.textObj.valueGenerateObjectText && region.textObj.valueGenerateObjectText.numericFormatElement !== '' && roundMetrics) {
      convertValue = (valueMetric || 0).toPrecision(roundMetrics).toString();
    } else if (valueMetric) {
      convertValue = valueMetric.toString();
    }

    const modeText = region.textObj.valueGenerateObjectText.legendElement + ' ' + convertValue + ' ' + region.textObj.valueGenerateObjectText.unit;

    const modeHTML = (
      <div style={style}>
        {region.textObj.valueGenerateObjectText.legendElement}
        {convertValue}
        {region.textObj.valueGenerateObjectText.unit}
      </div>
    );
    return { modeHTML: modeHTML, modeText: modeText };
  }
  return { modeHTML: null, modeText: null };
};

const getTextRegion = (region: RegionClass): ModeDisplayRegion => {
  const style = {
    color: region.textObj.colorText,
    backgroundColor: region.textObj.colorBack,
    fontWeight: region.textObj.style.bold ? 'bold' : 'normal',
    fontStyle: region.textObj.style.italic ? 'italic' : 'normal',
    textDecoration: region.textObj.style.underline ? 'underline' : 'none',
  } as React.CSSProperties;
  const modeText = region.label;
  const modeHTML = <div style={style}>{region.label}</div>;
  return { modeHTML: modeHTML, modeText: modeText };
};

const getText = (region: RegionClass, valueMetric: number | null): ModeDisplayRegion => {
  let generateText: ModeDisplayRegion = { modeHTML: null, modeText: null };
  let generateTextRegion: ModeDisplayRegion = { modeHTML: null, modeText: null };

  if (!region.textObj.valueGenerateObjectText.displayObjectInTooltip) {
    generateText = getTextGenerate(region, valueMetric);
  }
  if (!region.textObj.isTextTooltip) {
    generateTextRegion = getTextRegion(region);
  }

  const displayTextRegion = generateTextRegion.modeHTML ? generateTextRegion.modeHTML : null;
  const displayText = generateText.modeHTML ? generateText.modeHTML : null;
  const modeHTML = (
    <div>
      {/* {generateTextRegion.modeHTML && generateTextRegion.modeHTML} */}
      {displayTextRegion}
      {/* {generateText.modeHTML && generateText.modeHTML} */}
      {displayText}
    </div>
  );
  const modeText = (generateTextRegion.modeText ? generateTextRegion.modeText + ' ' : '') + (generateText.modeText ? generateText.modeText : '');
  return { modeHTML: modeHTML, modeText: modeText };
};

const getTooltip = (region: RegionClass, valueMetric: number | null): ModeDisplayRegion => {
  let generateText: ModeDisplayRegion = { modeHTML: null, modeText: null };
  let generateTextRegion: ModeDisplayRegion = { modeHTML: null, modeText: null };

  if (region.textObj.valueGenerateObjectText.displayObjectInTooltip) {
    generateText = getTextGenerate(region, valueMetric);
  }
  if (region.textObj.isTextTooltip) {
    generateTextRegion = getTextRegion(region);
  }
  const displayTextRegion = generateTextRegion.modeHTML ? generateTextRegion.modeHTML : null;
  const displayText = generateText.modeHTML ? generateText.modeHTML : null;
  const modeHTML = (
    <div>
      {/* {generateTextRegion.modeHTML && generateTextRegion.modeHTML} */}
      {displayTextRegion}
      {/* {generateText.modeHTML && generateText.modeHTML} */}
      {displayText}
    </div>
  );
  const modeText = (generateTextRegion.modeText ? generateTextRegion.modeText + ' ' : '') + (generateText.modeText ? generateText.modeText : '');
  return { modeHTML: modeHTML, modeText: modeText };
};

const updateMetrics = async (region: RegionClass, props: any) => {
  await Promise.resolve('Success').then(() => {
    reqMetricRegion(region, props);
  });
};

export const getInfoDisplayRegion = (region: RegionClass, props: any): DisplayRegion => {
  updateMetrics(region, props);
  const valueMetric: number | null = getResultQuery(region.mainMetric);

  const text: ModeDisplayRegion = getText(region, valueMetric);
  const tooltip: ModeDisplayRegion = getTooltip(region, valueMetric);

  return { tooltip: tooltip, text: text };
};
