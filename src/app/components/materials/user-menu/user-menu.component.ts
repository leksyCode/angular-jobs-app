import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user/user';
import { UserService } from '../../user/user.service';

/**
 * @title Menu with icons
 */
@Component({
  selector: 'user-menu',
  templateUrl: 'user-menu.component.html',
})
export class UserMenuComponent implements DoCheck {
  currentUser: User;

  constructor(private userService: UserService, private _router: Router) {
    this.currentUser = this.userService.getAuthenticatedUser();
  }


  ngDoCheck(): void {
    this.currentUser = this.userService.getAuthenticatedUser();
  }

  signOut() {
    this.userService.removeAuthenticatedUser();
  }

  signIn() {
    this._router.navigate(['login']);
  }

  goToProfile() {
    this._router.navigate(['profile']);
  }
}
