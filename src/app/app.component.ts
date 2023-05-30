import {Component, OnInit} from '@angular/core';
import {AuthService} from "@services/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.authService.login$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigate(['core/dashboard']);
        return;
      }
      this.router.navigate(['auth/login']);
    });
  }
}
