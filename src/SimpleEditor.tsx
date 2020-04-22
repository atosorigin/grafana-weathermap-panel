import React from 'react';

import { SimpleOptions } from './types';

import { PanelEditorProps } from '@grafana/data';
import { Tab, TabsBar, TabContent } from '@grafana/ui';

import CoordinateSpaceInitialClass from 'components/coordinateSpaceInitial';
import ImportInput from 'components/importInput';
import ManageCoordinateSpace from 'components/CoordinateSpace/manageCoordinateSpace';

import Display from 'components/display';

import 'style/SimpleEditor.css';

interface Props extends PanelEditorProps<SimpleOptions> {}

interface State {
  collapseDashboardData: boolean;
  collapseTimeSelector: boolean;
  collapsePanelData: boolean;

  /**
   * index
   */
  collapsePrincipalTarget: boolean;

  tabsVariable: boolean[];

  tabsCoordinateSpace: boolean[];
}

/**
 * class SimpleEditor
 */
export class SimpleEditor extends React.PureComponent<PanelEditorProps<SimpleOptions>, State, Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      collapseDashboardData: false,
      collapsePanelData: false,
      collapseTimeSelector: false,
      collapsePrincipalTarget: false,
      tabsVariable: [true, false, false, false, false],
      tabsCoordinateSpace: [true, false, false, false],
    };
  }
  /********************* Display Button in relation to View or Edit */

  // /**
  //  * edit default text
  //  */
  // myCallBackDefaultText = (datafromChild: {
  // 	/**
  // 	 * new police
  // 	 */
  // 	police: string,
  // 	/**
  // 	 * new size
  // 	 */
  // 	size: string,
  // 	/**
  // 	 * new style (italic, bold, ...)
  // 	 */
  // 	style: string,
  // }) => {
  // 	this.props.onOptionsChange({
  // 		...this.props.options,
  // 		police: datafromChild.police,
  // 		size: datafromChild.size,
  // 		style: datafromChild.style,
  // 	});
  // }

  /// Adrien
  // onInfoChanged = ({ target }: any) => {
  // 	this.props.onOptionsChange({ ...this.props.options, info: target.value });
  // }

  onRefreshChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, refresh: target.value });
  };

  onTimeZoneChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, timezone: target.value });
  };

  onPanelChanged = ({ target }: any, index: any) => {
    this.props.onOptionsChange({ ...this.props.options, Id: target.value });
  };

  onToggleDashboardData = (isOpen: boolean): void => {
    this.setState({
      collapseDashboardData: isOpen,
    });
  };

  onToggleTimeSelector = (isOpen: boolean): void => {
    this.setState({
      collapseTimeSelector: isOpen,
    });
  };

  onTogglePanelData = (isOpen: boolean): void => {
    this.setState({
      collapsePanelData: isOpen,
    });
  };

  onTogglePrincipalTargets = (isOpen: boolean): void => {
    this.setState({
      collapsePrincipalTarget: isOpen,
    });
  };

  /**
   * switch tab
   * @param {number} id id to to new tab
   */
  private goToTab = (id: number) => {
    const oldValue: boolean[] = this.state.tabsVariable.slice();
    const size: number = oldValue.length;
    for (let i = 0; i < size; i++) {
      oldValue[i] = i === id ? true : false;
    }
    this.setState({
      tabsVariable: oldValue,
    });
  };

  /**
   * swtith tab Coordinate space
   */
  private goToTabCoordinateSpace = (id: number) => {
    const oldValue: boolean[] = this.state.tabsCoordinateSpace.slice();
    const size: number = oldValue.length;
    for (let i = 0; i < size; i++) {
      oldValue[i] = i === id ? true : false;
    }
    this.setState({
      tabsCoordinateSpace: oldValue,
    });
  };

  componentDidMount = async () => {
    await Promise.resolve('Success').then(() => {
      this.props.onOptionsChange({
        ...this.props.options,
        displayButton: true,
      });
    });
  };

  componentWillUnmount = async () => {
    await Promise.resolve('Success').then(() => {
      this.props.onOptionsChange({
        ...this.props.options,
        displayButton: false,
      });
    });
  };

  /**
   * HTML code
   */
  render() {
    const l10n = require('Localization/en.json');

    return (
      <div className="divSimpleEditor">
        <TabsBar className="page-header tabs" hideBorder={false}>
          <Tab key="tabDisplay" label={l10n.simpleEditor.display} active={this.state.tabsVariable[0]} onChangeTab={() => this.goToTab(0)} />
          <Tab
            key="tabSpaceInitialVisualisation"
            label={l10n.simpleEditor.spaceInitialVisualisation}
            active={this.state.tabsVariable[1]}
            onChangeTab={() => this.goToTab(1)}
          />
          <Tab
            key="tabCoordinateSpace"
            label={l10n.simpleEditor.CoordinateSpace}
            active={this.state.tabsVariable[2]}
            onChangeTab={() => this.goToTab(2)}
          />
          {/* <Tab key='tabMetricsSettings'
						label={l10n.simpleEditor.metricsSettings}
						active={this.state.tabsVariable[3]}
						onChangeTab={() => this.goToTab(3)}
					/> */}
          <Tab key="tabImportInput" label="Import Files" active={this.state.tabsVariable[4]} onChangeTab={() => this.goToTab(4)} />
        </TabsBar>
        <TabContent>
          {this.state.tabsVariable[0] && <Display options={this.props.options} onOptionsChange={this.props.onOptionsChange} data={this.props.data} />}
          {this.state.tabsVariable[1] && (
            <CoordinateSpaceInitialClass options={this.props.options} onOptionsChange={this.props.onOptionsChange} data={this.props.data} />
          )}
          {this.state.tabsVariable[2] && (
            <div>
              <TabsBar className="page-header tabs" hideBorder={false}>
                <Tab
                  key="tabDisplayManageCoordinateSpace"
                  label="Region"
                  active={this.state.tabsCoordinateSpace[0]}
                  onChangeTab={() => this.goToTabCoordinateSpace(0)}
                />
                <Tab
                  key="tabDisplayPoint"
                  label="Point"
                  active={this.state.tabsCoordinateSpace[1]}
                  onChangeTab={() => this.goToTabCoordinateSpace(1)}
                />
                {/* <Tab key='tabDisplayLink'
									label='Link'
									active={this.state.tabsCoordinateSpace[2]}
									onChangeTab={() => this.goToTabCoordinateSpace(2)}
								/> */}
                <Tab
                  key="tabDisplayOrientedLink"
                  label="OrientedLink"
                  active={this.state.tabsCoordinateSpace[3]}
                  onChangeTab={() => this.goToTabCoordinateSpace(3)}
                />
              </TabsBar>
              <TabContent>
                {this.state.tabsCoordinateSpace[0] && (
                  <ManageCoordinateSpace
                    options={this.props.options}
                    onOptionsChange={this.props.onOptionsChange}
                    data={this.props.data}
                    isRegion={true}
                    isPoint={false}
                    isLink={false}
                  />
                )}
                {this.state.tabsCoordinateSpace[1] && (
                  <ManageCoordinateSpace
                    options={this.props.options}
                    onOptionsChange={this.props.onOptionsChange}
                    data={this.props.data}
                    isRegion={false}
                    isPoint={true}
                    isLink={false}
                  />
                )}
                {this.state.tabsCoordinateSpace[3] && (
                  <ManageCoordinateSpace
                    options={this.props.options}
                    onOptionsChange={this.props.onOptionsChange}
                    data={this.props.data}
                    isRegion={false}
                    isPoint={false}
                    isLink={true}
                  />
                )}
              </TabContent>
            </div>
          )}
          {/*
						this.state.tabsVariable[3] &&

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
					} */}
          {this.state.tabsVariable[4] && (
            <div>
              <ImportInput options={this.props.options} onOptionsChange={this.props.onOptionsChange} data={this.props.data} />
            </div>
          )}
        </TabContent>
      </div>
    );
  }
}
