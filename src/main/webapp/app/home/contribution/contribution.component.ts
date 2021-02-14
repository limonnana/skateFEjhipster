import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EventService } from 'app/entities/event/event.service';
import { FanService } from 'app/entities/fan/fan.service';
import { IEvent } from 'app/shared/model/event.model';
import { IFan } from 'app/shared/model/fan.model';
import { IContributionForm, ContributionForm } from './contribution.form';
import { ITrick } from 'app/shared/model/trick.model';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { Observable } from 'rxjs';

@Component({
  selector: 'jhi-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.scss'],
})
export class ContributionComponent implements OnInit {
  event?: IEvent | undefined;
  tricks?: ITrick[];
  fans: IFan[] = [];
  isSaving = false;
  selectedOption?: IFan;
  fanId?: string;

  contributionForm = this.fb.group({
    amount: [],
    fanId: [],
    fan: [],
    trick: [],
    phone: [],
  });

  constructor(private fb: FormBuilder, private eventService: EventService, private fanService: FanService) {}

  ngOnInit(): void {
    this.eventService.getActive().subscribe((res: HttpResponse<IEvent>) => {
      this.event = res.body || undefined;
      this.tricks = this.event?.tricks;
      this.updateForm(this.event!);
    });
    this.loadAll();
  }

  updateForm(event: IEvent): void {
    this.contributionForm.patchValue({
      tricks: event.tricks,
    });
  }

  loadAll(): void {
    this.fanService.query().subscribe((res: HttpResponse<IFan[]>) => (this.fans = res.body || []));
  }

  onSelect(event: TypeaheadMatch): void {
    this.selectedOption = event.item;
    if (this.selectedOption != null) {
      this.fanId = this.selectedOption.id;
      this.contributionForm.patchValue({
        phone: this.selectedOption.phone,
      });
    }
  }

  private createFromForm(): IContributionForm {
    return {
      ...new ContributionForm(),
      amount: this.contributionForm.get(['amount'])!.value,
      trickId: this.contributionForm.get(['trick'])!.value,
      fanId: this.fanId,
      phone: this.contributionForm.get(['phone'])!.value,
      fanFullName: this.contributionForm.get(['fan'])!.value,
    };
  }

  save(): void {
    this.isSaving = true;

    const contributionForm = this.createFromForm();

    this.subscribeToSaveResponse(this.fanService.create(contributionForm));
  }

  trackById(index: number, item: ITrick): string {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IEvent>>): void {
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

  previousState(): void {
    window.history.back();
  }
}
