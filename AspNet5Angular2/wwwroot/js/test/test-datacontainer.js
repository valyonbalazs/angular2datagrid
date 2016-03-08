/// <reference path="./typings/qunit.d.ts" />
"use strict";
var dc = require('../src/data-container');
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
//# sourceMappingURL=test-datacontainer.js.map