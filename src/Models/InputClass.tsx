/**
 * class InputClass
 * @param id string
 * @param label string
 * @param name string
 * @param inputType string
 * @param required boolean
 * @param placeholder string?
 * @param value string?
 */
export class InputClass {
  /**
   * identiofiant unique
   */
  id: string;
  /**
   * label de l'input
   */
  label: string;
  /**
   * le nom de l'imput
   */
  name: string;
  /**
   * le type de l'input (button, text)
   */
  inputType: string;
  /**
   * obligatoire
   */
  required: boolean;
  /**
   * texte a afficher
   */
  placeholder?: string;
  /**
   * la value de l'input
   */
  value?: string;

  constructor(id: string, label: string, name: string, inputType: string, required: boolean, placeholder?: string, value?: string) {
    this.id = id;
    this.label = label;
    this.name = name;
    this.inputType = inputType;
    this.required = required;
    this.placeholder = placeholder;
    this.value = value;
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
  setId(id: string) {
    this.id = id;
  }

  /**
   * get label
   */
  getLabel(): string {
    return this.label;
  }

  /**
   * set label
   * @param label new label
   */
  setLabel(label: string) {
    this.label = label;
  }

  /**
   * get name
   */
  getName() {
    return this.name;
  }

  /**
   * set name
   * @param name new name
   */
  setName(name: string) {
    this.name = name;
  }

  /**
   * get type input
   */
  getInputType() {
    return this.inputType;
  }

  /**
   * set type input
   * @param inputType new input type
   */
  setInputType(inputType: string) {
    this.inputType = inputType;
  }

  /**
   * get required
   */
  getRequired() {
    return this.required;
  }

  /**
   * set required
   * @param required new value required
   */
  setRequired(required: boolean) {
    this.required = required;
  }

  /**
   * get placeholder
   */
  getPlaceholder() {
    return this.placeholder;
  }

  /**
   * set placeholder
   * @param placeholder new value placeholder
   */
  setPlaceholder(placeholder: string) {
    this.placeholder = placeholder;
  }

  /**
   * get value
   */
  getValue() {
    return this.value;
  }

  /**
   * set value
   * @param value new value
   */
  setValue(value: string) {
    this.value = value;
  }
}
