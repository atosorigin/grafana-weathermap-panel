import React from 'react';
import ReactDOM from 'react-dom';
import { SimpleEditor } from '../SimpleEditor';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions } from '../types';
import { act } from 'react-dom/test-utils';

/*
 * testing the SimpleEditor component features
 * - fetch data from query with and without range
 * - delete all targets
 */
describe('SimpleEditor tests', () => {
  let container, component;
  const additionalStep = { value: '1', label: '1' };
  /*
   * Mock "onOptionChange" by re-rendering the component with the new options
   */
  let mockFunctions = {
    onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
      testProps.options = options;
      act(() => {
        ReactDOM.render(<SimpleEditor ref={c => (component = c)} {...testProps} />, container);
      });
    },
  };
  let testProps = {};
  beforeEach(() => {
    let clonedDefaults = JSON.parse(JSON.stringify(defaults));
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
      ReactDOM.render(<SimpleEditor ref={c => (component = c)} {...testProps} />, container);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    component = null;
    jest.clearAllMocks();
  });

  test('onTogglePrincipalTargets', () => {
    component.onTogglePrincipalTargets(true);
    expect(component.state.collapsePrincipalTarget).toBe(true);
    component.onTogglePrincipalTargets(false);
    expect(component.state.collapsePrincipalTarget).toBe(false);
  });

  test('onTogglePrincipalTargets with a string', () => {
    component.onTogglePrincipalTargets(false);
    expect(component.state.collapsePrincipalTarget).toBe(false);
    component.onTogglePrincipalTargets('i am a boolean');
    expect(component.state.collapsePrincipalTarget).toBe(false);
  });

  test('onToggleTargets', () => {
    component.onToggleTargets(true);
    expect(component.state.collapseTargets).toBe(true);
    component.onToggleTargets(false);
    expect(component.state.collapseTargets).toBe(false);
  });

  test('onToggleTargets with a string', () => {
    component.onToggleTargets(false);
    expect(component.state.collapseTargets).toBe(false);
    component.onToggleTargets('i am a boolean');
    expect(component.state.collapseTargets).toBe(false);
  });

  test('onToggleOrientedLink', () => {
    component.onToggleOrientedLink(true);
    expect(component.state.collapseOrientedLink).toBe(true);
    component.onToggleOrientedLink(false);
    expect(component.state.collapseOrientedLink).toBe(false);
  });

  test('onToggleOrientedLink with a string', () => {
    component.onToggleOrientedLink(false);
    expect(component.state.collapseOrientedLink).toBe(false);
    component.onToggleOrientedLink('i am a boolean');
    expect(component.state.collapseOrientedLink).toBe(false);
  });

  test('onToggleLink', () => {
    component.onToggleLink(true);
    expect(component.state.collapseLink).toBe(true);
    component.onToggleLink(false);
    expect(component.state.collapseLink).toBe(false);
  });

  test('onToggleLink with a string', () => {
    component.onToggleLink(false);
    expect(component.state.collapseLink).toBe(false);
    component.onToggleLink('i am a boolean');
    expect(component.state.collapseLink).toBe(false);
  });

  test('onTogglePoint', () => {
    component.onTogglePoint(true);
    expect(component.state.collapsePoint).toBe(true);
    component.onTogglePoint(false);
    expect(component.state.collapsePoint).toBe(false);
  });

  test('onTogglePoint with a string', () => {
    component.onTogglePoint(false);
    expect(component.state.collapsePoint).toBe(false);
    component.onTogglePoint('i am a boolean');
    expect(component.state.collapsePoint).toBe(false);
  });

  test('onTogglePanelData', () => {
    component.onTogglePanelData(true);
    expect(component.state.collapsePanelData).toBe(true);
    component.onTogglePanelData(false);
    expect(component.state.collapsePanelData).toBe(false);
  });

  test('onTogglePanelData with a string', () => {
    component.onTogglePanelData(false);
    expect(component.state.collapsePanelData).toBe(false);
    component.onTogglePanelData('i am a boolean');
    expect(component.state.collapsePanelData).toBe(false);
  });

  test('onToggleTimeSelector', () => {
    component.onToggleTimeSelector(true);
    expect(component.state.collapseTimeSelector).toBe(true);
    component.onToggleTimeSelector(false);
    expect(component.state.collapseTimeSelector).toBe(false);
  });

  test('onToggleTimeSelector with a string', () => {
    component.onToggleTimeSelector(false);
    expect(component.state.collapseTimeSelector).toBe(false);
    component.onToggleTimeSelector('i am a boolean');
    expect(component.state.collapseTimeSelector).toBe(false);
  });

  test('onToggleDashboardData', () => {
    component.onToggleDashboardData(true);
    expect(component.state.collapseDashboardData).toBe(true);
    component.onToggleDashboardData(false);
    expect(component.state.collapseDashboardData).toBe(false);
  });

  test('onToggleDashboardData with a string', () => {
    component.onToggleDashboardData(false);
    expect(component.state.collapseDashboardData).toBe(false);
    component.onToggleDashboardData('i am a boolean');
    expect(component.state.collapseDashboardData).toBe(false);
  });

  test('onPanelChanged', () => {
    const input = document.createElement('input');
    input.setAttribute('value', 'test-value');
    component.onPanelChanged(
      {
        target: input,
      },
      'test-id'
    );
    expect(component.props.options.Id).toBe('test-value');
  });

  test('onInfoChanged', () => {
    const input = document.createElement('input');
    input.setAttribute('value', 'test-value');
    component.onInfoChanged(
      {
        target: input,
      },
      'test-id'
    );
    expect(component.props.options.info).toBe('test-value');
  });

  test('onRefreshChanged', () => {
    const input = document.createElement('input');
    input.setAttribute('value', 'test-value');
    component.onRefreshChanged(
      {
        target: input,
      },
      'test-id'
    );
    expect(component.props.options.refresh).toBe('test-value');
  });

  test('onTimeZoneChanged', () => {
    const input = document.createElement('input');
    input.setAttribute('value', 'test-value');
    component.onTimeZoneChanged(
      {
        target: input,
      },
      'test-id'
    );
    expect(component.props.options.timezone).toBe('test-value');
  });
});
