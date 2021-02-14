import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class UserService {
  userLoggedIn = false;
  constructor(private http : HttpClient) {}

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

  getUserById(id) {
    return this.http.get('https://reqres.in/api/users/' + id);
  }

  createUser(user) {
    return this.http.post('https://reqres.in/api/users/', user);
  }
}
