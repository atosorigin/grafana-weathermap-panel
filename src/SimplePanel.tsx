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
import { LowerLimitClass } from 'Models/LowerLimitClass';

import { reqMetricPoint, reqMetricOrientedLink } from 'Functions/fetchMetrics';

import AddCoordinate from 'components/CoordinateSpace/addCoordinate';
import DrawRectangle from './components/Draw/drawRectangle';
// import DrawRectangleExtend from './components/Draw/drawRectangleExtend';
import DrawCircleCross from './components/Draw/drawCircleCross';
import DrawArrow from './components/Draw/drawArrow';
import DrawLinkWithCoordinates from './components/Draw/drawLinkWithCoordinates';
import DrawLinkWithPoints from './components/Draw/drawLinkWithPoints';
import DrawLinkWithRegions from './components/Draw/drawLinkWithRegions';
import DrawOrientedLink from './components/Draw/drawOrientedLink';
import { PositionParameterClass } from 'Models/PositionParameterClass';

interface IProps extends PanelProps<SimpleOptions> { }

interface ILegend {
	hiddenLegend: boolean;
	x: number;
	y: number;
}

interface IState {
	isUpdate: boolean;
	// sizePanel: number;
	idOrientedLink: number;
	valueButton: string;
	/**
	 * manage button
	 * [0] -> addNode
	 * [1] -> addLink
	 * [2] -> positionLegend
	 * [3] -> addPoint
	 */
	buttonManage: boolean[];
	numberClickDiv: number;
	allActionButton: JSX.Element;
	valueLegend: JSX.Element;
	seuil: LowerLimitClass[];
	nbClickButton: boolean;
	legend: ILegend;
	img: JSX.Element;
	svg: string;
	loading: boolean;
	url: string;
	displayRegion: JSX.Element;
	idSVG: string;
}

/**
 * Affichage
 */
export class SimplePanel extends PureComponent<IProps, IState> {

	constructor(props: IProps) {
		super(props);
		this.state = {
			isUpdate: false,
			// sizePanel: 300,
			idOrientedLink: this.props.options.indexOrientedLink,
			valueButton: '',
			buttonManage: [false, false, false, false],
			numberClickDiv: 0,
			allActionButton: <div></div>,
			valueLegend: <div></div>,
			seuil: [],
			nbClickButton: false,
			legend: { 'hiddenLegend': true, 'x': 0, 'y': 0 },
			img: <div></div>,
			svg: '',
			loading: false,
			url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/tiger.svg',
			displayRegion: <div></div>,
			idSVG: '',
		};
	}

