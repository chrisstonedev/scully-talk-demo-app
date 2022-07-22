import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuildService } from '../build.service';
import { BuildStep } from '../build-step';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-demo-talk',
  templateUrl: './build-step.component.html'
})
export class BuildStepComponent implements OnInit {
  talk: BuildStep;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private demoService: BuildService,
    private titleService: Title) {
  }

  ngOnInit(): void {
    const slug = this.activatedRoute.snapshot.paramMap.get('slug');
    const talks = this.demoService.getTalks();
    this.talk = talks.find((p) => p.slug === slug);
    if (this.talk === undefined) {
      this.onBack();
    }
    this.titleService.setTitle(this.talk.title + ' - Scully');
  }

  onBack(): void {
    this.router.navigate(['demo']);
  }
}
