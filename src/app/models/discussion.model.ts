import { Comment } from "./comment.model";
import { User } from "./user.model";

export interface Discussion {
  currentUser: User;
  comments: Comment[];
}
