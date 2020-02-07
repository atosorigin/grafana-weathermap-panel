import { createInputsOrientedLink } from '../createInputsOrientedLink';
import { EspaceCoordonneesClass } from 'Models/EspaceCoordonneesClass';

/*
 * testing the createInputsOrientedLink function
 * - checking the number and id of created inputs
 */
describe('test createInputsOrientedLink', () => {
    let coordinates = [];
    
    beforeEach(() => {
        coordinates = [
            new EspaceCoordonneesClass(0, '-10', '10', '-10', '10', 'espace0'),
            new EspaceCoordonneesClass(1, '-20', '20', '-20', '20', 'espace0')
        ];
    });

    afterEach(() => {
        coordinates = [];
    });
    test('init', () => {
        const result = createInputsOrientedLink(5, coordinates);

        expect(result.length).toBe(16);
        expect(result[0].id).toBe('5orientationLink'); // newFieldOrientationLink
        expect(result[1].id).toBe('5spaceCoordinateAssociatePointA'); // newFieldSpaceCoordinateAssociatePointA
        expect(result[2].id).toBe('5pointAX'); // newFieldPointAPositionX
        expect(result[3].id).toBe('5pointAY'); // newFieldPointAPositionY
        expect(result[4].id).toBe('5labelLinkA'); // newFieldLabelLinkA
        expect(result[5].id).toBe('5positionXLabelLinkA'); // newFieldLabelLinkAPositionX
        expect(result[6].id).toBe('5posiitonYLabelLinkA'); // newFieldLabelLinkAPositionY
        expect(result[7].id).toBe('5colorCoordinateA'); // newFieldColorCoordinateA
        expect(result[8].id).toBe('5spaceCoordinateAssociatePointB'); // newFieldSpaceCoordinateAssociatePointB
        expect(result[9].id).toBe('5pointBX'); // newFieldPointBPositionX
        expect(result[10].id).toBe('5pointBY'); // newFieldPointBPositionY
        expect(result[11].id).toBe('5labelLinkB'); // newFieldLabelLinkB
        expect(result[12].id).toBe('5positionXLabelLinkB'); // newFieldLabelLinkBPositionX
        expect(result[13].id).toBe('5posiitonYLabelLinkB'); // newFieldLabelLinkBPositionY
        expect(result[14].id).toBe('5colorCoordinateB'); // newFieldColorCoordinateB
        expect(result[15].id).toBe('5delete'); // newFieldButton
    });
});
