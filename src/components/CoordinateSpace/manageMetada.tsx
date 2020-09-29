import React, { /*ChangeEvent,*/ Fragment /*, SyntheticEvent*/ } from 'react';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions, Metadata } from 'types';
import { Button, FormField, Collapse, FormLabel, Switch } from '@grafana/ui';
import { TextObject } from 'Models/TextObjectClass';
import { InputSeriesColorPicker } from 'Functions/Input/inputSeriesColorPicker';
import { PointClass } from 'Models/PointClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import { RegionClass } from 'Models/RegionClass';
import { initPoint } from 'Functions/initPoint';
import { initRegionCoordinateSpace } from 'Functions/initRegionCoordinateSpace';
import { initOrientedLink } from 'Functions/initOrientedLink';
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
      let newData: Metadata = this.getCurrentPoint().meta[parseInt(event.currentTarget.id, 10)];
      newData.meta = event.currentTarget.value;
      this.getCurrentPoint().meta[parseInt(event.currentTarget.id, 10)].meta = newData.meta;
      this.props.onOptionsChange({ ...this.props.options, arrayPoints: this.props.options.arrayPoints });
    }
    if (this.props.type === 'region') {
      let newData: Metadata = this.getCurrentRegion().meta[parseInt(event.currentTarget.id, 10)];
      newData.meta = event.currentTarget.value;
      this.getCurrentRegion().meta[parseInt(event.currentTarget.id, 10)].meta = newData.meta;
      this.props.onOptionsChange({ ...this.props.options, regionCoordinateSpace: this.props.options.regionCoordinateSpace });
    }
    if (this.props.type === 'link') {
      let newData: Metadata = this.getCurrentLink().meta[parseInt(event.currentTarget.id, 10)];
      newData.meta = event.currentTarget.value;
      this.getCurrentLink().meta[parseInt(event.currentTarget.id, 10)].meta = newData.meta;
      this.props.onOptionsChange({ ...this.props.options, arrayOrientedLinks: this.props.options.arrayOrientedLinks });
    }
  };

  onChangeBackColor = (keyInt: number, color: string) => {
    if (this.props.type === 'point') {
      const newTextObject: TextObject = this.getCurrentPoint().meta[keyInt].obj;

      newTextObject.colorBack = color;
      this.getCurrentPoint().meta[keyInt].obj = newTextObject;
      this.props.onOptionsChange({ ...this.props.options, arrayPoints: this.props.options.arrayPoints });
    }
    if (this.props.type === 'link') {
      const newTextObject: TextObject = this.getCurrentLink().meta[keyInt].obj;

      newTextObject.colorBack = color;
      this.getCurrentLink().meta[keyInt].obj = newTextObject;
      this.props.onOptionsChange({ ...this.props.options, arrayOrientedLinks: this.props.options.arrayOrientedLinks });
    }
    if (this.props.type === 'region') {
      const newTextObject: TextObject = this.getCurrentRegion().meta[keyInt].obj;

      newTextObject.colorBack = color;
      this.getCurrentRegion().meta[keyInt].obj = newTextObject;
      this.props.onOptionsChange({ ...this.props.options, regionCoordinateSpace: this.props.options.regionCoordinateSpace });
    }
  };

  onChangeTextColor = (keyInt: number, color: string) => {
    if (this.props.type === 'point') {
      const newTextObject: TextObject = this.getCurrentPoint().meta[keyInt].obj;

      newTextObject.colorText = color;
      this.getCurrentPoint().meta[keyInt].obj = newTextObject;
      this.props.onOptionsChange({ ...this.props.options, arrayPoints: this.props.options.arrayPoints });
    }
    if (this.props.type === 'link') {
      const newTextObject: TextObject = this.getCurrentLink().meta[keyInt].obj;

      newTextObject.colorText = color;
      this.getCurrentLink().meta[keyInt].obj = newTextObject;
      this.props.onOptionsChange({ ...this.props.options, arrayOrientedLinks: this.props.options.arrayOrientedLinks });
    }
    if (this.props.type === 'region') {
      const newTextObject: TextObject = this.getCurrentRegion().meta[keyInt].obj;

      newTextObject.colorText = color;
      this.getCurrentRegion().meta[keyInt].obj = newTextObject;
      this.props.onOptionsChange({ ...this.props.options, regionCoordinateSpace: this.props.options.regionCoordinateSpace });
    }
  };

  // onChangeBold = (event: SyntheticEvent<HTMLInputElement, Event> | undefined ) => {
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
  //   const divParent
  //   const id = event.currentTarget;
  //   if (this.props.type === 'point') {
  //     let newArrayPoint: PointClass[] = this.props.options.arrayPoints;
  //     if (newArrayPoint[this.props.idCoordinate - 1].meta[parseInt(event.currentTarget.id, 10) - 5].obj.style.bold) {
  //       newArrayPoint[this.props.idCoordinate - 1].meta[parseInt(event.currentTarget.id, 10) - 5].obj.style.bold = false;
  //     } else {
  //       newArrayPoint[this.props.idCoordinate - 1].meta[parseInt(event.currentTarget.id, 10) - 5].obj.style.bold = true;
  //     }
  //     this.props.onOptionsChange({ ...this.props.options, arrayPoints: newArrayPoint });
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
      this.getCurrentPoint().meta.push({ meta, obj });
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
      this.getCurrentLink().meta.push({ meta, obj });
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
      this.getCurrentRegion().meta.push({ meta, obj });
      this.props.onOptionsChange({ ...this.props.options, regionCoordinateSpace: this.props.options.regionCoordinateSpace });
      this.setState({ newMeta: '' });
    }
  };

  getCurrentPoint = (): PointClass => {
    let point: PointClass = initPoint(0);
    this.props.options.arrayPoints.forEach((pointToFind) => {
      if (pointToFind.id === this.props.idCoordinate) {
        point = pointToFind;
      }
    });
    return point;
  };

  getCurrentRegion = (): RegionClass => {
    let region: RegionClass = initRegionCoordinateSpace(0);
    this.props.options.regionCoordinateSpace.forEach((regionToFind) => {
      if (regionToFind.id === this.props.idCoordinate) {
        region = regionToFind;
      }
    });
    return region;
  };

  getCurrentLink = (): OrientedLinkClass => {
    let link: OrientedLinkClass = initOrientedLink(0, 0);
    this.props.options.arrayOrientedLinks.forEach((linkToFind) => {
      if (linkToFind.id === this.props.idCoordinate) {
        link = linkToFind;
      }
    });
    return link;
  };

  // element for one Meta
  displayMetaList = (props: any): JSX.Element => {
    const l10n = require('Localization/en.json');
    if (props.type === 'point' && this.props.options.arrayPoints.length !== 0) {
      let point: PointClass = this.getCurrentPoint();
      const list = point.meta.map((meta: Metadata, index: number) => (
        <div
          key={'point' + this.props.idCoordinate + 'EditorMetadata'}
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
                this.getCurrentPoint().meta.splice(index, 1);
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
                    if (this.getCurrentPoint().meta[index].obj.style.bold) {
                      this.getCurrentPoint().meta[index].obj.style.bold = false;
                    } else {
                      this.getCurrentPoint().meta[index].obj.style.bold = true;
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
                    if (this.getCurrentPoint().meta[index].obj.style.italic) {
                      this.getCurrentPoint().meta[index].obj.style.italic = false;
                    } else {
                      this.getCurrentPoint().meta[index].obj.style.italic = true;
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
                    if (this.getCurrentPoint().meta[index].obj.style.underline) {
                      this.getCurrentPoint().meta[index].obj.style.underline = false;
                    } else {
                      this.getCurrentPoint().meta[index].obj.style.underline = true;
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
    if (props.type === 'region' && this.props.options.regionCoordinateSpace.length !== 0) {
      let region: RegionClass = this.getCurrentRegion();
      const list = region.meta.map((meta: Metadata, index: number) => (
        <div
          key={'region' + this.props.idCoordinate + 'EditorMetadata' + index}
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
                this.getCurrentRegion().meta.splice(index, 1);
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
                    if (this.getCurrentRegion().meta[index].obj.style.bold) {
                      this.getCurrentRegion().meta[index].obj.style.bold = false;
                    } else {
                      this.getCurrentRegion().meta[index].obj.style.bold = true;
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
                    if (this.getCurrentRegion().meta[index].obj.style.italic) {
                      this.getCurrentRegion().meta[index].obj.style.italic = false;
                    } else {
                      this.getCurrentRegion().meta[index].obj.style.italic = true;
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
                    if (this.getCurrentRegion().meta[index].obj.style.underline) {
                      this.getCurrentRegion().meta[index].obj.style.underline = false;
                    } else {
                      this.getCurrentRegion().meta[index].obj.style.underline = true;
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
    if (props.type === 'link' && this.props.options.arrayOrientedLinks.length !== 0) {
      let link: OrientedLinkClass = this.getCurrentLink();
      const list = link.meta.map((meta: Metadata, index: number) => (
        <div
          key={'link' + this.props.idCoordinate + 'EditorMetadata'}
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
                this.getCurrentLink().meta.splice(index, 1);
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
                    if (this.getCurrentLink().meta[index].obj.style.bold) {
                      this.getCurrentLink().meta[index].obj.style.bold = false;
                    } else {
                      this.getCurrentLink().meta[index].obj.style.bold = true;
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
                    if (this.getCurrentLink().meta[index].obj.style.italic) {
                      this.getCurrentLink().meta[index].obj.style.italic = false;
                    } else {
                      this.getCurrentLink().meta[index].obj.style.italic = true;
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
                    if (this.getCurrentLink().meta[index].obj.style.underline) {
                      this.getCurrentLink().meta[index].obj.style.underline = false;
                    } else {
                      this.getCurrentLink().meta[index].obj.style.underline = true;
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