	// /**
	//  * TODO
	//  */
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
		const xMaxPx: number = (xMax + 100) * (widthPanel / 200)
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
			//|| event.nativeEvent.target.id === 'mainPanel'
		) {
			this.createPointToClick(positionX, positionY);
		}
	}

	/**
	 * to do
	 */
	public createPointToClick = (x: number, y: number) => {
		let id: number = this.props.options.indexPoint + 1;
		const initTextObject: TextObject = new TextObject('', '', '', false, '', '', '',
			false, '', '', '',
			false, false, false, '', false, '');
		const parametrageMetric: LinkURLClass = new LinkURLClass('', '', '');
		const positionParameter: PositionParameterClass = new PositionParameterClass('0', '0', '0', '0', {}, {});
		const newPoint: PointClass = new PointClass(
			id, parametrageMetric, '', [], '', initTextObject,
			{ 'key': '', 'unit': '', 'format': '', 'keyValue': '', 'refId': '',
			'manageValue': 'avg' }, [],
			false, false, false, positionParameter,
			'point' + id.toString(),
			'',
			{},
			{ label: 'Yes', value: 'true' },
			{ label: 'Circle', value: 'circle' },
			{ label: 'Small', value: 'small' },
			{ label: 'Small', value: 'small' },
			'0',
			x.toString(),
			y.toString(),
			'black',
			[],
			[],
			[],
			[]
		);

		this.props.onOptionsChange({
			...this.props.options,
			indexPoint: id,
			//arrayPoints: this.props.options.arrayPoints.concat(newPoint),
		});

		this.props.options.arrayPoints.push(newPoint);

		setTimeout(() => {
			this.displayPoint();
		}, 100);
	}

	/**
	 * to do
	 */

	public displayPoint() {
		const mapItems: JSX.Element[] = [];

		this.props.options.arrayPoints.forEach((line: PointClass) => {
			if (line.shape.value === 'arrow') {

				const item: JSX.Element = <DrawArrow key={'point' + line.id.toString()} coordinateSpace={line.coordinateSpace}
					drawGraphicmarker={line.drawGraphicMarker} shape={line.shape}
					sizeWidth={line.sizeWidth} sizeHeight={line.sizeHeight} rotate={line.rotateArrow}
					positionShapeX={line.positionShapeX} positionShapeY={line.positionShapeY} label={line.label}
					height={parseInt(this.props.options.baseMap.height, 10)} police={this.props.options.police}
					sizePolice={this.props.options.size} color={line.color}
					idPoint={'point' + line.id.toString()} name={line.name}
					orientedLinksIn={line.associateOrientedLinksIn} orientedLinksOut={line.associateOrientedLinksOut}
					textObject={line.textObj} seuil={line.lowerLimit} />;

				mapItems.push(item);

			} else if (line.shape.value === 'circle' || line.shape.value === 'cross') {

				const item: JSX.Element = <DrawCircleCross key={'point' + line.id.toString()} coordinateSpace={line.coordinateSpace}
					drawGraphicMarker={line.drawGraphicMarker} shape={line.shape} size={line.sizeWidth}
					positionShapeX={line.positionShapeX} positionShapeY={line.positionShapeY} label={line.label}
					widthImage={parseInt(this.props.options.baseMap.width, 10)}
					heightImage={parseInt(this.props.options.baseMap.height, 10)}
					police={this.props.options.police}
					sizePolice={this.props.options.size} color={line.color}
					idPoint={'point' + line.id.toString()} name={line.name}
					options={this.props.options} onOptionsChange={this.props.onOptionsChange} data={this.props.data}
					textObject={line.textObj} seuil={line.lowerLimit} valueMainMetric={line.valueMetric}
					labelPositionX={line.positionParameter.labelAPositionX}
					labelPositionY={line.positionParameter.labelAPositionY}
					tooltipPosition={line.positionParameter.tooltipPositionA} />;

				mapItems.push(item);
			}
		});

		this.getValueMainMetricOfPoint();

		return (
			<ul>
				{mapItems}
			</ul>
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
		this.defineAssociateLinksToPoint();
		return (
			<ul>
				{mapItems}
			</ul>
		);
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
		const pointA: any = coordinates[1];
		const pointB: any = coordinates[2];
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

		if (//event.nativeEvent.target.id === 'mainPanel' ||
			event.nativeEvent.target.id === 'initialSpace'
		) {

			positionX = Math.round(((event.nativeEvent.offsetX) - (widthInitialSpace / 2)) * (100 / widthInitialSpace)) * 2;
			positionY = (Math.round(((event.nativeEvent.offsetY) - (heightInitialSpace / 2)) * (100 / heightInitialSpace)) * 2);

			if (coordinates[0].id % 2 === 0) {
				pointA.x = positionX;
				pointA.y = positionY * (-1);
				coordinates[0].id++;
			} else {
				pointB.x = positionX;
				pointB.y = positionY * (-1);
				coordinates[0].id++;

				this.createOrientedLinkToClick({}, {}, {}, {});
			}

		} else if (event.nativeEvent.target.id.startsWith('point')) {
			const id: number = parseInt(event.nativeEvent.target.id.charAt(5) + event.nativeEvent.target.id.charAt(6), 10);
			const arrayPoint: PointClass[] = this.props.options.arrayPoints;

			arrayPoint.forEach((point: PointClass) => {
				if (point.id === id) {
					const coordinates = this.props.options.coordinatesToDrawLinkWithClick;

					if (coordinates[0].id % 2 === 0) {
						pointA.x = point.positionShapeX;
						pointA.y = point.positionShapeY;
						pointA.labelPoint = point.name;
						pointA.point = point;
						coordinates[0].id++;
					} else {
						pointB.x = point.positionShapeX;
						pointB.y = point.positionShapeY;
						pointB.labelPoint = point.name;
						pointB.point = point;
						coordinates[0].id++;

						this.createOrientedLinkToClick({ label: pointA.labelPoint, value: pointA.point },
							{ label: pointB.labelPoint, value: pointB.point },
							{ label: pointA.labelRegion, value: pointA.region },
							{ label: pointB.labelRegion, value: pointB.region }
						);
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
						if (coordinates[0].id % 2 === 0) {
							pointA.x = positionX;
							pointA.y = positionY;
							coordinates[0].id++;
							pointA.labelRegion = region.label;
							pointA.region = region;
						} else {
							pointB.x = positionX;
							pointB.y = positionY;
							coordinates[0].id++;
							pointB.labelRegion = region.label;
							pointB.region = region;
							this.createOrientedLinkToClick({ label: pointA.labelPoint, value: pointA.point },
								{ label: pointB.labelPoint, value: pointB.point },
								{ label: pointA.labelRegion, value: pointA.region },
								{ label: pointB.labelRegion, value: pointB.region }
							);
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
						if (coordinates[0].id % 2 === 0) {
							pointA.x = positionX;
							pointA.y = positionY;
							coordinates[0].id++;
							pointA.labelRegion = region.label;
							pointA.region = region;
						} else {
							pointB.x = positionX;
							pointB.y = positionY;
							coordinates[0].id++;
							pointB.labelRegion = region.label;
							pointB.region = region;
							this.createOrientedLinkToClick({ label: pointA.labelPoint, value: pointA.point },
								{ label: pointB.labelPoint, value: pointB.point },
								{ label: pointA.labelRegion, value: pointA.region },
								{ label: pointB.labelRegion, value: pointB.region }
							);
							this.resetCoordinatesToDrawLinkWithClick();
						}
					}
				}
			});
		}
	}

	public defineAssociateOrientedLinkToRegion(): OrientedLinkClass[] {
		const arrayRegion: RegionClass[] = this.props.options.regionCoordinateSpace;
		const arrayAllOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
		const arrayOrientedLinkAssociateRegionIn: OrientedLinkClass[] = [];
		const arrayOrientedLinkAssociateRegionOut: OrientedLinkClass[] = [];
		let arrayToReturn: OrientedLinkClass[] = [];
		arrayRegion.forEach((region) => {
			arrayAllOrientedLink.forEach((orientedLink) => {
				arrayToReturn = [];
				if (region.id === orientedLink.regionIn.id) {
					arrayOrientedLinkAssociateRegionIn.push(orientedLink);
					arrayToReturn = arrayOrientedLinkAssociateRegionIn;
					region.orientedLink = arrayToReturn;
				}
				if (region.id === orientedLink.regionOut.id) {
					arrayOrientedLinkAssociateRegionOut.push(orientedLink);
					arrayToReturn = arrayOrientedLinkAssociateRegionOut;
					region.orientedLink = arrayToReturn;
				}
			});
		});
		return arrayToReturn;
	}

	/**
	 * to do
	 */
	public createOrientedLinkToClick = (
		associatePointIn: SelectableValue<PointClass>,
		associatePointOut: SelectableValue<PointClass>,
		associateRegionIn: SelectableValue<RegionClass>,
		associateRegionOut: SelectableValue<RegionClass>) => {
		const coordinates = this.props.options.coordinatesToDrawLinkWithClick;
		const id: number = this.props.options.indexOrientedLink + 1;
		const zIndex: number = this.props.options.zIndexOrientedLink + 1;
		const pointA: any = coordinates[1];
		const pointB: any = coordinates[2];
		const initTextObject: TextObject = new TextObject('', '', '', false, '', '', '',
			false, '', '', '',
			false, false, false, '', false, '');
		const parametrageMetric: LinkURLClass = new LinkURLClass('', '', '');
		const positionParameter: PositionParameterClass = new PositionParameterClass('0', '0', '0', '0', {}, {});

		const newOrientedLink: OrientedLinkClass = new OrientedLinkClass(
			id,
			parametrageMetric, '', [], '', initTextObject,
			{ 'key': '', 'unit': '', 'format': '', 'keyValue': '', 'refId': '',
			'manageValue': 'avg' }, [],
			false, false, false, positionParameter,
			'orientedLink' + id.toString(),
			{ label: 'Unidirectional', value: 'AB' },
			pointA.x.toString(),
			pointA.y.toString(),
			'#5794F2',
			pointB.x.toString(),
			pointB.y.toString(),
			'#E54658',
			'',
			'',
			associatePointIn,
			associatePointOut,
			associateRegionIn,
			associateRegionOut,
			zIndex
		);
		this.props.onOptionsChange({
			...this.props.options,
			//arrayOrientedLinks: this.props.options.arrayOrientedLinks.concat(newOrientedLink),
			indexOrientedLink: id,
			zIndexOrientedLink: zIndex,
		});

		this.props.options.arrayOrientedLinks.push(newOrientedLink);

		setTimeout(() => {
			this.displayOrientedLink();
		}, 100);

		//console.log(this.props.options.arrayOrientedLinks)
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
			/>;
			mapItems.push(item);
		});
		this.defineAssociateOrientedLinksToPoint();
		this.defineAssociateOrientedLinkToRegion();
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
		let valueMainMetric: number = 0;
		let totalValuesCount: number = 0;

		arrayPoints.forEach((point) => {
			reqMetricPoint(point, this.props);
			const key: string = point.mainMetric.key;
			const keyValue: string = point.mainMetric.keyValue;
			if (point.mainMetric.returnQuery && point.mainMetric.returnQuery[0]?.fields[0]) {
				if (point.mainMetric.returnQuery[0].fields[0].labels) {
					if (point.mainMetric.returnQuery[0].fields[0].labels[key] === keyValue) {
						const sizeQuery: number = point.mainMetric.returnQuery[0].fields[0].values.length || 0;
						for (let i = 0; i < sizeQuery; i++) {
							if (point.mainMetric.returnQuery[0].fields[0].values.get(i)) {
								totalValuesCount++;
								valueMainMetric += point.mainMetric.returnQuery[0].fields[0].values.get(i);
							}
						}
						point.valueMetric = Math.round((valueMainMetric / totalValuesCount)).toString();
					} else {
						point.valueMetric = 'no value';
					}
				}
			}
		});
	}

	/**
	 * to do
	 */
	public getValueMainMetricOfOrientedLink() {
		const arrayOrientedLinks: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
		let valueMainMetric: number = 0;
		let totalValuesCount: number = 0;

		arrayOrientedLinks.forEach((orientedLink) => {
			reqMetricOrientedLink(orientedLink, this.props);
			const key: string = orientedLink.mainMetric.key;
			const keyValue: string = orientedLink.mainMetric.keyValue;
			if (orientedLink.mainMetric.returnQuery && orientedLink.mainMetric.returnQuery[0].fields[0]) {
				if (orientedLink.mainMetric.returnQuery[0].fields[0].labels) {
					if (orientedLink.mainMetric.returnQuery[0].fields[0].labels[key] === keyValue) {
						const sizeQuery: number = orientedLink.mainMetric.returnQuery[0].fields[0].values.length || 0;
						for (let i = 0; i < sizeQuery; i++) {
							if (orientedLink.mainMetric.returnQuery[0].fields[0].values.get(i)) {
								totalValuesCount++;
								valueMainMetric += orientedLink.mainMetric.returnQuery[0].fields[0].values.get(i);
							}
						}
						orientedLink.valueMainMetricA = Math.round((valueMainMetric / totalValuesCount)).toString();
						orientedLink.valueMainMetricB = Math.round((valueMainMetric / totalValuesCount)).toString();
					} else {
						orientedLink.valueMainMetricA = 'no value';
						orientedLink.valueMainMetricB = 'no value';
					}
				}
			}
		});
	}


	public defineAssociateLinksToPoint() {
		const arrayAssociateLinks = this.props.options.arrayLinks;
		const arrayPoints = this.props.options.arrayPoints;

		arrayPoints.forEach((point) => {
			point.associateLinkIn = [];
			point.associateLinkOut = [];
		});
		arrayAssociateLinks.forEach((link) => {
			arrayPoints.forEach((point) => {
				if (link.pointIn.value?.id === point.id) {
					point.associateLinkIn.push(link);
				} else if (link.pointOut.value?.id === point.id) {
					point.associateLinkOut.push(link);
				}
			});
		});
	}

	public defineAssociateOrientedLinksToPoint() {
		const arrayOrientedLinks = this.props.options.arrayOrientedLinks;
		const arrayPoints = this.props.options.arrayPoints;

		arrayPoints.forEach((point) => {
			point.associateOrientedLinksIn = [];
			point.associateOrientedLinksOut = [];
		});
		arrayOrientedLinks.forEach((orientedLink) => {
			arrayPoints.forEach((point) => {
				if (orientedLink.pointIn.value?.id === point.id) {
					point.associateOrientedLinksIn.push(orientedLink);
				} else if (orientedLink.pointOut.value?.id === point.id) {
					point.associateOrientedLinksOut.push(orientedLink);
				}
			});
		});
	}



	public changeValueButtonToLink = () => {
		this.setState({
			valueButton: 'link',
		});
	}

	public changeValueButtonToPoint = () => {
		this.setState({
			valueButton: 'point',
		});
	}

	public changeDisplayButtonlegend = () => {
		this.setState({
			valueLegend: <div></div>,
		});
	}


	public getCoordinates = (event: any) => {

		const valueButton = this.state.valueButton;
		if (this.state.numberClickDiv === 0) {
			return;
		}
		if (valueButton === 'link') {
			this.getCoordinatesToDrawOrientedLinkWithClick(event);
		} else if (valueButton === 'point') {
			this.getCoordinatesToDrawPointWithClick(event);
		}

	}

	/**
	 * add button click to manage region, point, oriented link, position legend
	 */
	public updateButtonCss = () => {
		const final: JSX.Element = <div>
			<Button style={{ marginLeft: '5%' }} variant={this.state.buttonManage[0] ? 'danger' : 'primary'}
				className='button' onClick={this.addNode}>Add Region</Button>

			<Button style={{ marginLeft: '5%' }} variant={this.state.buttonManage[3] ? 'danger' : 'primary'}
				className='button' onClick={this.addPoint}>Add Point</Button>

			<Button style={{ marginLeft: '5%' }} variant={this.state.buttonManage[1] ? 'danger' : 'primary'}
				className='button' onClick={this.addLink}>Add Oriented Link</Button>

			<Button style={{ marginLeft: '5%' }} variant={this.state.buttonManage[2] ? 'danger' : 'primary'}
				className='button' onClick={() => this.resetButtonManage(2)}>Position Legend</Button>

		</div>;
		this.setState({
			allActionButton: final,
		});
	}

	public callMethod = async () => {
		if (this.state.numberClickDiv === 0) {
			this.setState({ numberClickDiv: 1 });
		} else {
			await this.setAsyncButtonManage({
				buttonManage: [false, false, false, false],
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

		tmp = [false, false, false, false];
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
		this.changeDisplayButtonlegend();
	}

	// Close legend click on close
	public handleClick = (event: any) => {
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

	/**
	 * update button css when mount component
	 */
	public componentDidMount() {
		fetch(this.props.options.baseMap.image)
			.then(res => res.text())
			.then(text => {
				this.setState({ svg: text });
				const result = /id=["']\w*["']/i.exec(text);
				if (result && result.length > 0) {
					const id: string[] = result[0].split('"');
					if (id.length > 1) {
						this.setState({ idSVG: id[1] });
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
			.then(() => this.chargeRegion());
		this.updateButtonCss();
	}

	public componentDidUpdate(prevProps: IProps) {
		if (this.props.options.imageUrl !== prevProps.options.imageUrl) {
			this.componentDidMount();
		}
	}
	/** render */
	public render() {

		const styleBackground = {
			position: 'absolute',
			textAlign: 'center',
			top: '15%',
			// backgroundImage: 'url(' + this.props.options.baseMap.image + ')',
			// backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			// backgroundSize: '300px ',
			height: this.props.options.baseMap.height + 'px',
			width: this.props.options.baseMap.width + 'px',
			opacity: 0.8,
			zIndex: 20,

		} as React.CSSProperties;
		const styleSVG = {
			position: 'absolute',
			top: '15%',

			zIndex: 10,

		} as React.CSSProperties;


		const defaultStyle = {
			height: '100vh',
			width: '100vw',

			fontFamily: this.props.options.police,
			fontSize: this.props.options.size,
			fontStyle: this.props.options.style !== 'bold' ? this.props.options.style : 'normal',
			fontWeight: this.props.options.style === 'bold' ? 'bold' : 'normal',
		} as React.CSSProperties;

		// const dd = document.getElementsByClassName('transparentBackground')[0];
		// if (dd) {
		// 	dd.addEventListener('load', (e) => {
		// 		e.currentTarget?.addEventListener('mouseover', () => console.log('over'));
		// 		e.currentTarget?.addEventListener('mouseout', () => console.log('out'));
		// 	});

		// }

		return (
			<CustomScrollbar
				autoHide={false}
				hideHorizontalTrack
			>
				<div style={{ textAlign: 'left', position: 'relative', display: 'inline-grid' }}
				>
					{this.state.allActionButton}
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
						<div style={{
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
									</li>
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
						</div>
						{/* {
							this.state.buttonManage[3] &&
							<div></div>
						} */}

						<div onClick={this.callMethod}></div>

						<div>
							{/* <div id='svgPanel'> */}
							<div style={styleSVG} dangerouslySetInnerHTML={{ __html: this.state.svg }} />
							{/* </div> */}
							{/* <div style={{ backgroundSize: 'cover' }} > */}
							<div onClick={this.getCoordinates} style={styleBackground} id='mainPanel' >
								{
									this.defineLimit()
								}
								<div >
									<div >
										<br />
										{this.state.displayRegion}
										{/* {this.fillCoordinate()} */}

										{this.displayLink()}
										<div>
											{this.displayPoint()}
										</div>
										<div>
											{this.displayOrientedLink()}
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <div className='transparentBackground' style={{
							opacity: 0,
							position: 'absolute',
							top: '15%',
							zIndex: 100,
						}} dangerouslySetInnerHTML={{ __html: this.state.svg }} /> */}
					</div>

				</section>

			</CustomScrollbar >
		);
	}
}
