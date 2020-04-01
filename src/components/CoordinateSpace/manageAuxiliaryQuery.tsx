import React from 'react';
import { SimpleOptions, TManageValue, Metric } from '../../types';

import { PanelEditorProps, SelectableValue } from '@grafana/data';
import { Select, FormField, Collapse, FormLabel, Button } from '@grafana/ui';

interface Props extends PanelEditorProps<SimpleOptions> {
  /** id coordinate. Use to check if componentDidUpdate launch update */
  idCoordinate: number;
  /** parent data */
  metrics: Metric[];
  /** call function when save data */
  callBackToParent: (metrics: Metric[], id?: number) => void;
  /** id coordinateSpace for link and point*/
  id?: number;
  isPoint: boolean;
  isLink: boolean;
  isRegion: boolean;
}

interface State {
  /** data for manipulate mainMetric */
  metrics: Metric[];
  /** collapse main metric open or close */
  collapse: boolean;
  // /** value for manage value (for query => ) */
  // selectManageValue: Array<SelectableValue<TManageValue>>;
  /** default value for manage value */
  selectDefaultManageValue: SelectableValue<TManageValue>;
  /** list of auxiliaryMetric Inputs to display */
  mapItems: JSX.Element[];
}

/**
 * def
 */
class ManageAuxiliaryQuery extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      metrics: this.props.metrics,
      collapse: false,
      // selectManageValue: [
      // 	{ 'value': 'avg', 'label': 'average' },
      // 	{ 'value': 'sum', 'label': 'total' },
      // 	{ 'value': 'error', 'label': 'error' }
      // ],
      selectDefaultManageValue: { value: 'avg', label: 'avg' },
      mapItems: [],
    };
  }

  private getAuxiliaryMetrics = (): Metric[] => {
    let auxiliaryMetrics: Metric[] = [];

    if (this.props.isPoint) {
      auxiliaryMetrics = this.props.options.arrayPoints[this.props.id || 0].metrics;
    } else if (this.props.isLink) {
      auxiliaryMetrics = this.props.options.arrayOrientedLinks[this.props.id || 0].metrics;
    } else if (this.props.isRegion) {
      auxiliaryMetrics = this.props.options.regionCoordinateSpace[this.props.id || 0].metrics;
    }

    return auxiliaryMetrics;
  };

  /** call back to parent */
  private callBack = () => {
    this.props.callBackToParent(this.state.metrics, this.props.id);
  };

  /** switch value collapseMainMetric when click collapse */
  private onToggleCollapse = (isOpen: boolean) => {
    this.setState({
      collapse: isOpen,
    });
  };

  private onChangeKey = (event: any) => {
    const newAuxiliaryMetrics: Metric[] = this.state.metrics;
    const id: number = event.currentTarget.id;
    console.log(id);
    const value: string = event.currentTarget.value;
    newAuxiliaryMetrics[id].key = value;
    this.setState({
      metrics: newAuxiliaryMetrics,
    });
    this.callBack();
  };

  private onChangeValueKey = (event: any) => {
    const newAuxiliaryMetrics: Metric[] = this.state.metrics;
    const id: number = event.currentTarget.id;
    const value: string = event.currentTarget.value;
    newAuxiliaryMetrics[id].keyValue = value;
    this.setState({
      metrics: newAuxiliaryMetrics,
    });
    this.callBack();
  };

  private onChangeManageValue = (event: any) => {
    const newAuxiliaryMetrics: Metric[] = this.state.metrics;
    const id: number = event.id;
    console.log(event.value);
    newAuxiliaryMetrics[id].manageValue = event.value;
    const newValue: SelectableValue<TManageValue> = { id: event.id, value: event.value, label: event.label };
    this.setState({
      metrics: newAuxiliaryMetrics,
      selectDefaultManageValue: newValue,
    });
    this.callBack();
  };

  private addAuxiliaryMetric = () => {
    const refIdMetric: string = this.props.options.arrayOrientedLinks[this.props.id || 0].mainMetric.refId || '';
    let auxiliaryMetrics: Metric[] = this.state.metrics;
    auxiliaryMetrics.push({
      key: '',
      unit: '',
      format: '',
      keyValue: '',
      refId: refIdMetric,
      manageValue: 'avg',
    });
    this.setState({
      metrics: auxiliaryMetrics,
    });
    this.displayInputs();
    this.callBack();
  };

  private deleteAuxiliaryMetric = (event: any) => {
    const id: number = event.currentTarget.id;
    const auxiliaryMetrics: Metric[] = this.getAuxiliaryMetrics();
    auxiliaryMetrics.splice(id, 1);
    this.displayInputs();
    this.callBack();
  };

  private getAllManageValue = (id: string): Array<SelectableValue<TManageValue>> => {
    const selectManageValue: Array<SelectableValue<TManageValue>> = [
      { id: id, value: 'avg', label: 'average' },
      { id: id, value: 'sum', label: 'total' },
      { id: id, value: 'error', label: 'error' },
    ];
    return selectManageValue;
  };

  private getCurrentManageValue = (id: number): SelectableValue<TManageValue> => {
    let label = '';
    if (this.state.metrics[id].manageValue === 'avg') {
      label = 'average';
    } else if (this.state.metrics[id].manageValue === 'sum') {
      label = 'total';
    } else if (this.state.metrics[id].manageValue === 'error') {
      label = 'error';
    }
    const value: SelectableValue<TManageValue> = {
      id: id,
      value: this.state.metrics[id].manageValue,
      label: label,
    };
    return value;
  };

  private generateInputs = (index: number): JSX.Element => {
    const id: number = index;
    const refIdMetric: string = this.props.options.arrayOrientedLinks[this.props.id || 0].mainMetric.refId || '';
    const idLink: string = this.props.id?.toString() || '';

    const styleMainDiv = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '10px',
      marginBottom: '5px',
      border: '1px solid rgb(23, 23, 24)',
    } as React.CSSProperties;

    const styleSelect = {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '2px',
    } as React.CSSProperties;

    const styleReferenceMetric = {
      width: '276px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    } as React.CSSProperties;

    const item: JSX.Element = (
      <div key={idLink + 'mainDiv' + id.toString()} style={styleMainDiv}>
        <div key={idLink + 'inputs' + id.toString()}>
          <div key={idLink + 'refBloc' + id.toString()} style={styleSelect}>
            <FormLabel key={idLink + 'labelref' + id.toString()} width={10}>
              Query
            </FormLabel>
            <div key={this.props.id?.toString() || '' + 'refValue' + id.toString()} id={id.toString()} style={styleReferenceMetric}>
              <p style={{ marginTop: '10px', marginBottom: '0' }}>{refIdMetric}</p>
            </div>
          </div>
          <FormField
            key={idLink + 'inputKey' + id.toString()}
            id={id.toString()}
            label="Key"
            labelWidth={10}
            inputWidth={20}
            type="text"
            value={this.state.metrics[id].key}
            name="key"
            onChange={this.onChangeKey}
          />
          <FormField
            key={idLink + 'valueKey' + id.toString()}
            id={id.toString()}
            label="Value key"
            labelWidth={10}
            inputWidth={20}
            type="text"
            value={this.state.metrics[id].keyValue}
            name="valueKey"
            onChange={this.onChangeValueKey}
          />
          <div key={idLink + 'divTypeOfValue' + id.toString()} id={id.toString()} style={styleSelect}>
            <FormLabel key={idLink + 'labelTypeOfValue' + id.toString()} width={10}>
              Value
            </FormLabel>
            <Select
              key={idLink + 'selectTypeOfValue' + id.toString()}
              onChange={this.onChangeManageValue}
              allowCustomValue={false}
              options={this.getAllManageValue(id.toString())}
              width={20}
              value={this.getCurrentManageValue(id)}
            />
          </div>
        </div>
        <div key={idLink + 'buttonDelete' + id.toString()}>
          <Button id={id.toString()} onClick={this.deleteAuxiliaryMetric} variant={'danger'}>
            Delete
          </Button>
        </div>
      </div>
    );
    return <div key={idLink + 'listInputOneMetric' + id.toString()}>{item}</div>;
  };

  private displayInputs = () => {
    const idLink: string = this.props.id?.toString() || '';
    const auxiliaryMetrics: Metric[] = this.getAuxiliaryMetrics();

    const mapItems: JSX.Element[] = [];
    let index = 0;

    auxiliaryMetrics.forEach(() => {
      const item: JSX.Element = this.generateInputs(index);
      mapItems.push(item);
      index++;
    });

    return <div key={idLink + 'listInputAllMetrics'}>{mapItems}</div>;
  };

  /**
   * result
   */
  render() {
    const idLink: string = this.props.id?.toString() || '';
    const styleButtonAdd = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: 'rgb(33, 35, 39)',
    } as React.CSSProperties;

    return (
      <Collapse isOpen={this.state.collapse} label="Auxiliary metrics" onToggle={this.onToggleCollapse}>
        {this.displayInputs()}
        <div key={idLink + 'buttonAdd'} style={styleButtonAdd}>
          <Button onClick={this.addAuxiliaryMetric}>Add Auxiliary Metric</Button>
        </div>
      </Collapse>
    );
  }
}
export default ManageAuxiliaryQuery;
