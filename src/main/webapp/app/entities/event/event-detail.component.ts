import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { IEvent } from 'app/shared/model/event.model';
import { ITrick } from 'app/shared/model/trick.model';
import { TrickService } from '../trick/trick.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'jhi-event-detail',
  templateUrl: './event-detail.component.html',
})
export class EventDetailComponent implements OnInit {
  event: IEvent | null = null;
  tricks?: ITrick[];

  constructor(protected activatedRoute: ActivatedRoute, protected trickService: TrickService) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ event }) => {
      this.event = event;
      this.tricks = event.tricks;
      //const zababa = 'hola';

      /*

    this.trickService
    .query({ filter: 'event-is-null' })
    .pipe(
      map((res: HttpResponse<ITrick[]>) => {
        return res.body || [];
      })
    )
    .subscribe((resBody: ITrick[]) => {
      if (!event.trick || !event.trick.id) {
        this.tricks = resBody;
      } else {
        this.trickService
          .find(event.trick.id)
          .pipe(
            map((subRes: HttpResponse<ITrick>) => {
              return subRes.body ? [subRes.body].concat(resBody) : resBody;
            })
          )
          .subscribe((concatRes: ITrick[]) => (this.tricks = concatRes));
      }
    });

    */
    });
  }

  trackId(index: number, item: ITrick): string {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  previousState(): void {
    window.history.back();
  }
}
