import React from 'react';

import { Tab, TabsBar, TabContent } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';

import { SimpleOptions } from 'types';

import EditCoordinateSpace from './editCoordinateSpace';
import EditPoint from './point/editPoint';
import AddCoordinate from './addCoordinate';

interface Props extends PanelEditorProps<SimpleOptions> {
  isRegion: boolean;
}

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

  private contentTabEdit = (): JSX.Element => {
    let result: JSX.Element = <div></div>;
    if (this.props.isRegion) {
      result = (
        <div>
          <EditCoordinateSpace onOptionsChange={this.props.onOptionsChange} options={this.props.options} data={this.props.data} />
        </div>
      );
    } else {
      result = (
        <div>
          <EditPoint onOptionsChange={this.props.onOptionsChange} options={this.props.options} data={this.props.data} />
        </div>
      );
    }
    return result;
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
            <AddCoordinate
              onOptionsChange={this.props.onOptionsChange}
              options={this.props.options}
              data={this.props.data}
              returnEditMode={this.returnEditMode}
              isRegion={this.props.isRegion}
            />
          )}
          {this.state.tabsVariable[1] && this.contentTabEdit()}
        </TabContent>
        {/* <Button onClick={() => console.log(this.props.data.series)}>List all metrics</Button> */}
      </div>
    );
  }
}
export default ManageCoordinateSpace;
