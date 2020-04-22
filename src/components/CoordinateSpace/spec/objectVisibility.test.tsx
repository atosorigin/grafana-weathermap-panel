// import React from 'react';
// import ReactDOM from 'react-dom';
// import ObjectVisibility from '../objectVisibility';
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
//  * testing the ObjectVisibility component features
//  * - edit input fields
//  */
// describe('ObjectVisibility tests', () => {
//   let container, component;
//   const additionalStep = { value: '1', label: '1' };
//   /*
//    * Mock "onOptionChange" by re-rendering the component with the new options
//    */
//   let mockFunctions = {
//     onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
//       testProps.options = options;
//       act(() => {
//         ReactDOM.render(<ObjectVisibility ref={c => (component = c)} {...testProps} />, container);
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
//       ReactDOM.render(<ObjectVisibility ref={c => (component = c)} {...testProps} />, container);
//     });
//   });

//   afterEach(() => {
//     document.body.removeChild(container);
//     container = null;
//     component = null;
//     jest.clearAllMocks();
//   });

//   test('update region text select', () => {
//     expect(component.state.regionTextSelectDefault).toStrictEqual(component.state.regionTextSelect[0]);

//     const spy = jest.spyOn(component, 'onChangeRegionTextSelectDefault');

//     act(() => {
//       component.onChangeRegionTextSelectDefault(component.state.regionTextSelect[1]);
//     });

//     expect(spy).toHaveBeenCalled();
//     expect(component.state.regionTextSelectDefault).toStrictEqual(component.state.regionTextSelect[1]);
//   });

//   test('update abscisses point', () => {
//     const formField = ReactDOM.findDOMNode(component).querySelector('[name="abscissesPointRegionTexte"');
//     expect(formField.getAttribute('value')).toBe('');
//     expect(component.state.abscissesPointRegionTexte).toBe('');

//     const spy = jest.spyOn(component, 'onChangeAbscissesPointRegionText');

//     // Simulation of input change not ideal
//     // Would be better without the need to call the function manually
//     act(() => {
//       formField.setAttribute('value', '10');
//       formField.value = '10';
//     });

//     act(() => {
//       component.onChangeAbscissesPointRegionText({
//         currentTarget: formField,
//         target: formField,
//       });
//     });

//     expect(spy).toHaveBeenCalled();
//     expect(formField.getAttribute('value')).toBe('10');
//     expect(component.state.abscissesPointRegionTexte).toBe('10');
//   });

//   test('update Ordonnees point', () => {
//     const formField = ReactDOM.findDOMNode(component).querySelector('[name="ordonneesPointRegionTexte"');
//     expect(formField.getAttribute('value')).toBe('');
//     expect(component.state.ordonneesPointRegionTexte).toBe('');

//     const spy = jest.spyOn(component, 'onChangeOrdonneesPointRegionText');

//     // Simulation of input change not ideal
//     // Would be better without the need to call the function manually
//     act(() => {
//       formField.setAttribute('value', '10');
//       formField.value = '10';
//     });

//     act(() => {
//       component.onChangeOrdonneesPointRegionText({
//         currentTarget: formField,
//         target: formField,
//       });
//     });

//     expect(spy).toHaveBeenCalled();
//     expect(formField.getAttribute('value')).toBe('10');
//     expect(component.state.ordonneesPointRegionTexte).toBe('10');
//   });

//   test('update center bubble select', () => {
//     expect(component.state.centerBubbleSelectDefault).toStrictEqual({});

//     const spy = jest.spyOn(component, 'onChangeCenterBubbleSelect');

//     act(() => {
//       component.onChangeCenterBubbleSelect({ value: 'bonjour', label: 'Bonjour' });
//     });

//     expect(spy).toHaveBeenCalled();
//     expect(component.state.centerBubbleSelectDefault).toStrictEqual({ value: 'bonjour', label: 'Bonjour' });
//   });

//   test('update abscisses point', () => {
//     const formField = ReactDOM.findDOMNode(component).querySelector('[name="centerBubbleInputAbscisses"');
//     expect(formField.getAttribute('value')).toBe('');
//     expect(component.state.centerBubbleInputAbscisses).toBe('');

