import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ViewsModule } from './presentation/views/views.module';
import { PortfolioPageComponent } from './presentation/pages/portfolio-page/portfolio-page.component';

@NgModule({
  declarations: [
    PortfolioPageComponent,
  ],
  imports: [
    CommonModule,    
    UserRoutingModule,
    ViewsModule,    
  ]
})
export class UserModule { }
