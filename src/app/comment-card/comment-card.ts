import { Component, Input } from "@angular/core";

import { Comment } from "../models/comment.model";

@Component({
  selector: "app-comment-card",
  imports: [],
  templateUrl: "./comment-card.html",
  styleUrl: "./comment-card.scss",
})
export class CommentCard {
  @Input() comment!: Comment;
}
