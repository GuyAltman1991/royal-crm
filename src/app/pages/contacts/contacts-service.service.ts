import { Injectable } from '@angular/core';

import { ContactInterface } from './contact-interface';
@Injectable({
  providedIn: 'root',
})
export class ContactsServiceService {
  private contacts: ContactInterface[] = [
    {
      _id: '118154',
      firstName: 'Avi',
      lastName: 'Bababi',
      email: 'avi@gmail.com',
      phone: '050-5554444',
      address: {
        country: 'israel',
        city: 'tel-aviv',
        street: 'rotshild',
        houseNumber: 0,
        zip: 1234,
      },
      createdAt: new Date(),
      age: 32,
      birthDay: new Date('July 20, 1957'),
    },
    {
      _id: '248514',
      firstName: 'yoav',
      lastName: 'alon',
      email: 'yoav@gmail.com',
      phone: '050-0000000',
      address: {
        country: 'israel',
        city: 'ramat-gan',
        street: 'hroe',
        houseNumber: 0,
        zip: 1234,
      },
      createdAt: new Date(),
      notes: 'a very bad contact!',
      age: 48,
      birthDay: new Date('December 17, 1995'),
    },
  ];

  getAll(): ContactInterface[] {
    return this.contacts;
  }

  add(contact: ContactInterface) {
    contact._id = String(this.contacts.length) + new Date() + Math.random();
    contact.createdAt = new Date();
    this.contacts.push(contact);
    console.log(this.contacts);
    return;
  }

  getContact(id: string, cb: Function): ContactInterface | void {
    const contact = this.contacts.find(
      (contact: ContactInterface) => contact._id === id
    );
    return cb(contact);
  }

  delete(id: string) {
    let contactIndex = this.contacts.findIndex(
      (contact: ContactInterface) => contact._id === id
    );
    if (contactIndex === -1) return;
    this.contacts.splice(contactIndex, 1);
  }

  edit(contact: ContactInterface) {
    let index = this.contacts.findIndex(
      (contactFromDb) => contactFromDb._id === contact._id
    );
    if (index === -1) return;

    this.contacts[index] = contact;
  }
}
