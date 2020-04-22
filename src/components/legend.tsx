import React from 'react';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { RegionClass } from 'Models/RegionClass';
import { LowerLimitClass } from 'Models/LowerLimitClass';
import { PointClass } from 'Models/PointClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';

interface Legend {
  hiddenLegend: boolean;
  x: number;
  y: number;
}

interface Props extends PanelEditorProps<SimpleOptions> {
  // legend: Legend;
  /** save data */
  callBack: (event: any) => void;
}

interface State {
  finalHTML: JSX.Element;
  legend: Legend;
}

/**
 * def
 */
class LegendComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      finalHTML: <div></div>,
      legend: this.props.options.legend,
    };
  }

  /** async state */
  setStateAsyncFinalHTML = (state: {
    /** mew value */
    finalHTML: JSX.Element;
  }) => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

  /** fill lowerlimit in JSX.Element */
  fillLowerLimit = (lowerLimit: LowerLimitClass[]): JSX.Element[] => {
    const allLimit: JSX.Element[] = [];
    let i = 0;
    const max: number = lowerLimit.length - 1;

    for (const lower of lowerLimit) {
      allLimit.push(
        <li className="LegendMatt">
          <span
            style={{
              padding: '5px',
              margin: '10px',
              width: '130px',
              //width: '3.5rem',
              //borderRadius: '39%',
              backgroundColor: lower.backColor,
              border: lower.sizeBorder + 'px solid ' + lower.borderColor,
              listStyleType: 'none',
              display: 'inline-block',
              textAlign: 'center',
            }}
          >
            {lowerLimit.length > 1 && (
              <span
                style={{
                  //display: 'inline-block',
                  //verticalAlign: 'middle',
                  //marginBottom: '1.25rem',
                  fontSize: '10px',
                  //fontWeight: 'bold',
                }}
              >
                {i === 0 ? '-∞' : lower.lowerLimitMin} - {i === max ? '+∞' : lower.lowerLimitMax}
              </span>
            )}
          </span>
        </li>
      );
      ++i;
    }
    return allLimit;
  };

  /** get all lower limit for region */
  fillRegion = () => {
    const allRegion: RegionClass[] = this.props.options.regionCoordinateSpace;
    const rendu: JSX.Element[] = [];

    for (const line of allRegion) {
      const allLimit: JSX.Element[] = this.fillLowerLimit(line.lowerLimit);
      const ownElement: JSX.Element = (
        <div>
          {line.label}
          {allLimit}
        </div>
      );
      rendu.push(ownElement);
    }
    return rendu;
  };

  /** get all limit for point */
  fillPoint = () => {
    const allPoint: PointClass[] = this.props.options.arrayPoints;
    const rendu: JSX.Element[] = [];

    for (const line of allPoint) {
      const allLimit: JSX.Element[] = this.fillLowerLimit(line.lowerLimit);
      const name: string = line.label || line.name;
      const ownElement: JSX.Element = (
        <div>
          {name}
          {allLimit}
        </div>
      );
      rendu.push(ownElement);
    }
    return rendu;
  };

  /** get all limit for orientedLink */
  fillLink = () => {
    const allLinks: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
    const rendu: JSX.Element[] = [];

    for (const line of allLinks) {
      const allLimit: JSX.Element[] = this.fillLowerLimit(line.lowerLimit);
      const name: string = line.label || line.name;
      const ownElement: JSX.Element = (
        <div>
          {name}
          {allLimit}
        </div>
      );
      rendu.push(ownElement);
    }
    return rendu;
  };

  /** generate legend */
  renduState = async () => {
    const value: JSX.Element = (
      <div
        style={{
          position: 'relative',
          left: this.state.legend.x,
          top: this.state.legend.y,
          maxWidth: '100%',
          zIndex: 'auto',
        }}
        hidden={this.state.legend.hiddenLegend}
      >
        <article
          style={{
            width: '170px',
            position: 'absolute',
            overflowY: 'scroll',
            margin: '0',
            height: '220px',
            backgroundColor: '#FFF',
            color: '#000',
            border: '4px solid #299c46',
            borderRadius: '4px',
            scrollbarColor: '#09090b #212124',
            scrollbarWidth: 'none',
            zIndex: 9999,
          }}
        >
          <div style={{ backgroundImage: 'linear-gradient(90deg, rgb(41, 42, 45), rgb(0, 0, 0))' }}>
            <h5 style={{ width: '100%', fontSize: '20px', display: 'inline-flex', padding: '10px' }}>Legend</h5>
            {/* <p style={{ color: '#d8d9da', fontSize: '15px', marginLeft: '14px', fontWeight: 'bold' }}>Region</p>
            <p style={{ color: '#d8d9da', fontSize: '11px', marginLeft: '17px' }}>Label</p> */}
          </div>
          {/* <p style={{ fontSize: '15px', marginLeft: '14px', fontWeight: 'bold' }}>Region</p> */}
          <div style={{ backgroundImage: 'linear-gradient(90deg, rgb(41, 42, 45), rgb(0, 0, 0))' }}>
            <p style={{ fontSize: '15px', padding: '10px 0 10px 14px', fontWeight: 'bold', color: 'white' }}>Region</p>
          </div>
          <ul key="regionLegend" style={{ paddingLeft: '5px' }}>
            {this.fillRegion()}
          </ul>
          <div style={{ backgroundImage: 'linear-gradient(90deg, rgb(41, 42, 45), rgb(0, 0, 0))' }}>
            <p style={{ fontSize: '15px', padding: '10px 0 10px 14px', fontWeight: 'bold', color: 'white' }}>Point</p>
          </div>
          <ul key="pointLegend" style={{ paddingLeft: '5px' }}>
            {this.fillPoint()}
          </ul>
          <div style={{ backgroundImage: 'linear-gradient(90deg, rgb(41, 42, 45), rgb(0, 0, 0))' }}>
            <p style={{ fontSize: '15px', padding: '10px 0 10px 14px', fontWeight: 'bold', color: 'white' }}>Oriented Link</p>
          </div>
          <ul key="pointLegend" style={{ paddingLeft: '5px' }}>
            {this.fillLink()}
          </ul>
        </article>
      </div>
    );
    await this.setStateAsyncFinalHTML({
      finalHTML: value,
    });
  };

  setStateLegendAsync = (state: { legend: Legend }) => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

  /** update when legend is edited */
  componentDidUpdate = async (prevProps: Props, prevState: State) => {
    if (prevProps !== this.props || prevState.legend.hiddenLegend !== this.props.options.legend.hiddenLegend) {
      await this.setStateLegendAsync({ legend: this.props.options.legend });
      this.renduState();
    }
  };

  /** fill state value when component is mounted */
  componentDidMount = () => {
    this.renduState();
  };

  /**
   * result
   */
  render() {
    return <div>{this.state.finalHTML}</div>;
  }
}
export default LegendComponent;
