import { configureStore } from "@reduxjs/toolkit";
import { authMiddleware, reducer, reducerPath } from "./api/api";




export const store = configureStore({
    reducer:{
    [reducerPath]:reducer
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    middleware: (getDefaultMiddleware:any) =>
        getDefaultMiddleware().concat(authMiddleware),
    })
    


export type  RootState = ReturnType<typeof store.getState>;
export type  AppDispatch = typeof store.dispatch;


