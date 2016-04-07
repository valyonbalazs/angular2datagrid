import {Column} from './column';   

export class TestData {

    private Columns: Array<Column>;
    private Rows: Array<any>;

    constructor() {
        this.loadTestData();
    }

    public getColumns() : Array<Column> {
        return this.Columns;
    }

    public getRows() : Array<any>{
        return this.Rows;
    }

    private loadTestData() {

        let rows = [
            { firstName: 'Joe', lastName: 'Jackson', age: 1, birthDate: '1989.08.17', position: 'Manager', salary: 300000,  started: '2015.06.01', holidaysLeft: 13 },
            { firstName: 'Peter', lastName: 'Smith', age: 2, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Jane', lastName: 'Doe', age: 3, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Béla', lastName: 'Doe', age: 4, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Józsi', lastName: 'Doe', age: 5, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Karcsi', lastName: 'Doe', age: 6, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Helén', lastName: 'Doe', age: 7, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Tamás', lastName: 'Doe', age: 8, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Joe', lastName: 'Jackson', age: 9, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Peter', lastName: 'Smith', age: 10, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Jane', lastName: 'Doe', age: 11, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Béla', lastName: 'Doe', age: 12, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Józsi', lastName: 'Doe', age: 13, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Karcsi', lastName: 'Doe', age: 14, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Helén', lastName: 'Doe', age: 15, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Tamás', lastName: 'Doe', age: 16, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Peter', lastName: 'Smith', age: 17, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Jane', lastName: 'Doe', age: 18, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Béla', lastName: 'Doe', age: 19, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Józsi', lastName: 'Doe', age: 20, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Karcsi', lastName: 'Doe', age: 21, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Helén', lastName: 'Doe', age: 22, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Tamás', lastName: 'Doe', age: 23, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Joe', lastName: 'Jackson', age: 24, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Peter', lastName: 'Smith', age: 25, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Jane', lastName: 'Doe', age: 26, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Béla', lastName: 'Doe', age: 27, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Józsi', lastName: 'Doe', age: 28, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Karcsi', lastName: 'Doe', age: 29, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Helén', lastName: 'Doe', age: 30, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Tamás', lastName: 'Doe', age: 31, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Peter', lastName: 'Smith', age: 32, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Jane', lastName: 'Doe', age: 33, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Béla', lastName: 'Doe', age: 34, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Józsi', lastName: 'Doe', age: 35, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Karcsi', lastName: 'Doe', age: 36, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Helén', lastName: 'Doe', age: 37, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Tamás', lastName: 'Doe', age: 38, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Joe', lastName: 'Jackson', age: 39, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Peter', lastName: 'Smith', age: 40, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Jane', lastName: 'Doe', age: 41, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Béla', lastName: 'Doe', age: 42, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Józsi', lastName: 'Doe', age: 43, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Karcsi', lastName: 'Doe', age: 44, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Helén', lastName: 'Doe', age: 46, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Tamás', lastName: 'Doe', age: 46, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Peter', lastName: 'Smith', age: 47, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Jane', lastName: 'Doe', age: 48, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Béla', lastName: 'Doe', age: 49, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Józsi', lastName: 'Doe', age: 50, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Karcsi', lastName: 'Doe', age: 51, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Helén', lastName: 'Doe', age: 52, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Tamás', lastName: 'Doe', age: 53, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Joe', lastName: 'Jackson', age: 54, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Peter', lastName: 'Smith', age: 55, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Jane', lastName: 'Doe', age: 56, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Béla', lastName: 'Doe', age: 57, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Józsi', lastName: 'Doe', age: 58, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Karcsi', lastName: 'Doe', age: 59, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Helén', lastName: 'Doe', age: 60, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Tamás', lastName: 'Doe', age: 61, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  },
            { firstName: 'Tim', lastName: 'Smith', age: 62, birthDate: '1989.08.17', position: 'Manager', salary: 300000, started: '2015.06.01', holidaysLeft: 13  }
        ];

        let cols = [
            new Column('First Name', 'firstName'),
            new Column('Last Name', 'lastName'),
            new Column('Age', 'age'),
            new Column('Birth date', 'birthDate'),
            new Column('Position', 'position'),
            new Column('Salary', 'salary'),
            new Column('Started', 'started'),
            new Column('Holidays left', 'holidaysLeft')
        ];

        this.Rows = rows;
        this.Columns = cols;
    }
}