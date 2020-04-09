import { RegionClass } from '../Models/RegionClass';
import { PointClass } from '../Models/PointClass';
import { DataFrame } from '@grafana/data';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';

export const reqMetricRegion = (region: RegionClass, props: any) => {
  const data: DataFrame[] = [];

  for (const line of props.data.series) {
    if (line.refId === region.mainMetric.refId) {
      data.push(line);
    }
  }
  region.mainMetric.returnQuery = data;
};

export const reqMetricAuxRegion = (region: RegionClass, props: any) => {
  const data: DataFrame[] = [];
  for (const metric of region.metrics) {
    for (const line of props.data.series) {
      if (line.refId === metric.refId) {
        data.push(line);
      }
    }
    metric.returnQuery = data;
  }
};

export const reqMetricPoint = (point: PointClass, props: any) => {
  const data: DataFrame[] = [];
  for (const line of props.data.series) {
    if (line.refId === point.mainMetric.refId) {
      data.push(line);
    }
  }
  point.mainMetric.returnQuery = data;
};

export const reqMetricAuxPoint = (point: PointClass, props: any) => {
  const data: DataFrame[] = [];
  for (const metric of point.metrics) {
    for (const line of props.data.series) {
      if (line.refId === metric.refId) {
        data.push(line);
      }
    }
    metric.returnQuery = data;
  }
};

export const reqMetricLink = (link: OrientedLinkClass, props: any) => {
  const data: DataFrame[] = [];
  for (const line of props.data.series) {
    if (line.refId === link.mainMetric.refId) {
      data.push(line);
    }
  }
  link.mainMetric.returnQuery = data;
};

export const reqMetricAuxLink = (link: OrientedLinkClass, props: any) => {
  const data: DataFrame[] = [];
  for (const metric of link.metrics) {
    for (const line of props.data.series) {
      if (line.refId === metric.refId) {
        data.push(line);
      }
    }
    metric.returnQuery = data;
  }
};

export const reqMetricOrientedLink = (orientedLink: OrientedLinkClass, props: any) => {
  const data: DataFrame[] = [];
  const dataB: DataFrame[] = [];
  for (const line of props.data.series) {
    if (line.refId === orientedLink.mainMetric.refId) {
      data.push(line);
    }
    if (line.refId === orientedLink.mainMetricB.refId) {
      dataB.push(line);
    }
  }
  orientedLink.mainMetric.returnQuery = data;
  orientedLink.mainMetricB.returnQuery = dataB;
};

export const reqMetricAuxOrientedLink = (orientedLink: OrientedLinkClass, props: any) => {
  const data: DataFrame[] = [];
  const dataB: DataFrame[] = [];
  for (const metric of orientedLink.metrics) {
    for (const line of props.data.series) {
      if (line.refId === metric.refId) {
        data.push(line);
      }
    }
    metric.returnQuery = data;
  }
  for (const metric of orientedLink.metricsB) {
    for (const line of props.data.series) {
      if (line.refId === metric.refId) {
        dataB.push(line);
      }
    }
    metric.returnQuery = dataB;
  }
};

export const reqUpdateMetrics = (props: any) => {
  // Update regions
  for (const region of props.options.regionCoordinateSpace) {
    reqMetricRegion(region, props);
    reqMetricAuxRegion(region, props);
  }
  // Update links
  for (const link of props.options.arrayLinks) {
    reqMetricLink(link, props);
    reqMetricAuxLink(link, props);
  }

  // Update links
  for (const orientedLink of props.options.arrayOrientedLinks) {
    reqMetricOrientedLink(orientedLink, props);
    reqMetricAuxOrientedLink(orientedLink, props);
  }
  // Update points
  for (const point of props.options.arrayPoints) {
    reqMetricPoint(point, props);
    reqMetricAuxPoint(point, props);
  }
};
