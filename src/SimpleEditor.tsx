import React from 'react';

import { SimpleOptions } from './types';

import { PanelEditorProps } from '@grafana/data';
import { Collapse, Tab, TabsBar, TabContent } from '@grafana/ui';

import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';
import { LinkClass } from 'Models/LinkClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import { PointClass } from 'Models/PointClass';

import CoordinateSpaceInitial from 'components/coordinateSpaceInitial';
import DashboardData from 'components/dashboardData';
//import LinkForm from 'components/linkForm';
import MainTarget from 'components/mainTarget';
import ManageCoordinateSpace from 'components/CoordinateSpace/manageCoordinateSpace';
import ObjectVisibility from 'components/objectVisibility';
import OrientedLink from 'components/orientedLinkForm';
import OrientedLinkForm from './components/orientedLinkForm';
import PanelData from 'components/panelData';
import PointForm from 'components/pointForm';
import RendutextDefault from 'components/renduTextDefault';
import TimeSelector from 'components/timeSelector';
import ImportInput from 'components/importInput';

import 'style/SimpleEditor.css';

interface IProps extends PanelEditorProps<SimpleOptions> { }

interface IState {
	collapseDashboardData: boolean;
	collapseTimeSelector: boolean;
	collapsePanelData: boolean;
	collapseTargets: boolean;
	/** stock coordinates in array object */
	regionCoordinateSpace: CoordinateSpaceClass[];

	/** collapse */
	collapseDefaultText: boolean;

	/** collapse */
	collapseDisplay: boolean;

	/** collapse */
	collapseGenericSettings: boolean;

	/** collapse */
	collapseGenericSettingsBis: boolean;

	/** collapse */
	collapseInitialDisplay: boolean;

	/** collapse */
	collapseCoorSpace: boolean;

	/** collapse */
	collapseObjectVisibility: boolean;

	/** collapse */
	collapsePoint: boolean;

	/** collapse */
	collapseLink: boolean;

	/** collapse */
	collapseOrientedLink: boolean;

	/** Tableau d'objets PointCLass */
	arrayPoints: PointClass[];

	/** Tableau d'objets LinkClass */
	arrayLinks: LinkClass[];

	/** Tableau d'objets OrientedLinkClass */
	arrayOrientedLinks: OrientedLinkClass[];

	/**
	 * index
	 */
	index: number;
	collapsePrincipalTarget: boolean;

	tabsVariable: boolean[];

	tabsCoordinateSpace: boolean[];
}

/**
 * class SimpleEditor
 */
export class SimpleEditor extends React.PureComponent<PanelEditorProps<SimpleOptions>, IState, IProps> {

	constructor(props: IProps) {
		super(props);
		this.state = {
			collapseDashboardData: false,
			collapsePanelData: false,
			collapseTimeSelector: false,
			regionCoordinateSpace: this.props.options.regionCoordinateSpace,
			collapseDefaultText: false,
			collapseDisplay: false,
			collapseGenericSettings: false,
			collapseInitialDisplay: false,
			collapseCoorSpace: false,
			collapseGenericSettingsBis: false,
			collapseObjectVisibility: false,
			collapsePoint: false,
			collapseLink: false,
			collapseOrientedLink: false,
			arrayPoints: this.props.options.arrayPoints,
			arrayLinks: this.props.options.arrayLinks,
			arrayOrientedLinks: this.props.options.arrayOrientedLinks,
			index: 0,
			collapseTargets: false,
			collapsePrincipalTarget: false,
			tabsVariable: [false, false, false, false, false, false, true],
			tabsCoordinateSpace: [true, false, false, false],
		};
	}

	/**
	 * edit default text
	 */
	public myCallBackDefaultText = (datafromChild: {
		/**
		 * new police
		 */
		police: string,
		/**
		 * new size
		 */
		size: string,
		/**
		 * new style (italic, bold, ...)
		 */
		style: string,
	}) => {
		this.props.onOptionsChange({
			...this.props.options,
			police: datafromChild.police,
			size: datafromChild.size,
			style: datafromChild.style,
		});
	}

	public myCallBackArrayPoints = (dataFromChild: PointClass[]) => {
		this.setState({
			arrayPoints: dataFromChild,
		});

		this.props.onOptionsChange({
			...this.props.options,
			arrayPoints: dataFromChild,
		});
	}

	public myCallBackArrayLinks = (dataFromChild: LinkClass[]) => {
		this.setState({
			arrayLinks: dataFromChild,
		});

		this.props.onOptionsChange({
			...this.props.options,
			arrayLinks: dataFromChild,
		});
	}

	public myCallBackArrayOrientedLinks = (dataFromChild: OrientedLinkClass[]) => {
		this.setState({
			arrayOrientedLinks: dataFromChild,
		});

		this.props.onOptionsChange({
			...this.props.options,
			arrayOrientedLinks: dataFromChild,
		});
	}

	/// Adrien
	onInfoChanged = ({ target }: any) => {
		this.props.onOptionsChange({ ...this.props.options, info: target.value });
	}

	onRefreshChanged = ({ target }: any) => {
		this.props.onOptionsChange({ ...this.props.options, refresh: target.value });
	}

