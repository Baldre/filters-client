import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Filter } from '../../models/filter.model';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filter-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-list.component.html'
})
export class FilterListComponent implements OnInit {

  filters: Filter[];

  constructor(private filterService: FilterService) {
  }

  ngOnInit() {
    this.filterService.findAll().subscribe((data: Filter[]) => {
      this.filters = data
    });
  }
}
