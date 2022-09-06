import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersInterface } from '../customers-interface';
import { CustomersServiceService } from '../customers-service.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styles: [],
})
export class NewCustomerComponent {
  customers: Array<CustomersInterface> = [];
  constructor(
    private cs: CustomersServiceService,
    private routerServise: Router
  ) {}

  onSubmit(customer: CustomersInterface) {
    this.cs.add(customer, () => {
      this.routerServise.navigate(['/customers']);
    });
  }
}
