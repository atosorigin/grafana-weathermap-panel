import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from './types';
import { FormField, Collapse, Tab, TabsBar, TabContent } from '@grafana/ui';
import React from 'react';
// import _ from 'lodash';
//
import { EspaceCoordonneesClass } from 'Models/EspaceCoordonneesClass';

import EspaceCoordonnees from './components/EspaceCoordonnees';
import RendutextDefault from './components/renduTextDefault';
import EspaceVisualisationInitial from './components/EspaceVisualisationInitial';
import ParametresGeneriques from './components/Parametrage/parametresGeneriques';
import TextObjects from './components/Parametrage/textObjects';

import 'style/SimpleEditor.css';
import ObjectVisibility from 'components/objectVisibility';
import './style/SimpleEditor.css';
import { PointClass } from 'Models/PointClass';
import { LinkClass } from 'Models/LinkClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import LinkForm from './components/LinkForm';
import PointForm from './components/PointForm';
import OrientedLink from './components/OrientedLinkForm';

import TimeSelector from "./components/TimeSelector";
import DashboardData from "./components/DashboardData";
import PanelData from "./components/PanelData";
import MainTarget from "./components/MainTarget";

interface IProps extends PanelEditorProps<SimpleOptions> { }

interface IState {
	collapseDashboardData: boolean;
	collapseTimeSelector: boolean;
	collapsePanelData: boolean;
	collapseTargets: boolean;
	/** stock coordinates in array object */
	arrayEspaceCoordonnees: EspaceCoordonneesClass[];

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

	idOrientedLink: number;
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
			arrayEspaceCoordonnees: this.props.options.arrayEspaceCoordonnees,
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
			idOrientedLink: this.props.options.indexOrientedLink,
			index: 0,
			collapseTargets: false,
			collapsePrincipalTarget: false,
			tabsVariable: [false, false, false, false, false, true, false],
		};
	}

	/**
	 * Change background picture
	 */
	public onImageChanged = (event: {
		/**
		 * Get target element
		 */
		target: HTMLInputElement;
	}) => {
		this.props.onOptionsChange({ ...this.props.options, imageUrl: event.target.value });
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

	/**
	 * call back for parametresGeneriques
	 */
	public myCallBackGenericSettings = (pFondIsActive: boolean, pContourIsActive: boolean) => {
		const { onOptionsChange } = this.props;
		onOptionsChange({
			...this.props.options,
			fondIsActive: pFondIsActive,
			contourIsActive: pContourIsActive,
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

	public myCallBackIdOrientedLink = (idFromOrientedLinkComponent: number) => {
		this.setState({
			idOrientedLink: idFromOrientedLinkComponent,
		});

		this.props.onOptionsChange({
			...this.props.options,
			indexOrientedLink: idFromOrientedLinkComponent,
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
		const { options } = this.props;
		const l10n = require('Localization/en.json');
		const defaultStyle = {
			fontFamily: this.props.options.police,
			fontSize: this.props.options.taille,
			fontStyle: this.props.options.style !== 'bold' ? this.props.options.style : 'normal',
			fontWeight: this.props.options.style === 'bold' ? 'bold' : 'normal',
		} as React.CSSProperties;

		return (
			<div className='divSimpleEditor' style={defaultStyle} >

				<TabsBar className='page-header tabs' hideBorder={false}>
					<Tab key='tabDefaultText'
						label={l10n.simpleEditor.renduTextDefault}
						active={this.state.tabsVariable[0]}
						onChangeTab={() => this.goToTab(0)}
					/>
					<Tab key='tabDisplay'
						label={l10n.simpleEditor.display}
						active={this.state.tabsVariable[1]}
						onChangeTab={() => this.goToTab(1)}
					/>
					<Tab key='tabGenericParameter'
						label={l10n.simpleEditor.genericSettings}
						active={this.state.tabsVariable[2]}
						onChangeTab={() => this.goToTab(2)}
					/>
					<Tab key='tabGenericParameterBis'
						label={l10n.simpleEditor.genericSettingsBis}
						active={this.state.tabsVariable[3]}
						onChangeTab={() => this.goToTab(3)}
					/>
					<Tab key='tabSpaceInitialVisualisation'
						label={l10n.simpleEditor.spaceInitialVisualisation}
						active={this.state.tabsVariable[4]}
						onChangeTab={() => this.goToTab(4)}
					/>
					<Tab key='tabCoordinateSpace'
						label={l10n.simpleEditor.spaceCoordinate}
						active={this.state.tabsVariable[5]}
						onChangeTab={() => this.goToTab(5)}
					/>
					<Tab key='tabObjectVisibility'
						label={l10n.simpleEditor.objectVisibility}
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
					{this.state.tabsVariable[1] &&
						<div className='espaceVisualisationInitital'>
							<FormField label={l10n.simpleEditor.pictureLink}
								labelWidth={10}
								inputWidth={30}
								type='text'
								onChange={this.onImageChanged}
								value={options.imageUrl || ''} />
						</div>
					}
					{
						this.state.tabsVariable[2] &&
						<ParametresGeneriques
							options={this.props.options}
							onOptionsChange={this.props.onOptionsChange}
							data={this.props.data}
						/>
					}
					{
						this.state.tabsVariable[3] &&
						<TextObjects
							options={this.props.options}
							onOptionsChange={this.props.onOptionsChange}
							data={this.props.data}
						/>
					}
					{
						this.state.tabsVariable[4] &&
						<EspaceVisualisationInitial
							options={this.props.options}
							onOptionsChange={this.props.onOptionsChange}
							data={this.props.data}
						/>
					}
					{
						this.state.tabsVariable[5] &&
						<EspaceCoordonnees
							options={this.props.options}
							onOptionsChange={this.props.onOptionsChange}
							data={this.props.data}
						/>
					}
					{
						this.state.tabsVariable[6] &&
						<ObjectVisibility />

					}
				</TabContent>

				<br />
				<br />
				<br />
				<br />

				<div>
					<h3>Settings interface</h3>

				</div>
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

				<div className='espaceVisualisationInitital'>
					<Collapse isOpen={this.state.collapsePoint}
						label='Point'
						onToggle={this.onTogglePoint}>

						<PointForm
							oldArrayPointClass={this.props.options.arrayPoints}
							callBackFromParent={this.myCallBackArrayPoints.bind(this)}
							arraySpaceCoordinate={this.props.options.arrayEspaceCoordonnees}
						/>

					</Collapse>
				</div>
				<div className='espaceVisualisationInitital'>
					<Collapse isOpen={this.state.collapseLink}
						label='Link'
						onToggle={this.onToggleLink}>

						<LinkForm
							arrayCoordinateSpace={this.props.options.arrayEspaceCoordonnees}
							oldArrayLinkClass={this.props.options.arrayLinks}
							arrayPointClass={this.props.options.arrayPoints}
							callBackFromParent={this.myCallBackArrayLinks.bind(this)}
						/>

					</Collapse>
				</div>
				<div className='espaceVisualisationInitital'>
					<Collapse isOpen={this.state.collapseOrientedLink}
						label='Oriented Link'
						onToggle={this.onToggleOrientedLink}>

						<OrientedLink
							arrayCoordinateSpace={this.props.options.arrayEspaceCoordonnees}
							oldArrayOrientedLinkClass={this.props.options.arrayOrientedLinks}
							callBackFromParent={this.myCallBackArrayOrientedLinks.bind(this)}
							idFromPanel={this.props.options.indexOrientedLink}
							callBackIdOrientedLink={this.myCallBackIdOrientedLink.bind(this)}
						/>

					</Collapse>
				</div>
			</div>
		);
	}
}
