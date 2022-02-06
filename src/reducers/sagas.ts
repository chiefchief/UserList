import {all} from 'redux-saga/effects';
import {watchPosts} from './posts/posts';

export function* rootSaga() {
  yield all([watchPosts()]);
}
