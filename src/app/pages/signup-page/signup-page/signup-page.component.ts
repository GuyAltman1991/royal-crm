import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersInterface } from '../../customers/customers-interface';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styles: [],
})
export class SignupPageComponent implements OnInit {
  constructor(private routerService: Router) {}

  ngOnInit(): void {}

  onSubmit({ value, valid }: NgForm) {
    console.log(value);
    console.log(valid);
    this.routerService.navigate(['/login-page']);
  }

  reset(resetForm: NgForm) {
    resetForm.resetForm();
  }
}
