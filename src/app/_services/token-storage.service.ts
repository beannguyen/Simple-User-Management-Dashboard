import { Injectable } from "@angular/core";
import { User } from "@app/_models/user.model";

const TOKEN_KEY = "auth-token";
const USER_KEY = "auth-user";

@Injectable({
  providedIn: "root"
})
export class TokenStorageService {
  demoUsers: Array<User> = [
    {
      username: "Vinh Phuc",
      location: "Helsinki, Finland",
      email: "phuc@ynwa.com",
      company: "Swift Responsible Efficient Solution",
      website: "thvphuc246.github.io",
      birthday: "30.04.1975",
      image: "../assets/profile_picture.jpg",
      roles: "Android Developer"
    },
    {
      username: "Raiden Mei",
      location: "Helsinki, Finland",
      email: "phuc@ynwa.com",
      company: "Swift Responsible Efficient Solution",
      website: "thvphuc246.github.io",
      birthday: "30.04.1975",
      image: "../assets/mei.jpg",
      roles: "Android Developer"
    },
    {
      username: "Kiana Kaslana",
      location: "Helsinki, Finland",
      email: "phuc@ynwa.com",
      company: "Swift Responsible Efficient Solution",
      website: "thvphuc246.github.io",
      birthday: "30.04.1975",
      image: "../assets/kiana.jpg",
      roles: "Android Developer"
    },
    {
      username: "Bronya Zaychik",
      location: "Helsinki, Finland",
      email: "phuc@ynwa.com",
      company: "Swift Responsible Efficient Solution",
      website: "thvphuc246.github.io",
      birthday: "30.04.1975",
      image: "../assets/bronya.jpg",
      roles: "Android Developer"
    },
    {
      username: "Seele Vooleirei",
      location: "Helsinki, Finland",
      email: "phuc@ynwa.com",
      company: "Swift Responsible Efficient Solution",
      website: "thvphuc246.github.io",
      birthday: "30.04.1975",
      image: "../assets/seele.jpg",
      roles: "Android Developer"
    },
    {
      username: "Bianca Durandal",
      location: "Helsinki, Finland",
      email: "phuc@ynwa.com",
      company: "Swift Responsible Efficient Solution",
      website: "thvphuc246.github.io",
      birthday: "30.04.1975",
      image: "../assets/durandal.jpg",
      roles: "Android Developer"
    }
  ];

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

  public saveUser(user: User): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): User {
    const res = JSON.parse(sessionStorage.getItem(USER_KEY));
    if (res) {
      return res;
    } else {
      return this.demoUsers[0];
    }
  }

  public getUsers(): Array<User> {
    return this.demoUsers;
  }
}
