import React from 'react';
import ReactDOM from 'react-dom';
import PanelData from '../PanelData';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions } from '../../types';
import { act } from 'react-dom/test-utils';


/*
 * testing the PanelData component features
 * - add/remove targets
 * - update target values
 */
describe('PanelData tests', () => {
    let container, component;
    const additionalStep = { value: '1', label: '1' };
    /*
     * Mock "onOptionChange" by re-rendering the component with the new options
     */
    let mockFunctions = {
        onOptionsChange : (options: SimpleOptions, callback?: () => void) => {
            testProps.options = options;
            act(() => {
                ReactDOM.render(<PanelData ref={c => component = c} {...testProps} />, container);
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
            ReactDOM.render(<PanelData ref={c => component = c} {...testProps} />, container);
        });
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
        component = null;
        jest.clearAllMocks()
    });
    
    test('update panel select', () => {

        expect(component.props.options.actualPanel.value).toBe(defaults.actualPanel.value);
        expect(component.props.options.actualPanel.label).toBe(defaults.actualPanel.label);

        component.onPanelSelectChanged({ value: '2', label: '2' });

        expect(testProps.actualPanel.value).toBe('2');
        expect(testProps.actualPanel.label).toBe('2');
    });

    test('update personal target', () => {
        expect(component.props.options.personalTarget.expr).toBe(defaults.personalTarget.expr);

        let input = document.createElement("input");
        input.setAttribute("value", "test-value")
        
        const spy = jest.spyOn(component, 'onPersonalTargetChanged');

        act(() => {
            component.onPersonalTargetChanged({
                currentTarget: input,
                target: input
            });
        });

        expect(spy).toHaveBeenCalled();
        expect(testProps.options.personalTarget.expr).toBe('test-value');
    });


    
    test('add and remove targets', () => {
        const sections = ReactDOM.findDOMNode(component).querySelectorAll('.section');
        const additionalTargetsSection = sections[2];

        let additionalTargets = additionalTargetsSection.children[0].children;
        expect(component.props.options.promTargets.length).toBe(0)
        expect(additionalTargets.length).toBe(0);
        
        // add targets
        const addButton = sections[1].querySelector('button');
        act(() => {
            component.loadPersonalTarget({
                currentTarget: addButton,
                target: addButton
            })
        });
        
        additionalTargets = additionalTargetsSection.children[0].children;
        expect(component.props.options.promTargets.length).toBe(1)
        expect(additionalTargets.length).toBe(1);

        
        act(() => {
            component.loadPersonalTarget({
                currentTarget: addButton,
                target: addButton
            })
        });
        
        additionalTargets = additionalTargetsSection.children[0].children;
        expect(component.props.options.promTargets.length).toBe(2)
        expect(additionalTargets.length).toBe(2);

        // remove targets
        let removeTarget = additionalTargets[1].querySelector('button');
        act(() => {
            component.deleteTargetProm({
                currentTarget: removeTarget,
                target: removeTarget
            })
        });
        additionalTargets = additionalTargetsSection.children[0].children;
        expect(component.props.options.promTargets.length).toBe(1)
        expect(additionalTargets.length).toBe(1);
    });

    test('update target', () => {
        const sections = ReactDOM.findDOMNode(component).querySelectorAll('.section');
        const additionalTargetsSection = sections[2];

        let additionalTargets = additionalTargetsSection.children[0].children;
        expect(component.props.options.promTargets.length).toBe(0)
        expect(additionalTargets.length).toBe(0);
        
        // add targets
        const addButton = sections[1].querySelector('button');
        act(() => {
            component.loadPersonalTarget({
                currentTarget: addButton,
                target: addButton
            })
        });
        act(() => {
            component.loadPersonalTarget({
                currentTarget: addButton,
                target: addButton
            })
        });
        act(() => {
            component.loadPersonalTarget({
                currentTarget: addButton,
                target: addButton
            })
        });
        
        additionalTargets = additionalTargetsSection.children[0].children;
        const editedTarget = additionalTargets[1];
        const formField = editedTarget.querySelector('input');

        const spy = jest.spyOn(component, 'onTargetPromChanged');
        act(() => {
            formField.setAttribute('value', 'A');
            formField.value = 'A';
        });
        
        act(() => {
            component.onTargetPromChanged({
                currentTarget: formField,
                target: formField
            });
        });

        expect(spy).toHaveBeenCalled();
        expect(formField.getAttribute('value')).toBe('A');
        expect(testProps.options.promTargets[1].expr).toBe('A');

    });

});