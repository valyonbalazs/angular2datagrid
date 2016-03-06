"use strict";
var column_1 = require('./column');
var TestData = (function () {
    function TestData() {
        this.loadTestData();
    }
    TestData.prototype.getColumns = function () {
        return this.Columns;
    };
    TestData.prototype.getRows = function () {
        return this.Rows;
    };
    TestData.prototype.loadTestData = function () {
        var rows = [
            { firstName: 'Joe', lastName: 'Jackson', age: 1 },
            { firstName: 'Peter', lastName: 'Smith', age: 2 },
            { firstName: 'Jane', lastName: 'Doe', age: 3 },
            { firstName: 'Béla', lastName: 'Doe', age: 4 },
            { firstName: 'Józsi', lastName: 'Doe', age: 5 },
            { firstName: 'Karcsi', lastName: 'Doe', age: 6 },
            { firstName: 'Helén', lastName: 'Doe', age: 7 },
            { firstName: 'Tamás', lastName: 'Doe', age: 8 },
            { firstName: 'Joe', lastName: 'Jackson', age: 9 },
            { firstName: 'Peter', lastName: 'Smith', age: 10 },
            { firstName: 'Jane', lastName: 'Doe', age: 11 },
            { firstName: 'Béla', lastName: 'Doe', age: 12 },
            { firstName: 'Józsi', lastName: 'Doe', age: 13 },
            { firstName: 'Karcsi', lastName: 'Doe', age: 14 },
            { firstName: 'Helén', lastName: 'Doe', age: 15 },
            { firstName: 'Tamás', lastName: 'Doe', age: 16 },
            { firstName: 'Peter', lastName: 'Smith', age: 17 },
            { firstName: 'Jane', lastName: 'Doe', age: 18 },
            { firstName: 'Béla', lastName: 'Doe', age: 19 },
            { firstName: 'Józsi', lastName: 'Doe', age: 20 },
            { firstName: 'Karcsi', lastName: 'Doe', age: 21 },
            { firstName: 'Helén', lastName: 'Doe', age: 22 },
            { firstName: 'Tamás', lastName: 'Doe', age: 23 },
            { firstName: 'Joe', lastName: 'Jackson', age: 24 },
            { firstName: 'Peter', lastName: 'Smith', age: 25 },
            { firstName: 'Jane', lastName: 'Doe', age: 26 },
            { firstName: 'Béla', lastName: 'Doe', age: 27 },
            { firstName: 'Józsi', lastName: 'Doe', age: 28 },
            { firstName: 'Karcsi', lastName: 'Doe', age: 29 },
            { firstName: 'Helén', lastName: 'Doe', age: 30 },
            { firstName: 'Tamás', lastName: 'Doe', age: 31 },
            { firstName: 'Peter', lastName: 'Smith', age: 32 },
            { firstName: 'Jane', lastName: 'Doe', age: 33 },
            { firstName: 'Béla', lastName: 'Doe', age: 34 },
            { firstName: 'Józsi', lastName: 'Doe', age: 35 },
            { firstName: 'Karcsi', lastName: 'Doe', age: 36 },
            { firstName: 'Helén', lastName: 'Doe', age: 37 },
            { firstName: 'Tamás', lastName: 'Doe', age: 38 },
            { firstName: 'Joe', lastName: 'Jackson', age: 39 },
            { firstName: 'Peter', lastName: 'Smith', age: 40 },
            { firstName: 'Jane', lastName: 'Doe', age: 41 },
            { firstName: 'Béla', lastName: 'Doe', age: 42 },
            { firstName: 'Józsi', lastName: 'Doe', age: 43 },
            { firstName: 'Karcsi', lastName: 'Doe', age: 44 },
            { firstName: 'Helén', lastName: 'Doe', age: 46 },
            { firstName: 'Tamás', lastName: 'Doe', age: 46 },
            { firstName: 'Peter', lastName: 'Smith', age: 47 },
            { firstName: 'Jane', lastName: 'Doe', age: 48 },
            { firstName: 'Béla', lastName: 'Doe', age: 49 },
            { firstName: 'Józsi', lastName: 'Doe', age: 50 },
            { firstName: 'Karcsi', lastName: 'Doe', age: 51 },
            { firstName: 'Helén', lastName: 'Doe', age: 52 },
            { firstName: 'Tamás', lastName: 'Doe', age: 53 },
            { firstName: 'Joe', lastName: 'Jackson', age: 54 },
            { firstName: 'Peter', lastName: 'Smith', age: 55 },
            { firstName: 'Jane', lastName: 'Doe', age: 56 },
            { firstName: 'Béla', lastName: 'Doe', age: 57 },
            { firstName: 'Józsi', lastName: 'Doe', age: 58 },
            { firstName: 'Karcsi', lastName: 'Doe', age: 59 },
            { firstName: 'Helén', lastName: 'Doe', age: 60 },
            { firstName: 'Tamás', lastName: 'Doe', age: 61 },
            { firstName: 'Tim', lastName: 'Smith', age: 62 }
        ];
        var cols = [
            new column_1.Column('First Name', 'firstName'),
            new column_1.Column('Last Name', 'lastName'),
            new column_1.Column('Age', 'age')
        ];
        this.Rows = rows;
        this.Columns = cols;
    };
    return TestData;
}());
exports.TestData = TestData;
//# sourceMappingURL=test-data.js.map