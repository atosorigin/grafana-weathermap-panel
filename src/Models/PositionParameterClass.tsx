import { SelectableValue } from '@grafana/data';

export class PositionParameterClass {

    public labelAPositionX: string;
    public labelAPositionY: string;
    public labelBPositionX: string;
    public labelBPositionY: string;
    public tooltipPositionA: SelectableValue<any>;
    public tooltipPositionB: SelectableValue<any>;

    constructor(
        labelAPositionX: string,
        labelAPositionY: string,
        labelBPositionX: string,
        labelBPositionY: string,
        tooltipPositionA: SelectableValue<string>,
        tooltipPositionB: SelectableValue<string>
    ){
        this.labelAPositionX = labelAPositionX;
        this.labelAPositionY = labelAPositionY;
        this.labelBPositionX = labelBPositionX;
        this.labelBPositionY = labelBPositionY;
        this.tooltipPositionA = tooltipPositionA;
        this.tooltipPositionB = tooltipPositionB;
    }
}