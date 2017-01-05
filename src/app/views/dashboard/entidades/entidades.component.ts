import {Component, OnInit, OnDestroy} from '@angular/core';
@Component({
    selector: 'entidades-component',
    templateUrl: 'entidades.component.html',
    styleUrls: ['entidades.component.scss'],
})
export class EntidadesComponent implements OnInit, OnDestroy {

    constructor() {

    }

    ngOnInit() {
      console.log('Hello From the About Page');
    }

    ngOnDestroy() {

    }
}
