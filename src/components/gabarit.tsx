import React from 'react';
import { PanelEditorProps, SelectableValue } from '@grafana/data';
// add Metadata
import { SimpleOptions, GabaritFile, Metric, Metadata } from '../types';
import { FormField, Button, Collapse, FormLabel, Select } from '@grafana/ui';
//import /*pointClassImport, regionClassImport, gabaritPointClassImport, gabaritRegionClassImport */ '../../config/testVariable';
import { coordParse, LabelCoord2D, Filtred, filterParse, coordParseRegion, filterParseRegion } from '../Functions/loaderGabarit';
//import { LinkURLClass } from 'Models/LinkURLClass';
//import { PositionParameterClass } from 'Models/PositionParameterClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import { PositionParameterClass } from 'Models/PositionParameterClass';
import { LinkURLClass } from 'Models/LinkURLClass';
//import { LowerLimitClass } from 'Models/LowerLimitClass';
//import { TextObject } from 'Models/TextObjectClass';

import { reqMetricPoint, reqMetricOrientedLink } from '../Functions/fetchMetrics';

import { PointClass } from 'Models/PointClass';
import { TextObject, GenerateTextObject } from 'Models/TextObjectClass';
import { Style } from 'components/Parametrage/styleComponent';
import { RegionClass, Coord4D } from 'Models/RegionClass';
import { searchNameIsFilter } from 'Functions/getResultQuery';
// import { initRegionCoordinateSpace } from 'Functions/initRegionCoordinateSpace';
// import { LowerLimitClass } from 'Models/LowerLimitClass';
// import { initPoint } from 'Functions/initPoint';

interface Props extends PanelEditorProps<SimpleOptions> {}

/*
 * TODO
 */

interface State {
  selectQuerryID: Array<SelectableValue<string>>;
  collapseSelectURL: boolean;
  collapseGabarit: boolean;
  collapseGabaritDefault: boolean;
}

// interface SelectQueryID {
//   value: string;
//   label: string;
// }

