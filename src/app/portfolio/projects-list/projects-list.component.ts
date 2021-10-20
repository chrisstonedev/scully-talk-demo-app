import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {PortfolioService} from '../portfolio.service';
import {Project} from '../project';

@Component({
  selector: 'app-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [PortfolioService],
})
export class ProjectsListComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectsService: PortfolioService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(() => {
      this.loadProjects();
    });
  }

  loadProjects() {
    this.projects = this.projectsService.getProjects().filter((x) => x.source.length > 0);
  }

  getAllProjects(): Project[] {
    return this.projectsService.getProjects();
  }
}
