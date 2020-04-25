import { FormField } from '@grafana/ui';
import React, { ChangeEvent, FunctionComponent } from 'react';
// import { SelectableValue } from '@grafana/data';

/**
 * props
 */
type InputTextFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  required: boolean;
  value: string;
  _handleChange: (event: ChangeEvent<HTMLInputElement>) => any;
  shape: string;
};

export const InputTextPoint: FunctionComponent<InputTextFieldProps> = ({ label, name, placeholder, required, value, _handleChange, shape }) => {
  if (name !== undefined) {
    if (shape !== 'arrow' && name.startsWith('rotateArrow')) {
      return <div></div>;
    } else {
      return (
        <div>
          <FormField
            label={label}
            labelWidth={15}
            inputWidth={20}
            type="text"
            required={required}
            name={name}
            value={value}
            onChange={_handleChange}
            placeholder={placeholder}
          />
        </div>
      );
    }
  } else {
    return (
      <div>
        <FormField
          label={label}
          labelWidth={15}
          inputWidth={20}
          type="text"
          required={required}
          name={name}
          value={value}
          onChange={_handleChange}
          placeholder={placeholder}
        />
      </div>
    );
  }
};

export default InputTextPoint;
