import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  CollectionReference,
  DocumentData,
  Firestore,
  onSnapshot,
  serverTimestamp,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from '@angular/fire/firestore';
import { async } from '@firebase/util';
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

  collectionRef: CollectionReference<DocumentData> = collection(
    this.FS,
    'customers'
  );

  getAll() {
    let customers: any = [];
    onSnapshot(this.collectionRef, (snapShotData) => {
      snapShotData.docs.forEach((customer) => {
        customers.push({
          ...customer.data(),
          _id: customer.id,
        });
      });
    });
    return customers;
  }

  constructor(private FS: Firestore) {}

  add(customer: CustomersInterface, cb: Function) {
    customer.createdAt = serverTimestamp();
    console.log(customer);

    addDoc(this.collectionRef, customer)
      .then(() => cb())
      .catch((error) => console.log(error));
  }

  delete(id: string) {
    const docRef = doc(this.FS, 'customers', id);
    deleteDoc(docRef).catch((error) => console.log(error));
  }

  edit(customer: CustomersInterface, id: string, cb: Function) {
    const docRef = doc(this.FS, 'customers', id);
    updateDoc(docRef, { ...customer })
      .then(() => cb())
      .catch((error) => console.log(error));
  }

  async getCustomer(id: string, cb: Function) {
    try {
      const docRef = doc(this.FS, 'customers', id);
      const result = await getDoc(docRef);
      const customer = { ...result.data(), _id: result.id };
      cb(customer);
      console.log(customer);
    } catch (error) {
      console.log(error);
    }
  }
}
