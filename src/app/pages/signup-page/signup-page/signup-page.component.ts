import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomersInterface } from '../../customers/customers-interface';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styles: [],
})
export class SignupPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit({ value, valid }: NgForm) {
    console.log(value);
    console.log(valid);
  }

  reset(resetForm: NgForm) {
    resetForm.resetForm();
  }
}
