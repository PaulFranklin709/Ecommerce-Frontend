import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http: HttpClient;
  router: Router;
  auth: any;
  hasAuth: boolean;

  constructor(http: HttpClient, router: Router) {
    this.http = http;
    this.router = router;
    this.auth = null;
    this.hasAuth = false;
  }

  register(username: string, password: string) {
    let url = "http://localhost:8080/users";

    this.http.post(url, {
      username: username, 
      password: password
    }).subscribe(
      (response: any) => {
        this.auth = response;
        this.hasAuth = true;
        // https://www.digitalocean.com/community/tutorials/angular-navigation-routerlink-navigate-navigatebyurl
        this.router.navigateByUrl("/");
      },
      (error) => {console.log(error)}
      );
  }

  isAuth(): boolean {
    return this.hasAuth;
  }
}
