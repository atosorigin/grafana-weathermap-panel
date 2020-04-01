import React from 'react';
import { SimpleOptions, Background } from 'types';

import { SelectableValue, PanelEditorProps } from '@grafana/data';
import { FormField, Switch, FormLabel } from '@grafana/ui';

import InputSelect from 'Functions/Input/inputSelect';

interface Props extends PanelEditorProps<SimpleOptions> {}

interface State {
  /** police choice in select */
  newPolice: SelectableValue<string>;
  /** size variable for input */
  size: string;
  /** style variable for input */
  style: string;
}

/**
 * class to manage police, size and style
 */
class Display extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      newPolice: {
        value: this.props.options.display.police,
        label: this.props.options.display.police,
      },
      size: this.props.options.display.size,
      style: this.props.options.display.style,
    };
  }

  /**
   * call parent with new data
   */
  callParent = () => {
    const { newPolice, size, style } = this.state;
    const pPolice: string = newPolice.value || '';
    const pSize = size;
    const pStyle = style;

    this.props.onOptionsChange({
      ...this.props.options,
      display: {
        police: pPolice,
        size: pSize,
        style: pStyle,
      },
    });
  };

  /**
   * set police state async
   */
  setStateAsyncPolice = (state: {
    /** new police value */
    newPolice: SelectableValue<string>;
  }) => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

  /**
   * set size state async
   */
  setStateAsyncsize = (state: {
    /** new size value */
    size: string;
  }) => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

  /**
   * set style state async
   */
  setStateAsyncStyle = (state: {
    /** new style value */
    style: string;
  }) => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

  /**
   * edit size
   */
  handleChangesize = async (event: {
    /** target to input element */
    target: HTMLInputElement;
  }) => {
    await this.setStateAsyncsize({
      size: event.target.value,
    });
    this.callParent();
  };

  /**
   * edit style
   */
  handleChangeStyle = async (event: {
    /** target to input element */
    target: HTMLInputElement;
  }) => {
    await this.setStateAsyncStyle({
      style: event.target.value,
    });
    this.callParent();
  };

  /**
   * edit police
   */
  onChangePolice = async (value: SelectableValue<string>) => {
    await this.setStateAsyncPolice({
      newPolice: value,
    });
    this.callParent();
  };

  /**
   * Change background picture
   */
  onImageChanged = (e: {
    /**
     * Get target element
     */
    target: HTMLInputElement;
  }) => {
    const newBaseMap: Background = this.props.options.baseMap;
    newBaseMap.image = e.target.value;
    this.props.onOptionsChange({
      ...this.props.options,
      baseMap: newBaseMap,
    });
    // this.props.onOptionsChange({ ...this.props.options, imageUrl: event.target.value });
  };

  /** edit modeSVG */
  onChangeSwitchModeSVG = () => {
    const { options, onOptionsChange } = this.props;
    const oldValue: Background = options.baseMap;

    oldValue.modeSVG = !oldValue.modeSVG;
    onOptionsChange({ ...options, baseMap: oldValue });
  };

  /** edit modeSVG */
  onChangeHeightBaseMap = (e: {
    /** new value for height */
    target: HTMLInputElement;
  }) => {
    const { options, onOptionsChange } = this.props;
    const oldValue: Background = options.baseMap;

    oldValue.height = e.target.value;
    onOptionsChange({ ...options, baseMap: oldValue });
  };

  /** edit modeSVG */
  onChangeWidthBaseMap = (e: {
    /** new value for width */
    target: HTMLInputElement;
  }) => {
    const { options, onOptionsChange } = this.props;
    const oldValue: Background = options.baseMap;

    oldValue.width = e.target.value;
    onOptionsChange({ ...options, baseMap: oldValue });
  };

  /**
   * html
   */
  render() {
    const { options } = this.props;

    const police: Array<SelectableValue<string>> = [
      { value: 'Helvetica', label: 'Helvetica' },
      { value: 'Arial', label: 'Arial' },
      { value: 'sans-serif', label: 'sans-serif' },
      { value: 'mono', label: 'mono' },
    ];

    const l10n = require('Localization/en.json');

    return (
      <div>
        <tr style={{ verticalAlign: 'middle' }}>
          <td>
            <FormLabel>Police</FormLabel>
          </td>
          <td>
            <InputSelect _onChange={this.onChangePolice} data={police} defaultValue={this.state.newPolice} />
          </td>
        </tr>

        <FormField
          label={l10n.textDefault.size}
          labelWidth={10}
          inputWidth={15}
          required={true}
          value={this.state.size}
          onChange={this.handleChangesize}
        />

        <FormField
          label={l10n.textDefault.style}
          labelWidth={10}
          inputWidth={15}
          required={true}
          value={this.state.style}
          onChange={this.handleChangeStyle}
        />

        <div>
          <Switch label="Use SVG" checked={options.baseMap.modeSVG} onChange={this.onChangeSwitchModeSVG} />
        </div>
        {options.baseMap.modeSVG ? (
          <FormField
            label={l10n.simpleEditor.pictureLink}
            labelWidth={10}
            inputWidth={30}
            type="text"
            onChange={this.onImageChanged}
            value={options.baseMap.image || ''}
          />
        ) : (
          <div>
            <FormField
              label={'Image'}
              labelWidth={10}
              inputWidth={30}
              type="text"
              onChange={this.onImageChanged}
              value={options.baseMap.image || ''}
            />
            <FormField
              label="Height"
              labelWidth={10}
              inputWidth={30}
              type="text"
              onChange={this.onChangeHeightBaseMap}
              value={options.baseMap.height || ''}
            />
            <FormField
              label="Width"
              labelWidth={10}
              inputWidth={30}
              type="text"
              onChange={this.onChangeWidthBaseMap}
              value={options.baseMap.width || ''}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Display;
