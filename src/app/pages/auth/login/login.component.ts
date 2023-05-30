import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Expressions} from "@shared/regular-expresions/expresions";
import {AuthHttpService} from "@services/auth/auth-http.service";
import {LoginRequestModel} from "@models/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup = this.newLoginForm;

  constructor(
    private formBuilder: FormBuilder,
    private authHttpService: AuthHttpService
  ) {
  }

  get newLoginForm(): FormGroup {
    return this.formBuilder.group({
      email: [null,
        [Validators.required, Validators.pattern(Expressions.email())],
      ],
      password: [null,
        [Validators.required, Validators.minLength(5),],
      ],
    });
  }

  onSubmit(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      const loginFormRequest = new LoginRequestModel(this.emailField.value, this.passwordField.value);
      this.authHttpService.login(loginFormRequest).subscribe((response) => {
        //
      });
    }
  }

  get emailField(): AbstractControl {
    return this.loginForm.controls['email'];
  }

  get passwordField(): AbstractControl {
    return this.loginForm.controls['password'];
  }
}
