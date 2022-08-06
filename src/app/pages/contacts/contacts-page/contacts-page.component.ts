import { Component } from '@angular/core';
import { ContactInterface } from '../contact-interface';
import { ContactsServiceService } from '../contacts-service.service';

@Component({
  selector: 'contacts-page',
  templateUrl: '../contacts-page/contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css'],
})
export class ContactsPageComponent {
  contacts: Array<ContactInterface> = [];

  constructor(contactService: ContactsServiceService) {
    this.contacts = contactService.getAll();
  }
}
