import { Component, Input } from "@angular/core";

@Component({
  selector: "app-comment-card",
  imports: [],
  templateUrl: "./comment-card.html",
  styleUrl: "./comment-card.scss",
})
export class CommentCard {
  @Input() comment!: Comment;
}
