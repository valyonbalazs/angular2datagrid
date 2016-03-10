/// <reference path="typings/jquery/jquery.d.ts" /> 

import {Component, Input, OnInit} from 'angular2/core';
import {Grid} from './grid';
import {DataContainer} from './data-container';
import {PaginationConfig} from './pagination-config';

@Component({
    selector: 'pagination',

    templateUrl: '../html/pagination.html' 
})

export class Pagination {

    private numberOfRowsOfTableToDisplay: number = 8;
    private rowsPerPage: number = 6;
    private currentLink: number = 1;
    private numberOfPages: number = 0;
    private numberOfPagesArray: Array<number> = [];

    constructor(paginConfig: PaginationConfig) {
        this.numberOfRowsOfTableToDisplay = paginConfig.GetNumberOfDisplayedRows();
        this.initializer();
        this.showPage(1, this.numberOfRowsOfTableToDisplay);
    }

    /**
     * Basic component initalization: number of rows, number of all items, number of pages.
     */
    private initializer() {
        let showRowsPerPage = this.rowsPerPage;
        let numberOfAllItems = DataContainer.getNumberOfRows();
        this.numberOfPages = Math.ceil(numberOfAllItems / showRowsPerPage);
    }

    /**
     * Updates the page number array, according to the current page number.
     * It uses a 5 element range for page number display.
     */
    private updateNumberOfPagesArray(currentLink: number, numberOfButtons: number) {

        if (this.numberOfPagesArray.length != 0) {
            this.numberOfPagesArray = [];
        }

        if (currentLink < 5) {
            for (let i = 1; i < 5 + 1; i++) {
                this.numberOfPagesArray.push(i);
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
    private createPager(currentPage: number) {

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
     * Hides the unwanted rows, and shows the current ones that need to be displayed.
     * @param page: needed page.
     * @param pageS: how many rows have to be displayed in the grid.
     */
    public showPage(page, pageS) {

        $("#gridTbody tr").hide();
        $("#current_page").val(page);
        $("#gridTbody tr").each(function (n) {
            if (n >= pageS * (page - 1) && n < pageS * page)
                $(this).show();
        });
        let pager = this.createPager(page);
    }

    public nextPage() {
        let newPage = parseInt($('#current_page').val()) + 1;
        this.showPage(newPage, this.numberOfRowsOfTableToDisplay);
    }

    public lastPage() {
        let newPage = this.numberOfPages;
        $('#current_page').val(newPage);
        this.showPage(newPage, this.numberOfRowsOfTableToDisplay);
    }

    public firstPage() {
        let newPage = "1";
        $('#current_page').val(newPage);
        this.showPage(newPage, this.numberOfRowsOfTableToDisplay);
    }

    public previousPage() {
        let newPage = parseInt($('#current_page').val()) - 1;
        $('#current_page').val(newPage);
        this.showPage(newPage, this.numberOfRowsOfTableToDisplay)
    }
} 