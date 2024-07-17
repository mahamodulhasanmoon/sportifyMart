import storage  from 'redux-persist/lib/storage';
import { configureStore } from "@reduxjs/toolkit";
import { authMiddleware, reducer, reducerPath } from "./api/api";
import { ProductReducer } from "./Features/products/productSlice.ts";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';


const persistConfig = {
    key:'cart',
    storage
}
const persistCartReducer = persistReducer(persistConfig,ProductReducer)

export const store = configureStore({
    reducer:{
    [reducerPath]:reducer,
    product: persistCartReducer
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    middleware: (getDefaultMiddleware:any) =>
        getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
          }).concat(authMiddleware),
    })
    
export const persistor = persistStore(store)

export type  RootState = ReturnType<typeof store.getState>;
export type  AppDispatch = typeof store.dispatch;


