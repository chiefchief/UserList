import {combineReducers} from 'redux';
import posts from './posts/posts';

export const rootReducer = combineReducers({
  posts,
});

export type TAppState = ReturnType<typeof rootReducer>;

export {rootSaga} from './sagas';
