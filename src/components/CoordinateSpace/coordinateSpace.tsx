import React, { CSSProperties } from 'react';
import { ArrayInputClass } from 'Models/ArrayInputClass';
import { RegionClass } from 'Models/RegionClass';
import { InputClass } from 'Models/InputClass';
import InputButtonField from 'Functions/Input/inputButton';
import InputTextField from 'Functions/Input/inputText';
import { createInputCoor } from 'Functions/createInputCoor';
import { editGoodParameterExtend } from 'Functions/editGoodParameter';
import 'style/CoordinateSpace.css';
import { PanelEditorProps, SelectableValue, DataFrame } from '@grafana/data';
import { Button, Select, Alert, FormField } from '@grafana/ui';
import { SimpleOptions } from 'types';
import { TextObject } from 'Models/TextObjectClass';
import { LowerLimitClass } from 'Models/LowerLimitClass';
import ParametresGeneriques from 'components/Parametrage/parametresGeneriques';
import ManageLowerLimit from 'components/Parametrage/manageLowerLimit';
import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';
import { PointClass } from 'Models/PointClass';
import { LinkClass } from 'Models/LinkClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';

export declare type AlertVariant = 'success' | 'warning' | 'error' | 'info';

interface IProps extends PanelEditorProps<SimpleOptions> {
	/** if it's parent component is add then don't display delete button  */
	isAddCoordinate: boolean;
	/** coordinate to edit */
	coordinate: RegionClass;

	/**
	 * save data in parent
	 */
	callBackToParent: (id: number, newCoordinate?: RegionClass) => void;
}

interface IState {
	/**
	 * stock coordinates in array object for Parent Component
	 */
	arrayCoor: RegionClass;
	/**
	 * stock HTML input coordinates
	 */
	arrayInput: ArrayInputClass[];
	/** stock html form */
	htmlInput: JSX.Element;
	/** select aux query */
	selectQuery: Array<SelectableValue<DataFrame>>;
	/** select main query */
	selectQueryDefault: SelectableValue<DataFrame>;
	/** display alert when form error */
	hiddenAlert: boolean;
	/** variable for radio button */
	checkedRadio: boolean[];
	/** text to display alert */
	titleAlert: string;
	/** alert type */
	severityAlert: AlertVariant;
/** point class */
	arrayPoints: PointClass[];
/** link class */
	arrayLinks: LinkClass[];

	arrayOrientedLinks: OrientedLinkClass[];

	openCollapseOrientedLink: boolean;

