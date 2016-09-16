"use strict";
/**
 * Represent a column in the grid.
 * The data (object) which is used in the grid can have
 * multiple fields (key-values). To connect a specific
 * value of this object to a column, the dataBindingName
 * property has to be used.
 * The displayedName will be put in the column header (th).
 */
var Column = (function () {
    function Column(name, binding) {
        this.displayedName = name;
        this.dataBindingName = binding;
    }
    Column.prototype.getDisplayedName = function () {
        return this.displayedName;
    };
    Column.prototype.getDataBindingName = function () {
        return this.dataBindingName;
    };
    return Column;
}());
exports.Column = Column;
//# sourceMappingURL=column.js.map