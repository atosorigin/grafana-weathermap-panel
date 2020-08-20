import React from 'react';
import ReactDOM from 'react-dom';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions } from '../../../types';
import { act } from 'react-dom/test-utils';
import ManageLowerLimit from '../manageLowerLimit';
import { PointClass } from 'Models/PointClass';

describe('CoordinatSpaceInitial tests', () => {
  let container: any, component: any;
  const additionalStep = { value: '1', label: '1' };
  /*
   * Mock "onOptionChange" by re-rendering the component with the new options
   */
  let mockFunctions = {
    onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
      let testProps = {};
      act(() => {
        ReactDOM.render(
          <ManageLowerLimit
            onOptionsChange={component}
            coordinate={component}
            data={component}
            options={component}
            isLink={component}
            callBack={component}
            lowerLimitCallBack={component}
            ref={(c) => (component = c)}
            {...testProps}
          />,
          container
        );
      });
    },
  };
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

  let coordinate: PointClass = new PointClass(
    point.id,
    point.linkURL,
    point.meta,
    point.lowerLimit,
    point.label,
    point.textObj,
    point.mainMetric,
    point.metrics,
    point.colorMode,
    point.traceBack,
    point.traceBorder,
    point.positionParameter,
    point.name,
    point.valueMetric,
    point.drawGraphicMarker,
    point.shape,
    point.sizeWidth,
    point.sizeHeight,
    point.rotateArrow,
    point.positionShapeX,
    point.positionShapeY,
    point.color,
    point.associateOrientedLinksIn,
    point.associateOrientedLinksOut
  );
  let testProps = { options: {}, data: {}, onOptionsChange: {}, coordinate: {} };
  beforeEach(() => {
    let clonedDefaults = JSON.parse(JSON.stringify(defaults));
    clonedDefaults.listStep[1] = JSON.parse(JSON.stringify(additionalStep));
    container = document.createElement('div');
    document.body.appendChild(container);
    testProps = {
      options: clonedDefaults,
      coordinate: coordinate,
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
      ReactDOM.render(
        <ManageLowerLimit isLink={component} callBack={component} lowerLimitCallBack={component} ref={(c) => (component = c)} {...testProps} />,
        container
      );
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    component = null;
    jest.clearAllMocks();
  });

  describe('_handleChange', () => {
    test('onChangeSwitchDisplayInitialSpace', async () => {
      console.log(component.props);
    });
  });
});
