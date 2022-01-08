import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SpeakingService} from "../speaking.service";
import {Talk} from "../talk";
import {Title} from "@angular/platform-browser";
import {ListType} from './conference-list/conference-list.component';

@Component({
  selector: 'app-speaking-talk',
  templateUrl: './speaking-talk.component.html',
  styleUrls: ['./speaking-talk.component.scss']
})
export class SpeakingTalkComponent implements OnInit {
  talk: Talk;
  listType = ListType;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private speakingService: SpeakingService, private titleService: Title) {
  }

  ngOnInit(): void {
    const slug = this.activatedRoute.snapshot.paramMap.get('slug');
    const talks = this.speakingService.getTalks();
    this.talk = talks.find((p) => p.slug === slug);
    if (this.talk === undefined) {
      this.onBack();
    }
    this.titleService.setTitle(this.talk.title + ' - Chris Stone');

    this.talk.conferences.filter(x => x.date < 'today')
  }

  onBack(): void {
    this.router.navigate(['speaking']);
  }
}
