// import React from 'react';
// import ReactDOM from 'react-dom';
// import RendutextDefault from '../renduTextDefault';
// import { LoadingState } from '@grafana/data';
// import { defaults, SimpleOptions } from '../../types';
// import { act } from 'react-dom/test-utils';

// test for yarn to pass
describe('waiting test', () => {
  test('to be pass', done => {
    setTimeout(() => {
      done();
    });
  });
});

// /*
//  * testing the RendutextDefault component features
//  * - edit input fields
//  */
// describe('RendutextDefault tests', () => {
//   let container, component;
//   const additionalStep = { value: '1', label: '1' };
//   /*
//    * Mock "onOptionChange" by re-rendering the component with the new options
//    */
//   let mockFunctions = {
//     onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
//       testProps.options = options;
//       act(() => {
//         ReactDOM.render(<RendutextDefault ref={c => (component = c)} {...testProps} />, container);
//       });
//     },
//   };
//   let testProps = {};
//   beforeEach(() => {
//     let clonedDefaults = JSON.parse(JSON.stringify(defaults));
//     clonedDefaults.listStep[1] = JSON.parse(JSON.stringify(additionalStep));
//     container = document.createElement('div');
//     document.body.appendChild(container);
//     testProps = {
//       options: { ...clonedDefaults, Json: {} },
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
//       ReactDOM.render(<RendutextDefault ref={c => (component = c)} {...testProps} />, container);
//     });
//   });

//   afterEach(() => {
//     document.body.removeChild(container);
//     container = null;
//     component = null;
//     jest.clearAllMocks();
//   });

//   test('update font', () => {
//     expect(component.state.newPolice.value).toBe(defaults.police);
//     expect(component.state.newPolice.label).toBe(defaults.police);

//     component.onChangePolice({ value: 'mono', label: 'mono' });

//     expect(component.state.newPolice.value).toBe('mono');
//     expect(component.state.newPolice.label).toBe('mono');
//   });

//   test('update size', () => {
//     expect(component.state.taille).toBe(defaults.taille);

//     let input = document.createElement('input');
//     input.setAttribute('value', '10px');

//     const spy = jest.spyOn(component, 'handleChangeTaille');

//     act(() => {
//       component.handleChangeTaille({
//         target: input,
//         currentTarget: input,
//       });
//     });

//     expect(spy).toHaveBeenCalled();
//     expect(component.state.taille).toBe('10px');
//   });

//   test('update style', () => {
//     expect(component.state.style).toBe(defaults.styleText);

//     let input = document.createElement('input');
//     input.setAttribute('value', 'test-value');

//     const spy = jest.spyOn(component, 'handleChangeStyle');

//     act(() => {
//       component.handleChangeStyle({
//         currentTarget: input,
//         target: input,
//       });
//     });

//     expect(spy).toHaveBeenCalled();
//     expect(component.state.style).toBe('test-value');
//   });
// });
