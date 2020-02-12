import React from 'react';
import { createInputsPoint } from 'Functions/createInputsPoint';
import InputTextPoint from 'Functions/Input/inputTextPoint';
import InputButtonField from 'Functions/Input/inputButton';
import { InputSelectableClass } from 'Models/InputSelectableClass';
import { ArrayInputSelectableClass } from 'Models/ArrayInputSelectableClass';
import { editGoodParameterPoint } from 'Functions/editGoodParameterPoint';
import { PointClass } from 'Models/PointClass';
import InputSelectPoint from 'Functions/Input/inputSelectPoint';
import { SelectableValue } from '@grafana/data';
import InputSeriesColorPickerPoint from 'Functions/Input/inputSeriesColorPickerPoint';
import { Button } from '@grafana/ui';
import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';


/**
 * IProps
 */
interface IProps {

	/**
	 * function for return arrayInput for Parent
	 */
	callBackFromParent: Function;

	/**
	 * old data
	 */
	oldArrayPointClass: PointClass[];

	/**
	 * Espace de coordonnées existants
	 */
	arrayCoordinateSpace: CoordinateSpaceClass[];

}

/**
 * IState
 */
interface IState {
	/**
	 * to do
	 */
	arrayInput: ArrayInputSelectableClass[];
	/**
	 * to do
	 */
	arrayPointClass: PointClass[];

	/**
	 * to do
	 */
	index: number;

	/**
	 * to do
	 */
	debug: boolean;

}

/**
 * IndexParametrage
 */
