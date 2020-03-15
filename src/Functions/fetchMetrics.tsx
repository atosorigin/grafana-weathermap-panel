import { RegionClass } from '../Models/RegionClass';
import { PointClass } from '../Models/PointClass';
import { DataFrame } from '@grafana/data';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';


export const reqMetricRegion = (region: RegionClass, props: any) => {
	const data: DataFrame[] = [];

	for (const line of props.data.series) {
		console.log(line.refId);
		if (line.refId === region.mainMetric.refId) {
			data.push(line);
		}
	}
	region.mainMetric.returnQuery = data;
	// console.group('reqMetricRegion');
	// console.log(data);
	// console.groupEnd();
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
	for (const line of props.data.series) {
		if (line.refId === orientedLink.mainMetric.refId) {
			data.push(line);
		}
	}
	orientedLink.mainMetric.returnQuery = data;
};

export const reqMetricAuxOrientedLink = (orientedLink: OrientedLinkClass, props: any) => {
	const data: DataFrame[] = [];
	for (const metric of orientedLink.metrics) {
		for (const line of props.data.request.targets) {
			if (line.expr === metric.expr) {
				data.push(line);
			}
		}
		metric.returnQuery = data;
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
	// Update points
	for (const point of props.options.arrayLinks) {
		reqMetricPoint(point, props);
		reqMetricAuxPoint(point, props);
	}
};
