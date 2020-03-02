import { RegionClass } from '../Models/RegionClass';
import { PointClass } from '../Models/PointClass';
import { LinkClass } from '../Models/LinkClass';
import { DataFrame } from '@grafana/data';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';


export const reqMetricRegion = (region: RegionClass, props: any) => {
	let data: DataFrame = { 'fields': [], 'length': 0 };
	for (const line of props.data.series) {
		if (line.refId === region.mainMetric.refId) {
			data = line;
			break;
		}
	}
	region.mainMetric.returnQuery = data;
};

export const reqMetricAuxRegion = (region: RegionClass, props: any) => {
	let data: DataFrame = { 'fields': [], 'length': 0 };
	for (const metric of region.metrics) {
		for (const line of props.data.series) {
			if (line.refId === metric.refId) {
				data = line;
				break;
			}
		}
		metric.returnQuery = data;
	}
};

export const reqMetricPoint = (point: PointClass, props: any) => {
	let data: DataFrame = { 'fields': [], 'length': 0 };
	for (const line of props.data.series) {
		if (line.refId === point.mainMetric.refId) {
			data = line;
			break;
		}
	}
	point.mainMetric.returnQuery = data;
};

export const reqMetricAuxPoint = (point: PointClass, props: any) => {
	let data: DataFrame = { 'fields': [], 'length': 0 };
	for (const metric of point.metrics) {
		for (const line of props.data.series) {
			if (line.refId === metric.refId) {
				data = line;
				break;
			}
		}
		metric.returnQuery = data;
	}
};

export const reqMetricLink = (link: LinkClass, props: any) => {
	let data: DataFrame = { 'fields': [], 'length': 0 };
	for (const line of props.data.series) {
		if (line.refId === link.mainMetric.refId) {
			data = line;
			break;
		}
	}
	link.mainMetric.returnQuery = data;
};

export const reqMetricAuxLink = (link: LinkClass, props: any) => {
	let data: DataFrame = { 'fields': [], 'length': 0 };
	for (const metric of link.metrics) {
		for (const line of props.data.series) {
			if (line.refId === metric.refId) {
				data = line;
				break;
			}
		}
		metric.returnQuery = data;
	}
};

export const reqMetricOrientedLink = (orientedLink: OrientedLinkClass, props: any) => {
	let data: DataFrame = { 'fields': [], 'length': 0 };
	for (const line of props.data.series) {
		if (line.refId === orientedLink.mainMetric.refId) {
			data = line;
			break;
		}
	}
	orientedLink.mainMetric.returnQuery = data;
};

export const reqMetricAuxOrientedLink = (orientedLink: OrientedLinkClass, props: any) => {
	let data: DataFrame = { 'fields': [], 'length': 0 };
	for (const metric of orientedLink.metrics){
		for (const line of props.data.request.targets) {
			if (line.expr === metric.expr) {
				data = line;
				break;
			}
		}
		metric.returnQuery = data;
	}
};

export const reqUpdateMetrics = (props: any) => {
	// Update regions
	for (const region of props.options.arrayCoordinateSpace) {
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
