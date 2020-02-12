import { SelectableValue } from '@grafana/data';
import { CoordinateSpaceClass } from './CoordinateSpaceClass';


/**
 * to do
 */
export class PointClass {

	/**
	 * to do
	 */
	public id: number;

	/**
	 * to do
	 */
	public coordinateSpace: SelectableValue<CoordinateSpaceClass>;

	/**
	 * to do
	 */
	public drawGraphicMarker: SelectableValue<string>;

	/**
	 * to do
	 */
	public shape: SelectableValue<string>;

	/**
	 * to do
	 */
	public sizeWidth: SelectableValue<string>;

	/**
	 * to do
	 */
	public sizeHeight: SelectableValue<string>;

	/**
	 * to do
	 */
	public rotateArrow: string;

	/**
	 * to do
	 */
	public positionShapeX: string;

	/**
	 * to do
	 */
	public positionShapeY: string;

	/**
	 * to do
	 */
	public label: string;

	/**
 * to do
 */
	public positionLabelX: string;

	/**
	 * to do
	 */
	public positionLabelY: string;

	/**
	 * to do
	 */
	public color: string;

	constructor(
		id: number,
		coordinateSpace: SelectableValue<CoordinateSpaceClass>,
		drawGraphicMarker: SelectableValue<string>,
		shape: SelectableValue<string>,
		sizeWidth: SelectableValue<string>,
		sizeHeight: SelectableValue<string>,
		rotateArrow: string,
		positionShapeX: string,
		positionShapeY: string,
		label: string,
		positionLabelX: string,
		positionLabelY: string,
		color: string
	) {
		this.id = id;
		this.coordinateSpace = coordinateSpace;
		this.drawGraphicMarker = drawGraphicMarker;
		this.shape = shape;
		this.sizeWidth = sizeWidth;
		this.sizeHeight = sizeHeight;
		this.rotateArrow = rotateArrow;
		this.positionShapeX = positionShapeX;
		this.positionShapeY = positionShapeY;
		this.label = label;
		this.positionLabelX = positionLabelX;
		this.positionLabelY = positionLabelY;
		this.color = color;
	}

	/**
	 * to do
	 */
	public getId(): number {
		return this.id;
	}

	/**
	 * to do
	 */
	public setId(id: number) {
		this.id = id;
	}

	/**
	 * to do
	 */
	public getCoordinateSpace(): SelectableValue<CoordinateSpaceClass> {
		return this.coordinateSpace;
	}

	/**
	 * to do
	 * @param coordinateSpace
	 */
	public setCoordinateSpace(coordinateSpace: SelectableValue<CoordinateSpaceClass>) {
		this.coordinateSpace = coordinateSpace;
	}

	/**
	 * to do
	 */
	public getDrawGraphicMarker(): SelectableValue<string> {
		return this.drawGraphicMarker;
	}

	/**
	 * to do
	 * @param drawGraphicMarker
	 */
	public setDrawGraphicMarker(drawGraphicMarker: SelectableValue<string>) {
		this.drawGraphicMarker = drawGraphicMarker;
	}

	/**
	 * to do
	 */
	public getShape(): SelectableValue<string> {
		return this.shape;
	}

	/**
	 * to do
	 * @param picture
	 */
	public setShape(shape: SelectableValue<string>) {
		this.shape = shape;
	}

	/**
     * to do
     */
	public getSizeWidth(): SelectableValue<string> {
		return this.sizeWidth;
	}

	/**
	 * to do
	 * @param picture
	 */
	public setSizeWidth(sizeWidth: SelectableValue<string>) {
		this.sizeWidth = sizeWidth;
	}

	/**
     * to do
     */
	public getSizeHeight(): SelectableValue<string> {
		return this.sizeHeight;
	}

	/**
	 * to do
	 * @param picture
	 */
	public setSizeHeight(sizeHeight: SelectableValue<string>) {
		this.sizeHeight = sizeHeight;
	}

	/**
     * to do
     */
	public getRotateArrow(): string {
		return this.rotateArrow;
	}

	/**
	 * to do
	 * @param picture
	 */
	public setRotateArrow(rotateArrow: string) {
		this.rotateArrow = rotateArrow;
	}


	/**
	 * to do
	 */
	public getPositionShapeX(): string {
		return this.positionShapeX;
	}

	/**
	 * to do
	 */
	public setPositionShapeX(positionShapeX: string) {
		this.positionShapeX = positionShapeX;
	}

	/**
	 * to do
	 */
	public getPositionShapeY(): string {
		return this.positionShapeY;
	}

	/**
	 * to do
	 */
	public setPositionShapeY(positionShapeY: string) {
		this.positionShapeY = positionShapeY;
	}

	/**
 * to do
 */
	public getPositionLabelX(): string {
		return this.positionLabelX;
	}

	/**
	 * to do
	 */
	public setPositionLabelX(positionLabelX: string) {
		this.positionLabelX = positionLabelX;
	}

	/**
	 * to do
	 */
	public getPositionLabelY(): string {
		return this.positionLabelY;
	}

	/**
	 * to do
	 */
	public setPositionLabelY(positionLabelY: string) {
		this.positionLabelY = positionLabelY;
	}

	/**
	 * to do
	 */
	public getLabel(): string {
		return this.label;
	}

	/**
	 * to do
	 */
	public setLabel(label: string) {
		this.label = label;
	}

	/**
	 * to do
	 */
	public getColor(): string {
		return this.color;
	}

	/**
	 * to do
	 * @param color
	 */
	public setColor(color: string) {
		this.color = color;
	}
}