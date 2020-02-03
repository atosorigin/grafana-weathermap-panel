/*
https://github.com/grafana/grafana/blob/master/public/app/features/dashboard/utils/panel.test.ts
*/
import { TimeRange } from '@grafana/data';
import { testParametresGeneriques } from 'parametresGeneriques';
//import { ColorModel } from 'couleurFixe';

describe('testEspaceVisualisationInitial', () => {
  const text = 'hello';

  afterAll(() => {
    clear();
  });

// test TEMP
  it('testParametresGeneriques', () => {
    expect(text).toBe('hello');
  });

});
