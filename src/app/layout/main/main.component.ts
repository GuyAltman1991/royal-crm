import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/pages/Users/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  user: any;

  constructor(private US: UserService) {}

  ngOnInit(): void {
    this.US.getUserStatus((user: any) => (this.user = user));
  }
}
