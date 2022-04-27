import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { usersApi } from './apis/users.api';
import { authApi } from './apis/auth.api';
import auth from './slices/auth.slice';
import { coinbaseApi } from './apis/conbase.api';


export const store = configureStore({
  //reducer: { [AUTHAPI_FEATURE_KEY]: authApiReducer },
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [coinbaseApi.reducerPath]: coinbaseApi.reducer,
    auth
  },
  // Additional middleware can be passed to this array
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware).concat(authApi.middleware).concat(coinbaseApi.middleware),
  devTools: process.env['NODE_ENV'] !== 'production',
  // Optional Redux store enhancers
  enhancers: [],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
