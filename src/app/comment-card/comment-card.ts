import { Component, Input } from "@angular/core";

import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { Comment } from "../models/comment.model";

@Component({
  selector: "app-comment-card",
  imports: [CardModule, ButtonModule],
  templateUrl: "./comment-card.html",
  styleUrl: "./comment-card.scss",
})
export class CommentCard {
  @Input() comment!: Comment;
}
