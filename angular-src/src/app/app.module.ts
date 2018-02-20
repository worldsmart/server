import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TopPostsComponent } from './components/top-posts/top-posts.component';
import { TopUsersComponent } from './components/top-users/top-users.component';
import { AboutComponent } from './components/about/about.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LogInComponent } from './components/log-in/log-in.component';

import { AuthService } from './services/auth.service';

const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'topposts', component: TopPostsComponent},
  {path:'topusers', component: TopUsersComponent},
  {path:'about', component: AboutComponent},
  {path:'register', component: SignInComponent},
  {path:'login', component: LogInComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TopPostsComponent,
    TopUsersComponent,
    AboutComponent,
    SignInComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
