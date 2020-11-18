import { RouterModule, Routes } from '@angular/router';
import { ApplyJobAllert } from './components/materials/apply-alert/apply-alert.component';
import { UserComponent } from './components/user/user.component';
import { JobComponent } from './components/job-list/job-list.component';
import {LoginComponent} from './components/login/login.component'
import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';

import { MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobService } from './components/job-list/job.service';
import { UserService } from './components/user/user.service';
import { UserMenuComponent } from './components/materials/user-menu/user-menu.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [
  {path: 'jobs', component:JobComponent},
  {path: '', component:JobComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component: RegisterComponent },
  {path: 'profile', component:UserComponent},
  {path: 'job-details/:id', component: JobDetailsComponent }
]

@NgModule({
  declarations: [		 
    AppComponent,
    JobComponent,
    UserComponent,
    LoginComponent,
    ApplyJobAllert,
    RegisterComponent,
    UserMenuComponent,
    JobDetailsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [JobService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
