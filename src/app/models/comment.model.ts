import { Reply } from "./reply.model";
import { User } from "./user.model";

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: Reply[]; // replies can exist only inside a comment
}
