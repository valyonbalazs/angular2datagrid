export class GridConfig {

    private static instance: GridConfig = new GridConfig();
    // Default values
    private static isPaginationEnabled: boolean = true;
    private static displayedRowsNumberWithPagination: number = 12;

    constructor() {
        // Singleton
        if (GridConfig.instance) {
            throw new Error("Error instantiation failed! Singleton! Already exists!");
        }
        GridConfig.instance = this;
    }

    public static GetIsPaginationEnabled() : boolean {
        return GridConfig.isPaginationEnabled; 
    }

    public static GetDisplayedRowsNumberWithPagination() : number {
        return GridConfig.displayedRowsNumberWithPagination;
    }

    ngOnInit() {
        console.log("\nletrejott GRIDCONFIG");
    }
}