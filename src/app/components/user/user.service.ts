
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

 
  authenticateUser(email: string, password: string) {
    this.currentUser = Users.find(user => user.email === email && user.password === password);
    localStorage.setItem('authUser', this.currentUser.id.toString());
  }

  getAuthenticatedUser() {
    this.currentUser = this.getUserById(Number(localStorage.getItem('authUser')));
    return  this.currentUser;
  }


  removeAuthenticatedUser() {
    localStorage.removeItem('authUser');
  }

  registerAccount(user: User) {
    Users.unshift(user);
    this.authenticateUser(user.email, user.password);
  }
  
  genereteNewId(): number {
    return this.getUsers().length + 2;
  }

}