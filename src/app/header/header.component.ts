import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  authService: AuthService;
  username: string;
  country: string;

  constructor(authService: AuthService) {
    this.authService = authService;
    this.username = "";
    this.country = "";
  }

  showLogin(): boolean {
    return !this.authService.isAuth();
  }

  showUsername(): boolean {
    let showLogin = this.showLogin();

    if (!showLogin) {
      this.username = this.authService.auth.username;
      this.country = this.authService.auth.country;
    }

    return !showLogin;
  }
}
