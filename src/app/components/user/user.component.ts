import { Component, DoCheck, OnInit, SimpleChanges } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements DoCheck {
  currentUser: User;
  constructor(private userService: UserService) {
  }

  ngDoCheck(){
    this.currentUser = this.userService.getAuthenticatedUser();
  }

  signOut() {
    this.userService.removeAuthenticatedUser();
  }
}
