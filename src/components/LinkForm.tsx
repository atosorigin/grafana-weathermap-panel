import React from 'react';
import InputTextLink from '../Functions/Input/inputTextLink';
import InputButtonField from '../Functions/Input/inputButton';
import { InputSelectableClass } from '../Models/inputSelectableClass';
import { ArrayInputSelectableClass } from '../Models/arrayInputSelectableClass';
import InputSelectLink from '../Functions/Input/inputSelectLink';
import { SelectableValue } from '@grafana/data';
import InputSeriesColorPickerLink from '../Functions/Input/inputSeriesColorPickerLink';
import { Button } from '@grafana/ui';
import { LinkClass } from '../Models/LinkClass';
import { createInputsLink } from '../Functions/createInputsLink';
import { editGoodParameterLink } from '../Functions/editGoodParameterLink';
import { PointClass } from '../Models/PointClass';
import { EspaceCoordonneesClass } from '../Models/EspaceCoordonneesClass';

/**
 * IProps
 */
interface IProps {

	/**
	 * function for return arrayInput for Parent
	 */
	callBackFromParent: (dataFromChild: LinkClass[]) => void;

	/**
	 * old data
	 */
	oldArrayLinkClass: LinkClass[];

	/**
	 * Tableau des Points existants créés dans l'onglet 'Point'
	 */
	arrayPointClass: PointClass[];

