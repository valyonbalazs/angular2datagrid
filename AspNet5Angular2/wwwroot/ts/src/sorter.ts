/**
 * Responsible for sorting the content of a column.
 */
export class Sorter {

    private direction: number;
    private key: string;

    constructor() {
        this.direction = 1;
    }

    public sort(key: string, data: Array<any>): void {

        if (this.key === key) {
            this.direction = this.direction * (-1);
        }
        else {
            this.direction = 1;
        }
        this.key = key;
        data.sort((a, b) => {
            if (a[key] === b[key]) {
                return 0;
            }
            else if (a[key] > b[key]) {
                return 1 * this.direction;
            }
            else {
                return -1 * this.direction;
            }
        });
    }
} 