import React from 'react';

import InputSelect from '../Functions/Input/inputSelect';
import { SelectableValue } from '@grafana/data';
import { FormField } from '@grafana/ui';

interface Props {}

interface State {
  regionTextSelect: Array<SelectableValue<string>>;
  /** defaultValue */
  regionTextSelectDefault: SelectableValue<string>;
  abscissesPointRegionTexte: string;
  ordonneesPointRegionTexte: string;

  centerBubbleSelect: Array<SelectableValue<string>>;
  centerBubbleSelectDefault: SelectableValue<string>;
  centerBubbleInputOrdonnees: string;
  centerBubbleInputAbscisses: string;

  nvCalqueSelect: Array<SelectableValue<string>>;
  nvCalqueSelectDefault: SelectableValue<string>;
  nvCalqueInput: string;

  courbureSelect: Array<SelectableValue<string>>;
  courbureSelectDefault: SelectableValue<string>;
  courbureInput: string;
}

/**
 * def
 */
class ObjectVisibility extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      regionTextSelect: [
        { value: 'value1', label: 'Value 1' },
        { value: 'value2', label: 'Value 2' },
        { value: 'value3', label: 'Value 3' },
      ],
      regionTextSelectDefault: { value: 'value1', label: 'Value 1' },
      abscissesPointRegionTexte: '',
      ordonneesPointRegionTexte: '',
      centerBubbleSelect: [],
      centerBubbleSelectDefault: {},
      centerBubbleInputOrdonnees: '',
      centerBubbleInputAbscisses: '',
      nvCalqueSelect: [],
      nvCalqueSelectDefault: {},
      nvCalqueInput: '',
      courbureSelect: [],
      courbureSelectDefault: {},
      courbureInput: '',
    };
  }

  onChangeRegionTextSelectDefault = (value: SelectableValue<string>) => {
    this.setState({
      regionTextSelectDefault: value,
    });
  };

  /**
   * change abscisse value
   */
  onChangeAbscissesPointRegionText = (event: { currentTarget: HTMLInputElement }) => {
    this.setState({
      abscissesPointRegionTexte: event.currentTarget.value,
    });
  };

  onChangeOrdonneesPointRegionText = (event: { currentTarget: HTMLInputElement }) => {
    this.setState({
      ordonneesPointRegionTexte: event.currentTarget.value,
    });
  };

  onChangeCenterBubbleSelect = (value: SelectableValue<string>) => {
    this.setState({
      centerBubbleSelectDefault: value,
    });
  };

  onChangeCenterBubbleInputOrdonnees = (event: { currentTarget: HTMLInputElement }) => {
    this.setState({
      centerBubbleInputOrdonnees: event.currentTarget.value,
    });
  };

  onChangeCenterBubbleInputAbscisses = (event: { currentTarget: HTMLInputElement }) => {
    this.setState({
      centerBubbleInputAbscisses: event.currentTarget.value,
    });
  };

  onChangeNvCalqueSelect = (value: SelectableValue<string>) => {
    this.setState({
      nvCalqueSelectDefault: value,
    });
  };

  onChangeCourbureInputSelect = (value: SelectableValue<string>) => {
    this.setState({
      courbureSelectDefault: value,
    });
  };

  onChangeCourbureInput = (event: { currentTarget: HTMLInputElement }) => {
    this.setState({
      courbureInput: event.currentTarget.value,
    });
  };

  onChangeNvCalque = (event: { currentTarget: HTMLInputElement }) => {
    this.setState({
      nvCalqueInput: event.currentTarget.value,
    });
  };

  /**
   * result
   */
  render() {
    const l10s = require('Localization/en.json');

    return (
      <div>
        {/* icon={child.icon} */}

        <div>
          <p>{l10s.objectVisibility.decalCenterPointTextRegion}</p>
          <InputSelect
            _onChange={this.onChangeRegionTextSelectDefault}
            data={this.state.regionTextSelect}
            defaultValue={this.state.regionTextSelectDefault}
          />
          <FormField
            label={l10s.basics.abscisses}
            labelWidth={15}
            type="text"
            required={false}
            name="abscissesPointRegionTexte"
            onChange={this.onChangeAbscissesPointRegionText}
            value={this.state.abscissesPointRegionTexte}
          />
          <FormField
            label={l10s.basics.ordonnees}
            labelWidth={15}
            type="text"
            required={false}
            name="ordonneesPointRegionTexte"
            onChange={this.onChangeOrdonneesPointRegionText}
            value={this.state.ordonneesPointRegionTexte}
          />
        </div>

        <div>
          <p>{l10s.objectVisibility.decalCenterBubble}</p>
          <InputSelect
            _onChange={this.onChangeCenterBubbleSelect}
            data={this.state.centerBubbleSelect}
            defaultValue={this.state.centerBubbleSelectDefault}
          />
          <FormField
            label={l10s.basics.abscisses}
            labelWidth={15}
            type="text"
            required={false}
            name="centerBubbleInputAbscisses"
            onChange={this.onChangeCenterBubbleInputAbscisses}
            value={this.state.centerBubbleInputAbscisses}
          />
          <FormField
            label={l10s.basics.ordonnees}
            labelWidth={15}
            type="text"
            required={false}
            name="centerBubbleInputOrdonnees"
            onChange={this.onChangeCenterBubbleInputOrdonnees}
            value={this.state.centerBubbleInputOrdonnees}
          />
        </div>

        <div>
          <p>{l10s.objectVisibility.forceCalqueLevel}</p>
          <InputSelect _onChange={this.onChangeNvCalqueSelect} data={this.state.nvCalqueSelect} defaultValue={this.state.nvCalqueSelectDefault} />
          <FormField
            label={l10s.objectVisibility.calcLevel}
            labelWidth={15}
            type="text"
            required={false}
            name="nvCalque"
            onChange={this.onChangeNvCalque}
            value={this.state.nvCalqueInput}
          />
        </div>

        <div>
          <p>{l10s.objectVisibility.forceCourbSpecificLink}</p>
          <InputSelect
            _onChange={this.onChangeCourbureInputSelect}
            data={this.state.courbureSelect}
            defaultValue={this.state.courbureSelectDefault}
          />
          <FormField
            label={l10s.objectVisibility.courbure}
            labelWidth={15}
            type="text"
            required={false}
            name="courbureInput"
            onChange={this.onChangeCourbureInput}
            value={this.state.courbureInput}
          />
        </div>
      </div>
    );
  }
}
export default ObjectVisibility;
