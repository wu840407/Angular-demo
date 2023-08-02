import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private socialAuthService: SocialAuthService) {
    this.IsAuthenticate = localStorage.getItem('IsAuthenticate') ? true : false;
    this.userName = localStorage.getItem("UserName");
    
    this.socialAuthService.authState.subscribe((user) => {      
      
      this.IsAuthenticate = (user != null);
      if (this.IsAuthenticate) {
        this.userName = this.IsAuthenticate ? user.firstName : "";
        this.Role = "Users";
        this.loginType = "gLogin";
        this.saveState();
      }
      // console.log(this.userName);
      // console.log(this.loginType);
      // console.log("authState", user);
    });

  }

  public IsAuthenticate: boolean = false;
  Role: string = "anonymous";
  public userName: String|any;
  loginType: string = "Normal";

  logout(): void {
    
    if (this.loginType === "gLogin") {
      this.socialAuthService.signOut();
    }

    this.IsAuthenticate = false;
    localStorage.removeItem('IsAuthenticate');
    localStorage.removeItem('Role');
    localStorage.removeItem('UserName');
  }
  gLogin() {
    this.loginType = "gLogin";
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID, );
  }

  login(userName: string, password: string): Observable<any> {
    this.userName = userName; this.loginType = "Normal"
    if (userName === 'admin' && password === 'admin') {
      this.IsAuthenticate = true; this.Role = "Admin";
    }
    else if (userName.length > 3 && password.length > 3) {
      this.IsAuthenticate = true; this.Role = "Users";
    } else {
      this.IsAuthenticate = false; this.Role = "anonymous";
      this.userName = "";
    }
    this.saveState();
    return of(this.IsAuthenticate).pipe(
      delay(1000),
      tap(val => {
        console.log(`IsAuth:${val} ; Role:${this.Role}`);
      })
    );
  }
  saveState() {
    localStorage.setItem('IsAuthenticate', this.IsAuthenticate.toString());
    localStorage.setItem('Role', this.Role);
    localStorage.setItem('UserName', this.userName );
  }
}
