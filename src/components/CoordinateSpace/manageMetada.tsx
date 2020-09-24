import React, { /*ChangeEvent,*/ Fragment /*, SyntheticEvent*/ } from 'react';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions, Metadata } from 'types';
import { Button, FormField, Collapse, FormLabel, Switch } from '@grafana/ui';
import { TextObject } from 'Models/TextObjectClass';
import { InputSeriesColorPicker } from 'Functions/Input/inputSeriesColorPicker';
import { PointClass } from 'Models/PointClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import { RegionClass } from 'Models/RegionClass';
// import InputSeriesColorPicker from 'Functions/Input/inputSeriesColorPicker';
// import StyleComponent, { Style } from './../Parametrage/styleComponent';

interface Props extends PanelEditorProps<SimpleOptions> {
  idCoordinate: number;
  type: string;
  saveToParent: (meta: Metadata[]) => void;
}

interface State {
  newMeta: string;
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
      collapseMetaValue: false,
    };
  }

  onMetaStrChanged = (event: { currentTarget: HTMLInputElement }) => {
    if (this.props.type === 'point') {
      let newData: Metadata = this.props.options.arrayPoints[this.props.idCoordinate - 1].meta[parseInt(event.currentTarget.id, 10)];
      newData.meta = event.currentTarget.value;
      this.props.options.arrayPoints[this.props.idCoordinate - 1].meta[parseInt(event.currentTarget.id, 10)].meta = newData.meta;
      this.props.onOptionsChange({ ...this.props.options, arrayPoints: this.props.options.arrayPoints });
    }
    if (this.props.type === 'region') {
      let newData: Metadata = this.props.options.regionCoordinateSpace[this.props.idCoordinate - 1].meta[parseInt(event.currentTarget.id, 10)];
      newData.meta = event.currentTarget.value;
      this.props.options.regionCoordinateSpace[this.props.idCoordinate - 1].meta[parseInt(event.currentTarget.id, 10)].meta = newData.meta;
      this.props.onOptionsChange({ ...this.props.options, regionCoordinateSpace: this.props.options.regionCoordinateSpace });
    }
    if (this.props.type === 'link') {
      let newData: Metadata = this.props.options.arrayOrientedLinks[this.props.idCoordinate - 1].meta[parseInt(event.currentTarget.id, 10)];
      newData.meta = event.currentTarget.value;
      this.props.options.arrayOrientedLinks[this.props.idCoordinate - 1].meta[parseInt(event.currentTarget.id, 10)].meta = newData.meta;
      this.props.onOptionsChange({ ...this.props.options, arrayOrientedLinks: this.props.options.arrayOrientedLinks });
    }
  };

  onChangeBackColor = (keyInt: number, color: string) => {
    if (this.props.type === 'point') {
      const newTextObject: TextObject = this.props.options.arrayPoints[this.props.idCoordinate - 1].meta[keyInt].obj;

      newTextObject.colorBack = color;
      this.props.options.arrayPoints[this.props.idCoordinate - 1].meta[keyInt].obj = newTextObject;
      this.props.onOptionsChange({ ...this.props.options, arrayPoints: this.props.options.arrayPoints });
    }
    if (this.props.type === 'link') {
      const newTextObject: TextObject = this.props.options.arrayOrientedLinks[this.props.idCoordinate - 1].meta[keyInt].obj;

      newTextObject.colorBack = color;
      this.props.options.arrayOrientedLinks[this.props.idCoordinate - 1].meta[keyInt].obj = newTextObject;
      this.props.onOptionsChange({ ...this.props.options, arrayOrientedLinks: this.props.options.arrayOrientedLinks });
    }
    if (this.props.type === 'region') {
      const newTextObject: TextObject = this.props.options.regionCoordinateSpace[this.props.idCoordinate - 1].meta[keyInt].obj;

      newTextObject.colorBack = color;
      this.props.options.regionCoordinateSpace[this.props.idCoordinate - 1].meta[keyInt].obj = newTextObject;
      this.props.onOptionsChange({ ...this.props.options, regionCoordinateSpace: this.props.options.regionCoordinateSpace });
    }
  };

  onChangeTextColor = (keyInt: number, color: string) => {
    if (this.props.type === 'point') {
      const newTextObject: TextObject = this.props.options.arrayPoints[this.props.idCoordinate - 1].meta[keyInt].obj;

      newTextObject.colorText = color;
      this.props.options.arrayPoints[this.props.idCoordinate - 1].meta[keyInt].obj = newTextObject;
      this.props.onOptionsChange({ ...this.props.options, arrayPoints: this.props.options.arrayPoints });
    }
    if (this.props.type === 'link') {
      const newTextObject: TextObject = this.props.options.arrayOrientedLinks[this.props.idCoordinate - 1].meta[keyInt].obj;

      newTextObject.colorText = color;
      this.props.options.arrayOrientedLinks[this.props.idCoordinate - 1].meta[keyInt].obj = newTextObject;
      this.props.onOptionsChange({ ...this.props.options, arrayOrientedLinks: this.props.options.arrayOrientedLinks });
    }
    if (this.props.type === 'region') {
      const newTextObject: TextObject = this.props.options.regionCoordinateSpace[this.props.idCoordinate - 1].meta[keyInt].obj;

      newTextObject.colorText = color;
      this.props.options.regionCoordinateSpace[this.props.idCoordinate - 1].meta[keyInt].obj = newTextObject;
      this.props.onOptionsChange({ ...this.props.options, regionCoordinateSpace: this.props.options.regionCoordinateSpace });
    }
  };

  // onChangeBold = (event: SyntheticEvent<HTMLInputElement, Event> | undefined ) => {
  //   console.log(event?.currentTarget.value)
  //   console.log(event?.currentTarget)
  //   // if (this.props.type === 'point') {
  //   //   const newTextObject: TextObject = this.props.options.arrayPoints[this.props.idCoordinate - 1].meta[keyInt].obj;

  //   //   newTextObject.style.bold = ;
  //   //   this.props.options.arrayPoints[this.props.idCoordinate - 1].meta[keyInt].obj = newTextObject;
  //   //   this.props.onOptionsChange({ ...this.props.options, arrayPoints: this.props.options.arrayPoints });
  //   // }
  //   // if (this.props.type === 'link') {
  //   //   const newTextObject: TextObject = this.props.options.arrayOrientedLinks[this.props.idCoordinate - 1].meta[keyInt].obj;

  //   //   newTextObject.colorText = color;
  //   //   this.props.options.arrayOrientedLinks[this.props.idCoordinate - 1].meta[keyInt].obj = newTextObject;
  //   //   this.props.onOptionsChange({ ...this.props.options, arrayOrientedLinks: this.props.options.arrayOrientedLinks });
  //   // }
  //   // if (this.props.type === 'region') {
  //   //   const newTextObject: TextObject = this.props.options.regionCoordinateSpace[this.props.idCoordinate - 1].meta[keyInt].obj;

  //   //   newTextObject.colorText = color;
  //   //   this.props.options.regionCoordinateSpace[this.props.idCoordinate - 1].meta[keyInt].obj = newTextObject;
  //   //   this.props.onOptionsChange({ ...this.props.options, regionCoordinateSpace: this.props.options.regionCoordinateSpace });
  //   // }
  // };

  // onChangeBold = (index: number, event: any) => {
  //   console.log('onChangeBold');
  //   console.log(event.currentTarget);
  //   const divParent
  //   const id = event.currentTarget;
  //   console.log(id);
  //   if (this.props.type === 'point') {
  //     let newArrayPoint: PointClass[] = this.props.options.arrayPoints;
  //     if (newArrayPoint[this.props.idCoordinate - 1].meta[parseInt(event.currentTarget.id, 10) - 5].obj.style.bold) {
  //       newArrayPoint[this.props.idCoordinate - 1].meta[parseInt(event.currentTarget.id, 10) - 5].obj.style.bold = false;
  //     } else {
  //       newArrayPoint[this.props.idCoordinate - 1].meta[parseInt(event.currentTarget.id, 10) - 5].obj.style.bold = true;
  //     }
  //     this.props.onOptionsChange({ ...this.props.options, arrayPoints: newArrayPoint });
  //     console.log(newArrayPoint[this.props.idCoordinate - 1].meta[parseInt(event.currentTarget.id, 10) - 5].obj.style.bold)
  //   }
  // }

  addMeta = (onClick: { currentTarget: HTMLButtonElement }) => {
    if (this.props.type === 'point') {
      let obj = new TextObject(
        '',
        false,
        '',
        '',
        { bold: false, italic: false, underline: false },
        false,
        {
          legendElement: '',
          numericFormatElement: '',
          unit: '',
          displayObjectInTooltip: false,
          addColorTextElement: false,
          colorTextElement: 'white',
          addColorBackElement: false,
          colorBackElement: 'black',
        },
        {
          legendElement: '',
          numericFormatElement: '',
          unit: '',
          displayObjectInTooltip: false,
          addColorTextElement: false,
          colorTextElement: 'white',
          addColorBackElement: false,
          colorBackElement: 'black',
        }
      );
      let meta = this.state.newMeta;
      this.props.options.arrayPoints[this.props.idCoordinate - 1].meta.push({ meta, obj });
      this.props.onOptionsChange({ ...this.props.options, arrayPoints: this.props.options.arrayPoints });
      this.setState({ newMeta: '' });
    }
    if (this.props.type === 'link') {
      let obj = new TextObject(
        '',
        false,
        '',
        '',
        { bold: false, italic: false, underline: false },
        false,
        {
          legendElement: '',
          numericFormatElement: '',
          unit: '',
          displayObjectInTooltip: false,
          addColorTextElement: false,
          colorTextElement: 'white',
          addColorBackElement: false,
          colorBackElement: 'black',
        },
        {
          legendElement: '',
          numericFormatElement: '',
          unit: '',
          displayObjectInTooltip: false,
          addColorTextElement: false,
          colorTextElement: 'white',
          addColorBackElement: false,
          colorBackElement: 'black',
        }
      );
      let meta = this.state.newMeta;
      this.props.options.arrayOrientedLinks[this.props.idCoordinate - 1].meta.push({ meta, obj });
      this.props.onOptionsChange({ ...this.props.options, arrayOrientedLinks: this.props.options.arrayOrientedLinks });
      this.setState({ newMeta: '' });
    }
    if (this.props.type === 'region') {
      let obj = new TextObject(
        '',
        false,
        '',
        '',
        { bold: false, italic: false, underline: false },
        false,
        {
          legendElement: '',
          numericFormatElement: '',
          unit: '',
          displayObjectInTooltip: false,
          addColorTextElement: false,
          colorTextElement: 'white',
          addColorBackElement: false,
          colorBackElement: 'black',
        },
        {
          legendElement: '',
          numericFormatElement: '',
          unit: '',
          displayObjectInTooltip: false,
          addColorTextElement: false,
          colorTextElement: 'white',
          addColorBackElement: false,
          colorBackElement: 'black',
        }
      );
      let meta = this.state.newMeta;
      this.props.options.regionCoordinateSpace[this.props.idCoordinate - 1].meta.push({ meta, obj });
      this.props.onOptionsChange({ ...this.props.options, regionCoordinateSpace: this.props.options.regionCoordinateSpace });
      this.setState({ newMeta: '' });
    }
  };

  // element for one Meta
  displayMetaList = (props: any): JSX.Element => {
    const l10n = require('Localization/en.json');
    if (props.type === 'point') {
      const list = this.props.options.arrayPoints[this.props.idCoordinate - 1].meta.map((meta: Metadata, index: number) => (
        <div
          style={{
            marginTop: '5px',
            border: '1px solid black',
            padding: '10px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'right',
              marginBottom: '10px',
            }}
          >
            <Button
              variant={'danger'}
              onClick={() => {
                let newArrayPoints: PointClass[] = this.props.options.arrayPoints;
                newArrayPoints[this.props.idCoordinate - 1].meta.splice(index, 1);
                this.props.onOptionsChange({ ...this.props.options, arrayPoints: newArrayPoints });
              }}
            >
              Delete
            </Button>
          </div>
          {/* <p style={{ fontSize: '16px', fontWeight: 'normal', textAlign: 'center' }}>Metadata {index + 1}</p> */}
          <div
            key={'Meta' + index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <FormField
                id={index.toString()}
                key={'Meta' + index.toString()}
                label={'Text metadata'}
                labelWidth={10}
                inputWidth={23}
                type="string"
                value={meta.meta || ''}
                onChange={this.onMetaStrChanged.bind(this)}
              />
              <InputSeriesColorPicker
                width={30}
                color={meta.obj.colorBack}
                keyInt={index}
                text={l10n.textObject.colorBackground}
                _onChange={this.onChangeBackColor}
              />
              <InputSeriesColorPicker
                width={30}
                color={meta.obj.colorText}
                keyInt={index}
                text={l10n.textObject.colorText}
                _onChange={this.onChangeTextColor}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div id={index.toString()} style={{ display: 'flex' }}>
                <FormLabel width={30}>Bold</FormLabel>
                <Switch
                  label=""
                  checked={meta.obj.style.bold}
                  onChange={() => {
                    let newArrayPoint: PointClass[] = this.props.options.arrayPoints;
                    if (newArrayPoint[this.props.idCoordinate - 1].meta[index].obj.style.bold) {
                      newArrayPoint[this.props.idCoordinate - 1].meta[index].obj.style.bold = false;
                    } else {
                      newArrayPoint[this.props.idCoordinate - 1].meta[index].obj.style.bold = true;
                    }
                    this.props.onOptionsChange({ ...this.props.options, arrayPoints: newArrayPoint });
                  }}
                />
              </div>
              <div id={index.toString()} style={{ display: 'flex' }}>
                <FormLabel width={30}>Italic</FormLabel>
                <Switch
                  label=""
                  checked={meta.obj.style.italic}
                  onChange={() => {
                    let newArrayPoint: PointClass[] = this.props.options.arrayPoints;
                    if (newArrayPoint[this.props.idCoordinate - 1].meta[index].obj.style.italic) {
                      newArrayPoint[this.props.idCoordinate - 1].meta[index].obj.style.italic = false;
                    } else {
                      newArrayPoint[this.props.idCoordinate - 1].meta[index].obj.style.italic = true;
                    }
                    this.props.onOptionsChange({ ...this.props.options, arrayPoints: newArrayPoint });
                  }}
                />
              </div>
              <div id={index.toString()} style={{ display: 'flex' }}>
                <FormLabel width={30}>Underline</FormLabel>
                <Switch
                  label=""
                  checked={meta.obj.style.underline}
                  onChange={() => {
                    let newArrayPoint: PointClass[] = this.props.options.arrayPoints;
                    if (newArrayPoint[this.props.idCoordinate - 1].meta[index].obj.style.underline) {
                      newArrayPoint[this.props.idCoordinate - 1].meta[index].obj.style.underline = false;
                    } else {
                      newArrayPoint[this.props.idCoordinate - 1].meta[index].obj.style.underline = true;
                    }
                    this.props.onOptionsChange({ ...this.props.options, arrayPoints: newArrayPoint });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ));
      return <div>{list}</div>;
    }
    if (props.type === 'region') {
      const list = this.props.options.regionCoordinateSpace[props.id].meta.map((meta: Metadata, index: number) => (
        <div
          style={{
            marginTop: '5px',
            border: '1px solid black',
            padding: '10px',
          }}
        >
          {/* <p style={{ fontSize: '16px', fontWeight: 'normal', textAlign: 'center' }}>Metadata {index + 1}</p> */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'right',
              marginBottom: '10px',
            }}
          >
            <Button
              variant={'danger'}
              onClick={() => {
                let newArrayRegion: RegionClass[] = this.props.options.regionCoordinateSpace;
                newArrayRegion[this.props.idCoordinate - 1].meta.splice(index, 1);
                this.props.onOptionsChange({ ...this.props.options, regionCoordinateSpace: newArrayRegion });
              }}
            >
              Delete
            </Button>
          </div>
          <div
            key={'Meta' + index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <FormField
                id={index.toString()}
                key={'Meta' + index.toString()}
                label={'Text metadata'}
                labelWidth={10}
                inputWidth={23}
                type="string"
                value={meta.meta || ''}
                onChange={this.onMetaStrChanged.bind(this)}
              />
              <InputSeriesColorPicker
                width={30}
                color={meta.obj.colorBack}
                keyInt={index}
                text={l10n.textObject.colorBackground}
                _onChange={this.onChangeBackColor}
              />
              <InputSeriesColorPicker
                width={30}
                color={meta.obj.colorText}
                keyInt={index}
                text={l10n.textObject.colorText}
                _onChange={this.onChangeTextColor}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div id={index.toString()} style={{ display: 'flex' }}>
                <FormLabel width={30}>Bold</FormLabel>
                <Switch
                  label=""
                  checked={meta.obj.style.bold}
                  onChange={() => {
                    let newArrayRegion: RegionClass[] = this.props.options.regionCoordinateSpace;
                    if (newArrayRegion[this.props.idCoordinate - 1].meta[index].obj.style.bold) {
                      newArrayRegion[this.props.idCoordinate - 1].meta[index].obj.style.bold = false;
                    } else {
                      newArrayRegion[this.props.idCoordinate - 1].meta[index].obj.style.bold = true;
                    }
                    this.props.onOptionsChange({ ...this.props.options, regionCoordinateSpace: newArrayRegion });
                  }}
                />
              </div>
              <div id={index.toString()} style={{ display: 'flex' }}>
                <FormLabel width={30}>Italic</FormLabel>
                <Switch
                  label=""
                  checked={meta.obj.style.italic}
                  onChange={() => {
                    let newArrayRegion: RegionClass[] = this.props.options.regionCoordinateSpace;
                    if (newArrayRegion[this.props.idCoordinate - 1].meta[index].obj.style.italic) {
                      newArrayRegion[this.props.idCoordinate - 1].meta[index].obj.style.italic = false;
                    } else {
                      newArrayRegion[this.props.idCoordinate - 1].meta[index].obj.style.italic = true;
                    }
                    this.props.onOptionsChange({ ...this.props.options, regionCoordinateSpace: newArrayRegion });
                  }}
                />
              </div>
              <div id={index.toString()} style={{ display: 'flex' }}>
                <FormLabel width={30}>Underline</FormLabel>
                <Switch
                  label=""
                  checked={meta.obj.style.underline}
                  onChange={() => {
                    let newArrayRegion: RegionClass[] = this.props.options.regionCoordinateSpace;
                    if (newArrayRegion[this.props.idCoordinate - 1].meta[index].obj.style.underline) {
                      newArrayRegion[this.props.idCoordinate - 1].meta[index].obj.style.underline = false;
                    } else {
                      newArrayRegion[this.props.idCoordinate - 1].meta[index].obj.style.underline = true;
                    }
                    this.props.onOptionsChange({ ...this.props.options, regionCoordinateSpace: newArrayRegion });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ));
      return <div>{list}</div>;
    }
    if (props.type === 'link') {
      const list = this.props.options.arrayOrientedLinks[props.id].meta.map((meta: Metadata, index: number) => (
        <div
          style={{
            marginTop: '5px',
            border: '1px solid black',
            padding: '10px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'right',
              marginBottom: '10px',
            }}
          >
            <Button
              variant={'danger'}
              onClick={() => {
                let newArrayOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
                newArrayOrientedLink[this.props.idCoordinate - 1].meta.splice(index, 1);
                this.props.onOptionsChange({ ...this.props.options, arrayOrientedLinks: newArrayOrientedLink });
              }}
            >
              Delete
            </Button>
          </div>
          {/* <p style={{ fontSize: '16px', fontWeight: 'normal', textAlign: 'center' }}>Metadata {index + 1}</p> */}
          <div
            key={'Meta' + index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <FormField
                id={index.toString()}
                key={'Meta' + index.toString()}
                label={'Text metadata'}
                labelWidth={10}
                inputWidth={23}
                type="string"
                value={meta.meta || ''}
                onChange={this.onMetaStrChanged.bind(this)}
              />
              <InputSeriesColorPicker
                width={30}
                color={meta.obj.colorBack}
                keyInt={index}
                text={l10n.textObject.colorBackground}
                _onChange={this.onChangeBackColor}
              />
              <InputSeriesColorPicker
                width={30}
                color={meta.obj.colorText}
                keyInt={index}
                text={l10n.textObject.colorText}
                _onChange={this.onChangeTextColor}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div id={index.toString()} style={{ display: 'flex' }}>
                <FormLabel width={30}>Bold</FormLabel>
                <Switch
                  label=""
                  checked={meta.obj.style.bold}
                  onChange={() => {
                    let newArrayOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
                    if (newArrayOrientedLink[this.props.idCoordinate - 1].meta[index].obj.style.bold) {
                      newArrayOrientedLink[this.props.idCoordinate - 1].meta[index].obj.style.bold = false;
                    } else {
                      newArrayOrientedLink[this.props.idCoordinate - 1].meta[index].obj.style.bold = true;
                    }
                    this.props.onOptionsChange({ ...this.props.options, arrayOrientedLinks: newArrayOrientedLink });
                  }}
                />
              </div>
              <div id={index.toString()} style={{ display: 'flex' }}>
                <FormLabel width={30}>Italic</FormLabel>
                <Switch
                  label=""
                  checked={meta.obj.style.italic}
                  onChange={() => {
                    let newArrayOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
                    if (newArrayOrientedLink[this.props.idCoordinate - 1].meta[index].obj.style.italic) {
                      newArrayOrientedLink[this.props.idCoordinate - 1].meta[index].obj.style.italic = false;
                    } else {
                      newArrayOrientedLink[this.props.idCoordinate - 1].meta[index].obj.style.italic = true;
                    }
                    this.props.onOptionsChange({ ...this.props.options, arrayOrientedLinks: newArrayOrientedLink });
                  }}
                />
              </div>
              <div id={index.toString()} style={{ display: 'flex' }}>
                <FormLabel width={30}>Underline</FormLabel>
                <Switch
                  label=""
                  checked={meta.obj.style.underline}
                  onChange={() => {
                    let newArrayOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
                    if (newArrayOrientedLink[this.props.idCoordinate - 1].meta[index].obj.style.underline) {
                      newArrayOrientedLink[this.props.idCoordinate - 1].meta[index].obj.style.underline = false;
                    } else {
                      newArrayOrientedLink[this.props.idCoordinate - 1].meta[index].obj.style.underline = true;
                    }
                    this.props.onOptionsChange({ ...this.props.options, arrayOrientedLinks: newArrayOrientedLink });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ));
      return <div>{list}</div>;
    }
    return <div></div>;
  };

  onToggleMetaValue = (isOpen: boolean) => {
    this.setState({
      collapseMetaValue: isOpen,
    });
  };

  printProps = () => {
    console.log(this.props);
  };

  render() {
    return (
      <Fragment>
        <Collapse isOpen={this.state.collapseMetaValue} label="Metadata" onToggle={this.onToggleMetaValue}>
          <div style={{ display: 'flex' }}>
            {/* <InputTextField
              key={'metaAdd'}
              label={'Text'}
              name={'Meta'}
              required={true}
              placeholder={'Enter meta'}
              value={this.state.newMeta}
              _handleChange={(event: {
                currentTarget: HTMLInputElement;
              }) => this.setState({ newMeta: event.currentTarget.value })}
            /> */}
            <FormField
              key={'metaAdd'}
              label={'Text metadata'}
              labelWidth={15}
              inputWidth={25}
              name={'Meta'}
              required={true}
              placeholder={'Enter meta'}
              value={this.state.newMeta}
              onChange={(event: {
                /** get currentTarget in event element */
                currentTarget: HTMLInputElement;
              }) => this.setState({ newMeta: event.currentTarget.value })}
            />
            <Button variant="primary" className="button" onClick={this.addMeta}>
              Add
            </Button>
          </div>
          <this.displayMetaList type={this.props.type} id={this.props.idCoordinate - 1} />
        </Collapse>
      </Fragment>
    );
  }
}

export default ManageMetadata;
