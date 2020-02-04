import { FormField } from '@grafana/ui';
import React, { ChangeEvent, FunctionComponent } from 'react';
// import { SelectableValue } from '@grafana/data';

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
	disabled?: boolean
};

export const InputTextField: FunctionComponent<InputTextFieldProps> = ({
	label,
	name,
	placeholder,
	required,
	value,
	_handleChange,
	disabled,
}) => (

		<div>
			<FormField label={label}
				labelWidth={Math.round((label && label.length > 0 ? label.length : 1) * 1.7)}
				inputWidth={20}
				type='text'
				required={required}
				name={name}
				value={value}
				onChange={_handleChange}
				placeholder={placeholder}
				disabled={disabled ? disabled : false}
			/>
		</div>
	);

export default InputTextField;
