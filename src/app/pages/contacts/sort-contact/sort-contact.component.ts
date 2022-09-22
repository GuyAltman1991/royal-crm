import { Component, OnInit } from '@angular/core';
import { ContactInterface } from '../contact-interface';
import { ContactsServiceService } from '../contacts-service.service';

@Component({
  selector: 'app-sort-contact',
  templateUrl: './sort-contact.component.html',
  styles: [],
})
export class SortContactComponent {
  constructor(private contactService: ContactsServiceService) {}
}
