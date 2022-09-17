import { CssSelector } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactInterface } from '../../contact-interface';
import { ContactsServiceService } from '../../contacts-service.service';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styles: [],
})
export class ContactsTableComponent implements OnInit {
  @Input() contacts: ContactInterface[] = [];
  @Output() onDeletContact = new EventEmitter();

  constructor(private CS: ContactsServiceService) {}

  deleteContact(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delete(id);
    this.onDeletContact.emit(this.CS.getAll(() => {}));
  }

  ngOnInit(): void {}
}
