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
  createdAt: any;
  customer: CustomersInterface | void = undefined;
  constructor(
    private router: ActivatedRoute,
    private CS: CustomersServiceService
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.CS.getCustomer(id!, (customer: CustomersInterface) => {
        this.customer = customer;
        this.createdAt = new Date(customer.createdAt.seconds * 1000);
      });
    });
  }
}
