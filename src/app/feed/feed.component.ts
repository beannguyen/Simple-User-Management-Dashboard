import { Component, OnInit, OnChanges } from "@angular/core";
import { ChatService } from "../_services/chat.service";
import { ChatMessage } from "../_models/chat-message.model";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.scss"]
})
export class FeedComponent implements OnInit, OnChanges {
  feed: Array<ChatMessage>;

  constructor(private chat: ChatService) {}

  ngOnInit(): void {
    this.feed = this.chat.getMessages();
  }

  ngOnChanges(): void {
    this.feed = this.chat.getMessages();
  }
}
