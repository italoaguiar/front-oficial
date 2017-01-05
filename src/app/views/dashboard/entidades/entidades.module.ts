import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing } from './entidades.routing';
import { EntidadesComponent } from './entidades.component';

@NgModule({
  imports: [ CommonModule, routing ],

  providers: [],

  declarations: [EntidadesComponent],

  exports: []
})

export class EntidadesModule {

}
