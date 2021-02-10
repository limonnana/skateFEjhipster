import { Routes } from '@angular/router';
import { ContributionComponent } from './contribution/contribution.component';

import { HomeComponent } from './home.component';

export const HOME_ROUTE: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      authorities: [],
      pageTitle: 'Welcome, Sean!',
    },
  },
  {
    path: '',
    component: ContributionComponent,
    data: {
      authorities: [],
      pageTitle: 'Trick contribution!',
    },
  },
];
