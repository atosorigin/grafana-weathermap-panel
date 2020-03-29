import React from 'react';
import { CoordinateSpaceClass } from '../../Models/CoordinateSpaceClass';
import { PanelEditorProps, SelectableValue } from '@grafana/data';
import { SimpleOptions } from 'types';
import { FormField, Collapse, Select, FormLabel, Button } from '@grafana/ui';
import { PositionParameterClass } from 'Models/PositionParameterClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';

interface IProps extends PanelEditorProps<SimpleOptions> {
	/** id coordinate */
	coordinateSpace: CoordinateSpaceClass;
	/** call function to save data in parent */
	callBackToParent: (
		positionParameter: PositionParameterClass,
		id?: number) => void;
	callBackToParentZIndex: (
		zIndex: number,
		id: number) => void;
	isPoint: boolean;
	isLink: boolean;
	isRegion: boolean;
	id?: number;
	orientedLink?: OrientedLinkClass;
}

interface IState {
	/** get text object */
	coordinateSpace: CoordinateSpaceClass;
	positionParameter: PositionParameterClass;
	collapsepositionParameter: boolean;
	collapseLabel: boolean;
	collapseTooltip: boolean;
	collapseLayerLevel: boolean;
	orientedLinkComparedToDowngrade: any;
	orientedLinkComparedToUpgrade: any;
}

/**
 * def
 */
