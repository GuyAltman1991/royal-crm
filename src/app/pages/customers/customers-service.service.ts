import { Injectable } from '@angular/core';
import { CustomersInterface } from './customers-interface';

@Injectable({
  providedIn: 'root',
})
export class CustomersServiceService {
  private customers: CustomersInterface[] = [
    {
      _id: '118154',
      idCard: '203225448',
      firstName: 'david',
      lastName: 'banai',
      email: 'david@gmail.com',
      phone: '050-5554444',
      address: {
        country: 'israel',
        city: 'tel-aviv',
        street: 'ramle',
        houseNumber: 5,
        zip: 1234,
      },
      createdAt: new Date(),
      age: 29,
      birthDay: new Date('October 8, 1991'),
    },
    {
      _id: '248514',
      idCard: '15448754',
      firstName: 'shlomo',
      lastName: 'madrid',
      email: 'shlomo@gmail.com',
      phone: '050-0000000',
      birthDay: new Date('December 17, 1974'),
      age: 55,
      address: {
        country: 'israel',
        city: 'netivot',
        street: 'mafia',
        houseNumber: 154,
        zip: 1234,
      },
      createdAt: new Date(),
      notes: 'nice person!',
    },
  ];

  getAll(): CustomersInterface[] {
    return this.customers;
  }

  add(customer: CustomersInterface) {
    customer._id = String(this.customers.length) + new Date() + Math.random();
    customer.createdAt = new Date();

    this.customers.push(customer);
    console.log(this.customers);
  }
  delete(id: string) {
    let customerIndex = this.customers.findIndex(
      (customer: CustomersInterface) => customer._id === id
    );
    if (customerIndex === -1) return;
    this.customers.splice(customerIndex, 1);
  }

  edit(customer: CustomersInterface) {
    let index = this.customers.findIndex(
      (customerFromDb) => customerFromDb._id === customer._id
    );
    if (index === -1) return;
    this.customers[index] = customer;
  }

  getCustomer(id: string, cb: Function): CustomersInterface | void {
    const customer = this.customers.find(
      (customer: CustomersInterface) => customer._id === id
    );
    return cb(customer);
  }
}
