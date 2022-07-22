import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {BuildService} from './build/build.service';
import {routeTransitionAnimations} from './route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BuildService],
  animations: [routeTransitionAnimations]
})
export class AppComponent {
  buildService: BuildService;

  constructor(buildService: BuildService) {
    this.buildService = buildService;
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState']
    );
  }
}
