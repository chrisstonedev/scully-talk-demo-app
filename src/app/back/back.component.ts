import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html'
})
export class BackComponent {
  @Input() routerLink;
}
