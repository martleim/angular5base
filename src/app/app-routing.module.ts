import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';     // Add this
import { AboutComponent } from './components/about/about.component';  // Add this
import { LoginComponent } from './components/login/login.component';  // Add this

import { AuthGuard } from './shared/_guards/auth.guard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'about/:id',
    component: AboutComponent
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
