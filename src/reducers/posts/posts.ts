import {call, put, select, takeLatest} from 'redux-saga/effects';
import {InitialPosts} from '../__proto__';
import {AnyAction} from 'redux';
import {httpService} from '@services';
import {Urls} from '@constants';
import {AxiosResponse} from 'axios';
import {TAppState} from '../index';
import {PostsTypes, PostItem, PostsResponse, GetPostsAction} from './types';

const initialstate = new InitialPosts();

export default (state = initialstate, action: AnyAction) => {
  switch (action.type) {
    case PostsTypes.GET_POSTS:
      return new InitialPosts({...state, loading: !action.loadMore, moreLoading: action.loadMore, error: ''});
    case PostsTypes.SET_POSTS:
      return new InitialPosts({...state, ...action});
    case PostsTypes.SET_ERROR:
      return new InitialPosts({...state, error: action.error});
    case PostsTypes.DISABLE_LOADING:
      return new InitialPosts({...state, loading: false, moreLoading: false});
    case PostsTypes.RESET_POSTS:
      return initialstate;
    default:
      return state;
  }
};

export const getPosts = (loadMore: boolean = false) => ({type: PostsTypes.GET_POSTS, loadMore});
export const setPosts = (postsData: PostItem[], limit: number) => ({postsData, limit, type: PostsTypes.SET_POSTS});
export const setError = (error: string) => ({error, type: PostsTypes.SET_ERROR});
export const disableLoadinng = () => ({type: PostsTypes.DISABLE_LOADING});
export const resetPosts = () => ({type: PostsTypes.RESET_POSTS});

export function* watchPosts() {
  yield takeLatest(PostsTypes.GET_POSTS, getPostsAsync);
}

export function* getPostsAsync(action: GetPostsAction) {
  const {limit}: InitialPosts = yield select((state: TAppState) => state.posts);
  try {
    const newLimit = action.loadMore ? limit + 10 : limit;
    const params = {limit: newLimit};
    const {data}: AxiosResponse<PostsResponse> = yield call(() => httpService.get<PostsResponse>(Urls.posts, {params}));
    console.log(data, 'DATTTA');

    yield put(setPosts(data.data, newLimit));
  } catch (e: any) {
    yield put(setError(e.message));
  } finally {
    yield put(disableLoadinng());
  }
}
