import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { animate, AnimationBuilder, group, query, style } from '@angular/animations';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  @Input() duration = 3000;
  currentImageIndex = -1;
  @ViewChild('refSlideshow') refSlideshow: ElementRef;
  @Input() images: { id: string, imageSource: string, imageAlt: string }[];

  constructor(private animationBuilder: AnimationBuilder) {
  }

  ngOnInit(): void {
    this.toggleState();
  }

  private buildAndPlayAnimation(imageIndex: number) {
    const animationFactory = this.animationBuilder.build([
      group([
        query('#' + this.images[imageIndex].id, [
          style({
            left: 0,
            opacity: 1,
            position: 'absolute',
            right: 0,
            top: 0
          }),
          animate('.5s', style({ opacity: 0 }))
        ]),
        query('#' + this.images[this.nextImage(imageIndex)].id, [
          style({
            opacity: 0,
            position: 'static',
            visibility: 'visible'
          }),
          animate('.5s', style({ opacity: 1 }))
        ])
      ])
    ]);

    animationFactory.create(this.refSlideshow.nativeElement).play();
  }

  private toggleState() {
    const keepGoing = () => {
      this.currentImageIndex = this.nextImage(this.currentImageIndex);
      this.buildAndPlayAnimation(this.currentImageIndex);
    };
    setInterval(keepGoing, this.duration);
  }

  private nextImage(image: number) {
    return (image + 1) % this.images.length;
  }
}
