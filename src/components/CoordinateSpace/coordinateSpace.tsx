import React from 'react';
import { ArrayInputClass } from 'Models/ArrayInputClass';
import { CoordinateSpaceExtendClass } from 'Models/CoordinateSpaceExtendClass';
import { InputClass } from 'Models/InputClass';
import InputButtonField from 'Functions/Input/inputButton';
import InputTextField from 'Functions/Input/inputText';
import { createInputCoor } from 'Functions/createInputCoor';
import { editGoodParameterExtend } from 'Functions/editGoodParameter';

import 'style/CoordinateSpace.css';
import { PanelEditorProps, SelectableValue, DataFrame } from '@grafana/data';
import { Button, Select } from '@grafana/ui';
import { SimpleOptions } from 'types';

import ParametresGeneriques from 'components/Parametrage/parametresGeneriques';
import { TextObject } from 'Models/TextObjectClass';

interface IProps extends PanelEditorProps<SimpleOptions> {
	/** coordinate to edit */
	coordinate: CoordinateSpaceExtendClass;

	/**
	 * save data in parent
	 */
	callBackToParent: (id: number, newCoordinate?: CoordinateSpaceExtendClass) => void;
}

interface IState {
	/**
	 * stock coordinates in array object for Parent Component
	 */
	arrayCoor: CoordinateSpaceExtendClass;
	/**
	 * stock HTML input coordinates
	 */
	arrayInput: ArrayInputClass[];
	/** stock html form */
	htmlInput: JSX.Element;
	selectQuery: Array<SelectableValue<DataFrame>>;
	selectQueryDefault: SelectableValue<DataFrame>;
}

/**
 * component edit space coordinate
 */
class CoordinateSpace extends React.Component<IProps, IState>  {
	constructor(props: IProps) {
		super(props);
		this.state = {
			arrayCoor: this.props.coordinate,
			arrayInput: [],
			htmlInput: <div></div>,
			selectQuery: [],
			selectQueryDefault: [],
		};
	}

