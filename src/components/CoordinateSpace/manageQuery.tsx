import React from 'react';
import { SimpleOptions, TManageValue, Metric } from 'types';

import { PanelEditorProps, SelectableValue, DataFrame } from '@grafana/data';
import { Select, FormField, Collapse, FormLabel } from '@grafana/ui';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
//import { OrientedLinkClass } from 'Models/OrientedLinkClass';

interface Prop extends PanelEditorProps<SimpleOptions> {
  /** id coordinate. Use to check if componentDidUpdate launch update */
  idCoordinate: number;
  /** parent data */
  mainMetric: Metric;
  /** call function when save data */
  mainMetricB?: Metric;
  /** call function when save data mainMetric*/
  callBackToParent: (mainMetric: Metric, id?: number) => void;
  /** call function when save data mainMetricB*/
  callBackToParentMainMetricB?: (mainMetricB: Metric, id?: number) => void;
  /** id coordinateSpace for link and point*/
  id?: number;
  /** check if is OrientedLink */
  isLink: boolean;
}

interface State {
  /** data for manipulate mainMetric */
  mainMetric: Metric;
  /** data for manipulate mainMetric of OrientedLink if is bidirectionnal*/
  mainMetricB: Metric;
  /** collapse main metric open or close */
  collapseMainMetric: boolean;
  /** collapse linkA open or close */
  collapseLinkA: boolean;
  /** collapse linkB open or close */
  collapseLinkB: boolean;
  /** value for manage value (for query => ) */
  selectManageValue: Array<SelectableValue<TManageValue>>;
  /** default value for manage value */
  //selectDefaultManageValue: SelectableValue<TManageValue>;
  /** select aux query */
  selectQuery: Array<SelectableValue<DataFrame>>;
  /** select main query */
  selectQueryDefault: SelectableValue<DataFrame>;
}

/**
 * def
 */
class ManageQuery extends React.Component<Prop, State> {
  constructor(props: Prop) {
    super(props);
    this.state = {
      mainMetric: this.props.mainMetric,
      mainMetricB: this.props.mainMetricB || { key: '', unit: '', format: '', keyValue: '', refId: '', manageValue: 'avg' },
      collapseMainMetric: false,
      collapseLinkA: false,
      collapseLinkB: false,
      selectManageValue: [],
      // selectDefaultManageValue: { value: 'avg', label: 'avg' },
      selectQuery: [],
      selectQueryDefault: [],
    };
  }

  /** call back to parent */
  callBack = () => {
    this.props.callBackToParent(this.state.mainMetric, this.props.id);
  };

  /** call back to parent for mainMetricB */
  callBackB = () => {
    if (this.props.callBackToParentMainMetricB) {
      this.props.callBackToParentMainMetricB(this.state.mainMetricB, this.props.id);
    }
  };

  /** get mainMetricB of OrientedLink bidirectionnal */
  getMainMetricB = (): any => {
    let mainMetricB: any = {};
    const arrayOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
    for (const orientedLink of arrayOrientedLink) {
      if (orientedLink.id === this.props.idCoordinate) {
        mainMetricB = orientedLink.mainMetricB;
      }
    }
    return mainMetricB;
  };

  /** edit value for default select manage value */
  onChangeSelectManageValue = (value: SelectableValue<TManageValue>) => {
    const newMainMetric: Metric = this.state.mainMetric;
    newMainMetric.manageValue = value.value || 'err';
    this.setState({
      mainMetric: newMainMetric,
      //selectDefaultManageValue: value,
    });
    this.callBack();
  };

  /** edit value for default select manage value */
  onChangeSelectManageValueB = (value: SelectableValue<TManageValue>) => {
    const newMainMetric: Metric = this.state.mainMetricB;
    //const arrayOrientedLinks: OrientedLink = this.props.options.arrayOrientedLinks
    newMainMetric.manageValue = value.value || 'err';
    this.setState({
      mainMetricB: newMainMetric,
    });
    this.callBackB();
  };

