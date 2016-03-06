interface ColumnD {
    new (name: string, binding: string): ColumnInstance;
    displayedName: string;
    dataBindingName: string;
}

interface ColumnInstance {
    name: string;
    binding: string;
}

declare var Column: ColumnD;

declare function getDisplayedName(): string;

declare function getDataBindingName(): string;