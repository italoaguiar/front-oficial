import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { EntidadesComponent } from './entidades.component';

const routes: Routes = [
    {path: '', component: EntidadesComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
