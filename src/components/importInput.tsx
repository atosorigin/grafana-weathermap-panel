import React from 'react';
import { PanelEditorProps } from "@grafana/data";
import { SimpleOptions } from '../types';
import { FormField, Button, Collapse } from '@grafana/ui';
import { /*pointClassImport, regionClassImport, multiPointClassImport, multiRegionClassImport */} from "../../config/testVariable";
import { PointClass } from "../Models/PointClass";
import { RegionClass } from 'Models/RegionClass';
import { OrientedLinkClass } from "../Models/OrientedLinkClass";
import { fetchConfFile } from "../Functions/importConfig";

interface IProps extends PanelEditorProps<SimpleOptions> { }

interface IState {
	collapseTotalUrl: boolean;
	collapseMultiUrl: boolean;
	// collapseMonoUrl: boolean;
}

/*
 * TODO
 */
class ImportInput extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
                collapseTotalUrl: false,
                collapseMultiUrl: false,
                // collapseMonoUrl: false,
        };
    }
    result: any[] = [];
    totalResult: any[] = [];
    /**************************************FETCH******************************************/
    fetchMulti = () => {
        this.result = fetchConfFile(this.props.options.saveImportUrl.multi);
    }

    // fetchMono = () => {
    //     console.log(this.props.options.saveImportUrl.mono)
    //     this.result = fetchConfFile(this.props.options.saveImportUrl.mono);
    // }

    fetchTotal = () => {
        this.totalResult = fetchConfFile(this.props.options.saveImportUrl.total);
        console.log("dwnloadTotal");
    }

    /**************************************CATCH******************************************/
    PointValidator = (newSpace: PointClass ) => {
        let resultId : boolean = true;
        let resultTarget : number = 1;
        this.props.options.arrayPoints.forEach(point => {
            if (newSpace.id === point.id){
                console.error("Id of point named \"" + newSpace.name + "\" already given fail to load!")
                resultId = false;
            }
            this.props.data.request?.targets.forEach(target => {
                resultTarget = 0;
            });
            if (resultTarget == 1)
                console.error("Warning you load a point named \""+newSpace.name +"\" without refId you can't get data!");
        });
        return resultId;
    }

    RegionValidator = (newSpace: RegionClass ) => {
        let resultId : boolean = true;
        let resultTarget : number = 1;
        this.props.options.regionCoordinateSpace.forEach(region => {
            //Id
            if (newSpace.id === region.id){
                console.error("Id of region labeled \"" + newSpace.label + "\" already given, fail to load!")
                resultId = false;
            }
            //refId
            this.props.data.request?.targets.forEach(target => {
                if (target.refId === newSpace.mainMetric.refId) {
                    resultTarget = 0;
                }
            });
            if (resultTarget == 1)
                console.error("Warning you load a region named \""+newSpace.label +"\" without refId you can't get data!");
        });
        return resultId;
    }

    LinkValidator = (newSpace: OrientedLinkClass ) => {
        let resultId : boolean = true;
        let resultTarget : number = 1;
        this.props.options.arrayOrientedLinks.forEach(lien => {
            if (newSpace.id === lien.id){
                console.error("Id of link named \"" + newSpace.name + "\" already given, fail to load!")
                resultId = false;
            }
            this.props.data.request?.targets.forEach(target => {
                if (target.refId === newSpace.mainMetric.refId){
                    resultTarget = 0;
                }
            });
            if (resultTarget == 1)
                console.error("Warning you load a link named \""+newSpace.name +"\"  without refId you can't get data!");
        });
        return resultId;
    }

    UrlValidator = (url: string) => {
        let result : boolean = true;
        for(let savedUrl in this.props.options.saveImportUrl.multi){
            if (savedUrl === url){
                result = false;
                break;
            }
        }
        return result;
    }


    /**************************************LOADER******************************************/
    // Mono
    //Looking for a update after Point rework
    loadMonoPoint = (point: any) => {
		const toLoad = new PointClass(point.id, point.linkURL, point.meta, point.lowerLimit,
			point.label, point.textObj, point.mainMetric, point.metrics,
			point.colorMode, point.traceBack, point.traceBorder, point.positionParameter, point.name,
			point.valueMetric, point.coordinateSpace, point.drawGraphicMarker,
			point.shape, point.sizeWidth, point.sizeHeight, point.rotateArrow,
			point.positionShapeX, point.positionShapeY, point.color, point.associateLinkIn,
			point.associateLinkOut, point.associateOrientedLinksIn, point.associateOrientedLinksOut);
        console.log(toLoad);
        // Do some test here to see if your already load a coordinatespace with this id
        if (this.PointValidator(toLoad) === true){
            this.props.options.arrayPoints.push(toLoad);
        }
    }
    //Looking for a update after Region rework
    loadMonoRegion = (region: any) => {
		const toLoad = new RegionClass(region.id, region.linkURL, region.meta, region.lowerLimit,
			region.label, region.textObj, region.mainMetric, region.metrics, region.colorMode,
			region.traceBack, region.traceBorder, region.positionParameter, region.idSVG, region.orientedLink, region.coords,
			region.mode, region.img);
        console.log(toLoad);
        // Do some test here to see if your already load a coordinatespace with this id
        if (this.RegionValidator(toLoad) === true){
            this.props.options.regionCoordinateSpace.push(toLoad);
        }
    }
    loadMonoLink = (link: any) => {
        const toLoad = new OrientedLinkClass(link.id, link.linkURL, link.meta, link.lowerLimit,
            link.label, link.textObj, link.mainMetric, link.metrics, link.colorMode, link.traceBack,
            link.traceBorder, link.positionParameter, link.name, link.orientationLink,
            link.pointAPositionX, link.pointAPositionY, link.colorCoordinateA, link.pointBPositionX,
            link.pointBPositionY, link.colorCoordinateB, link.valueMainMetricA, link.valueMainMetricB,
            link.pointIn, link.pointOut, link.regionIn, link.regionOut, link.zIndex);

        console.log(toLoad);
            // Do some test here to see if your already load a coordinatespace with this id
        if (this.LinkValidator(toLoad) === true){
            this.props.options.arrayOrientedLinks.push(toLoad);
        }
    }

    //Multi
    loadMultiPoints = (points: any) => {
        points.points.forEach((point: any) => {
            this.loadMonoPoint(point);
        });
    }

    loadMultiRegions = (regions: any) => {
        regions.regions.forEach((region:any) => {
            this.loadMonoRegion(region);
        });
    }

    loadMultiLinks = (links:any) => {
        links.links.forEach((link:any) => {
            this.loadMonoLink(link);
        });
    }

    //Total
    loadTotal = (panel: any) => {
        //console.log(panel.imageUrl);
        this.props.options.baseMap.image = panel.imageUrl;
        this.props.options.police = panel.texteSettings.police;
        this.props.options.size = panel.texteSettings.size;
        this.props.options.styleText = panel.texteSettings.styleText;
        this.props.options.coordinateSpaceInitial = panel.texteSettings.coordinateSpaceInitial;
        panel.regions.forEach((url: string) => {
            if (this.UrlValidator(url) === true)
                this.props.options.saveImportUrl.multi.push(url);
        });
        panel.points.forEach((url: string) => {
            if (this.UrlValidator(url) === true)
                this.props.options.saveImportUrl.multi.push(url);
        });
        panel.links.forEach((url: string) => {
            if (this.UrlValidator(url) === true)
                this.props.options.saveImportUrl.multi.push(url);
        });
        this.fetchMulti();
        console.log("load total");
    }


    loaderSelector = () => {
        // this.loadMultiRegions(multiRegionClassImport);
		// console.table(this.props.options.arrayCoordinateSpace);
        console.log(this.result);
		this.result.forEach(file => {
			if (file.hasOwnProperty("regions")){
                this.loadMultiRegions(file);
                console.log("Load Region");
            }
            if (file.hasOwnProperty("points")){
                this.loadMultiPoints(file);
                console.log("Load Point");
            }
            if (file.hasOwnProperty("links")){
                this.loadMultiLinks(file);
                console.log("Load Links");
			}
		});
    }

    loaderTotal = () => {
        this.totalResult.forEach(file => {
            this.loadTotal(file);
        });
    }

    /**************************************INPUT******************************************/


	public onToggleTotalUrl = (isOpen: boolean): void => {
		this.setState({
			collapseTotalUrl: isOpen,
		});
    }

    public onToggleMultiUrl = (isOpen: boolean): void => {
		this.setState({
			collapseMultiUrl: isOpen,
		});
    }

    // public onToggleMonoUrl = (isOpen: boolean): void => {
	// 	this.setState({
	// 		collapseMonoUrl: isOpen,
	// 	});
    // }


    saveUrl = (url: string, mode: number) => {
        // if (mode === 0){
        //     this.props.options.saveImportUrl.mono.push(url);
        // }
        if (mode === 1){
            this.props.options.saveImportUrl.multi.push(url);
        }
        if (mode === 2){
            this.props.options.saveImportUrl.total.push(url);
        }
    }

    onTotalUrlChanged = (event: { currentTarget: HTMLInputElement }) => {
		let newData: string = '';
		newData = event.currentTarget.value;
		this.props.onOptionsChange({ ...this.props.options, totalUrlInput: newData });
    }

    onTotalListUrlChanged = (event: {currentTarget: HTMLInputElement}) => {
        let newData: string[] = this.props.options.saveImportUrl.total.slice();
        newData[parseInt(event.currentTarget.id, 10)] = event.currentTarget.value;
        this.props.options.saveImportUrl.total = newData;
        this.props.onOptionsChange({...this.props.options, saveImportUrl: this.props.options.saveImportUrl})
    }

    onMultiUrlChanged = (event: { currentTarget: HTMLInputElement }) => {
		let newData: string = '';
        newData = event.currentTarget.value;
		this.props.onOptionsChange({ ...this.props.options, multiUrlInput: newData });
    }

    onMultiListUrlChanged = (event: {currentTarget: HTMLInputElement}) => {
        let newData: string[] = this.props.options.saveImportUrl.multi.slice();
        newData[parseInt(event.currentTarget.id, 10)] = event.currentTarget.value;
        this.props.options.saveImportUrl.multi = newData;
        this.props.onOptionsChange({...this.props.options, saveImportUrl: this.props.options.saveImportUrl})
    }

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
        this.props.onOptionsChange({ ...this.props.options, saveImportUrl: this.props.options.saveImportUrl})
    }

    addMultiUrlInput = (onClick: { currentTarget: HTMLButtonElement }) => {
        this.props.options.saveImportUrl.multi.push(this.props.options.multiUrlInput);
        this.props.options.multiUrlInput = '';
        this.props.onOptionsChange({ ...this.props.options, saveImportUrl: this.props.options.saveImportUrl})
    }

    // addMonoUrlInput = (onClick: { currentTarget: HTMLButtonElement }) => {
    //     this.props.options.saveImportUrl.mono.push(this.props.options.monoUrlInput);
    //     this.props.options.monoUrlInput = '';
    //     this.props.onOptionsChange({ ...this.props.options, saveImportUrl: this.props.options.saveImportUrl})
    // }

    totalDeletUrl = (onClick: { currentTarget: HTMLButtonElement}) => {
        const isUrl = (url: string) => url === this.props.options.saveImportUrl.total[parseInt(onClick.currentTarget.id, 10)];
        this.props.options.saveImportUrl.total.splice(this.props.options.saveImportUrl.total.findIndex(isUrl), 1);
        this.props.onOptionsChange({...this.props.options, saveImportUrl: this.props.options.saveImportUrl});
    }

    multiDeletUrl = (onClick: { currentTarget: HTMLButtonElement}) => {
        const isUrl = (url: string) => url === this.props.options.saveImportUrl.multi[parseInt(onClick.currentTarget.id, 10)];
        this.props.options.saveImportUrl.multi.splice(this.props.options.saveImportUrl.multi.findIndex(isUrl), 1);
        this.props.onOptionsChange({...this.props.options, saveImportUrl: this.props.options.saveImportUrl});
    }

    // monoDeletUrl = (onClick: { currentTarget: HTMLButtonElement}) => {
    //     const isUrl = (url: string) => url === this.props.options.saveImportUrl.mono[parseInt(onClick.currentTarget.id, 10)];
    //     this.props.options.saveImportUrl.mono.splice(this.props.options.saveImportUrl.mono.findIndex(isUrl), 1);
    //     this.props.onOptionsChange({...this.props.options, saveImportUrl: this.props.options.saveImportUrl});
    // }

    tempo = () => {
        console.log(this.props.options.saveImportUrl);
    }

    totalUrlDisplay = (props: any): JSX.Element => {
		if (props.list.total.lenght !== 0) {
			const list = props.list.total.map((url: string, index: number) =>
				<div key={'TotalUrlDiv' + index.toString()}>
                    <FormField id={index.toString()} key={'TotalUrl' + index.toString()}
						label={'Url'} labelWidth={5}
						inputWidth={20} onChange={this.onTotalListUrlChanged.bind(this)} type='string' value={url || ''} />
					<Button variant='danger' id={index.toString()} key={'ButtunDel' + index.toString()}
						onClick={this.totalDeletUrl.bind(this)}>Del</Button>
				</div>
			);
			return (
				<div>{list}</div>
			);
		}
		return (<div>No targets avalaible</div>);
    }

    multiUrlDisplay = (props: any): JSX.Element => {
		if (props.list.multi.lenght !== 0) {
			const list = props.list.multi.map((url: string, index: number) =>
				<div key={'MultiUrlDiv' + index.toString()}>
                    <FormField id={index.toString()} key={'MultiUrl' + index.toString()}
						label={'Url'} labelWidth={5}
						inputWidth={20} onChange={this.onMultiListUrlChanged.bind(this)} type='string' value={url || ''} />
					<Button variant='danger' id={index.toString()} key={'ButtunDel' + index.toString()}
						onClick={this.multiDeletUrl.bind(this)}>Del</Button>
				</div>
			);
			return (
				<div>{list}</div>
			);
		}
		return (<div>No targets avalaible</div>);
    }

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
        this.props.onOptionsChange({...this.props.options, saveImportUrl: this.props.options.saveImportUrl})
    }

    toDel = () => {
        console.log(this.props.options.saveImportUrl.multi);
        console.log(this.props.options.arrayPoints);
    }

    public render() {
        const { options } = this.props;
        return (
            <div>
                <div className='section gf-form-group'>
					<Collapse isOpen={this.state.collapseTotalUrl}
						label='Global Url' onToggle={this.onToggleTotalUrl}>
						<FormField label='Total Url' labelWidth={8} key={'TotalUrl'}
						    inputWidth={20} onChange={this.onTotalUrlChanged.bind(this)}
						    type='string' value={options.totalUrlInput || ''} />
                        <Button key={'AddTotalUrl'} onClick={this.addTotalUrlInput}>Add</Button>
				        <div className='section gf-form-group'>
                            <Button onClick={this.fetchTotal}>Download</Button>
                            <Button onClick={this.loaderTotal}>Load</Button>
					        <this.totalUrlDisplay list={options.saveImportUrl} />
				        </div>
					</Collapse>
                </div>
                <div className='section gf-form-group'>
                    <Collapse isOpen={this.state.collapseMultiUrl}
						label='Multi Url' onToggle={this.onToggleMultiUrl}>
                        <FormField label='Multi Url' labelWidth={8} key={'MultiUrl'}
                            inputWidth={20} onChange={this.onMultiUrlChanged.bind(this)}
                            type='string' value={options.multiUrlInput || ''} />
                        <Button key={'AddMultiUrl'} onClick={this.addMultiUrlInput}>Add</Button>
                        <div className='section gf-form-group'>
                            <Button onClick={this.fetchMulti}>Fetch</Button>
                            <Button onClick={this.loaderSelector}>Load</Button>
					        <this.multiUrlDisplay list={options.saveImportUrl} />
				        </div>
					</Collapse>
                </div>
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
                <div className='section gf-form-group'>
                    <Button key={'delAll'} onClick={this.delAll}>Del all urls</Button>
                </div>
                <Button onClick={this.toDel}>toDel</Button>
            </div>
        )
    }

}
export default ImportInput;
