import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Filter } from '../../models/filter.model';
import { CriteriaType, CriteriaCondition, CriteriaTypesDisplay, CriteriaConditionsDisplay } from '../../models/criteria.model';
import { FilterService } from '../../services/filter.service';
import { FilterCreateDialogComponent } from '../filter-create-dialog/filter-create-dialog.component';

@Component({
  selector: 'app-filter-list',
  standalone: true,
  imports: [CommonModule, FilterCreateDialogComponent, FormsModule],
  templateUrl: './filter-list.component.html'
})
export class FilterListComponent implements OnInit {

  formVisible: boolean = false;
  modalMode: boolean = true;
  filters: Filter[];

  constructor(private filterService: FilterService) {
  }

  ngOnInit() {
    this.updateFilters();
  }

  private updateFilters() {
    this.filterService.findAll().subscribe((data: Filter[]) => {
      this.filters = data
    });
  }

  openNonModal(): void {
    this.formVisible = true;
  }

  dialogSubmitted(result: boolean): void {
    this.formVisible = false;

    // Update the filter list if successful
    if (result) {
      this.updateFilters();
    }
  }

    displayType(type: CriteriaType): string {
      return CriteriaTypesDisplay[type];
    }

    displayCondition(condition: CriteriaCondition): string {
      return CriteriaConditionsDisplay[condition];
    }

}
