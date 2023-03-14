import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
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
        console.log(response);
      }
    );
  }
}
