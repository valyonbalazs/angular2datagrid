var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var TableRow = (function () {
    function TableRow() {
        /*var sourceData = [
            ["egy", "ketto", "harom"],
            ["negy", "ot", "hat"],
            ["het", "nyolc", "kilenc"]
        ];*/
        var sourceData = ["egy", "ketto", "harom"];
        this.data = sourceData;
    }
    ;
    TableRow = __decorate([
        core_1.Component({
            selector: 'table-row',
            template: '<table><tr ><td></td></tr></table>'
        }), 
        __metadata('design:paramtypes', [])
    ], TableRow);
    return TableRow;
})();
exports.TableRow = TableRow;
var TableData = (function () {
    function TableData(source) {
        this.data = source;
    }
    return TableData;
})();
//# sourceMappingURL=table-row.js.map