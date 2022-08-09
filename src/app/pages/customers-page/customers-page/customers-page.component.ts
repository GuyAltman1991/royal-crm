import { Component } from '@angular/core';
import { CustomersInterface } from '../customers-interface';
import { CustomersServiceService } from '../customers-service.service';

@Component({
  selector: 'customers-page',
  templateUrl: './customers-page.component.html',
  styles: [],
})
export class CustomersPageComponent {
  customers: Array<CustomersInterface> = [];

  constructor(private customerService: CustomersServiceService) {
    this.customers = customerService.getAll();
  }
  deleteCustomer(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.customerService.delete(id);
  }
}
