import React from 'react';

import { Tab, TabsBar, TabContent } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';

import { SimpleOptions } from 'types';

import EditCoordinateSpace from './editCoordinateSpace';
import AddCoordinate from './addCoordinate';

interface Props extends PanelEditorProps<SimpleOptions> {}

interface State {
  /** manage tabs focus */
  tabsVariable: boolean[];
}

/**
 * def class
 */
class ManageCoordinateSpace extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tabsVariable: [false, true],
    };
  }

  /** after save pass to edit mode */
  returnEditMode = () => {
    this.setState({
      tabsVariable: [false, true],
    });
  };

  /**
   * switch tab
   * @param {number} id id to to new tab
   */
  goToTab = (id: number): void => {
    const oldValue: boolean[] = this.state.tabsVariable.slice();
    const size: number = oldValue.length;
    for (let i = 0; i < size; i++) {
      oldValue[i] = i === id ? true : false;
    }
    this.setState({
      tabsVariable: oldValue,
    });
  };

  /** result */
  render() {
    return (
      <div>
        <TabsBar className="page-header tabs" hideBorder={false}>
          <Tab
            key="tabDisplayCoordinateSpaceAdd"
            label="Add coordinate space"
            active={this.state.tabsVariable[0]}
            onChangeTab={() => this.goToTab(0)}
          />
          <Tab
            key="tabDisplayCoordinateSpaceEdit"
            label="Edit coordinate space"
            active={this.state.tabsVariable[1]}
            onChangeTab={() => this.goToTab(1)}
          />
        </TabsBar>
        <TabContent>
          {this.state.tabsVariable[0] && (
            <div>
              <AddCoordinate
                onOptionsChange={this.props.onOptionsChange}
                options={this.props.options}
                data={this.props.data}
                returnEditMode={this.returnEditMode}
              />
            </div>
          )}
          {this.state.tabsVariable[1] && (
            <EditCoordinateSpace onOptionsChange={this.props.onOptionsChange} options={this.props.options} data={this.props.data} />
          )}
        </TabContent>
        {/* <Button onClick={() => console.log(this.props.data.series)}>List all metrics</Button> */}
      </div>
    );
  }
}
export default ManageCoordinateSpace;
