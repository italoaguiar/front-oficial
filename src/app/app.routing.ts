import {RouterModule, Routes} from '@angular/router';
import {}

const routes: Routes = [
    { path: '', loadChildren: './views/home/home.module#HomeModule' },
    {
        path: 'dashboard', loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      
  },

  {path: 'bootstrap-examples', loadChildren: './views/bootstrap-examples/bootstrap-examples.module#BootstrapExamplesModule'},
];

export const routing = RouterModule.forRoot(routes);
