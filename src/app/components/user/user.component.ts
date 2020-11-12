import { Component, Inject, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  currentUser: User;
  constructor(private userService: UserService) {
    
  }

  ngOnInit() {
    this.currentUser = this.userService.authenticateUser('google@gmail.com', 'password');
  }

  
}
