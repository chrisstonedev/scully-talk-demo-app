import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.scss']
})
export class BenefitComponent {
  @Input() title = '';
  @Input() icon = '';
  @Input() description = '';
  @Input() inputId = '';
}
