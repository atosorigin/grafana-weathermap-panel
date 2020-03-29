import React from 'react';
import { SelectableValue, PanelEditorProps } from '@grafana/data';
import { RegionClass, ICoord4D } from 'Models/RegionClass';
import { Tooltip } from '@grafana/ui';
import { SimpleOptions } from 'types';
import { TextObject } from 'Models/TextObjectClass';
import { LowerLimitClass } from 'Models/LowerLimitClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import { PointClass } from 'Models/PointClass';

interface IProps extends PanelEditorProps<SimpleOptions> {
	id: string;
	pointAPositionX: string;
	pointAPositionY: string;
	pointBPositionX: string;
	pointBPositionY: string;
	colorA: string;
	colorB: string;
	orientationLink: string;
	label: string;
	associatePointIn: string;
	associatePointOut: string;
	associateRegionIn: string;
	associateRegionOut: string;
	widthImage: number;
	heightImage: number;
	name: string;
	refMainMetric: string;
	valueMainMetricA: string;
	valueMainMetricB: string;
	textObject: TextObject;
	seuil: LowerLimitClass[];
	labelAPositionX: string;
	labelAPositionY: string;
	labelBPositionX: string;
	labelBPositionY: string;
	tooltipPositionA: SelectableValue<any>;
	tooltipPositionB: SelectableValue<any>;
	zIndex: number;
	pointCPositionX: string;
	pointCPositionY: string;
	isIncurved: SelectableValue<boolean>;
}

interface IState {
	isMultiLink: boolean;
	checkIndexMultiLink: number;
}

export default class DrawOrientedLink extends React.Component<IProps, IState> {

	constructor(props: IProps) {
		super(props);
		this.state = {
			isMultiLink: false,
			checkIndexMultiLink: 0,
		};
	}

	public synchroLinkX(positionX: number): number {
		const initialSpace: ICoord4D = this.props.options.coordinateSpaceInitial.coordinate;
		const xMin: number = parseInt(initialSpace.xMin, 10);
		const xMinPx: number = (xMin + 100) * (this.props.widthImage / 200);
		const xMax: number = parseInt(initialSpace.xMax, 10);
		const xMaxPx: number = (xMax + 100) * (this.props.widthImage / 200)
		const widthInitialSpace: number = xMaxPx - xMinPx;
		const x: number = xMinPx + (((positionX) * (widthInitialSpace / 200)) + (widthInitialSpace / 2));
		return x;
	}

	public synchroLinkY(positionY: number): number {
		const initialSpace: ICoord4D = this.props.options.coordinateSpaceInitial.coordinate;
		const yMin: number = parseInt(initialSpace.yMin, 10);
		const yMinPx: number = (yMin + 100) * (this.props.heightImage / 200);
		const yMax: number = parseInt(initialSpace.yMax, 10);
		const yMaxPx: number = (yMax + 100) * (this.props.heightImage / 200);
		const heightInitialSpace: number = yMaxPx - yMinPx;
		const y: number = this.defineValueToAdaptPositionToInitialSpace(yMinPx, yMaxPx) + ((heightInitialSpace / 2) - ((positionY) * (heightInitialSpace / 200)));
		return y;
	}

	public defineValueToAdaptPositionToInitialSpace = (yMinPx: number, yMaxPx: number): number => {
		let valueToAdaptPositionToInitialSpace: number = 0;
		if (yMaxPx > yMinPx) {
			valueToAdaptPositionToInitialSpace = this.props.heightImage - yMaxPx;
		} else {
			valueToAdaptPositionToInitialSpace = this.props.heightImage - yMinPx;
		}
		return valueToAdaptPositionToInitialSpace;
	}

	public labelSynchroX = (): number => {
		let result: number = 0;
		const labelMainMetric = document.getElementById('labelMainMetric' + this.props.id);
		if (labelMainMetric?.offsetWidth) {
			result = (labelMainMetric?.offsetWidth) / 2;
		}
		return result;
	}

	public labelSynchroY = (): number => {
		let result: number = 0;
		const labelMainMetric = document.getElementById('labelMainMetric' + this.props.id);
		if (labelMainMetric?.offsetHeight) {
			result = (labelMainMetric?.offsetHeight) / 2;
		}
		return result;
	}

	/**
	 * to do
	 */
	public defineParallelOrientedLinks = (): number[] => {
		const arrayOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
		const listParallelOrientedLinks: number[] = [];
		listParallelOrientedLinks.push(parseInt(this.props.id, 10));
		arrayOrientedLink.forEach((orientedLink) => {
			if (this.props.name !== orientedLink.name) {
				if (this.props.associateRegionIn !== '' && this.props.associateRegionOut !== '') {
					if (this.props.associateRegionIn === orientedLink.regionIn ||
						this.props.associateRegionIn === orientedLink.regionOut) {
						if (this.props.associateRegionOut === orientedLink.regionIn ||
							this.props.associateRegionOut === orientedLink.regionOut) {
							listParallelOrientedLinks.push(orientedLink.id);
						}
					}
				} else if (this.props.associatePointIn !== '' && this.props.associatePointOut !== '') {
					if (this.props.associatePointIn === orientedLink.pointIn ||
						this.props.associatePointIn === orientedLink.pointOut) {
						if (this.props.associatePointOut === orientedLink.pointIn ||
							this.props.associatePointOut === orientedLink.pointOut) {
							listParallelOrientedLinks.push(orientedLink.id);
						}
					}
				} else if (	this.props.associateRegionIn !== '' && this.props.associatePointOut !== '') {
					if (this.props.associateRegionIn === orientedLink.regionIn ||
						this.props.associateRegionIn === orientedLink.pointOut ||
						this.props.associateRegionIn === orientedLink.regionOut) {
							if (this.props.associatePointOut === orientedLink.regionIn ||
								this.props.associatePointOut === orientedLink.pointOut ||
								this.props.associatePointOut === orientedLink.pointIn) {
								listParallelOrientedLinks.push(orientedLink.id);
							}
					}
				} else if (this.props.associatePointIn !== '' && this.props.associateRegionOut !== '') {
					if (this.props.associatePointIn === orientedLink.pointIn ||
						this.props.associatePointIn === orientedLink.regionOut ||
						this.props.associatePointIn === orientedLink.pointOut) {
							if (this.props.associateRegionOut === orientedLink.pointIn ||
								this.props.associateRegionOut === orientedLink.regionOut ||
								this.props.associateRegionOut === orientedLink.regionIn) {
								listParallelOrientedLinks.push(orientedLink.id);
						}
					}
				}
			}
		});
		const listParallelOrientedLinkSorted: number[] = listParallelOrientedLinks.sort((a, b) => a - b);
		return listParallelOrientedLinkSorted;
	}

