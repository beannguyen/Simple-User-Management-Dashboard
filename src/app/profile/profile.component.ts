import { Component, OnInit } from "@angular/core";
import { TokenStorageService } from "@app/_services/token-storage.service";
import { User } from "@app/_models/user.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  currentUser: User;

  constructor(private token: TokenStorageService) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }
}
