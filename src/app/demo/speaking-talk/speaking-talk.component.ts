import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoService } from '../demo.service';
import { Talk } from '../talk';
import { Title } from '@angular/platform-browser';
import { ListType } from './conference-list/conference-list.component';

@Component({
  selector: 'app-demo-talk',
  templateUrl: './speaking-talk.component.html'
})
export class SpeakingTalkComponent implements OnInit {
  talk: Talk;
  listType = ListType;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private demoService: DemoService,
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

    this.talk.conferences.filter(x => x.date < 'today');
  }

  onBack(): void {
    this.router.navigate(['demo']);
  }
}