	onTimeZoneChanged = ({ target }: any) => {
		this.props.onOptionsChange({ ...this.props.options, timezone: target.value });
	}

	onPanelChanged = ({ target }: any, index: any) => {
		this.props.onOptionsChange({ ...this.props.options, Id: target.value });
	}

	public onToggleDashboardData = (isOpen: boolean): void => {
		this.setState({
			collapseDashboardData: isOpen,
		});
	}

	public onToggleTimeSelector = (isOpen: boolean): void => {
		this.setState({
			collapseTimeSelector: isOpen,
		});
	}

	public onTogglePanelData = (isOpen: boolean): void => {
		this.setState({
			collapsePanelData: isOpen,
		});
	}

	public onTogglePoint = (isOpen: boolean): void => {
		this.setState({
			collapsePoint: isOpen,
		});
	}

	public onToggleLink = (isOpen: boolean): void => {
		this.setState({
			collapseLink: isOpen,
		});
	}

	public onToggleOrientedLink = (isOpen: boolean): void => {
		this.setState({
			collapseOrientedLink: isOpen,
		});
	}

	public onToggleTargets = (isOpen: boolean): void => {
		this.setState({
			collapseTargets: isOpen,
		});
	}

	public onTogglePrincipalTargets = (isOpen: boolean): void => {
		this.setState({
			collapsePrincipalTarget: isOpen,
		});
	}

	/**
	 * switch tab
	 * @param {number} id id to to new tab
	 */
	public goToTab = (id: number) => {
		const oldValue: boolean[] = this.state.tabsVariable.slice();
		const size: number = oldValue.length;
		for (let i: number = 0; i < size; i++) {
			oldValue[i] = (i === id) ? true : false;
		}
		this.setState({
			tabsVariable: oldValue,
		});
	}

	/**
	 * swtith tab Coordinate space
	 */
	public goToTabCoordinateSpace = (id: number) => {
		const oldValue: boolean[] = this.state.tabsCoordinateSpace.slice();
		const size: number = oldValue.length;
		for (let i: number = 0; i < size; i++) {
			oldValue[i] = (i === id) ? true : false;
		}
		this.setState({
			tabsCoordinateSpace: oldValue,
		});
	}

