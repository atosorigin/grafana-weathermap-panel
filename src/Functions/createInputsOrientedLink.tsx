import { InputSelectableClass } from 'Models/InputSelectableClass';
import { SelectableValue } from '@grafana/data';
import { RegionClass } from 'Models/RegionClass';
import { PointClass } from 'Models/PointClass';


export const createInputsOrientedLink = (
	id: number, dataCoordinateSpace: SelectableValue<RegionClass>[],
	dataPoint: SelectableValue<PointClass>[]): InputSelectableClass[] => {

	const newFieldOrientationLink: InputSelectableClass = new InputSelectableClass(id.toString() + 'orientationLink',
		'Orientation', 'orientationLink' + id.toString(), 'select',
		[
			{ label: 'Unidirectional', value: 'AB' },
			{ label: 'Bidirectional', value: 'double' },
		], '', true, 'Orientation', undefined);
	const newFieldPointAPositionX: InputSelectableClass = new InputSelectableClass(id.toString() + 'pointAX',
		'Point A - X', 'pointAX' + id.toString(), 'text',
		[], '', true, 'PointA-X', undefined);
	const newFieldPointAPositionY: InputSelectableClass = new InputSelectableClass(id.toString() + 'pointAY',
		'Point A - Y', 'pointAY' + id.toString(), 'text',
		[], '', true, 'PointA-Y', undefined);
	// const newFieldColorCoordinateA: InputSelectableClass = new InputSelectableClass(id.toString() + 'colorCoordinateA',
	// 	'Color A', 'colorCoordinateA' + id.toString(), 'color',
	// 	[], '', true, '', undefined);
	const newFieldPointBPositionX: InputSelectableClass = new InputSelectableClass(id.toString() + 'pointBX',
		'Point B - X', 'pointBX' + id.toString(), 'text',
		[], '', true, 'PointB-X', undefined);
	const newFieldPointBPositionY: InputSelectableClass = new InputSelectableClass(id.toString() + 'pointBY',
		'Point B - Y', 'pointBY' + id.toString(),
		'text', [], '', true, 'PointB-Y', undefined);
	// const newFieldColorCoordinateB: InputSelectableClass = new InputSelectableClass(id.toString() + 'colorCoordinateB',
	// 	'Color B', 'colorCoordinateB' + id.toString(), 'color',
	// 	[], '', true, '', undefined);
	// const newFieldLabelLinkA: InputSelectableClass = new InputSelectableClass(id.toString() + 'labelLinkA',
	// 	'Label A', 'labelLinkA' + id.toString(), 'text',
	// 	[], '', true, 'Label A', undefined);
	// const newFieldLabelLinkB: InputSelectableClass = new InputSelectableClass(id.toString() + 'labelLinkB',
	// 	'Label B', 'labelLinkB' + id.toString(), 'text',
	// 	[], '', true, 'Label B', undefined);
	// const newFieldLabelLinkAPositionX: InputSelectableClass = new InputSelectableClass(id.toString() + 'positionXLabelLinkA',
	// 	'Label A - X', 'positionXLabelLinkA' + id.toString(), 'text',
	// 	[], '', true, 'Label A - Position X', undefined);
	// const newFieldLabelLinkAPositionY: InputSelectableClass = new InputSelectableClass(id.toString() + 'posiitonYLabelLinkA',
	// 	'Label A - Y', 'positionYLabelLinkA' + id.toString(), 'text',
	// 	[], '', true, 'Label A - Position Y', undefined);
	// const newFieldLabelLinkBPositionX: InputSelectableClass = new InputSelectableClass(id.toString() + 'positionXLabelLinkB',
	// 	'Label B - X', 'positionXLabelLinkB' + id.toString(), 'text',
	// 	[], '', true, 'Label B - Position X', undefined);
	// const newFieldLabelLinkBPositionY: InputSelectableClass = new InputSelectableClass(id.toString() + 'posiitonYLabelLinkB',
	// 	'Label B - Y', 'positionYLabelLinkB' + id.toString(), 'text',
	// 	[], '', true, 'Label B - Position Y', undefined);
	// const newFieldRegionIn: InputSelectableClass = new InputSelectableClass(id.toString() + 'CoordinateSpaceAssociatePointA',
	// 	'AssociateRegionIn', 'CoordinateSpaceAssociatePointA' + id.toString(), 'select',
	// 	dataCoordinateSpace, '', true, 'Associate Region In', undefined);
	// const newFieldRegionOut: InputSelectableClass = new InputSelectableClass(id.toString() + 'CoordinateSpaceAssociatePointB',
	// 	'AssociateRegionOut', 'CoordinateSpaceAssociatePointB' + id.toString(), 'select',
	// 	dataCoordinateSpace, '', true, 'Associate Region Out', undefined);
	// const newFieldPointIn: InputSelectableClass = new InputSelectableClass(id.toString() + 'pointIn',
	// 	'AssociatePointIn', 'pointIn' + id.toString(), 'select',
	// 	dataPoint, '', true, 'Associate Point In', undefined);
	// const newFieldPointOut: InputSelectableClass = new InputSelectableClass(id.toString() + 'pointOut',
	// 	'AssociatePointOut', 'pointOut' + id.toString(), 'select',
	// 	dataPoint, '', true, 'Associate Point Out', undefined);
	const newFieldMainMetric: InputSelectableClass = new InputSelectableClass(id.toString() + 'refIdMainMetric',
		'Ref Id Main Metric', 'refIdMainMetric' + id.toString(), 'text',
		[], '', true, 'RefId Main Metric', undefined);
	const newFieldKeyMainMetric: InputSelectableClass = new InputSelectableClass(id.toString() + 'keyMainMetric',
		'Key Main Metric', 'keyMainMetric' + id.toString(), 'text',
		[], '', true, 'Key Main Metric', undefined);
	const newFieldKeyValueMainMetric: InputSelectableClass = new InputSelectableClass(id.toString() + 'keyValueMainMetric',
		'Key Value Main Metric', 'keyValueMainMetric' + id.toString(), 'text',
		[], '', true, 'Key Value Main Metric', undefined);
	const newFieldButton: InputSelectableClass = new InputSelectableClass(id.toString() + 'delete',
		'Delete', 'delete' + id.toString(),
		'button', [], '', false, undefined, 'delete');

	const finalArray: InputSelectableClass[] = [
		newFieldOrientationLink,
		//newFieldPointIn,
		//newFieldRegionIn,
		newFieldPointAPositionX,
		newFieldPointAPositionY,
		//newFieldLabelLinkA,
		//newFieldLabelLinkAPositionX,
		//newFieldLabelLinkAPositionY,
		//newFieldColorCoordinateA,
		//newFieldPointOut,
		//newFieldRegionOut,
		newFieldPointBPositionX,
		newFieldPointBPositionY,
		//newFieldLabelLinkB,
		//newFieldLabelLinkBPositionX,
		//newFieldLabelLinkBPositionY,
		//newFieldColorCoordinateB,
		newFieldMainMetric,
		newFieldKeyMainMetric,
		newFieldKeyValueMainMetric,
		newFieldButton,
	];
	return finalArray;
};
