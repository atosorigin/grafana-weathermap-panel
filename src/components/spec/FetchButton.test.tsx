import React from 'react';
import ReactDOM from 'react-dom';
import FetchButton from '../FetchButton';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions } from '../../types';
import { act } from 'react-dom/test-utils';

/*
 * testing the FetchButton component features
 * - fetch data from query with and without range
 * - delete all targets
 */
describe('FetchButton tests', () => {
    let container, component;
    const additionalStep = { value: '1', label: '1' };
    /*
     * Mock "onOptionChange" by re-rendering the component with the new options
     */
    let mockFunctions = {
        onOptionsChange : (options: SimpleOptions, callback?: () => void) => {
            testProps.options = options;
            act(() => {
                ReactDOM.render(<FetchButton ref={c => component = c} {...testProps} />, container);
            });
        }
    }
    let testProps = {};
    beforeEach(() => {
        let clonedDefaults = JSON.parse(JSON.stringify(defaults));
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
            ReactDOM.render(<FetchButton ref={c => component = c} {...testProps} />, container);
        });
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
        component = null;
        jest.clearAllMocks()
    });


    test('test fetch query range', (done) => {
        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => {
                    Promise.resolve({
                        "testdata": "test"
                    })
                }
            })
        );
        const spy = jest.spyOn(component, 'fetchQuerryRange');
        component.fetchQuerryRange();
        // How to know if function calls ended? timeout feel unstable
        setTimeout(() => {
            expect(spy).toHaveBeenCalled();
            expect(component.props.options.jsonQueryReturn.length).toBe(component.props.options.queryPromRange.length);

            global.fetch.mockRestore();
            done();
        }, 1000);
    });

    test('test fetch query', (done) => {
        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => {
                    Promise.resolve({
                        "testdata": "test"
                    })
                }
            })
        );
        const spy = jest.spyOn(component, 'fetchQuerry');
        component.fetchQuerry();
        // How to know if function calls ended? timeout feel unstable
        setTimeout(() => {
            expect(spy).toHaveBeenCalled();
            expect(component.props.options.jsonQueryReturn.length).toBe(component.props.options.queryProm.length);

            global.fetch.mockRestore();
            done();
        }, 1000);
    });

    test('test delete targets', () => {
        const spy = jest.spyOn(component, 'deleteTargets');
        component.deleteTargets();
        // How to know if function calls ended?
        expect(spy).toHaveBeenCalled();
        expect(component.props.options.promTargets.length).toBe(0);
    });

});