import { Component, Output } from '@angular/core';
import { SideNavLinkInterface } from './side-nav-link/side-nav-link-interface';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styles: [],
})
export class SideNavComponent {
  links: Array<SideNavLinkInterface> = [
    { icon: 'fas fa-users', text: 'customers', link: 'customers' },
    { icon: 'fas fa-address-book', text: 'contacts', link: 'contacts' },
  ];
}