	oldData: OrientedLinkClass[];
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
			hiddenAlert: true,
			checkedRadio: [true, false, false],
			titleAlert: 'Error: label is empty',
			severityAlert: 'error',
			arrayPoints: [],
			arrayLinks: [],
			arrayOrientedLinks: [],
			openCollapseOrientedLink: false,
			oldData: this.props.options.arrayOrientedLinks,
		};
	}

	/** update state with promise */
	public setStateAsyncArrayCoor = (state: {
		/** new espace coordinate */
		arrayCoor: RegionClass,
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
		const waitAlert: number = 3000;

		if (this.state.arrayCoor.label === '') {
			this.setState({
				severityAlert: 'error',
				titleAlert: 'Error: label is empty',
				hiddenAlert: false,
			});
			setTimeout(() => {
				this.setState({
					hiddenAlert: true,
				});
			}, waitAlert);
		} else {
			if (this.state.checkedRadio[0]) {
				this.props.callBackToParent(this.state.arrayCoor.id, this.state.arrayCoor);
			} else if (this.state.checkedRadio[1]) {
				if (this.props.isAddCoordinate) {

				} else {

				}
			}
			this.setState({
				severityAlert: 'success',
				titleAlert: 'Save',
				hiddenAlert: false,
			});
			if (!this.props.isAddCoordinate) {
				setTimeout(() => {
					this.setState({
						hiddenAlert: true,
					});
				}, waitAlert);
			}
		}
	}

	/** save data in parent */
	public callBackToOther = (
		followLink?: string,
		hoveringTooltipLink?: string,
		hoveringTooltipText?: string,
		textObj?: TextObject): void => {
		const oldCoor: RegionClass = this.state.arrayCoor;
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
		this.setState({
			arrayCoor: oldCoor,
		});
	}

	/**
	 * add inputs for a new coordiante
	 */
	public addInput = async (
		id: number
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
	public deleteOwnInput = (): void => {
		const del: boolean = confirm('Delete "' + this.state.arrayCoor.label + '" ?');
		// alert(del);
		if (del) {
			this.props.callBackToParent(this.state.arrayCoor.id, undefined);
		}
	}

	/**
	 * Use function if value input change
	 * @param {string} currentTarget new value of input
	 * @param {string} name name of input
	 * @param {number} index id of input
	 */
	public _handleChange(currentTarget: string, name: string, index: number): void {
		let tmp: RegionClass = this.state.arrayCoor;
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
			value = this.state.arrayCoor.coords.xMin;
		} else if (param.startsWith('positionXMax')) {
			value = this.state.arrayCoor.coords.xMax;
		} else if (param.startsWith('positionYMin')) {
			value = this.state.arrayCoor.coords.yMin;
		} else if (param.startsWith('positionYMax')) {
			value = this.state.arrayCoor.coords.yMax;
		} else if (param.startsWith('label')) {
			value = this.state.arrayCoor.label;
		} else if (param.startsWith('image')) {
			value = this.state.arrayCoor.img;
			// } else if (param.startsWith('interfaceJson')) {
			// 	value = this.state.arrayCoor.;
		} else if (param.startsWith('key')) {
			value = this.state.arrayCoor.mainMetric.key;
		} else if (param.startsWith('valueKey')) {
			value = this.state.arrayCoor.mainMetric.keyValue;
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
						(!this.props.isAddCoordinate) ? <InputButtonField
							key={obj.getId()}
							label={obj.getLabel()}
							value={obj.getValue() || ''}
							name={obj.getName()}
							required={obj.getRequired()}
							_handleChange={this.deleteOwnInput}
							id={obj.getId()} /> : <div></div>
				);
			const divKey: string = 'inputCoor' + line.getId().toString();
			const newInput: JSX.Element = <div key={'addCoordinate' + divKey} className='inputCoor'>{mapItems}</div>;
			finalItem = finalItem.concat(newInput);
		}
		this.setState({
			htmlInput: <ul>{finalItem}</ul>,
		});
	}

	/** edit value for select */
	public onChangeSelectQuery = (value: SelectableValue<DataFrame>) => {
		const newArrayCoor: RegionClass = this.state.arrayCoor;
		newArrayCoor.mainMetric.refId = value.value?.refId || '';
		newArrayCoor.mainMetric.expr = 'rate(go_memstats_alloc_bytes[5m])';
		this.setState({
			arrayCoor: newArrayCoor,
			selectQueryDefault: value,
		});
	}

	/**
	 * Call function in load component
	 */
	public componentDidMount = async () => {
		const element: RegionClass = this.props.coordinate;

		await this.addInput(element.id);
		this.fillInputEspaceCoor();
		if (this.props.data.series) {
			const valueSelect: Array<SelectableValue<DataFrame>> = [];

			for (const line of this.props.data.series) {
				valueSelect.push({ value: line, label: line.refId });
			}
			const newArrayCoor: RegionClass = this.state.arrayCoor;
			newArrayCoor.mainMetric.refId = valueSelect.length > 0 ?
				valueSelect[0].value?.refId || '' : '';
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
	public componentDidUpdate = async (prevProps: IProps, prevState: IState) => {
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
			const newArrayCoor: RegionClass = this.state.arrayCoor;
			newArrayCoor.mainMetric.refId = valueSelect.length > 0 ?
				valueSelect[0].value?.refId || '' : '';
			this.setState({
				arrayCoor: newArrayCoor,
				selectQuery: valueSelect,
				selectQueryDefault: valueSelect[0],
			});
		}
		if (prevProps.options.arrayOrientedLinks.length !== this.state.oldData.length) {
			//console.log('update that');
		}
	}

	/** event change value click radio button */
	public onChangeRadio = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const idElement: string = event.currentTarget.id;
		let resulFinal: boolean[] = this.state.checkedRadio;

		if (idElement === 'region') {
			resulFinal = [true, false, false];
		} else if (idElement === 'lien') {
			resulFinal = [false, true, false];
		} else if (idElement === 'point') {
			resulFinal = [false, false, true];
		}
		this.setState({
			checkedRadio: resulFinal,
		});

	}

	/** update lower limit */
	public callBackManageLowerLimit = (coordiante: CoordinateSpaceClass) => {
		const newValue: RegionClass = this.state.arrayCoor;

		newValue.colorMode = coordiante.colorMode;
		newValue.traceBorder = coordiante.traceBorder;
		newValue.traceBack = coordiante.traceBack;
		// newValue.lowerLimit = coordiante.lowerLimit;
		this.setState({
			arrayCoor: newValue,
		});
	}

	/** save lower limit data */
	public callBackLowerLimit = (lowerLimit: LowerLimitClass[]) => {
		const newValue: RegionClass = this.state.arrayCoor;

		newValue.lowerLimit = lowerLimit;
		this.setState({
			arrayCoor: newValue,
		});
	}

	public myCallBackArrayPoints = (dataFromChild: PointClass[]) => {
		this.setState({
			arrayPoints: dataFromChild,
		});

		this.props.onOptionsChange({
			...this.props.options,
			arrayPoints: dataFromChild,
		});
	}

	public myCallBackArrayLinks = (dataFromChild: LinkClass[]) => {
		this.setState({
			arrayLinks: dataFromChild,
		});

		this.props.onOptionsChange({
			...this.props.options,
			arrayLinks: dataFromChild,
		});
	}

	public myCallBackArrayOrientedLinks = (dataFromChild: OrientedLinkClass[]) => {
		this.setState({
			arrayOrientedLinks: dataFromChild,
		});

		this.props.onOptionsChange({
			...this.props.options,
			arrayOrientedLinks: dataFromChild,
		});
	}

	public onToggleOrientedLink = (isOpen: boolean) => {
		this.setState({
			openCollapseOrientedLink: isOpen,
		});
	}

	/**
	 * render
	 */
	public render() {
		const styleAlert = {
			position: 'fixed',
			bottom: '5%',
			right: '5%',
			zIndex: 9999,
		} as CSSProperties;

		return (
			<div>
				<div style={styleAlert} hidden={this.state.hiddenAlert}>
					<Alert title={this.state.titleAlert} severity={this.state.severityAlert} />
				</div>
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
					<br />
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
				<div>
					<ManageLowerLimit
						coordinate={this.state.arrayCoor}
						callBack={this.callBackManageLowerLimit}
						lowerLimitCallBack={this.callBackLowerLimit} />
				</div>
				<br />

				{/* <div className='choiceCateg'>
					<div className='radio'>
						<label>
							<input type='radio' id='region' name='choiceCateg' value='region'
								onChange={this.onChangeRadio} checked={this.state.checkedRadio[0]} />
							Area
						</label>
					</div>
					<div className='radio'>
						<label>
							<input type='radio' id='lien' name='choiceCateg' value='lien'
								onChange={this.onChangeRadio} checked={this.state.checkedRadio[1]} />
							Link
						</label>
					</div>
					<div className='radio'>
						<label>
							<input type='radio' id='point' name='choiceCateg' value='point'
								onChange={this.onChangeRadio} checked={this.state.checkedRadio[2]} />
							Point
						</label>
					</div>
				</div> */}
				<br />
				{
					<div className='classRegion'>
						<FormField label='Image' labelWidth={10} inputWidth={20}
							type='text' value={this.state.arrayCoor.img} name='image'
							onChange={(event) => this._handleChange(event.currentTarget.value,
								'image', this.state.arrayCoor.id)} />
						<FormField label='X min' labelWidth={10} inputWidth={20}
							type='text' value={this.state.arrayCoor.coords.xMin} name='positionXMin'
							onChange={(event) => this._handleChange(event.currentTarget.value,
								'positionXMin', this.state.arrayCoor.id)} />
						<FormField label='X max' labelWidth={10} inputWidth={20}
							type='text' value={this.state.arrayCoor.coords.xMax} name='positionXMax'
							onChange={(event) => this._handleChange(event.currentTarget.value,
								'positionXMax', this.state.arrayCoor.id)} />
						<FormField label='Y min' labelWidth={10} inputWidth={20}
							type='text' value={this.state.arrayCoor.coords.yMin} name='positionYMin'
							onChange={(event) => this._handleChange(event.currentTarget.value,
								'positionYMin', this.state.arrayCoor.id)} />
						<FormField label='Y max' labelWidth={10} inputWidth={20}
							type='text' value={this.state.arrayCoor.coords.yMax} name='positionYMax'
							onChange={(event) => this._handleChange(event.currentTarget.value,
								'positionYMax', this.state.arrayCoor.id)} />
					</div>
				}

				{/* {
					this.state.checkedRadio[0] &&
					<div className='classRegion'>
						<FormField label='Picture' labelWidth={10} inputWidth={20}
							type='text' value={this.state.arrayCoor.img} name='picture'
							onChange={(event) => this._handleChange(event.currentTarget.value,
								'image', this.state.arrayCoor.id)} />
						<FormField label='X min' labelWidth={10} inputWidth={20}
							type='text' value={this.state.arrayCoor.coords.xMin} name='positionXMin'
							onChange={(event) => this._handleChange(event.currentTarget.value,
								'positionXMin', this.state.arrayCoor.id)} />
						<FormField label='X max' labelWidth={10} inputWidth={20}
							type='text' value={this.state.arrayCoor.coords.xMax} name='positionXMax'
							onChange={(event) => this._handleChange(event.currentTarget.value,
								'positionXMax', this.state.arrayCoor.id)} />
						<FormField label='Y min' labelWidth={10} inputWidth={20}
							type='text' value={this.state.arrayCoor.coords.yMin} name='positionYMin'
							onChange={(event) => this._handleChange(event.currentTarget.value,
								'positionYMin', this.state.arrayCoor.id)} />
						<FormField label='Y max' labelWidth={10} inputWidth={20}
							type='text' value={this.state.arrayCoor.coords.yMax} name='positionYMax'
							onChange={(event) => this._handleChange(event.currentTarget.value,
								'positionYMax', this.state.arrayCoor.id)} />
					</div>

				}

				{
					this.state.checkedRadio[1] &&
					<div>
						<LinkForm arrayCoordinateSpace={this.props.options.arrayCoordinateSpace}
							oldArrayLinkClass={this.props.options.arrayLinks}
							arrayPointClass={this.props.options.arrayPoints}
							callBackFromParent={this.myCallBackArrayLinks.bind(this)}
						/>
					</div>
				}
				{
					this.state.checkedRadio[2] &&
					<PointForm oldArrayPointClass={this.props.options.arrayPoints}
						callBackFromParent={this.myCallBackArrayPoints.bind(this)}
						arrayCoordinateSpace={this.props.options.arrayCoordinateSpace}
						options={this.props.options}
						onOptionsChange={this.props.onOptionsChange}
						data={this.props.data}
					/>
				} */}
				<br />

				{/* <div>
					<Collapse label={'OrientedLink'}
						isOpen={this.state.openCollapseOrientedLink}
						onToggle={this.onToggleOrientedLink}>
						<OrientedLinkForm arrayPoint={this.props.options.arrayPoints}
							arrayCoordinateSpace={this.props.options.arrayCoordinateSpace}
							oldArrayOrientedLinkClass={this.props.options.arrayOrientedLinks}
							callBackFromParent={this.myCallBackArrayOrientedLinks.bind(this)}
							options={this.props.options}
							onOptionsChange={this.props.onOptionsChange}
							data={this.props.data}
						/>
					</Collapse>
				</div> */}
				<div className='buttonSave'>
					<Button onClick={() => this.callBack()}>Load</Button>
					{
						(!this.props.isAddCoordinate) &&
						<Button onClick={this.deleteOwnInput} variant='danger'>Delete</Button>
					}
				</div>
			</div>
		);
	}
}
export default CoordinateSpace;
