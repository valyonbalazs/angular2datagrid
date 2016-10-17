import {Column} from "./column";

export class DataContainerMemento {

    private rows: Array<any>;
    private columns: Array<Column>;
    private creationTime: string;

    constructor() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        var ddString = "";
        var mmString = "";     
        if (dd < 10) {
            ddString = "0" + dd
        }

        if (mm < 10) {
            mmString = '0' + mm
        } 
        
        this.creationTime = `${yyyy}.${mmString}.${ddString}.`;
    }

    public setRows(rows: Array<any>): void {
        this.rows = rows;
    }

    public setColumns(cols: Array<Column>): void {
        this.columns = cols;
    }

    public getRows(): Array<any> {
        return this.rows;
    }

    public getColumns(): Array<Column> {
        return this.columns;
    }
}