import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './core/presentation/layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: 'user/:user',
    component: MainLayoutComponent,
    loadChildren: () => import( './user/user.module' ).then( m => m.UserModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
