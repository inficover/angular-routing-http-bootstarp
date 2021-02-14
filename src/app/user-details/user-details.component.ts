import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService, User, UserResp } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(public route: ActivatedRoute, public userService: UserService) { }
  users$ : Observable<UserResp>;
  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      this.users$ = this.userService.getUserById(routeParams.id) as Observable<UserResp>;
    });
  }

}
