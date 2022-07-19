import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jamstack',
  templateUrl: './jamstack.component.html'
})
export class JamstackComponent {
  @Input() title = '';
  @Input() icon = '';
  @Input() description = '';
}
