import { ColorPicker, FormLabel } from '@grafana/ui';
import React, { FunctionComponent } from 'react';

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

/**
 * 1.7 -> taille approximative d'un caractere
 * @param param0 voir InputTextFieldProps
 */
export const InputSeriesColorPicker: FunctionComponent<InputTextFieldProps> = ({ color, keyInt, text, _onChange, width }) => (
  <div className="form-field">
    <FormLabel width={width ? width : 15}>{text}</FormLabel>
    <div
      id="colorPicker"
      style={{
        margin: '0.5%',
        padding: '0.5%',
        paddingTop: '5px',
        backgroundColor: '#1f1f20',
        border: '3px solid black',
      }}
    >
      <ColorPicker color={color} onChange={(newColor) => _onChange(keyInt, newColor)} />
    </div>
  </div>
);

export default InputSeriesColorPicker;
// width || Math.round(text.length * 1.7)
