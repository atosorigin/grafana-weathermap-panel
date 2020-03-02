import React, { PureComponent } from 'react';
import { SimpleOptions } from 'types';

import { PanelProps, SelectableValue } from '@grafana/data';
import { CustomScrollbar, Modal, Button } from '@grafana/ui';

import { PointClass } from 'Models/PointClass';
import { LinkClass } from 'Models/LinkClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import { RegionClass } from 'Models/RegionClass';
import { TextObject } from 'Models/TextObjectClass';
import { LinkURLClass } from 'Models/LinkURLClass';
import { LowerLimitClass } from 'Models/LowerLimitClass';

import { reqMetricPoint, reqMetricOrientedLink } from 'Functions/fetchMetrics';

import AddCoordinate from 'components/CoordinateSpace/addCoordinate';
import DrawRectangle from './components/Draw/drawRectangle';
import DrawRectangleExtend from './components/Draw/drawRectangleExtend';
import DrawCircleCross from './components/Draw/drawCircleCross';
import DrawArrow from './components/Draw/drawArrow';
import DrawLinkWithCoordinates from './components/Draw/drawLinkWithCoordinates';
import DrawLinkWithPoints from './components/Draw/drawLinkWithPoints';
import DrawLinkWithRegions from './components/Draw/drawLinkWithRegions';
import DrawOrientedLink from './components/Draw/drawOrientedLink';

interface IProps extends PanelProps<SimpleOptions> { }

interface IState {
	isUpdate: boolean;
	sizePanel: number;
	idOrientedLink: number;
	valueButton: string;
	buttonManage: boolean[];
	numberClickDiv: number;
	allActionButton: JSX.Element;
	valueLegend: JSX.Element;
	seuil: LowerLimitClass[];
	nbClickButton: boolean;
}

/**
 * Affichage
 */
export class SimplePanel extends PureComponent<IProps, IState> {

	constructor(props: IProps) {
		super(props);
		this.state = {
			isUpdate: false,
			sizePanel: 300,
			idOrientedLink: this.props.options.indexOrientedLink,
			valueButton: '',
			buttonManage: [false, false, false, false],
			numberClickDiv: 0,
			allActionButton: <div></div>,
			valueLegend: <div></div>,
			seuil: [],
			nbClickButton: false,
		};
	}

	/**
	 * TODO
	 */
	public fillCoordinate = (): JSX.Element => {
		const { options } = this.props;
		let mapItems: JSX.Element[];

		mapItems = options.arrayCoordinateSpace
			.map((line: RegionClass, index) =>
				<DrawRectangleExtend
					key={'drawRectangleExtend' + index.toString()}
					color='red'
					uneCoor={line}
					useLimit={true}
					limit={options.arrayCoordinateSpaceInitial}
					contentTooltip={<a>salut</a>}
					onOptionsChange={this.props.onOptionsChange}
					options={this.props.options}
					data={this.props.data}
					id={'region' + line.id.toString()}
					isEnabled={!this.state.buttonManage[1]} />
			);
		return (
			<ul>
				{mapItems}
			</ul>
		);
	}

