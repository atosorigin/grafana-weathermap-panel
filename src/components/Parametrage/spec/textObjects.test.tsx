// import React from 'react';
// import ReactDOM from 'react-dom';
// import TextObjects from '../textObjects';
// import { LoadingState } from '@grafana/data';
// import { defaults, SimpleOptions, Target } from '../../../types';
// import { act } from 'react-dom/test-utils';
// import { ParametrageMetrique } from 'Models/SettingMetricClass';
// import { TextObject } from 'Models/TextObjectClass';
// import { CoordinateSpaceExtendClass } from 'Models/CoordinateSpaceExtendClass';

describe('waiting test', () => {
  test('to be pass', done => {
    setTimeout(() => {
      done();
    });
  });
});

// /*
//  * testing the TextObjects component features
//  * - edit parameters
//  */
// describe('TextObjects tests', () => {
//   let container, component, testTextObject, parametrageMetric, coordinateSpaceTest;
//   const additionalStep = { value: '1', label: '1' };
//   /*
//    * Mock "onOptionChange" by re-rendering the component with the new options
//    */
//   let mockFunctions = {
//     onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
//       testProps.options = options;
//       act(() => {
//         ReactDOM.render(<TextObjects ref={(c) => (component = c)} {...testProps} />, container);
//       });
//     },
//     callBackToParent: (followLink: string, hoveringTooltipLink: string, hoveringTooltipText: string, textObj: TextObject) => {
//       coordinateSpaceTest.followLink = followLink ? followLink : coordinateSpaceTest.followLink;
//       coordinateSpaceTest.hoveringTooltipLink = hoveringTooltipLink ? hoveringTooltipLink : coordinateSpaceTest.hoveringTooltipLink;
//       coordinateSpaceTest.hoveringTooltipText = hoveringTooltipText ? hoveringTooltipText : coordinateSpaceTest.hoveringTooltipText;
//       coordinateSpaceTest.hoveringTooltipText = hoveringTooltipText ? hoveringTooltipText : coordinateSpaceTest.hoveringTooltipText;
//       act(() => {
//         ReactDOM.render(<TextObjects ref={c => (component = c)} {...testProps} />, container);
//       });
//     },
//   };
//   let testProps = {};
//   beforeEach(() => {
//     let clonedDefaults = JSON.parse(JSON.stringify(defaults));
//     testTextObject = new TextObject(
//       'legend',
//       'value',
//       'unit',
//       'colbr',
//       'coltxtr',
//       'ctyletxtr',
//       'colbackbu',
//       'coltxtbu',
//       'styletxtby',
//       false,
//       'legelement',
//       'numformatel',
//       'unitumseu',
//       false,
//       false,
//       false,
//       'coltxtele',
//       false,
//       'colbackel'
//     );
//     parametrageMetric = new ParametrageMetrique('', '', '');
//     coordinateSpaceTest = new CoordinateSpaceExtendClass(
//       0,
//       '-10',
//       '10',
//       '-20',
//       '20',
//       'test-label',
//       'test.png',
//       'test-interface',
//       testTextObject,
//       parametrageMetric,
//       'key',
//       'valkey'
//     );
//     clonedDefaults.listStep[1] = JSON.parse(JSON.stringify(additionalStep));
//     clonedDefaults.promTargets = ['test'];
//     container = document.createElement('div');
//     document.body.appendChild(container);
//     testProps = {
//       options: clonedDefaults,
//       coordinateSpace: coordinateSpaceTest,
//       onOptionsChange: mockFunctions.onOptionsChange,
//       callBackToParent: mockFunctions.callBackToParent,
//       data: {
//         state: LoadingState.Done,
//         series: [
//           {
//             name: 'serieName',
//             fields: [],
//             length: 15,
//           },
//         ],
//         timeRange: clonedDefaults.timeRange,
//       },
//     };

//     act(() => {
//       ReactDOM.render(<TextObjects ref={(c) => (component = c)} {...testProps} />, container);
//     });
//   });

//   afterEach(() => {
//     document.body.removeChild(container);
//     container = null;
//     component = null;
//     jest.clearAllMocks();
//   });

//   test('test onChangeLegende', () => {
//     component.onChangeLegende('testText');

//     expect(component.state.textObject.legend).toBe('testText');
//   });

//   test('test onChangeValeur', () => {
//     component.onChangeValeur('testText');

//     expect(component.state.textObject.value).toBe('testText');
//   });

//   test('test onChangeUnite', () => {
//     component.onChangeUnite('testText');

