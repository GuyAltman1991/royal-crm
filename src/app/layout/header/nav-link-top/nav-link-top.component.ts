import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/pages/Users/user.service';

@Component({
  selector: 'nav-link-top',
  templateUrl: './nav-link-top.component.html',
  styles: [],
})
export class NavLinkTopComponent {
  @Input() to: string = '';
  @Input() text: string = '';
  constructor(private US: UserService) {}
  @Input() userEmail: any = this.US.userEmail;
}
