import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styles: [],
})
export class AboutPageComponent implements OnInit {
  arr: Array<any> = ['mosh', 'dav', 'ben', 'lav'];
  constructor() {}
  clientScrips = ['html', 'css', 'javascript', 'angular', 'react'];

  ngOnInit(): void {}
}
