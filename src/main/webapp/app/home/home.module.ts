import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterFrontEndSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { ContributionComponent } from './contribution/contribution.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserAnimationsModule, JhipsterFrontEndSharedModule, RouterModule.forChild(HOME_ROUTE), TypeaheadModule.forRoot()],
  declarations: [HomeComponent, ContributionComponent],
})
export class JhipsterFrontEndHomeModule {}
