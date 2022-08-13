import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { CustomersInterface } from '../customers-interface';
import { CustomersServiceService } from '../customers-service.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styles: [],
})
export class EditCustomerComponent implements OnInit {
  customer: CustomersInterface | void = undefined;
  id: string | null = null;
  createdAt: any;

  constructor(
    private CS: CustomersServiceService,
    private router: Router,
    private AR: ActivatedRoute
  ) {}

  onSubmit(customer: CustomersInterface) {
    customer.createdAt = this.createdAt;
    customer._id = this.id!;
    this.CS.edit(customer);
    this.router.navigate(['/customers']);
  }

  resetForm() {
    this.CS.getCustomer(
      this.id!,
      (customer: CustomersInterface) => (this.customer = customer)
    );
  }

  ngOnInit(): void {
    this.AR.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.id = id;

      this.CS.getCustomer(id!, (customer: CustomersInterface) => {
        this.customer = customer;
        this.createdAt = customer.createdAt;
      });
    });
  }
}
