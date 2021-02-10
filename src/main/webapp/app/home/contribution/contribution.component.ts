import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EventService } from 'app/entities/event/event.service';
import { IEvent } from 'app/shared/model/event.model';
import { ITrick } from 'app/shared/model/trick.model';

@Component({
  selector: 'jhi-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.scss'],
})
export class ContributionComponent implements OnInit {
  event?: IEvent | undefined;
  tricks?: ITrick[];
  isSaving = false;

  contributionForm = this.fb.group({
    amount: [],
    fan: [],
    trick: [],
  });

  constructor(private fb: FormBuilder, private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getActive().subscribe((res: HttpResponse<IEvent>) => {
      this.event = res.body || undefined;
      this.tricks = this.event?.tricks;
      this.updateForm(this.event!);
    });
  }

  updateForm(event: IEvent): void {
    this.contributionForm.patchValue({
      tricks: event.tricks,
    });
  }
  /*

  private createFromForm(): IEvent {
    return {
      ...new Event(),
      id: this.editForm.get(['id'])!.value,
      day: this.editForm.get(['day'])!.value,
      dayString: this.editForm.get(['dayString'])!.value,
      name: this.editForm.get(['name'])!.value,
      spot: this.editForm.get(['spot'])!.value,
      active: this.editForm.get(['active'])!.value,
    };
  }
 */

  save(): void {
    this.isSaving = true;
  }

  trackById(index: number, item: ITrick): string {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }
}
