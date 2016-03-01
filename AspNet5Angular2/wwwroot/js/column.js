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
})();
exports.Column = Column;
//# sourceMappingURL=column.js.map