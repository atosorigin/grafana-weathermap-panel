import React from 'react';
import ReactDOM from 'react-dom';
import DashboardData from '../dashboardData';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions } from '../../types';
import { act } from 'react-dom/test-utils';

/*
 * testing the DashboardData component features
 * - loading data from a json
 * - edit input fields
 */
describe('DashboardData tests', () => {
  let container, component;
  const additionalStep = { value: '1', label: '1' };
  /*
   * Mock "onOptionChange" by re-rendering the component with the new options
   */
  let mockFunctions = {
    onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
      testProps.options = options;
      act(() => {
        ReactDOM.render(<DashboardData ref={c => (component = c)} {...testProps} />, container);
      });
    },
  };
  let testProps = {};
  beforeEach(() => {
    let clonedDefaults = JSON.parse(JSON.stringify(defaults));
    clonedDefaults.listStep[1] = JSON.parse(JSON.stringify(additionalStep));
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
      ReactDOM.render(<DashboardData ref={c => (component = c)} {...testProps} />, container);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    component = null;
    jest.clearAllMocks();
  });

  test('edit json', () => {
    let input = document.createElement('input');
    input.setAttribute('value', 'test-value');
    component.onContentChanged({
      target: input,
    });

    expect(component.props.options.contentJson).toBe('test-value');
  });

  test('load json', () => {
    let input = document.createElement('input');
    input.setAttribute(
      'value',
      '{"annotations":{"list":[{"builtIn":1,"datasource":"-- Grafana --","enable":true,"hide":true,"iconColor":"rgba(0, 211, 255, 1)","name":"Annotations & Alerts","type":"dashboard"}]},"editable":true,"gnetId":null,"graphTooltip":0,"id":1014,"links":[],"panels":[{"aliasColors":{},"bars":false,"dashLength":10,"dashes":false,"datasource":null,"fill":1,"fillGradient":0,"gridPos":{"h":8,"w":12,"x":0,"y":0},"hiddenSeries":false,"id":12,"legend":{"avg":false,"current":false,"max":false,"min":false,"show":true,"total":false,"values":false},"lines":true,"linewidth":1,"nullPointMode":"null","options":{"dataLinks":[]},"percentage":false,"pointradius":2,"points":false,"renderer":"flot","seriesOverrides":[],"spaceLength":10,"stack":false,"steppedLine":false,"targets":[{"expr":"rate(node_cpu_seconds_total{mode="system"}[1m])","refId":"A"}],"thresholds":[],"timeFrom":null,"timeRegions":[],"timeShift":null,"title":"CPU sys time","tooltip":{"shared":true,"sort":0,"value_type":"individual"},"type":"graph","xaxis":{"buckets":null,"mode":"time","name":null,"show":true,"values":[]},"yaxes":[{"format":"short","label":null,"logBase":1,"max":null,"min":null,"show":true},{"format":"short","label":null,"logBase":1,"max":null,"min":null,"show":true}],"yaxis":{"align":false,"alignLevel":null}},{"aliasColors":{},"bars":false,"dashLength":10,"dashes":false,"datasource":null,"fill":1,"fillGradient":0,"gridPos":{"h":10,"w":12,"x":12,"y":0},"hiddenSeries":false,"id":6,"legend":{"avg":false,"current":false,"max":false,"min":false,"show":true,"total":false,"values":false},"lines":true,"linewidth":1,"nullPointMode":"null","options":{"dataLinks":[]},"percentage":false,"pointradius":2,"points":true,"renderer":"flot","seriesOverrides":[],"spaceLength":10,"stack":false,"steppedLine":false,"targets":[{"expr":"node_filesystem_avail_bytes","refId":"A"}],"thresholds":[],"timeFrom":null,"timeRegions":[],"timeShift":null,"title":"Available space","tooltip":{"shared":true,"sort":0,"value_type":"individual"},"type":"graph","xaxis":{"buckets":null,"mode":"time","name":null,"show":true,"values":[]},"yaxes":[{"format":"short","label":null,"logBase":1,"max":null,"min":null,"show":true},{"format":"short","label":null,"logBase":1,"max":null,"min":null,"show":true}],"yaxis":{"align":false,"alignLevel":null}},{"cacheTimeout":null,"datasource":null,"gridPos":{"h":6,"w":12,"x":0,"y":8},"id":10,"links":[],"options":{"displayMode":"lcd","fieldOptions":{"calcs":["mean"],"defaults":{"mappings":[{"id":0,"op":"=","text":"N/A","type":1,"value":"null"}],"max":100,"min":0,"nullValueMode":"connected","thresholds":[{"color":"green","value":null},{"color":"red","value":80}],"unit":"none"},"override":{},"values":false},"orientation":"horizontal"},"pluginVersion":"6.6.0-pre","targets":[{"expr":"process_resident_memory_bytes","legendFormat":"Resident memory","refId":"A"},{"expr":"process_virtual_memory_bytes","legendFormat":"Virtual memory","refId":"B"}],"timeFrom":null,"timeShift":null,"title":"Memory","type":"bargauge"},{"aliasColors":{},"bars":false,"cacheTimeout":null,"dashLength":10,"dashes":false,"datasource":null,"fill":1,"fillGradient":0,"gridPos":{"h":8,"w":12,"x":12,"y":10},"hiddenSeries":false,"id":4,"legend":{"avg":false,"current":false,"max":false,"min":false,"show":true,"total":false,"values":false},"lines":true,"linewidth":1,"links":[],"nullPointMode":"null","options":{"dataLinks":[]},"percentage":false,"pluginVersion":"6.6.0-pre","pointradius":2,"points":false,"renderer":"flot","seriesOverrides":[],"spaceLength":10,"stack":false,"steppedLine":false,"targets":[{"expr":"rate(node_network_receive_bytes_total[1m])","hide":false,"intervalFactor":1,"refId":"A"}],"thresholds":[],"timeFrom":null,"timeRegions":[],"timeShift":null,"title":"Network usage","tooltip":{"shared":true,"sort":0,"value_type":"individual"},"type":"graph","xaxis":{"buckets":null,"mode":"time","name":null,"show":true,"values":[]},"yaxes":[{"format":"short","label":null,"logBase":1,"max":null,"min":null,"show":true},{"format":"short","label":null,"logBase":1,"max":null,"min":null,"show":true}],"yaxis":{"align":false,"alignLevel":null}},{"aliasColors":{},"bars":true,"cacheTimeout":null,"dashLength":10,"dashes":false,"datasource":null,"fill":1,"fillGradient":0,"gridPos":{"h":9,"w":12,"x":0,"y":14},"hiddenSeries":false,"id":2,"legend":{"avg":false,"current":false,"max":false,"min":false,"show":true,"total":false,"values":false},"lines":false,"linewidth":1,"links":[],"nullPointMode":"null","options":{"dataLinks":[]},"percentage":false,"pointradius":2,"points":false,"renderer":"flot","seriesOverrides":[],"spaceLength":10,"stack":false,"steppedLine":false,"targets":[{"expr":"rate(promhttp_metric_handler_requests_total[1m])","hide":false,"instant":false,"interval":"","refId":"A"}],"thresholds":[],"timeFrom":null,"timeRegions":[],"timeShift":null,"title":"Scrapts requests","tooltip":{"shared":true,"sort":0,"value_type":"individual"},"type":"graph","xaxis":{"buckets":null,"mode":"time","name":null,"show":true,"values":[]},"yaxes":[{"format":"short","label":null,"logBase":1,"max":null,"min":null,"show":true},{"format":"short","label":null,"logBase":1,"max":null,"min":null,"show":true}],"yaxis":{"align":false,"alignLevel":null}}],"refresh":"30s","schemaVersion":21,"style":"dark","tags":[],"templating":{"list":[]},"time":{"from":"now-30m","to":"now"},"timepicker":{"refresh_intervals":["5s","10s","30s","1m","5m","15m","30m","1h","2h","1d"]},"timezone":"","title":"MemoryPromNode","uid":"_j7lpeaWk","version":17}'
    );
    component.onContentChanged({
      target: input,
    });
    component.loadGlobal();
    // Only checking a few simple points
    expect(component.props.options.Id).toBe(1014);
    expect(component.props.options.uid).toBe('_j7lpeaWk');
    expect(component.props.options.title).toBe('MemoryPromNode');
    expect(component.props.options.style).toBe('dark');
    expect(component.props.options.editable).toBe(true);
    expect(component.props.options.version).toBe(17);
    expect(component.props.options.shemaVersion).toBe(21);
    expect(component.props.options.timezone).toBe('');
    expect(component.props.options.panelList.length).toBe(5);
    expect(component.props.options.listStep.length).toBe(10);
  });

  test('edit uid', () => {
    let input = document.createElement('input');
    input.setAttribute('value', 'test-value');
    component.onUidChanged({
      target: input,
    });

    expect(component.props.options.uid).toBe('test-value');
  });

  test('edit title', () => {
    let input = document.createElement('input');
    input.setAttribute('value', 'test-value');
    component.onTitleChanged({
      target: input,
    });

    expect(component.props.options.title).toBe('test-value');
  });

  test('edit style', () => {
    let input = document.createElement('input');
    input.setAttribute('value', 'test-value');
    component.onStyleChanged({
      target: input,
    });

    expect(component.props.options.style).toBe('test-value');
  });

  test('edit editable', () => {
    let input = document.createElement('input');
    input.setAttribute('value', 'test-value');
    component.onEditableChanged({
      target: input,
    });

    expect(component.props.options.editable).toBe('test-value');
  });

  test('edit version', () => {
    let input = document.createElement('input');
    input.setAttribute('value', '10');
    component.onVersionChanged({
      target: input,
    });

    expect(component.props.options.version).toBe('10');
  });

  test('edit schema version', () => {
    let input = document.createElement('input');
    input.setAttribute('value', '10');
    component.onShemaVersionChanged({
      target: input,
    });

    expect(component.props.options.shemaVersion).toBe('10');
  });
});
