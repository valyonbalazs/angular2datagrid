export class GridConfig {

    // Default values
    private isPaginationEnabled: boolean = false;
    private displayedRowsNumberWithPagination: number = 6;

    constructor() {
        // If some default properties need to be changed, do it in here
        this.isPaginationEnabled = true;
        this.displayedRowsNumberWithPagination = 5;
    }

    public GetIsPaginationEnabled() : boolean {
        return this.isPaginationEnabled; 
    }

    public GetDisplayedRowsNumberWithPagination() : number {
        return this.displayedRowsNumberWithPagination;
    }

}