//     expect(component.state.textObject.unit).toBe('testText');
//   });

//   test('test onChangeBackColorRegion', () => {
//     component.onChangeBackColorRegion('whatiskey', 'testText');

//     expect(component.state.textObject.colorBackRegion).toBe('testText');
//   });

//   test('test onChangeColorTextRegion', () => {
//     component.onChangeColorTextRegion('whatiskey', 'testText');

//     expect(component.state.textObject.colorTextRegion).toBe('testText');
//   });

//   test('test onChangeStyleTextRegion', () => {
//     let input = document.createElement('input');
//     input.setAttribute('value', 'testText');
//     component.onChangeStyleTextRegion({
//       target: input,
//       currentTarget: input,
//     });

//     expect(component.state.textObject.styleTextRegion).toBe('testText');
//   });

//   test('test onChangeStyleTextBulle', () => {
//     let input = document.createElement('input');
//     input.setAttribute('value', 'testText');
//     component.onChangeStyleTextBulle({
//       target: input,
//       currentTarget: input,
//     });

//     expect(component.state.textObject.styleTextTooltip).toBe('testText');
//   });

//   test('test onChangecolorBackTooltip', () => {
//     component.onChangecolorBackTooltip('whatiskey', 'testText');

//     expect(component.state.textObject.colorBackTooltip).toBe('testText');
//   });

//   test('test onChangeColorTextBulle', () => {
//     component.onChangeColorTextBulle('whatiskey', 'testText');

//     expect(component.state.textObject.colorTextBulle).toBe('testText');
//   });

//   test('test onSwitchGenerateObjectText', () => {
//     component.onSwitchGenerateObjectText();

//     expect(component.state.textObject.generateObjectText).toBe(true);
//     component.onSwitchGenerateObjectText();

//     expect(component.state.textObject.generateObjectText).toBe(false);
//   });

//   test('test onChangeLegendElement', () => {
//     let input = document.createElement('input');
//     input.setAttribute('value', 'testText');
//     component.onChangeLegendElement({
//       target: input,
//       currentTarget: input,
//     });

//     expect(component.state.textObject.legendElement).toBe('testText');
//   });

//   test('test onChangeunit', () => {
//     let input = document.createElement('input');
//     input.setAttribute('value', 'testText');
//     component.onChangeunit({
//       target: input,
//       currentTarget: input,
//     });

//     expect(component.state.textObject.unit).toBe('testText');
//   });

//   test('test onChangeFormatageNumeriqueTextObject', () => {
//     let input = document.createElement('input');
//     input.setAttribute('value', 'testText');
//     component.onChangeFormatageNumeriqueTextObject({
//       target: input,
//       currentTarget: input,
//     });

//     expect(component.state.textObject.numericFormatElement).toBe('testText');
//   });

//   test('test onSwitchDisplayObjectInText', () => {
//     component.onSwitchDisplayObjectInText();

//     expect(component.state.textObject.displayObjectInText).toBe(true);
//     component.onSwitchDisplayObjectInText();

//     expect(component.state.textObject.displayObjectInText).toBe(false);
//   });

//   test('test onSwitchDisplayObjectPermanently', () => {
//     component.onSwitchDisplayObjectPermanently();

//     expect(component.state.textObject.displayObjectPermanently).toBe(true);
//     component.onSwitchDisplayObjectPermanently();

//     expect(component.state.textObject.displayObjectPermanently).toBe(false);
//   });

//   test('test onSwitchAddColorTextElement', () => {
//     component.onSwitchAddColorTextElement();

//     expect(component.state.textObject.addColorTextElement).toBe(true);
//     component.onSwitchAddColorTextElement();

//     expect(component.state.textObject.addColorTextElement).toBe(false);
//   });

//   test('test onSwitchAddColorBackElement', () => {
//     component.onSwitchAddColorBackElement();

//     expect(component.state.textObject.addColorBackElement).toBe(true);
//     component.onSwitchAddColorBackElement();

//     expect(component.state.textObject.addColorBackElement).toBe(false);
//   });

//   test('test onChangeColorTextElement', () => {
//     component.onChangeColorTextElement('whatiskey', 'testText');

//     expect(component.state.textObject.colorTextElement).toBe('testText');
//   });

//   test('test onChangeColorBackElement', () => {
//     component.onChangeColorBackElement('whatiskey', 'testText');

//     expect(component.state.textObject.colorBackElement).toBe('testText');
//   });
// });
