import { RouterModule, Routes } from '@angular/router';
import { NgbdAlertSelfclosing } from './components/alert-selfclosing/alert-selfclosing.component';
import { UserComponent } from './components/user/user.component';
import { JobComponent } from './components/job/job.component';
import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobService } from './components/job/job.service';

const appRoutes: Routes = [
  {path: '', component:JobComponent},
  {path: 'profile', component:UserComponent}
]

@NgModule({
  declarations: [		 
    AppComponent,
    JobComponent,
    UserComponent,
    NgbdAlertSelfclosing
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
