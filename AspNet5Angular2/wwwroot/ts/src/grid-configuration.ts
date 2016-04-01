export class GridConfig {

    private static instance: GridConfig = new GridConfig();
    // Default values
    private static isPaginationEnabled: boolean = true;
    private static displayedRowsNumberWithPagination: number = 12;
    private static isFilterGlobalEnabled: boolean = true;
    private static isFilterColumnEnabled: boolean = true;
    private static gridTableHeight: number = 40;

    constructor() {
        // Singleton
        if (GridConfig.instance) {
            throw new Error("Error instantiation failed! Singleton! Already exists!");
        }
        GridConfig.instance = this;
    }

    public static GetDisplayedRowsNumberWithPagination() : number {
        return GridConfig.displayedRowsNumberWithPagination;
    }

    public static GetIsPaginationEnabled(): boolean {
        return GridConfig.isPaginationEnabled;
    }

    public static GetIsFilterGlobalEnabled(): boolean {
        return GridConfig.isFilterGlobalEnabled;
    }

    public static GetIsFilterColumnEnabled(): boolean {
        return GridConfig.isFilterColumnEnabled;
    }

    public static GetGridTableHeight() {
        return GridConfig.gridTableHeight;
    }

    ngOnInit() {
        console.log("\nletrejott GRIDCONFIG");
    }
}