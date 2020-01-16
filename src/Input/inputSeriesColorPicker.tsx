import { ColorPicker, FormLabel } from '@grafana/ui';
import React, { FunctionComponent } from 'react';

/**
 * props
 */
type InputTextFieldProps = {
	color: string,
	keyInt: number,
	text: string
	_onChange: Function
};

/**
 * 1.7 -> taille approximative d'un caractere
 * @param param0 voir InputTextFieldProps
 */
export const InputSeriesColorPicker: FunctionComponent<InputTextFieldProps> = ({
	color,
	keyInt,
	text,
	_onChange,
}) => (

		<div className='form-field'>
			<FormLabel width={ Math.round(text.length * 1.7) }>{text}</FormLabel>
			<ColorPicker
				color={color}
				onChange={(newColor) => _onChange(keyInt, newColor)}
			/>
		</div>
	);

export default InputSeriesColorPicker;
