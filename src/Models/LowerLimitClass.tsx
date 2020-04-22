export class LowerLimitClass {
  id: number;
  lowerLimitMin: string;
  lowerLimitMax: string;
  backColor: string;
  borderColor: string;
  sizeBorder: string;
  constructor(id: number, lowerLimitMin: string, lowerLimitMax: string, backColor: string, borderColor: string, sizeBorder: string) {
    this.id = id;
    this.lowerLimitMin = lowerLimitMin;
    this.lowerLimitMax = lowerLimitMax;
    this.backColor = backColor;
    this.borderColor = borderColor;
    this.sizeBorder = sizeBorder;
  }

  get getId(): number {
    return this.id;
  }

  set setId(id: number) {
    this.id = id;
  }

  get getlowerLimitMin(): string {
    return this.lowerLimitMin;
  }

  set setlowerLimitMin(lowerLimitMin: string) {
    this.lowerLimitMin = lowerLimitMin;
  }

  get getlowerLimitMax(): string {
    return this.lowerLimitMax;
  }

  set setlowerLimitMax(lowerLimitMax: string) {
    this.lowerLimitMax = lowerLimitMax;
  }

  get getSeuilbackColor(): string {
    return this.backColor;
  }

  set setSeuilbackColor(couleur: string) {
    this.backColor = couleur;
  }

  get getSeuilborderColor(): string {
    return this.borderColor;
  }

  set setSeuilborderColor(couleur: string) {
    this.borderColor = couleur;
  }

  get getsizeBorder(): string {
    return this.sizeBorder;
  }

  set setsizeBorder(size: string) {
    this.sizeBorder = size;
  }
}
