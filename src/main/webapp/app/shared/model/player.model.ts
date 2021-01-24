export interface IPlayer {
  id?: string;
  name?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  country?: string;
}

export class Player implements IPlayer {
  constructor(
    public id?: string,
    public name?: string,
    public lastName?: string,
    public email?: string,
    public phone?: string,
    public country?: string
  ) {}
}
