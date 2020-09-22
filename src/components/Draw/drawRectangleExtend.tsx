/* eslint-disable prettier/prettier */
import React, { CSSProperties } from 'react';
import { SimpleOptions, Metric } from 'types';

import { PanelEditorProps } from '@grafana/data';
import { Tooltip } from '@grafana/ui';

import { RegionClass, Coord4D } from 'Models/RegionClass';

//import { calculRealCoordinate } from 'Functions/otherFunction';
import { getLowerLimit, LowerLimit } from 'Functions/getLowerLimit';
import { getResultQuery } from 'Functions/getResultQuery';
import { parseColor, Color } from 'Functions/parseColor';
import { reqMetricRegion, reqMetricAuxRegion } from 'Functions/fetchMetrics';
//import { searchMinMaxIdSVG, Coord4DInt } from 'Functions/searchMinMaxIdSVG';
import { Style } from 'components/Parametrage/styleComponent';
// import { Coor4DNum, pixelToPercent } from 'Functions/searchIDLimit';
// import { Coor4DNum } from 'Functions/searchIDLimit';

interface Props extends PanelEditorProps<SimpleOptions> {
  /** object CoordinateSpace */
  uneCoor: RegionClass;
  /** use limit */
  useLimit: boolean;
  /** limit */
  limit: Coord4D;
  /** id region */
  id: string;
  /** if button SimplePanel is active, block all onClick region space */
  //isEnabled: boolean;
  /** if button Add Oriented Link of SimplePanel is active, block all onClick region space */
  buttonAddLinkIsActive: boolean;
  /** if button Add Incurved Oriented Link of SimplePanel is active, block all onClick region space */
  buttonAddIncurvedLinkIsActive: boolean;
  /** width when region has been created */
  widthInitialSpaceDefault: string;
  /** height when region has been created */
  heightInitialSpaceDefault: string;
}

interface State {
  /** value of tooltip */
  tooltipValue: JSX.Element | null;
  /** background color with lower limit */
  backgroundColor: string;
  /** border color with lower llimit */
  borderColor: string;
  /** size border with lower limit */
  sizeBorder: number;
  /** html result */
  htmlResult: JSX.Element;
  /** value return by query */
  valueQuery: string;
}

interface CoorHTML {
  /** coordinate left */
  left: string;
  /** coordinate right */
  right: string;
  /** coordinate top */
  top: string;
  /** coordinate bottom */
  bottom: string;
}

interface Tooltip {
  tooltipValue: JSX.Element | null;
  backgroundColor: string;
  borderColor: string;
  sizeBorder: number;
  valueQuery: string;
}

/**
 * Draw rectangle
 */
