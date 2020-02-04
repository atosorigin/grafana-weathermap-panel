import React from 'react';
import { InputSelectableClass } from '../Models/inputSelectableClass';
import { ArrayInputSelectableClass } from '../Models/arrayInputSelectableClass';
import { SelectableValue } from '@grafana/data';
import InputTextOrientedLink from '../Functions/Input/inputTextOrientedLink';
import InputSelectOrientedLink from '../Functions/Input/inputSelectOrientedLink';
import InputSeriesColorPickerOrientedLink from '../Functions/Input/inputSeriesColorPickerOrientedLink';
import InputButtonField from 'Functions/Input/inputButton';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import { createInputsOrientedLink } from '../Functions/createInputsOrientedLink';
import { editGoodParameterOrientedLink } from '../Functions/editGoodParameterOrientedLink';
import { EspaceCoordonneesClass } from 'Models/EspaceCoordonneesClass';



/**
 * IProps
 */
interface IProps {

	/**
	 * function for return arrayInput for Parent
	 */
	callBackFromParent: (dataFromChild: OrientedLinkClass[]) => void;

	/** to do */
	callBackIdOrientedLink: Function;

	/**
	 * old data
	 */
	oldArrayOrientedLinkClass: OrientedLinkClass[];

	/**
	 * id for objects orientedClass from panel
	 */
	idFromPanel: number;

	arrayCoordinateSpace: EspaceCoordonneesClass[];

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
	oldArrayOrientedLinkClass: OrientedLinkClass[];

	/**
	 * to do
	 */
	index: number;

	/**
	 * to do
	 */
	debug: boolean;

	/** to do */
	indexOrientedLink: number;

}

/**
 * IndexParametrage
 */
