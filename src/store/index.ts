import {configureStore, Middleware} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
//import createDebugger from 'redux-flipper';
import rootReducer, {RootState} from './reducers';
// ...

const middleware: Middleware[] = [];

if (__DEV__) {
  //&& !process.env.JEST_WORKER_ID
  // middleware.push(createDebugger());
}

export const rootStore = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof rootStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useTypedSelector = createSelectorHook<RootState>();

// export default rootStore;
