import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  logout(): void {
    window.localStorage.clear();
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem('access_token');
    window.localStorage.setItem('access_token', token);

    const admin = this.getAdmin();
    if (admin.id) {
      this.saveAdmin({ ...admin, accessToken: token });
    }
  }

  public getToken(): string | null {
    return window.localStorage.getItem('access_token');
  }


  public saveRefreshToken(token: string): void {
    window.localStorage.removeItem('refresh_token');
    window.localStorage.setItem('refresh_token', token);
  }

  public getRefreshToken(): string | null {
    return window.localStorage.getItem('refresh_token');
  }

  public saveAdmin(admin: any): void {
    window.localStorage.removeItem('adminProfile');
    window.localStorage.setItem('adminProfile', JSON.stringify(admin));
  }

  public getAdmin(): any {
    const admin = window.localStorage.getItem('adminProfile');
    if (admin) {
      return JSON.parse(admin);
    }
    return {};
  }
}
