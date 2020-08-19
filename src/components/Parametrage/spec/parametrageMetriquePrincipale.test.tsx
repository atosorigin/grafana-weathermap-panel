// import React from 'react';
// import ReactDOM from 'react-dom';
// import ParametrageMetriquePrincipale from '../parametrageMetriquePrincipale';
// import { LoadingState } from '@grafana/data';
// import { defaults, SimpleOptions, Target } from '../../../types';
// import { act } from 'react-dom/test-utils';
// import { CoordinateSpaceExtendClass } from 'Models/CoordinateSpaceExtendClass';
// import { TextObject } from 'Models/TextObjectClass';
// import { ParametrageMetrique } from 'Models/SettingMetricClass';

describe('waiting test', () => {
  test('to be pass', done => {
    setTimeout(() => {
      done();
    });
  });
});

// /*
//  * testing the ParametrageMetriquePrincipale component features
//  * - edit parameters
//  */
// describe('ParametrageMetriquePrincipale tests', () => {
//   let container, component;
//   const additionalStep = { value: '1', label: '1' };
//   /*
//    * Mock "onOptionChange" by re-rendering the component with the new options
//    */
//   let mockFunctions = {
//     onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
//       testProps.options = options;
//       act(() => {
//         ReactDOM.render(<ParametrageMetriquePrincipale ref={c => (component = c)} {...testProps} />, container);
//       });
//     },
//     callBackToParent: (followLink: string, hoveringTooltipLink: string, hoveringTooltipText: string) => {
//       coordinateSpaceTest.followLink = followLink ? followLink : coordinateSpaceTest.followLink;
//       coordinateSpaceTest.hoveringTooltipLink = hoveringTooltipLink ? hoveringTooltipLink : coordinateSpaceTest.hoveringTooltipLink;
//       coordinateSpaceTest.hoveringTooltipText = hoveringTooltipText ? hoveringTooltipText : coordinateSpaceTest.hoveringTooltipText;
//       act(() => {
//         ReactDOM.render(<ParametrageMetriquePrincipale ref={c => (component = c)} {...testProps} />, container);
//       });
//     },
//   };
//   let testProps = {};
//   let testTextObject, parametrageMetric, coordinateSpaceTest;
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
//       true,
//       'legelement',
//       'numformatel',
//       'unitumseu',
//       true,
//       true,
//       true,
//       'coltxtele',
//       true,
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
//     clonedDefaults.seuil = [];
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
//       ReactDOM.render(<ParametrageMetriquePrincipale ref={c => (component = c)} {...testProps} />, container);
//     });
//   });

//   afterEach(() => {
//     document.body.removeChild(container);
//     container = null;
//     component = null;
//     jest.clearAllMocks();
//   });

//   test('test onChangeFollowLink', () => {
//     component.onChangeFollowLink('testlink');

//     expect(component.state.followLink).toBe('testlink');
//   });

//   test('test onChangeHoveringTooltipLink', () => {
//     component.onChangeHoveringTooltipLink('testlink');

//     expect(component.state.hoveringTooltipLink).toBe('testlink');
//   });

//   test('test onChangeHoveringTooltipText', () => {
//     component.onChangeHoveringTooltipText('testvalue');

//     expect(component.state.hoveringTooltipText).toBe('testvalue');
//   });
// });
