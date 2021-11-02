import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {animate, AnimationBuilder, group, query, style} from '@angular/animations';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentTaglineIndex = -1;
  @ViewChild('refTaglines') refTaglines: ElementRef;
  taglines = [
    {id: 'tagline-puzzle', text: 'Software crafter'},
    {id: 'tagline-crafter', text: 'Analytical puzzle solver'},
    {id: 'tagline-learner', text: 'Eager learner'},
    {id: 'tagline-team', text: 'Versatile team player'}
  ];
  clickerCount = 0;

  constructor(private animationBuilder: AnimationBuilder,
              private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.toggleState();
    this.apiService.getCounter().subscribe(x => this.clickerCount = x.count);
  }

  incrementClicker() {
    this.apiService.incrementCounter().subscribe(success => {
      console.log(success);
      if (success)
        this.clickerCount++;
    });
  }

  private buildAndPlayAnimation(taglineIndex: number) {
    const animationFactory = this.animationBuilder.build([
      group([
        query('#' + this.taglines[taglineIndex].id, [
          style({
            left: 0,
            opacity: 1,
            position: 'absolute',
            right: 0,
            top: 0
          }),
          animate('.5s', style({opacity: 0}))
        ]),
        query('#' + this.taglines[this.nextTagline(taglineIndex)].id, [
          style({
            background: taglineIndex % 2 === 0 ? '#013' : '#014',
            opacity: 0,
            position: 'static',
            visibility: 'visible'
          }),
          animate('.5s', style({opacity: 1}))
        ])
      ])
    ]);

    animationFactory.create(this.refTaglines.nativeElement).play();
  }

  private toggleState() {
    const keepGoing = () => {
      this.currentTaglineIndex = this.nextTagline(this.currentTaglineIndex);
      this.buildAndPlayAnimation(this.currentTaglineIndex);
    };
    setInterval(keepGoing, 3000);
  }

  private nextTagline(tagline: number) {
    return (tagline + 1) % this.taglines.length;
  }
}
