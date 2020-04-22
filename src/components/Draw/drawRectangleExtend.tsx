/* eslint-disable prettier/prettier */
import React, { CSSProperties } from 'react';
import { SimpleOptions, Metric } from 'types';

import { PanelEditorProps } from '@grafana/data';
import { Tooltip } from '@grafana/ui';

import { RegionClass, Coord4D } from 'Models/RegionClass';

import { calculRealCoordinate } from 'Functions/otherFunction';
import { getLowerLimit, LowerLimit } from 'Functions/getLowerLimit';
import { getResultQuery } from 'Functions/getResultQuery';
import { parseColor, Color } from 'Functions/parseColor';
import { reqMetricRegion, reqMetricAuxRegion } from 'Functions/fetchMetrics';
import { searchMinMaxIdSVG, Coord4DInt } from 'Functions/searchMinMaxIdSVG';
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
  isEnabled: boolean;
}

interface State {
  /** value of tooltip */
  tooltipValue: JSX.Element;
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
  tooltipValue: JSX.Element;
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
      tooltipValue: <div></div>,
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

    if (
      valueQuery
      && region.textObj.valueGenerateObjectText
      && region.textObj.valueGenerateObjectText.numericFormatElement !== ''
      && roundMetrics
    ) {
      converValueQuery = (valueQuery || 0).toPrecision(roundMetrics).toString();
    } else if (valueQuery) {
      converValueQuery = valueQuery.toString();
    }
    // (Math.round(valueQuery * roundMetrics + Number.EPSILON) / roundMetrics).toString()
    let value: string = converValueQuery;
    if (region.textObj.valueGenerateObjectText) {
      value = region.textObj.valueGenerateObjectText.legendElement + ' ' + converValueQuery + ' ' + region.textObj.valueGenerateObjectText.unit;
    }

