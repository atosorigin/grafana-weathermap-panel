import { editGoodParameterOrientedLink} from '../editGoodParameterOrientedLink';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import { EspaceCoordonneesClass } from 'Models/EspaceCoordonneesClass';

/*
 * testing the editGoodParameterOrientedLink function
 */
describe('test editGoodParameterOrientedLink', () => {
    let orientedLinkClass;
    let coordinates = [];
    
    beforeEach(() => {
        coordinates = [
            new EspaceCoordonneesClass(0, '-10', '10', '-10', '10', 'espace0'),
            new EspaceCoordonneesClass(1, '-20', '20', '-20', '20', 'espace0')
        ];

        orientedLinkClass = new OrientedLinkClass(
            5,
            {label: 'orientationLink', value: 'orientationLink'},
            '5',
            '10',
            '15',
            '20',
            '-5',
            '-10',
            'labelLink1',
            'labelLinkB',
            '1',
            '2',
            '3',
            '4',
            {label: 'coordinateSpaceA', value: coordinates[0]},
            {label: 'coordinateSpaceB', value: coordinates[0]}
        );
    });

    afterEach(() => {       
        orientedLinkClass = null;
        coordinates = [];
    });

    test('orientationLink', () => {
        editGoodParameterOrientedLink('orientationLink', orientedLinkClass, 'test-value-unused', {label: 'test-label', value: 'test-value'});
        expect(orientedLinkClass.getOrientationLink()).toStrictEqual({label: 'test-label', value: 'test-value'});
    });

    test('pointAX', () => {
        editGoodParameterOrientedLink('pointAX', orientedLinkClass, 'test-value', {label: 'test-label', value: 'test-value-unused'});
        expect(orientedLinkClass.getPointAPositionX()).toBe('test-value');
    });

    test('pointAY', () => {
        editGoodParameterOrientedLink('pointAY', orientedLinkClass, 'test-value', {label: 'test-label', value: 'test-value-unused'});
        expect(orientedLinkClass.getPointAPositionY()).toBe('test-value');
    });

    test('pointBX', () => {
        editGoodParameterOrientedLink('pointBX', orientedLinkClass, 'test-value', {label: 'test-label', value: 'test-value-unused'});
        expect(orientedLinkClass.getPointBPositionX()).toBe('test-value');
    });

    test('pointBY', () => {
        editGoodParameterOrientedLink('pointBY', orientedLinkClass, 'test-value', {label: 'test-label', value: 'test-value-unused'});
        expect(orientedLinkClass.getPointBPositionY()).toBe('test-value');
    });

    test('colorCoordinateA', () => {
        editGoodParameterOrientedLink('colorCoordinateA', orientedLinkClass, 'test-value', {label: 'test-label', value: 'test-value-unused'});
        expect(orientedLinkClass.getColorCoordinateA()).toBe('test-value');
    });

    test('colorCoordinateB', () => {
        editGoodParameterOrientedLink('colorCoordinateB', orientedLinkClass, 'test-value', {label: 'test-label', value: 'test-value-unused'});
        expect(orientedLinkClass.getColorCoordinateB()).toBe('test-value');
    });

    test('labelLinkA', () => {
        editGoodParameterOrientedLink('labelLinkA', orientedLinkClass, 'test-value', {label: 'test-label', value: 'test-value-unused'});
        expect(orientedLinkClass.getLabelLinkA()).toBe('test-value');
    });

    test('labelLinkB', () => {
        editGoodParameterOrientedLink('labelLinkB', orientedLinkClass, 'test-value', {label: 'test-label', value: 'test-value-unused'});
        expect(orientedLinkClass.getLabelLinkB()).toBe('test-value');
    });

    test('positionXLabelLinkA', () => {
        editGoodParameterOrientedLink('positionXLabelLinkA', orientedLinkClass, 'test-value', {label: 'test-label', value: 'test-value-unused'});
        expect(orientedLinkClass.getPositionXLabelA()).toBe('test-value');
    });

    test('positionYLabelLinkA', () => {
        editGoodParameterOrientedLink('positionYLabelLinkA', orientedLinkClass, 'test-value', {label: 'test-label', value: 'test-value-unused'});
        expect(orientedLinkClass.getPositionYLabelA()).toBe('test-value');
    });

    test('positionXLabelLinkB', () => {
        editGoodParameterOrientedLink('positionXLabelLinkB', orientedLinkClass, 'test-value', {label: 'test-label', value: 'test-value-unused'});
        expect(orientedLinkClass.getPositionXLabelB()).toBe('test-value');
    });

    test('positionYLabelLinkB', () => {
        editGoodParameterOrientedLink('positionYLabelLinkB', orientedLinkClass, 'test-value', {label: 'test-label', value: 'test-value-unused'});
        expect(orientedLinkClass.getPositionYLabelB()).toBe('test-value');
    });

    test('spaceCoordinateAssociatePointA', () => {
        editGoodParameterOrientedLink('spaceCoordinateAssociatePointA', orientedLinkClass, 'test-value-unused', {label: 'test-label', value: coordinates[1]});
        expect(orientedLinkClass.getCoordinateSpaceAssociatePointA()).toStrictEqual({label: 'test-label', value: coordinates[1]});
    });

    test('spaceCoordinateAssociatePointB', () => {
        editGoodParameterOrientedLink('spaceCoordinateAssociatePointB', orientedLinkClass, 'test-value-unused', {label: 'test-label', value: coordinates[1]});
        expect(orientedLinkClass.getCoordinateSpaceAssociatePointB()).toStrictEqual({label: 'test-label', value: coordinates[1]});
    });

});