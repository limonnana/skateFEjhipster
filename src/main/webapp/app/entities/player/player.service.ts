import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IPlayer } from 'app/shared/model/player.model';
import { IUserDTO } from 'app/shared/model/userDTO.model';
import { IUser } from 'app/core/user/user.model';

type EntityResponseType = HttpResponse<IPlayer>;
type EntityArrayResponseType = HttpResponse<IPlayer[]>;

@Injectable({ providedIn: 'root' })
export class PlayerService {
  public resourceUrl = SERVER_API_URL + 'api/players';

  constructor(protected http: HttpClient) {}

  create(player: IUser): Observable<EntityResponseType> {
    return this.http.post<IPlayer>(this.resourceUrl, player, { observe: 'response' });
  }

  update(player: IUser): Observable<EntityResponseType> {
    return this.http.put<IPlayer>(this.resourceUrl, player, { observe: 'response' });
  }

  find(id: string): Observable<EntityResponseType> {
    return this.http.get<IPlayer>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IPlayer[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: string): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
