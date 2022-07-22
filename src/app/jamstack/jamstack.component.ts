import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-work',
  templateUrl: './jamstack.component.html',
  styleUrls: ['./jamstack.component.scss']
})
export class JamstackComponent implements OnInit {
  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('What Is Jamstack? - Scully');
  }
}
