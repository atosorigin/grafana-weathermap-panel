import React, { CSSProperties } from 'react';
import { SelectableValue, PanelEditorProps } from '@grafana/data';
import { RegionClass, Coord4D } from 'Models/RegionClass';
import { Tooltip } from '@grafana/ui';
import { SimpleOptions, Metric, Metadata } from 'types';
import { TextObject } from 'Models/TextObjectClass';
import { LowerLimitClass } from 'Models/LowerLimitClass';
import { LinkURLClass } from 'Models/LinkURLClass';
import { Style } from 'components/Parametrage/styleComponent';
import { PointClass } from 'Models/PointClass';

interface Props extends PanelEditorProps<SimpleOptions> {
  drawGraphicMarker: SelectableValue<string>;
  shape: SelectableValue<string>;
  size: string;
  positionShapeX: string;
  positionShapeY: string;
  label: string;
  color: string;
  widthImage: number;
  heightImage: number;
  police: string;
  sizePolice: string;
  //style: Style;
  idPoint: string;
  name: string;
  textObject: TextObject;
  seuil: LowerLimitClass[];
  valueMainMetric: string;
  refMainMetric: string;
  associateOrientedLinkIn: any[];
  associateOrientedLinkOut: any[];
  labelPositionX: string;
  labelPositionY: string;
  tooltipPosition: SelectableValue<any>;
  auxiliaryMetrics: Metric[];
  valuesAuxiliaryMetrics: string[];
  linkUrl: LinkURLClass;
  buttonAddLinkIsActive: boolean;
  buttonAddIncurvedLinkIsActive: boolean;
  widthInitialSpaceDefault: string;
  heightInitialSpaceDefault: string;
  positionXDefault: string;
  positionYDefault: string;
  metaData: Metadata[];
  colorMode: boolean;
  traceBorder: boolean;
  traceBack: boolean;
}

interface State {}

/**
 * to do
 */
