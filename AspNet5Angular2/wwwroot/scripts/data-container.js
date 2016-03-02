/**
 * Singleton datasource object for one grid
 */
var DataContainer = (function () {
    function DataContainer() {
        if (DataContainer.instance) {
            throw new Error("Error instantiation failed! Singleton! Already exists!");
        }
        DataContainer.instance = this;
    }
    DataContainer.getRows = function () {
        return DataContainer.rows;
    };
    DataContainer.getColumns = function () {
        return DataContainer.columns;
    };
    DataContainer.setRows = function (rows) {
        DataContainer.rows = rows;
    };
    DataContainer.setColumns = function (cols) {
        DataContainer.columns = cols;
    };
    DataContainer.getNumberOfRows = function () {
        return DataContainer.rows.length;
    };
    DataContainer.instance = new DataContainer();
    return DataContainer;
})();
exports.DataContainer = DataContainer;