import { Component, signal } from "@angular/core";

import { ButtonModule } from "primeng/button";
import { CommentCard } from "./comment-card/comment-card";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, ButtonModule, CommentCard],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  protected readonly title = signal("intractive-comments-section");
}
