import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginInterface } from '../login-interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [],
})
export class LoginPageComponent {
  login: LoginInterface = { email: '', password: '' };
  onSubmit({ value, valid }: NgForm) {
    console.log(value);
    console.log(valid);
  }
  resetForm(form: NgForm) {
    form.resetForm({ email: '', password: '' });
  }
}
