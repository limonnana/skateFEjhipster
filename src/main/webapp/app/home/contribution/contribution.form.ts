export interface IContributionForm {
  amount?: string;
  trickId?: string;
  fanId?: string;
  fanFullName?: string;
  phone?: string;
}

export class ContributionForm implements IContributionForm {
  constructor(public amount?: string, public trickId?: string, public fanId?: string, public fanFullName?: string, public phone?: string) {}
}
