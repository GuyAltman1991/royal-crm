import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControllerInterface } from './controller-interface';

@Component({
  selector: 'app-display-mode-controllers',
  templateUrl: './display-mode-controllers.component.html',
  styles: [],
})
export class DisplayModeControllersComponent implements OnInit {
  @Input() controllers: Array<ControllerInterface> = [];
  @Output() onChangeDisplay = new EventEmitter();

  constructor() {}
  onChangeDisplayMode(display: string) {
    this.onChangeDisplay.emit(display);
  }
  ngOnInit(): void {}
}
