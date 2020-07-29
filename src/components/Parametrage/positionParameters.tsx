import React from 'react';
import { PanelEditorProps, SelectableValue } from '@grafana/data';
import { SimpleOptions } from 'types';
import { FormField, Collapse, Select, FormLabel, Button } from '@grafana/ui';
import { PositionParameterClass } from 'Models/PositionParameterClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import { PointClass } from 'Models/PointClass';
import { RegionClass } from 'Models/RegionClass';

interface Props extends PanelEditorProps<SimpleOptions> {
  callBackToParentZIndex: (zIndex: number, id: number) => void;
  isPoint: boolean;
  isLink: boolean;
  isRegion: boolean;
  id: number;
}

interface State {
  /** get text object */
  collapsepositionParameter: boolean;
  collapseLabel: boolean;
  collapseTooltip: boolean;
  collapseLayerLevel: boolean;
  orientedLinkComparedToDowngrade: any;
  orientedLinkComparedToUpgrade: any;
}

/**
 * def
 */
class PositionParameter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      collapsepositionParameter: false,
      collapseLabel: false,
      collapseTooltip: false,
      collapseLayerLevel: false,
      orientedLinkComparedToDowngrade: {},
      orientedLinkComparedToUpgrade: {},
    };
  }

  private savePositionParameter = (newPositionParameter: PositionParameterClass) => {
    const idCurrentCoordinateSpace: number = this.props.id || 0;
    if (this.props.isPoint) {
      const newArrayPoints: PointClass[] = this.props.options.arrayPoints;
      for (const point of newArrayPoints) {
        if (point.id === idCurrentCoordinateSpace) {
          point.positionParameter = newPositionParameter;
        }
      }
      this.props.onOptionsChange({
        ...this.props.options,
        arrayPoints: newArrayPoints,
      });
    } else if (this.props.isLink) {
      const newArrayOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
      for (const orientedLink of newArrayOrientedLink) {
        if (orientedLink.id === idCurrentCoordinateSpace) {
          orientedLink.positionParameter = newPositionParameter;
        }
      }
      this.props.onOptionsChange({
        ...this.props.options,
        arrayOrientedLinks: newArrayOrientedLink,
      });
    } else if (this.props.isRegion) {
      const newArrayRegion: RegionClass[] = this.props.options.regionCoordinateSpace;
      for (const region of newArrayRegion) {
        if (region.id === idCurrentCoordinateSpace) {
          region.positionParameter = newPositionParameter;
        }
      }
      this.props.onOptionsChange({
        ...this.props.options,
        regionCoordinateSpace: newArrayRegion,
      });
    }
  };

  private getPositionParameter = (): PositionParameterClass => {
    let positionParameter: PositionParameterClass = {
      labelAPositionX: '0',
      labelAPositionY: '0',
      labelBPositionX: '0',
      labelBPositionY: '0',
      tooltipPositionA: {},
      tooltipPositionB: {},
    };
    const idCurrentCoordinateSpace: number = this.props.id || 0;
    if (this.props.isLink) {
      const newArrayOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
      for (const orientedLink of newArrayOrientedLink) {
        if (orientedLink.id === idCurrentCoordinateSpace) {
          positionParameter = orientedLink.positionParameter;
        }
      }
    } else if (this.props.isPoint) {
      const arrayPoints: PointClass[] = this.props.options.arrayPoints;
      for (const point of arrayPoints) {
        if (point.id === idCurrentCoordinateSpace) {
          positionParameter = point.positionParameter;
        }
      }
    } else if (this.props.isRegion) {
      const arrayRegions: RegionClass[] = this.props.options.regionCoordinateSpace;
      for (const region of arrayRegions) {
        if (region.id === idCurrentCoordinateSpace) {
          positionParameter = region.positionParameter;
        }
      }
    }
    return positionParameter;
  };

  // private callBack() {
  //   this.props.callBackToParent(this.state.positionParameter, this.props.id || 0);
  // }

  private callBackZIndex(zIndex: number, id: number) {
    this.props.callBackToParentZIndex(zIndex, id);
  }

  private handleChangeLabelAPositionX = (event: any) => {
    const newPositionParameter = this.getPositionParameter();
    newPositionParameter.labelAPositionX = event.currentTarget.value;
    this.savePositionParameter(newPositionParameter);
    // this.setState({
    //   positionParameter: newPositionParameter,
    // });
    // this.callBack();
  };

  private handleChangeLabelAPositionY = (event: any) => {
    const newPositionParameter = this.getPositionParameter();
    newPositionParameter.labelAPositionY = event.currentTarget.value;
    this.savePositionParameter(newPositionParameter);
    // this.setState({
    //   positionParameter: newPositionParameter,
    // });
    // this.callBack();
  };

  private handleChangeLabelBPositionX = (event: any) => {
    const newPositionParameter = this.getPositionParameter();
    newPositionParameter.labelBPositionX = event.currentTarget.value;
    this.savePositionParameter(newPositionParameter);
    // this.setState({
    //   positionParameter: newPositionParameter,
    // });
    // this.callBack();
  };

  private handleChangeLabelBPositionY = (event: any) => {
    const newPositionParameter = this.getPositionParameter();
    newPositionParameter.labelBPositionY = event.currentTarget.value;
    this.savePositionParameter(newPositionParameter);
    // this.setState({
    //   positionParameter: newPositionParameter,
    // });
    // this.callBack();
  };

  private handleChangeTooltipPositionA = (event: any) => {
    const newPositionParameter = this.getPositionParameter();
    newPositionParameter.tooltipPositionA = { label: event.value, value: event.value };
    this.savePositionParameter(newPositionParameter);
    // this.setState({
    //   positionParameter: newPositionParameter,
    // });
    // this.callBack();
  };

  private handleChangeTooltipPositionB = (event: any) => {
    const newPositionParameter = this.getPositionParameter();
    newPositionParameter.tooltipPositionB = { label: event.value, value: event.value };
    this.savePositionParameter(newPositionParameter);
    // this.setState({
    //   positionParameter: newPositionParameter,
    // });
    // this.callBack();
  };

  private handleChangeSelectOrientedLinkToUpgrade = (event: any) => {
    const newOrientedLinkComparedToToUpgrade: SelectableValue<OrientedLinkClass> = {
      label: event.label,
      value: event.value,
    };
    this.setState({
      orientedLinkComparedToUpgrade: newOrientedLinkComparedToToUpgrade,
    });
  };

  private handleChangeSelectOrientedLinkToDowngrade = (event: any) => {
    const newOrientedLinkComaparedToDowngrade: SelectableValue<OrientedLinkClass> = {
      label: event.label,
      value: event.value,
    };
    this.setState({
      orientedLinkComparedToDowngrade: newOrientedLinkComaparedToDowngrade,
    });
  };

  private downgradeLayerLevel = () => {
    const orientedLinkComparedTo: OrientedLinkClass = this.state.orientedLinkComparedToDowngrade.value;
    const zIndex: number = orientedLinkComparedTo.zIndex - 1;
    this.callBackZIndex(zIndex, this.props.id || 0);
  };

  private upgradeLayerLevel = () => {
    const orientedLinkComparedTo: OrientedLinkClass = this.state.orientedLinkComparedToUpgrade.value;
    const zIndex: number = orientedLinkComparedTo.zIndex + 1;
    this.callBackZIndex(zIndex, this.props.id || 0);
  };

  private defineListOrientedLink = (): Array<SelectableValue<OrientedLinkClass>> => {
    let listOptions: Array<SelectableValue<OrientedLinkClass>> = [];
    const arrayOrientedLinks: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;

    arrayOrientedLinks.forEach((orientedLink) => {
      let selectableValue = {
        label: orientedLink.label || orientedLink.name,
        value: orientedLink,
      };
      listOptions.push(selectableValue);
    });
    return listOptions;
  };

  private defineLabelPositionInputs = (): JSX.Element => {
    let item: JSX.Element;
    const positionParameter: PositionParameterClass = this.getPositionParameter();
    let currentOrientedLink: any;
    const arrayOrientedLinks: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
    for (const orientedLink of arrayOrientedLinks) {
      if (orientedLink.id === this.props.id) {
        currentOrientedLink = orientedLink;
      }
    }

    if (this.props.isLink && currentOrientedLink && currentOrientedLink.orientationLink.value === 'double') {
      item = (
        <div>
          <div>
            <div>
              <FormField
                label="Label A Position X"
                labelWidth={10}
                inputWidth={20}
                type="text"
                value={positionParameter.labelAPositionX}
                onChange={this.handleChangeLabelAPositionX}
                placeholder={'Label A Position X'}
              />
              <FormField
                label="Label A Position Y"
                labelWidth={10}
                inputWidth={20}
                type="text"
                value={positionParameter.labelAPositionY}
                onChange={this.handleChangeLabelAPositionY}
                placeholder={'Label A Position Y'}
              />
            </div>
          </div>
          <div>
            <div>
              <FormField
                label="Label B Position X"
                labelWidth={10}
                inputWidth={20}
                type="text"
                value={positionParameter.labelBPositionX}
                onChange={this.handleChangeLabelBPositionX}
                placeholder={'Label B Position X'}
              />
              <FormField
                label="Label B Position Y"
                labelWidth={10}
                inputWidth={20}
                type="text"
                value={positionParameter.labelBPositionY}
                onChange={this.handleChangeLabelBPositionY}
                placeholder={'Label B Position Y'}
              />
            </div>
          </div>
        </div>
      );
    } else {
      item = (
        <div>
          <FormField
            label="Position X"
            labelWidth={10}
            inputWidth={20}
            type="text"
            value={positionParameter.labelAPositionX}
            onChange={this.handleChangeLabelAPositionX}
            placeholder={'Position X'}
          />
          <FormField
            label="Position Y"
            labelWidth={10}
            inputWidth={20}
            type="text"
            value={positionParameter.labelAPositionY}
            onChange={this.handleChangeLabelAPositionY}
            placeholder={'Position Y'}
          />
        </div>
      );
    }

    return item;
  };

  private defineTooltipPositionInputs = (): JSX.Element => {
    let item: JSX.Element;
    const optionsSelectTooltipPosition: Array<SelectableValue<string>> = [
      { label: 'Top', value: 'Top' },
      { label: 'Bottom', value: 'Bottom' },
      { label: 'Left', value: 'Left' },
      { label: 'Right', value: 'Right' },
    ];
    const positionParameter: PositionParameterClass = this.getPositionParameter();
    let currentOrientedLink: any;
    const arrayOrientedLinks: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
    for (const orientedLink of arrayOrientedLinks) {
      if (orientedLink.id === this.props.id) {
        currentOrientedLink = orientedLink;
      }
    }

    if (this.props.isLink && currentOrientedLink && currentOrientedLink.orientationLink.value === 'double') {
      item = (
        <div>
          <div style={{ display: 'flex' }}>
            <FormLabel width={10}>Tooltip A Position</FormLabel>
            <Select
              onChange={this.handleChangeTooltipPositionA}
              allowCustomValue={false}
              options={optionsSelectTooltipPosition}
              value={positionParameter.tooltipPositionA}
              width={20}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <FormLabel width={10}>Tooltip B Position</FormLabel>
            <Select
              onChange={this.handleChangeTooltipPositionB}
              allowCustomValue={false}
              options={optionsSelectTooltipPosition}
              value={positionParameter.tooltipPositionB}
              width={20}
            />
          </div>
        </div>
      );
    } else {
      item = (
        <div style={{ display: 'flex' }}>
          <FormLabel width={10}>Tooltip position</FormLabel>
          <Select
            onChange={this.handleChangeTooltipPositionA}
            allowCustomValue={false}
            options={optionsSelectTooltipPosition}
            value={positionParameter.tooltipPositionA}
            width={20}
          />
        </div>
      );
    }
    return item;
  };

  defineLayerLevel = (): JSX.Element => {
    let item: JSX.Element;
    const options: Array<SelectableValue<OrientedLinkClass>> = this.defineListOrientedLink();

    if (this.props.isLink) {
      item = (
        <Collapse
          isOpen={this.state.collapseLayerLevel}
          label={'LayerLevel'}
          onToggle={(isOpen) => {
            this.setState({
              collapseLayerLevel: isOpen,
            });
          }}
        >
          <div style={{ display: 'flex' }}>
            <FormLabel width={15}>Upgrade on </FormLabel>
            <Select
              onChange={this.handleChangeSelectOrientedLinkToUpgrade}
              allowCustomValue={false}
              options={options}
              value={this.state.orientedLinkComparedToUpgrade}
              width={15}
            />
            <Button onClick={this.upgradeLayerLevel}>Submit</Button>
          </div>
          <div style={{ display: 'flex' }}>
            <FormLabel width={15}>Downgrade on</FormLabel>
            <Select
              onChange={this.handleChangeSelectOrientedLinkToDowngrade}
              allowCustomValue={false}
              options={options}
              value={this.state.orientedLinkComparedToDowngrade}
              width={15}
            />
            <Button onClick={this.downgradeLayerLevel}>Submit</Button>
          </div>
        </Collapse>
      );
    } else {
      item = <div></div>;
    }

    return item;
  };

  render() {
    return (
      <Collapse
        isOpen={this.state.collapsepositionParameter}
        label={'Position Parameter'}
        onToggle={(isOpen) => {
          this.setState({
            collapsepositionParameter: isOpen,
          });
        }}
      >
        <Collapse
          isOpen={this.state.collapseLabel}
          label={'Label'}
          onToggle={(isOpen) => {
            this.setState({
              collapseLabel: isOpen,
            });
          }}
        >
          <div>{this.defineLabelPositionInputs()}</div>
        </Collapse>
        <Collapse
          isOpen={this.state.collapseTooltip}
          label={'Tooltip'}
          onToggle={(isOpen) => {
            this.setState({
              collapseTooltip: isOpen,
            });
          }}
        >
          <div>{this.defineTooltipPositionInputs()}</div>
        </Collapse>
        <div>{this.defineLayerLevel()}</div>
      </Collapse>
    );
  }
}

export default PositionParameter;
