import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private adminUrl: string;
  
  constructor(private http: HttpClient, private router: Router, private tokenStorage: TokenStorageService) {
    this.adminUrl = 'http://localhost:8080/api/';

  }
  
   login(phoneNumber: string, password: string): Observable<any> {
    return this.http.post<HttpResponse<any>>(
      this.adminUrl + 'login', {phoneNumber,
                                password },
     { observe: 'response' as 'response' }
     );
  }


  refreshToken(token: string, headers: HttpHeaders) {
    return this.http.post(this.adminUrl + 'auth/refresh', {
      refresh_token: token
    }, { headers: headers });
  }


  isLoggedIn() {
    return !(this.tokenStorage.getToken() === null);
  }



}
