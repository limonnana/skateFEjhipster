import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IFan } from 'app/shared/model/fan.model';

type EntityResponseType = HttpResponse<IFan>;
type EntityArrayResponseType = HttpResponse<IFan[]>;

@Injectable({ providedIn: 'root' })
export class FanService {
  public resourceUrl = SERVER_API_URL + 'api/fans';

  constructor(protected http: HttpClient) {}

  create(fan: IFan): Observable<EntityResponseType> {
    return this.http.post<IFan>(this.resourceUrl, fan, { observe: 'response' });
  }

  update(fan: IFan): Observable<EntityResponseType> {
    return this.http.put<IFan>(this.resourceUrl, fan, { observe: 'response' });
  }

  find(id: string): Observable<EntityResponseType> {
    return this.http.get<IFan>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IFan[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: string): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
