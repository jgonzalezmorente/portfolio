import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadOnViewDirective } from './directives/load-on-view.directive';
import { SectionTitleComponent } from './components/section-title/section-title.component';

@NgModule({
  declarations: [
    LoadOnViewDirective,
    SectionTitleComponent,
  ],
  imports: [
    CommonModule    
  ],
  exports: [
    LoadOnViewDirective,
    SectionTitleComponent,
  ]
})
export class SharedModule { }
