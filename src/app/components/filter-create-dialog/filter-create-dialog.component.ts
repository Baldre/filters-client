import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-create-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-create-dialog.component.html'
})
export class FilterCreateDialogComponent {
  @Input() modalMode: boolean = false;
  @Output() formSubmitEvent = new EventEmitter<void>();

  onSubmit(): void {
    this.formSubmitEvent.emit();
  }

}
