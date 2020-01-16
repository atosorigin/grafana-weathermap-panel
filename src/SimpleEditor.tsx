import { PanelEditorProps } from '@grafana/data';
import { FormField, Collapse } from '@grafana/ui';
import React from 'react';
import { SimpleOptions } from './types';
import _ from 'lodash';

import { EspaceCoordonneesClass } from 'Models/EspaceCoordonneesClass';

import EspaceCoordonnees from './EspaceCoordonnees/EspaceCoordonnees';
import RendutextDefault from './RenduTextDefault/renduTextDefault';
import EspaceVisualisationInitial from './EspaceVisualisationInitial/EspaceVisualisationInitial';
import ParametresGeneriques from './Parametrage/parametresGeneriques';
import TextObjects from './Parametrage/textObjects';

import './style/SimpleEditor.css';
import { Seuil } from 'Models/seuil';
import { ParametrageMetrique } from 'Models/parametrageMetrique';
import { TextObject } from 'Models/TextObject';
import ObjectVisibility from 'objectVisibility';

interface IProps extends PanelEditorProps<SimpleOptions> { }
interface IState {
	/** stock coordinates in array object */
	arrayEspaceCoordonnees: EspaceCoordonneesClass[];

	/** collapse */
	collapseDefaultText: boolean;

	/** collapse */
	collapseDisplay: boolean;

	/** collapse */
	collapseGenericSettings: boolean;

	/** collapse */
	collapseGenericSettingsBis: boolean;

	/** collapse */
	collapseInitialDisplay: boolean;

	/** collapse */
	collapseCoorSpace: boolean;

	/** collapse */
	collapseObjectVisibility: boolean;

}

/**
 * class SimpleEditor
 */
export class SimpleEditor extends React.PureComponent<PanelEditorProps<SimpleOptions>, IState, IProps> {

	constructor(props: IProps) {
		super(props);
		this.state = {
			arrayEspaceCoordonnees: this.props.options.arrayEspaceCoordonnees,
			collapseDefaultText: false,
			collapseDisplay: false,
			collapseGenericSettings: false,
			collapseInitialDisplay: false,
			collapseCoorSpace: false,
			collapseGenericSettingsBis: false,
			collapseObjectVisibility: true,
		};
	}

	/**
	 * Change background picture
	 */
	public onImageChanged = (event: {
		/**
		 * Get target element
		 */
		target: HTMLInputElement;
	}) => {
		this.props.onOptionsChange({ ...this.props.options, imageUrl: event.target.value });
	}

	/**
	 * Data from child (EspaceCoordonnees)
	 * @param {EspaceCoordonneesClass[]} dataFromChild array EspaceCoordonneesClass object
	 */
	public myCallbackEspaceCoordonnees = (dataFromChild: EspaceCoordonneesClass[]) => {
		this.setState({
			arrayEspaceCoordonnees: dataFromChild,
		});

		// Bug
		this.props.onOptionsChange({
			...this.props.options,
			arrayEspaceCoordonnees: dataFromChild,
		});
	}

	/**
	 * Data from child (EspaceVisualisationInitial)
	 */
	public myCallBackVisuelInitial = (dataFromChild: EspaceCoordonneesClass) => {
		this.props.onOptionsChange({
			...this.props.options,
			arrayEspaceVisualisationInitial: dataFromChild,
		});
	}

	/**
	 * edit default text
	 */
	public myCallBackDefaultText = (datafromChild: {
		/**
		 * new police
		 */
		police: string,
		/**
		 * new size
		 */
		taille: string,
		/**
		 * new style (italic, bold, ...)
		 */
		style: string,
	}) => {
		this.props.onOptionsChange({
			...this.props.options,
			police: datafromChild.police,
			taille: datafromChild.taille,
			style: datafromChild.style,
		});
	}

	/**
	 * gyuhjkjkhgf
	 */
	public callBackTextObject = (newValue: TextObject): void => {
		this.props.onOptionsChange({
			...this.props.options,
			valueTextObject: newValue,
		});
	}

	/**
	 * call back for parametresGeneriques
	 */
	public myCallBackGenericSettings = (
		pFondIsActive: boolean,
		pContourIsActive: boolean,
		pColorMode: boolean,
		pSeuil: Seuil[],
		parametresMetrique: ParametrageMetrique) => {
		const { onOptionsChange } = this.props;

		onOptionsChange({
			...this.props.options,
			fondIsActive: pFondIsActive,
			contourIsActive: pContourIsActive,
			colorMode: pColorMode,
			seuil: pSeuil,
			parametrageMetrique: parametresMetrique,
		});
	}

