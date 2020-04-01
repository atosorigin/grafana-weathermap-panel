import { InputSelectableClass } from './InputSelectableClass';

/**
 * class ArayInput
 * @param id number
 * @param uneClassInput InputClass[]
 */
export class ArrayInputSelectableClass {
  /**
   * id
   */
  id: number;
  /**
   * array class InputClass
   */
  uneClassInput: InputSelectableClass[];

  constructor(id: number, uneClassInput: InputSelectableClass[]) {
    this.id = id;
    this.uneClassInput = uneClassInput;
  }

  /**
   * get id
   */
  getId() {
    return this.id;
  }

  /**
   * set id
   * @param id new id
   */
  setId(id: number) {
    this.id = id;
  }

  /**
   * get value of InputClass[]
   */
  getUneClassInput() {
    return this.uneClassInput;
  }

  /**
   * set a new InputClass[]
   * @param uneClassInput new object InputClass[]
   */
  setUneClassInput(uneClassInput: InputSelectableClass[]) {
    this.uneClassInput = uneClassInput;
  }
}
