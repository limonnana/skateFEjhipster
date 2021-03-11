import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IFan } from 'app/shared/model/fan.model';
import { FanService } from './fan.service';
import { IUserDTO, UserDTO } from 'app/shared/model/userDTO.model';

@Component({
  selector: 'jhi-fan-update',
  templateUrl: './fan-update.component.html',
})
export class FanUpdateComponent implements OnInit {
  isSaving = false;
  fan?: IFan;

  editForm = this.fb.group({
    id: [],
    name: [null, [Validators.required]],
    lastName: [],
    email: [],
    phone: [],
    country: [],
  });

  constructor(protected fanService: FanService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ fan }) => {
      this.fan = fan;
      this.updateForm(fan);
    });
  }

  updateForm(fan: IFan): void {
    this.editForm.patchValue({
      id: fan.id,
      name: fan.user?.firstName,
      lastName: fan.user?.lastName,
      email: fan.user?.email,
      phone: fan.user?.phone,
      country: fan.user?.country,
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

  private createFromForm(): IUserDTO {
    return {
      ...new UserDTO(),
      id: this.editForm.get(['id'])!.value,
      login: this.editForm.get(['phone'])!.value,
      firstName: this.editForm.get(['name'])!.value,
      lastName: this.editForm.get(['lastName'])!.value,
      email: this.editForm.get(['email'])!.value,
      phone: this.editForm.get(['phone'])!.value,
      country: this.editForm.get(['country'])!.value,
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
