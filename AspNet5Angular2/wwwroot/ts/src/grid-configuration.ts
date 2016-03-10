export class GridConfig {
    private isPaginationEnabled: boolean = true;

    public SetIsPaginationEnabled(isEnabled: boolean) {
        this.isPaginationEnabled = isEnabled;
    }

    public GetIsPaginationEnabled() {
        return this.isPaginationEnabled; 
    }
}