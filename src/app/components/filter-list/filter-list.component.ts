import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Filter } from '../../models/filter.model';
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
    this.filterService.findAll().subscribe((data: Filter[]) => {
      this.filters = data
    });
  }

  openDialog(): void {
    this.formVisible = true;
  }

  dialogSubmitted(): void {
    this.formVisible = false;
  }

}
