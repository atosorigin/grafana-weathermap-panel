import { LowerLimitClass } from 'Models/LowerLimitClass';
import { RegionClass } from 'Models/RegionClass';

export interface ILowerLimit {
	/** color for background */
	colorBack: string;
	/** border color */
	colorBorder: string;
	/** size border */
	sizeBorder: number;
}

/**
	 * Get color with lower limit and prometheus value
	 * @returns {ILowerLimit} new color value
	 */
export const getLowerLimit = (coordinate: RegionClass, value: number | null): ILowerLimit => {
	const lowerLimit: LowerLimitClass[] = coordinate.lowerLimit;
	const result: ILowerLimit = { 'colorBack': '', 'colorBorder': '', 'sizeBorder': 0 };

	if (coordinate.colorMode && value) {
		for (const line of lowerLimit) {
			const min: string = line.lowerLimitMin.replace('>', '');
			const minFloat: number = parseFloat(min);
			const maxFloat: number = parseFloat(line.lowerLimitMax);
			if ((minFloat <= value || (!line.lowerLimitMin))
				&& (maxFloat >= value || (!line.lowerLimitMax))) {
				if (lowerLimit.length > 0) {
					result.colorBack = coordinate.traceBack ? line.backColor : '';
					result.colorBorder = coordinate.traceBorder ? line.borderColor : '';
					result.sizeBorder = coordinate.traceBorder ? parseInt(line.sizeBorder, 10) : 0;
					break;
				}
			}
		}
	} else {
		if (lowerLimit.length > 0) {
			result.colorBack = coordinate.traceBack ? lowerLimit[0].backColor : '';
			result.colorBorder = coordinate.traceBorder ? lowerLimit[0].borderColor : '';
			result.sizeBorder = coordinate.traceBorder ? parseInt(lowerLimit[0].sizeBorder, 10) : 0;
		}
	}
	return (result);
}