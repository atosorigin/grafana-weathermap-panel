import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';

import { EspaceCoordonneesExtendClass } from 'Models/EspaceCoordonneesExtendClass';
import _ from 'lodash';
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

// import { CustomScrollbar } from '@grafana/ui';

interface IProps extends PanelProps<SimpleOptions> { }

interface IState {
	displayArrowOnPanel: JSX.Element,
	isUpdate: boolean,
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
		};
	}

	/**
	 * TODO
	 */
	public fillCoor = (): JSX.Element => {
		const { options } = this.props;
		let mapItems: JSX.Element[];

		mapItems = options.arrayEspaceCoordonnees
			.map((line: EspaceCoordonneesExtendClass, index) =>
				<DrawRectangleExtend key={line.id} color='red' uneCoor={line}
					useLimit={true}
					limit={options.arrayEspaceVisualisationInitial}
					contentTooltip={<a>salut</a>}
					onOptionsChange={this.props.onOptionsChange}
					options={this.props.options}
					data={this.props.data} />,
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
			uneCoor={arrayEspaceVisualisationInitial} />;
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

				let item: JSX.Element = <DrawArrow key={line.getId()} coordinateSpace={line.getCoordinateSpace()}
					drawGraphicmarker={line.getDrawGraphicMarker()} shape={line.getShape()}
					sizeWidth={line.getSizeWidth()} sizeHeight={line.getSizeHeight()} rotate={line.getRotateArrow()}
					positionShapeX={line.getPositionShapeX()} positionShapeY={line.getPositionShapeY()} label={line.getLabel()}
					positionLabelX={line.getPositionLabelX()} positionLabelY={line.getPositionLabelY()}
					height={this.props.height} police={this.props.options.police}
					sizePolice={this.props.options.taille} color={line.getColor()} />

				mapItems.push(item);

			} else if (line.shape.value === 'circle' || line.shape.value === 'cross') {

				let item: JSX.Element = <DrawCircleCross key={line.getId()} coordinateSpace={line.getCoordinateSpace()}
					drawGraphicMarker={line.getDrawGraphicMarker()} shape={line.getShape()} size={line.getSizeWidth()}
					positionShapeX={line.getPositionShapeX()} positionShapeY={line.getPositionShapeY()} label={line.getLabel()}
					positionLabelX={line.getPositionLabelX()} positionLabelY={line.getPositionLabelY()}
					height={this.props.height} police={this.props.options.police}
					sizePolice={this.props.options.taille} color={line.color} />

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
					key={link.getId()}
					pointAPositionX={link.getPointAPositionX()}
					pointAPositionY={link.getPointAPositionY()}
					pointBPositionX={link.getPointBPositionX()}
					pointBPositionY={link.getPointBPositionY()}
					colorA={link.getColorCoordinateA()}
					colorB={link.getColorCoordinateB()}
					orientationLink={link.getOrientationLink().value || ''}
					labelA={link.getLabelLinkA()}
					labelB={link.getLabelLinkB()}
					labelAPositionX={link.getPositionXLabelA()}
					labelAPositionY={link.getPositionYLabelA()}
					labelBPositionX={link.getPositionXLabelB()}
					labelBPositionY={link.getPositionYLabelB()}
					height={this.props.height}
				/>;
			} else if (link.defineHowToGetCoordonate.value === 'point') {
				item = <DrawLinkWithPoints
					key={link.getId()}
					pointIn={link.getPointIn()}
					pointOut={link.getPointOut()}
					labelA={link.getLabelLinkA()}
					labelB={link.getLabelLinkB()}
					labelAPositionX={link.getPositionXLabelA()}
					labelAPositionY={link.getPositionYLabelA()}
					labelBPositionX={link.getPositionXLabelB()}
					labelBPositionY={link.getPositionYLabelB()}
					orientationLink={link.getOrientationLink().value || ''}
					height={this.props.height}
				/>;
			} else if (link.defineHowToGetCoordonate.value === 'region') {
				item = <DrawLinkWithRegions
					key={link.getId()}
					regionIn={link.getRegionIn()}
					regionOut={link.getRegionOut()}
					colorA={link.getColorRegionIn()}
					colorB={link.getColorRegionOut()}
					labelA={link.getLabelLinkA()}
					labelB={link.getLabelLinkB()}
					labelAPositionX={link.getPositionXLabelA()}
					labelAPositionY={link.getPositionYLabelA()}
					labelBPositionX={link.getPositionXLabelB()}
					labelBPositionY={link.getPositionYLabelB()}
					orientationLink={link.getOrientationLink().value || ''}
					height={this.props.height}
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



	public getCoordinatesWithClick = (event: { nativeEvent: MouseEvent }) => {

		// console.log(event.nativeEvent);
		

		// const element = document.getElementById('mainPanel');
		console.clear();
		console.log(event.nativeEvent.x);
		console.log(event.nativeEvent.pageX);
		console.log(event.nativeEvent.screenX);
		// console.log(event.nativeEvent.parentElement.offsetX);
		console.log(event.nativeEvent.screenX);
		console.log(event.nativeEvent.movementX);
		// console.log(event.nativeEvent.x);
		// return ;

		let positionY = event.nativeEvent.offsetY - (this.props.height / 2);
		let positionX = event.nativeEvent.offsetX - (this.props.height / 2);

		const coordinates = this.props.options.coordinatesFromClick;

		if (coordinates[0].id % 2 === 0) {
			coordinates[1].x = positionX;
			coordinates[1].y = positionY * (-1);
			coordinates[0].id++;
		} else {
			coordinates[2].x = positionX;
			coordinates[2].y = positionY * (-1);
			coordinates[0].id++;
			this.displayLinkClick();
			this.setState({
				isUpdate: false,
			})
		}
	}

	/**
	 * to do
	 */
	public displayLinkClick = () => {
		const coordinates = this.props.options.coordinatesFromClick;
		const id = this.props.options.indexOrientedLink;
		const newOrientedLink: OrientedLinkClass = new OrientedLinkClass(
			id,
			{ label: 'double', value: 'double' },
			coordinates[1].x.toString(),
			coordinates[1].y.toString(),
			'#5794F2',
			coordinates[2].x.toString(),
			coordinates[2].y.toString(),
			'#E54658',
			'',
			'',
			'',
			'',
			'',
			'',
			{},
			{},
		);
		this.props.options.indexOrientedLink = id + 1;

		this.props.onOptionsChange({
			...this.props.options,
			arrayOrientedLinks: this.props.options.arrayOrientedLinks.concat(newOrientedLink),
		});

		// setTimeout(() => {
		// 	this.displayOrientedLink();
		// }, 100);
	}

	/**
	 * to do
Computer
Other
Router
Phone
Computer
Other
Router
Phone

	 */
	public refreshDisplayOrientedLink = () => {
		if (this.state.isUpdate === false) {
			setTimeout(() => {
				this.displayOrientedLink();
			}, 100);

			this.setState({
				isUpdate: true,
			})
		}
	}

	/**
	 * to do
	 */
	public displayOrientedLink() {
		const { options } = this.props;
		const arrayOrientedLink = options.arrayOrientedLinks;

		const mapItems: JSX.Element[] = [];
		let item: JSX.Element = <div></div>;

		arrayOrientedLink.forEach((orientedLink: OrientedLinkClass) => {
			item = <DrawOrientedLink
				key={orientedLink.getId()}
				orientationLink={orientedLink.getOrientationLink().value || ''}
				pointAPositionX={orientedLink.getPointAPositionX()}
				pointAPositionY={orientedLink.getPointAPositionY()}
				pointBPositionX={orientedLink.getPointBPositionX()}
				pointBPositionY={orientedLink.getPointBPositionY()}
				colorA={orientedLink.getColorCoordinateA()}
				colorB={orientedLink.getColorCoordinateB()}
				labelA={orientedLink.getLabelLinkA()}
				labelB={orientedLink.getLabelLinkB()}
				labelAPositionX={orientedLink.getPositionXLabelA()}
				labelAPositionY={orientedLink.getPositionYLabelA()}
				labelBPositionX={orientedLink.getPositionXLabelB()}
				labelBPositionY={orientedLink.getPositionYLabelB()}
				associateRegionA={orientedLink.getCoordinateSpaceAssociatePointA()}
				associateRegionB={orientedLink.getCoordinateSpaceAssociatePointB()}
				height={this.props.height}
			/>;
			mapItems.push(item);
		});

		this.setState({
			displayArrowOnPanel: <ul>{mapItems}</ul>,
		});
		// return(
		// 	<div>
		// 		{mapItems}
		// 	</div>
		// );
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
			<div style={testStyle}>

				<div>

					<div >

						<div onClick={this.getCoordinatesWithClick} id='mainPanel' style={{
							position: 'relative',
							textAlign: 'center',
							margin: 0,
							padding: 0,
							backgroundImage: 'url(' + options.imageUrl + ')',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							backgroundSize: '300px ',
							height: '300px',
							width: '300px',
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
									this.state.displayArrowOnPanel
								}
								{
									this.refreshDisplayOrientedLink()
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
			// </CustomScrollbar >
		);
	}
}