	public ifMultiLinkWithRegionDefineX = (isIn: boolean, idMultiLink: number): number => {
		let xResult: number = 0;
		const arrayRegions = this.props.options.regionCoordinateSpace;
		const arrayPoints = this.props.options.arrayPoints;
		let xMinIn: number = 0;
		let xMaxIn: number = 0;
		let xMinOut: number = 0;
		let xMaxOut: number = 0;
		let yMinIn: number = 0;
		let yMaxIn: number = 0;
		let yMinOut: number = 0;
		let yMaxOut: number = 0;
		let xMidIn: number = 0;
		let xMidOut: number = 0;
		let yMidIn: number = 0;
		let yMidOut: number = 0;

		if (this.props.associatePointIn !== '') {
			arrayPoints.forEach((point) => {
				if (point.name === this.props.associatePointIn) {
					xMinIn = parseInt(point.positionShapeX, 10);
					xMaxIn = parseInt(point.positionShapeX, 10);
					yMinIn = parseInt(point.positionShapeY, 10);
					yMaxIn = parseInt(point.positionShapeY, 10);
				}
			});

			arrayRegions.forEach((region) => {
				if (region.label === this.props.associateRegionOut) {
					xMinOut = parseInt(region.coords.xMin, 10);
					xMaxOut = parseInt(region.coords.xMax, 10);
					yMinOut = parseInt(region.coords.yMin, 10);
					yMaxOut = parseInt(region.coords.yMax, 10);
				}
			});

			xMidIn = xMinIn;
			xMidOut = (xMinOut + xMaxOut) / 2;
			yMidIn = yMinIn;
			yMidOut = (yMinOut + yMaxOut) / 2;

		} else if (this.props.associatePointOut !== '') {

			arrayRegions.forEach((region) => {
				if (region.label === this.props.associateRegionIn) {
					xMinIn = parseInt(region.coords.xMin, 10);
					xMaxIn = parseInt(region.coords.xMax, 10);
					yMinIn = parseInt(region.coords.yMin, 10);
					yMaxIn = parseInt(region.coords.yMax, 10);
				}
			});

			arrayPoints.forEach((point) => {
				if (point.name === this.props.associatePointOut) {
					xMinOut = parseInt(point.positionShapeX, 10);
					xMaxOut = parseInt(point.positionShapeX, 10);
					yMinOut = parseInt(point.positionShapeY, 10);
					yMaxOut = parseInt(point.positionShapeY, 10);
				}
			});

			xMidIn = (xMinIn + xMaxIn) / 2;
			xMidOut = xMinOut;
			yMidIn = (yMinIn + yMaxIn) / 2;
			yMidOut = yMinOut;

		} else if (this.props.associatePointIn === '' && this.props.associateRegionIn === '') {

			arrayRegions.forEach((region) => {
				if (region.label === this.props.associateRegionOut) {
					xMinOut = parseInt(region.coords.xMin, 10);
					xMaxOut = parseInt(region.coords.xMax, 10);
					yMinOut = parseInt(region.coords.yMin, 10);
					yMaxOut = parseInt(region.coords.yMax, 10);
				}
			});
			xMinIn = parseInt(this.props.pointAPositionX, 10);
			xMaxIn = parseInt(this.props.pointAPositionX, 10);
			yMinIn = parseInt(this.props.pointAPositionY, 10);
			yMaxIn = parseInt(this.props.pointAPositionY, 10);
			xMidIn = xMinIn;
			xMidOut = (xMinOut + xMaxOut) / 2;
			yMidIn = yMinIn;
			yMidOut = (yMinOut + yMaxOut) / 2;

		} else if (this.props.associatePointOut === '' && this.props.associateRegionOut === '') {
			arrayRegions.forEach((region) => {
				if (region.label === this.props.associateRegionIn) {
					xMinIn = parseInt(region.coords.xMin, 10);
					xMaxIn = parseInt(region.coords.xMax, 10);
					yMinIn = parseInt(region.coords.yMin, 10);
					yMaxIn = parseInt(region.coords.yMax, 10);
				}
			});

			xMinOut = parseInt(this.props.pointBPositionX, 10);
			xMaxOut = parseInt(this.props.pointBPositionX, 10);
			yMinOut = parseInt(this.props.pointBPositionY, 10);
			yMaxOut = parseInt(this.props.pointBPositionY, 10);
			xMidIn = (xMinIn + xMaxIn) / 2;
			xMidOut = xMinOut;
			yMidIn = (yMinIn + yMaxIn) / 2;
			yMidOut = yMinOut;

		} else {
			arrayRegions.forEach((region) => {
				if (region.label === this.props.associateRegionIn) {
					xMinIn = parseInt(region.coords.xMin, 10);
					xMaxIn = parseInt(region.coords.xMax, 10);
					yMinIn = parseInt(region.coords.yMin, 10);
					yMaxIn = parseInt(region.coords.yMax, 10);
				}

				if (region.label === this.props.associateRegionOut) {
					xMinOut = parseInt(region.coords.xMin, 10);
					xMaxOut = parseInt(region.coords.xMax, 10);
					yMinOut = parseInt(region.coords.yMin, 10);
					yMaxOut = parseInt(region.coords.yMax, 10);
				}
			});

			xMidIn = (xMinIn + xMaxIn) / 2;
			xMidOut = (xMinOut + xMaxOut) / 2;
			yMidIn = (yMinIn + yMaxIn) / 2;
			yMidOut = (yMinOut + yMaxOut) / 2;
		}



		if (isIn) {
			if (idMultiLink === 0) {
				if (yMidIn > yMidOut) {
					if (xMidIn > xMidOut) {
						console.log('x1')
						if (xMinIn < 0 && xMaxIn < 0) {
							xResult = xMaxIn;
						} else {
							xResult = xMinIn;
						}
					} else if (xMidIn < xMidOut) {
						console.log('x2')
						if (xMinIn < 0 && xMaxIn < 0) {
							xResult = xMinIn;
						} else {
							xResult = xMaxIn;
						}
					} else if (xMidIn === xMidOut) {
						console.log('x3')
						xResult = xMinIn;
					}
				} else if (yMidIn < yMidOut) {
					if (xMidIn > xMidOut) {
						console.log('x4')
						if (xMinIn < 0 && xMaxIn < 0) {
							xResult = xMinIn;
						} else {
							xResult = xMaxIn;
						}
					} else if (xMidIn < xMidOut) {
						console.log('x5')
						if (xMinIn < 0 && xMaxIn < 0) {
							xResult = xMaxIn;
						} else {
							xResult = xMinIn;
						}
					} else if (xMidIn === xMidOut) {
						console.log('x6')
						xResult = xMinIn;
					}
				} else if (yMidIn === yMidOut) {
					if (xMidIn > xMidOut) {
						console.log('x7')
						if (xMinIn < 0 && xMaxIn < 0) {
							xResult = xMaxIn;
						} else {
							xResult = xMinIn;
						}
					} else if (xMidIn < xMidOut) {
						console.log('x8')
						if (xMinIn < 0 && xMaxIn < 0) {
							xResult = xMinIn;
						} else {
							xResult = xMaxIn;
						}
					} else if (xMidIn === xMidOut) {
						console.log('x9')
						xResult = xMinIn;
					}
				}
			} else if (idMultiLink === 1) {
				if (yMidIn > yMidOut) {
					if (xMidIn > xMidOut) {
						console.log('x10')
						if (xMinIn < 0 && xMaxIn < 0) {
							xResult = xMinIn;
						} else {
							xResult = xMaxIn;
						}
					} else if (xMidIn < xMidOut) {
						console.log('x11')
						if (xMinIn < 0 && xMaxIn < 0) {
							xResult = xMaxIn;
						} else {
							xResult = xMinIn;
						}
					} else if (xMidIn === xMidOut) {
						console.log('x12')
						xResult = xMaxIn
					}
				} else if (yMidIn < yMidOut) {
					if (xMidIn > xMidOut) {
						console.log('x13')
						if (xMinIn < 0 && xMaxIn < 0) {
							xResult = xMaxIn;
						} else {
							xResult = xMinIn;
						}
					} else if (xMidIn < xMidOut) {
						console.log('x14')
						if (xMinIn < 0 && xMaxIn < 0) {
							xResult = xMinIn;
						} else {
							xResult = xMaxIn;
						}
					} else if (xMidIn === xMidOut) {
						console.log('x15')
						xResult = xMaxIn
					}
				} else if (yMidIn === yMidOut) {
					if (xMidIn > xMidOut) {
						console.log('x16')
						if (xMinIn < 0 && xMaxIn < 0) {
							xResult = xMaxIn;
						} else {
							xResult = xMinIn;
						}
					} else if (xMidIn < xMidOut) {
						console.log('x17')
						if (xMinIn < 0 && xMaxIn < 0) {
							xResult = xMinIn;
						} else {
							xResult = xMaxIn;
						}
					} else if (xMidIn === xMidOut) {
						console.log('x18')
						xResult = xMinIn;
					}
				}
			} else if (idMultiLink === 2) {
				if (yMidIn > yMidOut) {
					if (xMidIn > xMidOut) {
						console.log('x19')
						if (xMinIn < 0 && xMaxIn < 0) {
							xResult = xMaxIn;
						} else {
							xResult = xMinIn;
						}
					} else if (xMidIn < xMidOut) {
						console.log('x20')
						if (xMinIn < 0 && xMaxIn < 0) {
							xResult = xMinIn;
						} else {
							xResult = xMaxIn;
						}
					} else if (xMidIn === xMidOut) {
						console.log('x21')
						xResult = (xMinIn + xMaxIn) / 2;
					}
				} else if (yMidIn < yMidOut) {
					if (xMidIn > xMidOut) {
						console.log('x22')
						if (xMinIn < 0 && xMaxIn < 0) {
							xResult = xMaxIn;
						} else {
							xResult = xMinIn;
						}
					} else if (xMidIn < xMidOut) {
						console.log('x23')
						if (xMinIn < 0 && xMaxIn < 0) {
							xResult = xMinIn;
						} else {
							xResult = xMaxIn;
						}
					} else if (xMidIn === xMidOut) {
						console.log('x24')
						xResult = (xMinIn + xMaxIn) / 2;
					}
				} else if (yMidIn === yMidOut) {
					if (xMidIn > xMidOut) {
						console.log('x25')
						if (xMinIn < 0 && xMaxIn < 0) {
							xResult = xMaxIn;
						} else {
							xResult = xMinIn;
						}
					} else if (xMidIn < xMidOut) {
						console.log('x26')
						if (xMinIn < 0 && xMaxIn < 0) {
							xResult = xMinIn;
						} else {
							xResult = xMaxIn;
						}
					} else if (xMidIn === xMidOut) {
						console.log('x27')
						xResult = xMinIn;
					}
				}
			}
		} else {
			if (idMultiLink === 0) {
				if (yMidIn > yMidOut) {
					if (xMidIn > xMidOut) {
						console.log('x28')
						if (xMinOut < 0 && xMaxOut < 0) {
							xResult = xMaxOut;
						} else {
							xResult = xMinOut;
						}
					} else if (xMidIn < xMidOut) {
						console.log('x29')
						if (xMinOut < 0 && xMaxOut < 0) {
							xResult = xMinOut;
						} else {
							xResult = xMaxOut;
						}
					} else if (xMidIn === xMidOut) {
						console.log('x30')
						xResult = xMinOut;
					}
				} else if (yMidIn < yMidOut) {
					if (xMidIn > xMidOut) {
						console.log('x31')
						if (xMinOut < 0 && xMaxOut < 0) {
							xResult = xMinOut;
						} else {
							xResult = xMaxOut;
						}
					} else if (xMidIn < xMidOut) {
						console.log('x32')
						if (xMinOut < 0 && xMaxOut < 0) {
							xResult = xMaxOut;
						} else {
							xResult = xMinOut;
						}
					} else if (xMidIn === xMidOut) {
						console.log('x33')
						xResult = xMinOut;
					}
				} else if (yMidIn === yMidOut) {
					if (xMidIn > xMidOut) {
						console.log('x34')
						if (xMinOut < 0 && xMaxOut < 0) {
							xResult = xMinOut;
						} else {
							xResult = xMaxOut;
						}
					} else if (xMidIn < xMidOut) {
						console.log('x35')
						if (xMinOut < 0 && xMaxOut < 0) {
							xResult = xMaxOut;
						} else {
							xResult = xMinOut;
						}
					} else if (xMidIn === xMidOut) {
						console.log('x36')
						xResult = xMinOut;
					}
				}
			} else if (idMultiLink === 1) {
				if (yMidIn > yMidOut) {
					if (xMidIn > xMidOut) {
						console.log('x37')
						if (xMinOut < 0 && xMaxOut < 0) {
							xResult = xMinOut;
						} else {
							xResult = xMaxOut;
						}
					} else if (xMidIn < xMidOut) {
						console.log('x38')
						if (xMinOut < 0 && xMaxOut < 0) {
							xResult = xMaxOut;
						} else {
							xResult = xMinOut;
						}
					} else if (xMidIn === xMidOut) {
						console.log('x39')
						xResult = xMaxOut;
					}
				} else if (yMidIn < yMidOut) {
					if (xMidIn > xMidOut) {
						console.log('x40')
						if (xMinOut < 0 && xMaxOut < 0) {
							xResult = xMaxOut;
						} else {
							xResult = xMinOut;
						}
					} else if (xMidIn < xMidOut) {
						console.log('x41')
						if (xMinOut < 0 && xMaxOut < 0) {
							xResult = xMinOut;
						} else {
							xResult = xMaxOut;
						}
					} else if (xMidIn === xMidOut) {
						console.log('x42')
						xResult = xMaxOut;
					}
				} else if (yMidIn === yMidOut) {
					if (xMidIn > xMidOut) {
						console.log('x43')
						if (xMinOut < 0 && xMaxOut < 0) {
							xResult = xMinOut;
						} else {
							xResult = xMaxOut;
						}
					} else if (xMidIn < xMidOut) {
						console.log('x44')
						if (xMinOut < 0 && xMaxOut < 0) {
							xResult = xMaxOut;
						} else {
							xResult = xMinOut;
						}
					} else if (xMidIn === xMidOut) {
						console.log('x45')
						xResult = xMinOut;
					}
				}
			} else if (idMultiLink === 2) {
				if (yMidIn > yMidOut) {
					if (xMidIn > xMidOut) {
						console.log('x46')
						if (xMinOut < 0 && xMaxOut < 0) {
							xResult = xMinOut;
						} else {
							xResult = xMaxOut;
						}
					} else if (xMidIn < xMidOut) {
						console.log('x47')
						if (xMinOut < 0 && xMaxOut < 0) {
							xResult = xMaxOut;
						} else {
							xResult = xMinOut;
						}
					} else if (xMidIn === xMidOut) {
						console.log('x48')
						xResult = (xMinOut + xMaxOut) / 2;
					}
				} else if (yMidIn < yMidOut) {
					if (xMidIn > xMidOut) {
						console.log('x49')
						if (xMinOut < 0 && xMaxOut < 0) {
							xResult = xMinOut;
						} else {
							xResult = xMaxOut;
						}
					} else if (xMidIn < xMidOut) {
						console.log('x50')
						if (xMinOut < 0 && xMaxOut < 0) {
							xResult = xMaxOut;
						} else {
							xResult = xMinOut;
						}
					} else if (xMidIn === xMidOut) {
						console.log('x51')
						xResult = (xMinOut + xMaxOut) / 2;
					}
				} else if (yMidIn === yMidOut) {
					if (xMidIn > xMidOut) {
						console.log('x52')
						if (xMinOut < 0 && xMaxOut < 0) {
							xResult = xMinOut;
						} else {
							xResult = xMaxOut;
						}
					} else if (xMidIn < xMidOut) {
						console.log('x53')
						if (xMinOut < 0 && xMaxOut < 0) {
							xResult = xMaxOut;
						} else {
							xResult = xMinOut;
						}
					} else if (xMidIn === xMidOut) {
						console.log('x54')
						xResult = xMinOut;
					}
				}
			}
		}

		return xResult;
	}

