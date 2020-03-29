import React, { PureComponent } from 'react';
import { SimpleOptions, IBackground } from 'types';

import { PanelProps, SelectableValue } from '@grafana/data';
import { CustomScrollbar, Modal, Button } from '@grafana/ui';

import { PointClass } from 'Models/PointClass';
import { LinkClass } from 'Models/LinkClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import { RegionClass, ICoord4D } from 'Models/RegionClass';
import { TextObject } from 'Models/TextObjectClass';
import { LinkURLClass } from 'Models/LinkURLClass';
// import { LowerLimitClass } from 'Models/LowerLimitClass';

import { getResultQuery } from 'Functions/getResultQuery';

import { reqMetricPoint, reqMetricOrientedLink } from 'Functions/fetchMetrics';

import AddCoordinate from 'components/CoordinateSpace/addCoordinate';
import DrawRectangle from './components/Draw/drawRectangle';
import Legend from './components/legend';
// import DrawRectangleExtend from './components/Draw/drawRectangleExtend';
import DrawPoint from './components/Draw/drawPoint';
import DrawArrow from './components/Draw/drawArrow';
import DrawLinkWithCoordinates from './components/Draw/drawLinkWithCoordinates';
import DrawLinkWithPoints from './components/Draw/drawLinkWithPoints';
import DrawLinkWithRegions from './components/Draw/drawLinkWithRegions';
import DrawOrientedLink from './components/Draw/drawOrientedLink';
import { PositionParameterClass } from 'Models/PositionParameterClass';

interface IProps extends PanelProps<SimpleOptions> {

}

interface ILegend {
	hiddenLegend: boolean;
	x: number;
	y: number;
}

interface IState {
	// isUpdate: boolean;
	// sizePanel: number;
	idOrientedLink: number;
	valueButton: string;
	/**
	 * manage button
	 * [0] -> addNode
	 * [1] -> addLink
	 * [2] -> positionLegend
	 * [3] -> addPoint
	 * [4] -> addIncurvedLink
	 */
	buttonManage: boolean[];
	numberClickDiv: number;
	allActionButton: JSX.Element;
	// valueLegend: JSX.Element;
	// seuil: LowerLimitClass[];
	nbClickButton: boolean;
	legend: ILegend;
	// img: JSX.Element;
	svg: string;
	// loading: boolean;
	// url: string;
	displayRegion: JSX.Element;
	// idSVG: string;
	tooltip: JSX.Element;
}

/**
 * Affichage
 */
export class SimplePanel extends PureComponent<IProps, IState> {

	constructor(props: IProps) {
		super(props);
		this.state = {
			// isUpdate: false,
			// sizePanel: 300,
			idOrientedLink: this.props.options.indexOrientedLink,
			valueButton: '',
			buttonManage: [false, false, false, false, false],
			numberClickDiv: 0,
			allActionButton: <div></div>,
			// valueLegend: <div></div>,
			// seuil: [],
			nbClickButton: false,
			legend: { 'hiddenLegend': true, 'x': 0, 'y': 0 },
			// img: <div></div>,
			svg: '',
			// loading: false,
			// url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/tiger.svg',
			displayRegion: <div></div>,
			// idSVG: '',
			tooltip: <div>salut</div>,
		};
	}

	/**
	 * TODO
	 */
	// public fillCoordinate = (): JSX.Element => {
	// 	const { options } = this.props;
	// 	let mapItems: JSX.Element[];

	// 	mapItems = options.regionCoordinateSpace
	// 		.map((line: RegionClass, index) =>
	// 			<DrawRectangleExtend
	// 				key={'drawRectangleExtend' + index.toString()}
	// 				uneCoor={line}
	// 				useLimit={false}
	// 				limit={options.coordinateSpaceInitial}
	// 				onOptionsChange={this.props.onOptionsChange}
	// 				options={this.props.options}
	// 				data={this.props.data}
	// 				id={'region' + line.id.toString()}
	// 				isEnabled={!this.state.buttonManage[1]} />
	// 		);
	// 	return (
	// 		<ul>
	// 			{mapItems}
	// 		</ul>
	// 	);
	// }

	/**
	 * Display limit (coordinateSpaceInitial)
	 * @returns JSX.Element
	 */
	public defineLimit = (): JSX.Element => {
		const { coordinateSpaceInitial } = this.props.options;
		let jsxItems: JSX.Element;

		jsxItems = <DrawRectangle key='limitCoor' color='orange'
			coordinateInitial={coordinateSpaceInitial}
			id='initialSpace'
			onOptionsChange={this.props.onOptionsChange}
			options={this.props.options}
			data={this.props.data}
			isEnabled={!this.state.buttonManage[1]} />;
		return jsxItems;
	}


	/**
	 * to do
	 */
	public getCoordinatesToDrawPointWithClick = (event: any) => {
		let positionX: number = 0;
		let positionY: number = 0;
		const widthPanel: number = parseInt(this.props.options.baseMap.width, 10);
		const heightPanel: number = parseInt(this.props.options.baseMap.height, 10);

		const initialSpace: ICoord4D = this.props.options.coordinateSpaceInitial.coordinate;
		const xMin: number = parseInt(initialSpace.xMin, 10);
		const xMinPx: number = (xMin + 100) * (widthPanel / 200);
		const xMax: number = parseInt(initialSpace.xMax, 10);
		const xMaxPx: number = (xMax + 100) * (widthPanel / 200);
		const widthInitialSpace: number = xMaxPx - xMinPx;
		const yMin: number = parseInt(initialSpace.yMin, 10);
		const yMinPx: number = (yMin + 100) * (heightPanel / 200);
		const yMax: number = parseInt(initialSpace.yMax, 10);
		const yMaxPx: number = (yMax + 100) * (heightPanel / 200);
		const heightInitialSpace: number = yMaxPx - yMinPx;

		//positionX = Math.round(((event.nativeEvent.offsetX) - (widthPanel / 2)) * (100 / widthPanel)) * 2;
		//positionY = (Math.round(((event.nativeEvent.offsetY) - (heightPanel / 2)) * (100 / heightPanel)) * 2) * (-1);
		positionX = Math.round(((event.nativeEvent.offsetX) - (widthInitialSpace / 2)) * (100 / widthInitialSpace)) * 2;
		positionY = (Math.round(((event.nativeEvent.offsetY) - (heightInitialSpace / 2)) * (100 / heightInitialSpace)) * 2) * (-1);

		if (event.nativeEvent.target.id === 'initialSpace'
			|| event.nativeEvent.target.id === 'mainPanel'
		) {
			this.createPointToClick(positionX, positionY);
		}
	}

	public defineIdPoint = (): number => {
		let id: number = 1;
		if (this.props.options.arrayPoints.length === 0) {
			return id;
		} else {
			id = this.props.options.arrayPoints[this.props.options.arrayPoints.length - 1].id + 1;
			return id;
		}
	}

	/**
	 * to do
	 */
	public createPointToClick = (x: number, y: number) => {
		const id: number = this.defineIdPoint();
		const initTextObject: TextObject = new TextObject('', false, '', '', '',
			false,
			{
				'legendElement': '',
				'numericFormatElement': '',
				'unit': '',
				'displayObjectInText': false,
				// 'displayObjectPermanently': false,
				'addColorTextElement': false,
				'colorTextElement': 'white',
				'addColorBackElement': false,
				'colorBackElement': 'black',
			},
			{
				'legendElement': '',
				'numericFormatElement': '',
				'unit': '',
				'displayObjectInText': false,
				// 'displayObjectPermanently': false,
				'addColorTextElement': false,
				'colorTextElement': 'white',
				'addColorBackElement': false,
				'colorBackElement': 'black',
			});
		const parametrageMetric: LinkURLClass = new LinkURLClass('', '', '');
		const positionParameter: PositionParameterClass = new PositionParameterClass('0', '0', '0', '0', {}, {});
		const newPoint: PointClass = new PointClass(
			id, parametrageMetric, '', [], '', initTextObject,
			{
				'key': '', 'unit': '', 'format': '', 'keyValue': '', 'refId': '',
				'manageValue': 'avg',
			}, [],
			false, false, false, positionParameter,
			'point' + id.toString(),
			'',
			{},
			{ label: 'Yes', value: 'true' },
			{ label: 'Circle', value: 'circle' },
			{ label: 'Medium', value: 'medium' },
			{ label: 'Medium', value: 'medium' },
			'0',
			x.toString(),
			y.toString(),
			'black',
			[],
			[],
			[],
			[]
		);

		const newArrayPoint: PointClass[] = this.props.options.arrayPoints;
		newArrayPoint.push(newPoint);
		this.props.onOptionsChange({
			...this.props.options,
			indexPoint: id,
			arrayPoints: newArrayPoint,
		});

		setTimeout(() => {
			this.displayPoint();
		}, 100);
	}

