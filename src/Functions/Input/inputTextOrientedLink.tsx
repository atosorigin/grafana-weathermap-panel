import { FormField } from '@grafana/ui';
import React, { ChangeEvent, FunctionComponent } from 'react';
import { SelectableValue } from '@grafana/data';

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
  isIncurved: SelectableValue<boolean>;
};

export const InputTextOrientedLink: FunctionComponent<InputTextFieldProps> = ({
  label,
  name,
  placeholder,
  required,
  value,
  _handleChange,
  isIncurved,
}) => {
  if (name.startsWith('pointCX') || name.startsWith('pointCY')) {
    if (isIncurved.value) {
      return (
        <div>
          <FormField
            label={label}
            labelWidth={10}
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
    } else {
      return <div></div>;
    }
  } else {
    return (
      <div>
        <FormField
          label={label}
          labelWidth={10}
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

export default InputTextOrientedLink;
