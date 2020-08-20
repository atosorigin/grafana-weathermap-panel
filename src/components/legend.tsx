import React from 'react';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { RegionClass } from 'Models/RegionClass';
import { LowerLimitClass } from 'Models/LowerLimitClass';
import { PointClass } from 'Models/PointClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import { Button } from '@grafana/ui';

interface Legend {
  hiddenLegend: boolean;
  x: number;
  y: number;
}

interface Props extends PanelEditorProps<SimpleOptions> {
  // legend: Legend;
  /** save data */
  callBack: (event: any) => void;
  callBackClose: () => void;
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
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  };

  /** fill lowerlimit in JSX.Element */
  fillLowerLimit = (lowerLimit: LowerLimitClass[], name: string): JSX.Element[] => {
    const allLimit: JSX.Element[] = [];
    let i = 0;
    const max: number = lowerLimit.length - 1;

    for (const lower of lowerLimit) {
      allLimit.push(
        <div key={name + 'LowerLimit' + i} className="LegendMatt">
          <span
            style={{
              padding: '5px',
              // margin: '10px',
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
        </div>
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
      const allLimit: JSX.Element[] = this.fillLowerLimit(line.lowerLimit, 'region');
      const ownElement: JSX.Element = (
        <div key={line.id + 'DisplayLegendRegion'}>
          {line.label}
          {allLimit}
        </div>
      );
      rendu.push(ownElement);
    }
    return rendu;
  };

  closeLegend = (event: any) => {
    this.props.callBackClose();
    // const close = document.getElementById('iconclose');
    // close?.addEventListener('click', () => {
    //   console.log('goodzone');

    //   const disapear = document.getElementById('L');
    //   const appear = document.getElementById('legnd');
    //   if (disapear) {
    //     disapear.style.visibility = 'hidden';
    //   }
    //   appear?.addEventListener('click', () => {
    //     if (disapear) {
    //       console.log('dam');
    //       disapear.style.visibility = 'visible';
    //     }
    //   });
    // });
  };

  /** get all limit for point */
  fillPoint = () => {
    const allPoint: PointClass[] = this.props.options.arrayPoints;
    const rendu: JSX.Element[] = [];

    for (const line of allPoint) {
      const allLimit: JSX.Element[] = this.fillLowerLimit(line.lowerLimit, 'point');
      const name: string = line.label || line.name;
      const ownElement: JSX.Element = (
        <div key={name + 'DisplayLegendPoint'}>
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
      const allLimit: JSX.Element[] = this.fillLowerLimit(line.lowerLimit, 'link');
      const name: string = line.label || line.name;
      const ownElement: JSX.Element = (
        <div key={name + 'DisplayLegendLink'}>
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
        key={'contentLegend'}
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
          id="L"
          style={{
            width: '200px',
            position: 'absolute',
            overflowY: 'scroll',
            margin: '0',
            height: '240px',
            backgroundColor: '#FFF',
            color: '#000',
            border: '4px solid #299c46',
            borderRadius: '4px',
            // scrollbarColor: '#09090b #212124',
            scrollbarColor: '#299c46',
            scrollbarWidth: 'thin',
            zIndex: 9999,
            resize: 'both',
          }}
        >
          <div key={'legendTitle'} style={{ backgroundImage: 'linear-gradient(90deg, rgb(41, 42, 45), rgb(0, 0, 0))' }}>
            <h5 style={{ width: '100%', fontSize: '20px', display: 'flex', padding: '10px' }}>
              Legend
              <Button onClick={this.closeLegend} style={{ marginLeft: 'auto' }} id="iconclose">
                <i className="fa fa-times" aria-hidden="true"></i>
              </Button>
            </h5>
            {/* <p style={{ color: '#d8d9da', fontSize: '15px', marginLeft: '14px', fontWeight: 'bold' }}>Region</p>
            <p style={{ color: '#d8d9da', fontSize: '11px', marginLeft: '17px' }}>Label</p> */}

            {/* <p style={{ fontSize: '15px', marginLeft: '14px', fontWeight: 'bold' }}>Region</p> */}
            <div key={'legendTitleRegion'} style={{ backgroundImage: 'linear-gradient(90deg, rgb(41, 42, 45), rgb(0, 0, 0))' }}>
              <p style={{ fontSize: '15px', padding: '10px 0 10px 14px', fontWeight: 'bold', color: 'white' }}>Region</p>
            </div>
          </div>
          <div key="regionLegend" style={{ paddingLeft: '5px', lineHeight: '1.5' }}>
            {this.fillRegion()}
          </div>
          <div key={'legendTitlePoint'} style={{ backgroundImage: 'linear-gradient(90deg, rgb(41, 42, 45), rgb(0, 0, 0))' }}>
            <p style={{ fontSize: '15px', padding: '10px 0 10px 14px', fontWeight: 'bold', color: 'white' }}>Point</p>
          </div>
          <div key="pointLegend" style={{ paddingLeft: '5px', lineHeight: '1.5' }}>
            {this.fillPoint()}
          </div>
          <div key={'legendTitleLink'} style={{ backgroundImage: 'linear-gradient(90deg, rgb(41, 42, 45), rgb(0, 0, 0))' }}>
            <p style={{ fontSize: '15px', padding: '10px 0 10px 14px', fontWeight: 'bold', color: 'white' }}>Oriented Link</p>
          </div>
          <div key="linkLegend" style={{ paddingLeft: '5px' }}>
            {this.fillLink()}
          </div>
        </article>
      </div>
    );
    await this.setStateAsyncFinalHTML({
      finalHTML: value,
    });
  };

  setStateLegendAsync = (state: { legend: Legend }) => {
    return new Promise((resolve) => {
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
    // rip testMoi
    return <div key={'contentHtmlLegend'}>{this.state.finalHTML}</div>;
  }
}
export default LegendComponent;
