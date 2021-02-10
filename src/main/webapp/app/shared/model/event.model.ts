import { Moment } from 'moment';
import { ITrick } from 'app/shared/model/trick.model';
import { IFan } from 'app/shared/model/fan.model';
import { IPlayer } from 'app/shared/model/player.model';
import { ISpot } from 'app/shared/model/spot.model';
import { IPhoto } from './photo.model';

export interface IEvent {
  id?: string;
  day?: Moment;
  dayString?: string;
  name?: string;
  tricks?: ITrick[];
  fans?: IFan[];
  players?: IPlayer[];
  photos?: IPhoto[];
  spot?: ISpot;
  active?: boolean;
}

export class Event implements IEvent {
  constructor(
    public id?: string,
    public day?: Moment,
    public dayString?: string,
    public name?: string,
    public tricks?: ITrick[],
    public fans?: IFan[],
    public players?: IPlayer[],
    public photos?: IPhoto[],
    public spot?: ISpot,
    public active?: boolean
  ) {}
}
