import { PanelProps } from '@grafana/data';
import { EspaceCoordonneesClass } from 'Models/EspaceCoordonneesClass';
import _ from 'lodash';
import React from 'react';
import { SimpleOptions } from 'types';
import DrawRectangle from './components/DrawRectangle';

interface IProps extends PanelProps<SimpleOptions> { }

/**
 * class SimplePanel
 */
export class SimplePanel extends React.PureComponent<IProps> {
	constructor(props: IProps) {
		super(props);
	}

	/**
	 * fill coordinates for this.props.options.arrayEspaceCoordonnees
	 * @return JSX.Element[]
	 */
	public fillCoor = (): JSX.Element => {
		const { options } = this.props;
		let mapItems: JSX.Element[];

		mapItems = options.arrayEspaceCoordonnees
			.map((line: EspaceCoordonneesClass, index) =>
				<DrawRectangle key={line.id} color='red' uneCoor={line}
					useLimit={true}
					limit={options.arrayEspaceVisualisationInitial} />,
			);

		return (
			<ul>
				{mapItems}
			</ul>
		);
	}

	/**
	 * Display limit (arrayEspaceVisualisationInitial)
	 * @returns JSX.Element
	 */
	public defineLimit = (): JSX.Element => {
		const { arrayEspaceVisualisationInitial } = this.props.options;

		let jsxItems: JSX.Element;

		jsxItems = <DrawRectangle key='limitCoor' color='orange'
			uneCoor={arrayEspaceVisualisationInitial}
			useLimit={false} />;
		return jsxItems;
	}

	/**
	 * render
	 */
	public render() {
		const { options, width, height } = this.props;

		const defaultStyle = {
			fontFamily: this.props.options.police,
			fontSize: this.props.options.taille,
			fontStyle: this.props.options.style !== 'bold' ? this.props.options.style : 'normal',
			fontWeight: this.props.options.style === 'bold' ? 'bold' : 'normal',
		} as React.CSSProperties;

		// (var: type) => type;

		return (
			<div
				style={{
					height,
					position: 'relative',
					width,
					margin: 0,
					padding: 0,
				}}
			>

				<div style={defaultStyle}>

					<div style={{
						position: 'relative',
						textAlign: 'center',
						margin: 0,
						padding: 0,
						backgroundImage: 'url(' + options.imageUrl + ')',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						backgroundSize: height + 'px ',
						height: height + 'px',
						width: height + 'px',
					}}>
						{
							this.defineLimit()
						}
						<br />
						{
							this.fillCoor()
						}
					</div>

				</div>

			</div>
		);
	}
}
