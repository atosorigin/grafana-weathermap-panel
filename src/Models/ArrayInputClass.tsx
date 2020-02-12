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
		public id: number;
		/**
		 * array class InputClass
		 */
		public uneClassInput: InputClass[];

		constructor(id: number, uneClassInput: InputClass[]) {
				this.id = id;
				this.uneClassInput = uneClassInput;
		}

		/**
		 * get id
		 */
		public getId() {
				return this.id;
		}

		/**
		 * set id
		 * @param id new id
		 */
		public setId(id: number) {
				this.id = id;
		}

		/**
		 * get value of InputClass[]
		 */
		public getUneClassInput() {
				return this.uneClassInput;
		}

		/**
		 * set a new InputClass[]
		 * @param uneClassInput new object InputClass[]
		 */
		public setUneClassInput(uneClassInput: InputClass[]) {
				this.uneClassInput = uneClassInput;
		}
}
