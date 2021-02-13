import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'angular-routing-http-bootstarp';
  users;
  constructor(public userService: UserService) {

  }
}
