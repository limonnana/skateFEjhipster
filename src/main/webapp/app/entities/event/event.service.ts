import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IEvent } from 'app/shared/model/event.model';
import { IAddTrick } from 'app/shared/model/addTrick.model';
import { ITrick } from 'app/shared/model/trick.model';
import { IAddPlayer } from 'app/shared/model/addPlayer.model';
import { IPlayer } from 'app/shared/model/player.model';

type EntityResponseType = HttpResponse<IEvent>;
type EntityArrayResponseType = HttpResponse<IEvent[]>;

@Injectable({ providedIn: 'root' })
export class EventService {
  public resourceUrl = SERVER_API_URL + 'api/events';
  public resourceUrlHome = SERVER_API_URL + 'api';

  constructor(protected http: HttpClient) {}

  create(event: IEvent): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(event);
    return this.http
      .post<IEvent>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(event: IEvent): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(event);
    return this.http
      .put<IEvent>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  addImage(fileData: FormData): Observable<EntityResponseType> {
    return this.http
      .post<IEvent>(`${this.resourceUrl}/addImage`, fileData, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  deleteImage(fileData: FormData): Observable<EntityResponseType> {
    return this.http
      .post<IEvent>(`${this.resourceUrl}/deleteImage`, fileData, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  addTrick(addTrick: IAddTrick): Observable<EntityResponseType> {
    return this.http
      .put<ITrick>(`${this.resourceUrl}/addTrick`, addTrick, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  addPlayer(addPlayer: IAddPlayer): Observable<EntityResponseType> {
    return this.http
      .put<IPlayer>(`${this.resourceUrl}/addPlayer`, addPlayer, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: string): Observable<EntityResponseType> {
    return this.http
      .get<IEvent>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  getActive(): Observable<EntityResponseType> {
    return this.http
      .get<IEvent>(`${this.resourceUrl}/active`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IEvent[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: string): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(event: IEvent): IEvent {
    const copy: IEvent = Object.assign({}, event, {
      day: event.day && event.day.isValid() ? event.day.format(DATE_FORMAT) : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.day = res.body.day ? moment(res.body.day) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((event: IEvent) => {
        event.day = event.day ? moment(event.day) : undefined;
      });
    }
    return res;
  }
}
