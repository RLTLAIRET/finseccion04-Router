
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { Page404Component } from './page404/page404.component';


const routes: Routes=[
   {path:'**', component : Page404Component}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes)
  ],
  exports:[
    RouterModule,
    PagesRoutingModule,
    AuthRoutingModule
  ]
})
export class AppRoutingModule { }
