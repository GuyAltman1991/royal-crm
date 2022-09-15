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
  collectionRef: CollectionReference<DocumentData> = collection(
    this.FS,
    'customers'
  );

  getAll(cb: Function) {
    let customers: any = [];
    const unsubscribeGetAll = onSnapshot(this.collectionRef, (snapShotData) => {
      snapShotData.docs.forEach((customer) => {
        customers.push({
          ...customer.data(),
          _id: customer.id,
        });
      });
    });
    return cb(customers, unsubscribeGetAll);
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