export default class OrientedLinkForm extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			arrayInput: [],
			oldArrayOrientedLinkClass: [],
			debug: false,
			index: 1,
			indexOrientedLink: this.props.idFromPanel,
		};
	}

	/**
	 * to do
	 */
	public callBack = () => {
		this.props.callBackFromParent(this.state.oldArrayOrientedLinkClass);
	}

	/**
	 * to do
	 */
	public callBackIdOrientedLink = () => {
		this.props.callBackIdOrientedLink(this.state.indexOrientedLink);
	}

	/**
	 * to do
	 */
	public loadCoorParent = () => {
		const { oldArrayOrientedLinkClass } = this.props;

		if (oldArrayOrientedLinkClass.length === 0 || this.state.debug === true) {
			if (!this.state.debug) {
				this.setState({
					debug: !this.state.debug,
				});
			}
			return;
		}

		for (const element of oldArrayOrientedLinkClass) {
			setTimeout(() => {
				this.addInput(element.orientationLink, element.pointAPositionX,
					element.pointAPositionY, element.colorCoordinateA, element.pointBPositionX,
					element.pointBPositionY, element.colorCoordinateB, element.labelLinkA, element.labelLinkB,
					element.positionXLabelA, element.positionYLabelA, element.positionXLabelB, element.positionYLabelB,
					element.coordinateSpaceAssociatePointA, element.coordinateSpaceAssociatePointB);
			}, 100);
		}
		this.setState({
			debug: !this.state.debug,
		});
	}

	public defineDataRegion(): SelectableValue<EspaceCoordonneesClass>[] {
		const { arrayCoordinateSpace } = this.props;
		let optionRegionNull: SelectableValue<EspaceCoordonneesClass> = { label: 'No selected region' };
		let arrayOptionsRegion: SelectableValue<EspaceCoordonneesClass>[] = [];

		arrayOptionsRegion.push(optionRegionNull);

		arrayCoordinateSpace.forEach(region => {
			let optionRegion: SelectableValue<EspaceCoordonneesClass> = {
				label: region.label,
				value: region,
			};
			arrayOptionsRegion.push(optionRegion);
		});

		return arrayOptionsRegion;
	}


	/**
	 * add inputs for a new coordiante
	 */
	public addInput = (
		orientationLink?: SelectableValue<string>, pointAPositionX?: string,
		pointAPositionY?: string, colorCoordinateA?: string, pointBPositionX?: string,
		pointBPositionY?: string, colorCoordinateB?: string, labelLinkA?: string, labelLinkB?: string,
		positionXLabelA?: string, positionYLabelA?: string, positionXLabelB?: string,
		positionYLabelB?: string, coordinateSpaceAssociatePointA?: SelectableValue<EspaceCoordonneesClass>,
		coordinateSpaceAssociatePointB?: SelectableValue<EspaceCoordonneesClass>) => {

		const num: number = this.state.indexOrientedLink;

		const finalArray: InputSelectableClass[] = createInputsOrientedLink(num, this.defineDataRegion());

		this.setState({
			oldArrayOrientedLinkClass: this.state.oldArrayOrientedLinkClass.concat(new OrientedLinkClass(num,
				orientationLink || { label: 'double', value: 'double' },
				pointAPositionX || '0', pointAPositionY || '0', colorCoordinateA || '#5794F2',
				pointBPositionX || '0', pointBPositionY || '0', colorCoordinateB || '#E54658',
				labelLinkA || '', labelLinkB || '', positionXLabelA || '0',
				positionYLabelA || '0', positionXLabelB || '0', positionYLabelB || '0',
				coordinateSpaceAssociatePointA || {}, coordinateSpaceAssociatePointB || {})),

			arrayInput: this.state.arrayInput.concat([
				new ArrayInputSelectableClass(num, finalArray),
			]),
			indexOrientedLink: num + 1,
		});

		this.callBackIdOrientedLink();
	}

	/**
	 * dsgs
	 */
	public addInputOnClickButton = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		this.addInput();
	}

	/**
	 * Delete array coordinate in state.oldArrayOrientedLinkClass
	 * @param {number} id id of object element to delete
	 */
	public deleteArrayOrientedLinkClass(id: number): void {
		const newLinkClass: OrientedLinkClass[] = this.state.oldArrayOrientedLinkClass
			.filter((value: OrientedLinkClass) =>
				value.getId() !== id,
			);
		this.setState({
			oldArrayOrientedLinkClass: newLinkClass,
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
			for (const line of obj.getUneClassInput()) {
				if (line.getInputType() === 'button') {
					if (line.getId() === id) {
						const updateArrayInput: ArrayInputSelectableClass[] = arrayInput
							.filter((value: ArrayInputSelectableClass) =>
								value.getId() !== obj.getId(),
							);
						this.setState({
							arrayInput: updateArrayInput,
						});
						this.deleteArrayOrientedLinkClass(parseInt(id, 10));
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
		const copyOfoldArrayOrientedLinkClass: OrientedLinkClass[] = this.state.oldArrayOrientedLinkClass.slice();
		for (const line of copyOfoldArrayOrientedLinkClass) {
			if (line.getId() === index) {
				copyOfoldArrayOrientedLinkClass[i] = editGoodParameterOrientedLink(name, copyOfoldArrayOrientedLinkClass[i], currentTarget, {});
				break;
			}
			i++;
		}
		this.setState({
			oldArrayOrientedLinkClass: copyOfoldArrayOrientedLinkClass,
		});
		this.callBack();
	}


	/**
	 * Get value of input with state.oldArrayOrientedLinkClass
	 * @param {number} id id of element
	 * @param {string} param name of input
	 * @returns {string} value of the array element
	 */
	public getGoodValue(id: number, name: string): any {
		let value: string;
		let valueSelect: SelectableValue<any>;
		let idx = -1;
		let index = 0;

		value = '';
		valueSelect = {};
		for (const line of this.state.oldArrayOrientedLinkClass) {
			if (line.getId() === id) {
				idx = index;
				break;
			}
			++index;
		}
		if (idx === -1) {
			return value;
		}

		if (name.startsWith('orientationLink') ||
			name.startsWith('spaceCoordinateAssociatePointA') ||
			name.startsWith('spaceCoordinateAssociatePointB')
		) {

			if (name.startsWith('orientationLink')) {
				valueSelect = this.state.oldArrayOrientedLinkClass[idx].getOrientationLink();
			} else if (name.startsWith('spaceCoordinateAssociatePointA')) {
				valueSelect = this.state.oldArrayOrientedLinkClass[idx].getCoordinateSpaceAssociatePointA();
			} else if (name.startsWith('spaceCoordinateAssociatePointB')) {
				valueSelect = this.state.oldArrayOrientedLinkClass[idx].getCoordinateSpaceAssociatePointB();
			}

			return valueSelect;

		} else {

			if (name.startsWith('pointAX')) {
				value = this.state.oldArrayOrientedLinkClass[idx].getPointAPositionX();
			} else if (name.startsWith('pointAY')) {
				value = this.state.oldArrayOrientedLinkClass[idx].getPointAPositionY();
			} else if (name.startsWith('pointBX')) {
				value = this.state.oldArrayOrientedLinkClass[idx].getPointBPositionX();
			} else if (name.startsWith('pointBY')) {
				value = this.state.oldArrayOrientedLinkClass[idx].getPointBPositionY();
			} else if (name.startsWith('colorCoordinateA')) {
				value = this.state.oldArrayOrientedLinkClass[idx].getColorCoordinateA();
			} else if (name.startsWith('colorCoordinateB')) {
				value = this.state.oldArrayOrientedLinkClass[idx].getColorCoordinateB();
			} else if (name.startsWith('labelLinkA')) {
				value = this.state.oldArrayOrientedLinkClass[idx].getLabelLinkA();
			} else if (name.startsWith('labelLinkB')) {
				value = this.state.oldArrayOrientedLinkClass[idx].getLabelLinkB();
			} else if (name.startsWith('positionXLabelLinkA')) {
				value = this.state.oldArrayOrientedLinkClass[idx].getPositionXLabelA();
			} else if (name.startsWith('positionYLabelLinkA')) {
				value = this.state.oldArrayOrientedLinkClass[idx].getPositionYLabelA();
			} else if (name.startsWith('positionXLabelLinkB')) {
				value = this.state.oldArrayOrientedLinkClass[idx].getPositionXLabelB();
			} else if (name.startsWith('positionYLabelLinkB')) {
				value = this.state.oldArrayOrientedLinkClass[idx].getPositionYLabelB();
			}

			return value;

		}
	}

	/**
	 * create dynamic input
	 */
	public displayListInputsOrientedLink(): JSX.Element {

		const { arrayInput } = this.state;
		let finalItem: JSX.Element[] = [];
		for (const line of arrayInput) {
			const mapItems = line.getUneClassInput()
				.map((obj: InputSelectableClass) =>
					(obj.getInputType() === 'text') ?
						<InputTextOrientedLink
							key={obj.getId()}
							label={obj.getLabel()}
							name={obj.getName()}
							placeholder={obj.getPlaceholder() || ''}
							required={obj.getRequired()}
							value={this.getGoodValue(line.getId(), obj.getName())}
							_handleChange={
								(event: {
									/**
									 * get currentTarget in event element
									 */
									currentTarget: HTMLInputElement;
								}) => {
									this._handleChange(event.currentTarget.value, obj.getName(), line.getId());
								}
							}
						/>

						: (obj.getInputType() === 'select' ?
							<InputSelectOrientedLink
								key={obj.getId()}
								_onChange={(value: SelectableValue<string>, name: string, index: number) => {

									let i: number;
									i = 0;
									const copyOfoldArrayOrientedLinkClass: OrientedLinkClass[] = this.state.oldArrayOrientedLinkClass.slice();

									for (const line of copyOfoldArrayOrientedLinkClass) {
										if (line.getId() === index) {
											copyOfoldArrayOrientedLinkClass[i] = editGoodParameterOrientedLink(name, copyOfoldArrayOrientedLinkClass[i],
												value.value || '', value || {});
											break;
										}
										i++;
									}

									this.setState({
										oldArrayOrientedLinkClass: copyOfoldArrayOrientedLinkClass,
									});

									this.callBack();
								}}
								name={obj.getName()}
								index={line.getId()}
								data={obj.getOptionValues()}
								defaultValue={this.getGoodValue(line.getId(), obj.getName())}
								label={obj.getLabel()}
							/>

							: (obj.getInputType() === 'color' ?
								<InputSeriesColorPickerOrientedLink
									key={obj.getId()}
									keyInt={parseInt(obj.getId(), 10)}
									color={this.getGoodValue(line.getId(), obj.getName())}
									text={obj.getLabel()}
									width={10}
									_onChange={(keyInt: number, newColor: string) => {

										let i: number;
										i = 0;
										const copyOfArrayLien: OrientedLinkClass[] = this.state.oldArrayOrientedLinkClass.slice();
										for (const line of copyOfArrayLien) {
											if (line.getId() === keyInt) {
												copyOfArrayLien[i] = editGoodParameterOrientedLink(obj.getName(), copyOfArrayLien[i], newColor, {});
												break;
											}
											i++;
										}

										this.setState({
											oldArrayOrientedLinkClass: copyOfArrayLien,
										});

										this.callBack();

										obj.setDefaultValueColor(newColor);
									}}
								/>
								:
								<InputButtonField
									key={obj.getId()}
									label={obj.getLabel()}
									value={obj.getValue() || ''}
									name={obj.getName()}
									required={obj.getRequired()}
									_handleChange={this.deleteOwnInput}
									id={obj.getId()}
								/>
							)
						),
				);

			const divKey: string = 'inputCoor' + line.getId();
			const newInput: JSX.Element = <div key={divKey} className='inputCoor'>{mapItems}</div>;
			finalItem = finalItem.concat(newInput);
		}

		return (
			<ul>
				{finalItem}
			</ul>
		);
	}

	// public refreshDisplayListInputLink() {
	// 	setTimeout(() => {
	// 		this.displayListInputsOrientedLink();
	// 	}, 100)
	// }

	/**
	 * render()
	 */
	public render() {

		this.loadCoorParent();

		return (
			<div>
				{this.displayListInputsOrientedLink()}
				{/* <div className='buttonAddCoor'>
					<Button onClick={this.addInputOnClickButton}>Add Oriented Link</Button>
				</div> */}
			</div>
		)
	}


}