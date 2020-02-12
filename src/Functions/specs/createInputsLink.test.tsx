import { createInputsLink } from '../createInputsLink';
import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';
import { PointClass } from 'Models/PointClass';

/*
 * testing the createInputsLink function
 * - checking the number and id of created inputs
 */
describe('test createInputsLink', () => {
    let coordinates = [];
    let points = [];
    
    beforeEach(() => {
        coordinates = [
            new CoordinateSpaceClass(0, '-10', '10', '-10', '10', 'espace0'),
            new CoordinateSpaceClass(1, '-20', '20', '-20', '20', 'espace0')
        ];
        points = [
            new PointClass(0,
                {label: 'coord0', value: coordinates[0]},
                {label: 'shape', value: 'A'},
                {label: 'shape', value: 'arrow'},
                {label: 'width', value: '1'},
                {label: 'height', size: '1'},
                'right',
                '5',
                '4',
                'point0',
                '6',
                '5',
                '#AABBCC'
            ),
            new PointClass(1,
                {label: 'coord1', value: coordinates[0]},
                {label: 'shape', value: 'A'},
                {label: 'shape', value: 'arrow'},
                {label: 'width', value: '1'},
                {label: 'height', size: '1'},
                'right',
                '4',
                '5',
                'point0',
                '5',
                '6',
                '#BBCCDD'
            )
        ]
    });

    afterEach(() => {
        coordinates = [];
        points = [];
    });

    test('init component', () => {
        const result = createInputsLink(0, points, coordinates);
        expect(result.length).toBe(21);

        expect(result[0].id).toBe('0GetCoordinate');
        expect(result[1].id).toBe('0orientationLink');
        expect(result[2].id).toBe('0pointAX');
        expect(result[3].id).toBe('0pointAY');
        expect(result[4].id).toBe('0pointIn');
        expect(result[5].id).toBe('0regionIn');
        expect(result[6].id).toBe('0labelLinkA');
        expect(result[7].id).toBe('0positionXLabelLinkA');
        expect(result[8].id).toBe('0posiitonYLabelLinkA');
        expect(result[9].id).toBe('0colorCoordinateA');
        expect(result[10].id).toBe('0colorRegionIn');
        expect(result[11].id).toBe('0pointBX');
        expect(result[12].id).toBe('0pointBY');
        expect(result[13].id).toBe('0pointOut');
        expect(result[14].id).toBe('0regionOut');
        expect(result[15].id).toBe('0labelLinkB');
        expect(result[16].id).toBe('0positionXLabelLinkB');
        expect(result[17].id).toBe('0posiitonYLabelLinkB');
        expect(result[18].id).toBe('0colorCoordinateB');
        expect(result[19].id).toBe('0colorRegionOut');
        expect(result[20].id).toBe('0delete');
    });
});
