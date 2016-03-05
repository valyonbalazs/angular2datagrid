/// <reference path="../typings/mocha.d.ts" />
/// <reference path="../typings/chai.d.ts" />
/// <reference path="../typings/qunit.d.ts" />

// import * as DataContainer from '../../wwwroot/scripts/data-container';
// import {DataContainer} from '../../wwwroot/scripts/data-container';

import dc = require('../../wwwroot/scripts/data-container');
QUnit.module('../../wwwroot/scripts/data-container');
test("basic", function () {

    var DataContainer = dc.DataContainer;
    var rows = [
        { firstName: 'Joe', lastName: 'Jackson', age: 1 },
        { firstName: 'Peter', lastName: 'Smith', age: 2 }];

    DataContainer.setRows(rows);
    equal(DataContainer.getNumberOfRows(), 2);

});

