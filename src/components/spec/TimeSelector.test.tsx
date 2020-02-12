import React from 'react';
import ReactDOM from 'react-dom';
import TimeSelector from '../timeSelector';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions } from '../../types';
import { act } from 'react-dom/test-utils';

/*
 * testing the TimeSelector component features
 * - edit input fields
 */
describe('TimeSelector tests', () => {
    let container, component;
    const additionalStep = { value: '1', label: '1' };
    /*
     * Mock "onOptionChange" by re-rendering the component with the new options
     */
    let mockFunctions = {
        onOptionsChange : (options: SimpleOptions, callback?: () => void) => {
            testProps.options = options;
            act(() => {
                ReactDOM.render(<TimeSelector ref={c => component = c} {...testProps} />, container);
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
            ReactDOM.render(<TimeSelector ref={c => component = c} {...testProps} />, container);
        });
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
        component = null;
        jest.clearAllMocks()
    });

    test('update from date', () => {
        expect(component.props.data.timeRange.from).toBe('2020-01-02 00:00:00');

        let input = document.createElement("input");
        input.setAttribute("id", "from")
        input.setAttribute("value", "2020-02-02")
        
        const spy = jest.spyOn(component, 'onTimeChanged');
        
        act(() => {
            component.onTimeChanged({
                target: input,
                currentTarget: input
            });
        });


        expect(spy).toHaveBeenCalled();
        expect(component.props.data.timeRange.from).toBe('2020-02-02');
    });

    test('update to date', () => {
        expect(component.props.data.timeRange.to).toBe('2020-01-02 00:00:00');
        let input = document.createElement("input");
        input.setAttribute("id", "to")
        input.setAttribute("value", "2020-02-02")
        
        const spy = jest.spyOn(component, 'onTimeChanged');
        
        act(() => {
            component.onTimeChanged({
                target: input,
                currentTarget: input
            });
        });


        expect(spy).toHaveBeenCalled();
        expect(component.props.data.timeRange.to).toBe('2020-02-02');
    });

    test('update Prometheus URL', () => {
        expect(component.props.options.promUrl).toBe('http://localhost:9090/api/v1/');
        
        let input = document.createElement("input");
        input.setAttribute("value", "http://localhost:9090/api/v2/")

        const spy = jest.spyOn(component, 'onUrlChanged');
        
        act(() => {
            component.onUrlChanged({
                currentTarget: input,
                target: input
            });
        });

        expect(spy).toHaveBeenCalled();
        expect(component.props.options.promUrl).toBe('http://localhost:9090/api/v2/');
    });

    test('update Step', () => {
        expect(component.props.options.refresh.value).toBe(defaults.refresh.value);
        expect(component.props.options.refresh.label).toBe(defaults.refresh.label);

        component.onStepChanged(testProps.options.listStep[1]);

        expect(component.props.options.refresh.value).toBe(additionalStep.value);
        expect(component.props.options.refresh.label).toBe(additionalStep.label);
    });
    
    test('update time query', () => {
        expect(component.props.options.timeQuery).toBe(defaults.timeQuery);

        let input = document.createElement("input");
        input.setAttribute("value", "2020-02-02 00:00:00")
        
        act(() => {
            component.onTimeQueryChanged({
                currentTarget: input,
                target: input
            });
        });

        expect(component.props.options.timeQuery).toBe('2020-02-02 00:00:00');
    });
});