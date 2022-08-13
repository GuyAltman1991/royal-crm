import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CustomersInterface } from '../customers-interface';
import { CustomersServiceService } from '../customers-service.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styles: [],
})
export class CustomerDetailsComponent implements OnInit {
  customer: CustomersInterface | void = undefined;
  constructor(
    private router: ActivatedRoute,
    private CS: CustomersServiceService
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      const customer = this.CS.getCustomer(
        id!,
        (customer: CustomersInterface | void) => {
          return (this.customer = customer);
        }
      );
      if (customer) this.customer = customer;
    });
  }
}
