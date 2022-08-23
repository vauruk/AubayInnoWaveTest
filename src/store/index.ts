import {configureStore, Middleware} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import rootReducer, {RootState} from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import createDebugger from 'redux-flipper';

const middleware: Middleware[] = [];

if (__DEV__) {
  //middleware.push(createDebugger());
}
const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['deviceForm'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const rootStore = configureStore({
  reducer: persistedReducer,
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof rootStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
