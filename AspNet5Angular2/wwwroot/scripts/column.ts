export class Column {

    private displayedName: string;
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