import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  images = [{
    id: 'pro-2022',
    imageSource: '/assets/profile/pro-2022.webp',
    imageAlt: 'Photo of Chris Stone taken in 2022'
  }];

  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Chris Stone - Scully');
  }
}
