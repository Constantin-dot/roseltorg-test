import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { mainPageSlice } from "./reducers/mainPage-reducer";

const rootReducer = combineReducers({
    mainPage: mainPageSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
