import React, { FunctionComponent } from 'react';
import { Select, FormLabel } from '@grafana/ui';
import { SelectableValue } from '@grafana/data';

type InputSelectProps = {
	_onChange: Function;
	data: Array<SelectableValue<string>>;
	defaultValue: SelectableValue<string>;
	defineHowToGetCoordinate: string;
	name: string;
	index?: number;
	label?: string;
	orientationLink?: string;
};

const InputSelectLink: FunctionComponent<InputSelectProps> = ({
	_onChange,
	data,
	index,
	defaultValue,
	name,
	defineHowToGetCoordinate,
	label,
	orientationLink,
}) => {

	if (name.startsWith('pointIn') || name.startsWith('pointOut')) {
		if (defineHowToGetCoordinate === 'point') {
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
		} else {
			return (
				<div>

				</div>
			);
		}
	} else if (name.startsWith('regionIn') || name.startsWith('regionOut')) {
		if (defineHowToGetCoordinate === 'region') {
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
		} else {
			return (
				<div>

				</div>
			);
		}
	} else if (name.startsWith('orientationLink')) {
		if (defineHowToGetCoordinate !== undefined) {
			if (orientationLink === undefined) {
				return (
					<div style={{
						display: 'flex',
						marginTop: '2px',
					}}>
						<FormLabel width={10}>{label}</FormLabel>
						<Select
							onChange={(value) => _onChange(value, name, index)}
							allowCustomValue={false}
							options={data}
							value={defaultValue}
							width={20}
							/>
						<p style={{
								color: 'red',
								paddingLeft: '20px',
								paddingTop: '8px',
							}}
						>Please select a value</p>
					</div>
				);
			} else {
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
			}
		} else {
			return (
				<div>

				</div>
			)
		}
	} else {
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
	}
};
export default InputSelectLink;
