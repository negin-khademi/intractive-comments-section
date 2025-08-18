import { Comment } from "./comment.model";

export interface Reply extends Omit<Comment, "replies"> {
  replyingTo: string;
}
