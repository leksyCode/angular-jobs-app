import {Component} from '@angular/core';
import { User } from '../../user/user';
import { UserService } from '../../user/user.service';

/**
 * @title Menu with icons
 */
@Component({
  selector: 'user-menu',
  templateUrl: 'user-menu.component.html',
})
export class UserMenuComponent {
    currentUser: User;
    constructor(private userService: UserService){
        this.currentUser = this.userService.authenticateUser('nikolaev.profent@gmail.com', 'password');
    }
}
