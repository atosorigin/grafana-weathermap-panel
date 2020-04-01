import React from 'react';
import { SimpleOptions } from 'types';

import { Collapse } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';

// import { RegionClass } from 'Models/RegionClass';
import { TextObject } from 'Models/TextObjectClass';

import LinkURLClassPrincipale from './parametrageMetriquePrincipale';
import TextObjects from './textObjects';
import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';

interface Props extends PanelEditorProps<SimpleOptions> {
  /** id coordinate */
  coordinateSpace: CoordinateSpaceClass;
  /** call function to save data in parent */
  callBackToParent: (followLink?: string, hoveringTooltipLink?: string, hoveringTooltipText?: string, textObj?: TextObject, id?: number) => void;
  /**
   *
   */
  id?: number;
}

interface State {
  /** open or close collapse main metric */
  collapseLink: boolean;
  /** open or close text object */
  collapseTextObject: boolean;
}

/**
 * class ParametresGeneriques
 */
class ParametresGeneriques extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      collapseLink: false,
      collapseTextObject: false,
    };
  }

  /** switch value collapseLink when click collapse */
  onToggleLinkCollapse = (isOpen: boolean) => {
    this.setState({
      collapseLink: isOpen,
    });
  };

  /** switch value collapseTextObject when click collapse */
  onToggleTextObject = (isOpen: boolean) => {
    this.setState({
      collapseTextObject: isOpen,
    });
  };

  /** close collapse when coordinateSpace object change */
  componentDidUpdate = (prevProps: Props) => {
    if (prevProps.coordinateSpace !== this.props.coordinateSpace) {
      this.setState({
        collapseLink: false,
        collapseTextObject: false,
      });
    }
  };

  /** HTML */
  render() {
    // const l10n = require('Localization/en.json');

    return (
      <div>
        <Collapse isOpen={this.state.collapseLink} label="Manage link" onToggle={this.onToggleLinkCollapse}>
          <div>
            <LinkURLClassPrincipale coordinateSpace={this.props.coordinateSpace} callBackToParent={this.props.callBackToParent} id={this.props.id} />
          </div>
        </Collapse>

        <Collapse isOpen={this.state.collapseTextObject} label="Text object" onToggle={this.onToggleTextObject}>
          <div>
            <TextObjects coordinateSpace={this.props.coordinateSpace} callBackToParent={this.props.callBackToParent} id={this.props.id} />
          </div>
        </Collapse>
      </div>
    );
  }
}
export default ParametresGeneriques;
