import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  onSubmit(form: NgForm) {
    let username = form.value.username;
    let password = form.value.password;
    let country = form.value.country;

    this.authService.register(username, password, country);
  }
}