	public ifMultiLinkWithRegionDefineY = (isIn: boolean, idMultiLink: number): number => {
		let yResult: number = 0;
		const arrayPoints = this.props.options.arrayPoints;
		const arrayRegions = this.props.options.regionCoordinateSpace;
		let xMinIn: number = 0;
		let xMaxIn: number = 0;
		let xMinOut: number = 0;
		let xMaxOut: number = 0;
		let yMinIn: number = 0;
		let yMaxIn: number = 0;
		let yMinOut: number = 0;
		let yMaxOut: number = 0;
		let xMidIn: number = 0;
		let xMidOut: number = 0;
		let yMidIn: number = 0;
		let yMidOut: number = 0;

		if (this.props.associatePointIn !== '') {
			arrayPoints.forEach((point) => {
				if (point.name === this.props.associatePointIn) {
					xMinIn = parseInt(point.positionShapeX, 10);
					xMaxIn = parseInt(point.positionShapeX, 10);
					yMinIn = parseInt(point.positionShapeY, 10);
					yMaxIn = parseInt(point.positionShapeY, 10);
				}
			})

			arrayRegions.forEach((region) => {
				if (region.label === this.props.associateRegionOut) {
					xMinOut = parseInt(region.coords.xMin, 10);
					xMaxOut = parseInt(region.coords.xMax, 10);
					yMinOut = parseInt(region.coords.yMin, 10);
					yMaxOut = parseInt(region.coords.yMax, 10);
				}
			});

			xMidIn = xMinIn;
			xMidOut = (xMinOut + xMaxOut) / 2;
			yMidIn = yMinIn;
			yMidOut = (yMinOut + yMaxOut) / 2;

		} else if (this.props.associatePointOut !== '') {

			arrayRegions.forEach((region) => {
				if (region.label === this.props.associateRegionIn) {
					xMinIn = parseInt(region.coords.xMin, 10);
					xMaxIn = parseInt(region.coords.xMax, 10);
					yMinIn = parseInt(region.coords.yMin, 10);
					yMaxIn = parseInt(region.coords.yMax, 10);
				}
			});

			arrayPoints.forEach((point) => {
				if (point.name === this.props.associatePointOut) {
					xMinOut = parseInt(point.positionShapeX, 10);
					xMaxOut = parseInt(point.positionShapeX, 10);
					yMinOut = parseInt(point.positionShapeY, 10);
					yMaxOut = parseInt(point.positionShapeY, 10);
				}
			});

			xMidIn = (xMinIn + xMaxIn) / 2;
			xMidOut = xMinOut;
			yMidIn = (yMinIn + yMaxIn) / 2;
			yMidOut = yMinOut;

		} else if (this.props.associatePointIn === '' && this.props.associateRegionIn === '') {
			arrayRegions.forEach((region) => {
				if (region.label === this.props.associateRegionOut) {
					xMinOut = parseInt(region.coords.xMin, 10);
					xMaxOut = parseInt(region.coords.xMax, 10);
					yMinOut = parseInt(region.coords.yMin, 10);
					yMaxOut = parseInt(region.coords.yMax, 10);
				}
			});
			xMinIn = parseInt(this.props.pointAPositionX, 10);
			xMaxIn = parseInt(this.props.pointAPositionX, 10);
			yMinIn = parseInt(this.props.pointAPositionY, 10);
			yMaxIn = parseInt(this.props.pointAPositionY, 10);
			xMidIn = xMinIn;
			xMidOut = (xMinOut + xMaxOut) / 2;
			yMidIn = yMinIn;
			yMidOut = (yMinOut + yMaxOut) / 2;
		
		} else if (this.props.associatePointOut === '' && this.props.associateRegionOut === '') {
			arrayRegions.forEach((region) => {
				if (region.label === this.props.associateRegionIn) {
					xMinIn = parseInt(region.coords.xMin, 10);
					xMaxIn = parseInt(region.coords.xMax, 10);
					yMinIn = parseInt(region.coords.yMin, 10);
					yMaxIn = parseInt(region.coords.yMax, 10);
				}
			});

			xMinOut = parseInt(this.props.pointBPositionX, 10);
			xMaxOut = parseInt(this.props.pointBPositionX, 10);
			yMinOut = parseInt(this.props.pointBPositionY, 10);
			yMaxOut = parseInt(this.props.pointBPositionY, 10);
			xMidIn = (xMinIn + xMaxIn) / 2;
			xMidOut = xMinOut;
			yMidIn = (yMinIn + yMaxIn) / 2;
			yMidOut = yMinOut;
		
		} else {
			arrayRegions.forEach((region) => {
				if (region.label === this.props.associateRegionIn) {
					xMinIn = parseInt(region.coords.xMin, 10);
					xMaxIn = parseInt(region.coords.xMax, 10);
					yMinIn = parseInt(region.coords.yMin, 10);
					yMaxIn = parseInt(region.coords.yMax, 10);
				}

				if (region.label === this.props.associateRegionOut) {
					xMinOut = parseInt(region.coords.xMin, 10);
					xMaxOut = parseInt(region.coords.xMax, 10);
					yMinOut = parseInt(region.coords.yMin, 10);
					yMaxOut = parseInt(region.coords.yMax, 10);
				}
			});

			xMidIn = (xMinIn + xMaxIn) / 2;
			xMidOut = (xMinOut + xMaxOut) / 2;
			yMidIn = (yMinIn + yMaxIn) / 2;
			yMidOut = (yMinOut + yMaxOut) / 2;
		}

		if (isIn) {
			if (idMultiLink === 0) {
				if (xMidIn > xMidOut) {
					if (yMidIn > yMidOut) {
						console.log('y1')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMinIn;
						} else {
							yResult = yMaxIn;
						}
					} else if (yMidIn < yMidOut) {
						console.log('y2')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMinIn;
						} else {
							yResult = yMaxIn;
						}
					} else if (yMidIn === yMidOut) {
						console.log('y3')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMinIn;
						} else {
							yResult = yMaxIn;
						}
					}
				} else if (xMidIn < xMidOut) {
					if (yMidIn > yMidOut) {
						console.log('y4')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMinIn;
						} else {
							yResult = yMaxIn;
						}
					} else if (yMidIn < yMidOut) {
						console.log('y5')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMinIn;
						} else {
							yResult = yMaxIn;
						}
					} else if (yMidIn === yMidOut) {
						console.log('y6')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMinIn;
						} else {
							yResult = yMaxIn;
						}
					}
				} else if (xMidIn === xMidOut) {
					if (yMidIn > yMidOut) {
						console.log('y7')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMaxIn;
						} else {
							yResult = yMinIn;
						}
					} else if (yMidIn < yMidOut) {
						console.log('y8')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMinIn;
						} else {
							yResult = yMaxIn;
						}
					} else if (yMidIn === yMidOut) {
						console.log('y9')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMinIn;
						} else {
							yResult = yMaxIn;
						}
					}
				}
			} else if (idMultiLink === 1) {
				if (xMidIn > xMidOut) {
					if (yMidIn > yMidOut) {
						console.log('y10')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMaxIn;
						} else {
							yResult = yMinIn;
						}
					} else if (yMidIn < yMidOut) {
						console.log('y11')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMaxIn;
						} else {
							yResult = yMinIn;
						}
					} else if (yMidIn === yMidOut) {
						console.log('y12')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMaxIn;
						} else {
							yResult = yMinIn;
						}
					}
				} else if (xMidIn < xMidOut) {
					if (yMidIn > yMidOut) {
						console.log('y13')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMaxIn;
						} else {
							yResult = yMinIn;
						}
					} else if (yMidIn < yMidOut) {
						console.log('y14')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMaxIn;
						} else {
							yResult = yMinIn;
						}
					} else if (yMidIn === yMidOut) {
						console.log('y15')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMaxIn;
						} else {
							yResult = yMinIn;
						}
					}
				} else if (xMidIn === xMidOut) {
					if (yMidIn > yMidOut) {
						console.log('y16')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMaxIn;
						} else {
							yResult = yMinIn;
						}
					} else if (yMidIn < yMidOut) {
						console.log('y17')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMinIn;
						} else {
							yResult = yMaxIn;
						}
					} else if (yMidIn === yMidOut) {
						console.log('y18')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMinIn;
						} else {
							yResult = yMaxIn;
						}
					}
				}
			} else if (idMultiLink === 2) {
				if (xMidIn > xMidOut) {
					if (yMidIn > yMidOut) {
						console.log('y19')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMaxIn;
						} else {
							yResult = yMinIn;
						}
					} else if (yMidIn < yMidOut) {
						console.log('y20')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMinIn;
						} else {
							yResult = yMaxIn;
						}
					} else if (yMidIn === yMidOut) {
						console.log('y21')
						yResult = (yMinIn + yMaxIn) / 2;
					}
				} else if (xMidIn < xMidOut) {
					if (yMidIn > yMidOut) {
						console.log('y22')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMaxIn;
						} else {
							yResult = yMinIn;
						}
					} else if (yMidIn < yMidOut) {
						console.log('y23')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMinIn;
						} else {
							yResult = yMaxIn;
						}
					} else if (yMidIn === yMidOut) {
						console.log('y24')
						yResult = (yMinIn + yMaxIn) / 2;
					}
				} else if (xMidIn === xMidOut) {
					if (yMidIn > yMidOut) {
						console.log('y25')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMaxIn;
						} else {
							yResult = yMinIn;
						}
					} else if (yMidIn < yMidOut) {
						console.log('y26')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMinIn;
						} else {
							yResult = yMaxIn;
						}
					} else if (yMidIn === yMidOut) {
						console.log('y27')
						if (yMinIn < 0 && yMaxIn < 0) {
							yResult = yMinIn;
						} else {
							yResult = yMaxIn;
						}
					}
				}
			}
		} else {
			if (idMultiLink === 0) {
				if (xMidIn > xMidOut) {
					if (yMidIn > yMidOut) {
						console.log('y28')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMinOut;
						} else {
							yResult = yMaxOut;
						}
					} else if (yMidIn < yMidOut) {
						console.log('y29')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMinOut;
						} else {
							yResult = yMaxOut;
						}
					} else if (yMidIn === yMidOut) {
						console.log('y30')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMinOut;
						} else {
							yResult = yMaxOut;
						}
					}
				} else if (xMidIn < xMidOut) {
					if (yMidIn > yMidOut) {
						console.log('y31')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMinOut;
						} else {
							yResult = yMaxOut;
						}
					} else if (yMidIn < yMidOut) {
						console.log('y32')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMinOut;
						} else {
							yResult = yMaxOut;
						}
					} else if (yMidIn === yMidOut) {
						console.log('y33')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMinOut;
						} else {
							yResult = yMaxOut;
						}
					}
				} else if (xMidIn === xMidOut) {
					if (yMidIn > yMidOut) {
						console.log('y34')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMinOut;
						} else {
							yResult = yMaxOut;
						}
					} else if (yMidIn < yMidOut) {
						console.log('y35')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMaxOut;
						} else {
							yResult = yMinOut;
						}
					} else if (yMidIn === yMidOut) {
						console.log('y36')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMaxOut;
						} else {
							yResult = yMinOut;
						}
					}
				}
			} else if (idMultiLink === 1) {
				if (xMidIn > xMidOut) {
					if (yMidIn > yMidOut) {
						console.log('y37')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMaxOut;
						} else {
							yResult = yMinOut;
						}
					} else if (yMidIn < yMidOut) {
						console.log('y38')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMaxOut;
						} else {
							yResult = yMinOut;
						}
					} else if (yMidIn === yMidOut) {
						console.log('y39')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMaxOut;
						} else {
							yResult = yMinOut;
						}
					}
				} else if (xMidIn < xMidOut) {
					if (yMidIn > yMidOut) {
						console.log('y40')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMaxOut;
						} else {
							yResult = yMinOut;
						}
					} else if (yMidIn < yMidOut) {
						console.log('y41')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMaxOut;
						} else {
							yResult = yMinOut;
						}
					} else if (yMidIn === yMidOut) {
						console.log('y42')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMaxOut;
						} else {
							yResult = yMinOut;
						}
					}
				} else if (xMidIn === xMidOut) {
					if (yMidIn > yMidOut) {
						console.log('y43')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMinOut;
						} else {
							yResult = yMaxOut;
						}
					} else if (yMidIn < yMidOut) {
						console.log('y44')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMaxOut;
						} else {
							yResult = yMinOut;
						}
					} else if (yMidIn === yMidOut) {
						console.log('y45')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMaxOut;
						} else {
							yResult = yMinOut;
						}
					}
				}
			} else if (idMultiLink === 2) {
				if (xMidIn > xMidOut) {
					if (yMidIn > yMidOut) {
						console.log('y46')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMinOut;
						} else {
							yResult = yMaxOut;
						}
					} else if (yMidIn < yMidOut) {
						console.log('y47')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMaxOut;
						} else {
							yResult = yMinOut;
						}
					} else if (yMidIn === yMidOut) {
						console.log('y48')
						yResult = (yMinOut + yMaxOut) / 2;
					}
				} else if (xMidIn < xMidOut) {
					if (yMidIn > yMidOut) {
						console.log('y49')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMinOut;
						} else {
							yResult = yMaxOut;
						}
					} else if (yMidIn < yMidOut) {
						console.log('y50')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMaxOut;
						} else {
							yResult = yMinOut;
						}
					} else if (yMidIn === yMidOut) {
						console.log('y51')
						yResult = (yMinOut + yMaxOut) / 2;
					}
				} else if (xMidIn === xMidOut) {
					if (yMidIn > yMidOut) {
						console.log('y52')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMinOut;
						} else {
							yResult = yMaxOut;
						}
					} else if (yMidIn < yMidOut) {
						console.log('y53')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMaxOut;
						} else {
							yResult = yMinOut;
						}
					} else if (yMidIn === yMidOut) {
						console.log('y54')
						if (yMinOut < 0 && yMaxOut < 0) {
							yResult = yMaxOut;
						} else {
							yResult = yMinOut;
						}
					}
				}
			}
		}
		return yResult;
	}

	public ifMultiLinkWithPointDefineX = (isIn: boolean, idMultiLink: number): number => {
		let xResult: number = 0;
		const arrayPoints: PointClass[] = this.props.options.arrayPoints;
		let xIn: number = 0;
		let yIn: number = 0;
		let xOut: number = 0;
		let yOut: number = 0;
		const ajustPosition: number = 5;
		arrayPoints.forEach((point) => {
			if (point.name === this.props.associatePointIn) {
				xIn = parseInt(point.positionShapeX, 10);
				yIn = parseInt(point.positionShapeY, 10);
			}
			if (point.name === this.props.associatePointOut) {
				xOut = parseInt(point.positionShapeX, 10);
				yOut = parseInt(point.positionShapeY, 10);
			}
		})

		const angleRadian: number = Math.atan2(yIn - yOut, xIn - xOut);
		const angleDegre: number = (angleRadian * 180) / Math.PI;

		console.log('x : ' + angleDegre)

		if (isIn) {
			if (idMultiLink === 0) {
				if (angleDegre === 0 || angleDegre === 180 || angleDegre === -180) {
					xResult = xIn;
				} else if (angleDegre > 0 && angleDegre < 90) {
					xResult = xIn - (ajustPosition * (((angleDegre) / 90)));
				} else if (angleDegre === 90) {
					xResult = xIn + ajustPosition;
				} else if (angleDegre > 90 && angleDegre < 180) {
					xResult = xIn + (ajustPosition * (((angleDegre - 180) / 90) * (-1)));
				} else if (angleDegre < 0 && angleDegre > -90) {
					xResult = xIn + (ajustPosition * (((angleDegre) / 90) * (-1)));
				} else if (angleDegre === -90) {
					xResult = xIn + ajustPosition;
				} else if (angleDegre < -90 && angleDegre > -180) {
					xResult = xIn - (ajustPosition * (((angleDegre + 180) / 90)));
				};
			} else if (idMultiLink === 1) {
				if (angleDegre === 0 || angleDegre === 180 || angleDegre === -180) {
					xResult = xIn;
				} else if (angleDegre > 0 && angleDegre < 90) {
					xResult = xIn + (ajustPosition * (((angleDegre) / 90)));
				} else if (angleDegre === 90) {
					xResult = xIn - ajustPosition;
				} else if (angleDegre > 90 && angleDegre < 180) {
					xResult = xIn - (ajustPosition * (((angleDegre - 180) / 90) * (-1)));
				} else if (angleDegre < 0 && angleDegre > -90) {
					xResult = xIn - (ajustPosition * (((angleDegre) / 90) * (-1)));
				} else if (angleDegre === -90) {
					xResult = xIn - ajustPosition;
				} else if (angleDegre < -90 && angleDegre > -180) {
					xResult = xIn + (ajustPosition * (((angleDegre + 180) / 90)));
				};
			} else if (idMultiLink === 2) {
				xResult = xIn;
			}
		} else {
			if (idMultiLink === 0) {
				if (angleDegre === 0 || angleDegre === 180 || angleDegre === -180) {
					xResult = xOut;
				} else if (angleDegre > 0 && angleDegre < 90) {
					xResult = xOut - (ajustPosition * (((angleDegre) / 90)));
				} else if (angleDegre === 90) {
					xResult = xOut + ajustPosition;
				} else if (angleDegre > 90 && angleDegre < 180) {
					xResult = xOut + (ajustPosition * (((angleDegre - 180) / 90) * (-1)));
				} else if (angleDegre < 0 && angleDegre > -90) {
					xResult = xOut + (ajustPosition * (((angleDegre) / 90) * (-1)));
				} else if (angleDegre === -90) {
					xResult = xOut + ajustPosition;
				} else if (angleDegre < -90 && angleDegre > -180) {
					xResult = xOut - (ajustPosition * (((angleDegre + 180) / 90)));
				};
			} else if (idMultiLink === 1) {
				if (angleDegre === 0 || angleDegre === 180 || angleDegre === -180) {
					xResult = xOut;
				} else if (angleDegre > 0 && angleDegre < 90) {
					xResult = xOut + (ajustPosition * (((angleDegre) / 90)));
				} else if (angleDegre === 90) {
					xResult = xOut - ajustPosition;
				} else if (angleDegre > 90 && angleDegre < 180) {
					xResult = xOut - (ajustPosition * (((angleDegre - 180) / 90) * (-1)));
				} else if (angleDegre < 0 && angleDegre > -90) {
					xResult = xOut - (ajustPosition * (((angleDegre) / 90) * (-1)));
				} else if (angleDegre === -90) {
					xResult = xOut - ajustPosition;
				} else if (angleDegre < -90 && angleDegre > -180) {
					xResult = xOut + (ajustPosition * (((angleDegre + 180) / 90)));
				};
			} else if (idMultiLink === 2) {
				xResult = xOut;
			}
		}

		return xResult;
	}

	public ifMultiLinkWithPointDefineY = (isIn: boolean, idMultiLink: number): number => {
		let yResult: number = 0;
		const arrayPoints: PointClass[] = this.props.options.arrayPoints;
		let xIn: number = 0;
		let yIn: number = 0;
		let xOut: number = 0;
		let yOut: number = 0;
		const ajustPosition: number = 5;
		arrayPoints.forEach((point) => {
			if (point.name === this.props.associatePointIn) {
				xIn = parseInt(point.positionShapeX, 10);
				yIn = parseInt(point.positionShapeY, 10);
			}
			if (point.name === this.props.associatePointOut) {
				xOut = parseInt(point.positionShapeX, 10);
				yOut = parseInt(point.positionShapeY, 10);
			}
		})

		const angleRadian: number = Math.atan2(yIn - yOut, xIn - xOut);
		const angleDegre: number = (angleRadian * 180) / Math.PI;

		if (isIn) {
			if (idMultiLink === 0) {
				if (angleDegre === 0) {
					yResult = yIn + ajustPosition;
				} else if (angleDegre > 0 && angleDegre < 90) {
					yResult = yIn + (ajustPosition * (((angleDegre - 90) / 90) * (-1)));
				} else if (angleDegre === 90 || angleDegre === -90) {
					yResult = yIn;
				} else if (angleDegre > 90 && angleDegre < 180) {
					yResult = yIn + (ajustPosition * (((angleDegre - 90) / 90)));
				} else if (angleDegre < 0 && angleDegre > -90) {
					yResult = yIn + (ajustPosition * ((angleDegre + 90) / 90));
				} else if (angleDegre < -90 && angleDegre > -180) {
					yResult = yIn + (ajustPosition * (((angleDegre + 90) / 90) * (-1)));
				} else if (angleDegre === 180 || angleDegre === -180) {
					yResult = yIn + ajustPosition;
				}
			} else if (idMultiLink === 1) {
				if (angleDegre === 0) {
					yResult = yIn - ajustPosition;
				} else if (angleDegre > 0 && angleDegre < 90) {
					yResult = yIn - (ajustPosition * (((angleDegre - 90) / 90) * (-1)));
				} else if (angleDegre === 90 || angleDegre === -90) {
					yResult = yIn;
				} else if (angleDegre > 90 && angleDegre < 180) {
					yResult = yIn - (ajustPosition * (((angleDegre - 90) / 90)));
				} else if (angleDegre < 0 && angleDegre > -90) {
					yResult = yIn - (ajustPosition * ((angleDegre + 90) / 90));
				} else if (angleDegre < -90 && angleDegre > -180) {
					yResult = yIn - (ajustPosition * (((angleDegre + 90) / 90) * (-1)));
				} else if (angleDegre === 180 || angleDegre === -180) {
					yResult = yIn - ajustPosition;
				}
			} else if (idMultiLink === 2) {
				yResult = yIn;
			}
		} else {
			if (idMultiLink === 0) {
				if (angleDegre === 0) {
					yResult = yOut + ajustPosition;
				} else if (angleDegre > 0 && angleDegre < 90) {
					yResult = yOut + (ajustPosition * (((angleDegre - 90) / 90) * (-1)));
				} else if (angleDegre === 90 || angleDegre === -90) {
					yResult = yOut;
				} else if (angleDegre > 90 && angleDegre < 180) {
					yResult = yOut + (ajustPosition * (((angleDegre - 90) / 90)));
				} else if (angleDegre < 0 && angleDegre > -90) {
					yResult = yOut + (ajustPosition * ((angleDegre + 90) / 90));
				} else if (angleDegre < -90 && angleDegre > -180) {
					yResult = yOut + (ajustPosition * (((angleDegre + 90) / 90) * (-1)));
				} else if (angleDegre === 180 || angleDegre === -180) {
					yResult = yOut + ajustPosition;
				}
			} else if (idMultiLink === 1) {
				if (angleDegre === 0) {
					yResult = yOut - ajustPosition;
				} else if (angleDegre > 0 && angleDegre < 90) {
					yResult = yOut - (ajustPosition * (((angleDegre - 90) / 90) * (-1)));
				} else if (angleDegre === 90 || angleDegre === -90) {
					yResult = yOut;
				} else if (angleDegre > 90 && angleDegre < 180) {
					yResult = yOut - (ajustPosition * (((angleDegre - 90) / 90)));
				} else if (angleDegre < 0 && angleDegre > -90) {
					yResult = yOut - (ajustPosition * ((angleDegre + 90) / 90));
				} else if (angleDegre < -90 && angleDegre > -180) {
					yResult = yOut - (ajustPosition * (((angleDegre + 90) / 90) * (-1)));
				} else if (angleDegre === 180 || angleDegre === -180) {
					yResult = yOut - ajustPosition;
				}
			} else if (idMultiLink === 2) {
				yResult = yOut;
			}
		}
		return yResult;
	}

	/**
	 * to do
	 */
	public drawLink(xA0: number, yA0: number, xB0: number, yB0: number,
		xCByClick0: number, yCByClick0: number, orientationLink: string) {

		//this.defineParallelOrientedLinks();
		const listParallelOrientedLinks: number[] = this.defineParallelOrientedLinks();
		let xA: number = 0;
		let yA: number = 0;
		let xB: number = 0;
		let yB: number = 0;
		let xCByClick: number = 0;
		let yCByClick: number = 0;

		console.log(listParallelOrientedLinks)

		if (listParallelOrientedLinks.length > 1) {
			let indexOrientedLink: number = 0;
			listParallelOrientedLinks.forEach((index) => {
				if (index === parseInt(this.props.id, 10)) {
					if (indexOrientedLink === 0) {
						if (this.props.associatePointIn !== '' && this.props.associatePointOut !== '') {
							xA = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(true, 0));
							yA = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(true, 0));
							xB = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(false, 0));
							yB = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(false, 0));
							xCByClick = xCByClick0 || (xA + xB) / 2;
							yCByClick = yCByClick0 || (yA + yB) / 2;
						} else if (this.props.associateRegionIn !== '' && this.props.associateRegionOut !== '') {
							xA = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(true, 0));
							yA = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(true, 0));
							xB = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(false, 0));
							yB = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(false, 0));
							xCByClick = xCByClick0 || (xA + xB) / 2;
							yCByClick = yCByClick0 || (yA + yB) / 2;
						} else if (this.props.associatePointIn !== '' && this.props.associateRegionOut !== '') {
							xA = xA0;
							yA = yA0;
							xB = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(false, 0));
							yB = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(false, 0));
							xCByClick = xCByClick0 || (xA + xB) / 2;
							yCByClick = yCByClick0 || (yA + yB) / 2;
						} else if (this.props.associateRegionIn !== '' && this.props.associatePointOut !== '') {
							xA = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(true, 0));
							yA = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(true, 0));
							xB = xB0;
							yB = yB0;
							xCByClick = xCByClick0 || (xA + xB) / 2;
							yCByClick = yCByClick0 || (yA + yB) / 2;
						}
					} else if (indexOrientedLink === 1) {
						if (this.props.associatePointIn !== '' && this.props.associatePointOut !== '') {
							xA = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(true, 1));
							yA = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(true, 1));
							xB = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(false, 1));
							yB = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(false, 1));
							xCByClick = xCByClick0 || (xA + xB) / 2;
							yCByClick = yCByClick0 || (yA + yB) / 2;
						} else if (this.props.associateRegionIn !== '' && this.props.associateRegionOut !== '') {
							xA = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(true, 1));
							yA = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(true, 1));
							xB = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(false, 1));
							yB = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(false, 1));
							xCByClick = xCByClick0 || (xA + xB) / 2;
							yCByClick = yCByClick0 || (yA + yB) / 2;
						} else if (this.props.associatePointIn !== '' && this.props.associateRegionOut !== '') {
							xA = xA0;
							yA = yA0;
							xB = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(false, 1));
							yB = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(false, 1));
							xCByClick = xCByClick0 || (xA + xB) / 2;
							yCByClick = yCByClick0 || (yA + yB) / 2;
						} else if (this.props.associateRegionIn !== '' && this.props.associatePointOut !== '') {
							xA = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(true, 1));
							yA = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(true, 1));
							xB = xB0;
							yB = yB0;
							xCByClick = xCByClick0 || (xA + xB) / 2;
							yCByClick = yCByClick0 || (yA + yB) / 2;
						}
					} else if (indexOrientedLink === 2) {
						if (this.props.associatePointIn !== '' && this.props.associatePointOut !== '') {
							xA = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(true, 2));
							yA = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(true, 2));
							xB = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(false, 2));
							yB = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(false, 2));
							xCByClick = xCByClick0 || (xA + xB) / 2;
							yCByClick = yCByClick0 || (yA + yB) / 2;
						} else if (this.props.associateRegionIn !== '' && this.props.associateRegionOut !== '') {
							xA = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(true, 2));
							yA = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(true, 2));
							xB = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(false, 2));
							yB = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(false, 2));
							xCByClick = xCByClick0 || (xA + xB) / 2;
							yCByClick = yCByClick0 || (yA + yB) / 2;
						} else if (this.props.associatePointIn !== '' && this.props.associateRegionOut !== '') {
							xA = xA0;
							yA = yA0;
							xB = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(false, 2));
							yB = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(false, 2));
							xCByClick = xCByClick0 || (xA + xB) / 2;
							yCByClick = yCByClick0 || (yA + yB) / 2;
						} else if (this.props.associateRegionIn !== '' && this.props.associatePointOut !== '') {
							xA = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(true, 2));
							yA = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(true, 2));
							xB = xB0;
							yB = yB0;
							xCByClick = xCByClick0 || (xA + xB) / 2;
							yCByClick = yCByClick0 || (yA + yB) / 2;
						}
					}
				}
				indexOrientedLink++;
			})
		} else if (this.props.associateRegionIn !== '' && this.props.associateRegionOut !== '') {
			xA = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(true, 2));
			yA = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(true, 2));
			xB = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(false, 2));
			yB = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(false, 2));
			xCByClick = xCByClick0 || (xA + xB) / 2;
			yCByClick = yCByClick0 || (yA + yB) / 2;
		} else if (this.props.associateRegionOut !== '') {
			xA = xA0;
			yA = yA0;
			xB = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(false, 2));
			yB = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(false, 2));
			xCByClick = xCByClick0 || (xA + xB) / 2;
			yCByClick = yCByClick0 || (yA + yB) / 2;
		} else if (this.props.associateRegionIn !== '') {
			xA = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(true, 2));
			yA = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(true, 2));
			xB = xB0;
			yB = yB0;
			xCByClick = xCByClick0 || (xA + xB) / 2;
			yCByClick = yCByClick0 || (yA + yB) / 2;
		} else {
			xA = xA0;
			yA = yA0;
			xB = xB0;
			yB = yB0;
			xCByClick = xCByClick0;
			yCByClick = yCByClick0;
		}

		let xC: number = 0;
		let yC: number = 0;

		if (this.props.isIncurved.value) {
			xC = xCByClick;
			yC = yCByClick;
		} else {
			xC = (xA + xB) / 2;
			yC = (yA + yB) / 2;
		}

		const distanceAC: number = Math.sqrt(((xA - xC) * (xA - xC)) + ((yA - yC) * (yA - yC)));
		const angleRadianAC: number = Math.atan2(yA - yC, xA - xC);
		const angleDegreeAC: number = (angleRadianAC * 180) / Math.PI;
		const xMidAC: number = (xA + xC) / 2;
		const yMidAC: number = (yA + yC) / 2;
		const xArrowAC: number = xMidAC - (distanceAC / 2);
		const yArrowAC: number = yMidAC;

		const distanceBC: number = Math.sqrt(((xB - xC) * (xB - xC)) + ((yB - yC) * (yB - yC)));
		const angleRadianBC: number = Math.atan2(yB - yC, xB - xC);
		const angleDegreeBC: number = (angleRadianBC * 180) / Math.PI;
		const xMidBC: number = (xB + xC) / 2;
		const yMidBC: number = (yB + yC) / 2;
		const xArrowBC: number = xMidBC - (distanceBC / 2);
		const yArrowBC: number = yMidBC;

		const distanceAB: number = Math.sqrt(((xA - xB) * (xA - xB)) + ((yA - yB) * (yA - yB)));
		const angleRadianAB: number = Math.atan2(yA - yB, xA - xB);
		const angleDegreeAB: number = (angleRadianAB * 180) / Math.PI;
		const xMidAB: number = (xA + xB) / 2;
		const yMidAB: number = (yA + yB) / 2;
		const xArrowAB: number = xMidAB - (distanceAB / 2);
		const yArrowAB: number = yMidAB;

		//const angleRadianBA: number = Math.atan2(yB - yA, xB - xA);
		//const angleDegreeBA: number = (angleRadianBA * 180) / Math.PI;

		const sizeArrowTriangle: number = 8;

		const valueTooltipMonodirectional: JSX.Element = this.defineValueTooptip('monodirectional');
		const valueTooltipBidirectionalA: JSX.Element = this.defineValueTooptip('bidirectional', 'A');
		const valueTooltipBidirectionalB: JSX.Element = this.defineValueTooptip('bidirectional', 'B');

		const inverseAxeY: number = -1;

		if (orientationLink === 'double') {
			return (
				<div id='link' >
					<div>
						<Tooltip content={valueTooltipBidirectionalA} placement={this.props.tooltipPositionA.value} >
							<div id='linkA' style={{
								position: 'absolute',
								zIndex: this.props.zIndex,
								top: yArrowAC - (sizeArrowTriangle / 2),
								left: xArrowAC,
								transform: 'rotate(' + angleDegreeAC.toString() + 'deg)',
								width: distanceAC,
							}}>
								<div id='arrow1' style={{
									display: 'flex',
									alignContent: 'stretch',
								}}>
									<div className='arrowTriangle' style={{
										width: '0',
										height: '0',
										borderLeft: sizeArrowTriangle.toString() + 'px solid transparent',
										borderRight: sizeArrowTriangle.toString() + 'px solid transparent',
										borderBottom: sizeArrowTriangle.toString() + 'px solid ' + this.defineBorderColor(),
										transform: 'rotate(270deg)',
									}}></div>
									<div style={{
										border: '1px solid ' + this.defineBorderColor(),
										backgroundColor: this.defineBackgroundColor(),
										width: distanceAC,
									}}></div>
								</div>
							</div>
						</Tooltip>
						<div id={'labelMainMetric' + this.props.id} style={{
							position: 'absolute',
							zIndex: 9999,
							top: yMidAC + (parseInt(this.props.labelAPositionY, 10) * inverseAxeY) - this.labelSynchroY(),
							left: xMidAC + parseInt(this.props.labelAPositionX, 10) - this.labelSynchroX(),
							fontSize: '8px',
							//border: '1px solid black',
							backgroundColor: 'white',
							color: 'black',
							padding: '0 5px',
						}}>{this.props.valueMainMetricA}
						</div>
					</div>
					<div>
						<Tooltip content={valueTooltipBidirectionalB} placement={this.props.tooltipPositionB.value} >
							<div id='linkB' style={{
								position: 'absolute',
								zIndex: this.props.zIndex,
								top: yArrowBC - (sizeArrowTriangle / 2),
								left: xArrowBC,
								transform: 'rotate(' + angleDegreeBC.toString() + 'deg)',
								width: distanceBC,
							}}>
								<div id='arrow2' style={{
									display: 'flex',
									alignContent: 'stretch',
								}}>
									<div className='arrowTriangle' style={{
										width: '0',
										height: '0',
										borderLeft: sizeArrowTriangle.toString() + 'px solid transparent',
										borderRight: sizeArrowTriangle.toString() + 'px solid transparent',
										borderBottom: sizeArrowTriangle.toString() + 'px solid ' + this.defineBorderColor(),
										transform: 'rotate(270deg)',
									}}></div>
									<div style={{
										border: '1px solid ' + this.defineBorderColor(),
										backgroundColor: this.defineBackgroundColor(),
										width: distanceBC,
									}}></div>
								</div>
							</div>
						</Tooltip>
						<div id={'labelMainMetric' + this.props.id} style={{
							position: 'absolute',
							zIndex: 9999,
							top: yMidBC + (parseInt(this.props.labelBPositionY, 10) * inverseAxeY) - this.labelSynchroY(),
							left: xMidBC + parseInt(this.props.labelBPositionX, 10) - this.labelSynchroX(),
							fontSize: '8px',
							//border: '1px solid black',
							backgroundColor: 'white',
							color: 'black',
							padding: '0 5px',
						}}>{this.props.valueMainMetricB}
						</div>
					</div>
				</div>
			)
		} else if (orientationLink === 'AB') {
			if (this.props.isIncurved.value) {
				return (
					<div>
						<Tooltip content={valueTooltipMonodirectional} placement={this.props.tooltipPositionA.value} >
							<div id='partA' style={{
								position: 'absolute',
								zIndex: this.props.zIndex,
								top: yArrowAC - (sizeArrowTriangle / 2),
								left: xArrowAC,
								transform: 'rotate(' + angleDegreeAC.toString() + 'deg)',
								width: distanceAC,
							}}>
								<div style={{
									padding: '3px',
									border: '1px solid ' + this.defineBorderColor(),
									backgroundColor: this.defineBackgroundColor(),
									width: distanceAC,
								}}></div>
							</div>
						</Tooltip>
						<Tooltip content={valueTooltipMonodirectional} placement={this.props.tooltipPositionA.value}>
							<div id='partB' style={{
								position: 'absolute',
								zIndex: this.props.zIndex,
								top: yArrowBC - (sizeArrowTriangle / 2),
								left: xArrowBC,
								transform: 'rotate(' + angleDegreeBC.toString() + 'deg)',
								width: distanceBC,
							}}>
								<div id='arrow2' style={{
									display: 'flex',
								}}>
									<div style={{
										border: '1px solid ' + this.defineBorderColor(),
										backgroundColor: this.defineBackgroundColor(),
										width: distanceBC,
									}}></div>
									<div className='arrowTriangle' style={{
										width: '0',
										height: '0',
										borderLeft: sizeArrowTriangle.toString() + 'px solid transparent',
										borderRight: sizeArrowTriangle.toString() + 'px solid transparent',
										borderBottom: sizeArrowTriangle.toString() + 'px solid ' + this.defineBorderColor(),
										transform: 'rotate(90deg)',
									}}></div>
								</div>
							</div>
						</Tooltip>
						<div id={'labelMainMetric' + this.props.id} style={{
							position: 'absolute',
							zIndex: 9999,
							top: yC + (parseInt(this.props.labelAPositionY, 10) * inverseAxeY) - this.labelSynchroY(),
							left: xC + parseInt(this.props.labelAPositionX, 10) - this.labelSynchroX(),
							backgroundColor: 'white',
							fontSize: '8px',
							color: 'black',
							padding: '0 5px',
							cursor: 'pointer',
						}}
						>
							{this.props.valueMainMetricA}
						</div>
					</div>
				)
			} else {
				return (
					<div>
						<Tooltip content={valueTooltipMonodirectional} placement={this.props.tooltipPositionA.value} >
							<div id='link' style={{
								position: 'absolute',
								zIndex: this.props.zIndex,
								top: yArrowAB - (sizeArrowTriangle / 2),
								left: xArrowAB,
								transform: 'rotate(' + angleDegreeAB.toString() + 'deg)',
								width: distanceAB,
							}}>
								<div id='arrow1' style={{
									display: 'flex',
								}} >
									<div className='arrowTriangle' style={{
										width: '0',
										height: '0',
										borderLeft: sizeArrowTriangle.toString() + 'px solid transparent',
										borderRight: sizeArrowTriangle.toString() + 'px solid transparent',
										borderBottom: sizeArrowTriangle.toString() + 'px solid ' + this.defineBorderColor(),
										transform: 'rotate(270deg)',
									}}></div>
									<div style={{
										border: '1px solid ' + this.defineBorderColor(),
										backgroundColor: this.defineBackgroundColor(),
										width: distanceAB,
									}}></div>
								</div>
							</div>
						</Tooltip>
						<div id={'labelMainMetric' + this.props.id} style={{
							position: 'absolute',
							zIndex: 9999,
							top: yMidAB + (parseInt(this.props.labelAPositionY, 10) * inverseAxeY) - this.labelSynchroY(),
							left: xMidAB + parseInt(this.props.labelAPositionX, 10) - this.labelSynchroX(),
							backgroundColor: 'white',
							fontSize: '8px',
							color: 'black',
							padding: '0 5px',
							cursor: 'pointer',
						}}
						>
							{this.props.valueMainMetricA}
						</div>
					</div>
				)
			}
			// else if (orientationLink === 'BA') {
			// 	return (
			// 		<div id='link'>
			// 			<div id='arrow1' style={{
			// 				display: 'flex',
			// 				alignContent: 'stretch',
			// 				position: 'absolute',
			// 				top: yArrowAB - (sizeArrowTriangle / 2),
			// 				left: xArrowAB,
			// 				transform: 'rotate(' + angleDegreeBA + 'deg)',
			// 				width: distanceAB,

			// 			}}>
			// 				<div className='arrowTriangle' style={{
			// 					width: '0',
			// 					height: '0',
			// 					borderLeft: sizeArrowTriangle + 'px solid transparent',
			// 					borderRight: sizeArrowTriangle + 'px solid transparent',
			// 					borderBottom: sizeArrowTriangle + 'px solid ' + colorB,
			// 					transform: 'rotate(270deg)',
			// 				}}></div>
			// 				<div style={{
			// 					border: '1px solid ' + colorB,
			// 					backgroundColor: colorB,
			// 					width: distanceAB,
			// 				}}></div>
			// 			</div>
			// 			<div style={{
			// 				position: 'absolute',
			// 				top: yMidAB + labelBPositionY,
			// 				left: xMidAB + labelBPositionX,
			// 				//border: '1px solid black',
			// 				backgroundColor: 'white',
			// 				color: 'black',
			// 				fontSize: distanceAB * (4 / 100),
			// 				padding: '0 5px',
			// 			}}>
			// 				{labelB}
			// 			</div>
			// 		</div>
			// 	)
			// } 
		} else {
			return (
				<div>

				</div>
			)
		}
	}

	public defineBackgroundColor() {
		let colorBackground: string = '';

		if (this.props.seuil.length > 0) {
			colorBackground = this.props.seuil[0].backColor;
		} else {
			colorBackground = 'black';
		}

		const valueMainMetric: number = parseInt(this.props.valueMainMetricA, 10);
		let index: number = 0;
		this.props.seuil.forEach((level: LowerLimitClass) => {

			let lowerLimitMin: number = 0;

			if (level.lowerLimitMin === '') {
				lowerLimitMin = 0;
			} else {
				lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
			}

			if (lowerLimitMin === 0) {
				if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
					colorBackground = level.backColor;
				}
			} else if (this.props.seuil.length === index + 1) {
				if (valueMainMetric > lowerLimitMin) {
					colorBackground = level.backColor;
				}
			} else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
				colorBackground = level.backColor;
			}

			index++;
		})

		return colorBackground;
	}

	public defineBorderColor() {
		let colorBorder: string = '';

		if (this.props.seuil.length > 0) {
			if (this.props.seuil[0].borderColor !== '') {
				colorBorder = this.props.seuil[0].borderColor;
			} else {
				colorBorder = 'black';
			}
		} else {
			colorBorder = 'black';
		}

		const valueMainMetric: number = parseInt(this.props.valueMainMetricA, 10);
		let index: number = 0;
		this.props.seuil.forEach((level: LowerLimitClass) => {

			let lowerLimitMin: number = 0;

			if (level.lowerLimitMin === '') {
				lowerLimitMin = 0;
			} else {
				lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
			}

			if (lowerLimitMin === 0) {
				if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
					colorBorder = level.borderColor;
				}
			} else if (this.props.seuil.length === index + 1) {
				if (valueMainMetric > lowerLimitMin) {
					colorBorder = level.borderColor;
				}
			} else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
				colorBorder = level.borderColor;
			}

			index++;
		})

		return colorBorder;
	}

	public defineBorderSize() {

		let sizeBorder: string = '';

		if (this.props.seuil.length > 0) {
			sizeBorder = this.props.seuil[0].sizeBorder;
		} else {
			sizeBorder = '1';
		}

		// const valueMainMetric: number = parseInt(this.props.valueMainMetric, 10);
		// let index: number = 0;

		// this.props.seuil.forEach((level: LowerLimitClass) => {

		// 	let lowerLimitMin: number = 0;

		// 	if (level.lowerLimitMin === '') {
		// 		lowerLimitMin = 0;
		// 	} else {
		// 		lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
		// 	}

		// 	if (lowerLimitMin === 0) {
		// 		if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
		// 			sizeBorder = level.sizeBorder;
		// 		}
		// 	} else if (this.props.seuil.length === index + 1) {
		// 		if (valueMainMetric > lowerLimitMin) {
		// 			sizeBorder = level.sizeBorder;
		// 		}
		// 	} else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
		// 		sizeBorder = level.sizeBorder;
		// 	}

		// 	index++;
		// })

		return sizeBorder;
	}



	public defineCoordinates(associateRegion: SelectableValue<RegionClass>,
		coordinate: number, region: number): number {
		let result: number = 0;
		if (associateRegion.value === undefined || associateRegion.value.id === undefined) {
			result = coordinate;
		} else {
			result = region;
		}
		return result;
	}


	public defineValueTooptip = (typeLink: string, link?: string) => {
		const infosOrientedLink: JSX.Element[] = [];
		const valueMainMetricA = this.props.valueMainMetricA;
		const valueMainMetricB = this.props.valueMainMetricB;
		const refMainMetric = this.props.refMainMetric;

		infosOrientedLink.push(
			<p key={'contentTooltip1' + this.props.name} style={{ fontSize: '12px', marginBottom: '0px' }}>{this.props.label || this.props.name}</p>)

		infosOrientedLink.push(
			<p key={'contentTooltip2' + this.props.name} style={{ fontSize: '10px', marginTop: '5px', marginBottom: '0px' }}>
				Main Metric
			</p>
		);

		if (typeLink === 'bidirectional') {
			if (link === 'A') {
				infosOrientedLink.push(
					<p key={'contentTooltip3' + this.props.name} style={{ fontSize: '8px', marginBottom: '0px', marginTop: '5px' }}>
						+ Link A : {refMainMetric}
					</p>
				);
				infosOrientedLink.push(
					<p key={'contentTooltip4' + this.props.name} style={{ fontSize: '8px', marginBottom: '0px' }}>	- Reference A : {refMainMetric}</p>
				);
				infosOrientedLink.push(
					<p key={'contentTooltip5' + this.props.name} style={{ fontSize: '8px', marginBottom: '0px' }}>	- Value A : {valueMainMetricA}</p>
				);
			} else if (link === 'B') {
				infosOrientedLink.push(
					<p key={'contentTooltip6' + this.props.name} style={{ fontSize: '8px', marginBottom: '0px', marginTop: '5px' }}>
						+ Link B : {refMainMetric}
					</p>
				);
				infosOrientedLink.push(
					<p key={'contentTooltip7' + this.props.name} style={{ fontSize: '8px', marginBottom: '0px' }}>	- Reference B : {refMainMetric}</p>
				);
				infosOrientedLink.push(
					<p key={'contentTooltip8' + this.props.name} style={{ fontSize: '8px', marginBottom: '0px' }}>	- Value B : {valueMainMetricB}</p>
				);
			}
		} else if (typeLink === 'monodirectional') {
			infosOrientedLink.push(
				<p key={'contentTooltip9' + this.props.name} style={{ fontSize: '8px', marginBottom: '0px' }}>	+ Reference : {refMainMetric}</p>
			);
			infosOrientedLink.push(
				<p key={'contentTooltip10' + this.props.name} style={{ fontSize: '8px', marginBottom: '0px' }}>	+ Value : {valueMainMetricA}</p>
			);
		}

		return (
			<div>
				{infosOrientedLink}
			</div>
		)
	}


	public render() {

		const xCoordinateA: number = this.synchroLinkX(parseInt(this.props.pointAPositionX, 10));
		const yCoordinateA: number = this.synchroLinkY(parseInt(this.props.pointAPositionY, 10));
		const xCoordinateB: number = this.synchroLinkX(parseInt(this.props.pointBPositionX, 10));
		const yCoordinateB: number = this.synchroLinkY(parseInt(this.props.pointBPositionY, 10));
		const xCoordinateC: number = this.synchroLinkX(parseInt(this.props.pointCPositionX, 10));
		const yCoordinateC: number = this.synchroLinkY(parseInt(this.props.pointCPositionY, 10));
		const orientationLink: string = this.props.orientationLink;

		// console.log(this.props.associatePointIn)
		// console.log(this.props.associatePointOut)
		// console.log(this.props.associateRegionIn)
		// console.log(this.props.associateRegionOut)
		// const labelA: string = this.props.labelA;
		// const labelB: string = this.props.labelB;
		// const labelAPositionX: number = parseInt(this.props.labelAPositionX, 10);
		// const labelAPositionY: number = parseInt(this.props.labelAPositionY, 10) * (-1);
		// const labelBPositionX: number = parseInt(this.props.labelBPositionX, 10);
		// const labelBPositionY: number = parseInt(this.props.labelBPositionY, 10) * (-1);
		// const associatePointIn: SelectableValue<PointClass> = this.props.associatePointIn || {};
		// const associatePointOut: SelectableValue<PointClass> = this.props.associatePointOut || {};
		// const associateRegionIn: SelectableValue<RegionClass> = this.props.associateRegionIn || {};
		// const associateRegionOut: SelectableValue<RegionClass> = this.props.associateRegionOut || {};
		// const xMinAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.xMin || '0');
		// const xMaxAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.xMax || '0');
		// const xMinAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.xMin || '0');
		// const xMaxAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.xMax || '0');
		// const yMinAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.yMin || '0');
		// const yMaxAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.yMax || '0');
		// const yMinAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.yMin || '0');
		// const yMaxAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.yMax || '0');
		// const xRegionIn: number = this.synchroLinkX((xMaxAssociateRegionIn + xMinAssociateRegionIn) / 2, defineCenter);
		// const yRegionIn: number = this.synchroLinkY((yMaxAssociateRegionIn + yMinAssociateRegionIn) / 2, defineCenter);
		// const xRegionOut: number = this.synchroLinkX((xMaxAssociateRegionOut + xMinAssociateRegionOut) / 2, defineCenter);
		// const yRegionOut: number = this.synchroLinkY((yMaxAssociateRegionOut + yMinAssociateRegionOut) / 2, defineCenter);

		return (
			<div>
				{
					// this.drawLink(
					// 	this.defineCoordinates(associateRegionIn, xCoordinateA, xRegionIn),
					// 	this.defineCoordinates(associateRegionIn, yCoordinateA, yRegionIn),
					// 	this.defineCoordinates(associateRegionOut, xCoordinateB, xRegionOut),
					// 	this.defineCoordinates(associateRegionOut, yCoordinateB, yRegionOut),
					// 	colorA, colorB, labelA, labelB, orientationLink, labelAPositionX, 
					// 	labelAPositionY, labelBPositionX, labelBPositionY, valueMarginRegionIn)
					this.drawLink(xCoordinateA, yCoordinateA, xCoordinateB, yCoordinateB,
						xCoordinateC, yCoordinateC, orientationLink)
				}
			</div>
		);
	}
}
