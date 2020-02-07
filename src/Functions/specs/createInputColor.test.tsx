import {createInputCoor} from '../createInputCoor';

/*
 * testing the createInputCoor function
 * - checking the number and id of created inputs
 */
describe('test createInputCoor', () => {
    test('initial true', () => {
        const result = createInputCoor(5, true);

        expect(result.length).toBe(6);
        expect(result[0].id).toBe('5label');
        expect(result[1].id).toBe('5xMin');
        expect(result[2].id).toBe('5xMax');
        expect(result[3].id).toBe('5yMin');
        expect(result[4].id).toBe('5yMax');
        expect(result[5].id).toBe('5supprimer');
    });

    test('initial false', () => {
        const result = createInputCoor(5, false);

        expect(result.length).toBe(8);
        expect(result[0].id).toBe('5label');
        expect(result[1].id).toBe('5xMin');
        expect(result[2].id).toBe('5xMax');
        expect(result[3].id).toBe('5yMin');
        expect(result[4].id).toBe('5yMax');
        expect(result[5].id).toBe('5image');
        expect(result[6].id).toBe('5interfaceJson');
        expect(result[7].id).toBe('5supprimer');
    });
});
