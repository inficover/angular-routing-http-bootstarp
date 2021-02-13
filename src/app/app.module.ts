import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {Routes, RouterModule} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginCheckService } from './login-check.service';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'userlist', component: UserListComponent , canActivate: [LoginCheckService] },
  { path: 'userdetails/:id', component: UserDetailsComponent },
 ];
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    HomePageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