  /** edit value key for mainMetric */
  _handleChangeKey = (value: string) => {
    const newMainMetric: Metric = this.state.mainMetric;
    newMainMetric.key = value;
    this.setState({
      mainMetric: newMainMetric,
    });
    this.callBack();
  };

  /** edit value key for mainMetric */
  _handleChangeKeyB = (value: string) => {
    const newMainMetric: Metric = this.state.mainMetricB;
    newMainMetric.key = value;
    this.setState({
      mainMetricB: newMainMetric,
    });
    this.callBackB();
  };

  /** edit value keyValue for mainMetric */
  _handleChangeKeyValue = (value: string) => {
    const newMainMetric: Metric = this.state.mainMetric;
    newMainMetric.keyValue = value;
    this.setState({
      mainMetric: newMainMetric,
    });
    this.callBack();
  };

  /** edit value keyValue for mainMetric */
  _handleChangeKeyValueB = (value: string) => {
    const newMainMetric: Metric = this.state.mainMetricB;
    newMainMetric.keyValue = value;
    this.setState({
      mainMetricB: newMainMetric,
    });
    this.callBackB();
  };

  /** edit value for select */
  onChangeSelectQuery = (value: SelectableValue<DataFrame>) => {
    const newMainMetric: Metric = this.state.mainMetric;
    newMainMetric.refId = value.value?.refId || '';
    newMainMetric.expr = '';
    this.setState({
      mainMetric: newMainMetric,
      selectQueryDefault: value,
    });
    this.callBack();
  };

  /** edit value for select */
  onChangeSelectQueryB = (value: SelectableValue<DataFrame>) => {
    const newMainMetric: Metric = this.state.mainMetricB;
    newMainMetric.refId = value.value?.refId || '';
    newMainMetric.expr = '';
    this.setState({
      mainMetricB: newMainMetric,
    });
    this.callBackB();
  };

  /** switch value collapseMainMetric when click collapse */
  onToggleMainMetric = (isOpen: boolean) => {
    this.setState({
      collapseMainMetric: isOpen,
    });
  };

  /** switch value collapseLinkA when click collapse */
  onToggleLinkA = (isOpen: boolean) => {
    this.setState({
      collapseLinkA: isOpen,
    });
  };

  /** switch value collapseLinkB when click collapse */
  onToggleLinkB = (isOpen: boolean) => {
    this.setState({
      collapseLinkB: isOpen,
    });
  };

  private getDefaultQueryB = (): SelectableValue<DataFrame> => {
    let defaultValue: SelectableValue<DataFrame> = { label: 'No value', value: undefined };
    const mainMetricB: Metric = this.state.mainMetricB;
    for (const value of this.state.selectQuery) {
      if (mainMetricB.refId) {
        if (mainMetricB.refId === value.label) {
          defaultValue = value;
        }
      }
    }
    return defaultValue;
  };

  private getDefaultManageValue = (): SelectableValue<TManageValue> => {
    let defaultValue: SelectableValue<TManageValue> = { label: 'avg', value: 'avg' };
    const mainMetric: Metric = this.state.mainMetric;
    for (const value of this.state.selectManageValue) {
      if (mainMetric.manageValue) {
        if (mainMetric.manageValue === value.value) {
          defaultValue = value;
        }
      }
    }
    return defaultValue;
  };

  private getDefaultManageValueB = (): SelectableValue<TManageValue> => {
    let defaultValue: SelectableValue<TManageValue> = { label: 'avg', value: 'avg' };
    const mainMetricB: Metric = this.state.mainMetricB;
    for (const value of this.state.selectManageValue) {
      if (mainMetricB.manageValue) {
        if (mainMetricB.manageValue === value.value) {
          defaultValue = value;
        }
      }
    }
    return defaultValue;
  };

