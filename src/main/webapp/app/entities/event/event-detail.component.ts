import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'app/shared/model/event.model';
import { IPlayer } from 'app/shared/model/player.model';
import { ITrick } from 'app/shared/model/trick.model';
import { IPhoto } from 'app/shared/model/photo.model';
import { DomSanitizer } from '@angular/platform-browser';

import { TrickService } from '../trick/trick.service';

@Component({
  selector: 'jhi-event-detail',
  templateUrl: './event-detail.component.html',
})
export class EventDetailComponent implements OnInit {
  event: IEvent | null = null;
  tricks?: ITrick[];
  players?: IPlayer[];
  photos?: IPhoto[];
  base64textString?: string;

  constructor(protected activatedRoute: ActivatedRoute, protected trickService: TrickService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ event }) => {
      this.event = event;
      this.tricks = event.tricks;
      this.players = event.players;
      this.photos = event.photos;
      const photo: IPhoto = event.photos[0];

      if (this.photos !== null) {
        this.base64textString = 'data:image/png;base64,' + photo.image!;
      }
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
  transform() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.base64textString!);
  }
}
