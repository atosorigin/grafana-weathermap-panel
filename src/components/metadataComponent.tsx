import React from 'react';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions, Metadata } from '../types';
import InputTextField from '../Functions/Input/inputText';
import { Button } from '@grafana/ui';
// import { TextObject } from "Models/TextObjectClass";

interface Props extends PanelEditorProps<SimpleOptions> {
  meta: Metadata;
  // saveToParent?: (meta: Metadata) => void;
}

interface State {
  meta: Metadata;
  tagArray: JSX.Element[];
  fonctionne: JSX.Element;
  index: number;
}

/*
 * Manage Meta
 */
class MetadataComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      meta: this.props.meta,
      tagArray: [],
      fonctionne: <br />,
      index: 0,
    };
  }

  setPromiseMeta = (state: { meta: Metadata }) => {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  };

  _handleChange = async (str: string) => {
    let old = this.state.meta;
    old.meta = str;
    console.log(old);
    this.setState({
      meta: old,
    });
    this.initArrayTag();

    // await this.setPromiseMeta({
    //   meta: old,
    // });
    // this.props.saveToParent && this.props.saveToParent(this.state.meta);
  };

  addElement = (index: number): JSX.Element => {
    return (
      <InputTextField
        key={'meta' + index}
        label={'Meta'}
        name={'Meta'}
        required={true}
        placeholder={'Enter meta'}
        value={this.state.meta.meta[index]}
        _handleChange={(event: {
          /** get currentTarget in event element */
          currentTarget: HTMLInputElement;
        }) => this._handleChange(event.currentTarget.value)}
      />
    );
  };

  initArrayTag = () => {
    let i = 0;
    const final: JSX.Element[] = [];
    for (const l of this.state.tagArray) {
      console.log(l);
      final.push(this.addElement(i));
      ++i;
    }
    const test = <ul>{final}</ul>;
    this.setState({
      fonctionne: <ul>{test}</ul>,
      index: i,
    });
  };

  addStatsdrgdhtjfy = async () => {
    let old = this.state.meta;
    old.meta;
    await this.setPromiseMeta({
      meta: old,
    });
    // this.props.saveToParent && this.props.saveToParent(this.state.meta);
  };

  addElementArray = () => {
    this.addStatsdrgdhtjfy();

    const final = this.state.tagArray;
    final.push(this.addElement(this.state.index + 1));
    const test = <ul>{final}</ul>;
    this.setState({
      tagArray: final,
      fonctionne: test,
      index: this.state.index + 1,
    });
  };

  componentDidMount = () => {
    this.initArrayTag();
    // console.clear();
    console.log('ddd');
  };

  testMoi = () => {
    return <div>{this.state.tagArray}</div>;
  };

  render() {
    return (
      <div>
        {this.state.fonctionne}
        <Button variant="primary" className="button" onClick={() => this.addElementArray()}>
          Add
        </Button>
      </div>
    );
  }
}
export default MetadataComponent;
