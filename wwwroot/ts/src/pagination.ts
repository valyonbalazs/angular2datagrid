/// <reference path="typings/jquery/jquery.d.ts" /> 

import {Component, Input, OnInit} from "angular2/core";
import {Grid} from "./grid";
import {DataContainer} from "./data-container";

@Component({
    selector: "pagination",
    templateUrl: "../html/pagination.html" 
})

export class Pagination {

    private numberOfRowsOfTableToDisplay: number = 8;
    private currentLink: number = 1;
    private numberOfPages: number = 0;
    private numberOfPagesArray: Array<number> = [];
    private currentPage: number = 1;

    @Input() numberofrows: number;

    /*
    * Used as a casual constructor
    *  setTimeout needed to wait the grid rendered into the DOM
    */ 
    ngOnInit() {
        console.log("\nPAGINATION was initiatied and created.");
        this.numberOfRowsOfTableToDisplay = this.numberofrows;
        setTimeout(function () {
            this.initializer();
            this.showPage(1, this.numberOfRowsOfTableToDisplay);
        }.bind(this), 30);
    }

    /**
     * Basic component initalization: number of rows, number of all items, number of pages.
     */
    private initializer(): void {
        let showRowsPerPage = this.numberOfRowsOfTableToDisplay;
        let numberOfAllItems = DataContainer.getNumberOfRows();
        this.numberOfPages = Math.ceil(numberOfAllItems / showRowsPerPage);
    }

    /**
     * Updates the page number array, according to the current page number.
     * It uses a 5 element range for page number display.
     */
    private updateNumberOfPagesArray(currentLink: number, numberOfButtons: number): void {

        if (this.numberOfPagesArray.length != 0) {
            this.numberOfPagesArray = [];
        }

        if (numberOfButtons > this.numberOfPages) {
            numberOfButtons = this.numberOfPages;
        }

        if (currentLink < 5) {
            if (numberOfButtons < 5) {
                for (let i = 1; i < numberOfButtons + 1; i++) {
                    this.numberOfPagesArray.push(i);
                }
            }
            else {
                for (let i = 1; i < 5 + 1; i++) {
                    this.numberOfPagesArray.push(i);
                }
            }
        }
        else {
            if ((currentLink + 2) < this.numberOfPages) {
                for (let j = (currentLink - 2); j < (currentLink + 3); j++) {
                    this.numberOfPagesArray.push(j);
                }
            }
            else {
                let diffCurrentLinkNumberOfPages = this.numberOfPages - currentLink;
                if (diffCurrentLinkNumberOfPages == 0) {
                    for (let k = (currentLink - 4); k < this.numberOfPages + 1; k++) {
                        this.numberOfPagesArray.push(k);
                    }
                } else {
                    for (let z = (currentLink - 3); z < this.numberOfPages + 1; z++) {
                        this.numberOfPagesArray.push(z);
                    }
                }
            }
        }
    }

    /**
     * Creates the pager with page numbers, and First, Previous, Next and Last buttons
     * with the current page and link properties.
     * @param currentPage: the needed page.
     */
    private createPager(currentPage: number): void {

        let numberOfPagesToDisplay = this.numberOfRowsOfTableToDisplay;

        // Just on the last but one page has to change the current link
        if (numberOfPagesToDisplay >= 1) {
            this.currentLink = 1;
        } else {
            this.currentLink = numberOfPagesToDisplay + 1;
        }

        if (currentPage > 1) {
            this.currentLink = currentPage;
        }

        this.updateNumberOfPagesArray(this.currentLink, 5);
    }

    /**
     * Main coordinator method of the pagination, what and how to display.
     * @param pageNumber: needed page.
     * @param displayNumberOfRows: how many rows have to be displayed in the grid.
     */
    public showPage(pageNumber: number, displayNumberOfRows: number): void {
        
        this.currentPage = pageNumber;
        this.modifyTbodyRowsAccordingToPageNumber(pageNumber, displayNumberOfRows);
        this.modifyPageNumbersClass(pageNumber);
        this.modifyFirstAndPrevPageButtons(pageNumber);
        this.modifyLastPageNumber(pageNumber);
        this.modifyLastAndNextPageButtons(pageNumber);
        this.createPager(pageNumber);
    }

    private modifyTbodyRowsAccordingToPageNumber(page: number, rows: number): void {
        $("#gridTbody tr").hide();
        $("#current_page").val(page);
        $("#gridTbody tr").each(function (n) {
            if (n >= rows * (page - 1) && n < rows * page)
                $(this).show();
        });
    }

    private modifyPageNumbersClass(page: number): void {

        // Adding and removing class for actual page number SASS styling
        $(".paginationPageNumbers").each(function (n, s) {

            let valueOfAElement = s.textContent;
            if (parseInt(valueOfAElement) == page) {
                try {
                    let previousPageNumber = $(".paginationPageNumbersSelected");
                    if (previousPageNumber != null || previousPageNumber != undefined) {
                        previousPageNumber.removeClass();
                        previousPageNumber.addClass("paginationPageNumbers btn btn-default paginationButton");
                    } else {
                    }
                } catch (e) {

                }

                $(this).removeClass();
                $(this).addClass("paginationPageNumbersSelected btn btn-warning paginationButton");
            }
        });
    }

    private modifyFirstAndPrevPageButtons(page: number): void {
        if (page == 1) {
            $("#paginationFirstPageButton").prop("disabled", true);
            $("#paginationPrevPageButton").prop("disabled", true);
        } else {
            $("#paginationFirstPageButton").prop("disabled", false);
            $("#paginationPrevPageButton").prop("disabled", false);
        }
    }

    private modifyLastPageNumber(page: number): void {
        // The not link last page number is displayed if its not the last
        let lastPageNumber = $("#lastPageNumber").text();
        lastPageNumber = lastPageNumber.replace(/\D/g, "");
        if (parseInt(lastPageNumber) == page) {
            $("#lastPageNumber").hide();

        }
        else {
            $("#lastPageNumber").css("display", "inline");

        }
    }

    private modifyLastAndNextPageButtons(page: number): void {
        let lastPageNumber = $("#lastPageNumber").text();
        lastPageNumber = lastPageNumber.replace(/\D/g, "");
        if (parseInt(lastPageNumber) == page) {
            $("#paginationNextPageButton").hide();
            $("#paginationLastPageButton").hide();
        }
        else {
            $("#paginationLastPageButton").css("display", "inline");
            $("#paginationNextPageButton").css("display", "inline");
        }
    }

    public nextPage(): void {
        let newPage = parseInt($("#current_page").val()) + 1;
        if (newPage <= this.numberOfPages) {
            this.showPage(newPage, this.numberOfRowsOfTableToDisplay);
        }
    }

    public lastPage(): void {
        let newPage = this.numberOfPages;
        $("#current_page").val(newPage);
        this.showPage(newPage, this.numberOfRowsOfTableToDisplay);
    }

    public firstPage(): void {
        let newPage = 1;
        $("#current_page").val(newPage);
        this.showPage(newPage, this.numberOfRowsOfTableToDisplay);
    }

    public previousPage(): void {
        let newPage = parseInt($("#current_page").val()) - 1;
        if (newPage >= 1) {
            $("#current_page").val(newPage);
            this.showPage(newPage, this.numberOfRowsOfTableToDisplay)
        }
    }
} 