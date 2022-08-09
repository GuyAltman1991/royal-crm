import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContactInterface } from '../contact-interface';
import { ContactsServiceService } from '../contacts-service.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [],
})
export class ContactDetailsComponent implements OnInit {
  contact: ContactInterface | void = undefined;
  constructor(
    private router: ActivatedRoute,
    private CS: ContactsServiceService
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.contact = this.CS.getContact(id!);
    });
  }
}
