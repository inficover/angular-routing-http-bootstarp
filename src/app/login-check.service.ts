import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginCheckService implements CanActivate{

  constructor(private userService: UserService, private router: Router,
    private messageService: MessageService) { }

  canActivate() {
    if (!this.userService.userLoggedIn) {
      this.messageService.add({severity:'success', summary:'Please Login', detail:'You need to login before visiting this page'});
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
