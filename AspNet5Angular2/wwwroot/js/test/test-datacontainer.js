/// <reference path="./typings/qunit.d.ts" />
define(["require", "exports", '../src/data-container'], function (require, exports, dc) {
    "use strict";
    QUnit.module('../src/data-container');
    test("DataContainer basic test", function () {
        equal(dc.DataContainer.getNumberOfRows(), 0);
        var DataContainer = dc.DataContainer;
        var rows = [
            { firstName: 'Joe', lastName: 'Jackson', age: 1 },
            { firstName: 'Peter', lastName: 'Smith', age: 2 }];
        DataContainer.setRows(rows);
        equal(DataContainer.getNumberOfRows(), 2);
    });
});
//# sourceMappingURL=test-datacontainer.js.map