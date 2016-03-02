/// <reference path="./typings/jasmin.d.ts" />
/// <reference path="./typings/mocha.d.ts" />
/// <reference path="./typings/expect.js.d.ts" />
/// <reference path="../require.js.d.ts" />
/// <chutzpah_reference path="../node_modules/expect.js/index.js" />
/// <chutzpah_reference path="../node_modules/jasmine-core/lib/jasmine-core.js" />
/// <chutzpah_reference path="../require.js" />
/// <reference path="../wwwroot/scripts/data-container.ts" />
/// <chutzpah_reference path="../wwwroot/js/data-container.js" />
var DataContainer = require(['data-container']);
describe('Load data', function () {
    it('Load rows', function () {
        expect(5).to.be.a('number');
        expect([1, 2]).to.contain(1);
        var rows = [
            { firstName: 'Joe', lastName: 'Jackson', age: 1 },
            { firstName: 'Peter', lastName: 'Smith', age: 2 }];
        //DataContainer.setRows(rows);
        //expect(DataContainer.getNumberOfRows()).to.be(2);
    });
});
