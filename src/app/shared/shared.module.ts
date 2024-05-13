import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadOnViewDirective } from './directives/load-on-view.directive';

@NgModule({
  declarations: [
    LoadOnViewDirective,
  ],
  imports: [
    CommonModule    
  ],
  exports: [
    LoadOnViewDirective
  ]
})
export class SharedModule { }
