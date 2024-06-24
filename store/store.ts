"use client";
import formSlice from "./slices/form-slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    creatingEvent: formSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
