import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { Criteria, CriteriaType, CriteriaCondition, CriteriaTypesDisplay, CriteriaConditionsDisplay } from '../../models/criteria.model';
import { Filter } from '../../models/filter.model';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filter-create-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbDatepickerModule],
  templateUrl: './filter-create-dialog.component.html',
  styleUrl: './filter-create-dialog.component.scss'
})
export class FilterCreateDialogComponent {
  @Input() modalMode: boolean = false;
  @Output() formSubmitEvent = new EventEmitter<boolean>();

  filter: Filter;

  criteriaTypes = CriteriaType;

  constructor(private filterService: FilterService) {
    this.filter = new Filter();
    this.filter.criteria = [this.defaultCriteria()];
  }

  onClose(): void {
    this.formSubmitEvent.emit(false);
  }

  onSubmit(): void {
    this.filterService.save(this.filter).subscribe(
      (result: any) => {
        this.formSubmitEvent.emit(true)
        this.filter = new Filter();
        this.filter.criteria = [this.defaultCriteria()];
      },
      (error: any) => {
        console.error('Error saving filter:', error);
      }
    );
  }

  addCriteria(): void {
    this.filter.criteria.push(this.defaultCriteria());
  }

  removeCriteria(criteria: Criteria): void {
    this.filter.criteria = this.filter.criteria.filter(e => e !== criteria);
  }

  canRemoveCriteria(): boolean {
    return this.filter.criteria.length > 1;
  }

  typeChanged(criteria: Criteria): void {
    criteria.compareValue = undefined;
    switch (criteria.type) {
      case CriteriaType.AMOUNT:
        criteria.condition = CriteriaCondition.MORE;
        return;
      case CriteriaType.DATE:
        criteria.condition = CriteriaCondition.FROM;
        return;
      case CriteriaType.TITLE:
        criteria.condition = CriteriaCondition.STARTS;
        return;
    }
  }

  private defaultCriteria() : Criteria {
    return new Criteria(CriteriaType.AMOUNT, CriteriaCondition.MORE);
  }

  criteriaConditionsFor(type: CriteriaType): string[] {
    switch (type) {
      case CriteriaType.AMOUNT:
        return [CriteriaCondition.MORE, CriteriaCondition.LESS, CriteriaCondition.EQUALS];
      case CriteriaType.DATE:
        return [CriteriaCondition.FROM, CriteriaCondition.TO, CriteriaCondition.EQUALS];
      case CriteriaType.TITLE:
        return [CriteriaCondition.STARTS, CriteriaCondition.ENDS, CriteriaCondition.CONTAINS, CriteriaCondition.EQUALS];
    }
    return [];
  }

  displayType(type: CriteriaType): string {
    return CriteriaTypesDisplay[type];
  }

  displayCondition(condition: string): string {
    return (CriteriaConditionsDisplay as Record<string, string>)[condition];
  }

}
