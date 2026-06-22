export type NewsStatus = "pending" | "approved" | "rejected";

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  school: string;
  author: string;
  createdAt: string;
  coverImage?: string;
  status: NewsStatus;
}