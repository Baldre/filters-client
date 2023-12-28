export class Criteria {
  id: string;
  type: CriteriaType;
  condition: CriteriaCondition;
  compareValue?: string;

  constructor (type: CriteriaType, condition: CriteriaCondition) {
     this.type = type
     this.condition = condition
  }
}

export enum CriteriaType {
  AMOUNT = 'AMOUNT',
  TITLE = 'TITLE',
  DATE = 'DATE'
}

export enum CriteriaCondition {
  MORE = 'MORE',
  LESS = 'LESS',
  FROM = 'FROM',
  TO = 'TO',
  STARTS = 'STARTS',
  ENDS = 'ENDS',
  CONTAINS = 'CONTAINS',
  EQUALS = 'EQUALS'
}

export const CriteriaTypesDisplay: Record<CriteriaType, string> = {
  [CriteriaType.AMOUNT]: 'Amount',
  [CriteriaType.DATE]: 'Date',
  [CriteriaType.TITLE]: 'Title'
}

export const CriteriaConditionsDisplay: Record<CriteriaCondition, string> =  {
  [CriteriaCondition.MORE]: 'More',
  [CriteriaCondition.LESS]: 'Less',
  [CriteriaCondition.FROM]: 'From',
  [CriteriaCondition.TO]: 'To',
  [CriteriaCondition.STARTS]: 'Starts with',
  [CriteriaCondition.ENDS]: 'Ends with',
  [CriteriaCondition.CONTAINS]: 'Contains',
  [CriteriaCondition.EQUALS]: 'Equals'
}
