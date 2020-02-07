import React from 'react';
import ReactDOM from 'react-dom';
import MainTarget from '../MainTarget';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions } from '../../types';
import { act } from 'react-dom/test-utils';

/*
 * testing the MainTarget component features
 * - loading data from a json
 * - edit input fields
 */
describe('MainTarget tests', () => {
    let container, component;
    const additionalStep = { value: '1', label: '1' };
    /*
     * Mock "onOptionChange" by re-rendering the component with the new options
     */
    let mockFunctions = {
        onOptionsChange : (options: SimpleOptions, callback?: () => void) => {
            testProps.options = options;
            act(() => {
                ReactDOM.render(<MainTarget ref={c => component = c} {...testProps} />, container);
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
            ReactDOM.render(<MainTarget ref={c => component = c} {...testProps} />, container);
        });
    });

    test('fetchMainQuerry', (done) => {
        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => {return ({'testdata': 'test'})}
            })
        );

        const spy = jest.spyOn(component, 'fetchMainQuerry');
        component.fetchMainQuerry();
        // How to know if function calls ended? timeout feel unstable
        setTimeout(() => {
            expect(spy).toHaveBeenCalled();
            expect(component.props.options.mainQueryReturn).toStrictEqual({
                "testdata": "test"
            });

            global.fetch.mockRestore();
            done();
        }, 1000);
    });

    test('onMainTargetChanged', () => {
        let input = document.createElement("input");
        input.setAttribute("value", "test-value")
        component.onMainTargetChanged({
            target: input,
            currentTarget: input
        });

        expect(component.props.options.mainTarget.expr).toBe("test-value");
    });

});