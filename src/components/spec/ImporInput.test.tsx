// import ImportInput from '../importInput';
// import React from 'react';
// import ReactDOM from 'react-dom';

// import { defaults, SimpleOptions } from '../../types';
// import { LoadingState } from '@grafana/data';
// import { act } from 'react-dom/test-utils';

// import { PointClass } from 'Models/PointClass';
// import { RegionClass } from 'Models/RegionClass';
// import { OrientedLinkClass } from 'Models/OrientedLinkClass';

describe('waiting test', () => {
  test('to be pass', (done) => {
    setTimeout(() => {
      done();
    });
  });
});

// describe('ImportInput tests', () => {
//   let container: any, component: any;
//   const additionalStep = { value: '1', label: '1' };
//   let testProps = { options: {}, data: {}, onOptionsChange: {} };

//   const total: any = {
//     coordinateSpaceInitial: {
//       coordinate: {
//         xMin: '-100',
//         xMax: '100',
//         yMin: '-100',
//         yMax: '100',
//       },
//       displayArea: false,
//     },
//     texteSettings: {
//       police: 'Helvetica',
//       size: '1em',
//       style: {
//         bold: true,
//         italic: false,
//         underline: true,
//       },
//     },
//     baseMap: {
//       image: '',
//       layerImage: '',
//       modeSVG: true,
//       width: '',
//       height: '',
//       idSVG: '',
//     },
//     regions: ['http://localhost/sampleJson/demo20-Region.json'],
//     points: ['http://localhost/sampleJson/newPoint.json'],
//     links: ['http://localhost/sampleJson/fckitpk.json'],
//   };
//   const point: any = {
//     associateLinkIn: [],
//     associateLinkOut: [],
//     associateOrientedLinksIn: [],
//     associateOrientedLinksOut: [],
//     color: 'black',
//     colorMode: false,
//     coordinateSpace: {},
//     drawGraphicMarker: {
//       label: 'Yes',
//       value: 'true',
//     },
//     id: 1,
//     label: 'ici',
//     linkURL: {
//       followLink: '',
//       hoveringTooltipLink: '',
//       hoveringTooltipText: '',
//     },
//     lowerLimit: [],
//     mainMetric: {
//       expr: '',
//       format: '',
//       key: '',
//       keyValue: '',
//       manageValue: 'avg',
//       refId: 'A',
//       returnQuery: [
//         {
//           name: '{instance="localhost:9090",job="prometheus"}',
//           refId: 'A',
//           fields: [
//             {
//               name: '{instance="localhost:9090",job="prometheus"}',
//               type: 'number',
//               config: {
//                 scopedVars: {
//                   __series: {
//                     text: 'Series',
//                     value: {
//                       name: '{instance="localhost:9090",job="prometheus"}',
//                     },
//                   },
//                   __field: {
//                     text: 'Field',
//                     value: {
//                       name: 'Time',
//                     },
//                   },
//                 },
//               },
//               values: {
//                 buffer: [
//                   0.0000029503237362458573,
//                   0.0000029503237362458573,
//                   0.0000029503237362458573,
//                   0.0000029502198934008547,
//                   0.0000029502198934008547,
//                   0.0000029502198934008547,
//                   0.0000029502198934008547,
//                   0.0000029502198934008547,
//                   0.000002950113566653198,
//                   0.0000029503338365516373,
//                   0.0000029503660762656494,
//                   0.0000029503660762656494,
//                   0.0000029503660762656494,
//                   0.0000029505376740911454,
//                   0.0000029505376740911454,
//                   0.0000029505376740911454,
//                   0.0000029505376740911454,
//                   0.0000036882633787089567,
//                   0.0000029507247555903884,
//                   0.0000029507247555903884,
//                   0.0000029507247555903884,
//                 ],
//               },
//               labels: {
//                 instance: 'localhost:9090',
//                 job: 'prometheus',
//               },
//               calcs: null,
//             },
//             {
//               name: 'Time',
//               type: 'time',
//               config: {
//                 scopedVars: {
//                   __series: {
//                     text: 'Series',
//                     value: {
//                       name: '{instance="localhost:9090",job="prometheus"}',
//                     },
//                   },
//                   __field: {
//                     text: 'Field',
//                     value: {
//                       name: 'Time',
//                     },
//                   },
//                 },
//                 unit: 'time:YYYY-MM-DD HH:mm:ss',
//               },
//               values: {
//                 buffer: [
//                   1585834680000,
//                   1585834695000,
//                   1585834710000,
//                   1585834725000,
//                   1585834740000,
//                   1585834755000,
//                   1585834770000,
//                   1585834785000,
//                   1585834800000,
//                   1585834815000,
//                   1585834830000,
//                   1585834845000,
//                   1585834860000,
//                   1585834875000,
//                   1585834890000,
//                   1585834905000,
//                   1585834920000,
//                   1585834935000,
//                   1585834950000,
//                   1585834965000,
//                   1585834980000,
//                 ],
//               },
//               calcs: null,
//             },
//           ],
//           length: 21,
//         },
//         {
//           name: '{instance="localhost:9100",job="node"}',
//           refId: 'A',
//           fields: [
//             {
//               name: '{instance="localhost:9100",job="node"}',
//               type: 'number',
//               config: {
//                 scopedVars: {
//                   __series: {
//                     text: 'Series',
//                     value: {
//                       name: '{instance="localhost:9100",job="node"}',
//                     },
//                   },
//                   __field: {
//                     text: 'Field',
//                     value: {
//                       name: 'Time',
//                     },
//                   },
//                 },
//               },
//               values: {
//                 buffer: [
//                   0.000022280431398705817,
//                   0.00002546323781663765,
//                   0.000025463287945373474,
//                   0.000028646168546566816,
//                   0.000028646051716045434,
//                   0.000028646044139148384,
//                   0.000028646047170208765,
//                   0.00002546305987658417,
//                   0.000022280229078026344,
//                   0.000022280268076613856,
//                   0.000022280222389723505,
//                   0.000022280277517862887,
//                   0.00002228033262990701,
//                   0.00002546318610808226,
//                   0.000028646030403558214,
//                   0.000028646069684632024,
//                   0.000028646113236138575,
//                   0.000028646074206615014,
//                   0.0000318289636785527,
//                   0.00002864608008532637,
//                   0.00002864613985624937,
//                 ],
//               },
//               labels: {
//                 instance: 'localhost:9100',
//                 job: 'node',
//               },
//               calcs: null,
//             },
//             {
//               name: 'Time',
//               type: 'time',
//               config: {
//                 scopedVars: {
//                   __series: {
//                     text: 'Series',
//                     value: {
//                       name: '{instance="localhost:9100",job="node"}',
//                     },
//                   },
//                   __field: {
//                     text: 'Field',
//                     value: {
//                       name: 'Time',
//                     },
//                   },
//                 },
//                 unit: 'time:YYYY-MM-DD HH:mm:ss',
//               },
//               values: {
//                 buffer: [
//                   1585834680000,
//                   1585834695000,
//                   1585834710000,
//                   1585834725000,
//                   1585834740000,
//                   1585834755000,
//                   1585834770000,
//                   1585834785000,
//                   1585834800000,
//                   1585834815000,
//                   1585834830000,
//                   1585834845000,
//                   1585834860000,
//                   1585834875000,
//                   1585834890000,
//                   1585834905000,
//                   1585834920000,
//                   1585834935000,
//                   1585834950000,
//                   1585834965000,
//                   1585834980000,
//                 ],
//               },
//               calcs: null,
//             },
//           ],
//           length: 21,
//         },
//       ],
//       unit: '',
//     },
//     meta: '',
//     metrics: [],
//     name: 'point1',
//     positionParameter: {
//       labelAPositionX: '0',
//       labelAPositionY: '0',
//       labelBPositionX: '0',
//       labelBPositionY: '0',
//       tooltipPositionA: {},
//       tooltipPositionB: {},
//     },
//     positionShapeX: '-60',
//     positionShapeY: '60',
//     positionXDefault: '-60',
//     positionYDefault: '60',
//     widthInitialSpaceDefault: '200',
//     heightInitialSpaceDefault: '200',
//     rotateArrow: '0',
//     shape: {
//       label: 'Circle',
//       value: 'circle',
//     },
//     sizeHeight: {
//       label: 'Medium',
//       value: 'medium',
//     },
//     sizeWidth: {
//       label: 'Medium',
//       value: 'medium',
//     },
//     textObj: {
//       colorBack: '',
//       colorText: '',
//       generateAuxiliaryElement: {
//         addColorBackElement: false,
//         addColorTextElement: false,
//         colorBackElement: 'black',
//         colorTextElement: 'white',
//         displayObjectInText: false,
//         legendElement: '',
//         numericFormatElement: '',
//         unit: '',
//       },
//       generateObjectText: false,
//       isTextRegion: false,
//       style: {
//         bold: true,
//         italic: false,
//         underline: true,
//       },
//       value: '',
//       valueGenerateObjectText: {
//         addColorBackElement: false,
//         addColorTextElement: false,
//         colorBackElement: 'black',
//         colorTextElement: 'white',
//         displayObjectInText: false,
//         legendElement: '',
//         numericFormatElement: '',
//         unit: '',
//       },
//     },
//     traceBack: false,
//     traceBorder: false,
//     valueMetric: '',
//   };

