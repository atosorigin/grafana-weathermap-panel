import { RegionClass, ICoord4D } from 'Models/RegionClass';
import { TextObject } from 'Models/TextObjectClass';
import { LinkURLClass } from 'Models/LinkURLClass';

/** init CoordinateSpaceExtendClass */
export const initRegionCoordinateSpace = (index: number): RegionClass => {
	const newId: number = index + 1;
	const initTextObject: TextObject = new TextObject('', '', '', false, 'rgba(255, 255, 255, 0)',
		'rgba(0, 0, 0, 1)', '', false, '', '', '',
		false, false, false, '', false, '');
	const linkURL: LinkURLClass = new LinkURLClass('', '', '');
	const coords: ICoord4D = {
		'xMin': '0',
		'xMax': '0',
		'yMin': '0',
		'yMax': '0',
	};
	const newCoordinate: RegionClass = new RegionClass(
		newId, linkURL, '', [], '', initTextObject,
		{ 'key': '', 'unit': '', 'format': '', 'keyValue': '', 'refId': '' }, [],
		false, false, false, '',
		[], coords, '');
	return newCoordinate;
};