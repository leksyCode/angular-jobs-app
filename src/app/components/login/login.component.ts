import { Component, DoCheck} from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements DoCheck {

  currentUser: User;
  constructor(private userService: UserService) {
    
  }

  ngDoCheck() {
    this.currentUser = this.userService.getAuthenticatedUser();
  }

  signIn(email: string, password: string) {
    this.userService.authenticateUser(email, password);
  }
}