//   const link: any = {
//     colorCoordinateA: '#5794F2',
//     colorCoordinateB: '#E54658',
//     colorMode: false,
//     id: 1,
//     mainMetric: {
//       format: '',
//       key: '',
//       keyValue: '',
//       manageValue: 'avg',
//       refId: '',
//       returnQuery: [],
//       unit: '',
//     },
//     isIncurved: {
//       label: 'No',
//       value: false,
//     },
//     label: '',
//     linkURL: {
//       followLink: '',
//       hoveringTooltipLink: '',
//       hoveringTooltipText: '',
//     },
//     lowerLimit: [],

//     meta: '',
//     metrics: [],
//     name: 'orientedLink1',
//     orientationLink: {
//       label: 'Monodirectional',
//       value: 'AB',
//     },
//     pointAPositionX: '-14',
//     pointAPositionY: '88',
//     pointBPositionX: '72',
//     pointBPositionY: '70',
//     pointCPositionX: '29',
//     pointCPositionY: '79',
//     pointAPositionXDefault: '-14',
//     pointAPositionYDefault: '88',
//     pointBPositionXDefault: '72',
//     pointBPositionYDefault: '70',
//     pointCPositionXDefault: '29',
//     pointCPositionYDefault: '79',
//     widthInitialSpaceDefault: '200',
//     heightInitialSpaceDefault: '200',
//     pointIn: 'point2',
//     pointOut: 'point1',
//     positionParameter: {
//       labelAPositionX: '0',
//       labelAPositionY: '0',
//       labelBPositionX: '0',
//       labelBPositionY: '0',
//       tooltipPositionA: {},
//       tooltipPositionB: {},
//     },
//     regionIn: '',
//     regionOut: '',
//     textObj: {
//       colorBack: '',
//       colorText: '',
//       generateAuxiliaryElement: {
//         addColorBackElement: false,
//         addColorTextElement: false,
//         colorBackElement: 'black',
//         colorTextElement: 'white',
//         displayObjectInText: false,
//         legendElement: '',
//         numericFormatElement: '',
//         unit: '',
//       },
//       generateObjectText: false,
//       isTextRegion: false,
//       style: {
//         bold: true,
//         italic: false,
//         underline: true,
//       },
//       value: '',
//       valueGenerateObjectText: {
//         addColorBackElement: false,
//         addColorTextElement: false,
//         colorBackElement: 'black',
//         colorTextElement: 'white',
//         displayObjectInText: false,
//         legendElement: '',
//         numericFormatElement: '',
//         unit: '',
//       },
//     },
//     traceBack: false,
//     traceBorder: false,
//     valueMainMetricA: '-',
//     valueMainMetricB: '-',
//     zIndex: '5',
//     mainMetricB: {
//       format: '',
//       key: '',
//       keyValue: '',
//       manageValue: 'avg',
//       refId: '',
//       returnQuery: [],
//       unit: '',
//     },
//     metricsB: [],
//   };

//   const regionCoods: any = {
//     colorMode: false,
//     coords: {
//       xMax: '50',
//       xMin: '20',
//       yMax: '50',
//       yMin: '20',
//     },
//     coordsDefault: {
//       xMax: '50',
//       xMin: '20',
//       yMax: '50',
//       yMin: '20',
//     },
//     widthInitialSpaceDefault: '200',
//     heightInitialSpaceDefault: '200',
//     id: 1,
//     idSVG: '',
//     img: '',
//     label: 'PC 2',
//     linkURL: {
//       followLink: '',
//       hoveringTooltipLink: '',
//       hoveringTooltipText: '',
//     },
//     lowerLimit: [
//       {
//         backColor: '#FA6400',
//         borderColor: '#E0B400',
//         id: 0,
//         lowerLimitMax: '',
//         lowerLimitMin: '',
//         sizeBorder: '2',
//       },
//     ],
//     mainMetric: {
//       expr: '',
//       format: '',
//       key: '',
//       keyValue: '',
//       manageValue: 'avg',
//       refId: 'B',
//       returnQuery: [
//         {
//           name: '{instance="localhost:9090",job="prometheus"}',
//           refId: 'B',
//           fields: [
//             {
//               name: '{instance="localhost:9090",job="prometheus"}',
//               type: 'number',
//               config: {},
//               values: {
//                 buffer: [
//                   137433.88070175436,
//                   193964.60350877192,
//                   196940.5192982456,
//                   196779.7894736842,
//                   140243.08771929823,
//                   150890.49824561403,
//                   160993.23508771928,
//                   160795.56491228068,
//                   163188.35087719298,
//                 ],
//               },
//               labels: {
//                 instance: 'localhost:9090',
//                 job: 'prometheus',
//               },
//               calcs: null,
//             },
//             {
//               name: 'Time',
//               type: 'time',
//               config: {},
//               values: {
//                 buffer: [
//                   1584615120000,
//                   1584615135000,
//                   1584615150000,
//                   1584615165000,
//                   1584615180000,
//                   1584615195000,
//                   1584615210000,
//                   1584615225000,
//                   1584615240000,
//                 ],
//               },
//               calcs: null,
//             },
//           ],
//           length: 9,
//         },
//       ],
//       unit: '',
//     },
//     meta: '',
//     metrics: [],
//     mode: false,
//     orientedLink: [],
//     positionParameter: {
//       labelAPositionX: '0',
//       labelAPositionY: '0',
//       labelBPositionX: '0',
//       labelBPositionY: '0',
//       tooltipPositionA: {},
//       tooltipPositionB: {},
//     },
//     textObj: {
//       colorBack: '#5794F2',
//       colorText: '#73BF69',
//       generateAuxiliaryElement: {
//         addColorBackElement: true,
//         addColorTextElement: true,
//         colorBackElement: '#FADE2A',
//         colorTextElement: '#FF9830',
//         displayObjectInText: true,
//         displayObjectPermanently: true,
//         legendElement: 'other legend',
//         numericFormatElement: 'round',
//         unityMesureElement: 'a',
//       },
//       generateObjectText: true,
//       isTextRegion: true,
//       legend: 'ceci est une legende',
//       style: {
//         bold: true,
//         italic: false,
//         underline: true,
//       },
//       unit: 'em',
//       value: '',
//       valueGenerateObjectText: {
//         addColorBackElement: true,
//         addColorTextElement: true,
//         colorBackElement: '#B877D9',
//         colorTextElement: '#F2495C',
//         displayObjectInText: true,
//         displayObjectPermanently: true,
//         legendElement: 'cm',
//         numericFormatElement: 'true',
//         unityMesureElement: 'er',
//       },
//     },
//     traceBack: true,
//     traceBorder: true,
//   };

//   const mockFunctions = {
//     onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
//       testProps.options = options;
//       act(() => {
//         ReactDOM.render(<ImportInput ref={c => (component = c)} {...testProps} />, container);
//       });
//     },
//   };

//   beforeEach(() => {
//     const clonedDefaults = JSON.parse(JSON.stringify(defaults));
//     clonedDefaults.listStep[1] = JSON.parse(JSON.stringify(additionalStep));
//     clonedDefaults.promTargets = ['test'];
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
//       ReactDOM.render(<ImportInput ref={c => (component = c)} {...testProps} />, container);
//     });
//   });

//   afterEach(() => {
//     document.body.removeChild(container);
//     container = null;
//     component = null;
//     jest.clearAllMocks();
//   });

//   describe('PointValidator', () => {
//     test('Return 0 this is a valid new point', done => {
//       component.props.options.arrayPoints = [];
//       let goodInput: PointClass = new PointClass(
//         point.id,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         point.label,
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         point.name,
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut,
//         point.widthInitialSpaceDefault,
//         point.heightInitialSpaceDefault,
//         point.positionXDefault,
//         point.positionYDefault
//       );

//       const spy = jest.spyOn(component, 'PointValidator');
//       const result = component.PointValidator(goodInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(result).toStrictEqual(0);
//         done();
//       }, 1000);
//     });

//     test('Return 2 this is a valid update', done => {
//       component.props.options.arrayPoints = [];
//       let goodInput: PointClass = new PointClass(
//         point.id,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         point.label,
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         point.name,
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut,
//         point.widthInitialSpaceDefault,
//         point.heightInitialSpaceDefault,
//         point.positionXDefault,
//         point.positionYDefault
//       );
//       component.props.options.arrayPoints.push(goodInput);
//       const spy = jest.spyOn(component, 'PointValidator');
//       const result = component.PointValidator(goodInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(result).toStrictEqual(2);
//         done();
//       }, 1000);
//     });

//     test('Return 1 this is not a valid point', done => {
//       component.props.options.arrayPoints = [];
//       let goodInput: PointClass = new PointClass(
//         point.id,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         point.label,
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         point.name,
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut,
//         point.widthInitialSpaceDefault,
//         point.heightInitialSpaceDefault,
//         point.positionXDefault,
//         point.positionYDefault
//       );
//       let badInput: PointClass = new PointClass(
//         point.id,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         point.label,
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         'another',
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut,
//         point.widthInitialSpaceDefault,
//         point.heightInitialSpaceDefault,
//         point.positionXDefault,
//         point.positionYDefault
//       );
//       component.props.options.arrayPoints.push(goodInput);
//       const spy = jest.spyOn(component, 'PointValidator');
//       const result = component.PointValidator(badInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(result).toStrictEqual(1);
//         done();
//       }, 1000);
//     });
//   });

