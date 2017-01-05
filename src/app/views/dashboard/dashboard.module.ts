import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { EntidadesComponent } from './entidades/entidades.component';

@NgModule({
  imports: [ CommonModule, routing ],

  providers: [],

  declarations: [DashboardComponent],

  exports: []
})

export class DashboardModule {

}
