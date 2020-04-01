import { InputClass } from './InputClass';

/**
 * class ArayInput
 * @param id number
 * @param uneClassInput InputClass[]
 */
export class ArrayInputClass {
  /**
   * id
   */
  id: number;
  /**
   * array class InputClass
   */
  uneClassInput: InputClass[];

  constructor(id: number, uneClassInput: InputClass[]) {
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
  setUneClassInput(uneClassInput: InputClass[]) {
    this.uneClassInput = uneClassInput;
  }
}
