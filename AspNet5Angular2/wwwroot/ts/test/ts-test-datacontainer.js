/// <reference path="./typings/mocha.d.ts" />
/// <reference path="./typings/chai.d.ts" />
var chai = require('chai');
var expect = chai.expect;
var dc = require('../src/data-container');
describe('Basic data test', function () {
    it('Number of elements', function () {
        var DataContainer = dc.DataContainer;
        var rows = [
            { firstName: 'Joe', lastName: 'Jackson', age: 1 },
            { firstName: 'Peter', lastName: 'Smith', age: 2 }];
        DataContainer.setRows(rows);
        expect(DataContainer.getNumberOfRows()).to.equal(2);
    });
});
