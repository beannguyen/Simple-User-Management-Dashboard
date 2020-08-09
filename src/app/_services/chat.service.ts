import { Injectable } from "@angular/core";
import { ChatMessage } from "../_models/chat-message.model";
import { AuthService } from "../_services/auth.service";
import { TokenStorageService } from "./token-storage.service";
import { User } from "../_models/user.model";

@Injectable()
export class ChatService {
  user: User = this.getUser();
  users: Array<User> = [
    this.token.getUser(),
    {
      username: "Vinh Phuc",
      location: "Helsinki, Finland",
      email: "phuc@ynwa.com",
      company: "Swift Responsible Efficient Solution",
      website: "thvphuc246.github.io",
      birthday: "30.04.1975",
      image: "../assets/demo_profile.jpg",
      roles: "Android Developer"
    },
    {
      username: "Vinh Phuc",
      location: "Helsinki, Finland",
      email: "phuc@ynwa.com",
      company: "Swift Responsible Efficient Solution",
      website: "thvphuc246.github.io",
      birthday: "30.04.1975",
      image: "../assets/demo_profile.jpg",
      roles: "Android Developer"
    }
  ];
  chatMessage: ChatMessage;
  chatMessages: Array<ChatMessage> = [
    {
      email: "phuc@ynwa.com",
      userName: "Vinh Phuc",
      message: "Hello World!",
      timeSent: new Date("1968-11-16T00:00:00")
    },
    {
      email: "abcde@ynwa.com",
      userName: "Raiden Mei",
      message: "Hi Darling!",
      timeSent: new Date("1975-04-30T00:00:00")
    }
  ];

  count = 0;

  constructor(private token: TokenStorageService) {}

  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    let username = "Vinh Phuc";
    if (this.count % 2 != 0) username = "Raiden Mei";
    this.chatMessages.push({
      message: msg,
      timeSent: new Date(timestamp),
      userName: username,
      email: email
    });
    this.count++;
  }

  getUser() {
    return this.token.getUser();
  }

  getUsers() {
    return this.users;
  }

  getMessages() {
    return this.chatMessages;
  }

  getTimeStamp() {
    const now = new Date();
    const date =
      now.getUTCFullYear() +
      "/" +
      (now.getUTCMonth() + 1) +
      "/" +
      now.getUTCDate();
    const time =
      now.getUTCHours() + ":" + now.getUTCMinutes() + ":" + now.getUTCSeconds();
    return date + " " + time;
  }
}
