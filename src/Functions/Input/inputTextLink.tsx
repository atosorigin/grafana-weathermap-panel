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
  defineHowToGetCoordinate: string;
};

export const InputTextLink: FunctionComponent<InputTextFieldProps> = ({
  label,
  name,
  placeholder,
  required,
  value,
  _handleChange,
  defineHowToGetCoordinate,
}) => {
  if (name.startsWith('pointAX') || name.startsWith('pointAY') || name.startsWith('pointBX') || name.startsWith('pointBY')) {
    if (defineHowToGetCoordinate === 'coordinate') {
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
  } else if (
    name.startsWith('labelLink') ||
    name.startsWith('positionXLabelLinkA') ||
    name.startsWith('positionYLabelLinkA') ||
    name.startsWith('positionXLabelLinkB') ||
    name.startsWith('positionYLabelLinkB')
  ) {
    if (defineHowToGetCoordinate === undefined) {
      return <div></div>;
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

export default InputTextLink;
