/**
 * Represent a column in the grid.
 * The data (object) which is used in the grid can have
 * multiple fields (key-values). To connect a specific
 * value of this object to a column, the dataBindingName
 * property has to be used.
 * The displayedName will be put in the column header (th).
 */
export class Column {

    /**
     * Will be displayed as column header name (th).
     */
    private displayedName: string;

    /**
     * To connect to a specific value in the data-source.
     */
    private dataBindingName: string;

    constructor(name: string, binding: string) {
        this.displayedName = name;
        this.dataBindingName = binding;
    }

    public getDisplayedName() : string {
        return this.displayedName;
    }

    public getDataBindingName() : string {
        return this.dataBindingName;
    }
} 