import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomersInterface } from '../../customers-interface';
import { CustomersServiceService } from '../../customers-service.service';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styles: [],
})
export class CustomersTableComponent implements OnInit {
  @Input() customers: CustomersInterface[] = [];
  @Output() onDeleteCustomer = new EventEmitter();

  constructor(private CS: CustomersServiceService) {}

  deleteCustomer(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delete(id);
    this.onDeleteCustomer.emit(this.CS.getAll(() => {}));
  }

  ngOnInit(): void {}
}
