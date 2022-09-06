import { Injectable } from '@angular/core';
import {
  collection,
  CollectionReference,
  DocumentData,
  Firestore,
  onSnapshot,
} from '@angular/fire/firestore';

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
      notes: 'Impatient!',

      birthDay: new Date('December 17, 1995'),
    },
  ];

  collectionRef: CollectionReference<DocumentData> = collection(
    this.FS,
    'contacts'
  );

  // getAll() {
  //   let contacts: any = [];
  //   onSnapshot(this.collectionRef, (snapShotData) => {
  //     snapShotData.docs.forEach((contact) => {
  //       contacts.push({ ...contact.data(), _id: contact.id });
  //     });
  //   });
  //   return contacts;
  // }

  getAll(): ContactInterface[] {
    return this.contacts;
  }

  constructor(private FS: Firestore) {}

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
