import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // templateUrl: './',
  // styleUrls: ['./app.component.scss'],
  template: `
    <router-outlet></router-outlet>
    <!-- <app-customers></app-customers> -->
  `
})
export class AppComponent implements OnInit {
  // title = 'Hello World using Data Binding';

  // title = 'Hello World using Data Binding';
  title: string;

  constructor() {

  }

  ngOnInit() {
    // we call a service to retreive data
    this.title =  'Hello World'

  }
}