	/**
	 * to do
	 */
	public displayPoint() {
		const mapItems: JSX.Element[] = [];

		this.getValueMainMetricOfPoint();

		this.props.options.arrayPoints.forEach((line: PointClass) => {
			if (line.shape.value === 'arrow') {

				const item: JSX.Element = <DrawArrow key={'point' + line.id.toString()} coordinateSpace={line.coordinateSpace}
					drawGraphicmarker={line.drawGraphicMarker} shape={line.shape}
					sizeWidth={line.sizeWidth} sizeHeight={line.sizeHeight} rotate={line.rotateArrow}
					positionShapeX={line.positionShapeX} positionShapeY={line.positionShapeY} label={line.label}
					height={parseInt(this.props.options.baseMap.height, 10)} police={this.props.options.display.police}
					sizePolice={this.props.options.display.size} color={line.color}
					idPoint={'point' + line.id.toString()} name={line.name}
					orientedLinksIn={line.associateOrientedLinksIn} orientedLinksOut={line.associateOrientedLinksOut}
					textObject={line.textObj} seuil={line.lowerLimit} />;

				mapItems.push(item);

			} else if (line.shape.value === 'circle' || line.shape.value === 'cross') {

				const item: JSX.Element = <DrawPoint key={'point' + line.id.toString()} coordinateSpace={line.coordinateSpace}
					drawGraphicMarker={line.drawGraphicMarker} shape={line.shape} size={line.sizeWidth}
					positionShapeX={line.positionShapeX} positionShapeY={line.positionShapeY} label={line.label}
					widthImage={parseInt(this.props.options.baseMap.width, 10)}
					heightImage={parseInt(this.props.options.baseMap.height, 10)}
					police={this.props.options.display.police} sizePolice={this.props.options.display.size} color={line.color}
					idPoint={'point' + line.id.toString()} name={line.name}
					options={this.props.options} onOptionsChange={this.props.onOptionsChange} data={this.props.data}
					textObject={line.textObj} seuil={line.lowerLimit}
					valueMainMetric={line.valueMetric} refMainMetric={line.mainMetric.refId || ''}
					associateOrientedLinkIn={line.associateOrientedLinksIn}
					associateOrientedLinkOut={line.associateOrientedLinksOut}
					labelPositionX={line.positionParameter.labelAPositionX}
					labelPositionY={line.positionParameter.labelAPositionY}
					tooltipPosition={line.positionParameter.tooltipPositionA} />;

				mapItems.push(item);
			}
		});

		return (
			<div>
				{mapItems}
			</div>
		);
	}

	/** display link with coordinate */
	public displayLink() {
		const { options } = this.props;
		const mapItems: JSX.Element[] = [];
		const arrayLinks: LinkClass[] = options.arrayLinks;

		arrayLinks.forEach((link: LinkClass) => {
			let item: JSX.Element = <div></div>;
			if (link.defineHowToGetCoordonate.value === 'coordinate') {
				item = <DrawLinkWithCoordinates
					key={'link' + link.id.toString()}
					pointAPositionX={link.pointAPositionX}
					pointAPositionY={link.pointAPositionY}
					pointBPositionX={link.pointBPositionX}
					pointBPositionY={link.pointBPositionY}
					colorA={link.colorCoordinateA}
					colorB={link.colorCoordinateB}
					orientationLink={link.orientationLink.value || ''}
					labelA={link.labelLinkA}
					labelB={link.labelLinkB}
					labelAPositionX={link.positionXLabelA}
					labelAPositionY={link.positionYLabelA}
					labelBPositionX={link.positionXLabelB}
					labelBPositionY={link.positionYLabelB}
					height={parseInt(this.props.options.baseMap.height, 10)}
					name={link.name}
				/>;
			} else if (link.defineHowToGetCoordonate.value === 'point') {
				item = <DrawLinkWithPoints
					key={'link' + link.id.toString()}
					pointIn={link.pointIn}
					pointOut={link.pointOut}
					labelA={link.labelLinkA}
					labelB={link.labelLinkB}
					labelAPositionX={link.positionXLabelA}
					labelAPositionY={link.positionYLabelA}
					labelBPositionX={link.positionXLabelB}
					labelBPositionY={link.positionYLabelB}
					orientationLink={link.orientationLink.value || ''}
					height={parseInt(this.props.options.baseMap.height, 10)}
					name={link.name}
				/>;
			} else if (link.defineHowToGetCoordonate.value === 'region') {
				item = <DrawLinkWithRegions
					key={'link' + link.id.toString()}
					regionIn={link.regionIn}
					regionOut={link.regionOut}
					colorA={link.colorRegionIn}
					colorB={link.colorRegionOut}
					labelA={link.labelLinkA}
					labelB={link.labelLinkB}
					labelAPositionX={link.positionXLabelA}
					labelAPositionY={link.positionYLabelA}
					labelBPositionX={link.positionXLabelB}
					labelBPositionY={link.positionYLabelB}
					orientationLink={link.orientationLink.value || ''}
					height={parseInt(this.props.options.baseMap.height, 10)}
					name={link.name}
				/>;
			}
			mapItems.push(item);
		});
		return (
			<ul>
				{mapItems}
			</ul>
		);
	}

	/**
	 * to do
	 */
	public addAssociateOrientedLinkToPoint = (
		namePointIn: string, namePointOut: string, indexOrientedLinkAssociate: number) => {
		let index: number = 0;
		this.props.options.arrayPoints.forEach((point) => {
			const name: string = point.label || point.name;
			if (namePointIn === name) {
				this.props.options.arrayOrientedLinks.forEach((orientedLink) => {
					if (orientedLink.id === indexOrientedLinkAssociate) {
						this.props.options.arrayPoints[index].associateOrientedLinksIn.push(
							{ label: orientedLink.label, name: orientedLink.name })
					}
				});
			} else if (namePointOut === name) {
				this.props.options.arrayOrientedLinks.forEach((orientedLink) => {
					if (orientedLink.id === indexOrientedLinkAssociate) {
						this.props.options.arrayPoints[index].associateOrientedLinksOut.push(
							{ label: orientedLink.label, name: orientedLink.name })
					}
				});
			}
			index++;
		});
	}

	/**
	 * to do
	 */
	public updateAssociateOrientedLinkInToPoint = () => {
		let indexPoint: number = 0;
		this.props.options.arrayPoints.forEach((point) => {
			let indexAssociateOrientedLinkIn: number = 0;
			point.associateOrientedLinksIn.forEach((oneAssociateOrientedLinksIn) => {
				let orientedLinkExist: boolean = false;
				this.props.options.arrayOrientedLinks.forEach((orientedLink) => {
					if (oneAssociateOrientedLinksIn.name === orientedLink.name) {
						orientedLinkExist = true;
						if (orientedLink.label) {
							this.props.options.arrayPoints[indexPoint]
								.associateOrientedLinksIn[indexAssociateOrientedLinkIn] = {
								label: orientedLink.label, name: orientedLink.name,
							};
						} else {
							this.props.options.arrayPoints[indexPoint]
								.associateOrientedLinksIn[indexAssociateOrientedLinkIn] = {
								label: '', name: orientedLink.name,
							};
						}
					};
				});
				if (orientedLinkExist === false) {
					this.props.options.arrayPoints[indexPoint].associateOrientedLinksIn.splice(indexAssociateOrientedLinkIn, 1)
				}
				indexAssociateOrientedLinkIn++;
			});
			indexPoint++;
		});
	}

	/**
	 * to do
	 */
	public updateAssociateOrientedLinkOutToPoint = () => {
		let indexPoint: number = 0;
		this.props.options.arrayPoints.forEach((point) => {
			let indexAssociateOrientedLinkOut: number = 0;
			point.associateOrientedLinksOut.forEach((oneAssociateOrientedLinksOut) => {
				let orientedLinkExist: boolean = false;
				this.props.options.arrayOrientedLinks.forEach((orientedLink) => {
					if (oneAssociateOrientedLinksOut.name === orientedLink.name) {
						orientedLinkExist = true;
						if (orientedLink.label) {
							this.props.options.arrayPoints[indexPoint]
								.associateOrientedLinksOut[indexAssociateOrientedLinkOut] = {
								label: orientedLink.label, name: orientedLink.name,
							};
						} else {
							this.props.options.arrayPoints[indexPoint]
								.associateOrientedLinksOut[indexAssociateOrientedLinkOut] = {
								label: '', name: orientedLink.name,
							};
						}
					};
				});
				if (orientedLinkExist === false) {
					this.props.options.arrayPoints[indexPoint].associateOrientedLinksOut.splice(indexAssociateOrientedLinkOut, 1)
				}
				indexAssociateOrientedLinkOut++;
			});
			indexPoint++;
		});
	}

	/**
	 * to do
	 */
	public resetCoordinatesToDrawLinkWithClick = () => {

		this.props.options.coordinatesToDrawLinkWithClick[1].labelPoint = '';
		this.props.options.coordinatesToDrawLinkWithClick[1].point = {};
		this.props.options.coordinatesToDrawLinkWithClick[1].labelRegion = '';
		this.props.options.coordinatesToDrawLinkWithClick[1].region = {};
		this.props.options.coordinatesToDrawLinkWithClick[2].labelPoint = '';
		this.props.options.coordinatesToDrawLinkWithClick[2].point = {};
		this.props.options.coordinatesToDrawLinkWithClick[2].labelRegion = '';
		this.props.options.coordinatesToDrawLinkWithClick[2].region = {};
	}

