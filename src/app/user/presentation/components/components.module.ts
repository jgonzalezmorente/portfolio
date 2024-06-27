import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { ExperienceComponent } from './experience/experience.component';
import { ProfileActionsComponent } from './profile-actions/profile-actions.component';

@NgModule({
  declarations: [
    ExperienceComponent,
    ProfileActionsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ExperienceComponent,
    ProfileActionsComponent,
  ]
})
export class ComponentsModule { }
