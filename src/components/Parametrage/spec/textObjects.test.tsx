import React from 'react';
import ReactDOM from 'react-dom';
import TextObjects from '../textObjects';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions, Target } from '../../../types';
import { act } from 'react-dom/test-utils';

/*
 * testing the TextObjects component features
 * - edit parameters
 */
describe('TextObjects tests', () => {
    let container, component;
    const additionalStep = { value: '1', label: '1' };
    /*
     * Mock "onOptionChange" by re-rendering the component with the new options
     */
    let mockFunctions = {
        onOptionsChange : (options: SimpleOptions, callback?: () => void) => {
            testProps.options = options;
            act(() => {
                ReactDOM.render(<TextObjects ref={c => component = c} {...testProps} />, container);
            });
        }
    }
    let testProps = {};
    beforeEach(() => {
        let clonedDefaults = JSON.parse(JSON.stringify(defaults));
        clonedDefaults.generateObjectText = false;
        clonedDefaults.displayObjectInText = false;
        clonedDefaults.displayObjectPermanently = false;
        clonedDefaults.addColorTextElement = false;
        clonedDefaults.addColorBackElement = false;
        clonedDefaults.listStep[1] = JSON.parse(JSON.stringify(additionalStep));
        clonedDefaults.promTargets = ['test'];
        container = document.createElement('div');
        document.body.appendChild(container);
        testProps = {
            options: clonedDefaults,
            onOptionsChange: mockFunctions.onOptionsChange,
            data: {
                state: LoadingState.Done,
                series: [
                    {
                        name: "serieName",
                        fields: [],
                        length: 15
                    }
                ],
                timeRange: clonedDefaults.timeRange
            }
        };

        act(() => {
            ReactDOM.render(<TextObjects ref={c => component = c} {...testProps} />, container);
        });
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
        component = null;
        jest.clearAllMocks()
    });

    test('test onChangeLegende', () => {
        component.onChangeLegende('testText');

        expect(component.state.legende).toBe('testText');
    })

    test('test onChangeValeur', () => {
        component.onChangeValeur('testText');

        expect(component.state.valeur).toBe('testText');
    })

    test('test onChangeUnite', () => {
        component.onChangeUnite('testText');

        expect(component.state.unite).toBe('testText');
    })

    test('test onChangeBackColorRegion', () => {
        component.onChangeBackColorRegion('whatiskey', 'testText');

        expect(component.state.colorBackRegion).toBe('testText');
    })

    test('test onChangeColorTextRegion', () => {
        component.onChangeColorTextRegion('whatiskey', 'testText');

        expect(component.state.colorTextRegion).toBe('testText');
    })

    test('test onChangeStyleTextRegion', () => {
        let input = document.createElement("input");
        input.setAttribute("value", "testText")
        component.onChangeStyleTextRegion({
            target: input,
            currentTarget: input
        });

        expect(component.state.styleTextRegion).toBe('testText');
    })

    test('test onChangeStyleTextBulle', () => {
        let input = document.createElement("input");
        input.setAttribute("value", "testText")
        component.onChangeStyleTextBulle({
            target: input,
            currentTarget: input
        });

        expect(component.state.styleTextBulle).toBe('testText');
    })

    test('test onChangeColorBackBulle', () => {
        component.onChangeColorBackBulle('whatiskey', 'testText');

        expect(component.state.colorBackBulle).toBe('testText');
    })

    test('test onChangeColorTextBulle', () => {
        component.onChangeColorTextBulle('whatiskey', 'testText');

        expect(component.state.colorTextBulle).toBe('testText');
    })

    test('test onSwitchGenerateObjectText', () => {
        component.onSwitchGenerateObjectText();

        expect(component.state.generateObjectText).toBe(true);
        component.onSwitchGenerateObjectText();

        expect(component.state.generateObjectText).toBe(false);
    })

    test('test onChangeLegendElement', () => {
        let input = document.createElement("input");
        input.setAttribute("value", "testText")
        component.onChangeLegendElement({
            target: input,
            currentTarget: input
        });

        expect(component.state.legendElement).toBe('testText');
    })

    test('test onChangeUnityMesureElement', () => {
        let input = document.createElement("input");
        input.setAttribute("value", "testText")
        component.onChangeUnityMesureElement({
            target: input,
            currentTarget: input
        });

        expect(component.state.unityMesureElement).toBe('testText');
    })

    test('test onChangeFormatageNumeriqueTextObject', () => {
        let input = document.createElement("input");
        input.setAttribute("value", "testText")
        component.onChangeFormatageNumeriqueTextObject({
            target: input,
            currentTarget: input
        });

        expect(component.state.numericFormatElement).toBe('testText');
    })

    test('test onSwitchDisplayObjectInText', () => {
        component.onSwitchDisplayObjectInText();

        expect(component.state.displayObjectInText).toBe(true);
        component.onSwitchDisplayObjectInText();

        expect(component.state.displayObjectInText).toBe(false);
    })

    test('test onSwitchDisplayObjectPermanently', () => {
        component.onSwitchDisplayObjectPermanently();

        expect(component.state.displayObjectPermanently).toBe(true);
        component.onSwitchDisplayObjectPermanently();

        expect(component.state.displayObjectPermanently).toBe(false);
    })

    test('test onSwitchAddColorTextElement', () => {
        component.onSwitchAddColorTextElement();

        expect(component.state.addColorTextElement).toBe(true);
        component.onSwitchAddColorTextElement();

        expect(component.state.addColorTextElement).toBe(false);
    })

    test('test onSwitchAddColorBackElement', () => {
        component.onSwitchAddColorBackElement();

        expect(component.state.addColorBackElement).toBe(true);
        component.onSwitchAddColorBackElement();

        expect(component.state.addColorBackElement).toBe(false);
    })

    test('test onChangeColorTextElement', () => {
        component.onChangeColorTextElement('whatiskey', 'testText');

        expect(component.state.colorTextElement).toBe('testText');
    })

    test('test onChangeColorBackElement', () => {
        component.onChangeColorBackElement('whatiskey', 'testText');

        expect(component.state.colorBackElement).toBe('testText');
    })
});