	/** get coordinate when use click in panel */
	public getCoordinatesToDrawOrientedLinkWithClick = (event: any) => {
		let positionX: number = 0;
		let positionY: number = 0;
		const coordinates = this.props.options.coordinatesToDrawLinkWithClick;
		const objectIn: any = coordinates[1];
		const objectOut: any = coordinates[2];
		const pointC: any = coordinates[3];
		const heightPanel: number = parseInt(this.props.options.baseMap.height, 10);
		const widthPanel: number = parseInt(this.props.options.baseMap.width, 10);
		const initialSpace: ICoord4D = this.props.options.coordinateSpaceInitial.coordinate;
		const xMin: number = parseInt(initialSpace.xMin, 10);
		const xMinPx: number = (xMin + 100) * (widthPanel / 200);
		const xMax: number = parseInt(initialSpace.xMax, 10);
		const xMaxPx: number = (xMax + 100) * (widthPanel / 200)
		const widthInitialSpace: number = xMaxPx - xMinPx;
		const yMin: number = parseInt(initialSpace.yMin, 10);
		const yMinPx: number = (yMin + 100) * (heightPanel / 200);
		const yMax: number = parseInt(initialSpace.yMax, 10);
		const yMaxPx: number = (yMax + 100) * (heightPanel / 200);
		const heightInitialSpace: number = yMaxPx - yMinPx;

		if (event.nativeEvent.target.id === 'initialSpace') {

			positionX = Math.round(((event.nativeEvent.offsetX) - (widthInitialSpace / 2)) * (100 / widthInitialSpace)) * 2;
			positionY = (Math.round(((event.nativeEvent.offsetY) - (heightInitialSpace / 2)) * (100 / heightInitialSpace)) * 2);

			if (coordinates[0].id === 0) {
				objectIn.x = positionX;
				objectIn.y = positionY * (-1);
				coordinates[0].id++;
			} else if (coordinates[0].id === 1) {
				objectOut.x = positionX;
				objectOut.y = positionY * (-1);
				pointC.x = ((parseInt(objectIn.x, 10) + parseInt(objectOut.x, 10)) / 2).toString();
				pointC.y = ((parseInt(objectIn.y, 10) + parseInt(objectOut.y, 10)) / 2).toString();
				coordinates[0].id = 0;
				this.createOrientedLinkToClick({ label: 'No', value: false });
				this.resetCoordinatesToDrawLinkWithClick();
			}

		} else if (event.nativeEvent.target.id.startsWith('point')) {
			const id: number = parseInt(event.nativeEvent.target.id.charAt(5) + event.nativeEvent.target.id.charAt(6), 10);
			const arrayPoint: PointClass[] = this.props.options.arrayPoints;

			arrayPoint.forEach((point: PointClass) => {
				if (point.id === id) {
					const coordinates = this.props.options.coordinatesToDrawLinkWithClick;
					const name: string = point.label || point.name;

					if (coordinates[0].id === 0) {
						objectIn.x = point.positionShapeX;
						objectIn.y = point.positionShapeY;
						objectIn.labelPoint = name;
						objectIn.point = point;
						coordinates[0].id++;
					} else if (coordinates[0].id === 1) {
						objectOut.x = point.positionShapeX;
						objectOut.y = point.positionShapeY;
						objectOut.labelPoint = name;
						objectOut.point = point;
						pointC.x = ((parseInt(objectIn.x, 10) + parseInt(objectOut.x, 10)) / 2).toString();
						pointC.y = ((parseInt(objectIn.y, 10) + parseInt(objectOut.y, 10)) / 2).toString();
						coordinates[0].id = 0;

						this.createOrientedLinkToClick({ label: 'No', value: false });
						this.resetCoordinatesToDrawLinkWithClick();
					}
				}
			});
		} else {
			const arrayRegion: RegionClass[] = this.props.options.regionCoordinateSpace;

			arrayRegion.forEach((region: RegionClass) => {
				const xMin: number = parseInt(region.coords.xMin, 10);
				const xMax: number = parseInt(region.coords.xMax, 10);
				const yMin: number = parseInt(region.coords.yMin, 10);
				const yMax: number = parseInt(region.coords.yMax, 10);

				if (event.nativeEvent.target.id.startsWith('region')) {
					const id: number = parseInt(event.nativeEvent.target.id.charAt(6) + event.nativeEvent.target.id.charAt(7), 10);
					if (id === region.id) {
						const coordinates = this.props.options.coordinatesToDrawLinkWithClick;

						positionX = (xMin + xMax) / 2;
						positionY = (yMax + yMin) / 2;
						if (coordinates[0].id === 0) {
							objectIn.x = positionX;
							objectIn.y = positionY;
							objectIn.labelRegion = region.label;
							objectIn.region = region;
							coordinates[0].id++;
						} else if (coordinates[0].id === 1) {
							objectOut.x = positionX;
							objectOut.y = positionY;
							objectOut.labelRegion = region.label;
							objectOut.region = region;
							pointC.x = ((parseInt(objectIn.x, 10) + parseInt(objectOut.x, 10)) / 2).toString();
							pointC.y = ((parseInt(objectIn.y, 10) + parseInt(objectOut.y, 10)) / 2).toString();
							coordinates[0].id = 0;
							this.createOrientedLinkToClick({ label: 'No', value: false });
							this.resetCoordinatesToDrawLinkWithClick();
						}
					}
				} else {
					const id: number = parseInt(event.nativeEvent.target.offsetParent.id.charAt(6)
						+ event.nativeEvent.target.offsetParent.id.charAt(7), 10);

					if (id === region.id) {
						const coordinates = this.props.options.coordinatesToDrawLinkWithClick;

						positionX = (xMin + xMax) / 2;
						positionY = (yMax + yMin) / 2;
						if (coordinates[0].id === 0) {
							objectIn.x = positionX;
							objectIn.y = positionY;
							objectIn.labelRegion = region.label;
							objectIn.region = region;
							coordinates[0].id++;
						} else if (coordinates[0].id === 1) {
							objectOut.x = positionX;
							objectOut.y = positionY;
							objectOut.labelRegion = region.label;
							objectOut.region = region;
							pointC.x = ((parseInt(objectIn.x, 10) + parseInt(objectOut.x, 10)) / 2).toString();
							pointC.y = ((parseInt(objectIn.y, 10) + parseInt(objectOut.y, 10)) / 2).toString();
							coordinates[0].id = 0;
							this.createOrientedLinkToClick({ label: 'No', value: false });
							this.resetCoordinatesToDrawLinkWithClick();
						}
					}
				}
			});
		}
	}

	public getCoordinatesToDrawIncurvedOrientedLinkWithClick = (event: any) => {
		let positionX: number = 0;
		let positionY: number = 0;
		const coordinates = this.props.options.coordinatesToDrawLinkWithClick;
		const objectIn: any = coordinates[1];
		const objectOut: any = coordinates[2];
		const pointC: any = coordinates[3];
		const heightPanel: number = parseInt(this.props.options.baseMap.height, 10);
		const widthPanel: number = parseInt(this.props.options.baseMap.width, 10);
		const initialSpace: ICoord4D = this.props.options.coordinateSpaceInitial.coordinate;
		const xMin: number = parseInt(initialSpace.xMin, 10);
		const xMinPx: number = (xMin + 100) * (widthPanel / 200);
		const xMax: number = parseInt(initialSpace.xMax, 10);
		const xMaxPx: number = (xMax + 100) * (widthPanel / 200);
		const widthInitialSpace: number = xMaxPx - xMinPx;
		const yMin: number = parseInt(initialSpace.yMin, 10);
		const yMinPx: number = (yMin + 100) * (heightPanel / 200);
		const yMax: number = parseInt(initialSpace.yMax, 10);
		const yMaxPx: number = (yMax + 100) * (heightPanel / 200);
		const heightInitialSpace: number = yMaxPx - yMinPx;

		if (//event.nativeEvent.target.id === 'mainPanel' ||
			event.nativeEvent.target.id === 'initialSpace'
		) {

			positionX = Math.round(((event.nativeEvent.offsetX) - (widthInitialSpace / 2)) * (100 / widthInitialSpace)) * 2;
			positionY = (Math.round(((event.nativeEvent.offsetY) - (heightInitialSpace / 2)) * (100 / heightInitialSpace)) * 2);

			if (coordinates[0].id === 0) {
				objectIn.x = positionX;
				objectIn.y = positionY * (-1);
				coordinates[0].id++;
			} else if (coordinates[0].id === 1) {
				objectOut.x = positionX;
				objectOut.y = positionY * (-1);
				coordinates[0].id++;
			} else if (coordinates[0].id === 2) {
				pointC.x = positionX;
				pointC.y = positionY * (-1);
				coordinates[0].id = 0;
				this.createOrientedLinkToClick({ label: 'Yes', value: true });
				this.resetCoordinatesToDrawLinkWithClick();
			}

		} else if (event.nativeEvent.target.id.startsWith('point')) {
			const id: number = parseInt(event.nativeEvent.target.id.charAt(5) + event.nativeEvent.target.id.charAt(6), 10);
			const arrayPoint: PointClass[] = this.props.options.arrayPoints;

			arrayPoint.forEach((point: PointClass) => {
				if (point.id === id) {
					const coordinates = this.props.options.coordinatesToDrawLinkWithClick;
					const name: string = point.label || point.name;

					if (coordinates[0].id === 0) {
						objectIn.x = point.positionShapeX;
						objectIn.y = point.positionShapeY;
						objectIn.labelPoint = name;
						objectIn.point = point;
						coordinates[0].id++;
					} else if (coordinates[0].id === 1) {
						objectOut.x = point.positionShapeX;
						objectOut.y = point.positionShapeY;
						objectOut.labelPoint = name;
						objectOut.point = point;
						coordinates[0].id++;
					} else if (coordinates[0].id === 2) {
						pointC.x = point.positionShapeX;
						pointC.y = point.positionShapeY;
						coordinates[0].id = 0;
						this.createOrientedLinkToClick({ label: 'Yes', value: true });
						this.resetCoordinatesToDrawLinkWithClick();
					}
				}
			});
		} else {
			const arrayRegion: RegionClass[] = this.props.options.regionCoordinateSpace;

			arrayRegion.forEach((region: RegionClass) => {
				const xMin: number = parseInt(region.coords.xMin, 10);
				const xMax: number = parseInt(region.coords.xMax, 10);
				const yMin: number = parseInt(region.coords.yMin, 10);
				const yMax: number = parseInt(region.coords.yMax, 10);

				if (event.nativeEvent.target.id.startsWith('region')) {
					const id: number = parseInt(event.nativeEvent.target.id.charAt(6) + event.nativeEvent.target.id.charAt(7), 10);
					if (id === region.id) {
						const coordinates = this.props.options.coordinatesToDrawLinkWithClick;
						positionX = (xMin + xMax) / 2;
						positionY = (yMax + yMin) / 2;
						if (coordinates[0].id === 0) {
							objectIn.x = positionX;
							objectIn.y = positionY;
							objectIn.labelRegion = region.label;
							objectIn.region = region;
							coordinates[0].id++;
						} else if (coordinates[0].id === 1) {
							objectOut.x = positionX;
							objectOut.y = positionY;
							objectOut.labelRegion = region.label;
							objectOut.region = region;
							coordinates[0].id++;

						} else if (coordinates[0].id === 0) {
							pointC.x = positionX;
							pointC.y = positionY;
							coordinates[0].id = 0;
							this.createOrientedLinkToClick({ label: 'Yes', value: true });
							this.resetCoordinatesToDrawLinkWithClick();
						}
					}
				} else {
					const id: number = parseInt(event.nativeEvent.target.offsetParent.id.charAt(6)
						+ event.nativeEvent.target.offsetParent.id.charAt(7), 10);

					if (id === region.id) {
						const coordinates = this.props.options.coordinatesToDrawLinkWithClick;

						positionX = (xMin + xMax) / 2;
						positionY = (yMax + yMin) / 2;
						if (coordinates[0].id === 0) {
							objectIn.x = positionX;
							objectIn.y = positionY;
							objectIn.labelRegion = region.label;
							objectIn.region = region;
							coordinates[0].id++;
						} else if (coordinates[0].id === 1) {
							objectOut.x = positionX;
							objectOut.y = positionY;
							objectOut.labelRegion = region.label;
							objectOut.region = region;
							coordinates[0].id++;
						} else if (coordinates[0].id === 2) {
							pointC.x = positionX;
							pointC.y = positionY;
							coordinates[0].id = 0;
							this.createOrientedLinkToClick({ label: 'Yes', value: true });
							this.resetCoordinatesToDrawLinkWithClick();
						}
					}
				}
			});
		}
	}