class PositionParameter extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			collapsepositionParameter: false,
			collapseLabel: false,
			collapseTooltip: false,
			collapseLayerLevel: false,
			coordinateSpace: this.props.coordinateSpace,
			positionParameter: this.props.coordinateSpace.positionParameter,
			orientedLinkComparedToDowngrade: {},
			orientedLinkComparedToUpgrade: {},
		};
	}

	public callBack() {
		this.props.callBackToParent(this.state.positionParameter, this.props.id || 0)
	}

	public callBackZIndex(zIndex: number, id: number) {
		this.props.callBackToParentZIndex(zIndex, id)
	}

	public handleChangeLabelAPositionX = (event: any) => {
		const newPositionParameter = this.state.positionParameter;
		newPositionParameter.labelAPositionX = event.currentTarget.value;
		this.setState({
			positionParameter: newPositionParameter,
		});
		this.callBack();
	}

	public handleChangeLabelAPositionY = (event: any) => {
		const newPositionParameter = this.state.positionParameter;
		newPositionParameter.labelAPositionY = event.currentTarget.value;
		this.setState({
			positionParameter: newPositionParameter,
		});
		this.callBack();
	}

	public handleChangeLabelBPositionX = (event: any) => {
		const newPositionParameter = this.state.positionParameter;
		newPositionParameter.labelBPositionX = event.currentTarget.value;
		this.setState({
			positionParameter: newPositionParameter,
		});
		this.callBack();
	}

	public handleChangeLabelBPositionY = (event: any) => {
		const newPositionParameter = this.state.positionParameter;
		newPositionParameter.labelBPositionY = event.currentTarget.value;
		this.setState({
			positionParameter: newPositionParameter,
		});
		this.callBack();
	}

	public handleChangeTooltipPositionA = (event: any) => {
		const newPositionParameter = this.state.positionParameter;
		newPositionParameter.tooltipPositionA = { label: event.value, value: event.value };
		this.setState({
			positionParameter: newPositionParameter,
		});
		this.callBack();
	}

	public handleChangeTooltipPositionB = (event: any) => {
		const newPositionParameter = this.state.positionParameter;
		newPositionParameter.tooltipPositionB = { label: event.value, value: event.value };
		this.setState({
			positionParameter: newPositionParameter,
		});
		this.callBack();
	}

	public handleChangeSelectOrientedLinkToUpgrade = (event: any) => {
		console.log(event)
		const newOrientedLinkComparedToToUpgrade: SelectableValue<OrientedLinkClass> = {
			label: event.label,
			value: event.value,
		}
		this.setState({
			orientedLinkComparedToUpgrade: newOrientedLinkComparedToToUpgrade,
		})
	}

	public handleChangeSelectOrientedLinkToDowngrade = (event: any) => {
		const newOrientedLinkComaparedToDowngrade: SelectableValue<OrientedLinkClass> = {
			label: event.label,
			value: event.value,
		}
		this.setState({
			orientedLinkComparedToDowngrade: newOrientedLinkComaparedToDowngrade,
		})
	}

	public downgradeLayerLevel = () => {
		const orientedLinkComparedTo: OrientedLinkClass = this.state.orientedLinkComparedToDowngrade.value;
		const zIndex: number = orientedLinkComparedTo.zIndex - 1;
		this.callBackZIndex(zIndex, this.props.id || 0)
	}

	public upgradeLayerLevel = () => {
		const orientedLinkComparedTo: OrientedLinkClass = this.state.orientedLinkComparedToUpgrade.value;
		const zIndex: number = orientedLinkComparedTo.zIndex + 1;
		this.callBackZIndex(zIndex, this.props.id || 0)
	}

	public defineListOrientedLink = (): SelectableValue<OrientedLinkClass>[] => {
		let listOptions: SelectableValue<OrientedLinkClass>[] = [];
		const arrayOrientedLinks: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;

		arrayOrientedLinks.forEach((orientedLink) => {
			let selectableValue = {
				label: orientedLink.label || orientedLink.name,
				value: orientedLink
			};
			listOptions.push(selectableValue);
		})
		return listOptions;
	}

	public defineLabelPositionInputs = (): JSX.Element => {
		let item: JSX.Element = <div></div>;

		if (this.props.isLink && this.props.orientedLink?.orientationLink.value === 'double') {
			item =
				<div>
					<div>
						<div>
							<FormField
								label='Label A Position X'
								labelWidth={10}
								inputWidth={20}
								type='text'
								value={this.state.positionParameter.labelAPositionX}
								onChange={this.handleChangeLabelAPositionX}
								placeholder={'Label A Position X'} />
							<FormField
								label='Label A Position Y'
								labelWidth={10}
								inputWidth={20}
								type='text'
								value={this.state.positionParameter.labelAPositionY}
								onChange={this.handleChangeLabelAPositionY}
								placeholder={'Label A Position Y'} />
						</div>
					</div>
					<div>
						<div>
							<FormField
								label='Label B Position X'
								labelWidth={10}
								inputWidth={20}
								type='text'
								value={this.state.positionParameter.labelBPositionX}
								onChange={this.handleChangeLabelBPositionX}
								placeholder={'Label B Position X'} />
							<FormField
								label='Label B Position Y'
								labelWidth={10}
								inputWidth={20}
								type='text'
								value={this.state.positionParameter.labelBPositionY}
								onChange={this.handleChangeLabelBPositionY}
								placeholder={'Label B Position Y'} />
						</div>
					</div>
				</div>;
		} else {
			item =
				<div>
					<FormField
						label='Position X'
						labelWidth={10}
						inputWidth={20}
						type='text'
						value={this.state.positionParameter.labelAPositionX}
						onChange={this.handleChangeLabelAPositionX}
						placeholder={'Position X'} />
					<FormField
						label='Position Y'
						labelWidth={10}
						inputWidth={20}
						type='text'
						value={this.state.positionParameter.labelAPositionY}
						onChange={this.handleChangeLabelAPositionY}
						placeholder={'Position Y'} />
				</div>;
		}

		return item;

	}

	public defineTooltipPositionInputs = (): JSX.Element => {
		let item: JSX.Element = <div></div>;
		const optionsSelectTooltipPosition: SelectableValue<string>[] = [
			{ label: 'Top', value: 'top' },
			{ label: 'Bottom', value: 'bottom' },
			{ label: 'Left', value: 'left' },
			{ label: 'Right', value: 'right' },
		];

		if (this.props.isLink && this.props.orientedLink?.orientationLink.value === 'double') {
			item = <div>
				<div style={{ display: 'flex' }}>
					<FormLabel width={10}>Tooltip A Position</FormLabel>
					<Select
						onChange={this.handleChangeTooltipPositionA}
						allowCustomValue={false}
						options={optionsSelectTooltipPosition}
						value={this.state.positionParameter.tooltipPositionA}
						width={20} />
				</div>
				<div style={{ display: 'flex' }}>
					<FormLabel width={10}>Tooltip B Position</FormLabel>
					<Select
						onChange={this.handleChangeTooltipPositionB}
						allowCustomValue={false}
						options={optionsSelectTooltipPosition}
						value={this.state.positionParameter.tooltipPositionB}
						width={20} />
				</div>
			</div>;
		} else {
			item = <div style={{ display: 'flex' }}>
				<FormLabel width={10}>Tooltip position</FormLabel>
				<Select
					onChange={this.handleChangeTooltipPositionA}
					allowCustomValue={false}
					options={optionsSelectTooltipPosition}
					value={this.state.positionParameter.tooltipPositionA}
					width={20} />
			</div>;
		}
		return item;
	}

	public defineLayerLevel = (): JSX.Element => {
		let item: JSX.Element = <div></div>;
		const options: SelectableValue<OrientedLinkClass>[] = this.defineListOrientedLink();

		if (this.props.isLink) {
			item =
				<Collapse
					isOpen={this.state.collapseLayerLevel}
					label={'LayerLevel'}
					onToggle={(isOpen) => {
						this.setState({
							collapseLayerLevel: isOpen,
						})
					}}>
					<div style={{ display: 'flex' }}>
						<FormLabel width={15}>Upgrade on </FormLabel>
						<Select
							onChange={this.handleChangeSelectOrientedLinkToUpgrade}
							allowCustomValue={false}
							options={options}
							value={this.state.orientedLinkComparedToUpgrade}
							width={15} />
						<Button onClick={this.upgradeLayerLevel}>Submit</Button>
					</div>
					<div style={{ display: 'flex' }}>
						<FormLabel width={15}>Downgrade on</FormLabel>
						<Select
							onChange={this.handleChangeSelectOrientedLinkToDowngrade}
							allowCustomValue={false}
							options={options}
							value={this.state.orientedLinkComparedToDowngrade}
							width={15} />
						<Button onClick={this.downgradeLayerLevel}>Submit</Button>
					</div>

				</Collapse>

		} else {
			item = <div></div>;
		}

		return item;
	}

	render() {
		return (
			<Collapse
				isOpen={this.state.collapsepositionParameter}
				label={'Position Parameter'}
				onToggle={(isOpen) => {
					this.setState({
						collapsepositionParameter: isOpen,
					});
				}}
			>
				<Collapse
					isOpen={this.state.collapseLabel}
					label={'Label'}
					onToggle={(isOpen) => {
						this.setState({
							collapseLabel: isOpen,
						});
					}}>
					<div>
						{
							this.defineLabelPositionInputs()
						}
					</div>
				</Collapse>
				<Collapse
					isOpen={this.state.collapseTooltip}
					label={'Tooltip'}
					onToggle={(isOpen) => {
						this.setState({
							collapseTooltip: isOpen,
						});
					}}>
					<div>
						{
							this.defineTooltipPositionInputs()
						}
					</div>
				</Collapse>
				<div>
					{
						this.defineLayerLevel()
					}
				</div>
			</Collapse>
		);
	}
}

export default PositionParameter;