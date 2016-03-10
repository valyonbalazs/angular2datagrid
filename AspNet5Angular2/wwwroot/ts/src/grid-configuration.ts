import {GridConfigJson} from './grid-config-interface';

export class GridConfig {

    // Default values
    private isPaginationEnabled: boolean = false;

    constructor() {
        // If some default properties need to be changed, do it in here

    }

    public GetIsPaginationEnabled() {
        return this.isPaginationEnabled; 
    }


}