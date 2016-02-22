var browser_1 = require('angular2/platform/browser');
var grid_container_1 = require('./grid-container');
var data_source_1 = require('./data-source');
var column_1 = require('./column');
var rows = [
    { firstName: 'Joe', lastName: 'Jackson', age: 20 },
    { firstName: 'Peter', lastName: 'Smith', age: 30 },
    { firstName: 'Jane', lastName: 'Doe', age: 50 },
    { firstName: 'Béla', lastName: 'Doe', age: 50 },
    { firstName: 'Józsi', lastName: 'Doe', age: 50 },
    { firstName: 'Karcsi', lastName: 'Doe', age: 50 },
    { firstName: 'Helén', lastName: 'Doe', age: 50 },
    { firstName: 'Tamás', lastName: 'Doe', age: 50 },
    { firstName: 'Tim', lastName: 'Smith', age: 80 }
];
var cols = [
    new column_1.Column('firstName', 'First Name'),
    new column_1.Column('lastName', 'Last Name'),
    new column_1.Column('age', 'Age')
];
data_source_1.DataSource.setRows(rows);
data_source_1.DataSource.setColumns(cols);
browser_1.bootstrap(grid_container_1.GridContainer);
//# sourceMappingURL=boot.js.map