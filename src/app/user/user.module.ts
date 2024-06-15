import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { IntroViewComponent } from './views/intro-view/intro-view.component';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { ExperienceViewComponent } from './views/experience-view/experience-view.component';
import { ProjectsViewComponent } from './views/projects-view/projects-view.component';
import { ResumeViewComponent } from './views/resume-view/resume-view.component';
import { ContactViewComponent } from './views/contact-view/contact-view.component';
import { ProfileActionsComponent } from './components/profile-actions/profile-actions.component';

@NgModule({
  declarations: [
    PortfolioPageComponent,
    IntroViewComponent,
    AboutViewComponent,
    ExperienceViewComponent,
    ProjectsViewComponent,
    ResumeViewComponent,
    ContactViewComponent,
    ProfileActionsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
