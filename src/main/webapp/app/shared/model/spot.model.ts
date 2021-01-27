export interface ISpot {
  id?: string;
  name?: string;
  imgPath?: string;
  description?: string;
}

export class Spot implements ISpot {
  constructor(public id?: string, public name?: string, public imgPath?: string, public description?: string) {}
}
