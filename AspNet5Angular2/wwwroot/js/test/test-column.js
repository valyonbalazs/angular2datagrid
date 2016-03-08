/// <reference path="./typings/qunit.d.ts" />
define(["require", "exports", '../src/column'], function (require, exports, column) {
    "use strict";
    QUnit.module('../src/column');
    test("Column basic test", function () {
        var displayName = "First Name";
        var bindName = "firstName";
        var c = new column.Column(displayName, bindName);
        equal(c.getDisplayedName(), displayName);
        equal(c.getDataBindingName(), bindName);
    });
});
//# sourceMappingURL=test-column.js.map