	// public defineAssociateOrientedLinkToRegion(): OrientedLinkClass[] {
	// 	const arrayRegion: RegionClass[] = this.props.options.regionCoordinateSpace;
	// 	const arrayAllOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
	// 	const arrayOrientedLinkAssociateRegionIn: OrientedLinkClass[] = [];
	// 	const arrayOrientedLinkAssociateRegionOut: OrientedLinkClass[] = [];
	// 	let arrayToReturn: OrientedLinkClass[] = [];
	// 	arrayRegion.forEach((region) => {
	// 		arrayAllOrientedLink.forEach((orientedLink) => {
	// 			arrayToReturn = [];
	// 			if (region.id === orientedLink.regionIn.id) {
	// 				arrayOrientedLinkAssociateRegionIn.push(orientedLink);
	// 				arrayToReturn = arrayOrientedLinkAssociateRegionIn;
	// 				region.orientedLink = arrayToReturn;
	// 			}
	// 			if (region.id === orientedLink.regionOut.id) {
	// 				arrayOrientedLinkAssociateRegionOut.push(orientedLink);
	// 				arrayToReturn = arrayOrientedLinkAssociateRegionOut;
	// 				region.orientedLink = arrayToReturn;
	// 			}
	// 		});
	// 	});
	// 	return arrayToReturn;
	// }

	/**
	 * to do
	 */
	public defineIdOrientedLink = (): number => {
		let id: number = 1;
		if (this.props.options.arrayOrientedLinks.length === 0) {
			return id;
		} else {
			id = this.props.options.arrayOrientedLinks[this.props.options.arrayOrientedLinks.length - 1].id + 1;
			return id;
		}
	}

	/**
	 * to do
	 */
	public createOrientedLinkToClick = (isIncurved: SelectableValue<boolean>) => {
		const coordinates = this.props.options.coordinatesToDrawLinkWithClick;
		const id: number = this.defineIdOrientedLink();
		const name: string = 'orientedLink' + id.toString();
		const zIndex: number = this.props.options.zIndexOrientedLink + 1;
		const objectIn: any = coordinates[1];
		const objectOut: any = coordinates[2];
		const pointC: any = coordinates[3];
		const initTextObject: TextObject = new TextObject('', false, '', '', '',
			false,
			{
				'legendElement': '',
				'numericFormatElement': '',
				'unit': '',
				'displayObjectInText': false,
				// 'displayObjectPermanently': false,
				'addColorTextElement': false,
				'colorTextElement': 'white',
				'addColorBackElement': false,
				'colorBackElement': 'black',
			},
			{
				'legendElement': '',
				'numericFormatElement': '',
				'unit': '',
				'displayObjectInText': false,
				// 'displayObjectPermanently': false,
				'addColorTextElement': false,
				'colorTextElement': 'white',
				'addColorBackElement': false,
				'colorBackElement': 'black',
			});
		const parametrageMetric: LinkURLClass = new LinkURLClass('', '', '');
		const positionParameter: PositionParameterClass = new PositionParameterClass('0', '0', '0', '0', {}, {});

		const newOrientedLink: OrientedLinkClass = new OrientedLinkClass(
			id,
			parametrageMetric, '', [], '', initTextObject,
			{
				'key': '', 'unit': '', 'format': '', 'keyValue': '', 'refId': '',
				'manageValue': 'avg',
			}, [],
			false, false, false, positionParameter,
			name,
			{ label: 'Monodirectional', value: 'AB' },
			objectIn.x.toString(),
			objectIn.y.toString(),
			'#5794F2',
			objectOut.x.toString(),
			objectOut.y.toString(),
			'#E54658',
			'',
			'',
			objectIn.labelPoint,
			objectOut.labelPoint,
			objectIn.labelRegion,
			objectOut.labelRegion,
			zIndex,
			pointC.x,
			pointC.y,
			isIncurved
		);
		const newArrayOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
		newArrayOrientedLink.push(newOrientedLink);
		this.props.onOptionsChange({
			...this.props.options,
			arrayOrientedLinks: newArrayOrientedLink,
			indexOrientedLink: id,
			zIndexOrientedLink: zIndex,
		});

		this.addAssociateOrientedLinkToPoint(objectIn.labelPoint || '', objectOut.labelPoint || '', newOrientedLink.id);

		setTimeout(() => {
			this.displayOrientedLink();
		}, 100);
	}

	/**
	 * to do
	 */
	public displayOrientedLink() {

		const arrayOrientedLink = this.props.options.arrayOrientedLinks;
		const mapItems: JSX.Element[] = [];
		let item: JSX.Element = <div></div>;
		this.getValueMainMetricOfOrientedLink();
		arrayOrientedLink.forEach((orientedLink: OrientedLinkClass) => {
			item = <DrawOrientedLink
				key={'orientedLink' + orientedLink.id.toString()}
				id={orientedLink.id.toString()}
				orientationLink={orientedLink.orientationLink.value || ''}
				pointAPositionX={orientedLink.pointAPositionX}
				pointAPositionY={orientedLink.pointAPositionY}
				pointBPositionX={orientedLink.pointBPositionX}
				pointBPositionY={orientedLink.pointBPositionY}
				colorA={orientedLink.colorCoordinateA}
				colorB={orientedLink.colorCoordinateB}
				associatePointIn={orientedLink.pointIn}
				associatePointOut={orientedLink.pointOut}
				associateRegionIn={orientedLink.regionIn}
				associateRegionOut={orientedLink.regionOut}
				widthImage={parseInt(this.props.options.baseMap.width, 10)}
				heightImage={parseInt(this.props.options.baseMap.height, 10)}
				label={orientedLink.label}
				name={orientedLink.name}
				valueMainMetricA={orientedLink.valueMainMetricA}
				valueMainMetricB={orientedLink.valueMainMetricB}
				refMainMetric={orientedLink.mainMetric.refId || ''}
				options={this.props.options}
				onOptionsChange={this.props.onOptionsChange}
				data={this.props.data}
				textObject={orientedLink.textObj}
				seuil={orientedLink.lowerLimit}
				labelAPositionX={orientedLink.positionParameter.labelAPositionX}
				labelAPositionY={orientedLink.positionParameter.labelAPositionY}
				labelBPositionX={orientedLink.positionParameter.labelBPositionX}
				labelBPositionY={orientedLink.positionParameter.labelBPositionY}
				tooltipPositionA={orientedLink.positionParameter.tooltipPositionA}
				tooltipPositionB={orientedLink.positionParameter.tooltipPositionB}
				zIndex={orientedLink.zIndex}
				pointCPositionX={orientedLink.pointCPositionX}
				pointCPositionY={orientedLink.pointCPositionY}
				isIncurved={orientedLink.isIncurved}
			/>;
			mapItems.push(item);
		});
		this.updateAssociateOrientedLinkInToPoint();
		this.updateAssociateOrientedLinkOutToPoint();
		//this.defineAssociateOrientedLinksToPoint();
		//this.defineAssociateOrientedLinkToRegion();
		return (
			<div>
				{mapItems}
			</div>
		);
	}

