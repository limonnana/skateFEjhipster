import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IFan } from 'app/shared/model/fan.model';
import { FanService } from './fan.service';

@Component({
  templateUrl: './fan-delete-dialog.component.html',
})
export class FanDeleteDialogComponent {
  fan?: IFan;

  constructor(protected fanService: FanService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: string): void {
    this.fanService.delete(id).subscribe(() => {
      this.eventManager.broadcast('fanListModification');
      this.activeModal.close();
    });
  }
}
