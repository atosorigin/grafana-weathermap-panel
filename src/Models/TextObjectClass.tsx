import { Style } from 'components/Parametrage/styleComponent';

export interface GenerateTextObject {
  /** legend element */
  legendElement: string;
  /** numeric format element */
  numericFormatElement: string;
  /** unity mesure element */
  unit: string;
  /** display object in text */
  displayObjectInTooltip: boolean;
  /** display object permanently */
  // displayObjectPermanently: boolean;
  /** color text element active */
  addColorTextElement: boolean;
  /** color text element */
  colorTextElement: string;
  /** color back element active */
  addColorBackElement: boolean;
  /** color back element */
  colorBackElement: string;
}

/** value of textObjects component */
export class TextObject {
  /** legend object */
  // legend: boolean;
  /** object value */
  value: string;
  /** text display in element or tooltip */
  isTextTooltip: boolean;
  /** back color region */
  colorBack: string;
  /** color text region */
  colorText: string;
  /** style */
  style: Style;
  /** style text region */
  // styleText: string;
  /** generate object text */
  generateObjectText: boolean;
  /** if generateObjectText is true when use variable to stock data */
  valueGenerateObjectText: GenerateTextObject;
  /** text value for auxiliary metrics */
  generateAuxiliaryElement: GenerateTextObject;
  // generate metadata with text object
  // generateMetadataElement: GenerateTextObject;

  constructor(
    // legend: boolean,
    value: string,
    isTextTooltip: boolean,
    colorBack: string,
    colorText: string,
    style: Style,
    // styleText: string,
    generateObjectText: boolean,
    valueGenerateObjectText: GenerateTextObject,
    generateAuxiliaryElement: GenerateTextObject
    // meta
    // generateMetadataElement: GenerateTextObject
  ) {
    // this.legend = legend;
    this.value = value;
    this.isTextTooltip = isTextTooltip;
    this.colorBack = colorBack;
    this.colorText = colorText;
    this.style = style;
    // this.styleText = styleText;
    this.generateObjectText = generateObjectText;
    this.valueGenerateObjectText = valueGenerateObjectText;
    this.generateAuxiliaryElement = generateAuxiliaryElement;
    // add Meta
    // this.generateMetadataElement = generateMetadataElement;
  }
}