    return value;
  };

  /** fill state for tooltip, color zone and calc round query */
  setStateTooltip = (
    lowerLimit: LowerLimit,
    region: RegionClass,
    valueQuery: number | null,
    link: boolean
  ): Tooltip => {
    const styleTooltip = {
      color: region.textObj.colorText,
      backgroundColor: region.textObj.colorBack,
    } as CSSProperties;

    const styleMetrics = {
      color: region.textObj.valueGenerateObjectText ? region.textObj.valueGenerateObjectText.colorTextElement : 'white',
      backgroundColor: region.textObj.valueGenerateObjectText ? region.textObj.valueGenerateObjectText.colorBackElement : 'black',
    } as CSSProperties;

    const valueQueryResult: string = this.generateValueMetricElement(region, valueQuery);

    const tooltipValue: JSX.Element = (
      <div>
        <div style={styleTooltip}>
          {link && <a href={region.linkURL.hoveringTooltipLink}>{region.linkURL.hoveringTooltipText}</a>}
          {region.textObj.isTextTooltip && <p>{region.label}</p>}
        </div>
        <div style={styleMetrics}>
          {region.textObj.generateObjectText && region.textObj.valueGenerateObjectText && region.textObj.valueGenerateObjectText.displayObjectInTooltip && <p>{valueQueryResult}</p>}
        </div>
        <div>
          {this.displayValuesAuxMetrics()}
        </div>
      </div>
    );
    return {
      tooltipValue: tooltipValue,
      backgroundColor: lowerLimit.colorBack,
      borderColor: lowerLimit.colorBorder,
      sizeBorder: lowerLimit.sizeBorder,
      valueQuery: valueQueryResult,
    };
  };

  displayValueQuery = (region: RegionClass): boolean => {
    if (region.textObj.generateObjectText && region.textObj.valueGenerateObjectText && (!region.textObj.valueGenerateObjectText.displayObjectInTooltip)) {
      return true;
    }
    return false;
  };

  /** generate tooltip for metrics and apply color with lower limit */
  generateTooltipAndEditColor = (region: RegionClass, valueQuery: number | null) => {
    let stateIsFill = false;
    const lowerLimit: LowerLimit = getLowerLimit(region, valueQuery);

    if (region.mode) {
      this.editColorSvgZone(region.idSVG, lowerLimit.colorBack, lowerLimit.colorBorder, lowerLimit.sizeBorder.toString());
    }

    const resultTooltip: Tooltip = this.setStateTooltip(lowerLimit, region, valueQuery, this.props.isEnabled);
    if (valueQuery) {
      if (region.mode && ((!region.textObj.isTextTooltip) || this.displayValueQuery(region))) {
        const coordinateWrite: Coord4DInt | null = searchMinMaxIdSVG(region.idSVG);

        if (coordinateWrite) {
          stateIsFill = true;
          const styleWrite = {
            position: 'absolute',
            zIndex: 999,
            left: coordinateWrite.xMax - (coordinateWrite.xMax - coordinateWrite.xMin),
            top: coordinateWrite.yMax,
            backgroundColor: region.textObj.valueGenerateObjectText ? region.textObj.valueGenerateObjectText.colorBackElement : 'black',
            color: region.textObj.valueGenerateObjectText ? region.textObj.valueGenerateObjectText.colorTextElement : 'white',
          } as CSSProperties;
          const htmlResult = <div style={styleWrite}>{(!region.textObj.isTextTooltip) && region.label}<br />{this.displayValueQuery(region) && resultTooltip.valueQuery}</div>;
          this.setState({
            htmlResult: htmlResult,
            tooltipValue: resultTooltip.tooltipValue,
            backgroundColor: resultTooltip.backgroundColor,
            borderColor: resultTooltip.borderColor,
            sizeBorder: resultTooltip.sizeBorder,
            valueQuery: resultTooltip.valueQuery,
          });
        }
      }
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
        let numberLoop: number = (metric.returnQuery?.length || 0);
        if (metric.key !== '' && metric.keyValue !== '') {
          for (let i = 0; i < numberLoop; i++) {
            let line = metric.returnQuery[i];
            if (line.fields[0].labels) {
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
        } else {
          for (let i = 0; i < numberLoop; i++) {
            let line = metric.returnQuery[i];
            if (line.fields[0].labels) {
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
    const roundValue: string = region.textObj.generateAuxiliaryElement.numericFormatElement;
    const unit: string = region.textObj.generateAuxiliaryElement.unit;
    if (roundValue !== '') {
      result = (parseFloat(valueBrut).toPrecision(parseInt(roundValue, 10)).toString());
    } else {
      result = valueBrut;
    }
    return result + ' ' + unit;
  }; 

  private displayValuesAuxMetrics = (): JSX.Element => {
    let html: JSX.Element[] = [];
    const valuesAuxMetrics: string[] = this.getValuesAuxiliaryMetrics();
    const auxMetrics: Metric[] = this.props.uneCoor.metrics;
    const region: RegionClass = this.props.uneCoor;
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
          <p key={''} style={styleTitle}>
            Auxiliary Metric
          </p>
        );
        html.push(
          <p style={styleTitle}>
            {legend}
          </p>
        );
        let index = 1;
        for (const metric of auxMetrics) {
          const valueAuxMetric: string = this.getConvertValueAuxMetrics(valuesAuxMetrics[index - 1]);
          html.push(
            <p key={''} style={styleTitle2}>
              + Metric {index}
            </p>
          );
          html.push(
            <p key={''} style={styleContent}>
              - Value : {valueAuxMetric}
            </p>
          );
          html.push(
            <p key={''} style={styleContent}>
              - Key : {metric.key}
            </p>
          );
          html.push(
            <p key={''} style={styleContent}>
              - KeyValue : {metric.keyValue}
            </p>
          );
          html.push(
            <p key={''} style={styleContent}>
              - Type : {metric.manageValue}
            </p>
          );
          index++;
        };
      };
    return <div style={{backgroundColor: colorBack}}>{html}</div>;
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

    const coorHTML: CoorHTML = calculRealCoordinate(region, this.props.useLimit, this.props.limit);

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

    // console.log('text object');
    // console.log(region.textObj.isTextTooltip);
    // console.log('main metric');
    // console.log(region.textObj.generateObjectText);
    // console.log('aux metric');
    // console.log(region.textObj.generateAuxiliaryElement.displayObjectInTooltip);

    if (this.props.isEnabled && region.linkURL.followLink !== '') {

      value = (
        <div style={styleDiv} id={this.props.id}>
          <a href={region.linkURL.followLink}>
            <div style={{height: '100%', width: '100%'}} >
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
      if (region.textObj.isTextTooltip || (region.textObj.generateObjectText && region.textObj.valueGenerateObjectText.displayObjectInTooltip) || region.textObj.generateAuxiliaryElement.displayObjectInTooltip) {
        value = <Tooltip content={this.state.tooltipValue}>{value}</Tooltip>;
      }
    } else {
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
      if (region.textObj.isTextTooltip || (region.textObj.generateObjectText && region.textObj.valueGenerateObjectText.displayObjectInTooltip) || region.textObj.generateAuxiliaryElement.displayObjectInTooltip) {
        value = <Tooltip content={this.state.tooltipValue}>{value}</Tooltip>;
      }
    }
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
