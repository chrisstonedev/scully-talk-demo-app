import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jamstack',
  templateUrl: './jamstack.component.html',
  styleUrls: ['./jamstack.component.scss']
})
export class JamstackComponent {
  @Input() title = '';
  @Input() icon = '';
  @Input() description = '';
}
