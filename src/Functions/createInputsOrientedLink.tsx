import { InputSelectableClass } from '../Models/inputSelectableClass';
import { SelectableValue } from '@grafana/data';
import { EspaceCoordonneesClass } from 'Models/EspaceCoordonneesClass';


export const createInputsOrientedLink = (id: number, dataSpaceCoordinate: SelectableValue<EspaceCoordonneesClass>[]): InputSelectableClass[] => {

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
	const newFieldLabelLinkA: InputSelectableClass = new InputSelectableClass(id + 'labelLinkA',
		'Label A', 'labelLinkA' + id.toString(), 'text',
		[], '', true, 'Label A', undefined);
	const newFieldLabelLinkB: InputSelectableClass = new InputSelectableClass(id + 'labelLinkB',
		'Label B', 'labelLinkB' + id.toString(), 'text',
		[], '', true, 'Label B', undefined);
	const newFieldLabelLinkAPositionX: InputSelectableClass = new InputSelectableClass(id + 'positionXLabelLinkA',
		'Label A - X', 'positionXLabelLinkA' + id.toString(), 'text',
		[], '', true, 'Label A - Position X', undefined);
	const newFieldLabelLinkAPositionY: InputSelectableClass = new InputSelectableClass(id + 'posiitonYLabelLinkA',
		'Label A - Y', 'positionYLabelLinkA' + id.toString(), 'text',
		[], '', true, 'Label A - Position Y', undefined);
	const newFieldLabelLinkBPositionX: InputSelectableClass = new InputSelectableClass(id + 'positionXLabelLinkB',
		'Label B - X', 'positionXLabelLinkB' + id.toString(), 'text',
		[], '', true, 'Label B - Position X', undefined);
	const newFieldLabelLinkBPositionY: InputSelectableClass = new InputSelectableClass(id + 'posiitonYLabelLinkB',
		'Label B - Y', 'positionYLabelLinkB' + id.toString(), 'text',
		[], '', true, 'Label B - Position Y', undefined);
	const newFieldSpaceCoordinateAssociatePointA: InputSelectableClass = new InputSelectableClass(id + 'spaceCoordinateAssociatePointA',
		'Associate region A', 'spaceCoordinateAssociatePointA' + id.toString(), 'select',
		dataSpaceCoordinate, '', true, 'Associate region A', undefined);
	const newFieldSpaceCoordinateAssociatePointB: InputSelectableClass = new InputSelectableClass(id + 'spaceCoordinateAssociatePointB',
		'Associate region B', 'spaceCoordinateAssociatePointB' + id.toString(), 'select',
		dataSpaceCoordinate, '', true, 'Associate region A', undefined);
	const newFieldButton: InputSelectableClass = new InputSelectableClass(id + 'delete',
	'Delete', 'delete' + id.toString(),
	'button', [], '', false, undefined, 'delete');

	const finalArray: InputSelectableClass[] = [
		newFieldOrientationLink,
		newFieldSpaceCoordinateAssociatePointA,
		newFieldPointAPositionX,
		newFieldPointAPositionY,
		newFieldLabelLinkA,
		newFieldLabelLinkAPositionX,
		newFieldLabelLinkAPositionY,
		newFieldColorCoordinateA,
		newFieldSpaceCoordinateAssociatePointB,
		newFieldPointBPositionX,
		newFieldPointBPositionY,
		newFieldLabelLinkB,
		newFieldLabelLinkBPositionX,
		newFieldLabelLinkBPositionY,
		newFieldColorCoordinateB,
		newFieldButton,
	];
	return finalArray;
};