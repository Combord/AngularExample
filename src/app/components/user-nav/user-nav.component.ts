import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'simple-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss'],
})
export class UserNavComponent implements OnInit {
  users: User[];

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
