import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Users/user.service';
import { LoginInterface } from '../login-interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [],
})
export class LoginPageComponent {
  error: boolean = false;
  counter: number = 0;
  threeFailedAttemptsToLogin: boolean = false;

  constructor(public US: UserService, private router: Router) {}

  onSubmit(form: NgForm) {
    const { value, valid } = form;
    if (valid) {
      this.US.loginWithEmailAndPassword(value, (user: any): any => {
        if (user) {
          form.reset();

          return this.router.navigate(['customers']);
        }
        this.error = true;

        setTimeout(() => {
          form.resetForm();
          this.counter++;
          this.error = false;
        }, 4000);

        if (this.counter === 2) {
          this.threeFailedAttemptsToLogin = true;
          setTimeout(() => {
            this.counter = 0;
            this.threeFailedAttemptsToLogin = false;
          }, 60_000);
        }
      });
    }

    console.log(value);
    console.log(valid);
  }
  resetForm(form: NgForm) {
    form.resetForm({ email: '', password: '' });
  }
}
