import { Component, OnInit } from "@angular/core";
import { User } from "@app/_models/user.model";
import { ChatService } from "@app/_services/chat.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  users: Array<User>;

  constructor(chat: ChatService) {
    this.users = chat.getUsers();
  }

  ngOnInit(): void {
    //
  }
}
