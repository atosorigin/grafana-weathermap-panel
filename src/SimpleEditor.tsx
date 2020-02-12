import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from './types';
import { Collapse, Tab, TabsBar, TabContent } from '@grafana/ui';
import React from 'react';

// import { DataFrame } from '@grafana/data';

import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';

import ManageSeuil from './components/manageSeuil';
import RendutextDefault from './components/renduTextDefault';
import CoordinateSpaceInitial from './components/coordinateSpaceInitial';
import ManageCoordinateSpace from './components/CoordinateSpace/manageCoordinateSpace';

import 'style/SimpleEditor.css';
import ObjectVisibility from 'components/objectVisibility';
import './style/SimpleEditor.css';
import { PointClass } from 'Models/PointClass';
import { LinkClass } from 'Models/LinkClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import LinkForm from './components/linkForm';
import PointForm from './components/pointForm';
import OrientedLink from './components/orientedLinkForm';

import TimeSelector from './components/timeSelector';
import DashboardData from './components/dashboardData';
import PanelData from './components/panelData';
import MainTarget from './components/mainTarget';

interface IProps extends PanelEditorProps<SimpleOptions> { }

interface IState {
	collapseDashboardData: boolean;
	collapseTimeSelector: boolean;
	collapsePanelData: boolean;
	collapseTargets: boolean;
	/** stock coordinates in array object */
	arrayCoordinateSpace: CoordinateSpaceClass[];

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
			arrayCoordinateSpace: this.props.options.arrayCoordinateSpace,
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
			tabsVariable: [false, false, false, true, false, false, false],
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
		taille: string,
		/**
		 * new style (italic, bold, ...)
		 */
		style: string,
	}) => {
		this.props.onOptionsChange({
			...this.props.options,
			police: datafromChild.police,
			taille: datafromChild.taille,
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
					<Tab key='tabGenericParameter'
						label='Lower limit'
						active={this.state.tabsVariable[1]}
						onChangeTab={() => this.goToTab(1)}
					/>
					<Tab key='tabSpaceInitialVisualisation'
						label={l10n.simpleEditor.spaceInitialVisualisation}
						active={this.state.tabsVariable[2]}
						onChangeTab={() => this.goToTab(2)}
					/>
					<Tab key='tabCoordinateSpace'
						label={l10n.simpleEditor.CoordinateSpace}
						active={this.state.tabsVariable[3]}
						onChangeTab={() => this.goToTab(3)}
					/>
					<Tab key='tabObjectVisibility'
						label={l10n.simpleEditor.objectVisibility}
						active={this.state.tabsVariable[4]}
						onChangeTab={() => this.goToTab(4)}
					/>
					<Tab key='tabMetricsSettings'
						label={l10n.simpleEditor.metricsSettings}
						active={this.state.tabsVariable[5]}
						onChangeTab={() => this.goToTab(5)}
					/>
					<Tab key='tabGraphicalObject'
						label='Graphical object'
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
						<ManageSeuil
							options={this.props.options}
							onOptionsChange={this.props.onOptionsChange}
							data={this.props.data}
						/>
					}
					{
						this.state.tabsVariable[2] &&
						<CoordinateSpaceInitial
							options={this.props.options}
							onOptionsChange={this.props.onOptionsChange}
							data={this.props.data}
						/>
					}
					{
						this.state.tabsVariable[3] &&
						<ManageCoordinateSpace
							options={this.props.options}
							onOptionsChange={this.props.onOptionsChange}
							data={this.props.data}
						/>
					}
					{
						this.state.tabsVariable[4] &&
						<ObjectVisibility />

					}
					{
						this.state.tabsVariable[5] &&

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
						this.state.tabsVariable[6] &&
						<div>
							<div className='CoordinateSpaceInitital'>
								<Collapse isOpen={this.state.collapsePoint}
									label='Point'
									onToggle={this.onTogglePoint}>

									<PointForm
										oldArrayPointClass={this.props.options.arrayPoints}
										callBackFromParent={this.myCallBackArrayPoints.bind(this)}
										arrayCoordinateSpace={this.props.options.arrayCoordinateSpace}
									/>

								</Collapse>
							</div>
							<div className='CoordinateSpaceInitital'>
								<Collapse isOpen={this.state.collapseLink}
									label='Link'
									onToggle={this.onToggleLink}>

									<LinkForm
										arrayCoordinateSpace={this.props.options.arrayCoordinateSpace}
										oldArrayLinkClass={this.props.options.arrayLinks}
										arrayPointClass={this.props.options.arrayPoints}
										callBackFromParent={this.myCallBackArrayLinks.bind(this)}
									/>

								</Collapse>
							</div>
							<div className='CoordinateSpaceInitital'>
								<Collapse isOpen={this.state.collapseOrientedLink}
									label='Oriented Link'
									onToggle={this.onToggleOrientedLink}>
									<OrientedLink
										arrayPoint={this.props.options.arrayPoints}
										arrayCoordinateSpace={this.props.options.arrayCoordinateSpace}
										oldArrayOrientedLinkClass={this.props.options.arrayOrientedLinks}
										callBackFromParent={this.myCallBackArrayOrientedLinks.bind(this)}
									/>
								</Collapse>
							</div>
						</div>
					}
				</TabContent>
			</div>
		);
	}
}
