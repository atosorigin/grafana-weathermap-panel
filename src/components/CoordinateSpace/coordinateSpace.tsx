import React from 'react';
import { ArrayInputClass } from 'Models/arrayInputClass';
import { EspaceCoordonneesExtendClass } from 'Models/EspaceCoordonneesExtendClass';
import { InputClass } from 'Models/inputClass';
import InputButtonField from 'Functions/Input/inputButton';
import InputTextField from 'Functions/Input/inputText';
import { createInputCoor } from 'Functions/createInputCoor';
import { editGoodParameterExtend } from 'Functions/editGoodParameter';

import 'style/EspaceCoordonnees.css';
import { PanelEditorProps } from '@grafana/data';
import { Button } from '@grafana/ui';
import { SimpleOptions } from 'types';

import ParametresGeneriques from 'components/Parametrage/parametresGeneriques';
import { TextObject } from 'Models/TextObject';

interface IProps extends PanelEditorProps<SimpleOptions> {
	/** coordinate to edit */
	coordinate: EspaceCoordonneesExtendClass;

	/**
	 * save data in parent
	 */
	callBackToParent: (id: number, newCoordinate?: EspaceCoordonneesExtendClass) => void;
}

interface IState {
	/**
	 * stock coordinates in array object for Parent Component
	 */
	arrayCoor: EspaceCoordonneesExtendClass;
	/**
	 * stock HTML input coordinates
	 */
	arrayInput: ArrayInputClass[];
	/** stock html form */
	htmlInput: JSX.Element;
}

/**
 * class pour définir des espaces de coodonnées
 */
class CoordinateSpace extends React.Component<IProps, IState>  {
	constructor(props: IProps) {
		super(props);
		this.state = {
			arrayCoor: this.props.coordinate,
			arrayInput: [],
			htmlInput: <div></div>,
		};
	}

	/** update state with promise */
	public setStateAsyncArrayCoor = (state: {
		/** new espace coordinate */
		arrayCoor: EspaceCoordonneesExtendClass,
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
	public callBack = () => {
		this.props.callBackToParent(this.state.arrayCoor.id, this.state.arrayCoor);
	}

/** save data in parent */
	public callBackToOther = (
		followLink?: string,
		hoveringTooltipLink?: string,
		hoveringTooltipText?: string,
		textObj?: TextObject) => {
		const oldCoor: EspaceCoordonneesExtendClass = this.state.arrayCoor;
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
	public _handleChange(currentTarget: string, name: string, index: number) {
		let tmp: EspaceCoordonneesExtendClass = this.state.arrayCoor;
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

	/**
	 * Call function in load component
	 */
	public componentDidMount = async () => {
		const element: EspaceCoordonneesExtendClass = this.props.coordinate;

		await this.addInput(element.id, element.xMin,
			element.xMax, element.yMin, element.yMax,
			element.label, element.img, element.interfaceJson, element.key, element.valueKey);
		this.fillInputEspaceCoor();

	}

	/**
	 * update props
	 */
	public componentDidUpdate = async (prevProps: IProps, prevState: IState) => {
		if (prevProps.coordinate !== this.props.coordinate) {
			await this.setStateAsyncArrayCoor({
				arrayCoor: this.props.coordinate,
			});
			this.fillInputEspaceCoor();
		}
	}

	/**
	 * render
	 */
	public render() {
		// const json = require('Localization/en.json');

		return (
			<div>
				{this.state.htmlInput /* {this.fillInputEspaceCoor()} */}
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
