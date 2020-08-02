import { Injectable } from "@angular/core";
import { User } from "../_models/user.model";

const TOKEN_KEY = "auth-token";
const USER_KEY = "auth-user";

@Injectable({
  providedIn: "root"
})
export class TokenStorageService {
  demoUser: User = {
    username: "Vinh Phuc",
    location: "Helsinki, Finland",
    email: "phuc@ynwa.com",
    company: "Swift Responsible Efficient Solution",
    website: "thvphuc246.github.io",
    birthday: "30.04.1975",
    image: "../assets/demo_profile.jpg",
    roles: "Android Developer"
  };

  constructor() {
    //
  }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const res = JSON.parse(sessionStorage.getItem(USER_KEY));
    if (res) return res;
    else return this.demoUser;
  }
}
