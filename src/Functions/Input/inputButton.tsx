import React, { FunctionComponent } from 'react';
import { FormField, Button } from '@grafana/ui';

type InputButtonFieldProps = {
	label: string,
	value: string
	name: string,
	required: boolean,
	_handleChange: (event: any) => void,
	id: string,
	withLabel?: boolean,
};

const InputButtonField: FunctionComponent<InputButtonFieldProps> = ({
	label, value, name, required, _handleChange, id, withLabel }) => {
		
		if (withLabel === true) {
			return (
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
			)
		} else {
			return (
				<div>
						<Button onClick={_handleChange} variant='danger' id={id} size='md'>
							Delete
						</Button>
						{/* <FormField label={''}
								inputWidth={20}
								type='button'
								required={required}
								name={name}
								id={id}
								onClick={_handleChange}
								value={label || ''} /> */}
				</div>
			)
		}
	};

export default InputButtonField;
