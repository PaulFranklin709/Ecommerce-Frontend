import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  onSubmit(form: NgForm) {
    let username = form.value.username;
    let password = form.value.password;
    console.log(username);
    console.log(password);
  }
}
