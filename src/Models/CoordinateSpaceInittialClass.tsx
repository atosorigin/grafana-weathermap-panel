/**
 * class CoordinateSpaceClass
 */
export class CoordinateSpaceInitialClass {
  id: number;
  xMin: string;
  xMax: string;
  yMin: string;
  yMax: string;
  label: string;
  /**
   * r
   * @param id r
   * @param xMin r
   * @param xMax r
   * @param yMin r
   * @param yMax r
   * @param label r
   */
  constructor(id: number, xMin: string, xMax: string, yMin: string, yMax: string, label: string) {
    this.id = id;
    this.xMin = xMin;
    this.xMax = xMax;
    this.yMin = yMin;
    this.yMax = yMax;
    this.label = label;
  }

  getId(): number {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }

  getXMin(): string {
    return this.xMin;
  }

  setXMin(xMin: string) {
    this.xMin = xMin;
  }

  getXMax(): string {
    return this.xMax;
  }

  setXMax(xMax: string) {
    this.xMax = xMax;
  }

  getYMin(): string {
    return this.yMin;
  }

  setYMin(yMin: string) {
    this.yMin = yMin;
  }

  getYMax(): string {
    return this.yMax;
  }

  setYMax(yMax: string) {
    this.yMax = yMax;
  }

  getLabel(): string {
    return this.label;
  }

  setLabel(label: string) {
    this.label = label;
  }
}
