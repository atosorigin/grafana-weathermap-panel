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
  width?: number;
};

export const InputSeriesColorPickerOrientedLink: FunctionComponent<InputTextFieldProps> = ({ color, keyInt, text, _onChange, width }) => {
  return (
    <div className="form-field">
      <FormLabel width={15}>{text}</FormLabel>
      <div id="colorPicker" style={{ marginTop: '10px', marginLeft: '131px' }}>
        <ColorPicker color={color} onChange={newColor => _onChange(keyInt, newColor)} />
      </div>
    </div>
  );
};

export default InputSeriesColorPickerOrientedLink;
// width || Math.round(text.length * 1.7)
