import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  submitted = false;

  loginForm = new FormGroup({
    phoneNumber: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  get myForm() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.myForm['phoneNumber'].value, this.myForm['password'].value).subscribe(
      {
        next: (data: any) => {
          this.tokenStorage.saveToken(data.headers.get('access_token'));
          this.tokenStorage.saveRefreshToken(data.headers.get('refresh_token'));
          this.tokenStorage.saveAdmin(data.body.adminProfile);
        },
        error: (e: any) => {
          console.log("Something not good !! :");
          console.log(e);
        },
        complete: () => {
          this.router.navigate(['/agent']);
        }
      }
    );
  }

}
