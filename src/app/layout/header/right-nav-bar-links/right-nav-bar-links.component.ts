import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/pages/Users/user.service';

@Component({
  selector: 'app-right-nav-bar-links',
  templateUrl: './right-nav-bar-links.component.html',
  styles: [],
})
export class RightNavBarLinksComponent implements OnInit {
  user: any;
  @Input() userEmail: any = this.US.userEmail;
  constructor(private US: UserService) {}

  ngOnInit(): void {
    this.US.getUserStatus((user: any) => (this.user = user));
  }
}