	/**
	 * to do
	 */
	public getValueMainMetricOfPoint() {
		const arrayPoints: PointClass[] = this.props.options.arrayPoints;
		// let valueMainMetric: number = 0;
		// let totalValuesCount: number = 0;

		arrayPoints.forEach((point) => {
			reqMetricPoint(point, this.props);
			const value: number | null = getResultQuery(point.mainMetric);

			point.valueMetric = value ? value.toString() : '-';

			// const key: string = point.mainMetric.key;
			// const keyValue: string = point.mainMetric.keyValue;
			// if (point.mainMetric.returnQuery && point.mainMetric.returnQuery[0]?.fields[0]) {
			// 	if (point.mainMetric.returnQuery[0].fields[0].labels) {
			// 		if (point.mainMetric.returnQuery[0].fields[0].labels[key] === keyValue) {
			// 			const sizeQuery: number = point.mainMetric.returnQuery[0].fields[0].values.length || 0;
			// 			for (let i = 0; i < sizeQuery; i++) {
			// 				if (point.mainMetric.returnQuery[0].fields[0].values.get(i)) {
			// 					totalValuesCount++;
			// 					valueMainMetric += point.mainMetric.returnQuery[0].fields[0].values.get(i);
			// 				}
			// 			}
			// 			point.valueMetric = Math.round((valueMainMetric / totalValuesCount)).toString();
			// 		} else {
			// 			point.valueMetric = 'no value';
			// 		}
			// 	}
			// }
		});
	}

	/**
	 * to do
	 */
	public getValueMainMetricOfOrientedLink() {
		const arrayOrientedLinks: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
		// let valueMainMetric: number = 0;
		// let totalValuesCount: number = 0;

		arrayOrientedLinks.forEach((orientedLink) => {
			reqMetricOrientedLink(orientedLink, this.props);
			const value: number | null = getResultQuery(orientedLink.mainMetric);
			console.log(orientedLink.mainMetric)
			orientedLink.valueMainMetricA = value ? value.toString() : '-';
			orientedLink.valueMainMetricB = value ? value.toString() : '-';
			// const key: string = orientedLink.mainMetric.key;
			// const keyValue: string = orientedLink.mainMetric.keyValue;
			// if (orientedLink.mainMetric.returnQuery && orientedLink.mainMetric.returnQuery.length > 0
			// 	&& orientedLink.mainMetric.returnQuery[0].fields[0]) {
			// 	if (orientedLink.mainMetric.returnQuery[0].fields[0].labels) {
			// 		if (orientedLink.mainMetric.returnQuery[0].fields[0].labels[key] === keyValue) {
			// 			const sizeQuery: number = orientedLink.mainMetric.returnQuery[0].fields[0].values.length || 0;
			// 			for (let i = 0; i < sizeQuery; i++) {
			// 				if (orientedLink.mainMetric.returnQuery[0].fields[0].values.get(i)) {
			// 					totalValuesCount++;
			// 					valueMainMetric += orientedLink.mainMetric.returnQuery[0].fields[0].values.get(i);
			// 				}
			// 			}
			// 			orientedLink.valueMainMetricA = Math.round((valueMainMetric / totalValuesCount)).toString();
			// 			orientedLink.valueMainMetricB = Math.round((valueMainMetric / totalValuesCount)).toString();
			// 		} else {
			// 			orientedLink.valueMainMetricA = 'no value';
			// 			orientedLink.valueMainMetricB = 'no value';
			// 		}
			// 	}
			// }
		});
	}


	// public defineAssociateLinksToPoint() {
	// 	const arrayAssociateLinks = this.props.options.arrayLinks;
	// 	const arrayPoints = this.props.options.arrayPoints;

	// 	arrayPoints.forEach((point) => {
	// 		point.associateLinkIn = [];
	// 		point.associateLinkOut = [];
	// 	});
	// 	arrayAssociateLinks.forEach((link) => {
	// 		arrayPoints.forEach((point) => {
	// 			if (link.pointIn.value?.id === point.id) {
	// 				point.associateLinkIn.push(link);
	// 			} else if (link.pointOut.value?.id === point.id) {
	// 				point.associateLinkOut.push(link);
	// 			}
	// 		});
	// 	});
	// }

	// public defineAssociateOrientedLinksToPoint() {
	// 	const arrayOrientedLinks = this.props.options.arrayOrientedLinks;
	// 	const arrayPoints = this.props.options.arrayPoints;

	// 	arrayPoints.forEach((point) => {
	// 		point.associateOrientedLinksIn = [];
	// 		point.associateOrientedLinksOut = [];
	// 	});
	// 	arrayOrientedLinks.forEach((orientedLink) => {
	// 		arrayPoints.forEach((point) => {
	// 			if (orientedLink.pointIn.value?.id === point.id) {
	// 				point.associateOrientedLinksIn.push(orientedLink);
	// 			} else if (orientedLink.pointOut.value?.id === point.id) {
	// 				point.associateOrientedLinksOut.push(orientedLink);
	// 			}
	// 		});
	// 	});
	// }


	public changeValueButtonToLink = () => {
		this.setState({
			valueButton: 'link',
		});
	}

	public changeValueButtonToIncurvedLink = () => {
		this.setState({
			valueButton: 'incurvedLink',
		});
	}

	public changeValueButtonToPoint = () => {
		this.setState({
			valueButton: 'point',
		});
	}

	// public changeDisplayButtonlegend = () => {
	// 	this.setState({
	// 		valueLegend: <div></div>,
	// 	});
	// }


	public getCoordinates = (event: any) => {

		const valueButton = this.state.valueButton;
		if (this.state.numberClickDiv === 0) {
			return;
		}
		if (valueButton === 'link') {
			this.getCoordinatesToDrawOrientedLinkWithClick(event);
		} else if (valueButton === 'incurvedLink') {
			this.getCoordinatesToDrawIncurvedOrientedLinkWithClick(event);
		} else if (valueButton === 'point') {
			this.getCoordinatesToDrawPointWithClick(event);
		}

	}

	/**
	 * add button click to manage region, point, oriented link, position legend
	 */
	public updateButtonCss = () => {
		const final: JSX.Element = <div id='allButton'  >
			<Button style={{ marginLeft: '5%' }} variant={this.state.buttonManage[0] ? 'danger' : 'primary'}
				className='button' onClick={this.addNode}>Add Region</Button>

			<Button style={{ marginLeft: '5%' }} variant={this.state.buttonManage[3] ? 'danger' : 'primary'}
				className='button' onClick={this.addPoint}>Add Point</Button>

			<Button style={{ marginLeft: '5%' }} variant={this.state.buttonManage[1] ? 'danger' : 'primary'}
				className='button' onClick={this.addLink}>Add Oriented Link</Button>

			<Button style={{ marginLeft: '5%' }} variant={this.state.buttonManage[4] ? 'danger' : 'primary'}
				className='button' onClick={this.addIncurvedLink}>Add Incurved Oriented Link</Button>

			<Button style={{ marginLeft: '5%' }} variant={this.state.buttonManage[2] ? 'danger' : 'primary'}
				className='button' onClick={() => this.resetButtonManage(2)}>Position Legend</Button>

		</div>;
		this.setState({
			allActionButton: final,
		});
	}

	// public display_Button = () => {
	// 	const ultracall = document.getElementById('allButton');
	// 	ultracall?.addEventListener('click', () => {
	// 		ultracall.style.display = 'inline-block';
	// 	})

	// }

	public callMethod = async () => {
		if (this.state.numberClickDiv === 0) {
			this.setState({ numberClickDiv: 1 });
		} else {
			await this.setAsyncButtonManage({
				buttonManage: [false, false, false, false, false],
			});
			this.setState({
				numberClickDiv: 0,
			});
			this.updateButtonCss();
		}
	}

