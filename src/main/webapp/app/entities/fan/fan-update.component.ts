import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IFan, Fan } from 'app/shared/model/fan.model';
import { FanService } from './fan.service';

@Component({
  selector: 'jhi-fan-update',
  templateUrl: './fan-update.component.html',
})
export class FanUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    fullName: [null, [Validators.required]],
    email: [],
    phone: [],
  });

  constructor(protected fanService: FanService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ fan }) => {
      this.updateForm(fan);
    });
  }

  updateForm(fan: IFan): void {
    this.editForm.patchValue({
      id: fan.id,
      fullName: fan.fullName,
      email: fan.email,
      phone: fan.phone,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const fan = this.createFromForm();
    if (fan.id !== undefined) {
      this.subscribeToSaveResponse(this.fanService.update(fan));
    } else {
      this.subscribeToSaveResponse(this.fanService.create(fan));
    }
  }

  private createFromForm(): IFan {
    return {
      ...new Fan(),
      id: this.editForm.get(['id'])!.value,
      fullName: this.editForm.get(['fullName'])!.value,
      email: this.editForm.get(['email'])!.value,
      phone: this.editForm.get(['phone'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IFan>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
