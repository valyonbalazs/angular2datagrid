/// <reference path="typings/jquery/jquery.d.ts" /> 
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var FilterGlobal = (function () {
    function FilterGlobal() {
        this.searchGlobalFilter = null;
    }
    FilterGlobal.prototype.ngOnInit = function () {
        var _this = this;
        console.log("\FILTER-COLUMN was initiatied and FILTERGLOBAL");
        this.searchGlobalFilter = document.getElementById("search");
        this.searchGlobalFilter.addEventListener("keyup", function (e) { return _this.searchKeyUp(e); });
    };
    FilterGlobal.prototype.searchKeyUp = function (event) {
        var $rows = $("#gridTbody tr");
        var searchInput = $("#search");
        var value = $.trim(searchInput.val()).replace(/ +/g, " ").toLowerCase();
        $rows.show().filter(function () {
            var text = $(this).text().replace(/\s+/g, " ").toLowerCase();
            return !~text.indexOf(value);
        }).hide();
        if (searchInput.val().length == 0 && this.pagination) {
            document.getElementById("paginationFirstPageButton").click();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], FilterGlobal.prototype, "pagination", void 0);
    FilterGlobal = __decorate([
        core_1.Component({
            selector: "filter-global",
            templateUrl: "../html/filter-global.html"
        }), 
        __metadata('design:paramtypes', [])
    ], FilterGlobal);
    return FilterGlobal;
}());
exports.FilterGlobal = FilterGlobal;
//# sourceMappingURL=filter-global.js.map