	/**
	 * Tableau des Régions existantes créées dans l'onglet 'Espace de coordonnées'
	 */
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
	arrayLinkClass: LinkClass[];

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
export default class LinkForm extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			arrayInput: [],
			arrayLinkClass: [],
			debug: false,
			index: 1,
		};
	}

	/**
	 * to do
	 */
	public callBack = () => {
		this.props.callBackFromParent(this.state.arrayLinkClass);
	}

	/**
	 * to do
	 */
	public loadCoorParent = () => {
		const { oldArrayLinkClass } = this.props;

		if (oldArrayLinkClass.length === 0 || this.state.debug === true) {
			if (!this.state.debug) {
				this.setState({
					debug: !this.state.debug,
				});
			}
			return;
		}

		for (const element of oldArrayLinkClass) {
			setTimeout(() => {
				this.addInput(element.id, element.defineHowToGetCoordonate, element.orientationLink,
					element.pointAPositionX, element.pointAPositionY, element.colorCoordinateA,
					element.pointBPositionX, element.pointBPositionY, element.colorCoordinateB,
					element.pointIn, element.pointOut, element.regionIn, element.colorRegionIn,
					element.regionOut, element.colorRegionOut, element.labelLinkA, element.positionXLabelA,
					element.positionYLabelA, element.labelLinkB, element.positionXLabelB, element.positionYLabelB);
			}, 100);
		}
		this.setState({
			debug: !this.state.debug,
		});
	}

	public defineDataPoint(): SelectableValue<PointClass>[] {
		const { arrayPointClass } = this.props;
		let optionPointNull: SelectableValue<PointClass> = {label: 'No selected point'};
		let arrayOptionsPoint: SelectableValue<PointClass>[] = [];

		arrayOptionsPoint.push(optionPointNull);

		arrayPointClass.forEach(point => {
			let optionPoint: SelectableValue<PointClass> = {
				label: point.getLabel(),
				value: point,
			};
			arrayOptionsPoint.push(optionPoint);
		});

		return arrayOptionsPoint;
	}
	
	public defineDataRegion(): SelectableValue<EspaceCoordonneesClass>[] {
		const { arrayCoordinateSpace } = this.props;
		let optionRegionNull: SelectableValue<EspaceCoordonneesClass> = {label: 'No selected region'};
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
		id?: number, defineHowToGetCoordonate?: SelectableValue<string>, 
		orientationLink?: SelectableValue<string>, pointAPositionX?: string,
		pointAPositionY?: string, colorCoordinateA?: string, pointBPositionX?: string, 
		pointBPositionY?: string, colorCoordinateB?: string, pointIn?: SelectableValue<PointClass>, 
		pointOut?: SelectableValue<PointClass>, regionIn?: SelectableValue<EspaceCoordonneesClass>, 
		colorRegionIn?: string, regionOut?: SelectableValue<EspaceCoordonneesClass>, 
		colorRegionOut?: string, labelLinkA?: string, positionXLabelA?: string, positionYLabelA?: string, 
		labelLinkB?: string, positionXLabelB?: string, positionYLabelB?: string) => {

		const num: number = id || this.state.index;
		const finalArray: InputSelectableClass[] = createInputsLink(num, this.defineDataPoint(), this.defineDataRegion());

		this.setState({
			arrayLinkClass: this.state.arrayLinkClass.concat(new LinkClass(num, defineHowToGetCoordonate || {},
			orientationLink || {}, pointAPositionX || '0', pointAPositionY || '0', colorCoordinateA || '#5794F2',
			pointBPositionX || '0', pointBPositionY || '0', colorCoordinateB || '#5794F2',
			pointIn || {}, pointOut || {}, regionIn || {}, colorRegionIn || '#5794F2',
			regionOut || {}, colorRegionOut || '#5794F2', labelLinkA || '', positionXLabelA || '0',
			positionYLabelA || '0', labelLinkB || '', positionXLabelB || '0', positionYLabelB || '0' )),

			arrayInput: this.state.arrayInput.concat([
				new ArrayInputSelectableClass(num, finalArray),
			]),
			index: (id || this.state.index) + 1,
		});
	}

	/**
	 * dsgs
	 */
	public addTestInput = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		this.addInput(this.state.index);
	}

	/**
	 * Delete array coordinate in state.arrayLinkClass
	 * @param {number} id id of object element to delete
	 */
	public deleteArrayLinkCLass(id: number): void {
		const newLinkClass: LinkClass[] = this.state.arrayLinkClass
			.filter((value: LinkClass) =>
				value.getId() !== id,
			);
		this.setState({
			arrayLinkClass: newLinkClass,
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
						this.deleteArrayLinkCLass(parseInt(id, 10));
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
		const copyOfarrayLinkClass: LinkClass[] = this.state.arrayLinkClass.slice();
		for (const line of copyOfarrayLinkClass) {
			if (line.getId() === index) {
				copyOfarrayLinkClass[i] = editGoodParameterLink(name, copyOfarrayLinkClass[i], currentTarget, {});
				break;
			}
			i++;
		}
		this.setState({
			arrayLinkClass: copyOfarrayLinkClass,
		});
		this.callBack();
	}


	/**
	 * Get value of input with state.arrayLinkClass
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
		for (const line of this.state.arrayLinkClass) {
			if (line.getId() === id) {
				idx = index;
				break;
			}
			++index;
		}
		if (idx === -1) {
			return value;
		}

		if 	(	name.startsWith('getCoordinate') || name.startsWith('pointIn') || 
				name.startsWith('pointOut') || name.startsWith('regionIn') || 
				name.startsWith('regionOut') || name.startsWith('orientationLink')
			) {

			if (name.startsWith('getCoordinate')) {
				valueSelect = this.state.arrayLinkClass[idx].getDefineHowToGetCoordonate();
			} else if (name.startsWith('pointIn')) {
				valueSelect = this.state.arrayLinkClass[idx].getPointIn();
			} else if (name.startsWith('pointOut')) {
				valueSelect = this.state.arrayLinkClass[idx].getPointOut();
			} else if (name.startsWith('regionIn')) {
				valueSelect = this.state.arrayLinkClass[idx].getRegionIn();
			} else if (name.startsWith('regionOut')) {
				valueSelect = this.state.arrayLinkClass[idx].getRegionOut();
			} else if (name.startsWith('orientationLink')) {
				valueSelect = this.state.arrayLinkClass[idx].getOrientationLink();
			}

			return valueSelect;

		} else {

			if (name.startsWith('pointAX')) {
				value = this.state.arrayLinkClass[idx].getPointAPositionX();
			} else if (name.startsWith('pointAY')) {
				value = this.state.arrayLinkClass[idx].getPointAPositionY();
			} else if (name.startsWith('pointBX')) {
				value = this.state.arrayLinkClass[idx].getPointBPositionX();
			} else if (name.startsWith('pointBY')) {
				value = this.state.arrayLinkClass[idx].getPointBPositionY();
			} else if (name.startsWith('colorCoordinateA')) {
				value = this.state.arrayLinkClass[idx].getColorCoordinateA();
			} else if (name.startsWith('colorCoordinateB')) {
				value = this.state.arrayLinkClass[idx].getColorCoordinateB();
			} else if (name.startsWith('colorRegionIn')) {
				value = this.state.arrayLinkClass[idx].getColorRegionIn();
			} else if (name.startsWith('colorRegionOut')) {
				value = this.state.arrayLinkClass[idx].getColorRegionOut();
			} else if (name.startsWith('labelLinkA')) {
				value = this.state.arrayLinkClass[idx].getLabelLinkA();
			} else if (name.startsWith('labelLinkB')) {
				value = this.state.arrayLinkClass[idx].getLabelLinkB();
			} else if (name.startsWith('positionXLabelLinkA')) {
				value = this.state.arrayLinkClass[idx].getPositionXLabelA();
			} else if (name.startsWith('positionYLabelLinkA')) {
				value = this.state.arrayLinkClass[idx].getPositionYLabelA();
			} else if (name.startsWith('positionXLabelLinkB')) {
				value = this.state.arrayLinkClass[idx].getPositionXLabelB();
			} else if (name.startsWith('positionYLabelLinkB')) {
				value = this.state.arrayLinkClass[idx].getPositionYLabelB();
			}

			return value;

		}
	}

	/**
	 * create dynamic input
	 */
	public displayListInputsLink(): JSX.Element {

		const { arrayInput } = this.state;
		let finalItem: JSX.Element[] = [];
		for (const line of arrayInput) {
			const mapItems = line.getUneClassInput()
				.map((obj: InputSelectableClass) =>
					(obj.getInputType() === 'text') ?
						<InputTextLink
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
							defineHowToGetCoordinate={this.getGoodValue(line.getId(), 'getCoordinate').value}
						/>

						: (obj.getInputType() === 'select' ?
							<InputSelectLink
								key={obj.getId()}
								_onChange={(value: SelectableValue<string>, name: string, index: number) => {

									//console.log(value)
									let i: number;
									i = 0;
									const copyOfarrayLinkClass: LinkClass[] = this.state.arrayLinkClass.slice();

									for (const line of copyOfarrayLinkClass) {
										if (line.getId() === index) {
											copyOfarrayLinkClass[i] = editGoodParameterLink(name, copyOfarrayLinkClass[i],
												value.value || '', value || {});
											break;
										}
										i++;
									}

									this.setState({
										arrayLinkClass: copyOfarrayLinkClass,
									});

									this.callBack();
								}}
								name={obj.getName()}
								index={line.getId()}
								data={obj.getOptionValues()}
								defaultValue={this.getGoodValue(line.getId(), obj.getName())}
								defineHowToGetCoordinate={this.getGoodValue(line.getId(), 'getCoordinate').value}
								label={obj.getLabel()}
								orientationLink={this.getGoodValue(line.getId(), 'orientationLink').value}
							/>

							: (obj.getInputType() === 'color' ?
							<InputSeriesColorPickerLink
								key={obj.getId()}
								keyInt={parseInt(obj.getId(), 10)}
								color={this.getGoodValue(line.getId(), obj.getName())}
								text={obj.getLabel()}
								width={10}
								_onChange={(keyInt: number, newColor: string) => {

									let i: number;
									i = 0;
									const copyOfArrayLien: LinkClass[] = this.state.arrayLinkClass.slice();
									for (const line of copyOfArrayLien) {
										if (line.getId() === keyInt) {
											copyOfArrayLien[i] = editGoodParameterLink(obj.getName(), copyOfArrayLien[i], newColor, {});
											break;
										}
										i++;
									}

									this.setState({
										arrayLinkClass: copyOfArrayLien,
									});

									this.callBack();

									obj.setDefaultValueColor(newColor);
								}}
								defineHowToGetCoordinate={this.getGoodValue(line.getId(), 'getCoordinate').value}
								name={obj.getName()}
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

	/**
	 * render()
	 */
	public render() {

		this.loadCoorParent();

		return (
			<div>
				{this.displayListInputsLink()}
				<div className='buttonAddCoor'>
					<Button onClick={this.addTestInput}>Add Link</Button>
				</div>
			</div>
		)
	}


}