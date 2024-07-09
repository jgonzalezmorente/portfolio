import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { ProfileActionsComponent } from './profile-actions/profile-actions.component';
import { SkillComponent } from './skill/skill.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';

@NgModule({
  declarations: [
    ProfileActionsComponent,
    SkillComponent,
    ProgressbarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ProfileActionsComponent,
    SkillComponent,
  ]
})
export class ComponentsModule { }
