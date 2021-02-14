import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'angular-routing-http-bootstarp';
  users;
  constructor(public userService: UserService, public router: Router, public dialog: MatDialog) {

  }

  openDialog() {
    this.dialog.open(CreateUserComponent, {
      width: '300px',
    });
  }
}
