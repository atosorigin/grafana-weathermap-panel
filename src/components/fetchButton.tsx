import React from 'react';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions, Target } from '../types';
import { Button } from '@grafana/ui';
import { reqMetricAuxRegion, reqMetricLink, reqMetricAuxOrientedLink, reqMetricPoint, reqMetricAuxPoint } from 'Functions/fetchMetrics';
//import { reqMetricRegion } from 'Functions/fetchMetrics';

//import { reqUpdateMetrics, reqMetricAuxRegion} from "../Functions/fetchMetrics";
// import { RegionClass } from 'Models/RegionClass';

interface Props extends PanelEditorProps<SimpleOptions> {}

/**
 * TODO
 */
class FetchButton extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  /**
   * Create and push the range query url
   */
  makeQueryRange = () => {
    this.props.options.queryPromRange = [];
    let dateStampStart = Date.parse(this.props.options.timeRange.from).toString();
    dateStampStart = dateStampStart.substring(0, dateStampStart.length - 3);
    let dateStampEnd = Date.parse(this.props.options.timeRange.to).toString();
    dateStampEnd = dateStampEnd.substring(0, dateStampEnd.length - 3);
    this.props.options.promTargets.map((target: Target) => {
      const tmp: string =
        this.props.options.promUrl +
        'query_range?query=' +
        target.expr +
        '&start=' +
        dateStampStart +
        '&end=' +
        dateStampEnd +
        '&step=' +
        this.props.options.refresh.label;
      this.props.options.queryPromRange.push(tmp);
    });
    // Console.table(this.props.options.queryPromRange);
  };

  /**
   * Create and push the query url
   */
  makeQuery = () => {
    this.props.options.queryProm = [];
    let dateStamp = Date.parse(this.props.options.timeQuery).toString();
    dateStamp = dateStamp.substring(0, dateStamp.length - 3);
    this.props.options.promTargets.map((target: Target) => {
      const tmp: string = this.props.options.promUrl + 'query?query=' + target.expr + '&time=' + dateStamp;
      this.props.options.queryProm.push(tmp);
    });
    // Console.table(this.props.options.queryProm);
  };

  /**
   * Send the range query and stock the return
   */
  fetchQuerryRange = () => {
    this.makeQueryRange();
    this.props.options.jsonQueryReturn = [];
    this.props.options.queryPromRange.forEach(url => {
      fetch(url)
        .then(response => response.json())
        .then(result => {
          this.props.options.jsonQueryReturn.push(result);
        })
        .catch(error => {
          // Console.log(error)
        });
    });
    this.props.onOptionsChange({ ...this.props.options, promTargets: this.props.options.promTargets });
    console.log(this.props.options.jsonQueryReturn);
  };

  /**
   * Send the query and stock the return
   */
  fetchQuerry = () => {
    this.makeQuery();
    this.props.options.jsonQueryReturn = [];
    this.props.options.queryProm.forEach(url => {
      fetch(url)
        .then(response => response.json())
        .then(result => {
          this.props.options.jsonQueryReturn.push(result);
        })
        .catch(error => {
          console.log(error);
        });
    });
    this.props.onOptionsChange({ ...this.props.options, promTargets: this.props.options.promTargets });
    console.log(this.props.options.jsonQueryReturn);
  };

  /**
   * TODO work in progress
   */
  fetchGlobalQuerry = () => {
    this.props.options.jsonGlobalQueryReturn = [];
    this.props.options.queryProm.forEach(url => {
      fetch(url)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          this.props.options.jsonGlobalQueryReturn.push(result);
        })
        .catch(error => {
          console.log(error);
        });
    });
  };

  /**
   * Debug
   */
  printJSON = () => {
    // // console.table(this.props.options.jsonQueryReturn);
    // // console.table(this.props.options.promTargets);
    // // reqMetricRegion(this.props.options.regionCoordinateSpace[0], this.props);
    // // this.props.options.regionCoordinateSpace.map((region: RegionClass, index: number) => {
    // // 	console.log("Region " + index);
    // // 	console.log(region.mainMetric.returnQuery);
    // // 	if (region.mainMetric.returnQuery?.fields[0].values) {
    // // 		console.log(region.mainMetric.returnQuery?.fields[0].values);
    // // 	}
    // // })
    // console.log("Update des régions");
    // reqUpdateMetrics(this.props);
    // // this.props.options.regionCoordinateSpace.map((region: RegionClass, index: number) => {
    // // 	console.log("Region " + index);
    // // 	console.log(region.mainMetric.returnQuery);
    // // 	if (region.mainMetric.returnQuery?.fields[0].values.get(0)) {
    // // 		console.log(region.mainMetric.returnQuery?.fields[0].values);
    // // 	}
    // // })
    // console.log(this.props.options.regionCoordinateSpace[0].metrics[0].returnQuery);
    // reqMetricAuxRegion(this.props.options.regionCoordinateSpace[0], this.props);
    // console.log(this.props.options.regionCoordinateSpace[0].metrics[0].returnQuery);

    // // pour choper l'expr
    // for (const target of this.props.options.regionCoordinateSpace){
    // 	target.mainMetric.expr = "rate(node_cpu_seconds_total{mode=\"system\"}[1m])";
    // }
    // let tmp : any = this.props.data.request;
    // console.log(this.props.data.series)
    // console.log(tmp.targets)
    // reqMetricRegion(this.props.options.regionCoordinateSpace[0], this.props);
    // console.log(this.props.options.regionCoordinateSpace[0].mainMetric.returnQuery);
    // console.log(this.props.options.regionCoordinateSpace[0]);
    //let test:any = this.props.data.request?.targets;
    //console.table(test);

    //Test to uncomment after
    console.log('Regions');
    for (const region of this.props.options.regionCoordinateSpace) {
      console.log(region);
    }
    console.log('Liens');
    for (const link of this.props.options.arrayOrientedLinks) {
      console.log(link);
    }
    console.log('Points');
    for (const point of this.props.options.arrayPoints) {
      console.log(point);
    }
    console.log('procced to fetch regions queries');
    this.props.options.regionCoordinateSpace.forEach(region => {
      reqMetricAuxRegion(region, this.props);
      reqMetricAuxRegion(region, this.props);
    });
    console.log('procced to fetch links queries');
    this.props.options.arrayOrientedLinks.forEach(link => {
      reqMetricLink(link, this.props);
      reqMetricAuxOrientedLink(link, this.props);
    });
    console.log('procced to fetch points queries');
    this.props.options.arrayPoints.forEach(point => {
      reqMetricPoint(point, this.props);
      reqMetricAuxPoint(point, this.props);
    });
    console.log('Regions');
    for (const region of this.props.options.regionCoordinateSpace) {
      console.log(region);
    }
    console.log('Liens');
    for (const link of this.props.options.arrayOrientedLinks) {
      console.log(link);
    }
    console.log('Points');
    for (const point of this.props.options.arrayPoints) {
      console.log(point);
    }
  };

  test = () => {
    for (const line of this.props.data.series) {
      console.log(line.refId);
      console.log(line);
    }
  };

  /**
   * Delet the whole targets selected
   */
  deleteTargets = () => {
    this.props.options.promTargets = [];
    this.props.onOptionsChange({ ...this.props.options, promTargets: this.props.options.promTargets });
  };

  /**
   * result
   */
  render() {
    return (
      <div className="section gf-form-groug">
        <Button key="ButtonPrint" onClick={this.printJSON}>
          test fetchMetric
        </Button>
        <Button key="ButtonFetchRange" onClick={this.fetchQuerryRange}>
          fetch range
        </Button>
        <Button key="ButtonFetchInstant" onClick={this.fetchQuerry}>
          fetch instant
        </Button>
        <Button key="ButtonDelTargets" variant="danger" onClick={this.deleteTargets}>
          delete targets
        </Button>
      </div>
    );
  }
}
export default FetchButton;
