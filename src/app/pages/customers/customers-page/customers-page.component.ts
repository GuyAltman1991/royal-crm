import { Component, OnInit } from '@angular/core';
import { ControllerInterface } from 'src/app/components/display-mode-controllers/controller-interface';
import { CategoryInterface } from 'src/app/components/search-bar/category-interface';
import { CustomersInterface } from '../customers-interface';
import { CustomersServiceService } from '../customers-service.service';

@Component({
  selector: 'customers-page',
  templateUrl: './customers-page.component.html',
  styles: [],
})
export class CustomersPageComponent implements OnInit {
  customers: Array<CustomersInterface> = [];

  customerData: CustomersInterface[] = [];
  categories: Array<CategoryInterface> = [
    { name: 'First Name', value: 'firstName' },
    { name: 'Last name', value: 'lastName' },
    { name: 'Email', value: 'email' },
    { name: 'Phone', value: 'phone' },
    { name: 'id Card', value: 'idCard' },
  ];
  constructor(private customerService: CustomersServiceService) {}

  controllers: Array<ControllerInterface> = [
    { icon: 'fa fa-table-list', value: 'table' },
    { icon: 'fa fa-folder', value: 'folder' },
    { icon: 'fas fa-th', value: 'cards' },
  ];

  display: string = 'table';
  dataRecived: boolean = false;
  unsubscribeGetAll: Function = () => {};

  onSearch(array: CustomersInterface[]) {
    this.customers = array;
  }

  onChangeDisplay(display: string) {
    this.display = display;
  }

  deleteCustomer(array: Array<CustomersInterface>) {
    this.customerData = array;
    this.customers = this.customerData;
  }

  ngOnInit() {
    this.customerService.getAll(
      (customers: CustomersInterface[], unsubscribeGetAll: Function) => {
        this.customerData = customers;
        this.customers = this.customerData;
        this.dataRecived = true;
        this.unsubscribeGetAll = unsubscribeGetAll;
      }
    );
  }

  ngOnDestroy(): void {
    this.unsubscribeGetAll();
  }
}
