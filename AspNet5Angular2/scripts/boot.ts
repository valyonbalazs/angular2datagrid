import {bootstrap} from 'angular2/platform/browser';
import {GridContainer} from './grid-container';
import {DataSource} from './data-source';
import {Column} from './column';

var rows = [
    { firstName: 'Joe', lastName: 'Jackson', age: 20 },
    { firstName: 'Peter', lastName: 'Smith', age: 30 },
    { firstName: 'Jane', lastName: 'Doe', age: 50 },
    { firstName: 'Béla', lastName: 'Doe', age: 50 },
    { firstName: 'Józsi', lastName: 'Doe', age: 50 },
    { firstName: 'Karcsi', lastName: 'Doe', age: 50 },
    { firstName: 'Helén', lastName: 'Doe', age: 50 },
    { firstName: 'Tamás', lastName: 'Doe', age: 50 },
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
    new Column('firstName', 'First Name'),
    new Column('lastName', 'Last Name'),
    new Column('age', 'Age')
];

DataSource.setRows(rows);
DataSource.setColumns(cols);

bootstrap(GridContainer);

