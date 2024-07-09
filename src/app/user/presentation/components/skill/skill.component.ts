import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-components-skill',
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {

  @Input({ required: true }) title!: string;

}
