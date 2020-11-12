
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
    return this.currentUser;
  }
}