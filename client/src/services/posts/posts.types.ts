import { TPagination } from '../pagination/pagination.type';

export type TPost = {
  caption: string;
  id: string;
  comments: number;
  likes: number;
  date: string;
  permalink: string;
  userId: string;
  user: {
    id: string;
    postId: string;
    username: string;
  };
};

export type TPostsResult = TPost[];

export type TPostsParams = {
  _expand: 'user';
} & TPagination;
