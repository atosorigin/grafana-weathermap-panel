import React, { PureComponent } from 'react';
import { PanelProps, SelectableValue } from '@grafana/data';
import { SimpleOptions, ReturnQuery, ResultQuery } from 'types';

import { EspaceCoordonneesExtendClass } from 'Models/EspaceCoordonneesExtendClass';
import DrawRectangle from './components/Draw/DrawRectangle';
import DrawRectangleExtend from './components/Draw/DrawRectangleExtend';
import DrawCircleCross from './components/Draw/DrawCircleCross';
import DrawArrow from './components/Draw/DrawArrow';
import DrawLinkWithCoordinates from './components/Draw/DrawLinkWithCoordinates';
import DrawLinkWithPoints from './components/Draw/DrawLinkWithPoints';
import DrawLinkWithRegions from './components/Draw/DrawLinkWithRegions';
import DrawOrientedLink from './components/Draw/DrawOrientedLink';

import { PointClass } from 'Models/PointClass';
import { LinkClass } from 'Models/LinkClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';

interface IProps extends PanelProps<SimpleOptions> { }

interface IState {
	displayArrowOnPanel: JSX.Element,
	isUpdate: boolean,
	sizePanel: number,
	idOrientedLink: number;
}


/**
 * Affichage
 */
export class SimplePanel extends PureComponent<IProps, IState> {

	constructor(props: IProps) {
		super(props);
		this.state = {
			displayArrowOnPanel: <div></div>,
			isUpdate: false,
			sizePanel: 300,
			idOrientedLink: 1,
		};
	}

	/**
	 * TODO
	 */
	public fillCoor = (): JSX.Element => {
		const { options } = this.props;
		let mapItems: JSX.Element[];
		let i: number = 0;

		mapItems = options.arrayEspaceCoordonnees
			.map((line: EspaceCoordonneesExtendClass, index) =>
				<DrawRectangleExtend key={'drawRectangleExtend' + i++} color='red' uneCoor={line}
					useLimit={true}
					limit={options.arrayEspaceVisualisationInitial}
					contentTooltip={<a>salut</a>}
					onOptionsChange={this.props.onOptionsChange}
					options={this.props.options}
					data={this.props.data}
					id={'region' + line.id} />,
			);

		return (
			<ul>
				{mapItems}
			</ul>
		);
	}

	/**
	 * Display limit (arrayEspaceVisualisationInitial)
	 * @returns JSX.Element
	 */
	public defineLimit = (): JSX.Element => {
		const { arrayEspaceVisualisationInitial } = this.props.options;

		let jsxItems: JSX.Element;

		jsxItems = <DrawRectangle key='limitCoor' color='orange'
			uneCoor={arrayEspaceVisualisationInitial} id='initialSpace' />;
		return jsxItems;
	}

	/**
	 * to do
	 */
	public displayPoint() {

		const { options } = this.props;

		const arrayPoints: PointClass[] = options.arrayPoints;
		let mapItems: JSX.Element[] = [];

		arrayPoints.forEach((line: PointClass) => {
			if (line.shape.value === 'arrow') {

				let item: JSX.Element = <DrawArrow key={line.id} coordinateSpace={line.coordinateSpace}
					drawGraphicmarker={line.drawGraphicMarker} shape={line.shape}
					sizeWidth={line.sizeWidth} sizeHeight={line.sizeHeight} rotate={line.rotateArrow}
					positionShapeX={line.positionShapeX} positionShapeY={line.positionShapeY} label={line.label}
					positionLabelX={line.positionLabelX} positionLabelY={line.positionLabelY}
					height={this.state.sizePanel} police={this.props.options.police}
					sizePolice={this.props.options.taille} color={line.color} idPoint={'point' + line.id} />

				mapItems.push(item);

			} else if (line.shape.value === 'circle' || line.shape.value === 'cross') {

				let item: JSX.Element = <DrawCircleCross key={line.id} coordinateSpace={line.coordinateSpace}
					drawGraphicMarker={line.drawGraphicMarker} shape={line.shape} size={line.sizeWidth}
					positionShapeX={line.positionShapeX} positionShapeY={line.positionShapeY} label={line.label}
					positionLabelX={line.positionLabelX} positionLabelY={line.positionLabelY}
					height={this.state.sizePanel} police={this.props.options.police}
					sizePolice={this.props.options.taille} color={line.color} idPoint={'point' + line.id} />

				mapItems.push(item);
			}
		});

		return (
			<ul>
				{mapItems}
			</ul>
		);
	}

