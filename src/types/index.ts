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

export interface NewUser {
  username: string;
  nickname: string;
  password: string;
}

export interface User {
  username: string;
  password: string;
}
