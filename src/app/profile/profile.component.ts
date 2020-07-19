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
    location: 'Helsinki, Finland',
    email: 'phuc@ynwa.com',
    website: 'thvphuc246.github.io',
    birthday: '30.04.1975',
    image: '../assets/demo_profile.jpg',
    roles: "Android Developer"
  };

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    // this.currentUser = this.token.getUser();
    this.currentUser = this.demoUser;
  }

}

export class User {
  username: string;
  location: string;
  email: string;
  website: string;
  birthday: string;
  image: string;
  roles: string;
  constructor() {}
}