class Gabarit extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectQuerryID: [
        { label: 'A', value: 'A' },
        { label: 'B', value: 'B' },
        { label: 'C', value: 'C' },
        { label: 'D', value: 'D' },
        { label: 'E', value: 'E' },
        { label: 'F', value: 'F' },
        { label: 'G', value: 'G' },
        { label: 'H', value: 'H' },
        { label: 'I', value: 'I' },
        { label: 'J', value: 'J' },
        { label: 'K', value: 'K' },
        { label: 'L', value: 'L' },
        { label: 'M', value: 'M' },
        { label: 'N', value: 'N' },
        { label: 'O', value: 'O' },
        { label: 'P', value: 'P' },
        { label: 'Q', value: 'Q' },
        { label: 'R', value: 'R' },
        { label: 'S', value: 'S' },
        { label: 'T', value: 'T' },
        { label: 'U', value: 'U' },
        { label: 'V', value: 'V' },
        { label: 'W', value: 'W' },
        { label: 'X', value: 'X' },
        { label: 'Y', value: 'Y' },
        { label: 'Z', value: 'Z' },
      ],
      collapseSelectURL: false,
      collapseGabarit: false,
      collapseGabaritDefault: false,
    };
  }
  result: any[] = [];

  /**************************************CATCH******************************************/

  onChangeSelectQuerryID = (value: SelectableValue<string>, index: number) => {
    let newGabaritFile: GabaritFile[] = this.props.options.saveGabaritFile;
    newGabaritFile[index].queryID = value.value!;
    this.props.onOptionsChange({
      ...this.props.options,
      saveGabaritFile: newGabaritFile,
    });
  };

  onToggleSelectUrl = (isOpen: boolean): void => {
    this.setState({
      collapseSelectURL: isOpen,
    });
  };

  UrlValidator = (url: string) => {
    let result = true;
    for (let index in this.props.options.saveGabaritURL) {
      if (this.props.options.saveGabaritURL[index] === url) {
        result = false;
        break;
      }
    }
    return result;
  };

  GabaritValidator = (name: string) => {
    let result = true;
    this.props.options.saveGabaritFile.forEach((element) => {
      if (element.fileName === name) {
        console.log('LoadGabaritFileReject');
        result = false;
      }
    });
    return result;
  };

  /**************************************LOADER******************************************/

  // quantile|0.5#slice|inner_eval
  loadGabarit = (file: any, url: string) => {
    let name = url.split('/');
    if (this.GabaritValidator(name[name.length - 1])) {
      let newGabarit: GabaritFile = {
        queryID: 'null',
        fileName: name[name.length - 1],
        loaded: false,
        globalGabarit: file.global,
        templateGabaritPoint: [],
        templateGabaritRegion: [],
        templateGabaritLink: [],
        templateGabaritPointDefault: [],
        templateGabaritRegionDefault: [],
        templateGabaritLinkDefault: [],
      };
      file.templates.forEach((gab: any) => {
        if (gab.type === 'point') {
          newGabarit.templateGabaritPoint.push(gab);
        }
        if (gab.type === 'region') {
          newGabarit.templateGabaritRegion.push(gab);
        }
        if (gab.type === 'link') {
          newGabarit.templateGabaritLink.push(gab);
        }
      });
      file.default.templates.forEach((gab: any) => {
        if (gab.type === 'point') {
          newGabarit.templateGabaritPointDefault.push(gab);
        }
        if (gab.type === 'region') {
          newGabarit.templateGabaritRegionDefault.push(gab);
        }
        if (gab.type === 'link') {
          newGabarit.templateGabaritLinkDefault.push(gab);
        }
      });
      this.props.options.saveGabaritFile.push(newGabarit);
    }
  };

  fetchUrl = async (url: string) => {
    try {
      let file = {};
      let response = await fetch(url);

      file = await response.json();
      return file;
    } catch (error) {
      console.error(error);
    }
    return null;
  };

  loadDefaultGabarit = async (file: any, url: string) => {
    let name = url.split('/');
    let newGabarit: GabaritFile = {
      queryID: 'null',
      fileName: name[name.length - 1],
      loaded: false,
      globalGabarit: file.global,
      templateGabaritPoint: [],
      templateGabaritRegion: [],
      templateGabaritLink: [],
      templateGabaritPointDefault: [],
      templateGabaritRegionDefault: [],
      templateGabaritLinkDefault: [],
    };
    file.default.templates.forEach((gab: any) => {
      if (gab.type === 'point') {
        newGabarit.templateGabaritPointDefault.push(gab);
      }
      if (gab.type === 'region') {
        newGabarit.templateGabaritRegionDefault.push(gab);
      }
      if (gab.type === 'link') {
        newGabarit.templateGabaritLinkDefault.push(gab);
      }
    });
    this.props.options.gabaritDefault = newGabarit;
  };

  fetchGabarit = () => {
    //this.result = fetchConfFile(this.props.options.saveGabaritURL);
    this.props.options.saveGabaritURL.forEach(async (url) => {
      try {
        let file = {};
        let response = await fetch(url);
        file = await response.json();
        this.loadGabarit(file, url);
      } catch (error) {
        console.error(error);
      }
    });
  };

  /**************************************CHECK TOLOAD/ADD FILTER******************************************/

  addFilterDynamic = (metric: Metric, label: LabelCoord2D, value: LabelCoord2D) => {
    let result: Metric = {
      key: metric.key,
      unit: metric.unit,
      format: metric.format,
      keyValue: metric.keyValue,
      filter: JSON.parse(JSON.stringify(metric.filter)),
      expr: metric.expr,
      returnQuery: metric.returnQuery,
      manageValue: metric.manageValue,
    };
    if (label.x !== value.x) {
      result.filter!.push({ label: label.x, value: value.x });
    }
    if (label.y !== value.y) {
      result.filter!.push({ label: label.y, value: value.y });
    }
    return result;
  };

  checkCoordinateFilterPoint = (point: PointClass, props: any) => {
    reqMetricPoint(point, props);
    point.mainMetric.returnQuery?.forEach((dataFrame) => {
      const result = searchNameIsFilter(dataFrame, point.mainMetric);
      if (result) {
        this.props.options.arrayPoints.push(point);
      } else {
        console.log('Filter not found -> no load');
      }
    });
  };

  checkCoordinateFilterLink = (link: OrientedLinkClass, props: any) => {
    reqMetricOrientedLink(link, props);
    link.mainMetric.returnQuery?.forEach((dataFrame) => {
      const result = searchNameIsFilter(dataFrame, link.mainMetric);
      if (result) {
        this.props.options.arrayOrientedLinks.push(link);
      } else {
        console.log('Filter not found -> no load');
      }
    });
  };

  /**************************************INPUT******************************************/

  onToggleGabaritUrl = (isOpen: boolean): void => {
    this.setState({
      collapseSelectURL: isOpen,
    });
  };

  onToggleGabaritDefault = (isOpen: boolean): void => {
    this.setState({
      collapseGabaritDefault: isOpen,
    });
  };

  onToggleGabarit = (isOpen: boolean): void => {
    this.setState({
      collapseGabarit: isOpen,
    });
  };

  onGabaritUrlChanged = (event: { currentTarget: HTMLInputElement }) => {
    let newData = '';
    newData = event.currentTarget.value;
    this.props.onOptionsChange({ ...this.props.options, gabaritUrlInput: newData });
  };

  /*
   * add url for default gabarit
   */
  onGabaritDefaultUrlChanged = (event: { currentTarget: HTMLInputElement }) => {
    let newData = '';

    newData = event.currentTarget.value;
    this.props.onOptionsChange({ ...this.props.options, saveGabaritDefaultUrl: newData });
  };

  onGabaritListUrlChanged = (event: { currentTarget: HTMLInputElement }) => {
    let newData: string[] = this.props.options.saveGabaritURL.slice();
    newData[parseInt(event.currentTarget.id, 10)] = event.currentTarget.value;
    this.props.options.saveGabaritURL = newData;
    this.props.onOptionsChange({ ...this.props.options, saveGabaritURL: this.props.options.saveGabaritURL });
  };

  addGabaritUrlInput = (onClick: { currentTarget: HTMLButtonElement }) => {
    let valid = true;
    this.props.options.saveGabaritURL.forEach((element) => {
      if (this.props.options.gabaritUrlInput === element) {
        valid = false;
      }
    });
    if (valid === true) {
      this.props.options.saveGabaritURL.push(this.props.options.gabaritUrlInput);
      this.props.options.gabaritUrlInput = '';
      this.props.onOptionsChange({ ...this.props.options, saveGabaritURL: this.props.options.saveGabaritURL });
    }
  };

  addGabaritDefaultUrlInput = async (onClick: { currentTarget: HTMLButtonElement }) => {
    try {
      const url = this.props.options.saveGabaritDefaultUrl;
      let file = {};
      let response = await fetch(this.props.options.saveGabaritDefaultUrl);

      file = await response.json();
      this.loadDefaultGabarit(file, url);
    } catch (error) {
      console.log('Default gabarit error:');
      console.error(error);
    }
  };

  gabaritDeletUrl = (onClick: { currentTarget: HTMLButtonElement }) => {
    const isUrl = (url: string) => url === this.props.options.saveGabaritURL[parseInt(onClick.currentTarget.id, 10)];
    this.props.options.saveGabaritURL.splice(this.props.options.saveGabaritURL.findIndex(isUrl), 1);
    this.props.onOptionsChange({ ...this.props.options, saveGabaritURL: this.props.options.saveGabaritURL });
  };

  gabaritDeletFile = (onClick: { currentTarget: HTMLButtonElement }) => {
    const isGabarit = (gabarit: GabaritFile) => gabarit === this.props.options.saveGabaritFile[parseInt(onClick.currentTarget.id, 10)];
    this.props.options.saveGabaritFile.splice(this.props.options.saveGabaritFile.findIndex(isGabarit), 1);
    this.props.onOptionsChange({ ...this.props.options, saveGabaritFile: this.props.options.saveGabaritFile });
  };

  gabaritDeletFileDefault = (onClick: { currentTarget: HTMLButtonElement }) => {
    this.props.options.gabaritDefault = {
      queryID: 'A',
      fileName: '',
      loaded: false,
      globalGabarit: {
        lowerLimit: [
          {
            id: 0,
            lowerLimitMin: '0',
            lowerLimitMax: '0',
            backColor: 'blue',
            borderColor: 'red',
            sizeBorder: '1px',
          },
        ],
        textObject: {
          value: 'default',
          isTextTooltip: false,
          colorBack: 'blue',
          colorText: 'black',
          style: {
            bold: false,
            italic: false,
            underline: false,
          },
          generateObjectText: false,
          valueGenerateObjectText: {
            legendElement: 'default',
            numericFormatElement: 'default',
            unit: 'default',
            displayObjectInTooltip: false,
            addColorTextElement: false,
            colorTextElement: 'black',
            addColorBackElement: false,
            colorBackElement: 'white',
          },
          generateAuxiliaryElement: {
            legendElement: 'default',
            numericFormatElement: 'default',
            unit: 'default',
            displayObjectInTooltip: false,
            addColorTextElement: false,
            colorTextElement: 'black',
            addColorBackElement: false,
            colorBackElement: 'white',
          },
        },
        defaultColor: 'black',
        colorMode: true,
        traceBack: true,
        traceBorder: true,
      },
      templateGabaritPoint: [],
      templateGabaritRegion: [],
      templateGabaritLink: [],
      templateGabaritPointDefault: [],
      templateGabaritRegionDefault: [],
      templateGabaritLinkDefault: [],
    };
    this.props.onOptionsChange({ ...this.props.options, gabaritDefault: this.props.options.gabaritDefault });
  };

  /**************************************LOADER******************************************/

  checkLoaderGabarit = (onClick: { currentTarget: HTMLButtonElement }) => {
    if (!this.props.options.saveGabaritFile[parseInt(onClick.currentTarget.id, 10)].loaded) {
      this.loaderGabarit(this.props.options.saveGabaritFile[parseInt(onClick.currentTarget.id, 10)], parseInt(onClick.currentTarget.id, 10));
    } else {
      console.log('loadGabaritReject');
    }
  };

  loaderGabarit = (gab: GabaritFile, idx: number | null) => {
    let tmpLabelAPosition: LabelCoord2D;
    let tmpLabelBPosition: LabelCoord2D;
    let tmpToolTipA: SelectableValue<string>;
    let tmpToolTipB: SelectableValue<string>;
    /* Point */
    //template
    let filterPoint: Filtred[][] = [];
    let posPoint: LabelCoord2D[] = [];
    let namePoint: string[] = [];
    // add metadata
    let metaPoint: Metadata[][] = [];
    let labelPoint: string[] = [];
    let positionParameterPoint: PositionParameterClass[] = [];
    let mainMetricPoint: Metric[] = [];
    let metricPoint: Metric[][] = [];
    let linkURLPoint: LinkURLClass[] = [];
    let valueMetricPoint: string[] = [];
    let drawGraphicMarkerPoint: Array<SelectableValue<string>> = [];
    let shapePoint: Array<SelectableValue<string>> = [];
    //let sizeWidthPoint: Array<SelectableValue<string>> = [];
    let sizeWidthPoint: string[] = [];
    let sizeHeightPoint: Array<SelectableValue<string>> = [];
    let colorPoint: string[] = [];
    let associateOrientedLinksInPoint: OrientedLinkClass[][] = [];
    let associateOrientedLinksOutPoint: OrientedLinkClass[][] = [];
    //global
    //let lowerLimit: LowerLimitClass;
    let colorMode: boolean;
    let traceBack: boolean;
    let traceBorder: boolean;
    let textObj: TextObject;
    let style: Style;
    let generateValue: GenerateTextObject;
    let generateAux: GenerateTextObject;

    const widthBackground = parseInt(this.props.options.baseMap.width, 10);
    const xMinInitialSpace = parseInt(this.props.options.coordinateSpaceInitial.coordinate.xMin, 10);
    const xMaxInitialSpace = parseInt(this.props.options.coordinateSpaceInitial.coordinate.xMax, 10);
    const widthInitialSpace = xMaxInitialSpace - xMinInitialSpace;

    const heightBackground = parseInt(this.props.options.baseMap.height, 10);
    const yMinInitialSpace = parseInt(this.props.options.coordinateSpaceInitial.coordinate.yMin, 10);
    const yMaxInitialSpace = parseInt(this.props.options.coordinateSpaceInitial.coordinate.yMax, 10);
    const heightInitialSpace = yMaxInitialSpace - yMinInitialSpace;

    /* Region */
    //Template

    const gabaritFileTmp: GabaritFile = gab;
    colorMode = Boolean(gabaritFileTmp.globalGabarit.colorMode);
    traceBack = Boolean(gabaritFileTmp.globalGabarit.traceBack);
    traceBorder = Boolean(gabaritFileTmp.globalGabarit.traceBorder);

    ////// Text Object
    generateValue = {
      legendElement: gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.legendElement,
      numericFormatElement: gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.numericFormatElement,
      unit: gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.unit,
      displayObjectInTooltip: Boolean(gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.displayObjectInTooltip),
      addColorTextElement: Boolean(gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.addColorTextElement),
      colorTextElement: gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.colorTextElement,
      addColorBackElement: Boolean(gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.addColorBackElement),
      colorBackElement: gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.colorBackElement,
    };

    if (!generateValue.unit) {
      generateValue = {
        legendElement: this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.legendElement,
        numericFormatElement: this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.numericFormatElement,
        unit: this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.unit,
        displayObjectInTooltip: Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.displayObjectInTooltip),
        addColorTextElement: Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.addColorTextElement),
        colorTextElement: this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.colorTextElement,
        addColorBackElement: Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.addColorBackElement),
        colorBackElement: this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.colorBackElement,
      };
    }

    generateAux = {
      legendElement: gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.legendElement,
      numericFormatElement: gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.numericFormatElement,
      unit: gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.unit,
      displayObjectInTooltip: Boolean(gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.displayObjectInTooltip),
      addColorTextElement: Boolean(gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.addColorTextElement),
      colorTextElement: gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.colorTextElement,
      addColorBackElement: Boolean(gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.addColorBackElement),
      colorBackElement: gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.colorBackElement,
    };

    if (!generateAux.unit) {
      generateAux = {
        legendElement: this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.legendElement,
        numericFormatElement: this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.numericFormatElement,
        unit: this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.unit,
        displayObjectInTooltip: Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.displayObjectInTooltip),
        addColorTextElement: Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.addColorTextElement),
        colorTextElement: this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.colorTextElement,
        addColorBackElement: Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.addColorBackElement),
        colorBackElement: this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.colorBackElement,
      };
    }

    style = {
      bold: Boolean(gabaritFileTmp.globalGabarit.textObject.style.bold),
      italic: Boolean(gabaritFileTmp.globalGabarit.textObject.style.italic),
      underline: Boolean(gabaritFileTmp.globalGabarit.textObject),
    };

    if (!style.bold) {
      style = {
        bold: Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.style.bold),
        italic: Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.style.italic),
        underline: Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.style.underline),
      };
    }

    textObj = new TextObject(
      gabaritFileTmp.globalGabarit.textObject.value,
      Boolean(gabaritFileTmp.globalGabarit.textObject.isTextTooltip),
      gabaritFileTmp.globalGabarit.textObject.colorBack,
      gabaritFileTmp.globalGabarit.textObject.colorText,
      style,
      Boolean(gabaritFileTmp.globalGabarit.textObject.generateObjectText),
      generateValue,
      generateAux
    );

    if (!textObj.value) {
      textObj = new TextObject(
        this.props.options.gabaritDefault.globalGabarit.textObject.value,
        Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.isTextTooltip),
        this.props.options.gabaritDefault.globalGabarit.textObject.colorBack,
        this.props.options.gabaritDefault.globalGabarit.textObject.colorText,
        style,
        Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.generateObjectText),
        generateValue,
        generateAux
      );
    }

    gabaritFileTmp.templateGabaritPoint.forEach((point, index) => {
      if (point.labelfix.toString() === 'false') {
        posPoint.push(coordParse(point.xylabel));
        if (!posPoint[index].y || !posPoint[index].x) {
          posPoint[index] = coordParse(gabaritFileTmp.templateGabaritPointDefault[0].xylabel);
        }
        if (!posPoint[index].y || !posPoint[index].x) {
          posPoint[index] = coordParse(this.props.options.gabaritDefault.templateGabaritPointDefault[0].xylabel);
        }
      } else {
        posPoint.push(coordParse(point.xylabelfix));
        if (!posPoint[index].y || !posPoint[index].x) {
          posPoint[index] = coordParse(gabaritFileTmp.templateGabaritPointDefault[0].xylabelfix);
        }
        if (!posPoint[index].y || !posPoint[index].x) {
          posPoint[index] = coordParse(this.props.options.gabaritDefault.templateGabaritPointDefault[0].xylabelfix);
        }
      }
      filterPoint.push(filterParse(point.filtered));
      if (!filterPoint[index][0]) {
        filterPoint[index] = filterParse(gabaritFileTmp.templateGabaritPointDefault[0].filtered);
      }
      if (!filterPoint[index][0]) {
        filterPoint[index] = filterParse(this.props.options.gabaritDefault.templateGabaritPointDefault[0].filtered);
      }
      namePoint.push(point.name);
      if (!namePoint[index]) {
        namePoint[index] = gabaritFileTmp.templateGabaritPointDefault[0].name;
      }
      if (!namePoint[index]) {
        namePoint[index] = this.props.options.gabaritDefault.templateGabaritPointDefault[0].name;
      }
      metaPoint.push(point.meta);
      if (!metaPoint[index]) {
        metaPoint[index] = gabaritFileTmp.templateGabaritPointDefault[0].meta;
      }
      if (!metaPoint[index]) {
        metaPoint[index] = this.props.options.gabaritDefault.templateGabaritPointDefault[0].meta;
      }
      labelPoint.push(point.label); // c'est le label du point qui est afficher pour la selection
      if (!labelPoint[index]) {
        labelPoint[index] = gabaritFileTmp.templateGabaritPointDefault[0].label;
      }
      if (!labelPoint[index]) {
        labelPoint[index] = this.props.options.gabaritDefault.templateGabaritPointDefault[0].label;
      }
      mainMetricPoint.push({
        key: point.mainMetric.key,
        unit: point.mainMetric.unit,
        format: point.mainMetric.format,
        keyValue: '',
        filter: filterPoint[index],
        refId: gabaritFileTmp.queryID,
        expr: '',
        returnQuery: [],
        manageValue: point.mainMetric.manageValue,
      });
      if (!mainMetricPoint[index].unit) {
        mainMetricPoint[index] = {
          key: gabaritFileTmp.templateGabaritPointDefault[0].mainMetric.key,
          unit: gabaritFileTmp.templateGabaritPointDefault[0].mainMetric.unit,
          format: gabaritFileTmp.templateGabaritPointDefault[0].mainMetric.format,
          keyValue: '',
          filter: filterPoint[index],
          refId: gabaritFileTmp.queryID,
          expr: '',
          returnQuery: [],
          manageValue: gabaritFileTmp.templateGabaritPointDefault[0].mainMetric.manageValue,
        };
      }
      if (!mainMetricPoint[index].unit) {
        mainMetricPoint[index] = {
          key: this.props.options.gabaritDefault.templateGabaritPointDefault[0].mainMetric.key,
          unit: this.props.options.gabaritDefault.templateGabaritPointDefault[0].mainMetric.unit,
          format: this.props.options.gabaritDefault.templateGabaritPointDefault[0].mainMetric.format,
          keyValue: '',
          filter: filterPoint[index],
          refId: gabaritFileTmp.queryID,
          expr: '',
          returnQuery: [],
          manageValue: this.props.options.gabaritDefault.templateGabaritPointDefault[0].mainMetric.manageValue,
        };
      }
      if (!mainMetricPoint[index].refId) {
        mainMetricPoint[index].refId = 'A';
      }
      point.metrics.forEach((element) => {
        metricPoint[index].push({
          key: element.key,
          unit: element.unit,
          format: element.format,
          keyValue: '',
          filter: filterPoint[index],
          refId: gabaritFileTmp.queryID,
          expr: '',
          returnQuery: [],
          manageValue: element.manageValue,
        });
      });
      valueMetricPoint.push(point.valueMetric);
      drawGraphicMarkerPoint.push({
        label: point.drawGraphicMarker.label,
        value: point.drawGraphicMarker.value,
      });
      if (!drawGraphicMarkerPoint[index].label || !drawGraphicMarkerPoint[index].label) {
        drawGraphicMarkerPoint[index] = {
          label: gabaritFileTmp.templateGabaritPointDefault[0].drawGraphicMarker.label,
          value: gabaritFileTmp.templateGabaritPointDefault[0].drawGraphicMarker.value,
        };
      }
      if (!drawGraphicMarkerPoint[index].label || !drawGraphicMarkerPoint[index].label) {
        drawGraphicMarkerPoint[index] = {
          label: this.props.options.gabaritDefault.templateGabaritPointDefault[0].drawGraphicMarker.label,
          value: this.props.options.gabaritDefault.templateGabaritPointDefault[0].drawGraphicMarker.value,
        };
      }
      shapePoint.push(point.shape);
      if (!shapePoint[index]) {
        shapePoint[index] = gabaritFileTmp.templateGabaritPointDefault[0].shape;
      }
      if (!shapePoint[index]) {
        shapePoint[index] = this.props.options.gabaritDefault.templateGabaritPointDefault[0].shape;
      }
      sizeWidthPoint.push(point.sizeWidth);
      if (!sizeWidthPoint[index]) {
        sizeWidthPoint[index] = gabaritFileTmp.templateGabaritPointDefault[0].sizeWidth;
      }
      if (!sizeWidthPoint[index]) {
        sizeWidthPoint[index] = this.props.options.gabaritDefault.templateGabaritPointDefault[0].sizeWidth;
      }
      sizeHeightPoint.push(point.sizeHeight);
      if (!sizeHeightPoint[index]) {
        sizeHeightPoint[index] = gabaritFileTmp.templateGabaritPointDefault[0].sizeHeight;
      }
      if (!sizeHeightPoint[index]) {
        sizeHeightPoint[index] = this.props.options.gabaritDefault.templateGabaritPointDefault[0].sizeHeight;
      }
      if (point.color.length !== 0) {
        colorPoint.push(point.color);
      } else {
        colorPoint.push(gabaritFileTmp.globalGabarit.defaultColor);
      }
      if (!colorPoint[index]) {
        colorPoint[index] = this.props.options.gabaritDefault.templateGabaritPointDefault[0].color;
      }
      associateOrientedLinksInPoint.push(point.associateOrientedLinksIn);
      if (!associateOrientedLinksInPoint[index]) {
        associateOrientedLinksInPoint[index] = gabaritFileTmp.templateGabaritPointDefault[0].associateOrientedLinksIn;
      }
      if (!associateOrientedLinksInPoint[index]) {
        associateOrientedLinksInPoint[index] = this.props.options.gabaritDefault.templateGabaritPointDefault[0].associateOrientedLinksIn;
      }
      associateOrientedLinksOutPoint.push(point.associateOrientedLinksOut);
      if (!associateOrientedLinksOutPoint[index]) {
        associateOrientedLinksOutPoint[index] = gabaritFileTmp.templateGabaritPointDefault[0].associateOrientedLinksOut;
      }
      if (!associateOrientedLinksOutPoint[index]) {
        associateOrientedLinksOutPoint[index] = this.props.options.gabaritDefault.templateGabaritPointDefault[0].associateOrientedLinksOut;
      }
      tmpToolTipA = { label: point.positionParameter.tooltipA, value: point.positionParameter.tooltipA };
      if (!tmpToolTipA.label || !tmpToolTipA.value) {
        tmpToolTipA = {
          label: gabaritFileTmp.templateGabaritPointDefault[0].positionParameter.tooltipA,
          value: gabaritFileTmp.templateGabaritPointDefault[0].positionParameter.tooltipA,
        };
      }
      if (!tmpToolTipA.label || !tmpToolTipA.value) {
        tmpToolTipA = {
          label: this.props.options.gabaritDefault.templateGabaritPointDefault[0].positionParameter.tooltipA,
          value: this.props.options.gabaritDefault.templateGabaritPointDefault[0].positionParameter.tooltipA,
        };
      }
      tmpToolTipB = { label: point.positionParameter.tooltipB, value: point.positionParameter.tooltipB };
      if (!tmpToolTipB.label || !tmpToolTipB.value) {
        tmpToolTipB = {
          label: gabaritFileTmp.templateGabaritPointDefault[0].positionParameter.tooltipB,
          value: gabaritFileTmp.templateGabaritPointDefault[0].positionParameter.tooltipB,
        };
      }
      if (!tmpToolTipB.label || !tmpToolTipB.value) {
        tmpToolTipB = {
          label: this.props.options.gabaritDefault.templateGabaritPointDefault[0].positionParameter.tooltipB,
          value: this.props.options.gabaritDefault.templateGabaritPointDefault[0].positionParameter.tooltipB,
        };
      }
      tmpLabelAPosition = coordParse(point.positionParameter.xylabelA);
      if (!tmpLabelAPosition.x || !tmpLabelAPosition.y) {
        tmpLabelAPosition = {
          x: gabaritFileTmp.templateGabaritPointDefault[0].positionParameter.xylabelA,
          y: gabaritFileTmp.templateGabaritPointDefault[0].positionParameter.xylabelA,
        };
      }
      if (!tmpLabelAPosition.x || !tmpLabelAPosition.y) {
        tmpLabelAPosition = {
          x: this.props.options.gabaritDefault.templateGabaritPointDefault[0].positionParameter.xylabelA,
          y: this.props.options.gabaritDefault.templateGabaritPointDefault[0].positionParameter.xylabelA,
        };
      }
      tmpLabelBPosition = coordParse(point.positionParameter.xylabelB);
      if (!tmpLabelBPosition.x || !tmpLabelBPosition.y) {
        tmpLabelBPosition = {
          x: gabaritFileTmp.templateGabaritPointDefault[0].positionParameter.xylabelB,
          y: gabaritFileTmp.templateGabaritPointDefault[0].positionParameter.xylabelB,
        };
      }
      if (!tmpLabelBPosition.x || !tmpLabelBPosition.y) {
        tmpLabelBPosition = {
          x: this.props.options.gabaritDefault.templateGabaritPointDefault[0].positionParameter.xylabelB,
          y: this.props.options.gabaritDefault.templateGabaritPointDefault[0].positionParameter.xylabelB,
        };
      }
      positionParameterPoint.push(
        new PositionParameterClass(tmpLabelAPosition.x, tmpLabelAPosition.y, tmpLabelBPosition.x, tmpLabelBPosition.y, tmpToolTipA, tmpToolTipB)
      );
      linkURLPoint.push(new LinkURLClass(point.linkURL.followLink, point.linkURL.hoveringTooltipLink, point.linkURL.hoveringTooltipText));
      if (!linkURLPoint[index].followLink) {
        linkURLPoint[index] = new LinkURLClass(
          gabaritFileTmp.templateGabaritPointDefault[0].linkURL.followLink,
          gabaritFileTmp.templateGabaritPointDefault[0].linkURL.hoveringTooltipLink,
          gabaritFileTmp.templateGabaritPointDefault[0].linkURL.hoveringTooltipText
        );
      }
      if (!linkURLPoint[index].followLink) {
        linkURLPoint[index] = new LinkURLClass(
          this.props.options.gabaritDefault.templateGabaritPointDefault[0].linkURL.followLink,
          this.props.options.gabaritDefault.templateGabaritPointDefault[0].linkURL.hoveringTooltipLink,
          this.props.options.gabaritDefault.templateGabaritPointDefault[0].linkURL.hoveringTooltipText
        );
      }
    });

    let newID = 0;
    this.props.options.arrayPoints.forEach((element) => {
      newID++;
    });

    let labelCoordX: string[] = [];
    let labelCoordY: string[] = [];
    let labelCoord: LabelCoord2D[][] = [];

    posPoint.forEach((pos, index) => {
      if (gabaritFileTmp.templateGabaritPoint[index].labelfix.toString() === 'false') {
        this.props.data.series.forEach((element) => {
          if (element.refId === mainMetricPoint[index]!.refId) {
            const nameQuery: string[] =
              element.name?.split(',').map((value) => {
                return value.replace(/[\"{}]/gm, '');
              }) || [];

            for (const oneQuery of nameQuery) {
              if (nameQuery && nameQuery.length > 0) {
                const keyValue: string[] = oneQuery.split('=');
                if (keyValue[0] === pos.x) {
                  labelCoordX.push(keyValue[1]);
                }
                if (keyValue[0] === pos.y) {
                  labelCoordY.push(keyValue[1]);
                }
              }
            }
          }
        });
        if (labelCoordX.length > labelCoordY.length) {
          labelCoordX.forEach((element, index) => {
            if (!labelCoordX[index]) {
              labelCoordX[index] = pos.x;
            }
            if (!labelCoordY[index]) {
              labelCoordY[index] = pos.y;
            }
          });
        } else {
          labelCoordY.forEach((element, index) => {
            if (!labelCoordX[index]) {
              labelCoordX[index] = pos.x;
            }
            if (!labelCoordY[index]) {
              labelCoordY[index] = pos.y;
            }
          });
        }
      }
      if (labelCoordX.length > 0) {
        labelCoord.push([]);
        labelCoordX.forEach((element, add) => {
          labelCoord[index].push({ x: labelCoordX[add], y: labelCoordY[add] });
        });
      } else {
        labelCoord[index] = [];
      }
    });

    //console.log(labelCoord)

    labelCoord.forEach((labelCo) => {
      if (labelCo.length > 0) {
        for (const pos of labelCo) {
          filterPoint.forEach((element, index) => {
            const defaultPositionX = (((parseInt(pos.x, 10) - xMinInitialSpace) / widthInitialSpace) * widthBackground).toString();
            const defaultPositionY = (((parseInt(pos.y, 10) - yMinInitialSpace) / heightInitialSpace) * heightBackground).toString();
            if (metricPoint.length > 0) {
              let toLoad: PointClass = new PointClass(
                newID + 1,
                linkURLPoint[index],
                metaPoint[index],
                gabaritFileTmp.globalGabarit.lowerLimit,
                labelPoint[index] + '_' + newID,
                textObj,
                this.addFilterDynamic(mainMetricPoint[index], posPoint[index], pos),
                metricPoint[index],
                colorMode,
                traceBack,
                traceBorder,
                positionParameterPoint[index],
                namePoint[index] + '_' + newID,
                valueMetricPoint[index],
                drawGraphicMarkerPoint[index],
                shapePoint[index],
                sizeWidthPoint[index],
                sizeHeightPoint[index],
                '',
                pos.x,
                pos.y,
                colorPoint[index],
                associateOrientedLinksInPoint[index],
                associateOrientedLinksOutPoint[index],
                widthInitialSpace.toString(),
                heightInitialSpace.toString(),
                defaultPositionX,
                defaultPositionY
              );
              newID++;
              this.checkCoordinateFilterPoint(toLoad, this.props);
            } else {
              let toLoad: PointClass = new PointClass(
                newID + 1,
                linkURLPoint[index],
                metaPoint[index],
                gabaritFileTmp.globalGabarit.lowerLimit,
                labelPoint[index] + '_' + newID,
                textObj,
                this.addFilterDynamic(mainMetricPoint[index], posPoint[index], pos),
                [],
                colorMode,
                traceBack,
                traceBorder,
                positionParameterPoint[index],
                namePoint[index] + '_' + newID,
                valueMetricPoint[index],
                drawGraphicMarkerPoint[index],
                shapePoint[index],
                sizeWidthPoint[index],
                sizeHeightPoint[index],
                '',
                pos.x,
                pos.y,
                colorPoint[index],
                associateOrientedLinksInPoint[index],
                associateOrientedLinksOutPoint[index],
                widthInitialSpace.toString(),
                heightInitialSpace.toString(),
                defaultPositionX,
                defaultPositionY
              );
              newID++;
              this.checkCoordinateFilterPoint(toLoad, this.props);
            }
          });
        }
      } else {
        filterPoint.forEach((element, index) => {
          const defaultPositionX = (((parseInt(posPoint[index].x, 10) - xMinInitialSpace) / widthInitialSpace) * widthBackground).toString();
          const defaultPositionY = (((parseInt(posPoint[index].y, 10) - yMinInitialSpace) / heightInitialSpace) * heightBackground).toString();
          if (metricPoint.length > 0) {
            let toLoad: PointClass = new PointClass(
              newID + 1,
              linkURLPoint[index],
              // changement
              // metaPoint[index],
              [],
              gabaritFileTmp.globalGabarit.lowerLimit,
              labelPoint[index] + '_' + newID,
              textObj,
              mainMetricPoint[index],
              metricPoint[index],
              colorMode,
              traceBack,
              traceBorder,
              positionParameterPoint[index],
              namePoint[index] + '_' + newID,
              valueMetricPoint[index],
              drawGraphicMarkerPoint[index],
              shapePoint[index],
              sizeWidthPoint[index],
              sizeHeightPoint[index],
              '',
              posPoint[index].x,
              posPoint[index].y,
              colorPoint[index],
              associateOrientedLinksInPoint[index],
              associateOrientedLinksOutPoint[index],
              widthInitialSpace.toString(),
              heightInitialSpace.toString(),
              defaultPositionX,
              defaultPositionY
            );
            newID++;
            this.checkCoordinateFilterPoint(toLoad, this.props);
          } else {
            let toLoad: PointClass = new PointClass(
              newID + 1,
              linkURLPoint[index],
              // changement
              [],
              gabaritFileTmp.globalGabarit.lowerLimit,
              labelPoint[index] + '_' + newID,
              textObj,
              mainMetricPoint[index],
              [],
              colorMode,
              traceBack,
              traceBorder,
              positionParameterPoint[index],
              namePoint[index] + '_' + newID,
              valueMetricPoint[index],
              drawGraphicMarkerPoint[index],
              shapePoint[index],
              sizeWidthPoint[index],
              sizeHeightPoint[index],
              '',
              posPoint[index].x,
              posPoint[index].y,
              colorPoint[index],
              associateOrientedLinksInPoint[index],
              associateOrientedLinksOutPoint[index],
              widthInitialSpace.toString(),
              heightInitialSpace.toString(),
              defaultPositionX,
              defaultPositionY
            );
            newID++;
            this.checkCoordinateFilterPoint(toLoad, this.props);
          }
        });
      }
    });

    /* Link */
    //Template
    let filterLink: Filtred[][] = []; //
    let posALink: LabelCoord2D[] = []; //
    let posBLink: LabelCoord2D[] = []; //
    let posCLink: LabelCoord2D[] = []; //
    let nameLink: string[] = []; //
    let metaLink: string[] = []; //
    let labelLink: string[] = []; //
    let positionParameterLink: PositionParameterClass[] = []; //
    let mainMetricALink: Metric[] = []; //
    let metricALink: Metric[][] = []; //
    let mainMetricBLink: Metric[] = []; //
    let metricBLink: Metric[][] = []; //
    let linkURLLink: LinkURLClass[] = []; //
    let orientationLink: Array<SelectableValue<string>> = []; //
    let sizeLink: string[] = []; //
    let colorALink: string[] = []; //
    let colorBLink: string[] = []; //
    let valueMetricALink: string[] = []; //
    let valueMetricBLink: string[] = []; //
    let pointInLink: string[] = []; //
    let pointOutLink: string[] = []; //
    let regionInLink: string[] = []; //
    let regionOutLink: string[] = []; //
    let isIncurvedLink: Array<SelectableValue<boolean>> = []; //

    gabaritFileTmp.templateGabaritLink.forEach((link, index) => {
      if (link.labelfix.toString() === 'false') {
        posALink.push(coordParse(link.xylabelA));
        if (!posALink[index].x || !posALink[index].y) {
          posALink[index] = coordParse(gabaritFileTmp.templateGabaritLinkDefault[0].xylabelA);
        }
        if (!posALink[index].x || !posALink[index].y) {
          posALink[index] = coordParse(this.props.options.gabaritDefault.templateGabaritLinkDefault[0].xylabelA);
        }
        posBLink.push(coordParse(link.xylabelB));
        if (!posBLink[index].x || !posBLink[index].y) {
          posBLink[index] = coordParse(gabaritFileTmp.templateGabaritLinkDefault[0].xylabelB);
        }
        if (!posBLink[index].x || !posBLink[index].y) {
          posBLink[index] = coordParse(this.props.options.gabaritDefault.templateGabaritLinkDefault[0].xylabelB);
        }
        posCLink.push(coordParse(link.xylabelC));
        if (!posCLink[index].x || !posCLink[index].y) {
          posCLink[index] = coordParse(gabaritFileTmp.templateGabaritLinkDefault[0].xylabelC);
        }
        if (!posCLink[index].x || !posCLink[index].y) {
          posCLink[index] = coordParse(this.props.options.gabaritDefault.templateGabaritLinkDefault[0].xylabelC);
        }
      } else {
        posALink.push(coordParse(link.xylabelfixA));
        if (!posALink[index].x || !posALink[index].y) {
          posALink[index] = coordParse(gabaritFileTmp.templateGabaritLinkDefault[0].xylabelfixA);
        }
        if (!posALink[index].x || !posALink[index].y) {
          posALink[index] = coordParse(this.props.options.gabaritDefault.templateGabaritLinkDefault[0].xylabelfixA);
        }
        posBLink.push(coordParse(link.xylabelfixB));
        if (!posBLink[index].x || !posBLink[index].y) {
          posBLink[index] = coordParse(gabaritFileTmp.templateGabaritLinkDefault[0].xylabelfixB);
        }
        if (!posBLink[index].x || !posBLink[index].y) {
          posBLink[index] = coordParse(this.props.options.gabaritDefault.templateGabaritLinkDefault[0].xylabelfixB);
        }
        posCLink.push(coordParse(link.xylabelfixC));
        if (!posCLink[index].x || !posCLink[index].y) {
          posCLink[index] = coordParse(gabaritFileTmp.templateGabaritLinkDefault[0].xylabelfixC);
        }
        if (!posCLink[index].x || !posCLink[index].y) {
          posCLink[index] = coordParse(this.props.options.gabaritDefault.templateGabaritLinkDefault[0].xylabelfixC);
        }
      }
      filterLink.push(filterParse(link.filtered));
      if (!filterLink[index]) {
        filterLink[index] = filterParse(gabaritFileTmp.templateGabaritLinkDefault[0].filtered);
      }
      if (!filterLink[index]) {
        filterLink[index] = filterParse(this.props.options.gabaritDefault.templateGabaritLinkDefault[0].filtered);
      }
      nameLink.push(link.name);
      if (!nameLink[index]) {
        nameLink[index] = gabaritFileTmp.templateGabaritLinkDefault[0].name;
      }
      if (!nameLink[index]) {
        nameLink[index] = this.props.options.gabaritDefault.templateGabaritLinkDefault[0].name;
      }
      // changement
      metaLink.push(link.meta.toString());
      if (!metaLink[index]) {
        // changement
        [] = gabaritFileTmp.templateGabaritLinkDefault[0].meta;
      }
      if (!metaLink[index]) {
        // changement
        [] = this.props.options.gabaritDefault.templateGabaritLinkDefault[0].meta;
      }
      labelLink.push(link.label);
      if (!labelLink[index]) {
        labelLink[index] = gabaritFileTmp.templateGabaritLinkDefault[0].label;
      }
      if (!labelLink[index]) {
        labelLink[index] = this.props.options.gabaritDefault.templateGabaritLinkDefault[0].label;
      }
      mainMetricALink.push({
        key: link.mainMetric.key,
        unit: link.mainMetric.unit,
        format: link.mainMetric.format,
        keyValue: '',
        filter: filterLink[index],
        refId: gabaritFileTmp.queryID,
        expr: '',
        returnQuery: [],
        manageValue: link.mainMetric.manageValue,
      });
      if (!mainMetricALink[index].unit) {
        mainMetricALink[index] = {
          key: gabaritFileTmp.templateGabaritLinkDefault[0].mainMetric.key,
          unit: gabaritFileTmp.templateGabaritLinkDefault[0].mainMetric.unit,
          format: gabaritFileTmp.templateGabaritLinkDefault[0].mainMetric.format,
          keyValue: '',
          filter: filterLink[index],
          refId: gabaritFileTmp.queryID,
          expr: '',
          returnQuery: [],
          manageValue: gabaritFileTmp.templateGabaritLinkDefault[0].mainMetric.manageValue,
        };
      }
      if (!mainMetricALink[index].unit) {
        mainMetricALink[index] = {
          key: this.props.options.gabaritDefault.templateGabaritLinkDefault[0].mainMetric.key,
          unit: this.props.options.gabaritDefault.templateGabaritLinkDefault[0].mainMetric.unit,
          format: this.props.options.gabaritDefault.templateGabaritLinkDefault[0].mainMetric.format,
          keyValue: '',
          filter: filterLink[index],
          refId: gabaritFileTmp.queryID,
          expr: '',
          returnQuery: [],
          manageValue: this.props.options.gabaritDefault.templateGabaritLinkDefault[0].mainMetric.manageValue,
        };
      }
      if (!mainMetricALink[index].refId) {
        mainMetricALink[index].refId = 'A';
      }
      link.metrics.forEach((element) => {
        metricALink[index].push({
          key: element.key,
          unit: element.unit,
          format: element.format,
          keyValue: '',
          filter: filterLink[index],
          refId: gabaritFileTmp.queryID,
          expr: '',
          returnQuery: [],
          manageValue: element.manageValue,
        });
      });
      mainMetricBLink.push({
        key: link.mainMetricB.key,
        unit: link.mainMetricB.unit,
        format: link.mainMetricB.format,
        keyValue: '',
        filter: filterLink[index],
        refId: gabaritFileTmp.queryID,
        expr: '',
        returnQuery: [],
        manageValue: link.mainMetricB.manageValue,
      });
      if (!mainMetricBLink[index].unit) {
        mainMetricBLink[index] = {
          key: gabaritFileTmp.templateGabaritLinkDefault[0].mainMetric.key,
          unit: gabaritFileTmp.templateGabaritLinkDefault[0].mainMetric.unit,
          format: gabaritFileTmp.templateGabaritLinkDefault[0].mainMetric.format,
          keyValue: '',
          filter: filterLink[index],
          refId: gabaritFileTmp.queryID,
          expr: '',
          returnQuery: [],
          manageValue: gabaritFileTmp.templateGabaritLinkDefault[0].mainMetric.manageValue,
        };
      }
      if (!mainMetricBLink[index].unit) {
        mainMetricBLink[index] = {
          key: this.props.options.gabaritDefault.templateGabaritLinkDefault[0].mainMetric.key,
          unit: this.props.options.gabaritDefault.templateGabaritLinkDefault[0].mainMetric.unit,
          format: this.props.options.gabaritDefault.templateGabaritLinkDefault[0].mainMetric.format,
          keyValue: '',
          filter: filterLink[index],
          refId: gabaritFileTmp.queryID,
          expr: '',
          returnQuery: [],
          manageValue: this.props.options.gabaritDefault.templateGabaritLinkDefault[0].mainMetric.manageValue,
        };
      }
      if (!mainMetricALink[index].refId) {
        mainMetricBLink[index].refId = 'A';
      }
      link.metricsB.forEach((element) => {
        metricBLink[index].push({
          key: element.key,
          unit: element.unit,
          format: element.format,
          keyValue: '',
          filter: filterLink[index],
          refId: gabaritFileTmp.queryID,
          expr: '',
          returnQuery: [],
          manageValue: element.manageValue,
        });
      });
      valueMetricALink.push(link.valueMainMetricA);
      if (!valueMetricALink[index]) {
        valueMetricALink[index] = gabaritFileTmp.templateGabaritLinkDefault[0].valueMainMetricA;
      }
      if (!valueMetricALink[index]) {
        valueMetricALink[index] = this.props.options.gabaritDefault.templateGabaritLinkDefault[0].valueMainMetricA;
      }
      valueMetricBLink.push(link.valueMainMetricB);
      if (!valueMetricBLink[index]) {
        valueMetricBLink[index] = gabaritFileTmp.templateGabaritLinkDefault[0].valueMainMetricB;
      }
      if (!valueMetricBLink[index]) {
        valueMetricBLink[index] = this.props.options.gabaritDefault.templateGabaritLinkDefault[0].valueMainMetricB;
      }
      sizeLink.push(link.size);
      if (!sizeLink[index]) {
        sizeLink[index] = gabaritFileTmp.templateGabaritLinkDefault[0].size;
      }
      if (!sizeLink[index]) {
        sizeLink[index] = this.props.options.gabaritDefault.templateGabaritLinkDefault[0].size;
      }
      if (link.colorCoordinateA.length !== 0) {
        colorALink.push(link.colorCoordinateA);
        colorBLink.push(link.colorCoordinateB);
      } else {
        colorALink.push(gabaritFileTmp.globalGabarit.defaultColor);
        colorBLink.push(gabaritFileTmp.globalGabarit.defaultColor);
      }
      if (!colorALink[index]) {
        colorALink[index] = this.props.options.gabaritDefault.templateGabaritLinkDefault[0].colorCoordinateA;
      }
      if (!colorBLink[index]) {
        colorBLink[index] = this.props.options.gabaritDefault.templateGabaritLinkDefault[0].colorCoordinateB;
      }
      tmpToolTipA = { label: link.positionParameter.tooltipA, value: link.positionParameter.tooltipA };
      if (!tmpToolTipA.value || !tmpToolTipA.label) {
        tmpToolTipA = {
          label: gabaritFileTmp.templateGabaritLinkDefault[0].positionParameter.tooltipA,
          value: gabaritFileTmp.templateGabaritLinkDefault[0].positionParameter.tooltipA,
        };
      }
      if (!tmpToolTipA.value || !tmpToolTipA.label) {
        tmpToolTipA = {
          label: this.props.options.gabaritDefault.templateGabaritLinkDefault[0].positionParameter.tooltipA,
          value: this.props.options.gabaritDefault.templateGabaritLinkDefault[0].positionParameter.tooltipA,
        };
      }
      tmpToolTipB = { label: link.positionParameter.tooltipB, value: link.positionParameter.tooltipB };
      if (!tmpToolTipB.value || !tmpToolTipB.label) {
        tmpToolTipB = {
          label: gabaritFileTmp.templateGabaritLinkDefault[0].positionParameter.tooltipB,
          value: gabaritFileTmp.templateGabaritLinkDefault[0].positionParameter.tooltipB,
        };
      }
      if (!tmpToolTipB.value || !tmpToolTipB.label) {
        tmpToolTipB = {
          label: this.props.options.gabaritDefault.templateGabaritLinkDefault[0].positionParameter.tooltipB,
          value: this.props.options.gabaritDefault.templateGabaritLinkDefault[0].positionParameter.tooltipB,
        };
      }
      tmpLabelAPosition = coordParse(link.positionParameter.xylabelA);
      if (!tmpLabelAPosition) {
        tmpLabelAPosition = coordParse(gabaritFileTmp.templateGabaritLinkDefault[0].positionParameter.xylabelA);
      }
      if (!tmpLabelAPosition) {
        tmpLabelAPosition = coordParse(this.props.options.gabaritDefault.templateGabaritLinkDefault[0].positionParameter.xylabelA);
      }
      tmpLabelBPosition = coordParse(link.positionParameter.xylabelB);
      if (!tmpLabelBPosition) {
        tmpLabelBPosition = coordParse(gabaritFileTmp.templateGabaritLinkDefault[0].positionParameter.xylabelB);
      }
      if (!tmpLabelBPosition) {
        tmpLabelBPosition = coordParse(this.props.options.gabaritDefault.templateGabaritLinkDefault[0].positionParameter.xylabelB);
      }
      positionParameterLink.push(
        new PositionParameterClass(tmpLabelAPosition.x, tmpLabelAPosition.y, tmpLabelBPosition.x, tmpLabelBPosition.y, tmpToolTipA, tmpToolTipB)
      );
      linkURLLink.push(new LinkURLClass(link.linkURL.followLink, link.linkURL.hoveringTooltipLink, link.linkURL.hoveringTooltipText));
      if (!linkURLLink[index].followLink) {
        linkURLLink[index] = new LinkURLClass(
          gabaritFileTmp.templateGabaritLinkDefault[0].linkURL.followLink,
          gabaritFileTmp.templateGabaritLinkDefault[0].linkURL.hoveringTooltipLink,
          gabaritFileTmp.templateGabaritLinkDefault[0].linkURL.hoveringTooltipText
        );
      }
      if (!linkURLLink[index].followLink) {
        linkURLLink[index] = new LinkURLClass(
          this.props.options.gabaritDefault.templateGabaritLinkDefault[0].linkURL.followLink,
          this.props.options.gabaritDefault.templateGabaritLinkDefault[0].linkURL.hoveringTooltipLink,
          this.props.options.gabaritDefault.templateGabaritLinkDefault[0].linkURL.hoveringTooltipText
        );
      }
      orientationLink.push(link.orientationLink);
      if (!orientationLink[index]) {
        orientationLink[index] = gabaritFileTmp.templateGabaritLinkDefault[0].orientationLink;
      }
      if (!orientationLink[index]) {
        orientationLink[index] = this.props.options.gabaritDefault.templateGabaritLinkDefault[0].orientationLink;
      }
      pointInLink.push(link.pointIn);
      if (!pointInLink[index]) {
        pointInLink[index] = gabaritFileTmp.templateGabaritLinkDefault[0].pointIn;
      }
      if (!pointInLink[index]) {
        pointInLink[index] = this.props.options.gabaritDefault.templateGabaritLinkDefault[0].pointIn;
      }
      pointOutLink.push(link.pointOut);
      if (!pointOutLink[index]) {
        pointOutLink[index] = gabaritFileTmp.templateGabaritLinkDefault[0].pointOut;
      }
      if (!pointOutLink[index]) {
        pointOutLink[index] = this.props.options.gabaritDefault.templateGabaritLinkDefault[0].pointOut;
      }
      regionInLink.push(link.regionIn);
      if (!regionInLink[index]) {
        regionInLink[index] = gabaritFileTmp.templateGabaritLinkDefault[0].regionIn;
      }
      if (!regionInLink[index]) {
        regionInLink[index] = this.props.options.gabaritDefault.templateGabaritLinkDefault[0].regionIn;
      }
      regionOutLink.push(link.regionOut);
      if (!regionOutLink[index]) {
        regionOutLink[index] = gabaritFileTmp.templateGabaritLinkDefault[0].regionOut;
      }
      if (!regionOutLink[index]) {
        regionOutLink[index] = this.props.options.gabaritDefault.templateGabaritLinkDefault[0].regionOut;
      }
      isIncurvedLink.push({ label: link.isIncurved.label, value: Boolean(link.isIncurved.value) });
      if (!isIncurvedLink[index].label || !isIncurvedLink[index].value) {
        isIncurvedLink[index] = {
          label: gabaritFileTmp.templateGabaritLinkDefault[0].isIncurved.label,
          value: Boolean(gabaritFileTmp.templateGabaritLinkDefault[0].isIncurved.value),
        };
      }
      if (!isIncurvedLink[index].label || !isIncurvedLink[index].value) {
        isIncurvedLink[index] = {
          label: this.props.options.gabaritDefault.templateGabaritLinkDefault[0].isIncurved.label,
          value: Boolean(this.props.options.gabaritDefault.templateGabaritLinkDefault[0].isIncurved.value),
        };
      }
    });

    newID = 0;
    this.props.options.arrayOrientedLinks.forEach((element) => {
      newID++;
    });

    labelCoordX = [];
    labelCoordY = [];
    let labelCoordA: LabelCoord2D[][] = [];

    posALink.forEach((pos, index) => {
      if (gabaritFileTmp.templateGabaritLink[index].labelfix.toString() === 'false') {
        this.props.data.series.forEach((element) => {
          if (element.refId === mainMetricALink[index]!.refId) {
            const nameQuery: string[] =
              element.name?.split(',').map((value) => {
                return value.replace(/[\"{}]/gm, '');
              }) || [];

            for (const oneQuery of nameQuery) {
              if (nameQuery && nameQuery.length > 0) {
                const keyValue: string[] = oneQuery.split('=');
                if (keyValue[0] === pos.x) {
                  labelCoordX.push(keyValue[1]);
                }
                if (keyValue[0] === pos.y) {
                  labelCoordY.push(keyValue[1]);
                }
              }
            }
          }
        });
        if (labelCoordX.length > labelCoordY.length) {
          labelCoordX.forEach((element, index) => {
            if (!labelCoordX[index]) {
              labelCoordX[index] = pos.x;
            }
            if (!labelCoordY[index]) {
              labelCoordY[index] = pos.y;
            }
          });
        } else {
          labelCoordY.forEach((element, index) => {
            if (!labelCoordX[index]) {
              labelCoordX[index] = pos.x;
            }
            if (!labelCoordY[index]) {
              labelCoordY[index] = pos.y;
            }
          });
        }
      }
      if (labelCoordX.length > 0) {
        labelCoordX.forEach((element, index) => {
          labelCoordA[index].push({ x: labelCoordX[index], y: labelCoordY[index] });
        });
      } else {
        labelCoordA[index] = [];
      }
    });

    labelCoordX = [];
    labelCoordY = [];
    let labelCoordB: LabelCoord2D[][] = [];

    posALink.forEach((pos, index) => {
      if (gabaritFileTmp.templateGabaritLink[index].labelfix.toString() === 'false') {
        this.props.data.series.forEach((element) => {
          if (element.refId === mainMetricBLink[index]!.refId) {
            const nameQuery: string[] =
              element.name?.split(',').map((value) => {
                return value.replace(/[\"{}]/gm, '');
              }) || [];

            for (const oneQuery of nameQuery) {
              if (nameQuery && nameQuery.length > 0) {
                const keyValue: string[] = oneQuery.split('=');
                if (keyValue[0] === pos.x) {
                  labelCoordX.push(keyValue[1]);
                }
                if (keyValue[0] === pos.y) {
                  labelCoordY.push(keyValue[1]);
                }
              }
            }
          }
        });
        if (labelCoordX.length > labelCoordY.length) {
          labelCoordX.forEach((element, index) => {
            if (!labelCoordX[index]) {
              labelCoordX[index] = pos.x;
            }
            if (!labelCoordY[index]) {
              labelCoordY[index] = pos.y;
            }
          });
        } else {
          labelCoordY.forEach((element, index) => {
            if (!labelCoordX[index]) {
              labelCoordX[index] = pos.x;
            }
            if (!labelCoordY[index]) {
              labelCoordY[index] = pos.y;
            }
          });
        }
      }
      if (labelCoordX.length > 0) {
        labelCoordX.forEach((element, index) => {
          labelCoordB[index].push({ x: labelCoordX[index], y: labelCoordY[index] });
        });
      } else {
        labelCoordB[index] = [];
      }
    });

    labelCoordX = [];
    labelCoordY = [];
    let labelCoordC: LabelCoord2D[][] = [];

    posALink.forEach((pos, index) => {
      if (gabaritFileTmp.templateGabaritLink[index].labelfix.toString() === 'false') {
        this.props.data.series.forEach((element) => {
          const nameQuery: string[] =
            element.name?.split(',').map((value) => {
              return value.replace(/[\"{}]/gm, '');
            }) || [];

          for (const oneQuery of nameQuery) {
            if (nameQuery && nameQuery.length > 0) {
              const keyValue: string[] = oneQuery.split('=');
              if (keyValue[0] === pos.x) {
                labelCoordX.push(keyValue[1]);
              }
              if (keyValue[0] === pos.y) {
                labelCoordY.push(keyValue[1]);
              }
            }
          }
        });
        if (labelCoordX.length > labelCoordY.length) {
          labelCoordX.forEach((element, index) => {
            if (!labelCoordX[index]) {
              labelCoordX[index] = pos.x;
            }
            if (!labelCoordY[index]) {
              labelCoordY[index] = pos.y;
            }
          });
        } else {
          labelCoordY.forEach((element, index) => {
            if (!labelCoordX[index]) {
              labelCoordX[index] = pos.x;
            }
            if (!labelCoordY[index]) {
              labelCoordY[index] = pos.y;
            }
          });
        }
      }
      if (labelCoordX.length > 0) {
        labelCoordX.forEach((element, index) => {
          labelCoordC[index].push({ x: labelCoordX[index], y: labelCoordY[index] });
        });
      } else {
        labelCoordC[index] = [];
      }
    });

    labelCoordA.forEach((element, coordindex) => {
      if (element.length > 0) {
        for (const pos of element) {
          filterLink.forEach((element, index) => {
            const defaultPositionAX = (((parseInt(pos.x, 10) - xMinInitialSpace) / widthInitialSpace) * widthBackground).toString();
            const defaultPositionBX = (
              ((parseInt(labelCoordB[coordindex][index].x, 10) - xMinInitialSpace) / widthInitialSpace) *
              widthBackground
            ).toString();
            const defaultPositionCX = (
              ((parseInt(labelCoordC[coordindex][index].x, 10) - xMinInitialSpace) / widthInitialSpace) *
              widthBackground
            ).toString();
            const defaultPositionAY = (((parseInt(pos.y, 10) - yMinInitialSpace) / heightInitialSpace) * heightBackground).toString();
            const defaultPositionBY = (
              ((parseInt(labelCoordB[coordindex][index].y, 10) - yMinInitialSpace) / heightInitialSpace) *
              heightBackground
            ).toString();
            const defaultPositionCY = (
              ((parseInt(labelCoordC[coordindex][index].y, 10) - yMinInitialSpace) / heightInitialSpace) *
              heightBackground
            ).toString();
            let maA = metricALink.length;
            let maB = metricBLink.length;
            if (maA > 0 && maB > 0) {
              let toLoad: OrientedLinkClass = new OrientedLinkClass(
                newID + 1,
                linkURLLink[index],
                [],
                gabaritFileTmp.globalGabarit.lowerLimit,
                labelLink[index] + '_' + newID,
                textObj,
                this.addFilterDynamic(mainMetricALink[index], posALink[index], pos),
                metricALink[index],
                colorMode,
                traceBack,
                traceBorder,
                positionParameterLink[index],
                nameLink[index],
                orientationLink[index],
                sizeLink[index],
                pos.x,
                pos.y,
                colorALink[index],
                labelCoordB[coordindex][index].x,
                labelCoordB[coordindex][index].y,
                colorBLink[index],
                valueMetricALink[index],
                valueMetricBLink[index],
                pointInLink[index],
                pointOutLink[index],
                regionInLink[index],
                regionOutLink[index],
                this.props.options.zIndexOrientedLink + 1,
                labelCoordC[coordindex][index].x,
                labelCoordC[coordindex][index].y,
                isIncurvedLink[index],
                this.addFilterDynamic(mainMetricBLink[index], posALink[index], pos),
                metricBLink[index],
                widthInitialSpace.toString(),
                heightInitialSpace.toString(),
                defaultPositionAX,
                defaultPositionAY,
                defaultPositionBX,
                defaultPositionBY,
                defaultPositionCX,
                defaultPositionCY
              );
              newID++;
              this.checkCoordinateFilterLink(toLoad, this.props);
            }
            if (!(maA > 0) && maB > 0) {
              let toLoad: OrientedLinkClass = new OrientedLinkClass(
                newID + 1,
                linkURLLink[index],
                [],
                gabaritFileTmp.globalGabarit.lowerLimit,
                labelLink[index] + '_' + newID,
                textObj,
                this.addFilterDynamic(mainMetricALink[index], posALink[index], pos),
                [],
                colorMode,
                traceBack,
                traceBorder,
                positionParameterLink[index],
                nameLink[index],
                orientationLink[index],
                sizeLink[index],
                pos.x,
                pos.y,
                colorALink[index],
                labelCoordB[coordindex][index].x,
                labelCoordB[coordindex][index].y,
                colorBLink[index],
                valueMetricALink[index],
                valueMetricBLink[index],
                pointInLink[index],
                pointOutLink[index],
                regionInLink[index],
                regionOutLink[index],
                this.props.options.zIndexOrientedLink + 1,
                labelCoordC[coordindex][index].x,
                labelCoordC[coordindex][index].y,
                isIncurvedLink[index],
                this.addFilterDynamic(mainMetricBLink[index], posALink[index], pos),
                metricBLink[index],
                widthInitialSpace.toString(),
                heightInitialSpace.toString(),
                defaultPositionAX,
                defaultPositionAY,
                defaultPositionBX,
                defaultPositionBY,
                defaultPositionCX,
                defaultPositionCY
              );
              newID++;
              this.checkCoordinateFilterLink(toLoad, this.props);
            } else if (maA > 0 && !(maB > 0)) {
              let toLoad: OrientedLinkClass = new OrientedLinkClass(
                newID + 1,
                linkURLLink[index],
                [],
                gabaritFileTmp.globalGabarit.lowerLimit,
                labelLink[index] + '_' + newID,
                textObj,
                this.addFilterDynamic(mainMetricALink[index], posALink[index], pos),
                metricALink[index],
                colorMode,
                traceBack,
                traceBorder,
                positionParameterLink[index],
                nameLink[index],
                orientationLink[index],
                sizeLink[index],
                pos.x,
                pos.y,
                colorALink[index],
                labelCoordB[coordindex][index].x,
                labelCoordB[coordindex][index].y,
                colorBLink[index],
                valueMetricALink[index],
                valueMetricBLink[index],
                pointInLink[index],
                pointOutLink[index],
                regionInLink[index],
                regionOutLink[index],
                this.props.options.zIndexOrientedLink + 1,
                labelCoordC[coordindex][index].x,
                labelCoordC[coordindex][index].y,
                isIncurvedLink[index],
                this.addFilterDynamic(mainMetricBLink[index], posALink[index], pos),
                [],
                widthInitialSpace.toString(),
                heightInitialSpace.toString(),
                defaultPositionAX,
                defaultPositionAY,
                defaultPositionBX,
                defaultPositionBY,
                defaultPositionCX,
                defaultPositionCY
              );
              newID++;
              this.checkCoordinateFilterLink(toLoad, this.props);
            } else {
              let toLoad: OrientedLinkClass = new OrientedLinkClass(
                newID + 1,
                linkURLLink[index],
                [],
                gabaritFileTmp.globalGabarit.lowerLimit,
                labelLink[index] + '_' + newID,
                textObj,
                this.addFilterDynamic(mainMetricALink[index], posALink[index], pos),
                [],
                colorMode,
                traceBack,
                traceBorder,
                positionParameterLink[index],
                nameLink[index],
                orientationLink[index],
                sizeLink[index],
                pos.x,
                pos.y,
                colorALink[index],
                labelCoordB[coordindex][index].x,
                labelCoordB[coordindex][index].y,
                colorBLink[index],
                valueMetricALink[index],
                valueMetricBLink[index],
                pointInLink[index],
                pointOutLink[index],
                regionInLink[index],
                regionOutLink[index],
                this.props.options.zIndexOrientedLink + 1,
                labelCoordC[coordindex][index].x,
                labelCoordC[coordindex][index].y,
                isIncurvedLink[index],
                this.addFilterDynamic(mainMetricBLink[index], posALink[index], pos),
                [],
                widthInitialSpace.toString(),
                heightInitialSpace.toString(),
                defaultPositionAX,
                defaultPositionAY,
                defaultPositionBX,
                defaultPositionBY,
                defaultPositionCX,
                defaultPositionCY
              );
              newID++;
              this.checkCoordinateFilterLink(toLoad, this.props);
            }
          });
        } /////////////////
      } else {
        filterLink.forEach((element, index) => {
          const defaultPositionAX = (((parseInt(posALink[index].x, 10) - xMinInitialSpace) / widthInitialSpace) * widthBackground).toString();
          const defaultPositionBX = (((parseInt(posBLink[index].x, 10) - xMinInitialSpace) / widthInitialSpace) * widthBackground).toString();
          const defaultPositionCX = (((parseInt(posCLink[index].x, 10) - xMinInitialSpace) / widthInitialSpace) * widthBackground).toString();
          const defaultPositionAY = (((parseInt(posALink[index].y, 10) - yMinInitialSpace) / heightInitialSpace) * heightBackground).toString();
          const defaultPositionBY = (((parseInt(posBLink[index].y, 10) - yMinInitialSpace) / heightInitialSpace) * heightBackground).toString();
          const defaultPositionCY = (((parseInt(posCLink[index].y, 10) - yMinInitialSpace) / heightInitialSpace) * heightBackground).toString();
          let maA = metricALink.length;
          let maB = metricBLink.length;
          if (maA > 0 && maB > 0) {
            let toLoad: OrientedLinkClass = new OrientedLinkClass(
              newID + 1,
              linkURLLink[index],
              [],
              gabaritFileTmp.globalGabarit.lowerLimit,
              labelLink[index] + '_' + newID,
              textObj,
              mainMetricALink[index],
              metricALink[index],
              colorMode,
              traceBack,
              traceBorder,
              positionParameterLink[index],
              nameLink[index],
              orientationLink[index],
              sizeLink[index],
              posALink[index].x,
              posALink[index].y,
              colorALink[index],
              posBLink[index].x,
              posBLink[index].y,
              colorBLink[index],
              valueMetricALink[index],
              valueMetricBLink[index],
              pointInLink[index],
              pointOutLink[index],
              regionInLink[index],
              regionOutLink[index],
              this.props.options.zIndexOrientedLink + 1,
              posCLink[index].x,
              posCLink[index].y,
              isIncurvedLink[index],
              mainMetricBLink[index],
              metricBLink[index],
              widthInitialSpace.toString(),
              heightInitialSpace.toString(),
              defaultPositionAX,
              defaultPositionAY,
              defaultPositionBX,
              defaultPositionBY,
              defaultPositionCX,
              defaultPositionCY
            );
            newID++;
            this.checkCoordinateFilterLink(toLoad, this.props);
          }
          if (!(maA > 0) && maB > 0) {
            let toLoad: OrientedLinkClass = new OrientedLinkClass(
              newID + 1,
              linkURLLink[index],
              [],
              gabaritFileTmp.globalGabarit.lowerLimit,
              labelLink[index] + '_' + newID,
              textObj,
              mainMetricALink[index],
              [],
              colorMode,
              traceBack,
              traceBorder,
              positionParameterLink[index],
              nameLink[index],
              orientationLink[index],
              sizeLink[index],
              posALink[index].x,
              posALink[index].y,
              colorALink[index],
              posBLink[index].x,
              posBLink[index].y,
              colorBLink[index],
              valueMetricALink[index],
              valueMetricBLink[index],
              pointInLink[index],
              pointOutLink[index],
              regionInLink[index],
              regionOutLink[index],
              this.props.options.zIndexOrientedLink + 1,
              posCLink[index].x,
              posCLink[index].y,
              isIncurvedLink[index],
              mainMetricBLink[index],
              metricBLink[index],
              widthInitialSpace.toString(),
              heightInitialSpace.toString(),
              defaultPositionAX,
              defaultPositionAY,
              defaultPositionBX,
              defaultPositionBY,
              defaultPositionCX,
              defaultPositionCY
            );
            newID++;
            this.checkCoordinateFilterLink(toLoad, this.props);
          } else if (maA > 0 && !(maB > 0)) {
            let toLoad: OrientedLinkClass = new OrientedLinkClass(
              newID + 1,
              linkURLLink[index],
              [],
              gabaritFileTmp.globalGabarit.lowerLimit,
              labelLink[index] + '_' + newID,
              textObj,
              mainMetricALink[index],
              metricALink[index],
              colorMode,
              traceBack,
              traceBorder,
              positionParameterLink[index],
              nameLink[index],
              orientationLink[index],
              sizeLink[index],
              posALink[index].x,
              posALink[index].y,
              colorALink[index],
              posBLink[index].x,
              posBLink[index].y,
              colorBLink[index],
              valueMetricALink[index],
              valueMetricBLink[index],
              pointInLink[index],
              pointOutLink[index],
              regionInLink[index],
              regionOutLink[index],
              this.props.options.zIndexOrientedLink + 1,
              posCLink[index].x,
              posCLink[index].y,
              isIncurvedLink[index],
              mainMetricBLink[index],
              [],
              widthInitialSpace.toString(),
              heightInitialSpace.toString(),
              defaultPositionAX,
              defaultPositionAY,
              defaultPositionBX,
              defaultPositionBY,
              defaultPositionCX,
              defaultPositionCY
            );
            newID++;
            this.checkCoordinateFilterLink(toLoad, this.props);
          } else {
            let toLoad: OrientedLinkClass = new OrientedLinkClass(
              newID + 1,
              linkURLLink[index],
              [],
              gabaritFileTmp.globalGabarit.lowerLimit,
              labelLink[index] + '_' + newID,
              textObj,
              mainMetricALink[index],
              [],
              colorMode,
              traceBack,
              traceBorder,
              positionParameterLink[index],
              nameLink[index],
              orientationLink[index],
              sizeLink[index],
              posALink[index].x,
              posALink[index].y,
              colorALink[index],
              posBLink[index].x,
              posBLink[index].y,
              colorBLink[index],
              valueMetricALink[index],
              valueMetricBLink[index],
              pointInLink[index],
              pointOutLink[index],
              regionInLink[index],
              regionOutLink[index],
              this.props.options.zIndexOrientedLink + 1,
              posCLink[index].x,
              posCLink[index].y,
              isIncurvedLink[index],
              mainMetricBLink[index],
              [],
              widthInitialSpace.toString(),
              heightInitialSpace.toString(),
              defaultPositionAX,
              defaultPositionAY,
              defaultPositionBX,
              defaultPositionBY,
              defaultPositionCX,
              defaultPositionCY
            );
            newID++;
            this.checkCoordinateFilterLink(toLoad, this.props);
          }
        });
      }
    });

    /*  */
    //Template
    let filterRegion: Filtred[][] = []; //
    let posRegion: Coord4D[] = []; //

    let metaRegion: string[] = []; //
    let labelRegion: string[] = []; //
    let positionParameterRegion: PositionParameterClass[] = []; //
    let mainMetricRegion: Metric[] = []; //
    let metricRegion: Metric[][] = []; //
    let linkURLRegion: LinkURLClass[] = [];
    let idSVGRegion: string[] = [];
    let modeRegion: boolean[] = [];
    let imgRegion: string[] = [];
    let orientedLinkAssociate: OrientedLinkClass[][] = [];

    gabaritFileTmp.templateGabaritRegion.forEach((region, index) => {
      if (region.labelfix.toString() === 'false') {
        posRegion.push(coordParseRegion(region.xylabel));
        if (!posRegion[index].xMax || !posRegion[index].xMin || !posRegion[index].yMax || !posRegion[index].yMin) {
          posRegion[index] = coordParseRegion(gabaritFileTmp.templateGabaritRegionDefault[0].xylabel);
        }
        if (!posRegion[index].xMax || !posRegion[index].xMin || !posRegion[index].yMax || !posRegion[index].yMin) {
          posRegion[index] = coordParseRegion(this.props.options.gabaritDefault.templateGabaritRegionDefault[0].xylabel);
        }
      } else {
        posRegion.push(coordParseRegion(region.xylabelfix));
        if (!posRegion[index].xMax || !posRegion[index].xMin || !posRegion[index].yMax || !posRegion[index].yMin) {
          posRegion[index] = coordParseRegion(gabaritFileTmp.templateGabaritRegionDefault[0].xylabelfix);
        }
        if (!posRegion[index].xMax || !posRegion[index].xMin || !posRegion[index].yMax || !posRegion[index].yMin) {
          posRegion[index] = coordParseRegion(this.props.options.gabaritDefault.templateGabaritRegionDefault[0].xylabelfix);
        }
      }
      filterRegion.push(filterParseRegion(region.filtered));
      if (!filterRegion[index]) {
        filterRegion[index] = filterParseRegion(gabaritFileTmp.templateGabaritRegionDefault[0].filtered);
      }
      if (!filterRegion[index]) {
        filterRegion[index] = filterParseRegion(this.props.options.gabaritDefault.templateGabaritRegionDefault[0].filtered);
      }
      linkURLRegion.push(new LinkURLClass(region.linkURL.followLink, region.linkURL.hoveringTooltipLink, region.linkURL.hoveringTooltipTex));
      if (!linkURLRegion[index].followLink) {
        linkURLRegion[index] = new LinkURLClass(
          gabaritFileTmp.templateGabaritRegionDefault[0].linkURL.followLink,
          gabaritFileTmp.templateGabaritRegionDefault[0].linkURL.hoveringTooltipLink,
          gabaritFileTmp.templateGabaritRegionDefault[0].linkURL.hoveringTooltipText
        );
      }
      if (!linkURLRegion[index].followLink) {
        linkURLRegion[index] = new LinkURLClass(
          this.props.options.gabaritDefault.templateGabaritRegionDefault[0].linkURL.followLink,
          this.props.options.gabaritDefault.templateGabaritRegionDefault[0].linkURL.hoveringTooltipLink,
          this.props.options.gabaritDefault.templateGabaritRegionDefault[0].linkURL.hoveringTooltipText
        );
      }
      // changement
      metaRegion.push(region.meta.toString());
      if (!metaRegion[index]) {
        // changement
        // metaRegion[index] = gabaritFileTmp.templateGabaritRegionDefault[0].meta;
        [] = gabaritFileTmp.templateGabaritRegionDefault[0].meta;
      }
      if (!metaRegion[index]) {
        // changement
        // metaRegion[index] = this.props.options.gabaritDefault.templateGabaritRegionDefault[0].meta;
        [] = this.props.options.gabaritDefault.templateGabaritRegionDefault[0].meta;
      }
      labelRegion.push(region.label);
      if (!labelRegion[index]) {
        labelRegion[index] = gabaritFileTmp.templateGabaritRegionDefault[0].label;
      }
      if (!labelRegion[index]) {
        labelRegion[index] = this.props.options.gabaritDefault.templateGabaritRegionDefault[0].label;
      }
      mainMetricRegion.push({
        key: region.mainMetric.key,
        unit: region.mainMetric.unit,
        format: region.mainMetric.format,
        keyValue: '',
        filter: filterRegion[index],
        refId: gabaritFileTmp.queryID,
        expr: '',
        returnQuery: [],
        manageValue: region.mainMetric.manageValue,
      });
      if (!mainMetricRegion[index].unit) {
        mainMetricRegion[index] = {
          key: gabaritFileTmp.templateGabaritRegionDefault[0].mainMetric.key,
          unit: gabaritFileTmp.templateGabaritRegionDefault[0].mainMetric.unit,
          format: gabaritFileTmp.templateGabaritRegionDefault[0].mainMetric.format,
          keyValue: '',
          filter: filterRegion[index],
          refId: gabaritFileTmp.queryID,
          expr: '',
          returnQuery: [],
          manageValue: gabaritFileTmp.templateGabaritRegionDefault[0].mainMetric.manageValue,
        };
      }
      if (!mainMetricRegion[index].unit) {
        mainMetricRegion[index] = {
          key: this.props.options.gabaritDefault.templateGabaritRegionDefault[0].mainMetric.key,
          unit: this.props.options.gabaritDefault.templateGabaritRegionDefault[0].mainMetric.unit,
          format: this.props.options.gabaritDefault.templateGabaritRegionDefault[0].mainMetric.format,
          keyValue: '',
          filter: filterRegion[index],
          refId: gabaritFileTmp.queryID,
          expr: '',
          returnQuery: [],
          manageValue: this.props.options.gabaritDefault.templateGabaritRegionDefault[0].mainMetric.manageValue,
        };
      }
      if (!mainMetricRegion[index].refId) {
        mainMetricRegion[index].refId = 'A';
      }
      region.metrics.forEach((element) => {
        metricRegion[index].push({
          key: element.key,
          unit: element.unit,
          format: element.format,
          keyValue: '',
          filter: filterRegion[index],
          refId: gabaritFileTmp.queryID,
          expr: '',
          returnQuery: [],
          manageValue: element.manageValue,
        });
      });
      modeRegion.push(Boolean(region.mode));
      if (!modeRegion[index]) {
        modeRegion[index] = Boolean(gabaritFileTmp.templateGabaritRegionDefault[0].mode);
      }
      if (!modeRegion[index]) {
        modeRegion[index] = Boolean(this.props.options.gabaritDefault.templateGabaritRegionDefault[0].mode);
      }
      idSVGRegion.push(region.idSVG);
      if (!idSVGRegion[index]) {
        idSVGRegion[index] = gabaritFileTmp.templateGabaritRegionDefault[0].idSVG;
      }
      if (!idSVGRegion[index]) {
        idSVGRegion[index] = this.props.options.gabaritDefault.templateGabaritRegionDefault[0].idSVG;
      }
      imgRegion.push(region.img);
      if (!imgRegion[index]) {
        imgRegion[index] = gabaritFileTmp.templateGabaritRegionDefault[0].img;
      }
      if (!imgRegion[index]) {
        imgRegion[index] = this.props.options.gabaritDefault.templateGabaritRegionDefault[0].img;
      }
      tmpToolTipA = { label: region.positionParameter.tooltipA, value: region.positionParameter.tooltipA };
      if (!tmpToolTipA.label || !tmpToolTipA.value) {
        tmpToolTipA = {
          label: gabaritFileTmp.templateGabaritRegionDefault[0].positionParameter.tooltipA,
          value: gabaritFileTmp.templateGabaritRegionDefault[0].positionParameter.tooltipA,
        };
      }
      if (!tmpToolTipA.label || !tmpToolTipA.value) {
        tmpToolTipA = {
          label: this.props.options.gabaritDefault.templateGabaritRegionDefault[0].positionParameter.tooltipA,
          value: this.props.options.gabaritDefault.templateGabaritRegionDefault[0].positionParameter.tooltipA,
        };
      }
      tmpToolTipB = { label: region.positionParameter.tooltipB, value: region.positionParameter.tooltipB };
      if (!tmpToolTipB.label || !tmpToolTipB.value) {
        tmpToolTipB = {
          label: gabaritFileTmp.templateGabaritRegionDefault[0].positionParameter.tooltipB,
          value: gabaritFileTmp.templateGabaritRegionDefault[0].positionParameter.tooltipB,
        };
      }
      if (!tmpToolTipB.label || !tmpToolTipB.value) {
        tmpToolTipB = {
          label: this.props.options.gabaritDefault.templateGabaritRegionDefault[0].positionParameter.tooltipB,
          value: this.props.options.gabaritDefault.templateGabaritRegionDefault[0].positionParameter.tooltipB,
        };
      }
      tmpLabelAPosition = coordParse(region.positionParameter.xylabelA);
      if (!tmpLabelAPosition) {
        tmpLabelAPosition = coordParse(gabaritFileTmp.templateGabaritRegionDefault[0].positionParameter.xylabelA);
      }
      if (!tmpLabelAPosition) {
        tmpLabelAPosition = coordParse(this.props.options.gabaritDefault.templateGabaritRegionDefault[0].positionParameter.xylabelA);
      }
      tmpLabelBPosition = coordParse(region.positionParameter.xylabelB);
      if (!tmpLabelBPosition) {
        tmpLabelBPosition = coordParse(gabaritFileTmp.templateGabaritRegionDefault[0].positionParameter.xylabelB);
      }
      if (!tmpLabelBPosition) {
        tmpLabelBPosition = coordParse(this.props.options.gabaritDefault.templateGabaritRegionDefault[0].positionParameter.xylabelB);
      }
      positionParameterRegion.push(
        new PositionParameterClass(tmpLabelAPosition.x, tmpLabelAPosition.y, tmpLabelBPosition.x, tmpLabelBPosition.y, tmpToolTipA, tmpToolTipB)
      );
      orientedLinkAssociate.push(region.orientedLink);
      if (!orientedLinkAssociate[index]) {
        orientedLinkAssociate[index] = gabaritFileTmp.templateGabaritRegionDefault[0].orientedLink;
      }
      if (!orientedLinkAssociate[index]) {
        orientedLinkAssociate[index] = this.props.options.gabaritDefault.templateGabaritRegionDefault[0].orientedLink;
      }
    });

    newID = 0;
    this.props.options.regionCoordinateSpace.forEach((element) => {
      newID++;
    });

    filterRegion.forEach((element, index) => {
      if (metricRegion.length > 0) {
        let toLoad: RegionClass = new RegionClass(
          newID + 1,
          linkURLRegion[index],
          [],
          gabaritFileTmp.globalGabarit.lowerLimit,
          labelRegion[index] + '_' + newID,
          textObj,
          mainMetricRegion[index],
          metricRegion[index],
          colorMode,
          traceBack,
          traceBorder,
          positionParameterRegion[index],
          idSVGRegion[index],
          orientedLinkAssociate[index],
          posRegion[index],
          posRegion[index],
          modeRegion[index],
          imgRegion[index],
          widthInitialSpace.toString(),
          heightInitialSpace.toString()
        );
        newID++;
        this.props.options.regionCoordinateSpace.push(toLoad);
      } else {
        let toLoad: RegionClass = new RegionClass(
          newID + 1,
          linkURLRegion[index],
          [],
          gabaritFileTmp.globalGabarit.lowerLimit,
          labelRegion[index] + '_' + newID,
          textObj,
          mainMetricRegion[index],
          [],
          colorMode,
          traceBack,
          traceBorder,
          positionParameterRegion[index],
          idSVGRegion[index],
          orientedLinkAssociate[index],
          posRegion[index],
          posRegion[index],
          modeRegion[index],
          imgRegion[index],
          widthInitialSpace.toString(),
          heightInitialSpace.toString()
        );
        newID++;
        this.props.options.regionCoordinateSpace.push(toLoad);
      }
    });
  };

  gabaritUrlDisplay = (props: any): JSX.Element => {
    if (props.list.lenght !== 0) {
      const list = props.list.map((url: string, index: number) => (
        <div
          key={'GabaritUrlDiv' + index.toString()}
          style={{
            display: 'flex',
          }}
        >
          <FormField
            id={index.toString()}
            key={'GabaritUrl' + index.toString()}
            label={'Url'}
            labelWidth={5}
            inputWidth={20}
            onChange={this.onGabaritListUrlChanged.bind(this)}
            type="string"
            value={url || ''}
          />
          <Button variant="danger" id={index.toString()} key={'ButtunDel' + index.toString()} onClick={this.gabaritDeletUrl.bind(this)}>
            Del
          </Button>
        </div>
      ));
      return <div>{list}</div>;
    }
    return <div>No targets avalaible</div>;
  };

  gabaritDisplay = (props: any): JSX.Element => {
    if (props.list.lenght !== 0) {
      const list = props.list.map((gabarit: GabaritFile, index: number) => (
        <div
          key={'GabaritDiv' + index.toString()}
          style={{
            display: 'flex',
          }}
        >
          <FormField
            id={index.toString()}
            key={'Gabarit' + index.toString()}
            label={'Gabarit'}
            labelWidth={5}
            inputWidth={20}
            type="string"
            value={gabarit.fileName || ''}
            readOnly
          />
          <FormLabel width={15}>Querry ID</FormLabel>
          <Select
            onChange={(value) => this.onChangeSelectQuerryID(value, index)}
            allowCustomValue={false}
            options={this.state.selectQuerryID}
            width={10}
            value={{ label: this.props.options.saveGabaritFile[index].queryID, value: this.props.options.saveGabaritFile[index].queryID }}
          />
          <Button id={index.toString()} key={'ButtunLoad' + index.toString()} onClick={this.checkLoaderGabarit.bind(this)}>
            Load
          </Button>
          <Button variant="danger" id={index.toString()} key={'ButtunDel' + index.toString()} onClick={this.gabaritDeletFile.bind(this)}>
            Del
          </Button>
        </div>
      ));
      return <div>{list}</div>;
    }
    return <div>No targets avalaible</div>;
  };

  gabaritDefaultDisplay = (props: any): JSX.Element => {
    if (props) {
      const list = (
        <div
          style={{
            display: 'flex',
          }}
        >
          <FormField
            key={'GabaritDefault'}
            label={'GabaritDefault'}
            labelWidth={10}
            inputWidth={20}
            type="string"
            value={props.list.fileName || ''}
            readOnly
          />
          <Button variant="danger" key={'ButtunDelDefault'} onClick={this.gabaritDeletFileDefault.bind(this)}>
            Del
          </Button>
        </div>
      );
      return <div>{list}</div>;
    }
    return <div>No targets avalaible</div>;
  };

  delAll = () => {
    // this.props.options.arrayCoordinateSpace = [];
    // this.props.options.arrayOrientedLinks = [];
    // this.props.options.arrayPoints = [];
    this.props.options.saveGabaritURL = [];
    this.props.options.saveGabaritURL = [];
    // this.props.options.saveGabaritURL.mono = [];
    this.props.onOptionsChange({ ...this.props.options, saveGabaritURL: this.props.options.saveGabaritURL });
  };

  printDefault = () => {
    console.log('gabaritDefault');
    console.log(this.props.options.gabaritDefault);
  };

  printPoint = () => {
    console.log('gabaritPoint');
    console.log(this.props.options.arrayPoints);
  };

  printRegion = () => {
    console.log('gabaritRegion');
    console.log(this.props.options.regionCoordinateSpace);
  };

  printLink = () => {
    console.log('gabaritDefault');
    console.log(this.props.options.arrayOrientedLinks);
  };

  printTemp = () => {
    console.log('gabaritDefault');
    console.log(this.props.options.gabaritDefault);
  };

  render() {
    const { options } = this.props;
    return (
      <div>
        <Collapse isOpen={this.state.collapseGabaritDefault} label="Default Gabarit URL" onToggle={this.onToggleGabaritDefault}>
          <FormField
            label="Gabarit Default Url"
            labelWidth={10}
            key={'GabaritDefaultUrl'}
            inputWidth={18}
            onChange={this.onGabaritDefaultUrlChanged.bind(this)}
            type="string"
            value={options.saveGabaritDefaultUrl || ''}
          />
          <Button key={'AddGabaritDefaultUrl'} onClick={this.addGabaritDefaultUrlInput}>
            Add
          </Button>
          <this.gabaritDefaultDisplay list={options.gabaritDefault} />
        </Collapse>
        <Collapse isOpen={this.state.collapseSelectURL} label="Url List" onToggle={this.onToggleSelectUrl}>
          <FormField
            label="Gabarit Url"
            labelWidth={8}
            key={'GabaritUrl'}
            inputWidth={20}
            onChange={this.onGabaritUrlChanged.bind(this)}
            type="string"
            value={options.gabaritUrlInput || ''}
          />
          <Button key={'AddGabaritUrl'} onClick={this.addGabaritUrlInput}>
            Add
          </Button>
          <div className="section gf-form-group">
            <Button onClick={this.fetchGabarit}>Finish</Button>
            <this.gabaritUrlDisplay list={options.saveGabaritURL} />
            <Button key={'delAll'} onClick={this.delAll}>
              Del all urls
            </Button>
          </div>
        </Collapse>
        <Collapse isOpen={this.state.collapseGabarit} label="Gabarit List" onToggle={this.onToggleGabarit}>
          <this.gabaritDisplay list={options.saveGabaritFile} />
        </Collapse>
        <Button onClick={this.printDefault}>Default</Button>
        <Button onClick={this.printPoint}>Point</Button>
        <Button onClick={this.printRegion}>Region</Button>
        <Button onClick={this.printLink}>Link</Button>
        <Button onClick={this.printTemp}>Temp</Button>
      </div>
    );
  }
}
export default Gabarit;
