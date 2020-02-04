import React, { FunctionComponent } from 'react';
import { FormField } from '@grafana/ui';

type InputButtonFieldProps = {
	label: string,
	value: string
	name: string,
	required: boolean,
	_handleChange: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void,
	id: string,
};

const InputButtonField: FunctionComponent<InputButtonFieldProps> = ({
	label, value, name, required, _handleChange, id }) => (
		<div>
				<FormField label={label}
						labelWidth={10}
						inputWidth={20}
						type='button'
						required={required}
						name={name}
						id={id}
						onClick={_handleChange}
						value={label || ''} />

		</div>
);

export default InputButtonField;
