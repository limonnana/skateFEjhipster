import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IFan, Fan } from 'app/shared/model/fan.model';
import { FanService } from './fan.service';
import { FanComponent } from './fan.component';
import { FanDetailComponent } from './fan-detail.component';
import { FanUpdateComponent } from './fan-update.component';

@Injectable({ providedIn: 'root' })
export class FanResolve implements Resolve<IFan> {
  constructor(private service: FanService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IFan> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((fan: HttpResponse<Fan>) => {
          if (fan.body) {
            return of(fan.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Fan());
  }
}

export const fanRoute: Routes = [
  {
    path: '',
    component: FanComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Fans',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: FanDetailComponent,
    resolve: {
      fan: FanResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Fans',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: FanUpdateComponent,
    resolve: {
      fan: FanResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Fans',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: FanUpdateComponent,
    resolve: {
      fan: FanResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Fans',
    },
    canActivate: [UserRouteAccessService],
  },
];