	/**
	 * Display limit (arrayCoordinateSpaceInitial)
	 * @returns JSX.Element
	 */
	public defineLimit = (): JSX.Element => {
		const { arrayCoordinateSpaceInitial } = this.props.options;
		let jsxItems: JSX.Element;

		jsxItems = <DrawRectangle key='limitCoor' color='orange'
			uneCoor={arrayCoordinateSpaceInitial} id='initialSpace' />;
		return jsxItems;
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
					positionLabelX={line.positionLabelX} positionLabelY={line.positionLabelY}
					height={this.state.sizePanel} police={this.props.options.police}
					sizePolice={this.props.options.taille} color={line.color}
					idPoint={'point' + line.id.toString()} name={line.name}
					orientedLinksIn={line.associateOrientedLinksIn} orientedLinksOut={line.associateOrientedLinksOut}
					textObject={line.textObj} seuil={line.lowerLimit} />;

				mapItems.push(item);

			} else if (line.shape.value === 'circle' || line.shape.value === 'cross') {

				const item: JSX.Element = <DrawCircleCross key={'point' + line.id.toString()} coordinateSpace={line.coordinateSpace}
					drawGraphicMarker={line.drawGraphicMarker} shape={line.shape} size={line.sizeWidth}
					positionShapeX={line.positionShapeX} positionShapeY={line.positionShapeY} label={line.label}
					positionLabelX={line.positionLabelX} positionLabelY={line.positionLabelY}
					height={this.state.sizePanel} police={this.props.options.police}
					sizePolice={this.props.options.taille} color={line.color}
					idPoint={'point' + line.id.toString()} name={line.name}
					options={this.props.options} onOptionsChange={this.props.onOptionsChange} data={this.props.data}
					textObject={line.textObj} seuil={line.lowerLimit} valueMainMetric={line.valueMetric} />;

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
					height={this.state.sizePanel}
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
					height={this.state.sizePanel}
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
					height={this.state.sizePanel}
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
		const sidePanel: number = this.state.sizePanel;

		if (event.nativeEvent.target.id === 'mainPanel' ||
			event.nativeEvent.target.id === 'initialSpace'
		) {

			positionX = Math.round(((event.nativeEvent.offsetX) - (sidePanel / 2)) * (100 / sidePanel)) * 2;
			positionY = (Math.round(((event.nativeEvent.offsetY) - (sidePanel / 2)) * (100 / sidePanel)) * 2);

			if (coordinates[0].id % 2 === 0) {
				pointA.x = positionX;
				pointA.y = positionY * (-1);
				coordinates[0].id++;
			} else {
				pointB.x = positionX;
				pointB.y = positionY * (-1);
				coordinates[0].id++;

				this.displayLinkClick({}, {}, {}, {});
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

						this.displayLinkClick({ label: pointA.labelPoint, value: pointA.point },
							{ label: pointB.labelPoint, value: pointB.point },
							{ label: pointA.labelRegion, value: pointA.region },
							{ label: pointB.labelRegion, value: pointB.region }
						);
						this.resetCoordinatesToDrawLinkWithClick();
					}
				}
			});
		} else {
			const arrayRegion: RegionClass[] = this.props.options.arrayCoordinateSpace;

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
							this.displayLinkClick({ label: pointA.labelPoint, value: pointA.point },
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
							this.displayLinkClick({ label: pointA.labelPoint, value: pointA.point },
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
		const arrayRegion: RegionClass[] = this.props.options.arrayCoordinateSpace;
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
	public displayLinkClick = (
		associatePointIn: SelectableValue<PointClass>,
		associatePointOut: SelectableValue<PointClass>,
		associateRegionIn: SelectableValue<RegionClass>,
		associateRegionOut: SelectableValue<RegionClass>) => {
		const coordinates = this.props.options.coordinatesToDrawLinkWithClick;
		const id: number = this.props.options.indexOrientedLink + 1;
		const pointA: any = coordinates[1];
		const pointB: any = coordinates[2];
		const initTextObject: TextObject = new TextObject('', '', '', false, '', '', '',
			false, '', '', '',
			false, false, false, '', false, '');
		const parametrageMetric: LinkURLClass = new LinkURLClass('', '', '');
		const newOrientedLink: OrientedLinkClass = new OrientedLinkClass(
			id,
			parametrageMetric, '', [], '', initTextObject,
			{ 'key': '', 'unit': '', 'format': '', 'keyValue': '', 'refId': '' }, [],
			false, false, false,
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
			associateRegionOut
		);
		this.props.onOptionsChange({
			...this.props.options,
			//arrayOrientedLinks: this.props.options.arrayOrientedLinks.concat(newOrientedLink),
			indexOrientedLink: id,
		});

		this.props.options.arrayOrientedLinks.push(newOrientedLink);

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
				sidePanel={this.state.sizePanel}
				name={orientedLink.name}
				valueMainMetricA={orientedLink.valueMainMetricA}
				valueMainMetricB={orientedLink.valueMainMetricB}
				refMainMetric={orientedLink.mainMetric.refId || ''}
				options={this.props.options}
				onOptionsChange={this.props.onOptionsChange}
				data={this.props.data}
				textObject={orientedLink.textObj}
				seuil={orientedLink.lowerLimit}
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
			if (point.mainMetric.returnQuery?.fields[0]) {
				if (point.mainMetric.returnQuery?.fields[0].labels) {
					if (point.mainMetric.returnQuery?.fields[0].labels[key] === keyValue) {
						const sizeQuery: number = point.mainMetric.returnQuery?.fields[0].values.length || 0;
						for (let i = 0; i < sizeQuery; i++) {
							if (point.mainMetric.returnQuery?.fields[0].values.get(i)) {
								totalValuesCount++;
								valueMainMetric += point.mainMetric.returnQuery?.fields[0].values.get(i);
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
			if (orientedLink.mainMetric.returnQuery?.fields[0]) {
				if (orientedLink.mainMetric.returnQuery?.fields[0].labels) {
					if (orientedLink.mainMetric.returnQuery?.fields[0].labels[key] === keyValue) {
						const sizeQuery: number = orientedLink.mainMetric.returnQuery?.fields[0].values.length || 0;
						for (let i = 0; i < sizeQuery; i++) {
							if (orientedLink.mainMetric.returnQuery?.fields[0].values.get(i)) {
								totalValuesCount++;
								valueMainMetric += orientedLink.mainMetric.returnQuery?.fields[0].values.get(i);
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

	/**
	 * to do
	 */
	public getCoordinatesToDrawPointWithClick = (event: any) => {
		let positionX: number = 0;
		let positionY: number = 0;
		const sidePanel: number = this.state.sizePanel;

		positionX = Math.round(((event.nativeEvent.offsetX) - (sidePanel / 2)) * (100 / sidePanel)) * 2;
		positionY = (Math.round(((event.nativeEvent.offsetY) - (sidePanel / 2)) * (100 / sidePanel)) * 2) * (-1);
		console.log(event.nativeEvent.target)
		if (event.nativeEvent.target.id === 'mainPanel' ||
			event.nativeEvent.target.id === 'initialSpace'
		) {
			this.createPointToClick(positionX, positionY);
		}
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

	public createPointToClick = (x: number, y: number) => {
		let id: number = this.props.options.indexPoint + 1;
		const initTextObject: TextObject = new TextObject('', '', '', false, '', '', '',
			false, '', '', '',
			false, false, false, '', false, '');
		const parametrageMetric: LinkURLClass = new LinkURLClass('', '', '');
		const newPoint: PointClass = new PointClass(
			id, parametrageMetric, '', [], '', initTextObject,
			{ 'key': '', 'unit': '', 'format': '', 'keyValue': '', 'refId': '' }, [],
			false, false, false,
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
			'0',
			'0',
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

	// function after buttonclick

	public updateButtonCss = () => {
		const final: JSX.Element = <div>
			<Button variant={this.state.buttonManage[0] ? 'danger' : 'primary'}
				className='button' onClick={this.addNode}>Add Region</Button>

			<Button variant={this.state.buttonManage[3] ? 'danger' : 'primary'}
				className='button' onClick={this.addPoint}>Add Point</Button>

			<Button variant={this.state.buttonManage[1] ? 'danger' : 'primary'}
				className='button' onClick={this.addLink}>Add Oriented Link</Button>

			<Button variant={this.state.buttonManage[2] ? 'danger' : 'primary'}
				className='button' onClick={this.positionLegend}>Position Legend</Button>

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
		// tmp[index] = (oldValue) ? false : true;
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

	public positionLegend = () => {
		this.setState(
			(prevState: IState) => ({
				nbClickButton: prevState.buttonManage[2] ? false : true,
			})
		);
		this.resetButtonManage(2);
		this.changeDisplayButtonlegend();
	}

	/**
	 * update button css when mount component
	 */
	public componentDidMount = () => {
		this.updateButtonCss();
	}

	/** render */
	public render() {

		const styleBackground = {
			position: 'relative',
			textAlign: 'center',
			margin: 0,
			padding: 0,
			backgroundImage: 'url(' + this.props.options.imageUrl + ')',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: '300px ',
			height: this.state.sizePanel.toString() + 'px',
			width: this.state.sizePanel.toString() + 'px',
			opacity: 0.8,
			zIndex: 1,

		} as React.CSSProperties;

		const defaultStyle = {
			height: '100vh',
			width: '100vw',
			fontFamily: this.props.options.police,
			fontSize: this.props.options.taille,
			fontStyle: this.props.options.style !== 'bold' ? this.props.options.style : 'normal',
			fontWeight: this.props.options.style === 'bold' ? 'bold' : 'normal',
		} as React.CSSProperties;

		return (
			<CustomScrollbar
				autoHide={false}
				hideHorizontalTrack
			>
				<section style={defaultStyle}>
					<div>

						<div style={{ textAlign: 'left', position: 'relative', display: 'inline-grid' }}
						>
							{this.state.allActionButton}
						</div>

						{
							this.state.buttonManage[0] &&
							<div style={{
								width: '200px',
								position: 'relative',
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
							<div style={{
								position: 'relative',
								left: '50%',
								top: '20%',
								maxWidth: '30%',
								zIndex: 3,
							}}>
								<article

									style={{
										maxWidth: '100%',
										width: '700px',
										position: 'relative',
										overflowY: 'scroll',
										marginLeft: '20%',
										marginRight: '20%',
										marginTop: '0px',
										marginBottom: '20%',
										float: 'right',
										height: '200px',
										backgroundColor: '#212124',
										color: '#d8d9da',
										border: '4px solid #299c46',
										borderRadius: '4px',
										scrollbarColor: '#09090b #212124',
										scrollbarWidth: 'thin',
									}}
								>
									<div style={{ backgroundImage: 'linear-gradient(90deg, rgb(41, 42, 45), rgb(0, 0, 0))' }}>
										<h5 style={{ width: '100%', fontSize: '20px', display: 'inline-flex' }}>Legend
										<i style={{ marginLeft: '78%', }} className='fa fa-close' ></i></h5>
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

						}
						{
							this.state.buttonManage[3] &&
							<div></div>
						}

						<div onClick={this.callMethod}></div>

						<div style={{ backgroundSize: 'cover' }} >
							<div onClick={this.getCoordinates} style={styleBackground} id='mainPanel' >
								{
									this.defineLimit()
								}
								<div >
									<div >
										<br />
										{this.fillCoordinate()}
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
					</div>
				</section>

			</CustomScrollbar >
		);
	}
}
