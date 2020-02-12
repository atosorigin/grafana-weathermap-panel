import { SelectableValue } from '@grafana/data';
import { PointClass } from './PointClass';
import { CoordinateSpaceClass } from './CoordinateSpaceClass';


export class LinkClass {
	/**
	 * to do
	 */
	public id: number;

	/**
	 * Définit la manière dont on souhaite récupérer les coordonnées des extrémités (deux couples de coordonnées):
	 * 		1 - Par un couple de coordonnées saisie
	 * 		2 - A partir de deux identifiants de points définis dans l'onglet Point
	 * 		3 - A partir de l'identifiant Région
	 */
	public defineHowToGetCoordonate: SelectableValue<string>;

	/**
	 * to do
	 */
	public orientationLink: SelectableValue<string>;

	/**
	 * to do
	 */
	public pointAPositionX: string;

	/**
	 * to do
	 */
	public pointAPositionY: string;

	/**
	 * to do
	 */
	public colorCoordinateA: string;

	/**
	 * to do
	 */
	public pointBPositionX: string;

	/**
	 * to do
	 */
	public pointBPositionY: string;

	/**
	 * to do
	 */
	public colorCoordinateB: string;
	/**
	 * to do
	 */
	public pointIn: SelectableValue<PointClass>;

	/**
	 * to do
	 */
	public pointOut: SelectableValue<PointClass>;

	/**
	 * to do
	 */
	public regionIn: SelectableValue<CoordinateSpaceClass>;

	/**
	 * to do
	 */
	public colorRegionIn: string;

	/**
	 * to do
	 */
	public regionOut: SelectableValue<CoordinateSpaceClass>;

	/**
	 * to do
	 */
	public colorRegionOut: string;

	/**
	 * to do
	 */
	public labelLinkA: string;

	/**
	 * to do
	 */
	public positionXLabelA: string;

	/**
	 * to do
	 */
	public positionYLabelA: string;

	/**
	 * to do
	 */
	public labelLinkB: string;

	/**
	 * to do
	 */
	public positionXLabelB: string;

	/**
	 * to do
	 */
	public positionYLabelB: string;
	// /**
	//  * to do
	//  */
	// public typeOfWidthLink: boolean;

	// /**
	//  * to do
	//  */
	// public widthLink: string;


	constructor(
		id: number,
		defineHowToGetCoordonate: SelectableValue<string>,
		orientationLink: SelectableValue<string>,
		pointAPositionX: string,
		pointAPositionY: string,
		colorCoordinateA: string,
		pointBPositionX: string,
		pointBPositionY: string,
		colorCoordinateB: string,
		pointIn: SelectableValue<PointClass>,
		pointOut: SelectableValue<PointClass>,
		regionIn: SelectableValue<CoordinateSpaceClass>,
		colorRegionIn: string,
		regionOut: SelectableValue<CoordinateSpaceClass>,
		colorRegionOut: string,
		labelLinkA: string,
		positionXLabelA: string,
		positionYLabelA: string,
		labelLinkB: string,
		positionXLabelB: string,
		positionYLabelB: string
	) {
		this.id = id;
		this.defineHowToGetCoordonate = defineHowToGetCoordonate;
		this.orientationLink = orientationLink;
		this.pointAPositionX = pointAPositionX;
		this.pointAPositionY = pointAPositionY;
		this.colorCoordinateA = colorCoordinateA;
		this.pointBPositionX = pointBPositionX;
		this.pointBPositionY = pointBPositionY;
		this.colorCoordinateB = colorCoordinateB;
		this.pointIn = pointIn;
		this.pointOut = pointOut;
		this.regionIn = regionIn;
		this.colorRegionIn = colorRegionIn;
		this.regionOut = regionOut;
		this.colorRegionOut = colorRegionOut;
		this.labelLinkA = labelLinkA;
		this.positionXLabelA = positionXLabelA;
		this.positionYLabelA = positionYLabelA;
		this.labelLinkB = labelLinkB;
		this.positionXLabelB = positionXLabelB;
		this.positionYLabelB = positionYLabelB;
		// This.typeOfWidthLink = typeOfWidthLink;
		// this.widthLink = widthLink;
	}

	/**
	 * id de l'objet Lien
	 */
	public getId(): number {
		return this.id;
	}

	/**
	 * id de l'objet Lien
	 */
	public setId(id: number) {
		this.id = id;
	}

	/**
	 * Extrémité par couple de coordonnée - Position X du Point A
	 */
	public getPointAPositionX() {
		return this.pointAPositionX;
	}

	/**
	 * Extrémité par couple de coordonnée - Position X du Point A
	 * @param pointAPositionX to do
	 */
	public setPointAPositionX(pointAPositionX: string) {
		this.pointAPositionX = pointAPositionX;
	}

	/**
	 * Retourne la manière dont on veut récupérer les deux extrémités du lien
	 */
	public getDefineHowToGetCoordonate() {
		return this.defineHowToGetCoordonate;
	}

	/**
	 * Modifie la manière dont on veut récupérer les deux extrémités du lien
	 * @param defineHowToGetCoordonate
	 */
	public setDefineHowToGetCoordonate(defineHowToGetCoordonate: SelectableValue<string>) {
		this.defineHowToGetCoordonate = defineHowToGetCoordonate;
	}

