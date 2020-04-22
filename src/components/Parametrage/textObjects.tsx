import React from 'react';
import { Switch, FormLabel } from '@grafana/ui';

import { Style } from 'components/Parametrage/styleComponent';
import StyleComponent from 'components/Parametrage/styleComponent';

import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';
import { TextObject } from 'Models/TextObjectClass';

import InputTextField from 'Functions/Input/inputText';
import InputSeriesColorPicker from 'Functions/Input/inputSeriesColorPicker';

interface Props {
  /** id coordinate */
  coordinateSpace: CoordinateSpaceClass;
  /** call function to save data in parent */
  callBackToParent: (followLink?: string, hoveringTooltipLink?: string, hoveringTooltipText?: string, textObj?: TextObject) => void;
}

interface State {
  /** get text object */
  textObject: TextObject;
}

/**
 * def
 */
class TextObjects extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      textObject: this.props.coordinateSpace.textObj,
    };
  }

  /** save data in async mode */
  stateAsyncTextObject = (state: {
    /** new text object */
    textObject: TextObject;
  }) => {
    return new Promise(resolve => {
      this.setState(state, resolve);
      //this.callBack();
    });
  };

  /** call back to parent */
  callBack = () => {
    this.props.callBackToParent(undefined, undefined, undefined, this.state.textObject);
  };

  // /** change value for legend input */
  // onSwitchLegend = async () => {
  // 	const newTextObject: TextObject = this.state.textObject;

  // 	newTextObject.legend = !newTextObject.legend;
  // 	await this.stateAsyncTextObject({ textObject: newTextObject });
  // 	this.callBack();
  // }

  /** change value for value input */
  onChangeValeur = async (value: string) => {
    const newTextObject: TextObject = this.state.textObject;

    newTextObject.value = value;
    await this.stateAsyncTextObject({ textObject: newTextObject });
    this.callBack();
  };

  /** change value for back color input */
  onChangeBackColor = async (key: number, color: string) => {
    const newTextObject: TextObject = this.state.textObject;

    newTextObject.colorBack = color;
    await this.stateAsyncTextObject({ textObject: newTextObject });
    this.callBack();
  };

  /** change value for color region */
  onChangeColorText = async (key: number, color: string) => {
    const newTextObject: TextObject = this.state.textObject;

    newTextObject.colorText = color;
    await this.stateAsyncTextObject({ textObject: newTextObject });
    this.callBack();
  };

  /** change value for style text region */
  // onChangeStyleText = async (event: {
  //   /** target for style text region input */
  //   currentTarget: HTMLInputElement;
  // }) => {
  //   const newTextObject: TextObject = this.state.textObject;

  //   newTextObject.styleText = event.currentTarget.value;
  //   await this.stateAsyncTextObject({ textObject: newTextObject });
  //   this.callBack();
  // };

  /** switch value for generate text object */
  onSwitchGenerateObjectText = async () => {
    const newTextObject: TextObject = this.state.textObject;

    newTextObject.generateObjectText = !this.state.textObject.generateObjectText;
    await this.stateAsyncTextObject({ textObject: newTextObject });
    this.callBack();
  };

  /** change value for legend element */
  onChangeLegendElement = async (event: {
    /** target for legend text element input */
    currentTarget: HTMLInputElement;
  }) => {
    const newTextObject: TextObject = this.state.textObject;

    newTextObject.generateAuxiliaryElement.legendElement = event.currentTarget.value;
    await this.stateAsyncTextObject({ textObject: newTextObject });
    this.callBack();
  };

  /** change value for unity mesure element */
  onChangeunit = async (event: {
    /** target for unity mesure element input */
    currentTarget: HTMLInputElement;
  }) => {
    const newTextObject: TextObject = this.state.textObject;

    newTextObject.generateAuxiliaryElement.unit = event.currentTarget.value;
    await this.stateAsyncTextObject({ textObject: newTextObject });
    this.callBack();
  };

  /** change format for numeric text object */
  onChangeFormatageNumeriqueTextObject = async (event: {
    /** target for numeric format text object input */
    currentTarget: HTMLInputElement;
  }) => {
    const newTextObject: TextObject = this.state.textObject;

    newTextObject.generateAuxiliaryElement.numericFormatElement = event.currentTarget.value;
    await this.stateAsyncTextObject({ textObject: newTextObject });
    this.callBack();
  };

  /** switch value for display object text */
  onSwitchdisplayObjectInTooltip = async () => {
    const newTextObject: TextObject = this.state.textObject;

    newTextObject.generateAuxiliaryElement.displayObjectInTooltip = !this.state.textObject.generateAuxiliaryElement.displayObjectInTooltip;
    await this.stateAsyncTextObject({ textObject: newTextObject });
    this.callBack();
  };

  // /** switch value for display object permanently */
  // onSwitchDisplayObjectPermanently = async () => {
  // 	const newTextObject: TextObject = this.state.textObject;

  // 	newTextObject.generateAuxiliaryElement.displayObjectPermanently =
  // 		!this.state.textObject.generateAuxiliaryElement.displayObjectPermanently;
  // 	await this.stateAsyncTextObject({ textObject: newTextObject });
  // 	this.callBack();
  // }

  /** choice to apply color or not for text element */
  onSwitchAddColorTextElement = async () => {
    const newTextObject: TextObject = this.state.textObject;

    newTextObject.generateAuxiliaryElement.addColorTextElement = !this.state.textObject.generateAuxiliaryElement.addColorTextElement;
    await this.stateAsyncTextObject({ textObject: newTextObject });
    this.callBack();
  };

  /** choice to apply color or not for back element */
  onSwitchAddColorBackElement = async () => {
    const newTextObject: TextObject = this.state.textObject;

    newTextObject.generateAuxiliaryElement.addColorBackElement = !this.state.textObject.generateAuxiliaryElement.addColorBackElement;
    await this.stateAsyncTextObject({ textObject: newTextObject });
    this.callBack();
  };

  /** switch display text */
  onSwitchisTextTooltip = async () => {
    // console.clear();
    // console.log('am here --');

    const newTextObject: TextObject = this.state.textObject;

    newTextObject.isTextTooltip = !this.state.textObject.isTextTooltip;
    await this.stateAsyncTextObject({ textObject: newTextObject });
    this.callBack();
  };

  /** change value for color text element */
  onChangeColorTextElement = async (key: number, color: string) => {
    const newTextObject: TextObject = this.state.textObject;

    newTextObject.generateAuxiliaryElement.colorTextElement = color;
    await this.stateAsyncTextObject({ textObject: newTextObject });
    this.callBack();
  };

  /** change value for back element */
  onChangeColorBackElement = async (key: number, color: string) => {
    const newTextObject: TextObject = this.state.textObject;

    newTextObject.generateAuxiliaryElement.colorBackElement = color;
    await this.stateAsyncTextObject({ textObject: newTextObject });
    this.callBack();
  };

  /** change value for legend element */
  onChangeValueGenerateObjectTextLegendElement = async (event: {
    /** target for legend text element input */
    currentTarget: HTMLInputElement;
  }) => {
    const newTextObject: TextObject = this.state.textObject;

    newTextObject.valueGenerateObjectText.legendElement = event.currentTarget.value;
    await this.stateAsyncTextObject({ textObject: newTextObject });
    this.callBack();
  };

  /** change value for unity mesure element */
  onChangeValueGenerateObjectTextunit = async (event: {
    /** target for unity mesure element input */
    currentTarget: HTMLInputElement;
  }) => {
    const newTextObject: TextObject = this.state.textObject;

    newTextObject.valueGenerateObjectText.unit = event.currentTarget.value;
    await this.stateAsyncTextObject({ textObject: newTextObject });
    this.callBack();
  };

  /** change format for numeric text object */
  onChangeValueGenerateObjectTextFormatageNumeriqueTextObject = async (event: {
    /** target for numeric format text object input */
    currentTarget: HTMLInputElement;
  }) => {
    const newTextObject: TextObject = this.state.textObject;

    newTextObject.valueGenerateObjectText.numericFormatElement = event.currentTarget.value;
    await this.stateAsyncTextObject({ textObject: newTextObject });
    this.callBack();
  };

  /** switch value for display object text */
  onSwitchValueGenerateObjectTextdisplayObjectInTooltip = async () => {
    const newTextObject: TextObject = this.state.textObject;

    newTextObject.valueGenerateObjectText.displayObjectInTooltip = !this.state.textObject.valueGenerateObjectText.displayObjectInTooltip;
    await this.stateAsyncTextObject({ textObject: newTextObject });
    this.callBack();
  };

  // /** switch value for display object permanently */
  // onSwitchValueGenerateObjectTextDisplayObjectPermanently = async () => {
  // 	const newTextObject: TextObject = this.state.textObject;

  // 	newTextObject.valueGenerateObjectText.displayObjectPermanently =
  // 		!this.state.textObject.valueGenerateObjectText.displayObjectPermanently;
  // 	await this.stateAsyncTextObject({ textObject: newTextObject });
  // 	this.callBack();
  // }

  /** choice to apply color or not for text element */
  onSwitchValueGenerateObjectTextAddColorTextElement = async () => {
    const newTextObject: TextObject = this.state.textObject;

    newTextObject.valueGenerateObjectText.addColorTextElement = !this.state.textObject.valueGenerateObjectText.addColorTextElement;
    await this.stateAsyncTextObject({ textObject: newTextObject });
    this.callBack();
  };

  /** choice to apply color or not for back element */
  onSwitchValueGenerateObjectTextAddColorBackElement = async () => {
    const newTextObject: TextObject = this.state.textObject;

    newTextObject.valueGenerateObjectText.addColorBackElement = !this.state.textObject.valueGenerateObjectText.addColorBackElement;
    await this.stateAsyncTextObject({ textObject: newTextObject });
    this.callBack();
  };

  /** change value for color text element */
  onChangeValueGenerateObjectTextColorTextElement = async (key: number, color: string) => {
    const newTextObject: TextObject = this.state.textObject;

    newTextObject.valueGenerateObjectText.colorTextElement = color;
    await this.stateAsyncTextObject({ textObject: newTextObject });
    this.callBack();
  };

  /** change value for back element */
  onChangeValueGenerateObjectTextColorBackElement = async (key: number, color: string) => {
    const newTextObject: TextObject = this.state.textObject;

    newTextObject.valueGenerateObjectText.colorBackElement = color;
    await this.stateAsyncTextObject({ textObject: newTextObject });
    this.callBack();
  };

  saveData = (style: Style): void => {
    const newText = this.state.textObject;
    newText.style = style;
    this.setState({
      textObject: newText,
    });
    this.callBack();
  };

  /**
   * result
   */
  render() {
    const l10n = require('Localization/en.json');

    return (
      <div>
        {/* <div>
					<h4>{l10n.textObject.titleTextObject}</h4>
					<Switch
						label={l10n.textObject.optionalLegend}
						checked={this.state.textObject.legend}
						onChange={this.onSwitchLegend} />
					<br /><br />
				</div> */}

        <div>
          <h4>{l10n.textObject.principalMetric}</h4>

          <div style={{ display: 'flex' }}>
            <FormLabel width={15}>Display text in region or tooltip</FormLabel>
            <Switch label="" checked={this.state.textObject.isTextTooltip} onChange={this.onSwitchisTextTooltip} />
          </div>

          <h5 hidden={this.state.textObject.isTextTooltip}>{l10n.textObject.textRegion}</h5>
          <h5 hidden={!this.state.textObject.isTextTooltip}>{l10n.textObject.textBubble}</h5>

          <InputSeriesColorPicker
            color={this.state.textObject.colorBack}
            keyInt={0}
            text={l10n.textObject.colorBackground}
            _onChange={this.onChangeBackColor}
          />

          <InputSeriesColorPicker
            color={this.state.textObject.colorText}
            keyInt={0}
            text={l10n.textObject.colorText}
            _onChange={this.onChangeColorText}
          />

          <StyleComponent oldStyle={this.state.textObject.style} saveParent={this.saveData} />

          {/* <InputTextField
            label={l10n.textObject.textStyle}
            name="textStyleTextObject"
            placeholder={l10n.textObject.style}
            required={false}
            value={this.state.textObject.styleText}
            _handleChange={this.onChangeStyleText}
          /> */}
          <br />
          <br />
        </div>
        <div>
          <h4>Generate text object</h4>
          <div style={{ display: 'flex' }}>
            <FormLabel width={15}>{l10n.textObject.generateTextObject}</FormLabel>
            <Switch label={''} checked={this.state.textObject.generateObjectText} onChange={this.onSwitchGenerateObjectText} />
          </div>

          {this.state.textObject.generateObjectText && (
            <div>
              {/* <h4>Object text</h4> */}
              <InputTextField
                label={l10n.textObject.legend}
                name="legendTextObject"
                placeholder={l10n.textObject.legend}
                required={false}
                value={this.state.textObject.valueGenerateObjectText.legendElement}
                _handleChange={this.onChangeValueGenerateObjectTextLegendElement}
              />
              <InputTextField
                label={l10n.textObject.digitalFormatting}
                name="formatageNumeriqueTextObject"
                placeholder={l10n.textObject.digitalFormatting}
                required={false}
                value={this.state.textObject.valueGenerateObjectText.numericFormatElement}
                _handleChange={this.onChangeValueGenerateObjectTextFormatageNumeriqueTextObject}
              />
              <InputTextField
                label={l10n.textObject.mesureUnit}
                name="mesureUnityTextObject"
                placeholder={l10n.textObject.unit}
                required={false}
                value={this.state.textObject.valueGenerateObjectText.unit}
                _handleChange={this.onChangeValueGenerateObjectTextunit}
              />
              <div style={{ display: 'flex' }}>
                <FormLabel width={15}>{l10n.textObject.objectDisplayTextTooltip}</FormLabel>
                <Switch
                  label={''}
                  checked={this.state.textObject.valueGenerateObjectText.displayObjectInTooltip}
                  onChange={this.onSwitchValueGenerateObjectTextdisplayObjectInTooltip}
                />
              </div>

              {/* <Switch
								label={l10n.textObject.objectDisplayInPermanentlyHover}
								checked={this.state.textObject.valueGenerateObjectText.displayObjectPermanently}
								onChange={this.onSwitchValueGenerateObjectTextDisplayObjectPermanently}
							/> */}
              <div style={{ display: 'flex' }}>
                <FormLabel width={15}>{l10n.textObject.colorText}</FormLabel>
                <Switch
                  label={''}
                  checked={this.state.textObject.valueGenerateObjectText.addColorTextElement}
                  onChange={this.onSwitchValueGenerateObjectTextAddColorTextElement}
                />
              </div>

              {this.state.textObject.valueGenerateObjectText.addColorTextElement && (
                <InputSeriesColorPicker
                  color={this.state.textObject.valueGenerateObjectText.colorTextElement}
                  keyInt={0}
                  text={l10n.textObject.colorTextOptional}
                  _onChange={this.onChangeValueGenerateObjectTextColorTextElement}
                />
              )}
              <div style={{ display: 'flex' }}>
                <FormLabel width={15}>{l10n.textObject.colorText}</FormLabel>
                <Switch
                  label={l10n.textObject.backgroundColor}
                  checked={this.state.textObject.valueGenerateObjectText.addColorBackElement}
                  onChange={this.onSwitchValueGenerateObjectTextAddColorBackElement}
                />
              </div>

              {this.state.textObject.valueGenerateObjectText.addColorBackElement && (
                <InputSeriesColorPicker
                  color={this.state.textObject.valueGenerateObjectText.colorBackElement}
                  keyInt={0}
                  text={l10n.textObject.optionalBackgroundColor}
                  _onChange={this.onChangeValueGenerateObjectTextColorBackElement}
                />
              )}
            </div>
          )}
          <br />
          <br />
        </div>

        <div>
          <h4>{l10n.textObject.auxiliaryElement}</h4>
          <InputTextField
            label={l10n.textObject.legend}
            name="legendTextObject"
            placeholder={l10n.textObject.legend}
            required={false}
            value={this.state.textObject.generateAuxiliaryElement.legendElement}
            _handleChange={this.onChangeLegendElement}
          />
          <InputTextField
            label={l10n.textObject.digitalFormatting}
            name="formatageNumeriqueTextObject"
            placeholder={l10n.textObject.digitalFormatting}
            required={false}
            value={this.state.textObject.generateAuxiliaryElement.numericFormatElement}
            _handleChange={this.onChangeFormatageNumeriqueTextObject}
          />
          <InputTextField
            label={l10n.textObject.mesureUnit}
            name="mesureUnityTextObject"
            placeholder={l10n.textObject.unit}
            required={false}
            value={this.state.textObject.generateAuxiliaryElement.unit}
            _handleChange={this.onChangeunit}
          />
          <div style={{ display: 'flex' }}>
            <FormLabel width={15}>{l10n.textObject.objectDisplayTextTooltip}</FormLabel>
            <Switch
              label={''}
              checked={this.state.textObject.generateAuxiliaryElement.displayObjectInTooltip}
              onChange={this.onSwitchdisplayObjectInTooltip}
            />
          </div>

          {/* <Switch
						label={l10n.textObject.objectDisplayInPermanentlyHover}
						checked={this.state.textObject.generateAuxiliaryElement.displayObjectPermanently}
						onChange={this.onSwitchDisplayObjectPermanently}
					/> */}
          <div style={{ display: 'flex' }}>
            <FormLabel width={15}>{l10n.textObject.colorText}</FormLabel>
            <Switch
              label={''}
              checked={this.state.textObject.generateAuxiliaryElement.addColorTextElement}
              onChange={this.onSwitchAddColorTextElement}
            />
          </div>

          {this.state.textObject.generateAuxiliaryElement.addColorTextElement && (
            <InputSeriesColorPicker
              color={this.state.textObject.generateAuxiliaryElement.colorTextElement}
              keyInt={0}
              text={l10n.textObject.colorTextOptional}
              _onChange={this.onChangeColorTextElement}
            />
          )}
          <div style={{ display: 'flex' }}>
            <FormLabel width={15}>{l10n.textObject.backgroundColor}</FormLabel>
            <Switch
              label={''}
              checked={this.state.textObject.generateAuxiliaryElement.addColorBackElement}
              onChange={this.onSwitchAddColorBackElement}
            />
          </div>

          {this.state.textObject.generateAuxiliaryElement.addColorBackElement && (
            <InputSeriesColorPicker
              color={this.state.textObject.generateAuxiliaryElement.colorBackElement}
              keyInt={0}
              text={l10n.textObject.optionalBackgroundColor}
              _onChange={this.onChangeColorBackElement}
            />
          )}
          <br />
          <br />
        </div>
      </div>
    );
  }
}
export default TextObjects;
