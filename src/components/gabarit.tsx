import React from 'react'
import { PanelEditorProps, SelectableValue } from '@grafana/data'
import { SimpleOptions, GabaritFile, Metric } from '../types'
import { FormField, Button, Collapse, FormLabel, Select } from '@grafana/ui'
//import /*pointClassImport, regionClassImport, gabaritPointClassImport, gabaritRegionClassImport */ '../../config/testVariable';
import { coordParse, LabelCoord2D, Filtred, filterParse } from '../Functions/loaderGabarit'
//import { LinkURLClass } from 'Models/LinkURLClass';
//import { PositionParameterClass } from 'Models/PositionParameterClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass'
import { PositionParameterClass } from 'Models/PositionParameterClass'
import { LinkURLClass } from 'Models/LinkURLClass'
//import { LowerLimitClass } from 'Models/LowerLimitClass';
//import { TextObject } from 'Models/TextObjectClass';

import { PointClass } from 'Models/PointClass'

interface Props extends PanelEditorProps<SimpleOptions> {}

/*
 * TODO
 */

interface State {
  selectQuerryID: Array<SelectableValue<string>>
  collapseSelectURL: boolean
  collapseGabarit: boolean
}

// interface SelectQueryID {
//   value: string;
//   label: string;
// }

class Gabarit extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
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
    }
  }
  result: any[] = []
  /**************************************FETCH******************************************/

  // fetchMono = () => {
  //     console.log(this.props.options.saveGabaritURL.mono)
  //     this.result = fetchConfFile(this.props.options.saveGabaritURL.mono);
  // }

  /**************************************CATCH******************************************/

  onChangeSelectQuerryID = (value: SelectableValue<string>, index: number) => {
    let newGabaritFile: GabaritFile[] = this.props.options.saveGabaritFile
    newGabaritFile[index].queryID = value.value!
    this.props.onOptionsChange({
      ...this.props.options,
      saveGabaritFile: newGabaritFile,
    })
  }

  onToggleSelectUrl = (isOpen: boolean): void => {
    this.setState({
      collapseSelectURL: isOpen,
    })
  }

  UrlValidator = (url: string) => {
    let result = true
    for (let index in this.props.options.saveGabaritURL) {
      if (this.props.options.saveGabaritURL[index] === url) {
        result = false
        break
      }
    }
    return result
  }

  /**************************************LOADER******************************************/

  loadGabarit = (file: any, url: string) => {
    let name = url.split('/')
    let newGabarit: GabaritFile = {
      queryID: 'null',
      fileName: name[name.length - 1],
      globalGabarit: file.global,
      templateGabaritPoint: [],
      templateGabaritRegion: [],
      templateGabaritLink: [],
    }
    console.log(name[name.length - 1])
    file.templates.forEach((gab: any) => {
      if (gab.type === 'point') {
        newGabarit.templateGabaritPoint.push(gab)
      }
      if (gab.type === 'region') {
        newGabarit.templateGabaritRegion.push(gab)
      }
      if (gab.type === 'link') {
        newGabarit.templateGabaritLink.push(gab)
      }
    })
    this.props.options.saveGabaritFile.push(newGabarit)
  }

  fetchGabarit = () => {
    //this.result = fetchConfFile(this.props.options.saveGabaritURL);
    this.props.options.saveGabaritURL.forEach(async url => {
      try {
        // console.log(url);
        let file = {}
        // console.log(file);
        let response = await fetch(url)
        file = await response.json()
        this.loadGabarit(file, url)
      } catch (error) {
        console.error(error)
      }
    })
  }

  /**************************************INPUT******************************************/

  onToggleGabaritUrl = (isOpen: boolean): void => {
    this.setState({
      collapseSelectURL: isOpen,
    })
  }

  onToggleGabarit = (isOpen: boolean): void => {
    this.setState({
      collapseGabarit: isOpen,
    })
  }

  onGabaritUrlChanged = (event: { currentTarget: HTMLInputElement }) => {
    let newData = ''
    newData = event.currentTarget.value
    this.props.onOptionsChange({ ...this.props.options, gabaritUrlInput: newData })
  }

  onGabaritListUrlChanged = (event: { currentTarget: HTMLInputElement }) => {
    let newData: string[] = this.props.options.saveGabaritURL.slice()
    newData[parseInt(event.currentTarget.id, 10)] = event.currentTarget.value
    this.props.options.saveGabaritURL = newData
    this.props.onOptionsChange({ ...this.props.options, saveGabaritURL: this.props.options.saveGabaritURL })
  }

  addGabaritUrlInput = (onClick: { currentTarget: HTMLButtonElement }) => {
    let valid: boolean = true
    this.props.options.saveGabaritURL.forEach(element => {
      if (this.props.options.gabaritUrlInput === element) {
        valid = false
      }
    })
    if (valid === true) {
      this.props.options.saveGabaritURL.push(this.props.options.gabaritUrlInput)
      this.props.options.gabaritUrlInput = ''
      this.props.onOptionsChange({ ...this.props.options, saveGabaritURL: this.props.options.saveGabaritURL })
    }
  }

  gabaritDeletUrl = (onClick: { currentTarget: HTMLButtonElement }) => {
    const isUrl = (url: string) => url === this.props.options.saveGabaritURL[parseInt(onClick.currentTarget.id, 10)]
    this.props.options.saveGabaritURL.splice(this.props.options.saveGabaritURL.findIndex(isUrl), 1)
    this.props.onOptionsChange({ ...this.props.options, saveGabaritURL: this.props.options.saveGabaritURL })
  }

  tempo = () => {
    // console.log(this.props.options.saveGabaritURL);
  }

  /**************************************LOADER******************************************/

  loaderGabarit = (onClick: { currentTarget: HTMLButtonElement }) => {
    let tmpLabelAPosition: LabelCoord2D
    let tmpLabelBPosition: LabelCoord2D
    let tmpToolTipA: SelectableValue<string>
    let tmpToolTipB: SelectableValue<string>
    /* Point */
    //template
    let filterPoint: Filtred[][] = []
    let posPoint: LabelCoord2D[] = []
    let namePoint: string[] = []
    let metaPoint: string[] = []
    let labelPoint: string[] = []
    let positionParameterPoint: PositionParameterClass[] = []
    let mainMetricPoint: Metric[] = []
    let metricPoint: Metric[][] = []
    let linkURLPoint: LinkURLClass[] = []
    let valueMetricPoint: string[] = []
    let drawGraphicMarkerPoint: Array<SelectableValue<string>> = []
    let shapePoint: Array<SelectableValue<string>> = []
    let sizeWidthPoint: Array<SelectableValue<string>> = []
    let sizeHeightPoint: Array<SelectableValue<string>> = []
    let colorPoint: string[] = []
    let associateOrientedLinksInPoint: OrientedLinkClass[][] = []
    let associateOrientedLinksOutPoint: OrientedLinkClass[][] = []
    //global
    //let lowerLimit: LowerLimitClass;
    //let textObject: TextObject;
    let colorMode: boolean
    let traceBack: boolean
    let traceBorder: boolean
    /* Region */
    //Template

    const gabaritFileTmp: GabaritFile = this.props.options.saveGabaritFile[parseInt(onClick.currentTarget.id, 10)]
    colorMode = Boolean(gabaritFileTmp.globalGabarit.colorMode)
    traceBack = Boolean(gabaritFileTmp.globalGabarit.traceBack)
    traceBorder = Boolean(gabaritFileTmp.globalGabarit.traceBorder)
    gabaritFileTmp.templateGabaritPoint.forEach((point, index) => {
      if (point.labelfix.toString() === 'false') {
        posPoint.push(coordParse(point.xylabel))
      } else {
        posPoint.push(coordParse(point.xylabelfix))
      }
      filterPoint.push(filterParse(point.filtered))
      namePoint.push(point.name)
      metaPoint.push(point.meta)
      labelPoint.push(point.label)
      mainMetricPoint.push(point.mainMetric)
      mainMetricPoint[index].filter! = filterPoint[index]
      mainMetricPoint[index].refId = gabaritFileTmp.queryID
      if (mainMetricPoint[index].refId === null) {
        mainMetricPoint[index].refId = 'A'
      }
      point.metrics.forEach(element => {
        metricPoint[index].push(element)
      })
      valueMetricPoint.push(point.valueMetric)
      drawGraphicMarkerPoint.push(point.drawGraphicMarker)
      shapePoint.push(point.shape)
      sizeWidthPoint.push(point.sizeWidth)
      sizeHeightPoint.push(point.sizeHeight)
      if (point.color.length !== 0) {
        colorPoint.push(point.color)
      } else {
        colorPoint.push(gabaritFileTmp.globalGabarit.defaultColor)
      }
      associateOrientedLinksInPoint.push(point.associateOrientedLinksIn)
      associateOrientedLinksOutPoint.push(point.associateOrientedLinksOut)
      tmpToolTipA = { label: point.positionParameter.tooltipA, value: point.positionParameter.tooltipA }
      tmpToolTipB = { label: point.positionParameter.tooltipB, value: point.positionParameter.tooltipB }
      tmpLabelAPosition = coordParse(point.positionParameter.xylabelA)
      tmpLabelBPosition = coordParse(point.positionParameter.xylabelB)
      positionParameterPoint.push(
        new PositionParameterClass(tmpLabelAPosition.x, tmpLabelAPosition.y, tmpLabelBPosition.x, tmpLabelBPosition.y, tmpToolTipA, tmpToolTipB)
      )

      linkURLPoint.push(new LinkURLClass(point.linkURL.followLink, point.linkURL.hoveringTooltipLink, point.linkURL.hoveringTooltipTex))
    })
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

    let newID = 0
    this.props.options.arrayPoints.forEach(element => {
      newID++
    })

    filterPoint.forEach((element, index) => {
      if (metricPoint.length > 0) {
        let toLoad: PointClass = new PointClass(
          newID + 1,
          linkURLPoint[index],
          metaPoint[index],
          gabaritFileTmp.globalGabarit.lowerLimit,
          labelPoint[index],
          gabaritFileTmp.globalGabarit.textObject,
          mainMetricPoint[index],
          metricPoint[index],
          colorMode,
          traceBack,
          traceBorder,
          positionParameterPoint[index],
          namePoint[index],
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
          associateOrientedLinksOutPoint[index]
        )
        newID++
        this.props.options.arrayPoints.push(toLoad)
      } else {
        let toLoad: PointClass = new PointClass(
          newID + 1,
          linkURLPoint[index],
          metaPoint[index],
          gabaritFileTmp.globalGabarit.lowerLimit,
          labelPoint[index],
          gabaritFileTmp.globalGabarit.textObject,
          mainMetricPoint[index],
          [],
          colorMode,
          traceBack,
          traceBorder,
          positionParameterPoint[index],
          namePoint[index],
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
          associateOrientedLinksOutPoint[index]
        )
        newID++
        this.props.options.arrayPoints.push(toLoad)
      }
    })

    /* Link */
    //Template
    let filterLink: Filtred[][] = [] //
    let posALink: LabelCoord2D[] = [] //
    let posBLink: LabelCoord2D[] = [] //
    let posCLink: LabelCoord2D[] = [] //
    let nameLink: string[] = [] //
    let metaLink: string[] = [] //
    let labelLink: string[] = [] //
    let positionParameterLink: PositionParameterClass[] = [] //
    let mainMetricALink: Metric[] = [] //
    let metricALink: Metric[][] = [] //
    let mainMetricBLink: Metric[] = [] //
    let metricBLink: Metric[][] = [] //
    let linkURLLink: LinkURLClass[] = [] //
    let orientationLink: Array<SelectableValue<string>> = [] //
    let sizeLink: Array<SelectableValue<string>> = [] //
    let colorALink: string[] = [] //
    let colorBLink: string[] = [] //
    let valueMetricALink: string[] = [] //
    let valueMetricBLink: string[] = [] //
    let pointInLink: string[] = [] //
    let pointOutLink: string[] = [] //
    let regionInLink: string[] = [] //
    let regionOutLink: string[] = [] //
    let isIncurvedLink: Array<SelectableValue<boolean>> = [] //

    gabaritFileTmp.templateGabaritLink.forEach((link, index) => {
      if (link.labelfix.toString() === 'false') {
        posALink.push(coordParse(link.xylabelA))
        posBLink.push(coordParse(link.xylabelB))
        posCLink.push(coordParse(link.xylabelC))
      } else {
        posALink.push(coordParse(link.xylabelfixA))
        posBLink.push(coordParse(link.xylabelfixB))
        posCLink.push(coordParse(link.xylabelfixC))
      }
      filterLink.push(filterParse(link.filtered))
      nameLink.push(link.name)
      metaLink.push(link.meta)
      labelLink.push(link.label)
      mainMetricALink.push(link.mainMetric)
      mainMetricALink[index].filter! = filterLink[index]
      mainMetricALink[index].refId = gabaritFileTmp.queryID
      if (mainMetricALink[index].refId === null) {
        mainMetricALink[index].refId = 'A'
      }
      link.metrics.forEach(element => {
        metricALink[index].push(element)
      })
      mainMetricBLink.push(link.mainMetricB)
      mainMetricBLink[index].filter! = filterLink[index]
      mainMetricBLink[index].refId = gabaritFileTmp.queryID
      if (mainMetricALink[index].refId === null) {
        mainMetricBLink[index].refId = 'A'
      }
      link.metricsB.forEach(element => {
        metricBLink[index].push(element)
      })
      valueMetricALink.push(link.valueMainMetricA)
      valueMetricBLink.push(link.valueMainMetricB)
      sizeLink.push(link.size)
      if (link.colorCoordinateA.length !== 0) {
        colorALink.push(link.colorCoordinateA)
        colorBLink.push(link.colorCoordinateB)
      } else {
        colorALink.push(gabaritFileTmp.globalGabarit.defaultColor)
        colorBLink.push(gabaritFileTmp.globalGabarit.defaultColor)
      }
      tmpToolTipA = { label: link.positionParameter.tooltipA, value: link.positionParameter.tooltipA }
      tmpToolTipB = { label: link.positionParameter.tooltipB, value: link.positionParameter.tooltipB }
      tmpLabelAPosition = coordParse(link.positionParameter.xylabelA)
      tmpLabelBPosition = coordParse(link.positionParameter.xylabelB)
      positionParameterLink.push(
        new PositionParameterClass(tmpLabelAPosition.x, tmpLabelAPosition.y, tmpLabelBPosition.x, tmpLabelBPosition.y, tmpToolTipA, tmpToolTipB)
      )
      linkURLLink.push(new LinkURLClass(link.linkURL.followlink, link.linkURL.hoveringTooltiplink, link.linkURL.hoveringTooltipTex))
      orientationLink.push(link.orientationLink)
      pointInLink.push(link.pointIn)
      pointOutLink.push(link.pointOut)
      regionInLink.push(link.regionIn)
      regionOutLink.push(link.regionOut)
      isIncurvedLink.push({label: "No", value: Boolean(link.isIncurved.value)})
    })

    newID = 0
    this.props.options.arrayPoints.forEach(element => {
      newID++
    })

    filterLink.forEach((element, index) => {
      let maA = metricALink.length
      let maB = metricBLink.length
      if (maA > 0 && maB > 0) {
        let toLoad: OrientedLinkClass = new OrientedLinkClass(
          newID + 1,
          linkURLLink[index],
          metaLink[index],
          gabaritFileTmp.globalGabarit.lowerLimit,
          labelLink[index],
          gabaritFileTmp.globalGabarit.textObject,
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
          1, /// à revoir
          posCLink[index].x,
          posCLink[index].y,
          isIncurvedLink[index],
          mainMetricBLink[index],
          metricBLink[index]
        )
        newID++
        this.props.options.arrayOrientedLinks.push(toLoad)
      }
      if (!(maA > 0) && maB > 0) {
        let toLoad: OrientedLinkClass = new OrientedLinkClass(
          newID + 1,
          linkURLLink[index],
          metaLink[index],
          gabaritFileTmp.globalGabarit.lowerLimit,
          labelLink[index],
          gabaritFileTmp.globalGabarit.textObject,
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
          1, /// à revoir
          posCLink[index].x,
          posCLink[index].y,
          isIncurvedLink[index],
          mainMetricBLink[index],
          metricBLink[index]
        )
        newID++
        this.props.options.arrayOrientedLinks.push(toLoad)
      } else if (maA > 0 && !(maB > 0)) {
        let toLoad: OrientedLinkClass = new OrientedLinkClass(
          newID + 1,
          linkURLLink[index],
          metaLink[index],
          gabaritFileTmp.globalGabarit.lowerLimit,
          labelLink[index],
          gabaritFileTmp.globalGabarit.textObject,
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
          1, /// à revoir
          posCLink[index].x,
          posCLink[index].y,
          isIncurvedLink[index],
          mainMetricBLink[index],
          []
        )
        newID++
        this.props.options.arrayOrientedLinks.push(toLoad)
      } else {
        let toLoad: OrientedLinkClass = new OrientedLinkClass(
          newID + 1,
          linkURLLink[index],
          metaLink[index],
          gabaritFileTmp.globalGabarit.lowerLimit,
          labelLink[index],
          gabaritFileTmp.globalGabarit.textObject,
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
          1, /// à revoir
          posCLink[index].x,
          posCLink[index].y,
          isIncurvedLink[index],
          mainMetricBLink[index],
          []
        )
        newID++
        this.props.options.arrayOrientedLinks.push(toLoad)
      }
    })
  }

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
            type='string'
            value={url || ''}
          />
          <Button variant='danger' id={index.toString()} key={'ButtunDel' + index.toString()} onClick={this.gabaritDeletUrl.bind(this)}>
            Del
          </Button>
        </div>
      ))
      return <div>{list}</div>
    }
    return <div>No targets avalaible</div>
  }

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
            type='string'
            value={gabarit.fileName || ''}
            readOnly
          />
          <FormLabel width={15}>Querry ID</FormLabel>
          <Select
            onChange={value => this.onChangeSelectQuerryID(value, index)}
            allowCustomValue={false}
            options={this.state.selectQuerryID}
            width={10}
          />
          <Button id={index.toString()} key={'ButtunLoad' + index.toString()} onClick={this.loaderGabarit.bind(this)}>
            Load
          </Button>
          <Button variant='danger' id={index.toString()} key={'ButtunDel' + index.toString()} onClick={this.gabaritDeletUrl.bind(this)}>
            Del
          </Button>
        </div>
      ))
      return <div>{list}</div>
    }
    return <div>No targets avalaible</div>
  }

  delAll = () => {
    // this.props.options.arrayCoordinateSpace = [];
    // this.props.options.arrayOrientedLinks = [];
    // this.props.options.arrayPoints = [];
    this.props.options.saveGabaritURL = []
    this.props.options.saveGabaritURL = []
    // this.props.options.saveGabaritURL.mono = [];
    this.props.onOptionsChange({ ...this.props.options, saveGabaritURL: this.props.options.saveGabaritURL })
  }

  toDel = () => {
    console.log(this.props.options.arrayPoints)
    // console.log(this.props.options.arrayPoints);
  }

  render () {
    const { options } = this.props
    return (
      <div>
        <Collapse isOpen={this.state.collapseSelectURL} label='Url List' onToggle={this.onToggleSelectUrl}>
          <FormField
            label='Gabarit Url'
            labelWidth={8}
            key={'GabaritUrl'}
            inputWidth={20}
            onChange={this.onGabaritUrlChanged.bind(this)}
            type='string'
            value={options.gabaritUrlInput || ''}
          />
          <Button key={'AddGabaritUrl'} onClick={this.addGabaritUrlInput}>
            Add
          </Button>
          <div className='section gf-form-group'>
            <Button onClick={this.fetchGabarit}>Finish</Button>
            <this.gabaritUrlDisplay list={options.saveGabaritURL} />
            <Button key={'delAll'} onClick={this.delAll}>
              Del all urls
            </Button>
          </div>
          <Button onClick={this.toDel}>toDel</Button>
        </Collapse>
        <Collapse isOpen={this.state.collapseGabarit} label='Gabarit List' onToggle={this.onToggleGabarit}>
          <this.gabaritDisplay list={options.saveGabaritFile} />
        </Collapse>
      </div>
    )
  }
}
export default Gabarit
