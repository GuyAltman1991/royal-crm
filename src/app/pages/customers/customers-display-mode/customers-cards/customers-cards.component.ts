import { Component, OnInit, Input } from '@angular/core';
import { CustomersInterface } from '../../customers-interface';

@Component({
  selector: 'app-customers-cards',
  templateUrl: './customers-cards.component.html',
  styles: [],
})
export class CustomersCardsComponent implements OnInit {
  @Input() customers: CustomersInterface[] = [];

  constructor() {}

  ngOnInit(): void {}
}
