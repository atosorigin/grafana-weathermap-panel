import React, { CSSProperties } from 'react';
import { SimpleOptions } from 'types';

import { PanelEditorProps } from '@grafana/data';
import { Tooltip } from '@grafana/ui';

import { RegionClass, ICoord4D } from 'Models/RegionClass';

import { calculRealCoordinate } from 'Functions/otherFunction';
import { getLowerLimit, ILowerLimit } from 'Functions/getLowerLimit';
import { getResultQuery } from 'Functions/getResultQuery';
import { parseColor, IColor } from 'Functions/parseColor';
import { reqMetricRegion } from 'Functions/fetchMetrics';
import { searchMinMaxIdSVG, ICoord4DInt } from 'Functions/searchMinMaxIdSVG';

interface IProps extends PanelEditorProps<SimpleOptions> {
	/** object CoordinateSpace */
	uneCoor: RegionClass;
	/** use limit */
	useLimit: boolean;
	/** limit */
	limit: ICoord4D;
	/** id region */
	id: string;
	/** if button SimplePanel is active, block all onClick region space */
	isEnabled: boolean;
}

interface IState {
	/** value of tooltip */
	tooltipValue: JSX.Element;
	/** background color with lower limit */
	backgroundColor: string;
	/** border color with lower llimit */
	borderColor: string;
	/** size border with lower limit */
	sizeBorder: number;
	/** html result */
	htmlResult: JSX.Element;
	/** value return by query */
	valueQuery: string;

}

interface ICoorHTML {
	/** coordinate left */
	left: string;
	/** coordinate right */
	right: string;
	/** coordinate top */
	top: string;
	/** coordinate bottom */
	bottom: string;
}

interface ITooltip {
	tooltipValue: JSX.Element;
	backgroundColor: string;
	borderColor: string;
	sizeBorder: number;
	valueQuery: string;
}

/**
 * Draw rectangle
 */
