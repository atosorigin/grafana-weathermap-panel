import { ColorPicker, FormLabel } from '@grafana/ui';
import React, { FunctionComponent } from 'react';
// import { SelectableValue } from '@grafana/data';

/**
 * props
 */
type InputTextFieldProps = {
  color: string;
  keyInt: number;
  text: string;
  _onChange: Function;
  defineHowToGetCoordinate: string;
  name: string;
  width?: number;
};

export const InputSeriesColorPickerLink: FunctionComponent<InputTextFieldProps> = ({
  color,
  keyInt,
  text,
  _onChange,
  defineHowToGetCoordinate,
  name,
  width,
}) => {
  if (defineHowToGetCoordinate === 'coordinate') {
    if (name.startsWith('colorCoordinate')) {
      return (
        <div className="form-field">
          <FormLabel width={width || Math.round(text.length * 1.7)}>{text}</FormLabel>
          <div id="colorPicker" style={{ marginTop: '10px', marginLeft: '131px' }}>
            <ColorPicker color={color} onChange={(newColor) => _onChange(keyInt, newColor)} />
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  } else if (defineHowToGetCoordinate === 'region') {
    if (name.startsWith('colorRegion')) {
      return (
        <div className="form-field">
          <FormLabel width={width || Math.round(text.length * 1.7)}>{text}</FormLabel>
          <div id="colorPicker" style={{ marginTop: '10px', marginLeft: '131px' }}>
            <ColorPicker color={color} onChange={(newColor) => _onChange(keyInt, newColor)} />
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  } else {
    return <div></div>;
  }
};

export default InputSeriesColorPickerLink;
