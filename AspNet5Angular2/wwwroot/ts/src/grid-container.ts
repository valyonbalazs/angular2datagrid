import {Component, OnInit, Input} from 'angular2/core';
import {GridConfigurator} from './grid-configurator';

@Component({
    selector: 'grid-container',
    directives: [GridConfigurator],    
    templateUrl: '../html/grid-container.html'
})

/**
* The outermost layer of the application.
* The only purpose of this component is to create a
* startable container for the inner modules.
*/
export class GridContainer implements OnInit {

    ngOnInit() {
        console.log("\nGRIDCONTAINER was initiatied and created");
    }     
}