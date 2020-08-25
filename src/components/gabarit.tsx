import React from 'react';
import { PanelEditorProps, SelectableValue } from '@grafana/data';
import { SimpleOptions, GabaritFile, Metric, GlobalGabaritDefault } from '../types';
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

import { PointClass } from 'Models/PointClass';
import { TextObject, GenerateTextObject } from 'Models/TextObjectClass';
import { Style } from 'components/Parametrage/styleComponent';
import { RegionClass, Coord4D } from 'Models/RegionClass';
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
  /**************************************FETCH******************************************/

  // fetchMono = () => {
  //     console.log(this.props.options.saveGabaritURL.mono)
  //     this.result = fetchConfFile(this.props.options.saveGabaritURL.mono);
  // }

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
      this.props.options.saveGabaritFile.push(newGabarit);
    }
  };

  fillGlobalGabaritDefault = (file: any) => {
    let defaultValue: GlobalGabaritDefault = {
      colorMode: file.default.colorMode,
      coords: file.default.coords,
      linkURL: file.default.linkURL,
      lowerLimit: file.default.lowerLimit,
      mainMetric: file.default.mainMetric,
      meta: file.default.meta,
      metrics: file.default.metrics,
      mode: file.default.mode,
      orientedLink: file.default.orientedLink,
      positionParameter: file.default.positionParameter,
      textObj: file.default.textObj,
      traceBack: file.default.traceBack,
      traceBorder: file.default.traceBorder,
    };
    return defaultValue;
  };

  fetchUrl = async (url: string) => {
    try {
      let file = {};
      // console.log(file);
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
    this.props.options.gabaritDefault = newGabarit;
  };
  // let regions: any = []
  // let points: any = []
  // let links: any = []
  // const defaultValue: GlobalGabaritDefault = this.fillGlobalGabaritDefault(file)

  // for (const region of file.templates.regions) {
  //   try {
  //     let file = {}
  //     // console.log(file);
  //     let response = await fetch(region)

  //     file = await response.json()
  //     regions.push(file)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  // for (const point of file.templates.points) {
  //   try {
  //     let file = {}
  //     // console.log(file);
  //     let response = await fetch(point)

  //     file = await response.json()
  //     points.push(file)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  // for (const link of file.templates.links) {
  //   try {
  //     let file = {}
  //     // console.log(file);
  //     let response = await fetch(link)

  //     file = await response.json()
  //     links.push(file)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  // this.fetchDataGabaritDefault(defaultValue, regions, points, links)

  // this.props.options.saveDefaultGabaritFile = newGabarit;
  // this.loaderGabarit(newGabarit, null);
  // this.props.options.saveDefaultGabaritFile.loaded = true;

  // fillRegionDefault = (uneRegion: any, defaultValue: GlobalGabaritDefault, id: number) => {
  //   let newRegion: RegionClass = initRegionCoordinateSpace(id);

  //   const coor: Coord4D = {
  //     xMin: uneRegion.coords.xMin.toString(),
  //     xMax: uneRegion.coords.xMax.toString(),
  //     yMin: uneRegion.coords.yMin.toString(),
  //     yMax: uneRegion.coords.yMax.toString(),
  //   };
  //   //console.log(coor);

  //   // add real value region and if is null replace by default gabarit
  //   newRegion.linkURL = uneRegion.linkURL ? uneRegion.linkURL : defaultValue.linkURL;
  //   newRegion.linkURL = uneRegion.meta ? uneRegion.meta : defaultValue.meta;
  //   newRegion.linkURL = uneRegion.lowerLimitClass ? uneRegion.lowerLimitClass : defaultValue.lowerLimit;
  //   newRegion.label = uneRegion.label;
  //   newRegion.textObj = uneRegion.textObj ? uneRegion.textObj : defaultValue.textObj;
  //   newRegion.mainMetric = uneRegion.mainMetric ? uneRegion.mainMetric : defaultValue.mainMetric;
  //   newRegion.metrics = uneRegion.metrics ? uneRegion.metrics : defaultValue.metrics;
  //   newRegion.colorMode = uneRegion.colorMode; // ? uneRegion.colorMode : defaultValue.colorMode;
  //   newRegion.traceBack = uneRegion.traceBack; // ? uneRegion.traceBack : defaultValue.traceBack;
  //   newRegion.traceBorder = uneRegion.traceBorder; // ? uneRegion.traceBorder : defaultValue.traceBorder;
  //   newRegion.positionParameter = uneRegion.positionParameter ? uneRegion.positionParameter : defaultValue.positionParameter;
  //   newRegion.idSVG = uneRegion.idSVG;
  //   newRegion.orientedLink = uneRegion.orientedLink ? uneRegion.orientedLink : defaultValue.orientedLink;
  //   newRegion.coords = coor;

  //   newRegion.coordsDefault = coor;
  //   newRegion.mode = uneRegion.mode;
  //   newRegion.img = uneRegion.img;
  //   newRegion.widthInitialSpaceDefault = uneRegion.widthInitialSpaceDefault;
  //   newRegion.heightInitialSpaceDefault = uneRegion.heightInitialSpaceDefault;

  //   //console.log(newRegion);

  //   const newAllRegion: RegionClass[] = this.props.options.regionCoordinateSpace.concat(newRegion);

  //   this.props.onOptionsChange({
  //     ...this.props.options,
  //     regionCoordinateSpace: newAllRegion,
  //   });
  //   //console.log(newAllRegion);
  // };

  // fillPointDefault = (unPoint: any, defaultValue: GlobalGabaritDefault, id: number) => {
  //   // let newPoint: PointClass = initPoint(id);
  //   // linkURL: LinkURLClass,
  //   // meta: string,
  //   // lowerLimitClass: LowerLimitClass[],
  //   // label: string,
  //   // textObj: TextObject,
  //   // mainMetric: Metric,
  //   // metrics: Metric[],
  //   // colorMode: boolean,
  //   // traceBack: boolean,
  //   // traceBorder: boolean,
  //   // positionParameter: PositionParameterClass,
  //   // name: string,
  //   // valueMetric: string,
  //   // drawGraphicMarker: SelectableValue<string>,
  //   // shape: SelectableValue<string>,
  //   // //sizeWidth: SelectableValue<string>,
  //   // sizeWidth: string,
  //   // sizeHeight: SelectableValue<string>,
  //   // rotateArrow: string,
  //   // positionShapeX: string,
  //   // positionShapeY: string,
  //   // color: string,
  //   // associateOrientedLinksIn: any[],
  //   // associateOrientedLinksOut: any[],
  //   // widthInitialSpaceDefault: string,
  //   // heightInitialSpaceDefault: string,
  //   // positionXDefault: string,
  //   // positionYDefault: string
  // };

  // fillLinkDefault = (unLink: any, defaultValue: GlobalGabaritDefault) => {
  //   // console.log(unLink);
  // };

  // fetchDataGabaritDefault = (defaultValue: GlobalGabaritDefault, regions: any, points: any, links: any) => {
  //   // regions

  //   let id = 0
  //   for (const line of this.props.options.regionCoordinateSpace) {
  //     if (id < line.id) {
  //       id = line.id
  //     }
  //   }

  //   for (const line of regions) {
  //     for (const uneRegion of line.regions) {
  //       this.fillRegionDefault(uneRegion, defaultValue, id)
  //       ++id
  //     }
  //   }

  //   // points

  //   let idPoint = 0
  //   for (const line of this.props.options.arrayPoints) {
  //     if (idPoint < line.id) {
  //       idPoint = line.id
  //     }
  //   }
  //   idPoint += 1

  //   for (const line of points) {
  //     for (const unPoint of line.points) {
  //       this.fillPointDefault(unPoint, defaultValue, idPoint)
  //       ++idPoint
  //     }
  //   }

  //   // links
  //   for (const line of links) {
  //     for (const unLink of line.links) {
  //       this.fillLinkDefault(unLink, defaultValue)
  //     }
  //   }
  // }

  fetchGabarit = () => {
    //this.result = fetchConfFile(this.props.options.saveGabaritURL);
    this.props.options.saveGabaritURL.forEach(async (url) => {
      try {
        // console.log(url);
        let file = {};
        // console.log(file);
        let response = await fetch(url);
        file = await response.json();
        this.loadGabarit(file, url);
      } catch (error) {
        console.error(error);
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
    };
    this.props.onOptionsChange({ ...this.props.options, gabaritDefault: this.props.options.gabaritDefault });
  };

  tempo = () => {
    // console.log(this.props.options.saveGabaritURL);
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
    let metaPoint: string[] = [];
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
      addColorBackElement: Boolean(gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.addColorBAckElement),
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
        addColorBackElement: Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.addColorBAckElement),
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
      addColorBackElement: Boolean(gabaritFileTmp.globalGabarit.textObject.generateAuxiliaryElement.addColorBAckElement),
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
        addColorBackElement: Boolean(this.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.addColorBAckElement),
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
          posPoint[index] = coordParse(this.props.options.gabaritDefault.templateGabaritPoint[0].xylabel);
        }
      } else {
        posPoint.push(coordParse(point.xylabelfix));
        if (!posPoint[index].y || !posPoint[index].x) {
          posPoint[index] = coordParse(this.props.options.gabaritDefault.templateGabaritPoint[0].xylabelfix);
        }
      }
      filterPoint.push(filterParse(point.filtered));
      if (!filterPoint[index][0]) {
        filterPoint[index] = filterParse(this.props.options.gabaritDefault.templateGabaritPoint[0].filtered);
      }
      namePoint.push(point.name);
      if (!namePoint[index]) {
        namePoint[index] = this.props.options.gabaritDefault.templateGabaritPoint[0].name;
      }
      metaPoint.push(point.meta);
      if (!metaPoint[index]) {
        metaPoint[index] = this.props.options.gabaritDefault.templateGabaritPoint[0].meta;
      }
      labelPoint.push(point.label); // c'est le label du point qui est afficher pour la selection
      if (!labelPoint[index]) {
        labelPoint[index] = this.props.options.gabaritDefault.templateGabaritPoint[0].label;
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
          key: this.props.options.gabaritDefault.templateGabaritPoint[0].mainMetric.key,
          unit: this.props.options.gabaritDefault.templateGabaritPoint[0].mainMetric.unit,
          format: this.props.options.gabaritDefault.templateGabaritPoint[0].mainMetric.format,
          keyValue: '',
          filter: filterPoint[index],
          refId: gabaritFileTmp.queryID,
          expr: '',
          returnQuery: [],
          manageValue: this.props.options.gabaritDefault.templateGabaritPoint[0].mainMetric.manageValue,
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
          label: this.props.options.gabaritDefault.templateGabaritPoint[0].drawGraphicMarker.label,
          value: this.props.options.gabaritDefault.templateGabaritPoint[0].drawGraphicMarker.value,
        };
      }
      shapePoint.push(point.shape);
      if (!shapePoint[index]) {
        shapePoint[index] = this.props.options.gabaritDefault.templateGabaritPoint[0].shape;
      }
      sizeWidthPoint.push(point.sizeWidth);
      if (!sizeWidthPoint[index]) {
        sizeWidthPoint[index] = this.props.options.gabaritDefault.templateGabaritPoint[0].sizeWidth;
      }
      sizeHeightPoint.push(point.sizeHeight);
      if (!sizeHeightPoint[index]) {
        sizeHeightPoint[index] = this.props.options.gabaritDefault.templateGabaritPoint[0].sizeHeight;
      }
      if (point.color.length !== 0) {
        colorPoint.push(point.color);
      } else {
        colorPoint.push(gabaritFileTmp.globalGabarit.defaultColor);
      }
      if (!colorPoint[index]) {
        colorPoint[index] = this.props.options.gabaritDefault.templateGabaritPoint[0].color;
      }
      associateOrientedLinksInPoint.push(point.associateOrientedLinksIn);
      if (!associateOrientedLinksInPoint[index]) {
        associateOrientedLinksInPoint[index] = this.props.options.gabaritDefault.templateGabaritPoint[0].associateOrientedLinksIn;
      }
      associateOrientedLinksOutPoint.push(point.associateOrientedLinksOut);
      if (!associateOrientedLinksOutPoint[index]) {
        associateOrientedLinksOutPoint[index] = this.props.options.gabaritDefault.templateGabaritPoint[0].associateOrientedLinksOut;
      }
      tmpToolTipA = { label: point.positionParameter.tooltipA, value: point.positionParameter.tooltipA };
      if (!tmpToolTipA.label || !tmpToolTipA.value) {
        tmpToolTipA = {
          label: this.props.options.gabaritDefault.templateGabaritPoint[0].positionParameter.tooltipA,
          value: this.props.options.gabaritDefault.templateGabaritPoint[0].positionParameter.tooltipA,
        };
      }
      tmpToolTipB = { label: point.positionParameter.tooltipB, value: point.positionParameter.tooltipB };
      if (!tmpToolTipB.label || !tmpToolTipB.value) {
        tmpToolTipB = {
          label: this.props.options.gabaritDefault.templateGabaritPoint[0].positionParameter.tooltipB,
          value: this.props.options.gabaritDefault.templateGabaritPoint[0].positionParameter.tooltipB,
        };
      }
      tmpLabelAPosition = coordParse(point.positionParameter.xylabelA);
      if (!tmpLabelAPosition.x || !tmpLabelAPosition.y) {
        tmpLabelAPosition = {
          x: this.props.options.gabaritDefault.templateGabaritPoint[0].positionParameter.xylabelA,
          y: this.props.options.gabaritDefault.templateGabaritPoint[0].positionParameter.xylabelA,
        };
      }
      tmpLabelBPosition = coordParse(point.positionParameter.xylabelB);
      if (!tmpLabelBPosition.x || !tmpLabelBPosition.y) {
        tmpLabelBPosition = {
          x: this.props.options.gabaritDefault.templateGabaritPoint[0].positionParameter.xylabelB,
          y: this.props.options.gabaritDefault.templateGabaritPoint[0].positionParameter.xylabelB,
        };
      }
      positionParameterPoint.push(
        new PositionParameterClass(tmpLabelAPosition.x, tmpLabelAPosition.y, tmpLabelBPosition.x, tmpLabelBPosition.y, tmpToolTipA, tmpToolTipB)
      );
      linkURLPoint.push(new LinkURLClass(point.linkURL.followLink, point.linkURL.hoveringTooltipLink, point.linkURL.hoveringTooltipText));
    });
    // console.log('posPoint:')
    // console.log(posPoint) //
    // console.log('filterPoint:')
    // console.log(filterPoint) //
    // console.log('namePoint:')
    // console.log(namePoint) //
    // console.log('metaPoint:')
    // console.log(metaPoint) //
    // console.log('labelPoint:')
    // console.log(labelPoint) //
    // console.log('mainMetricPoint:')
    // console.log(mainMetricPoint) //
    // console.log('metricPoint:')
    // console.log(metricPoint) // ----fail
    // console.log('valueMetricPoint:')
    // console.log(valueMetricPoint) //
    // console.log('drawGraphicMarkerPoint:')
    // console.log(drawGraphicMarkerPoint) //
    // console.log('shapePoint:')
    // console.log(shapePoint) //
    // console.log('sizeWidthPoint:')
    // console.log(sizeWidthPoint) //
    // console.log('sizeHeightPoint')
    // console.log(sizeHeightPoint) //
    // console.log('colorPoint')
    // console.log(colorPoint) //
    // console.log('associateOrientedLinksOutPoint:')
    // console.log(associateOrientedLinksOutPoint) // --------fail
    // console.log('associateOrientedLinksInPoint:')
    // console.log(associateOrientedLinksInPoint) // ---------fail
    // console.log('colorMode:')
    // console.log(colorMode) //
    // console.log('traceBack:')
    // console.log(traceBack) //
    // console.log('traceBorder:')
    // console.log(traceBorder) //
    // console.log('linkURLPoint')
    // console.log(linkURLPoint) // ------------------fail
    // console.log('positionParameterPoint')
    // console.log(positionParameterPoint) //

    let newID = 0;
    this.props.options.arrayPoints.forEach((element) => {
      newID++;
    });

    let labelCoordX: string[] = [];
    let labelCoordY: string[] = [];
    let labelCoord: LabelCoord2D[] = [];

    posPoint.forEach((pos, index) => {
      if (gabaritFileTmp.templateGabaritPoint[index].labelfix.toString() === 'false') {
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
    });
    labelCoordX.forEach((element, index) => {
      labelCoord.push({ x: labelCoordX[index], y: labelCoordY[index] });
    });

    if (labelCoord.length > 0) {
      for (const pos of labelCoord) {
        filterPoint.forEach((element, index) => {
          const defaultPositionX = (((parseInt(pos.x, 10) - xMinInitialSpace) / widthInitialSpace) * widthBackground).toString();
          const defaultPositionY = (((parseInt(pos.y, 10) - yMinInitialSpace) / heightInitialSpace) * heightBackground).toString();
          if (metricPoint.length > 0) {
            // console.log('1');
            let toLoad: PointClass = new PointClass(
              newID + 1,
              linkURLPoint[index],
              metaPoint[index],
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
            this.props.options.arrayPoints.push(toLoad);
          } else {
            let toLoad: PointClass = new PointClass(
              newID + 1,
              linkURLPoint[index],
              metaPoint[index],
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
            this.props.options.arrayPoints.push(toLoad);
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
            metaPoint[index],
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
          this.props.options.arrayPoints.push(toLoad);
        } else {
          let toLoad: PointClass = new PointClass(
            newID + 1,
            linkURLPoint[index],
            metaPoint[index],
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
          this.props.options.arrayPoints.push(toLoad);
        }
      });
    }

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
          posALink[index] = coordParse(this.props.options.gabaritDefault.templateGabaritLink[0].xylabelA);
        }
        posBLink.push(coordParse(link.xylabelB));
        if (!posBLink[index].x || !posBLink[index].y) {
          posBLink[index] = coordParse(this.props.options.gabaritDefault.templateGabaritLink[0].xylabelB);
        }
        posCLink.push(coordParse(link.xylabelC));
        if (!posCLink[index].x || !posCLink[index].y) {
          posCLink[index] = coordParse(this.props.options.gabaritDefault.templateGabaritLink[0].xylabelC);
        }
      } else {
        posALink.push(coordParse(link.xylabelfixA));
        if (!posALink[index].x || !posALink[index].y) {
          posALink[index] = coordParse(this.props.options.gabaritDefault.templateGabaritLink[0].xylabelfixA);
        }
        posBLink.push(coordParse(link.xylabelfixB));
        if (!posBLink[index].x || !posBLink[index].y) {
          posBLink[index] = coordParse(this.props.options.gabaritDefault.templateGabaritLink[0].xylabelfixB);
        }
        posCLink.push(coordParse(link.xylabelfixC));
        if (!posCLink[index].x || !posCLink[index].y) {
          posCLink[index] = coordParse(this.props.options.gabaritDefault.templateGabaritLink[0].xylabelfixC);
        }
      }
      filterLink.push(filterParse(link.filtered));
      if (!filterLink[index]) {
        filterLink[index] = filterParse(this.props.options.gabaritDefault.templateGabaritLink[0].filtered);
      }
      nameLink.push(link.name);
      if (!nameLink[index]) {
        nameLink[index] = this.props.options.gabaritDefault.templateGabaritLink[0].name;
      }
      metaLink.push(link.meta);
      if (!metaLink[index]) {
        metaLink[index] = this.props.options.gabaritDefault.templateGabaritLink[0].meta;
      }
      labelLink.push(link.label);
      if (!labelLink[index]) {
        labelLink[index] = this.props.options.gabaritDefault.templateGabaritLink[0].label;
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
          key: this.props.options.gabaritDefault.templateGabaritLink[0].mainMetric.key,
          unit: this.props.options.gabaritDefault.templateGabaritLink[0].mainMetric.unit,
          format: this.props.options.gabaritDefault.templateGabaritLink[0].mainMetric.format,
          keyValue: '',
          filter: filterLink[index],
          refId: gabaritFileTmp.queryID,
          expr: '',
          returnQuery: [],
          manageValue: this.props.options.gabaritDefault.templateGabaritLink[0].mainMetric.manageValue,
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
          key: this.props.options.gabaritDefault.templateGabaritLink[0].mainMetric.key,
          unit: this.props.options.gabaritDefault.templateGabaritLink[0].mainMetric.unit,
          format: this.props.options.gabaritDefault.templateGabaritLink[0].mainMetric.format,
          keyValue: '',
          filter: filterLink[index],
          refId: gabaritFileTmp.queryID,
          expr: '',
          returnQuery: [],
          manageValue: this.props.options.gabaritDefault.templateGabaritLink[0].mainMetric.manageValue,
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
        valueMetricALink[index] = this.props.options.gabaritDefault.templateGabaritLink[0].valueMainMetricA;
      }
      valueMetricBLink.push(link.valueMainMetricB);
      if (!valueMetricBLink[index]) {
        valueMetricBLink[index] = this.props.options.gabaritDefault.templateGabaritLink[0].valueMainMetricB;
      }
      sizeLink.push(link.size);
      if (!sizeLink[index]) {
        sizeLink[index] = this.props.options.gabaritDefault.templateGabaritLink[0].size;
      }
      if (link.colorCoordinateA.length !== 0) {
        colorALink.push(link.colorCoordinateA);
        colorBLink.push(link.colorCoordinateB);
      } else {
        colorALink.push(gabaritFileTmp.globalGabarit.defaultColor);
        colorBLink.push(gabaritFileTmp.globalGabarit.defaultColor);
      }
      if (!colorALink[index]) {
        colorALink[index] = this.props.options.gabaritDefault.templateGabaritLink[0].colorCoordinateA;
      }
      if (!colorBLink[index]) {
        colorBLink[index] = this.props.options.gabaritDefault.templateGabaritLink[0].colorCoordinateB;
      }
      tmpToolTipA = { label: link.positionParameter.tooltipA, value: link.positionParameter.tooltipA };
      if (!tmpToolTipA.value || !tmpToolTipA.label) {
        tmpToolTipA = {
          label: this.props.options.gabaritDefault.templateGabaritLink[0].positionParameter.tooltipA,
          value: this.props.options.gabaritDefault.templateGabaritLink[0].positionParameter.tooltipA,
        };
      }
      tmpToolTipB = { label: link.positionParameter.tooltipB, value: link.positionParameter.tooltipB };
      if (!tmpToolTipB.value || !tmpToolTipB.label) {
        tmpToolTipB = {
          label: this.props.options.gabaritDefault.templateGabaritLink[0].positionParameter.tooltipB,
          value: this.props.options.gabaritDefault.templateGabaritLink[0].positionParameter.tooltipB,
        };
      }
      tmpLabelAPosition = coordParse(link.positionParameter.xylabelA);
      if (!tmpLabelAPosition) {
        tmpLabelAPosition = coordParse(this.props.options.gabaritDefault.templateGabaritLink[0].positionParameter.xylabelA);
      }
      tmpLabelBPosition = coordParse(link.positionParameter.xylabelB);
      if (!tmpLabelBPosition) {
        tmpLabelBPosition = coordParse(this.props.options.gabaritDefault.templateGabaritLink[0].positionParameter.xylabelB);
      }
      positionParameterLink.push(
        new PositionParameterClass(tmpLabelAPosition.x, tmpLabelAPosition.y, tmpLabelBPosition.x, tmpLabelBPosition.y, tmpToolTipA, tmpToolTipB)
      );
      linkURLLink.push(new LinkURLClass(link.linkURL.followlink, link.linkURL.hoveringTooltiplink, link.linkURL.hoveringTooltipTex));
      if (!linkURLLink[index].followLink) {
        linkURLLink[index] = new LinkURLClass(
          this.props.options.gabaritDefault.templateGabaritLink[0].linkURL.followlink,
          this.props.options.gabaritDefault.templateGabaritLink[0].linkURL.hoveringTooltiplink,
          this.props.options.gabaritDefault.templateGabaritLink[0].linkURL.hoveringTooltipTex
        );
      }
      orientationLink.push(link.orientationLink);
      if (!orientationLink[index]) {
        orientationLink[index] = this.props.options.gabaritDefault.templateGabaritLink[0].orientationLink;
      }
      pointInLink.push(link.pointIn);
      if (!pointInLink[index]) {
        pointInLink[index] = this.props.options.gabaritDefault.templateGabaritLink[0].pointIn;
      }
      pointOutLink.push(link.pointOut);
      if (!pointOutLink[index]) {
        pointOutLink[index] = this.props.options.gabaritDefault.templateGabaritLink[0].pointOut;
      }
      regionInLink.push(link.regionIn);
      if (!regionInLink[index]) {
        regionInLink[index] = this.props.options.gabaritDefault.templateGabaritLink[0].regionIn;
      }
      regionOutLink.push(link.regionOut);
      if (!regionOutLink[index]) {
        regionOutLink[index] = this.props.options.gabaritDefault.templateGabaritLink[0].regionOut;
      }
      isIncurvedLink.push({ label: link.isIncurved.label, value: Boolean(link.isIncurved.value) });
      if (!isIncurvedLink[index].label || !isIncurvedLink[index].value) {
        isIncurvedLink[index] = {
          label: this.props.options.gabaritDefault.templateGabaritLink[0].isIncurved.label,
          value: Boolean(this.props.options.gabaritDefault.templateGabaritLink[0].isIncurved.value),
        };
      }
    });

    newID = 0;
    this.props.options.arrayOrientedLinks.forEach((element) => {
      newID++;
    });

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
          metaLink[index],
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
        this.props.options.arrayOrientedLinks.push(toLoad);
      }
      if (!(maA > 0) && maB > 0) {
        let toLoad: OrientedLinkClass = new OrientedLinkClass(
          newID + 1,
          linkURLLink[index],
          metaLink[index],
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
        this.props.options.arrayOrientedLinks.push(toLoad);
      } else if (maA > 0 && !(maB > 0)) {
        let toLoad: OrientedLinkClass = new OrientedLinkClass(
          newID + 1,
          linkURLLink[index],
          metaLink[index],
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
        this.props.options.arrayOrientedLinks.push(toLoad);
      } else {
        let toLoad: OrientedLinkClass = new OrientedLinkClass(
          newID + 1,
          linkURLLink[index],
          metaLink[index],
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
        //console.log(toLoad);
        this.props.options.arrayOrientedLinks.push(toLoad);
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
          posRegion[index] = coordParseRegion(this.props.options.gabaritDefault.templateGabaritRegion[0].xylabel);
        }
      } else {
        posRegion.push(coordParseRegion(region.xylabelfix));
        if (!posRegion[index].xMax || !posRegion[index].xMin || !posRegion[index].yMax || !posRegion[index].yMin) {
          posRegion[index] = coordParseRegion(this.props.options.gabaritDefault.templateGabaritRegion[0].xylabelfix);
        }
      }
      filterRegion.push(filterParseRegion(region.filtered));
      if (!filterRegion[index]) {
        filterRegion[index] = filterParseRegion(this.props.options.gabaritDefault.templateGabaritRegion[0].filtered);
      }
      linkURLRegion.push(new LinkURLClass(region.linkURL.followlink, region.linkURL.hoveringTooltiplink, region.linkURL.hoveringTooltipTex));
      if (!linkURLRegion[index].followLink) {
        linkURLRegion[index] = new LinkURLClass(
          this.props.options.gabaritDefault.templateGabaritRegion[0].linkURL.followlink,
          this.props.options.gabaritDefault.templateGabaritRegion[0].linkURL.hoveringTooltiplink,
          this.props.options.gabaritDefault.templateGabaritRegion[0].linkURL.hoveringTooltipTex
        );
      }
      metaRegion.push(region.meta);
      if (!metaRegion[index]) {
        metaRegion[index] = this.props.options.gabaritDefault.templateGabaritRegion[0].meta;
      }
      labelRegion.push(region.label);
      if (!labelRegion[index]) {
        labelRegion[index] = this.props.options.gabaritDefault.templateGabaritRegion[0].label;
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
          key: this.props.options.gabaritDefault.templateGabaritRegion[0].mainMetric.key,
          unit: this.props.options.gabaritDefault.templateGabaritRegion[0].mainMetric.unit,
          format: this.props.options.gabaritDefault.templateGabaritRegion[0].mainMetric.format,
          keyValue: '',
          filter: filterRegion[index],
          refId: gabaritFileTmp.queryID,
          expr: '',
          returnQuery: [],
          manageValue: this.props.options.gabaritDefault.templateGabaritRegion[0].mainMetric.manageValue,
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
        modeRegion[index] = Boolean(this.props.options.gabaritDefault.templateGabaritRegion[0].mode);
      }
      idSVGRegion.push(region.idSVG);
      if (!idSVGRegion[index]) {
        idSVGRegion[index] = this.props.options.gabaritDefault.templateGabaritRegion[0].idSVG;
      }
      imgRegion.push(region.img);
      if (!imgRegion[index]) {
        imgRegion[index] = this.props.options.gabaritDefault.templateGabaritRegion[0].img;
      }
      tmpToolTipA = { label: region.positionParameter.tooltipA, value: region.positionParameter.tooltipA };
      if (!tmpToolTipA.label || !tmpToolTipA.value) {
        tmpToolTipA = {
          label: this.props.options.gabaritDefault.templateGabaritRegion[0].positionParameter.tooltipA,
          value: this.props.options.gabaritDefault.templateGabaritRegion[0].positionParameter.tooltipA,
        };
      }
      tmpToolTipB = { label: region.positionParameter.tooltipB, value: region.positionParameter.tooltipB };
      if (!tmpToolTipB.label || !tmpToolTipB.value) {
        tmpToolTipB = {
          label: this.props.options.gabaritDefault.templateGabaritRegion[0].positionParameter.tooltipB,
          value: this.props.options.gabaritDefault.templateGabaritRegion[0].positionParameter.tooltipB,
        };
      }
      tmpLabelAPosition = coordParse(region.positionParameter.xylabelA);
      if (!tmpLabelAPosition) {
        tmpLabelAPosition = coordParse(this.props.options.gabaritDefault.templateGabaritRegion[0].positionParameter.xylabelA);
      }
      tmpLabelBPosition = coordParse(region.positionParameter.xylabelB);
      if (!tmpLabelBPosition) {
        tmpLabelBPosition = coordParse(this.props.options.gabaritDefault.templateGabaritRegion[0].positionParameter.xylabelB);
      }
      positionParameterRegion.push(
        new PositionParameterClass(tmpLabelAPosition.x, tmpLabelAPosition.y, tmpLabelBPosition.x, tmpLabelBPosition.y, tmpToolTipA, tmpToolTipB)
      );
      orientedLinkAssociate.push(region.orientedLink);
      if (!orientedLinkAssociate[index]) {
        orientedLinkAssociate[index] = this.props.options.gabaritDefault.templateGabaritRegion[0].orientedLink;
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
          metaRegion[index],
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

  // gabaritFileTmp.templateGabaritRegion.forEach((region, index) => {
  //   if (region.labelfix.toString() === 'false') {
  //     posARegion.push(coordParse(region.xylabel));
  //     posBRegion.push(coordParse(region.xylabel0));
  //   } else {
  //     posARegion.push(coordParse(region.xylabelfix));
  //     posBRegion.push(coordParse(region.xylabelfix0));
  //   }
  //   filterRegion.push(filterParse(region.filtered));
  //   metaRegion.push(region.meta);
  //   labelRegion.push(region.label);
  //   mainMetricRegion.push({
  //     key: region.mainMetric.key,
  //     unit: region.mainMetric.unit,
  //     format: region.mainMetric.format,
  //     keyValue: '',
  //     filter: filterRegion[index],
  //     refId: gabaritFileTmp.queryID,
  //     expr: '',
  //     returnQuery: [],
  //     manageValue: region.mainMetric.manageValue,
  //   });
  //   if (mainMetricPoint[index].refId === null) {
  //     mainMetricPoint[index].refId = 'A';
  //   }
  //   region.metrics.forEach(element => {
  //     metricRegion[index].push(element);
  //   });
  //   //metric todo
  //   tmpToolTipA = { label: region.positionParameter.tooltipA, value: region.positionParameter.tooltipA };
  //   tmpToolTipB = { label: region.positionParameter.tooltipB, value: region.positionParameter.tooltipB };
  //   tmpLabelAPosition = coordParse(region.positionParameter.xylabelA);
  //   tmpLabelBPosition = coordParse(region.positionParameter.xylabelB);
  //   positionParameterRegion.push(
  //     new PositionParameterClass(tmpLabelAPosition.x, tmpLabelAPosition.y, tmpLabelBPosition.x, tmpLabelBPosition.y, tmpToolTipA, tmpToolTipB)
  //   );
  //   linkURLRegion.push(new LinkURLClass(region.linkURL.followRegion, region.linkURL.hoveringTooltipRegion, region.linkURL.hoveringTooltipTex));
  //   idSVGRegion.push(region.idSVG);
  //   modeRegion.push(Boolean(region.mode));
  //   imgRegion.push(region.img);
  //   const coor: Coord4D = { xMax: '', xMin: '', yMax: '', yMin: '' };
  //   let id = -1;
  //   for (const line of this.props.options.regionCoordinateSpace) {
  //     if (line.id > id) {
  //       id = line.id;
  //     }
  //   }
  //   id += 1;

  //   const mainMetricRR: Metric = { key: '', keyValue: '', refId: '', expr: '', manageValue: 'avg', format: '', unit: '', returnQuery: [] };

  //     let regionPush: RegionClass = new RegionClass(
  //       id,
  //     linkURL,
  //     meta,
  //     uneRegion.lowerLimitClass,
  //     uneRegion.label,
  //     uneRegion.textObj,
  //     uneRegion.mainMetric,
  //     uneRegion.metrics,
  //     uneRegion.colorMode,
  //     uneRegion.traceBack,
  //     uneRegion.traceBorder,
  //     uneRegion.positionParameter,
  //     uneRegion.idSVG,
  //     uneRegion.orientedLink,
  //     {
  //     xMin: uneRegion.coords.xMin.toString(),
  //     xMax: uneRegion.coords.xMax.toString(),
  //     yMin: uneRegion.coords.yMin.toString(),
  //     yMax: uneRegion.coords.yMax.toString(),
  // },
  // {
  //     xMin: uneRegion.coords.xMin.toString(),
  //     xMax: uneRegion.coords.xMax.toString(),
  //     yMin: uneRegion.coords.yMin.toString(),
  //     yMax: uneRegion.coords.yMax.toString(),
  // },
  // uneRegion.mode,
  // uneRegion.img,
  // uneRegion.widthInitialSpaceDefault,
  // uneRegion.heightInitialSpaceDefault
  // );
  //     );
  //     console.log(regionPush);

  //     const newRegion: RegionClass[] = this.props.options.regionCoordinateSpace;
  //     newRegion.push(regionPush);
  //     this.props.onOptionsChange({
  //       ...this.props.options,
  //       regionCoordinateSpace: newRegion,
  //     });
  //   });
  //   if (idx) {
  //     this.props.options.saveGabaritFile[idx].loaded = true;
  //   }
  // };

  //   const nn: RegionClass = new RegionClass(
  //     id,
  //     uneRegion.linkURL,
  //     uneRegion.meta,
  //     uneRegion.lowerLimitClass,
  //     uneRegion.label,
  //     uneRegion.textObj,
  //     uneRegion.mainMetric,
  //     uneRegion.metrics,
  //     uneRegion.colorMode,
  //     uneRegion.traceBack,
  //     uneRegion.traceBorder,
  //     uneRegion.positionParameter,
  //     uneRegion.idSVG,
  //     uneRegion.orientedLink,
  //     {
  //     xMin: uneRegion.coords.xMin.toString(),
  //     xMax: uneRegion.coords.xMax.toString(),
  //     yMin: uneRegion.coords.yMin.toString(),
  //     yMax: uneRegion.coords.yMax.toString(),
  // },
  // {
  //     xMin: uneRegion.coords.xMin.toString(),
  //     xMax: uneRegion.coords.xMax.toString(),
  //     yMin: uneRegion.coords.yMin.toString(),
  //     yMax: uneRegion.coords.yMax.toString(),
  // },
  // uneRegion.mode,
  // uneRegion.img,
  // uneRegion.widthInitialSpaceDefault,
  // uneRegion.heightInitialSpaceDefault
  // );

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

  toDel = () => {
    // let generateValue: GenerateTextObject = {
    //   legendElement: "uneLegend",
    //   numericFormatElement: "?",
    //   unit: "Hz",
    //   displayObjectInTooltip: Boolean("true"),
    //   addColorTextElement: Boolean("true"),
    //   colorTextElement: "false",
    //   addColorBackElement: Boolean("gabaritFileTmp.globalGabarit.textObject.valueGenerateObjectText.addColorBAckElement"),
    //   colorBackElement: "#FF00FF",
    // };
    // let generateValueEmpty: GenerateTextObject = {
    //   legendElement: '',
    //   numericFormatElement: '',
    //   unit: '',
    //   displayObjectInTooltip: Boolean(''),
    //   addColorTextElement: Boolean(''),
    //   colorTextElement: '',
    //   addColorBackElement: Boolean('.globalGabarit.textObject.valueGenerateObjectText.addColorBAckElement'),
    //   colorBackElement: '',
    // };

    // console.log(this.props.options.arrayPoints);
    console.log('Point ------------');
    console.log(this.props.options.arrayPoints);
    console.log('Link ------------');
    console.log(this.props.options.arrayOrientedLinks);
    console.log('Region ------------');
    console.log(this.props.options.regionCoordinateSpace);
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
          <Button onClick={this.toDel}>toDel</Button>
        </Collapse>
        <Collapse isOpen={this.state.collapseGabarit} label="Gabarit List" onToggle={this.onToggleGabarit}>
          <this.gabaritDisplay list={options.saveGabaritFile} />
        </Collapse>
      </div>
    );
  }
}
export default Gabarit;
