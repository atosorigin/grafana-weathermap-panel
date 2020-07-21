import React from 'react';
import { PanelEditorProps, SelectableValue } from '@grafana/data';
import { SimpleOptions, GabaritFile } from '../types';
import { FormField, Button, Collapse, FormLabel, Select } from '@grafana/ui';
//import /*pointClassImport, regionClassImport, gabaritPointClassImport, gabaritRegionClassImport */ '../../config/testVariable';

interface Props extends PanelEditorProps<SimpleOptions> {}

/*
 * TODO
 */

interface State {
  selectQuerryID: Array<SelectableValue<string>>;
  selectQuerryIDDefault: SelectableValue<string>;
  collapseSelectURL: boolean;
  collapseGabarit: boolean;
}

// interface SelectQueryID {
//   value: string;
//   label: string;
// }

class Gabarit extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectQuerryID: [
        { label: 'A', value: 'A' },
        { label: 'B', value: 'B' },
        { label: 'C', value: 'C' },
        { label: 'D', value: 'D' },
        { label: 'E', value: 'E' },
        { label: 'F', value: 'F' },
        { label: 'G', value: 'G' },
        { label: 'H', value: 'H' },
        { label: 'I', value: 'I' },
        { label: 'J', value: 'J' },
        { label: 'K', value: 'K' },
        { label: 'L', value: 'L' },
        { label: 'M', value: 'M' },
        { label: 'N', value: 'N' },
        { label: 'O', value: 'O' },
        { label: 'P', value: 'P' },
        { label: 'Q', value: 'Q' },
        { label: 'R', value: 'R' },
        { label: 'S', value: 'S' },
        { label: 'T', value: 'T' },
        { label: 'U', value: 'U' },
        { label: 'V', value: 'V' },
        { label: 'W', value: 'W' },
        { label: 'X', value: 'X' },
        { label: 'Y', value: 'Y' },
        { label: 'Z', value: 'Z' },
      ],
      selectQuerryIDDefault: { label: 'A', value: 'A' },
      collapseSelectURL: false,
      collapseGabarit: false,
    };
  }
  result: any[] = [];
  /**************************************FETCH******************************************/

  // fetchMono = () => {
  //     console.log(this.props.options.saveGabaritURL.mono)
  //     this.result = fetchConfFile(this.props.options.saveGabaritURL.mono);
  // }

  /**************************************CATCH******************************************/

  onChangeSelectQuerryID = (value: SelectableValue<string>, index: number) => {
    this.setState({
      selectQuerryIDDefault: value,
    });
    let newGabaritFile: GabaritFile[] = this.props.options.saveGabaritFile;
    newGabaritFile[index].queryID = value.value!;
    this.props.onOptionsChange({
      ...this.props.options,
      saveGabaritFile: newGabaritFile,
    });
  };

  onToggleSelectUrl = (isOpen: boolean): void => {
    this.setState({
      collapseSelectURL: isOpen,
    });
  };

  UrlValidator = (url: string) => {
    let result = true;
    for (let index in this.props.options.saveGabaritURL) {
      if (this.props.options.saveGabaritURL[index] === url) {
        result = false;
        break;
      }
    }
    return result;
  };

  /**************************************LOADER******************************************/

  loadGabarit = (file: any, url: string) => {
    let name = url.split('/');
    let newGabarit: GabaritFile = {
      queryID: 'null',
      fileName: name[name.length - 1],
      globalGabarit: file.global,
      templateGabaritPoint: [],
      templateGabaritRegion: [],
      templateGabaritLink: [],
    };
    console.log(name[name.length - 1]);
    file.templates.forEach((gab: any) => {
      if (gab.type === 'point') {
        newGabarit.templateGabaritPoint = gab;
      }
      if (gab.type === 'region') {
        newGabarit.templateGabaritRegion = gab;
      }
      if (gab.type === 'link') {
        newGabarit.templateGabaritLink = gab;
      }
    });
    this.props.options.saveGabaritFile.push(newGabarit);
  };

  fetchGabarit = () => {
    //this.result = fetchConfFile(this.props.options.saveGabaritURL);
    this.props.options.saveGabaritURL.forEach(async url => {
      try {
        // console.log(url);
        let file = {};
        // console.log(file);
        let response = await fetch(url);
        file = await response.json();
        this.loadGabarit(file, url);
      } catch (error) {
        console.error(error);
      }
    });
  };

  /**************************************INPUT******************************************/

  onToggleGabaritUrl = (isOpen: boolean): void => {
    this.setState({
      collapseSelectURL: isOpen,
    });
  };

  onToggleGabarit = (isOpen: boolean): void => {
    this.setState({
      collapseGabarit: isOpen,
    });
  };

  onGabaritUrlChanged = (event: { currentTarget: HTMLInputElement }) => {
    let newData = '';
    newData = event.currentTarget.value;
    this.props.onOptionsChange({ ...this.props.options, gabaritUrlInput: newData });
  };

  onGabaritListUrlChanged = (event: { currentTarget: HTMLInputElement }) => {
    let newData: string[] = this.props.options.saveGabaritURL.slice();
    newData[parseInt(event.currentTarget.id, 10)] = event.currentTarget.value;
    this.props.options.saveGabaritURL = newData;
    this.props.onOptionsChange({ ...this.props.options, saveGabaritURL: this.props.options.saveGabaritURL });
  };

  addGabaritUrlInput = (onClick: { currentTarget: HTMLButtonElement }) => {
    console.log(onClick.currentTarget);
    this.props.options.saveGabaritURL.push(this.props.options.gabaritUrlInput);
    this.props.options.gabaritUrlInput = '';
    this.props.onOptionsChange({ ...this.props.options, saveGabaritURL: this.props.options.saveGabaritURL });
  };

  gabaritDeletUrl = (onClick: { currentTarget: HTMLButtonElement }) => {
    const isUrl = (url: string) => url === this.props.options.saveGabaritURL[parseInt(onClick.currentTarget.id, 10)];
    this.props.options.saveGabaritURL.splice(this.props.options.saveGabaritURL.findIndex(isUrl), 1);
    this.props.onOptionsChange({ ...this.props.options, saveGabaritURL: this.props.options.saveGabaritURL });
  };

  tempo = () => {
    // console.log(this.props.options.saveGabaritURL);
  };

  gabaritUrlDisplay = (props: any): JSX.Element => {
    if (props.list.lenght !== 0) {
      const list = props.list.map((url: string, index: number) => (
        <div
          key={'GabaritUrlDiv' + index.toString()}
          style={{
            display: 'flex',
          }}
        >
          <FormField
            id={index.toString()}
            key={'GabaritUrl' + index.toString()}
            label={'Url'}
            labelWidth={5}
            inputWidth={20}
            onChange={this.onGabaritListUrlChanged.bind(this)}
            type="string"
            value={url || ''}
          />
          <Button variant="danger" id={index.toString()} key={'ButtunDel' + index.toString()} onClick={this.gabaritDeletUrl.bind(this)}>
            Del
          </Button>
        </div>
      ));
      return <div>{list}</div>;
    }
    return <div>No targets avalaible</div>;
  };

  gabaritDisplay = (props: any): JSX.Element => {
    if (props.list.lenght !== 0) {
      const list = props.list.map((gabarit: GabaritFile, index: number) => (
        <div
          key={'GabaritDiv' + index.toString()}
          style={{
            display: 'flex',
          }}
        >
          <FormField
            id={index.toString()}
            key={'Gabarit' + index.toString()}
            label={'Gabarit'}
            labelWidth={5}
            inputWidth={20}
            type="string"
            value={gabarit.fileName || ''}
          />
          <FormLabel width={15}>Querry ID</FormLabel>
          <Select
            onChange={value => this.onChangeSelectQuerryID(value, index)}
            allowCustomValue={false}
            options={this.state.selectQuerryID}
            width={10}
            value={this.state.selectQuerryIDDefault}
          />
          <Button variant="danger" id={index.toString()} key={'ButtunDel' + index.toString()} onClick={this.gabaritDeletUrl.bind(this)}>
            Del
          </Button>
        </div>
      ));
      return <div>{list}</div>;
    }
    return <div>No targets avalaible</div>;
  };

  delAll = () => {
    // this.props.options.arrayCoordinateSpace = [];
    // this.props.options.arrayOrientedLinks = [];
    // this.props.options.arrayPoints = [];
    this.props.options.saveGabaritURL = [];
    this.props.options.saveGabaritURL = [];
    // this.props.options.saveGabaritURL.mono = [];
    this.props.onOptionsChange({ ...this.props.options, saveGabaritURL: this.props.options.saveGabaritURL });
  };

  toDel = () => {
    console.log(this.props.data.series);
    // console.log(this.props.options.arrayPoints);
  };

  render() {
    const { options } = this.props;
    return (
      <div>
        <Collapse isOpen={this.state.collapseSelectURL} label="Url List" onToggle={this.onToggleSelectUrl}>
          <FormField
            label="Gabarit Url"
            labelWidth={8}
            key={'GabaritUrl'}
            inputWidth={20}
            onChange={this.onGabaritUrlChanged.bind(this)}
            type="string"
            value={options.gabaritUrlInput || ''}
          />
          <Button key={'AddGabaritUrl'} onClick={this.addGabaritUrlInput}>
            Add
          </Button>
          <div className="section gf-form-group">
            <Button onClick={this.fetchGabarit}>Finish</Button>
            <this.gabaritUrlDisplay list={options.saveGabaritURL} />
            <Button key={'delAll'} onClick={this.delAll}>
              Del all urls
            </Button>
          </div>
          <Button onClick={this.toDel}>toDel</Button>
        </Collapse>
        <Collapse isOpen={this.state.collapseGabarit} label="Gabarit List" onToggle={this.onToggleGabarit}>
          <this.gabaritDisplay list={options.saveGabaritFile} />
        </Collapse>
      </div>
    );
  }
}
export default Gabarit;
