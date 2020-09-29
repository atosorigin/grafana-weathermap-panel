import React from 'react';
import { SimpleOptions, Background } from 'types';

import { SelectableValue, PanelEditorProps } from '@grafana/data';
import { FormField, Switch, FormLabel } from '@grafana/ui';

import InputSelect from 'Functions/Input/inputSelect';
import StyleComponent, { Style } from './Parametrage/styleComponent';

interface Props extends PanelEditorProps<SimpleOptions> {}

interface State {
  /** police choice in select */
  newPolice: SelectableValue<string>;
  /** size variable for input */
  size: string;
  /** style variable for input */
  style: Style;
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
    return new Promise((resolve) => {
      this.setState(state, resolve);
      this.callParent();
    });
  };

  /**
   * set size state async
   */
  setStateAsyncsize = (state: {
    /** new size value */
    size: string;
  }) => {
    return new Promise((resolve) => {
      this.setState(state, resolve);
      this.callParent();
    });
  };

  /**
   * set style state async
   */
  setStateAsyncStyle = (state: {
    /** new style value */
    style: Style;
  }) => {
    return new Promise((resolve) => {
      this.setState(state, resolve);
      this.callParent();
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

  // /**
  //  * edit style
  //  */
  // handleChangeStyle = async (event: {
  //   /** target to input element */
  //   target: HTMLInputElement;
  // }) => {
  //   await this.setStateAsyncStyle({
  //     style: event.target.value,
  //   });
  //   this.callParent();
  // };

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
    const image = e.target.value;
    //const arrayImage = image.split('.');
    newBaseMap.image = image;
    // if (image.split(',')[0] === 'base64') {
    //   // on ne fait rien car la base 64 peut être un jpeg ou un svg
    //   // l'utilisateur doit bien le spécifier avant sur le switch Use SVG
    // } else if (image.split('.')[arrayImage.length - 1] === 'svg') {
    //   // si la valeur renseignée est une url et que l'extension du fichier est svg
    //   // on passe automatiquement le swith Use SVG à true
    //   newBaseMap.modeSVG = true;
    // } else {
    //   // si la valeur renseignée est une url et que l'extension du fichier n'est pas un svg
    //   // on passe automatiquement le swith Use SVG à false
    //   newBaseMap.modeSVG = false;
    // }
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
    this.props.options.updateOnlyInitialSpace = false;
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
    this.props.options.updateOnlyInitialSpace = false;
    const { options, onOptionsChange } = this.props;
    const oldValue: Background = options.baseMap;

    oldValue.width = e.target.value;
    onOptionsChange({ ...options, baseMap: oldValue });
  };

  saveStyleData = (style: Style): void => {
    this.setStateAsyncStyle({ style: style });
  };

  uploadImage = (event: any) => {
    const readerFile: FileReader = new FileReader();
    const selectedFile: any = event.target.files[0];
    const extensionFile = selectedFile.name.split('.')[1];
    let file: any;
    if (extensionFile === 'jpg' || extensionFile === 'png' || extensionFile === 'gif') {
      readerFile.readAsDataURL(selectedFile);
    } else {
      readerFile.readAsText(selectedFile);
    }
    readerFile.onload = function () {
      file = readerFile.result;
    };

    setTimeout(() => {
      let newBaseMap: Background = this.props.options.baseMap;
      if (extensionFile === 'svg') {
        newBaseMap.image = file;
        newBaseMap.modeSVG = true;
        newBaseMap.isUploaded = true;
        newBaseMap.nameUploadedImage = selectedFile.name;
      } else if (extensionFile === 'jpg' || extensionFile === 'png' || extensionFile === 'gif') {
        newBaseMap.image = file;
        newBaseMap.modeSVG = false;
        newBaseMap.isUploaded = true;
        newBaseMap.nameUploadedImage = selectedFile.name;
      }
      this.props.onOptionsChange({
        ...this.props.options,
        baseMap: newBaseMap,
      });
    }, 1000);
  };

  defineValueImage = (): string => {
    let result = '';
    if (!this.props.options.baseMap.isUploaded) {
      result = this.props.options.baseMap.image || '';
    }
    return result;
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
        <div style={{ display: 'flex', marginBottom: 1 }}>
          <div style={{ marginBottom: '1px' }}>
            <FormLabel width={15}>Police</FormLabel>
          </div>
          <InputSelect _onChange={this.onChangePolice} data={police} defaultValue={this.state.newPolice} />
        </div>

        <FormField
          label={l10n.textDefault.size}
          labelWidth={15}
          inputWidth={30}
          required={true}
          value={this.state.size}
          onChange={this.handleChangesize}
        />

        <StyleComponent oldStyle={this.state.style} saveParent={this.saveStyleData} />
        {/* 
        <FormField
          label={l10n.textDefault.style}
          labelWidth={10}
          inputWidth={15}
          required={true}
          value={this.state.style}
          onChange={this.handleChangeStyle}
        /> */}

        <div style={{ display: 'flex' }}>
          <FormLabel width={15}>Use SVG</FormLabel>
          <Switch labelClass="" label="" checked={options.baseMap.modeSVG} onChange={this.onChangeSwitchModeSVG} />
        </div>
        {/* {options.baseMap.modeSVG ? (
          <FormField
            label={l10n.simpleEditor.pictureLink}
            labelWidth={10}
            inputWidth={30}
            type="text"
            onChange={this.onImageChanged}
            value={options.baseMap.image || ''}
          />
        ) : ( */}
        <div>
          <FormField
            label={'Image'}
            labelWidth={15}
            inputWidth={30}
            placeholder={'URL'}
            type="text"
            onChange={this.onImageChanged}
            value={this.defineValueImage()}
          />
          <div style={{ display: 'flex', margin: '2px 0' }}>
            <FormLabel width={15}>Upload Image</FormLabel>
            <input
              style={{ border: '1px solid #262628', borderRadius: '0 3px 3px 0', width: '416px' }}
              type="file"
              name="file"
              onChange={this.uploadImage}
            />
            <p style={{ margin: '10px 0 0 10px', fontSize: '10px' }}>{this.props.options.baseMap.nameUploadedImage || ''}</p>
          </div>
          <FormField
            label="Width"
            labelWidth={15}
            inputWidth={30}
            type="text"
            onChange={this.onChangeWidthBaseMap}
            value={options.baseMap.width || ''}
          />
          <FormField
            label="Height"
            labelWidth={15}
            inputWidth={30}
            type="text"
            onChange={this.onChangeHeightBaseMap}
            value={options.baseMap.height || ''}
          />
        </div>
        {/* )} */}
      </div>
    );
  }
}

export default Display;
