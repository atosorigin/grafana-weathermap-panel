import React from 'react';
import ReactDOM from 'react-dom';
import ParametresGeneriques from '../parametresGeneriques';
import { ParametrageMetrique } from 'Models/SettingMetricClass';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions, Target } from '../../../types';
import { act } from 'react-dom/test-utils';
import { TextObject } from 'Models/TextObjectClass';
import { CoordinateSpaceExtendClass } from 'Models/CoordinateSpaceExtendClass';

/*
 * testing the ParametresGeneriques component features
 * - edit parameters
 */
describe('ParametresGeneriques tests', () => {
    let container, component, testTextObject, parametrageMetric, coordinateSpaceTest;
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
        },
        callBackToParent: ( followLink: string, hoveringTooltipLink: string, hoveringTooltipText: string, textObj: TextObject) => {
            coordinateSpaceTest.followLink = followLink ? followLink : coordinateSpaceTest.followLink;
            coordinateSpaceTest.hoveringTooltipLink = hoveringTooltipLink ? hoveringTooltipLink : coordinateSpaceTest.hoveringTooltipLink;
            coordinateSpaceTest.hoveringTooltipText = hoveringTooltipText ? hoveringTooltipText : coordinateSpaceTest.hoveringTooltipText;
            coordinateSpaceTest.hoveringTooltipText = hoveringTooltipText ? hoveringTooltipText : coordinateSpaceTest.hoveringTooltipText;
            act(() => {
                ReactDOM.render(<ParametresGeneriques ref={c => component = c} {...testProps} />, container);
            });
        }
    }
    let testProps = {};
    beforeEach(() => {
        let clonedDefaults = JSON.parse(JSON.stringify(defaults));
        testTextObject = new TextObject('legend', 'value', 'unit', 'colbr', 'coltxtr', 'ctyletxtr', 'colbackbu', 'coltxtbu', 'styletxtby', true, 'legelement', 'numformatel', 'unitumseu', true, true, true, 'coltxtele', true, 'colbackel');
        parametrageMetric = new ParametrageMetrique('', '', '');
        coordinateSpaceTest = new CoordinateSpaceExtendClass(0, '-10', '10', '-20', '20', 'test-label', 'test.png', 'test-interface', testTextObject, parametrageMetric, 'key', 'valkey');
        clonedDefaults.parametrageMetrique = parametrageMetric;
        clonedDefaults.seuil = [];
        clonedDefaults.listStep[1] = JSON.parse(JSON.stringify(additionalStep));
        clonedDefaults.promTargets = ['test'];
        container = document.createElement('div');
        document.body.appendChild(container);
        testProps = {
            options: clonedDefaults,
            coordinateSpace: coordinateSpaceTest,
            onOptionsChange: mockFunctions.onOptionsChange,
            callBackToParent: mockFunctions.callBackToParent,
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

    test('test onToggleMainMetric', async () => {
        expect(component.state.collapseMainMetric).toBe(false);
        await component.onToggleMainMetric(true);

        expect(component.state.collapseMainMetric).toBe(true);
        await component.onToggleMainMetric(false);

        expect(component.state.collapseMainMetric).toBe(false);
    });

    test('test onToggleTextObject', async () => {
        expect(component.state.collapseTextObject).toBe(false);
        await component.onToggleTextObject(true);

        expect(component.state.collapseTextObject).toBe(true);
        await component.onToggleTextObject(false);

        expect(component.state.collapseTextObject).toBe(false);
    });

    test('test setStateAsyncParametrageMetrique', () => {
        return component.setStateAsyncParametrageMetrique({parametrageMetrique:new ParametrageMetrique('A', 'B', 'C')}).then(() => {
            expect(component.state.parametrageMetrique.followLink).toBe('A');
            expect(component.state.parametrageMetrique.hoveringTooltipLink).toBe('B');
            expect(component.state.parametrageMetrique.hoveringTooltipText).toBe('C');
        })
    });

});