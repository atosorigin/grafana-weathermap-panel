import React from 'react';
import ReactDOM from 'react-dom';
import CouleurFixe from '../couleurFixe';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions, Target } from '../../../types';
import { act } from 'react-dom/test-utils';

/*
 * testing the CouleurFixe component features
 * - edit parameters
 */
describe('CouleurFixe tests', () => {
    let container, component;
    const additionalStep = { value: '1', label: '1' };
    /*
     * Mock "onOptionChange" by re-rendering the component with the new options
     */
    let mockFunctions = {
        onOptionsChange : (options: SimpleOptions, callback?: () => void) => {
            testProps.options = options;
            act(() => {
                ReactDOM.render(<CouleurFixe ref={c => component = c} {...testProps} />, container);
            });
        }
    }
    let testProps = {};
    beforeEach(() => {
        let clonedDefaults = JSON.parse(JSON.stringify(defaults));
        clonedDefaults.seuil = [{
            id: 5,
            seuilMin: '-10',
            seuilMax: '10',
            couleurFond: '#448811',
            couleurContour: '#6611FF',
            sizeContour: "2"
        }];
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
            ReactDOM.render(<CouleurFixe ref={c => component = c} {...testProps} />, container);
        });
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
        component = null;
        jest.clearAllMocks()
    });

    test('test onChangeSzContour', () => {
        component.onChangeSzContour('80');

        expect(component.state.szContour).toBe('80');
    })

    test('test onChangeColorFond', () => {
        component.onChangeColorFond('whatiskey', '#123456');

        expect(component.state.colorFond).toBe('#123456');
    })

    test('test onChangeColorContour', () => {
        component.onChangeColorContour('whatiskey', '#123456');

        expect(component.state.colorContour).toBe('#123456');
    })

});