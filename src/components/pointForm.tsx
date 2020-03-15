import React from 'react';
import { createInputsPoint } from 'Functions/createInputsPoint';
import InputTextPoint from 'Functions/Input/inputTextPoint';
import InputButtonField from 'Functions/Input/inputButton';
import { InputSelectableClass } from 'Models/InputSelectableClass';
import { ArrayInputSelectableClass } from 'Models/ArrayInputSelectableClass';
import { editGoodParameterPoint } from 'Functions/editGoodParameterPoint';
import { PointClass } from 'Models/PointClass';
import InputSelectPoint from 'Functions/Input/inputSelectPoint';
import { SelectableValue, PanelEditorProps } from '@grafana/data';
import InputSeriesColorPickerPoint from 'Functions/Input/inputSeriesColorPickerPoint';
import { Button, Collapse } from '@grafana/ui';
import { RegionClass } from 'Models/RegionClass';
import { TextObject } from 'Models/TextObjectClass';
import { LinkURLClass } from 'Models/LinkURLClass';
import { SimpleOptions } from 'types';

import ParametresGeneriques from 'components/Parametrage/parametresGeneriques';
import ManageLowerLimit from 'components/Parametrage/manageLowerLimit';
import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';
import { LowerLimitClass } from 'Models/LowerLimitClass';
import PositionParameter from '../components/Parametrage/positionParameters';
import { PositionParameterClass } from 'Models/PositionParameterClass';



/**
 * IProps
 */
interface IProps extends PanelEditorProps<SimpleOptions> {

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
	regionCoordinateSpace: RegionClass[];

}

/**
 * IState
 */
interface IState {
	oldArrayPointClass: PointClass[];
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

	/**
	 * Permet de savoir si la collapse est ouverte ou fermée
	 */
	listCollapsePoint: boolean[];

	openCollapsePoint: boolean;

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
			index: 1,
			listCollapsePoint: [],
			openCollapsePoint: false,
			oldArrayPointClass: [],
			debug: false,
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

		for (const element of this.props.options.arrayPoints) {
			setTimeout(() => {
				this.addInput(element.id, element.label, element.coordinateSpace, element.drawGraphicMarker, element.shape, element.sizeWidth,
					element.sizeHeight, element.rotateArrow, element.positionShapeX, element.positionShapeY,
					element.color, element.mainMetric.refId, element.mainMetric.key, element.mainMetric.keyValue,
					element.textObj, element.lowerLimit, element.positionParameter);
			}, 100);
		}

