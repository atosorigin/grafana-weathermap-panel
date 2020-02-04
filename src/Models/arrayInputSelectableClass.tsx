import { InputSelectableClass } from './inputSelectableClass';

/**
 * class ArayInput
 * @param id number
 * @param uneClassInput InputClass[]
 */
export class ArrayInputSelectableClass {
	/**
	 * id
	 */
		public id: number;
		/**
		 * array class InputClass
		 */
		public uneClassInput: InputSelectableClass[];

		constructor(id: number, uneClassInput: InputSelectableClass[]) {
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
		public setUneClassInput(uneClassInput: InputSelectableClass[]) {
				this.uneClassInput = uneClassInput;
		}
}