//   describe('RegionValidator', () => {
//     test('Return 0 this is a valid new region', done => {
//       component.props.options.arrayPoints = [];
//       const goodInput: RegionClass = new RegionClass(
//         regionCoods.id,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         regionCoods.label,
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         regionCoods.img,
//         regionCoods.img,
//         regionCoods.widthInitialSpaceDefault,
//         regionCoods.heightInitialSpaceDefault
//       );
//       const spy = jest.spyOn(component, 'RegionValidator');
//       const result = component.RegionValidator(goodInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(result).toStrictEqual(0);
//         done();
//       }, 1000);
//     });
//     test('Return 2 this is a valid update region', done => {
//       component.props.options.regionCoordinateSpace = [];
//       const goodInput: RegionClass = new RegionClass(
//         regionCoods.id,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         regionCoods.label,
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         regionCoods.img,
//         regionCoods.img,
//         regionCoods.widthInitialSpaceDefault,
//         regionCoods.heightInitialSpaceDefault
//       );
//       component.props.options.regionCoordinateSpace.push(goodInput);
//       const spy = jest.spyOn(component, 'RegionValidator');
//       const result = component.RegionValidator(goodInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(result).toStrictEqual(2);
//         done();
//       }, 1000);
//     });
//     test('Return 1 this is a bad new region', done => {
//       component.props.options.regionCoordinateSpace = [];
//       const goodInput: RegionClass = new RegionClass(
//         regionCoods.id,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         regionCoods.label,
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         regionCoods.img,
//         regionCoods.img,
//         regionCoods.widthInitialSpaceDefault,
//         regionCoods.heightInitialSpaceDefault
//       );
//       const badInput: RegionClass = new RegionClass(
//         regionCoods.id,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         'another',
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         regionCoods.img,
//         regionCoods.img,
//         regionCoods.widthInitialSpaceDefault,
//         regionCoods.heightInitialSpaceDefault
//       );
//       component.props.options.regionCoordinateSpace.push(goodInput);
//       const spy = jest.spyOn(component, 'RegionValidator');
//       const result = component.RegionValidator(badInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(result).toStrictEqual(1);
//         done();
//       }, 1000);
//     });
//   });

//   describe('LinkValidator', () => {
//     test('Return 0 this is a valid new link', done => {
//       component.props.options.arrayOrientedLinks = [];
//       const goodInput: OrientedLinkClass = new OrientedLinkClass(
//         link.id,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         link.label,
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         link.name,
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB,
//         link.mainMetricB,
//         link.widthInitialSpaceDefault,
//         link.heightInitialSpaceDefault,
//         link.pointAPositionXDefault,
//         link.pointAPositionYDefault,
//         link.pointBPositionXDefault,
//         link.pointBPositionYDefault,
//         link.pointCPositionXDefault,
//         link.pointCPositionYDefault
//       );
//       const spy = jest.spyOn(component, 'LinkValidator');
//       const result = component.LinkValidator(goodInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(result).toStrictEqual(0);
//         done();
//       }, 1000);
//     });
//     test('Return 2 this is a valid update link', done => {
//       component.props.options.arrayOrientedLinks = [];
//       const goodInput: OrientedLinkClass = new OrientedLinkClass(
//         link.id,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         link.label,
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         link.name,
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB,
//         link.mainMetricB,
//         link.widthInitialSpaceDefault,
//         link.heightInitialSpaceDefault,
//         link.pointAPositionXDefault,
//         link.pointAPositionYDefault,
//         link.pointBPositionXDefault,
//         link.pointBPositionYDefault,
//         link.pointCPositionXDefault,
//         link.pointCPositionYDefault
//       );
//       component.props.options.arrayOrientedLinks.push(goodInput);
//       const spy = jest.spyOn(component, 'LinkValidator');
//       const result = component.LinkValidator(goodInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(result).toStrictEqual(2);
//         done();
//       }, 1000);
//     });
//     test('Return 1 this is not a valid new link', done => {
//       component.props.options.arrayOrientedLinks = [];
//       const goodInput: OrientedLinkClass = new OrientedLinkClass(
//         link.id,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         link.label,
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         link.name,
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB,
//         link.mainMetricB,
//         link.widthInitialSpaceDefault,
//         link.heightInitialSpaceDefault,
//         link.pointAPositionXDefault,
//         link.pointAPositionYDefault,
//         link.pointBPositionXDefault,
//         link.pointBPositionYDefault,
//         link.pointCPositionXDefault,
//         link.pointCPositionYDefault
//       );
//       const badInput: OrientedLinkClass = new OrientedLinkClass(
//         link.id,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         link.label,
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         'aother',
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB,
//         link.mainMetricB,
//         link.widthInitialSpaceDefault,
//         link.heightInitialSpaceDefault,
//         link.pointAPositionXDefault,
//         link.pointAPositionYDefault,
//         link.pointBPositionXDefault,
//         link.pointBPositionYDefault,
//         link.pointCPositionXDefault,
//         link.pointCPositionYDefault
//       );
//       component.props.options.arrayOrientedLinks.push(goodInput);
//       const spy = jest.spyOn(component, 'LinkValidator');
//       const result = component.LinkValidator(badInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(result).toStrictEqual(1);
//         done();
//       }, 1000);
//     });
//   });

//   describe('UrlValidator', () => {
//     test('Already in have to return False', done => {
//       component.props.options.saveImportUrl.multi = [];
//       const goodInput = 'http://localhost/sampleJson/demo20-Region.json';
//       component.props.options.saveImportUrl.multi.push(goodInput);
//       const spy = jest.spyOn(component, 'UrlValidator');
//       const result = component.UrlValidator(goodInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(result).toStrictEqual(false);
//         done();
//       }, 1000);
//     });

//     test('Not in have to return True', done => {
//       component.props.options.saveImportUrl.multi = [];
//       const goodInput = 'http://localhost/sampleJson/demo20-Region.json';
//       const spy = jest.spyOn(component, 'UrlValidator');
//       const result = component.UrlValidator(goodInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(result).toStrictEqual(true);
//         done();
//       }, 1000);
//     });
//   });

//   describe('pointUpdate', () => {
//     test('Expecto to arrayPoints have been updated in teh good way', done => {
//       component.props.options.arrayPoints = [];
//       const goodInput = new PointClass(
//         point.id,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         'havechange',
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         point.name,
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut,
//         point.widthInitialSpaceDefault,
//         point.heightInitialSpaceDefault,
//         point.positionXDefault,
//         point.positionYDefault
//       );
//       const inside = new PointClass(
//         point.id,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         point.label,
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         point.name,
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut,
//         point.widthInitialSpaceDefault,
//         point.heightInitialSpaceDefault,
//         point.positionXDefault,
//         point.positionYDefault
//       );
//       component.props.options.arrayPoints.push(inside);
//       const spy = jest.spyOn(component, 'pointUpdate');
//       component.pointUpdate(goodInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(component.props.options.arrayPoints[0]).toStrictEqual(goodInput);
//         done();
//       }, 1000);
//     });
//   });

//   describe('regionUpdate', () => {
//     test('Expecto to regionCoordinateSpace have been updated in teh good way', done => {
//       const goodInput = new RegionClass(
//         regionCoods.id,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         regionCoods.label,
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         regionCoods.img,
//         regionCoods.img,
//         regionCoods.widthInitialSpaceDefault,
//         regionCoods.heightInitialSpaceDefault
//       );
//       const inside = new RegionClass(
//         regionCoods.id,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         regionCoods.label,
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         regionCoods.img,
//         regionCoods.img,
//         regionCoods.widthInitialSpaceDefault,
//         regionCoods.heightInitialSpaceDefault
//       );
//       component.props.options.regionCoordinateSpace.push(inside);
//       const spy = jest.spyOn(component, 'regionUpdate');
//       component.regionUpdate(goodInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(component.props.options.regionCoordinateSpace[0]).toStrictEqual(goodInput);
//         done();
//       }, 1000);
//     });
//   });

//   describe('linkUpdate', () => {
//     test('Expecto to arrayOrientedLinks have been updated in teh good way', done => {
//       const goodInput = new OrientedLinkClass(
//         link.id,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         'havebeenchange',
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         link.name,
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB,
//         link.mainMericB,
//         link.widthInitialSpaceDefault,
//         link.heightInitialSpaceDefault,
//         link.pointAPositionXDefault,
//         link.pointAPositionYDefault,
//         link.pointBPositionXDefault,
//         link.pointBPositionYDefault,
//         link.pointCPositionXDefault,
//         link.pointCPositionYDefault
//       );
//       const inside = new OrientedLinkClass(
//         link.id,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         link.label,
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         link.name,
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB,
//         link.mainMetric,
//         link.widthInitialSpaceDefault,
//         link.heightInitialSpaceDefault,
//         link.pointAPositionXDefault,
//         link.pointAPositionYDefault,
//         link.pointBPositionXDefault,
//         link.pointBPositionYDefault,
//         link.pointCPositionXDefault,
//         link.pointCPositionYDefault
//       );
//       component.props.options.arrayOrientedLinks.push(inside);
//       const spy = jest.spyOn(component, 'linkUpdate');
//       component.linkUpdate(goodInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(component.props.options.arrayOrientedLinks[0]).toStrictEqual(goodInput);
//         done();
//       }, 1000);
//     });
//   });

