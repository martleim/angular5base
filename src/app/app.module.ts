import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { FormsModule } from '@angular/forms';

import { MatSnackBarModule, MatSidenavModule, MatOptionModule, MatMenuModule, MatDatepickerModule, MatListModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatIconRegistry, MatCardModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { Configuration } from './app.constants';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './shared/services/data-service.module';
import { AuthenticationService } from './shared/services/authentication.service';

import {AuthGuard} from './shared/_guards/auth.guard'

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

import { NgUploaderModule } from 'ngx-uploader';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    HomeComponent,
    AboutComponent    
  ],
  imports: [
    HttpClientModule,
    
    BrowserModule,
    BrowserAnimationsModule,
    
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    
    MatSnackBarModule, MatSidenavModule, MatOptionModule, MatMenuModule, MatDatepickerModule, MatListModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatCardModule, 
    NavBarComponent,
    NgUploaderModule

  ],
  providers: [
    Configuration,
    AuthGuard,
    HttpClientModule, 
    DataService,
    MatIconRegistry,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
