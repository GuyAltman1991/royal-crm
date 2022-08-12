import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactInterface } from '../contact-interface';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styles: [],
})
export class ContactFormComponent {
  constructor() {}

  @Output() submit = new EventEmitter();
  @Output() reset = new EventEmitter();
  @Input() contact: ContactInterface = {
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
    birthDay: new Date(),
    notes: '',
  };
  onSubmit({ valid, value }: NgForm) {
    if (valid) {
      this.submit.emit(value);
    }
  }

  resetForm(form: NgForm) {
    // this.reset.emit();
    form.resetForm();
  }
}
