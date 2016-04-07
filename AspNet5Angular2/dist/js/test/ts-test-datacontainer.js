/// <reference path="./typings/mocha.d.ts" />
/// <reference path="./typings/chai.d.ts" />
var chai = require('chai');
var expect = chai.expect;
var dc = require('../src/data-container');
var col = require('../src/column');
var DataContainer = dc.DataContainer;
var Column = col.Column;
describe('Basic data test', function () {
    var columns = [
        new Column('First Name', 'firstName'),
        new Column('Last Name', 'lastName')
    ];
    var rows = [
        { firstName: 'Joe', lastName: 'Jackson', age: 1 },
        { firstName: 'Peter', lastName: 'Smith', age: 2 }];
    DataContainer.setRows(rows);
    DataContainer.setColumns(columns);
    it('DataContainer: get the number of rows', function () {
        expect(DataContainer.getNumberOfRows()).to.equal(2);
    });
    it('DataContainer: get the number of columns', function () {
        var columns = DataContainer.getColumns();
        expect(columns.length).to.equal(2);
    });
    it('DataContainer: get the name of columns', function () {
        var columns = DataContainer.getColumns();
        expect(columns[0].getDataBindingName()).to.equal('firstName');
        expect(columns[1].getDataBindingName()).to.equal('lastName');
        expect(columns[0].getDisplayedName()).to.equal('First Name');
        expect(columns[1].getDisplayedName()).to.equal('Last Name');
    });
});
//# sourceMappingURL=ts-test-datacontainer.js.map