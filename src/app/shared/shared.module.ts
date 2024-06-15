import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadOnViewDirective } from './directives/load-on-view.directive';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { TimelineComponent } from './components/timeline/timeline.component';

@NgModule({
  declarations: [
    LoadOnViewDirective,
    SectionTitleComponent,
    TimelineComponent,
  ],
  imports: [
    CommonModule    
  ],
  exports: [
    LoadOnViewDirective,
    SectionTitleComponent,
    TimelineComponent,
  ]
})
export class SharedModule { }