  /** add all query in select */
  fillSelectQuery = () => {
    const valueSelect: Array<SelectableValue<DataFrame>> = [];
    const newMainMetric: Metric = this.state.mainMetric;

    valueSelect.push({ value: undefined, label: 'No value' });
    for (const line of this.props.data.series) {
      let duplicate = false;
      for (const valueSave of valueSelect) {
        if (valueSave.value?.refId === line.refId) {
          duplicate = true;
          break;
        }
      }
      if (!duplicate) {
        valueSelect.push({ value: line, label: line.refId });
      }
    }
    if (newMainMetric.refId === '') {
      newMainMetric.refId = valueSelect.length > 0 ? valueSelect[0].value?.refId || '' : '';
    }

    const refId: string | undefined = this.state.mainMetric.refId;
    let defaultValue: SelectableValue<DataFrame>;

    defaultValue = { value: undefined, label: 'No value' };
    if (refId) {
      for (const line of valueSelect) {
        if (line.value?.refId === refId) {
          defaultValue = line;
          break;
        }
      }
    }
    this.setState({
      mainMetric: newMainMetric,
      selectQuery: valueSelect,
      selectQueryDefault: defaultValue,
    });
  };

  /** fill data when component mount */
  componentDidMount = () => {
    this.fillSelectQuery();
    const newSelectManageValue: Array<SelectableValue<TManageValue>> = [
      { value: 'avg', label: 'average' },
      { value: 'sum', label: 'total' },
      { value: 'err', label: 'error' },
    ];
    // let defaultValue: SelectableValue<TManageValue> = newSelectManageValue[0];
    // for (const line of newSelectManageValue) {
    //   if (line.value === this.state.mainMetric.manageValue) {
    //     defaultValue = line;
    //   }
    // }

    this.setState({
      selectManageValue: newSelectManageValue,
      //selectDefaultManageValue: defaultValue,
    });
  };

  /** update with promise mainMetric state */
  setStateAsyncMainMetric = (state: {
    /** new value main metric */
    mainMetric: Metric;
  }) => {
    return new Promise((resolve) => this.setState(state, resolve));
  };

  /** update with promise mainMetric state */
  setStateAsyncMainMetricB = (state: {
    /** new value main metric */
    mainMetricB: Metric;
  }) => {
    return new Promise((resolve) => this.setState(state, resolve));
  };

  /** update data when props is update */
  componentDidUpdate = async (prevProps: Prop) => {
    if (prevProps.idCoordinate !== this.props.idCoordinate) {
      this.setState({
        collapseMainMetric: false,
      });
      await this.setStateAsyncMainMetric({ mainMetric: this.props.mainMetric });
      if (this.props.mainMetricB) {
        await this.setStateAsyncMainMetricB({ mainMetricB: this.props.mainMetricB });
      }
      this.fillSelectQuery();
    }
    if (prevProps.data.series !== this.props.data.series) {
      this.fillSelectQuery();
    }
  };

