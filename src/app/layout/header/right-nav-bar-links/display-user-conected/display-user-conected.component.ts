import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/pages/Users/user.service';

@Component({
  selector: 'app-display-user-conected',
  templateUrl: './display-user-conected.component.html',
  styles: [],
})
export class DisplayUserConectedComponent {
  constructor(private US: UserService) {}
  userEmail: any;
  connected: boolean = false;

  logOut() {
    this.US.logOut();
  }
}
