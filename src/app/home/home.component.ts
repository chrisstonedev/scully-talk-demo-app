import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  images = [
    {
      id: 'scully-out-there',
      imageSource: '/assets/scully-out-there.webp',
      imageAlt: 'An open field with the Scully logo in black looming above, as though it were a spaceship.'
    },
    {
      id: 'angular-out-there',
      imageSource: '/assets/angular-out-there.webp',
      imageAlt: 'An open field with the Angular logo in black looming above, as though it were a spaceship.'
    }
  ];

  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Scully: The Angular Jamstack Is Out There');
  }
}
