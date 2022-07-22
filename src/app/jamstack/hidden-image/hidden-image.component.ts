import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hidden-image',
  templateUrl: './hidden-image.component.html',
  styleUrls: ['./hidden-image.component.scss']
})
export class HiddenImageComponent {
  @Input() inputId = '';
  @Input() src = '';
  @Input() alt = '';
}
