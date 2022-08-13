import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomersInterface } from '../customers-interface';

@Component({
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styles: [],
})
export class CustomerFormComponent {
  constructor() {}
  @Output() submit = new EventEmitter();
  @Output() reset = new EventEmitter();
  @Input() customer: CustomersInterface = {
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: {
      city: '',
      state: '',
      country: '',
      houseNumber: 0,
      street: '',
      zip: 0,
    },
    idCard: 0,
  };
  onSubmit({ valid, value }: NgForm) {
    if (valid) {
      this.submit.emit(value);
    }
  }
  resetForm(formName: NgForm) {
    formName.resetForm();
  }
}
