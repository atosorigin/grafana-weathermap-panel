import { editGoodParameter, editGoodParameterExtend} from '../editGoodParameter';

import { EspaceCoordonneesClass } from 'Models/EspaceCoordonneesClass';
import { EspaceCoordonneesExtendClass } from 'Models/EspaceCoordonneesExtendClass';

/*
 * testing the editGoodParameter function
 */
describe('test editGoodParameter', () => {
    let coords;
    
    beforeEach(() => {
        coords = new EspaceCoordonneesClass(0, '-10', '10', '-10', '10', 'espace0');
    });

    afterEach(() => {       
        coords = null;
    });

    test('positionXMin', () => {
        editGoodParameter('positionXMin', coords, 'test-value');
        expect(coords.getXMin()).toBe('test-value');
    });

    test('positionXMax', () => {
        editGoodParameter('positionXMax', coords, 'test-value');
        expect(coords.getXMax()).toBe('test-value');
    });

    test('positionYMin', () => {
        editGoodParameter('positionYMin', coords, 'test-value');
        expect(coords.getYMin()).toBe('test-value');
    });

    test('positionYMax', () => {
        editGoodParameter('positionYMax', coords, 'test-value');
        expect(coords.getYMax()).toBe('test-value');
    });

    test('label', () => {
        editGoodParameter('label', coords, 'test-value');
        expect(coords.getLabel()).toBe('test-value');
    });
});

/*
 * testing the editGoodParameterExtend function
 */
describe('test editGoodParameterExtend', () => {
    let coordsExtend;
    
    beforeEach(() => {
        coordsExtend = new EspaceCoordonneesExtendClass(0, '-10', '10', '-10', '10', 'espace0', 'image.png', 'pinterf');
    });

    afterEach(() => {     
        coordsExtend = null;
    });

    test('positionXMin', () => {
        editGoodParameterExtend('positionXMin', coordsExtend, 'test-value');
        expect(coordsExtend.getXMin()).toBe('test-value');
    });

    test('positionXMax', () => {
        editGoodParameterExtend('positionXMax', coordsExtend, 'test-value');
        expect(coordsExtend.getXMax()).toBe('test-value');
    });

    test('positionYMin', () => {
        editGoodParameterExtend('positionYMin', coordsExtend, 'test-value');
        expect(coordsExtend.getYMin()).toBe('test-value');
    });

    test('positionYMax', () => {
        editGoodParameterExtend('positionYMax', coordsExtend, 'test-value');
        expect(coordsExtend.getYMax()).toBe('test-value');
    });

    test('label', () => {
        editGoodParameterExtend('label', coordsExtend, 'test-value');
        expect(coordsExtend.getLabel()).toBe('test-value');
    });

    test('image', () => {
        editGoodParameterExtend('image', coordsExtend, 'test-value');
        expect(coordsExtend.img).toBe('test-value');
    });

    test('interfaceJson', () => {
        editGoodParameterExtend('interfaceJson', coordsExtend, 'test-value');
        expect(coordsExtend.interfaceJson).toBe('test-value');
    });
});

