import {Column} from "./column"; 

/**
 * Root interface for the grid data loader module.
 */
export interface IDataLoader {

    getColumns() : Array<Column>;
    getRows() : Array<any>;
}