	/** edit collapse when click */
	public onToggleCollapseDefaultText = (isOpen: boolean): void => {
		this.setState({
			collapseDefaultText: isOpen,
		});
	}

	/** edit collapse when click */
	public onToggleDisplay = (isOpen: boolean): void => {
		this.setState({
			collapseDisplay: isOpen,
		});
	}

	/** edit collapse when click */
	public onToggleGenericSettings = (isOpen: boolean): void => {
		this.setState({
			collapseGenericSettings: isOpen,
		});
	}

	/** edit collapse when click */
	public onToggleInitialDisplay = (isOpen: boolean): void => {
		this.setState({
			collapseInitialDisplay: isOpen,
		});
	}

	/** edit collapse when click */
	public onToggleCoorSpace = (isOpen: boolean): void => {
		this.setState({
			collapseCoorSpace: isOpen,
		});
	}

	/** edit collapse when click */
	public onToggleGenericSettingsBis = (isOpen: boolean): void => {
		this.setState({
			collapseGenericSettingsBis: isOpen,
		});
	}

	/** edit collapse when click */
	public onToggleObjectVisibility = (isOpen: boolean): void => {
		this.setState({
			collapseObjectVisibility: isOpen,
		});
	}

	/**
	 * HTML code
	 */
	public render() {
		const { options } = this.props;
		const defaultStyle = {
			fontFamily: this.props.options.police,
			fontSize: this.props.options.taille,
			fontStyle: this.props.options.style !== 'bold' ? this.props.options.style : 'normal',
			fontWeight: this.props.options.style === 'bold' ? 'bold' : 'normal',
		} as React.CSSProperties;

		return (
			<div className='divSimpleEditor' style={defaultStyle} >
				<div className='espaceVisualisationInitital'>
					<Collapse isOpen={this.state.collapseDefaultText}
						label='Rendu de texte par défaut'
						onToggle={this.onToggleCollapseDefaultText}>

						<RendutextDefault
							police={options.police}
							taille={options.taille}
							style={options.style}
							callBackFromParent={this.myCallBackDefaultText.bind(this)}
						/>

					</Collapse>
				</div>

				<div className='espaceVisualisationInitital'>
					<Collapse isOpen={this.state.collapseDisplay}
						label='Affichage'
						onToggle={this.onToggleDisplay}>

						<div className='espaceVisualisationInitital'>
							<FormField label='URL de l&#39;image'
								labelWidth={10}
								inputWidth={30}
								type='text'
								onChange={this.onImageChanged}
								value={options.imageUrl || ''} />
						</div>

					</Collapse>

					<div className='espaceVisualisationInitial'>
						<Collapse isOpen={this.state.collapseGenericSettings}
							label='Parametres Generiques'
							onToggle={this.onToggleGenericSettings}>

							<ParametresGeneriques
								callBackFromParent={this.myCallBackGenericSettings.bind(this)}
								fondIsActive={options.fondIsActive}
								contourIsActive={options.contourIsActive}
								colorMode={options.colorMode}
								seuil={options.seuil}
								parametrageMetrique={options.parametrageMetrique}
							/>

						</Collapse>
					</div>

					<div className='espaceVisualisationInitial'>
						<Collapse isOpen={this.state.collapseGenericSettingsBis}
							label='Parametres Generiques bis'
							onToggle={this.onToggleGenericSettingsBis}>

							<TextObjects lastValue={this.props.options.valueTextObject}
								callBackFromParent={this.callBackTextObject.bind(this)} />

						</Collapse>
					</div>

					<div className='espaceVisualisationInitital'>
						<Collapse isOpen={this.state.collapseInitialDisplay}
							label='Espace de visualisation initial'
							onToggle={this.onToggleInitialDisplay}>

							<EspaceVisualisationInitial
								callBackFromParent={this.myCallBackVisuelInitial.bind(this)}
								arrayEspaceVisualisationInitial={this.props.options.arrayEspaceVisualisationInitial} />

						</Collapse>
					</div>

					<div className='espaceVisualisationInitital'>
						<Collapse isOpen={this.state.collapseCoorSpace}
							label='Espace de coordonnées'
							onToggle={this.onToggleCoorSpace}>

							<EspaceCoordonnees
								callbackFromParent={this.myCallbackEspaceCoordonnees.bind(this)}
								arrayEspaceCoordonnees={this.state.arrayEspaceCoordonnees} />

						</Collapse>
					</div>

					<div className='espaceVisualisationInitital'>
						<Collapse isOpen={this.state.collapseObjectVisibility}
							label='Visibilité des objets'
							onToggle={this.onToggleObjectVisibility}>

							<ObjectVisibility />

						</Collapse>
					</div>
				</div>
			</div >
		);
	}
}
