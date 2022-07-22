import {Component, OnInit} from '@angular/core';
import {DemoService} from "../demo.service";
import {Talk} from "../talk";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  talks: Talk[] = [];

  constructor(private demoService: DemoService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Demo - Scully');
    this.loadTalks();
  }

  loadTalks() {
    this.talks = this.getAllTalks();
  }

  getAllTalks(): Talk[] {
    return this.demoService.getTalks();
  }
}
