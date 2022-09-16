import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ContactInterface } from '../contact-interface';
import { ContactsServiceService } from '../contacts-service.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styles: [],
})
export class EditContactComponent implements OnInit {
  contact: ContactInterface | void = undefined;
  id: string | null = null;
  createdAt: any;
  dataReceived: boolean = false;

  constructor(
    private CS: ContactsServiceService,
    private router: Router,
    private AR: ActivatedRoute
  ) {}

  onSubmit(contact: ContactInterface) {
    contact.createdAt = this.createdAt;

    this.CS.edit(contact, this.id!, () => this.router.navigate(['/contacts']));
  }

  resetForm() {
    this.CS.getContact(this.id!, (contact: ContactInterface) => {
      this.contact = contact;
    });
  }

  ngOnInit(): void {
    this.AR.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.id = id;

      this.CS.getContact(id!, (contact: ContactInterface) => {
        this.contact = contact;
        this.createdAt = contact.createdAt;
        this.dataReceived = true;
      });
    });
  }
}
