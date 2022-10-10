import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/pages/Users/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [],
})
export class UserDetailsComponent implements OnInit {
  constructor(private US: UserService) {}
  userName: any = this.US.showUserName();
  userCreatedDate: any = this.US.showUserCreatedDate();

  ngOnInit(): void {}
}
