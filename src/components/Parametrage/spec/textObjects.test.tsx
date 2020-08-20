import React from 'react';
import ReactDOM from 'react-dom';
import TextObjects from '../textObjects';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions } from '../../../types';
import { act } from 'react-dom/test-utils';
import { TextObject } from 'Models/TextObjectClass';
import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';
import { LinkURLClass } from 'Models/LinkURLClass';
import { LowerLimitClass } from 'Models/LowerLimitClass';
import { Metric } from 'types';

/*
 * testing the TextObjects component features
 * - edit parameters
 */
describe('TextObjects tests', () => {
  let container: any, component: any, testTextObject: TextObject;
  const additionalStep = { value: '1', label: '1' };
  let linkclass: LinkURLClass = new LinkURLClass('unlien', 'uneautrelien', 'encoreunlien');
  let lowerlimitclass: LowerLimitClass = new LowerLimitClass(1, '-10', '30', 'red', 'blue', '10px');
  testTextObject = new TextObject(
    '',
    false,
    '',
    '',
    { bold: false, italic: false, underline: false },
    false,
    {
      legendElement: '',
      numericFormatElement: '',
      unit: '',
      displayObjectInTooltip: false,
      // 'displayObjectPermanently': false,
      addColorTextElement: false,
      colorTextElement: 'white',
      addColorBackElement: false,
      colorBackElement: 'black',
    },
    {
      legendElement: '',
      numericFormatElement: '',
      unit: '',
      displayObjectInTooltip: false,
      // 'displayObjectPermanently': false,
      addColorTextElement: false,
      colorTextElement: 'white',
      addColorBackElement: false,
      colorBackElement: 'black',
    }
  );
  let metric: Metric = {
    key: 'key',
    unit: 'm',
    format: 'qw',
    keyValue: 'code',
    refId: 'A',
    expr: '',
    returnQuery: [],
    manageValue: 'avg',
  };
  let testProps = { options: {}, data: {}, onOptionsChange: {}, callBackToParent: {}, coordinateSpace: {} };
  let coordinateSpaceTest: CoordinateSpaceClass = new CoordinateSpaceClass(
    1,
    linkclass,
    '',
    [lowerlimitclass],
    'test',
    testTextObject,
    metric,
    [],
    false,
    false,
    false,
    {
      labelAPositionX: '',
      labelAPositionY: '',
      labelBPositionX: '',
      labelBPositionY: '',
      tooltipPositionA: { label: 'Left', value: 'Left' },
      tooltipPositionB: { label: 'Left', value: 'Left' },
    }
  );
  /*
   * Mock "onOptionChange" by re-rendering the component with the new options
   */
  let mockFunctions = {
    onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
      testProps.options = options;
      act(() => {
        ReactDOM.render(<TextObjects ref={(c) => (component = c)} {...testProps} />, container);
      });
    },
    callBackToParent: (followLink: string, hoveringTooltipLink: string, hoveringTooltipText: string, textObj: TextObject) => {
      coordinateSpaceTest.linkURL.followLink = followLink ? followLink : coordinateSpaceTest.linkURL.followLink;
      coordinateSpaceTest.linkURL.hoveringTooltipLink = hoveringTooltipLink ? hoveringTooltipLink : coordinateSpaceTest.linkURL.hoveringTooltipLink;
      coordinateSpaceTest.linkURL.hoveringTooltipText = hoveringTooltipText ? hoveringTooltipText : coordinateSpaceTest.linkURL.hoveringTooltipText;
      coordinateSpaceTest.linkURL.hoveringTooltipText = hoveringTooltipText ? hoveringTooltipText : coordinateSpaceTest.linkURL.hoveringTooltipText;
      act(() => {
        ReactDOM.render(<TextObjects ref={(c) => (component = c)} {...testProps} />, container);
      });
    },
  };
  beforeEach(() => {
    let clonedDefaults = JSON.parse(JSON.stringify(defaults));
    testTextObject = new TextObject(
      '',
      false,
      '',
      '',
      { bold: false, italic: false, underline: false },
      false,
      {
        legendElement: '',
        numericFormatElement: '',
        unit: '',
        displayObjectInTooltip: false,
        // 'displayObjectPermanently': false,
        addColorTextElement: false,
        colorTextElement: 'white',
        addColorBackElement: false,
        colorBackElement: 'black',
      },
      {
        legendElement: '',
        numericFormatElement: '',
        unit: '',
        displayObjectInTooltip: false,
        // 'displayObjectPermanently': false,
        addColorTextElement: false,
        colorTextElement: 'white',
        addColorBackElement: false,
        colorBackElement: 'black',
      }
    );
    clonedDefaults.listStep[1] = JSON.parse(JSON.stringify(additionalStep));
    clonedDefaults.promTargets = ['test'];
    container = document.createElement('div');
    document.body.appendChild(container);
    testProps = {
      options: clonedDefaults,
      coordinateSpace: coordinateSpaceTest,
      onOptionsChange: mockFunctions.onOptionsChange,
      callBackToParent: mockFunctions.callBackToParent,
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
      ReactDOM.render(<TextObjects ref={(c) => (component = c)} {...testProps} />, container);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    component = null;
    jest.clearAllMocks();
  });
  describe('testBasicOnChangeOption', () => {
    test('onChangeValeur', (done) => {
      component.onChangeValeur('testText');
      setTimeout(() => {
        expect(component.state.textObject.value).toBe('testText');
        done();
      });
    });
    test('onChangeBackColor', (done) => {
      component.onChangeBackColor(2, 'testText');
      setTimeout(() => {
        expect(component.state.textObject.colorBack).toBe('testText');
        done();
      });
    });
    test('onChangeColorText', (done) => {
      component.onChangeColorText(2, 'testText');
      setTimeout(() => {
        expect(component.state.textObject.colorText).toBe('testText');
        done();
      });
    });
    test('onChangeColorTextElement', (done) => {
      component.onChangeColorTextElement(2, 'testText');
      setTimeout(() => {
        expect(component.state.textObject.generateAuxiliaryElement.colorTextElement).toBe('testText');
        done();
      });
    });
    test('onChangeColorBackElement', (done) => {
      component.onChangeColorBackElement(2, 'testText');
      setTimeout(() => {
        expect(component.state.textObject.generateAuxiliaryElement.colorBackElement).toBe('testText');
        done();
      });
    });
    test('onChangeValueGenerateObjectTextColorTextElement', (done) => {
      component.onChangeValueGenerateObjectTextColorTextElement(2, 'testText');
      setTimeout(() => {
        expect(component.state.textObject.valueGenerateObjectText.colorTextElement).toBe('testText');
        done();
      });
    });
    test('onChangeValueGenerateObjectTextColorBackElement', (done) => {
      component.onChangeValueGenerateObjectTextColorBackElement(2, 'testText');
      setTimeout(() => {
        expect(component.state.textObject.valueGenerateObjectText.colorBackElement).toBe('testText');
        done();
      });
    });
    test('saveData', (done) => {
      component.saveData({ bold: 'false', italic: 'false', underline: 'true' });
      setTimeout(() => {
        expect(component.state.textObject.style.bold).toStrictEqual('false');
        expect(component.state.textObject.style.italic).toStrictEqual('false');
        expect(component.state.textObject.style.underline).toStrictEqual('true');
        done();
      });
    });
  });
  describe('testEventOnChangeOption', () => {
    let target = {
      value: '200',
    } as HTMLInputElement;
    let event = {
      currentTarget: target,
    };
    test('onChangeLegendElement', (done) => {
      component.onChangeLegendElement(event);
      setTimeout(() => {
        expect(component.state.textObject.generateAuxiliaryElement.legendElement).toBe('200');
        done();
      });
    });
    test('onChangeunit', (done) => {
      component.onChangeunit(event);
      setTimeout(() => {
        expect(component.state.textObject.generateAuxiliaryElement.unit).toBe('200');
        done();
      });
    });
    test('onChangeFormatageNumeriqueTextObject', (done) => {
      component.onChangeFormatageNumeriqueTextObject(event);
      setTimeout(() => {
        expect(component.state.textObject.generateAuxiliaryElement.numericFormatElement).toBe('200');
        done();
      });
    });
    test('onChangeValueGenerateObjectTextLegendElement', (done) => {
      component.onChangeValueGenerateObjectTextLegendElement(event);
      setTimeout(() => {
        expect(component.state.textObject.valueGenerateObjectText.legendElement).toBe('200');
        done();
      });
    });
    test('onChangeValueGenerateObjectTextunit', (done) => {
      component.onChangeValueGenerateObjectTextunit(event);
      setTimeout(() => {
        expect(component.state.textObject.valueGenerateObjectText.unit).toBe('200');
        done();
      });
    });
    test('onChangeValueGenerateObjectTextFormatageNumeriqueTextObject', (done) => {
      component.onChangeValueGenerateObjectTextFormatageNumeriqueTextObject(event);
      setTimeout(() => {
        expect(component.state.textObject.valueGenerateObjectText.numericFormatElement).toBe('200');
        done();
      });
    });
  });
  describe('testonSwitch', () => {
    // let target = {
    //   value: '200',
    // } as HTMLInputElement;
    // let event = {
    //   currentTarget: target,
    // };
    let save: any = testTextObject.generateObjectText;
    test('onSwitchGenerateObjectText', (done) => {
      component.onSwitchGenerateObjectText();
      setTimeout(() => {
        expect(component.state.textObject.generateObjectText).toBe(!save.generateObjectText);
        done();
      });
    });
    save = testTextObject.generateAuxiliaryElement.displayObjectInTooltip;
    test('onSwitchdisplayObjectInTooltip', (done) => {
      component.onSwitchdisplayObjectInTooltip();
      setTimeout(() => {
        expect(component.state.textObject.generateAuxiliaryElement.displayObjectInTooltip).toBe(!save);
        done();
      });
    });
    save = testTextObject.generateAuxiliaryElement.addColorTextElement;
    test('onSwitchAddColorTextElement', (done) => {
      component.onSwitchAddColorTextElement();
      setTimeout(() => {
        expect(component.state.textObject.generateAuxiliaryElement.addColorTextElement).toBe(!save);
        done();
      });
    });
    save = testTextObject.generateAuxiliaryElement.addColorTextElement;
    test('onSwitchAddColorBackElement', (done) => {
      component.onSwitchAddColorBackElement();
      setTimeout(() => {
        expect(component.state.textObject.generateAuxiliaryElement.addColorBackElement).toBe(!save);
        done();
      });
    });
    save = testTextObject.generateAuxiliaryElement.addColorTextElement;
    test('onSwitchisTextTooltip', (done) => {
      component.onSwitchisTextTooltip();
      setTimeout(() => {
        expect(component.state.textObject.isTextTooltip).toBe(!save);
        done();
      });
    });
    save = testTextObject.valueGenerateObjectText.displayObjectInTooltip;
    test('onSwitchValueGenerateObjectTextdisplayObjectInTooltip', (done) => {
      component.onSwitchValueGenerateObjectTextdisplayObjectInTooltip();
      setTimeout(() => {
        expect(component.state.textObject.valueGenerateObjectText.displayObjectInTooltip).toBe(!save);
        done();
      });
    });
    save = testTextObject.valueGenerateObjectText.addColorTextElement;
    test('onSwitchValueGenerateObjectTextAddColorTextElement', (done) => {
      component.onSwitchValueGenerateObjectTextAddColorTextElement();
      setTimeout(() => {
        expect(component.state.textObject.valueGenerateObjectText.addColorTextElement).toBe(!save);
        done();
      });
    });
    save = testTextObject.valueGenerateObjectText.addColorBackElement;
    test('onSwitchValueGenerateObjectTextAddColorBackElement', (done) => {
      component.onSwitchValueGenerateObjectTextAddColorBackElement();
      setTimeout(() => {
        expect(component.state.textObject.valueGenerateObjectText.addColorBackElement).toBe(!save);
        done();
      });
    });
  });
  // test('Have to fill the returnQuery', done => {
  //   reqUpdateMetrics(propsAB);
  //   setTimeout(() => {
  //     expect(propsAB.options.regionCoordinateSpace[0].mainMetric.returnQuery).toStrictEqual(result);
  //     expect(propsAB.options.regionCoordinateSpace[0].metrics[0].returnQuery).toEqual(result);
  //     expect(propsAB.options.regionCoordinateSpace[0].metrics[1].returnQuery).toEqual(result);
  //     expect(propsAB.options.arrayPoints[0].mainMetric.returnQuery).toStrictEqual(result);
  //     expect(propsAB.options.arrayPoints[0].metrics[0].returnQuery).toEqual(result);
  //     expect(propsAB.options.arrayPoints[0].metrics[1].returnQuery).toEqual(result);
  //     expect(propsAB.options.arrayOrientedLinks[0].mainMetric.returnQuery).toStrictEqual(result);
  //     expect(propsAB.options.arrayOrientedLinks[0].metrics[0].returnQuery).toEqual(result);
  //     expect(propsAB.options.arrayOrientedLinks[0].metrics[1].returnQuery).toEqual(result);
  //     done();
  //   });
  // });
});
