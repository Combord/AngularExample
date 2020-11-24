import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'simple-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  // tslint:disable-next-line: no-input-rename
  @Input('user') user: User;

  constructor(public dialog: MatDialog, public userService: UserService) {}

  openDeleteModal() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Biztos törölni kívánja a kiválasztott elemet?',
      },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.userService.removeUser(this.user.id);
      }
    });
  }
}
