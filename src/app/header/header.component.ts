import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FlagService } from '../flag.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  authService: AuthService;
  flagService: FlagService;
  username: string;
  countryCode: string;
  country: string;

  constructor(authService: AuthService, flagService: FlagService) {
    this.authService = authService;
    this.flagService = flagService;
    this.username = "";
    this.countryCode = "";
    this.country = "";
  }

  showLogin(): boolean {
    return !this.authService.isAuth();
  }

  showUsername(): boolean {
    let showLogin = this.showLogin();

    if (!showLogin) {
      this.username = this.authService.auth.username;
      this.countryCode = this.authService.auth.country;
      this.country = this.flagService.flags()[this.countryCode];
    }

    return !showLogin;
  }
}