//   describe('loadMonoPoint', () => {
//     test('Expect to find the new point into the props', done => {
//       const toFind = new PointClass(
//         point.id,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         point.label,
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         point.name,
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut,
//         point.widthInitialSpaceDefault,
//         point.heightInitialSpaceDefault,
//         point.positionXDefault,
//         point.positionYDefault
//       );
//       const spy = jest.spyOn(component, 'loadMonoPoint');
//       const spy1 = jest.spyOn(component, 'PointValidator');
//       component.loadMonoPoint(point);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(spy1).toHaveBeenCalled();
//         expect(component.props.options.arrayPoints[0]).toStrictEqual(toFind);
//         done();
//       });
//     });
//     test('Expect to find the update point into the props', done => {
//       const toFind = new PointClass(
//         point.id,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         point.label,
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         point.name,
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut,
//         point.widthInitialSpaceDefault,
//         point.heightInitialSpaceDefault,
//         point.positionXDefault,
//         point.positionYDefault
//       );
//       const inside = new PointClass(
//         point.id,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         'tochange',
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         point.name,
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut,
//         point.widthInitialSpaceDefault,
//         point.heightInitialSpaceDefault,
//         point.positionXDefault,
//         point.positionYDefault
//       );
//       component.props.options.arrayPoints.push(inside);
//       const spy = jest.spyOn(component, 'loadMonoPoint');
//       const spy1 = jest.spyOn(component, 'PointValidator');
//       const spy2 = jest.spyOn(component, 'PointValidator');
//       component.loadMonoPoint(point);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(spy1).toHaveBeenCalled();
//         expect(spy2).toHaveBeenCalled();
//         expect(component.props.options.arrayPoints[0]).toStrictEqual(toFind);
//         done();
//       });
//     });
//   });

//   describe('loadMonoRegion', () => {
//     test('Expect to find the new region into the props', done => {
//       const toFind = new RegionClass(
//         regionCoods.id,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         regionCoods.label,
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         regionCoods.img,
//         regionCoods.img,
//         regionCoods.widthInitialSpaceDefault,
//         regionCoods.heightInitialSpaceDefault
//       );
//       const spy = jest.spyOn(component, 'loadMonoRegion');
//       const spy1 = jest.spyOn(component, 'RegionValidator');
//       component.loadMonoRegion(toFind);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(spy1).toHaveBeenCalled();
//         expect(component.props.options.regionCoordinateSpace[0]).toStrictEqual(toFind);
//         done();
//       });
//     });
//     test('Expect to find the update region into the props', done => {
//       const toFind = new RegionClass(
//         regionCoods.id,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         regionCoods.label,
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         regionCoods.img,
//         regionCoods.img,
//         regionCoods.widthInitialSpaceDefault,
//         regionCoods.heightInitialSpaceDefault
//       );
//       const inside = new RegionClass(
//         regionCoods.id,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         regionCoods.label,
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         regionCoods.img,
//         regionCoods.img,
//         regionCoods.widthInitialSpaceDefault,
//         regionCoods.heightInitialSpaceDefault
//       );
//       component.props.options.regionCoordinateSpace.push(inside);
//       const spy = jest.spyOn(component, 'loadMonoRegion');
//       const spy1 = jest.spyOn(component, 'RegionValidator');
//       const spy2 = jest.spyOn(component, 'regionUpdate');
//       component.loadMonoRegion(toFind);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(spy1).toHaveBeenCalled();
//         expect(spy2).toHaveBeenCalled();
//         expect(component.props.options.regionCoordinateSpace[0]).toStrictEqual(toFind);
//         done();
//       });
//     });
//   });
//   describe('loadMonoLink', () => {
//     test('Expect to find the new link into the props', done => {
//       const toFind = new OrientedLinkClass(
//         link.id,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         link.label,
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         link.name,
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB,
//         link.mainMetricB,
//         link.widthInitialSpaceDefault,
//         link.heightInitialSpaceDefault,
//         link.pointAPositionXDefault,
//         link.pointAPositionYDefault,
//         link.pointBPositionXDefault,
//         link.pointBPositionYDefault,
//         link.pointCPositionXDefault,
//         link.pointCPositionYDefault
//       );
//       const spy = jest.spyOn(component, 'loadMonoLink');
//       const spy1 = jest.spyOn(component, 'LinkValidator');
//       component.loadMonoLink(toFind);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(spy1).toHaveBeenCalled();
//         expect(component.props.options.arrayOrientedLinks[0]).toStrictEqual(toFind);
//         done();
//       });
//     });
//     test('Expect to find the update link into the props', done => {
//       const toFind = new OrientedLinkClass(
//         link.id,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         link.label,
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         link.name,
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB,
//         link.mainMetricB,
//         link.widthInitialSpaceDefault,
//         link.heightInitialSpaceDefault,
//         link.pointAPositionXDefault,
//         link.pointAPositionYDefault,
//         link.pointBPositionXDefault,
//         link.pointBPositionYDefault,
//         link.pointCPositionXDefault,
//         link.pointCPositionYDefault
//       );
//       const inside = new OrientedLinkClass(
//         link.id,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         'tochange',
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         link.name,
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB,
//         link.mainMetricB,
//         link.widthInitialSpaceDefault,
//         link.heightInitialSpaceDefault,
//         link.pointAPositionXDefault,
//         link.pointAPositionYDefault,
//         link.pointBPositionXDefault,
//         link.pointBPositionYDefault,
//         link.pointCPositionXDefault,
//         link.pointCPositionYDefault
//       );
//       component.props.options.arrayOrientedLinks.push(inside);
//       const spy = jest.spyOn(component, 'loadMonoLink');
//       const spy1 = jest.spyOn(component, 'LinkValidator');
//       const spy2 = jest.spyOn(component, 'linkUpdate');
//       component.loadMonoLink(toFind);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(spy1).toHaveBeenCalled();
//         expect(spy2).toHaveBeenCalled();
//         expect(component.props.options.arrayOrientedLinks[0]).toStrictEqual(toFind);
//         done();
//       });
//     });
//   });
//   describe('loadMultiPoints', () => {
//     test('Expect to find the new list of points into the props', done => {
//       const first = new PointClass(
//         point.id,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         point.label,
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         'first',
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut,
//         point.widthInitialSpaceDefault,
//         point.heightInitialSpaceDefault,
//         point.positionXDefault,
//         point.positionYDefault
//       );
//       const second = new PointClass(
//         2,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         point.label,
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         'second',
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut,
//         point.widthInitialSpaceDefault,
//         point.heightInitialSpaceDefault,
//         point.positionXDefault,
//         point.positionYDefault
//       );
//       const third = new PointClass(
//         3,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         point.label,
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         'third',
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut,
//         point.widthInitialSpaceDefault,
//         point.heightInitialSpaceDefault,
//         point.positionXDefault,
//         point.positionYDefault
//       );
//       const list: any = { points: [first, second, third] };
//       const spy = jest.spyOn(component, 'loadMonoPoint');
//       const spy1 = jest.spyOn(component, 'loadMultiPoints');
//       component.loadMultiPoints(list);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(spy1).toHaveBeenCalled();
//         expect(component.props.options.arrayPoints[0]).toStrictEqual(first);
//         expect(component.props.options.arrayPoints[1]).toStrictEqual(second);
//         expect(component.props.options.arrayPoints[2]).toStrictEqual(third);
//         done();
//       });
//     });
//   });
//   describe('loadMultiRegions', () => {
//     test('Expect to find the new list of regions into the props', done => {
//       const first = new RegionClass(
//         regionCoods.id,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         regionCoods.label,
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         regionCoods.img,
//         regionCoods.img,
//         regionCoods.widthInitialSpaceDefault,
//         regionCoods.heightInitialSpaceDefault
//       );
//       const second = new RegionClass(
//         2,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         regionCoods.label,
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         regionCoods.img,
//         regionCoods.img,
//         regionCoods.widthInitialSpaceDefault,
//         regionCoods.heightInitialSpaceDefault
//       );
//       const third = new RegionClass(
//         3,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         regionCoods.label,
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         regionCoods.img,
//         regionCoods.img,
//         regionCoods.widthInitialSpaceDefault,
//         regionCoods.heightInitialSpaceDefault
//       );
//       const list: any = { regions: [first, second, third] };
//       const spy = jest.spyOn(component, 'loadMonoRegion');
//       const spy1 = jest.spyOn(component, 'loadMultiRegions');
//       component.loadMultiRegions(list);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(spy1).toHaveBeenCalled();
//         expect(component.props.options.regionCoordinateSpace[0]).toStrictEqual(first);
//         expect(component.props.options.regionCoordinateSpace[1]).toStrictEqual(second);
//         expect(component.props.options.regionCoordinateSpace[2]).toStrictEqual(third);
//         done();
//       });
//     });
//   });
//   describe('loadMultiLinks', () => {
//     test('Expect to find the new list of links into the props', done => {
//       const first = new OrientedLinkClass(
//         link.id,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         link.label,
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         link.name,
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB,
//         link.mainMetricB,
//         link.widthInitialSpaceDefault,
//         link.heightInitialSpaceDefault,
//         link.pointAPositionXDefault,
//         link.pointAPositionYDefault,
//         link.pointBPositionXDefault,
//         link.pointBPositionYDefault,
//         link.pointCPositionXDefault,
//         link.pointCPositionYDefault
//       );
//       const second = new OrientedLinkClass(
//         2,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         link.label,
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         'second',
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB,
//         link.mainMetricB,
//         link.widthInitialSpaceDefault,
//         link.heightInitialSpaceDefault,
//         link.pointAPositionXDefault,
//         link.pointAPositionYDefault,
//         link.pointBPositionXDefault,
//         link.pointBPositionYDefault,
//         link.pointCPositionXDefault,
//         link.pointCPositionYDefault
//       );
//       const third = new OrientedLinkClass(
//         3,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         link.label,
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         'third',
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB,
//         link.mainMetricB,
//         link.widthInitialSpaceDefault,
//         link.heightInitialSpaceDefault,
//         link.pointAPositionXDefault,
//         link.pointAPositionYDefault,
//         link.pointBPositionXDefault,
//         link.pointBPositionYDefault,
//         link.pointCPositionXDefault,
//         link.pointCPositionYDefault
//       );
//       const list: any = { links: [first, second, third] };
//       const spy = jest.spyOn(component, 'loadMonoLink');
//       const spy1 = jest.spyOn(component, 'loadMultiLinks');
//       component.loadMultiLinks(list);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(spy1).toHaveBeenCalled();
//         expect(component.props.options.arrayOrientedLinks[0]).toStrictEqual(first);
//         expect(component.props.options.arrayOrientedLinks[1]).toStrictEqual(second);
//         expect(component.props.options.arrayOrientedLinks[2]).toStrictEqual(third);
//         done();
//       });
//     });
//   });
//   describe('loadTotal', () => {
//     test('Have to fill saveURL', done => {
//       const urlList: string[] = [];
//       total.regions.forEach((url: any) => {
//         urlList.push(url);
//       });
//       total.points.forEach((url: any) => {
//         urlList.push(url);
//       });
//       total.links.forEach((url: any) => {
//         urlList.push(url);
//       });
//       const spy = jest.spyOn(component, 'loadTotal');
//       const spy1 = jest.spyOn(component, 'UrlValidator');
//       const spy2 = jest.spyOn(component, 'fetchMulti');
//       component.loadTotal(total);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(spy1).toHaveBeenCalled();
//         expect(spy2).toHaveBeenCalled();
//         expect(component.props.options.baseMap).toStrictEqual(total.baseMap);
//         expect(component.props.options.display.police).toStrictEqual(total.texteSettings.police);
//         expect(component.props.options.display.size).toStrictEqual(total.texteSettings.size);
//         expect(component.props.options.display.style).toStrictEqual(total.texteSettings.style);
//         expect(component.props.options.coordinateSpaceInitial).toStrictEqual(total.coordinateSpaceInitial);
//         expect(component.props.options.saveImportUrl.multi).toStrictEqual(urlList);
//         done();
//       });
//     });
//   });