export default class DrawRectangleExtend extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tooltipValue: null,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderColor: 'rgba(255, 255, 255, 0)',
      sizeBorder: 1,
      htmlResult: <div></div>,
      valueQuery: '',
    };
  }

  /**
   * Edit color Zone in SVG
   * @param {string} id id is equal to zone for change color in Svg
   * @param {string} color define the color for Svg zone
   */
  editColorSvgZone = (id: string, color: string, border: string, sizeBorder: string): void => {
    const colorSVG: Color = parseColor(color);
    const colorBorderSVG: Color = parseColor(border);
    const changeColorElement: HTMLElement | null = document.getElementById(id);

    // if (id === 'rect45') {
    //   console.log('am here');
    // }

    if (changeColorElement) {
      changeColorElement.style.fill = colorSVG.color;
      changeColorElement.style.fillOpacity = colorSVG.transparency;
      changeColorElement.style.stroke = colorBorderSVG.color;
      changeColorElement.style.strokeOpacity = colorBorderSVG.transparency;
      changeColorElement.style.strokeWidth = sizeBorder;
    }
  };

  generateValueMetricElement = (region: RegionClass, valueQuery: number | null): string => {
    let converValueQuery = 'NaN';
    const roundMetrics: number = region.textObj.valueGenerateObjectText
      ? parseInt(region.textObj.valueGenerateObjectText.numericFormatElement, 10)
      : 1;

    if (valueQuery && region.textObj.valueGenerateObjectText && region.textObj.valueGenerateObjectText.numericFormatElement !== '' && roundMetrics) {
      converValueQuery = (valueQuery || 0).toPrecision(roundMetrics).toString();
    } else if (valueQuery) {
      converValueQuery = valueQuery.toString();
    }
    // (Math.round(valueQuery * roundMetrics + Number.EPSILON) / roundMetrics).toString()
    let value: string = converValueQuery;
    if (region.textObj.valueGenerateObjectText && converValueQuery !== 'NaN') {
      value = region.textObj.valueGenerateObjectText.legendElement + ' ' + converValueQuery + ' ' + region.textObj.valueGenerateObjectText.unit;
    }
    if (value === 'NaN') {
      return '';
    }

    return value;
  };

  /** fill state for tooltip, color zone and calc round query */
  setStateTooltip = (
    lowerLimit: LowerLimit,
    region: RegionClass,
    valueQuery: number | null
    //link: boolean
    // ): Tooltip => {
  ) => {
    const styleTooltip = {
      color: region.textObj.colorText,
      backgroundColor: region.textObj.colorBack,
    } as CSSProperties;

    const styleMetrics = {
      color: region.textObj.valueGenerateObjectText ? region.textObj.valueGenerateObjectText.colorTextElement : 'white',
      backgroundColor: region.textObj.valueGenerateObjectText ? region.textObj.valueGenerateObjectText.colorBackElement : 'black',
    } as CSSProperties;

    const valueQueryResult: string = this.generateValueMetricElement(region, valueQuery);
    const valueMetaData: JSX.Element | null = this.displayValuesMetaData();
    let tooltipValue: JSX.Element | null = null;
    // valueQueryResult !== '' ? (
    //   <div>
    //     <div style={styleTooltip}>
    //       {/* {link && <a href={region.linkURL.hoveringTooltipLink}>{region.linkURL.hoveringTooltipText}</a>} */}
    //       <a href={region.linkURL.hoveringTooltipLink}>{region.linkURL.hoveringTooltipText}</a>
    //       {region.textObj.isTextTooltip && <p>{region.label}</p>}
    //     </div>
    //     <div style={styleMetrics}>
    //       {region.textObj.generateObjectText &&
    //         region.textObj.valueGenerateObjectText &&
    //         region.textObj.valueGenerateObjectText.displayObjectInTooltip && <p>{valueQueryResult}</p>}
    //     </div>
    //     <div>{this.displayValuesAuxMetrics()}</div>
    //     <div>{this.displayValuesMetaData()}</div>
    //   </div>
    // ) : null;
    if (
      (valueQueryResult !== '' && region.textObj.valueGenerateObjectText.displayObjectInTooltip) ||
      region.metrics.length !== 0 ||
      valueMetaData !== null
    ) {
      console.log('ok');
      tooltipValue = (
        <div>
          <div style={styleTooltip}>
            <a href={region.linkURL.hoveringTooltipLink}>{region.linkURL.hoveringTooltipText}</a>
            {region.textObj.isTextTooltip && <p>{region.label}</p>}
          </div>
          <div style={styleMetrics}>
            {region.textObj.generateObjectText &&
              region.textObj.valueGenerateObjectText &&
              region.textObj.valueGenerateObjectText.displayObjectInTooltip && <p>{valueQueryResult}</p>}
          </div>
          <div>{this.displayValuesAuxMetrics()}</div>
          <div>{valueMetaData}</div>
        </div>
      );
    } else {
      console.log('null');
    }
    return {
      tooltipValue: tooltipValue,
      backgroundColor: lowerLimit.colorBack,
      borderColor: lowerLimit.colorBorder,
      sizeBorder: lowerLimit.sizeBorder,
      valueQuery: valueQueryResult,
    };
  };

  displayValueQuery = (region: RegionClass): boolean => {
    if (
      region.textObj.generateObjectText &&
      region.textObj.valueGenerateObjectText &&
      !region.textObj.valueGenerateObjectText.displayObjectInTooltip
    ) {
      return true;
    }
    return false;
  };

  getPositionTextObjectRegionSVG = (idSVG: string): CoorHTML => {
    const coor: CoorHTML = { top: '0', bottom: '0', left: '0', right: '0' };
    let elementSVG: any;
    if (this.props.options.baseMap.isUploaded) {
      elementSVG = document.getElementById(idSVG);
    } else {
      elementSVG = document.getElementById('oct' + idSVG);
    }
    if (elementSVG) {
      let xSVG = 0;
      let ySVG = 0;
      let widthSVG = 0;
      let heightSVG = 0;
      let top = '';
      let left = '';
      if (elementSVG.localName === 'path') {
        const allValues: string = elementSVG.attributes['d'].nodeValue;
        const arrayAllValues: string[] = allValues.split(' ');
        let iX = -2;
        let xMin = 1000000;
        let xMax = 0;
        let iY = -1;
        let yMin = 1000000;
        let yMax = 0;
        for (let i = 0; i < arrayAllValues.length; i++) {
          let valueToCheck = parseInt(arrayAllValues[i], 10);
          if (i === iX + 3) {
            if (valueToCheck < xMin) {
              xMin = valueToCheck;
            }
            if (valueToCheck > xMax) {
              xMax = valueToCheck;
            }
            iX = i;
          }
          if (i === iY + 3) {
            if (valueToCheck < yMin) {
              yMin = valueToCheck;
            }
            if (valueToCheck > yMax) {
              yMax = valueToCheck;
            }
            iY = i;
          }
        }
        left = xMax.toString();
        top = yMax.toString();
      } else if (elementSVG.localName === 'ellipse') {
        xSVG = parseInt(elementSVG.attributes['cx'].nodeValue, 10);
        ySVG = parseInt(elementSVG.attributes['cy'].nodeValue, 10);
        const rX = parseInt(elementSVG.attributes['rx'].nodeValue, 10) * 2;
        //const rY = parseInt(elementSVG.attributes['ry'].nodeValue, 10) * 2;
        left = (xSVG + rX).toString();
        top = ySVG.toString();
      } else if (elementSVG.localName === 'rect') {
        xSVG = parseInt(elementSVG.attributes['x'].nodeValue, 10);
        ySVG = parseInt(elementSVG.attributes['y'].nodeValue, 10);
        widthSVG = parseInt(elementSVG.attributes['width'].nodeValue, 10);
        heightSVG = parseInt(elementSVG.attributes['height'].nodeValue, 10);
        left = (xSVG + widthSVG).toString();
        top = (ySVG + heightSVG).toString();
      }
      coor.top = top;
      coor.left = left;
    }
    return coor;
  };

  /** generate tooltip for metrics and apply color with lower limit */
  generateTooltipAndEditColor = (region: RegionClass, valueQuery: number | null) => {
    let stateIsFill = false;
    const lowerLimit: LowerLimit = getLowerLimit(region, valueQuery);

    if (region.mode) {
      this.editColorSvgZone(region.idSVG, lowerLimit.colorBack, lowerLimit.colorBorder, lowerLimit.sizeBorder.toString());
    }

    // const resultTooltip: Tooltip = this.setStateTooltip(lowerLimit, region, valueQuery, this.props.isEnabled);
    // const resultTooltip: Tooltip = this.setStateTooltip(lowerLimit, region, valueQuery);
    const resultTooltip: any = this.setStateTooltip(lowerLimit, region, valueQuery);
    //if (valueQuery) {
    //if (region.mode && ((!region.textObj.isTextTooltip) || this.displayValueQuery(region))) {
    if (region.mode) {
      //const coordinateWrite: Coord4DInt | null = searchMinMaxIdSVG(region.idSVG);
      const coordinateTextObject: CoorHTML = this.getPositionTextObjectRegionSVG(region.idSVG);
      //if (coordinateWrite) {
      stateIsFill = true;
      const style: Style = region.textObj.style;
      const styleWrite = {
        width: 'auto',
        position: 'absolute',
        zIndex: 999,
        // left: coordinateWrite.xMax - (coordinateWrite.xMax - coordinateWrite.xMin),
        // top: coordinateWrite.yMax,
        left: coordinateTextObject.left + 'px',
        top: coordinateTextObject.top + 'px',
        border: '1px solid black',
        // backgroundColor: region.textObj.valueGenerateObjectText ? region.textObj.valueGenerateObjectText.colorBackElement : 'black',
        // color: region.textObj.valueGenerateObjectText ? region.textObj.valueGenerateObjectText.colorTextElement : 'white',
      } as CSSProperties;

      const styleLabelTooltipSVG = {
        textDecoration: this.defineTextDecoration(style),
        fontStyle: this.defineFontStyle(style),
        fontWeight: this.defineFontWeight(style),
        fontSize: this.props.options.display.size,
        fontFamily: this.props.options.display.police,
        color: region.textObj.colorText,
        backgroundColor: region.textObj.colorBack,
        margin: 0,
        padding: '5px 5px 0 5px',
      } as React.CSSProperties;

      const styleMainMetricTooltipSVG = {
        textDecoration: this.defineTextDecoration(style),
        fontStyle: this.defineFontStyle(style),
        fontWeight: this.defineFontWeight(style),
        color: region.textObj.valueGenerateObjectText.addColorTextElement ? region.textObj.valueGenerateObjectText.colorTextElement : 'white',
        backgroundColor: region.textObj.valueGenerateObjectText.addColorBackElement
          ? region.textObj.valueGenerateObjectText.colorBackElement
          : 'black',
        fontSize: this.props.options.display.size,
        fontFamily: this.props.options.display.police,
        margin: 0,
        padding: '5px 5px 0 5px',
      } as React.CSSProperties;

      let htmlResult = (
        <div style={styleWrite}>
          {!region.textObj.isTextTooltip && <p style={styleLabelTooltipSVG}>{region.label}</p>}
          {region.textObj.generateObjectText && !region.textObj.valueGenerateObjectText.displayObjectInTooltip && (
            <p style={styleMainMetricTooltipSVG}>{this.displayValueQuery(region) && resultTooltip.valueQuery}</p>
          )}
        </div>
      );
      if (region.textObj.isTextTooltip && region.textObj.valueGenerateObjectText.displayObjectInTooltip) {
        htmlResult = <div></div>;
      }
      this.setState({
        htmlResult: htmlResult,
        tooltipValue: resultTooltip.tooltipValue,
        backgroundColor: resultTooltip.backgroundColor,
        borderColor: resultTooltip.borderColor,
        sizeBorder: resultTooltip.sizeBorder,
        valueQuery: resultTooltip.valueQuery,
      });
      //}
      //}
    }
    if (!stateIsFill) {
      this.setState({
        tooltipValue: resultTooltip.tooltipValue,
        backgroundColor: resultTooltip.backgroundColor,
        borderColor: resultTooltip.borderColor,
        sizeBorder: resultTooltip.sizeBorder,
        valueQuery: resultTooltip.valueQuery,
      });
    }
  };

  /** get data metrics and fill state */
  reqMetrics = () => {
    const region: RegionClass = this.props.uneCoor;

    reqMetricRegion(region, this.props);
    if (region.mainMetric.returnQuery && region.mainMetric.returnQuery.length > 0) {
      const cnt: number | null = getResultQuery(region.mainMetric);

      this.generateTooltipAndEditColor(region, cnt);
    } else {
      this.generateTooltipAndEditColor(region, null);
    }
  };

  getValuesAuxiliaryMetrics = (): string[] => {
    const region: RegionClass = this.props.uneCoor;
    reqMetricAuxRegion(region, this.props);
    const mainMetric: Metric = region.mainMetric;
    //console.log(mainMetric.refId);
    const auxiliaryMetrics: Metric[] = region.metrics;
    //console.log(auxiliaryMetrics);
    let valueAuxiliaryMetric: string[] = [];
    //const countMetrics: number = auxiliaryMetrics.length;
    auxiliaryMetrics.forEach((metric: Metric) => {
      let countTotalValues = 0;
      let resultTotalValues = 0;
      let result = '';
      if (metric.returnQuery && metric.returnQuery.length > 0) {
        let numberLoop: number = metric.returnQuery?.length || 0;
        if (metric.key !== '' && metric.keyValue !== '') {
          for (let i = 0; i < numberLoop; i++) {
            let line = metric.returnQuery[i];
            if (line.fields[0].labels) {
              if (mainMetric.refId !== '') {
                if (line.fields[0].labels[mainMetric.key] === mainMetric.keyValue || (mainMetric.key === '' && mainMetric.keyValue === '')) {
                  if (line.fields[0].labels[metric.key] === metric.keyValue) {
                    const countValues: number = line.fields[0].values.length;
                    for (let i = 0; i < countValues; i++) {
                      if (line.fields[0].values.get(i)) {
                        resultTotalValues += line.fields[0].values.get(i);
                        countTotalValues++;
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          for (let i = 0; i < numberLoop; i++) {
            let line = metric.returnQuery[i];
            if (line.fields[0].labels) {
              if (mainMetric.refId) {
                if (line.fields[0].labels[mainMetric.key] === mainMetric.keyValue || (mainMetric.key === '' && mainMetric.keyValue === '')) {
                  const countValues: number = line.fields[0].values.length;
                  for (let i = 0; i < countValues; i++) {
                    if (line.fields[0].values.get(i)) {
                      resultTotalValues += line.fields[0].values.get(i);
                      countTotalValues++;
                    }
                  }
                }
              }
            }
          }
        }
        if (metric.manageValue === 'avg') {
          result = (resultTotalValues / countTotalValues).toString();
        } else if (metric.manageValue === 'sum') {
          result = resultTotalValues.toString();
        } else if (metric.manageValue === 'err') {
          if (countTotalValues > 1) {
            result = 'error';
          } else {
            result = resultTotalValues.toString();
          }
        }
      }
      if (result !== '') {
        valueAuxiliaryMetric.push(result);
      }
    });
    return valueAuxiliaryMetric;
  };

  private getConvertValueAuxMetrics = (valueBrut: string): string => {
    let result = '';
    const region: RegionClass = this.props.uneCoor;
    //const roundValue: string = region.textObj.generateAuxiliaryElement.numericFormatElement;
    const roundValue: number = parseInt(region.textObj.generateAuxiliaryElement.numericFormatElement, 10) || 1;
    const unit: string = region.textObj.generateAuxiliaryElement.unit;
    //if (roundValue !== '') {
    result = parseFloat(valueBrut).toPrecision(roundValue).toString();
    // } else {
    //   result = valueBrut;
    // }
    return result + ' ' + unit;
  };

  private displayValuesAuxMetrics = (): JSX.Element => {
    let html: JSX.Element[] = [];
    const region: RegionClass = this.props.uneCoor;
    const valuesAuxMetrics: string[] = this.getValuesAuxiliaryMetrics();
    const auxMetrics: Metric[] = region.metrics;
    const addColorText: boolean = region.textObj.generateAuxiliaryElement.addColorTextElement;
    const addColorBack: boolean = region.textObj.generateAuxiliaryElement.addColorBackElement;
    const legend: string = region.textObj.generateAuxiliaryElement.legendElement;
    let colorText = '';
    let colorBack = '';

    if (addColorText) {
      colorText = region.textObj.generateAuxiliaryElement.colorTextElement;
    } else {
      colorText = 'white';
    }

    if (addColorBack) {
      colorBack = region.textObj.generateAuxiliaryElement.colorBackElement;
    } else {
      colorBack = 'black';
    }

    const styleTitle = {
      fontFamily: this.props.options.display.police,
      fontSize: '10px',
      marginTop: '5px',
      marginBottom: '0px',
      color: colorText,
      //backgroundColor: colorBack,
    } as React.CSSProperties;

    const styleTitle2 = {
      fontFamily: this.props.options.display.police,
      fontSize: '10px',
      marginTop: '5px',
      marginLeft: '5px',
      marginBottom: '0px',
      color: colorText,
      //backgroundColor: colorBack,
    } as React.CSSProperties;

    const styleContent = {
      fontFamily: this.props.options.display.police,
      fontSize: '9px',
      marginLeft: '10px',
      marginBottom: '0px',
      color: colorText,
      //backgroundColor: colorBack,
    } as React.CSSProperties;

    if (auxMetrics.length > 0) {
      html.push(
        <p key={'region' + region.id + 'contentToolTip1'} style={styleTitle}>
          Auxiliary Metric
        </p>
      );
      html.push(
        <p key={'region' + region.id + 'contentToolTip2'} style={styleTitle}>
          {legend}
        </p>
      );
      let index = 1;
      for (const metric of auxMetrics) {
        const valueAuxMetric: string = this.getConvertValueAuxMetrics(valuesAuxMetrics[index - 1]);
        html.push(
          <p key={index + 'region' + region.id + 'contentToolTip3'} style={styleTitle2}>
            + Metric {index}
          </p>
        );
        html.push(
          <p key={index + 'region' + region.id + 'contentToolTip4'} style={styleContent}>
            - Reference : {metric.refId}
          </p>
        );
        html.push(
          <p key={index + 'region' + region.id + 'contentToolTip5'} style={styleContent}>
            - Value : {!isNaN(parseFloat(valueAuxMetric)) && valueAuxMetric}
          </p>
        );
        html.push(
          <p key={index + 'region' + region.id + 'contentToolTip6'} style={styleContent}>
            - Key : {metric.key}
          </p>
        );
        html.push(
          <p key={index + 'region' + region.id + 'contentToolTip7'} style={styleContent}>
            - KeyValue : {metric.keyValue}
          </p>
        );
        html.push(
          <p key={index + 'region' + region.id + 'contentToolTip8'} style={styleContent}>
            - Type : {metric.manageValue}
          </p>
        );
        index++;
      }
    }
    return <div style={{ backgroundColor: colorBack }}>{html}</div>;
  };

  displayValuesMetaData = (): JSX.Element | null => {
    const styleTitleMetaData = {
      fontFamily: this.props.options.display.police,
      fontSize: '10px',
      marginTop: '5px',
      marginBottom: '0px',
      color: 'white',
    } as React.CSSProperties;

    let result: JSX.Element[] = [];
    if (this.props.uneCoor.meta.length !== 0) {
      result.push(
        <p key={'region' + this.props.uneCoor.id + 'ContentTooltip9' + this.props.uneCoor.label} style={styleTitleMetaData}>
          Metadata
        </p>
      );
      this.props.uneCoor.meta.forEach((oneMetaData, index) => {
        const styleContentMetaData = {
          color: oneMetaData.obj.colorText,
          backgroundColor: oneMetaData.obj.colorBack,
          fontWeight: oneMetaData.obj.style.bold ? 'bold' : 'normal',
          fontStyle: oneMetaData.obj.style.italic ? 'italic' : 'normal',
          textDecoration: oneMetaData.obj.style.underline ? 'underline' : 'normal',
          fontFamily: this.props.options.display.police,
          fontSize: '9px',
          marginLeft: '10px',
          marginBottom: '0px',
        } as CSSProperties;
        result.push(
          <p key={index + 'region' + this.props.uneCoor.id + 'ContentTooltip10' + this.props.uneCoor.label} style={styleContentMetaData}>
            - {oneMetaData.meta}
          </p>
        );
      });
    } else {
      return null;
    }
    return <div>{result}</div>;
  };

  /**
   * to do
   * @param coordinateX
   *
   */
  private defineLimitX(coordinateX: number) {
    let result: number = coordinateX;
    // if (this.props.options.coordinateSpaceInitial.defaultReferentiel) {
    //   if (coordinateX > 100) {
    //     result = 100;
    //   }
    //   if (coordinateX < 0) {
    //     result = 0;
    //   }
    // } else {
    //   if (coordinateX > 100) {
    //     result = 100;
    //   }
    //   if (coordinateX < -100) {
    //     result = -100;
    //   }
    // }
    return result;
  }

  /**
   * to do
   * @param coordinateY
   *
   */
  private defineLimitY(coordinateY: number) {
    let result: number = coordinateY;
    // if (this.props.options.coordinateSpaceInitial.defaultReferentiel) {
    //   //console.log(coordinateY);
    //   if (coordinateY > 100) {
    //     result = 100;
    //   }
    //   if (coordinateY < 0) {
    //     result = 0;
    //   }
    // } else {
    //   if (coordinateY > 100) {
    //     result = 100;
    //   }
    //   if (coordinateY < -100) {
    //     result = -100;
    //   }
    // }
    return result;
  }

  getCoordinatePxAdaptToInitialSpace = (
    region: RegionClass,
    // coorRegion: Coord4D,
    coorRegionDefault: Coord4D
    // widthInitialSpaceDefault: number,
    // heightInitialSpaceDefault: number
  ): CoorHTML => {
    const widthBackground: number = parseInt(this.props.options.baseMap.width, 10);
    const heightBackground: number = parseInt(this.props.options.baseMap.height, 10);
    const initialSpace: Coord4D = this.props.options.coordinateSpaceInitial.coordinate;
    const xMin: number = parseInt(initialSpace.xMin, 10);
    const xMax: number = parseInt(initialSpace.xMax, 10);
    const yMin: number = parseInt(initialSpace.yMin, 10);
    const yMax: number = parseInt(initialSpace.yMax, 10);
    const widthInitialSpace: number = xMax - xMin;
    const heightInitialSpace: number = yMax - yMin;
    let leftPx = 0;
    let rightPx = 0;
    let topPx = 0;
    let bottomPx = 0;

    const ratioLeft = parseInt(coorRegionDefault.xMin, 10) / widthBackground;
    const ratioRight = (widthBackground - parseInt(coorRegionDefault.xMax, 10)) / widthBackground;
    const ratioTop = (heightBackground - parseInt(coorRegionDefault.yMax, 10)) / heightBackground;
    const ratioBottom = parseInt(coorRegionDefault.yMin, 10) / heightBackground;
    leftPx = Math.round(this.defineLimitX(xMin + widthInitialSpace * ratioLeft));
    rightPx = Math.round(this.defineLimitX(widthInitialSpace * ratioRight + (widthBackground - xMax)));
    topPx = Math.round(this.defineLimitY(heightInitialSpace * ratioTop + (heightBackground - yMax)));
    bottomPx = Math.round(this.defineLimitY(yMin + heightInitialSpace * ratioBottom));

    let newArrayRegion: RegionClass[] = this.props.options.regionCoordinateSpace;
    newArrayRegion.forEach((currentRegion) => {
      // console.log('avant update coords');
      // console.log(currentRegion.coords);
      if (currentRegion.id === region.id) {
        currentRegion.coords.xMin = leftPx.toString();
        currentRegion.coords.xMax = (widthBackground - rightPx).toString();
        currentRegion.coords.yMin = bottomPx.toString();
        currentRegion.coords.yMax = (heightBackground - topPx).toString();
      }
      // console.log('après update coords');
      // console.log(currentRegion.coords);
    });
    this.props.options.regionCoordinateSpace = newArrayRegion;

    const leftToDraw = ((leftPx - xMin) / widthInitialSpace) * widthBackground;
    const rightToDraw = ((rightPx - (widthBackground - xMax)) / widthInitialSpace) * widthBackground;
    const topToDraw = ((topPx - (heightBackground - yMax)) / heightInitialSpace) * heightBackground;
    const bottomToDraw = ((bottomPx - yMin) / heightInitialSpace) * heightBackground;

    // console.log(leftToDraw);

    let result: CoorHTML = {
      top: topToDraw.toString() + 'px',
      bottom: bottomToDraw.toString() + 'px',
      left: leftToDraw.toString() + 'px',
      right: rightToDraw.toString() + 'px',
    };
    return result;
  };

  /** final region zone . Call function after reqMetrics*/
  renduFinal = () => {
    if (this.props.uneCoor.mode) {
      return;
    }
    const region: RegionClass = this.props.uneCoor;
    const pBorder: string = this.state.sizeBorder.toString() + 'px solid ' + this.state.borderColor;

    const backColor: string = region.textObj.colorBack;
    const textColor: string = region.textObj.colorText;

    //const coorHTML: CoorHTML = calculRealCoordinate(region, this.props.useLimit, this.props.limit);
    const coorHTML: CoorHTML = this.getCoordinatePxAdaptToInitialSpace(
      region,
      region.coordsDefault
      // region.coords,
      // parseInt(region.widthInitialSpaceDefault, 10),
      // parseInt(region.heightInitialSpaceDefault, 10)
    );
    const style: Style = region.textObj.style;

    const styleDiv = {
      position: 'absolute',
      border: pBorder,
      top: coorHTML.top,
      bottom: coorHTML.bottom,
      left: coorHTML.left,
      right: coorHTML.right,
      zIndex: 999,
      justifyContent: 'center',
      background: 'url(' + region.img + ') no-repeat center center',
      backgroundColor: this.state.backgroundColor,
      backgroundSize: 'contain',
      cursor: 'pointer',
    } as React.CSSProperties;

    const styleTextDiv = {
      backgroundColor: backColor,
      textDecoration: this.defineTextDecoration(style),
      fontStyle: this.defineFontStyle(style),
      fontWeight: this.defineFontWeight(style),
      color: textColor,
      verticalAlign: 'middle',
    } as React.CSSProperties;

    const styleMetricsDiv = {
      backgroundColor: region.textObj.valueGenerateObjectText ? region.textObj.valueGenerateObjectText.colorBackElement : 'black',
      color: region.textObj.valueGenerateObjectText ? region.textObj.valueGenerateObjectText.colorTextElement : 'white',
      verticalAlign: 'middle',
    } as React.CSSProperties;

    let value: JSX.Element;

    if (this.props.buttonAddLinkIsActive || this.props.buttonAddIncurvedLinkIsActive) {
      //console.log('active');
      value = (
        <div style={styleDiv} id={this.props.id}>
          {(!region.textObj.isTextTooltip || region.textObj.generateObjectText) && (
            <div>
              <div style={styleTextDiv}>{!region.textObj.isTextTooltip && region.label}</div>
              <div style={styleMetricsDiv}>
                {region.textObj.generateObjectText && !region.textObj.valueGenerateObjectText.displayObjectInTooltip && this.state.valueQuery}
              </div>
            </div>
          )}
        </div>
      );
      if (
        region.textObj.isTextTooltip ||
        (region.textObj.generateObjectText && region.textObj.valueGenerateObjectText.displayObjectInTooltip) ||
        region.textObj.generateAuxiliaryElement.displayObjectInTooltip ||
        region.meta.length !== 0
      ) {
        // if (this.state.tooltipValue) {
        //   value = <Tooltip content={this.state.tooltipValue}>{value}</Tooltip>;
        // } else {
        //   <div>{value}</div>;
        // }
        console.log(this.state.tooltipValue);
        if (this.state.tooltipValue === null) {
          console.log('null');
          <div>{value}</div>;
        } else {
          console.log('not null');
          value = <Tooltip content={this.state.tooltipValue}>{value}</Tooltip>;
        }
      }
    } else {
      //console.log('not active');
      value = (
        <div style={styleDiv} id={this.props.id}>
          <a href={region.linkURL.followLink}>
            <div style={{ height: '100%', width: '100%' }}>
              {(!region.textObj.isTextTooltip || region.textObj.generateObjectText) && (
                <div>
                  <div style={styleTextDiv}>{!region.textObj.isTextTooltip && region.label}</div>
                  <div style={styleMetricsDiv}>
                    {region.textObj.generateObjectText && !region.textObj.valueGenerateObjectText.displayObjectInTooltip && this.state.valueQuery}
                  </div>
                </div>
              )}
            </div>
          </a>
        </div>
      );
      if (
        region.textObj.isTextTooltip ||
        (region.textObj.generateObjectText && region.textObj.valueGenerateObjectText.displayObjectInTooltip) ||
        region.textObj.generateAuxiliaryElement.displayObjectInTooltip ||
        region.meta.length !== 0
      ) {
        // if (this.state.tooltipValue) {
        //   value = <Tooltip content={this.state.tooltipValue}>{value}</Tooltip>;
        // } else {
        //   <div>{value}</div>;
        // }
        console.log(this.state.tooltipValue);
        if (this.state.tooltipValue === null) {
          console.log('null');
          <div>{value}</div>;
        } else {
          console.log('not null');
          value = <Tooltip content={this.state.tooltipValue}>{value}</Tooltip>;
        }
      }
    }
    // if (!this.props.isEnabled && region.linkURL.followLink !== '') {
    //   console.log('not active');
    //   value = (
    //     <div style={styleDiv} id={this.props.id}>
    //       <a href={region.linkURL.followLink}>
    //         <div style={{height: '100%', width: '100%'}} >
    //           {(!region.textObj.isTextTooltip || region.textObj.generateObjectText) && (
    //             <div>
    //               <div style={styleTextDiv}>{!region.textObj.isTextTooltip && region.label}</div>
    //               <div style={styleMetricsDiv}>
    //                 {region.textObj.generateObjectText && !region.textObj.valueGenerateObjectText.displayObjectInTooltip && this.state.valueQuery}
    //               </div>
    //             </div>
    //           )}
    //         </div>
    //       </a>
    //     </div>
    //   );
    //   if (region.textObj.isTextTooltip || (region.textObj.generateObjectText && region.textObj.valueGenerateObjectText.displayObjectInTooltip) || region.textObj.generateAuxiliaryElement.displayObjectInTooltip) {
    //     value = <Tooltip content={this.state.tooltipValue}>{value}</Tooltip>;
    //   }
    // } else {
    //   console.log('active');
    //   value = (
    //     <div style={styleDiv} id={this.props.id}>
    //       {(!region.textObj.isTextTooltip || region.textObj.generateObjectText) && (
    //         <div>
    //           <div style={styleTextDiv}>{!region.textObj.isTextTooltip && region.label}</div>
    //           <div style={styleMetricsDiv}>
    //             {region.textObj.generateObjectText && !region.textObj.valueGenerateObjectText.displayObjectInTooltip && this.state.valueQuery}
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   );
    //   if (region.textObj.isTextTooltip || (region.textObj.generateObjectText && region.textObj.valueGenerateObjectText.displayObjectInTooltip) || region.textObj.generateAuxiliaryElement.displayObjectInTooltip) {
    //     value = <Tooltip content={this.state.tooltipValue}>{value}</Tooltip>;
    //   }
    // }
    this.setState({
      htmlResult: value,
    });
  };

  /** fill state to display data in html */
  fillState = async () => {
    await Promise.resolve('Success').then(() => {
      this.reqMetrics();
    });
    await Promise.resolve('Success').then(() => {
      this.renduFinal();
    });
  };

  private defineTextDecoration = (mainStyle: Style): string => {
    let result = '';
    if (mainStyle.underline) {
      result = 'underline';
    } else {
      if (this.props.options.display.style.underline) {
        result = 'underline';
      } else {
        result = 'none';
      }
    }
    return result;
  };

  private defineFontStyle = (mainStyle: Style): string => {
    let result = '';
    if (mainStyle.italic) {
      result = 'italic';
    } else {
      if (this.props.options.display.style.italic) {
        result = 'italic';
      } else {
        result = 'normal';
      }
    }
    return result;
  };

  private defineFontWeight = (mainStyle: Style): any => {
    let result = '';
    if (mainStyle.bold) {
      result = 'bold';
    } else {
      if (this.props.options.display.style.bold) {
        result = 'bold';
      } else {
        result = 'normal';
      }
    }
    return result;
  };

  /**
   * update props
   * @param prevProps
   */
  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props) {
      this.fillState();
    }
  }

  /** load prometheus value */
  componentDidMount = () => {
    this.fillState();
  };

  /** render */
  render() {
    // console.log(this.props.uneCoor.metrics);
    // console.log(this.getValuesAuxiliaryMetrics());
    return this.state.htmlResult;
  }
}
