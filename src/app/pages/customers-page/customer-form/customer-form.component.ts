import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styles: [],
})
export class CustomerFormComponent {
  constructor() {}
  @Output() submit = new EventEmitter();
  onSubmit({ valid, value }: NgForm) {
    if (valid) {
      this.submit.emit(value);
    }
  }
  resetForm(formName: NgForm) {
    formName.resetForm();
  }
}
