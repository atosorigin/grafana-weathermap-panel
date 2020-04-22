import DropZone from '../dropZone';
import React from 'react';
import ReactDOM from 'react-dom';

import { defaults, SimpleOptions } from '../../types';
import { LoadingState } from '@grafana/data';
import { act } from 'react-dom/test-utils';

import { PointClass } from 'Models/PointClass';
import { RegionClass } from 'Models/RegionClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';

describe('waiting test', () => {
  let container: any, component: any;
  const additionalStep = { value: '1', label: '1' };
  let testProps = { options: {}, data: {}, onOptionsChange: {} };
  const point: any = {
    associateLinkIn: [],
    associateLinkOut: [],
    associateOrientedLinksIn: [],
    associateOrientedLinksOut: [],
    color: 'black',
    colorMode: false,
    coordinateSpace: {},
    drawGraphicMarker: {
      label: 'Yes',
      value: 'true',
    },
    id: 1,
    label: 'ici',
    linkURL: {
      followLink: '',
      hoveringTooltipLink: '',
      hoveringTooltipText: '',
    },
    lowerLimit: [],
    mainMetric: {
      expr: '',
      format: '',
      key: '',
      keyValue: '',
      manageValue: 'avg',
      refId: 'A',
      returnQuery: [
        {
          name: '{instance="localhost:9090",job="prometheus"}',
          refId: 'A',
          fields: [
            {
              name: '{instance="localhost:9090",job="prometheus"}',
              type: 'number',
              config: {
                scopedVars: {
                  __series: {
                    text: 'Series',
                    value: {
                      name: '{instance="localhost:9090",job="prometheus"}',
                    },
                  },
                  __field: {
                    text: 'Field',
                    value: {
                      name: 'Time',
                    },
                  },
                },
              },
              values: {
                buffer: [
                  0.0000029503237362458573,
                  0.0000029503237362458573,
                  0.0000029503237362458573,
                  0.0000029502198934008547,
                  0.0000029502198934008547,
                  0.0000029502198934008547,
                  0.0000029502198934008547,
                  0.0000029502198934008547,
                  0.000002950113566653198,
                  0.0000029503338365516373,
                  0.0000029503660762656494,
                  0.0000029503660762656494,
                  0.0000029503660762656494,
                  0.0000029505376740911454,
                  0.0000029505376740911454,
                  0.0000029505376740911454,
                  0.0000029505376740911454,
                  0.0000036882633787089567,
                  0.0000029507247555903884,
                  0.0000029507247555903884,
                  0.0000029507247555903884,
                ],
              },
              labels: {
                instance: 'localhost:9090',
                job: 'prometheus',
              },
              calcs: null,
            },
            {
              name: 'Time',
              type: 'time',
              config: {
                scopedVars: {
                  __series: {
                    text: 'Series',
                    value: {
                      name: '{instance="localhost:9090",job="prometheus"}',
                    },
                  },
                  __field: {
                    text: 'Field',
                    value: {
                      name: 'Time',
                    },
                  },
                },
                unit: 'time:YYYY-MM-DD HH:mm:ss',
              },
              values: {
                buffer: [
                  1585834680000,
                  1585834695000,
                  1585834710000,
                  1585834725000,
                  1585834740000,
                  1585834755000,
                  1585834770000,
                  1585834785000,
                  1585834800000,
                  1585834815000,
                  1585834830000,
                  1585834845000,
                  1585834860000,
                  1585834875000,
                  1585834890000,
                  1585834905000,
                  1585834920000,
                  1585834935000,
                  1585834950000,
                  1585834965000,
                  1585834980000,
                ],
              },
              calcs: null,
            },
          ],
          length: 21,
        },
        {
          name: '{instance="localhost:9100",job="node"}',
          refId: 'A',
          fields: [
            {
              name: '{instance="localhost:9100",job="node"}',
              type: 'number',
              config: {
                scopedVars: {
                  __series: {
                    text: 'Series',
                    value: {
                      name: '{instance="localhost:9100",job="node"}',
                    },
                  },
                  __field: {
                    text: 'Field',
                    value: {
                      name: 'Time',
                    },
                  },
                },
              },
              values: {
                buffer: [
                  0.000022280431398705817,
                  0.00002546323781663765,
                  0.000025463287945373474,
                  0.000028646168546566816,
                  0.000028646051716045434,
                  0.000028646044139148384,
                  0.000028646047170208765,
                  0.00002546305987658417,
                  0.000022280229078026344,
                  0.000022280268076613856,
                  0.000022280222389723505,
                  0.000022280277517862887,
                  0.00002228033262990701,
                  0.00002546318610808226,
                  0.000028646030403558214,
                  0.000028646069684632024,
                  0.000028646113236138575,
                  0.000028646074206615014,
                  0.0000318289636785527,
                  0.00002864608008532637,
                  0.00002864613985624937,
                ],
              },
              labels: {
                instance: 'localhost:9100',
                job: 'node',
              },
              calcs: null,
            },
            {
              name: 'Time',
              type: 'time',
              config: {
                scopedVars: {
                  __series: {
                    text: 'Series',
                    value: {
                      name: '{instance="localhost:9100",job="node"}',
                    },
                  },
                  __field: {
                    text: 'Field',
                    value: {
                      name: 'Time',
                    },
                  },
                },
                unit: 'time:YYYY-MM-DD HH:mm:ss',
              },
              values: {
                buffer: [
                  1585834680000,
                  1585834695000,
                  1585834710000,
                  1585834725000,
                  1585834740000,
                  1585834755000,
                  1585834770000,
                  1585834785000,
                  1585834800000,
                  1585834815000,
                  1585834830000,
                  1585834845000,
                  1585834860000,
                  1585834875000,
                  1585834890000,
                  1585834905000,
                  1585834920000,
                  1585834935000,
                  1585834950000,
                  1585834965000,
                  1585834980000,
                ],
              },
              calcs: null,
            },
          ],
          length: 21,
        },
      ],
      unit: '',
    },
    meta: '',
    metrics: [],
    name: 'point1',
    positionParameter: {
      labelAPositionX: '0',
      labelAPositionY: '0',
      labelBPositionX: '0',
      labelBPositionY: '0',
      tooltipPositionA: {},
      tooltipPositionB: {},
    },
    positionShapeX: '-60',
    positionShapeY: '60',
    rotateArrow: '0',
    shape: {
      label: 'Circle',
      value: 'circle',
    },
    sizeHeight: {
      label: 'Medium',
      value: 'medium',
    },
    sizeWidth: {
      label: 'Medium',
      value: 'medium',
    },
    textObj: {
      colorBack: '',
      colorText: '',
      generateAuxiliaryElement: {
        addColorBackElement: false,
        addColorTextElement: false,
        colorBackElement: 'black',
        colorTextElement: 'white',
        displayObjectInText: false,
        legendElement: '',
        numericFormatElement: '',
        unit: '',
      },
      generateObjectText: false,
      isTextRegion: false,
      style: {
        bold: true,
        italic: false,
        underline: true,
      },
      value: '',
      valueGenerateObjectText: {
        addColorBackElement: false,
        addColorTextElement: false,
        colorBackElement: 'black',
        colorTextElement: 'white',
        displayObjectInText: false,
        legendElement: '',
        numericFormatElement: '',
        unit: '',
      },
    },
    traceBack: false,
    traceBorder: false,
    valueMetric: '',
  };

  const link: any = {
    colorCoordinateA: '#5794F2',
    colorCoordinateB: '#E54658',
    colorMode: false,
    id: 1,
    mainMetric: {
      format: '',
      key: '',
      keyValue: '',
      manageValue: 'avg',
      refId: '',
      returnQuery: [],
      unit: '',
    },
    isIncurved: {
      label: 'No',
      value: false,
    },
    label: '',
    linkURL: {
      followLink: '',
      hoveringTooltipLink: '',
      hoveringTooltipText: '',
    },
    lowerLimit: [],

    meta: '',
    metrics: [],
    name: 'orientedLink1',
    orientationLink: {
      label: 'Monodirectional',
      value: 'AB',
    },
    pointAPositionX: '-14',
    pointAPositionY: '88',
    pointBPositionX: '72',
    pointBPositionY: '70',
    pointCPositionX: '29',
    pointCPositionY: '79',
    pointIn: 'point2',
    pointOut: 'point1',
    positionParameter: {
      labelAPositionX: '0',
      labelAPositionY: '0',
      labelBPositionX: '0',
      labelBPositionY: '0',
      tooltipPositionA: {},
      tooltipPositionB: {},
    },
    regionIn: '',
    regionOut: '',
    textObj: {
      colorBack: '',
      colorText: '',
      generateAuxiliaryElement: {
        addColorBackElement: false,
        addColorTextElement: false,
        colorBackElement: 'black',
        colorTextElement: 'white',
        displayObjectInText: false,
        legendElement: '',
        numericFormatElement: '',
        unit: '',
      },
      generateObjectText: false,
      isTextRegion: false,
      style: {
        bold: true,
        italic: false,
        underline: true,
      },
      value: '',
      valueGenerateObjectText: {
        addColorBackElement: false,
        addColorTextElement: false,
        colorBackElement: 'black',
        colorTextElement: 'white',
        displayObjectInText: false,
        legendElement: '',
        numericFormatElement: '',
        unit: '',
      },
    },
    traceBack: false,
    traceBorder: false,
    valueMainMetricA: '-',
    valueMainMetricB: '-',
    zIndex: '5',
    mainMetricB: {
      format: '',
      key: '',
      keyValue: '',
      manageValue: 'avg',
      refId: '',
      returnQuery: [],
      unit: '',
    },
    metricsB: [],
  };

  const regionCoords: any = {
    colorMode: false,
    coords: {
      xMax: '50',
      xMin: '20',
      yMax: '50',
      yMin: '20',
    },
    id: 1,
    idSVG: '',
    img: '',
    label: 'PC 2',
    linkURL: {
      followLink: '',
      hoveringTooltipLink: '',
      hoveringTooltipText: '',
    },
    lowerLimit: [
      {
        backColor: '#FA6400',
        borderColor: '#E0B400',
        id: 0,
        lowerLimitMax: '',
        lowerLimitMin: '',
        sizeBorder: '2',
      },
    ],
    mainMetric: {
      expr: '',
      format: '',
      key: '',
      keyValue: '',
      manageValue: 'avg',
      refId: 'B',
      returnQuery: [
        {
          name: '{instance="localhost:9090",job="prometheus"}',
          refId: 'B',
          fields: [
            {
              name: '{instance="localhost:9090",job="prometheus"}',
              type: 'number',
              config: {},
              values: {
                buffer: [
                  137433.88070175436,
                  193964.60350877192,
                  196940.5192982456,
                  196779.7894736842,
                  140243.08771929823,
                  150890.49824561403,
                  160993.23508771928,
                  160795.56491228068,
                  163188.35087719298,
                ],
              },
              labels: {
                instance: 'localhost:9090',
                job: 'prometheus',
              },
              calcs: null,
            },
            {
              name: 'Time',
              type: 'time',
              config: {},
              values: {
                buffer: [
                  1584615120000,
                  1584615135000,
                  1584615150000,
                  1584615165000,
                  1584615180000,
                  1584615195000,
                  1584615210000,
                  1584615225000,
                  1584615240000,
                ],
              },
              calcs: null,
            },
          ],
          length: 9,
        },
      ],
      unit: '',
    },
    meta: '',
    metrics: [],
    mode: false,
    orientedLink: [],
    positionParameter: {
      labelAPositionX: '0',
      labelAPositionY: '0',
      labelBPositionX: '0',
      labelBPositionY: '0',
      tooltipPositionA: {},
      tooltipPositionB: {},
    },
    textObj: {
      colorBack: '#5794F2',
      colorText: '#73BF69',
      generateAuxiliaryElement: {
        addColorBackElement: true,
        addColorTextElement: true,
        colorBackElement: '#FADE2A',
        colorTextElement: '#FF9830',
        displayObjectInText: true,
        displayObjectPermanently: true,
        legendElement: 'other legend',
        numericFormatElement: 'round',
        unityMesureElement: 'a',
      },
      generateObjectText: true,
      isTextRegion: true,
      legend: 'ceci est une legende',
      style: {
        bold: true,
        italic: false,
        underline: true,
      },
      unit: 'em',
      value: '',
      valueGenerateObjectText: {
        addColorBackElement: true,
        addColorTextElement: true,
        colorBackElement: '#B877D9',
        colorTextElement: '#F2495C',
        displayObjectInText: true,
        displayObjectPermanently: true,
        legendElement: 'cm',
        numericFormatElement: 'true',
        unityMesureElement: 'er',
      },
    },
    traceBack: true,
    traceBorder: true,
  };
  const mockFunctions = {
    onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
      testProps.options = options;
      act(() => {
        ReactDOM.render(<DropZone ref={c => (component = c)} {...testProps} />, container);
      });
    },
  };
  beforeEach(() => {
    const clonedDefaults = JSON.parse(JSON.stringify(defaults));
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
            name: 'serieName',
            fields: [],
            length: 15,
          },
        ],
        timeRange: clonedDefaults.timeRange,
      },
    };

    act(() => {
      ReactDOM.render(<DropZone ref={c => (component = c)} {...testProps} />, container);
    });
  });

  describe('save', () => {
    test('region', done => {
      setTimeout(() => {
        //expect(result).toStrictEqual(expected);
        done();
      });
    });
  });
});

//   describe('reqMetricRegion', () => {
//     test('Have to fill the returnQuery', (done) => {
//       //input and preparation for test
//       reqMetricRegion(regionClass, props);
//       setTimeout(() => {
//         expect(result).toStrictEqual(expected);
//         done();
//       });
//     });
//   });
// });
