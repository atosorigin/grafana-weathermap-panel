import React from 'react';
import ReactDOM from 'react-dom';
import LinkForm from '../linkForm';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions } from '../../types';
import { act } from 'react-dom/test-utils';
import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';
import { PointClass } from 'Models/PointClass';

/*
 * testing the LinkForm component features
 * - add/delete inputs
 * - edit inputs
 */
describe('LinkForm tests', () => {
    let coordinates = [];
    let points = [];
    
    let container, component;
    const additionalStep = { value: '1', label: '1' };
    /*
     * Mock "onOptionChange" by re-rendering the component with the new options
     */
    let mockFunctions = {
        onOptionsChange : (options: SimpleOptions, callback?: () => void) => {
            testProps.options = options;
            act(() => {
                ReactDOM.render(<LinkForm ref={c => component = c} {...testProps} />, container);
            });
        },
        callBackFromParent : (dataFromChild: LinkClass[]) => {
            testProps.oldArrayLinkClass = dataFromChild;
            act(() => {
                ReactDOM.render(<LinkForm ref={c => component = c} {...testProps} />, container);
            });
        }
    }
    let testProps = {};
    beforeEach(() => {
        coordinates = [
            new CoordinateSpaceClass(0, '-10', '10', '-10', '10', 'espace0'),
            new CoordinateSpaceClass(1, '-20', '20', '-20', '20', 'espace0')
        ];
        points = [
            new PointClass(0,
                {label: 'coord0', value: coordinates[0]},
                {label: 'shape', value: 'A'},
                {label: 'shape', value: 'arrow'},
                {label: 'width', value: '1'},
                {label: 'height', size: '1'},
                'right',
                '5',
                '4',
                'point0',
                '6',
                '5',
                '#AABBCC'
            ),
            new PointClass(1,
                {label: 'coord1', value: coordinates[0]},
                {label: 'shape', value: 'A'},
                {label: 'shape', value: 'arrow'},
                {label: 'width', value: '1'},
                {label: 'height', size: '1'},
                'right',
                '4',
                '5',
                'point0',
                '5',
                '6',
                '#BBCCDD'
            )
        ];


        let clonedDefaults = JSON.parse(JSON.stringify(defaults));
        clonedDefaults.listStep[1] = JSON.parse(JSON.stringify(additionalStep));
        container = document.createElement('div');
        document.body.appendChild(container);
        testProps = {
            options: clonedDefaults,
            onOptionsChange: mockFunctions.onOptionsChange,
            callBackFromParent: mockFunctions.callBackFromParent,
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
            },
            oldArrayLinkClass: [],
            arrayPointClass: points,
            regionCoordinateSpace: coordinates
        };
        act(() => {
            ReactDOM.render(<LinkForm ref={c => component = c} {...testProps} />, container);
        });
    });

    afterEach(() => {
        document.body.removeChild(container);
        coordinates = [];
        points = [];
        container = null;
        component = null;
        jest.clearAllMocks();
    });

    test('add input', async () => {
        await component.addInput(
            5,
            { label: 'defineHowToGetCoordonate', value:'coordinates' },
            { label: 'orientationLink', value:'orientationLink' },
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            { label: 'pointIn', value: points[0] },
            { label: 'pointOut', value: points[0] },
            { label: 'regionIn', value: coordinates[0] },
            '7',
            { label: 'regregionOutionIn', value: coordinates[0] },
            '8',
            'labelLinkA',
            '9',
            '10',
            'labelLinkB',
            '11',
            '12'
        );

        expect(component.state.arrayLinkClass.length).toBe(1);
        expect(component.state.arrayInput.length).toBe(1);
        expect(component.state.index).toBe(6);
    });

    test('add input with id 0', async () => {
        await component.addInput(
            0,
            { label: 'defineHowToGetCoordonate', value:'coordinates' },
            { label: 'orientationLink', value:'orientationLink' },
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            { label: 'pointIn', value: points[0] },
            { label: 'pointOut', value: points[0] },
            { label: 'regionIn', value: coordinates[0] },
            '7',
            { label: 'regregionOutionIn', value: coordinates[0] },
            '8',
            'labelLinkA',
            '9',
            '10',
            'labelLinkB',
            '11',
            '12'
        );

        expect(component.state.arrayLinkClass.length).toBe(1);
        expect(component.state.arrayInput.length).toBe(1);
        expect(component.state.index).toBe(1);
    });

    test('remove inputs', async () => {
        let button = document.createElement("button");
        button.setAttribute("id", "1delete");

        await component.addInput(
            1,
            { label: 'defineHowToGetCoordonate', value:'coordinates' },
            { label: 'orientationLink', value:'orientationLink' },
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            { label: 'pointIn', value: points[0] },
            { label: 'pointOut', value: points[0] },
            { label: 'regionIn', value: coordinates[0] },
            '7',
            { label: 'regregionOutionIn', value: coordinates[0] },
            '8',
            'labelLinkA',
            '9',
            '10',
            'labelLinkB',
            '11',
            '12'
        );
        await component.addInput(
            2,
            { label: 'defineHowToGetCoordonate', value:'coordinates' },
            { label: 'orientationLink', value:'orientationLink' },
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            { label: 'pointIn', value: points[0] },
            { label: 'pointOut', value: points[0] },
            { label: 'regionIn', value: coordinates[0] },
            '7',
            { label: 'regregionOutionIn', value: coordinates[0] },
            '8',
            'labelLinkA',
            '9',
            '10',
            'labelLinkB',
            '11',
            '12'
        );

        expect(component.state.arrayLinkClass.length).toBe(2);
        expect(component.state.arrayInput.length).toBe(2);
        expect(component.state.index).toBe(3);

        await component.deleteOwnInput({
            target: button,
            currentTarget: button
        });

        expect(component.state.arrayLinkClass.length).toBe(1);
        expect(component.state.arrayInput.length).toBe(1);
    });

    test('change input texts', async () => {
        await component.addInput(
            0,
            { label: 'defineHowToGetCoordonate', value:'coordinates' },
            { label: 'orientationLink', value:'orientationLink' },
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            { label: 'pointIn', value: points[0] },
            { label: 'pointOut', value: points[0] },
            { label: 'regionIn', value: coordinates[0] },
            '7',
            { label: 'regregionOutionIn', value: coordinates[0] },
            '8',
            'labelLinkA',
            '9',
            '10',
            'labelLinkB',
            '11',
            '12'
        );

        const newInputs = component.state.arrayInput[0];
        const newInput = newInputs.getUneClassInput();

        let expectedCases = [
            'orientationLink',
            'pointIn',
            'pointOut',
            'regionIn',
            'regionOut',
            'pointAX',
            'pointAY',
            'pointBX',
            'pointBY',
            'colorCoordinateA',
            'colorCoordinateB',
            'colorRegionIn',
            'colorRegionOut',
            'labelLinkA',
            'labelLinkB',
            'positionXLabelLinkA',
            'positionYLabelLinkA',
            'positionXLabelLinkB',
            'positionYLabelLinkB'
        ];

        for (let index = 0; index < newInput.length; index++) {
            const element = newInput[index];
            const name = element.getName();
            
            if (element.getInputType() === 'text') {
                component._handleChange('test-value', element.getName(), newInputs.getId());

                if (name.startsWith('pointAX')) {
                    expectedCases = expectedCases.filter( value => value != 'pointAX');
                    expect(component.state.arrayLinkClass[0].getPointAPositionX()).toBe('test-value');
                } else if (name.startsWith('pointAY')) {
                    expectedCases = expectedCases.filter( value => value != 'pointAY');
                    expect(component.state.arrayLinkClass[0].getPointAPositionY()).toBe('test-value');
                } else if (name.startsWith('pointBX')) {
                    expectedCases = expectedCases.filter( value => value != 'pointBX');
                    expect(component.state.arrayLinkClass[0].getPointBPositionX()).toBe('test-value');
                } else if (name.startsWith('pointBY')) {
                    expectedCases = expectedCases.filter( value => value != 'pointBY');
                    expect(component.state.arrayLinkClass[0].getPointBPositionY()).toBe('test-value');
                } else if (name.startsWith('labelLinkA')) {
                    expectedCases = expectedCases.filter( value => value != 'labelLinkA');
                    expect(component.state.arrayLinkClass[0].getLabelLinkA()).toBe('test-value');
                } else if (name.startsWith('labelLinkB')) {
                    expectedCases = expectedCases.filter( value => value != 'labelLinkB');
                    expect(component.state.arrayLinkClass[0].getLabelLinkB()).toBe('test-value');
                } else if (name.startsWith('positionXLabelLinkA')) {
                    expectedCases = expectedCases.filter( value => value != 'positionXLabelLinkA');
                    expect(component.state.arrayLinkClass[0].getPositionXLabelA()).toBe('test-value');
                } else if (name.startsWith('positionYLabelLinkA')) {
                    expectedCases = expectedCases.filter( value => value != 'positionYLabelLinkA');
                    expect(component.state.arrayLinkClass[0].getPositionYLabelA()).toBe('test-value');
                } else if (name.startsWith('positionXLabelLinkB')) {
                    expectedCases = expectedCases.filter( value => value != 'positionXLabelLinkB');
                    expect(component.state.arrayLinkClass[0].getPositionXLabelB()).toBe('test-value');
                } else if (name.startsWith('positionYLabelLinkB')) {
                    expectedCases = expectedCases.filter( value => value != 'positionYLabelLinkB');
                    expect(component.state.arrayLinkClass[0].getPositionYLabelB()).toBe('test-value');
                }
                else {
                    expect(name).toBe('in the expected cases');
                }
            }
            else if (element.getInputType() === 'color') {
                if (name.startsWith('colorCoordinateA')) {
                    expectedCases = expectedCases.filter( value => value != 'colorCoordinateA');
                    // expect(component.state.arrayLinkClass[0].getColorCoordinateA()).toBe('test-value');
                } else if (name.startsWith('colorRegionIn')) {
                    expectedCases = expectedCases.filter( value => value != 'colorRegionIn');
                    // expect(component.state.arrayLinkClass[0].getColorRegionIn()).toBe('test-value');
                } else if (name.startsWith('colorCoordinateB')) {
                    expectedCases = expectedCases.filter( value => value != 'colorCoordinateB');
                    // expect(component.state.arrayLinkClass[0].getColorCoordinateB()).toBe('test-value');
                } else if (name.startsWith('colorRegionOut')) {
                    expectedCases = expectedCases.filter( value => value != 'colorRegionOut');
                    // expect(component.state.arrayLinkClass[0].getColorRegionOut()).toBe('test-value');
                }
                else {
                    expect(name).toBe('in the expected cases');
                }
            }
            else if (element.getInputType() === 'select') {
                if (name.startsWith('getCoordinate')) {
                    expectedCases = expectedCases.filter( value => value != 'getCoordinate');
                } else if (name.startsWith('orientationLink')) {
                    expectedCases = expectedCases.filter( value => value != 'orientationLink');
                } else if (name.startsWith('pointIn')) {
                    expectedCases = expectedCases.filter( value => value != 'pointIn');
                } else if (name.startsWith('pointOut')) {
                    expectedCases = expectedCases.filter( value => value != 'pointOut');
                } else if (name.startsWith('regionIn')) {
                    expectedCases = expectedCases.filter( value => value != 'regionIn');
                } else if (name.startsWith('regionOut')) {
                    expectedCases = expectedCases.filter( value => value != 'regionOut');
                }
                else {
                    expect(name).toBe('in the expected cases');
                }
            }
        }
        expect(expectedCases.length).toBe(0);
    });
});