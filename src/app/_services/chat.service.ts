import { Injectable } from "@angular/core";
import { ChatMessage } from "@app/_models/chat-message.model";
import { TokenStorageService } from "./token-storage.service";
import { User } from "@app/_models/user.model";

@Injectable()
export class ChatService {
  user: User = this.getUser();
  users: Array<User> = this.getUsers();

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
    },
    {
      email: "phuc@ynwa.com",
      userName: "Vinh Phuc",
      message: "Can I tell you something?",
      timeSent: new Date("1968-11-16T00:00:00")
    },
    {
      email: "abcde@ynwa.com",
      userName: "Raiden Mei",
      message: "What is it?",
      timeSent: new Date("1968-11-16T00:00:00")
    },
    {
      email: "phuc@ynwa.com",
      userName: "Vinh Phuc",
      message: "I love you!",
      timeSent: new Date("1975-04-30T00:00:00")
    },
    {
      email: "abcde@ynwa.com",
      userName: "Raiden Mei",
      message: "...",
      timeSent: new Date("1975-04-30T00:00:00")
    },
    {
      email: "abcde@ynwa.com",
      userName: "Raiden Mei",
      message: "Erm... I mean, it's not that I like you or anything...",
      timeSent: new Date("1975-04-30T00:00:00")
    },
    {
      email: "abcde@ynwa.com",
      userName: "Raiden Mei",
      message: "B... Baka!",
      timeSent: new Date("1975-04-30T00:00:00")
    }
  ];

  count = 0;

  constructor(private token: TokenStorageService) {}

  sendMessage(msg: string): void {
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    let username = "Vinh Phuc";
    if (this.count % 2 !== 0) {
      username = "Raiden Mei";
    }
    this.chatMessages.push({
      email,
      userName: username,
      message: msg,
      timeSent: new Date(timestamp)
    });
    this.count++;
  }

  getUser(): User {
    return this.token.getUser();
  }

  getUsers(): Array<User> {
    return this.token.getUsers();
  }

  getMessages(): Array<ChatMessage> {
    return this.chatMessages;
  }

  getTimeStamp(): string {
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
