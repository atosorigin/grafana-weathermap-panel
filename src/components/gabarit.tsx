import React from 'react';
import { PanelEditorProps, SelectableValue } from '@grafana/data';
// add Metadata
import { SimpleOptions, GabaritFile, Metric, Metadata, MetaFile } from '../types';
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
import { LowerLimitClass } from 'Models/LowerLimitClass';
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
      refId: metric.refId,
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
    let valid = false;
    point.mainMetric.returnQuery?.forEach((dataFrame) => {
      const result = searchNameIsFilter(dataFrame, point.mainMetric);
      if (result) {
        this.props.options.arrayPoints.push(point);
        valid = true;
        return true;
      } else {
        return false;
      }
    });
    return valid;
  };

  checkCoordinateFilterLink = (link: OrientedLinkClass, props: any) => {
    reqMetricOrientedLink(link, props);
    link.mainMetric.returnQuery?.forEach((dataFrame) => {
      const result = searchNameIsFilter(dataFrame, link.mainMetric);
      if (result) {
        this.props.options.arrayOrientedLinks.push(link);
        return true;
      } else {
        console.log('Filter not found -> no load');
        return false;
      }
    });
    return false;
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
            lowerLimitMin: '',
            lowerLimitMax: '',
            backColor: 'blue',
            borderColor: 'red',
            sizeBorder: '1',
          },
        ],
        textObject: {
          value: 'default',
          isTextTooltip: 'false',
          colorBack: 'blue',
          colorText: 'black',
          style: {
            bold: 'false',
            italic: 'false',
            underline: 'false',
          },
          generateObjectText: 'false',
          valueGenerateObjectText: {
            legendElement: 'default',
            numericFormatElement: 'default',
            unit: 'default',
            displayObjectInTooltip: 'false',
            addColorTextElement: 'false',
            colorTextElement: 'black',
            addColorBackElement: 'false',
            colorBackElement: 'white',
          },
          generateAuxiliaryElement: {
            legendElement: 'default',
            numericFormatElement: 'default',
            unit: 'default',
            displayObjectInTooltip: 'false',
            addColorTextElement: 'false',
            colorTextElement: 'black',
            addColorBackElement: 'false',
            colorBackElement: 'white',
          },
        },
        defaultColor: 'black',
        colorMode: 'true',
        traceBack: 'true',
        traceBorder: 'true',
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
      this.props.options.saveGabaritFile[parseInt(onClick.currentTarget.id, 10)].loaded = true;
    } else {
      console.log('loadGabaritReject');
    }
  };

  metaConstructor = (metas: MetaFile[]) => {
    let result: Metadata[] = [];
    metas.forEach((meta, index) => {
      let textObject = new TextObject(
        '',
        false,
        meta.obj.colorBack,
        meta.obj.colorText,
        { bold: meta.obj.style.bold, italic: meta.obj.style.italic, underline: meta.obj.style.underline },
        false,
        {
          legendElement: '',
          numericFormatElement: '',
          unit: '',
          displayObjectInTooltip: false,
          addColorTextElement: false,
          colorTextElement: '',
          addColorBackElement: false,
          colorBackElement: '',
        },
        {
          legendElement: '',
          numericFormatElement: '',
          unit: '',
          displayObjectInTooltip: false,
          addColorTextElement: false,
          colorTextElement: meta.obj.colorText,
          addColorBackElement: false,
          colorBackElement: '',
        }
      );
      result.push({ meta: meta.meta, obj: textObject });
    });
    return result;
  };

  transformStringToBoolean = (text: string): boolean => {
    return text === 'true' ? true : false;
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
    let lowerLimit: LowerLimitClass[];
    let colorMode: boolean;
    let traceBack: boolean;
    let traceBorder: boolean;
    let textObj: TextObject;
    let value: string;
    let isTextTooltip: boolean;
    let colorBack: string;
    let colorText: string;
    let style: Style;
    let generateObjectText: boolean;
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

    // GLOBAL

    //colorMode = Boolean(gabaritFileTmp.globalGabarit.colorMode);
    if (!gabaritFileTmp.globalGabarit.colorMode) {
      //default
      colorMode = this.transformStringToBoolean(this.props.options.gabaritDefault.globalGabarit.colorMode);
    } else {
      //normal
      colorMode = this.transformStringToBoolean(gabaritFileTmp.globalGabarit.colorMode);
    }

    //traceBack = Boolean(gabaritFileTmp.globalGabarit.traceBack);
    if (!gabaritFileTmp.globalGabarit.traceBack) {
      //default
      traceBack = this.transformStringToBoolean(this.props.options.gabaritDefault.globalGabarit.traceBack);
    } else {
      //normal
      traceBack = this.transformStringToBoolean(gabaritFileTmp.globalGabarit.traceBack);
    }

    //traceBorder = Boolean(gabaritFileTmp.globalGabarit.traceBorder);
    if (!gabaritFileTmp.globalGabarit.traceBorder) {
      //default
      traceBorder = this.transformStringToBoolean(this.props.options.gabaritDefault.globalGabarit.traceBorder);
    } else {
      //normal
      traceBorder = this.transformStringToBoolean(gabaritFileTmp.globalGabarit.traceBorder);
    }

    ////// Text Object
    value = gabaritFileTmp.globalGabarit.textObject.value;
    if (!value) {
      value = this.props.options.gabaritDefault.globalGabarit.textObject.value;
    }

    if (!gabaritFileTmp.globalGabarit.textObject.isTextTooltip) {
      //default
      isTextTooltip = this.transformStringToBoolean(this.props.options.gabaritDefault.globalGabarit.textObject.isTextTooltip);
    } else {
      //normal
      isTextTooltip = this.transformStringToBoolean(gabaritFileTmp.globalGabarit.textObject.isTextTooltip);
    }

    colorBack = gabaritFileTmp.globalGabarit.textObject.colorBack;
    if (!colorBack) {
      colorBack = this.props.options.gabaritDefault.globalGabarit.textObject.colorBack;
    }

    colorText = gabaritFileTmp.globalGabarit.textObject.colorText;
    if (!colorBack) {
      colorText = this.props.options.gabaritDefault.globalGabarit.textObject.colorText;
    }

    if (!gabaritFileTmp.globalGabarit.textObject.generateObjectText) {
      //default
      generateObjectText = this.transformStringToBoolean(this.props.options.gabaritDefault.globalGabarit.textObject.generateObjectText);
    } else {
      //normal
      generateObjectText = this.transformStringToBoolean(gabaritFileTmp.globalGabarit.textObject.generateObjectText);
    }

    // generateValue = {
    //   legendElement: gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.legendElement,
    //   numericFormatElement: gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.numericFormatElement,
    //   unit: gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.unit,
    //   displayObjectInTooltip: Boolean(gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.displayObjectInTooltip),
    //   addColorTextElement: Boolean(gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.addColorTextElement),
    //   colorTextElement: gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.colorTextElement,
    //   addColorBackElement: Boolean(gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.addColorBackElement),
    //   colorBackElement: gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.colorBackElement,
    // };

    // if (!generateValue.unit) {
    //   generateValue = {
    //     legendElement: this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.legendElement,
    //     numericFormatElement: this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.numericFormatElement,
    //     unit: this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.unit,
    //     displayObjectInTooltip: Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.displayObjectInTooltip),
    //     addColorTextElement: Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.addColorTextElement),
    //     colorTextElement: this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.colorTextElement,
    //     addColorBackElement: Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.addColorBackElement),
    //     colorBackElement: this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.colorBackElement,
    //   };
    // }

    generateValue = {
      legendElement: gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.legendElement,
      numericFormatElement: gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.numericFormatElement,
      unit: gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.unit,
      displayObjectInTooltip: false,
      addColorTextElement: false,
      colorTextElement: gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.colorTextElement,
      addColorBackElement: false,
      colorBackElement: gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.colorBackElement,
    };

    if (!gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.addColorTextElement) {
      generateValue.addColorTextElement = this.transformStringToBoolean(
        this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.addColorTextElement
      );
    } else {
      generateValue.addColorTextElement = this.transformStringToBoolean(
        gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.addColorTextElement
      );
    }
    if (!generateValue.colorTextElement) {
      generateValue.colorTextElement = this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.colorTextElement;
    }
    if (!gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.addColorBackElement) {
      generateValue.addColorBackElement = this.transformStringToBoolean(
        this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.addColorBackElement
      );
    } else {
      generateValue.addColorBackElement = this.transformStringToBoolean(
        gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.addColorBackElement
      );
    }
    if (!generateValue.colorBackElement) {
      generateValue.colorBackElement = this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.colorBackElement;
    }
    if (!gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.displayObjectInTooltip) {
      generateValue.displayObjectInTooltip = this.transformStringToBoolean(
        this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.displayObjectInTooltip
      );
    } else {
      generateValue.displayObjectInTooltip = this.transformStringToBoolean(
        gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.displayObjectInTooltip
      );
    }
    if (!generateValue.legendElement) {
      generateValue.legendElement = this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.legendElement;
    }
    if (!generateValue.numericFormatElement) {
      generateValue.numericFormatElement = this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.numericFormatElement;
    }
    if (!generateValue.unit) {
      generateValue.unit = this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.unit;
    }

    // generateAux = {
    //   legendElement: gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.legendElement,
    //   numericFormatElement: gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.numericFormatElement,
    //   unit: gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.unit,
    //   displayObjectInTooltip: Boolean(gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.displayObjectInTooltip),
    //   addColorTextElement: Boolean(gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.addColorTextElement),
    //   colorTextElement: gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.colorTextElement,
    //   addColorBackElement: Boolean(gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.addColorBackElement),
    //   colorBackElement: gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.colorBackElement,
    // };

    // if (!generateAux.unit) {
    //   generateAux = {
    //     legendElement: this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.legendElement,
    //     numericFormatElement: this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.numericFormatElement,
    //     unit: this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.unit,
    //     displayObjectInTooltip: Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.displayObjectInTooltip),
    //     addColorTextElement: Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.addColorTextElement),
    //     colorTextElement: this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.colorTextElement,
    //     addColorBackElement: Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.addColorBackElement),
    //     colorBackElement: this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.colorBackElement,
    //   };
    // }

    generateAux = {
      legendElement: gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.legendElement,
      numericFormatElement: gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.numericFormatElement,
      unit: gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.unit,
      displayObjectInTooltip: false,
      addColorTextElement: false,
      colorTextElement: gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.colorTextElement,
      addColorBackElement: false,
      colorBackElement: gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.colorBackElement,
    };

    if (!gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.addColorBackElement) {
      generateAux.addColorBackElement = this.transformStringToBoolean(
        this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.addColorBackElement
      );
    } else {
      generateAux.addColorBackElement = this.transformStringToBoolean(
        gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.addColorBackElement
      );
    }
    if (!generateAux.colorBackElement) {
      generateAux.colorBackElement = this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.colorBackElement;
    }
    if (!gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.addColorTextElement) {
      generateAux.addColorTextElement = this.transformStringToBoolean(
        this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.addColorTextElement
      );
    } else {
      generateAux.addColorTextElement = this.transformStringToBoolean(
        gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.addColorTextElement
      );
    }
    if (!generateAux.colorTextElement) {
      generateAux.colorTextElement = this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.colorTextElement;
    }
    if (!gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.displayObjectInTooltip) {
      generateAux.displayObjectInTooltip = this.transformStringToBoolean(
        this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.displayObjectInTooltip
      );
    } else {
      generateAux.displayObjectInTooltip = this.transformStringToBoolean(
        gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.displayObjectInTooltip
      );
    }
    if (!generateAux.legendElement) {
      generateAux.legendElement = this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.legendElement;
    }
    if (!generateAux.numericFormatElement) {
      generateAux.numericFormatElement = this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.numericFormatElement;
    }
    if (!generateAux.unit) {
      generateAux.unit = this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.unit;
    }

    // style = {
    //   bold: Boolean(gabaritFileTmp.globalGabarit.textObject.style.bold),
    //   italic: Boolean(gabaritFileTmp.globalGabarit.textObject.style.italic),
    //   underline: Boolean(gabaritFileTmp.globalGabarit.textObject),
    // };

    // if (!style.bold) {
    //   style = {
    //     bold: Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.style.bold),
    //     italic: Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.style.italic),
    //     underline: Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.style.underline),
    //   };
    // }

    style = { bold: false, italic: false, underline: false };

    if (!gabaritFileTmp.globalGabarit.textObject.style.bold) {
      //default
      style.bold = this.transformStringToBoolean(this.props.options.gabaritDefault.globalGabarit.textObject.style.bold);
    } else {
      //normal
      style.bold = this.transformStringToBoolean(gabaritFileTmp.globalGabarit.textObject.style.bold);
    }

    if (!gabaritFileTmp.globalGabarit.textObject.style.italic) {
      //default
      style.italic = this.transformStringToBoolean(this.props.options.gabaritDefault.globalGabarit.textObject.style.italic);
    } else {
      //normal
      style.italic = this.transformStringToBoolean(gabaritFileTmp.globalGabarit.textObject.style.italic);
    }

    if (!gabaritFileTmp.globalGabarit.textObject.style.underline) {
      //default
      style.underline = this.transformStringToBoolean(this.props.options.gabaritDefault.globalGabarit.textObject.style.underline);
    } else {
      //normal
      style.underline = this.transformStringToBoolean(gabaritFileTmp.globalGabarit.textObject.style.underline);
    }

    // textObj = new TextObject(
    //   gabaritFileTmp.globalGabarit.textObject.value,
    //   Boolean(gabaritFileTmp.globalGabarit.textObject.isTextTooltip),
    //   gabaritFileTmp.globalGabarit.textObject.colorBack,
    //   gabaritFileTmp.globalGabarit.textObject.colorText,
    //   style,
    //   Boolean(gabaritFileTmp.globalGabarit.textObject.generateObjectText),
    //   generateValue,
    //   generateAux
    // );

    textObj = new TextObject(value, isTextTooltip, colorBack, colorText, style, generateObjectText, generateValue, generateAux);

    // if (!textObj.value) {
    //   textObj = new TextObject(
    //     this.props.options.gabaritDefault.globalGabarit.textObject.value,
    //     Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.isTextTooltip),
    //     this.props.options.gabaritDefault.globalGabarit.textObject.colorBack,
    //     this.props.options.gabaritDefault.globalGabarit.textObject.colorText,
    //     style,
    //     Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.generateObjectText),
    //     generateValue,
    //     generateAux
    //   );
    // }

    /// Lower Limit
    lowerLimit = gabaritFileTmp.globalGabarit.lowerLimit;
    console.log(lowerLimit);
    if (lowerLimit.length === 0) {
      console.log('default');
      lowerLimit = this.props.options.gabaritDefault.globalGabarit.lowerLimit;
      console.log(lowerLimit);
    }
    console.log(lowerLimit);

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
      metaPoint.push(this.metaConstructor(point.meta));
      if (!metaPoint[index]) {
        metaPoint[index] = this.metaConstructor(gabaritFileTmp.templateGabaritPointDefault[0].meta);
      }
      if (!metaPoint[index]) {
        metaPoint[index] = this.metaConstructor(this.props.options.gabaritDefault.templateGabaritPointDefault[0].meta);
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
      //if (!drawGraphicMarkerPoint[index].label || !drawGraphicMarkerPoint[index].label) {
      if (!drawGraphicMarkerPoint[index].label) {
        drawGraphicMarkerPoint[index] = {
          label: gabaritFileTmp.templateGabaritPointDefault[0].drawGraphicMarker.label,
          value: gabaritFileTmp.templateGabaritPointDefault[0].drawGraphicMarker.value,
        };
      }
      //if (!drawGraphicMarkerPoint[index].label || !drawGraphicMarkerPoint[index].label) {
      if (!drawGraphicMarkerPoint[index].label) {
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
      tmpToolTipA = { label: point.positionParameter.tooltipA.label, value: point.positionParameter.tooltipA.value };
      if (!tmpToolTipA.label || !tmpToolTipA.value) {
        tmpToolTipA = {
          label: gabaritFileTmp.templateGabaritPointDefault[0].positionParameter.tooltipA.label,
          value: gabaritFileTmp.templateGabaritPointDefault[0].positionParameter.tooltipA.value,
        };
      }
      if (!tmpToolTipA.label || !tmpToolTipA.value) {
        tmpToolTipA = {
          label: this.props.options.gabaritDefault.templateGabaritPointDefault[0].positionParameter.tooltipA.label,
          value: this.props.options.gabaritDefault.templateGabaritPointDefault[0].positionParameter.tooltipA.value,
        };
      }
      tmpToolTipB = { label: point.positionParameter.tooltipB.label, value: point.positionParameter.tooltipB.value };
      if (!tmpToolTipB.label || !tmpToolTipB.value) {
        tmpToolTipB = {
          label: gabaritFileTmp.templateGabaritPointDefault[0].positionParameter.tooltipB.label,
          value: gabaritFileTmp.templateGabaritPointDefault[0].positionParameter.tooltipB.value,
        };
      }
      if (!tmpToolTipB.label || !tmpToolTipB.value) {
        tmpToolTipB = {
          label: this.props.options.gabaritDefault.templateGabaritPointDefault[0].positionParameter.tooltipB.label,
          value: this.props.options.gabaritDefault.templateGabaritPointDefault[0].positionParameter.tooltipB.value,
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
          let remove = element.name?.split('{');
          if (element.refId === mainMetricPoint[index]!.refId) {
            const nameQuery: string[] =
              remove![1].split(',').map((value) => {
                return value.replace(/[\"{}]/gm, '');
              }) || [];
            let valid = false;
            let res = 0;
            const filters: Filtred[] = mainMetricPoint[index].filter!;
            for (const aQuery of nameQuery) {
              const keyValue: string[] = aQuery.split('=');
              for (const filter of filters) {
                if (keyValue.length === 2) {
                  if (keyValue[0] === filter.label && keyValue[1] === filter.value) {
                    res++;
                  }
                }
              }
            }
            if (res === filters.length) {
              valid = true;
            }
            if (valid) {
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

    let upId = false;

    labelCoord.forEach((labelCo, posIndex) => {
      console.log('passage1');
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
                JSON.parse(JSON.stringify(lowerLimit)),
                labelPoint[index] + '_' + newID,
                JSON.parse(JSON.stringify(textObj)),
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
              upId = this.checkCoordinateFilterPoint(toLoad, this.props);
              if (upId) {
                newID++;
              }
            } else {
              let toLoad: PointClass = new PointClass(
                newID + 1,
                linkURLPoint[index],
                metaPoint[index],
                JSON.parse(JSON.stringify(lowerLimit)),
                labelPoint[index] + '_' + newID,
                JSON.parse(JSON.stringify(textObj)),
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
              upId = this.checkCoordinateFilterPoint(toLoad, this.props);
              if (upId) {
                newID++;
              }
            }
          });
        }
      } else {
        const defaultPositionX = (((parseInt(posPoint[posIndex].x, 10) - xMinInitialSpace) / widthInitialSpace) * widthBackground).toString();
        const defaultPositionY = (((parseInt(posPoint[posIndex].y, 10) - yMinInitialSpace) / heightInitialSpace) * heightBackground).toString();
        if (metricPoint.length > 0) {
          let toLoad: PointClass = new PointClass(
            newID + 1,
            linkURLPoint[posIndex],
            metaPoint[posIndex],
            JSON.parse(JSON.stringify(lowerLimit)),
            labelPoint[posIndex] + '_' + newID,
            JSON.parse(JSON.stringify(textObj)),
            mainMetricPoint[posIndex],
            metricPoint[posIndex],
            colorMode,
            traceBack,
            traceBorder,
            positionParameterPoint[posIndex],
            namePoint[posIndex] + '_' + newID,
            valueMetricPoint[posIndex],
            drawGraphicMarkerPoint[posIndex],
            shapePoint[posIndex],
            sizeWidthPoint[posIndex],
            sizeHeightPoint[posIndex],
            '',
            posPoint[posIndex].x,
            posPoint[posIndex].y,
            colorPoint[posIndex],
            associateOrientedLinksInPoint[posIndex],
            associateOrientedLinksOutPoint[posIndex],
            widthInitialSpace.toString(),
            heightInitialSpace.toString(),
            defaultPositionX,
            defaultPositionY
          );
          upId = this.checkCoordinateFilterPoint(toLoad, this.props);
          if (upId) {
            newID++;
          }
        } else {
          let toLoad: PointClass = new PointClass(
            newID + 1,
            linkURLPoint[posIndex],
            // changement
            metaPoint[posIndex],
            JSON.parse(JSON.stringify(lowerLimit)),
            labelPoint[posIndex] + '_' + newID,
            JSON.parse(JSON.stringify(textObj)),
            mainMetricPoint[posIndex],
            [],
            colorMode,
            traceBack,
            traceBorder,
            positionParameterPoint[posIndex],
            namePoint[posIndex] + '_' + newID,
            valueMetricPoint[posIndex],
            drawGraphicMarkerPoint[posIndex],
            shapePoint[posIndex],
            sizeWidthPoint[posIndex],
            sizeHeightPoint[posIndex],
            '',
            posPoint[posIndex].x,
            posPoint[posIndex].y,
            colorPoint[posIndex],
            associateOrientedLinksInPoint[posIndex],
            associateOrientedLinksOutPoint[posIndex],
            widthInitialSpace.toString(),
            heightInitialSpace.toString(),
            defaultPositionX,
            defaultPositionY
          );
          upId = this.checkCoordinateFilterPoint(toLoad, this.props);
          if (upId) {
            newID++;
          }
        }
      }
    });

    /* Link */
    //Template
    let filterLink: Filtred[][] = []; //
    let posALink: LabelCoord2D[] = []; //
    let posBLink: LabelCoord2D[] = []; //
    let posCLink: LabelCoord2D[] = []; //
    let nameLink: string[] = []; //
    let metaLink: Metadata[][] = []; //
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
      metaLink.push(this.metaConstructor(link.meta));
      if (!metaLink[index]) {
        metaLink[index] = this.metaConstructor(gabaritFileTmp.templateGabaritLinkDefault[0].meta);
      }
      if (!metaLink[index]) {
        metaLink[index] = this.metaConstructor(this.props.options.gabaritDefault.templateGabaritLinkDefault[0].meta);
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
      tmpToolTipA = { label: link.positionParameter.tooltipA.label, value: link.positionParameter.tooltipA.value };
      if (!tmpToolTipA.value || !tmpToolTipA.label) {
        tmpToolTipA = {
          label: gabaritFileTmp.templateGabaritLinkDefault[0].positionParameter.tooltipA.label,
          value: gabaritFileTmp.templateGabaritLinkDefault[0].positionParameter.tooltipA.value,
        };
      }
      if (!tmpToolTipA.value || !tmpToolTipA.label) {
        tmpToolTipA = {
          label: this.props.options.gabaritDefault.templateGabaritLinkDefault[0].positionParameter.tooltipA.label,
          value: this.props.options.gabaritDefault.templateGabaritLinkDefault[0].positionParameter.tooltipA.value,
        };
      }
      tmpToolTipB = { label: link.positionParameter.tooltipB.label, value: link.positionParameter.tooltipB.value };
      if (!tmpToolTipB.value || !tmpToolTipB.label) {
        tmpToolTipB = {
          label: gabaritFileTmp.templateGabaritLinkDefault[0].positionParameter.tooltipB.label,
          value: gabaritFileTmp.templateGabaritLinkDefault[0].positionParameter.tooltipB.value,
        };
      }
      if (!tmpToolTipB.value || !tmpToolTipB.label) {
        tmpToolTipB = {
          label: this.props.options.gabaritDefault.templateGabaritLinkDefault[0].positionParameter.tooltipB.label,
          value: this.props.options.gabaritDefault.templateGabaritLinkDefault[0].positionParameter.tooltipB.value,
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
            let remove = element.name?.split('{');
            const nameQuery: string[] =
              remove![1].split(',').map((value) => {
                return value.replace(/[\"{}]/gm, '');
              }) || [];

            let valid = false;
            let res = 0;
            const filters: Filtred[] = mainMetricPoint[index].filter!;
            for (const aQuery of nameQuery) {
              const keyValue: string[] = aQuery.split('=');
              for (const filter of filters) {
                if (keyValue.length === 2) {
                  if (keyValue[0] === filter.label && keyValue[1] === filter.value) {
                    res++;
                  }
                }
              }
            }
            if (res === filters.length) {
              valid = true;
            }
            if (valid) {
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
            let remove = element.name?.split('{');
            const nameQuery: string[] =
              remove![1].split(',').map((value) => {
                return value.replace(/[\"{}]/gm, '');
              }) || [];

            let valid = false;
            let res = 0;
            const filters: Filtred[] = mainMetricPoint[index].filter!;
            for (const aQuery of nameQuery) {
              const keyValue: string[] = aQuery.split('=');
              for (const filter of filters) {
                if (keyValue.length === 2) {
                  if (keyValue[0] === filter.label && keyValue[1] === filter.value) {
                    res++;
                  }
                }
              }
            }
            if (res === filters.length) {
              valid = true;
            }
            if (valid) {
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
      let pointInLinkWithId = '';
      let labelPointIn = pointInLink[coordindex].split('_')[0];
      this.props.options.arrayPoints.forEach((point, index) => {
        if (point.label.startsWith(labelPointIn)) {
          pointInLinkWithId = labelPointIn + '_' + index;
        }
      });

      let pointOutLinkWithId = '';
      let labelPointOut = pointOutLink[coordindex].split('_')[0];
      this.props.options.arrayPoints.forEach((point, index) => {
        if (point.label.startsWith(labelPointOut)) {
          pointOutLinkWithId = labelPointOut + '_' + index;
        }
      });

      let regionInLinkWithId = '';
      let labelRegionIn = regionInLink[coordindex].split('_')[0];
      this.props.options.regionCoordinateSpace.forEach((region, index) => {
        if (region.label.startsWith(labelPointIn)) {
          pointInLinkWithId = labelRegionIn + '_' + index;
        }
      });

      let regionOutLinkWithId = '';
      let labelRegionOut = regionOutLink[coordindex].split('_')[0];
      this.props.options.regionCoordinateSpace.forEach((region, index) => {
        if (region.label.startsWith(labelPointOut)) {
          pointOutLinkWithId = labelRegionOut + '_' + index;
        }
      });

      if (element.length > 0) {
        for (const pos of element) {
          filterLink.forEach((element, index) => {
            let pointInLinkWithId = pointInLink[index];
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

            let labelPointIn = pointInLink[index].split('_')[0];
            this.props.options.arrayPoints.forEach((point, index) => {
              if (point.label.startsWith(labelPointIn)) {
                pointInLinkWithId = labelPointIn + '_' + index;
              }
            });

            let labelPointOut = pointOutLink[index].split('_')[0];
            this.props.options.arrayPoints.forEach((point, index) => {
              if (point.label.startsWith(labelPointOut)) {
                pointOutLinkWithId = labelPointOut + '_' + index;
              }
            });

            let regionInLinkWithId = '';
            let labelRegionIn = regionInLink[index].split('_')[0];
            this.props.options.regionCoordinateSpace.forEach((region, index) => {
              if (region.label.startsWith(labelPointIn)) {
                pointInLinkWithId = labelRegionIn + '_' + index;
              }
            });

            let regionOutLinkWithId = '';
            let labelRegionOut = regionOutLink[index].split('_')[0];
            this.props.options.regionCoordinateSpace.forEach((region, index) => {
              if (region.label.startsWith(labelPointOut)) {
                pointOutLinkWithId = labelRegionOut + '_' + index;
              }
            });

            let maA = metricALink.length;
            let maB = metricBLink.length;
            if (maA > 0 && maB > 0) {
              let toLoad: OrientedLinkClass = new OrientedLinkClass(
                newID + 1,
                linkURLLink[index],
                metaLink[index],
                JSON.parse(JSON.stringify(lowerLimit)),
                labelLink[index] + '_' + newID,
                JSON.parse(JSON.stringify(textObj)),
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
                pointInLinkWithId,
                pointOutLinkWithId,
                regionInLinkWithId,
                regionOutLinkWithId,
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
              upId = this.checkCoordinateFilterLink(toLoad, this.props);
              if (upId) {
                newID++;
              }
            }
            if (!(maA > 0) && maB > 0) {
              let toLoad: OrientedLinkClass = new OrientedLinkClass(
                newID + 1,
                linkURLLink[index],
                metaLink[index],
                JSON.parse(JSON.stringify(lowerLimit)),
                labelLink[index] + '_' + newID,
                JSON.parse(JSON.stringify(textObj)),
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
                pointInLinkWithId,
                pointOutLinkWithId,
                regionInLinkWithId,
                regionOutLinkWithId,
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
              upId = this.checkCoordinateFilterLink(toLoad, this.props);
              if (upId) {
                newID++;
              }
            } else if (maA > 0 && !(maB > 0)) {
              let toLoad: OrientedLinkClass = new OrientedLinkClass(
                newID + 1,
                linkURLLink[index],
                metaLink[index],
                JSON.parse(JSON.stringify(lowerLimit)),
                labelLink[index] + '_' + newID,
                JSON.parse(JSON.stringify(textObj)),
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
                pointInLinkWithId,
                pointOutLinkWithId,
                regionInLinkWithId,
                regionOutLinkWithId,
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
              upId = this.checkCoordinateFilterLink(toLoad, this.props);
              if (upId) {
                newID++;
              }
            } else {
              let toLoad: OrientedLinkClass = new OrientedLinkClass(
                newID + 1,
                linkURLLink[index],
                metaLink[index],
                JSON.parse(JSON.stringify(lowerLimit)),
                labelLink[index] + '_' + newID,
                JSON.parse(JSON.stringify(textObj)),
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
                pointInLinkWithId,
                pointOutLinkWithId,
                regionInLinkWithId,
                regionOutLinkWithId,
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
              upId = this.checkCoordinateFilterLink(toLoad, this.props);
              if (upId) {
                newID++;
              }
            }
          });
        } /////////////////
      } else {
        const defaultPositionAX = (((parseInt(posALink[coordindex].x, 10) - xMinInitialSpace) / widthInitialSpace) * widthBackground).toString();
        const defaultPositionBX = (((parseInt(posBLink[coordindex].x, 10) - xMinInitialSpace) / widthInitialSpace) * widthBackground).toString();
        const defaultPositionCX = (((parseInt(posCLink[coordindex].x, 10) - xMinInitialSpace) / widthInitialSpace) * widthBackground).toString();
        const defaultPositionAY = (((parseInt(posALink[coordindex].y, 10) - yMinInitialSpace) / heightInitialSpace) * heightBackground).toString();
        const defaultPositionBY = (((parseInt(posBLink[coordindex].y, 10) - yMinInitialSpace) / heightInitialSpace) * heightBackground).toString();
        const defaultPositionCY = (((parseInt(posCLink[coordindex].y, 10) - yMinInitialSpace) / heightInitialSpace) * heightBackground).toString();
        let maA = metricALink.length;
        let maB = metricBLink.length;
        if (maA > 0 && maB > 0) {
          let toLoad: OrientedLinkClass = new OrientedLinkClass(
            newID + 1,
            linkURLLink[coordindex],
            metaLink[coordindex],
            JSON.parse(JSON.stringify(lowerLimit)),
            labelLink[coordindex] + '_' + newID,
            JSON.parse(JSON.stringify(textObj)),
            mainMetricALink[coordindex],
            metricALink[coordindex],
            colorMode,
            traceBack,
            traceBorder,
            positionParameterLink[coordindex],
            nameLink[coordindex],
            orientationLink[coordindex],
            sizeLink[coordindex],
            posALink[coordindex].x,
            posALink[coordindex].y,
            colorALink[coordindex],
            posBLink[coordindex].x,
            posBLink[coordindex].y,
            colorBLink[coordindex],
            valueMetricALink[coordindex],
            valueMetricBLink[coordindex],
            pointInLinkWithId,
            pointOutLinkWithId,
            regionInLinkWithId,
            regionOutLinkWithId,
            this.props.options.zIndexOrientedLink + 1,
            posCLink[coordindex].x,
            posCLink[coordindex].y,
            isIncurvedLink[coordindex],
            mainMetricBLink[coordindex],
            metricBLink[coordindex],
            widthInitialSpace.toString(),
            heightInitialSpace.toString(),
            defaultPositionAX,
            defaultPositionAY,
            defaultPositionBX,
            defaultPositionBY,
            defaultPositionCX,
            defaultPositionCY
          );
          upId = this.checkCoordinateFilterLink(toLoad, this.props);
          if (upId) {
            newID++;
          }
        }
        if (!(maA > 0) && maB > 0) {
          let toLoad: OrientedLinkClass = new OrientedLinkClass(
            newID + 1,
            linkURLLink[coordindex],
            metaLink[coordindex],
            JSON.parse(JSON.stringify(lowerLimit)),
            labelLink[coordindex] + '_' + newID,
            JSON.parse(JSON.stringify(textObj)),
            mainMetricALink[coordindex],
            [],
            colorMode,
            traceBack,
            traceBorder,
            positionParameterLink[coordindex],
            nameLink[coordindex],
            orientationLink[coordindex],
            sizeLink[coordindex],
            posALink[coordindex].x,
            posALink[coordindex].y,
            colorALink[coordindex],
            posBLink[coordindex].x,
            posBLink[coordindex].y,
            colorBLink[coordindex],
            valueMetricALink[coordindex],
            valueMetricBLink[coordindex],
            pointInLinkWithId,
            pointOutLinkWithId,
            regionInLinkWithId,
            regionOutLinkWithId,
            this.props.options.zIndexOrientedLink + 1,
            posCLink[coordindex].x,
            posCLink[coordindex].y,
            isIncurvedLink[coordindex],
            mainMetricBLink[coordindex],
            metricBLink[coordindex],
            widthInitialSpace.toString(),
            heightInitialSpace.toString(),
            defaultPositionAX,
            defaultPositionAY,
            defaultPositionBX,
            defaultPositionBY,
            defaultPositionCX,
            defaultPositionCY
          );
          upId = this.checkCoordinateFilterLink(toLoad, this.props);
          if (upId) {
            newID++;
          }
        } else if (maA > 0 && !(maB > 0)) {
          let toLoad: OrientedLinkClass = new OrientedLinkClass(
            newID + 1,
            linkURLLink[coordindex],
            metaLink[coordindex],
            JSON.parse(JSON.stringify(lowerLimit)),
            labelLink[coordindex] + '_' + newID,
            JSON.parse(JSON.stringify(textObj)),
            mainMetricALink[coordindex],
            metricALink[coordindex],
            colorMode,
            traceBack,
            traceBorder,
            positionParameterLink[coordindex],
            nameLink[coordindex],
            orientationLink[coordindex],
            sizeLink[coordindex],
            posALink[coordindex].x,
            posALink[coordindex].y,
            colorALink[coordindex],
            posBLink[coordindex].x,
            posBLink[coordindex].y,
            colorBLink[coordindex],
            valueMetricALink[coordindex],
            valueMetricBLink[coordindex],
            pointInLinkWithId,
            pointOutLinkWithId,
            regionInLinkWithId,
            regionOutLinkWithId,
            this.props.options.zIndexOrientedLink + 1,
            posCLink[coordindex].x,
            posCLink[coordindex].y,
            isIncurvedLink[coordindex],
            mainMetricBLink[coordindex],
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
          upId = this.checkCoordinateFilterLink(toLoad, this.props);
          if (upId) {
            newID++;
          }
        } else {
          let toLoad: OrientedLinkClass = new OrientedLinkClass(
            newID + 1,
            linkURLLink[coordindex],
            metaLink[coordindex],
            JSON.parse(JSON.stringify(lowerLimit)),
            labelLink[coordindex] + '_' + newID,
            JSON.parse(JSON.stringify(textObj)),
            mainMetricALink[coordindex],
            [],
            colorMode,
            traceBack,
            traceBorder,
            positionParameterLink[coordindex],
            nameLink[coordindex],
            orientationLink[coordindex],
            sizeLink[coordindex],
            posALink[coordindex].x,
            posALink[coordindex].y,
            colorALink[coordindex],
            posBLink[coordindex].x,
            posBLink[coordindex].y,
            colorBLink[coordindex],
            valueMetricALink[coordindex],
            valueMetricBLink[coordindex],
            pointInLinkWithId,
            pointOutLinkWithId,
            regionInLinkWithId,
            regionOutLinkWithId,
            this.props.options.zIndexOrientedLink + 1,
            posCLink[coordindex].x,
            posCLink[coordindex].y,
            isIncurvedLink[coordindex],
            mainMetricBLink[coordindex],
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
          upId = this.checkCoordinateFilterLink(toLoad, this.props);
          if (upId) {
            newID++;
          }
        }
      }
    });

    /*  */
    //Template region
    let filterRegion: Filtred[][] = []; //
    let posRegion: Coord4D[] = []; //

    let metaRegion: Metadata[][] = []; //
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
      metaRegion.push(this.metaConstructor(region.meta));
      if (!metaRegion[index]) {
        metaRegion[index] = this.metaConstructor(gabaritFileTmp.templateGabaritRegionDefault[0].meta);
      }
      if (!metaRegion[index]) {
        // changement
        // metaRegion[index] = this.props.options.gabaritDefault.templateGabaritRegionDefault[0].meta;
        metaRegion[index] = this.metaConstructor(this.props.options.gabaritDefault.templateGabaritRegionDefault[0].meta);
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
      if (typeof modeRegion[index] === 'undefined') {
        modeRegion[index] = Boolean(gabaritFileTmp.templateGabaritRegionDefault[0].mode);
      }
      if (typeof modeRegion[index] === 'undefined') {
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
      tmpToolTipA = { label: region.positionParameter.tooltipA.label, value: region.positionParameter.tooltipA.value };
      if (!tmpToolTipA.label || !tmpToolTipA.value) {
        tmpToolTipA = {
          label: gabaritFileTmp.templateGabaritRegionDefault[0].positionParameter.tooltipA.label,
          value: gabaritFileTmp.templateGabaritRegionDefault[0].positionParameter.tooltipA.value,
        };
      }
      if (!tmpToolTipA.label || !tmpToolTipA.value) {
        tmpToolTipA = {
          label: this.props.options.gabaritDefault.templateGabaritRegionDefault[0].positionParameter.tooltipA.label,
          value: this.props.options.gabaritDefault.templateGabaritRegionDefault[0].positionParameter.tooltipA.value,
        };
      }
      tmpToolTipB = { label: region.positionParameter.tooltipB.label, value: region.positionParameter.tooltipB.value };
      if (!tmpToolTipB.label || !tmpToolTipB.value) {
        tmpToolTipB = {
          label: gabaritFileTmp.templateGabaritRegionDefault[0].positionParameter.tooltipB.label,
          value: gabaritFileTmp.templateGabaritRegionDefault[0].positionParameter.tooltipB.value,
        };
      }
      if (!tmpToolTipB.label || !tmpToolTipB.value) {
        tmpToolTipB = {
          label: this.props.options.gabaritDefault.templateGabaritRegionDefault[0].positionParameter.tooltipB.label,
          value: this.props.options.gabaritDefault.templateGabaritRegionDefault[0].positionParameter.tooltipB.value,
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
          metaRegion[index],
          JSON.parse(JSON.stringify(lowerLimit)),
          labelRegion[index] + '_' + newID,
          JSON.parse(JSON.stringify(textObj)),
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
          metaRegion[index],
          JSON.parse(JSON.stringify(lowerLimit)),
          labelRegion[index] + '_' + newID,
          JSON.parse(JSON.stringify(textObj)),
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
            labelWidth={10}
            inputWidth={20}
            onChange={this.onGabaritListUrlChanged.bind(this)}
            type="string"
            value={url || ''}
          />
          <Button variant="danger" id={index.toString()} key={'ButtunDel' + index.toString()} onClick={this.gabaritDeletUrl.bind(this)}>
            Delete
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
            Delete
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
            Delete
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
    //this.props.options.saveGabaritURL = [];
    // this.props.options.saveGabaritURL.mono = [];
    this.props.onOptionsChange({ ...this.props.options, saveGabaritURL: this.props.options.saveGabaritURL });
  };

  printDefault = () => {
    console.log('gabaritDefault');
    console.log(this.props.options.gabaritDefault);
  };

  printPoint = () => {
    console.log('Point');
    console.log(this.props.options.arrayPoints);
    this.props.options.arrayPoints.forEach((element) => {
      console.log(element.mainMetric.filter);
    });
  };

  printRegion = () => {
    console.log('Region');
    console.log(this.props.options.regionCoordinateSpace);
  };

  printLink = () => {
    console.log('Link');
    console.log(this.props.options.arrayOrientedLinks);
  };

  printTemp = () => {
    console.log('gabaritDefault');
    console.log(this.props.options.saveGabaritFile);
  };

  render() {
    const { options } = this.props;
    return (
      <div>
        <Collapse isOpen={this.state.collapseGabaritDefault} label="Default Gabarit URL" onToggle={this.onToggleGabaritDefault}>
          <div style={{ display: 'flex' }}>
            <FormField
              label="Gabarit Default Url"
              labelWidth={10}
              key={'GabaritDefaultUrl'}
              inputWidth={20}
              onChange={this.onGabaritDefaultUrlChanged.bind(this)}
              type="string"
              value={options.saveGabaritDefaultUrl || ''}
            />
            <Button key={'AddGabaritDefaultUrl'} onClick={this.addGabaritDefaultUrlInput}>
              Finish
            </Button>
          </div>
          <this.gabaritDefaultDisplay list={options.gabaritDefault} />
        </Collapse>
        <Collapse isOpen={this.state.collapseSelectURL} label="Url List" onToggle={this.onToggleSelectUrl}>
          <div style={{ display: 'flex' }}>
            <FormField
              label="Gabarit Url"
              labelWidth={10}
              key={'GabaritUrl'}
              inputWidth={20}
              onChange={this.onGabaritUrlChanged.bind(this)}
              type="string"
              value={options.gabaritUrlInput || ''}
            />
            <Button key={'AddGabaritUrl'} onClick={this.addGabaritUrlInput}>
              Add
            </Button>
            <Button onClick={this.fetchGabarit}>Finish</Button>
          </div>
          {/* <div className="section gf-form-group"> */}
          <div>
            <this.gabaritUrlDisplay list={options.saveGabaritURL} />
            <Button key={'delAll'} onClick={this.delAll} variant="danger">
              Delete all urls
            </Button>
          </div>
        </Collapse>
        <Collapse isOpen={this.state.collapseGabarit} label="Gabarit List" onToggle={this.onToggleGabarit}>
          <this.gabaritDisplay list={options.saveGabaritFile} />
        </Collapse>
        {/* <Button onClick={this.printDefault}>Default</Button>
        <Button onClick={this.printPoint}>Point</Button>
        <Button onClick={this.printRegion}>Region</Button>
        <Button onClick={this.printLink}>Link</Button>
        <Button onClick={this.printTemp}>Temp</Button> */}
      </div>
    );
  }
}
export default Gabarit;
