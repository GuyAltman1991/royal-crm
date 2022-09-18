import { Component, OnInit } from '@angular/core';
import { ContactInterface } from '../contact-interface';
import { ContactsServiceService } from '../contacts-service.service';

@Component({
  selector: 'app-sort-contact',
  templateUrl: './sort-contact.component.html',
  styles: [],
})
export class SortContactComponent implements OnInit {
  contactsData: Array<ContactInterface> | any = undefined;
  contacts: Array<ContactInterface> = [];

  display: string = 'table';
  dataRecived: boolean = false;
  unsubscribeGetAll: Function = () => {};

  constructor(private contactService: ContactsServiceService) {}

  sortContactsAtoZ() {
    this.contacts;
  }

  ngOnInit() {
    this.contactService.getAll(
      (contacts: ContactInterface[], unsubscribeGetAll: Function) => {
        this.contactsData = contacts;
        this.contacts = this.contactsData;
        this.dataRecived = true;
        this.unsubscribeGetAll = unsubscribeGetAll;
        console.log(contacts);
      }
    );
  }

  ngOnDestroy(): void {
    this.unsubscribeGetAll();
  }
}
