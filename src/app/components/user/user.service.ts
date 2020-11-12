
import { Injectable } from '@angular/core';

import { User } from './user';
import { Users } from './user-data';

@Injectable()
export class UserService {
  currentUser: User;

  constructor() {
  }

  getUserById(id: number): User {
    return Users.find(user => user.id === id);
  }

  getUserByEmail(email: string): User {
    return Users.find(user => user.email === email);
  }

  getUsers(): User[] {
    return Users;
  }

  addUser(user: User) {    
    Users.unshift(user);
  }


  authenticateUser(email: string, password: string) {
    this.currentUser = Users.find(user => user.email === email && user.password === password);
    localStorage.setItem('authUser', this.currentUser.id.toString());
  }

  getAuthenticatedUser() {
    return  this.getUserById(Number(localStorage.getItem('authUser')));
  }

  removeAuthenticatedUser() {
    localStorage.removeItem('authUser');
  }

  
}