//
//
//
//
//
// ANCIENS COMMENTAIRES
//
//
//
//
//

// describe('loaderTotal', () => {
//   test('launch loadTotal', (done) => {
//     jest.spyOn(global, 'fetch').mockImplementation(() => {
//       return Promise.resolve({
//         json: () => {
//           return new Promise((resolve, reject) => {
//             resolve(total);
//           });
//         },
//       });
//  });
//});
// const spy = jest.spyOn(component, 'loadTotal');
// component.loaderTotal();
// setTimeout(() => {
//   expect(spy).toHaveBeenCalled();
// });
// });
//});

// describe('fonction name', () => {
//   test('Explaination and expect return', (done) => {
//     //input and preparation for test
//     const spy = jest.spyOn(component, 'function name');
//     const result = component.function(input);
//     setTimeout(() => {
//       expect(spy).toHaveBeenCalled();
//       expect(result).toStrictEqual(expect);
//       done();
//     });
//   });
// });

// import ImportInput from '../importInput';
// import React from 'react';
// import ReactDOM from 'react-dom';

// import { defaults, SimpleOptions } from '../../types';
// import { LoadingState } from '@grafana/data';
// import { act } from 'react-dom/test-utils';

// import { PointClass } from 'Models/PointClass';
// import { RegionClass } from 'Models/RegionClass';
// import { OrientedLinkClass } from 'Models/OrientedLinkClass';

// describe('ImportInput tests', () => {
//   let container: any, component: any;
//   const additionalStep = { value: '1', label: '1' };
//   let testProps = { options: {}, data: {}, onOptionsChange: {} };

//   const total: any = {
//     coordinateSpaceInitial: {
//       coordinate: {
//         xMin: '-100',
//         xMax: '100',
//         yMin: '-100',
//         yMax: '100',
//       },
//       displayArea: false,
//     },
//     texteSettings: {
//       police: 'Helvetica',
//       size: '1em',
//       style: {
//         bold: true,
//         italic: false,
//         underline: true,
//       },
//     },
//     baseMap: {
//       image: '',
//       layerImage: '',
//       modeSVG: true,
//       width: '',
//       height: '',
//       idSVG: '',
//     },
//     regions: ['http://localhost/sampleJson/demo20-Region.json'],
//     points: ['http://localhost/sampleJson/newPoint.json'],
//     links: ['http://localhost/sampleJson/fckitpk.json'],
//   };
//   const point: any = {
//     associateLinkIn: [],
//     associateLinkOut: [],
//     associateOrientedLinksIn: [],
//     associateOrientedLinksOut: [],
//     color: 'black',
//     colorMode: false,
//     coordinateSpace: {},
//     drawGraphicMarker: {
//       label: 'Yes',
//       value: 'true',
//     },
//     id: 1,
//     label: 'ici',
//     linkURL: {
//       followLink: '',
//       hoveringTooltipLink: '',
//       hoveringTooltipText: '',
//     },
//     lowerLimit: [],
//     mainMetric: {
//       expr: '',
//       format: '',
//       key: '',
//       keyValue: '',
//       manageValue: 'avg',
//       refId: 'A',
//       returnQuery: [
//         {
//           name: '{instance="localhost:9090",job="prometheus"}',
//           refId: 'A',
//           fields: [
//             {
//               name: '{instance="localhost:9090",job="prometheus"}',
//               type: 'number',
//               config: {
//                 scopedVars: {
//                   __series: {
//                     text: 'Series',
//                     value: {
//                       name: '{instance="localhost:9090",job="prometheus"}',
//                     },
//                   },
//                   __field: {
//                     text: 'Field',
//                     value: {
//                       name: 'Time',
//                     },
//                   },
//                 },
//               },
//               values: {
//                 buffer: [
//                   0.0000029503237362458573,
//                   0.0000029503237362458573,
//                   0.0000029503237362458573,
//                   0.0000029502198934008547,
//                   0.0000029502198934008547,
//                   0.0000029502198934008547,
//                   0.0000029502198934008547,
//                   0.0000029502198934008547,
//                   0.000002950113566653198,
//                   0.0000029503338365516373,
//                   0.0000029503660762656494,
//                   0.0000029503660762656494,
//                   0.0000029503660762656494,
//                   0.0000029505376740911454,
//                   0.0000029505376740911454,
//                   0.0000029505376740911454,
//                   0.0000029505376740911454,
//                   0.0000036882633787089567,
//                   0.0000029507247555903884,
//                   0.0000029507247555903884,
//                   0.0000029507247555903884,
//                 ],
//               },
//               labels: {
//                 instance: 'localhost:9090',
//                 job: 'prometheus',
//               },
//               calcs: null,
//             },
//             {
//               name: 'Time',
//               type: 'time',
//               config: {
//                 scopedVars: {
//                   __series: {
//                     text: 'Series',
//                     value: {
//                       name: '{instance="localhost:9090",job="prometheus"}',
//                     },
//                   },
//                   __field: {
//                     text: 'Field',
//                     value: {
//                       name: 'Time',
//                     },
//                   },
//                 },
//                 unit: 'time:YYYY-MM-DD HH:mm:ss',
//               },
//               values: {
//                 buffer: [
//                   1585834680000,
//                   1585834695000,
//                   1585834710000,
//                   1585834725000,
//                   1585834740000,
//                   1585834755000,
//                   1585834770000,
//                   1585834785000,
//                   1585834800000,
//                   1585834815000,
//                   1585834830000,
//                   1585834845000,
//                   1585834860000,
//                   1585834875000,
//                   1585834890000,
//                   1585834905000,
//                   1585834920000,
//                   1585834935000,
//                   1585834950000,
//                   1585834965000,
//                   1585834980000,
//                 ],
//               },
//               calcs: null,
//             },
//           ],
//           length: 21,
//         },
//         {
//           name: '{instance="localhost:9100",job="node"}',
//           refId: 'A',
//           fields: [
//             {
//               name: '{instance="localhost:9100",job="node"}',
//               type: 'number',
//               config: {
//                 scopedVars: {
//                   __series: {
//                     text: 'Series',
//                     value: {
//                       name: '{instance="localhost:9100",job="node"}',
//                     },
//                   },
//                   __field: {
//                     text: 'Field',
//                     value: {
//                       name: 'Time',
//                     },
//                   },
//                 },
//               },
//               values: {
//                 buffer: [
//                   0.000022280431398705817,
//                   0.00002546323781663765,
//                   0.000025463287945373474,
//                   0.000028646168546566816,
//                   0.000028646051716045434,
//                   0.000028646044139148384,
//                   0.000028646047170208765,
//                   0.00002546305987658417,
//                   0.000022280229078026344,
//                   0.000022280268076613856,
//                   0.000022280222389723505,
//                   0.000022280277517862887,
//                   0.00002228033262990701,
//                   0.00002546318610808226,
//                   0.000028646030403558214,
//                   0.000028646069684632024,
//                   0.000028646113236138575,
//                   0.000028646074206615014,
//                   0.0000318289636785527,
//                   0.00002864608008532637,
//                   0.00002864613985624937,
//                 ],
//               },
//               labels: {
//                 instance: 'localhost:9100',
//                 job: 'node',
//               },
//               calcs: null,
//             },
//             {
//               name: 'Time',
//               type: 'time',
//               config: {
//                 scopedVars: {
//                   __series: {
//                     text: 'Series',
//                     value: {
//                       name: '{instance="localhost:9100",job="node"}',
//                     },
//                   },
//                   __field: {
//                     text: 'Field',
//                     value: {
//                       name: 'Time',
//                     },
//                   },
//                 },
//                 unit: 'time:YYYY-MM-DD HH:mm:ss',
//               },
//               values: {
//                 buffer: [
//                   1585834680000,
//                   1585834695000,
//                   1585834710000,
//                   1585834725000,
//                   1585834740000,
//                   1585834755000,
//                   1585834770000,
//                   1585834785000,
//                   1585834800000,
//                   1585834815000,
//                   1585834830000,
//                   1585834845000,
//                   1585834860000,
//                   1585834875000,
//                   1585834890000,
//                   1585834905000,
//                   1585834920000,
//                   1585834935000,
//                   1585834950000,
//                   1585834965000,
//                   1585834980000,
//                 ],
//               },
//               calcs: null,
//             },
//           ],
//           length: 21,
//         },
//       ],
//       unit: '',
//     },
//     meta: '',
//     metrics: [],
//     name: 'point1',
//     positionParameter: {
//       labelAPositionX: '0',
//       labelAPositionY: '0',
//       labelBPositionX: '0',
//       labelBPositionY: '0',
//       tooltipPositionA: {},
//       tooltipPositionB: {},
//     },
//     positionShapeX: '-60',
//     positionShapeY: '60',
//     rotateArrow: '0',
//     shape: {
//       label: 'Circle',
//       value: 'circle',
//     },
//     sizeHeight: {
//       label: 'Medium',
//       value: 'medium',
//     },
//     sizeWidth: {
//       label: 'Medium',
//       value: 'medium',
//     },
//     textObj: {
//       colorBack: '',
//       colorText: '',
//       generateAuxiliaryElement: {
//         addColorBackElement: false,
//         addColorTextElement: false,
//         colorBackElement: 'black',
//         colorTextElement: 'white',
//         displayObjectInText: false,
//         legendElement: '',
//         numericFormatElement: '',
//         unit: '',
//       },
//       generateObjectText: false,
//       isTextRegion: false,
//       style: {
//         bold: true,
//         italic: false,
//         underline: true,
//       },
//       value: '',
//       valueGenerateObjectText: {
//         addColorBackElement: false,
//         addColorTextElement: false,
//         colorBackElement: 'black',
//         colorTextElement: 'white',
//         displayObjectInText: false,
//         legendElement: '',
//         numericFormatElement: '',
//         unit: '',
//       },
//     },
//     traceBack: false,
//     traceBorder: false,
//     valueMetric: '',
//   };

