import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'side-nav-link',
  templateUrl: './side-nav-link.component.html',
  styles: [
    `
      li {
        list-style: none;
      }
      .active {
        background: #000;
      }
    `,
  ],
})
export class SideNavLinkComponent {
  @Input() icon: string = '';
  @Input() text: string = '';
  @Input() link: string = '';
}