export default class PointForm extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			arrayInput: [],
			arrayPointClass: [],
			debug: false,
			index: 1,
		};
	}


	/**
	 * to do
	 */
	public callBack = () => {
		this.props.callBackFromParent(this.state.arrayPointClass);
	}

	/**
	 * to do
	 */
	public loadCoorParent = () => {
		const { oldArrayPointClass } = this.props;

		if (oldArrayPointClass.length === 0 || this.state.debug === true) {
			if (!this.state.debug) {
				this.setState((prevState: IState) => ({
					debug: !prevState.debug,
				}));
			}
			return;
		}

		for (const element of oldArrayPointClass) {
			setTimeout(() => {
				this.addInput(element.id, element.coordinateSpace, element.drawGraphicMarker, element.shape, element.sizeWidth,
					element.sizeHeight, element.rotateArrow, element.positionShapeX, element.positionShapeY,
					element.label, element.positionLabelX, element.positionLabelY, element.color);
			}, 100);
		}
		this.setState((prevState: IState) => ({
			debug: !prevState.debug,
		}));
	}

	public defineDataCoordinateSpace(): SelectableValue<CoordinateSpaceClass>[] {
		const { arrayCoordinateSpace } = this.props;
		const dataEspaceCoor: SelectableValue<CoordinateSpaceClass>[] = [];
		const optionNull: SelectableValue<CoordinateSpaceClass> = { label: 'Initial space' };

		// Par défault, on ajoute une option qui permet de ne pas sélectionner d'espace de coordonnées
		dataEspaceCoor.push(optionNull);

		// On ajoute aux options de choix les espace de coordonnées existant
		arrayCoordinateSpace.forEach(coordinateSpace => {
			// Console.log(CoordinateSpace)
			const option: SelectableValue<CoordinateSpaceClass> = {
				label: coordinateSpace.label,
				value: coordinateSpace,
			};
			dataEspaceCoor.push(option);
		});

		return dataEspaceCoor;
	}


	/**
	 * add inputs for a new coordiante
	 */
	public addInput = (
		id?: number, coordinateSpaceAssociate?: SelectableValue<CoordinateSpaceClass>,
		drawGraphicMarker?: SelectableValue<string>, shape?: SelectableValue<string>,
		sizeWidth?: SelectableValue<string>, sizeHeight?: SelectableValue<string>, rotateArrow?: string,
		positionShapeX?: string, positionShapeY?: string, label?: string, positionLabelX?: string, positionLabelY?: string,
		color?: string) => {

		const num: number = id || this.state.index;
		const finalArray: InputSelectableClass[] = createInputsPoint(num, this.defineDataCoordinateSpace());

		this.setState((prevState: IState) => ({
			arrayPointClass: prevState.arrayPointClass.concat(new PointClass(num,
				coordinateSpaceAssociate || {}, drawGraphicMarker || { label: 'Yes', value: 'true' },
				shape || { label: '', value: '' }, sizeWidth || { label: 'Small', value: 'small' },
				sizeHeight || { label: 'Small', value: 'small' }, rotateArrow || '0', positionShapeX || '0', positionShapeY || '0',
				label || '', positionLabelX || '0', positionLabelY || '0', color || '#5794F2')),

			arrayInput: prevState.arrayInput.concat([
				new ArrayInputSelectableClass(num, finalArray),
			]),
			index: (id || this.state.index) + 1,
		}));
	}

	/**
	 * dsgs
	 */
	public addTestInput = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		this.addInput(this.state.index);
	}

	/**
	 * Delete array coordinate in state.arrayPointClass
	 * @param {number} id id of object element to delete
	 */
	public deletearrayPointClass(id: number): void {
		const newPointClass: PointClass[] = this.state.arrayPointClass
			.filter((value: PointClass) =>
				value.id !== id
			);
		this.setState({
			arrayPointClass: newPointClass,
		});
		setTimeout(() => {
			this.callBack();
		}, 100);
	}

	/**
	 * Delete array input and value
	 * @param {event} event event click delete button
	 */
	public deleteOwnInput = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
		const { arrayInput } = this.state;
		const id = event.currentTarget.id;

		for (const obj of arrayInput) {
			for (const line of obj.uneClassInput) {
				if (line.input_type === 'button') {
					if (line.id === id) {
						const updateArrayInput: ArrayInputSelectableClass[] = arrayInput
							.filter((value: ArrayInputSelectableClass) =>
								value.id !== obj.id
							);
						this.setState({
							arrayInput: updateArrayInput,
						});
						this.deletearrayPointClass(parseInt(id, 10));
						return;
					}
				}
			}
		}
	}

	/**
	 * Use function if value input change
	 * @param {string} currentTarget new value of input
	 * @param {string} name name of input
	 * @param {number} index id of input
	 */
	public _handleChange(currentTarget: string, name: string, index: number) {
		let i: number;

		i = 0;
		const copyOfarrayPointClass: PointClass[] = this.state.arrayPointClass.slice();
		for (const line of copyOfarrayPointClass) {
			if (line.id === index) {
				copyOfarrayPointClass[i] = editGoodParameterPoint(name, copyOfarrayPointClass[i], currentTarget, {});
				break;
			}
			i++;
		}
		this.setState({
			arrayPointClass: copyOfarrayPointClass,
		});
		this.callBack();
	}


	/**
	 * Get value of input with state.arrayPointClass
	 * @param {number} id id of element
	 * @param {string} param name of input
	 * @returns {string} value of the array element
	 */
	public getGoodValue(id: number, param: string): any {
		let value: string;
		let valueSelect: SelectableValue<any>;
		let idx = -1;
		let index = 0;

		value = '';
		valueSelect = {};
		for (const line of this.state.arrayPointClass) {
			if (line.id === id) {
				idx = index;
				break;
			}
			++index;
		}
		if (idx === -1) {
			return value;
		}

		if (
			param.startsWith('drawGraphicMarker') ||
			param.startsWith('shape') ||
			param.startsWith('sizeWidth') ||
			param.startsWith('sizeHeight') ||
			param.startsWith('linkWithCoordinateSpace')
		) {
			if (param.startsWith('drawGraphicMarker')) {
				valueSelect = this.state.arrayPointClass[idx].drawGraphicMarker;
			} else if (param.startsWith('shape')) {
				valueSelect = this.state.arrayPointClass[idx].shape;
			} else if (param.startsWith('sizeWidth')) {
				valueSelect = this.state.arrayPointClass[idx].sizeWidth;
			} else if (param.startsWith('sizeHeight')) {
				valueSelect = this.state.arrayPointClass[idx].sizeHeight;
			} else if (param.startsWith('linkWithCoordinateSpace')) {
				valueSelect = this.state.arrayPointClass[idx].coordinateSpace;
			}
			return valueSelect;
		} else {
			if (param.startsWith('rotateArrow')) {
				value = this.state.arrayPointClass[idx].rotateArrow;
			} else if (param.startsWith('positionShapeX')) {
				value = this.state.arrayPointClass[idx].positionShapeX;
			} else if (param.startsWith('positionShapeY')) {
				value = this.state.arrayPointClass[idx].positionShapeY;
			} else if (param.startsWith('label')) {
				value = this.state.arrayPointClass[idx].label;
			} else if (param.startsWith('positionLabelX')) {
				value = this.state.arrayPointClass[idx].positionLabelX;
			} else if (param.startsWith('positionLabelY')) {
				value = this.state.arrayPointClass[idx].positionLabelY;
			} else if (param.startsWith('color')) {
				value = this.state.arrayPointClass[idx].color;
			}
			return value;
		}
	}

	/**
	 * create dynamic input
	 */
	public generateInputsPoints(): JSX.Element {

		const { arrayInput } = this.state;
		let finalItem: JSX.Element[] = [];
		for (const line of arrayInput) {
			const mapItems = line.uneClassInput
				.map((obj: InputSelectableClass) =>
					(obj.input_type === 'text') ?
						<InputTextPoint
							key={obj.id}
							label={obj.label}
							name={obj.name}
							placeholder={obj.placeholder || ''}
							required={obj.required}
							value={this.getGoodValue(line.id, obj.name)}
							_handleChange={
								(event: {
									/**
									 * get currentTarget in event element
									 */
									currentTarget: HTMLInputElement;
								}) => {
									this._handleChange(event.currentTarget.value, obj.name, line.id);
								}
							}
							shape={this.getGoodValue(line.id, 'shape').value}
						/>

						: (obj.input_type === 'select' ?
							<InputSelectPoint
								key={obj.id}
								_onChange={(value: SelectableValue<string>, name: string, index: number) => {

									let i: number;
									i = 0;
									const copyOfarrayPointClass: PointClass[] = this.state.arrayPointClass.slice();

									for (const line of copyOfarrayPointClass) {
										if (line.id === index) {
											copyOfarrayPointClass[i] = editGoodParameterPoint(name, copyOfarrayPointClass[i],
												value.value || '', value || {});
											break;
										}
										i++;
									}

									this.setState({
										arrayPointClass: copyOfarrayPointClass,
									});

									this.callBack();
								}}
								name={obj.name}
								index={line.id}
								data={obj.optionValues}
								defaultValue={this.getGoodValue(line.id, obj.name)}
								shape={this.getGoodValue(line.id, 'shape').value}
								label={obj.label}
							/>
							:
							(obj.input_type === 'color' ?
								<InputSeriesColorPickerPoint
									key={obj.id}
									keyInt={parseInt(obj.id, 10)}
									color={this.getGoodValue(line.id, 'color')}
									text={obj.label}
									width={10}
									_onChange={(keyInt: number, newColor: string) => {

										let i: number;
										i = 0;
										const copyOfarrayPointClass: PointClass[] = this.state.arrayPointClass.slice();
										for (const line of copyOfarrayPointClass) {
											if (line.id === keyInt) {
												copyOfarrayPointClass[i] = editGoodParameterPoint(obj.name, copyOfarrayPointClass[i], newColor, {});
												break;
											}
											i++;
										}

										this.setState({
											arrayPointClass: copyOfarrayPointClass,
										});

										this.callBack();

										obj.setDefaultValueColor(newColor);
									}}
								/>
								:
								<InputButtonField
									key={obj.id}
									label={obj.label}
									value={obj.value || ''}
									name={obj.name}
									required={obj.required}
									_handleChange={this.deleteOwnInput}
									id={obj.id}
								/>
							)
						)
				);

			const divKey: string = 'inputCoor' + line.id;
			const newInput: JSX.Element =
				<div key={divKey} className='inputCoor'>{mapItems}</div>;
			finalItem = finalItem.concat(newInput);
		}

		return (
			<ul>
				{finalItem}
			</ul>
		);
	}

	// Public onTogglePoint(id: number) {

	// }

	/**
	 * render()
	 */
	public render() {

		this.loadCoorParent();

		return (
			<div>
				{this.generateInputsPoints()}
				<div className='buttonAddCoor'>
					<Button onClick={this.addTestInput}>Add point</Button>
				</div>
			</div>
		);
	}
}