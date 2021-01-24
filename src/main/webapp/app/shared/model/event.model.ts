import { Moment } from 'moment';
import { ITrick } from 'app/shared/model/trick.model';
import { IFan } from 'app/shared/model/fan.model';
import { IPlayer } from 'app/shared/model/player.model';

export interface IEvent {
  id?: string;
  day?: Moment;
  dayString?: string;
  tricks?: ITrick[];
  fans?: IFan[];
  players?: IPlayer[];
}

export class Event implements IEvent {
  constructor(
    public id?: string,
    public day?: Moment,
    public dayString?: string,
    public tricks?: ITrick[],
    public fans?: IFan[],
    public players?: IPlayer[]
  ) {}
}
