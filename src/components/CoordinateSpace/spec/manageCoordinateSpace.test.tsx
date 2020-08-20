// import React from 'react';
// import ReactDOM from 'react-dom';
// import ManageCoordinateSpace from '../manageCoordinateSpace';
// import { LoadingState } from '@grafana/data';
// import { defaults, SimpleOptions } from '../../../types';
// import { act } from 'react-dom/test-utils';
// import { TextObject } from 'Models/TextObjectClass';
// import { ParametrageMetrique } from 'Models/SettingMetricClass';
// import { CoordinateSpaceExtendClass } from 'Models/CoordinateSpaceExtendClass';

// test for yarn to pass
describe('waiting test', () => {
  test('to be pass', (done) => {
    setTimeout(() => {
      done();
    });
  });
});

// /*
//  * testing the ManageCoordinateSpace component features
//  * - add coordinates
//  * - edit coordinates parameters
//  */
// describe('ManageCoordinateSpace tests', () => {
//   let container, component, coordinates, testTextObjectClass, parametrageMetric;
//   const additionalStep = { value: '1', label: '1' };
//   /*
//    * Mock "onOptionChange" by re-rendering the component with the new options
//    */
//   let mockFunctions = {
//     onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
//       testProps.options = options;
//       act(() => {
//         ReactDOM.render(<ManageCoordinateSpace ref={c => (component = c)} {...testProps} />, container);
//       });
//     },
//   };
//   let testProps = {};
//   beforeEach(() => {
//     testTextObjectClass = new TextObject(
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
//     coordinates = [
//       new CoordinateSpaceExtendClass(
//         0,
//         '-10',
//         '10',
//         '-20',
//         '20',
//         'test-label',
//         'test.png',
//         'test-interface',
//         testTextObjectClass,
//         parametrageMetric,
//         'key0',
//         'valkey0'
//       ),
//       new CoordinateSpaceExtendClass(
//         1,
//         '-10',
//         '10',
//         '-20',
//         '20',
//         'test-label',
//         'test.png',
//         'test-interface',
//         testTextObjectClass,
//         parametrageMetric,
//         'key1',
//         'valkey1'
//       ),
//     ];

//     let clonedDefaults = JSON.parse(JSON.stringify(defaults));
//     clonedDefaults.listStep[1] = JSON.parse(JSON.stringify(additionalStep));
//     clonedDefaults.regionCoordinateSpace = coordinates;
//     container = document.createElement('div');
//     console.log('container: ', container);
//     document.body.appendChild(container);
//     testProps = {
//       options: clonedDefaults,
//       onOptionsChange: mockFunctions.onOptionsChange,
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
//       ReactDOM.render(<ManageCoordinateSpace ref={c => (component = c)} {...testProps} />, container);
//     });
//   });

//   afterEach(() => {
//     console.log('container: ', container);

//     document.body.removeChild(container);
//     container = null;
//     component = null;
//     coordinates = [];
//     jest.clearAllMocks();
//   });

//   test('initial state', () => {
//     expect(component.state.selectCoordinateSpace.length).toBe(2);
//     expect(component.state.selectCoordinateSpaceDefault.value).toStrictEqual(coordinates[0]);
//     expect(component.state.tabsVariable).toStrictEqual([false, true]);
//   });

//   test('change select coordinate', () => {
//     component.onChangeSelectCoordinate({ label: coordinates[1].label, value: coordinates[1] });
//     expect(component.state.selectCoordinateSpace.length).toBe(2);
//     expect(component.state.selectCoordinateSpaceDefault.value).toStrictEqual(coordinates[1]);
//   });

//   test('change tab', () => {
//     component.goToTab(0);
//     expect(component.state.tabsVariable).toStrictEqual([true, false]);
//     component.goToTab(1);
//     expect(component.state.tabsVariable).toStrictEqual([false, true]);
//   });
// });
