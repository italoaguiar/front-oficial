import {Component, OnInit, OnDestroy} from '@angular/core';
@Component({
    selector: 'dashboard-component',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {

    constructor() {

    }

    ngOnInit() {
      console.log('Hello From the About Page');
    }

    ngOnDestroy() {

    }
}
