import { Component, Input } from '@angular/core';
import { ContactInterface } from '../../contact-interface';

@Component({
  selector: 'contacts-folder',
  templateUrl: './contacts-folder.component.html',
  styles: [],
})
export class ContactsFolderComponent {
  @Input() contacts: Array<ContactInterface> = [];
}
