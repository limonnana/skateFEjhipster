import { ITrick } from 'app/shared/model/trick.model';

export interface IContributionForm {
  amount?: string;
  trick?: ITrick;
  fanId?: string;
  fanFullName?: string;
  phone?: string;
}

export class ContributionForm implements IContributionForm {
  constructor(public amount?: string, public trick?: ITrick, public fanId?: string, public fanFullName?: string, public phone?: string) {}
}
