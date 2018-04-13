import { RouterModule, Routes } from '@angular/router';

import {
  HomeComponent,
  ProjectComponent
} from './components/index';

const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'proyecto', component: ProjectComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);