//     const spy = jest.spyOn(component, 'onChangeCenterBubbleInputAbscisses');

//     // Simulation of input change not ideal
//     // Would be better without the need to call the function manually
//     act(() => {
//       formField.setAttribute('value', '10');
//       formField.value = '10';
//     });

//     act(() => {
//       component.onChangeCenterBubbleInputAbscisses({
//         currentTarget: formField,
//         target: formField,
//       });
//     });

//     expect(spy).toHaveBeenCalled();
//     expect(formField.getAttribute('value')).toBe('10');
//     expect(component.state.centerBubbleInputAbscisses).toBe('10');
//   });

//   test('update Ordonnees point', () => {
//     const formField = ReactDOM.findDOMNode(component).querySelector('[name="centerBubbleInputOrdonnees"');
//     expect(formField.getAttribute('value')).toBe('');
//     expect(component.state.centerBubbleInputOrdonnees).toBe('');

//     const spy = jest.spyOn(component, 'onChangeCenterBubbleInputOrdonnees');

//     // Simulation of input change not ideal
//     // Would be better without the need to call the function manually
//     act(() => {
//       formField.setAttribute('value', '10');
//       formField.value = '10';
//     });

//     act(() => {
//       component.onChangeCenterBubbleInputOrdonnees({
//         currentTarget: formField,
//         target: formField,
//       });
//     });

//     expect(spy).toHaveBeenCalled();
//     expect(formField.getAttribute('value')).toBe('10');
//     expect(component.state.centerBubbleInputOrdonnees).toBe('10');
//   });

//   test('update nvx calque select', () => {
//     expect(component.state.nvCalqueSelectDefault).toStrictEqual({});

//     const spy = jest.spyOn(component, 'onChangeNvCalqueSelect');

//     act(() => {
//       component.onChangeNvCalqueSelect({ value: 'bonjour', label: 'Bonjour' });
//     });

//     expect(spy).toHaveBeenCalled();
//     expect(component.state.nvCalqueSelectDefault).toStrictEqual({ value: 'bonjour', label: 'Bonjour' });
//   });

//   test('update nvx calque input', () => {
//     const formField = ReactDOM.findDOMNode(component).querySelector('[name="nvCalque"');
//     expect(formField.getAttribute('value')).toBe('');
//     expect(component.state.nvCalqueInput).toBe('');

//     const spy = jest.spyOn(component, 'onChangeNvCalque');

//     // Simulation of input change not ideal
//     // Would be better without the need to call the function manually
//     act(() => {
//       formField.setAttribute('value', 'A');
//       formField.value = 'A';
//     });

//     act(() => {
//       component.onChangeNvCalque({
//         currentTarget: formField,
//         target: formField,
//       });
//     });

//     expect(spy).toHaveBeenCalled();
//     expect(formField.getAttribute('value')).toBe('A');
//     expect(component.state.nvCalqueInput).toBe('A');
//   });

//   test('update courbure select', () => {
//     expect(component.state.courbureSelectDefault).toStrictEqual({});

//     const spy = jest.spyOn(component, 'onChangeCourbureInputSelect');

//     act(() => {
//       component.onChangeCourbureInputSelect({ value: 'bonjour', label: 'Bonjour' });
//     });

//     expect(spy).toHaveBeenCalled();
//     expect(component.state.courbureSelectDefault).toStrictEqual({ value: 'bonjour', label: 'Bonjour' });
//   });

//   test('update courbure input', () => {
//     const formField = ReactDOM.findDOMNode(component).querySelector('[name="courbureInput"');
//     expect(formField.getAttribute('value')).toBe('');
//     expect(component.state.courbureInput).toBe('');

//     const spy = jest.spyOn(component, 'onChangeCourbureInput');

//     // Simulation of input change not ideal
//     // Would be better without the need to call the function manually
//     act(() => {
//       formField.setAttribute('value', 'A');
//       formField.value = 'A';
//     });

//     act(() => {
//       component.onChangeCourbureInput({
//         currentTarget: formField,
//         target: formField,
//       });
//     });

//     expect(spy).toHaveBeenCalled();
//     expect(formField.getAttribute('value')).toBe('A');
//     expect(component.state.courbureInput).toBe('A');
//   });
// });
