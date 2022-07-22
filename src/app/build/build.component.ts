import {Component, OnInit} from '@angular/core';
import {BuildService} from "./build.service";
import {BuildStep} from "./build-step";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-demo',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildComponent implements OnInit {
  buildSteps: BuildStep[] = [];

  constructor(private demoService: BuildService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Demo - Scully');
    this.loadTalks();
  }

  loadTalks() {
    this.buildSteps = this.getAllTalks();
  }

  getAllTalks(): BuildStep[] {
    return this.demoService.getTalks();
  }
}
