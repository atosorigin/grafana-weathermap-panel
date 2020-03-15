import { editGoodParameterOrientedLink} from '../editGoodParameterOrientedLink';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import { CoordinateSpaceExtendClass } from 'Models/CoordinateSpaceExtendClass';
import { PointClass } from 'Models/PointClass';
import { TextObject } from 'Models/TextObjectClass';
import { ParametrageMetrique } from 'Models/SettingMetricClass';

/*
 * testing the editGoodParameterOrientedLink function
 */
describe('test editGoodParameterOrientedLink', () => {
    let orientedLinkClass;
    let coordinates = [];
    let points = [];
    
    beforeEach(() => {
        const initTextObject: TextObject = new TextObject('', '', '', '', '', '', '', '', '', false, '', '', '', false, false, false, '', false, '');
        const parametrageMetric = new ParametrageMetrique('', '', '');
        coordinates = [
            new CoordinateSpaceExtendClass(0, '-10', '10', '-10', '10', 'espace0', 'test.png', 'interface-test', initTextObject, parametrageMetric, '0-key', 'valkey0'),
            new CoordinateSpaceExtendClass(1, '-10', '10', '-10', '10', 'espace1', 'test.png', 'interface-test', initTextObject, parametrageMetric, '1-key', 'valkey1')
        ];points = [
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
            {label: 'pointIn', value: points[0]},
            {label: 'pointOut', value: points[0]},
            {label: 'regionIn', value: coordinates[0]},
            {label: 'regionOut', value: coordinates[0]}
        );
    });

    afterEach(() => {       
        orientedLinkClass = null;
        coordinates = [];
        points = [];
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

    test('CoordinateSpaceAssociatePointA', () => {
        editGoodParameterOrientedLink('CoordinateSpaceAssociatePointA', orientedLinkClass, 'test-value-unused', {label: 'test-label', value: coordinates[1]});
        expect(orientedLinkClass.getRegionIn()).toStrictEqual({label: 'test-label', value: coordinates[1]});
    });

    test('CoordinateSpaceAssociatePointB', () => {
        editGoodParameterOrientedLink('CoordinateSpaceAssociatePointB', orientedLinkClass, 'test-value-unused', {label: 'test-label', value: coordinates[1]});
        expect(orientedLinkClass.getRegionOut()).toStrictEqual({label: 'test-label', value: coordinates[1]});
    });

    test('pointIn', () => {
        editGoodParameterOrientedLink('pointIn', orientedLinkClass, 'test-value-unused', {label: 'test-label', value: points[1]});
        expect(orientedLinkClass.getPointIn()).toStrictEqual({label: 'test-label', value: points[1]});
    });

    test('pointOut', () => {
        editGoodParameterOrientedLink('pointOut', orientedLinkClass, 'test-value-unused', {label: 'test-label', value: points[1]});
        expect(orientedLinkClass.getPointOut()).toStrictEqual({label: 'test-label', value: points[1]});
    });

});