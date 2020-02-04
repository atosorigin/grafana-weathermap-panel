import { InputSelectableClass } from '../Models/inputSelectableClass';
import { SelectableValue } from '@grafana/data';
import { PointClass } from '../Models/PointClass';
import { EspaceCoordonneesClass } from 'Models/EspaceCoordonneesClass';

export const createInputsLink = (id: number, dataPoint: SelectableValue<PointClass>[],
	dataRegion: SelectableValue<EspaceCoordonneesClass>[]): InputSelectableClass[] => {
	const newFieldCoordinates: InputSelectableClass = new InputSelectableClass(id + 'GetCoordinate',
		'Coordinates type', 'getCoordinate' + id.toString(), 'select',
		[
            {label: 'Coordinate', value: 'coordinate'},
            {label: 'Point', value: 'point'},
            {label: 'Region', value: 'region'},
		], '', true, 'getCoordinate', undefined);
	const newFieldOrientationLink: InputSelectableClass = new InputSelectableClass(id + 'orientationLink',
		'Orientation', 'orientationLink' + id.toString(), 'select',
		[
            {label: 'A > B', value: 'AB'},
            {label: 'B > A', value: 'BA'},
            {label: 'Double', value: 'double'},
        ], '', true, 'Orientation', undefined);
	const newFieldPointAPositionX: InputSelectableClass = new InputSelectableClass(id + 'pointAX',
		'Point A - X', 'pointAX' + id.toString(), 'text',
		[], '', true, 'PointA-X', undefined);
	const newFieldPointAPositionY: InputSelectableClass = new InputSelectableClass(id + 'pointAY',
		'Point A - Y', 'pointAY' + id.toString(), 'text',
		[], '', true, 'PointA-Y', undefined);
	const newFieldColorCoordinateA: InputSelectableClass = new InputSelectableClass(id + 'colorCoordinateA',
		'Color A', 'colorCoordinateA' + id.toString(), 'color',
		[], '', true, '', undefined);
	const newFieldPointBPositionX: InputSelectableClass = new InputSelectableClass(id + 'pointBX',
		'Point B - X', 'pointBX' + id.toString(), 'text',
		[], '', true, 'PointB-X', undefined);
	const newFieldPointBPositionY: InputSelectableClass = new InputSelectableClass(id + 'pointBY',
		'Point B - Y', 'pointBY' + id.toString(),
		'text', [], '', true, 'PointB-Y', undefined);
	const newFieldColorCoordinateB: InputSelectableClass = new InputSelectableClass(id + 'colorCoordinateB',
		'Color B', 'colorCoordinateB' + id.toString(), 'color',
		[], '', true, '', undefined);
	const newFieldPointIn: InputSelectableClass = new InputSelectableClass(id + 'pointIn',
		'Point in', 'pointIn' + id.toString(),
		'select', dataPoint, '', true, 'Point in', undefined);
	const newFieldPointOut: InputSelectableClass = new InputSelectableClass(id + 'pointOut',
		'Point out', 'pointOut' + id.toString(),
		'select', dataPoint, '', true, 'Point out', undefined);
	const newFieldRegionIn: InputSelectableClass = new InputSelectableClass(id + 'regionIn',
		'Region in', 'regionIn' + id.toString(),
		'select', dataRegion, '', true, 'Region in', undefined);
	const newFieldColorRegionIn: InputSelectableClass = new InputSelectableClass(id + 'colorRegionIn',
		'Color A', 'colorRegionIn' + id.toString(), 'color',
		[], '', true, '', undefined);
	const newFieldRegionOut: InputSelectableClass = new InputSelectableClass(id + 'regionOut',
		'Region out', 'regionOut' + id.toString(),
		'select', dataRegion, '', true, 'Region out', undefined);
	const newFieldColorRegionOut: InputSelectableClass = new InputSelectableClass(id + 'colorRegionOut',
		'Color B', 'colorRegionOut' + id.toString(), 'color',
		[], '', true, '', undefined);
	const newFieldLabelLinkA: InputSelectableClass = new InputSelectableClass(id + 'labelLinkA',
		'Label A', 'labelLinkA' + id.toString(), 'text',
		[], '', true, 'Label A', undefined);
	const newFieldLabelLinkAPositionX: InputSelectableClass = new InputSelectableClass(id + 'positionXLabelLinkA',
		'Label A - X', 'positionXLabelLinkA' + id.toString(), 'text',
		[], '', true, 'Label A - Position X', undefined);
	const newFieldLabelLinkAPositionY: InputSelectableClass = new InputSelectableClass(id + 'posiitonYLabelLinkA',
		'Label A - Y', 'positionYLabelLinkA' + id.toString(), 'text',
		[], '', true, 'Label A - Position Y', undefined);
	const newFieldLabelLinkB: InputSelectableClass = new InputSelectableClass(id + 'labelLinkB',
	'Label B', 'labelLinkB' + id.toString(), 'text',
	[], '', true, 'Label B', undefined);
	const newFieldLabelLinkBPositionX: InputSelectableClass = new InputSelectableClass(id + 'positionXLabelLinkB',
		'Label B - X', 'positionXLabelLinkB' + id.toString(), 'text',
		[], '', true, 'Label B - Position X', undefined);
	const newFieldLabelLinkBPositionY: InputSelectableClass = new InputSelectableClass(id + 'posiitonYLabelLinkB',
		'Label B - Y', 'positionYLabelLinkB' + id.toString(), 'text',
		[], '', true, 'Label B - Position Y', undefined);
	const newFieldButton: InputSelectableClass = new InputSelectableClass(id + 'delete',
	'Delete', 'delete' + id.toString(),
	'button', [], '', false, undefined, 'delete');

	const finalArray: InputSelectableClass[] = [
		newFieldCoordinates,
		newFieldOrientationLink,
		newFieldPointAPositionX,
		newFieldPointAPositionY,
		newFieldPointIn,
		newFieldRegionIn,
		newFieldLabelLinkA,
		newFieldLabelLinkAPositionX,
		newFieldLabelLinkAPositionY,
		newFieldColorCoordinateA,
		newFieldColorRegionIn,
		newFieldPointBPositionX,
		newFieldPointBPositionY,
		newFieldPointOut,
		newFieldRegionOut,
		newFieldLabelLinkB,
		newFieldLabelLinkBPositionX,
		newFieldLabelLinkBPositionY,
		newFieldColorCoordinateB,
		newFieldColorRegionOut,
		newFieldButton,
	];
	return finalArray;
};