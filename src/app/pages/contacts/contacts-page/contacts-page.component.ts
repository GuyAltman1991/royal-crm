import { Component, OnInit } from '@angular/core';
import { CategoryInterface } from 'src/app/components/search-bar/category-interface';
import { ContactInterface } from '../contact-interface';
import { ContactsServiceService } from '../contacts-service.service';

@Component({
  selector: 'contacts-page',
  templateUrl: '../contacts-page/contacts-page.component.html',
  styleUrls: ['contacts-page.component.css'],
})
export class ContactsPageComponent implements OnInit {
  contactsData: Array<ContactInterface> | void = undefined;
  contacts: Array<ContactInterface> = [];
  categories: Array<CategoryInterface> = [
    { name: 'First Name', value: 'firstName' },
    { name: 'Last name', value: 'lastName' },
    { name: 'Email', value: 'email' },
    { name: 'Phone', value: 'phone' },
    { name: 'Notes', value: 'notes' },
  ];

  constructor(private contactService: ContactsServiceService) {}

  onSearch(array: ContactInterface[]) {
    this.contacts = array;
  }

  deleteContact(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.contactService.delete(id);
    this.contactsData = this.contactService.getAll();
    this.contacts = [...this.contactsData];
  }
  ngOnInit(): void {
    this.contactsData = this.contactService.getAll();
    this.contacts = [...this.contactsData];
  }
}
