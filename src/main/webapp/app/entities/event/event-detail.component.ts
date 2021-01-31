import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'app/shared/model/event.model';
import { IPlayer } from 'app/shared/model/player.model';
import { ITrick } from 'app/shared/model/trick.model';
import { TrickService } from '../trick/trick.service';

@Component({
  selector: 'jhi-event-detail',
  templateUrl: './event-detail.component.html',
})
export class EventDetailComponent implements OnInit {
  event: IEvent | null = null;
  tricks?: ITrick[];
  players?: IPlayer[];

  constructor(protected activatedRoute: ActivatedRoute, protected trickService: TrickService) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ event }) => {
      this.event = event;
      this.tricks = event.tricks;
      this.players = event.players;
    });
  }

  trackId(index: number, item: ITrick): string {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  trackPlayerId(index: number, item: IPlayer): string {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  previousState(): void {
    window.history.back();
  }
}
