import { RouterModule, Routes } from '@angular/router';

import {
  HomeComponent,
  ProjectComponent
} from './components/index';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'project/:id', component: ProjectComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
