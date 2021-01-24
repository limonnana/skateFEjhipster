import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IFan } from 'app/shared/model/fan.model';

@Component({
  selector: 'jhi-fan-detail',
  templateUrl: './fan-detail.component.html',
})
export class FanDetailComponent implements OnInit {
  fan: IFan | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ fan }) => (this.fan = fan));
  }

  previousState(): void {
    window.history.back();
  }
}
