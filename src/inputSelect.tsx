import React, { FunctionComponent } from 'react';
import { Select } from '@grafana/ui';
import { SelectableValue } from '@grafana/data';

type InputSelectProps = {
  _onChange: Function;
  data: Array<SelectableValue<string>>;
  defaultValue: SelectableValue<string>;
};

export const InputSelect: FunctionComponent<InputSelectProps> = ({ _onChange, data, defaultValue }) => (
  <div>
    <Select onChange={(value) => _onChange(value)} allowCustomValue={false} options={data} value={defaultValue} />
  </div>
);
