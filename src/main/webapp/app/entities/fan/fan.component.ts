import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IFan } from 'app/shared/model/fan.model';
import { FanService } from './fan.service';
import { FanDeleteDialogComponent } from './fan-delete-dialog.component';

@Component({
  selector: 'jhi-fan',
  templateUrl: './fan.component.html',
})
export class FanComponent implements OnInit, OnDestroy {
  fans?: IFan[];
  eventSubscriber?: Subscription;

  constructor(protected fanService: FanService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.fanService.query().subscribe((res: HttpResponse<IFan[]>) => (this.fans = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInFans();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IFan): string {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInFans(): void {
    this.eventSubscriber = this.eventManager.subscribe('fanListModification', () => this.loadAll());
  }

  delete(fan: IFan): void {
    const modalRef = this.modalService.open(FanDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.fan = fan;
  }
}
