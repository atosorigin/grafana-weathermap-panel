import { testSimplePanel } from 'SimplePanel';

describe('testSimplePanel', () => {

  beforeEach(() => {
      dashboardMock = {
        toggleRow: jest.fn(),
        on: jest.fn(),
        meta: {
          canEdit: true,
        },
      };

      panel = new SimplePanel({ collapsed: false });
  //    wrapper = shallow(<DashboardRow panel={panel} dashboard={dashboardMock} />);
    });




    it('should return true', () => {
      expect(true).toBeTruthy();
    });

});

/*

import MyComponent, { processData } from '../MyComponent';

describe('Basic test', () => {
  const text = 'hello';

  it('should work', () => {
    expect(text).toBe('hello');
  });
});


describe('MyComponent', () => {
  // Component-wide tests
  it('should do something', () => {
  });

  // Component-member tests
  describe('modifyComponent()', () => {
    it('should modify the component like this', () => {
      const component = new MyComponent();

      let options = {};
      component.modifyComponent(options);
      expect(component.x).toBe(..);

      options = { foo: 42 };
      component.modifyComponent(options);
      expect(component.x).toBe(..);
    });
  });
});

// Pure functions
describe('processData()', () => {
  it('should transform input to output', () => {
  });
});
*/
