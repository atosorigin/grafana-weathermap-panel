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
import { EspaceCoordonneesExtendClass } from 'Models/EspaceCoordonneesExtendClass';
import { PointClass } from 'Models/PointClass';



/**
 * IProps
 */
interface IProps {

	/**
	 * function for return arrayInput for Parent
	 */
	callBackFromParent: (dataFromChild: OrientedLinkClass[]) => void;

	/** to do */
	//callBackIdOrientedLink: Function;

	/**
	 * old data
	 */
	oldArrayOrientedLinkClass: OrientedLinkClass[];

	/**
	 * array of region existing
	 */
	arrayCoordinateSpace: EspaceCoordonneesExtendClass[];


	/**
	 * array of point existing
	 */
	arrayPoint: PointClass[];

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
	//indexOrientedLink: number;

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
			//indexOrientedLink: this.props.idFromPanel,
		};
	}

	/**
	 * to do
	 */
	public callBack = () => {
		this.props.callBackFromParent(this.state.oldArrayOrientedLinkClass);
	}

	// /**
	//  * to do
	//  */
	// public callBackIdOrientedLink = () => {
	// 	this.props.callBackIdOrientedLink(this.state.indexOrientedLink);
	// }

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
				this.addInput(element.id, element.orientationLink, element.pointAPositionX,
					element.pointAPositionY, element.colorCoordinateA, element.pointBPositionX,
					element.pointBPositionY, element.colorCoordinateB, element.labelLinkA, element.labelLinkB,
					element.positionXLabelA, element.positionYLabelA, element.positionXLabelB, element.positionYLabelB,
					element.pointIn, element.pointOut, element.regionIn, element.regionOut);
			}, 100);
		}
		this.setState({
			debug: !this.state.debug,
		});
	}

	public defineDataRegion(): SelectableValue<EspaceCoordonneesExtendClass>[] {
		const { arrayCoordinateSpace } = this.props;
		let optionRegionNull: SelectableValue<EspaceCoordonneesExtendClass> = { label: 'No selected region' };
		let arrayOptionsRegion: SelectableValue<EspaceCoordonneesExtendClass>[] = [];

		arrayOptionsRegion.push(optionRegionNull);

		arrayCoordinateSpace.forEach(region => {
			let optionRegion: SelectableValue<EspaceCoordonneesExtendClass> = {
				label: region.label,
				value: region,
			};
			arrayOptionsRegion.push(optionRegion);
		});

		return arrayOptionsRegion;
	}

	public defineDataPoint(): SelectableValue<PointClass>[] {
		const { arrayPoint } = this.props;
		let optionPointNull: SelectableValue<PointClass> = { label: 'No selected point' };
		let arrayOptionsPoint: SelectableValue<PointClass>[] = [];

		arrayOptionsPoint.push(optionPointNull);

		arrayPoint.forEach(point => {
			let optionPoint: SelectableValue<PointClass> = {
				label: point.label,
				value: point,
			};
			arrayOptionsPoint.push(optionPoint);
		});

		return arrayOptionsPoint;
	}


	/**
	 * add inputs for a new coordiante
	 */
	public addInput = (
		id?: number, orientationLink?: SelectableValue<string>, pointAPositionX?: string,
		pointAPositionY?: string, colorCoordinateA?: string, pointBPositionX?: string,
		pointBPositionY?: string, colorCoordinateB?: string, labelLinkA?: string, labelLinkB?: string,
		positionXLabelA?: string, positionYLabelA?: string, positionXLabelB?: string,
		positionYLabelB?: string, pointIn?: SelectableValue<PointClass>, pointOut?: SelectableValue<PointClass>, 
		regionIn?: SelectableValue<EspaceCoordonneesExtendClass>, regionOut?: SelectableValue<EspaceCoordonneesExtendClass>) => {

		const num: number = id || this.state.index;

		const finalArray: InputSelectableClass[] = createInputsOrientedLink(num, 
								this.defineDataRegion(), this.defineDataPoint());

		this.setState({
			oldArrayOrientedLinkClass: this.state.oldArrayOrientedLinkClass.concat(new OrientedLinkClass(num,
				orientationLink || { label: 'double', value: 'double' },
				pointAPositionX || '0', pointAPositionY || '0', colorCoordinateA || '#5794F2',
				pointBPositionX || '0', pointBPositionY || '0', colorCoordinateB || '#E54658',
				labelLinkA || '', labelLinkB || '', positionXLabelA || '0', positionYLabelA || '0', 
				positionXLabelB || '0', positionYLabelB || '0', pointIn || {}, pointOut || {},
				regionIn || {}, regionOut || {})),

			arrayInput: this.state.arrayInput.concat([
				new ArrayInputSelectableClass(num, finalArray),
			]),
			index: (id || this.state.index) + 1,
		});

		//this.callBackIdOrientedLink();
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
				value.id !== id,
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
			for (const line of obj.uneClassInput) {
				if (line.input_type === 'button') {
					if (line.id === id) {
						const updateArrayInput: ArrayInputSelectableClass[] = arrayInput
							.filter((value: ArrayInputSelectableClass) =>
								value.id !== obj.id,
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
			if (line.id === index) {
				copyOfoldArrayOrientedLinkClass[i] = editGoodParameterOrientedLink(name, 
					copyOfoldArrayOrientedLinkClass[i], currentTarget, {});
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
			if (line.id === id) {
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
			name.startsWith('spaceCoordinateAssociatePointB') ||
			name.startsWith('pointIn') ||
			name.startsWith('pointOut')
		) {

			if (name.startsWith('orientationLink')) {
				valueSelect = this.state.oldArrayOrientedLinkClass[idx].orientationLink;
			} else if (name.startsWith('spaceCoordinateAssociatePointA')) {
				valueSelect = this.state.oldArrayOrientedLinkClass[idx].regionIn;
			} else if (name.startsWith('spaceCoordinateAssociatePointB')) {
				valueSelect = this.state.oldArrayOrientedLinkClass[idx].regionOut;
			} else if (name.startsWith('pointIn')) {
				valueSelect = this.state.oldArrayOrientedLinkClass[idx].pointIn;
			} else if (name.startsWith('pointOut')) {
				valueSelect = this.state.oldArrayOrientedLinkClass[idx].pointOut;
			}

			return valueSelect;

		} else {

			if (name.startsWith('pointAX')) {
				value = this.state.oldArrayOrientedLinkClass[idx].pointAPositionX;
			} else if (name.startsWith('pointAY')) {
				value = this.state.oldArrayOrientedLinkClass[idx].pointAPositionY;
			} else if (name.startsWith('pointBX')) {
				value = this.state.oldArrayOrientedLinkClass[idx].pointBPositionX;
			} else if (name.startsWith('pointBY')) {
				value = this.state.oldArrayOrientedLinkClass[idx].pointBPositionY;
			} else if (name.startsWith('colorCoordinateA')) {
				value = this.state.oldArrayOrientedLinkClass[idx].colorCoordinateA;
			} else if (name.startsWith('colorCoordinateB')) {
				value = this.state.oldArrayOrientedLinkClass[idx].colorCoordinateB;
			} else if (name.startsWith('labelLinkA')) {
				value = this.state.oldArrayOrientedLinkClass[idx].labelLinkA;
			} else if (name.startsWith('labelLinkB')) {
				value = this.state.oldArrayOrientedLinkClass[idx].labelLinkB;
			} else if (name.startsWith('positionXLabelLinkA')) {
				value = this.state.oldArrayOrientedLinkClass[idx].positionXLabelA;
			} else if (name.startsWith('positionYLabelLinkA')) {
				value = this.state.oldArrayOrientedLinkClass[idx].positionYLabelA;
			} else if (name.startsWith('positionXLabelLinkB')) {
				value = this.state.oldArrayOrientedLinkClass[idx].positionXLabelB;
			} else if (name.startsWith('positionYLabelLinkB')) {
				value = this.state.oldArrayOrientedLinkClass[idx].positionYLabelB;
			}

			return value;

		}
	}

	/** fill oriented link */
	public componentWillReceiveProps = () => {
		this.displayListInputsOrientedLink();
	}

	/**
	 * create dynamic input
	 */
	public displayListInputsOrientedLink(): JSX.Element {

		const { arrayInput } = this.state;
		let finalItem: JSX.Element[] = [];
		for (const line of arrayInput) {
			const mapItems = line.uneClassInput
				.map((obj: InputSelectableClass) =>
					(obj.input_type === 'text') ?
						<InputTextOrientedLink
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
						/>

						: (obj.input_type === 'select' ?
							<InputSelectOrientedLink
								key={obj.id}
								_onChange={(value: SelectableValue<string>, name: string, index: number) => {

									//console.log(this.getGoodValue(line.id, obj.name))
									let i: number;
									i = 0;
									const copyOfoldArrayOrientedLinkClass: OrientedLinkClass[] = this.state.oldArrayOrientedLinkClass.slice();

									for (const line of copyOfoldArrayOrientedLinkClass) {
										if (line.id === index) {
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
								name={obj.name}
								index={line.id}
								data={obj.optionValues}
								defaultValue={this.getGoodValue(line.id, obj.name)}
								label={obj.label}
							/>

							: (obj.input_type === 'color' ?
								<InputSeriesColorPickerOrientedLink
									key={obj.id}
									keyInt={parseInt(obj.id, 10)}
									color={this.getGoodValue(line.id, obj.name)}
									text={obj.label}
									width={10}
									_onChange={(keyInt: number, newColor: string) => {

										let i: number;
										i = 0;
										const copyOfArrayLien: OrientedLinkClass[] = this.state.oldArrayOrientedLinkClass.slice();
										for (const line of copyOfArrayLien) {
											if (line.id === keyInt) {
												copyOfArrayLien[i] = editGoodParameterOrientedLink(obj.name, copyOfArrayLien[i], newColor, {});
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
									key={obj.id}
									label={obj.label}
									value={obj.value || ''}
									name={obj.name}
									required={obj.required}
									_handleChange={this.deleteOwnInput}
									id={obj.id}
								/>
							)
						),
				);

			const divKey: string = 'inputCoor' + line.id;
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