	/** update state with promise */
	public setStateAsyncArrayCoor = (state: {
		/** new espace coordinate */
		arrayCoor: CoordinateSpaceExtendClass,
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/** update state with promise */
	public setStateAsyncArrayInput = (state: {
		/** new line in array input */
		arrayInput: ArrayInputClass[],
	}) => {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	/**
	 * call function to return arrayCoor a SimpleEditor
	 */
	public callBack = (): void => {
		this.props.callBackToParent(this.state.arrayCoor.id, this.state.arrayCoor);
	}

	/** save data in parent */
	public callBackToOther = (
		followLink?: string,
		hoveringTooltipLink?: string,
		hoveringTooltipText?: string,
		textObj?: TextObject): void => {
		const oldCoor: CoordinateSpaceExtendClass = this.state.arrayCoor;
		if (followLink) {
			oldCoor.parametrageMetric.followLink = followLink;
		}
		if (hoveringTooltipLink) {
			oldCoor.parametrageMetric.hoveringTooltipLink = hoveringTooltipLink;
		}
		if (hoveringTooltipText) {
			oldCoor.parametrageMetric.hoveringTooltipText = hoveringTooltipText;
		}
		if (textObj) {
			oldCoor.textObject = textObj;
		}
		this.setState({
			arrayCoor: oldCoor,
		});
	}

	/**
	 * add inputs for a new coordiante
	 */
	public addInput = async (
		id: number, xMin: string, xMax: string,
		yMin: string, yMax: string, text: string,
		image: string, interfaceJson: string, key: string, valueKey: string,
	) => {
		await this.setStateAsyncArrayInput({
			arrayInput: this.state.arrayInput.concat([
				new ArrayInputClass(id, createInputCoor(id, false))]),
		});
	}

	/**
	 * Delete array input and value
	 * @param {event} event event click delete button
	 */
	public deleteOwnInput = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
		this.props.callBackToParent(this.state.arrayCoor.id, undefined);
	}

	/**
	 * Use function if value input change
	 * @param {string} currentTarget new value of input
	 * @param {string} name name of input
	 * @param {number} index id of input
	 */
	public _handleChange(currentTarget: string, name: string, index: number): void {
		let tmp: CoordinateSpaceExtendClass = this.state.arrayCoor;
		tmp = editGoodParameterExtend(name, tmp, currentTarget);
		this.setState({
			arrayCoor: tmp,
		});
		this.fillInputEspaceCoor();
	}

	/**
	 * Get value of input with state.arrayCoor
	 * @param {number} id id of element
	 * @param {string} param name of input
	 * @returns {string} value of the array element
	 */
	public getGoodValue(id: number, param: string): string {
		let value: string;

		value = '';
		if (param.startsWith('positionXMin')) {
			value = this.state.arrayCoor.xMin;
		} else if (param.startsWith('positionXMax')) {
			value = this.state.arrayCoor.xMax;
		} else if (param.startsWith('positionYMin')) {
			value = this.state.arrayCoor.yMin;
		} else if (param.startsWith('positionYMax')) {
			value = this.state.arrayCoor.yMax;
		} else if (param.startsWith('label')) {
			value = this.state.arrayCoor.label;
		} else if (param.startsWith('image')) {
			value = this.state.arrayCoor.img;
		} else if (param.startsWith('interfaceJson')) {
			value = this.state.arrayCoor.interfaceJson;
		} else if (param.startsWith('key')) {
			value = this.state.arrayCoor.key;
		} else if (param.startsWith('valueKey')) {
			value = this.state.arrayCoor.valueKey;
		}
		return value;
	}

	/**
	 * Create dynamic input
	 */
	public fillInputEspaceCoor(): void {
		const { arrayInput } = this.state;
		let finalItem: JSX.Element[] = [];

		for (const line of arrayInput) {
			const mapItems = line.getUneClassInput()
				.map((obj: InputClass) =>
					(obj.getInputType() === 'text') ?
						<InputTextField key={obj.getId()}
							label={obj.getLabel()}
							name={obj.getName()}
							placeholder={obj.getPlaceholder() || ''}
							required={obj.getRequired()}
							value={this.getGoodValue(line.getId(), obj.getName())}
							_handleChange={
								(event: {
									/** get currentTarget in event element */
									currentTarget: HTMLInputElement;
								}) => this._handleChange(event.currentTarget.value,
									obj.getName(), line.getId())
							} />
						:
						<InputButtonField
							key={obj.getId()}
							label={obj.getLabel()}
							value={obj.getValue() || ''}
							name={obj.getName()}
							required={obj.getRequired()}
							_handleChange={this.deleteOwnInput}
							id={obj.getId()} />,
				);
			const divKey: string = 'inputCoor' + line.getId();
			const newInput: JSX.Element = <div key={divKey} className='inputCoor'>{mapItems}</div>;
			finalItem = finalItem.concat(newInput);
		}
		this.setState({
			htmlInput: <ul>{finalItem}</ul>,
		});
	}

	/** edit value for select */
	public onChangeSelectQuery = (value: SelectableValue<DataFrame>) => {
		const newArrayCoor: CoordinateSpaceExtendClass = this.state.arrayCoor;
		newArrayCoor.dataQuery = value.value;
		this.setState({
			arrayCoor: newArrayCoor,
			selectQueryDefault: value,
		});
	}

	/**
	 * Call function in load component
	 */
	public componentDidMount = async () => {
		const element: CoordinateSpaceExtendClass = this.props.coordinate;

		await this.addInput(element.id, element.xMin,
			element.xMax, element.yMin, element.yMax,
			element.label, element.img, element.interfaceJson, element.key, element.valueKey);
		this.fillInputEspaceCoor();
		if (this.props.data.series) {
			const valueSelect: Array<SelectableValue<DataFrame>> = [];

			for (const line of this.props.data.series) {
				valueSelect.push({ value: line, label: line.refId });
			}
			const newArrayCoor: CoordinateSpaceExtendClass = this.state.arrayCoor;
			newArrayCoor.dataQuery = valueSelect.length > 0 ?
				valueSelect[0].value : undefined;
			this.setState({
				arrayCoor: newArrayCoor,
				selectQuery: valueSelect,
				selectQueryDefault: valueSelect[0],
			});
		}
	}

	/**
	 * function is call when props is update. Update state
	 */
	public componentDidUpdate = async (prevProps: IProps) => {
		if (prevProps.coordinate !== this.props.coordinate) {
			await this.setStateAsyncArrayCoor({
				arrayCoor: this.props.coordinate,
			});
			this.fillInputEspaceCoor();
		}
		if (prevProps.data.series !== this.props.data.series) {
			const valueSelect: Array<SelectableValue<DataFrame>> = [];

			for (const line of this.props.data.series) {
				valueSelect.push({ value: line, label: line.refId });
			}
			const newArrayCoor: CoordinateSpaceExtendClass = this.state.arrayCoor;
			newArrayCoor.dataQuery = valueSelect.length > 0 ?
				valueSelect[0].value : undefined;
			this.setState({
				arrayCoor: newArrayCoor,
				selectQuery: valueSelect,
				selectQueryDefault: valueSelect[0],
			});
		}
	}

	/**
	 * render
	 */
	public render() {
		return (
			<div>
				<div>
					{this.state.htmlInput}
				</div>
				<div>
					<Select
						onChange={(value) => this.onChangeSelectQuery(value)}
						allowCustomValue={false}
						options={this.state.selectQuery}
						width={10}
						value={this.state.selectQueryDefault}
					/>
				</div>
				<div>
					<ParametresGeneriques
						options={this.props.options}
						onOptionsChange={this.props.onOptionsChange}
						data={this.props.data}
						coordinateSpace={this.state.arrayCoor}
						callBackToParent={this.callBackToOther}
					/>
				</div>
				<div className='buttonSave'>
					<Button onClick={() => this.callBack()}>Save</Button>
				</div>
			</div>
		);
	}
}
export default CoordinateSpace;
