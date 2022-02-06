import {PostItem} from './posts/types';

export class InitialPosts {
  constructor(data: Partial<InitialPosts> = {}) {
    this.postsData = data.postsData ?? [];
    this.limit = data.limit ?? 10;
    this.loading = data.loading ?? false;
    this.moreLoading = data.moreLoading ?? false;
    this.total = data.total ?? 0;
    this.error = data.error ?? '';
  }
  postsData: PostItem[];
  limit: number;
  loading: boolean;
  moreLoading: boolean;
  total: number;
  error: string;
}
