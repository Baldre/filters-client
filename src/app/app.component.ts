import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterListComponent } from './components/filter-list/filter-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, FilterListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Filters';
}
