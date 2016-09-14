import {Component, OnInit, Input} from 'angular2/core';
import {GridConfigurator} from './grid-configurator';
import {GridConfig} from './grid-configuration';

@Component({
    selector: 'grid-container',
    directives: [GridConfigurator],    
    templateUrl: '../html/grid-container.html'
})

export class GridContainer implements OnInit {

    ngOnInit() {
        console.log("\nletrejott GRIDCONTAINER");
    }     
} 




