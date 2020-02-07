import {isNumFloat} from '../isNumFloat';

/*
 * testing the isNumFloat function
 */
describe('testIsNumFloat', () => {

    // Standard cases
    test('integer string', () => {
        expect(isNumFloat('5')).toBe(1);
    });
    test('negative integer string', () => {
        expect(isNumFloat('-5')).toBe(1);
    });
    test('float string', () => {
        expect(isNumFloat('5.8')).toBe(1);
    });
    test('negative float string', () => {
        expect(isNumFloat('-5.8')).toBe(1);
    });
    test('very big integer string', () => {
        expect(isNumFloat('6486486438486464684864684864')).toBe(1);
    })
    test('very big float string', () => {
        expect(isNumFloat('6486486438486464684864684864.48468')).toBe(1);
    })
    test('very big exponential string', () => {
        expect(isNumFloat('6.4134134186415345e+35')).toBe(1);
    })

    // direct value cases
    test('integer value', () => {
        expect(isNumFloat(5)).toBe(1);
    });
    test('negative value value', () => {
        expect(isNumFloat(-5)).toBe(1);
    });
    test('float value', () => {
        expect(isNumFloat(5.8)).toBe(1);
    });
    test('negative float value', () => {
        expect(isNumFloat(-5.8)).toBe(1);
    });
    test('very big value', () => {
        expect(isNumFloat(558684684864684684135438434684.8)).toBe(1);
    });
    test('very high precision', () => {
        expect(isNumFloat(5.85868468486468468413543843468)).toBe(1);
    });
    test('Infinity', () => {
        expect(isNumFloat(Infinity)).toBe(1);
    });
    test('Infinity', () => {
        expect(isNumFloat(-Infinity)).toBe(1);
    });

    // almost good values
    test('float inside string', () => {
        expect(isNumFloat('a5.8a')).toBe(0);
    });
    test('integer inside string', () => {
        expect(isNumFloat('a5a')).toBe(0);
    });
    test('float at end string', () => {
        expect(isNumFloat('a5.8')).toBe(0);
    });
    test('integer at end string', () => {
        expect(isNumFloat('a5')).toBe(0);
    });
    test('float at start string', () => {
        expect(isNumFloat('5.8a')).toBe(0);
    });
    test('integer at start string', () => {
        expect(isNumFloat('5a')).toBe(0);
    });
    test('float but with a comma', () => {
        expect(isNumFloat('5,8')).toBe(0);
    });


    // unrelated values
    test('object parameter', () => {
        expect(isNumFloat({})).toBe(0);
    });
    test('array parameter', () => {
        expect(isNumFloat([])).toBe(0);
    });
    test('array parameter with an integer inside', () => {
        expect(isNumFloat([5])).toBe(0);
    });
    test('boolean true', () => {
        expect(isNumFloat(true)).toBe(0);
    });
    test('boolean false', () => {
        expect(isNumFloat(false)).toBe(0);
    });
    test('Date', () => {
        expect(isNumFloat(new Date('1995-12-17T03:24:00'))).toBe(0);
    });
    test('null', () => {
        expect(isNumFloat(null)).toBe(0);
    });
    test('undefined', () => {
        expect(isNumFloat(undefined)).toBe(0);
    });
});