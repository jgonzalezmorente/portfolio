import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadOnViewDirective } from './directives/load-on-view.directive';

@NgModule({
  declarations: [
    LoadOnViewDirective,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoadOnViewDirective
  ]
})
export class SharedModule { }
