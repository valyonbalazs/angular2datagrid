/// <reference path="./typings/qunit.d.ts" />

// from: https://chutzpah.codeplex.com/SourceControl/latest#Samples/RequireJS/TypeScript/tests/base/base.qunit.test.ts 

"use strict";
var column = require('../src/column');
QUnit.module('../src/column');
test("Column basic test", function () {
    var displayName = "First Name";
    var bindName = "firstName";
    var c = new column.Column(displayName, bindName);
    equal(c.getDisplayedName(), displayName);
    equal(c.getDataBindingName(), bindName);
});
//# sourceMappingURL=test-column.js.map