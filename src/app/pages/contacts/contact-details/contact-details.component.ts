import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContactInterface } from '../contact-interface';
import { ContactsServiceService } from '../contacts-service.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [],
})
export class ContactDetailsComponent implements OnInit, OnDestroy {
  createdAt: any;
  contact: ContactInterface | void = undefined;
  constructor(private AR: ActivatedRoute, private CS: ContactsServiceService) {}

  ngOnInit(): void {
    this.AR.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.CS.getContact(id!, (contact: ContactInterface) => {
        this.contact = contact;
        this.createdAt = new Date(contact.createdAt.seconds * 1000);
      });
    });
  }
  ngOnDestroy(): void {}
}
