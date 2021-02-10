export interface IFan {
  id?: string;
  fullName?: string;
  email?: string;
  phone?: string;
}

export class Fan implements IFan {
  constructor(public id?: string, public fullName?: string, public email?: string, public phone?: string) {}
}