	public displayLink() {
		const { options } = this.props;
		let mapItems: JSX.Element[] = [];
		const arrayLinks: LinkClass[] = options.arrayLinks;

		arrayLinks.forEach((link: LinkClass) => {
			let item: JSX.Element = <div></div>;
			if (link.defineHowToGetCoordonate.value === 'coordinate') {
				item = <DrawLinkWithCoordinates
					key={link.id}
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
				/>;
			} else if (link.defineHowToGetCoordonate.value === 'point') {
				item = <DrawLinkWithPoints
					key={link.id}
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
				/>;
			} else if (link.defineHowToGetCoordonate.value === 'region') {
				item = <DrawLinkWithRegions
					key={link.id}
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

	getGoodId(): string {
		const startFunc = 'event.nativeEvent.';
		let midFunc = '';
		const endFunc = 'id';

		// recuperer l'id
		let id = eval(startFunc + endFunc);
		while (id !== 'mainPanel') {
			midFunc += 'parentElement.';
			// tslint:disable-next-line: no-eval
			id = eval(startFunc + midFunc + endFunc);
		}
		return id;
	}

	public getCoordinatesWithClick = (event: any) => {

		let positionX: number = 0;
		let positionY: number = 0;
		//const sidePanel: number = this.state.sizePanel;
		const coordinates = this.props.options.coordinatesFromClick;
		const pointA: any = coordinates[1];
		const pointB: any = coordinates[2];
		// const labelA: string = this.props.options.coordinatesFromClick[1].label;
		// const regionA: any = this.props.options.coordinatesFromClick[1].region;
		// const labelB: string = this.props.options.coordinatesFromClick[2].label;
		// const regionB: any = this.props.options.coordinatesFromClick[2].region;


		// get coordinate if it clicks on empty space of panel (mainPanel || initialSpace)
		if (event.nativeEvent.target.id === 'mainPanel' ||
			event.nativeEvent.target.id === 'initialSpace'
		) {

			// positionX = Math.round(((event.nativeEvent.offsetX) - (sidePanel / 2)) * (100 / sidePanel)) * 2;
			// 	positionY = (Math.round(((event.nativeEvent.offsetY) - (sidePanel / 2)) * (100 / sidePanel)) * 2);



			// 	if (coordinates[0].id % 2 === 0) {
			// 		pointA.x = positionX;
			// 		pointA.y = positionY * (-1);
			// 		coordinates[0].id++;
			// 	} else {
			// 		pointB.x = positionX;
			// 		pointB.y = positionY * (-1);
			// 		coordinates[0].id++;
			// 		// this.displayLinkClick(	{label: pointA.label, value: pointA.region},
			// 		// 						{label: pointB.label, value: pointB.region});
			// 		this.displayLinkClick({}, {});
			// 		// this.setState({
			// 			// 	isUpdate: false,
			// 			// })
			// 	}
			return;

		} else if (event.nativeEvent.target.id.startsWith('point')) {
			const id: number = parseInt(event.nativeEvent.target.id.charAt(5) + event.nativeEvent.target.id.charAt(6));
			const arrayPoint: PointClass[] = this.props.options.arrayPoints;

			arrayPoint.forEach((point: PointClass) => {

				if (point.id === id) {
					const coordinates = this.props.options.coordinatesFromClick;

					if (coordinates[0].id % 2 === 0) {
						pointA.x = point.positionShapeX;
						pointA.y = point.positionShapeY;
						pointA.labelPoint = point.label;
						pointA.point = point;
						coordinates[0].id++;
					} else {
						pointB.x = point.positionShapeX;
						pointB.y = point.positionShapeY;
						pointB.labelPoint = point.label;
						pointB.point = point;
						coordinates[0].id++;
						this.displayLinkClick({ label: pointA.labelPoint, value: pointA.point },
							{ label: pointB.labelPoint, value: pointB.point },
							{}, {});
					}
				}
			})
		} else {
			// if it clicks on an element of panel
			const arrayRegion: EspaceCoordonneesExtendClass[] = this.props.options.arrayEspaceCoordonnees;

			arrayRegion.forEach((region: EspaceCoordonneesExtendClass) => {

				const xMin: number = parseInt(region.xMin);
				const xMax: number = parseInt(region.xMax);
				const yMin: number = parseInt(region.yMin);
				const yMax: number = parseInt(region.yMax);

				// if it clicks on a region
				if (event.nativeEvent.target.id.startsWith('region')) {
					const id: number = parseInt(event.nativeEvent.target.id.charAt(6) + event.nativeEvent.target.id.charAt(7));

					if (id === region.id) {

						positionX = (xMin + xMax) / 2;
						positionY = (yMax + yMin) / 2;

						const coordinates = this.props.options.coordinatesFromClick;

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

							this.displayLinkClick({}, {},
								{ label: pointA.labelRegion, value: pointA.region },
								{ label: pointB.labelRegion, value: pointB.region });
						}
					}
				} else {
					const id: number = parseInt(event.nativeEvent.target.offsetParent.id.charAt(6) + event.nativeEvent.target.offsetParent.id.charAt(7));

					if (id === region.id) {
						positionX = (xMin + xMax) / 2;
						positionY = (yMax + yMin) / 2;
						const coordinates = this.props.options.coordinatesFromClick;

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

							this.displayLinkClick({}, {},
								{ label: pointA.labelRegion, value: pointA.region },
								{ label: pointB.labelRegion, value: pointB.region });
						}
					}
				}
			})
		}
	}

	public deleteLinkOnClick = (event: any) => {
		//console.log(event.target)
	}


	public getValueMainQueryForOrientedLink(associateRegion: SelectableValue<EspaceCoordonneesExtendClass>): string[] {
		const req: ReturnQuery = this.props.options.mainQueryReturn;
		let arrayValueQuery: string[] = [];
		const key: string = associateRegion.value?.key || '';

		const results: ResultQuery[] = req.data.result;

		results.forEach((result) => {

			if (associateRegion.value?.valueKey === result.metric[key]) {
				arrayValueQuery.push(result.value[1]);
			}
		})

		return arrayValueQuery;
	}

	public defineLabelForOrientedLink(associateRegion: SelectableValue<EspaceCoordonneesExtendClass>): string {
		const arrayValueQuery: string[] = this.getValueMainQueryForOrientedLink(associateRegion);
		let valueQuery: number = 0;
		let index: number = 0;
		
		arrayValueQuery.forEach((value) => {
			valueQuery = valueQuery + parseInt(value);
			index++;
		})

		return Math.round((valueQuery / index)).toString();
	}

	public defineOrientedLinksAssociate(): OrientedLinkClass[] {
		const arrayRegion: EspaceCoordonneesExtendClass[] = this.props.options.arrayEspaceCoordonnees;
		const arrayAllOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
		const arrayOrientedLinkAssociateRegionIn: OrientedLinkClass[] = [];
		const arrayOrientedLinkAssociateRegionOut: OrientedLinkClass[] = [];
		let arrayToReturn: OrientedLinkClass[] = [];
		// console.log(arrayRegion);
		// console.log(arrayAllOrientedLink);

		arrayRegion.forEach((region) => {
			// console.log(region)
			arrayAllOrientedLink.forEach((orientedLink) => {
				arrayToReturn = [];
				if (region.id === orientedLink.regionIn.value?.id) {
					// console.log(orientedLink)
					// console.log(region)
					arrayOrientedLinkAssociateRegionIn.push(orientedLink);
					arrayToReturn = arrayOrientedLinkAssociateRegionIn;
					region.associateOrientedLink = arrayToReturn;
				}
				
				if (region.id === orientedLink.regionOut.value?.id) {
					arrayOrientedLinkAssociateRegionOut.push(orientedLink);
					arrayToReturn = arrayOrientedLinkAssociateRegionOut;
					region.associateOrientedLink = arrayToReturn;
				}
			});
		});
		
		// console.log(arrayRegion)

		return arrayToReturn;

	}

	/**
	 * to do
	 */
	public displayLinkClick = (
		associatePointIn: SelectableValue<PointClass>,
		associatePointOut: SelectableValue<PointClass>,
		associateRegionIn: SelectableValue<EspaceCoordonneesExtendClass>,
		associateRegionOut: SelectableValue<EspaceCoordonneesExtendClass>) => {

		const coordinates = this.props.options.coordinatesFromClick;
		const id: number = this.state.idOrientedLink;
		const pointA: any = coordinates[1];
		const pointB: any = coordinates[2];
		const newOrientedLink: OrientedLinkClass = new OrientedLinkClass(
			id,
			{ label: 'Double', value: 'double' },
			pointA.x.toString(),
			pointA.y.toString(),
			'#5794F2',
			pointB.x.toString(),
			pointB.y.toString(),
			'#E54658',
			this.defineLabelForOrientedLink(associateRegionIn),
			this.defineLabelForOrientedLink(associateRegionOut),
			'0',
			'0',
			'0',
			'0',
			associatePointIn,
			associatePointOut,
			associateRegionIn,
			associateRegionOut,
		);

		this.setState({
			idOrientedLink: this.state.idOrientedLink + 1,
		})

		this.props.onOptionsChange({
			...this.props.options,
			arrayOrientedLinks: this.props.options.arrayOrientedLinks.concat(newOrientedLink),
		});

		setTimeout(() => {
			this.displayOrientedLink();
		}, 100);

	}

	/**
	 * to do
	 */
	public displayOrientedLink() {
		const { options } = this.props;
		const arrayOrientedLink = options.arrayOrientedLinks;
		//console.log(this.props.options.arrayOrientedLinks)
		const mapItems: JSX.Element[] = [];
		let item: JSX.Element = <div></div>;

		//console.log(arrayOrientedLink)
		arrayOrientedLink.forEach((orientedLink: OrientedLinkClass) => {
			item = <DrawOrientedLink
				key={orientedLink.id}
				orientationLink={orientedLink.orientationLink.value || ''}
				pointAPositionX={orientedLink.pointAPositionX}
				pointAPositionY={orientedLink.pointAPositionY}
				pointBPositionX={orientedLink.pointBPositionX}
				pointBPositionY={orientedLink.pointBPositionY}
				colorA={orientedLink.colorCoordinateA}
				colorB={orientedLink.colorCoordinateB}
				labelA={orientedLink.labelLinkA}
				labelB={orientedLink.labelLinkB}
				labelAPositionX={orientedLink.positionXLabelA}
				labelAPositionY={orientedLink.positionYLabelA}
				labelBPositionX={orientedLink.positionXLabelB}
				labelBPositionY={orientedLink.positionYLabelB}
				associatePointIn={orientedLink.pointIn}
				associatePointOut={orientedLink.pointOut}
				associateRegionIn={orientedLink.regionIn}
				associateRegionOut={orientedLink.regionOut}
				sidePanel={this.state.sizePanel}
				deleteOnCLick={this.deleteLinkOnClick}
			/>;
			mapItems.push(item);
		});

		this.defineOrientedLinksAssociate();

		// this.setState({
		// 	displayArrowOnPanel: <ul>{mapItems}</ul>,
		// });
		return (
			<div>
				{mapItems}
			</div>
		);
	}

	// /** fill oriented link */
	// public componentWillReceiveProps = () => {
	// 	this.displayOrientedLink();
	// }


	// tslint:disable-next-line: completed-docs
	public render() {
		const { options } = this.props;
		// const objectJSON = options.contentJson !== 'contenu du dashboard' ? JSON.parse(options.contentJson) : undefined;

		const testStyle = {
			height: '100vh',
		} as React.CSSProperties;

		const defaultStyle = {
			fontFamily: this.props.options.police,
			fontSize: this.props.options.taille,
			fontStyle: this.props.options.style !== 'bold' ? this.props.options.style : 'normal',
			fontWeight: this.props.options.style === 'bold' ? 'bold' : 'normal',
		} as React.CSSProperties;

		// const defaultStyle = {
		// 	fontFamily: this.props.options.police,
		// 	fontSize: this.props.options.taille,
		// 	fontStyle: this.props.options.style !== 'bold' ? this.props.options.style : 'normal',
		// 	fontWeight: this.props.options.style === 'bold' ? 'bold' : 'normal',
		// } as React.CSSProperties;


		return (
			// <CustomScrollbar
			// 	autoHide={false}
			// 	hideHorizontalTrack
			// >
			<section onClick={this.getCoordinatesWithClick} id='mainPanel' style={defaultStyle}>
				<div style={testStyle}>

					<div>

						<div >


							<div style={{
								position: 'relative',
								textAlign: 'center',
								margin: 0,
								padding: 0,
								backgroundImage: 'url(' + options.imageUrl + ')',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
								backgroundSize: '300px ',
								height: this.state.sizePanel + 'px',
								width: this.state.sizePanel + 'px',
							}}>
								{
									this.defineLimit()
								}
								<br />
								{
									this.fillCoor()
								}
								{
									this.displayLink()
								}
								<div>
									{
										this.displayPoint()
									}
								</div>
								<div>
									{
										//this.state.displayArrowOnPanel
									}
									{
										this.displayOrientedLink()
										//this.refreshDisplayOrientedLink()
									}
									<div>
										{
											this.fillCoor()
										}
									</div>
								</div>
							</div>

						</div>
					</div>
					< div >
						<div>
							{/* {
								objectJSON ?
									(
										<div>
											<DashboardGlobal dash={objectJSON} />
											<DashboardTime dash={objectJSON} time={options.timeRange} url={this.props.options.promUrl} />
											<PanelTargets targets={this.props.options.panelTargets} panel={this.props.options.actualPanel} />
										</div>
									)
									:
									(
										<br />
									)
							} */}
						</div>
					</div>
				</div>
			</section>
			// </CustomScrollbar >
		);
	}
}
