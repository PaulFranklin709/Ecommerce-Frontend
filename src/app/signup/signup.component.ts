import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  http: HttpClient;
  router: Router;

  constructor(http: HttpClient, router: Router) {
    this.http = http;
    this.router = router;
  }

  onSubmit(form: NgForm) {
    let username = form.value.username;
    let password = form.value.password;
    console.log(username);
    console.log(password);

    let url = "http://localhost:8080/users";

    this.http.post(url, {
      username: username, 
      password: password
    }).subscribe(
      (response: any) => {
        // https://www.digitalocean.com/community/tutorials/angular-navigation-routerlink-navigate-navigatebyurl
        this.router.navigateByUrl("/");
      },
      (error) => {console.log(error)}
      );
  }
}
