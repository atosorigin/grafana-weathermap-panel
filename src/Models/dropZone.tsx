import React from 'react';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions, ImportFile } from '../types';
import { Button, FormField } from '@grafana/ui';
import ImportInput from 'components/importInput';

interface Props extends PanelEditorProps<SimpleOptions> {}

interface State {
  selectedFile: any;
  readerFile: FileReader;
  loaded: number;
}

class DropZone extends React.Component<Props, State> {
  fileReader: any = null;

  constructor(props: any) {
    super(props);
    this.state = {
      selectedFile: null,
      readerFile: new FileReader(),
      loaded: 0,
    };
  }

  onChangeHandler = (event: any) => {
    this.setState({
      selectedFile: event.target.files[0],
      readerFile: new FileReader(),
      loaded: 0,
    });
  };

  upload = () => {
    this.state.selectedFile.onload = function(event: any) {
      if (event.target?.result != null) {
        console.log(event.target.result);
        this.props.options.saveImportFile.push(this.state.readerFile.result as string);
        this.props.onOptionsChange({ ...this.props.options, saveImportFile: this.props.options.saveImportFile });
      }
    };
    this.state.readerFile.readAsText(this.state.selectedFile);
  };

  save = () => {
    if (this.state.readerFile.result != null) {
      this.props.options.saveImportFile.push({ name: this.state.selectedFile.name, content: this.state.readerFile.result as string });
      let loader: ImportInput = new ImportInput(this.props);
      this.props.options.saveImportFile.forEach(file => {
        if (JSON.parse(file.content).hasOwnProperty('regions')) {
          loader.loadMultiRegions(JSON.parse(file.content));
          console.log('Load Region');
        }
        if (JSON.parse(file.content).hasOwnProperty('points')) {
          loader.loadMultiPoints(JSON.parse(file.content));
          console.log('Load Point');
        }
        if (JSON.parse(file.content).hasOwnProperty('links')) {
          loader.loadMultiLinks(JSON.parse(file.content));
          console.log('Load Links');
        }
      });
    }
    console.log(this.props.options.saveImportFile);
  };

  // load = () => {
  //   let loader : ImportInput = new ImportInput(this.props);
  // 	this.props.options.saveImportFile.forEach(file => {
  // 		if (JSON.parse(file.content).hasOwnProperty("regions")){
  //       loader.loadMultiRegions(JSON.parse(file.content));
  //       console.log("Load Region");
  //     }
  //     if (JSON.parse(file.content).hasOwnProperty("points")){
  //       loader.loadMultiPoints(JSON.parse(file.content));
  //       console.log("Load Point");
  //     }
  //     if (JSON.parse(file.content).hasOwnProperty("links")){
  //       loader.loadMultiLinks(JSON.parse(file.content));
  //       console.log("Load Links");
  // 		}
  // 	});
  //   this.props.options.saveImportFile.forEach(element => {
  //     console.log(JSON.parse(element.content));
  //   });
  // }

  test = () => {
    this.props.options.saveImportFile = [];
    this.props.options.saveImportFile.forEach(element => {
      console.log(element.name);
    });
  };

  onMultiListFileChanged = (event: { currentTarget: HTMLInputElement }) => {
    let newData: ImportFile[] = this.props.options.saveImportFile.slice();
    newData[parseInt(event.currentTarget.id, 10)].name = event.currentTarget.value;
    this.props.options.saveImportFile = newData;
    this.props.onOptionsChange({ ...this.props.options, saveImportFile: this.props.options.saveImportFile });
  };

  multiDeletFile = (onClick: { currentTarget: HTMLButtonElement }) => {
    const isUrl = (url: ImportFile) => url === this.props.options.saveImportFile[parseInt(onClick.currentTarget.id, 10)];
    this.props.options.saveImportFile.splice(this.props.options.saveImportFile.findIndex(isUrl), 1);
    this.props.onOptionsChange({ ...this.props.options, saveImportFile: this.props.options.saveImportFile });
  };

  multiUploadDisplay = (props: any): JSX.Element => {
    if (props.file.lenght !== 0) {
      const list = props.file.map((file: ImportFile, index: number) => (
        <div
          key={'MultiFileDiv' + index.toString()}
          style={{
            display: 'flex',
          }}
        >
          <FormField
            id={index.toString()}
            key={'MultiFile' + index.toString()}
            label={'File'}
            labelWidth={5}
            inputWidth={20}
            onChange={this.onMultiListFileChanged.bind(this)}
            type="string"
            value={file.name || ''}
          />
          <Button variant="danger" id={index.toString()} key={'ButtunDel' + index.toString()} onClick={this.multiDeletFile.bind(this)}>
            Del
          </Button>
        </div>
      ));
      return <div>{list}</div>;
    }
    return <div>No targets avalaible</div>;
  };

  render() {
    return (
      <div>
        <div>
          <input type="file" name="file" onChange={this.onChangeHandler} />
          <Button onClick={this.upload}>add</Button>
          <Button onClick={this.save}>finish</Button>
        </div>
        <div>
          <this.multiUploadDisplay file={this.props.options.saveImportFile} />
          <Button onClick={this.test}>test</Button>
        </div>
      </div>
    );
  }
}
export default DropZone;
