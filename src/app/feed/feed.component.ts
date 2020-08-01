import { Component, OnInit } from "@angular/core";
import { ChatService } from "../_services/chat.service";
import { ChatMessage } from "../_models/chat-message.model";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.scss"]
})
export class FeedComponent implements OnInit {
  feed: Array<ChatMessage>;

  constructor(private chat: ChatService) {}

  ngOnInit() {
    this.feed = this.chat.getMessages();
  }

  ngOnChanges() {
    this.feed = this.chat.getMessages();
  }
}
