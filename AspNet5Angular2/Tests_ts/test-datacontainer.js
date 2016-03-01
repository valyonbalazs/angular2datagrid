/// <reference path="./typings/mocha.d.ts" />
/// <reference path="./typings/expect.js.d.ts" />
var data_container_1 = require('../wwwroot/scripts/data-container');
describe('Load data', function () {
    it('Load rows', function () {
        var rows = [
            { firstName: 'Joe', lastName: 'Jackson', age: 1 },
            { firstName: 'Peter', lastName: 'Smith', age: 2 }];
        data_container_1.DataContainer.setRows(rows);
        expect(data_container_1.DataContainer.getNumberOfRows()).equal(2);
    });
});
test("basic test", function () {
    var hello = "hello";
    var szia = "szia";
    expect(hello).equal(szia);
});
