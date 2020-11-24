import { Injectable } from '@angular/core';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // get API url from environment.*.ts
  private users: User[] = [
    {
      id: 1,
      name: 'Retard Turtle',
      email: 'retard@turtle.com',
      avatar: 'assets/images/turtle.png',
      description: 'This is a fking retard',
    },
    {
      id: 2,
      name: 'Poopi Cat',
      email: 'poopi@cat.com',
      avatar: 'assets/images/pooping_cat.png',
      description: 'This too',
    },
    {
      id: 3,
      name: 'Scared Kid',
      email: 'scared@kid.com',
      avatar: 'assets/images/suffer_kid.png',
      description: 'Same',
    },
    {
      id: 4,
      name: 'Cute Chita',
      email: 'cute@chita.com',
      avatar: 'assets/images/the_what.png',
      description: 'Yepp',
    },
    {
      id: 5,
      name: 'Wine Cat',
      email: 'wine@cat.com',
      avatar: 'assets/images/wine_cat.png',
      description: 'palacsinta',
    },
  ];

  constructor() {}

  // CRUD
  getUsers(): User[] {
    return this.users;
  }

  getUser(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  addUser(user: User) {
    user.id = this.users.sort((a, b) => b.id - a.id)[0].id + 1;
    this.users.push(user);
  }

  editUser(user: User) {
    const indexOfUser = this.users.findIndex((u) => u.id === user.id);
    user.avatar = this.users[indexOfUser].avatar;
    this.users.splice(indexOfUser, 1, user);
  }

  removeUser(userId: number) {
    const indexOfUser = this.users.findIndex((user) => user.id === userId);
    this.users.splice(indexOfUser, 1);
  }
}
