import { Component, OnInit, AfterViewInit, Input } from "@angular/core";
import { ChatMessage } from "../_models/chat-message.model";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.scss"]
})
export class MessageComponent implements OnInit, AfterViewInit {
  @Input() chatMessage: ChatMessage;
  userEmail: string;
  userName: string;
  messageContent: string;
  timeStamp: Date = new Date();
  container: HTMLElement;

  constructor() {
    //
  }

  ngOnInit(chatMessage = this.chatMessage): void {
    this.messageContent = chatMessage.message;
    this.timeStamp = chatMessage.timeSent;
    this.userEmail = chatMessage.email;
    this.userName = chatMessage.userName;
  }

  ngAfterViewInit(): void {
    this.container = document.getElementById("msgContainer");
    this.container.scrollTop = this.container.scrollHeight;
  }
}
