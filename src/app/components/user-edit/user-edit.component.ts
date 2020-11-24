import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'simple-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  isNewUser: boolean;
  title: string;
  user: User;

  userFormGroup: FormGroup;

  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const userId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.isNewUser = userId === 0;

    if (this.isNewUser) {
      this.title = 'New user';
      this.user = {
        id: 0,
        name: '',
        email: '',
        avatar: '',
        description: '',
      } as User;
    } else {
      this.title = 'User edit';
      this.user = this.userService.getUser(userId);
    }

    this.userFormGroup = new FormGroup({
      id: new FormControl(this.user.id, [Validators.required]),
      name: new FormControl(this.user.name, [Validators.required]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email,
      ]),
      description: new FormControl(this.user.description, [
        Validators.required,
        Validators.maxLength(30),
      ]),
    });
  }

  save() {
    const user = this.userFormGroup.value as User;

    if (this.isNewUser) {
      user.avatar = 'assets/images/lick_boii.jpg';
      this.userService.addUser(user);
    } else {
      this.userService.editUser(user);
    }

    this.router.navigate(['']);
  }
}
