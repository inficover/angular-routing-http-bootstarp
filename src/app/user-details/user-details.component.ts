import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(public route: ActivatedRoute, private userService: UserService) { }
  user;
  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      this.userService.getUserById(routeParams.id).subscribe((user:any) => {
        this.user = user.data;
      })
    });
  }

}
