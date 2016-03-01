/// <reference path="./typings/mocha.d.ts" />
/// <reference path="./typings/expect.js.d.ts" />
import {DataContainer} from '../wwwroot/scripts/data-container';

describe('Load data', function () {
    it('Load rows', function () {
        let rows = [
            { firstName: 'Joe', lastName: 'Jackson', age: 1 },
            { firstName: 'Peter', lastName: 'Smith', age: 2 }];
        DataContainer.setRows(rows);
        expect(DataContainer.getNumberOfRows()).equal(2);
    });
});

test("basic test", function () {
    var hello = "hello";
    var szia = "szia";
    expect(hello).equal(szia);
});