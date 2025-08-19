import { Injectable, signal } from "@angular/core";

import { CommentsDataModel } from "./models/comment.model";
import data from "./data.json";

@Injectable({
  providedIn: "root",
})
export class Comments {
  commentList = signal<CommentsDataModel>(data);
}
