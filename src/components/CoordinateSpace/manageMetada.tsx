import React, { ChangeEvent, Fragment } from 'react';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions, Metadata } from 'types';
import InputTextField from 'Functions/Input/inputText';
import { Button, FormField, Switch, Collapse } from '@grafana/ui';
import InputSeriesColorPicker from 'Functions/Input/inputSeriesColorPicker';
import StyleComponent, { Style } from './../Parametrage/styleComponent';

interface Props extends PanelEditorProps<SimpleOptions> {
  meta: Metadata[];
  saveToParent: (meta: Metadata[]) => void;
}

interface State {
  newMeta: string;
  meta: Metadata[];
  arrayMeta: JSX.Element[];
  index: number;
  upline: JSX.Element;
  collapseMetaValue: boolean;
}
/*
Manage Metadata
*/
class ManageMetadata extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      newMeta: '',
      meta: [],
      arrayMeta: [],
      index: 0,
      upline: <br />,
      collapseMetaValue: false,
    };
  }

  // update input

  setPromiseMeta = (state: { meta: Metadata[]; index: number }) => {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  };

  _handleChange = (str: string, index: number) => {
    let old = this.state.meta;
    old[index].meta = str;
    this.setState({
      meta: old,
    });
    this.initArrayTag();
  };

  onChangeColorBack = async (key: number, color: string) => {
    const old = this.state.meta;
    old[key].obj.colorBack = color;
    this.setState({
      meta: old,
    });
    this.initArrayTag();
  };

  onChangeColorText = async (key: number, color: string) => {
    const old = this.state.meta;
    old[key].obj.colorText = color;
    this.setState({
      meta: old,
    });
    this.initArrayTag();
  };

  onChangeSwitch = async (key: number) => {
    const old = this.state.meta;
    old[key].obj.isTooltip = !old[key].obj.isTooltip;
    this.setState({
      meta: old,
    });
    this.initArrayTag();
  };

  saveStyleData = (style: Style, key: number): void => {
    const old = this.state.meta;
    old[key].obj.style = style;
    this.setState({
      meta: old,
    });
    this.initArrayTag();
  };

  deleteMeta = (index: number): void => {
    const old = this.state.meta;

    old.splice(index, 1);
    this.setState({
      meta: old,
    });
    this.initArrayTag();
  };

  // end update input

  // element for one Meta
  addElement = (index: number): JSX.Element => {
    return (
      <div key={'keyMeta' + index}>
        <FormField
          key={'meta' + index}
          label={'Meta'}
          name={'Meta'}
          required={true}
          placeholder={'Enter meta'}
          value={this.state.meta[index].meta}
          labelWidth={15}
          inputWidth={15}
          type="text"
          onChange={(event: ChangeEvent<HTMLInputElement>) => this._handleChange(event.currentTarget.value, index)}
        />
        <Switch label="Display test in tooltip" checked={this.state.meta[index].obj.isTooltip} onChange={() => this.onChangeSwitch(index)} />
        <InputSeriesColorPicker color={this.state.meta[index].obj.colorBack} keyInt={index} text="Color back" _onChange={this.onChangeColorBack} />
        <InputSeriesColorPicker color={this.state.meta[index].obj.colorText} keyInt={index} text="Color text" _onChange={this.onChangeColorText} />
        <StyleComponent oldStyle={this.state.meta[index].obj.style} saveParent={(style: Style) => this.saveStyleData(style, index)} />
        <Button variant="danger" className="button" onClick={() => this.deleteMeta(index)}>
          Delete
        </Button>
      </div>
    );
  };

  // init all input and call this function for refresh data (after onChange)
  initArrayTag = () => {
    let i = 0;
    const sizeMeta = this.state.meta.length;
    const final: JSX.Element[] = [];
    while (i < sizeMeta) {
      final.push(this.addElement(i));
      ++i;
    }
    const test = <ul>{final}</ul>;
    this.setState({
      upline: <ul>{test}</ul>,
      arrayMeta: final,
      index: i,
    });
    this.props.saveToParent(this.state.meta);
  };

  // init new meta
  createNewMeta = async (newElement: string) => {
    let old = this.state.meta;
    old.push({
      meta: newElement,
      obj: {
        isTooltip: true,
        colorBack: '0',
        colorText: 'black',
        style: {
          bold: false,
          italic: false,
          underline: false,
        },
      },
    });
    await this.setPromiseMeta({
      meta: old,
      index: this.state.index + 1,
    });
  };

  // add new meta
  addElementArray = (newElement: string) => {
    this.createNewMeta(newElement);
    this.initArrayTag();
    this.setState({
      newMeta: '',
    });
  };

  componentDidMount = () => {
    this.initArrayTag();
  };

  onToggleMetaValue = (isOpen: boolean) => {
    this.setState({
      collapseMetaValue: isOpen,
    });
  };

  render() {
    return (
      <Fragment>
        <Collapse isOpen={this.state.collapseMetaValue} label="Metadata" onToggle={this.onToggleMetaValue}>
          <InputTextField
            key={'metaAdd'}
            label={'Meta'}
            name={'Meta'}
            required={true}
            placeholder={'Enter meta'}
            value={this.state.newMeta}
            _handleChange={(event: {
              /** get currentTarget in event element */
              currentTarget: HTMLInputElement;
            }) => this.setState({ newMeta: event.currentTarget.value })}
          />
          <Button variant="primary" className="button" onClick={() => this.addElementArray(this.state.newMeta)}>
            Add
          </Button>
          <div>{this.state.upline}</div>
        </Collapse>
      </Fragment>
    );
  }
}

export default ManageMetadata;