	/**
	 * HTML code
	 */
	public render() {
		const l10n = require('Localization/en.json');

		return (
			<div className='divSimpleEditor' >

				<TabsBar className='page-header tabs' hideBorder={false}>
					<Tab key='tabDisplay'
						label={l10n.simpleEditor.display}
						active={this.state.tabsVariable[0]}
						onChangeTab={() => this.goToTab(0)}
					/>
					<Tab key='tabSpaceInitialVisualisation'
						label={l10n.simpleEditor.spaceInitialVisualisation}
						active={this.state.tabsVariable[1]}
						onChangeTab={() => this.goToTab(1)}
					/>
					<Tab key='tabCoordinateSpace'
						label={l10n.simpleEditor.CoordinateSpace}
						active={this.state.tabsVariable[2]}
						onChangeTab={() => this.goToTab(2)}
					/>
					<Tab key='tabObjectVisibility'
						label={l10n.simpleEditor.objectVisibility}
						active={this.state.tabsVariable[3]}
						onChangeTab={() => this.goToTab(3)}
					/>
					<Tab key='tabMetricsSettings'
						label={l10n.simpleEditor.metricsSettings}
						active={this.state.tabsVariable[4]}
						onChangeTab={() => this.goToTab(4)}
					/>
					<Tab key='tabGraphicalObject'
						label='Graphical object'
						active={this.state.tabsVariable[5]}
						onChangeTab={() => this.goToTab(5)}
					/>
					<Tab key='tabImportInput'
						label='Import Files'
						active={this.state.tabsVariable[6]}
						onChangeTab={() => this.goToTab(6)}
					/>
				</TabsBar>
				<TabContent>
					{this.state.tabsVariable[0] &&
						<RendutextDefault
							options={this.props.options}
							onOptionsChange={this.props.onOptionsChange}
							data={this.props.data}
						/>
					}
					{
						this.state.tabsVariable[1] &&
						<CoordinateSpaceInitial
							options={this.props.options}
							onOptionsChange={this.props.onOptionsChange}
							data={this.props.data}
						/>
					}
					{
						this.state.tabsVariable[2] &&
						<div>
							<TabsBar className='page-header tabs' hideBorder={false}>
								<Tab key='tabDisplayManageCoordinateSpace'
									label='Region'
									active={this.state.tabsCoordinateSpace[0]}
									onChangeTab={() => this.goToTabCoordinateSpace(0)}
								/>
								<Tab key='tabDisplayPoint'
									label='Point'
									active={this.state.tabsCoordinateSpace[1]}
									onChangeTab={() => this.goToTabCoordinateSpace(1)}
								/>
								{/* <Tab key='tabDisplayLink'
									label='Link'
									active={this.state.tabsCoordinateSpace[2]}
									onChangeTab={() => this.goToTabCoordinateSpace(2)}
								/> */}
								<Tab key='tabDisplayOrientedLink'
									label='OrientedLink'
									active={this.state.tabsCoordinateSpace[3]}
									onChangeTab={() => this.goToTabCoordinateSpace(3)}
								/>
							</TabsBar>
							<TabContent>
								{
									this.state.tabsCoordinateSpace[0] &&
									<ManageCoordinateSpace
										options={this.props.options}
										onOptionsChange={this.props.onOptionsChange}
										data={this.props.data}
									/>
								}
								{
									this.state.tabsCoordinateSpace[1] &&

									<PointForm
										callBackFromParent={this.myCallBackArrayPoints.bind(this)}
										regionCoordinateSpace={this.props.options.regionCoordinateSpace}
										oldArrayPointClass={this.props.options.arrayPoints}
										options={this.props.options}
										onOptionsChange={this.props.onOptionsChange}
										data={this.props.data}
									/>

								}
								{/* {
									this.state.tabsCoordinateSpace[2] &&

									<LinkForm regionCoordinateSpace={this.props.options.regionCoordinateSpace}
										oldArrayLinkClass={this.props.options.arrayLinks}
										arrayPointClass={this.props.options.arrayPoints}
										callBackFromParent={this.myCallBackArrayLinks.bind(this)}
									/>
								} */}
								{
									this.state.tabsCoordinateSpace[3] &&

									<OrientedLinkForm arrayPoint={this.props.options.arrayPoints}
										regionCoordinateSpace={this.props.options.regionCoordinateSpace}
										oldArrayOrientedLinkClass={this.props.options.arrayOrientedLinks}
										callBackFromParent={this.myCallBackArrayOrientedLinks.bind(this)}
										options={this.props.options}
										onOptionsChange={this.props.onOptionsChange}
										data={this.props.data}
									/>
								}
							</TabContent>
						</div>
					}
					{
						this.state.tabsVariable[3] &&
						<ObjectVisibility />

					}
					{
						this.state.tabsVariable[4] &&

						<div className='adrien'>
							<Collapse isOpen={this.state.collapseDashboardData}
								label='Dashboard Data Display' onToggle={this.onToggleDashboardData}>
								<DashboardData options={this.props.options}
									onOptionsChange={this.props.onOptionsChange} data={this.props.data} />
							</Collapse>
							<Collapse isOpen={this.state.collapseTimeSelector}
								label='Time Selector Display' onToggle={this.onToggleTimeSelector}>
								<TimeSelector options={this.props.options}
									onOptionsChange={this.props.onOptionsChange} data={this.props.data} />
							</Collapse>
							<Collapse isOpen={this.state.collapsePrincipalTarget}
								label='Metrics Principal' onToggle={this.onTogglePrincipalTargets}>
								<MainTarget options={this.props.options} onOptionsChange={this.props.onOptionsChange} data={this.props.data} />
							</Collapse>
							<Collapse isOpen={this.state.collapsePanelData} label='Metrics Aux' onToggle={this.onTogglePanelData}>
								<PanelData options={this.props.options} onOptionsChange={this.props.onOptionsChange} data={this.props.data} />
							</Collapse>
						</div>
					}
					{
						this.state.tabsVariable[5] &&
						<div>
							<div className='CoordinateSpaceInitital'>
								<Collapse isOpen={this.state.collapsePoint}
									label='Point'
									onToggle={this.onTogglePoint}
								>
									<PointForm
										oldArrayPointClass={this.props.options.arrayPoints}
										callBackFromParent={this.myCallBackArrayPoints.bind(this)}
										regionCoordinateSpace={this.props.options.regionCoordinateSpace}
										options={this.props.options}
										onOptionsChange={this.props.onOptionsChange}
										data={this.props.data}
									/>

								</Collapse>
							</div>
							{/* <div className='CoordinateSpaceInitital'>
								<Collapse isOpen={this.state.collapseLink}
									label='Link'
									onToggle={this.onToggleLink}>

									<LinkForm
										regionCoordinateSpace={this.props.options.regionCoordinateSpace}
										oldArrayLinkClass={this.props.options.arrayLinks}
										arrayPointClass={this.props.options.arrayPoints}
										callBackFromParent={this.myCallBackArrayLinks.bind(this)}
									/>

								</Collapse>
							</div> */}
							<div className='CoordinateSpaceInitital'>
								<Collapse isOpen={this.state.collapseOrientedLink}
									label='Oriented Link'
									onToggle={this.onToggleOrientedLink}>
									<OrientedLink
										arrayPoint={this.props.options.arrayPoints}
										regionCoordinateSpace={this.props.options.regionCoordinateSpace}
										oldArrayOrientedLinkClass={this.props.options.arrayOrientedLinks}
										callBackFromParent={this.myCallBackArrayOrientedLinks.bind(this)}
										options={this.props.options}
										onOptionsChange={this.props.onOptionsChange}
										data={this.props.data}
									/>
								</Collapse>
							</div>
						</div>
					}
					{
						this.state.tabsVariable[6] &&
						<div>
							<ImportInput options={this.props.options}
									onOptionsChange={this.props.onOptionsChange} data={this.props.data} />
						</div>
					}
				</TabContent>
			</div>
		);
	}
}
