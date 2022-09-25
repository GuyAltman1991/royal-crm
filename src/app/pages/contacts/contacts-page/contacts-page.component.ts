import { Component } from '@angular/core';
import { ControllerInterface } from 'src/app/components/display-mode-controllers/controller-interface';
import { CategoryInterface } from 'src/app/components/search-bar/category-interface';
import { ContactInterface } from '../contact-interface';
import { ContactsServiceService } from '../contacts-service.service';

@Component({
  selector: 'contacts-page',
  templateUrl: '../contacts-page/contacts-page.component.html',
  styleUrls: ['contacts-page.component.css'],
})
export class ContactsPageComponent {
  contactsData: Array<ContactInterface> | any = undefined;
  contacts: Array<ContactInterface> = [];
  categories: Array<CategoryInterface> = [
    { name: 'First Name', value: 'firstName' },
    { name: 'Last name', value: 'lastName' },
    { name: 'Email', value: 'email' },
    { name: 'Phone', value: 'phone' },
    { name: 'Notes', value: 'notes' },
  ];

  display: string = 'table';
  dataRecived: boolean = false;
  unsubscribeGetAll: Function = () => {};

  controllers: ControllerInterface[] = [
    { icon: 'fa fa-table-list', value: 'table' },
    { icon: 'fa fa-folder', value: 'folder' },
    { icon: 'fas fa-th', value: 'cards' },
    { icon: 'fa-solid fa-arrow-left-long', value: 'hebrew' },
  ];

  constructor(private contactService: ContactsServiceService) {}

  onSearch(array: ContactInterface[]) {
    this.contacts = array;
  }

  onChangeDisplay(display: string) {
    this.display = display;
  }

  deleteContact(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.contactService.delete(id);
    this.contactsData = this.contactService.getAll(() => {});
    this.contacts = this.contactsData;
  }

  ngOnInit() {
    this.contactService.getAll(
      (contacts: ContactInterface[], unsubscribeGetAll: Function) => {
        this.contactsData = contacts;
        this.contacts = this.contactsData;
        this.dataRecived = true;
        this.unsubscribeGetAll = unsubscribeGetAll;
      }
    );
  }

  ngOnDestroy(): void {
    this.unsubscribeGetAll();
  }
}
