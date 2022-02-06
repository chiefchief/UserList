import {Action} from 'redux';

export enum PostsTypes {
  GET_POSTS = '[posts] GET_POSTS',
  SET_POSTS = '[posts] SET_POSTS',
  SET_ERROR = '[posts] SET_ERROR',
  DISABLE_LOADING = '[posts] DISABLE_LOADING',
  RESET_POSTS = '[posts] RESET_POSTS',
}

export type PostsResponse = {
  data: PostItem[];
  limit: number;
  page: number;
  total: number;
};

export type PostItem = {
  id: string;
  image: string;
  likes: number;
  owner: Owner;
  publishDate: string;
  tags: string[];
  text: string;
};

export type Owner = {
  firstName: string;
  id: string;
  lastName: string;
  picture: string;
  title: 'mr' | 'ms' | 'mrs' | 'miss' | 'dr' | '';
};

export type GetPostsAction = Action<PostsTypes> & {
  loadMore?: boolean;
};
