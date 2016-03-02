/// <reference path="./typings/jasmin.d.ts" />
/// <reference path="./typings/mocha.d.ts" />
/// <reference path="./typings/expect.js.d.ts" />
/// <reference path="../require.js.d.ts" />
describe('Load data', function () {
    it('Load rows', function () {
        expect(5).to.be.a('number');
        expect([1, 2]).to.contain(1);
        var rows = [
            { firstName: 'Joe', lastName: 'Jackson', age: 1 },
            { firstName: 'Peter', lastName: 'Smith', age: 2 }];
    });
});