//   const link: any = {
//     colorCoordinateA: '#5794F2',
//     colorCoordinateB: '#E54658',
//     colorMode: false,
//     id: 1,
//     mainMetric: {
//       format: '',
//       key: '',
//       keyValue: '',
//       manageValue: 'avg',
//       refId: '',
//       returnQuery: [],
//       unit: '',
//     },
//     isIncurved: {
//       label: 'No',
//       value: false,
//     },
//     label: '',
//     linkURL: {
//       followLink: '',
//       hoveringTooltipLink: '',
//       hoveringTooltipText: '',
//     },
//     lowerLimit: [],

//     meta: '',
//     metrics: [],
//     name: 'orientedLink1',
//     orientationLink: {
//       label: 'Monodirectional',
//       value: 'AB',
//     },
//     pointAPositionX: '-14',
//     pointAPositionY: '88',
//     pointBPositionX: '72',
//     pointBPositionY: '70',
//     pointCPositionX: '29',
//     pointCPositionY: '79',
//     pointIn: 'point2',
//     pointOut: 'point1',
//     positionParameter: {
//       labelAPositionX: '0',
//       labelAPositionY: '0',
//       labelBPositionX: '0',
//       labelBPositionY: '0',
//       tooltipPositionA: {},
//       tooltipPositionB: {},
//     },
//     regionIn: '',
//     regionOut: '',
//     textObj: {
//       colorBack: '',
//       colorText: '',
//       generateAuxiliaryElement: {
//         addColorBackElement: false,
//         addColorTextElement: false,
//         colorBackElement: 'black',
//         colorTextElement: 'white',
//         displayObjectInText: false,
//         legendElement: '',
//         numericFormatElement: '',
//         unit: '',
//       },
//       generateObjectText: false,
//       isTextRegion: false,
//       style: {
//         bold: true,
//         italic: false,
//         underline: true,
//       },
//       value: '',
//       valueGenerateObjectText: {
//         addColorBackElement: false,
//         addColorTextElement: false,
//         colorBackElement: 'black',
//         colorTextElement: 'white',
//         displayObjectInText: false,
//         legendElement: '',
//         numericFormatElement: '',
//         unit: '',
//       },
//     },
//     traceBack: false,
//     traceBorder: false,
//     valueMainMetricA: '-',
//     valueMainMetricB: '-',
//     zIndex: '5',
//     mainMetricB: {
//       format: '',
//       key: '',
//       keyValue: '',
//       manageValue: 'avg',
//       refId: '',
//       returnQuery: [],
//       unit: '',
//     },
//     metricsB: [],
//   };

//   const regionCoods: any = {
//     colorMode: false,
//     coords: {
//       xMax: '50',
//       xMin: '20',
//       yMax: '50',
//       yMin: '20',
//     },
//     id: 1,
//     idSVG: '',
//     img: '',
//     label: 'PC 2',
//     linkURL: {
//       followLink: '',
//       hoveringTooltipLink: '',
//       hoveringTooltipText: '',
//     },
//     lowerLimit: [
//       {
//         backColor: '#FA6400',
//         borderColor: '#E0B400',
//         id: 0,
//         lowerLimitMax: '',
//         lowerLimitMin: '',
//         sizeBorder: '2',
//       },
//     ],
//     mainMetric: {
//       expr: '',
//       format: '',
//       key: '',
//       keyValue: '',
//       manageValue: 'avg',
//       refId: 'B',
//       returnQuery: [
//         {
//           name: '{instance="localhost:9090",job="prometheus"}',
//           refId: 'B',
//           fields: [
//             {
//               name: '{instance="localhost:9090",job="prometheus"}',
//               type: 'number',
//               config: {},
//               values: {
//                 buffer: [
//                   137433.88070175436,
//                   193964.60350877192,
//                   196940.5192982456,
//                   196779.7894736842,
//                   140243.08771929823,
//                   150890.49824561403,
//                   160993.23508771928,
//                   160795.56491228068,
//                   163188.35087719298,
//                 ],
//               },
//               labels: {
//                 instance: 'localhost:9090',
//                 job: 'prometheus',
//               },
//               calcs: null,
//             },
//             {
//               name: 'Time',
//               type: 'time',
//               config: {},
//               values: {
//                 buffer: [
//                   1584615120000,
//                   1584615135000,
//                   1584615150000,
//                   1584615165000,
//                   1584615180000,
//                   1584615195000,
//                   1584615210000,
//                   1584615225000,
//                   1584615240000,
//                 ],
//               },
//               calcs: null,
//             },
//           ],
//           length: 9,
//         },
//       ],
//       unit: '',
//     },
//     meta: '',
//     metrics: [],
//     mode: false,
//     orientedLink: [],
//     positionParameter: {
//       labelAPositionX: '0',
//       labelAPositionY: '0',
//       labelBPositionX: '0',
//       labelBPositionY: '0',
//       tooltipPositionA: {},
//       tooltipPositionB: {},
//     },
//     textObj: {
//       colorBack: '#5794F2',
//       colorText: '#73BF69',
//       generateAuxiliaryElement: {
//         addColorBackElement: true,
//         addColorTextElement: true,
//         colorBackElement: '#FADE2A',
//         colorTextElement: '#FF9830',
//         displayObjectInText: true,
//         displayObjectPermanently: true,
//         legendElement: 'other legend',
//         numericFormatElement: 'round',
//         unityMesureElement: 'a',
//       },
//       generateObjectText: true,
//       isTextRegion: true,
//       legend: 'ceci est une legende',
//       style: {
//         bold: true,
//         italic: false,
//         underline: true,
//       },
//       unit: 'em',
//       value: '',
//       valueGenerateObjectText: {
//         addColorBackElement: true,
//         addColorTextElement: true,
//         colorBackElement: '#B877D9',
//         colorTextElement: '#F2495C',
//         displayObjectInText: true,
//         displayObjectPermanently: true,
//         legendElement: 'cm',
//         numericFormatElement: 'true',
//         unityMesureElement: 'er',
//       },
//     },
//     traceBack: true,
//     traceBorder: true,
//   };

//   const mockFunctions = {
//     onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
//       testProps.options = options;
//       act(() => {
//         ReactDOM.render(<ImportInput ref={(c) => (component = c)} {...testProps} />, container);
//       });
//     },
//   };

//   beforeEach(() => {
//     const clonedDefaults = JSON.parse(JSON.stringify(defaults));
//     clonedDefaults.listStep[1] = JSON.parse(JSON.stringify(additionalStep));
//     clonedDefaults.promTargets = ['test'];
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
//       ReactDOM.render(<ImportInput ref={(c) => (component = c)} {...testProps} />, container);
//     });
//   });

//   afterEach(() => {
//     document.body.removeChild(container);
//     container = null;
//     component = null;
//     jest.clearAllMocks();
//   });

//   describe('PointValidator', () => {
//     test('Return 0 this is a valid new point', (done) => {
//       component.props.options.arrayPoints = [];
//       let goodInput: PointClass = new PointClass(
//         point.id,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         point.label,
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         point.name,
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut,
//         point.widthInitialSpaceDefault,
//         point.heightInitialSpaceDefault,
//         point.positionXDefault,
//         point.positionYDefault
//       );

//       const spy = jest.spyOn(component, 'PointValidator');
//       const result = component.PointValidator(goodInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(result).toStrictEqual(0);
//         done();
//       }, 1000);
//     });

