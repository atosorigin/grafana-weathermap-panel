import React from 'react';
import ReactDOM from 'react-dom';
import EspaceCoordonnees from '../EspaceCoordonnees';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions } from '../../types';
import { act } from 'react-dom/test-utils';

/*
 * testing the EspaceCoordonnees component features
 * - add coordinates
 */
describe('EspaceCoordonnees tests', () => {
    let container, component;
    const additionalStep = { value: '1', label: '1' };
    /*
     * Mock "onOptionChange" by re-rendering the component with the new options
     */
    let mockFunctions = {
        onOptionsChange : (options: SimpleOptions, callback?: () => void) => {
            testProps.options = options;
            act(() => {
                ReactDOM.render(<EspaceCoordonnees ref={c => component = c} {...testProps} />, container);
            });
        }
    }
    let testProps = {};
    beforeEach(() => {
        let clonedDefaults = JSON.parse(JSON.stringify(defaults));
        clonedDefaults.listStep[1] = JSON.parse(JSON.stringify(additionalStep));
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
            ReactDOM.render(<EspaceCoordonnees ref={c => component = c} {...testProps} />, container);
        });
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
        component = null;
        jest.clearAllMocks()
    });

    test('add coordinates space input', async () => {
        await component.addInput(0, '-5', '5', '-10', '10', 'test-text', 'test.png', 'interfaceJSON-test');

        expect(component.state.arrayCoor.length).toBe(1);
        expect(component.state.arrayInput.length).toBe(1);
        expect(component.state.index).toBe(1);
    });
    
    test('remove coordinates space input', async () => {
        let button = document.createElement("button");
        button.setAttribute("id", "0supprimer");

        await component.addInput(0, '-5', '5', '-10', '10', 'test-text', 'test.png', 'interfaceJSON-test');
        await component.addInput(1, '-6', '6', '-11', '11', 'test-text1', 'test1.png', 'interfaceJSON-test1');

        expect(component.state.arrayCoor.length).toBe(2);
        expect(component.state.arrayInput.length).toBe(2);
        expect(component.state.index).toBe(2);

        await component.deleteOwnInput({
            target: button,
            currentTarget: button
        });

        expect(component.state.arrayCoor.length).toBe(1);
        expect(component.state.arrayInput.length).toBe(1);
    });
    
    test('change coordinates input', async () => {
        await component.addInput(0, '-5', '5', '-10', '10', 'test-text', 'test.png', 'interfaceJSON-test');

        const newCoordinatesInputs = component.state.arrayInput[0];
        const newCoordinatesInput = newCoordinatesInputs.getUneClassInput();

        for (let index = 0; index < newCoordinatesInput.length; index++) {
            const element = newCoordinatesInput[index];
            if (element.getInputType() === 'text') {
                component._handleChange('test-value', element.getName(), newCoordinatesInputs.getId());
                const name = element.getName();
                if (name.startsWith('positionXMin')) {
                    expect(component.state.arrayCoor[0].getXMin()).toBe('test-value');
                } else if (name.startsWith('positionXMax')) {
                    expect(component.state.arrayCoor[0].getXMax()).toBe('test-value');
                } else if (name.startsWith('positionYMin')) {
                    expect(component.state.arrayCoor[0].getYMin()).toBe('test-value');
                } else if (name.startsWith('positionYMax')) {
                    expect(component.state.arrayCoor[0].getYMax()).toBe('test-value');
                } else if (name.startsWith('label')) {
                    expect(component.state.arrayCoor[0].getLabel()).toBe('test-value');
                } else if (name.startsWith('image')) {
                    expect(component.state.arrayCoor[0].img).toBe('test-value');
                } else if (name.startsWith('interfaceJson')) {
                    expect(component.state.arrayCoor[0].interfaceJson).toBe('test-value');
                }
            }
        }
    });
});