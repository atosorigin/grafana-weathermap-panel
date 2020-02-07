import React from 'react';
import ReactDOM from 'react-dom';
import ParametrageMetriquePrincipale from '../parametrageMetriquePrincipale';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions, Target } from '../../../types';
import { act } from 'react-dom/test-utils';

/*
 * testing the ParametrageMetriquePrincipale component features
 * - edit parameters
 */
describe('ParametrageMetriquePrincipale tests', () => {
    let container, component;
    const additionalStep = { value: '1', label: '1' };
    /*
     * Mock "onOptionChange" by re-rendering the component with the new options
     */
    let mockFunctions = {
        onOptionsChange : (options: SimpleOptions, callback?: () => void) => {
            testProps.options = options;
            act(() => {
                ReactDOM.render(<ParametrageMetriquePrincipale ref={c => component = c} {...testProps} />, container);
            });
        }
    }
    let testProps = {};
    beforeEach(() => {
        let clonedDefaults = JSON.parse(JSON.stringify(defaults));
        clonedDefaults.seuil = [];
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
            ReactDOM.render(<ParametrageMetriquePrincipale ref={c => component = c} {...testProps} />, container);
        });
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
        component = null;
        jest.clearAllMocks()
    });

    test('test onChangeFollowLink', () => {
        component.onChangeFollowLink('testlink');

        expect(component.state.followLink).toBe('testlink');
    })

    test('test onChangeHoveringTooltipLink', () => {
        component.onChangeHoveringTooltipLink('testlink');

        expect(component.state.hoveringTooltipLink).toBe('testlink');
    })

    test('test onChangeHoveringTooltipText', () => {
        component.onChangeHoveringTooltipText('testvalue');

        expect(component.state.hoveringTooltipText).toBe('testvalue');
    })

});