export default class DrawPoint extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  /**
   * to do
   * @param coordinateX
   *
   */
  private defineLimitX(coordinateX: number) {
    let result: number = coordinateX;
    const xMin: number = parseInt(this.props.options.coordinateSpaceInitial.coordinate.xMin, 10);
    const xMax: number = parseInt(this.props.options.coordinateSpaceInitial.coordinate.xMax, 10);
    if (coordinateX < xMin) {
      result = xMin;
    } else if (coordinateX > xMax) {
      result = xMax;
    }
    return result;
  }

  /**
   * to do
   * @param coordinateY
   *
   */
  private defineLimitY(coordinateY: number) {
    let result: number = coordinateY;
    const yMin: number = parseInt(this.props.options.coordinateSpaceInitial.coordinate.yMin, 10);
    const yMax: number = parseInt(this.props.options.coordinateSpaceInitial.coordinate.yMax, 10);
    if (coordinateY < yMin) {
      result = yMin;
    } else if (coordinateY > yMax) {
      result = yMax;
    }
    return result;
  }

  /**
   * to do
   * @param defineCenter
   * @param sizeGraphicMarkerPx
   * @param shapeGraphicMarker
   */
  private definePositionX(positionX: number, initialSpace: Coord4D, size: number, shape: string): number {
    const xMin: number = parseInt(initialSpace.xMin, 10);
    const xMax: number = parseInt(initialSpace.xMax, 10);
    const widthInitialSpace: number = xMax - xMin;
    const ratioX = parseInt(this.props.positionXDefault, 10) / this.props.widthImage;

    // define value to display in input positionShapeX
    const x = Math.round(xMin + widthInitialSpace * ratioX);

    // saving data new positionShapeX
    let newArrayPoint: PointClass[] = this.props.options.arrayPoints;
    newArrayPoint.forEach((point) => {
      if (point.name === this.props.name) {
        point.positionShapeX = x.toString();
      }
    });
    this.props.options.arrayPoints = newArrayPoint;

    // define limit x in fonction of values xMin and xMax of initialSpace
    const xLimited = this.defineLimitX(x);

    // define display x
    const result = ((xLimited - xMin) / widthInitialSpace) * this.props.widthImage;

    // return result and center display of point in fonction of sizePoint and borderPoint
    return result - (size + parseInt(this.defineBorderSize(), 10));
  }

  /**
   * to do
   * @param defineCenter
   * @param sizeGraphicMarkerPx
   * @param shapeGraphicMarker
   */
  private definePositionY(positionY: number, initialSpace: SelectableValue<RegionClass>, size: number, shapeGraphicMarker: string): number {
    const yMin: number = parseInt(initialSpace.yMin, 10);
    const yMax: number = parseInt(initialSpace.yMax, 10);
    const heightInitialSpace: number = yMax - yMin;
    const ratioY = parseInt(this.props.positionYDefault, 10) / this.props.heightImage;

    // define value to display in input positionShapeY
    let y = Math.round(yMin + heightInitialSpace * ratioY);

    // saving data new positionShapeY
    let newArrayPoint: PointClass[] = this.props.options.arrayPoints;
    newArrayPoint.forEach((point) => {
      if (point.name === this.props.name) {
        point.positionShapeY = y.toString();
      }
    });
    this.props.options.arrayPoints = newArrayPoint;

    // define limit y in fonction of values yMin and yMax of initialSpace
    const yLimited = this.defineLimitY(y);

    // define display y
    const result = ((yMin + heightInitialSpace - yLimited) / heightInitialSpace) * this.props.heightImage;

    return result - (size + parseInt(this.defineBorderSize(), 10));
  }

  /**
   * to do
   * @param sizeGraphicMarker
   * @param shapeGraphicMarker
   */
  private defineSizeGraphicMarkerPx(size: string, shape: string) {
    if (this.props.shape.value === 'none') {
      return 0;
    } else {
      // if (size === 'small') {
      //   return 4;
      // } else if (size === 'medium') {
      //   return 6;
      // } else if (size === 'large') {
      //   return 8;
      // } else {
      //   return 0;
      // }
      return parseInt(size, 10) / 2;
    }
  }

  defineBorderRadius = (): number => {
    let result = 0;
    const shape: string = this.props.shape.value || '';
    if (shape === 'circle') {
      result = 50;
    }
    return result;
  };

  defineRotate = (): string => {
    let result = 'rotate(0deg)';
    const shape: string = this.props.shape.value || '';
    if (shape === 'diamond') {
      result = 'rotate(45deg)';
    }
    return result;
  };

  /**
   * to do
   * @param positionX
   * @param positionY
   * @param color
   * @param sizeGraphicMarkerPx
   * @param shapeGraphicMarker
   */
  private drawPoint(drawGraphicMarker: string, size: number, positionShapeX: number, positionShapeY: number): any {
    const valueToolTip: JSX.Element | null = this.defineContentTooltip('point');
    const linkUrlPoint = this.props.linkUrl.followLink;
    const borderRadius = this.defineBorderRadius() + 'px';
    const rotate = this.defineRotate();
    let positionTooltip: any = '';
    if (this.props.tooltipPosition.value) {
      positionTooltip = this.props.tooltipPosition.value.toLowerCase();
    }

    if (drawGraphicMarker === 'true') {
      if (this.props.buttonAddLinkIsActive || this.props.buttonAddIncurvedLinkIsActive) {
        if (valueToolTip === null) {
          return (
            <div
              style={{
                border: this.defineBorderSize() + 'px solid ' + this.defineBorderColor(),
                backgroundColor: this.defineBackgroundColor(),
                borderRadius: borderRadius,
                padding: size + 'px',
                position: 'absolute',
                zIndex: 1000,
                left: positionShapeX,
                top: positionShapeY,
                transform: rotate,
              }}
              id={this.props.idPoint}
            ></div>
          );
        } else {
          return (
            <Tooltip key={'tooltip' + this.props.name} content={valueToolTip} placement={positionTooltip}>
              <div
                style={{
                  border: this.defineBorderSize() + 'px solid ' + this.defineBorderColor(),
                  backgroundColor: this.defineBackgroundColor(),
                  borderRadius: borderRadius,
                  padding: size + 'px',
                  position: 'absolute',
                  zIndex: 1000,
                  left: positionShapeX,
                  top: positionShapeY,
                  transform: rotate,
                }}
                id={this.props.idPoint}
              ></div>
            </Tooltip>
          );
        }
      } else {
        if (valueToolTip === null) {
          return (
            <div>
              <a
                href={linkUrlPoint}
                onClick={this.desactiveLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: this.defineBorderSize() + 'px solid ' + this.defineBorderColor(),
                  backgroundColor: this.defineBackgroundColor(),
                  borderRadius: borderRadius,
                  padding: size + 'px',
                  position: 'absolute',
                  zIndex: 1000,
                  left: positionShapeX,
                  top: positionShapeY,
                  transform: rotate,
                  cursor: this.defineCursor(),
                }}
                id={this.props.idPoint}
              ></a>
            </div>
          );
        } else {
          return (
            <Tooltip key={'tooltip' + this.props.name} content={valueToolTip} placement={positionTooltip}>
              <a
                href={linkUrlPoint}
                onClick={this.desactiveLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: this.defineBorderSize() + 'px solid ' + this.defineBorderColor(),
                  backgroundColor: this.defineBackgroundColor(),
                  borderRadius: borderRadius,
                  padding: size + 'px',
                  position: 'absolute',
                  zIndex: 1000,
                  left: positionShapeX,
                  top: positionShapeY,
                  transform: rotate,
                  cursor: this.defineCursor(),
                }}
                id={this.props.idPoint}
              ></a>
            </Tooltip>
          );
        }
      }
    } else {
      return <div></div>;
    }
  }

  private desactiveLink = (event: any) => {
    // const inputFollowingLink: any = document.getElementById('followLink');
    // if (inputFollowingLink) {
    //   if (inputFollowingLink.defaultValue === '') {
    //     event.preventDefault();
    //   }
    // } else if (this.props.linkUrl.followLink === '') {
    //   event.preventDefault();
    // }
    if (this.props.linkUrl.followLink === '') {
      event.preventDefault();
    }
  };

  private defineCursor = (): string => {
    let result = 'pointer';
    // const inputFollowingLink: any = document.getElementById('followLink');
    // if (inputFollowingLink) {
    //   if (inputFollowingLink.defaultValue === '') {
    //     result = 'default';
    //   }
    // } else if (this.props.linkUrl.followLink === '') {
    //   result = 'default';
    // }
    if (this.props.linkUrl.followLink === '') {
      result = 'default';
    }
    return result;
  };

  private definePositionLabelX = (coordinateX: number): number => {
    const positionLabel: number = parseInt(this.props.labelPositionX, 10);
    let result = 0;
    if (this.props.drawGraphicMarker.value === 'true') {
      result = coordinateX + positionLabel + parseInt(this.props.size, 10) + 5;
      // if (this.props.size.value === 'large') {
      //   result = coordinateX + positionLabel + 18;
      // } else if (this.props.size.value === 'medium') {
      //   result = coordinateX + positionLabel + 14;
      // }
    } else {
      result = coordinateX + positionLabel;
    }
    return result;
  };

  private definePositionLabelY = (coordinateY: number): number => {
    const inverseAxeY = -1;
    const positionLabel: number = parseInt(this.props.labelPositionY, 10) * inverseAxeY;
    let result = 0;
    if (this.props.drawGraphicMarker.value === 'true') {
      result = coordinateY + positionLabel + parseInt(this.props.size, 10) + 5;
      // if (this.props.size.value === 'large') {
      //   result = coordinateY + positionLabel + 18;
      // } else if (this.props.size.value === 'medium') {
      //   result = coordinateY + positionLabel + 14;
      // }
    } else {
      result = coordinateY + positionLabel;
    }
    return result;
  };

  private displayLabel(label: string, name: string, positionX: number, positionY: number, police: string) {
    const valueToolTip: JSX.Element | null = this.defineContentTooltip('label');
    let positionTooltip: any = '';
    if (this.props.tooltipPosition.value) {
      positionTooltip = this.props.tooltipPosition.value.toLowerCase();
    }
    if (valueToolTip === null) {
      return (
        <div
          style={{
            textDecoration: this.defineTextDecoration(),
            fontStyle: this.defineFontStyle(),
            fontWeight: this.defineFontWeight(),
            fontSize: this.props.sizePolice,
            fontFamily: police,
            color: this.props.textObject.colorText || 'black',
            position: 'absolute',
            zIndex: 1000,
            top: this.definePositionLabelY(positionY),
            left: this.definePositionLabelX(positionX),
          }}
        >
          {this.defineTextObject(this.props.valueMainMetric)}
        </div>
      );
    } else {
      return (
        <Tooltip key={'tooltipLabel' + this.props.name} content={valueToolTip} placement={positionTooltip}>
          <div
            style={{
              textDecoration: this.defineTextDecoration(),
              fontStyle: this.defineFontStyle(),
              fontWeight: this.defineFontWeight(),
              fontSize: this.props.sizePolice,
              fontFamily: police,
              color: this.props.textObject.colorText || 'black',
              position: 'absolute',
              zIndex: 1000,
              top: this.definePositionLabelY(positionY),
              left: this.definePositionLabelX(positionX),
            }}
          >
            {this.defineTextObject(this.props.valueMainMetric)}
          </div>
        </Tooltip>
      );
    }
  }

  private defineMainMetric = (mainMetric: string): string => {
    let result = '';
    const unit: string = this.props.textObject.valueGenerateObjectText.unit;
    const decimal: string = this.props.textObject.valueGenerateObjectText.numericFormatElement;
    const roundValue: number = parseInt(decimal, 10) || 1;

    if (decimal !== '') {
      result = parseFloat(mainMetric).toPrecision(roundValue) + ' ' + unit;
    } else {
      result = mainMetric + ' ' + unit;
    }
    return result;
  };

  private defineAuxMetric = (auxMetric: string): string => {
    let result = '';
    const unit: string = this.props.textObject.generateAuxiliaryElement.unit;
    const decimal: string = this.props.textObject.generateAuxiliaryElement.numericFormatElement;
    const roundValue: number = parseInt(decimal, 10) || 1;

    if (decimal !== '') {
      result = parseFloat(auxMetric).toPrecision(roundValue) + ' ' + unit;
    } else {
      result = auxMetric + ' ' + unit;
    }
    return result;
  };

  private defineTextObject = (mainMetric: string): JSX.Element => {
    let htmlTextObject: JSX.Element[] = [];
    let htmlMainMetric: JSX.Element[] = [];
    const dislayTextObjectInTooltip: boolean = this.props.textObject.isTextTooltip;
    const textColorTextObject: string = this.props.textObject.colorText;
    const backColoTextObject: string = this.props.textObject.colorBack;
    const displayMainMetric: boolean = this.props.textObject.generateObjectText;
    const displayMainMetricInTooltip: boolean = this.props.textObject.valueGenerateObjectText.displayObjectInTooltip;
    const addTextColorMainMetric: boolean = this.props.textObject.valueGenerateObjectText.addColorTextElement;
    const addBackColorMainMetric: boolean = this.props.textObject.valueGenerateObjectText.addColorBackElement;
    const textColorMainMetric: string = this.props.textObject.valueGenerateObjectText.colorTextElement;
    const backColorMainMetric: string = this.props.textObject.valueGenerateObjectText.colorBackElement;
    const legendMainMetric: string = this.props.textObject.valueGenerateObjectText.legendElement;

    const styleLabel = {
      color: textColorTextObject,
      backgroundColor: backColoTextObject,
      textAlign: 'center',
      margin: 0,
      padding: '0 5px',
    } as CSSProperties;

    const styleMainMetric = {
      color: addTextColorMainMetric ? textColorMainMetric : textColorTextObject,
      margin: 0,
      padding: 0,
      whiteSpace: 'nowrap',
    } as CSSProperties;

    if (!dislayTextObjectInTooltip) {
      htmlTextObject.push(
        <p key={'contentTextObject1' + this.props.name} style={styleLabel}>
          {this.props.label || this.props.name.toUpperCase()}
        </p>
      );
    }

    if (displayMainMetric) {
      if (!displayMainMetricInTooltip) {
        if (legendMainMetric) {
          htmlMainMetric.push(
            <p key={'contentTextObject2' + this.props.name} style={styleMainMetric}>
              {legendMainMetric}
            </p>
          );
        }
        // Condition Display NaN none Point
        htmlMainMetric.push(
          <p key={'contentTextObject3' + this.props.name} style={styleMainMetric}>
            {!isNaN(parseFloat(this.defineMainMetric(mainMetric))) && this.defineMainMetric(mainMetric)}
          </p>
        );
      }
    }

    let styleMainDiv = {
      backgroundColor: backColoTextObject,
      border: '1px solid black',
    } as CSSProperties;

    if (!displayMainMetric || (displayMainMetric && displayMainMetricInTooltip)) {
      styleMainDiv = {
        backgroundColor: backColoTextObject,
      };
    }
    return (
      <div style={styleMainDiv}>
        {htmlTextObject}
        <div style={{ backgroundColor: addBackColorMainMetric ? backColorMainMetric : backColoTextObject, padding: '0 5px' }}>{htmlMainMetric}</div>
      </div>
    );
  };

  private defineHtmlLinkTooltip = (): JSX.Element => {
    let result: JSX.Element = <div></div>;
    if (this.props.linkUrl.hoveringTooltipText !== '') {
      result = (
        <a
          style={{ fontFamily: this.props.police, fontSize: '11px', marginBottom: '0px', textAlign: 'center' }}
          href={this.props.linkUrl.hoveringTooltipLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.props.linkUrl.hoveringTooltipText}
        </a>
      );
    }
    return result;
  };

  private defineContentTooltip(localisation: string): JSX.Element | null {
    const contentTooltip: JSX.Element[] = [];
    const contentTooltipMainMetric: JSX.Element[] = [];
    const contentTooltipAuxMetric: JSX.Element[] = [];
    const contentTooltipAssociateLink: JSX.Element[] = [];
    const contentTooltipMetadata: JSX.Element[] = [];
    const arrayOrientedLinksIn: any[] = this.props.associateOrientedLinkIn;
    const arrayOrientedLinksOut: any[] = this.props.associateOrientedLinkOut;
    const refMainMetric: string = this.props.refMainMetric;
    const dislayTextObjectInTooltip: boolean = this.props.textObject.isTextTooltip;
    const textColorTextObject: string = this.props.textObject.colorText;
    const backColoTextObject: string = this.props.textObject.colorBack;
    const displayMainMetric: boolean = this.props.textObject.generateObjectText;
    const displayMainMetricInTooltip: boolean = this.props.textObject.valueGenerateObjectText.displayObjectInTooltip;
    const addTextColorMainMetric: boolean = this.props.textObject.valueGenerateObjectText.addColorTextElement;
    const addBackColorMainMetric: boolean = this.props.textObject.valueGenerateObjectText.addColorBackElement;
    const textColorMainMetric: string = this.props.textObject.valueGenerateObjectText.colorTextElement;
    const backColorMainMetric: string = this.props.textObject.valueGenerateObjectText.colorBackElement;
    const legendMainMetric: string = this.props.textObject.valueGenerateObjectText.legendElement;
    const displayAuxMetricInTooltip: boolean = this.props.textObject.generateAuxiliaryElement.displayObjectInTooltip;
    const addTextColorAuxMetric: boolean = this.props.textObject.generateAuxiliaryElement.addColorTextElement;
    const addBackColorAuxMetric: boolean = this.props.textObject.generateAuxiliaryElement.addColorBackElement;
    const textColorAuxMetric: string = this.props.textObject.generateAuxiliaryElement.colorTextElement;
    const backColorAuxMetric: string = this.props.textObject.generateAuxiliaryElement.colorBackElement;
    const legendAuxMetric: string = this.props.textObject.generateAuxiliaryElement.legendElement;

    const styleMainTitle = {
      fontFamily: this.props.police,
      fontSize: '11px',
      marginBottom: '0px',
      textAlign: 'center',
      color: textColorTextObject,
      backgroundColor: backColoTextObject,
    } as React.CSSProperties;

    const styleTitleMainMetric = {
      fontFamily: this.props.police,
      fontSize: '10px',
      marginTop: '5px',
      marginBottom: '0px',
      color: addTextColorMainMetric ? textColorMainMetric : textColorTextObject,
    } as React.CSSProperties;

    const styleTitleAuxMetric = {
      fontFamily: this.props.police,
      fontSize: '10px',
      marginTop: '5px',
      marginBottom: '0px',
      color: addTextColorAuxMetric ? textColorAuxMetric : textColorTextObject,
    } as React.CSSProperties;

    const styleTitle2AuxMetric = {
      fontFamily: this.props.police,
      fontSize: '10px',
      marginTop: '5px',
      marginLeft: '5px',
      marginBottom: '0px',
      color: addTextColorAuxMetric ? textColorAuxMetric : textColorTextObject,
    } as React.CSSProperties;

    const styleTitleMetaData = {
      fontFamily: this.props.police,
      fontSize: '10px',
      marginTop: '5px',
      marginBottom: '0px',
      color: 'white',
    } as React.CSSProperties;

    const styleContentMainMetrics = {
      fontFamily: this.props.police,
      fontSize: '9px',
      marginLeft: '10px',
      marginBottom: '0px',
      color: addTextColorMainMetric ? textColorMainMetric : textColorTextObject,
    } as React.CSSProperties;

    const styleContentAuxMetrics = {
      fontFamily: this.props.police,
      fontSize: '9px',
      marginLeft: '10px',
      marginBottom: '0px',
      color: addTextColorAuxMetric ? textColorAuxMetric : textColorTextObject,
    } as React.CSSProperties;

    const styleTitleAssociateLink = {
      fontFamily: this.props.police,
      fontSize: '10px',
      marginTop: '5px',
      marginBottom: '0px',
    } as React.CSSProperties;

    const styleContentAssociateLink = {
      fontFamily: this.props.police,
      fontSize: '9px',
      marginLeft: '10px',
      marginBottom: '0px',
    } as React.CSSProperties;

    if (dislayTextObjectInTooltip) {
      contentTooltip.push(
        <p key={localisation + 'ContentTooltip1' + this.props.name} style={styleMainTitle}>
          {this.props.label || this.props.name.toUpperCase()}
        </p>
      );
    }

    if (displayMainMetric && displayMainMetricInTooltip) {
      if (legendMainMetric) {
        contentTooltipMainMetric.push(
          <p key={localisation + 'ContentTooltip2' + this.props.name} style={styleTitleMainMetric}>
            {legendMainMetric}
          </p>
        );
      }

      contentTooltipMainMetric.push(
        <p key={localisation + 'ContentTooltip3' + this.props.name} style={styleTitleMainMetric}>
          Main Metric
        </p>
      );

      contentTooltipMainMetric.push(
        <p key={localisation + 'ContentTooltip4' + this.props.name} style={styleContentMainMetrics}>
          - Reference : {refMainMetric}
        </p>
      );

      contentTooltipMainMetric.push(
        <p key={localisation + 'ContentTooltip5' + this.props.name} style={styleContentMainMetrics}>
          - Value : {this.defineMainMetric(this.props.valueMainMetric)}
        </p>
      );
    }

    if (displayAuxMetricInTooltip) {
      if (legendAuxMetric) {
        contentTooltipMainMetric.push(
          <p key={localisation + 'ContentTooltip6' + this.props.name} style={styleTitleAuxMetric}>
            {legendAuxMetric}
          </p>
        );
      }
      if (this.props.auxiliaryMetrics.length > 0) {
        contentTooltipAuxMetric.push(
          <p key={localisation + 'ContentTooltip7' + this.props.name} style={styleTitleAuxMetric}>
            Auxiliary Metric
          </p>
        );
        let index = 1;
        this.props.auxiliaryMetrics.forEach((metric) => {
          contentTooltipAuxMetric.push(
            <p key={index.toString() + localisation + 'ContentTooltip8' + this.props.name} style={styleTitle2AuxMetric}>
              + Metric {index}
            </p>
          );
          contentTooltipAuxMetric.push(
            <p key={index.toString() + localisation + 'ContentTooltip9' + this.props.name} style={styleContentAuxMetrics}>
              - Reference : {metric.refId}
            </p>
          );
          contentTooltipAuxMetric.push(
            <p key={index.toString() + localisation + 'ContentTooltip10' + this.props.name} style={styleContentAuxMetrics}>
              - Value :{' '}
              {!isNaN(parseFloat(this.defineAuxMetric(this.props.valuesAuxiliaryMetrics[index - 1]))) &&
                this.defineAuxMetric(this.props.valuesAuxiliaryMetrics[index - 1])}
            </p>
          );
          contentTooltipAuxMetric.push(
            <p key={index.toString() + localisation + 'ContentTooltip11' + this.props.name} style={styleContentAuxMetrics}>
              - Key : {metric.key}
            </p>
          );
          contentTooltipAuxMetric.push(
            <p key={index.toString() + localisation + 'ContentTooltip12' + this.props.name} style={styleContentAuxMetrics}>
              - KeyValue : {metric.keyValue}
            </p>
          );
          contentTooltipAuxMetric.push(
            <p key={index.toString() + localisation + 'ContentTooltip13' + this.props.name} style={styleContentAuxMetrics}>
              - Type : {metric.manageValue}
            </p>
          );
          index++;
        });
      }
    }

    if (arrayOrientedLinksIn.length !== 0) {
      contentTooltipAssociateLink.push(
        <p key={localisation + 'ContentTooltip14' + this.props.name} style={styleTitleAssociateLink}>
          Associate Link In :
        </p>
      );
      arrayOrientedLinksIn.forEach((orientedLinkIn) => {
        const nameOrientedLink: string = orientedLinkIn.label || orientedLinkIn.name;
        contentTooltipAssociateLink.push(
          <p key={localisation + 'ContentTooltip15' + this.props.name + nameOrientedLink} style={styleContentAssociateLink}>
            - {nameOrientedLink}
          </p>
        );
      });
    }

    if (arrayOrientedLinksOut.length !== 0) {
      contentTooltipAssociateLink.push(
        <p key={localisation + 'ContentTooltip16' + this.props.name} style={styleTitleAssociateLink}>
          Associate Link Out :
        </p>
      );
      arrayOrientedLinksOut.forEach((orientedLinkOut) => {
        const nameOrientedLink: string = orientedLinkOut.label || orientedLinkOut.name;
        contentTooltipAssociateLink.push(
          <p key={localisation + 'ContentTooltip17' + this.props.name + nameOrientedLink} style={styleContentAssociateLink}>
            - {nameOrientedLink}
          </p>
        );
      });
    }

    if (this.props.metaData.length !== 0) {
      contentTooltipMetadata.push(
        <p key={localisation + 'ContentTooltip18' + this.props.name} style={styleTitleMetaData}>
          Metadata
        </p>
      );
      this.props.metaData.forEach((oneMetaData, index) => {
        const styleContentMetaData = {
          color: oneMetaData.obj.colorText,
          backgroundColor: oneMetaData.obj.colorBack,
          fontWeight: oneMetaData.obj.style.bold ? 'bold' : 'normal',
          fontStyle: oneMetaData.obj.style.italic ? 'italic' : 'normal',
          textDecoration: oneMetaData.obj.style.underline ? 'underline' : 'none',
          fontFamily: this.props.police,
          fontSize: '9px',
          marginLeft: '10px',
          marginBottom: '0px',
        } as CSSProperties;
        contentTooltipMetadata.push(
          <p key={localisation + index + 'ContentTooltip19' + this.props.name} style={styleContentMetaData}>
            - {oneMetaData.meta}
          </p>
        );
      });
    }

    if (
      contentTooltip.length === 0 &&
      contentTooltipMainMetric.length === 0 &&
      contentTooltipAssociateLink.length === 0 &&
      contentTooltipMetadata.length === 0 &&
      !this.props.linkUrl.hoveringTooltipText
    ) {
      return null;
    }

    return (
      <div>
        <div style={{ border: '1px solid black', padding: 0 }}>
          {contentTooltip}
          <div style={{ backgroundColor: addBackColorMainMetric ? backColorMainMetric : backColoTextObject, padding: '0 5px' }}>
            {contentTooltipMainMetric}
          </div>
          <div style={{ backgroundColor: addBackColorAuxMetric ? backColorAuxMetric : backColoTextObject, padding: '0 5px' }}>
            {contentTooltipAuxMetric}
          </div>
          <div style={{ padding: '0 5px' }}>{contentTooltipMetadata}</div>
          <div style={{ padding: '0 5px' }}>{contentTooltipAssociateLink}</div>
          {this.defineHtmlLinkTooltip()}
        </div>
      </div>
    );
  }

  private defineBackgroundColor() {
    let colorBackground = '';

    if (!this.props.colorMode && this.props.seuil.length > 0) {
      if (this.props.seuil[0].backColor !== '') {
        colorBackground = this.props.seuil[0].backColor;
      } else {
        colorBackground = 'black';
      }
    } else {
      colorBackground = 'black';
    }

    const valueMainMetric: number = parseInt(this.props.valueMainMetric, 10);
    let index = 0;

    if (this.props.traceBack) {
      if (this.props.colorMode && this.props.seuil.length > 0) {
        this.props.seuil.forEach((level: LowerLimitClass) => {
          let lowerLimitMin = 0;
          if (level.lowerLimitMin === '') {
            lowerLimitMin = 0;
          } else {
            lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
          }
          if (lowerLimitMin === 0) {
            if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
              colorBackground = level.backColor;
            }
          } else if (this.props.seuil.length === index + 1) {
            if (valueMainMetric > lowerLimitMin) {
              colorBackground = level.backColor;
            }
          } else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
            colorBackground = level.backColor;
          }
          index++;
        });
      }
    }

    return colorBackground;
  }

  private defineBorderColor() {
    let colorBorder = '';

    if (!this.props.colorMode && this.props.seuil.length > 0) {
      if (this.props.seuil[0].borderColor !== '') {
        colorBorder = this.props.seuil[0].borderColor;
      } else {
        colorBorder = 'black';
      }
    } else {
      colorBorder = 'black';
    }

    const valueMainMetric: number = parseInt(this.props.valueMainMetric, 10);
    let index = 0;

    if (this.props.traceBorder) {
      if (this.props.colorMode && this.props.seuil.length > 0) {
        this.props.seuil.forEach((level: LowerLimitClass) => {
          let lowerLimitMin = 0;
          if (level.lowerLimitMin === '') {
            lowerLimitMin = 0;
          } else {
            lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
          }
          if (lowerLimitMin === 0) {
            if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
              colorBorder = level.borderColor;
            }
          } else if (this.props.seuil.length === index + 1) {
            if (valueMainMetric > lowerLimitMin) {
              colorBorder = level.borderColor;
            }
          } else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
            colorBorder = level.borderColor;
          }
          index++;
        });
      }
    }

    return colorBorder;
  }

  private defineBorderSize() {
    let sizeBorder = '';

    if (!this.props.colorMode && this.props.seuil.length > 0) {
      sizeBorder = this.props.seuil[0].sizeBorder;
    } else {
      sizeBorder = '1';
    }

    const valueMainMetric: number = parseInt(this.props.valueMainMetric, 10);
    let index = 0;

    if (this.props.traceBorder) {
      if (this.props.colorMode && this.props.seuil.length > 0) {
        this.props.seuil.forEach((level: LowerLimitClass) => {
          let lowerLimitMin = 0;
          if (level.lowerLimitMin === '') {
            lowerLimitMin = 0;
          } else {
            lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
          }
          if (lowerLimitMin === 0) {
            if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
              sizeBorder = level.sizeBorder;
            }
          } else if (this.props.seuil.length === index + 1) {
            if (valueMainMetric > lowerLimitMin) {
              sizeBorder = level.sizeBorder;
            }
          } else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
            sizeBorder = level.sizeBorder;
          }
          index++;
        });
      }
    }

    return sizeBorder;
  }

  private defineTextDecoration = (): string => {
    const mainStyle: Style = this.props.textObject.style;
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

  private defineFontStyle = (): string => {
    const mainStyle: Style = this.props.textObject.style;
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

  private defineFontWeight = (): any => {
    const mainStyle: Style = this.props.textObject.style;
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
   * render
   */
  render() {
    const initialSpace: Coord4D = this.props.options.coordinateSpaceInitial.coordinate;
    const shape: string = this.props.shape.value || '';
    const size: number = this.defineSizeGraphicMarkerPx(this.props.size || '', shape);
    const valuePositionX: number = parseInt(this.props.positionShapeX, 10) || 0;
    const valuePositionY: number = parseInt(this.props.positionShapeY, 10) || 0;
    const positionShapeX: number = this.definePositionX(valuePositionX, initialSpace, size, shape);
    const positionShapeY: number = this.definePositionY(valuePositionY, initialSpace, size, shape);
    const label: string = this.props.label;
    const name: string = this.props.name;
    const drawGraphicMarker: string = this.props.drawGraphicMarker.value || '';
    const police = this.props.police;

    return (
      <div key={this.props.name} style={{ cursor: 'pointer' }}>
        {this.displayLabel(label, name, positionShapeX, positionShapeY, police)}
        {this.drawPoint(drawGraphicMarker, size, positionShapeX, positionShapeY)}
      </div>
    );
  }
}
