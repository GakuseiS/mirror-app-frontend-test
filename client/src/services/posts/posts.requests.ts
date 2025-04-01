import { api } from '../baseApi';
import { TPostsParams, TPostsResult } from './posts.types';

export const getPosts = (params: TPostsParams): Promise<TPostsResult> => {
  return api.get('posts', { searchParams: params }).json();
};
