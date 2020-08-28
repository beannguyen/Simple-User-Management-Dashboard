import { Component, OnInit } from "@angular/core";
import { ChatService } from "@app/_services/chat.service";

@Component({
  selector: "app-chat-form",
  templateUrl: "./chat-form.component.html",
  styleUrls: ["./chat-form.component.scss"]
})
export class ChatFormComponent implements OnInit {
  message: string;

  constructor(private chat: ChatService) {}

  ngOnInit(): void {
    //
  }

  send(): void {
    this.chat.sendMessage(this.message);
    this.message = "";
  }

  handleSubmit(): void {
    /* if (event.keyCode === 13) {
      this.send();
    } */
    this.send();
  }
}
