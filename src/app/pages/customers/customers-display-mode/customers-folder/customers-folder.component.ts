import { Component, Input, OnInit } from '@angular/core';
import { CustomersInterface } from '../../customers-interface';

@Component({
  selector: 'customers-folder',
  templateUrl: './customers-folder.component.html',
  styles: [],
})
export class CustomersFolderComponent implements OnInit {
  @Input() customers: CustomersInterface[] = [];

  constructor() {}

  ngOnInit(): void {}
}
