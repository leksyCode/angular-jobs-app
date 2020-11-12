import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentUser: User;
  Users: User[];
  constructor(private userService: UserService) {
    
  }

  ngOnInit() {
    this.currentUser = this.userService.authenticateUser('nikolaev.profent@gmail.com', 'password');
    this.Users = this.userService.getUsers();
  }

}
