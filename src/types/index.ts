export interface Card {
  id: string;
  content: string;
  nickname: string;
  createdAt: string;
  modifiedAt: string;
  likes: number;
}

export interface NewCard {
  content: string;
}
