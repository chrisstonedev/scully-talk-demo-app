import { Component, Input, ViewEncapsulation } from '@angular/core';

import { DemoService } from '../demo.service';
import { DemoTask } from '../demo-task';

@Component({
  selector: 'app-item',
  templateUrl: './demo-list-item.component.html',
  styleUrls: ['./demo-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DemoService],
})
export class DemoListItemComponent {
  @Input() demoTask: DemoTask;
  projectsService: DemoService;

  constructor(projectsService: DemoService) {
    this.projectsService = projectsService;
  }
}
