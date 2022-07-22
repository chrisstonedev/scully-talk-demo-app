import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DemoService} from '../demo.service';
import {DemoTask} from '../demo-task';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-demo-task',
  templateUrl: './demo-task.component.html',
  providers: [DemoService],
})
export class DemoTaskComponent implements OnInit {
  project: DemoTask;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private projectsService: DemoService,
    private titleService: Title,
  ) {
  }

  ngOnInit(): void {
    const slug = this.activatedRoute.snapshot.paramMap.get('slug');
    const projects = this.projectsService.getProjects();
    this.project = projects.find((p) => p.slug === slug);
    if (this.project === undefined) {
      this.onBack();
    }
    this.titleService.setTitle(this.project.name + ' - Scully');
  }

  onBack(): void {
    this.router.navigate(['build']);
  }
}
