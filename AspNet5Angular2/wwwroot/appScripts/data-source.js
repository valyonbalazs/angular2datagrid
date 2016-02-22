// Singleton datasource object for one grid
var DataSource = (function () {
    function DataSource() {
        if (DataSource.instance) {
            throw new Error("Error instantiation failed! Singleton! Already exists!");
        }
        DataSource.instance = this;
    }
    DataSource.getRows = function () {
        return DataSource.rows;
    };
    DataSource.getColumns = function () {
        return DataSource.columns;
    };
    DataSource.setRows = function (rows) {
        DataSource.rows = rows;
    };
    DataSource.setColumns = function (cols) {
        DataSource.columns = cols;
    };
    DataSource.instance = new DataSource();
    return DataSource;
})();
exports.DataSource = DataSource;
//# sourceMappingURL=data-source.js.map