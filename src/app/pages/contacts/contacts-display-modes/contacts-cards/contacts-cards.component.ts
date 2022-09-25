import { Component, Input, OnInit } from '@angular/core';
import { ContactInterface } from '../../contact-interface';

@Component({
  selector: 'app-contacts-cards',
  templateUrl: './contacts-cards.component.html',
  styles: [],
})
export class ContactsCardsComponent implements OnInit {
  @Input() contacts: ContactInterface[] = [];

  constructor() {}

  ngOnInit(): void {}
}
