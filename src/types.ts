import { EspaceCoordonneesClass } from './Models/EspaceCoordonneesClass';
import { Seuil } from './Models/seuil';
import { ParametrageMetrique } from './Models/parametrageMetrique';
import { TextObject } from 'Models/TextObject';

/**
 * interface to save parametrageMetriquePrincipale
 */
export interface IParametrage {
	/**
	 * parametrage metric
	 */
	parametrageMetrique: ParametrageMetrique;
}

/**
 * interface to save texte settings (police, size, style)
 */
export interface ITexteSettings {
	/**
	 * police simple panel
	 */
	police: string;

	/**
	 * size simple panel
	 */
	taille: string;

	/**
	 * style simple panel
	 */
	style: string;
}

export interface IMetricSettings {
	/**
	 * fond is active (color)
	 */
	fondIsActive: boolean;
	/**
	 * contour is active
	 */
	contourIsActive: boolean;
	/**
	 * seuil for variable color
	 */
	seuil: Seuil[];
	/**
	 * color mode for parametresGeneriques
	 */
	colorMode: boolean;
}

/**
 * Stock the values between SimpleEditor and SimplePanel
 */
// tslint:disable-next-line:interface-name
export interface SimpleOptions extends IParametrage,
	ITexteSettings, IMetricSettings {
	/**
	 * Image de fond
	 */
	imageUrl: string;

	/**
	 * Espace de visualisation initial
	 */
	arrayEspaceVisualisationInitial: EspaceCoordonneesClass;

	/**
	 * Espace de coordonnees
	 */
	arrayEspaceCoordonnees: EspaceCoordonneesClass[];

	/** value TextObjects component */
	valueTextObject: TextObject;
}

export const defaults: SimpleOptions = {
	imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/be/Locator_Grid.png',
	arrayEspaceVisualisationInitial: new EspaceCoordonneesClass(0, '0', '0', '0', '0', ''),
	arrayEspaceCoordonnees: [],
	police: 'Helvetica',
	taille: '1em',
	style: 'normal',
	fondIsActive: true,
	contourIsActive: true,
	seuil: [],
	colorMode: true,
	parametrageMetrique: new ParametrageMetrique('', '', ''),
	valueTextObject: new TextObject('', '', '', 'rgb(0, 0, 0, 0)', 'black', '', '',
		'', '', false, '', '', '', false, false, false, '', false, ''),
};
