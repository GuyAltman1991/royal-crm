import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  DocumentData,
  Firestore,
  getDoc,
  onSnapshot,
  serverTimestamp,
} from '@angular/fire/firestore';
import { updateDoc } from '@firebase/firestore';

import { ContactInterface } from './contact-interface';
@Injectable({
  providedIn: 'root',
})
export class ContactsServiceService {
  collectionRef: CollectionReference<DocumentData> = collection(
    this.FS,
    'contacts'
  );

  getAll(cb: Function) {
    let contacts: any = [];
    const unsubscribeGetAll = onSnapshot(this.collectionRef, (snapShotData) => {
      snapShotData.docs.forEach((contact) => {
        contacts.push({
          ...contact.data(),
          _id: contact.id,
        });
      });
    });
    return cb(contacts, unsubscribeGetAll);
  }

  constructor(private FS: Firestore) {}

  add(contact: ContactInterface, cb: Function) {
    contact.createdAt = serverTimestamp();
    console.log(contact);

    addDoc(this.collectionRef, contact)
      .then(() => cb())
      .catch((error) => console.log(error));
  }

  delete(id: string) {
    const docRef = doc(this.FS, 'contacts', id);
    deleteDoc(docRef).catch((error) => console.log(error));
  }

  edit(contact: ContactInterface, id: string, cb: Function) {
    const docRef = doc(this.FS, 'contacts', id);
    updateDoc(docRef, { ...contact })
      .then(() => cb())
      .catch((error) => console.log(error));
  }

  async getContact(id: string, cb: Function) {
    try {
      const docRef = doc(this.FS, 'contacts', id);
      const result = await getDoc(docRef);
      const contact = { ...result.data(), _id: result.id };
      cb(contact);
      console.log(contact);
    } catch (error) {
      console.log(error);
    }
  }
}
