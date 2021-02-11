import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EventService } from 'app/entities/event/event.service';
import { FanService } from 'app/entities/fan/fan.service';
import { IEvent } from 'app/shared/model/event.model';
import { Fan, IFan } from 'app/shared/model/fan.model';
import { ITrick } from 'app/shared/model/trick.model';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';

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
  selectedOption: any;

  states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  contributionForm = this.fb.group({
    amount: [],
    fan: [],
    trick: [],
    state: [],
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
    alert(this.selectedOption.id + ' ' + this.selectedOption.fullName);
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
