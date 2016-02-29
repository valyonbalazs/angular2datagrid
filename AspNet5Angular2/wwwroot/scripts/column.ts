export class Column {

    public displayedName: string;
    public dataBindingName: string;

    constructor(name: string, binding: string) {
        this.displayedName = name;
        this.dataBindingName = binding;

    }
}