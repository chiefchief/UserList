import {PostItem} from '@reducers/posts/types';

export type FullPost = PostItem & {
  link: string;
};
