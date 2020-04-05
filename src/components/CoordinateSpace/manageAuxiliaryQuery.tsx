import React from 'react';
import { SimpleOptions, TManageValue, Metric } from '../../types';

import { PanelEditorProps, SelectableValue } from '@grafana/data';
import { Select, FormField, Collapse, FormLabel, Button } from '@grafana/ui';
import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';

interface Props extends PanelEditorProps<SimpleOptions> {
  /** id coordinate. Use to check if componentDidUpdate launch update */
  idCoordinate: number;
  /** parent data */
  metrics: Metric[];
  /** */
  coordinateSpace?: CoordinateSpaceClass;
  /** call function when save data */
  callBackToParent: (metrics: Metric[], id?: number) => void;
  /** id coordinateSpace for OrientedLink*/
  id?: number;
  /** check if coordinateSpace is OrientedLink */
  isLink: boolean;
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

    if (this.props.isLink) {
      auxiliaryMetrics = this.props.options.arrayOrientedLinks[this.props.id || 0].metrics;
    } else {
      if (this.props.coordinateSpace) {
        auxiliaryMetrics = this.props.coordinateSpace.metrics;
      }
    }
    return auxiliaryMetrics;
  };

  private getReferenceMainMetric = (): string => {
    let refId = '';
    if (this.props.isLink) {
      refId = this.props.options.arrayOrientedLinks[this.props.id || 0].mainMetric.refId || '';
    } else {
      if (this.props.coordinateSpace) {
        refId = this.props.coordinateSpace.mainMetric.refId || '';
      }
    }
    return refId;
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
    newAuxiliaryMetrics[id].manageValue = event.value;
    const newValue: SelectableValue<TManageValue> = { id: event.id, value: event.value, label: event.label };
    this.setState({
      metrics: newAuxiliaryMetrics,
      selectDefaultManageValue: newValue,
    });
    this.callBack();
  };

  private addAuxiliaryMetric = () => {
    const refIdMetric: string = this.getReferenceMainMetric();
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
    const refIdMetric: string = this.getReferenceMainMetric();
    const idLink: string = this.props.id?.toString() || '';

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
      width: '276px',
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

    const item: JSX.Element = (
      <div key={idLink + 'mainDiv' + id.toString()} style={styleMainDiv}>
        <p key={idLink + 'title' + id.toString()} style={styleTitle}>
          {'Metric ' + (id + 1).toString()}
        </p>
        <div key={idLink + 'content' + id.toString()} style={styleContent}>
          <div key={idLink + 'inputs' + id.toString()}>
            <div key={idLink + 'refBloc' + id.toString()} style={styleSelect}>
              <FormLabel key={idLink + 'labelref' + id.toString()} width={10}>
                Query
              </FormLabel>
              <p key={this.props.id?.toString() || '' + 'refValue' + id.toString()} style={styleReferenceMetric}>
                {refIdMetric}
              </p>
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
      marginTop: '10px',
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
