import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-components-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.scss'
})
export class ProgressbarComponent {
  @Input({ required: true }) text!: string;
  @Input({ required: true }) percent: number = 0;

}
