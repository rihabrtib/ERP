import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes =[

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },{path:'login',component: LoginComponent},

 
 {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }],canActivate:[AuthGaurdService]},
  {
    path: '**',
    redirectTo: 'dashboard',canActivate:[AuthGaurdService]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
