import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  onSubmit(form: NgForm) {
    let username = form.value.username;
    let password = form.value.password;
    console.log(username);
    console.log(password);
  }
}
