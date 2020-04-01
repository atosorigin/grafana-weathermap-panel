import React, { FunctionComponent } from 'react';
import { Select, FormLabel } from '@grafana/ui';
import { SelectableValue } from '@grafana/data';

type InputSelectProps = {
  _onChange: Function;
  data: Array<SelectableValue<string>>;
  defaultValue: SelectableValue<string>;
  index?: number;
  name?: string;
  shape?: string;
  label?: string;
};

const InputSelectPoint: FunctionComponent<InputSelectProps> = ({ _onChange, data, index, defaultValue, name, shape, label }) => {
  if (name !== undefined) {
    if (shape !== 'arrow' && name.startsWith('sizeHeight')) {
      return <div></div>;
    } else {
      return (
        <div
          style={{
            display: 'flex',
            marginBottom: '2px',
          }}
        >
          <FormLabel width={10}>{label}</FormLabel>
          <Select onChange={value => _onChange(value, name, index)} allowCustomValue={false} options={data} value={defaultValue} width={20} />
        </div>
      );
    }
  } else {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: '2px',
        }}
      >
        <FormLabel width={10}>{label}</FormLabel>
        <Select onChange={value => _onChange(value, name, index)} allowCustomValue={false} options={data} value={defaultValue} width={20} />
      </div>
    );
  }
};

export default InputSelectPoint;
