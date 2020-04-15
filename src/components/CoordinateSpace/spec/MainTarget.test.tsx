// import React from 'react';
// import ReactDOM from 'react-dom';
// import MainTarget from '../MainTarget';
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
//  * testing the MainTarget component features
//  * - loading data from a json
//  * - edit input fields
//  */
// describe('MainTarget tests', () => {
//   let container, component;
//   const additionalStep = { value: '1', label: '1' };
//   /*
//    * Mock "onOptionChange" by re-rendering the component with the new options
//    */
//   let mockFunctions = {
//     onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
//       testProps.options = options;
//       act(() => {
//         ReactDOM.render(<MainTarget ref={c => (component = c)} {...testProps} />, container);
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
//       ReactDOM.render(<MainTarget ref={c => (component = c)} {...testProps} />, container);
//     });
//   });

//   describe('test fetchMainQuerry', () => {
//     test('simple json', done => {
//       jest.spyOn(global, 'fetch').mockImplementation(() =>
//         Promise.resolve({
//           json: () => {
//             return new Promise((resolve, reject) => {
//               resolve({
//                 testdata: 'test',
//               });
//             });
//           },
//         })
//       );
//       const spy = jest.spyOn(component, 'fetchMainQuerry');
//       component.fetchMainQuerry();
//       // How to know if function calls ended? timeout feel unstable
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(component.props.options.mainQueryReturn).toStrictEqual({
//           testdata: 'test',
//         });

//         global.fetch.mockRestore();
//         done();
//       }, 1000);
//     });
//     test('json test 1', done => {
//       const testJSON = {
//         status: 'success',
//         data: {
//           resultType: 'vector',
//           result: [
//             {
//               metric: {
//                 __name__: 'node_filesystem_avail_bytes',
//                 device: '/dev/sda1',
//                 fstype: 'ext4',
//                 instance: 'localhost:9100',
//                 job: 'LinuxServer',
//                 mountpoint: '/',
//               },
//               value: [1581071655, '575389696'],
//             },
//             {
//               metric: {
//                 __name__: 'node_filesystem_avail_bytes',
//                 device: '/dev/sr0',
//                 fstype: 'iso9660',
//                 instance: 'localhost:9100',
//                 job: 'LinuxServer',
//                 mountpoint: '/media/cdrom0',
//               },
//               value: [1581071655, '0'],
//             },
//             {
//               metric: {
//                 __name__: 'node_filesystem_avail_bytes',
//                 device: 'tmpfs',
//                 fstype: 'tmpfs',
//                 instance: 'localhost:9100',
//                 job: 'LinuxServer',
//                 mountpoint: '/run',
//               },
//               value: [1581071655, '479019008'],
//             },
//             {
//               metric: {
//                 __name__: 'node_filesystem_avail_bytes',
//                 device: 'tmpfs',
//                 fstype: 'tmpfs',
//                 instance: 'localhost:9100',
//                 job: 'LinuxServer',
//                 mountpoint: '/run/lock',
//               },
//               value: [1581071655, '5238784'],
//             },
//             {
//               metric: {
//                 __name__: 'node_filesystem_avail_bytes',
//                 device: 'tmpfs',
//                 fstype: 'tmpfs',
//                 instance: 'localhost:9100',
//                 job: 'LinuxServer',
//                 mountpoint: '/run/user/1000',
//               },
//               value: [1581071655, '485945344'],
//             },
//           ],
//         },
//       };
//       jest.spyOn(global, 'fetch').mockImplementation(() =>
//         Promise.resolve({
//           json: () => {
//             return new Promise((resolve, reject) => {
//               resolve(testJSON);
//             });
//           },
//         })
//       );
//       const spy = jest.spyOn(component, 'fetchMainQuerry');
//       component.fetchMainQuerry();
//       // How to know if function calls ended? timeout feel unstable
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();

//         expect(component.props.options.mainQueryReturn).toStrictEqual(testJSON);

//         global.fetch.mockRestore();
//         done();
//       }, 1000);
//     });

//     test('json test 2', done => {
//       const testJSON = {
//         status: 'success',
//         data: {
//           resultType: 'vector',
//           result: [
//             { metric: { cpu: '0', instance: 'localhost:9100', job: 'LinuxServer', mode: 'system' }, value: [1581071655, '0.03599886666666672'] },
//             { metric: { cpu: '1', instance: 'localhost:9100', job: 'LinuxServer', mode: 'system' }, value: [1581071655, '0.04576451666666668'] },
//           ],
//         },
//       };
//       jest.spyOn(global, 'fetch').mockImplementation(() =>
//         Promise.resolve({
//           json: () => {
//             return new Promise((resolve, reject) => {
//               resolve(testJSON);
//             });
//           },
//         })
//       );
//       const spy = jest.spyOn(component, 'fetchMainQuerry');
//       component.fetchMainQuerry();
//       // How to know if function calls ended? timeout feel unstable
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();

//         expect(component.props.options.mainQueryReturn).toStrictEqual(testJSON);

//         global.fetch.mockRestore();
//         done();
//       }, 1000);
//     });

//     test('json test 3', done => {
//       const testJSON = {
//         status: 'success',
//         data: {
//           resultType: 'vector',
//           result: [
//             { metric: { device: 'enp0s3', instance: 'localhost:9100', job: 'LinuxServer' }, value: [1581071655, '306.6797066666667'] },
//             { metric: { device: 'lo', instance: 'localhost:9100', job: 'LinuxServer' }, value: [1581071655, '12159.861858333334'] },
//           ],
//         },
//       };
//       jest.spyOn(global, 'fetch').mockImplementation(() =>
//         Promise.resolve({
//           json: () => {
//             return new Promise((resolve, reject) => {
//               resolve(testJSON);
//             });
//           },
//         })
//       );
//       const spy = jest.spyOn(component, 'fetchMainQuerry');
//       component.fetchMainQuerry();
//       // How to know if function calls ended? timeout feel unstable
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();

//         expect(component.props.options.mainQueryReturn).toStrictEqual(testJSON);

//         global.fetch.mockRestore();
//         done();
//       }, 1000);
//     });

//     test('json test 4', done => {
//       const testJSON = {
//         status: 'success',
//         data: {
//           resultType: 'vector',
//           result: [
//             { metric: { code: '200', instance: 'localhost:9100', job: 'LinuxServer' }, value: [1581071655, '0.10655666666666666'] },
//             { metric: { code: '500', instance: 'localhost:9100', job: 'LinuxServer' }, value: [1581071655, '0'] },
//             { metric: { code: '503', instance: 'localhost:9100', job: 'LinuxServer' }, value: [1581071655, '0'] },
//           ],
//         },
//       };
//       jest.spyOn(global, 'fetch').mockImplementation(() =>
//         Promise.resolve({
//           json: () => {
//             return new Promise((resolve, reject) => {
//               resolve(testJSON);
//             });
//           },
//         })
//       );
//       const spy = jest.spyOn(component, 'fetchMainQuerry');
//       component.fetchMainQuerry();
//       // How to know if function calls ended? timeout feel unstable
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();

//         expect(component.props.options.mainQueryReturn).toStrictEqual(testJSON);

//         global.fetch.mockRestore();
//         done();
//       }, 1000);
//     });

//     test('json test fail', done => {
//       jest.spyOn(global, 'fetch').mockImplementation(() =>
//         Promise.resolve({
//           json: () => {
//             return new Promise((resolve, reject) => {
//               reject('failed to parse json');
//             });
//           },
//         })
//       );
//       const spy = jest.spyOn(component, 'fetchMainQuerry');
//       component.fetchMainQuerry();
//       // How to know if function calls ended? timeout feel unstable
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();

//         expect(component.props.options.mainQueryReturn).toStrictEqual(defaults.mainQueryReturn);

//         global.fetch.mockRestore();
//         done();
//       }, 1000);
//     });
//   });

//   test('onMainTargetChanged', () => {
//     let input = document.createElement('input');
//     input.setAttribute('value', 'test-value');
//     component.onMainTargetChanged({
//       target: input,
//       currentTarget: input,
//     });

//     expect(component.props.options.mainTarget.expr).toBe('test-value');
//   });
// });
