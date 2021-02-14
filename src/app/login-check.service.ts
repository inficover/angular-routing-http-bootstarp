import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginCheckService implements CanActivate{

  constructor(private userService: UserService, private router: Router) { }

  canActivate() {
    if (!this.userService.userLoggedIn) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