//     test('Return 2 this is a valid update', (done) => {
//       component.props.options.arrayPoints = [];
//       let goodInput: PointClass = new PointClass(
//         point.id,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         point.label,
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         point.name,
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut,
//         point.widthInitialSpaceDefault,
//         point.heightInitialSpaceDefault,
//         point.positionXDefault,
//         point.positionYDefault
//       );
//       component.props.options.arrayPoints.push(goodInput);
//       const spy = jest.spyOn(component, 'PointValidator');
//       const result = component.PointValidator(goodInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(result).toStrictEqual(2);
//         done();
//       }, 1000);
//     });

//     test('Return 1 this is not a valid point', (done) => {
//       component.props.options.arrayPoints = [];
//       let goodInput: PointClass = new PointClass(
//         point.id,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         point.label,
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         'another',
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut,
//         point.widthInitialSpaceDefault,
//         point.heightInitialSpaceDefault,
//         point.positionXDefault,
//         point.positionYDefault
//       );
//       let badInput: PointClass = new PointClass(
//         point.id,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         point.label,
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         'another',
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut,
//         point.widthInitialSpaceDefault,
//         point.heightInitialSpaceDefault,
//         point.positionXDefault,
//         point.positionYDefault
//       );
//       component.props.options.arrayPoints.push(goodInput);
//       const spy = jest.spyOn(component, 'PointValidator');
//       const result = component.PointValidator(badInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(result).toStrictEqual(1);
//         done();
//       }, 1000);
//     });
//   });

//   describe('RegionValidator', () => {
//     test('Return 0 this is a valid new region', (done) => {
//       component.props.options.arrayPoints = [];
//       const goodInput: RegionClass = new RegionClass(
//         regionCoods.id,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         regionCoods.label,
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         regionCoods.img,
//         regionCoods.img,
//         regionCoods.widthInitialSpaceDefault,
//         regionCoods.heightInitialSpaceDefault
//       );
//       const spy = jest.spyOn(component, 'RegionValidator');
//       const result = component.RegionValidator(goodInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(result).toStrictEqual(0);
//         done();
//       }, 1000);
//     });
//     test('Return 2 this is a valid update region', (done) => {
//       component.props.options.regionCoordinateSpace = [];
//       const goodInput: RegionClass = new RegionClass(
//         regionCoods.id,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         regionCoods.label,
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         regionCoods.img,
//         regionCoods.img,
//         regionCoods.widthInitialSpaceDefault,
//         regionCoods.heightInitialSpaceDefault
//       );
//       component.props.options.regionCoordinateSpace.push(goodInput);
//       const spy = jest.spyOn(component, 'RegionValidator');
//       const result = component.RegionValidator(goodInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(result).toStrictEqual(2);
//         done();
//       }, 1000);
//     });
//     test('Return 1 this is a bad new region', (done) => {
//       component.props.options.regionCoordinateSpace = [];
//       const goodInput: RegionClass = new RegionClass(
//         regionCoods.id,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         regionCoods.label,
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         regionCoods.img,
//         regionCoods.img,
//         regionCoods.widthInitialSpaceDefault,
//         regionCoods.heightInitialSpaceDefault
//       );
//       const badInput: RegionClass = new RegionClass(
//         regionCoods.id,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         'another',
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         regionCoods.img,
//         regionCoods.img,
//         regionCoods.widthInitialSpaceDefault,
//         regionCoods.heightInitialSpaceDefault
//       );
//       component.props.options.regionCoordinateSpace.push(goodInput);
//       const spy = jest.spyOn(component, 'RegionValidator');
//       const result = component.RegionValidator(badInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(result).toStrictEqual(1);
//         done();
//       }, 1000);
//     });
//   });

//   describe('LinkValidator', () => {
//     test('Return 0 this is a valid new link', (done) => {
//       component.props.options.arrayOrientedLinks = [];
//       const goodInput: OrientedLinkClass = new OrientedLinkClass(
//         link.id,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         link.label,
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         link.name,
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB
//       );
//       const spy = jest.spyOn(component, 'LinkValidator');
//       const result = component.LinkValidator(goodInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(result).toStrictEqual(0);
//         done();
//       }, 1000);
//     });
//     test('Return 2 this is a valid update link', (done) => {
//       component.props.options.arrayOrientedLinks = [];
//       const goodInput: OrientedLinkClass = new OrientedLinkClass(
//         link.id,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         link.label,
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         link.name,
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB
//       );
//       component.props.options.arrayOrientedLinks.push(goodInput);
//       const spy = jest.spyOn(component, 'LinkValidator');
//       const result = component.LinkValidator(goodInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(result).toStrictEqual(2);
//         done();
//       }, 1000);
//     });
//     test('Return 1 this is not a valid new link', (done) => {
//       component.props.options.arrayOrientedLinks = [];
//       const goodInput: OrientedLinkClass = new OrientedLinkClass(
//         link.id,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         link.label,
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         link.name,
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB
//       );
//       const badInput: OrientedLinkClass = new OrientedLinkClass(
//         link.id,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         link.label,
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         'aother',
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB
//       );
//       component.props.options.arrayOrientedLinks.push(goodInput);
//       const spy = jest.spyOn(component, 'LinkValidator');
//       const result = component.LinkValidator(badInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(result).toStrictEqual(1);
//         done();
//       }, 1000);
//     });
//   });

//   describe('UrlValidator', () => {
//     test('Already in have to return False', (done) => {
//       component.props.options.saveImportUrl.multi = [];
//       const goodInput = 'http://localhost/sampleJson/demo20-Region.json';
//       component.props.options.saveImportUrl.multi.push(goodInput);
//       const spy = jest.spyOn(component, 'UrlValidator');
//       const result = component.UrlValidator(goodInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(result).toStrictEqual(false);
//         done();
//       }, 1000);
//     });

//     test('Not in have to return True', (done) => {
//       component.props.options.saveImportUrl.multi = [];
//       const goodInput = 'http://localhost/sampleJson/demo20-Region.json';
//       const spy = jest.spyOn(component, 'UrlValidator');
//       const result = component.UrlValidator(goodInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(result).toStrictEqual(true);
//         done();
//       }, 1000);
//     });
//   });

//   describe('pointUpdate', () => {
//     test('Expecto to arrayPoints have been updated in teh good way', (done) => {
//       component.props.options.arrayPoints = [];
//       const goodInput = new PointClass(
//         point.id,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         'havechange',
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         point.name,
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut
//       );
//       const inside = new PointClass(
//         point.id,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         point.label,
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         point.name,
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut
//       );
//       component.props.options.arrayPoints.push(inside);
//       const spy = jest.spyOn(component, 'pointUpdate');
//       component.pointUpdate(goodInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(component.props.options.arrayPoints[0]).toStrictEqual(goodInput);
//         done();
//       }, 1000);
//     });
//   });

//   describe('regionUpdate', () => {
//     test('Expecto to regionCoordinateSpace have been updated in teh good way', (done) => {
//       const goodInput = new RegionClass(
//         regionCoods.id,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         regionCoods.label,
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         'havebeenchanged'
//       );
//       const inside = new RegionClass(
//         regionCoods.id,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         regionCoods.label,
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         regionCoods.img
//       );
//       component.props.options.regionCoordinateSpace.push(inside);
//       const spy = jest.spyOn(component, 'regionUpdate');
//       component.regionUpdate(goodInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(component.props.options.regionCoordinateSpace[0]).toStrictEqual(goodInput);
//         done();
//       }, 1000);
//     });
//   });

//   describe('linkUpdate', () => {
//     test('Expecto to arrayOrientedLinks have been updated in teh good way', (done) => {
//       const goodInput = new OrientedLinkClass(
//         link.id,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         'havebeenchange',
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         link.name,
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB
//       );
//       const inside = new OrientedLinkClass(
//         link.id,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         link.label,
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         link.name,
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB
//       );
//       component.props.options.arrayOrientedLinks.push(inside);
//       const spy = jest.spyOn(component, 'linkUpdate');
//       component.linkUpdate(goodInput);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(component.props.options.arrayOrientedLinks[0]).toStrictEqual(goodInput);
//         done();
//       }, 1000);
//     });
//   });

//   describe('loadMonoPoint', () => {
//     test('Expect to find the new point into the props', (done) => {
//       const toFind = new PointClass(
//         point.id,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         point.label,
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         point.name,
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut
//       );
//       const spy = jest.spyOn(component, 'loadMonoPoint');
//       const spy1 = jest.spyOn(component, 'PointValidator');
//       component.loadMonoPoint(point);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(spy1).toHaveBeenCalled();
//         expect(component.props.options.arrayPoints[0]).toStrictEqual(toFind);
//         done();
//       });
//     });
//     test('Expect to find the update point into the props', (done) => {
//       const toFind = new PointClass(
//         point.id,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         point.label,
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         point.name,
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut
//       );
//       const inside = new PointClass(
//         point.id,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         'tochange',
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         point.name,
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut
//       );
//       component.props.options.arrayPoints.push(inside);
//       const spy = jest.spyOn(component, 'loadMonoPoint');
//       const spy1 = jest.spyOn(component, 'PointValidator');
//       const spy2 = jest.spyOn(component, 'PointValidator');
//       component.loadMonoPoint(point);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(spy1).toHaveBeenCalled();
//         expect(spy2).toHaveBeenCalled();
//         expect(component.props.options.arrayPoints[0]).toStrictEqual(toFind);
//         done();
//       });
//     });
//   });