	public getOrientationLink() {
		return this.orientationLink;
	}

	public setOrientationLink(orientationLink: SelectableValue<string>) {
		this.orientationLink = orientationLink;
	}

	/**
	 * Extrémité par couple de coordonnée - Position Y du Point A
	 */
	public getPointAPositionY() {
		return this.pointAPositionY;
	}

	/**
	 * Extrémité par couple de coordonnée - Position Y du Point A
	 * @param pointAPositionY
	 */
	public setPointAPositionY(pointAPositionY: string) {
		this.pointAPositionY = pointAPositionY;
	}

	/**
	 * retourne la couleur pour le lien de A vers B
	 */
	public getColorCoordinateA() {
		return this.colorCoordinateA;
	}

	/**
	 * modifie la couleur pour le lien de A vers B
	 * @param colorCoordinateAtrailing
	 */
	public setColorCoordinateA(colorCoordinateA: string) {
		this.colorCoordinateA = colorCoordinateA;
	}

	/**
	 * retourne la couleur pour le lien de B vers A
	 */
	public getColorCoordinateB() {
		return this.colorCoordinateB;
	}

	/**
	 * modifie la couleur pour le lien de B vers A
	 * @param colorCoordinateB
	 */
	public setColorCoordinateB(colorCoordinateB: string) {
		this.colorCoordinateB = colorCoordinateB;
	}

	/**
	 * Extrémité par couple de coordonnée - Position X du Point B
	 */
	public getPointBPositionX() {
		return this.pointBPositionX;
	}

	/**
	 * Extrémité par couple de coordonnée - Position X du Point B
	 * @param pointBPositionX
	 */
	public setPointBPositionX(pointBPositionX: string) {
		this.pointBPositionX = pointBPositionX;
	}

	/**
	 * Extrémité par couple de coordonnée - Position Y du Point B
	 */
	public getPointBPositionY() {
		return this.pointBPositionY;
	}

	/**
	 * Extrémité par couple de coordonnée - Position Y du Point B
	 * @param pointBPositionY
	 */
	public setPointBPositionY(pointBPositionY: string) {
		this.pointBPositionY = pointBPositionY;
	}

	public getPointIn() {
		return this.pointIn;
	}

	public setPointIn(pointIn: SelectableValue<PointClass>) {
		this.pointIn = pointIn;
	}

	public getPointOut() {
		return this.pointOut;
	}

	public setPointOut(pointOut: SelectableValue<PointClass>) {
		this.pointOut = pointOut;
	}

	public getRegionIn() {
		return this.regionIn;
	}

	public setRegionIn(regionIn: SelectableValue<CoordinateSpaceClass>) {
		this.regionIn = regionIn;
	}

	public getColorRegionIn() {
		return this.colorRegionIn;
	}

	public setColorRegionIn(colorRegionIn: string) {
		this.colorRegionIn = colorRegionIn;
	}

	public getRegionOut() {
		return this.regionOut;
	}

	public setRegionOut(regionOut: SelectableValue<CoordinateSpaceClass>) {
		this.regionOut = regionOut;
	}

	public getColorRegionOut() {
		return this.colorRegionOut;
	}

	public setColorRegionOut(colorRegionOut: string) {
		this.colorRegionOut = colorRegionOut;
	}

	public getLabelLinkA() {
		return this.labelLinkA;
	}

	public setLabelLinkA(labelLinkA: string) {
		this.labelLinkA = labelLinkA;
	}

	public getPositionXLabelA() {
		return this.positionXLabelA;
	}

	public setPositionXLabelA(positionXLabelA: string) {
		this.positionXLabelA = positionXLabelA;
	}

	public getPositionYLabelA() {
		return this.positionYLabelA;
	}

	public setPositionYLabelA(positionYLabelA: string) {
		this.positionYLabelA = positionYLabelA;
	}


	public getLabelLinkB() {
		return this.labelLinkB;
	}

	public setLabelLinkB(labelLinkB: string) {
		this.labelLinkB = labelLinkB;
	}

	public getPositionXLabelB() {
		return this.positionXLabelB;
	}

	public setPositionXLabelB(positionXLabelB: string) {
		this.positionXLabelB = positionXLabelB;
	}

	public getPositionYLabelB() {
		return this.positionYLabelB;
	}

	public setPositionYLabelB(positionYLabelB: string) {
		this.positionYLabelB = positionYLabelB;
	}
	// /**
	//  * Retourne le type de largeur du lien : fixe ou variable
	//  */
	// public getTypeOfWidthLink() {
	// 	return this.typeOfWidthLink;
	// }

	// /**
	//  * Modifie le type de largeur du lien : fixe ou variable
	//  * @param typeOfWidthLink
	//  */
	// public setTypeOfWidthLink(typeOfWidthLink: boolean) {
	// 	this.typeOfWidthLink = typeOfWidthLink;
	// }

	// /**
	//  * Retourne la largeur du lien
	//  */
	// public getWidthLink() {
	// 	return this.widthLink;
	// }

	// /**
	//  *
	//  * @param widthLink Modifie la largeur du lien
	//  */
	// public setWidthLink(widthLink: string) {
	// 	this.widthLink = widthLink;
	// }

}
