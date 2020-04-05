import { createInputsPoint } from '../CreateInput/createInputsPoint';
import { CoordinateSpaceClass } from 'Models/CoordinateSpaceClass';

/*
 * testing the createInputsPoint function
 * - checking the number and id of created inputs
 */
describe('test createInputsPoint', () => {
  let coordinates: CoordinateSpaceClass[] = [];

  beforeEach(() => {
    coordinates = [
      new CoordinateSpaceClass(0, '-10', '10', '-10', '10', 'espace0'),
      new CoordinateSpaceClass(1, '-20', '20', '-20', '20', 'espace0'),
    ];
  });

  afterEach(() => {
    coordinates = [];
  });

  test('init component', () => {
    const result = createInputsPoint(0, coordinates);
    expect(result.length).toBe(8);

    expect(result[0].id).toBe('0LinkWithCoordinateSpace'); // newFieldLinkWithCoordonateSpace
    expect(result[1].id).toBe('0drawGraphicMarker'); // newFieldDrawGraphicMarker
    expect(result[2].id).toBe('0shape'); // newFieldShape
    expect(result[3].id).toBe('0sizeWidth'); // newFieldSizeWidthShape
    expect(result[4].id).toBe('0sizeHeight'); // newFieldSizeHeightShape
    expect(result[5].id).toBe('0color'); // newFieldColor
    expect(result[6].id).toBe('0rotateArrow'); // newFieldRotateArrow
    expect(result[7].id).toBe('0positionShapeX'); // newFieldPositionXShape
    expect(result[8].id).toBe('0positionShapeY'); // newFieldPositionYShape
    expect(result[9].id).toBe('0label'); // newFieldLabel
    expect(result[10].id).toBe('0positionLabelX'); // newFieldPositionLabelX
    expect(result[11].id).toBe('0positionLabelY'); // newFieldPositionLabelY
    expect(result[12].id).toBe('0delete'); // newFieldButton
  });
});
