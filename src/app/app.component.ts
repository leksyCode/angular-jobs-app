import { UserService } from './components/user/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Jobs';
  appModelStyle: string = '';
  buttonStyle: string = '';

  constructor() {

  }

  changeAppStyle() {
    if(this.appModelStyle == 'dark-mode') {
      this.appModelStyle = 'light-mode';
      this.buttonStyle = '';
    }
    else {
      this.appModelStyle = 'dark-mode';
      this.buttonStyle = 'element-on';
    }
   
   
  }
}