	public setAsyncButtonManage = (state: {
		buttonManage: boolean[],
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	public resetButtonManage = async (index: number) => {
		let tmp: boolean[] = this.state.buttonManage;
		const oldValue: boolean = tmp[index];

		tmp = [false, false, false, false, false];
		if (oldValue) {
			tmp[index] = false;
			this.setState({
				numberClickDiv: 0,
			});
		} else {
			tmp[index] = true;
			this.setState({
				numberClickDiv: 1,
			});
		}
		await this.setAsyncButtonManage({
			buttonManage: tmp,
		});
		this.updateButtonCss();
	}

	public addNode = () => {
		this.setState(
			(prevState: IState) => ({
				nbClickButton: prevState.buttonManage[0] ? false : true,
			})
		);
		this.resetButtonManage(0);
		this.changeValueButtonToPoint();
	}

	public addPoint = () => {
		this.setState(
			(prevState: IState) => ({
				nbClickButton: prevState.buttonManage[3] ? false : true,
				valueButton: 'point',
			})
		);
		this.resetButtonManage(3);
		this.changeValueButtonToPoint();
	}

	public addLink = () => {
		this.setState(
			(prevState: IState) => ({
				nbClickButton: prevState.buttonManage[1] ? false : true,
			})
		);
		this.resetButtonManage(1);
		this.changeValueButtonToLink();
	}

	public addIncurvedLink = () => {
		this.setState(
			(prevState: IState) => ({
				nbClickButton: prevState.buttonManage[4] ? false : true,
			})
		);
		this.resetButtonManage(4);
		this.changeValueButtonToIncurvedLink();
	}

	public positionLegend = (e: any) => {

		if (!this.state.buttonManage[2]) {
			return;
		}

		const newLegend: ILegend = this.state.legend;
		const sizeTitlePanel: number = 28;

		newLegend.x = e.nativeEvent.offsetX;
		newLegend.y = this.props.options.baseMap.height > e.nativeEvent.offsetY
			? parseInt(e.nativeEvent.offsetY, 10)
			: parseInt(e.nativeEvent.offsetY, 10) - sizeTitlePanel;
		newLegend.hiddenLegend = false;
		this.setState({
			legend: newLegend,
		});
		this.props.onOptionsChange({
			...this.props.options,
			legend: newLegend,
		});
		console.log(newLegend);

		// this.changeDisplayButtonlegend();
	}

	// Close legend click on close
	public handleClick = (event: any): void => {
		const newLegend: ILegend = this.state.legend;

		newLegend.hiddenLegend = !this.state.legend.hiddenLegend;
		this.setState((prevState: IState) => ({
			legend: newLegend,
		}));
	}


	// SVG check url
	public tt = () => {
		const test = document.getElementById('path836');
		if (test) {
			test.style.fill = 'red';
		}
	}


	public chargeRegion = () => {
		this.setState({
			displayRegion: <DrawRectangle
				key='limitCoor' color='orange'
				coordinateInitial={this.props.options.coordinateSpaceInitial}
				id='initialSpace'
				onOptionsChange={this.props.onOptionsChange}
				options={this.props.options}
				data={this.props.data}
				isEnabled={!this.state.buttonManage[1]} />,
		});
	}

	public editIdString = (str: string): string => {
		const cpyString: string = str.slice();
		let strSplit: string[] = cpyString.split('id="');
		let newStr: string = '';

		for (let i = 0; strSplit.length > i; i++) {
			if (strSplit[i]) {
				if (i > 0) {
					const tt: string = strSplit[i];
					strSplit[i] = 'id="oct' + tt;
				}
				newStr = newStr + strSplit[i];
			}
		}
		return newStr;
	}

	/**
	 * update button css when mount component
	 */
	public componentDidMount() {
		if (this.props.options.baseMap.modeSVG) {
			fetch(this.props.options.baseMap.image)
				.then(res => res.text())
				.then(text => {
					this.setState({ svg: text });
					const result = /id=["']\w*["']/i.exec(text);
					if (result && result.length > 0) {
						const id: string[] = result[0].split('"');
						if (id.length > 1) {
							const documentId = document.getElementById(id[1]);
							if (documentId) {
								const newBaseMap: IBackground = this.props.options.baseMap;

								newBaseMap.idSVG = id[1];
								newBaseMap.width = documentId.getAttribute('width') || '';
								newBaseMap.height = documentId.getAttribute('height') || '';
								this.props.onOptionsChange({
									...this.props.options,
									baseMap: newBaseMap,
								});
							}
						}
					}
				})
				.then(() => this.chargeRegion())
				.then(() => {
					const newStr: string = this.editIdString(this.state.svg);
					const background: IBackground = this.props.options.baseMap;

					background.layerImage = newStr;
					this.props.onOptionsChange({ ...this.props.options, baseMap: background });
				});
		}
		this.updateButtonCss();
	}

	public componentDidUpdate(prevProps: IProps) {
		if (this.props.options.baseMap.image !== prevProps.options.baseMap.image) {
			this.componentDidMount();
		}
		if (this.props !== prevProps) {
			// console.log('am here');
			this.chargeRegion();
			// this.forceUpdate();
		}
	}

	// Tooltip in Svg

	public tooltip_SVG = () => {
		const red = document.getElementById('part1');

		red?.addEventListener('mouseenter', () => {
			red.addEventListener('mouseover', () => {
				const tooltip = document.createElement('span');
				const texttest = document.createTextNode('rectanglered');
				tooltip.appendChild(texttest);
				red.appendChild(tooltip).style.position = 'absolute';
				red.appendChild(tooltip).style.backgroundColor = '#000000';
				red.appendChild(tooltip).style.padding = '8px';
				red.appendChild(tooltip).style.float = 'top';
				red.appendChild(tooltip).style.color = '#d8d9da';
				red.appendChild(tooltip).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
				red.appendChild(tooltip).style.borderRadius = '2px';
				red.appendChild(tooltip).style.fontWeight = '500';
				red.addEventListener('mouseout', () => {
					red.appendChild(tooltip).style.visibility = 'hidden';

				});
			});
			const yellow = document.getElementById('part2');
			yellow?.addEventListener('mouseenter', () => {
				yellow.addEventListener('mouseover', () => {
					const tooltip = document.createElement('span');
					const texttest = document.createTextNode('rectangleyellow');
					tooltip.appendChild(texttest);
					yellow.appendChild(tooltip).style.position = 'absolute';
					yellow.appendChild(tooltip).style.backgroundColor = '#000000';
					yellow.appendChild(tooltip).style.padding = '8px';
					yellow.appendChild(tooltip).style.float = 'top';
					yellow.appendChild(tooltip).style.color = '#d8d9da';
					yellow.appendChild(tooltip).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
					yellow.appendChild(tooltip).style.borderRadius = '2px';
					yellow.appendChild(tooltip).style.fontWeight = '500';
					yellow.addEventListener('mouseout', () => {
						yellow.appendChild(tooltip).style.visibility = 'hidden';

					});

				});
				const rect = document.getElementById('carre');
				rect?.addEventListener('mouseenter', () => {
					rect.addEventListener('mouseover', () => {
						const tooltip = document.createElement('span');
						const texttest = document.createTextNode('rectanglegreen');
						tooltip.appendChild(texttest);
						rect.appendChild(tooltip).style.position = 'absolute';
						rect.appendChild(tooltip).style.backgroundColor = '#000000';
						rect.appendChild(tooltip).style.padding = '8px';
						rect.appendChild(tooltip).style.marginTop = '20%';
						rect.appendChild(tooltip).style.color = '#d8d9da';
						rect.appendChild(tooltip).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
						rect.appendChild(tooltip).style.borderRadius = '2px';
						rect.appendChild(tooltip).style.fontWeight = '500';
						rect.addEventListener('mouseout', () => {
							rect.appendChild(tooltip).style.visibility = 'hidden';
						});
					});

				});

			});
		});
	}









	// var myicon = document.getElementById("myicon");
	// var mypopup = document.getElementById("mypopup");

	// myicon.addEventListener("mouseover", showPopup);
	// myicon.addEventListener("mouseout", hidePopup);

	// function showPopup(evt) {
	// 	var iconPos = myicon.getBoundingClientRect();
	// 	mypopup.style.left = (iconPos.right + 20) + "px";
	// 	mypopup.style.top = (window.scrollY + iconPos.top - 60) + "px";
	// 	mypopup.style.display = "block";
	// }

	// function hidePopup(evt) {
	// 	mypopup.style.display = "none";
	// }



	// Test in SVG image tooltip computer

	// 	public tooltip_SVGImage = () => {

	// 		const matigoal = document.getElementById('Glasses');

	// 		matigoal?.addEventListener('mouseenter', () => {
	// 			matigoal.addEventListener('mouseover', () => {
	// 				const tooltip = document.createElement('span');
	// 				const texttest = document.createTextNode('salut');
	// 				tooltip.appendChild(texttest);
	// 				tooltip.getBoundingClientRect();
	// 				console.log(tooltip);
	// 				matigoal.appendChild(tooltip).style.position = 'absolute';
	// 				matigoal.appendChild(tooltip).style.backgroundColor = '#000000';
	// 				matigoal.appendChild(tooltip).style.padding = '8px';
	// 				matigoal.appendChild(tooltip).style.float = 'right';
	// 				matigoal.appendChild(tooltip).style.color = '#d8d9da';
	// 				matigoal.appendChild(tooltip).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
	// 				matigoal.appendChild(tooltip).style.borderRadius = '2px';
	// 				matigoal.appendChild(tooltip).style.fontWeight = '500';
	// 				matigoal.addEventListener('mouseout', () => {
	// 					matigoal.appendChild(tooltip).style.visibility = 'hidden';

	// 				});
	// 			});
	// 		});
	// 	}




	// function svgTip(opts) {
	// 	opts = opts || {};
	// 	opts.fontsize = opts.fontsize || '12px';
	// 	opts.padding = opts.padding || '.5rem';
	// 	opts.bgcolor = opts.bgcolor || '#000';
	// 	opts.color = opts.color || '#fff';
	// 	opts.opacity = opts.opacity || 0.6;
	// 	$.each($('[title]', 'svg'), function (id, obj) {
	// 		var tt = $(this).attr('title'), that = $('<div class=\'svgtip\'>' + tt + '</div>');
	// 		that.css({
	// 			'position': 'absolute',
	// 			'top': 0,
	// 			'left': 0,
	// 			'display': 'none',
	// 			'background-color': opts.bgcolor,
	// 			'color': opts.color,
	// 			'padding': opts.padding,
	// 			'font-size': opts.fontsize,
	// 			'opacity': opts.opacity,
	// 			'pointer-events': 'none'
	// 		});
	// 		$(this).hover(function (event) {
	// 			that.css({
	// 				'left': event.clientX,
	// 				'top': event.clientY + $(window).scrollTop()
	// 			});
	// 			that.addClass('active');
	// 			that.show();
	// 		}, function () {
	// 			that.hide();
	// 			that.removeClass('active');
	// 		});
	// 		$(this).on('mousemove', function (event) {
	// 			if (that.hasClass('active')) {
	// 				that.css({
	// 					'left': event.clientX,
	// 					'top': event.clientY + $(window).scrollTop() - that.height()
	// 				});
	// 			}
	// 		});
	// 		$('body').append(that);
	// 	});
	// }
	// new svgTip({
	// 	fontsize: '11px',
	// 	padding: '10px'
	// });
	// function lll(msg) {
	// 	$('#debug').append(msg + '
	// ');
	// }


	// 	public TooltipText = (e) => {
	// 		const targetXtext = document.getElementById('path141');
	// 		const targetYtext = document.getElementById('rect167');

	// 		const XPos = e.getClientX();
	// 		const YPos = e.getClientY();

	// 		const newXPosText = document.createTextNode('X Position : ' + XPos);
	// 		const newYPosText = document.createTextNode('Y Position : ' + YPos);

	// 		targetXtext?.replaceChild(newXPosText, targetXtext.getFirstChild());
	// 		targetYtext?.replaceChild(newYPosText, targetYtext.getFirstChild());
	// 	}
	// public testpart1 =(e)=> {
	// 	const targetXtext = document.getElementById('XPos');
	// 		const targetYtext = document.getElementById('YPos');

	// 	const newXPosText = document.createTextNode('X Position : Not over Rectangle');
	// 	const newYPosText = document.createTextNode('Y Position : Not over Rectangle');

	// 	targetXtext?.replaceChild(newXPosText, targetXtext.getFirstChild());
	// 	targetYtext?.replaceChild(newYPosText, targetYtext.getFirstChild());
	// }
	// public testpart2 = (e) => {
	// const targetClickText = document.getElementById('ClickPos');

	// 	const XPos = evt.getClientX();
	// 	const YPos = evt.getClientY();

	// 	const newClickText = document.createTextNode('Last Click made at X=' + XPos + ' Y=' + YPos);

	// 	targetClickText?.replaceChild(newClickText,
	// 		targetClickText.getFirstChild());
	// }

	/*************************************** URL change display render ***************************************************/


	// public display_Button = () => {
	// 	if (window.location.href.indexOf('http://localhost:3000/d/1UbTeXXWk/test_fix?panelId=2&fullscreen&tab=visualization&orgId=1') > -1) {

	// 		document.onvisibilitychange
	// 		// appearB?.style.visibility = 'hidden';
	// 	}
	// 	else {
	// 		// show button
	// 		 document.getElementById('allButton');
	// 		// disappearB?.style.visibility = 'visible';
	// 	}
	// }



	/***************************************URL change display render************************** *********************/


	/*************************************test create tooltip **********************************************************/

	public SVG_PathImage = () => {
		return;

		// Test inside area
		const area = document.getElementById('Intent');
		area?.addEventListener('mouseenter', () => {
			console.log('yop');
			const test = document.getElementById('path141');
			test?.addEventListener('mouseenter', () => {
				console.log('lol');
				test.style.fill = 'indigo';
				const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
				title.textContent = 'path141';
				test.appendChild(title);
				test.appendChild(title).style.backgroundColor = '#000000';
				test.appendChild(title).style.padding = '8px';
				test.appendChild(title).style.float = 'right';
				test.appendChild(title).style.color = '#d8d9da';
				test.appendChild(title).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
				test.appendChild(title).style.borderRadius = '2px';
				test.appendChild(title).style.fontWeight = '500';

			});

			// Test outside area

			area?.addEventListener('mouseleave', () => {
				console.log('out');






				const reflect = document.getElementById('path147');
				reflect?.addEventListener('mouseenter', () => {
					reflect.style.fill = 'orange';
					const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
					title.textContent = 'path147';
					reflect.appendChild(title);
					reflect.appendChild(title).style.backgroundColor = '#000000';
					reflect.appendChild(title).style.padding = '8px';
					reflect.appendChild(title).style.float = 'right';
					reflect.appendChild(title).style.color = '#d8d9da';
					reflect.appendChild(title).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
					reflect.appendChild(title).style.borderRadius = '2px';
					reflect.appendChild(title).style.fontWeight = '500';
				});
				const reflect2 = document.getElementById('rect167');
				reflect2?.addEventListener('mouseenter', () => {
					reflect2.style.fill = 'purple';
					const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
					title.textContent = 'rect167';
					reflect2.appendChild(title);
					reflect2.appendChild(title).style.backgroundColor = '#000000';
					reflect2.appendChild(title).style.padding = '8px';
					reflect2.appendChild(title).style.float = 'right';
					reflect2.appendChild(title).style.color = '#d8d9da';
					reflect2.appendChild(title).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
					reflect2.appendChild(title).style.borderRadius = '2px';
					reflect2.appendChild(title).style.fontWeight = '500';
				});
				const reflect3 = document.getElementById('ellipse93');
				reflect3?.addEventListener('mouseenter', () => {
					reflect3.style.fill = 'blue';
					const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
					title.textContent = 'ellipse93';
					reflect3.appendChild(title);
					reflect3.appendChild(title).style.backgroundColor = '#000000';
					reflect3.appendChild(title).style.padding = '8px';
					reflect3.appendChild(title).style.float = 'right';
					reflect3.appendChild(title).style.color = '#d8d9da';
					reflect3.appendChild(title).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
					reflect3.appendChild(title).style.borderRadius = '2px';
					reflect3.appendChild(title).style.fontWeight = '500';
				});

				const reflect4 = document.getElementById('ellipse135');
				reflect4?.addEventListener('mouseenter', () => {
					reflect4.style.fill = 'yellow';
					const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
					title.textContent = 'ellipse135';
					reflect4.appendChild(title);
					reflect4.appendChild(title).style.backgroundColor = '#000000';
					reflect4.appendChild(title).style.padding = '8px';
					reflect4.appendChild(title).style.float = 'right';
					reflect4.appendChild(title).style.color = '#d8d9da';
					reflect4.appendChild(title).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
					reflect4.appendChild(title).style.borderRadius = '2px';
					reflect4.appendChild(title).style.fontWeight = '500';
				});
				const reflect5 = document.getElementById('path153');
				reflect5?.addEventListener('mouseenter', () => {
					reflect5.style.fill = 'brown';
					const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
					title.textContent = 'path153';
					reflect5.appendChild(title);
					reflect5.appendChild(title).style.backgroundColor = '#000000';
					reflect5.appendChild(title).style.padding = '8px';
					reflect5.appendChild(title).style.float = 'right';
					reflect5.appendChild(title).style.color = '#d8d9da';
					reflect5.appendChild(title).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
					reflect5.appendChild(title).style.borderRadius = '2px';
					reflect5.appendChild(title).style.fontWeight = '500';
				});

				const reflect6 = document.getElementById('ellipse55');
				reflect6?.addEventListener('mouseenter', () => {
					reflect6.style.fill = 'silver';
					const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
					title.textContent = 'ellipse55';
					reflect6.appendChild(title);
					reflect6.appendChild(title).style.backgroundColor = '#000000';
					reflect6.appendChild(title).style.padding = '8px';
					reflect6.appendChild(title).style.float = 'right';
					reflect6.appendChild(title).style.color = '#d8d9da';
					reflect6.appendChild(title).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
					reflect6.appendChild(title).style.borderRadius = '2px';
					reflect6.appendChild(title).style.fontWeight = '500';
				});
				const reflect7 = document.getElementById('ellipse41');
				reflect7?.addEventListener('mouseenter', () => {
					reflect7.style.fill = 'green';
					const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
					title.textContent = 'ellipse41';
					reflect7.appendChild(title);
					reflect7.appendChild(title).style.backgroundColor = '#000000';
					reflect7.appendChild(title).style.padding = '8px';
					reflect7.appendChild(title).style.float = 'right';
					reflect7.appendChild(title).style.color = '#d8d9da';
					reflect7.appendChild(title).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
					reflect7.appendChild(title).style.borderRadius = '2px';
					reflect7.appendChild(title).style.fontWeight = '500';
				});
			}





			);
		});
	}

	/*************************************test create tooltip **********************************************************/




	/** render */
	public render() {


		let styleBackground;
		if (this.props.options.baseMap.modeSVG) {
			styleBackground = {
				position: 'absolute',
				textAlign: 'center',
				top: '15%',
				backgroundRepeat: 'no-repeat',
				height: this.props.options.baseMap.height + 'px',
				width: this.props.options.baseMap.width + 'px',
				opacity: 0.8,
				zIndex: 20,

			} as React.CSSProperties;
		} else {
			styleBackground = {
				position: 'absolute',
				textAlign: 'center',
				top: '15%',
				backgroundRepeat: 'no-repeat',
				backgroundImage: 'url(' + this.props.options.baseMap.image + ')',
				backgroundSize: this.props.options.baseMap.width + 'px' + ' ' + this.props.options.baseMap.height + 'px',
				height: this.props.options.baseMap.height + 'px',
				width: this.props.options.baseMap.width + 'px',
				opacity: 0.8,
				zIndex: 20,

			} as React.CSSProperties;
		}

		const styleSVG = {
			position: 'absolute',
			top: '15%',

			zIndex: 5,

		} as React.CSSProperties;

		// 		const styleSVG_2 = {
		// 			position: 'absolute',
		// 			top: '15%',
		// 			opacity: 0.4,
		// 			zIndex: 1000,
		// 			// backgroundColor: 'red',
		// marginLeft: '20%',
		// 		} as React.CSSProperties;



		const defaultStyle = {
			height: '100vh',
			width: '100vw',

			fontFamily: this.props.options.display.police,
			fontSize: this.props.options.display.size,
			fontStyle: this.props.options.display.style !== 'bold' ? this.props.options.display.style : 'normal',
			fontWeight: this.props.options.display.style === 'bold' ? 'bold' : 'normal',
		} as React.CSSProperties;

		// console.log(this.props.data);
		// console.log(this.props.data.timeRange.);

		return (
			<CustomScrollbar
				autoHide={false}
				hideHorizontalTrack
			>
				<div style={{ textAlign: 'left', position: 'relative', display: 'inline-grid' }}
				>
					{this.state.allActionButton}
					{this.props.options.displayButton}
				</div>
				<section style={defaultStyle} onClick={this.positionLegend} >
					<div>
						{
							this.state.buttonManage[0] &&
							<div style={{
								width: '200px',
								position: 'absolute',
								overflowY: 'scroll',
								marginLeft: '20%',
								marginRight: '20%',
								marginTop: '20%',
								marginBottom: '20%',
								border: '5px solid aliceblue',
								height: '40%',

							}}>
								<Modal title='Add Region'
									onDismiss={this.addNode}
									onClickBackdrop={this.addNode}
									isOpen={this.state.nbClickButton} >
									<AddCoordinate options={this.props.options}
										onOptionsChange={this.props.onOptionsChange}
										data={this.props.data} />
								</Modal>
							</div>
						}
						{
							this.state.buttonManage[2] &&
							<div></div>
						}
						<Legend
							options={this.props.options}
							onOptionsChange={this.props.onOptionsChange}
							data={this.props.data}
							callBack={this.handleClick} />


						{/* <div style={{
							position: 'relative',
							left: this.state.legend.x,
							top: this.state.legend.y,
							maxWidth: '100%',
							zIndex: 'auto',
						}} hidden={this.state.legend.hiddenLegend}>
							<article
								style={{
									width: '250px',
									position: 'absolute',
									overflowY: 'scroll',
									margin: '0',
									height: '170px',
									backgroundColor: '#212124',
									color: '#d8d9da',
									border: '4px solid #299c46',
									borderRadius: '4px',
									scrollbarColor: '#09090b #212124',
									scrollbarWidth: 'thin',
									zIndex: 9999,
								}}
							>
								<div style={{ backgroundImage: 'linear-gradient(90deg, rgb(41, 42, 45), rgb(0, 0, 0))' }}>
									<h5 style={{ width: '100%', fontSize: '20px', display: 'inline-flex' }}>Legend
										<i style={{ marginLeft: '78%', }} className='fa fa-close' onClick={this.handleClick}></i></h5>
									<p style={{ fontSize: '15px', marginLeft: '14px', fontWeight: 'bold' }}>Region</p>
									<p style={{ fontSize: '11px', marginLeft: '17px' }}>Label</p>
								</div>
								<ul >
									<li className='LegendMatt'>
										<span style={{
											padding: 4,
											margin: 9,
											width: '3.5rem',
											borderRadius: '39%',
											backgroundColor: 'red',
											border: '3px solid yellow',
											listStyleType: 'none',
											display: 'inline-block',
										}}></span>
										<span style={{
											display: 'inline-block', verticalAlign: 'middle',
											marginBottom: '1.25rem', fontSize: '9px',
										}}>Min-Max</span>
									</li>tooltip_SVGImage
									<li className='LegendMatt'>
										<span style={{
											padding: 4,
											margin: 9,
											width: '3.5rem',
											borderRadius: '39%',
											backgroundColor: 'green',
											border: '3px solid yellow',
											listStyleType: 'none',
											display: 'inline-block',
										}}></span>
										<span style={{
											display: 'inline-block', verticalAlign: 'middle',
											marginBottom: '1.25rem', fontSize: '9px',
										}}>Min-Max</span></li>
									<li className='LegendMatt'>
										<span style={{
											padding: 4,
											margin: 9,
											width: '3.5rem',
											borderRadius: '39%',
											backgroundColor: 'orange',
											border: '3px solid yellow',
											listStyleType: 'none',
											display: 'inline-block',
										}}></span>
										<span style={{
											display: 'inline-block', verticalAlign: 'middle',
											marginBottom: '1.25rem', fontSize: '9px',
										}}>Min-Max</span></li>
									<li className='LegendMatt'>
										<span style={{
											padding: 4,
											margin: 9,
											width: '3.5rem',
											borderRadius: '39%',
											backgroundColor: 'purple',
											border: '3px solid yellow',
											listStyleType: 'none',
											display: 'inline-block',
										}}></span>
										<span style={{
											display: 'inline-block', verticalAlign: 'middle',
											marginBottom: '1.25rem', fontSize: '9px',
										}}>Min-Max</span></li>
									<li className='LegendMatt'>
										<span style={{
											padding: 4,
											margin: 9,
											width: '3.5rem',
											borderRadius: '39%',
											backgroundColor: 'green',
											border: '3px solid yellow',
											listStyleType: 'none',
											display: 'inline-block',
										}}></span>
										<span style={{
											display: 'inline-block', verticalAlign: 'middle',
											marginBottom: '1.25rem', fontSize: '9px',
										}}>Min-Max</span></li>
									<li className='LegendMatt'>
										<span style={{
											padding: 4,
											margin: 9,
											width: '3.5rem',
											borderRadius: '39%',
											backgroundColor: 'purple',
											border: '3px solid yellow',
											listStyleType: 'none',
											display: 'inline-block',
										}}></span>
										<span style={{
											display: 'inline-block', verticalAlign: 'middle',
											marginBottom: '1.25rem', fontSize: '9px',
										}}>Min-Max</span></li>
									<li className='LegendMatt'>
										<span style={{
											padding: 4,
											margin: 9,
											width: '3.5rem',
											borderRadius: '39%',
											backgroundColor: 'orange',
											border: '3px solid yellow',
											listStyleType: 'none',
											display: 'inline-block',
										}}></span>
										<span style={{
											display: 'inline-block', verticalAlign: 'middle',
											marginBottom: '1.25rem', fontSize: '9px',
										}}>Min-Max</span></li>
									<li className='LegendMatt'>
										<span style={{
											padding: 4,
											margin: 9,
											width: '3.5rem',
											borderRadius: '39%',
											backgroundColor: 'red',
											border: '3px solid yellow',
											listStyleType: 'none',
											display: 'inline-block',
										}}></span>
										<span style={{
											display: 'inline-block', verticalAlign: 'middle',
											marginBottom: '1.25rem', fontSize: '9px',
										}}>Min-Max</span></li>
								</ul>
								<p style={{ fontSize: '11px', marginLeft: '17px' }}>Label</p>
								<ul >
									<li className='LegendMatt'>
										<span style={{
											padding: 4,
											margin: 9,
											width: '3.5rem',
											borderRadius: '39%',
											backgroundColor: 'red',
											border: '3px solid yellow',
											listStyleType: 'none',
											display: 'inline-block',
										}}></span>
										<span style={{
											display: 'inline-block', verticalAlign: 'middle',
											marginBottom: '1.25rem', fontSize: '9px',
										}}>No Variable</span></li>

								</ul>
								<p style={{ fontSize: '15px', marginLeft: '10px' }}>Point</p>
							</article>
						</div> */}

						<div onClick={this.callMethod}></div>

						<div>
							<div className='tooltip' />
							<div id='Intent' style={styleSVG} onMouseOver={this.SVG_PathImage}
								dangerouslySetInnerHTML={{ __html: this.state.svg }} />
							{/* <div id='Glasses' style={styleSVG_2}
							onMouseMove={this.tooltip_SVGImage } dangerouslySetInnerHTML={{ __html: this.state.svg }} /> */}

							<div onClick={this.getCoordinates} style={styleBackground} id='mainPanel' >

								{/* <Tooltip placement="top" content='hello World' theme='info' children={}  /> */}
								{
									this.defineLimit()
								}
								<div >
									<br />
									{this.state.displayRegion}
									{this.displayPoint()}
									{this.displayOrientedLink()}
								</div>
							</div>
						</div>

					</div>

				</section>

			</CustomScrollbar >
		);
	}
}
