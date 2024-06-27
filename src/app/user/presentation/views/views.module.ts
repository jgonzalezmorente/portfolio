import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../../../shared/shared.module';
import { AboutViewComponent } from './about-view/about-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { IntroViewComponent } from './intro-view/intro-view.component';
import { ProjectsViewComponent } from './projects-view/projects-view.component';
import { ResumeViewComponent } from './resume-view/resume-view.component';

@NgModule({
  declarations: [
    IntroViewComponent,
    AboutViewComponent,
    ProjectsViewComponent,
    ResumeViewComponent,
    ContactViewComponent,
  ],
  imports: [
    CommonModule,    
    SharedModule,
    ComponentsModule,
  ],
  exports: [
    IntroViewComponent,
    AboutViewComponent,
    ProjectsViewComponent,
    ResumeViewComponent,
    ContactViewComponent,
  ]
})
export class ViewsModule { }
