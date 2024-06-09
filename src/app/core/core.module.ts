import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './presentation/layouts/main-layout/main-layout.component';
import { SidebarMenuComponent } from './presentation/components/sidebar-menu/sidebar-menu.component';
import { ViewLinkActiveDirective } from './presentation/directives/view-link-active.directive';

@NgModule({
  declarations: [
    MainLayoutComponent,
    SidebarMenuComponent,
    ViewLinkActiveDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
