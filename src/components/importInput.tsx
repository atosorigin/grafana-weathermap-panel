import React from 'react';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from '../types';
import { FormField, Button, Collapse } from '@grafana/ui';
//import /*pointClassImport, regionClassImport, multiPointClassImport, multiRegionClassImport */ '../../config/testVariable';

import { PointClass } from '../Models/PointClass';
import { RegionClass } from 'Models/RegionClass';
import { OrientedLinkClass } from '../Models/OrientedLinkClass';
//import { fetchConfFile } from '../Functions/importConfig';
import DropZone from '../Models/dropZone';

interface Props extends PanelEditorProps<SimpleOptions> {}

interface State {
  collapseTotalUrl: boolean;
  collapseMultiUrl: boolean;
  // collapseMonoUrl: boolean;
  collapseMultiUpload: boolean;
}

/*
 * TODO
 */
class ImportInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      collapseTotalUrl: false,
      collapseMultiUrl: false,
      // collapseMonoUrl: false,
      collapseMultiUpload: true,
    };
  }
  result: any[] = [];
  totalResult: any[] = [];
  /**************************************FETCH******************************************/

  // fetchMono = () => {
  //     console.log(this.props.options.saveImportUrl.mono)
  //     this.result = fetchConfFile(this.props.options.saveImportUrl.mono);
  // }

  /**************************************CATCH******************************************/
  PointValidator = (newSpace: PointClass) => {
    let resultId = 0;
    this.props.options.arrayPoints.forEach(point => {
      if (newSpace.id === point.id) {
        if (newSpace.name === point.name) {
          resultId = 2;
        } else {
          console.error('Id of point named "' + newSpace.name + '" already given fail to load!');
          resultId = 1;
        }
      }
    });
    return resultId;
  };

  RegionValidator = (newSpace: RegionClass) => {
    let resultId = 0;
    this.props.options.regionCoordinateSpace.forEach(region => {
      //Id
      if (newSpace.id === region.id) {
        if (newSpace.label === region.label) {
          resultId = 2;
        } else {
          console.error('Id of region labeled "' + newSpace.label + '" already given, fail to load!');
          resultId = 1;
        }
      }
    });
    return resultId;
  };

  LinkValidator = (newSpace: OrientedLinkClass) => {
    let resultId = 0;
    this.props.options.arrayOrientedLinks.forEach(lien => {
      if (newSpace.id === lien.id) {
        if (newSpace.name === lien.name) {
          resultId = 2;
        } else {
          console.error('Id of link named "' + newSpace.name + '" already given, fail to load!');
          resultId = 1;
        }
      }
    });
    return resultId;
  };

  UrlValidator = (url: string) => {
    let result = true;
    for (let index in this.props.options.saveImportUrl.multi) {
      if (this.props.options.saveImportUrl.multi[index] === url) {
        result = false;
        break;
      }
    }
    return result;
  };

  /**************************************LOADER******************************************/
  // Mono
  pointUpdate = (updatedPoint: PointClass) => {
    this.props.options.arrayPoints.forEach((point, index) => {
      //Id
      if (updatedPoint.id === point.id) {
        if (updatedPoint.name === point.name) {
          this.props.options.arrayPoints[index] = updatedPoint;
          this.props.onOptionsChange({ ...this.props.options, arrayPoints: this.props.options.arrayPoints });
        }
      }
    });
  };
  //Looking for a update after Point rework
  loadMonoPoint = (point: any) => {
    const toLoad = new PointClass(
      point.id,
      point.linkURL,
      point.meta,
      point.lowerLimit,
      point.label,
      point.textObj,
      point.mainMetric,
      point.metrics,
      point.colorMode,
      point.traceBack,
      point.traceBorder,
      point.positionParameter,
      point.name,
      point.valueMetric,
      point.drawGraphicMarker,
      point.shape,
      point.sizeWidth,
      point.sizeHeight,
      point.rotateArrow,
      point.positionShapeX,
      point.positionShapeY,
      point.color,
      point.associateOrientedLinksIn,
      point.associateOrientedLinksOut
    );
    console.log(toLoad);
    let selector: number = this.PointValidator(toLoad);
    // Do some test here to see if your already load a coordinatespace with this id
    if (selector === 0) {
      this.props.options.arrayPoints.push(toLoad);
    }
    if (selector === 2) {
      this.pointUpdate(toLoad);
    }
  };

  regionUpdate = (updatedRegion: RegionClass) => {
    this.props.options.regionCoordinateSpace.forEach((region, index) => {
      //Id
      if (updatedRegion.id === region.id) {
        if (updatedRegion.label === region.label) {
          this.props.options.regionCoordinateSpace[index] = updatedRegion;
          this.props.onOptionsChange({ ...this.props.options, regionCoordinateSpace: this.props.options.regionCoordinateSpace });
        }
      }
    });
  };
  //Looking for a update after Region rework
  loadMonoRegion = (region: any) => {
    const toLoad = new RegionClass(
      region.id,
      region.linkURL,
      region.meta,
      region.lowerLimit,
      region.label,
      region.textObj,
      region.mainMetric,
      region.metrics,
      region.colorMode,
      region.traceBack,
      region.traceBorder,
      region.positionParameter,
      region.idSVG,
      region.orientedLink,
      region.coords,
      region.mode,
      region.img
    );
    console.log(toLoad);
    // Do some test here to see if your already load a coordinatespace with this id
    let selector: number = this.RegionValidator(toLoad);
    if (selector === 0) {
      this.props.options.regionCoordinateSpace.push(toLoad);
    }
    if (selector === 2) {
      this.regionUpdate(toLoad);
    }
  };

  linkUpdate = (updatedLink: OrientedLinkClass) => {
    this.props.options.arrayOrientedLinks.forEach((link, index) => {
      //Id
      if (updatedLink.id === link.id) {
        if (updatedLink.name === link.name) {
          this.props.options.arrayOrientedLinks[index] = updatedLink;
          this.props.onOptionsChange({ ...this.props.options, arrayOrientedLinks: this.props.options.arrayOrientedLinks });
        }
      }
    });
  };
  loadMonoLink = (link: any) => {
    const toLoad = new OrientedLinkClass(
      link.id,
      link.linkURL,
      link.meta,
      link.lowerLimit,
      link.label,
      link.textObj,
      link.mainMetric,
      link.metrics,
      link.colorMode,
      link.traceBack,
      link.traceBorder,
      link.positionParameter,
      link.name,
      link.orientationLink,
      link.size,
      link.pointAPositionX,
      link.pointAPositionY,
      link.colorCoordinateA,
      link.pointBPositionX,
      link.pointBPositionY,
      link.colorCoordinateB,
      link.valueMainMetricA,
      link.valueMainMetricB,
      link.pointIn,
      link.pointOut,
      link.regionIn,
      link.regionOut,
      link.zIndex,
      link.pointCPositionX,
      link.pointCPositionY,
      link.isIncurved,
      link.mainMetricB,
      link.metricsB
    );
    console.log(toLoad);
    // Do some test here to see if your already load a coordinatespace with this id
    let selector: number = this.LinkValidator(toLoad);
    if (selector === 0) {
      this.props.options.arrayOrientedLinks.push(toLoad);
    }
    if (selector === 2) {
      this.linkUpdate(toLoad);
    }
  };

  //Multi
  loadMultiPoints = (points: any) => {
    points.points.forEach((point: any) => {
      this.loadMonoPoint(point);
    });
  };

  loadMultiRegions = (regions: any) => {
    regions.regions.forEach((region: any) => {
      this.loadMonoRegion(region);
    });
  };

  loadMultiLinks = (links: any) => {
    links.links.forEach((link: any) => {
      this.loadMonoLink(link);
    });
  };

  //Total
  loadTotal = (panel: any) => {
    //console.log(panel.imageUrl);
    this.props.options.baseMap = panel.baseMap;
    this.props.options.display.police = panel.texteSettings.police;
    this.props.options.display.size = panel.texteSettings.size;
    this.props.options.display.style = panel.texteSettings.style;
    this.props.options.coordinateSpaceInitial = panel.coordinateSpaceInitial;
    panel.regions.forEach((url: string) => {
      if (this.UrlValidator(url) === true) {
        this.props.options.saveImportUrl.multi.push(url);
      }
    });
    panel.points.forEach((url: string) => {
      if (this.UrlValidator(url) === true) {
        this.props.options.saveImportUrl.multi.push(url);
      }
    });
    panel.links.forEach((url: string) => {
      if (this.UrlValidator(url) === true) {
        this.props.options.saveImportUrl.multi.push(url);
      }
    });
    this.fetchMulti();
    console.log('load total');
  };

  loaderTotal = async () => {
    try {
      let response = await fetch(this.props.options.totalUrlInput);
      let file = await response.json();
      this.loadTotal(file);
    } catch (error) {
      console.error(error);
    }
  };

  // fetchTotal = () => {
  //   this.totalResult = fetchConfFile(this.props.options.saveImportUrl.total);
  //   console.log('downloadTotal');
  // };

  // loaderSelector = () => {
  //     // this.loadMultiRegions(multiRegionClassImport);
  // 	// console.table(this.props.options.arrayCoordinateSpace);
  // 	this.result.forEach(file => {
  // 		if (file.hasOwnProperty('regions')){
  //             this.loadMultiRegions(file);
  //             console.log('Load Region');
  //         }
  //         if (file.hasOwnProperty('points')){
  //             this.loadMultiPoints(file);
  //             console.log('Load Point');
  //         }
  //         if (file.hasOwnProperty('links')){
  //             this.loadMultiLinks(file);
  //             console.log('Load Links');
  // 		}
  // 	});
  // }

  fetchMulti = () => {
    //this.result = fetchConfFile(this.props.options.saveImportUrl.multi);
    this.props.options.saveImportUrl.multi.forEach(async url => {
      try {
        console.log(url);
        let file = {};
        console.log(file);
        let response = await fetch(url);
        file = await response.json();
        if (file.hasOwnProperty('regions')) {
          this.loadMultiRegions(file);
          console.log('Load Region');
        }
        if (file.hasOwnProperty('points')) {
          this.loadMultiPoints(file);
          console.log('Load Point');
        }
        if (file.hasOwnProperty('links')) {
          //console.log(file);
          this.loadMultiLinks(file);
          console.log('Load Links');
        }
      } catch (error) {
        console.error(error);
      }
    });
  };

  /**************************************INPUT******************************************/

  onToggleTotalUrl = (isOpen: boolean): void => {
    this.setState({
      collapseTotalUrl: isOpen,
    });
  };

  onToggleMultiUrl = (isOpen: boolean): void => {
    this.setState({
      collapseMultiUrl: isOpen,
    });
  };

  onToggleMultiUpload = (isOpen: boolean): void => {
    this.setState({
      collapseMultiUpload: isOpen,
    });
  };

  // public onToggleMonoUrl = (isOpen: boolean): void => {
  // 	this.setState({
  // 		collapseMonoUrl: isOpen,
  // 	});
  // }

  // saveUrl = (url: string, mode: number) => {
  //   // if (mode === 0){
  //   //     this.props.options.saveImportUrl.mono.push(url);
  //   // }
  //   if (mode === 1) {
  //     this.props.options.saveImportUrl.multi.push(url);
  //   }
  //   if (mode === 2) {
  //     this.props.options.saveImportUrl.total.push(url);
  //   }
  // };

  onTotalUrlChanged = (event: { currentTarget: HTMLInputElement }) => {
    let newData = '';
    newData = event.currentTarget.value;
    this.props.onOptionsChange({ ...this.props.options, totalUrlInput: newData });
  };

  onTotalListUrlChanged = (event: { currentTarget: HTMLInputElement }) => {
    let newData: string[] = this.props.options.saveImportUrl.total.slice();
    newData[parseInt(event.currentTarget.id, 10)] = event.currentTarget.value;
    this.props.options.saveImportUrl.total = newData;
    this.props.onOptionsChange({ ...this.props.options, saveImportUrl: this.props.options.saveImportUrl });
  };

  onMultiUrlChanged = (event: { currentTarget: HTMLInputElement }) => {
    let newData = '';
    newData = event.currentTarget.value;
    this.props.onOptionsChange({ ...this.props.options, multiUrlInput: newData });
  };

  onMultiListUrlChanged = (event: { currentTarget: HTMLInputElement }) => {
    let newData: string[] = this.props.options.saveImportUrl.multi.slice();
    newData[parseInt(event.currentTarget.id, 10)] = event.currentTarget.value;
    this.props.options.saveImportUrl.multi = newData;
    this.props.onOptionsChange({ ...this.props.options, saveImportUrl: this.props.options.saveImportUrl });
  };

  // onMonoUrlChanged = (event: { currentTarget: HTMLInputElement }) => {
  // 	let newData: string = '';
  // 	newData = event.currentTarget.value;
  // 	this.props.onOptionsChange({ ...this.props.options, monoUrlInput: newData });
  // }

  // onMonoListUrlChanged = (event: {currentTarget: HTMLInputElement}) => {
  //     let newData: string[] = this.props.options.saveImportUrl.mono.slice();
  //     newData[parseInt(event.currentTarget.id, 10)] = event.currentTarget.value;
  //     this.props.options.saveImportUrl.mono = newData;
  //     this.props.onOptionsChange({...this.props.options, saveImportUrl: this.props.options.saveImportUrl})
  // }

  addTotalUrlInput = (onClick: { currentTarget: HTMLButtonElement }) => {
    this.props.options.saveImportUrl.total.push(this.props.options.totalUrlInput);
    this.props.options.totalUrlInput = '';
    this.props.onOptionsChange({ ...this.props.options, saveImportUrl: this.props.options.saveImportUrl });
  };

  addMultiUrlInput = (onClick: { currentTarget: HTMLButtonElement }) => {
    this.props.options.saveImportUrl.multi.push(this.props.options.multiUrlInput);
    this.props.options.multiUrlInput = '';
    this.props.onOptionsChange({ ...this.props.options, saveImportUrl: this.props.options.saveImportUrl });
  };

  // addMonoUrlInput = (onClick: { currentTarget: HTMLButtonElement }) => {
  //     this.props.options.saveImportUrl.mono.push(this.props.options.monoUrlInput);
  //     this.props.options.monoUrlInput = '';
  //     this.props.onOptionsChange({ ...this.props.options, saveImportUrl: this.props.options.saveImportUrl})
  // }

  totalDeletUrl = (onClick: { currentTarget: HTMLButtonElement }) => {
    const isUrl = (url: string) => url === this.props.options.saveImportUrl.total[parseInt(onClick.currentTarget.id, 10)];
    this.props.options.saveImportUrl.total.splice(this.props.options.saveImportUrl.total.findIndex(isUrl), 1);
    this.props.onOptionsChange({ ...this.props.options, saveImportUrl: this.props.options.saveImportUrl });
  };

  multiDeletUrl = (onClick: { currentTarget: HTMLButtonElement }) => {
    const isUrl = (url: string) => url === this.props.options.saveImportUrl.multi[parseInt(onClick.currentTarget.id, 10)];
    this.props.options.saveImportUrl.multi.splice(this.props.options.saveImportUrl.multi.findIndex(isUrl), 1);
    this.props.onOptionsChange({ ...this.props.options, saveImportUrl: this.props.options.saveImportUrl });
  };

  // monoDeletUrl = (onClick: { currentTarget: HTMLButtonElement}) => {
  //     const isUrl = (url: string) => url === this.props.options.saveImportUrl.mono[parseInt(onClick.currentTarget.id, 10)];
  //     this.props.options.saveImportUrl.mono.splice(this.props.options.saveImportUrl.mono.findIndex(isUrl), 1);
  //     this.props.onOptionsChange({...this.props.options, saveImportUrl: this.props.options.saveImportUrl});
  // }

  tempo = () => {
    console.log(this.props.options.saveImportUrl);
  };

  totalUrlDisplay = (props: any): JSX.Element => {
    if (props.list.total.lenght !== 0) {
      const list = props.list.total.map((url: string, index: number) => (
        <div
          key={'TotalUrlDiv' + index.toString()}
          style={{
            display: 'flex',
          }}
        >
          <FormField
            id={index.toString()}
            key={'TotalUrl' + index.toString()}
            label={'Url'}
            labelWidth={5}
            inputWidth={20}
            onChange={this.onTotalListUrlChanged.bind(this)}
            type="string"
            value={url || ''}
          />
          <Button variant="danger" id={index.toString()} key={'ButtunDel' + index.toString()} onClick={this.totalDeletUrl.bind(this)}>
            Del
          </Button>
        </div>
      ));
      return <div>{list}</div>;
    }
    return <div>No targets avalaible</div>;
  };

  multiUrlDisplay = (props: any): JSX.Element => {
    if (props.list.multi.lenght !== 0) {
      const list = props.list.multi.map((url: string, index: number) => (
        <div
          key={'MultiUrlDiv' + index.toString()}
          style={{
            display: 'flex',
          }}
        >
          <FormField
            id={index.toString()}
            key={'MultiUrl' + index.toString()}
            label={'Url'}
            labelWidth={5}
            inputWidth={20}
            onChange={this.onMultiListUrlChanged.bind(this)}
            type="string"
            value={url || ''}
          />
          <Button variant="danger" id={index.toString()} key={'ButtunDel' + index.toString()} onClick={this.multiDeletUrl.bind(this)}>
            Del
          </Button>
        </div>
      ));
      return <div>{list}</div>;
    }
    return <div>No targets avalaible</div>;
  };

  // monoUrlDisplay = (props: any): JSX.Element => {
  // 	if (props.list.multi.lenght !== 0) {
  // 		const list = props.list.mono.map((url: string, index: number) =>
  // 			<div key={'MonoUrlDiv' + index.toString()}>
  //                 <FormField id={index.toString()} key={'MonoUrl' + index.toString()}
  // 					label={'Url'} labelWidth={5}
  // 					inputWidth={20} onChange={this.onMonoListUrlChanged.bind(this)} type='string' value={url || ''} />
  // 				<Button variant='danger' id={index.toString()} key={'ButtunDel' + index.toString()}
  // 					onClick={this.monoDeletUrl.bind(this)}>Del</Button>
  // 			</div>
  // 		);
  // 		return (
  // 			<div>{list}</div>
  // 		);
  // 	}
  // 	return (<div>No targets avalaible</div>);
  // }

  delAll = () => {
    // this.props.options.arrayCoordinateSpace = [];
    // this.props.options.arrayOrientedLinks = [];
    // this.props.options.arrayPoints = [];
    this.props.options.saveImportUrl.total = [];
    this.props.options.saveImportUrl.multi = [];
    // this.props.options.saveImportUrl.mono = [];
    this.props.onOptionsChange({ ...this.props.options, saveImportUrl: this.props.options.saveImportUrl });
  };

  toDel = () => {
    console.log(this.props.options.saveImportUrl.multi);
    console.log(this.props.options.arrayPoints);
  };

  render() {
    const { options } = this.props;
    return (
      <div>
        <Collapse isOpen={this.state.collapseTotalUrl} label="Global Url Import" onToggle={this.onToggleTotalUrl}>
          <FormField
            label="Total Url"
            labelWidth={8}
            key={'TotalUrl'}
            inputWidth={20}
            onChange={this.onTotalUrlChanged.bind(this)}
            type="string"
            value={options.totalUrlInput || ''}
          />
          {/* <Button key={'AddTotalUrl'} onClick={this.addTotalUrlInput}>Add</Button> */}
          <div className="section gf-form-group">
            <Button onClick={this.loaderTotal}>Finish</Button>
            <this.totalUrlDisplay list={options.saveImportUrl} />
          </div>
        </Collapse>
        <Collapse isOpen={this.state.collapseMultiUrl} label="Multi Url Import" onToggle={this.onToggleMultiUrl}>
          <FormField
            label="Multi Url"
            labelWidth={8}
            key={'MultiUrl'}
            inputWidth={20}
            onChange={this.onMultiUrlChanged.bind(this)}
            type="string"
            value={options.multiUrlInput || ''}
          />
          <Button key={'AddMultiUrl'} onClick={this.addMultiUrlInput}>
            Add
          </Button>
          <div className="section gf-form-group">
            <Button onClick={this.fetchMulti}>Finish</Button>
            <this.multiUrlDisplay list={options.saveImportUrl} />
          </div>
        </Collapse>
        <Collapse isOpen={this.state.collapseMultiUpload} label="Multi Local Import" onToggle={this.onToggleMultiUpload}>
          <div>
            <DropZone options={this.props.options} onOptionsChange={this.props.onOptionsChange} data={this.props.data} />
          </div>
        </Collapse>
        {/* <div className='section gf-form-group'>
                    <Collapse isOpen={this.state.collapseMonoUrl}
						label='Mono Url' onToggle={this.onToggleMonoUrl}>
                        <FormField label='Mono Url' labelWidth={8} key={'MonoUrl'}
                            inputWidth={20} onChange={this.onMonoUrlChanged.bind(this)}
                            type='string' value={options.monoUrlInput || ''} />
                        <Button key={'AddMonoUrl'} onClick={this.addMonoUrlInput}>Add</Button>
                        <div className='section gf-form-group'>
                            <Button onClick={this.fetchMono}>Load</Button>
					        <this.monoUrlDisplay list={options.saveImportUrl} />
				        </div>
					</Collapse>
                </div> */}
        <div className="section gf-form-group">
          <Button key={'delAll'} onClick={this.delAll}>
            Del all urls
          </Button>
        </div>
        <Button onClick={this.toDel}>toDel</Button>
      </div>
    );
  }
}
export default ImportInput;
