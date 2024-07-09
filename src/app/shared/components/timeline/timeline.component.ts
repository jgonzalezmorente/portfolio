import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input({required: true}) title!: string;

}
