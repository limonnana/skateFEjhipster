import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'app/shared/model/event.model';
import { IPlayer } from 'app/shared/model/player.model';
import { ITrick } from 'app/shared/model/trick.model';
import { IPhoto } from 'app/shared/model/photo.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TrickService } from '../trick/trick.service';
import { EventService } from './event.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

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

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected trickService: TrickService,
    private sanitizer: DomSanitizer,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ event }) => {
      this.event = event;
      this.tricks = event.tricks;
      this.players = event.players;
      this.photos = event.photos;
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
  transform(title: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.getPhotoSrcFromArray(title)!);
  }

  getPhotoSrcFromArray(title: string): string | undefined {
    const photoFromArray = this.photos?.find(photo => photo.title === title);
    const src = photoFromArray?.image;
    return 'data:image/png;base64,' + src;
  }

  getPhotoIdFromArray(title: string): string | undefined {
    const photoFromArray = this.photos?.find(photo => photo.title === title);
    const src = photoFromArray?.id;
    return src;
  }

  delete(title: string): void {
    this.subscribeToSaveResponse(this.eventService.deleteImage(this.createForm(title)!));
  }

  private createForm(title: string): FormData {
    const formData = new FormData();
    formData.append('idEvent', this.event?.id as string);
    formData.append('idImage', this.getPhotoIdFromArray(title)!);

    return formData;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IEvent>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {}
}
