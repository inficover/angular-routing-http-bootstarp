import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

export interface User {
  avatar: any;
  first_name;
  last_name;
  email;
}

export interface UserResp {
  data: User
}
@Injectable({
  providedIn: "root"
})
export class UserService {
  userLoggedIn = false;
  constructor(private http : HttpClient) {}

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

  getUserById(id) : Observable<UserResp> {
    return this.http.get('https://reqres.in/api/users/' + id) as Observable<UserResp>;
  }

  createUser(user) {
    return this.http.post('https://reqres.in/api/users/', user);
  }
}
