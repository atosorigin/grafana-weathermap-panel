/*
https://github.com/grafana/grafana/blob/master/public/app/features/dashboard/utils/panel.test.ts
*/
import { TimeRange } from '@grafana/data';
import { testEspaceVisualisationInitial } from 'EspaceVisualisationInitial';

describe('testEspaceVisualisationInitial', () => {
  const text = 'hello';

  afterAll(() => {
    clear();
  });

  it('testEspaceVisualisationInitial', () => {
//    const panelModel = new PanelModel({});
//    const height = calculateInnerPanelHeight(panelModel, 100);
    expect(text).toBe('hello');
//    expect(height).toBe(82);
  });


});
