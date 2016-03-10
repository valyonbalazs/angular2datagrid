export class PaginationConfig {
    private numberOfDisplayedRows: number = 8;

    constructor() {
    }

    public SetNumberOfDisplayedRows(rowsNumber: number) {
        this.numberOfDisplayedRows = rowsNumber;
    }

    public GetNumberOfDisplayedRows() : number {
        return this.numberOfDisplayedRows;
    }
}