		this.setState((prevState: IState) => ({
			debug: !prevState.debug,
		}));
	}

	public defineDataCoordinateSpace(): SelectableValue<RegionClass>[] {
		const { regionCoordinateSpace } = this.props;
		const dataEspaceCoor: SelectableValue<RegionClass>[] = [];
		const optionNull: SelectableValue<RegionClass> = { label: 'Initial space' };

		// Par défault, on ajoute une option qui permet de ne pas sélectionner d'espace de coordonnées
		dataEspaceCoor.push(optionNull);

		// On ajoute aux options de choix les espace de coordonnées existant
		regionCoordinateSpace.forEach(coordinateSpace => {

			const option: SelectableValue<RegionClass> = {
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
		id?: number, label?: string, coordinateSpaceAssociate?: SelectableValue<RegionClass>,
		drawGraphicMarker?: SelectableValue<string>, shape?: SelectableValue<string>,
		sizeWidth?: SelectableValue<string>, sizeHeight?: SelectableValue<string>, rotateArrow?: string,
		positionShapeX?: string, positionShapeY?: string, color?: string, refIdMainMetric?: string,
		keyMainMetric?: string, keyValueMainMetric?: string, textObj?: TextObject, seuil?: LowerLimitClass[],
		positionParameter?: PositionParameterClass) => {

		const num: number = id || this.props.options.indexPoint + 1;
		const finalArray: InputSelectableClass[] = createInputsPoint(num, this.defineDataCoordinateSpace());
		const initTextObject: TextObject = textObj || new TextObject('', '', '', false, '', '', '',
			false, '', '', '',
			false, false, false, '', false, '');
		const parametrageMetric: LinkURLClass = new LinkURLClass('', '', '');
		const initPositionParameter: PositionParameterClass = positionParameter || new PositionParameterClass('0', '0', '0', '0', {}, {});

		this.setState((prevState: IState) => ({
			arrayPointClass: prevState.arrayPointClass.concat(new PointClass(
				num, parametrageMetric, '', seuil || [], label || '', initTextObject,
				{
					'key': keyMainMetric || '',
					'unit': '',
					'format': '',
					'keyValue': keyValueMainMetric || '',
					'refId': refIdMainMetric || '',
					'manageValue': 'avg',
				}, [], false, false, false, initPositionParameter,
				'point' + num.toString(), '', coordinateSpaceAssociate || {}, drawGraphicMarker || { label: 'Yes', value: 'true' },
				shape || { label: 'Circle', value: 'circle' }, sizeWidth || { label: 'Small', value: 'small' },
				sizeHeight || { label: 'Small', value: 'small' }, rotateArrow || '0', positionShapeX || '0', positionShapeY || '0',
				color || 'black', [], [], [], [])),

			arrayInput: prevState.arrayInput.concat([
				new ArrayInputSelectableClass(num, finalArray),
			]),
			//index: (id || this.state.index) + 1,
		}));

		this.props.onOptionsChange({
			...this.props.options,
			indexPoint: num,
		})

		//this.props.options.indexPoint + 1;

	}

	/**
	 * dsgs
	 */
	public addNewFormPoint = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		this.addInput();
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
		//this.generateInputsPoints();
	}

	/**
	 * Delete array input and value
	 * @param {event} event event click delete button
	 */
	// React.MouseEvent<HTMLInputElement, MouseEvent>
	public deleteOwnInput = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
			} else if (param.startsWith('color')) {
				value = this.state.arrayPointClass[idx].color;
			} else if (param.startsWith('refIdMainMetric')) {
				value = this.state.arrayPointClass[idx].mainMetric.refId || '';
			} else if (param.startsWith('keyMainMetric')) {
				value = this.state.arrayPointClass[idx].mainMetric.key || '';
			} else if (param.startsWith('keyValueMainMetric')) {
				value = this.state.arrayPointClass[idx].mainMetric.keyValue || '';
			}
			return value;
		}
	}

	/**
	 * to do
	 */
	public defineListCollapse = () => {

		this.props.options.listCollapsePoint = [];
		const arrayPoints = this.state.arrayPointClass;


		arrayPoints.forEach(point => {
			this.props.options.listCollapsePoint.push(false);
		});

	}

	public defineLabelCollapse(id: number): string {
		let label: string = this.getGoodValue(id, 'label');

		if (this.getGoodValue(id, 'label') === '') {
			label = 'Point ' + id.toString();
		}

		return label;
	}

	public callBackToOther = (
		followLink?: string,
		hoveringTooltipLink?: string,
		hoveringTooltipText?: string,
		textObj?: TextObject,
		id?: number): void => {
		const oldCoor: PointClass = this.state.arrayPointClass[id || 0];
		if (followLink) {
			oldCoor.linkURL.followLink = followLink;
		}
		if (hoveringTooltipLink) {
			oldCoor.linkURL.hoveringTooltipLink = hoveringTooltipLink;
		}
		if (hoveringTooltipText) {
			oldCoor.linkURL.hoveringTooltipText = hoveringTooltipText;
		}
		if (textObj) {
			oldCoor.textObj = textObj;
		}
		const arrayPoint: PointClass[] = this.props.options.arrayPoints;

		arrayPoint[id || 0] = oldCoor;

		this.props.onOptionsChange({
			...this.props.options,
			arrayPoints: arrayPoint,
		})
	}

	/** update lower limit */
	public callBackManageLowerLimit = (coordiante: CoordinateSpaceClass, id?: number) => {
		const newValue: PointClass = this.state.arrayPointClass[id || 0];
		newValue.colorMode = coordiante.colorMode;
		newValue.traceBorder = coordiante.traceBorder;
		newValue.traceBack = coordiante.traceBack;
		this.props.options.arrayPoints[id || 0] = newValue;
		this.callBack();

	}

	public callBackPositionParameter = (positionParameter: PositionParameterClass, id?: number) => {
		const pointToUpdate: PointClass = this.state.arrayPointClass[id || 0];
		pointToUpdate.positionParameter = positionParameter;
		this.props.options.arrayPoints[id || 0] = pointToUpdate;
		this.callBack();
	}

	/** save lower limit data */
	public callBackLowerLimit = (lowerLimit: LowerLimitClass[], id?: number) => {
		const pointToUpdate: PointClass = this.state.arrayPointClass[id || 0];
		pointToUpdate.lowerLimit = lowerLimit;
		this.props.options.arrayPoints[id || 0] = pointToUpdate;
		this.callBack();
	}

	/**
	 * create dynamic input
	 */
	public generateInputsPoints(): JSX.Element {

		let index: number = 0;
		this.defineListCollapse();
		const { arrayInput } = this.state;
		let item: JSX.Element = <div></div>;
		let itemButton: JSX.Element = <div></div>;
		let mapItems: JSX.Element[] = [];
		let finalItem: JSX.Element[] = [];

		for (const line of arrayInput) {
			mapItems = [];
			line.uneClassInput.forEach((obj: InputSelectableClass) => {

				if (obj.input_type === 'text') {

					item = <InputTextPoint
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

				} else if (obj.input_type === 'select') {

					item = <InputSelectPoint
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

				} else if (obj.input_type === 'color') {

					item = <InputSeriesColorPickerPoint
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

				} else {
					itemButton = <InputButtonField
						key={obj.id}
						label={obj.label}
						value={obj.value || ''}
						name={obj.name}
						required={obj.required}
						_handleChange={this.deleteOwnInput}
						id={obj.id}
						withLabel={false}
					/>;

					item = <div></div>;
				}
				mapItems.push(item);
			})


			const divKey: string = 'inputPoint' + line.id.toString();
			const newInput: JSX.Element =
				<div key={divKey}
					className='inputCoor'
					id={'point' + line.id.toString()}
					style={{
						display: 'flex',
						flexDirection: 'row',
						marginBottom: '5px',
					}}>

					<Collapse isOpen={this.state.listCollapsePoint[line.id - 1]}
						label={this.defineLabelCollapse(line.id)}
						onToggle={(isOpen) => {
							this.props.options.listCollapsePoint[line.id - 1] = isOpen;
							this.setState({
								listCollapsePoint: this.props.options.listCollapsePoint,
							});
						}}>
						<div>
							<ParametresGeneriques
								options={this.props.options}
								onOptionsChange={this.props.onOptionsChange}
								data={this.props.data}
								coordinateSpace={this.state.arrayPointClass[index]}
								callBackToParent={this.callBackToOther}
								id={index}
							/>
						</div>
						<div>
							<ManageLowerLimit
								coordinate={this.state.arrayPointClass[index]}
								callBack={this.callBackManageLowerLimit}
								lowerLimitCallBack={this.callBackLowerLimit}
								id={index} />
						</div>
						<div>
							<PositionParameter
								options={this.props.options}
								onOptionsChange={this.props.onOptionsChange}
								data={this.props.data}
								coordinateSpace={this.state.arrayPointClass[index]}
								callBackToParent={this.callBackPositionParameter}
								isPoint={true}
								isLink={false}
								isRegion={false}
								id={index} />
						</div>
						{mapItems}
					</Collapse>

					<div style={{ marginTop: '4px' }} >
						{itemButton}
					</div>
				</div>;
			finalItem = finalItem.concat(newInput);
			index++;
		}

		return (
			<div>
				{finalItem}
			</div>
		);
	}


	public onTogglePoint = (isOpen: boolean): void => {

		this.setState({
			openCollapsePoint: isOpen,
		});
	}

	public defineOptionsSelectPoint(): SelectableValue<string>[] {
		let options: SelectableValue<string>[] = [];
		const arrayPoints = this.props.options.arrayPoints;

		arrayPoints.forEach((point) => {
			options.push({ label: point.name })
		})


		return options;
	}

	/** update state when props uneCoor change */
	// public componentDidUpdate(prevProps: IProps) {
	// 	console.log('update')
	// 	if (prevProps.oldArrayPointClass.length !== this.props.oldArrayPointClass.length) {
	// 		this.loadCoorParent();
	// 		this.generateInputsPoints();
	// 	}
	// }

	public componentDidMount = () => {
		this.loadCoorParent();
	}

	// public componentWillReceiveProps() {
	// 	this.loadCoorParent();
	// 	this.generateInputsPoints();
	// }

	// public setStateAsync = (state: {
	// 	arrayInput: ArrayInputSelectableClass[],
	// 	arrayPointClass: PointClass[],
	// 	debug: boolean,
	// }) => {
	// 	return new Promise((resolve) => this.setState(state, resolve));
	// }

	/** update state when props uneCoor change */
	public componentDidUpdate = (prevProps: IProps) => {
		this.loadCoorParent();
		this.generateInputsPoints();
	}


	/** update state when props uneCoor change */
	//public componentWillUpdate(prevProps: IProps) {
	// if (prevProps.oldArrayPointClass.length !== this.props.oldArrayPointClass.length) {
	// 	this.loadCoorParent();
	// 	this.generateInputsPoints();
	// 	console.log(this.props.oldArrayPointClass);
	// }
	//}

	/**
	 * render()
*/
	public render() {

		return (
			<div>
				<div style={{ marginBottom: '5px' }}>
					<Button onClick={() => {
						this.setState({
							arrayInput: [],
							arrayPointClass: [],
							debug: false,
						});
						this.loadCoorParent();
						this.generateInputsPoints();
					}}>Load Points</Button>
				</div>
				{this.generateInputsPoints()}
				<div className='buttonAddCoor'>
					<Button onClick={this.addNewFormPoint}>Add point</Button>
				</div>
			</div>
		);
	}
}