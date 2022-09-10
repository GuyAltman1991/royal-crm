import { formatCurrency } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersInterface } from '../../customers/customers-interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styles: [],
})
export class SignupPageComponent {
  constructor(private routerService: Router, private US: UserService) {}
  error: boolean = false;

  onSubmit(form: NgForm) {
    const { value, valid } = form;

    if (valid) {
      this.US.signupWithEmailAndPassword(value, (user: any): any => {
        if (user) {
          form.resetForm();
          this.error = false;
          return this.routerService.navigate(['customers']);
        }
        this.error = true;
        setTimeout(() => {
          form.resetForm();
          this.error = false;
          this.routerService.navigate(['']);
        }, 4000);
      });
    }
    console.log(value);
    console.log(valid);
  }

  resetForm(form: NgForm) {
    form.resetForm();
  }
}
