import { SelectableValue } from '@grafana/data';

export class PositionParameterClass {
  labelAPositionX: string;
  labelAPositionY: string;
  labelBPositionX: string;
  labelBPositionY: string;
  tooltipPositionA: SelectableValue<any>;
  tooltipPositionB: SelectableValue<any>;

  constructor(
    labelAPositionX: string,
    labelAPositionY: string,
    labelBPositionX: string,
    labelBPositionY: string,
    tooltipPositionA: SelectableValue<string>,
    tooltipPositionB: SelectableValue<string>
  ) {
    this.labelAPositionX = labelAPositionX;
    this.labelAPositionY = labelAPositionY;
    this.labelBPositionX = labelBPositionX;
    this.labelBPositionY = labelBPositionY;
    this.tooltipPositionA = tooltipPositionA;
    this.tooltipPositionB = tooltipPositionB;
  }
}
