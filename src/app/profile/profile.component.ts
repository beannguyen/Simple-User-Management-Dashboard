import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  currentUser: any;

  demoUser: User = {
    username: 'Vinh Phuc',
    email: 'phuc@ynwa.com',
    age: 24,
    image: '../assets/demo_profile.jpg',
    roles: "Developer"
  };

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    // this.currentUser = this.token.getUser();
    this.currentUser = this.demoUser;
  }

}

export class User {
  username: string;
  email: string;
  age: number;
  image: string;
  roles: string;
  constructor() {}
}
