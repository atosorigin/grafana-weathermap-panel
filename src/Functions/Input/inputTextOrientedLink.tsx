import { FormField } from '@grafana/ui';
import React, { ChangeEvent, FunctionComponent } from 'react';

/**
 * props
 */
type InputTextFieldProps = {
	label: string,
	name: string,
	placeholder: string,
	required: boolean,
	value: string,
	_handleChange: (event: ChangeEvent<HTMLInputElement>) => any,
};

export const InputTextOrientedLink: FunctionComponent<InputTextFieldProps> = ({
	label,
	name,
	placeholder,
	required,
	value,
	_handleChange,
}) => {

	return (
		<div>
			<FormField label={label}
				labelWidth={10}
				inputWidth={20}
				type='text'
				required={required}
				name={name}
				value={value}
				onChange={_handleChange}
				placeholder={placeholder}
			/>
		</div>
	)
};

export default InputTextOrientedLink;
