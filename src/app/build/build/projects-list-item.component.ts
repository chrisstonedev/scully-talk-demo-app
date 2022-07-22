import { Component, Input, ViewEncapsulation } from '@angular/core';

import { BuildService } from '../build.service';
import { Project } from '../project';

@Component({
  selector: 'app-item',
  templateUrl: './projects-list-item.component.html',
  styleUrls: ['./projects-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [BuildService],
})
export class ProjectsListItemComponent {
  @Input() project: Project;
  projectsService: BuildService;

  constructor(projectsService: BuildService) {
    this.projectsService = projectsService;
  }
}
