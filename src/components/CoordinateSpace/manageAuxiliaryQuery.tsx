import React from 'react';
import { SimpleOptions, TManageValue, Metric } from '../../types';

import { PanelEditorProps, SelectableValue } from '@grafana/data';
import { Select, FormField, Collapse, FormLabel, Button } from '@grafana/ui';
import { PointClass } from 'Models/PointClass';
import { RegionClass } from 'Models/RegionClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';

interface Props extends PanelEditorProps<SimpleOptions> {
  /** id coordinate. Use to check if componentDidUpdate launch update */
  idCoordinate: number;
  /** parent data */
  metrics: Metric[];
  /** check if coordinateSpace is OrientedLink */
  isLink?: boolean;
  /** check if coordinateSpace is Point */
  isPoint?: boolean;
  /** check if coordinateSpace is Region */
  isRegion?: boolean;
}

interface State {
  /** collapse AuxMetric open or close */
  collapse: boolean;
  /** collapse linkA if orientedLink is bidirectionnal open or close */
  collapseLinkA: boolean;
  /** collapse linkB if orientedLink is bidirectionnal open or close */
  collapseLinkB: boolean;
}

/**
 * def
 */
class ManageAuxiliaryQuery extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      collapse: false,
      collapseLinkA: false,
      collapseLinkB: false,
    };
  }

  private saveAuxMetrics = (newAuxMetrics: Metric[], isLinkB: boolean) => {
    const idCurrentCoordinateSpace: number = this.props.idCoordinate;
    if (this.props.isPoint) {
      const newArrayPoints: PointClass[] = this.props.options.arrayPoints;
      for (const point of newArrayPoints) {
        if (point.id === idCurrentCoordinateSpace) {
          point.metrics = newAuxMetrics;
        }
      }
      this.props.onOptionsChange({
        ...this.props.options,
        arrayPoints: newArrayPoints,
      });
    } else if (this.props.isLink) {
      const newArrayLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
      for (const orientedLink of newArrayLink) {
        if (orientedLink.id === idCurrentCoordinateSpace) {
          if (isLinkB) {
            orientedLink.metricsB = newAuxMetrics;
          } else {
            orientedLink.metrics = newAuxMetrics;
          }
        }
      }
      this.props.onOptionsChange({
        ...this.props.options,
        arrayOrientedLinks: newArrayLink,
      });
    } else if (this.props.isRegion) {
      const newArrayRegion: RegionClass[] = this.props.options.regionCoordinateSpace;
      for (const region of newArrayRegion) {
        if (region.id === idCurrentCoordinateSpace) {
          region.metrics = newAuxMetrics;
        }
      }
      this.props.onOptionsChange({
        ...this.props.options,
        regionCoordinateSpace: newArrayRegion,
      });
    }
  };

  private getAuxiliaryMetrics = (isLinkB: boolean): Metric[] => {
    let auxiliaryMetrics: Metric[] = [];
    const idCurrentCoordinateSpace: number = this.props.idCoordinate;
    if (this.props.isLink) {
      const arrayOrientedLinks: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
      for (const orientedLink of arrayOrientedLinks) {
        if (orientedLink.id === idCurrentCoordinateSpace) {
          if (isLinkB) {
            auxiliaryMetrics = orientedLink.metricsB;
          } else {
            auxiliaryMetrics = orientedLink.metrics;
          }
        }
      }
    } else if (this.props.isPoint) {
      const arrayPoints: PointClass[] = this.props.options.arrayPoints;
      for (const point of arrayPoints) {
        if (point.id === idCurrentCoordinateSpace) {
          auxiliaryMetrics = point.metrics;
        }
      }
    } else if (this.props.isRegion) {
      const arrayRegions: RegionClass[] = this.props.options.regionCoordinateSpace;
      for (const region of arrayRegions) {
        if (region.id === idCurrentCoordinateSpace) {
          auxiliaryMetrics = region.metrics;
        }
      }
    }
    return auxiliaryMetrics;
  };

  private getReferenceMainMetric = (isLinkB: boolean): string => {
    let newRefId = '';
    const idCurrentCoordinateSpace: number = this.props.idCoordinate;
    if (this.props.isLink) {
      const arrayOrientedLinks: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
      for (const orientedLink of arrayOrientedLinks) {
        if (orientedLink.id === idCurrentCoordinateSpace) {
          if (isLinkB) {
            newRefId = orientedLink.mainMetricB.refId || '';
          } else {
            newRefId = orientedLink.mainMetric.refId || '';
          }
        }
      }
    } else if (this.props.isPoint) {
      const newArrayPoints: PointClass[] = this.props.options.arrayPoints;
      for (const point of newArrayPoints) {
        if (point.id === idCurrentCoordinateSpace) {
          newRefId = point.mainMetric.refId || '';
        }
      }
    } else if (this.props.isRegion) {
      const arrayRegions: RegionClass[] = this.props.options.regionCoordinateSpace;
      for (const region of arrayRegions) {
        if (region.id === idCurrentCoordinateSpace) {
          newRefId = region.mainMetric.refId || '';
        }
      }
    }
    const newAuxiliaryMetrics: Metric[] = this.getAuxiliaryMetrics(isLinkB);
    for (const metric of newAuxiliaryMetrics) {
      if (metric.refId !== newRefId) {
        metric.refId = newRefId;
        this.saveAuxMetrics(newAuxiliaryMetrics, isLinkB);
      }
    }
    return newRefId;
  };

  /** switch value collapse when click collapse */
  private onToggleCollapse = (isOpen: boolean) => {
    this.setState({
      collapse: isOpen,
    });
  };

  /** switch value collapseLinkA when click collapse */
  private onToggleCollapseLinkA = (isOpen: boolean) => {
    this.setState({
      collapseLinkA: isOpen,
    });
  };

  /** switch value collapseLinkB when click collapse */
  private onToggleCollapseLinkB = (isOpen: boolean) => {
    this.setState({
      collapseLinkB: isOpen,
    });
  };

  private onChangeKey = (event: any) => {
    const newAuxiliaryMetrics: Metric[] = this.getAuxiliaryMetrics(false);
    const idCurrentAuxMetrics: number = event.currentTarget.id;
    const value: string = event.currentTarget.value;
    newAuxiliaryMetrics[idCurrentAuxMetrics].key = value;
    this.saveAuxMetrics(newAuxiliaryMetrics, false);
  };

  private onChangeKeyB = (event: any) => {
    const newAuxiliaryMetrics: Metric[] = this.getAuxiliaryMetrics(true);
    const idCurrentAuxMetrics: number = event.currentTarget.id;
    const value: string = event.currentTarget.value;
    newAuxiliaryMetrics[idCurrentAuxMetrics].key = value;
    this.saveAuxMetrics(newAuxiliaryMetrics, true);
  };

  private onChangeValueKey = (event: any) => {
    const newAuxiliaryMetrics: Metric[] = this.getAuxiliaryMetrics(false);
    const id: number = event.currentTarget.id;
    const value: string = event.currentTarget.value;
    newAuxiliaryMetrics[id].keyValue = value;
    this.saveAuxMetrics(newAuxiliaryMetrics, false);
  };

  private onChangeValueKeyB = (event: any) => {
    const newAuxiliaryMetrics: Metric[] = this.getAuxiliaryMetrics(true);
    const id: number = event.currentTarget.id;
    const value: string = event.currentTarget.value;
    newAuxiliaryMetrics[id].keyValue = value;
    this.saveAuxMetrics(newAuxiliaryMetrics, true);
  };

  private onChangeManageValue = (event: any) => {
    const newAuxiliaryMetrics: Metric[] = this.getAuxiliaryMetrics(false);
    const id: number = event.id;
    newAuxiliaryMetrics[id].manageValue = event.value;
    this.saveAuxMetrics(newAuxiliaryMetrics, false);
  };

  private onChangeManageValueB = (event: any) => {
    const newAuxiliaryMetrics: Metric[] = this.getAuxiliaryMetrics(true);
    const id: number = event.id;
    newAuxiliaryMetrics[id].manageValue = event.value;
    this.saveAuxMetrics(newAuxiliaryMetrics, true);
  };

  private addAuxiliaryMetric = () => {
    const refIdMetric: string = this.getReferenceMainMetric(false);
    let newAuxiliaryMetrics: Metric[] = this.getAuxiliaryMetrics(false);
    newAuxiliaryMetrics.push({
      key: '',
      unit: '',
      format: '',
      keyValue: '',
      refId: refIdMetric,
      manageValue: 'avg',
    });
    this.saveAuxMetrics(newAuxiliaryMetrics, false);
    this.displayInputs(false);
  };

  private addAuxiliaryMetricB = () => {
    const refIdMetric: string = this.getReferenceMainMetric(true);
    let newAuxiliaryMetrics: Metric[] = this.getAuxiliaryMetrics(true);
    newAuxiliaryMetrics.push({
      key: '',
      unit: '',
      format: '',
      keyValue: '',
      refId: refIdMetric,
      manageValue: 'avg',
    });
    this.saveAuxMetrics(newAuxiliaryMetrics, true);
    this.displayInputs(true);
  };

  private deleteAuxiliaryMetric = (event: any) => {
    const id: number = event.currentTarget.id;
    const newAuxiliaryMetrics: Metric[] = this.getAuxiliaryMetrics(false);
    newAuxiliaryMetrics.splice(id, 1);
    this.saveAuxMetrics(newAuxiliaryMetrics, false);
    this.displayInputs(false);
  };

  private deleteAuxiliaryMetricB = (event: any) => {
    const id: number = event.currentTarget.id;
    const newAuxiliaryMetrics: Metric[] = this.getAuxiliaryMetrics(true);
    newAuxiliaryMetrics.splice(id, 1);
    this.saveAuxMetrics(newAuxiliaryMetrics, true);
    this.displayInputs(true);
  };

  private getAllManageValue = (id: string): Array<SelectableValue<TManageValue>> => {
    const selectManageValue: Array<SelectableValue<TManageValue>> = [
      { id: id, value: 'avg', label: 'average' },
      { id: id, value: 'sum', label: 'total' },
      { id: id, value: 'err', label: 'error' },
    ];
    return selectManageValue;
  };

  private getCurrentManageValue = (id: number, isLinkB: boolean): SelectableValue<TManageValue> => {
    let label = '';
    const auxMetrics: Metric[] = this.getAuxiliaryMetrics(isLinkB);
    if (auxMetrics[id].manageValue === 'avg') {
      label = 'average';
    } else if (auxMetrics[id].manageValue === 'sum') {
      label = 'total';
    } else if (auxMetrics[id].manageValue === 'err') {
      label = 'error';
    }
    const value: SelectableValue<TManageValue> = {
      id: id,
      value: auxMetrics[id].manageValue,
      label: label,
    };
    return value;
  };

  private generateInputs = (index: number, isLinkB: boolean): JSX.Element => {
    const id: number = index;
    const refIdMetric: string = this.getReferenceMainMetric(isLinkB);
    const auxMetrics: Metric[] = this.getAuxiliaryMetrics(isLinkB);
    const idCoordinateSpace: string = this.props.idCoordinate?.toString() || '';

    const styleTitle = {
      marginTop: '10px',
      textAlign: 'center',
    } as React.CSSProperties;

    const styleMainDiv = {
      marginTop: '5px',
      border: '1px solid rgb(23, 23, 24)',
    } as React.CSSProperties;

    const styleContent = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: '5px',
    } as React.CSSProperties;

    const styleSelect = {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '2px',
    } as React.CSSProperties;

    const styleReferenceMetric = {
      width: '416px',
      height: '35px',
      border: '1px solid #262628',
      borderRadius: '0 3px 3px 0',
      backgroundColor: '#09090b',
      padding: '8px',
      fontSize: '14px',
      lineHeight: '18px',
      color: '#d8d9da',
      marginBottom: '0px',
    } as React.CSSProperties;

    let item: JSX.Element;

    if (isLinkB) {
      item = (
        <div key={idCoordinateSpace + 'mainDiv' + id.toString()} style={styleMainDiv}>
          <p key={idCoordinateSpace + 'title' + id.toString()} style={styleTitle}>
            {'Metric ' + (id + 1).toString()}
          </p>
          <div key={idCoordinateSpace + 'content' + id.toString()} style={styleContent}>
            <div key={idCoordinateSpace + 'inputs' + id.toString()}>
              <div key={idCoordinateSpace + 'refBloc' + id.toString()} style={styleSelect}>
                <FormLabel key={idCoordinateSpace + 'labelref' + id.toString()} width={10}>
                  Query
                </FormLabel>
                <p key={this.props.idCoordinate?.toString() || '' + 'refValue' + id.toString()} style={styleReferenceMetric}>
                  {refIdMetric}
                </p>
              </div>
              <FormField
                key={idCoordinateSpace + 'inputKey' + id.toString()}
                id={id.toString()}
                label="Key"
                labelWidth={10}
                inputWidth={20}
                type="text"
                value={auxMetrics[id].key}
                name="key"
                onChange={this.onChangeKeyB}
              />
              <FormField
                key={idCoordinateSpace + 'valueKey' + id.toString()}
                id={id.toString()}
                label="Value key"
                labelWidth={10}
                inputWidth={20}
                type="text"
                value={auxMetrics[id].keyValue}
                name="valueKey"
                onChange={this.onChangeValueKeyB}
              />
              <div key={idCoordinateSpace + 'divTypeOfValue' + id.toString()} id={id.toString()} style={styleSelect}>
                <FormLabel key={idCoordinateSpace + 'labelTypeOfValue' + id.toString()} width={10}>
                  Value
                </FormLabel>
                <Select
                  key={idCoordinateSpace + 'selectTypeOfValue' + id.toString()}
                  onChange={this.onChangeManageValueB}
                  allowCustomValue={false}
                  options={this.getAllManageValue(id.toString())}
                  width={20}
                  value={this.getCurrentManageValue(id, isLinkB)}
                />
              </div>
            </div>
            <div key={idCoordinateSpace + 'buttonDelete' + id.toString()}>
              <Button id={id.toString()} onClick={this.deleteAuxiliaryMetricB} variant={'danger'}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      );
    } else {
      item = (
        <div key={idCoordinateSpace + 'mainDiv' + id.toString()} style={styleMainDiv}>
          <p key={idCoordinateSpace + 'title' + id.toString()} style={styleTitle}>
            {'Metric ' + (id + 1).toString()}
          </p>
          <div key={idCoordinateSpace + 'content' + id.toString()} style={styleContent}>
            <div key={idCoordinateSpace + 'inputs' + id.toString()}>
              <div key={idCoordinateSpace + 'refBloc' + id.toString()} style={styleSelect}>
                <FormLabel key={idCoordinateSpace + 'labelref' + id.toString()} width={15}>
                  Query
                </FormLabel>
                <p key={this.props.idCoordinate?.toString() || '' + 'refValue' + id.toString()} style={styleReferenceMetric}>
                  {refIdMetric}
                </p>
              </div>
              <FormField
                key={idCoordinateSpace + 'inputKey' + id.toString()}
                id={id.toString()}
                label="Key"
                labelWidth={15}
                inputWidth={30}
                type="text"
                value={auxMetrics[id].key}
                name="key"
                onChange={this.onChangeKey}
              />
              <FormField
                key={idCoordinateSpace + 'valueKey' + id.toString()}
                id={id.toString()}
                label="Value key"
                labelWidth={15}
                inputWidth={30}
                type="text"
                value={auxMetrics[id].keyValue}
                name="valueKey"
                onChange={this.onChangeValueKey}
              />
              <div key={idCoordinateSpace + 'divTypeOfValue' + id.toString()} id={id.toString()} style={styleSelect}>
                <FormLabel key={idCoordinateSpace + 'labelTypeOfValue' + id.toString()} width={15}>
                  Value
                </FormLabel>
                <Select
                  key={idCoordinateSpace + 'selectTypeOfValue' + id.toString()}
                  onChange={this.onChangeManageValue}
                  allowCustomValue={false}
                  options={this.getAllManageValue(id.toString())}
                  width={30}
                  value={this.getCurrentManageValue(id, isLinkB)}
                />
              </div>
            </div>
            <div key={idCoordinateSpace + 'buttonDelete' + id.toString()}>
              <Button id={id.toString()} onClick={this.deleteAuxiliaryMetric} variant={'danger'}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      );
    }
    return <div key={idCoordinateSpace + 'listInputOneMetric' + id.toString()}>{item}</div>;
  };

  private displayInputs = (isLinkB: boolean) => {
    const idCoordinateSpace: string = this.props.idCoordinate?.toString() || '';
    let auxiliaryMetrics: Metric[] = this.getAuxiliaryMetrics(isLinkB);

    const mapItems: JSX.Element[] = [];
    let index = 0;

    auxiliaryMetrics.forEach(() => {
      const item: JSX.Element = this.generateInputs(index, isLinkB);
      mapItems.push(item);
      index++;
    });

    return <div key={idCoordinateSpace + 'listInputAllMetrics'}>{mapItems}</div>;
  };

  /**
   * result
   */
  render() {
    const idCoordinateSpace: string = this.props.idCoordinate?.toString() || '';
    const styleButtonAdd = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: '10px',
    } as React.CSSProperties;

    let currentOrientedLink: any;
    const arrayOrientedLinks: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
    for (const orientedLink of arrayOrientedLinks) {
      if (orientedLink.id === this.props.idCoordinate) {
        currentOrientedLink = orientedLink;
      }
    }

    if (this.props.isLink && currentOrientedLink && currentOrientedLink.orientationLink.value === 'double') {
      return (
        <Collapse isOpen={this.state.collapse} label="Auxiliary metrics" onToggle={this.onToggleCollapse}>
          <Collapse isOpen={this.state.collapseLinkA} label="Link A" onToggle={this.onToggleCollapseLinkA}>
            {this.displayInputs(false)}
            <div key={idCoordinateSpace + 'buttonAdd'} style={styleButtonAdd}>
              <Button onClick={this.addAuxiliaryMetric}>Add Auxiliary Metric</Button>
            </div>
          </Collapse>
          <Collapse isOpen={this.state.collapseLinkB} label="Link B" onToggle={this.onToggleCollapseLinkB}>
            {this.displayInputs(true)}
            <div key={idCoordinateSpace + 'buttonAdd'} style={styleButtonAdd}>
              <Button onClick={this.addAuxiliaryMetricB}>Add Auxiliary Metric</Button>
            </div>
          </Collapse>
        </Collapse>
      );
    } else {
      return (
        <Collapse isOpen={this.state.collapse} label="Auxiliary metrics" onToggle={this.onToggleCollapse}>
          {this.displayInputs(false)}
          <div key={idCoordinateSpace + 'buttonAdd'} style={styleButtonAdd}>
            <Button onClick={this.addAuxiliaryMetric}>Add Auxiliary Metric</Button>
          </div>
        </Collapse>
      );
    }
  }
}
export default ManageAuxiliaryQuery;
