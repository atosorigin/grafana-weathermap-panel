import React from 'react';
import ReactDOM from 'react-dom';
import ParametresGeneriques from '../parametresGeneriques';
import { ParametrageMetrique } from 'Models/parametrageMetrique';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions, Target } from '../../../types';
import { act } from 'react-dom/test-utils';

/*
 * testing the ParametresGeneriques component features
 * - edit parameters
 */
describe('ParametresGeneriques tests', () => {
    let container, component;
    const additionalStep = { value: '1', label: '1' };
    /*
     * Mock "onOptionChange" by re-rendering the component with the new options
     */
    let mockFunctions = {
        onOptionsChange : (options: SimpleOptions, callback?: () => void) => {
            testProps.options = options;
            act(() => {
                ReactDOM.render(<ParametresGeneriques ref={c => component = c} {...testProps} />, container);
            });
        }
    }
    let testProps = {};
    beforeEach(() => {
        let clonedDefaults = JSON.parse(JSON.stringify(defaults));
        clonedDefaults.seuil = [];
        clonedDefaults.colorMode = false;
        clonedDefaults.contourIsActive = false;
        clonedDefaults.fondIsActive = false;
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
            ReactDOM.render(<ParametresGeneriques ref={c => component = c} {...testProps} />, container);
        });
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
        component = null;
        jest.clearAllMocks()
    });

    test('test onSwitchColorMode', async () => {
        await component.onSwitchColorMode();

        expect(component.state.colorMode).toBe(true);
        expect(component.state.seuil.length).toBe(0);
        await component.onSwitchColorMode();

        expect(component.state.colorMode).toBe(false);
        expect(component.state.seuil.length).toBe(1);
    })

    test('test onSwitchContour', () => {
        component.onSwitchContour();

        expect(component.state.contourIsActive).toBe(true);
        component.onSwitchContour();

        expect(component.state.contourIsActive).toBe(false);
    })

    test('test onSwitchFond', () => {
        component.onSwitchFond();

        expect(component.state.fondIsActive).toBe(true);
        component.onSwitchFond();

        expect(component.state.fondIsActive).toBe(false);
    })

    test('test setStateAsyncParametrageMetrique', () => {
        return component.setStateAsyncParametrageMetrique({parametrageMetrique:new ParametrageMetrique('A', 'B', 'C')}).then(() => {
            expect(component.state.parametrageMetrique.followLink).toBe('A');
            expect(component.state.parametrageMetrique.hoveringTooltipLink).toBe('B');
            expect(component.state.parametrageMetrique.hoveringTooltipText).toBe('C');
        })
    })

});