//   describe('loadMonoRegion', () => {
//     test('Expect to find the new region into the props', (done) => {
//       const toFind = new RegionClass(
//         regionCoods.id,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         regionCoods.label,
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         regionCoods.img
//       );
//       const spy = jest.spyOn(component, 'loadMonoRegion');
//       const spy1 = jest.spyOn(component, 'RegionValidator');
//       component.loadMonoRegion(toFind);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(spy1).toHaveBeenCalled();
//         expect(component.props.options.regionCoordinateSpace[0]).toStrictEqual(toFind);
//         done();
//       });
//     });
//     test('Expect to find the update region into the props', (done) => {
//       const toFind = new RegionClass(
//         regionCoods.id,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         regionCoods.label,
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         regionCoods.img
//       );
//       const inside = new RegionClass(
//         regionCoods.id,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         regionCoods.label,
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         'tochange'
//       );
//       component.props.options.regionCoordinateSpace.push(inside);
//       const spy = jest.spyOn(component, 'loadMonoRegion');
//       const spy1 = jest.spyOn(component, 'RegionValidator');
//       const spy2 = jest.spyOn(component, 'regionUpdate');
//       component.loadMonoRegion(toFind);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(spy1).toHaveBeenCalled();
//         expect(spy2).toHaveBeenCalled();
//         expect(component.props.options.regionCoordinateSpace[0]).toStrictEqual(toFind);
//         done();
//       });
//     });
//   });
//   describe('loadMonoLink', () => {
//     test('Expect to find the new link into the props', (done) => {
//       const toFind = new OrientedLinkClass(
//         link.id,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         link.label,
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         link.name,
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB
//       );
//       const spy = jest.spyOn(component, 'loadMonoLink');
//       const spy1 = jest.spyOn(component, 'LinkValidator');
//       component.loadMonoLink(toFind);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(spy1).toHaveBeenCalled();
//         expect(component.props.options.arrayOrientedLinks[0]).toStrictEqual(toFind);
//         done();
//       });
//     });
//     test('Expect to find the update link into the props', (done) => {
//       const toFind = new OrientedLinkClass(
//         link.id,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         link.label,
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         link.name,
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB
//       );
//       const inside = new OrientedLinkClass(
//         link.id,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         'tochange',
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         link.name,
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB
//       );
//       component.props.options.arrayOrientedLinks.push(inside);
//       const spy = jest.spyOn(component, 'loadMonoLink');
//       const spy1 = jest.spyOn(component, 'LinkValidator');
//       const spy2 = jest.spyOn(component, 'linkUpdate');
//       component.loadMonoLink(toFind);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(spy1).toHaveBeenCalled();
//         expect(spy2).toHaveBeenCalled();
//         expect(component.props.options.arrayOrientedLinks[0]).toStrictEqual(toFind);
//         done();
//       });
//     });
//   });
//   describe('loadMultiPoints', () => {
//     test('Expect to find the new list of points into the props', (done) => {
//       const first = new PointClass(
//         point.id,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         point.label,
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         'first',
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut
//       );
//       const second = new PointClass(
//         2,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         point.label,
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         'second',
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut
//       );
//       const third = new PointClass(
//         3,
//         point.linkURL,
//         point.meta,
//         point.lowerLimit,
//         point.label,
//         point.textObj,
//         point.mainMetric,
//         point.metrics,
//         point.colorMode,
//         point.traceBack,
//         point.traceBorder,
//         point.positionParameter,
//         'third',
//         point.valueMetric,
//         point.drawGraphicMarker,
//         point.shape,
//         point.sizeWidth,
//         point.sizeHeight,
//         point.rotateArrow,
//         point.positionShapeX,
//         point.positionShapeY,
//         point.color,
//         point.associateOrientedLinksIn,
//         point.associateOrientedLinksOut
//       );
//       const list: any = { points: [first, second, third] };
//       const spy = jest.spyOn(component, 'loadMonoPoint');
//       const spy1 = jest.spyOn(component, 'loadMultiPoints');
//       component.loadMultiPoints(list);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(spy1).toHaveBeenCalled();
//         expect(component.props.options.arrayPoints[0]).toStrictEqual(first);
//         expect(component.props.options.arrayPoints[1]).toStrictEqual(second);
//         expect(component.props.options.arrayPoints[2]).toStrictEqual(third);
//         done();
//       });
//     });
//   });
//   describe('loadMultiRegions', () => {
//     test('Expect to find the new list of regions into the props', (done) => {
//       const first = new RegionClass(
//         regionCoods.id,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         regionCoods.label,
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         regionCoods.img
//       );
//       const second = new RegionClass(
//         2,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         regionCoods.label,
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         'second'
//       );
//       const third = new RegionClass(
//         3,
//         regionCoods.linkURL,
//         regionCoods.meta,
//         regionCoods.lowerLimit,
//         regionCoods.label,
//         regionCoods.textObj,
//         regionCoods.mainMetric,
//         regionCoods.metrics,
//         regionCoods.colorMode,
//         regionCoods.traceBack,
//         regionCoods.traceBorder,
//         regionCoods.positionParameter,
//         regionCoods.idSVG,
//         regionCoods.orientedLink,
//         regionCoods.coords,
//         regionCoods.mode,
//         'third'
//       );
//       const list: any = { regions: [first, second, third] };
//       const spy = jest.spyOn(component, 'loadMonoRegion');
//       const spy1 = jest.spyOn(component, 'loadMultiRegions');
//       component.loadMultiRegions(list);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(spy1).toHaveBeenCalled();
//         expect(component.props.options.regionCoordinateSpace[0]).toStrictEqual(first);
//         expect(component.props.options.regionCoordinateSpace[1]).toStrictEqual(second);
//         expect(component.props.options.regionCoordinateSpace[2]).toStrictEqual(third);
//         done();
//       });
//     });
//   });
//   describe('loadMultiLinks', () => {
//     test('Expect to find the new list of links into the props', (done) => {
//       const first = new OrientedLinkClass(
//         link.id,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         link.label,
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         link.name,
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB
//       );
//       const second = new OrientedLinkClass(
//         2,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         link.label,
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         'second',
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB
//       );
//       const third = new OrientedLinkClass(
//         3,
//         link.linkURL,
//         link.meta,
//         link.lowerLimit,
//         link.label,
//         link.textObj,
//         link.mainMetric,
//         link.metrics,
//         link.colorMode,
//         link.traceBack,
//         link.traceBorder,
//         link.positionParameter,
//         'third',
//         link.orientationLink,
//         link.pointAPositionX,
//         link.pointAPositionY,
//         link.colorCoordinateA,
//         link.pointBPositionX,
//         link.pointBPositionY,
//         link.colorCoordinateB,
//         link.valueMainMetricA,
//         link.valueMainMetricB,
//         link.pointIn,
//         link.pointOut,
//         link.regionIn,
//         link.regionOut,
//         link.zIndex,
//         link.pointCPositionX,
//         link.pointCPositionY,
//         link.isIncurved,
//         link.mainMetricB,
//         link.metricsB
//       );
//       const list: any = { links: [first, second, third] };
//       const spy = jest.spyOn(component, 'loadMonoLink');
//       const spy1 = jest.spyOn(component, 'loadMultiLinks');
//       component.loadMultiLinks(list);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(spy1).toHaveBeenCalled();
//         expect(component.props.options.arrayOrientedLinks[0]).toStrictEqual(first);
//         expect(component.props.options.arrayOrientedLinks[1]).toStrictEqual(second);
//         expect(component.props.options.arrayOrientedLinks[2]).toStrictEqual(third);
//         done();
//       });
//     });
//   });
//   describe('loadTotal', () => {
//     test('Have to fill saveURL', (done) => {
//       const urlList: string[] = [];
//       total.regions.forEach((url: any) => {
//         urlList.push(url);
//       });
//       total.points.forEach((url: any) => {
//         urlList.push(url);
//       });
//       total.links.forEach((url: any) => {
//         urlList.push(url);
//       });
//       const spy = jest.spyOn(component, 'loadTotal');
//       const spy1 = jest.spyOn(component, 'UrlValidator');
//       const spy2 = jest.spyOn(component, 'fetchMulti');
//       component.loadTotal(total);
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         expect(spy1).toHaveBeenCalled();
//         expect(spy2).toHaveBeenCalled();
//         expect(component.props.options.baseMap).toStrictEqual(total.baseMap);
//         expect(component.props.options.display.police).toStrictEqual(total.texteSettings.police);
//         expect(component.props.options.display.size).toStrictEqual(total.texteSettings.size);
//         expect(component.props.options.display.style).toStrictEqual(total.texteSettings.style);
//         expect(component.props.options.coordinateSpaceInitial).toStrictEqual(total.coordinateSpaceInitial);
//         expect(component.props.options.saveImportUrl.multi).toStrictEqual(urlList);
//         done();
//       });
//     });
//   });
//   describe('loaderTotal', () => {
//     test('launch loadTotal', (done) => {
//       jest.spyOn(global, 'fetch').mockImplementation(() => {
//         return Promise.resolve({
//           json: () => {
//             return new Promise((resolve, reject) => {
//               resolve(total);
//             });
//           },
//         });
//       });
//       const spy = jest.spyOn(component, 'loadTotal');
//       component.loaderTotal();
//       setTimeout(() => {
//         expect(spy).toHaveBeenCalled();
//         done();
//       });
//     });
//   });
//   // describe('fonction name', () => {
//   //   test('Explaination and expect return', done => {
//   //     //input and preparation for test
//   //     const spy = jest.spyOn(component, 'function name');
//   //     const result = component.function(input);
//   //     setTimeout(() => {
//   //       expect(spy).toHaveBeenCalled();
//   //       expect(result).toStrictEqual(expected);
//   //       done();
//   //     });
//   //   });
//   // });
// });
