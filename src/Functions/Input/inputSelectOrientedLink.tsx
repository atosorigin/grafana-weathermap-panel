import React, { FunctionComponent } from 'react';
import { Select, FormLabel } from '@grafana/ui';
import { SelectableValue } from '@grafana/data';

type InputSelectProps = {
	_onChange: Function;
	data: Array<SelectableValue<string>>;
	defaultValue: SelectableValue<string>;
	name: string;
	index?: number;
	label?: string;
};

const InputSelectOrientedLink: FunctionComponent<InputSelectProps> = ({
	_onChange,
	data,
	index,
	defaultValue,
	name,
	label,
}) => {
		return (
			<div style={{
				display: 'flex',
				marginBottom: '2px',
			}}>
				<FormLabel width={10}>{label}</FormLabel>
				<Select
					onChange={(value) => _onChange(value, name, index)}
					allowCustomValue={false}
					options={data}
					value={defaultValue}
					width={20}
					/>
			</div>
		);
	};


export default InputSelectOrientedLink;