export default class DrawRectangleExtend extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			tooltipValue: <div></div>,
			backgroundColor: 'rgba(255, 255, 255, 0)',
			borderColor: 'rgba(255, 255, 255, 0)',
			sizeBorder: 1,
			htmlResult: <div></div>,
			valueQuery: '',
		};
	}

	/**
	 * Edit color Zone in SVG
	 * @param {string} id id is equal to zone for change color in Svg
	 * @param {string} color define the color for Svg zone
	 */
	public editColorSvgZone = (id: string, color: string, border: string, sizeBorder: string): void => {
		const colorSVG: IColor = parseColor(color);
		const colorBorderSVG: IColor = parseColor(border);
		const changeColorElement: HTMLElement | null = document.getElementById(id);

		if (changeColorElement) {
			changeColorElement.style.fill = colorSVG.color;
			changeColorElement.style.fillOpacity = colorSVG.transparency;
			changeColorElement.style.stroke = colorBorderSVG.color;
			changeColorElement.style.strokeOpacity = colorBorderSVG.transparency;
			changeColorElement.style.strokeWidth = sizeBorder;
			// changeColorElement.addEventListener('load', () => {
			// 	changeColorElement.addEventListener('mouseover', () => console.log('over'));
			// 	changeColorElement.addEventListener('mouseout', () => console.log('out'));
			// });
		}
	}

	/** fill state for tooltip, color zone and calc round query */
	public setStateTooltip = (
		lowerLimit: ILowerLimit,
		region: RegionClass,
		valueQuery: number | null,
		link: boolean
	): ITooltip => {
		const styleTooltip = {
			color: region.textObj.colorText,
			backgroundColor: region.textObj.colorBack,
		} as CSSProperties;

		const styleMetrics = {
			color: region.textObj.valueGenerateObjectText.colorTextElement,
			backgroundColor: region.textObj.valueGenerateObjectText.colorBackElement,
		} as CSSProperties;

		let converValueQuery: string = 'NaN';
		const roundMetrics: number = parseInt(region.textObj.valueGenerateObjectText.numericFormatElement, 10);

		if (valueQuery && region.textObj.valueGenerateObjectText.numericFormatElement !== ''
			&& roundMetrics) {
			converValueQuery = valueQuery.toFixed(roundMetrics).toString();
		} else if (valueQuery) {
			converValueQuery = valueQuery.toString();
		}
		// (Math.round(valueQuery * roundMetrics + Number.EPSILON) / roundMetrics).toString()
		const value: string = converValueQuery
			+ (region.textObj.valueGenerateObjectText.unit
				? ' ' + region.textObj.valueGenerateObjectText.unit : '');

		const valueQueryResult: string = region.textObj.valueGenerateObjectText.legendElement
			+ ' ' + value;

		const tooltipValue: JSX.Element = <div>
			<div style={styleTooltip}>
				{
					link &&
					<a href={region.linkURL.hoveringTooltipLink}>
						{region.linkURL.hoveringTooltipText}
					</a>
				}
				{
					region.textObj.isTextRegion &&
					<p>{region.label}</p>
				}
			</div>
			<div style={styleMetrics}>
				{
					region.textObj.generateObjectText
					&& region.textObj.valueGenerateObjectText.displayObjectInText
					&& <p>{valueQueryResult}</p>
				}
			</div>
		</div>;
		return ({
			'tooltipValue': tooltipValue,
			'backgroundColor': lowerLimit.colorBack,
			'borderColor': lowerLimit.colorBorder,
			'sizeBorder': lowerLimit.sizeBorder,
			'valueQuery': valueQueryResult,
		});
	}

	/** generate tooltip for metrics and apply color with lower limit */
	public generateTooltipAndEditColor = (
		region: RegionClass,
		valueQuery: number | null
	) => {
		let stateIsFill: boolean = false;
		const lowerLimit: ILowerLimit = getLowerLimit(region, valueQuery);

		if (region.mode) {
			this.editColorSvgZone(region.idSVG,
				lowerLimit.colorBack, lowerLimit.colorBorder, lowerLimit.sizeBorder.toString());
		}

		const resultTooltip: ITooltip = this.setStateTooltip(
			lowerLimit,
			region,
			valueQuery,
			this.props.isEnabled
		);
		if (valueQuery) {
			if (region.mode) {
				const coordinateWrite: ICoord4DInt | null = searchMinMaxIdSVG(region.idSVG);

				if (coordinateWrite) {
					stateIsFill = true;
					const styleWrite = {
						position: 'absolute',
						zIndex: 9998,
						left: coordinateWrite.xMax - (coordinateWrite.xMax - coordinateWrite.xMin),
						top: coordinateWrite.yMax,
						backgroundColor: region.textObj.valueGenerateObjectText.colorBackElement,
						color: region.textObj.valueGenerateObjectText.colorTextElement,
					} as CSSProperties;
					this.setState({
						htmlResult: <div style={styleWrite} >
							{resultTooltip.valueQuery}
						</div>,
						tooltipValue: resultTooltip.tooltipValue,
						backgroundColor: resultTooltip.backgroundColor,
						borderColor: resultTooltip.borderColor,
						sizeBorder: resultTooltip.sizeBorder,
						valueQuery: resultTooltip.valueQuery,
					});
				}
			}
		}
		if (!stateIsFill) {
			this.setState({
				tooltipValue: resultTooltip.tooltipValue,
				backgroundColor: resultTooltip.backgroundColor,
				borderColor: resultTooltip.borderColor,
				sizeBorder: resultTooltip.sizeBorder,
				valueQuery: resultTooltip.valueQuery,
			});
		}
	}

	/** get data metrics and fill state */
	public reqMetrics = () => {
		const region: RegionClass = this.props.uneCoor;

		reqMetricRegion(region, this.props);
		if (region.mainMetric.returnQuery
			&& region.mainMetric.returnQuery.length > 0) {
			const cnt: number | null = getResultQuery(region.mainMetric);

			this.generateTooltipAndEditColor(region, cnt);
		} else {
			this.generateTooltipAndEditColor(region, null);
		}
	}

	/** final region zone . Call function after reqMetrics*/
	public renduFinal = () => {
		if (this.props.uneCoor.mode) {
			return;
		}
		const region: RegionClass = this.props.uneCoor;
		const pBorder: string = this.state.sizeBorder.toString() + 'px solid '
			+ this.state.borderColor;

		const backColor: string = region.textObj.colorBack;
		const textColor: string = region.textObj.colorText;
		const fontStyle: string = region.textObj.styleText;

		const coorHTML: ICoorHTML = calculRealCoordinate(region, this.props.useLimit, this.props.limit);

		const styleDiv = {
			border: pBorder,
			bottom: coorHTML.bottom,
			left: coorHTML.left,
			position: 'absolute',
			right: coorHTML.right,
			top: coorHTML.top,
			zIndex: 9999,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			background: 'url(' + region.img + ') no-repeat center center',
			backgroundColor: this.state.backgroundColor,
			backgroundSize: 'contain',
			cursor: 'pointer',
		} as React.CSSProperties;

		const styleTextDiv = {
			backgroundColor: backColor,
			fontStyle: fontStyle,
			color: textColor,
			verticalAlign: 'middle',
		} as React.CSSProperties;

		const styleMetricsDiv = {
			backgroundColor: region.textObj.valueGenerateObjectText.colorBackElement,
			color: region.textObj.valueGenerateObjectText.colorTextElement,
			verticalAlign: 'middle',
		} as React.CSSProperties;

		let value: JSX.Element = <div></div>;

		if (this.props.isEnabled && region.linkURL.followLink !== '') {
			value = <a href={region.linkURL.followLink}>
				<div style={styleDiv} id={this.props.id} >
					{
						((!region.textObj.isTextRegion) || region.textObj.generateObjectText) &&
						<div>
							<div style={styleTextDiv}>
								{(!region.textObj.isTextRegion) && region.label}
							</div>
							<div style={styleMetricsDiv}>
								{region.textObj.generateObjectText
									&& (!region.textObj.valueGenerateObjectText.displayObjectInText)
									&& this.state.valueQuery}
							</div>
						</div>
					}
				</div>
			</a>;
			if (region.textObj.isTextRegion
				|| (region.textObj.generateObjectText
					&& region.textObj.valueGenerateObjectText.displayObjectInText)) {
				value = <Tooltip content={this.state.tooltipValue}>{value}</Tooltip>;
			}
		} else {
			value = <div style={styleDiv} id={this.props.id} >
				{
					((!region.textObj.isTextRegion)
						|| region.textObj.generateObjectText) &&
					<div>
						<div style={styleTextDiv}>
							{(!region.textObj.isTextRegion) && region.label}
						</div>
						<div style={styleMetricsDiv}>
							{region.textObj.generateObjectText
								&& (!region.textObj.valueGenerateObjectText.displayObjectInText)
								&& this.state.valueQuery}
						</div>
					</div>
				}
			</div>;
			if (region.textObj.isTextRegion
				|| (region.textObj.generateObjectText
					&& region.textObj.valueGenerateObjectText.displayObjectInText)) {
				value = <Tooltip content={this.state.tooltipValue}>{value}</Tooltip>;
			}
		}
		this.setState({
			htmlResult: value,
		});
	}

	/** fill state to display data in html */
	public fillState = async () => {
		await Promise.resolve('Success').then(() => {
			this.reqMetrics();
		});
		await Promise.resolve('Success').then(() => {
			this.renduFinal();
		});
	}

	/**
	 * update props
	 * @param prevProps
	 */
	public componentDidUpdate(prevProps: IProps) {
		if (prevProps !== this.props) {
			this.fillState();
		}
	}

	/** load prometheus value */
	public componentDidMount = () => {
		this.fillState();
	}

	/** render */
	public render() {
		return (
			<div style={{zIndex: 9999}}>
				{this.state.htmlResult}
			</div >
		);
	}
}
