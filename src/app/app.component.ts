import { UserService } from './components/user/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Jobs';
  appModeStyle: string = 'dark-mode';
  buttonStyle: string = 'element-on';
  darkMode: boolean = true;

  constructor() {

  }

  changeAppStyle() {
    if(this.appModeStyle == 'dark-mode') {
      this.appModeStyle = 'light-mode';
      this.buttonStyle = '';
      this.darkMode = false;
    }
    else {
      this.appModeStyle = 'dark-mode';
      this.buttonStyle = 'element-on';
      this.darkMode = true;
    }
   
   
  }
}
