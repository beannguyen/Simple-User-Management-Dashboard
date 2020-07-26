import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  currentUser: any;

  profileForm = new FormGroup({
    username: new FormControl(this.token.getUser().username),
    location: new FormControl(this.token.getUser().location),
    company: new FormControl(this.token.getUser().company),
    email: new FormControl(this.token.getUser().email),
    roles: new FormControl(this.token.getUser().roles),
    website: new FormControl(this.token.getUser().website),
    birthday: new FormControl(this.token.getUser().birthday),
    image: new FormControl(this.token.getUser().image)
  });

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  onSubmit() {
    console.log(this.profileForm.value);
    this.token.saveUser(this.profileForm.value);
    window.location.reload();
  }

}
