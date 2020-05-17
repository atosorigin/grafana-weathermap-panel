import { isNumFloat } from '../isNumFloat';

describe('waiting test', () => {
  test('to be pass', done => {
    setTimeout(() => {
      done();
    });
  });
});

// /*
//  * testing the isNumFloat function
//  */
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
    expect(isNumFloat('-5.8')).toBe(0);
  });
  test('very big integer string', () => {
    expect(isNumFloat('6486486438486464684864684864')).toBe(1);
  });
  test('very big float string', () => {
    expect(isNumFloat('6486486438486464684864684864.48468')).toBe(1);
  });
  test('very big exponential string', () => {
    expect(isNumFloat('6.4134134186415345e+35')).toBe(0);
  });

  // direct value cases
  test('integer value', () => {
    expect(isNumFloat('5')).toBe(1);
  });
  test('negative value value', () => {
    expect(isNumFloat('-5')).toBe(1);
  });
  test('float value', () => {
    expect(isNumFloat('5.8')).toBe(1);
  });
  test('negative float value', () => {
    expect(isNumFloat('-5.8')).toBe(0);
  });
  test('very big value', () => {
    expect(isNumFloat('558684684864684684135438434684.8')).toBe(1);
  });
  test('very high precision', () => {
    expect(isNumFloat('5.85868468486468468413543843468')).toBe(1);
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
});
