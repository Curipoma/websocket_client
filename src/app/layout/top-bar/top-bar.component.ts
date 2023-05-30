import {Component} from '@angular/core';
import {Location} from "@angular/common";
import {AuthService} from "@services/auth";
import {AuthHttpService} from "@services/auth/http/auth-http.service";
import {LogoutRequestModel} from "@models/auth/i-logout-request.model";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  constructor(
    public authService: AuthService,
    private authHttpService: AuthHttpService,
    private location: Location,
  ) {
  }

  backClicked() {
    this.location.back();
  }

  logout(): void {
    const logoutForm = new LogoutRequestModel();
    this.authHttpService.logout(logoutForm).subscribe(() => {
      //
    });
  }
}