  private displayHtml = (): JSX.Element => {
    let result: JSX.Element;
    let currentOrientedLink: any;
    const arrayOrientedLinks: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
    for (const orientedLink of arrayOrientedLinks) {
      if (orientedLink.id === this.props.idCoordinate) {
        currentOrientedLink = orientedLink;
      }
    }
    if (this.props.isLink && currentOrientedLink && currentOrientedLink.orientationLink.value === 'double') {
      result = (
        <Collapse isOpen={this.state.collapseMainMetric} label="Main metric" onToggle={this.onToggleMainMetric}>
          <Collapse isOpen={this.state.collapseLinkA} label="Link A" onToggle={this.onToggleLinkA}>
            <div style={{ display: 'flex' }}>
              <FormLabel width={15}>Query</FormLabel>
              <Select
                onChange={(value) => this.onChangeSelectQuery(value)}
                allowCustomValue={false}
                options={this.state.selectQuery}
                width={30}
                value={this.state.selectQueryDefault}
              />
            </div>
            {/* <br /> */}
            <FormField
              label="Key"
              labelWidth={15}
              inputWidth={30}
              type="text"
              value={this.state.mainMetric.key}
              name="key"
              onChange={(event) => this._handleChangeKey(event.currentTarget.value)}
            />
            <FormField
              label="Value key"
              labelWidth={15}
              inputWidth={30}
              type="text"
              value={this.state.mainMetric.keyValue}
              name="valueKey"
              onChange={(event) => this._handleChangeKeyValue(event.currentTarget.value)}
            />
            {/* <br /> */}
            <div style={{ display: 'flex' }}>
              <FormLabel width={15}>Manipulate</FormLabel>
              <Select
                onChange={(value) => this.onChangeSelectManageValue(value)}
                allowCustomValue={false}
                options={this.state.selectManageValue}
                width={30}
                value={this.getDefaultManageValue()}
              />
            </div>
          </Collapse>
          <Collapse isOpen={this.state.collapseLinkB} label="Link B" onToggle={this.onToggleLinkB}>
            <div style={{ display: 'flex', marginTop: '10px' }}>
              <FormLabel width={15}>Query</FormLabel>
              <Select
                onChange={(value) => this.onChangeSelectQueryB(value)}
                allowCustomValue={false}
                options={this.state.selectQuery}
                width={30}
                value={this.getDefaultQueryB()}
              />
            </div>
            {/* <br /> */}
            <FormField
              label="Key"
              labelWidth={15}
              inputWidth={30}
              type="text"
              value={this.state.mainMetricB.key}
              name="key"
              onChange={(event) => this._handleChangeKeyB(event.currentTarget.value)}
            />
            <FormField
              label="Value key"
              labelWidth={15}
              inputWidth={30}
              type="text"
              value={this.state.mainMetricB.keyValue}
              name="valueKey"
              onChange={(event) => this._handleChangeKeyValueB(event.currentTarget.value)}
            />
            {/* <br /> */}
            <div style={{ display: 'flex' }}>
              <FormLabel width={15}>Manipulate</FormLabel>
              <Select
                onChange={(value) => this.onChangeSelectManageValueB(value)}
                allowCustomValue={false}
                options={this.state.selectManageValue}
                width={30}
                value={this.getDefaultManageValueB()}
              />
            </div>
          </Collapse>
        </Collapse>
      );
    } else {
      result = (
        <Collapse isOpen={this.state.collapseMainMetric} label="Main metric" onToggle={this.onToggleMainMetric}>
          <div style={{ display: 'flex' }}>
            <FormLabel width={15}>Query</FormLabel>
            <Select
              onChange={(value) => this.onChangeSelectQuery(value)}
              allowCustomValue={false}
              options={this.state.selectQuery}
              width={30}
              value={this.state.selectQueryDefault}
            />
          </div>
          {/* <br /> */}
          <FormField
            label="Key"
            labelWidth={15}
            inputWidth={30}
            type="text"
            value={this.state.mainMetric.key}
            name="key"
            onChange={(event) => this._handleChangeKey(event.currentTarget.value)}
          />
          <FormField
            label="Value key"
            labelWidth={15}
            inputWidth={30}
            type="text"
            value={this.state.mainMetric.keyValue}
            name="valueKey"
            onChange={(event) => this._handleChangeKeyValue(event.currentTarget.value)}
          />
          {/* <br /> */}
          <div style={{ display: 'flex' }}>
            <FormLabel width={15}>Manipulate</FormLabel>
            <Select
              onChange={(value) => this.onChangeSelectManageValue(value)}
              allowCustomValue={false}
              options={this.state.selectManageValue}
              width={30}
              value={this.getDefaultManageValue()}
            />
          </div>
        </Collapse>
      );
    }
    return result;
  };

  /**
   * result
   */
  render() {
    return <div>{this.displayHtml()}</div>;
  }
}
export default ManageQuery;
