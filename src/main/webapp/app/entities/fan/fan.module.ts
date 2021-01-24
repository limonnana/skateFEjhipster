import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterFrontEndSharedModule } from 'app/shared/shared.module';
import { FanComponent } from './fan.component';
import { FanDetailComponent } from './fan-detail.component';
import { FanUpdateComponent } from './fan-update.component';
import { FanDeleteDialogComponent } from './fan-delete-dialog.component';
import { fanRoute } from './fan.route';

@NgModule({
  imports: [JhipsterFrontEndSharedModule, RouterModule.forChild(fanRoute)],
  declarations: [FanComponent, FanDetailComponent, FanUpdateComponent, FanDeleteDialogComponent],
  entryComponents: [FanDeleteDialogComponent],
})
export class JhipsterFrontEndFanModule {}
